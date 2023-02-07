"use strict";
(self["webpackChunkicode_run"] = self["webpackChunkicode_run"] || []).push([["chunk-echarts~d0997e78"],{

/***/ 87639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22060);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29526);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95067);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45482);
/* harmony import */ var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5661);
/* harmony import */ var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9610);
/* harmony import */ var _model_Model_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25118);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84646);
/* harmony import */ var _util_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33518);
/* harmony import */ var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13518);
/* harmony import */ var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79070);
/* harmony import */ var _coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48692);
/* harmony import */ var _label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94424);
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
*/var PI=Math.PI;/**
 * A final axis is translated and rotated from a "standard axis".
 * So opt.position and opt.rotation is required.
 *
 * A standard axis is and axis from [0, 0] to [0, axisExtent[1]],
 * for example: (0, 0) ------------> (0, 50)
 *
 * nameDirection or tickDirection or labelDirection is 1 means tick
 * or label is below the standard axis, whereas is -1 means above
 * the standard axis. labelOffset means offset between label and axis,
 * which is useful when 'onZero', where axisLabel is in the grid and
 * label in outside grid.
 *
 * Tips: like always,
 * positive rotation represents anticlockwise, and negative rotation
 * represents clockwise.
 * The direction of position coordinate is the same as the direction
 * of screen coordinate.
 *
 * Do not need to consider axis 'inverse', which is auto processed by
 * axis extent.
 */var AxisBuilder=/** @class */function(){function AxisBuilder(axisModel,opt){this.group=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();this.opt=opt;this.axisModel=axisModel;// Default value
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .defaults */ .ce)(opt,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:true,handleAutoShown:function handleAutoShown(){return true;}});// FIXME Not use a seperate text group?
var transformGroup=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({x:opt.position[0],y:opt.position[1],rotation:opt.rotation});// this.group.add(transformGroup);
// this._transformGroup = transformGroup;
transformGroup.updateTransform();this._transformGroup=transformGroup;}AxisBuilder.prototype.hasBuilder=function(name){return!!builders[name];};AxisBuilder.prototype.add=function(name){builders[name](this.opt,this.axisModel,this.group,this._transformGroup);};AxisBuilder.prototype.getGroup=function(){return this.group;};AxisBuilder.innerTextLayout=function(axisRotation,textRotation,direction){var rotationDiff=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .remRadian */ .wW)(textRotation-axisRotation);var textAlign;var textVerticalAlign;if((0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .isRadianAroundZero */ .mW)(rotationDiff)){// Label is parallel with axis line.
textVerticalAlign=direction>0?'top':'bottom';textAlign='center';}else if((0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .isRadianAroundZero */ .mW)(rotationDiff-PI)){// Label is inverse parallel with axis line.
textVerticalAlign=direction>0?'bottom':'top';textAlign='center';}else{textVerticalAlign='middle';if(rotationDiff>0&&rotationDiff<PI){textAlign=direction>0?'right':'left';}else{textAlign=direction>0?'left':'right';}}return{rotation:rotationDiff,textAlign:textAlign,textVerticalAlign:textVerticalAlign};};AxisBuilder.makeAxisEventDataBase=function(axisModel){var eventData={componentType:axisModel.mainType,componentIndex:axisModel.componentIndex};eventData[axisModel.mainType+'Index']=axisModel.componentIndex;return eventData;};AxisBuilder.isLabelSilent=function(axisModel){var tooltipOpt=axisModel.get('tooltip');return axisModel.get('silent')// Consider mouse cursor, add these restrictions.
||!(axisModel.get('triggerEvent')||tooltipOpt&&tooltipOpt.show);};return AxisBuilder;}();;var builders={axisLine:function axisLine(opt,axisModel,group,transformGroup){var shown=axisModel.get(['axisLine','show']);if(shown==='auto'&&opt.handleAutoShown){shown=opt.handleAutoShown('axisLine');}if(!shown){return;}var extent=axisModel.axis.getExtent();var matrix=transformGroup.transform;var pt1=[extent[0],0];var pt2=[extent[1],0];if(matrix){(0,zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_3__/* .applyTransform */ .Ne)(pt1,pt1,matrix);(0,zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_3__/* .applyTransform */ .Ne)(pt2,pt2,matrix);}var lineStyle=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)({lineCap:'round'},axisModel.getModel(['axisLine','lineStyle']).getLineStyle());var line=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z({// Id for animation
subPixelOptimize:true,shape:{x1:pt1[0],y1:pt1[1],x2:pt2[0],y2:pt2[1]},style:lineStyle,strokeContainThreshold:opt.strokeContainThreshold||5,silent:true,z2:1});line.anid='line';group.add(line);var arrows=axisModel.get(['axisLine','symbol']);if(arrows!=null){var arrowSize=axisModel.get(['axisLine','symbolSize']);if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(arrows)){// Use the same arrow for start and end point
arrows=[arrows,arrows];}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(arrowSize)||(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .hj)(arrowSize)){// Use the same size for width and height
arrowSize=[arrowSize,arrowSize];}var arrowOffset=(0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_5__/* .normalizeSymbolOffset */ .Cq)(axisModel.get(['axisLine','symbolOffset'])||0,arrowSize);var symbolWidth_1=arrowSize[0];var symbolHeight_1=arrowSize[1];(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)([{rotate:opt.rotation+Math.PI/2,offset:arrowOffset[0],r:0},{rotate:opt.rotation-Math.PI/2,offset:arrowOffset[1],r:Math.sqrt((pt1[0]-pt2[0])*(pt1[0]-pt2[0])+(pt1[1]-pt2[1])*(pt1[1]-pt2[1]))}],function(point,index){if(arrows[index]!=='none'&&arrows[index]!=null){var symbol=(0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_5__/* .createSymbol */ .th)(arrows[index],-symbolWidth_1/2,-symbolHeight_1/2,symbolWidth_1,symbolHeight_1,lineStyle.stroke,true);// Calculate arrow position with offset
var r=point.r+point.offset;symbol.attr({rotation:point.rotate,x:pt1[0]+r*Math.cos(opt.rotation),y:pt1[1]-r*Math.sin(opt.rotation),silent:true,z2:11});group.add(symbol);}});}},axisTickLabel:function axisTickLabel(opt,axisModel,group,transformGroup){var ticksEls=buildAxisMajorTicks(group,transformGroup,axisModel,opt);var labelEls=buildAxisLabel(group,transformGroup,axisModel,opt);fixMinMaxLabelShow(axisModel,labelEls,ticksEls);buildAxisMinorTicks(group,transformGroup,axisModel,opt.tickDirection);// This bit fixes the label overlap issue for the time chart.
// See https://github.com/apache/echarts/issues/14266 for more.
if(axisModel.get(['axisLabel','hideOverlap'])){var labelList=(0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .prepareLayoutList */ .VT)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .map */ .UI)(labelEls,function(label){return{label:label,priority:label.z2,defaultAttr:{ignore:label.ignore}};}));(0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .hideOverlap */ .yl)(labelList);}},axisName:function axisName(opt,axisModel,group,transformGroup){var name=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve */ .Jv)(opt.axisName,axisModel.get('name'));if(!name){return;}var nameLocation=axisModel.get('nameLocation');var nameDirection=opt.nameDirection;var textStyleModel=axisModel.getModel('nameTextStyle');var gap=axisModel.get('nameGap')||0;var extent=axisModel.axis.getExtent();var gapSignal=extent[0]>extent[1]?-1:1;var pos=[nameLocation==='start'?extent[0]-gapSignal*gap:nameLocation==='end'?extent[1]+gapSignal*gap:(extent[0]+extent[1])/2,// Reuse labelOffset.
isNameLocationCenter(nameLocation)?opt.labelOffset+nameDirection*gap:0];var labelLayout;var nameRotation=axisModel.get('nameRotate');if(nameRotation!=null){nameRotation=nameRotation*PI/180;// To radian.
}var axisNameAvailableWidth;if(isNameLocationCenter(nameLocation)){labelLayout=AxisBuilder.innerTextLayout(opt.rotation,nameRotation!=null?nameRotation:opt.rotation,// Adapt to axis.
nameDirection);}else{labelLayout=endTextLayout(opt.rotation,nameLocation,nameRotation||0,extent);axisNameAvailableWidth=opt.axisNameAvailableWidth;if(axisNameAvailableWidth!=null){axisNameAvailableWidth=Math.abs(axisNameAvailableWidth/Math.sin(labelLayout.rotation));!isFinite(axisNameAvailableWidth)&&(axisNameAvailableWidth=null);}}var textFont=textStyleModel.getFont();var truncateOpt=axisModel.get('nameTruncate',true)||{};var ellipsis=truncateOpt.ellipsis;var maxWidth=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve */ .Jv)(opt.nameTruncateMaxWidth,truncateOpt.maxWidth,axisNameAvailableWidth);var textEl=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP({x:pos[0],y:pos[1],rotation:labelLayout.rotation,silent:AxisBuilder.isLabelSilent(axisModel),style:(0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_8__/* .createTextStyle */ .Lr)(textStyleModel,{text:name,font:textFont,overflow:'truncate',width:maxWidth,ellipsis:ellipsis,fill:textStyleModel.getTextColor()||axisModel.get(['axisLine','lineStyle','color']),align:textStyleModel.get('align')||labelLayout.textAlign,verticalAlign:textStyleModel.get('verticalAlign')||labelLayout.textVerticalAlign}),z2:1});_util_graphic_js__WEBPACK_IMPORTED_MODULE_9__.setTooltipConfig({el:textEl,componentModel:axisModel,itemName:name});textEl.__fullText=name;// Id for animation
textEl.anid='name';if(axisModel.get('triggerEvent')){var eventData=AxisBuilder.makeAxisEventDataBase(axisModel);eventData.targetType='axisName';eventData.name=name;(0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_10__/* .getECData */ .A)(textEl).eventData=eventData;}// FIXME
transformGroup.add(textEl);textEl.updateTransform();group.add(textEl);textEl.decomposeTransform();}};function endTextLayout(rotation,textPosition,textRotate,extent){var rotationDiff=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .remRadian */ .wW)(textRotate-rotation);var textAlign;var textVerticalAlign;var inverse=extent[0]>extent[1];var onLeft=textPosition==='start'&&!inverse||textPosition!=='start'&&inverse;if((0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .isRadianAroundZero */ .mW)(rotationDiff-PI/2)){textVerticalAlign=onLeft?'bottom':'top';textAlign='center';}else if((0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .isRadianAroundZero */ .mW)(rotationDiff-PI*1.5)){textVerticalAlign=onLeft?'top':'bottom';textAlign='center';}else{textVerticalAlign='middle';if(rotationDiff<PI*1.5&&rotationDiff>PI/2){textAlign=onLeft?'left':'right';}else{textAlign=onLeft?'right':'left';}}return{rotation:rotationDiff,textAlign:textAlign,textVerticalAlign:textVerticalAlign};}function fixMinMaxLabelShow(axisModel,labelEls,tickEls){if((0,_coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_11__/* .shouldShowAllLabels */ .WY)(axisModel.axis)){return;}// If min or max are user set, we need to check
// If the tick on min(max) are overlap on their neighbour tick
// If they are overlapped, we need to hide the min(max) tick label
var showMinLabel=axisModel.get(['axisLabel','showMinLabel']);var showMaxLabel=axisModel.get(['axisLabel','showMaxLabel']);// FIXME
// Have not consider onBand yet, where tick els is more than label els.
labelEls=labelEls||[];tickEls=tickEls||[];var firstLabel=labelEls[0];var nextLabel=labelEls[1];var lastLabel=labelEls[labelEls.length-1];var prevLabel=labelEls[labelEls.length-2];var firstTick=tickEls[0];var nextTick=tickEls[1];var lastTick=tickEls[tickEls.length-1];var prevTick=tickEls[tickEls.length-2];if(showMinLabel===false){ignoreEl(firstLabel);ignoreEl(firstTick);}else if(isTwoLabelOverlapped(firstLabel,nextLabel)){if(showMinLabel){ignoreEl(nextLabel);ignoreEl(nextTick);}else{ignoreEl(firstLabel);ignoreEl(firstTick);}}if(showMaxLabel===false){ignoreEl(lastLabel);ignoreEl(lastTick);}else if(isTwoLabelOverlapped(prevLabel,lastLabel)){if(showMaxLabel){ignoreEl(prevLabel);ignoreEl(prevTick);}else{ignoreEl(lastLabel);ignoreEl(lastTick);}}}function ignoreEl(el){el&&(el.ignore=true);}function isTwoLabelOverlapped(current,next){// current and next has the same rotation.
var firstRect=current&&current.getBoundingRect().clone();var nextRect=next&&next.getBoundingRect().clone();if(!firstRect||!nextRect){return;}// When checking intersect of two rotated labels, we use mRotationBack
// to avoid that boundingRect is enlarge when using `boundingRect.applyTransform`.
var mRotationBack=zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_12__/* .identity */ .yR([]);zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_12__/* .rotate */ .U1(mRotationBack,mRotationBack,-current.rotation);firstRect.applyTransform(zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_12__/* .mul */ .dC([],mRotationBack,current.getLocalTransform()));nextRect.applyTransform(zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_12__/* .mul */ .dC([],mRotationBack,next.getLocalTransform()));return firstRect.intersect(nextRect);}function isNameLocationCenter(nameLocation){return nameLocation==='middle'||nameLocation==='center';}function createTicks(ticksCoords,tickTransform,tickEndCoord,tickLineStyle,anidPrefix){var tickEls=[];var pt1=[];var pt2=[];for(var i=0;i<ticksCoords.length;i++){var tickCoord=ticksCoords[i].coord;pt1[0]=tickCoord;pt1[1]=0;pt2[0]=tickCoord;pt2[1]=tickEndCoord;if(tickTransform){(0,zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_3__/* .applyTransform */ .Ne)(pt1,pt1,tickTransform);(0,zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_3__/* .applyTransform */ .Ne)(pt2,pt2,tickTransform);}// Tick line, Not use group transform to have better line draw
var tickEl=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z({subPixelOptimize:true,shape:{x1:pt1[0],y1:pt1[1],x2:pt2[0],y2:pt2[1]},style:tickLineStyle,z2:2,autoBatch:true,silent:true});tickEl.anid=anidPrefix+'_'+ticksCoords[i].tickValue;tickEls.push(tickEl);}return tickEls;}function buildAxisMajorTicks(group,transformGroup,axisModel,opt){var axis=axisModel.axis;var tickModel=axisModel.getModel('axisTick');var shown=tickModel.get('show');if(shown==='auto'&&opt.handleAutoShown){shown=opt.handleAutoShown('axisTick');}if(!shown||axis.scale.isBlank()){return;}var lineStyleModel=tickModel.getModel('lineStyle');var tickEndCoord=opt.tickDirection*tickModel.get('length');var ticksCoords=axis.getTicksCoords();var ticksEls=createTicks(ticksCoords,transformGroup.transform,tickEndCoord,(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .defaults */ .ce)(lineStyleModel.getLineStyle(),{stroke:axisModel.get(['axisLine','lineStyle','color'])}),'ticks');for(var i=0;i<ticksEls.length;i++){group.add(ticksEls[i]);}return ticksEls;}function buildAxisMinorTicks(group,transformGroup,axisModel,tickDirection){var axis=axisModel.axis;var minorTickModel=axisModel.getModel('minorTick');if(!minorTickModel.get('show')||axis.scale.isBlank()){return;}var minorTicksCoords=axis.getMinorTicksCoords();if(!minorTicksCoords.length){return;}var lineStyleModel=minorTickModel.getModel('lineStyle');var tickEndCoord=tickDirection*minorTickModel.get('length');var minorTickLineStyle=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .defaults */ .ce)(lineStyleModel.getLineStyle(),(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .defaults */ .ce)(axisModel.getModel('axisTick').getLineStyle(),{stroke:axisModel.get(['axisLine','lineStyle','color'])}));for(var i=0;i<minorTicksCoords.length;i++){var minorTicksEls=createTicks(minorTicksCoords[i],transformGroup.transform,tickEndCoord,minorTickLineStyle,'minorticks_'+i);for(var k=0;k<minorTicksEls.length;k++){group.add(minorTicksEls[k]);}}}function buildAxisLabel(group,transformGroup,axisModel,opt){var axis=axisModel.axis;var show=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve */ .Jv)(opt.axisLabelShow,axisModel.get(['axisLabel','show']));if(!show||axis.scale.isBlank()){return;}var labelModel=axisModel.getModel('axisLabel');var labelMargin=labelModel.get('margin');var labels=axis.getViewLabels();// Special label rotate.
var labelRotation=((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve */ .Jv)(opt.labelRotate,labelModel.get('rotate'))||0)*PI/180;var labelLayout=AxisBuilder.innerTextLayout(opt.rotation,labelRotation,opt.labelDirection);var rawCategoryData=axisModel.getCategories&&axisModel.getCategories(true);var labelEls=[];var silent=AxisBuilder.isLabelSilent(axisModel);var triggerEvent=axisModel.get('triggerEvent');(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(labels,function(labelItem,index){var tickValue=axis.scale.type==='ordinal'?axis.scale.getRawOrdinalNumber(labelItem.tickValue):labelItem.tickValue;var formattedLabel=labelItem.formattedLabel;var rawLabel=labelItem.rawLabel;var itemLabelModel=labelModel;if(rawCategoryData&&rawCategoryData[tickValue]){var rawCategoryItem=rawCategoryData[tickValue];if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(rawCategoryItem)&&rawCategoryItem.textStyle){itemLabelModel=new _model_Model_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z(rawCategoryItem.textStyle,labelModel,axisModel.ecModel);}}var textColor=itemLabelModel.getTextColor()||axisModel.get(['axisLine','lineStyle','color']);var tickCoord=axis.dataToCoord(tickValue);var textEl=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP({x:tickCoord,y:opt.labelOffset+opt.labelDirection*labelMargin,rotation:labelLayout.rotation,silent:silent,z2:10+(labelItem.level||0),style:(0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_8__/* .createTextStyle */ .Lr)(itemLabelModel,{text:formattedLabel,align:itemLabelModel.getShallow('align',true)||labelLayout.textAlign,verticalAlign:itemLabelModel.getShallow('verticalAlign',true)||itemLabelModel.getShallow('baseline',true)||labelLayout.textVerticalAlign,fill:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .mf)(textColor)?textColor(// (1) In category axis with data zoom, tick is not the original
// index of axis.data. So tick should not be exposed to user
// in category axis.
// (2) Compatible with previous version, which always use formatted label as
// input. But in interval scale the formatted label is like '223,445', which
// maked user repalce ','. So we modify it to return original val but remain
// it as 'string' to avoid error in replacing.
axis.type==='category'?rawLabel:axis.type==='value'?tickValue+'':tickValue,index):textColor})});textEl.anid='label_'+tickValue;// Pack data for mouse event
if(triggerEvent){var eventData=AxisBuilder.makeAxisEventDataBase(axisModel);eventData.targetType='axisLabel';eventData.value=rawLabel;eventData.tickIndex=index;if(axis.type==='category'){eventData.dataIndex=tickValue;}(0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_10__/* .getECData */ .A)(textEl).eventData=eventData;}// FIXME
transformGroup.add(textEl);textEl.updateTransform();labelEls.push(textEl);group.add(textEl);textEl.decomposeTransform();});return labelEls;}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxisBuilder);

/***/ }),

/***/ 91646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88161);
/* harmony import */ var _axisPointer_modelHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76665);
/* harmony import */ var _view_Component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74874);
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
*/var axisPointerClazz={};/**
 * Base class of AxisView.
 */var AxisView=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(AxisView,_super);function AxisView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=AxisView.type;return _this;}/**
   * @override
   */AxisView.prototype.render=function(axisModel,ecModel,api,payload){// FIXME
// This process should proformed after coordinate systems updated
// (axis scale updated), and should be performed each time update.
// So put it here temporarily, although it is not appropriate to
// put a model-writing procedure in `view`.
this.axisPointerClass&&_axisPointer_modelHelper_js__WEBPACK_IMPORTED_MODULE_1__/* .fixValue */ .iG(axisModel);_super.prototype.render.apply(this,arguments);this._doUpdateAxisPointerClass(axisModel,api,true);};/**
   * Action handler.
   */AxisView.prototype.updateAxisPointer=function(axisModel,ecModel,api,payload){this._doUpdateAxisPointerClass(axisModel,api,false);};/**
   * @override
   */AxisView.prototype.remove=function(ecModel,api){var axisPointer=this._axisPointer;axisPointer&&axisPointer.remove(api);};/**
   * @override
   */AxisView.prototype.dispose=function(ecModel,api){this._disposeAxisPointer(api);_super.prototype.dispose.apply(this,arguments);};AxisView.prototype._doUpdateAxisPointerClass=function(axisModel,api,forceRender){var Clazz=AxisView.getAxisPointerClass(this.axisPointerClass);if(!Clazz){return;}var axisPointerModel=_axisPointer_modelHelper_js__WEBPACK_IMPORTED_MODULE_1__/* .getAxisPointerModel */ .np(axisModel);axisPointerModel?(this._axisPointer||(this._axisPointer=new Clazz())).render(axisModel,axisPointerModel,api,forceRender):this._disposeAxisPointer(api);};AxisView.prototype._disposeAxisPointer=function(api){this._axisPointer&&this._axisPointer.dispose(api);this._axisPointer=null;};AxisView.registerAxisPointerClass=function(type,clazz){if(false){}axisPointerClazz[type]=clazz;};;AxisView.getAxisPointerClass=function(type){return type&&axisPointerClazz[type];};;AxisView.type='axis';return AxisView;}(_view_Component_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxisView);

/***/ }),

/***/ 57686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ findPointFromSeries)
/* harmony export */ });
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
*//**
 * @param finder contains {seriesIndex, dataIndex, dataIndexInside}
 * @param ecModel
 * @return  {point: [x, y], el: ...} point Will not be null.
 */function findPointFromSeries(finder,ecModel){var point=[];var seriesIndex=finder.seriesIndex;var seriesModel;if(seriesIndex==null||!(seriesModel=ecModel.getSeriesByIndex(seriesIndex))){return{point:[]};}var data=seriesModel.getData();var dataIndex=_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .queryDataIndex */ .gO(data,finder);if(dataIndex==null||dataIndex<0||zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ(dataIndex)){return{point:[]};}var el=data.getItemGraphicEl(dataIndex);var coordSys=seriesModel.coordinateSystem;if(seriesModel.getTooltipPosition){point=seriesModel.getTooltipPosition(dataIndex)||[];}else if(coordSys&&coordSys.dataToPoint){if(finder.isStacked){var baseAxis=coordSys.getBaseAxis();var valueAxis=coordSys.getOtherAxis(baseAxis);var valueAxisDim=valueAxis.dim;var baseAxisDim=baseAxis.dim;var baseDataOffset=valueAxisDim==='x'||valueAxisDim==='radius'?1:0;var baseDim=data.mapDimension(baseAxisDim);var stackedData=[];stackedData[baseDataOffset]=data.get(baseDim,dataIndex);stackedData[1-baseDataOffset]=data.get(data.getCalculationInfo('stackResultDimension'),dataIndex);point=coordSys.dataToPoint(stackedData)||[];}else{point=coordSys.dataToPoint(data.getValues(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .map */ .UI(coordSys.dimensions,function(dim){return data.mapDimension(dim);}),dataIndex))||[];}}else if(el){// Use graphic bounding rect
var rect=el.getBoundingRect().clone();rect.applyTransform(el.transform);point=[rect.x+rect.width/2,rect.y+rect.height/2];}return{point:point,el:el};}

/***/ }),

/***/ 74226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ unregister),
/* harmony export */   "z": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9959);
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
*/var inner=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var each=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6;/**
 * @param {string} key
 * @param {module:echarts/ExtensionAPI} api
 * @param {Function} handler
 *      param: {string} currTrigger
 *      param: {Array.<number>} point
 */function register(key,api,handler){if(zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].node */ .Z.node){return;}var zr=api.getZr();inner(zr).records||(inner(zr).records={});initGlobalListeners(zr,api);var record=inner(zr).records[key]||(inner(zr).records[key]={});record.handler=handler;}function initGlobalListeners(zr,api){if(inner(zr).initialized){return;}inner(zr).initialized=true;useHandler('click',zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .curry */ .WA(doEnter,'click'));useHandler('mousemove',zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .curry */ .WA(doEnter,'mousemove'));// useHandler('mouseout', onLeave);
useHandler('globalout',onLeave);function useHandler(eventType,cb){zr.on(eventType,function(e){var dis=makeDispatchAction(api);each(inner(zr).records,function(record){record&&cb(record,e,dis.dispatchAction);});dispatchTooltipFinally(dis.pendings,api);});}}function dispatchTooltipFinally(pendings,api){var showLen=pendings.showTip.length;var hideLen=pendings.hideTip.length;var actuallyPayload;if(showLen){actuallyPayload=pendings.showTip[showLen-1];}else if(hideLen){actuallyPayload=pendings.hideTip[hideLen-1];}if(actuallyPayload){actuallyPayload.dispatchAction=null;api.dispatchAction(actuallyPayload);}}function onLeave(record,e,dispatchAction){record.handler('leave',null,dispatchAction);}function doEnter(currTrigger,record,e,dispatchAction){record.handler(currTrigger,e,dispatchAction);}function makeDispatchAction(api){var pendings={showTip:[],hideTip:[]};// FIXME
// better approach?
// 'showTip' and 'hideTip' can be triggered by axisPointer and tooltip,
// which may be conflict, (axisPointer call showTip but tooltip call hideTip);
// So we have to add "final stage" to merge those dispatched actions.
var dispatchAction=function dispatchAction(payload){var pendingList=pendings[payload.type];if(pendingList){pendingList.push(payload);}else{payload.dispatchAction=dispatchAction;api.dispatchAction(payload);}};return{dispatchAction:dispatchAction,pendings:pendings};}function unregister(key,api){if(zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].node */ .Z.node){return;}var zr=api.getZr();var record=(inner(zr).records||{})[key];if(record){inner(zr).records[key]=null;}}

/***/ }),

/***/ 69699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ install)
});

// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axis/AxisView.js
var AxisView = __webpack_require__(91646);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(45482);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/modelHelper.js
var modelHelper = __webpack_require__(76665);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(89071);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(57024);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js
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
*/var inner=(0,model/* makeInner */.Yf)();var clone=util/* clone */.d9;var bind=util/* bind */.ak;/**
 * Base axis pointer class in 2D.
 */var BaseAxisPointer=/** @class */function(){function BaseAxisPointer(){this._dragging=false;/**
     * In px, arbitrary value. Do not set too small,
     * no animation is ok for most cases.
     */this.animationThreshold=15;}/**
   * @implement
   */BaseAxisPointer.prototype.render=function(axisModel,axisPointerModel,api,forceRender){var value=axisPointerModel.get('value');var status=axisPointerModel.get('status');// Bind them to `this`, not in closure, otherwise they will not
// be replaced when user calling setOption in not merge mode.
this._axisModel=axisModel;this._axisPointerModel=axisPointerModel;this._api=api;// Optimize: `render` will be called repeatly during mouse move.
// So it is power consuming if performing `render` each time,
// especially on mobile device.
if(!forceRender&&this._lastValue===value&&this._lastStatus===status){return;}this._lastValue=value;this._lastStatus=status;var group=this._group;var handle=this._handle;if(!status||status==='hide'){// Do not clear here, for animation better.
group&&group.hide();handle&&handle.hide();return;}group&&group.show();handle&&handle.show();// Otherwise status is 'show'
var elOption={};this.makeElOption(elOption,value,axisModel,axisPointerModel,api);// Enable change axis pointer type.
var graphicKey=elOption.graphicKey;if(graphicKey!==this._lastGraphicKey){this.clear(api);}this._lastGraphicKey=graphicKey;var moveAnimation=this._moveAnimation=this.determineAnimation(axisModel,axisPointerModel);if(!group){group=this._group=new Group/* default */.Z();this.createPointerEl(group,elOption,axisModel,axisPointerModel);this.createLabelEl(group,elOption,axisModel,axisPointerModel);api.getZr().add(group);}else{var doUpdateProps=util/* curry */.WA(updateProps,axisPointerModel,moveAnimation);this.updatePointerEl(group,elOption,doUpdateProps);this.updateLabelEl(group,elOption,doUpdateProps,axisPointerModel);}updateMandatoryProps(group,axisPointerModel,true);this._renderHandle(value);};/**
   * @implement
   */BaseAxisPointer.prototype.remove=function(api){this.clear(api);};/**
   * @implement
   */BaseAxisPointer.prototype.dispose=function(api){this.clear(api);};/**
   * @protected
   */BaseAxisPointer.prototype.determineAnimation=function(axisModel,axisPointerModel){var animation=axisPointerModel.get('animation');var axis=axisModel.axis;var isCategoryAxis=axis.type==='category';var useSnap=axisPointerModel.get('snap');// Value axis without snap always do not snap.
if(!useSnap&&!isCategoryAxis){return false;}if(animation==='auto'||animation==null){var animationThreshold=this.animationThreshold;if(isCategoryAxis&&axis.getBandWidth()>animationThreshold){return true;}// It is important to auto animation when snap used. Consider if there is
// a dataZoom, animation will be disabled when too many points exist, while
// it will be enabled for better visual effect when little points exist.
if(useSnap){var seriesDataCount=modelHelper/* getAxisInfo */.r(axisModel).seriesDataCount;var axisExtent=axis.getExtent();// Approximate band width
return Math.abs(axisExtent[0]-axisExtent[1])/seriesDataCount>animationThreshold;}return false;}return animation===true;};/**
   * add {pointer, label, graphicKey} to elOption
   * @protected
   */BaseAxisPointer.prototype.makeElOption=function(elOption,value,axisModel,axisPointerModel,api){// Shoule be implemenented by sub-class.
};/**
   * @protected
   */BaseAxisPointer.prototype.createPointerEl=function(group,elOption,axisModel,axisPointerModel){var pointerOption=elOption.pointer;if(pointerOption){var pointerEl=inner(group).pointerEl=new graphic[pointerOption.type](clone(elOption.pointer));group.add(pointerEl);}};/**
   * @protected
   */BaseAxisPointer.prototype.createLabelEl=function(group,elOption,axisModel,axisPointerModel){if(elOption.label){var labelEl=inner(group).labelEl=new Text/* default */.ZP(clone(elOption.label));group.add(labelEl);updateLabelShowHide(labelEl,axisPointerModel);}};/**
   * @protected
   */BaseAxisPointer.prototype.updatePointerEl=function(group,elOption,updateProps){var pointerEl=inner(group).pointerEl;if(pointerEl&&elOption.pointer){pointerEl.setStyle(elOption.pointer.style);updateProps(pointerEl,{shape:elOption.pointer.shape});}};/**
   * @protected
   */BaseAxisPointer.prototype.updateLabelEl=function(group,elOption,updateProps,axisPointerModel){var labelEl=inner(group).labelEl;if(labelEl){labelEl.setStyle(elOption.label.style);updateProps(labelEl,{// Consider text length change in vertical axis, animation should
// be used on shape, otherwise the effect will be weird.
// TODOTODO
// shape: elOption.label.shape,
x:elOption.label.x,y:elOption.label.y});updateLabelShowHide(labelEl,axisPointerModel);}};/**
   * @private
   */BaseAxisPointer.prototype._renderHandle=function(value){if(this._dragging||!this.updateHandleTransform){return;}var axisPointerModel=this._axisPointerModel;var zr=this._api.getZr();var handle=this._handle;var handleModel=axisPointerModel.getModel('handle');var status=axisPointerModel.get('status');if(!handleModel.get('show')||!status||status==='hide'){handle&&zr.remove(handle);this._handle=null;return;}var isInit;if(!this._handle){isInit=true;handle=this._handle=graphic.createIcon(handleModel.get('icon'),{cursor:'move',draggable:true,onmousemove:function onmousemove(e){// Fot mobile devicem, prevent screen slider on the button.
core_event/* stop */.sT(e.event);},onmousedown:bind(this._onHandleDragMove,this,0,0),drift:bind(this._onHandleDragMove,this),ondragend:bind(this._onHandleDragEnd,this)});zr.add(handle);}updateMandatoryProps(handle,axisPointerModel,false);// update style
handle.setStyle(handleModel.getItemStyle(null,['color','borderColor','borderWidth','opacity','shadowColor','shadowBlur','shadowOffsetX','shadowOffsetY']));// update position
var handleSize=handleModel.get('size');if(!util/* isArray */.kJ(handleSize)){handleSize=[handleSize,handleSize];}handle.scaleX=handleSize[0]/2;handle.scaleY=handleSize[1]/2;throttle/* createOrUpdate */.T9(this,'_doDispatchAxisPointer',handleModel.get('throttle')||0,'fixRate');this._moveHandleToValue(value,isInit);};BaseAxisPointer.prototype._moveHandleToValue=function(value,isInit){updateProps(this._axisPointerModel,!isInit&&this._moveAnimation,this._handle,getHandleTransProps(this.getHandleTransform(value,this._axisModel,this._axisPointerModel)));};BaseAxisPointer.prototype._onHandleDragMove=function(dx,dy){var handle=this._handle;if(!handle){return;}this._dragging=true;// Persistent for throttle.
var trans=this.updateHandleTransform(getHandleTransProps(handle),[dx,dy],this._axisModel,this._axisPointerModel);this._payloadInfo=trans;handle.stopAnimation();handle.attr(getHandleTransProps(trans));inner(handle).lastProp=null;this._doDispatchAxisPointer();};/**
   * Throttled method.
   */BaseAxisPointer.prototype._doDispatchAxisPointer=function(){var handle=this._handle;if(!handle){return;}var payloadInfo=this._payloadInfo;var axisModel=this._axisModel;this._api.dispatchAction({type:'updateAxisPointer',x:payloadInfo.cursorPoint[0],y:payloadInfo.cursorPoint[1],tooltipOption:payloadInfo.tooltipOption,axesInfo:[{axisDim:axisModel.axis.dim,axisIndex:axisModel.componentIndex}]});};BaseAxisPointer.prototype._onHandleDragEnd=function(){this._dragging=false;var handle=this._handle;if(!handle){return;}var value=this._axisPointerModel.get('value');// Consider snap or categroy axis, handle may be not consistent with
// axisPointer. So move handle to align the exact value position when
// drag ended.
this._moveHandleToValue(value);// For the effect: tooltip will be shown when finger holding on handle
// button, and will be hidden after finger left handle button.
this._api.dispatchAction({type:'hideTip'});};/**
   * @private
   */BaseAxisPointer.prototype.clear=function(api){this._lastValue=null;this._lastStatus=null;var zr=api.getZr();var group=this._group;var handle=this._handle;if(zr&&group){this._lastGraphicKey=null;group&&zr.remove(group);handle&&zr.remove(handle);this._group=null;this._handle=null;this._payloadInfo=null;}throttle/* clear */.ZH(this,'_doDispatchAxisPointer');};/**
   * @protected
   */BaseAxisPointer.prototype.doClear=function(){// Implemented by sub-class if necessary.
};BaseAxisPointer.prototype.buildLabel=function(xy,wh,xDimIndex){xDimIndex=xDimIndex||0;return{x:xy[xDimIndex],y:xy[1-xDimIndex],width:wh[xDimIndex],height:wh[1-xDimIndex]};};return BaseAxisPointer;}();function updateProps(animationModel,moveAnimation,el,props){// Animation optimize.
if(!propsEqual(inner(el).lastProp,props)){inner(el).lastProp=props;moveAnimation?basicTrasition/* updateProps */.D(el,props,animationModel):(el.stopAnimation(),el.attr(props));}}function propsEqual(lastProps,newProps){if(util/* isObject */.Kn(lastProps)&&util/* isObject */.Kn(newProps)){var equals_1=true;util/* each */.S6(newProps,function(item,key){equals_1=equals_1&&propsEqual(lastProps[key],item);});return!!equals_1;}else{return lastProps===newProps;}}function updateLabelShowHide(labelEl,axisPointerModel){labelEl[axisPointerModel.get(['label','show'])?'show':'hide']();}function getHandleTransProps(trans){return{x:trans.x||0,y:trans.y||0,rotation:trans.rotation||0};}function updateMandatoryProps(group,axisPointerModel,silent){var z=axisPointerModel.get('z');var zlevel=axisPointerModel.get('zlevel');group&&group.traverse(function(el){if(el.type!=='group'){z!=null&&(el.z=z);zlevel!=null&&(el.zlevel=zlevel);el.silent=silent;}});}/* harmony default export */ const axisPointer_BaseAxisPointer = (BaseAxisPointer);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/viewHelper.js
var viewHelper = __webpack_require__(46806);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js
var cartesianAxisHelper = __webpack_require__(6092);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js
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
*/var CartesianAxisPointer=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(CartesianAxisPointer,_super);function CartesianAxisPointer(){return _super!==null&&_super.apply(this,arguments)||this;}/**
   * @override
   */CartesianAxisPointer.prototype.makeElOption=function(elOption,value,axisModel,axisPointerModel,api){var axis=axisModel.axis;var grid=axis.grid;var axisPointerType=axisPointerModel.get('type');var otherExtent=getCartesian(grid,axis).getOtherAxis(axis).getGlobalExtent();var pixelValue=axis.toGlobalCoord(axis.dataToCoord(value,true));if(axisPointerType&&axisPointerType!=='none'){var elStyle=viewHelper/* buildElStyle */.fk(axisPointerModel);var pointerOption=pointerShapeBuilder[axisPointerType](axis,pixelValue,otherExtent);pointerOption.style=elStyle;elOption.graphicKey=pointerOption.type;elOption.pointer=pointerOption;}var layoutInfo=cartesianAxisHelper/* layout */.bK(grid.model,axisModel);viewHelper/* buildCartesianSingleLabelElOption */.gf(// @ts-ignore
value,elOption,layoutInfo,axisModel,axisPointerModel,api);};/**
   * @override
   */CartesianAxisPointer.prototype.getHandleTransform=function(value,axisModel,axisPointerModel){var layoutInfo=cartesianAxisHelper/* layout */.bK(axisModel.axis.grid.model,axisModel,{labelInside:false});// @ts-ignore
layoutInfo.labelMargin=axisPointerModel.get(['handle','margin']);var pos=viewHelper/* getTransformedPosition */.Zh(axisModel.axis,value,layoutInfo);return{x:pos[0],y:pos[1],rotation:layoutInfo.rotation+(layoutInfo.labelDirection<0?Math.PI:0)};};/**
   * @override
   */CartesianAxisPointer.prototype.updateHandleTransform=function(transform,delta,axisModel,axisPointerModel){var axis=axisModel.axis;var grid=axis.grid;var axisExtent=axis.getGlobalExtent(true);var otherExtent=getCartesian(grid,axis).getOtherAxis(axis).getGlobalExtent();var dimIndex=axis.dim==='x'?0:1;var currPosition=[transform.x,transform.y];currPosition[dimIndex]+=delta[dimIndex];currPosition[dimIndex]=Math.min(axisExtent[1],currPosition[dimIndex]);currPosition[dimIndex]=Math.max(axisExtent[0],currPosition[dimIndex]);var cursorOtherValue=(otherExtent[1]+otherExtent[0])/2;var cursorPoint=[cursorOtherValue,cursorOtherValue];cursorPoint[dimIndex]=currPosition[dimIndex];// Make tooltip do not overlap axisPointer and in the middle of the grid.
var tooltipOptions=[{verticalAlign:'middle'},{align:'center'}];return{x:currPosition[0],y:currPosition[1],rotation:transform.rotation,cursorPoint:cursorPoint,tooltipOption:tooltipOptions[dimIndex]};};return CartesianAxisPointer;}(axisPointer_BaseAxisPointer);function getCartesian(grid,axis){var opt={};opt[axis.dim+'AxisIndex']=axis.index;return grid.getCartesian(opt);}var pointerShapeBuilder={line:function line(axis,pixelValue,otherExtent){var targetShape=viewHelper/* makeLineShape */.BL([pixelValue,otherExtent[0]],[pixelValue,otherExtent[1]],getAxisDimIndex(axis));return{type:'Line',subPixelOptimize:true,shape:targetShape};},shadow:function shadow(axis,pixelValue,otherExtent){var bandWidth=Math.max(1,axis.getBandWidth());var span=otherExtent[1]-otherExtent[0];return{type:'Rect',shape:viewHelper/* makeRectShape */.uE([pixelValue-bandWidth/2,otherExtent[0]],[bandWidth,span],getAxisDimIndex(axis))};}};function getAxisDimIndex(axis){return axis.dim==='x'?0:1;}/* harmony default export */ const axisPointer_CartesianAxisPointer = (CartesianAxisPointer);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(15022);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js
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
*/var AxisPointerModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(AxisPointerModel,_super);function AxisPointerModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=AxisPointerModel.type;return _this;}AxisPointerModel.type='axisPointer';AxisPointerModel.defaultOption={// 'auto' means that show when triggered by tooltip or handle.
show:'auto',// zlevel: 0,
z:50,type:'line',// axispointer triggered by tootip determine snap automatically,
// see `modelHelper`.
snap:false,triggerTooltip:true,value:null,status:null,link:[],// Do not set 'auto' here, otherwise global animation: false
// will not effect at this axispointer.
animation:null,animationDurationUpdate:200,lineStyle:{color:'#B9BEC9',width:1,type:'dashed'},shadowStyle:{color:'rgba(210,219,238,0.2)'},label:{show:true,formatter:null,precision:'auto',margin:3,color:'#fff',padding:[5,7,5,7],backgroundColor:'auto',borderColor:null,borderWidth:0,borderRadius:3},handle:{show:false,// eslint-disable-next-line
icon:'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',size:45,// handle margin is from symbol center to axis, which is stable when circular move.
margin:50,// color: '#1b8bbd'
// color: '#2f4554'
color:'#333',shadowBlur:3,shadowColor:'#aaa',shadowOffsetX:0,shadowOffsetY:2,// For mobile performance
throttle:40}};return AxisPointerModel;}(Component/* default */.Z);/* harmony default export */ const axisPointer_AxisPointerModel = (AxisPointerModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/globalListener.js
var globalListener = __webpack_require__(74226);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(74874);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/AxisPointerView.js
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
*/var AxisPointerView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(AxisPointerView,_super);function AxisPointerView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=AxisPointerView.type;return _this;}AxisPointerView.prototype.render=function(globalAxisPointerModel,ecModel,api){var globalTooltipModel=ecModel.getComponent('tooltip');var triggerOn=globalAxisPointerModel.get('triggerOn')||globalTooltipModel&&globalTooltipModel.get('triggerOn')||'mousemove|click';// Register global listener in AxisPointerView to enable
// AxisPointerView to be independent to Tooltip.
globalListener/* register */.z('axisPointer',api,function(currTrigger,e,dispatchAction){// If 'none', it is not controlled by mouse totally.
if(triggerOn!=='none'&&(currTrigger==='leave'||triggerOn.indexOf(currTrigger)>=0)){dispatchAction({type:'updateAxisPointer',currTrigger:currTrigger,x:e&&e.offsetX,y:e&&e.offsetY});}});};AxisPointerView.prototype.remove=function(ecModel,api){globalListener/* unregister */.E('axisPointer',api);};AxisPointerView.prototype.dispose=function(ecModel,api){globalListener/* unregister */.E('axisPointer',api);};AxisPointerView.type='axisPointer';return AxisPointerView;}(view_Component/* default */.Z);/* harmony default export */ const axisPointer_AxisPointerView = (AxisPointerView);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js
var findPointFromSeries = __webpack_require__(57686);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/axisTrigger.js
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
*/var axisTrigger_inner=(0,model/* makeInner */.Yf)();/**
 * Basic logic: check all axis, if they do not demand show/highlight,
 * then hide/downplay them.
 *
 * @return content of event obj for echarts.connect.
 */function axisTrigger(payload,ecModel,api){var currTrigger=payload.currTrigger;var point=[payload.x,payload.y];var finder=payload;var dispatchAction=payload.dispatchAction||(0,util/* bind */.ak)(api.dispatchAction,api);var coordSysAxesInfo=ecModel.getComponent('axisPointer').coordSysAxesInfo;// Pending
// See #6121. But we are not able to reproduce it yet.
if(!coordSysAxesInfo){return;}if(illegalPoint(point)){// Used in the default behavior of `connection`: use the sample seriesIndex
// and dataIndex. And also used in the tooltipView trigger.
point=(0,findPointFromSeries/* default */.Z)({seriesIndex:finder.seriesIndex,// Do not use dataIndexInside from other ec instance.
// FIXME: auto detect it?
dataIndex:finder.dataIndex},ecModel).point;}var isIllegalPoint=illegalPoint(point);// Axis and value can be specified when calling dispatchAction({type: 'updateAxisPointer'}).
// Notice: In this case, it is difficult to get the `point` (which is necessary to show
// tooltip, so if point is not given, we just use the point found by sample seriesIndex
// and dataIndex.
var inputAxesInfo=finder.axesInfo;var axesInfo=coordSysAxesInfo.axesInfo;var shouldHide=currTrigger==='leave'||illegalPoint(point);var outputPayload={};var showValueMap={};var dataByCoordSys={list:[],map:{}};var updaters={showPointer:(0,util/* curry */.WA)(showPointer,showValueMap),showTooltip:(0,util/* curry */.WA)(showTooltip,dataByCoordSys)};// Process for triggered axes.
(0,util/* each */.S6)(coordSysAxesInfo.coordSysMap,function(coordSys,coordSysKey){// If a point given, it must be contained by the coordinate system.
var coordSysContainsPoint=isIllegalPoint||coordSys.containPoint(point);(0,util/* each */.S6)(coordSysAxesInfo.coordSysAxesInfo[coordSysKey],function(axisInfo,key){var axis=axisInfo.axis;var inputAxisInfo=findInputAxisInfo(inputAxesInfo,axisInfo);// If no inputAxesInfo, no axis is restricted.
if(!shouldHide&&coordSysContainsPoint&&(!inputAxesInfo||inputAxisInfo)){var val=inputAxisInfo&&inputAxisInfo.value;if(val==null&&!isIllegalPoint){val=axis.pointToData(point);}val!=null&&processOnAxis(axisInfo,val,updaters,false,outputPayload);}});});// Process for linked axes.
var linkTriggers={};(0,util/* each */.S6)(axesInfo,function(tarAxisInfo,tarKey){var linkGroup=tarAxisInfo.linkGroup;// If axis has been triggered in the previous stage, it should not be triggered by link.
if(linkGroup&&!showValueMap[tarKey]){(0,util/* each */.S6)(linkGroup.axesInfo,function(srcAxisInfo,srcKey){var srcValItem=showValueMap[srcKey];// If srcValItem exist, source axis is triggered, so link to target axis.
if(srcAxisInfo!==tarAxisInfo&&srcValItem){var val=srcValItem.value;linkGroup.mapper&&(val=tarAxisInfo.axis.scale.parse(linkGroup.mapper(val,makeMapperParam(srcAxisInfo),makeMapperParam(tarAxisInfo))));linkTriggers[tarAxisInfo.key]=val;}});}});(0,util/* each */.S6)(linkTriggers,function(val,tarKey){processOnAxis(axesInfo[tarKey],val,updaters,true,outputPayload);});updateModelActually(showValueMap,axesInfo,outputPayload);dispatchTooltipActually(dataByCoordSys,point,payload,dispatchAction);dispatchHighDownActually(axesInfo,dispatchAction,api);return outputPayload;}function processOnAxis(axisInfo,newValue,updaters,noSnap,outputFinder){var axis=axisInfo.axis;if(axis.scale.isBlank()||!axis.containData(newValue)){return;}if(!axisInfo.involveSeries){updaters.showPointer(axisInfo,newValue);return;}// Heavy calculation. So put it after axis.containData checking.
var payloadInfo=buildPayloadsBySeries(newValue,axisInfo);var payloadBatch=payloadInfo.payloadBatch;var snapToValue=payloadInfo.snapToValue;// Fill content of event obj for echarts.connect.
// By default use the first involved series data as a sample to connect.
if(payloadBatch[0]&&outputFinder.seriesIndex==null){(0,util/* extend */.l7)(outputFinder,payloadBatch[0]);}// If no linkSource input, this process is for collecting link
// target, where snap should not be accepted.
if(!noSnap&&axisInfo.snap){if(axis.containData(snapToValue)&&snapToValue!=null){newValue=snapToValue;}}updaters.showPointer(axisInfo,newValue,payloadBatch);// Tooltip should always be snapToValue, otherwise there will be
// incorrect "axis value ~ series value" mapping displayed in tooltip.
updaters.showTooltip(axisInfo,payloadInfo,snapToValue);}function buildPayloadsBySeries(value,axisInfo){var axis=axisInfo.axis;var dim=axis.dim;var snapToValue=value;var payloadBatch=[];var minDist=Number.MAX_VALUE;var minDiff=-1;(0,util/* each */.S6)(axisInfo.seriesModels,function(series,idx){var dataDim=series.getData().mapDimensionsAll(dim);var seriesNestestValue;var dataIndices;if(series.getAxisTooltipData){var result=series.getAxisTooltipData(dataDim,value,axis);dataIndices=result.dataIndices;seriesNestestValue=result.nestestValue;}else{dataIndices=series.getData().indicesOfNearest(dataDim[0],value,// Add a threshold to avoid find the wrong dataIndex
// when data length is not same.
// false,
axis.type==='category'?0.5:null);if(!dataIndices.length){return;}seriesNestestValue=series.getData().get(dataDim[0],dataIndices[0]);}if(seriesNestestValue==null||!isFinite(seriesNestestValue)){return;}var diff=value-seriesNestestValue;var dist=Math.abs(diff);// Consider category case
if(dist<=minDist){if(dist<minDist||diff>=0&&minDiff<0){minDist=dist;minDiff=diff;snapToValue=seriesNestestValue;payloadBatch.length=0;}(0,util/* each */.S6)(dataIndices,function(dataIndex){payloadBatch.push({seriesIndex:series.seriesIndex,dataIndexInside:dataIndex,dataIndex:series.getData().getRawIndex(dataIndex)});});}});return{payloadBatch:payloadBatch,snapToValue:snapToValue};}function showPointer(showValueMap,axisInfo,value,payloadBatch){showValueMap[axisInfo.key]={value:value,payloadBatch:payloadBatch};}function showTooltip(dataByCoordSys,axisInfo,payloadInfo,value){var payloadBatch=payloadInfo.payloadBatch;var axis=axisInfo.axis;var axisModel=axis.model;var axisPointerModel=axisInfo.axisPointerModel;// If no data, do not create anything in dataByCoordSys,
// whose length will be used to judge whether dispatch action.
if(!axisInfo.triggerTooltip||!payloadBatch.length){return;}var coordSysModel=axisInfo.coordSys.model;var coordSysKey=modelHelper/* makeKey */.zm(coordSysModel);var coordSysItem=dataByCoordSys.map[coordSysKey];if(!coordSysItem){coordSysItem=dataByCoordSys.map[coordSysKey]={coordSysId:coordSysModel.id,coordSysIndex:coordSysModel.componentIndex,coordSysType:coordSysModel.type,coordSysMainType:coordSysModel.mainType,dataByAxis:[]};dataByCoordSys.list.push(coordSysItem);}coordSysItem.dataByAxis.push({axisDim:axis.dim,axisIndex:axisModel.componentIndex,axisType:axisModel.type,axisId:axisModel.id,value:value,// Caustion: viewHelper.getValueLabel is actually on "view stage", which
// depends that all models have been updated. So it should not be performed
// here. Considering axisPointerModel used here is volatile, which is hard
// to be retrieve in TooltipView, we prepare parameters here.
valueLabelOpt:{precision:axisPointerModel.get(['label','precision']),formatter:axisPointerModel.get(['label','formatter'])},seriesDataIndices:payloadBatch.slice()});}function updateModelActually(showValueMap,axesInfo,outputPayload){var outputAxesInfo=outputPayload.axesInfo=[];// Basic logic: If no 'show' required, 'hide' this axisPointer.
(0,util/* each */.S6)(axesInfo,function(axisInfo,key){var option=axisInfo.axisPointerModel.option;var valItem=showValueMap[key];if(valItem){!axisInfo.useHandle&&(option.status='show');option.value=valItem.value;// For label formatter param and highlight.
option.seriesDataIndices=(valItem.payloadBatch||[]).slice();}// When always show (e.g., handle used), remain
// original value and status.
else{// If hide, value still need to be set, consider
// click legend to toggle axis blank.
!axisInfo.useHandle&&(option.status='hide');}// If status is 'hide', should be no info in payload.
option.status==='show'&&outputAxesInfo.push({axisDim:axisInfo.axis.dim,axisIndex:axisInfo.axis.model.componentIndex,value:option.value});});}function dispatchTooltipActually(dataByCoordSys,point,payload,dispatchAction){// Basic logic: If no showTip required, hideTip will be dispatched.
if(illegalPoint(point)||!dataByCoordSys.list.length){dispatchAction({type:'hideTip'});return;}// In most case only one axis (or event one series is used). It is
// convinient to fetch payload.seriesIndex and payload.dataIndex
// dirtectly. So put the first seriesIndex and dataIndex of the first
// axis on the payload.
var sampleItem=((dataByCoordSys.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{};dispatchAction({type:'showTip',escapeConnect:true,x:point[0],y:point[1],tooltipOption:payload.tooltipOption,position:payload.position,dataIndexInside:sampleItem.dataIndexInside,dataIndex:sampleItem.dataIndex,seriesIndex:sampleItem.seriesIndex,dataByCoordSys:dataByCoordSys.list});}function dispatchHighDownActually(axesInfo,dispatchAction,api){// FIXME
// highlight status modification shoule be a stage of main process?
// (Consider confilct (e.g., legend and axisPointer) and setOption)
var zr=api.getZr();var highDownKey='axisPointerLastHighlights';var lastHighlights=axisTrigger_inner(zr)[highDownKey]||{};var newHighlights=axisTrigger_inner(zr)[highDownKey]={};// Update highlight/downplay status according to axisPointer model.
// Build hash map and remove duplicate incidentally.
(0,util/* each */.S6)(axesInfo,function(axisInfo,key){var option=axisInfo.axisPointerModel.option;option.status==='show'&&(0,util/* each */.S6)(option.seriesDataIndices,function(batchItem){var key=batchItem.seriesIndex+' | '+batchItem.dataIndex;newHighlights[key]=batchItem;});});// Diff.
var toHighlight=[];var toDownplay=[];(0,util/* each */.S6)(lastHighlights,function(batchItem,key){!newHighlights[key]&&toDownplay.push(batchItem);});(0,util/* each */.S6)(newHighlights,function(batchItem,key){!lastHighlights[key]&&toHighlight.push(batchItem);});toDownplay.length&&api.dispatchAction({type:'downplay',escapeConnect:true,// Not blur others when highlight in axisPointer.
notBlur:true,batch:toDownplay});toHighlight.length&&api.dispatchAction({type:'highlight',escapeConnect:true,// Not blur others when highlight in axisPointer.
notBlur:true,batch:toHighlight});}function findInputAxisInfo(inputAxesInfo,axisInfo){for(var i=0;i<(inputAxesInfo||[]).length;i++){var inputAxisInfo=inputAxesInfo[i];if(axisInfo.axis.dim===inputAxisInfo.axisDim&&axisInfo.axis.model.componentIndex===inputAxisInfo.axisIndex){return inputAxisInfo;}}}function makeMapperParam(axisInfo){var axisModel=axisInfo.axis.model;var item={};var dim=item.axisDim=axisInfo.axis.dim;item.axisIndex=item[dim+'AxisIndex']=axisModel.componentIndex;item.axisName=item[dim+'AxisName']=axisModel.name;item.axisId=item[dim+'AxisId']=axisModel.id;return item;}function illegalPoint(point){return!point||point[0]==null||isNaN(point[0])||point[1]==null||isNaN(point[1]);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/install.js
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
*/function install(registers){// CartesianAxisPointer is not supposed to be required here. But consider
// echarts.simple.js and online build tooltip, which only require gridSimple,
// CartesianAxisPointer should be able to required somewhere.
AxisView/* default.registerAxisPointerClass */.Z.registerAxisPointerClass('CartesianAxisPointer',axisPointer_CartesianAxisPointer);registers.registerComponentModel(axisPointer_AxisPointerModel);registers.registerComponentView(axisPointer_AxisPointerView);registers.registerPreprocessor(function(option){// Always has a global axisPointerModel for default setting.
if(option){(!option.axisPointer||option.axisPointer.length===0)&&(option.axisPointer={});var link=option.axisPointer.link;// Normalize to array to avoid object mergin. But if link
// is not set, remain null/undefined, otherwise it will
// override existent link setting.
if(link&&!(0,util/* isArray */.kJ)(link)){option.axisPointer.link=[link];}}});// This process should proformed after coordinate systems created
// and series data processed. So put it on statistic processing stage.
registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC,function(ecModel,api){// Build axisPointerModel, mergin tooltip.axisPointer model for each axis.
// allAxesInfo should be updated when setOption performed.
ecModel.getComponent('axisPointer').coordSysAxesInfo=(0,modelHelper/* collect */.KM)(ecModel,api);});// Broadcast to all views.
registers.registerAction({type:'updateAxisPointer',event:'updateAxisPointer',update:':updateAxisPointer'},axisTrigger);}

/***/ }),

/***/ 76665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KM": () => (/* binding */ collect),
/* harmony export */   "iG": () => (/* binding */ fixValue),
/* harmony export */   "np": () => (/* binding */ getAxisPointerModel),
/* harmony export */   "r": () => (/* binding */ getAxisInfo),
/* harmony export */   "zm": () => (/* binding */ makeKey)
/* harmony export */ });
/* harmony import */ var _model_Model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25118);
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
*/// Build axisPointerModel, mergin tooltip.axisPointer model for each axis.
// allAxesInfo should be updated when setOption performed.
function collect(ecModel,api){var result={/**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */axesInfo:{},seriesInvolved:false,/**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */coordSysAxesInfo:{},coordSysMap:{}};collectAxesInfo(result,ecModel,api);// Check seriesInvolved for performance, in case too many series in some chart.
result.seriesInvolved&&collectSeriesInfo(result,ecModel);return result;}function collectAxesInfo(result,ecModel,api){var globalTooltipModel=ecModel.getComponent('tooltip');var globalAxisPointerModel=ecModel.getComponent('axisPointer');// links can only be set on global.
var linksOption=globalAxisPointerModel.get('link',true)||[];var linkGroups=[];// Collect axes info.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(api.getCoordinateSystems(),function(coordSys){// Some coordinate system do not support axes, like geo.
if(!coordSys.axisPointerEnabled){return;}var coordSysKey=makeKey(coordSys.model);var axesInfoInCoordSys=result.coordSysAxesInfo[coordSysKey]={};result.coordSysMap[coordSysKey]=coordSys;// Set tooltip (like 'cross') is a convienent way to show axisPointer
// for user. So we enable seting tooltip on coordSys model.
var coordSysModel=coordSys.model;var baseTooltipModel=coordSysModel.getModel('tooltip',globalTooltipModel);(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(coordSys.getAxes(),(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .curry */ .WA)(saveTooltipAxisInfo,false,null));// If axis tooltip used, choose tooltip axis for each coordSys.
// Notice this case: coordSys is `grid` but not `cartesian2D` here.
if(coordSys.getTooltipAxes&&globalTooltipModel// If tooltip.showContent is set as false, tooltip will not
// show but axisPointer will show as normal.
&&baseTooltipModel.get('show')){// Compatible with previous logic. But series.tooltip.trigger: 'axis'
// or series.data[n].tooltip.trigger: 'axis' are not support any more.
var triggerAxis=baseTooltipModel.get('trigger')==='axis';var cross=baseTooltipModel.get(['axisPointer','type'])==='cross';var tooltipAxes=coordSys.getTooltipAxes(baseTooltipModel.get(['axisPointer','axis']));if(triggerAxis||cross){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(tooltipAxes.baseAxes,(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .curry */ .WA)(saveTooltipAxisInfo,cross?'cross':true,triggerAxis));}if(cross){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(tooltipAxes.otherAxes,(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .curry */ .WA)(saveTooltipAxisInfo,'cross',false));}}// fromTooltip: true | false | 'cross'
// triggerTooltip: true | false | null
function saveTooltipAxisInfo(fromTooltip,triggerTooltip,axis){var axisPointerModel=axis.model.getModel('axisPointer',globalAxisPointerModel);var axisPointerShow=axisPointerModel.get('show');if(!axisPointerShow||axisPointerShow==='auto'&&!fromTooltip&&!isHandleTrigger(axisPointerModel)){return;}if(triggerTooltip==null){triggerTooltip=axisPointerModel.get('triggerTooltip');}axisPointerModel=fromTooltip?makeAxisPointerModel(axis,baseTooltipModel,globalAxisPointerModel,ecModel,fromTooltip,triggerTooltip):axisPointerModel;var snap=axisPointerModel.get('snap');var axisKey=makeKey(axis.model);var involveSeries=triggerTooltip||snap||axis.type==='category';// If result.axesInfo[key] exist, override it (tooltip has higher priority).
var axisInfo=result.axesInfo[axisKey]={key:axisKey,axis:axis,coordSys:coordSys,axisPointerModel:axisPointerModel,triggerTooltip:triggerTooltip,involveSeries:involveSeries,snap:snap,useHandle:isHandleTrigger(axisPointerModel),seriesModels:[],linkGroup:null};axesInfoInCoordSys[axisKey]=axisInfo;result.seriesInvolved=result.seriesInvolved||involveSeries;var groupIndex=getLinkGroupIndex(linksOption,axis);if(groupIndex!=null){var linkGroup=linkGroups[groupIndex]||(linkGroups[groupIndex]={axesInfo:{}});linkGroup.axesInfo[axisKey]=axisInfo;linkGroup.mapper=linksOption[groupIndex].mapper;axisInfo.linkGroup=linkGroup;}}});}function makeAxisPointerModel(axis,baseTooltipModel,globalAxisPointerModel,ecModel,fromTooltip,triggerTooltip){var tooltipAxisPointerModel=baseTooltipModel.getModel('axisPointer');var fields=['type','snap','lineStyle','shadowStyle','label','animation','animationDurationUpdate','animationEasingUpdate','z'];var volatileOption={};(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(fields,function(field){volatileOption[field]=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(tooltipAxisPointerModel.get(field));});// category axis do not auto snap, otherwise some tick that do not
// has value can not be hovered. value/time/log axis default snap if
// triggered from tooltip and trigger tooltip.
volatileOption.snap=axis.type!=='category'&&!!triggerTooltip;// Compatibel with previous behavior, tooltip axis do not show label by default.
// Only these properties can be overrided from tooltip to axisPointer.
if(tooltipAxisPointerModel.get('type')==='cross'){volatileOption.type='line';}var labelOption=volatileOption.label||(volatileOption.label={});// Follow the convention, do not show label when triggered by tooltip by default.
labelOption.show==null&&(labelOption.show=false);if(fromTooltip==='cross'){// When 'cross', both axes show labels.
var tooltipAxisPointerLabelShow=tooltipAxisPointerModel.get(['label','show']);labelOption.show=tooltipAxisPointerLabelShow!=null?tooltipAxisPointerLabelShow:true;// If triggerTooltip, this is a base axis, which should better not use cross style
// (cross style is dashed by default)
if(!triggerTooltip){var crossStyle=volatileOption.lineStyle=tooltipAxisPointerModel.get('crossStyle');crossStyle&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .defaults */ .ce)(labelOption,crossStyle.textStyle);}}return axis.model.getModel('axisPointer',new _model_Model_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(volatileOption,globalAxisPointerModel,ecModel));}function collectSeriesInfo(result,ecModel){// Prepare data for axis trigger
ecModel.eachSeries(function(seriesModel){// Notice this case: this coordSys is `cartesian2D` but not `grid`.
var coordSys=seriesModel.coordinateSystem;var seriesTooltipTrigger=seriesModel.get(['tooltip','trigger'],true);var seriesTooltipShow=seriesModel.get(['tooltip','show'],true);if(!coordSys||seriesTooltipTrigger==='none'||seriesTooltipTrigger===false||seriesTooltipTrigger==='item'||seriesTooltipShow===false||seriesModel.get(['axisPointer','show'],true)===false){return;}(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(result.coordSysAxesInfo[makeKey(coordSys.model)],function(axisInfo){var axis=axisInfo.axis;if(coordSys.getAxis(axis.dim)===axis){axisInfo.seriesModels.push(seriesModel);axisInfo.seriesDataCount==null&&(axisInfo.seriesDataCount=0);axisInfo.seriesDataCount+=seriesModel.getData().count();}});});}/**
 * For example:
 * {
 *     axisPointer: {
 *         links: [{
 *             xAxisIndex: [2, 4],
 *             yAxisIndex: 'all'
 *         }, {
 *             xAxisId: ['a5', 'a7'],
 *             xAxisName: 'xxx'
 *         }]
 *     }
 * }
 */function getLinkGroupIndex(linksOption,axis){var axisModel=axis.model;var dim=axis.dim;for(var i=0;i<linksOption.length;i++){var linkOption=linksOption[i]||{};if(checkPropInLink(linkOption[dim+'AxisId'],axisModel.id)||checkPropInLink(linkOption[dim+'AxisIndex'],axisModel.componentIndex)||checkPropInLink(linkOption[dim+'AxisName'],axisModel.name)){return i;}}}function checkPropInLink(linkPropValue,axisPropValue){return linkPropValue==='all'||(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(linkPropValue)&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .cq)(linkPropValue,axisPropValue)>=0||linkPropValue===axisPropValue;}function fixValue(axisModel){var axisInfo=getAxisInfo(axisModel);if(!axisInfo){return;}var axisPointerModel=axisInfo.axisPointerModel;var scale=axisInfo.axis.scale;var option=axisPointerModel.option;var status=axisPointerModel.get('status');var value=axisPointerModel.get('value');// Parse init value for category and time axis.
if(value!=null){value=scale.parse(value);}var useHandle=isHandleTrigger(axisPointerModel);// If `handle` used, `axisPointer` will always be displayed, so value
// and status should be initialized.
if(status==null){option.status=useHandle?'show':'hide';}var extent=scale.getExtent().slice();extent[0]>extent[1]&&extent.reverse();if(// Pick a value on axis when initializing.
value==null// If both `handle` and `dataZoom` are used, value may be out of axis extent,
// where we should re-pick a value to keep `handle` displaying normally.
||value>extent[1]){// Make handle displayed on the end of the axis when init, which looks better.
value=extent[1];}if(value<extent[0]){value=extent[0];}option.value=value;if(useHandle){option.status=axisInfo.axis.scale.isBlank()?'hide':'show';}}function getAxisInfo(axisModel){var coordSysAxesInfo=(axisModel.ecModel.getComponent('axisPointer')||{}).coordSysAxesInfo;return coordSysAxesInfo&&coordSysAxesInfo.axesInfo[makeKey(axisModel)];}function getAxisPointerModel(axisModel){var axisInfo=getAxisInfo(axisModel);return axisInfo&&axisInfo.axisPointerModel;}function isHandleTrigger(axisPointerModel){return!!axisPointerModel.get(['handle','show']);}/**
 * @param {module:echarts/model/Model} model
 * @return {string} unique key
 */function makeKey(model){return model.type+'||'+model.id;}

/***/ }),

/***/ 46806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BL": () => (/* binding */ makeLineShape),
/* harmony export */   "Zh": () => (/* binding */ getTransformedPosition),
/* harmony export */   "fk": () => (/* binding */ buildElStyle),
/* harmony export */   "gf": () => (/* binding */ buildCartesianSingleLabelElOption),
/* harmony export */   "gk": () => (/* binding */ getValueLabel),
/* harmony export */   "uE": () => (/* binding */ makeRectShape)
/* harmony export */ });
/* unused harmony exports buildLabelElOption, makeSectorShape */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57697);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45482);
/* harmony import */ var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20194);
/* harmony import */ var _util_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87662);
/* harmony import */ var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13518);
/* harmony import */ var _coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48692);
/* harmony import */ var _axis_AxisBuilder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87639);
/* harmony import */ var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9610);
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
*/function buildElStyle(axisPointerModel){var axisPointerType=axisPointerModel.get('type');var styleModel=axisPointerModel.getModel(axisPointerType+'Style');var style;if(axisPointerType==='line'){style=styleModel.getLineStyle();style.fill=null;}else if(axisPointerType==='shadow'){style=styleModel.getAreaStyle();style.stroke=null;}return style;}/**
 * @param {Function} labelPos {align, verticalAlign, position}
 */function buildLabelElOption(elOption,axisModel,axisPointerModel,api,labelPos){var value=axisPointerModel.get('value');var text=getValueLabel(value,axisModel.axis,axisModel.ecModel,axisPointerModel.get('seriesDataIndices'),{precision:axisPointerModel.get(['label','precision']),formatter:axisPointerModel.get(['label','formatter'])});var labelModel=axisPointerModel.getModel('label');var paddings=_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .normalizeCssArray */ .MY(labelModel.get('padding')||0);var font=labelModel.getFont();var textRect=zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__/* .getBoundingRect */ .lP(text,font);var position=labelPos.position;var width=textRect.width+paddings[1]+paddings[3];var height=textRect.height+paddings[0]+paddings[2];// Adjust by align.
var align=labelPos.align;align==='right'&&(position[0]-=width);align==='center'&&(position[0]-=width/2);var verticalAlign=labelPos.verticalAlign;verticalAlign==='bottom'&&(position[1]-=height);verticalAlign==='middle'&&(position[1]-=height/2);// Not overflow ec container
confineInContainer(position,width,height,api);var bgColor=labelModel.get('backgroundColor');if(!bgColor||bgColor==='auto'){bgColor=axisModel.get(['axisLine','lineStyle','color']);}elOption.label={// shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
x:position[0],y:position[1],style:(0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_2__/* .createTextStyle */ .Lr)(labelModel,{text:text,font:font,fill:labelModel.getTextColor(),padding:paddings,backgroundColor:bgColor}),// Lable should be over axisPointer.
z2:10};}// Do not overflow ec container
function confineInContainer(position,width,height,api){var viewWidth=api.getWidth();var viewHeight=api.getHeight();position[0]=Math.min(position[0]+width,viewWidth)-width;position[1]=Math.min(position[1]+height,viewHeight)-height;position[0]=Math.max(position[0],0);position[1]=Math.max(position[1],0);}function getValueLabel(value,axis,ecModel,seriesDataIndices,opt){value=axis.scale.parse(value);var text=axis.scale.getLabel({value:value},{// If `precision` is set, width can be fixed (like '12.00500'), which
// helps to debounce when when moving label.
precision:opt.precision});var formatter=opt.formatter;if(formatter){var params_1={value:_coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_3__/* .getAxisRawValue */ .DX(axis,{value:value}),axisDimension:axis.dim,axisIndex:axis.index,seriesData:[]};zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .each */ .S6(seriesDataIndices,function(idxItem){var series=ecModel.getSeriesByIndex(idxItem.seriesIndex);var dataIndex=idxItem.dataIndexInside;var dataParams=series&&series.getDataParams(dataIndex);dataParams&&params_1.seriesData.push(dataParams);});if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .isString */ .HD(formatter)){text=formatter.replace('{value}',text);}else if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .mf(formatter)){text=formatter(params_1);}}return text;}function getTransformedPosition(axis,value,layoutInfo){var transform=zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .Ue();zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__/* .rotate */ .U1(transform,transform,layoutInfo.rotation);zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__/* .translate */ .Iu(transform,transform,layoutInfo.position);return _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__.applyTransform([axis.dataToCoord(value),(layoutInfo.labelOffset||0)+(layoutInfo.labelDirection||1)*(layoutInfo.labelMargin||0)],transform);}function buildCartesianSingleLabelElOption(value,elOption,layoutInfo,axisModel,axisPointerModel,api){// @ts-ignore
var textLayout=_axis_AxisBuilder_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].innerTextLayout */ .Z.innerTextLayout(layoutInfo.rotation,0,layoutInfo.labelDirection);layoutInfo.labelMargin=axisPointerModel.get(['label','margin']);buildLabelElOption(elOption,axisModel,axisPointerModel,api,{position:getTransformedPosition(axisModel.axis,value,layoutInfo),align:textLayout.textAlign,verticalAlign:textLayout.textVerticalAlign});}function makeLineShape(p1,p2,xDimIndex){xDimIndex=xDimIndex||0;return{x1:p1[xDimIndex],y1:p1[1-xDimIndex],x2:p2[xDimIndex],y2:p2[1-xDimIndex]};}function makeRectShape(xy,wh,xDimIndex){xDimIndex=xDimIndex||0;return{x:xy[xDimIndex],y:xy[1-xDimIndex],width:wh[xDimIndex],height:wh[1-xDimIndex]};}function makeSectorShape(cx,cy,r0,r,startAngle,endAngle){return{cx:cx,cy:cy,r0:r0,r:r,startAngle:startAngle,endAngle:endAngle,clockwise:true};}

/***/ }),

/***/ 56345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ install)
/* harmony export */ });
/* unused harmony export DatasetModel */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88161);
/* harmony import */ var _model_Component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15022);
/* harmony import */ var _view_Component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74874);
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74298);
/* harmony import */ var _data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61251);
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
 * This module is imported by echarts directly.
 *
 * Notice:
 * Always keep this file exists for backward compatibility.
 * Because before 4.1.0, dataset is an optional component,
 * some users may import this module manually.
 */var DatasetModel=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(DatasetModel,_super);function DatasetModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type='dataset';return _this;}DatasetModel.prototype.init=function(option,parentModel,ecModel){_super.prototype.init.call(this,option,parentModel,ecModel);this._sourceManager=new _data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_1__/* .SourceManager */ .U(this);(0,_data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_1__/* .disableTransformOptionMerge */ .t)(this);};DatasetModel.prototype.mergeOption=function(newOption,ecModel){_super.prototype.mergeOption.call(this,newOption,ecModel);(0,_data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_1__/* .disableTransformOptionMerge */ .t)(this);};DatasetModel.prototype.optionUpdated=function(){this._sourceManager.dirty();};DatasetModel.prototype.getSourceManager=function(){return this._sourceManager;};DatasetModel.type='dataset';DatasetModel.defaultOption={seriesLayoutBy:_util_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SERIES_LAYOUT_BY_COLUMN */ .fY};return DatasetModel;}(_model_Component_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);var DatasetView=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(DatasetView,_super);function DatasetView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type='dataset';return _this;}DatasetView.type='dataset';return DatasetView;}(_view_Component_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);function install(registers){registers.registerComponentModel(DatasetModel);registers.registerComponentView(DatasetView);}

/***/ }),

/***/ 82404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ install)
});

// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(15022);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(25118);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(54865);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(79070);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(13518);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(81319);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/View.js
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
 * Simple view coordinate system
 * Mapping given x, y to transformd view x, y
 */var v2ApplyTransform=vector/* applyTransform */.Ne;var View=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(View,_super);function View(name){var _this=_super.call(this)||this;_this.type='view';_this.dimensions=['x','y'];/**
     * Represents the transform brought by roam/zoom.
     * If `View['_viewRect']` applies roam transform,
     * we can get the final displayed rect.
     */_this._roamTransformable=new Transformable/* default */.ZP();/**
     * Represents the transform from `View['_rect']` to `View['_viewRect']`.
     */_this._rawTransformable=new Transformable/* default */.ZP();_this.name=name;return _this;}View.prototype.setBoundingRect=function(x,y,width,height){this._rect=new BoundingRect/* default */.Z(x,y,width,height);return this._rect;};/**
   * @return {module:zrender/core/BoundingRect}
   */View.prototype.getBoundingRect=function(){return this._rect;};View.prototype.setViewRect=function(x,y,width,height){this._transformTo(x,y,width,height);this._viewRect=new BoundingRect/* default */.Z(x,y,width,height);};/**
   * Transformed to particular position and size
   */View.prototype._transformTo=function(x,y,width,height){var rect=this.getBoundingRect();var rawTransform=this._rawTransformable;rawTransform.transform=rect.calculateTransform(new BoundingRect/* default */.Z(x,y,width,height));var rawParent=rawTransform.parent;rawTransform.parent=null;rawTransform.decomposeTransform();rawTransform.parent=rawParent;this._updateTransform();};/**
   * Set center of view
   */View.prototype.setCenter=function(centerCoord,api){if(!centerCoord){return;}this._center=[(0,number/* parsePercent */.GM)(centerCoord[0],api.getWidth()),(0,number/* parsePercent */.GM)(centerCoord[1],api.getHeight())];this._updateCenterAndZoom();};View.prototype.setZoom=function(zoom){zoom=zoom||1;var zoomLimit=this.zoomLimit;if(zoomLimit){if(zoomLimit.max!=null){zoom=Math.min(zoomLimit.max,zoom);}if(zoomLimit.min!=null){zoom=Math.max(zoomLimit.min,zoom);}}this._zoom=zoom;this._updateCenterAndZoom();};/**
   * Get default center without roam
   */View.prototype.getDefaultCenter=function(){// Rect before any transform
var rawRect=this.getBoundingRect();var cx=rawRect.x+rawRect.width/2;var cy=rawRect.y+rawRect.height/2;return[cx,cy];};View.prototype.getCenter=function(){return this._center||this.getDefaultCenter();};View.prototype.getZoom=function(){return this._zoom||1;};View.prototype.getRoamTransform=function(){return this._roamTransformable.getLocalTransform();};/**
   * Remove roam
   */View.prototype._updateCenterAndZoom=function(){// Must update after view transform updated
var rawTransformMatrix=this._rawTransformable.getLocalTransform();var roamTransform=this._roamTransformable;var defaultCenter=this.getDefaultCenter();var center=this.getCenter();var zoom=this.getZoom();center=vector/* applyTransform */.Ne([],center,rawTransformMatrix);defaultCenter=vector/* applyTransform */.Ne([],defaultCenter,rawTransformMatrix);roamTransform.originX=center[0];roamTransform.originY=center[1];roamTransform.x=defaultCenter[0]-center[0];roamTransform.y=defaultCenter[1]-center[1];roamTransform.scaleX=roamTransform.scaleY=zoom;this._updateTransform();};/**
   * Update transform props on `this` based on the current
   * `this._roamTransformable` and `this._rawTransformable`.
   */View.prototype._updateTransform=function(){var roamTransformable=this._roamTransformable;var rawTransformable=this._rawTransformable;rawTransformable.parent=roamTransformable;roamTransformable.updateTransform();rawTransformable.updateTransform();matrix/* copy */.JG(this.transform||(this.transform=[]),rawTransformable.transform||matrix/* create */.Ue());this._rawTransform=rawTransformable.getLocalTransform();this.invTransform=this.invTransform||[];matrix/* invert */.U_(this.invTransform,this.transform);this.decomposeTransform();};View.prototype.getTransformInfo=function(){var rawTransformable=this._rawTransformable;var roamTransformable=this._roamTransformable;// Becuase roamTransformabel has `originX/originY` modified,
// but the caller of `getTransformInfo` can not handle `originX/originY`,
// so need to recalcualte them.
var dummyTransformable=new Transformable/* default */.ZP();dummyTransformable.transform=roamTransformable.transform;dummyTransformable.decomposeTransform();return{roam:{x:dummyTransformable.x,y:dummyTransformable.y,scaleX:dummyTransformable.scaleX,scaleY:dummyTransformable.scaleY},raw:{x:rawTransformable.x,y:rawTransformable.y,scaleX:rawTransformable.scaleX,scaleY:rawTransformable.scaleY}};};View.prototype.getViewRect=function(){return this._viewRect;};/**
   * Get view rect after roam transform
   */View.prototype.getViewRectAfterRoam=function(){var rect=this.getBoundingRect().clone();rect.applyTransform(this.transform);return rect;};/**
   * Convert a single (lon, lat) data item to (x, y) point.
   */View.prototype.dataToPoint=function(data,noRoam,out){var transform=noRoam?this._rawTransform:this.transform;out=out||[];return transform?v2ApplyTransform(out,data,transform):vector/* copy */.JG(out,data);};/**
   * Convert a (x, y) point to (lon, lat) data
   */View.prototype.pointToData=function(point){var invTransform=this.invTransform;return invTransform?v2ApplyTransform([],point,invTransform):[point[0],point[1]];};View.prototype.convertToPixel=function(ecModel,finder,value){var coordSys=getCoordSys(finder);return coordSys===this?coordSys.dataToPoint(value):null;};View.prototype.convertFromPixel=function(ecModel,finder,pixel){var coordSys=getCoordSys(finder);return coordSys===this?coordSys.pointToData(pixel):null;};/**
   * @implements
   */View.prototype.containPoint=function(point){return this.getViewRectAfterRoam().contain(point[0],point[1]);};View.dimensions=['x','y'];return View;}(Transformable/* default */.ZP);function getCoordSys(finder){var seriesModel=finder.seriesModel;return seriesModel?seriesModel.coordinateSystem:null;// e.g., graph.
}/* harmony default export */ const coord_View = (View);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/geoSourceManager.js + 7 modules
var geoSourceManager = __webpack_require__(43564);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/Geo.js
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
*/var GEO_DEFAULT_PARAMS={'geoJSON':{aspectScale:0.75,invertLongitute:true},'geoSVG':{aspectScale:1,invertLongitute:false}};var geo2DDimensions=['lng','lat'];var Geo=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(Geo,_super);function Geo(name,map,opt){var _this=_super.call(this,name)||this;_this.dimensions=geo2DDimensions;_this.type='geo';// Only store specified name coord via `addGeoCoord`.
_this._nameCoordMap=util/* createHashMap */.kW();_this.map=map;var projection=opt.projection;var source=geoSourceManager/* default.load */.Z.load(map,opt.nameMap,opt.nameProperty);var resource=geoSourceManager/* default.getGeoResource */.Z.getGeoResource(map);var resourceType=_this.resourceType=resource?resource.type:null;var regions=_this.regions=source.regions;var defaultParams=GEO_DEFAULT_PARAMS[resource.type];_this._regionsMap=source.regionsMap;_this.regions=source.regions;if(false){}_this.projection=projection;var boundingRect;if(projection){// Can't reuse the raw bounding rect
for(var i=0;i<regions.length;i++){var regionRect=regions[i].getBoundingRect(projection);boundingRect=boundingRect||regionRect.clone();boundingRect.union(regionRect);}}else{boundingRect=source.boundingRect;}_this.setBoundingRect(boundingRect.x,boundingRect.y,boundingRect.width,boundingRect.height);// aspectScale and invertLongitute actually is the parameters default raw projection.
// So we ignore them if projection is given.
// Ignore default aspect scale if projection exits.
_this.aspectScale=projection?1:util/* retrieve2 */.pD(opt.aspectScale,defaultParams.aspectScale);// Not invert longitute if projection exits.
_this._invertLongitute=projection?false:defaultParams.invertLongitute;return _this;}Geo.prototype._transformTo=function(x,y,width,height){var rect=this.getBoundingRect();var invertLongitute=this._invertLongitute;rect=rect.clone();if(invertLongitute){// Longitute is inverted
rect.y=-rect.y-rect.height;}var rawTransformable=this._rawTransformable;rawTransformable.transform=rect.calculateTransform(new BoundingRect/* default */.Z(x,y,width,height));var rawParent=rawTransformable.parent;rawTransformable.parent=null;rawTransformable.decomposeTransform();rawTransformable.parent=rawParent;if(invertLongitute){rawTransformable.scaleY=-rawTransformable.scaleY;}this._updateTransform();};Geo.prototype.getRegion=function(name){return this._regionsMap.get(name);};Geo.prototype.getRegionByCoord=function(coord){var regions=this.regions;for(var i=0;i<regions.length;i++){var region=regions[i];if(region.type==='geoJSON'&&region.contain(coord)){return regions[i];}}};/**
   * Add geoCoord for indexing by name
   */Geo.prototype.addGeoCoord=function(name,geoCoord){this._nameCoordMap.set(name,geoCoord);};/**
   * Get geoCoord by name
   */Geo.prototype.getGeoCoord=function(name){var region=this._regionsMap.get(name);// calcualte center only on demand.
return this._nameCoordMap.get(name)||region&&region.getCenter();};Geo.prototype.dataToPoint=function(data,noRoam,out){if(util/* isString */.HD(data)){// Map area name to geoCoord
data=this.getGeoCoord(data);}if(data){var projection=this.projection;if(projection){// projection may return null point.
data=projection.project(data);}return data&&this.projectedToPoint(data,noRoam,out);}};Geo.prototype.pointToData=function(point){var projection=this.projection;if(projection){// projection may return null point.
point=projection.unproject(point);}return point&&this.pointToProjected(point);};/**
   * Point to projected data. Same with pointToData when projection is used.
   */Geo.prototype.pointToProjected=function(point){return _super.prototype.pointToData.call(this,point);};Geo.prototype.projectedToPoint=function(projected,noRoam,out){return _super.prototype.dataToPoint.call(this,projected,noRoam,out);};Geo.prototype.convertToPixel=function(ecModel,finder,value){var coordSys=Geo_getCoordSys(finder);return coordSys===this?coordSys.dataToPoint(value):null;};Geo.prototype.convertFromPixel=function(ecModel,finder,pixel){var coordSys=Geo_getCoordSys(finder);return coordSys===this?coordSys.pointToData(pixel):null;};return Geo;}(coord_View);;util/* mixin */.jB(Geo,coord_View);function Geo_getCoordSys(finder){var geoModel=finder.geoModel;var seriesModel=finder.seriesModel;return geoModel?geoModel.coordinateSystem:seriesModel?seriesModel.coordinateSystem// For map series.
||(seriesModel.getReferringComponents('geo',model/* SINGLE_REFERRING */.C6).models[0]||{}).coordinateSystem:null;}/* harmony default export */ const geo_Geo = (Geo);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(8636);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/geoCreator.js
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
 * Resize method bound to the geo
 */function resizeGeo(geoModel,api){var boundingCoords=geoModel.get('boundingCoords');if(boundingCoords!=null){var leftTop_1=boundingCoords[0];var rightBottom_1=boundingCoords[1];if(!(isFinite(leftTop_1[0])&&isFinite(leftTop_1[1])&&isFinite(rightBottom_1[0])&&isFinite(rightBottom_1[1]))){if(false){}}else{// Sample around the lng/lat rect and use projection to calculate actual bounding rect.
var projection_1=this.projection;if(projection_1){var xMin=leftTop_1[0];var yMin=leftTop_1[1];var xMax=rightBottom_1[0];var yMax=rightBottom_1[1];leftTop_1=[Infinity,Infinity];rightBottom_1=[-Infinity,-Infinity];// TODO better way?
var sampleLine=function sampleLine(x0,y0,x1,y1){var dx=x1-x0;var dy=y1-y0;for(var i=0;i<=100;i++){var p=i/100;var pt=projection_1.project([x0+dx*p,y0+dy*p]);vector/* min */.VV(leftTop_1,leftTop_1,pt);vector/* max */.Fp(rightBottom_1,rightBottom_1,pt);}};// Top
sampleLine(xMin,yMin,xMax,yMin);// Right
sampleLine(xMax,yMin,xMax,yMax);// Bottom
sampleLine(xMax,yMax,xMin,yMax);// Left
sampleLine(xMin,yMax,xMax,yMin);}this.setBoundingRect(leftTop_1[0],leftTop_1[1],rightBottom_1[0]-leftTop_1[0],rightBottom_1[1]-leftTop_1[1]);}}var rect=this.getBoundingRect();var centerOption=geoModel.get('layoutCenter');var sizeOption=geoModel.get('layoutSize');var viewWidth=api.getWidth();var viewHeight=api.getHeight();var aspect=rect.width/rect.height*this.aspectScale;var useCenterAndSize=false;var center;var size;if(centerOption&&sizeOption){center=[number/* parsePercent */.GM(centerOption[0],viewWidth),number/* parsePercent */.GM(centerOption[1],viewHeight)];size=number/* parsePercent */.GM(sizeOption,Math.min(viewWidth,viewHeight));if(!isNaN(center[0])&&!isNaN(center[1])&&!isNaN(size)){useCenterAndSize=true;}else{if(false){}}}var viewRect;if(useCenterAndSize){viewRect={};if(aspect>1){// Width is same with size
viewRect.width=size;viewRect.height=size/aspect;}else{viewRect.height=size;viewRect.width=size*aspect;}viewRect.y=center[1]-viewRect.height/2;viewRect.x=center[0]-viewRect.width/2;}else{// Use left/top/width/height
var boxLayoutOption=geoModel.getBoxLayoutParams();boxLayoutOption.aspect=aspect;viewRect=layout/* getLayoutRect */.ME(boxLayoutOption,{width:viewWidth,height:viewHeight});}this.setViewRect(viewRect.x,viewRect.y,viewRect.width,viewRect.height);this.setCenter(geoModel.get('center'),api);this.setZoom(geoModel.get('zoom'));}// Back compat for ECharts2, where the coord map is set on map series:
// {type: 'map', geoCoord: {'cityA': [116.46,39.92], 'cityA': [119.12,24.61]}},
function setGeoCoords(geo,model){util/* each */.S6(model.get('geoCoord'),function(geoCoord,name){geo.addGeoCoord(name,geoCoord);});}var GeoCreator=/** @class */function(){function GeoCreator(){// For deciding which dimensions to use when creating list data
this.dimensions=geo2DDimensions;}GeoCreator.prototype.create=function(ecModel,api){var geoList=[];function getCommonGeoProperties(model){return{nameProperty:model.get('nameProperty'),aspectScale:model.get('aspectScale'),projection:model.get('projection')};}// FIXME Create each time may be slow
ecModel.eachComponent('geo',function(geoModel,idx){var mapName=geoModel.get('map');var geo=new geo_Geo(mapName+idx,mapName,util/* extend */.l7({nameMap:geoModel.get('nameMap')},getCommonGeoProperties(geoModel)));geo.zoomLimit=geoModel.get('scaleLimit');geoList.push(geo);// setGeoCoords(geo, geoModel);
geoModel.coordinateSystem=geo;geo.model=geoModel;// Inject resize method
geo.resize=resizeGeo;geo.resize(geoModel,api);});ecModel.eachSeries(function(seriesModel){var coordSys=seriesModel.get('coordinateSystem');if(coordSys==='geo'){var geoIndex=seriesModel.get('geoIndex')||0;seriesModel.coordinateSystem=geoList[geoIndex];}});// If has map series
var mapModelGroupBySeries={};ecModel.eachSeriesByType('map',function(seriesModel){if(!seriesModel.getHostGeoModel()){var mapType=seriesModel.getMapType();mapModelGroupBySeries[mapType]=mapModelGroupBySeries[mapType]||[];mapModelGroupBySeries[mapType].push(seriesModel);}});util/* each */.S6(mapModelGroupBySeries,function(mapSeries,mapType){var nameMapList=util/* map */.UI(mapSeries,function(singleMapSeries){return singleMapSeries.get('nameMap');});var geo=new geo_Geo(mapType,mapType,util/* extend */.l7({nameMap:util/* mergeAll */.Jn(nameMapList)},getCommonGeoProperties(mapSeries[0])));geo.zoomLimit=util/* retrieve.apply */.Jv.apply(null,util/* map */.UI(mapSeries,function(singleMapSeries){return singleMapSeries.get('scaleLimit');}));geoList.push(geo);// Inject resize method
geo.resize=resizeGeo;geo.resize(mapSeries[0],api);util/* each */.S6(mapSeries,function(singleMapSeries){singleMapSeries.coordinateSystem=geo;setGeoCoords(geo,singleMapSeries);});});return geoList;};/**
   * Fill given regions array
   */GeoCreator.prototype.getFilledRegions=function(originRegionArr,mapName,nameMap,nameProperty){// Not use the original
var regionsArr=(originRegionArr||[]).slice();var dataNameMap=util/* createHashMap */.kW();for(var i=0;i<regionsArr.length;i++){dataNameMap.set(regionsArr[i].name,regionsArr[i]);}var source=geoSourceManager/* default.load */.Z.load(mapName,nameMap,nameProperty);util/* each */.S6(source.regions,function(region){var name=region.name;!dataNameMap.get(name)&&regionsArr.push({name:name});});return regionsArr;};return GeoCreator;}();var geoCreator=new GeoCreator();/* harmony default export */ const geo_geoCreator = (geoCreator);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/GeoModel.js
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
*/;var GeoModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GeoModel,_super);function GeoModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=GeoModel.type;return _this;}GeoModel.prototype.init=function(option,parentModel,ecModel){var source=geoSourceManager/* default.getGeoResource */.Z.getGeoResource(option.map);if(source&&source.type==='geoJSON'){var itemStyle=option.itemStyle=option.itemStyle||{};if(!('color'in itemStyle)){itemStyle.color='#eee';}}this.mergeDefaultAndTheme(option,ecModel);// Default label emphasis `show`
model/* defaultEmphasis */.Cc(option,'label',['show']);};GeoModel.prototype.optionUpdated=function(){var _this=this;var option=this.option;option.regions=geo_geoCreator.getFilledRegions(option.regions,option.map,option.nameMap,option.nameProperty);var selectedMap={};this._optionModelMap=util/* reduce */.u4(option.regions||[],function(optionModelMap,regionOpt){var regionName=regionOpt.name;if(regionName){optionModelMap.set(regionName,new Model/* default */.Z(regionOpt,_this,_this.ecModel));if(regionOpt.selected){selectedMap[regionName]=true;}}return optionModelMap;},util/* createHashMap */.kW());if(!option.selectedMap){option.selectedMap=selectedMap;}};/**
   * Get model of region.
   */GeoModel.prototype.getRegionModel=function(name){return this._optionModelMap.get(name)||new Model/* default */.Z(null,this,this.ecModel);};/**
   * Format label
   * @param name Region name
   */GeoModel.prototype.getFormattedLabel=function(name,status){var regionModel=this.getRegionModel(name);var formatter=status==='normal'?regionModel.get(['label','formatter']):regionModel.get(['emphasis','label','formatter']);var params={name:name};if(util/* isFunction */.mf(formatter)){params.status=status;return formatter(params);}else if(util/* isString */.HD(formatter)){return formatter.replace('{a}',name!=null?name:'');}};GeoModel.prototype.setZoom=function(zoom){this.option.zoom=zoom;};GeoModel.prototype.setCenter=function(center){this.option.center=center;};// PENGING If selectedMode is null ?
GeoModel.prototype.select=function(name){var option=this.option;var selectedMode=option.selectedMode;if(!selectedMode){return;}if(selectedMode!=='multiple'){option.selectedMap=null;}var selectedMap=option.selectedMap||(option.selectedMap={});selectedMap[name]=true;};GeoModel.prototype.unSelect=function(name){var selectedMap=this.option.selectedMap;if(selectedMap){selectedMap[name]=false;}};GeoModel.prototype.toggleSelected=function(name){this[this.isSelected(name)?'unSelect':'select'](name);};GeoModel.prototype.isSelected=function(name){var selectedMap=this.option.selectedMap;return!!(selectedMap&&selectedMap[name]);};GeoModel.type='geo';GeoModel.layoutMode='box';GeoModel.defaultOption={// zlevel: 0,
z:0,show:true,left:'center',top:'center',// Default value:
// for geoSVG source: 1,
// for geoJSON source: 0.75.
aspectScale:null,///// Layout with center and size
// If you wan't to put map in a fixed size box with right aspect ratio
// This two properties may more conveninet
// layoutCenter: [50%, 50%]
// layoutSize: 100
silent:false,// Map type
map:'',// Define left-top, right-bottom coords to control view
// For example, [ [180, 90], [-180, -90] ]
boundingCoords:null,// Default on center of map
center:null,zoom:1,scaleLimit:null,// selectedMode: false
label:{show:false,color:'#000'},itemStyle:{borderWidth:0.5,borderColor:'#444'// Default color:
// + geoJSON: #eee
// + geoSVG: null (use SVG original `fill`)
// color: '#eee'
},emphasis:{label:{show:true,color:'rgb(100,0,0)'},itemStyle:{color:'rgba(255,215,0,0.8)'}},select:{label:{show:true,color:'rgb(100,0,0)'},itemStyle:{color:'rgba(255,215,0,0.8)'}},regions:[]// tooltip: {
//     show: false
// }
};return GeoModel;}(Component/* default */.Z);/* harmony default export */ const geo_GeoModel = (GeoModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/action/roamHelper.js
var roamHelper = __webpack_require__(25000);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/helper/MapDraw.js + 4 modules
var MapDraw = __webpack_require__(15707);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(74874);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(73171);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/geo/GeoView.js
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
*/var GeoView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GeoView,_super);function GeoView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=GeoView.type;_this.focusBlurEnabled=true;return _this;}GeoView.prototype.init=function(ecModel,api){this._api=api;};GeoView.prototype.render=function(geoModel,ecModel,api,payload){this._model=geoModel;if(!geoModel.get('show')){this._mapDraw&&this._mapDraw.remove();this._mapDraw=null;return;}if(!this._mapDraw){this._mapDraw=new MapDraw/* default */.Z(api);}var mapDraw=this._mapDraw;mapDraw.draw(geoModel,ecModel,api,this,payload);mapDraw.group.on('click',this._handleRegionClick,this);mapDraw.group.silent=geoModel.get('silent');this.group.add(mapDraw.group);this.updateSelectStatus(geoModel,ecModel,api);};GeoView.prototype._handleRegionClick=function(e){var eventData;(0,util_event/* findEventDispatcher */.o)(e.target,function(current){return(eventData=(0,innerStore/* getECData */.A)(current).eventData)!=null;},true);if(eventData){this._api.dispatchAction({type:'geoToggleSelect',geoId:this._model.id,name:eventData.name});}};GeoView.prototype.updateSelectStatus=function(model,ecModel,api){var _this=this;this._mapDraw.group.traverse(function(node){var eventData=(0,innerStore/* getECData */.A)(node).eventData;if(eventData){_this._model.isSelected(eventData.name)?api.enterSelect(node):api.leaveSelect(node);// No need to traverse children.
return true;}});};GeoView.prototype.findHighDownDispatchers=function(name){return this._mapDraw&&this._mapDraw.findHighDownDispatchers(name,this._model);};GeoView.prototype.dispose=function(){this._mapDraw&&this._mapDraw.remove();};GeoView.type='geo';return GeoView;}(view_Component/* default */.Z);/* harmony default export */ const geo_GeoView = (GeoView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/geo/install.js
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
*/function registerMap(mapName,geoJson,specialAreas){geoSourceManager/* default.registerMap */.Z.registerMap(mapName,geoJson,specialAreas);}function install(registers){registers.registerCoordinateSystem('geo',geo_geoCreator);registers.registerComponentModel(geo_GeoModel);registers.registerComponentView(geo_GeoView);registers.registerImpl('registerMap',registerMap);registers.registerImpl('getMap',function(mapName){return geoSourceManager/* default.getMapForUser */.Z.getMapForUser(mapName);});function makeAction(method,actionInfo){actionInfo.update='geo:updateSelectStatus';registers.registerAction(actionInfo,function(payload,ecModel){var selected={};var allSelected=[];ecModel.eachComponent({mainType:'geo',query:payload},function(geoModel){geoModel[method](payload.name);var geo=geoModel.coordinateSystem;(0,util/* each */.S6)(geo.regions,function(region){selected[region.name]=geoModel.isSelected(region.name)||false;});// Notice: there might be duplicated name in different regions.
var names=[];(0,util/* each */.S6)(selected,function(v,name){selected[name]&&names.push(name);});allSelected.push({geoIndex:geoModel.componentIndex,// Use singular, the same naming convention as the event `selectchanged`.
name:names});});return{selected:selected,allSelected:allSelected,name:payload.name};});}makeAction('toggleSelected',{type:'geoToggleSelect',event:'geoselectchanged'});makeAction('select',{type:'geoSelect',event:'geoselected'});makeAction('unSelect',{type:'geoUnSelect',event:'geounselected'});/**
   * @payload
   * @property {string} [componentType=series]
   * @property {number} [dx]
   * @property {number} [dy]
   * @property {number} [zoom]
   * @property {number} [originX]
   * @property {number} [originY]
   */registers.registerAction({type:'geoRoam',event:'geoRoam',update:'updateTransform'},function(payload,ecModel,api){var componentType=payload.componentType||'series';ecModel.eachComponent({mainType:componentType,query:payload},function(componentModel){var geo=componentModel.coordinateSystem;if(geo.type!=='geo'){return;}var res=(0,roamHelper/* updateCenterAndZoom */.A)(geo,payload,componentModel.get('scaleLimit'),api);componentModel.setCenter&&componentModel.setCenter(res.center);componentModel.setZoom&&componentModel.setZoom(res.zoom);// All map series with same `map` use the same geo coordinate system
// So the center and zoom must be in sync. Include the series not selected by legend
if(componentType==='series'){(0,util/* each */.S6)(componentModel.seriesGroup,function(seriesModel){seriesModel.setCenter(res.center);seriesModel.setZoom(res.zoom);});}});});}

/***/ }),

/***/ 36216:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/grid/installSimple.js + 15 modules
var installSimple = __webpack_require__(66114);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/install.js + 5 modules
var install = __webpack_require__(69699);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/grid/install.js
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
*/function install_install(registers){(0,extension/* use */.D)(installSimple/* install */.N);(0,extension/* use */.D)(install/* install */.N);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/grid.js
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

/***/ 66114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ install)
});

// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(74874);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Component.js
var model_Component = __webpack_require__(15022);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/cartesian/GridModel.js
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
*/var GridModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GridModel,_super);function GridModel(){return _super!==null&&_super.apply(this,arguments)||this;}GridModel.type='grid';GridModel.dependencies=['xAxis','yAxis'];GridModel.layoutMode='box';GridModel.defaultOption={show:false,// zlevel: 0,
z:0,left:'10%',top:60,right:'10%',bottom:70,// If grid size contain label
containLabel:false,// width: {totalWidth} - left - right,
// height: {totalHeight} - top - bottom,
backgroundColor:'rgba(0,0,0,0)',borderWidth:1,borderColor:'#ccc'};return GridModel;}(model_Component/* default */.Z);/* harmony default export */ const cartesian_GridModel = (GridModel);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(19568);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/axisModelCommonMixin.js
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
*/ // eslint-disable-next-line @typescript-eslint/no-unused-vars
var AxisModelCommonMixin=/** @class */function(){function AxisModelCommonMixin(){}AxisModelCommonMixin.prototype.getNeedCrossZero=function(){var option=this.option;return!option.scale;};/**
   * Should be implemented by each axis model if necessary.
   * @return coordinate system model
   */AxisModelCommonMixin.prototype.getCoordSysModel=function(){return;};return AxisModelCommonMixin;}();
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/cartesian/AxisModel.js
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
*/var CartesianAxisModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(CartesianAxisModel,_super);function CartesianAxisModel(){return _super!==null&&_super.apply(this,arguments)||this;}CartesianAxisModel.prototype.getCoordSysModel=function(){return this.getReferringComponents('grid',model/* SINGLE_REFERRING */.C6).models[0];};CartesianAxisModel.type='cartesian2dAxis';return CartesianAxisModel;}(model_Component/* default */.Z);util/* mixin */.jB(CartesianAxisModel,AxisModelCommonMixin);/* harmony default export */ const AxisModel = ((/* unused pure expression or super */ null && (CartesianAxisModel)));
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/axisDefault.js
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
*/var defaultOption={show:true,// zlevel: 0,
z:0,// Inverse the axis.
inverse:false,// Axis name displayed.
name:'',// 'start' | 'middle' | 'end'
nameLocation:'end',// By degree. By default auto rotate by nameLocation.
nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:'...',placeholder:'.'},// Use global text style by default.
nameTextStyle:{},// The gap between axisName and axisLine.
nameGap:15,// Default `false` to support tooltip.
silent:false,// Default `false` to avoid legacy user event listener fail.
triggerEvent:false,tooltip:{show:false},axisPointer:{},axisLine:{show:true,onZero:true,onZeroAxisIndex:null,lineStyle:{color:'#6E7079',width:1,type:'solid'},// The arrow at both ends the the axis.
symbol:['none','none'],symbolSize:[10,15]},axisTick:{show:true,// Whether axisTick is inside the grid or outside the grid.
inside:false,// The length of axisTick.
length:5,lineStyle:{width:1}},axisLabel:{show:true,// Whether axisLabel is inside the grid or outside the grid.
inside:false,rotate:0,// true | false | null/undefined (auto)
showMinLabel:null,// true | false | null/undefined (auto)
showMaxLabel:null,margin:8,// formatter: null,
fontSize:12},splitLine:{show:true,lineStyle:{color:['#E0E6F1'],width:1,type:'solid'}},splitArea:{show:false,areaStyle:{color:['rgba(250,250,250,0.2)','rgba(210,219,238,0.2)']}}};var categoryAxis=util/* merge */.TS({// The gap at both ends of the axis. For categoryAxis, boolean.
boundaryGap:true,// Set false to faster category collection.
deduplication:null,// splitArea: {
// show: false
// },
splitLine:{show:false},axisTick:{// If tick is align with label when boundaryGap is true
alignWithLabel:false,interval:'auto'},axisLabel:{interval:'auto'}},defaultOption);var valueAxis=util/* merge */.TS({boundaryGap:[0,0],axisLine:{// Not shown when other axis is categoryAxis in cartesian
show:'auto'},axisTick:{// Not shown when other axis is categoryAxis in cartesian
show:'auto'},// TODO
// min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
splitNumber:5,minorTick:{// Minor tick, not available for cateogry axis.
show:false,// Split number of minor ticks. The value should be in range of (0, 100)
splitNumber:5,// Lenght of minor tick
length:3,// Line style
lineStyle:{// Default to be same with axisTick
}},minorSplitLine:{show:false,lineStyle:{color:'#F4F7FD',width:1}}},defaultOption);var timeAxis=util/* merge */.TS({splitNumber:6,axisLabel:{// To eliminate labels that are not nice
showMinLabel:false,showMaxLabel:false,rich:{primary:{fontWeight:'bold'}}},splitLine:{show:false}},valueAxis);var logAxis=util/* defaults */.ce({logBase:10},valueAxis);/* harmony default export */ const axisDefault = ({category:categoryAxis,value:valueAxis,time:timeAxis,log:logAxis});
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(8636);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/OrdinalMeta.js
var OrdinalMeta = __webpack_require__(74566);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/axisCommonTypes.js
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
*/var AXIS_TYPES={value:1,category:1,time:1,log:1};
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/axisModelCreator.js
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
 * Generate sub axis model class
 * @param axisName 'x' 'y' 'radius' 'angle' 'parallel' ...
 */function axisModelCreator(registers,axisName,BaseAxisModelClass,extraDefaultOption){(0,util/* each */.S6)(AXIS_TYPES,function(v,axisType){var defaultOption=(0,util/* merge */.TS)((0,util/* merge */.TS)({},axisDefault[axisType],true),extraDefaultOption,true);var AxisModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(AxisModel,_super);function AxisModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=axisName+'Axis.'+axisType;return _this;}AxisModel.prototype.mergeDefaultAndTheme=function(option,ecModel){var layoutMode=(0,layout/* fetchLayoutMode */.YD)(this);var inputPositionParams=layoutMode?(0,layout/* getLayoutParams */.tE)(option):{};var themeModel=ecModel.getTheme();(0,util/* merge */.TS)(option,themeModel.get(axisType+'Axis'));(0,util/* merge */.TS)(option,this.getDefaultOption());option.type=getAxisType(option);if(layoutMode){(0,layout/* mergeLayoutParam */.dt)(option,inputPositionParams,layoutMode);}};AxisModel.prototype.optionUpdated=function(){var thisOption=this.option;if(thisOption.type==='category'){this.__ordinalMeta=OrdinalMeta/* default.createByAxisModel */.Z.createByAxisModel(this);}};/**
       * Should not be called before all of 'getInitailData' finished.
       * Because categories are collected during initializing data.
       */AxisModel.prototype.getCategories=function(rawData){var option=this.option;// FIXME
// warning if called before all of 'getInitailData' finished.
if(option.type==='category'){if(rawData){return option.data;}return this.__ordinalMeta.categories;}};AxisModel.prototype.getOrdinalMeta=function(){return this.__ordinalMeta;};AxisModel.type=axisName+'Axis.'+axisType;AxisModel.defaultOption=defaultOption;return AxisModel;}(BaseAxisModelClass);registers.registerComponentModel(AxisModel);});registers.registerSubTypeDefaulter(axisName+'Axis',getAxisType);}function getAxisType(option){// Default axis with data is category axis
return option.type||(option.data?'category':'value');}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/axisHelper.js + 1 modules
var axisHelper = __webpack_require__(48692);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(54865);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/cartesian/Cartesian.js
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
*/var Cartesian=/** @class */function(){function Cartesian(name){this.type='cartesian';this._dimList=[];this._axes={};this.name=name||'';}Cartesian.prototype.getAxis=function(dim){return this._axes[dim];};Cartesian.prototype.getAxes=function(){return util/* map */.UI(this._dimList,function(dim){return this._axes[dim];},this);};Cartesian.prototype.getAxesByScale=function(scaleType){scaleType=scaleType.toLowerCase();return util/* filter */.hX(this.getAxes(),function(axis){return axis.scale.type===scaleType;});};Cartesian.prototype.addAxis=function(axis){var dim=axis.dim;this._axes[dim]=axis;this._dimList.push(dim);};return Cartesian;}();;/* harmony default export */ const cartesian_Cartesian = (Cartesian);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(13518);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(79070);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/cartesian/Cartesian2D.js
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
*/var cartesian2DDimensions=['x','y'];function canCalculateAffineTransform(scale){return scale.type==='interval'||scale.type==='time';}var Cartesian2D=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(Cartesian2D,_super);function Cartesian2D(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type='cartesian2d';_this.dimensions=cartesian2DDimensions;return _this;}/**
   * Calculate an affine transform matrix if two axes are time or value.
   * It's mainly for accelartion on the large time series data.
   */Cartesian2D.prototype.calcAffineTransform=function(){this._transform=this._invTransform=null;var xAxisScale=this.getAxis('x').scale;var yAxisScale=this.getAxis('y').scale;if(!canCalculateAffineTransform(xAxisScale)||!canCalculateAffineTransform(yAxisScale)){return;}var xScaleExtent=xAxisScale.getExtent();var yScaleExtent=yAxisScale.getExtent();var start=this.dataToPoint([xScaleExtent[0],yScaleExtent[0]]);var end=this.dataToPoint([xScaleExtent[1],yScaleExtent[1]]);var xScaleSpan=xScaleExtent[1]-xScaleExtent[0];var yScaleSpan=yScaleExtent[1]-yScaleExtent[0];if(!xScaleSpan||!yScaleSpan){return;}// Accelerate data to point calculation on the special large time series data.
var scaleX=(end[0]-start[0])/xScaleSpan;var scaleY=(end[1]-start[1])/yScaleSpan;var translateX=start[0]-xScaleExtent[0]*scaleX;var translateY=start[1]-yScaleExtent[0]*scaleY;var m=this._transform=[scaleX,0,0,scaleY,translateX,translateY];this._invTransform=(0,matrix/* invert */.U_)([],m);};/**
   * Base axis will be used on stacking.
   */Cartesian2D.prototype.getBaseAxis=function(){return this.getAxesByScale('ordinal')[0]||this.getAxesByScale('time')[0]||this.getAxis('x');};Cartesian2D.prototype.containPoint=function(point){var axisX=this.getAxis('x');var axisY=this.getAxis('y');return axisX.contain(axisX.toLocalCoord(point[0]))&&axisY.contain(axisY.toLocalCoord(point[1]));};Cartesian2D.prototype.containData=function(data){return this.getAxis('x').containData(data[0])&&this.getAxis('y').containData(data[1]);};Cartesian2D.prototype.containZone=function(data1,data2){var zoneDiag1=this.dataToPoint(data1);var zoneDiag2=this.dataToPoint(data2);var area=this.getArea();var zone=new BoundingRect/* default */.Z(zoneDiag1[0],zoneDiag1[1],zoneDiag2[0]-zoneDiag1[0],zoneDiag2[1]-zoneDiag1[1]);return area.intersect(zone);};Cartesian2D.prototype.dataToPoint=function(data,clamp,out){out=out||[];var xVal=data[0];var yVal=data[1];// Fast path
if(this._transform// It's supported that if data is like `[Inifity, 123]`, where only Y pixel calculated.
&&xVal!=null&&isFinite(xVal)&&yVal!=null&&isFinite(yVal)){return (0,vector/* applyTransform */.Ne)(out,data,this._transform);}var xAxis=this.getAxis('x');var yAxis=this.getAxis('y');out[0]=xAxis.toGlobalCoord(xAxis.dataToCoord(xVal,clamp));out[1]=yAxis.toGlobalCoord(yAxis.dataToCoord(yVal,clamp));return out;};Cartesian2D.prototype.clampData=function(data,out){var xScale=this.getAxis('x').scale;var yScale=this.getAxis('y').scale;var xAxisExtent=xScale.getExtent();var yAxisExtent=yScale.getExtent();var x=xScale.parse(data[0]);var y=yScale.parse(data[1]);out=out||[];out[0]=Math.min(Math.max(Math.min(xAxisExtent[0],xAxisExtent[1]),x),Math.max(xAxisExtent[0],xAxisExtent[1]));out[1]=Math.min(Math.max(Math.min(yAxisExtent[0],yAxisExtent[1]),y),Math.max(yAxisExtent[0],yAxisExtent[1]));return out;};Cartesian2D.prototype.pointToData=function(point,clamp){var out=[];if(this._invTransform){return (0,vector/* applyTransform */.Ne)(out,point,this._invTransform);}var xAxis=this.getAxis('x');var yAxis=this.getAxis('y');out[0]=xAxis.coordToData(xAxis.toLocalCoord(point[0]),clamp);out[1]=yAxis.coordToData(yAxis.toLocalCoord(point[1]),clamp);return out;};Cartesian2D.prototype.getOtherAxis=function(axis){return this.getAxis(axis.dim==='x'?'y':'x');};/**
   * Get rect area of cartesian.
   * Area will have a contain function to determine if a point is in the coordinate system.
   */Cartesian2D.prototype.getArea=function(){var xExtent=this.getAxis('x').getGlobalExtent();var yExtent=this.getAxis('y').getGlobalExtent();var x=Math.min(xExtent[0],xExtent[1]);var y=Math.min(yExtent[0],yExtent[1]);var width=Math.max(xExtent[0],xExtent[1])-x;var height=Math.max(yExtent[0],yExtent[1])-y;return new BoundingRect/* default */.Z(x,y,width,height);};return Cartesian2D;}(cartesian_Cartesian);;/* harmony default export */ const cartesian_Cartesian2D = (Cartesian2D);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(20194);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/axisTickLabelBuilder.js
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
*/var inner=(0,model/* makeInner */.Yf)();function createAxisLabels(axis){// Only ordinal scale support tick interval
return axis.type==='category'?makeCategoryLabels(axis):makeRealNumberLabels(axis);}/**
 * @param {module:echats/coord/Axis} axis
 * @param {module:echarts/model/Model} tickModel For example, can be axisTick, splitLine, splitArea.
 * @return {Object} {
 *     ticks: Array.<number>
 *     tickCategoryInterval: number
 * }
 */function createAxisTicks(axis,tickModel){// Only ordinal scale support tick interval
return axis.type==='category'?makeCategoryTicks(axis,tickModel):{ticks:util/* map */.UI(axis.scale.getTicks(),function(tick){return tick.value;})};}function makeCategoryLabels(axis){var labelModel=axis.getLabelModel();var result=makeCategoryLabelsActually(axis,labelModel);return!labelModel.get('show')||axis.scale.isBlank()?{labels:[],labelCategoryInterval:result.labelCategoryInterval}:result;}function makeCategoryLabelsActually(axis,labelModel){var labelsCache=getListCache(axis,'labels');var optionLabelInterval=(0,axisHelper/* getOptionCategoryInterval */.rk)(labelModel);var result=listCacheGet(labelsCache,optionLabelInterval);if(result){return result;}var labels;var numericLabelInterval;if(util/* isFunction */.mf(optionLabelInterval)){labels=makeLabelsByCustomizedCategoryInterval(axis,optionLabelInterval);}else{numericLabelInterval=optionLabelInterval==='auto'?makeAutoCategoryInterval(axis):optionLabelInterval;labels=makeLabelsByNumericCategoryInterval(axis,numericLabelInterval);}// Cache to avoid calling interval function repeatly.
return listCacheSet(labelsCache,optionLabelInterval,{labels:labels,labelCategoryInterval:numericLabelInterval});}function makeCategoryTicks(axis,tickModel){var ticksCache=getListCache(axis,'ticks');var optionTickInterval=(0,axisHelper/* getOptionCategoryInterval */.rk)(tickModel);var result=listCacheGet(ticksCache,optionTickInterval);if(result){return result;}var ticks;var tickCategoryInterval;// Optimize for the case that large category data and no label displayed,
// we should not return all ticks.
if(!tickModel.get('show')||axis.scale.isBlank()){ticks=[];}if(util/* isFunction */.mf(optionTickInterval)){ticks=makeLabelsByCustomizedCategoryInterval(axis,optionTickInterval,true);}// Always use label interval by default despite label show. Consider this
// scenario, Use multiple grid with the xAxis sync, and only one xAxis shows
// labels. `splitLine` and `axisTick` should be consistent in this case.
else if(optionTickInterval==='auto'){var labelsResult=makeCategoryLabelsActually(axis,axis.getLabelModel());tickCategoryInterval=labelsResult.labelCategoryInterval;ticks=util/* map */.UI(labelsResult.labels,function(labelItem){return labelItem.tickValue;});}else{tickCategoryInterval=optionTickInterval;ticks=makeLabelsByNumericCategoryInterval(axis,tickCategoryInterval,true);}// Cache to avoid calling interval function repeatly.
return listCacheSet(ticksCache,optionTickInterval,{ticks:ticks,tickCategoryInterval:tickCategoryInterval});}function makeRealNumberLabels(axis){var ticks=axis.scale.getTicks();var labelFormatter=(0,axisHelper/* makeLabelFormatter */.J9)(axis);return{labels:util/* map */.UI(ticks,function(tick,idx){return{level:tick.level,formattedLabel:labelFormatter(tick,idx),rawLabel:axis.scale.getLabel(tick),tickValue:tick.value};})};}function getListCache(axis,prop){// Because key can be funciton, and cache size always be small, we use array cache.
return inner(axis)[prop]||(inner(axis)[prop]=[]);}function listCacheGet(cache,key){for(var i=0;i<cache.length;i++){if(cache[i].key===key){return cache[i].value;}}}function listCacheSet(cache,key,value){cache.push({key:key,value:value});return value;}function makeAutoCategoryInterval(axis){var result=inner(axis).autoInterval;return result!=null?result:inner(axis).autoInterval=axis.calculateCategoryInterval();}/**
 * Calculate interval for category axis ticks and labels.
 * To get precise result, at least one of `getRotate` and `isHorizontal`
 * should be implemented in axis.
 */function calculateCategoryInterval(axis){var params=fetchAutoCategoryIntervalCalculationParams(axis);var labelFormatter=(0,axisHelper/* makeLabelFormatter */.J9)(axis);var rotation=(params.axisRotate-params.labelRotate)/180*Math.PI;var ordinalScale=axis.scale;var ordinalExtent=ordinalScale.getExtent();// Providing this method is for optimization:
// avoid generating a long array by `getTicks`
// in large category data case.
var tickCount=ordinalScale.count();if(ordinalExtent[1]-ordinalExtent[0]<1){return 0;}var step=1;// Simple optimization. Empirical value: tick count should less than 40.
if(tickCount>40){step=Math.max(1,Math.floor(tickCount/40));}var tickValue=ordinalExtent[0];var unitSpan=axis.dataToCoord(tickValue+1)-axis.dataToCoord(tickValue);var unitW=Math.abs(unitSpan*Math.cos(rotation));var unitH=Math.abs(unitSpan*Math.sin(rotation));var maxW=0;var maxH=0;// Caution: Performance sensitive for large category data.
// Consider dataZoom, we should make appropriate step to avoid O(n) loop.
for(;tickValue<=ordinalExtent[1];tickValue+=step){var width=0;var height=0;// Not precise, do not consider align and vertical align
// and each distance from axis line yet.
var rect=contain_text/* getBoundingRect */.lP(labelFormatter({value:tickValue}),params.font,'center','top');// Magic number
width=rect.width*1.3;height=rect.height*1.3;// Min size, void long loop.
maxW=Math.max(maxW,width,7);maxH=Math.max(maxH,height,7);}var dw=maxW/unitW;var dh=maxH/unitH;// 0/0 is NaN, 1/0 is Infinity.
isNaN(dw)&&(dw=Infinity);isNaN(dh)&&(dh=Infinity);var interval=Math.max(0,Math.floor(Math.min(dw,dh)));var cache=inner(axis.model);var axisExtent=axis.getExtent();var lastAutoInterval=cache.lastAutoInterval;var lastTickCount=cache.lastTickCount;// Use cache to keep interval stable while moving zoom window,
// otherwise the calculated interval might jitter when the zoom
// window size is close to the interval-changing size.
// For example, if all of the axis labels are `a, b, c, d, e, f, g`.
// The jitter will cause that sometimes the displayed labels are
// `a, d, g` (interval: 2) sometimes `a, c, e`(interval: 1).
if(lastAutoInterval!=null&&lastTickCount!=null&&Math.abs(lastAutoInterval-interval)<=1&&Math.abs(lastTickCount-tickCount)<=1// Always choose the bigger one, otherwise the critical
// point is not the same when zooming in or zooming out.
&&lastAutoInterval>interval// If the axis change is caused by chart resize, the cache should not
// be used. Otherwise some hiden labels might not be shown again.
&&cache.axisExtent0===axisExtent[0]&&cache.axisExtent1===axisExtent[1]){interval=lastAutoInterval;}// Only update cache if cache not used, otherwise the
// changing of interval is too insensitive.
else{cache.lastTickCount=tickCount;cache.lastAutoInterval=interval;cache.axisExtent0=axisExtent[0];cache.axisExtent1=axisExtent[1];}return interval;}function fetchAutoCategoryIntervalCalculationParams(axis){var labelModel=axis.getLabelModel();return{axisRotate:axis.getRotate?axis.getRotate():axis.isHorizontal&&!axis.isHorizontal()?90:0,labelRotate:labelModel.get('rotate')||0,font:labelModel.getFont()};}function makeLabelsByNumericCategoryInterval(axis,categoryInterval,onlyTick){var labelFormatter=(0,axisHelper/* makeLabelFormatter */.J9)(axis);var ordinalScale=axis.scale;var ordinalExtent=ordinalScale.getExtent();var labelModel=axis.getLabelModel();var result=[];// TODO: axisType: ordinalTime, pick the tick from each month/day/year/...
var step=Math.max((categoryInterval||0)+1,1);var startTick=ordinalExtent[0];var tickCount=ordinalScale.count();// Calculate start tick based on zero if possible to keep label consistent
// while zooming and moving while interval > 0. Otherwise the selection
// of displayable ticks and symbols probably keep changing.
// 3 is empirical value.
if(startTick!==0&&step>1&&tickCount/step>2){startTick=Math.round(Math.ceil(startTick/step)*step);}// (1) Only add min max label here but leave overlap checking
// to render stage, which also ensure the returned list
// suitable for splitLine and splitArea rendering.
// (2) Scales except category always contain min max label so
// do not need to perform this process.
var showAllLabel=(0,axisHelper/* shouldShowAllLabels */.WY)(axis);var includeMinLabel=labelModel.get('showMinLabel')||showAllLabel;var includeMaxLabel=labelModel.get('showMaxLabel')||showAllLabel;if(includeMinLabel&&startTick!==ordinalExtent[0]){addItem(ordinalExtent[0]);}// Optimize: avoid generating large array by `ordinalScale.getTicks()`.
var tickValue=startTick;for(;tickValue<=ordinalExtent[1];tickValue+=step){addItem(tickValue);}if(includeMaxLabel&&tickValue-step!==ordinalExtent[1]){addItem(ordinalExtent[1]);}function addItem(tickValue){var tickObj={value:tickValue};result.push(onlyTick?tickValue:{formattedLabel:labelFormatter(tickObj),rawLabel:ordinalScale.getLabel(tickObj),tickValue:tickValue});}return result;}function makeLabelsByCustomizedCategoryInterval(axis,categoryInterval,onlyTick){var ordinalScale=axis.scale;var labelFormatter=(0,axisHelper/* makeLabelFormatter */.J9)(axis);var result=[];util/* each */.S6(ordinalScale.getTicks(),function(tick){var rawLabel=ordinalScale.getLabel(tick);var tickValue=tick.value;if(categoryInterval(tick.value,rawLabel)){result.push(onlyTick?tickValue:{formattedLabel:labelFormatter(tick),rawLabel:rawLabel,tickValue:tickValue});}});return result;}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/Axis.js
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
*/var NORMALIZED_EXTENT=[0,1];/**
 * Base class of Axis.
 */var Axis=/** @class */function(){function Axis(dim,scale,extent){this.onBand=false;this.inverse=false;this.dim=dim;this.scale=scale;this._extent=extent||[0,0];}/**
   * If axis extent contain given coord
   */Axis.prototype.contain=function(coord){var extent=this._extent;var min=Math.min(extent[0],extent[1]);var max=Math.max(extent[0],extent[1]);return coord>=min&&coord<=max;};/**
   * If axis extent contain given data
   */Axis.prototype.containData=function(data){return this.scale.contain(data);};/**
   * Get coord extent.
   */Axis.prototype.getExtent=function(){return this._extent.slice();};/**
   * Get precision used for formatting
   */Axis.prototype.getPixelPrecision=function(dataExtent){return (0,number/* getPixelPrecision */.M9)(dataExtent||this.scale.getExtent(),this._extent);};/**
   * Set coord extent
   */Axis.prototype.setExtent=function(start,end){var extent=this._extent;extent[0]=start;extent[1]=end;};/**
   * Convert data to coord. Data is the rank if it has an ordinal scale
   */Axis.prototype.dataToCoord=function(data,clamp){var extent=this._extent;var scale=this.scale;data=scale.normalize(data);if(this.onBand&&scale.type==='ordinal'){extent=extent.slice();fixExtentWithBands(extent,scale.count());}return (0,number/* linearMap */.NU)(data,NORMALIZED_EXTENT,extent,clamp);};/**
   * Convert coord to data. Data is the rank if it has an ordinal scale
   */Axis.prototype.coordToData=function(coord,clamp){var extent=this._extent;var scale=this.scale;if(this.onBand&&scale.type==='ordinal'){extent=extent.slice();fixExtentWithBands(extent,scale.count());}var t=(0,number/* linearMap */.NU)(coord,extent,NORMALIZED_EXTENT,clamp);return this.scale.scale(t);};/**
   * Convert pixel point to data in axis
   */Axis.prototype.pointToData=function(point,clamp){// Should be implemented in derived class if necessary.
return;};/**
   * Different from `zrUtil.map(axis.getTicks(), axis.dataToCoord, axis)`,
   * `axis.getTicksCoords` considers `onBand`, which is used by
   * `boundaryGap:true` of category axis and splitLine and splitArea.
   * @param opt.tickModel default: axis.model.getModel('axisTick')
   * @param opt.clamp If `true`, the first and the last
   *        tick must be at the axis end points. Otherwise, clip ticks
   *        that outside the axis extent.
   */Axis.prototype.getTicksCoords=function(opt){opt=opt||{};var tickModel=opt.tickModel||this.getTickModel();var result=createAxisTicks(this,tickModel);var ticks=result.ticks;var ticksCoords=(0,util/* map */.UI)(ticks,function(tickVal){return{coord:this.dataToCoord(this.scale.type==='ordinal'?this.scale.getRawOrdinalNumber(tickVal):tickVal),tickValue:tickVal};},this);var alignWithLabel=tickModel.get('alignWithLabel');fixOnBandTicksCoords(this,ticksCoords,alignWithLabel,opt.clamp);return ticksCoords;};Axis.prototype.getMinorTicksCoords=function(){if(this.scale.type==='ordinal'){// Category axis doesn't support minor ticks
return[];}var minorTickModel=this.model.getModel('minorTick');var splitNumber=minorTickModel.get('splitNumber');// Protection.
if(!(splitNumber>0&&splitNumber<100)){splitNumber=5;}var minorTicks=this.scale.getMinorTicks(splitNumber);var minorTicksCoords=(0,util/* map */.UI)(minorTicks,function(minorTicksGroup){return (0,util/* map */.UI)(minorTicksGroup,function(minorTick){return{coord:this.dataToCoord(minorTick),tickValue:minorTick};},this);},this);return minorTicksCoords;};Axis.prototype.getViewLabels=function(){return createAxisLabels(this).labels;};Axis.prototype.getLabelModel=function(){return this.model.getModel('axisLabel');};/**
   * Notice here we only get the default tick model. For splitLine
   * or splitArea, we should pass the splitLineModel or splitAreaModel
   * manually when calling `getTicksCoords`.
   * In GL, this method may be overrided to:
   * `axisModel.getModel('axisTick', grid3DModel.getModel('axisTick'));`
   */Axis.prototype.getTickModel=function(){return this.model.getModel('axisTick');};/**
   * Get width of band
   */Axis.prototype.getBandWidth=function(){var axisExtent=this._extent;var dataExtent=this.scale.getExtent();var len=dataExtent[1]-dataExtent[0]+(this.onBand?1:0);// Fix #2728, avoid NaN when only one data.
len===0&&(len=1);var size=Math.abs(axisExtent[1]-axisExtent[0]);return Math.abs(size)/len;};/**
   * Only be called in category axis.
   * Can be overrided, consider other axes like in 3D.
   * @return Auto interval for cateogry axis tick and label
   */Axis.prototype.calculateCategoryInterval=function(){return calculateCategoryInterval(this);};return Axis;}();function fixExtentWithBands(extent,nTick){var size=extent[1]-extent[0];var len=nTick;var margin=size/len/2;extent[0]+=margin;extent[1]-=margin;}// If axis has labels [1, 2, 3, 4]. Bands on the axis are
// |---1---|---2---|---3---|---4---|.
// So the displayed ticks and splitLine/splitArea should between
// each data item, otherwise cause misleading (e.g., split tow bars
// of a single data item when there are two bar series).
// Also consider if tickCategoryInterval > 0 and onBand, ticks and
// splitLine/spliteArea should layout appropriately corresponding
// to displayed labels. (So we should not use `getBandWidth` in this
// case).
function fixOnBandTicksCoords(axis,ticksCoords,alignWithLabel,clamp){var ticksLen=ticksCoords.length;if(!axis.onBand||alignWithLabel||!ticksLen){return;}var axisExtent=axis.getExtent();var last;var diffSize;if(ticksLen===1){ticksCoords[0].coord=axisExtent[0];last=ticksCoords[1]={coord:axisExtent[0]};}else{var crossLen=ticksCoords[ticksLen-1].tickValue-ticksCoords[0].tickValue;var shift_1=(ticksCoords[ticksLen-1].coord-ticksCoords[0].coord)/crossLen;(0,util/* each */.S6)(ticksCoords,function(ticksItem){ticksItem.coord-=shift_1/2;});var dataExtent=axis.scale.getExtent();diffSize=1+dataExtent[1]-ticksCoords[ticksLen-1].tickValue;last={coord:ticksCoords[ticksLen-1].coord+shift_1*diffSize};ticksCoords.push(last);}var inverse=axisExtent[0]>axisExtent[1];// Handling clamp.
if(littleThan(ticksCoords[0].coord,axisExtent[0])){clamp?ticksCoords[0].coord=axisExtent[0]:ticksCoords.shift();}if(clamp&&littleThan(axisExtent[0],ticksCoords[0].coord)){ticksCoords.unshift({coord:axisExtent[0]});}if(littleThan(axisExtent[1],last.coord)){clamp?last.coord=axisExtent[1]:ticksCoords.pop();}if(clamp&&littleThan(last.coord,axisExtent[1])){ticksCoords.push({coord:axisExtent[1]});}function littleThan(a,b){// Avoid rounding error cause calculated tick coord different with extent.
// It may cause an extra unecessary tick added.
a=(0,number/* round */.NM)(a);b=(0,number/* round */.NM)(b);return inverse?a>b:a<b;}}/* harmony default export */ const coord_Axis = (Axis);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/cartesian/Axis2D.js
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
*/var Axis2D=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(Axis2D,_super);function Axis2D(dim,scale,coordExtent,axisType,position){var _this=_super.call(this,dim,scale,coordExtent)||this;/**
     * Index of axis, can be used as key
     * Injected outside.
     */_this.index=0;_this.type=axisType||'value';_this.position=position||'bottom';return _this;}Axis2D.prototype.isHorizontal=function(){var position=this.position;return position==='top'||position==='bottom';};/**
   * Each item cooresponds to this.getExtent(), which
   * means globalExtent[0] may greater than globalExtent[1],
   * unless `asc` is input.
   *
   * @param {boolean} [asc]
   * @return {Array.<number>}
   */Axis2D.prototype.getGlobalExtent=function(asc){var ret=this.getExtent();ret[0]=this.toGlobalCoord(ret[0]);ret[1]=this.toGlobalCoord(ret[1]);asc&&ret[0]>ret[1]&&ret.reverse();return ret;};Axis2D.prototype.pointToData=function(point,clamp){return this.coordToData(this.toLocalCoord(point[this.dim==='x'?0:1]),clamp);};/**
   * Set ordinalSortInfo
   * @param info new OrdinalSortInfo
   */Axis2D.prototype.setCategorySortInfo=function(info){if(this.type!=='category'){return false;}this.model.option.categorySortInfo=info;this.scale.setSortInfo(info);};return Axis2D;}(coord_Axis);/* harmony default export */ const cartesian_Axis2D = (Axis2D);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js
var cartesianAxisHelper = __webpack_require__(6092);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/scale/helper.js
var helper = __webpack_require__(32590);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/scale/Interval.js
var Interval = __webpack_require__(46271);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/axisAlignTicks.js
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
*/var mathLog=Math.log;function alignScaleTicks(scale,axisModel,alignToScale){var intervalScaleProto=Interval/* default.prototype */.Z.prototype;// NOTE: There is a precondition for log scale  here:
// In log scale we store _interval and _extent of exponent value.
// So if we use the method of InternalScale to set/get these data.
// It process the exponent value, which is linear and what we want here.
var alignToTicks=intervalScaleProto.getTicks.call(alignToScale);var alignToNicedTicks=intervalScaleProto.getTicks.call(alignToScale,true);var alignToSplitNumber=alignToTicks.length-1;var alignToInterval=intervalScaleProto.getInterval.call(alignToScale);var scaleExtent=(0,axisHelper/* getScaleExtent */.Xv)(scale,axisModel);var rawExtent=scaleExtent.extent;var isMinFixed=scaleExtent.fixMin;var isMaxFixed=scaleExtent.fixMax;if(scale.type==='log'){var logBase=mathLog(scale.base);rawExtent=[mathLog(rawExtent[0])/logBase,mathLog(rawExtent[1])/logBase];}scale.setExtent(rawExtent[0],rawExtent[1]);scale.calcNiceExtent({splitNumber:alignToSplitNumber,fixMin:isMinFixed,fixMax:isMaxFixed});var extent=intervalScaleProto.getExtent.call(scale);// Need to update the rawExtent.
// Because value in rawExtent may be not parsed. e.g. 'dataMin', 'dataMax'
if(isMinFixed){rawExtent[0]=extent[0];}if(isMaxFixed){rawExtent[1]=extent[1];}var interval=intervalScaleProto.getInterval.call(scale);var min=rawExtent[0];var max=rawExtent[1];if(isMinFixed&&isMaxFixed){// User set min, max, divide to get new interval
interval=(max-min)/alignToSplitNumber;}else if(isMinFixed){max=rawExtent[0]+interval*alignToSplitNumber;// User set min, expand extent on the other side
while(max<rawExtent[1]&&isFinite(max)&&isFinite(rawExtent[1])){interval=(0,helper/* increaseInterval */.r1)(interval);max=rawExtent[0]+interval*alignToSplitNumber;}}else if(isMaxFixed){// User set max, expand extent on the other side
min=rawExtent[1]-interval*alignToSplitNumber;while(min>rawExtent[0]&&isFinite(min)&&isFinite(rawExtent[0])){interval=(0,helper/* increaseInterval */.r1)(interval);min=rawExtent[1]-interval*alignToSplitNumber;}}else{var nicedSplitNumber=scale.getTicks().length-1;if(nicedSplitNumber>alignToSplitNumber){interval=(0,helper/* increaseInterval */.r1)(interval);}var range=interval*alignToSplitNumber;max=Math.ceil(rawExtent[1]/interval)*interval;min=(0,number/* round */.NM)(max-range);// Not change the result that crossing zero.
if(min<0&&rawExtent[0]>=0){min=0;max=(0,number/* round */.NM)(range);}else if(max>0&&rawExtent[1]<=0){max=0;min=-(0,number/* round */.NM)(range);}}// Adjust min, max based on the extent of alignTo. When min or max is set in alignTo scale
var t0=(alignToTicks[0].value-alignToNicedTicks[0].value)/alignToInterval;var t1=(alignToTicks[alignToSplitNumber].value-alignToNicedTicks[alignToSplitNumber].value)/alignToInterval;// NOTE: Must in setExtent -> setInterval -> setNiceExtent order.
intervalScaleProto.setExtent.call(scale,min+interval*t0,max+interval*t1);intervalScaleProto.setInterval.call(scale,interval);if(t0||t1){intervalScaleProto.setNiceExtent.call(scale,min+interval,max-interval);}if(false){ var ticks; }}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/cartesian/Grid.js
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
*/ /**
 * Grid is a region which contains at most 4 cartesian systems
 *
 * TODO Default cartesian
 */var Grid=/** @class */function(){function Grid(gridModel,ecModel,api){// FIXME:TS where used (different from registered type 'cartesian2d')?
this.type='grid';this._coordsMap={};this._coordsList=[];this._axesMap={};this._axesList=[];this.axisPointerEnabled=true;this.dimensions=cartesian2DDimensions;this._initCartesian(gridModel,ecModel,api);this.model=gridModel;}Grid.prototype.getRect=function(){return this._rect;};Grid.prototype.update=function(ecModel,api){var axesMap=this._axesMap;this._updateScale(ecModel,this.model);function updateAxisTicks(axes){var alignTo;// Axis is added in order of axisIndex.
var axesIndices=(0,util/* keys */.XP)(axes);var len=axesIndices.length;if(!len){return;}var axisNeedsAlign=[];// Process once and calculate the ticks for those don't use alignTicks.
for(var i=len-1;i>=0;i--){var idx=+axesIndices[i];// Convert to number.
var axis=axes[idx];var model=axis.model;var scale=axis.scale;if(// Only value and log axis without interval support alignTicks.
(0,helper/* isIntervalOrLogScale */.lM)(scale)&&model.get('alignTicks')&&model.get('interval')==null){axisNeedsAlign.push(axis);}else{(0,axisHelper/* niceScaleExtent */.Jk)(scale,model);if((0,helper/* isIntervalOrLogScale */.lM)(scale)){// Can only align to interval or log axis.
alignTo=axis;}}};// All axes has set alignTicks. Pick the first one.
// PENDING. Should we find the axis that both set interval, min, max and align to this one?
if(axisNeedsAlign.length){if(!alignTo){alignTo=axisNeedsAlign.pop();(0,axisHelper/* niceScaleExtent */.Jk)(alignTo.scale,alignTo.model);}(0,util/* each */.S6)(axisNeedsAlign,function(axis){alignScaleTicks(axis.scale,axis.model,alignTo.scale);});}}updateAxisTicks(axesMap.x);updateAxisTicks(axesMap.y);// Key: axisDim_axisIndex, value: boolean, whether onZero target.
var onZeroRecords={};(0,util/* each */.S6)(axesMap.x,function(xAxis){fixAxisOnZero(axesMap,'y',xAxis,onZeroRecords);});(0,util/* each */.S6)(axesMap.y,function(yAxis){fixAxisOnZero(axesMap,'x',yAxis,onZeroRecords);});// Resize again if containLabel is enabled
// FIXME It may cause getting wrong grid size in data processing stage
this.resize(this.model,api);};/**
   * Resize the grid
   */Grid.prototype.resize=function(gridModel,api,ignoreContainLabel){var boxLayoutParams=gridModel.getBoxLayoutParams();var isContainLabel=!ignoreContainLabel&&gridModel.get('containLabel');var gridRect=(0,layout/* getLayoutRect */.ME)(boxLayoutParams,{width:api.getWidth(),height:api.getHeight()});this._rect=gridRect;var axesList=this._axesList;adjustAxes();// Minus label size
if(isContainLabel){(0,util/* each */.S6)(axesList,function(axis){if(!axis.model.get(['axisLabel','inside'])){var labelUnionRect=(0,axisHelper/* estimateLabelUnionRect */.Do)(axis);if(labelUnionRect){var dim=axis.isHorizontal()?'height':'width';var margin=axis.model.get(['axisLabel','margin']);gridRect[dim]-=labelUnionRect[dim]+margin;if(axis.position==='top'){gridRect.y+=labelUnionRect.height+margin;}else if(axis.position==='left'){gridRect.x+=labelUnionRect.width+margin;}}}});adjustAxes();}(0,util/* each */.S6)(this._coordsList,function(coord){// Calculate affine matrix to accelerate the data to point transform.
// If all the axes scales are time or value.
coord.calcAffineTransform();});function adjustAxes(){(0,util/* each */.S6)(axesList,function(axis){var isHorizontal=axis.isHorizontal();var extent=isHorizontal?[0,gridRect.width]:[0,gridRect.height];var idx=axis.inverse?1:0;axis.setExtent(extent[idx],extent[1-idx]);updateAxisTransform(axis,isHorizontal?gridRect.x:gridRect.y);});}};Grid.prototype.getAxis=function(dim,axisIndex){var axesMapOnDim=this._axesMap[dim];if(axesMapOnDim!=null){return axesMapOnDim[axisIndex||0];}};Grid.prototype.getAxes=function(){return this._axesList.slice();};Grid.prototype.getCartesian=function(xAxisIndex,yAxisIndex){if(xAxisIndex!=null&&yAxisIndex!=null){var key='x'+xAxisIndex+'y'+yAxisIndex;return this._coordsMap[key];}if((0,util/* isObject */.Kn)(xAxisIndex)){yAxisIndex=xAxisIndex.yAxisIndex;xAxisIndex=xAxisIndex.xAxisIndex;}for(var i=0,coordList=this._coordsList;i<coordList.length;i++){if(coordList[i].getAxis('x').index===xAxisIndex||coordList[i].getAxis('y').index===yAxisIndex){return coordList[i];}}};Grid.prototype.getCartesians=function(){return this._coordsList.slice();};/**
   * @implements
   */Grid.prototype.convertToPixel=function(ecModel,finder,value){var target=this._findConvertTarget(finder);return target.cartesian?target.cartesian.dataToPoint(value):target.axis?target.axis.toGlobalCoord(target.axis.dataToCoord(value)):null;};/**
   * @implements
   */Grid.prototype.convertFromPixel=function(ecModel,finder,value){var target=this._findConvertTarget(finder);return target.cartesian?target.cartesian.pointToData(value):target.axis?target.axis.coordToData(target.axis.toLocalCoord(value)):null;};Grid.prototype._findConvertTarget=function(finder){var seriesModel=finder.seriesModel;var xAxisModel=finder.xAxisModel||seriesModel&&seriesModel.getReferringComponents('xAxis',model/* SINGLE_REFERRING */.C6).models[0];var yAxisModel=finder.yAxisModel||seriesModel&&seriesModel.getReferringComponents('yAxis',model/* SINGLE_REFERRING */.C6).models[0];var gridModel=finder.gridModel;var coordsList=this._coordsList;var cartesian;var axis;if(seriesModel){cartesian=seriesModel.coordinateSystem;(0,util/* indexOf */.cq)(coordsList,cartesian)<0&&(cartesian=null);}else if(xAxisModel&&yAxisModel){cartesian=this.getCartesian(xAxisModel.componentIndex,yAxisModel.componentIndex);}else if(xAxisModel){axis=this.getAxis('x',xAxisModel.componentIndex);}else if(yAxisModel){axis=this.getAxis('y',yAxisModel.componentIndex);}// Lowest priority.
else if(gridModel){var grid=gridModel.coordinateSystem;if(grid===this){cartesian=this._coordsList[0];}}return{cartesian:cartesian,axis:axis};};/**
   * @implements
   */Grid.prototype.containPoint=function(point){var coord=this._coordsList[0];if(coord){return coord.containPoint(point);}};/**
   * Initialize cartesian coordinate systems
   */Grid.prototype._initCartesian=function(gridModel,ecModel,api){var _this=this;var grid=this;var axisPositionUsed={left:false,right:false,top:false,bottom:false};var axesMap={x:{},y:{}};var axesCount={x:0,y:0};/// Create axis
ecModel.eachComponent('xAxis',createAxisCreator('x'),this);ecModel.eachComponent('yAxis',createAxisCreator('y'),this);if(!axesCount.x||!axesCount.y){// Roll back when there no either x or y axis
this._axesMap={};this._axesList=[];return;}this._axesMap=axesMap;/// Create cartesian2d
(0,util/* each */.S6)(axesMap.x,function(xAxis,xAxisIndex){(0,util/* each */.S6)(axesMap.y,function(yAxis,yAxisIndex){var key='x'+xAxisIndex+'y'+yAxisIndex;var cartesian=new cartesian_Cartesian2D(key);cartesian.master=_this;cartesian.model=gridModel;_this._coordsMap[key]=cartesian;_this._coordsList.push(cartesian);cartesian.addAxis(xAxis);cartesian.addAxis(yAxis);});});function createAxisCreator(dimName){return function(axisModel,idx){if(!isAxisUsedInTheGrid(axisModel,gridModel)){return;}var axisPosition=axisModel.get('position');if(dimName==='x'){// Fix position
if(axisPosition!=='top'&&axisPosition!=='bottom'){// Default bottom of X
axisPosition=axisPositionUsed.bottom?'top':'bottom';}}else{// Fix position
if(axisPosition!=='left'&&axisPosition!=='right'){// Default left of Y
axisPosition=axisPositionUsed.left?'right':'left';}}axisPositionUsed[axisPosition]=true;var axis=new cartesian_Axis2D(dimName,(0,axisHelper/* createScaleByModel */.aG)(axisModel),[0,0],axisModel.get('type'),axisPosition);var isCategory=axis.type==='category';axis.onBand=isCategory&&axisModel.get('boundaryGap');axis.inverse=axisModel.get('inverse');// Inject axis into axisModel
axisModel.axis=axis;// Inject axisModel into axis
axis.model=axisModel;// Inject grid info axis
axis.grid=grid;// Index of axis, can be used as key
axis.index=idx;grid._axesList.push(axis);axesMap[dimName][idx]=axis;axesCount[dimName]++;};}};/**
   * Update cartesian properties from series.
   */Grid.prototype._updateScale=function(ecModel,gridModel){// Reset scale
(0,util/* each */.S6)(this._axesList,function(axis){axis.scale.setExtent(Infinity,-Infinity);if(axis.type==='category'){var categorySortInfo=axis.model.get('categorySortInfo');axis.scale.setSortInfo(categorySortInfo);}});ecModel.eachSeries(function(seriesModel){if((0,cartesianAxisHelper/* isCartesian2DSeries */.Yh)(seriesModel)){var axesModelMap=(0,cartesianAxisHelper/* findAxisModels */.Mk)(seriesModel);var xAxisModel=axesModelMap.xAxisModel;var yAxisModel=axesModelMap.yAxisModel;if(!isAxisUsedInTheGrid(xAxisModel,gridModel)||!isAxisUsedInTheGrid(yAxisModel,gridModel)){return;}var cartesian=this.getCartesian(xAxisModel.componentIndex,yAxisModel.componentIndex);var data=seriesModel.getData();var xAxis=cartesian.getAxis('x');var yAxis=cartesian.getAxis('y');unionExtent(data,xAxis);unionExtent(data,yAxis);}},this);function unionExtent(data,axis){(0,util/* each */.S6)((0,axisHelper/* getDataDimensionsOnAxis */.PY)(data,axis.dim),function(dim){axis.scale.unionExtentFromData(data,dim);});}};/**
   * @param dim 'x' or 'y' or 'auto' or null/undefined
   */Grid.prototype.getTooltipAxes=function(dim){var baseAxes=[];var otherAxes=[];(0,util/* each */.S6)(this.getCartesians(),function(cartesian){var baseAxis=dim!=null&&dim!=='auto'?cartesian.getAxis(dim):cartesian.getBaseAxis();var otherAxis=cartesian.getOtherAxis(baseAxis);(0,util/* indexOf */.cq)(baseAxes,baseAxis)<0&&baseAxes.push(baseAxis);(0,util/* indexOf */.cq)(otherAxes,otherAxis)<0&&otherAxes.push(otherAxis);});return{baseAxes:baseAxes,otherAxes:otherAxes};};Grid.create=function(ecModel,api){var grids=[];ecModel.eachComponent('grid',function(gridModel,idx){var grid=new Grid(gridModel,ecModel,api);grid.name='grid_'+idx;// dataSampling requires axis extent, so resize
// should be performed in create stage.
grid.resize(gridModel,api,true);gridModel.coordinateSystem=grid;grids.push(grid);});// Inject the coordinateSystems into seriesModel
ecModel.eachSeries(function(seriesModel){if(!(0,cartesianAxisHelper/* isCartesian2DSeries */.Yh)(seriesModel)){return;}var axesModelMap=(0,cartesianAxisHelper/* findAxisModels */.Mk)(seriesModel);var xAxisModel=axesModelMap.xAxisModel;var yAxisModel=axesModelMap.yAxisModel;var gridModel=xAxisModel.getCoordSysModel();if(false){}var grid=gridModel.coordinateSystem;seriesModel.coordinateSystem=grid.getCartesian(xAxisModel.componentIndex,yAxisModel.componentIndex);});return grids;};// For deciding which dimensions to use when creating list data
Grid.dimensions=cartesian2DDimensions;return Grid;}();/**
 * Check if the axis is used in the specified grid.
 */function isAxisUsedInTheGrid(axisModel,gridModel){return axisModel.getCoordSysModel()===gridModel;}function fixAxisOnZero(axesMap,otherAxisDim,axis,// Key: see `getOnZeroRecordKey`
onZeroRecords){axis.getAxesOnZeroOf=function(){// TODO: onZero of multiple axes.
return otherAxisOnZeroOf?[otherAxisOnZeroOf]:[];};// onZero can not be enabled in these two situations:
// 1. When any other axis is a category axis.
// 2. When no axis is cross 0 point.
var otherAxes=axesMap[otherAxisDim];var otherAxisOnZeroOf;var axisModel=axis.model;var onZero=axisModel.get(['axisLine','onZero']);var onZeroAxisIndex=axisModel.get(['axisLine','onZeroAxisIndex']);if(!onZero){return;}// If target axis is specified.
if(onZeroAxisIndex!=null){if(canOnZeroToAxis(otherAxes[onZeroAxisIndex])){otherAxisOnZeroOf=otherAxes[onZeroAxisIndex];}}else{// Find the first available other axis.
for(var idx in otherAxes){if(otherAxes.hasOwnProperty(idx)&&canOnZeroToAxis(otherAxes[idx])// Consider that two Y axes on one value axis,
// if both onZero, the two Y axes overlap.
&&!onZeroRecords[getOnZeroRecordKey(otherAxes[idx])]){otherAxisOnZeroOf=otherAxes[idx];break;}}}if(otherAxisOnZeroOf){onZeroRecords[getOnZeroRecordKey(otherAxisOnZeroOf)]=true;}function getOnZeroRecordKey(axis){return axis.dim+'_'+axis.index;}}function canOnZeroToAxis(axis){return axis&&axis.type!=='category'&&axis.type!=='time'&&(0,axisHelper/* ifAxisCrossZero */.Yb)(axis);}function updateAxisTransform(axis,coordBase){var axisExtent=axis.getExtent();var axisExtentSum=axisExtent[0]+axisExtent[1];// Fast transform
axis.toGlobalCoord=axis.dim==='x'?function(coord){return coord+coordBase;}:function(coord){return axisExtentSum-coord+coordBase;};axis.toLocalCoord=axis.dim==='x'?function(coord){return coord-coordBase;}:function(coord){return axisExtentSum-coord+coordBase;};}/* harmony default export */ const cartesian_Grid = (Grid);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(45482);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Line.js
var Line = __webpack_require__(29526);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axis/AxisBuilder.js
var AxisBuilder = __webpack_require__(87639);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axis/AxisView.js
var AxisView = __webpack_require__(91646);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/axis/axisSplitHelper.js
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
*/var axisSplitHelper_inner=(0,model/* makeInner */.Yf)();function rectCoordAxisBuildSplitArea(axisView,axisGroup,axisModel,gridModel){var axis=axisModel.axis;if(axis.scale.isBlank()){return;}// TODO: TYPE
var splitAreaModel=axisModel.getModel('splitArea');var areaStyleModel=splitAreaModel.getModel('areaStyle');var areaColors=areaStyleModel.get('color');var gridRect=gridModel.coordinateSystem.getRect();var ticksCoords=axis.getTicksCoords({tickModel:splitAreaModel,clamp:true});if(!ticksCoords.length){return;}// For Making appropriate splitArea animation, the color and anid
// should be corresponding to previous one if possible.
var areaColorsLen=areaColors.length;var lastSplitAreaColors=axisSplitHelper_inner(axisView).splitAreaColors;var newSplitAreaColors=util/* createHashMap */.kW();var colorIndex=0;if(lastSplitAreaColors){for(var i=0;i<ticksCoords.length;i++){var cIndex=lastSplitAreaColors.get(ticksCoords[i].tickValue);if(cIndex!=null){colorIndex=(cIndex+(areaColorsLen-1)*i)%areaColorsLen;break;}}}var prev=axis.toGlobalCoord(ticksCoords[0].coord);var areaStyle=areaStyleModel.getAreaStyle();areaColors=util/* isArray */.kJ(areaColors)?areaColors:[areaColors];for(var i=1;i<ticksCoords.length;i++){var tickCoord=axis.toGlobalCoord(ticksCoords[i].coord);var x=void 0;var y=void 0;var width=void 0;var height=void 0;if(axis.isHorizontal()){x=prev;y=gridRect.y;width=tickCoord-x;height=gridRect.height;prev=x+width;}else{x=gridRect.x;y=prev;width=gridRect.width;height=tickCoord-y;prev=y+height;}var tickValue=ticksCoords[i-1].tickValue;tickValue!=null&&newSplitAreaColors.set(tickValue,colorIndex);axisGroup.add(new Rect/* default */.Z({anid:tickValue!=null?'area_'+tickValue:null,shape:{x:x,y:y,width:width,height:height},style:util/* defaults */.ce({fill:areaColors[colorIndex]},areaStyle),autoBatch:true,silent:true}));colorIndex=(colorIndex+1)%areaColorsLen;}axisSplitHelper_inner(axisView).splitAreaColors=newSplitAreaColors;}function rectCoordAxisHandleRemove(axisView){axisSplitHelper_inner(axisView).splitAreaColors=null;}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/axis/CartesianAxisView.js
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
*/var axisBuilderAttrs=['axisLine','axisTickLabel','axisName'];var selfBuilderAttrs=['splitArea','splitLine','minorSplitLine'];var CartesianAxisView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(CartesianAxisView,_super);function CartesianAxisView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=CartesianAxisView.type;_this.axisPointerClass='CartesianAxisPointer';return _this;}/**
   * @override
   */CartesianAxisView.prototype.render=function(axisModel,ecModel,api,payload){this.group.removeAll();var oldAxisGroup=this._axisGroup;this._axisGroup=new Group/* default */.Z();this.group.add(this._axisGroup);if(!axisModel.get('show')){return;}var gridModel=axisModel.getCoordSysModel();var layout=cartesianAxisHelper/* layout */.bK(gridModel,axisModel);var axisBuilder=new AxisBuilder/* default */.Z(axisModel,util/* extend */.l7({handleAutoShown:function handleAutoShown(elementType){var cartesians=gridModel.coordinateSystem.getCartesians();for(var i=0;i<cartesians.length;i++){if((0,helper/* isIntervalOrLogScale */.lM)(cartesians[i].getOtherAxis(axisModel.axis).scale)){// Still show axis tick or axisLine if other axis is value / log
return true;}}// Not show axisTick or axisLine if other axis is category / time
return false;}},layout));util/* each */.S6(axisBuilderAttrs,axisBuilder.add,axisBuilder);this._axisGroup.add(axisBuilder.getGroup());util/* each */.S6(selfBuilderAttrs,function(name){if(axisModel.get([name,'show'])){axisElementBuilders[name](this,this._axisGroup,axisModel,gridModel);}},this);// THIS is a special case for bar racing chart.
// Update the axis label from the natural initial layout to
// sorted layout should has no animation.
var isInitialSortFromBarRacing=payload&&payload.type==='changeAxisOrder'&&payload.isInitSort;if(!isInitialSortFromBarRacing){graphic.groupTransition(oldAxisGroup,this._axisGroup,axisModel);}_super.prototype.render.call(this,axisModel,ecModel,api,payload);};CartesianAxisView.prototype.remove=function(){rectCoordAxisHandleRemove(this);};CartesianAxisView.type='cartesianAxis';return CartesianAxisView;}(AxisView/* default */.Z);var axisElementBuilders={splitLine:function splitLine(axisView,axisGroup,axisModel,gridModel){var axis=axisModel.axis;if(axis.scale.isBlank()){return;}var splitLineModel=axisModel.getModel('splitLine');var lineStyleModel=splitLineModel.getModel('lineStyle');var lineColors=lineStyleModel.get('color');lineColors=util/* isArray */.kJ(lineColors)?lineColors:[lineColors];var gridRect=gridModel.coordinateSystem.getRect();var isHorizontal=axis.isHorizontal();var lineCount=0;var ticksCoords=axis.getTicksCoords({tickModel:splitLineModel});var p1=[];var p2=[];var lineStyle=lineStyleModel.getLineStyle();for(var i=0;i<ticksCoords.length;i++){var tickCoord=axis.toGlobalCoord(ticksCoords[i].coord);if(isHorizontal){p1[0]=tickCoord;p1[1]=gridRect.y;p2[0]=tickCoord;p2[1]=gridRect.y+gridRect.height;}else{p1[0]=gridRect.x;p1[1]=tickCoord;p2[0]=gridRect.x+gridRect.width;p2[1]=tickCoord;}var colorIndex=lineCount++%lineColors.length;var tickValue=ticksCoords[i].tickValue;axisGroup.add(new Line/* default */.Z({anid:tickValue!=null?'line_'+ticksCoords[i].tickValue:null,subPixelOptimize:true,autoBatch:true,shape:{x1:p1[0],y1:p1[1],x2:p2[0],y2:p2[1]},style:util/* defaults */.ce({stroke:lineColors[colorIndex]},lineStyle),silent:true}));}},minorSplitLine:function minorSplitLine(axisView,axisGroup,axisModel,gridModel){var axis=axisModel.axis;var minorSplitLineModel=axisModel.getModel('minorSplitLine');var lineStyleModel=minorSplitLineModel.getModel('lineStyle');var gridRect=gridModel.coordinateSystem.getRect();var isHorizontal=axis.isHorizontal();var minorTicksCoords=axis.getMinorTicksCoords();if(!minorTicksCoords.length){return;}var p1=[];var p2=[];var lineStyle=lineStyleModel.getLineStyle();for(var i=0;i<minorTicksCoords.length;i++){for(var k=0;k<minorTicksCoords[i].length;k++){var tickCoord=axis.toGlobalCoord(minorTicksCoords[i][k].coord);if(isHorizontal){p1[0]=tickCoord;p1[1]=gridRect.y;p2[0]=tickCoord;p2[1]=gridRect.y+gridRect.height;}else{p1[0]=gridRect.x;p1[1]=tickCoord;p2[0]=gridRect.x+gridRect.width;p2[1]=tickCoord;}axisGroup.add(new Line/* default */.Z({anid:'minor_line_'+minorTicksCoords[i][k].tickValue,subPixelOptimize:true,autoBatch:true,shape:{x1:p1[0],y1:p1[1],x2:p2[0],y2:p2[1]},style:lineStyle,silent:true}));}}},splitArea:function splitArea(axisView,axisGroup,axisModel,gridModel){rectCoordAxisBuildSplitArea(axisView,axisGroup,axisModel,gridModel);}};var CartesianXAxisView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(CartesianXAxisView,_super);function CartesianXAxisView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=CartesianXAxisView.type;return _this;}CartesianXAxisView.type='xAxis';return CartesianXAxisView;}(CartesianAxisView);var CartesianYAxisView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(CartesianYAxisView,_super);function CartesianYAxisView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=CartesianXAxisView.type;return _this;}CartesianYAxisView.type='yAxis';return CartesianYAxisView;}(CartesianAxisView);/* harmony default export */ const axis_CartesianAxisView = ((/* unused pure expression or super */ null && (CartesianAxisView)));
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/grid/installSimple.js
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
*/// Grid view
var GridView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GridView,_super);function GridView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type='grid';return _this;}GridView.prototype.render=function(gridModel,ecModel){this.group.removeAll();if(gridModel.get('show')){this.group.add(new Rect/* default */.Z({shape:gridModel.coordinateSystem.getRect(),style:(0,util/* defaults */.ce)({fill:gridModel.get('backgroundColor')},gridModel.getItemStyle()),silent:true,z2:-1}));}};GridView.type='grid';return GridView;}(Component/* default */.Z);var extraOption={// gridIndex: 0,
// gridId: '',
offset:0};function install(registers){registers.registerComponentView(GridView);registers.registerComponentModel(cartesian_GridModel);registers.registerCoordinateSystem('cartesian2d',cartesian_Grid);axisModelCreator(registers,'x',CartesianAxisModel,extraOption);axisModelCreator(registers,'y',CartesianAxisModel,extraOption);registers.registerComponentView(CartesianXAxisView);registers.registerComponentView(CartesianYAxisView);registers.registerPreprocessor(function(option){// Only create grid when need
if(option.xAxis&&option.yAxis&&!option.grid){option.grid={};}});}

/***/ }),

/***/ 15707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ helper_MapDraw)
});

// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(1793);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(89071);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/core/echarts.js + 3 modules
var echarts = __webpack_require__(69774);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/helper/interactionMutex.js
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
*/ // @ts-nocheck
var ATTR='\0_ec_interaction_mutex';function take(zr,resourceKey,userKey){var store=getStore(zr);store[resourceKey]=userKey;}function release(zr,resourceKey,userKey){var store=getStore(zr);var uKey=store[resourceKey];if(uKey===userKey){store[resourceKey]=null;}}function isTaken(zr,resourceKey){return!!getStore(zr)[resourceKey];}function getStore(zr){return zr[ATTR]||(zr[ATTR]={});}/**
 * payload: {
 *     type: 'takeGlobalCursor',
 *     key: 'dataZoomSelect', or 'brush', or ...,
 *         If no userKey, release global cursor.
 * }
 */ // TODO: SELF REGISTERED.
echarts/* registerAction */.zl({type:'takeGlobalCursor',event:'globalCursorTaken',update:'update'},util/* noop */.ZT);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/helper/RoamController.js
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
*/;var RoamController=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(RoamController,_super);function RoamController(zr){var _this=_super.call(this)||this;_this._zr=zr;// Avoid two roamController bind the same handler
var mousedownHandler=(0,util/* bind */.ak)(_this._mousedownHandler,_this);var mousemoveHandler=(0,util/* bind */.ak)(_this._mousemoveHandler,_this);var mouseupHandler=(0,util/* bind */.ak)(_this._mouseupHandler,_this);var mousewheelHandler=(0,util/* bind */.ak)(_this._mousewheelHandler,_this);var pinchHandler=(0,util/* bind */.ak)(_this._pinchHandler,_this);/**
     * Notice: only enable needed types. For example, if 'zoom'
     * is not needed, 'zoom' should not be enabled, otherwise
     * default mousewheel behaviour (scroll page) will be disabled.
     */_this.enable=function(controlType,opt){// Disable previous first
this.disable();this._opt=(0,util/* defaults */.ce)((0,util/* clone */.d9)(opt)||{},{zoomOnMouseWheel:true,moveOnMouseMove:true,// By default, wheel do not trigger move.
moveOnMouseWheel:false,preventDefaultMouseMove:true});if(controlType==null){controlType=true;}if(controlType===true||controlType==='move'||controlType==='pan'){zr.on('mousedown',mousedownHandler);zr.on('mousemove',mousemoveHandler);zr.on('mouseup',mouseupHandler);}if(controlType===true||controlType==='scale'||controlType==='zoom'){zr.on('mousewheel',mousewheelHandler);zr.on('pinch',pinchHandler);}};_this.disable=function(){zr.off('mousedown',mousedownHandler);zr.off('mousemove',mousemoveHandler);zr.off('mouseup',mouseupHandler);zr.off('mousewheel',mousewheelHandler);zr.off('pinch',pinchHandler);};return _this;}RoamController.prototype.isDragging=function(){return this._dragging;};RoamController.prototype.isPinching=function(){return this._pinching;};RoamController.prototype.setPointerChecker=function(pointerChecker){this.pointerChecker=pointerChecker;};RoamController.prototype.dispose=function(){this.disable();};RoamController.prototype._mousedownHandler=function(e){if(core_event/* isMiddleOrRightButtonOnMouseUpDown */.x1(e)||e.target&&e.target.draggable){return;}var x=e.offsetX;var y=e.offsetY;// Only check on mosedown, but not mousemove.
// Mouse can be out of target when mouse moving.
if(this.pointerChecker&&this.pointerChecker(e,x,y)){this._x=x;this._y=y;this._dragging=true;}};RoamController.prototype._mousemoveHandler=function(e){if(!this._dragging||!isAvailableBehavior('moveOnMouseMove',e,this._opt)||e.gestureEvent==='pinch'||isTaken(this._zr,'globalPan')){return;}var x=e.offsetX;var y=e.offsetY;var oldX=this._x;var oldY=this._y;var dx=x-oldX;var dy=y-oldY;this._x=x;this._y=y;this._opt.preventDefaultMouseMove&&core_event/* stop */.sT(e.event);trigger(this,'pan','moveOnMouseMove',e,{dx:dx,dy:dy,oldX:oldX,oldY:oldY,newX:x,newY:y,isAvailableBehavior:null});};RoamController.prototype._mouseupHandler=function(e){if(!core_event/* isMiddleOrRightButtonOnMouseUpDown */.x1(e)){this._dragging=false;}};RoamController.prototype._mousewheelHandler=function(e){var shouldZoom=isAvailableBehavior('zoomOnMouseWheel',e,this._opt);var shouldMove=isAvailableBehavior('moveOnMouseWheel',e,this._opt);var wheelDelta=e.wheelDelta;var absWheelDeltaDelta=Math.abs(wheelDelta);var originX=e.offsetX;var originY=e.offsetY;// wheelDelta maybe -0 in chrome mac.
if(wheelDelta===0||!shouldZoom&&!shouldMove){return;}// If both `shouldZoom` and `shouldMove` is true, trigger
// their event both, and the final behavior is determined
// by event listener themselves.
if(shouldZoom){// Convenience:
// Mac and VM Windows on Mac: scroll up: zoom out.
// Windows: scroll up: zoom in.
// FIXME: Should do more test in different environment.
// wheelDelta is too complicated in difference nvironment
// (https://developer.mozilla.org/en-US/docs/Web/Events/mousewheel),
// although it has been normallized by zrender.
// wheelDelta of mouse wheel is bigger than touch pad.
var factor=absWheelDeltaDelta>3?1.4:absWheelDeltaDelta>1?1.2:1.1;var scale=wheelDelta>0?factor:1/factor;checkPointerAndTrigger(this,'zoom','zoomOnMouseWheel',e,{scale:scale,originX:originX,originY:originY,isAvailableBehavior:null});}if(shouldMove){// FIXME: Should do more test in different environment.
var absDelta=Math.abs(wheelDelta);// wheelDelta of mouse wheel is bigger than touch pad.
var scrollDelta=(wheelDelta>0?1:-1)*(absDelta>3?0.4:absDelta>1?0.15:0.05);checkPointerAndTrigger(this,'scrollMove','moveOnMouseWheel',e,{scrollDelta:scrollDelta,originX:originX,originY:originY,isAvailableBehavior:null});}};RoamController.prototype._pinchHandler=function(e){if(isTaken(this._zr,'globalPan')){return;}var scale=e.pinchScale>1?1.1:1/1.1;checkPointerAndTrigger(this,'zoom',null,e,{scale:scale,originX:e.pinchX,originY:e.pinchY,isAvailableBehavior:null});};return RoamController;}(Eventful/* default */.Z);function checkPointerAndTrigger(controller,eventName,behaviorToCheck,e,contollerEvent){if(controller.pointerChecker&&controller.pointerChecker(e,contollerEvent.originX,contollerEvent.originY)){// When mouse is out of roamController rect,
// default befavoius should not be be disabled, otherwise
// page sliding is disabled, contrary to expectation.
core_event/* stop */.sT(e.event);trigger(controller,eventName,behaviorToCheck,e,contollerEvent);}}function trigger(controller,eventName,behaviorToCheck,e,contollerEvent){// Also provide behavior checker for event listener, for some case that
// multiple components share one listener.
contollerEvent.isAvailableBehavior=(0,util/* bind */.ak)(isAvailableBehavior,null,behaviorToCheck,e);// TODO should not have type issue.
controller.trigger(eventName,contollerEvent);}// settings: {
//     zoomOnMouseWheel
//     moveOnMouseMove
//     moveOnMouseWheel
// }
// The value can be: true / false / 'shift' / 'ctrl' / 'alt'.
function isAvailableBehavior(behaviorToCheck,e,settings){var setting=settings[behaviorToCheck];return!behaviorToCheck||setting&&(!(0,util/* isString */.HD)(setting)||e.event[setting+'Key']);}/* harmony default export */ const helper_RoamController = (RoamController);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/helper/roamHelper.js
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
*/ /**
 * For geo and graph.
 */function updateViewOnPan(controllerHost,dx,dy){var target=controllerHost.target;target.x+=dx;target.y+=dy;target.dirty();}/**
 * For geo and graph.
 */function updateViewOnZoom(controllerHost,zoomDelta,zoomX,zoomY){var target=controllerHost.target;var zoomLimit=controllerHost.zoomLimit;var newZoom=controllerHost.zoom=controllerHost.zoom||1;newZoom*=zoomDelta;if(zoomLimit){var zoomMin=zoomLimit.min||0;var zoomMax=zoomLimit.max||Infinity;newZoom=Math.max(Math.min(zoomMax,newZoom),zoomMin);}var zoomScale=newZoom/controllerHost.zoom;controllerHost.zoom=newZoom;// Keep the mouse center when scaling
target.x-=(zoomX-target.x)*(zoomScale-1);target.y-=(zoomY-target.y)*(zoomScale-1);target.scaleX*=zoomScale;target.scaleY*=zoomScale;target.dirty();}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/helper/cursorHelper.js
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
*/var IRRELEVANT_EXCLUDES={'axisPointer':1,'tooltip':1,'brush':1};/**
 * Avoid that: mouse click on a elements that is over geo or graph,
 * but roam is triggered.
 */function onIrrelevantElement(e,api,targetCoordSysModel){var model=api.getComponentByElement(e.topTarget);// If model is axisModel, it works only if it is injected with coordinateSystem.
var coordSys=model&&model.coordinateSystem;return model&&model!==targetCoordSysModel&&!IRRELEVANT_EXCLUDES.hasOwnProperty(model.mainType)&&coordSys&&coordSys.model!==targetCoordSysModel;}
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(15021);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(72160);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/CompoundPath.js
var CompoundPath = __webpack_require__(48977);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(45482);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/geoSourceManager.js + 7 modules
var geoSourceManager = __webpack_require__(43564);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(36189);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/decal.js
var util_decal = __webpack_require__(7335);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Displayable.js
var Displayable = __webpack_require__(59953);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/helper/MapDraw.js
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
 * Only these tags enable use `itemStyle` if they are named in SVG.
 * Other tags like <text> <tspan> <image> might not suitable for `itemStyle`.
 * They will not be considered to be styled until some requirements come.
 */var OPTION_STYLE_ENABLED_TAGS=['rect','circle','line','ellipse','polygon','polyline','path'];var OPTION_STYLE_ENABLED_TAG_MAP=util/* createHashMap */.kW(OPTION_STYLE_ENABLED_TAGS);var STATE_TRIGGER_TAG_MAP=util/* createHashMap */.kW(OPTION_STYLE_ENABLED_TAGS.concat(['g']));var LABEL_HOST_MAP=util/* createHashMap */.kW(OPTION_STYLE_ENABLED_TAGS.concat(['g']));var mapLabelRaw=(0,model/* makeInner */.Yf)();function getFixedItemStyle(model){var itemStyle=model.getItemStyle();var areaColor=model.get('areaColor');// If user want the color not to be changed when hover,
// they should both set areaColor and color to be null.
if(areaColor!=null){itemStyle.fill=areaColor;}return itemStyle;}// Only stroke can be used for line.
// Using fill in style if stroke not exits.
// TODO Not sure yet. Perhaps a separate `lineStyle`?
function fixLineStyle(styleHost){var style=styleHost.style;if(style){style.stroke=style.stroke||style.fill;style.fill=null;}}var MapDraw=/** @class */function(){function MapDraw(api){var group=new Group/* default */.Z();this.uid=(0,component/* getUID */.Kr)('ec_map_draw');this._controller=new helper_RoamController(api.getZr());this._controllerHost={target:group};this.group=group;group.add(this._regionsGroup=new Group/* default */.Z());group.add(this._svgGroup=new Group/* default */.Z());}MapDraw.prototype.draw=function(mapOrGeoModel,ecModel,api,fromView,payload){var isGeo=mapOrGeoModel.mainType==='geo';// Map series has data. GEO model that controlled by map series
// will be assigned with map data. Other GEO model has no data.
var data=mapOrGeoModel.getData&&mapOrGeoModel.getData();isGeo&&ecModel.eachComponent({mainType:'series',subType:'map'},function(mapSeries){if(!data&&mapSeries.getHostGeoModel()===mapOrGeoModel){data=mapSeries.getData();}});var geo=mapOrGeoModel.coordinateSystem;var regionsGroup=this._regionsGroup;var group=this.group;var transformInfo=geo.getTransformInfo();var transformInfoRaw=transformInfo.raw;var transformInfoRoam=transformInfo.roam;// No animation when first draw or in action
var isFirstDraw=!regionsGroup.childAt(0)||payload;if(isFirstDraw){group.x=transformInfoRoam.x;group.y=transformInfoRoam.y;group.scaleX=transformInfoRoam.scaleX;group.scaleY=transformInfoRoam.scaleY;group.dirty();}else{basicTrasition/* updateProps */.D(group,transformInfoRoam,mapOrGeoModel);}var isVisualEncodedByVisualMap=data&&data.getVisual('visualMeta')&&data.getVisual('visualMeta').length>0;var viewBuildCtx={api:api,geo:geo,mapOrGeoModel:mapOrGeoModel,data:data,isVisualEncodedByVisualMap:isVisualEncodedByVisualMap,isGeo:isGeo,transformInfoRaw:transformInfoRaw};if(geo.resourceType==='geoJSON'){this._buildGeoJSON(viewBuildCtx);}else if(geo.resourceType==='geoSVG'){this._buildSVG(viewBuildCtx);}this._updateController(mapOrGeoModel,ecModel,api);this._updateMapSelectHandler(mapOrGeoModel,regionsGroup,api,fromView);};MapDraw.prototype._buildGeoJSON=function(viewBuildCtx){var regionsGroupByName=this._regionsGroupByName=util/* createHashMap */.kW();var regionsInfoByName=util/* createHashMap */.kW();var regionsGroup=this._regionsGroup;var transformInfoRaw=viewBuildCtx.transformInfoRaw;var mapOrGeoModel=viewBuildCtx.mapOrGeoModel;var data=viewBuildCtx.data;var projection=viewBuildCtx.geo.projection;var projectionStream=projection&&projection.stream;function transformPoint(point,project){if(project){// projection may return null point.
point=project(point);}return point&&[point[0]*transformInfoRaw.scaleX+transformInfoRaw.x,point[1]*transformInfoRaw.scaleY+transformInfoRaw.y];};function transformPolygonPoints(inPoints){var outPoints=[];// If projectionStream is provided. Use it instead of single point project.
var project=!projectionStream&&projection&&projection.project;for(var i=0;i<inPoints.length;++i){var newPt=transformPoint(inPoints[i],project);newPt&&outPoints.push(newPt);}return outPoints;}function getPolyShape(points){return{shape:{points:transformPolygonPoints(points)}};}regionsGroup.removeAll();// Only when the resource is GeoJSON, there is `geo.regions`.
util/* each */.S6(viewBuildCtx.geo.regions,function(region){var regionName=region.name;// Consider in GeoJson properties.name may be duplicated, for example,
// there is multiple region named "United Kindom" or "France" (so many
// colonies). And it is not appropriate to merge them in geo, which
// will make them share the same label and bring trouble in label
// location calculation.
var regionGroup=regionsGroupByName.get(regionName);var _a=regionsInfoByName.get(regionName)||{},dataIdx=_a.dataIdx,regionModel=_a.regionModel;if(!regionGroup){regionGroup=regionsGroupByName.set(regionName,new Group/* default */.Z());regionsGroup.add(regionGroup);dataIdx=data?data.indexOfName(regionName):null;regionModel=viewBuildCtx.isGeo?mapOrGeoModel.getRegionModel(regionName):data?data.getItemModel(dataIdx):null;regionsInfoByName.set(regionName,{dataIdx:dataIdx,regionModel:regionModel});}var polygonSubpaths=[];var polylineSubpaths=[];util/* each */.S6(region.geometries,function(geometry){// Polygon and MultiPolygon
if(geometry.type==='polygon'){var polys=[geometry.exterior].concat(geometry.interiors||[]);if(projectionStream){polys=projectPolys(polys,projectionStream);}util/* each */.S6(polys,function(poly){polygonSubpaths.push(new Polygon/* default */.Z(getPolyShape(poly)));});}// LineString and MultiLineString
else{var points=geometry.points;if(projectionStream){points=projectPolys(points,projectionStream,true);}util/* each */.S6(points,function(points){polylineSubpaths.push(new Polyline/* default */.Z(getPolyShape(points)));});}});var centerPt=transformPoint(region.getCenter(),projection&&projection.project);function createCompoundPath(subpaths,isLine){if(!subpaths.length){return;}var compoundPath=new CompoundPath/* default */.Z({culling:true,segmentIgnoreThreshold:1,shape:{paths:subpaths}});regionGroup.add(compoundPath);applyOptionStyleForRegion(viewBuildCtx,compoundPath,dataIdx,regionModel);resetLabelForRegion(viewBuildCtx,compoundPath,regionName,regionModel,mapOrGeoModel,dataIdx,centerPt);if(isLine){fixLineStyle(compoundPath);util/* each */.S6(compoundPath.states,fixLineStyle);}}createCompoundPath(polygonSubpaths);createCompoundPath(polylineSubpaths,true);});// Ensure children have been added to `regionGroup` before calling them.
regionsGroupByName.each(function(regionGroup,regionName){var _a=regionsInfoByName.get(regionName),dataIdx=_a.dataIdx,regionModel=_a.regionModel;resetEventTriggerForRegion(viewBuildCtx,regionGroup,regionName,regionModel,mapOrGeoModel,dataIdx);resetTooltipForRegion(viewBuildCtx,regionGroup,regionName,regionModel,mapOrGeoModel);resetStateTriggerForRegion(viewBuildCtx,regionGroup,regionName,regionModel,mapOrGeoModel);},this);};MapDraw.prototype._buildSVG=function(viewBuildCtx){var mapName=viewBuildCtx.geo.map;var transformInfoRaw=viewBuildCtx.transformInfoRaw;this._svgGroup.x=transformInfoRaw.x;this._svgGroup.y=transformInfoRaw.y;this._svgGroup.scaleX=transformInfoRaw.scaleX;this._svgGroup.scaleY=transformInfoRaw.scaleY;if(this._svgResourceChanged(mapName)){this._freeSVG();this._useSVG(mapName);}var svgDispatcherMap=this._svgDispatcherMap=util/* createHashMap */.kW();var focusSelf=false;util/* each */.S6(this._svgGraphicRecord.named,function(namedItem){// Note that we also allow different elements have the same name.
// For example, a glyph of a city and the label of the city have
// the same name and their tooltip info can be defined in a single
// region option.
var regionName=namedItem.name;var mapOrGeoModel=viewBuildCtx.mapOrGeoModel;var data=viewBuildCtx.data;var svgNodeTagLower=namedItem.svgNodeTagLower;var el=namedItem.el;var dataIdx=data?data.indexOfName(regionName):null;var regionModel=mapOrGeoModel.getRegionModel(regionName);if(OPTION_STYLE_ENABLED_TAG_MAP.get(svgNodeTagLower)!=null&&el instanceof Displayable/* default */.ZP){applyOptionStyleForRegion(viewBuildCtx,el,dataIdx,regionModel);}if(el instanceof Displayable/* default */.ZP){el.culling=true;}// We do not know how the SVG like so we'd better not to change z2.
// Otherwise it might bring some unexpected result. For example,
// an area hovered that make some inner city can not be clicked.
el.z2EmphasisLift=0;// If self named:
if(!namedItem.namedFrom){// label should batter to be displayed based on the center of <g>
// if it is named rather than displayed on each child.
if(LABEL_HOST_MAP.get(svgNodeTagLower)!=null){resetLabelForRegion(viewBuildCtx,el,regionName,regionModel,mapOrGeoModel,dataIdx,null);}resetEventTriggerForRegion(viewBuildCtx,el,regionName,regionModel,mapOrGeoModel,dataIdx);resetTooltipForRegion(viewBuildCtx,el,regionName,regionModel,mapOrGeoModel);if(STATE_TRIGGER_TAG_MAP.get(svgNodeTagLower)!=null){var focus_1=resetStateTriggerForRegion(viewBuildCtx,el,regionName,regionModel,mapOrGeoModel);if(focus_1==='self'){focusSelf=true;}var els=svgDispatcherMap.get(regionName)||svgDispatcherMap.set(regionName,[]);els.push(el);}}},this);this._enableBlurEntireSVG(focusSelf,viewBuildCtx);};MapDraw.prototype._enableBlurEntireSVG=function(focusSelf,viewBuildCtx){// It's a little complicated to support blurring the entire geoSVG in series-map.
// So do not suport it until some requirements come.
// At present, in series-map, only regions can be blurred.
if(focusSelf&&viewBuildCtx.isGeo){var blurStyle=viewBuildCtx.mapOrGeoModel.getModel(['blur','itemStyle']).getItemStyle();// Only suport `opacity` here. Because not sure that other props are suitable for
// all of the elements generated by SVG (especially for Text/TSpan/Image/... ).
var opacity_1=blurStyle.opacity;this._svgGraphicRecord.root.traverse(function(el){if(!el.isGroup){// PENDING: clear those settings to SVG elements when `_freeSVG`.
// (Currently it happen not to be needed.)
(0,states/* setDefaultStateProxy */.MA)(el);var style=el.ensureState('blur').style||{};// Do not overwrite the region style that already set from region option.
if(style.opacity==null&&opacity_1!=null){style.opacity=opacity_1;}// If `ensureState('blur').style = {}`, there will be default opacity.
// Enable `stateTransition` (animation).
el.ensureState('emphasis');}});}};MapDraw.prototype.remove=function(){this._regionsGroup.removeAll();this._regionsGroupByName=null;this._svgGroup.removeAll();this._freeSVG();this._controller.dispose();this._controllerHost=null;};MapDraw.prototype.findHighDownDispatchers=function(name,geoModel){if(name==null){return[];}var geo=geoModel.coordinateSystem;if(geo.resourceType==='geoJSON'){var regionsGroupByName=this._regionsGroupByName;if(regionsGroupByName){var regionGroup=regionsGroupByName.get(name);return regionGroup?[regionGroup]:[];}}else if(geo.resourceType==='geoSVG'){return this._svgDispatcherMap&&this._svgDispatcherMap.get(name)||[];}};MapDraw.prototype._svgResourceChanged=function(mapName){return this._svgMapName!==mapName;};MapDraw.prototype._useSVG=function(mapName){var resource=geoSourceManager/* default.getGeoResource */.Z.getGeoResource(mapName);if(resource&&resource.type==='geoSVG'){var svgGraphic=resource.useGraphic(this.uid);this._svgGroup.add(svgGraphic.root);this._svgGraphicRecord=svgGraphic;this._svgMapName=mapName;}};MapDraw.prototype._freeSVG=function(){var mapName=this._svgMapName;if(mapName==null){return;}var resource=geoSourceManager/* default.getGeoResource */.Z.getGeoResource(mapName);if(resource&&resource.type==='geoSVG'){resource.freeGraphic(this.uid);}this._svgGraphicRecord=null;this._svgDispatcherMap=null;this._svgGroup.removeAll();this._svgMapName=null;};MapDraw.prototype._updateController=function(mapOrGeoModel,ecModel,api){var geo=mapOrGeoModel.coordinateSystem;var controller=this._controller;var controllerHost=this._controllerHost;// @ts-ignore FIXME:TS
controllerHost.zoomLimit=mapOrGeoModel.get('scaleLimit');controllerHost.zoom=geo.getZoom();// roamType is will be set default true if it is null
// @ts-ignore FIXME:TS
controller.enable(mapOrGeoModel.get('roam')||false);var mainType=mapOrGeoModel.mainType;function makeActionBase(){var action={type:'geoRoam',componentType:mainType};action[mainType+'Id']=mapOrGeoModel.id;return action;}controller.off('pan').on('pan',function(e){this._mouseDownFlag=false;updateViewOnPan(controllerHost,e.dx,e.dy);api.dispatchAction(util/* extend */.l7(makeActionBase(),{dx:e.dx,dy:e.dy,animation:{duration:0}}));},this);controller.off('zoom').on('zoom',function(e){this._mouseDownFlag=false;updateViewOnZoom(controllerHost,e.scale,e.originX,e.originY);api.dispatchAction(util/* extend */.l7(makeActionBase(),{zoom:e.scale,originX:e.originX,originY:e.originY,animation:{duration:0}}));},this);controller.setPointerChecker(function(e,x,y){return geo.containPoint([x,y])&&!onIrrelevantElement(e,api,mapOrGeoModel);});};/**
   * FIXME: this is a temporarily workaround.
   * When `geoRoam` the elements need to be reset in `MapView['render']`, because the props like
   * `ignore` might have been modified by `LabelManager`, and `LabelManager#addLabelsOfSeries`
   * will subsequently cache `defaultAttr` like `ignore`. If do not do this reset, the modified
   * props will have no chance to be restored.
   * Note: this reset should be after `clearStates` in `renderSeries` becuase `useStates` in
   * `renderSeries` will cache the modified `ignore` to `el._normalState`.
   * TODO:
   * Use clone/immutable in `LabelManager`?
   */MapDraw.prototype.resetForLabelLayout=function(){this.group.traverse(function(el){var label=el.getTextContent();if(label){label.ignore=mapLabelRaw(label).ignore;}});};MapDraw.prototype._updateMapSelectHandler=function(mapOrGeoModel,regionsGroup,api,fromView){var mapDraw=this;regionsGroup.off('mousedown');regionsGroup.off('click');// @ts-ignore FIXME:TS resolve type conflict
if(mapOrGeoModel.get('selectedMode')){regionsGroup.on('mousedown',function(){mapDraw._mouseDownFlag=true;});regionsGroup.on('click',function(e){if(!mapDraw._mouseDownFlag){return;}mapDraw._mouseDownFlag=false;});}};return MapDraw;}();;function applyOptionStyleForRegion(viewBuildCtx,el,dataIndex,regionModel){// All of the path are using `itemStyle`, becuase
// (1) Some SVG also use fill on polyline (The different between
// polyline and polygon is "open" or "close" but not fill or not).
// (2) For the common props like opacity, if some use itemStyle
// and some use `lineStyle`, it might confuse users.
// (3) Most SVG use <path>, where can not detect wether draw a "line"
// or a filled shape, so use `itemStyle` for <path>.
var normalStyleModel=regionModel.getModel('itemStyle');var emphasisStyleModel=regionModel.getModel(['emphasis','itemStyle']);var blurStyleModel=regionModel.getModel(['blur','itemStyle']);var selectStyleModel=regionModel.getModel(['select','itemStyle']);// NOTE: DONT use 'style' in visual when drawing map.
// This component is used for drawing underlying map for both geo component and map series.
var normalStyle=getFixedItemStyle(normalStyleModel);var emphasisStyle=getFixedItemStyle(emphasisStyleModel);var selectStyle=getFixedItemStyle(selectStyleModel);var blurStyle=getFixedItemStyle(blurStyleModel);// Update the itemStyle if has data visual
var data=viewBuildCtx.data;if(data){// Only visual color of each item will be used. It can be encoded by visualMap
// But visual color of series is used in symbol drawing
// Visual color for each series is for the symbol draw
var style=data.getItemVisual(dataIndex,'style');var decal=data.getItemVisual(dataIndex,'decal');if(viewBuildCtx.isVisualEncodedByVisualMap&&style.fill){normalStyle.fill=style.fill;}if(decal){normalStyle.decal=(0,util_decal/* createOrUpdatePatternFromDecal */.I)(decal,viewBuildCtx.api);}}// SVG text, tspan and image can be named but not supporeted
// to be styled by region option yet.
el.setStyle(normalStyle);el.style.strokeNoScale=true;el.ensureState('emphasis').style=emphasisStyle;el.ensureState('select').style=selectStyle;el.ensureState('blur').style=blurStyle;// Enable blur
(0,states/* setDefaultStateProxy */.MA)(el);}function resetLabelForRegion(viewBuildCtx,el,regionName,regionModel,mapOrGeoModel,// Exist only if `viewBuildCtx.data` exists.
dataIdx,// If labelXY not provided, use `textConfig.position: 'inside'`
labelXY){var data=viewBuildCtx.data;var isGeo=viewBuildCtx.isGeo;var isDataNaN=data&&isNaN(data.get(data.mapDimension('value'),dataIdx));var itemLayout=data&&data.getItemLayout(dataIdx);// In the following cases label will be drawn
// 1. In map series and data value is NaN
// 2. In geo component
// 3. Region has no series legendIcon, which will be add a showLabel flag in mapSymbolLayout
if(isGeo||isDataNaN||itemLayout&&itemLayout.showLabel){var query=!isGeo?dataIdx:regionName;var labelFetcher=void 0;// Consider dataIdx not found.
if(!data||dataIdx>=0){labelFetcher=mapOrGeoModel;}var specifiedTextOpt=labelXY?{normal:{align:'center',verticalAlign:'middle'}}:null;// Caveat: must be called after `setDefaultStateProxy(el);` called.
// because textContent will be assign with `el.stateProxy` inside.
(0,labelStyle/* setLabelStyle */.ni)(el,(0,labelStyle/* getLabelStatesModels */.k3)(regionModel),{labelFetcher:labelFetcher,labelDataIndex:query,defaultText:regionName},specifiedTextOpt);var textEl=el.getTextContent();if(textEl){mapLabelRaw(textEl).ignore=textEl.ignore;if(el.textConfig&&labelXY){// Compute a relative offset based on the el bounding rect.
var rect=el.getBoundingRect().clone();// Need to make sure the percent position base on the same rect in normal and
// emphasis state. Otherwise if using boundingRect of el, but the emphasis state
// has borderWidth (even 0.5px), the text position will be changed obviously
// if the position is very big like ['1234%', '1345%'].
el.textConfig.layoutRect=rect;el.textConfig.position=[(labelXY[0]-rect.x)/rect.width*100+'%',(labelXY[1]-rect.y)/rect.height*100+'%'];}}// PENDING:
// If labelLayout is enabled (test/label-layout.html), el.dataIndex should be specified.
// But el.dataIndex is also used to determine whether user event should be triggered,
// where el.seriesIndex or el.dataModel must be specified. At present for a single el
// there is not case that "only label layout enabled but user event disabled", so here
// we depends `resetEventTriggerForRegion` to do the job of setting `el.dataIndex`.
el.disableLabelAnimation=true;}else{el.removeTextContent();el.removeTextConfig();el.disableLabelAnimation=null;}}function resetEventTriggerForRegion(viewBuildCtx,eventTrigger,regionName,regionModel,mapOrGeoModel,// Exist only if `viewBuildCtx.data` exists.
dataIdx){// setItemGraphicEl, setHoverStyle after all polygons and labels
// are added to the rigionGroup
if(viewBuildCtx.data){// FIXME: when series-map use a SVG map, and there are duplicated name specified
// on different SVG elements, after `data.setItemGraphicEl(...)`:
// (1) all of them will be mounted with `dataIndex`, `seriesIndex`, so that tooltip
// can be triggered only mouse hover. That's correct.
// (2) only the last element will be kept in `data`, so that if trigger tooltip
// by `dispatchAction`, only the last one can be found and triggered. That might be
// not correct. We will fix it in future if anyone demanding that.
viewBuildCtx.data.setItemGraphicEl(dataIdx,eventTrigger);}// series-map will not trigger "geoselectchange" no matter it is
// based on a declared geo component. Becuause series-map will
// trigger "selectchange". If it trigger both the two events,
// If users call `chart.dispatchAction({type: 'toggleSelect'})`,
// it not easy to also fire event "geoselectchanged".
else{// Package custom mouse event for geo component
(0,innerStore/* getECData */.A)(eventTrigger).eventData={componentType:'geo',componentIndex:mapOrGeoModel.componentIndex,geoIndex:mapOrGeoModel.componentIndex,name:regionName,region:regionModel&&regionModel.option||{}};}}function resetTooltipForRegion(viewBuildCtx,el,regionName,regionModel,mapOrGeoModel){if(!viewBuildCtx.data){graphic.setTooltipConfig({el:el,componentModel:mapOrGeoModel,itemName:regionName,// @ts-ignore FIXME:TS fix the "compatible with each other"?
itemTooltipOption:regionModel.get('tooltip')});}}function resetStateTriggerForRegion(viewBuildCtx,el,regionName,regionModel,mapOrGeoModel){// @ts-ignore FIXME:TS fix the "compatible with each other"?
el.highDownSilentOnTouch=!!mapOrGeoModel.get('selectedMode');// @ts-ignore FIXME:TS fix the "compatible with each other"?
var emphasisModel=regionModel.getModel('emphasis');var focus=emphasisModel.get('focus');(0,states/* toggleHoverEmphasis */.k5)(el,focus,emphasisModel.get('blurScope'),emphasisModel.get('disabled'));if(viewBuildCtx.isGeo){(0,states/* enableComponentHighDownFeatures */.th)(el,mapOrGeoModel,regionName);}return focus;}function projectPolys(rings,// Polygons include exterior and interiors. Or polylines.
createStream,isLine){var polygons=[];var curPoly;function startPolygon(){curPoly=[];}function endPolygon(){if(curPoly.length){polygons.push(curPoly);curPoly=[];}}var stream=createStream({polygonStart:startPolygon,polygonEnd:endPolygon,lineStart:startPolygon,lineEnd:endPolygon,point:function point(x,y){// May have NaN values from stream.
if(isFinite(x)&&isFinite(y)){curPoly.push([x,y]);}},sphere:function sphere(){}});!isLine&&stream.polygonStart();util/* each */.S6(rings,function(ring){stream.lineStart();for(var i=0;i<ring.length;i++){stream.point(ring[i][0],ring[i][1]);}stream.lineEnd();});!isLine&&stream.polygonEnd();return polygons;}/* harmony default export */ const helper_MapDraw = (MapDraw);// @ts-ignore FIXME:TS fix the "compatible with each other"?

/***/ }),

/***/ 3252:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(25118);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(15022);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/LegendModel.js
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
*/var getDefaultSelectorOptions=function getDefaultSelectorOptions(ecModel,type){if(type==='all'){return{type:'all',title:ecModel.getLocaleModel().get(['legend','selector','all'])};}else if(type==='inverse'){return{type:'inverse',title:ecModel.getLocaleModel().get(['legend','selector','inverse'])};}};var LegendModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LegendModel,_super);function LegendModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=LegendModel.type;_this.layoutMode={type:'box',// legend.width/height are maxWidth/maxHeight actually,
// whereas realy width/height is calculated by its content.
// (Setting {left: 10, right: 10} does not make sense).
// So consider the case:
// `setOption({legend: {left: 10});`
// then `setOption({legend: {right: 10});`
// The previous `left` should be cleared by setting `ignoreSize`.
ignoreSize:true};return _this;}LegendModel.prototype.init=function(option,parentModel,ecModel){this.mergeDefaultAndTheme(option,ecModel);option.selected=option.selected||{};this._updateSelector(option);};LegendModel.prototype.mergeOption=function(option,ecModel){_super.prototype.mergeOption.call(this,option,ecModel);this._updateSelector(option);};LegendModel.prototype._updateSelector=function(option){var selector=option.selector;var ecModel=this.ecModel;if(selector===true){selector=option.selector=['all','inverse'];}if(util/* isArray */.kJ(selector)){util/* each */.S6(selector,function(item,index){util/* isString */.HD(item)&&(item={type:item});selector[index]=util/* merge */.TS(item,getDefaultSelectorOptions(ecModel,item.type));});}};LegendModel.prototype.optionUpdated=function(){this._updateData(this.ecModel);var legendData=this._data;// If selectedMode is single, try to select one
if(legendData[0]&&this.get('selectedMode')==='single'){var hasSelected=false;// If has any selected in option.selected
for(var i=0;i<legendData.length;i++){var name_1=legendData[i].get('name');if(this.isSelected(name_1)){// Force to unselect others
this.select(name_1);hasSelected=true;break;}}// Try select the first if selectedMode is single
!hasSelected&&this.select(legendData[0].get('name'));}};LegendModel.prototype._updateData=function(ecModel){var potentialData=[];var availableNames=[];ecModel.eachRawSeries(function(seriesModel){var seriesName=seriesModel.name;availableNames.push(seriesName);var isPotential;if(seriesModel.legendVisualProvider){var provider=seriesModel.legendVisualProvider;var names=provider.getAllNames();if(!ecModel.isSeriesFiltered(seriesModel)){availableNames=availableNames.concat(names);}if(names.length){potentialData=potentialData.concat(names);}else{isPotential=true;}}else{isPotential=true;}if(isPotential&&(0,model/* isNameSpecified */.yu)(seriesModel)){potentialData.push(seriesModel.name);}});/**
     * @type {Array.<string>}
     * @private
     */this._availableNames=availableNames;// If legend.data not specified in option, use availableNames as data,
// which is convinient for user preparing option.
var rawData=this.get('data')||potentialData;var legendData=util/* map */.UI(rawData,function(dataItem){// Can be string or number
if(util/* isString */.HD(dataItem)||util/* isNumber */.hj(dataItem)){dataItem={name:dataItem};}return new Model/* default */.Z(dataItem,this,this.ecModel);},this);/**
     * @type {Array.<module:echarts/model/Model>}
     * @private
     */this._data=legendData;};LegendModel.prototype.getData=function(){return this._data;};LegendModel.prototype.select=function(name){var selected=this.option.selected;var selectedMode=this.get('selectedMode');if(selectedMode==='single'){var data=this._data;util/* each */.S6(data,function(dataItem){selected[dataItem.get('name')]=false;});}selected[name]=true;};LegendModel.prototype.unSelect=function(name){if(this.get('selectedMode')!=='single'){this.option.selected[name]=false;}};LegendModel.prototype.toggleSelected=function(name){var selected=this.option.selected;// Default is true
if(!selected.hasOwnProperty(name)){selected[name]=true;}this[selected[name]?'unSelect':'select'](name);};LegendModel.prototype.allSelect=function(){var data=this._data;var selected=this.option.selected;util/* each */.S6(data,function(dataItem){selected[dataItem.get('name',true)]=true;});};LegendModel.prototype.inverseSelect=function(){var data=this._data;var selected=this.option.selected;util/* each */.S6(data,function(dataItem){var name=dataItem.get('name',true);// Initially, default value is true
if(!selected.hasOwnProperty(name)){selected[name]=true;}selected[name]=!selected[name];});};LegendModel.prototype.isSelected=function(name){var selected=this.option.selected;return!(selected.hasOwnProperty(name)&&!selected[name])&&util/* indexOf */.cq(this._availableNames,name)>=0;};LegendModel.prototype.getOrient=function(){return this.get('orient')==='vertical'?{index:1,name:'vertical'}:{index:0,name:'horizontal'};};LegendModel.type='legend.plain';LegendModel.dependencies=['series'];LegendModel.defaultOption={// zlevel: 0,
z:4,show:true,orient:'horizontal',left:'center',// right: 'center',
top:0,// bottom: null,
align:'auto',backgroundColor:'rgba(0,0,0,0)',borderColor:'#ccc',borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,symbolRotate:'inherit',symbolKeepAspect:true,inactiveColor:'#ccc',inactiveBorderColor:'#ccc',inactiveBorderWidth:'auto',itemStyle:{color:'inherit',opacity:'inherit',borderColor:'inherit',borderWidth:'auto',borderCap:'inherit',borderJoin:'inherit',borderDashOffset:'inherit',borderMiterLimit:'inherit'},lineStyle:{width:'auto',color:'inherit',inactiveColor:'#ccc',inactiveWidth:2,opacity:'inherit',type:'inherit',cap:'inherit',join:'inherit',dashOffset:'inherit',miterLimit:'inherit'},textStyle:{color:'#333'},selectedMode:true,selector:false,selectorLabel:{show:true,borderRadius:10,padding:[3,5,3,5],fontSize:12,fontFamily:'sans-serif',color:'#666',borderWidth:1,borderColor:'#666'},emphasis:{selectorLabel:{show:true,color:'#eee',backgroundColor:'#666'}},selectorPosition:'auto',selectorItemGap:7,selectorButtonGap:10,tooltip:{show:false}};return LegendModel;}(Component/* default */.Z);/* harmony default export */ const legend_LegendModel = (LegendModel);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(16304);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(19568);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(45482);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(87662);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/helper/listComponent.js
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
*/ // @ts-nocheck
/**
 * Layout list like component.
 * It will box layout each items in group of component and then position the whole group in the viewport
 * @param {module:zrender/group/Group} group
 * @param {module:echarts/model/Component} componentModel
 * @param {module:echarts/ExtensionAPI}
 */function layout(group,componentModel,api){var boxLayoutParams=componentModel.getBoxLayoutParams();var padding=componentModel.get('padding');var viewportSize={width:api.getWidth(),height:api.getHeight()};var rect=getLayoutRect(boxLayoutParams,viewportSize,padding);layoutBox(componentModel.get('orient'),group,componentModel.get('itemGap'),rect.width,rect.height);positionElement(group,boxLayoutParams,viewportSize,padding);}function makeBackground(rect,componentModel){var padding=format/* normalizeCssArray */.MY(componentModel.get('padding'));var style=componentModel.getItemStyle(['color','opacity']);style.fill=componentModel.get('backgroundColor');rect=new Rect/* default */.Z({shape:{x:rect.x-padding[3],y:rect.y-padding[0],width:rect.width+padding[1]+padding[3],height:rect.height+padding[0]+padding[2],r:componentModel.get('borderRadius')},style:style,silent:true,z2:-1});// FIXME
// `subPixelOptimizeRect` may bring some gap between edge of viewpart
// and background rect when setting like `left: 0`, `top: 0`.
// graphic.subPixelOptimizeRect(rect);
return rect;}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(8636);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(74874);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(33518);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/decal.js
var decal = __webpack_require__(7335);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/LegendView.js
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
*/var curry=util/* curry */.WA;var each=util/* each */.S6;var LegendView_Group=Group/* default */.Z;var LegendView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(LegendView,_super);function LegendView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=LegendView.type;_this.newlineDisabled=false;return _this;}LegendView.prototype.init=function(){this.group.add(this._contentGroup=new LegendView_Group());this.group.add(this._selectorGroup=new LegendView_Group());this._isFirstRender=true;};/**
   * @protected
   */LegendView.prototype.getContentGroup=function(){return this._contentGroup;};/**
   * @protected
   */LegendView.prototype.getSelectorGroup=function(){return this._selectorGroup;};/**
   * @override
   */LegendView.prototype.render=function(legendModel,ecModel,api){var isFirstRender=this._isFirstRender;this._isFirstRender=false;this.resetInner();if(!legendModel.get('show',true)){return;}var itemAlign=legendModel.get('align');var orient=legendModel.get('orient');if(!itemAlign||itemAlign==='auto'){itemAlign=legendModel.get('left')==='right'&&orient==='vertical'?'right':'left';}// selector has been normalized to an array in model
var selector=legendModel.get('selector',true);var selectorPosition=legendModel.get('selectorPosition',true);if(selector&&(!selectorPosition||selectorPosition==='auto')){selectorPosition=orient==='horizontal'?'end':'start';}this.renderInner(itemAlign,legendModel,ecModel,api,selector,orient,selectorPosition);// Perform layout.
var positionInfo=legendModel.getBoxLayoutParams();var viewportSize={width:api.getWidth(),height:api.getHeight()};var padding=legendModel.get('padding');var maxSize=util_layout/* getLayoutRect */.ME(positionInfo,viewportSize,padding);var mainRect=this.layoutInner(legendModel,itemAlign,maxSize,isFirstRender,selector,selectorPosition);// Place mainGroup, based on the calculated `mainRect`.
var layoutRect=util_layout/* getLayoutRect */.ME(util/* defaults */.ce({width:mainRect.width,height:mainRect.height},positionInfo),viewportSize,padding);this.group.x=layoutRect.x-mainRect.x;this.group.y=layoutRect.y-mainRect.y;this.group.markRedraw();// Render background after group is layout.
this.group.add(this._backgroundEl=makeBackground(mainRect,legendModel));};LegendView.prototype.resetInner=function(){this.getContentGroup().removeAll();this._backgroundEl&&this.group.remove(this._backgroundEl);this.getSelectorGroup().removeAll();};LegendView.prototype.renderInner=function(itemAlign,legendModel,ecModel,api,selector,orient,selectorPosition){var contentGroup=this.getContentGroup();var legendDrawnMap=util/* createHashMap */.kW();var selectMode=legendModel.get('selectedMode');var excludeSeriesId=[];ecModel.eachRawSeries(function(seriesModel){!seriesModel.get('legendHoverLink')&&excludeSeriesId.push(seriesModel.id);});each(legendModel.getData(),function(legendItemModel,dataIndex){var name=legendItemModel.get('name');// Use empty string or \n as a newline string
if(!this.newlineDisabled&&(name===''||name==='\n')){var g=new LegendView_Group();// @ts-ignore
g.newline=true;contentGroup.add(g);return;}// Representitive series.
var seriesModel=ecModel.getSeriesByName(name)[0];if(legendDrawnMap.get(name)){// Have been drawed
return;}// Legend to control series.
if(seriesModel){var data=seriesModel.getData();var lineVisualStyle=data.getVisual('legendLineStyle')||{};var legendIcon=data.getVisual('legendIcon');/**
         * `data.getVisual('style')` may be the color from the register
         * in series. For example, for line series,
         */var style=data.getVisual('style');var itemGroup=this._createItem(seriesModel,name,dataIndex,legendItemModel,legendModel,itemAlign,lineVisualStyle,style,legendIcon,selectMode,api);itemGroup.on('click',curry(dispatchSelectAction,name,null,api,excludeSeriesId)).on('mouseover',curry(dispatchHighlightAction,seriesModel.name,null,api,excludeSeriesId)).on('mouseout',curry(dispatchDownplayAction,seriesModel.name,null,api,excludeSeriesId));legendDrawnMap.set(name,true);}else{// Legend to control data. In pie and funnel.
ecModel.eachRawSeries(function(seriesModel){// In case multiple series has same data name
if(legendDrawnMap.get(name)){return;}if(seriesModel.legendVisualProvider){var provider=seriesModel.legendVisualProvider;if(!provider.containName(name)){return;}var idx=provider.indexOfName(name);var style=provider.getItemVisual(idx,'style');var legendIcon=provider.getItemVisual(idx,'legendIcon');var colorArr=(0,color/* parse */.Qc)(style.fill);// Color may be set to transparent in visualMap when data is out of range.
// Do not show nothing.
if(colorArr&&colorArr[3]===0){colorArr[3]=0.2;// TODO color is set to 0, 0, 0, 0. Should show correct RGBA
style=util/* extend */.l7(util/* extend */.l7({},style),{fill:(0,color/* stringify */.Pz)(colorArr,'rgba')});}var itemGroup=this._createItem(seriesModel,name,dataIndex,legendItemModel,legendModel,itemAlign,{},style,legendIcon,selectMode,api);// FIXME: consider different series has items with the same name.
itemGroup.on('click',curry(dispatchSelectAction,null,name,api,excludeSeriesId))// Should not specify the series name, consider legend controls
// more than one pie series.
.on('mouseover',curry(dispatchHighlightAction,null,name,api,excludeSeriesId)).on('mouseout',curry(dispatchDownplayAction,null,name,api,excludeSeriesId));legendDrawnMap.set(name,true);}},this);}if(false){}},this);if(selector){this._createSelector(selector,legendModel,api,orient,selectorPosition);}};LegendView.prototype._createSelector=function(selector,legendModel,api,orient,selectorPosition){var selectorGroup=this.getSelectorGroup();each(selector,function createSelectorButton(selectorItem){var type=selectorItem.type;var labelText=new Text/* default */.ZP({style:{x:0,y:0,align:'center',verticalAlign:'middle'},onclick:function onclick(){api.dispatchAction({type:type==='all'?'legendAllSelect':'legendInverseSelect'});}});selectorGroup.add(labelText);var labelModel=legendModel.getModel('selectorLabel');var emphasisLabelModel=legendModel.getModel(['emphasis','selectorLabel']);(0,labelStyle/* setLabelStyle */.ni)(labelText,{normal:labelModel,emphasis:emphasisLabelModel},{defaultText:selectorItem.title});(0,states/* enableHoverEmphasis */.vF)(labelText);});};LegendView.prototype._createItem=function(seriesModel,name,dataIndex,legendItemModel,legendModel,itemAlign,lineVisualStyle,itemVisualStyle,legendIcon,selectMode,api){var drawType=seriesModel.visualDrawType;var itemWidth=legendModel.get('itemWidth');var itemHeight=legendModel.get('itemHeight');var isSelected=legendModel.isSelected(name);var iconRotate=legendItemModel.get('symbolRotate');var symbolKeepAspect=legendItemModel.get('symbolKeepAspect');var legendIconType=legendItemModel.get('icon');legendIcon=legendIconType||legendIcon||'roundRect';var style=getLegendStyle(legendIcon,legendItemModel,lineVisualStyle,itemVisualStyle,drawType,isSelected,api);var itemGroup=new LegendView_Group();var textStyleModel=legendItemModel.getModel('textStyle');if(util/* isFunction */.mf(seriesModel.getLegendIcon)&&(!legendIconType||legendIconType==='inherit')){// Series has specific way to define legend icon
itemGroup.add(seriesModel.getLegendIcon({itemWidth:itemWidth,itemHeight:itemHeight,icon:legendIcon,iconRotate:iconRotate,itemStyle:style.itemStyle,lineStyle:style.lineStyle,symbolKeepAspect:symbolKeepAspect}));}else{// Use default legend icon policy for most series
var rotate=legendIconType==='inherit'&&seriesModel.getData().getVisual('symbol')?iconRotate==='inherit'?seriesModel.getData().getVisual('symbolRotate'):iconRotate:0;// No rotation for no icon
itemGroup.add(getDefaultLegendIcon({itemWidth:itemWidth,itemHeight:itemHeight,icon:legendIcon,iconRotate:rotate,itemStyle:style.itemStyle,lineStyle:style.lineStyle,symbolKeepAspect:symbolKeepAspect}));}var textX=itemAlign==='left'?itemWidth+5:-5;var textAlign=itemAlign;var formatter=legendModel.get('formatter');var content=name;if(util/* isString */.HD(formatter)&&formatter){content=formatter.replace('{name}',name!=null?name:'');}else if(util/* isFunction */.mf(formatter)){content=formatter(name);}var inactiveColor=legendItemModel.get('inactiveColor');itemGroup.add(new Text/* default */.ZP({style:(0,labelStyle/* createTextStyle */.Lr)(textStyleModel,{text:content,x:textX,y:itemHeight/2,fill:isSelected?textStyleModel.getTextColor():inactiveColor,align:textAlign,verticalAlign:'middle'})}));// Add a invisible rect to increase the area of mouse hover
var hitRect=new Rect/* default */.Z({shape:itemGroup.getBoundingRect(),invisible:true});var tooltipModel=legendItemModel.getModel('tooltip');if(tooltipModel.get('show')){graphic.setTooltipConfig({el:hitRect,componentModel:legendModel,itemName:name,itemTooltipOption:tooltipModel.option});}itemGroup.add(hitRect);itemGroup.eachChild(function(child){child.silent=true;});hitRect.silent=!selectMode;this.getContentGroup().add(itemGroup);(0,states/* enableHoverEmphasis */.vF)(itemGroup);// @ts-ignore
itemGroup.__legendDataIndex=dataIndex;return itemGroup;};LegendView.prototype.layoutInner=function(legendModel,itemAlign,maxSize,isFirstRender,selector,selectorPosition){var contentGroup=this.getContentGroup();var selectorGroup=this.getSelectorGroup();// Place items in contentGroup.
util_layout/* box */.BZ(legendModel.get('orient'),contentGroup,legendModel.get('itemGap'),maxSize.width,maxSize.height);var contentRect=contentGroup.getBoundingRect();var contentPos=[-contentRect.x,-contentRect.y];selectorGroup.markRedraw();contentGroup.markRedraw();if(selector){// Place buttons in selectorGroup
util_layout/* box */.BZ(// Buttons in selectorGroup always layout horizontally
'horizontal',selectorGroup,legendModel.get('selectorItemGap',true));var selectorRect=selectorGroup.getBoundingRect();var selectorPos=[-selectorRect.x,-selectorRect.y];var selectorButtonGap=legendModel.get('selectorButtonGap',true);var orientIdx=legendModel.getOrient().index;var wh=orientIdx===0?'width':'height';var hw=orientIdx===0?'height':'width';var yx=orientIdx===0?'y':'x';if(selectorPosition==='end'){selectorPos[orientIdx]+=contentRect[wh]+selectorButtonGap;}else{contentPos[orientIdx]+=selectorRect[wh]+selectorButtonGap;}//Always align selector to content as 'middle'
selectorPos[1-orientIdx]+=contentRect[hw]/2-selectorRect[hw]/2;selectorGroup.x=selectorPos[0];selectorGroup.y=selectorPos[1];contentGroup.x=contentPos[0];contentGroup.y=contentPos[1];var mainRect={x:0,y:0};mainRect[wh]=contentRect[wh]+selectorButtonGap+selectorRect[wh];mainRect[hw]=Math.max(contentRect[hw],selectorRect[hw]);mainRect[yx]=Math.min(0,selectorRect[yx]+selectorPos[1-orientIdx]);return mainRect;}else{contentGroup.x=contentPos[0];contentGroup.y=contentPos[1];return this.group.getBoundingRect();}};/**
   * @protected
   */LegendView.prototype.remove=function(){this.getContentGroup().removeAll();this._isFirstRender=true;};LegendView.type='legend.plain';return LegendView;}(view_Component/* default */.Z);function getLegendStyle(iconType,legendItemModel,lineVisualStyle,itemVisualStyle,drawType,isSelected,api){/**
   * Use series style if is inherit;
   * elsewise, use legend style
   */function handleCommonProps(style,visualStyle){// If lineStyle.width is 'auto', it is set to be 2 if series has border
if(style.lineWidth==='auto'){style.lineWidth=visualStyle.lineWidth>0?2:0;}each(style,function(propVal,propName){style[propName]==='inherit'&&(style[propName]=visualStyle[propName]);});}// itemStyle
var itemStyleModel=legendItemModel.getModel('itemStyle');var itemStyle=itemStyleModel.getItemStyle();var iconBrushType=iconType.lastIndexOf('empty',0)===0?'fill':'stroke';var decalStyle=itemStyleModel.getShallow('decal');itemStyle.decal=!decalStyle||decalStyle==='inherit'?itemVisualStyle.decal:(0,decal/* createOrUpdatePatternFromDecal */.I)(decalStyle,api);if(itemStyle.fill==='inherit'){/**
     * Series with visualDrawType as 'stroke' should have
     * series stroke as legend fill
     */itemStyle.fill=itemVisualStyle[drawType];}if(itemStyle.stroke==='inherit'){/**
     * icon type with "emptyXXX" should use fill color
     * in visual style
     */itemStyle.stroke=itemVisualStyle[iconBrushType];}if(itemStyle.opacity==='inherit'){/**
     * Use lineStyle.opacity if drawType is stroke
     */itemStyle.opacity=(drawType==='fill'?itemVisualStyle:lineVisualStyle).opacity;}handleCommonProps(itemStyle,itemVisualStyle);// lineStyle
var legendLineModel=legendItemModel.getModel('lineStyle');var lineStyle=legendLineModel.getLineStyle();handleCommonProps(lineStyle,lineVisualStyle);// Fix auto color to real color
itemStyle.fill==='auto'&&(itemStyle.fill=itemVisualStyle.fill);itemStyle.stroke==='auto'&&(itemStyle.stroke=itemVisualStyle.fill);lineStyle.stroke==='auto'&&(lineStyle.stroke=itemVisualStyle.fill);if(!isSelected){var borderWidth=legendItemModel.get('inactiveBorderWidth');/**
     * Since stroke is set to be inactiveBorderColor, it may occur that
     * there is no border in series but border in legend, so we need to
     * use border only when series has border if is set to be auto
     */var visualHasBorder=itemStyle[iconBrushType];itemStyle.lineWidth=borderWidth==='auto'?itemVisualStyle.lineWidth>0&&visualHasBorder?2:0:itemStyle.lineWidth;itemStyle.fill=legendItemModel.get('inactiveColor');itemStyle.stroke=legendItemModel.get('inactiveBorderColor');lineStyle.stroke=legendLineModel.get('inactiveColor');lineStyle.lineWidth=legendLineModel.get('inactiveWidth');}return{itemStyle:itemStyle,lineStyle:lineStyle};}function getDefaultLegendIcon(opt){var symboType=opt.icon||'roundRect';var icon=(0,symbol/* createSymbol */.th)(symboType,0,0,opt.itemWidth,opt.itemHeight,opt.itemStyle.fill,opt.symbolKeepAspect);icon.setStyle(opt.itemStyle);icon.rotation=(opt.iconRotate||0)*Math.PI/180;icon.setOrigin([opt.itemWidth/2,opt.itemHeight/2]);if(symboType.indexOf('empty')>-1){icon.style.stroke=icon.style.fill;icon.style.fill='#fff';icon.style.lineWidth=2;}return icon;}function dispatchSelectAction(seriesName,dataName,api,excludeSeriesId){// downplay before unselect
dispatchDownplayAction(seriesName,dataName,api,excludeSeriesId);api.dispatchAction({type:'legendToggleSelect',name:seriesName!=null?seriesName:dataName});// highlight after select
// TODO higlight immediately may cause animation loss.
dispatchHighlightAction(seriesName,dataName,api,excludeSeriesId);}function isUseHoverLayer(api){var list=api.getZr().storage.getDisplayList();var emphasisState;var i=0;var len=list.length;while(i<len&&!(emphasisState=list[i].states.emphasis)){i++;}return emphasisState&&emphasisState.hoverLayer;}function dispatchHighlightAction(seriesName,dataName,api,excludeSeriesId){// If element hover will move to a hoverLayer.
if(!isUseHoverLayer(api)){api.dispatchAction({type:'highlight',seriesName:seriesName,name:dataName,excludeSeriesId:excludeSeriesId});}}function dispatchDownplayAction(seriesName,dataName,api,excludeSeriesId){// If element hover will move to a hoverLayer.
if(!isUseHoverLayer(api)){api.dispatchAction({type:'downplay',seriesName:seriesName,name:dataName,excludeSeriesId:excludeSeriesId});}}/* harmony default export */ const legend_LegendView = (LegendView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/legendFilter.js
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
*/function legendFilter(ecModel){var legendModels=ecModel.findComponents({mainType:'legend'});if(legendModels&&legendModels.length){ecModel.filterSeries(function(series){// If in any legend component the status is not selected.
// Because in legend series is assumed selected when it is not in the legend data.
for(var i=0;i<legendModels.length;i++){if(!legendModels[i].isSelected(series.name)){return false;}}return true;});}}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/legendAction.js
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
*/ // @ts-nocheck
function legendSelectActionHandler(methodName,payload,ecModel){var selectedMap={};var isToggleSelect=methodName==='toggleSelected';var isSelected;// Update all legend components
ecModel.eachComponent('legend',function(legendModel){if(isToggleSelect&&isSelected!=null){// Force other legend has same selected status
// Or the first is toggled to true and other are toggled to false
// In the case one legend has some item unSelected in option. And if other legend
// doesn't has the item, they will assume it is selected.
legendModel[isSelected?'select':'unSelect'](payload.name);}else if(methodName==='allSelect'||methodName==='inverseSelect'){legendModel[methodName]();}else{legendModel[methodName](payload.name);isSelected=legendModel.isSelected(payload.name);}var legendData=legendModel.getData();(0,util/* each */.S6)(legendData,function(model){var name=model.get('name');// Wrap element
if(name==='\n'||name===''){return;}var isItemSelected=legendModel.isSelected(name);if(selectedMap.hasOwnProperty(name)){// Unselected if any legend is unselected
selectedMap[name]=selectedMap[name]&&isItemSelected;}else{selectedMap[name]=isItemSelected;}});});// Return the event explicitly
return methodName==='allSelect'||methodName==='inverseSelect'?{selected:selectedMap}:{name:payload.name,selected:selectedMap};}function installLegendAction(registers){/**
   * @event legendToggleSelect
   * @type {Object}
   * @property {string} type 'legendToggleSelect'
   * @property {string} [from]
   * @property {string} name Series name or data item name
   */registers.registerAction('legendToggleSelect','legendselectchanged',(0,util/* curry */.WA)(legendSelectActionHandler,'toggleSelected'));registers.registerAction('legendAllSelect','legendselectall',(0,util/* curry */.WA)(legendSelectActionHandler,'allSelect'));registers.registerAction('legendInverseSelect','legendinverseselect',(0,util/* curry */.WA)(legendSelectActionHandler,'inverseSelect'));/**
   * @event legendSelect
   * @type {Object}
   * @property {string} type 'legendSelect'
   * @property {string} name Series name or data item name
   */registers.registerAction('legendSelect','legendselected',(0,util/* curry */.WA)(legendSelectActionHandler,'select'));/**
   * @event legendUnSelect
   * @type {Object}
   * @property {string} type 'legendUnSelect'
   * @property {string} name Series name or data item name
   */registers.registerAction('legendUnSelect','legendunselected',(0,util/* curry */.WA)(legendSelectActionHandler,'unSelect'));}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/installLegendPlain.js
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
*/function install(registers){registers.registerComponentModel(legend_LegendModel);registers.registerComponentView(legend_LegendView);registers.registerProcessor(registers.PRIORITY.PROCESSOR.SERIES_FILTER,legendFilter);registers.registerSubTypeDefaulter('legend',function(){return'plain';});installLegendAction(registers);}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(36189);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/ScrollableLegendModel.js
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
*/var ScrollableLegendModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ScrollableLegendModel,_super);function ScrollableLegendModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=ScrollableLegendModel.type;return _this;}/**
   * @param {number} scrollDataIndex
   */ScrollableLegendModel.prototype.setScrollDataIndex=function(scrollDataIndex){this.option.scrollDataIndex=scrollDataIndex;};ScrollableLegendModel.prototype.init=function(option,parentModel,ecModel){var inputPositionParams=(0,util_layout/* getLayoutParams */.tE)(option);_super.prototype.init.call(this,option,parentModel,ecModel);mergeAndNormalizeLayoutParams(this,option,inputPositionParams);};/**
   * @override
   */ScrollableLegendModel.prototype.mergeOption=function(option,ecModel){_super.prototype.mergeOption.call(this,option,ecModel);mergeAndNormalizeLayoutParams(this,this.option,option);};ScrollableLegendModel.type='legend.scroll';ScrollableLegendModel.defaultOption=(0,component/* inheritDefaultOption */.ZL)(legend_LegendModel.defaultOption,{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:'end',pageFormatter:'{current}/{total}',pageIcons:{horizontal:['M0,0L12,-10L12,10z','M0,0L-12,-10L-12,10z'],vertical:['M0,0L20,0L10,-20z','M0,0L20,0L10,20z']},pageIconColor:'#2f4554',pageIconInactiveColor:'#aaa',pageIconSize:15,pageTextStyle:{color:'#333'},animationDurationUpdate:800});return ScrollableLegendModel;}(legend_LegendModel);;// Do not `ignoreSize` to enable setting {left: 10, right: 10}.
function mergeAndNormalizeLayoutParams(legendModel,target,raw){var orient=legendModel.getOrient();var ignoreSize=[1,1];ignoreSize[orient.index]=0;(0,util_layout/* mergeLayoutParam */.dt)(target,raw,{type:'box',ignoreSize:!!ignoreSize});}/* harmony default export */ const legend_ScrollableLegendModel = (ScrollableLegendModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/ScrollableLegendView.js
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
 * Separate legend and scrollable legend to reduce package size.
 */var ScrollableLegendView_Group=Group/* default */.Z;var WH=['width','height'];var XY=['x','y'];var ScrollableLegendView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ScrollableLegendView,_super);function ScrollableLegendView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=ScrollableLegendView.type;_this.newlineDisabled=true;_this._currentIndex=0;return _this;}ScrollableLegendView.prototype.init=function(){_super.prototype.init.call(this);this.group.add(this._containerGroup=new ScrollableLegendView_Group());this._containerGroup.add(this.getContentGroup());this.group.add(this._controllerGroup=new ScrollableLegendView_Group());};/**
   * @override
   */ScrollableLegendView.prototype.resetInner=function(){_super.prototype.resetInner.call(this);this._controllerGroup.removeAll();this._containerGroup.removeClipPath();this._containerGroup.__rectSize=null;};/**
   * @override
   */ScrollableLegendView.prototype.renderInner=function(itemAlign,legendModel,ecModel,api,selector,orient,selectorPosition){var self=this;// Render content items.
_super.prototype.renderInner.call(this,itemAlign,legendModel,ecModel,api,selector,orient,selectorPosition);var controllerGroup=this._controllerGroup;// FIXME: support be 'auto' adapt to size number text length,
// e.g., '3/12345' should not overlap with the control arrow button.
var pageIconSize=legendModel.get('pageIconSize',true);var pageIconSizeArr=util/* isArray */.kJ(pageIconSize)?pageIconSize:[pageIconSize,pageIconSize];createPageButton('pagePrev',0);var pageTextStyleModel=legendModel.getModel('pageTextStyle');controllerGroup.add(new Text/* default */.ZP({name:'pageText',style:{// Placeholder to calculate a proper layout.
text:'xx/xx',fill:pageTextStyleModel.getTextColor(),font:pageTextStyleModel.getFont(),verticalAlign:'middle',align:'center'},silent:true}));createPageButton('pageNext',1);function createPageButton(name,iconIdx){var pageDataIndexName=name+'DataIndex';var icon=graphic.createIcon(legendModel.get('pageIcons',true)[legendModel.getOrient().name][iconIdx],{// Buttons will be created in each render, so we do not need
// to worry about avoiding using legendModel kept in scope.
onclick:util/* bind */.ak(self._pageGo,self,pageDataIndexName,legendModel,api)},{x:-pageIconSizeArr[0]/2,y:-pageIconSizeArr[1]/2,width:pageIconSizeArr[0],height:pageIconSizeArr[1]});icon.name=name;controllerGroup.add(icon);}};/**
   * @override
   */ScrollableLegendView.prototype.layoutInner=function(legendModel,itemAlign,maxSize,isFirstRender,selector,selectorPosition){var selectorGroup=this.getSelectorGroup();var orientIdx=legendModel.getOrient().index;var wh=WH[orientIdx];var xy=XY[orientIdx];var hw=WH[1-orientIdx];var yx=XY[1-orientIdx];selector&&util_layout/* box */.BZ(// Buttons in selectorGroup always layout horizontally
'horizontal',selectorGroup,legendModel.get('selectorItemGap',true));var selectorButtonGap=legendModel.get('selectorButtonGap',true);var selectorRect=selectorGroup.getBoundingRect();var selectorPos=[-selectorRect.x,-selectorRect.y];var processMaxSize=util/* clone */.d9(maxSize);selector&&(processMaxSize[wh]=maxSize[wh]-selectorRect[wh]-selectorButtonGap);var mainRect=this._layoutContentAndController(legendModel,isFirstRender,processMaxSize,orientIdx,wh,hw,yx,xy);if(selector){if(selectorPosition==='end'){selectorPos[orientIdx]+=mainRect[wh]+selectorButtonGap;}else{var offset=selectorRect[wh]+selectorButtonGap;selectorPos[orientIdx]-=offset;mainRect[xy]-=offset;}mainRect[wh]+=selectorRect[wh]+selectorButtonGap;selectorPos[1-orientIdx]+=mainRect[yx]+mainRect[hw]/2-selectorRect[hw]/2;mainRect[hw]=Math.max(mainRect[hw],selectorRect[hw]);mainRect[yx]=Math.min(mainRect[yx],selectorRect[yx]+selectorPos[1-orientIdx]);selectorGroup.x=selectorPos[0];selectorGroup.y=selectorPos[1];selectorGroup.markRedraw();}return mainRect;};ScrollableLegendView.prototype._layoutContentAndController=function(legendModel,isFirstRender,maxSize,orientIdx,wh,hw,yx,xy){var contentGroup=this.getContentGroup();var containerGroup=this._containerGroup;var controllerGroup=this._controllerGroup;// Place items in contentGroup.
util_layout/* box */.BZ(legendModel.get('orient'),contentGroup,legendModel.get('itemGap'),!orientIdx?null:maxSize.width,orientIdx?null:maxSize.height);util_layout/* box */.BZ(// Buttons in controller are layout always horizontally.
'horizontal',controllerGroup,legendModel.get('pageButtonItemGap',true));var contentRect=contentGroup.getBoundingRect();var controllerRect=controllerGroup.getBoundingRect();var showController=this._showController=contentRect[wh]>maxSize[wh];// In case that the inner elements of contentGroup layout do not based on [0, 0]
var contentPos=[-contentRect.x,-contentRect.y];// Remain contentPos when scroll animation perfroming.
// If first rendering, `contentGroup.position` is [0, 0], which
// does not make sense and may cause unexepcted animation if adopted.
if(!isFirstRender){contentPos[orientIdx]=contentGroup[xy];}// Layout container group based on 0.
var containerPos=[0,0];var controllerPos=[-controllerRect.x,-controllerRect.y];var pageButtonGap=util/* retrieve2 */.pD(legendModel.get('pageButtonGap',true),legendModel.get('itemGap',true));// Place containerGroup and controllerGroup and contentGroup.
if(showController){var pageButtonPosition=legendModel.get('pageButtonPosition',true);// controller is on the right / bottom.
if(pageButtonPosition==='end'){controllerPos[orientIdx]+=maxSize[wh]-controllerRect[wh];}// controller is on the left / top.
else{containerPos[orientIdx]+=controllerRect[wh]+pageButtonGap;}}// Always align controller to content as 'middle'.
controllerPos[1-orientIdx]+=contentRect[hw]/2-controllerRect[hw]/2;contentGroup.setPosition(contentPos);containerGroup.setPosition(containerPos);controllerGroup.setPosition(controllerPos);// Calculate `mainRect` and set `clipPath`.
// mainRect should not be calculated by `this.group.getBoundingRect()`
// for sake of the overflow.
var mainRect={x:0,y:0};// Consider content may be overflow (should be clipped).
mainRect[wh]=showController?maxSize[wh]:contentRect[wh];mainRect[hw]=Math.max(contentRect[hw],controllerRect[hw]);// `containerRect[yx] + containerPos[1 - orientIdx]` is 0.
mainRect[yx]=Math.min(0,controllerRect[yx]+controllerPos[1-orientIdx]);containerGroup.__rectSize=maxSize[wh];if(showController){var clipShape={x:0,y:0};clipShape[wh]=Math.max(maxSize[wh]-controllerRect[wh]-pageButtonGap,0);clipShape[hw]=mainRect[hw];containerGroup.setClipPath(new Rect/* default */.Z({shape:clipShape}));// Consider content may be larger than container, container rect
// can not be obtained from `containerGroup.getBoundingRect()`.
containerGroup.__rectSize=clipShape[wh];}else{// Do not remove or ignore controller. Keep them set as placeholders.
controllerGroup.eachChild(function(child){child.attr({invisible:true,silent:true});});}// Content translate animation.
var pageInfo=this._getPageInfo(legendModel);pageInfo.pageIndex!=null&&basicTrasition/* updateProps */.D(contentGroup,{x:pageInfo.contentPosition[0],y:pageInfo.contentPosition[1]},// When switch from "show controller" to "not show controller", view should be
// updated immediately without animation, otherwise causes weird effect.
showController?legendModel:null);this._updatePageInfoView(legendModel,pageInfo);return mainRect;};ScrollableLegendView.prototype._pageGo=function(to,legendModel,api){var scrollDataIndex=this._getPageInfo(legendModel)[to];scrollDataIndex!=null&&api.dispatchAction({type:'legendScroll',scrollDataIndex:scrollDataIndex,legendId:legendModel.id});};ScrollableLegendView.prototype._updatePageInfoView=function(legendModel,pageInfo){var controllerGroup=this._controllerGroup;util/* each */.S6(['pagePrev','pageNext'],function(name){var key=name+'DataIndex';var canJump=pageInfo[key]!=null;var icon=controllerGroup.childOfName(name);if(icon){icon.setStyle('fill',canJump?legendModel.get('pageIconColor',true):legendModel.get('pageIconInactiveColor',true));icon.cursor=canJump?'pointer':'default';}});var pageText=controllerGroup.childOfName('pageText');var pageFormatter=legendModel.get('pageFormatter');var pageIndex=pageInfo.pageIndex;var current=pageIndex!=null?pageIndex+1:0;var total=pageInfo.pageCount;pageText&&pageFormatter&&pageText.setStyle('text',util/* isString */.HD(pageFormatter)?pageFormatter.replace('{current}',current==null?'':current+'').replace('{total}',total==null?'':total+''):pageFormatter({current:current,total:total}));};/**
   *  contentPosition: Array.<number>, null when data item not found.
   *  pageIndex: number, null when data item not found.
   *  pageCount: number, always be a number, can be 0.
   *  pagePrevDataIndex: number, null when no previous page.
   *  pageNextDataIndex: number, null when no next page.
   * }
   */ScrollableLegendView.prototype._getPageInfo=function(legendModel){var scrollDataIndex=legendModel.get('scrollDataIndex',true);var contentGroup=this.getContentGroup();var containerRectSize=this._containerGroup.__rectSize;var orientIdx=legendModel.getOrient().index;var wh=WH[orientIdx];var xy=XY[orientIdx];var targetItemIndex=this._findTargetItemIndex(scrollDataIndex);var children=contentGroup.children();var targetItem=children[targetItemIndex];var itemCount=children.length;var pCount=!itemCount?0:1;var result={contentPosition:[contentGroup.x,contentGroup.y],pageCount:pCount,pageIndex:pCount-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!targetItem){return result;}var targetItemInfo=getItemInfo(targetItem);result.contentPosition[orientIdx]=-targetItemInfo.s;// Strategy:
// (1) Always align based on the left/top most item.
// (2) It is user-friendly that the last item shown in the
// current window is shown at the begining of next window.
// Otherwise if half of the last item is cut by the window,
// it will have no chance to display entirely.
// (3) Consider that item size probably be different, we
// have calculate pageIndex by size rather than item index,
// and we can not get page index directly by division.
// (4) The window is to narrow to contain more than
// one item, we should make sure that the page can be fliped.
for(var i=targetItemIndex+1,winStartItemInfo=targetItemInfo,winEndItemInfo=targetItemInfo,currItemInfo=null;i<=itemCount;++i){currItemInfo=getItemInfo(children[i]);if(// Half of the last item is out of the window.
!currItemInfo&&winEndItemInfo.e>winStartItemInfo.s+containerRectSize||// If the current item does not intersect with the window, the new page
// can be started at the current item or the last item.
currItemInfo&&!intersect(currItemInfo,winStartItemInfo.s)){if(winEndItemInfo.i>winStartItemInfo.i){winStartItemInfo=winEndItemInfo;}else{// e.g., when page size is smaller than item size.
winStartItemInfo=currItemInfo;}if(winStartItemInfo){if(result.pageNextDataIndex==null){result.pageNextDataIndex=winStartItemInfo.i;}++result.pageCount;}}winEndItemInfo=currItemInfo;}for(var i=targetItemIndex-1,winStartItemInfo=targetItemInfo,winEndItemInfo=targetItemInfo,currItemInfo=null;i>=-1;--i){currItemInfo=getItemInfo(children[i]);if(// If the the end item does not intersect with the window started
// from the current item, a page can be settled.
(!currItemInfo||!intersect(winEndItemInfo,currItemInfo.s))&&// e.g., when page size is smaller than item size.
winStartItemInfo.i<winEndItemInfo.i){winEndItemInfo=winStartItemInfo;if(result.pagePrevDataIndex==null){result.pagePrevDataIndex=winStartItemInfo.i;}++result.pageCount;++result.pageIndex;}winStartItemInfo=currItemInfo;}return result;function getItemInfo(el){if(el){var itemRect=el.getBoundingRect();var start=itemRect[xy]+el[xy];return{s:start,e:start+itemRect[wh],i:el.__legendDataIndex};}}function intersect(itemInfo,winStart){return itemInfo.e>=winStart&&itemInfo.s<=winStart+containerRectSize;}};ScrollableLegendView.prototype._findTargetItemIndex=function(targetDataIndex){if(!this._showController){return 0;}var index;var contentGroup=this.getContentGroup();var defaultIndex;contentGroup.eachChild(function(child,idx){var legendDataIdx=child.__legendDataIndex;// FIXME
// If the given targetDataIndex (from model) is illegal,
// we use defaultIndex. But the index on the legend model and
// action payload is still illegal. That case will not be
// changed until some scenario requires.
if(defaultIndex==null&&legendDataIdx!=null){defaultIndex=idx;}if(legendDataIdx===targetDataIndex){index=idx;}});return index!=null?index:defaultIndex;};ScrollableLegendView.type='legend.scroll';return ScrollableLegendView;}(legend_LegendView);/* harmony default export */ const legend_ScrollableLegendView = (ScrollableLegendView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/scrollableLegendAction.js
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
*/function installScrollableLegendAction(registers){/**
   * @event legendScroll
   * @type {Object}
   * @property {string} type 'legendScroll'
   * @property {string} scrollDataIndex
   */registers.registerAction('legendScroll','legendscroll',function(payload,ecModel){var scrollDataIndex=payload.scrollDataIndex;scrollDataIndex!=null&&ecModel.eachComponent({mainType:'legend',subType:'scroll',query:payload},function(legendModel){legendModel.setScrollDataIndex(scrollDataIndex);});});}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/installLegendScroll.js
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
*/function installLegendScroll_install(registers){(0,extension/* use */.D)(install);registers.registerComponentModel(legend_ScrollableLegendModel);registers.registerComponentView(legend_ScrollableLegendView);installScrollableLegendAction(registers);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend/install.js
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
*/function install_install(registers){(0,extension/* use */.D)(install);(0,extension/* use */.D)(installLegendScroll_install);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/legend.js
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
*/ // Do not contain scrollable legend, for sake of file size.
(0,extension/* use */.D)(install_install);

/***/ }),

/***/ 22439:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
var checkMarkerInSeries = __webpack_require__(11116);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/marker/MarkerModel.js
var MarkerModel = __webpack_require__(91735);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/marker/MarkLineModel.js
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
*/var MarkLineModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(MarkLineModel,_super);function MarkLineModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=MarkLineModel.type;return _this;}MarkLineModel.prototype.createMarkerModelFromSeries=function(markerOpt,masterMarkerModel,ecModel){return new MarkLineModel(markerOpt,masterMarkerModel,ecModel);};MarkLineModel.type='markLine';MarkLineModel.defaultOption={// zlevel: 0,
z:5,symbol:['circle','arrow'],symbolSize:[8,16],//symbolRotate: 0,
symbolOffset:0,precision:2,tooltip:{trigger:'item'},label:{show:true,position:'end',distance:5},lineStyle:{type:'dashed'},emphasis:{label:{show:true},lineStyle:{width:3}},animationEasing:'linear'};return MarkLineModel;}(MarkerModel/* default */.Z);/* harmony default export */ const marker_MarkLineModel = (MarkLineModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/SeriesData.js + 1 modules
var SeriesData = __webpack_require__(66278);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/marker/markerHelper.js
var markerHelper = __webpack_require__(65991);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/LineDraw.js
var LineDraw = __webpack_require__(12301);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/marker/MarkerView.js
var MarkerView = __webpack_require__(17030);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/dataStackHelper.js
var dataStackHelper = __webpack_require__(29209);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(32266);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(80578);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/marker/MarkLineView.js
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
*/var inner=(0,model/* makeInner */.Yf)();var markLineTransform=function markLineTransform(seriesModel,coordSys,mlModel,item){var data=seriesModel.getData();var itemArray;if(!(0,util/* isArray */.kJ)(item)){// Special type markLine like 'min', 'max', 'average', 'median'
var mlType=item.type;if(mlType==='min'||mlType==='max'||mlType==='average'||mlType==='median'// In case
// data: [{
//   yAxis: 10
// }]
||item.xAxis!=null||item.yAxis!=null){var valueAxis=void 0;var value=void 0;if(item.yAxis!=null||item.xAxis!=null){valueAxis=coordSys.getAxis(item.yAxis!=null?'y':'x');value=(0,util/* retrieve */.Jv)(item.yAxis,item.xAxis);}else{var axisInfo=markerHelper/* getAxisInfo */.r(item,data,coordSys,seriesModel);valueAxis=axisInfo.valueAxis;var valueDataDim=(0,dataStackHelper/* getStackedDimension */.IR)(data,axisInfo.valueDataDim);value=markerHelper/* numCalculate */.Nn(data,valueDataDim,mlType);}var valueIndex=valueAxis.dim==='x'?0:1;var baseIndex=1-valueIndex;// Normized to 2d data with start and end point
var mlFrom=(0,util/* clone */.d9)(item);var mlTo={coord:[]};mlFrom.type=null;mlFrom.coord=[];mlFrom.coord[baseIndex]=-Infinity;mlTo.coord[baseIndex]=Infinity;var precision=mlModel.get('precision');if(precision>=0&&(0,util/* isNumber */.hj)(value)){value=+value.toFixed(Math.min(precision,20));}mlFrom.coord[valueIndex]=mlTo.coord[valueIndex]=value;itemArray=[mlFrom,mlTo,{type:mlType,valueIndex:item.valueIndex,// Force to use the value of calculated value.
value:value}];}else{// Invalid data
if(false){}itemArray=[];}}else{itemArray=item;}var normalizedItem=[markerHelper/* dataTransform */.Z3(seriesModel,itemArray[0]),markerHelper/* dataTransform */.Z3(seriesModel,itemArray[1]),(0,util/* extend */.l7)({},itemArray[2])];// Avoid line data type is extended by from(to) data type
normalizedItem[2].type=normalizedItem[2].type||null;// Merge from option and to option into line option
(0,util/* merge */.TS)(normalizedItem[2],normalizedItem[0]);(0,util/* merge */.TS)(normalizedItem[2],normalizedItem[1]);return normalizedItem;};function isInifinity(val){return!isNaN(val)&&!isFinite(val);}// If a markLine has one dim
function ifMarkLineHasOnlyDim(dimIndex,fromCoord,toCoord,coordSys){var otherDimIndex=1-dimIndex;var dimName=coordSys.dimensions[dimIndex];return isInifinity(fromCoord[otherDimIndex])&&isInifinity(toCoord[otherDimIndex])&&fromCoord[dimIndex]===toCoord[dimIndex]&&coordSys.getAxis(dimName).containData(fromCoord[dimIndex]);}function markLineFilter(coordSys,item){if(coordSys.type==='cartesian2d'){var fromCoord=item[0].coord;var toCoord=item[1].coord;// In case
// {
//  markLine: {
//    data: [{ yAxis: 2 }]
//  }
// }
if(fromCoord&&toCoord&&(ifMarkLineHasOnlyDim(1,fromCoord,toCoord,coordSys)||ifMarkLineHasOnlyDim(0,fromCoord,toCoord,coordSys))){return true;}}return markerHelper/* dataFilter */.mQ(coordSys,item[0])&&markerHelper/* dataFilter */.mQ(coordSys,item[1]);}function updateSingleMarkerEndLayout(data,idx,isFrom,seriesModel,api){var coordSys=seriesModel.coordinateSystem;var itemModel=data.getItemModel(idx);var point;var xPx=number/* parsePercent */.GM(itemModel.get('x'),api.getWidth());var yPx=number/* parsePercent */.GM(itemModel.get('y'),api.getHeight());if(!isNaN(xPx)&&!isNaN(yPx)){point=[xPx,yPx];}else{// Chart like bar may have there own marker positioning logic
if(seriesModel.getMarkerPosition){// Use the getMarkerPoisition
point=seriesModel.getMarkerPosition(data.getValues(data.dimensions,idx));}else{var dims=coordSys.dimensions;var x=data.get(dims[0],idx);var y=data.get(dims[1],idx);point=coordSys.dataToPoint([x,y]);}// Expand line to the edge of grid if value on one axis is Inifnity
// In case
//  markLine: {
//    data: [{
//      yAxis: 2
//      // or
//      type: 'average'
//    }]
//  }
if((0,CoordinateSystem/* isCoordinateSystemType */.H)(coordSys,'cartesian2d')){// TODO: TYPE ts@4.1 may still infer it as Axis instead of Axis2D. Not sure if it's a bug
var xAxis=coordSys.getAxis('x');var yAxis=coordSys.getAxis('y');var dims=coordSys.dimensions;if(isInifinity(data.get(dims[0],idx))){point[0]=xAxis.toGlobalCoord(xAxis.getExtent()[isFrom?0:1]);}else if(isInifinity(data.get(dims[1],idx))){point[1]=yAxis.toGlobalCoord(yAxis.getExtent()[isFrom?0:1]);}}// Use x, y if has any
if(!isNaN(xPx)){point[0]=xPx;}if(!isNaN(yPx)){point[1]=yPx;}}data.setItemLayout(idx,point);}var MarkLineView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(MarkLineView,_super);function MarkLineView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=MarkLineView.type;return _this;}MarkLineView.prototype.updateTransform=function(markLineModel,ecModel,api){ecModel.eachSeries(function(seriesModel){var mlModel=MarkerModel/* default.getMarkerModelFromSeries */.Z.getMarkerModelFromSeries(seriesModel,'markLine');if(mlModel){var mlData_1=mlModel.getData();var fromData_1=inner(mlModel).from;var toData_1=inner(mlModel).to;// Update visual and layout of from symbol and to symbol
fromData_1.each(function(idx){updateSingleMarkerEndLayout(fromData_1,idx,true,seriesModel,api);updateSingleMarkerEndLayout(toData_1,idx,false,seriesModel,api);});// Update layout of line
mlData_1.each(function(idx){mlData_1.setItemLayout(idx,[fromData_1.getItemLayout(idx),toData_1.getItemLayout(idx)]);});this.markerGroupMap.get(seriesModel.id).updateLayout();}},this);};MarkLineView.prototype.renderSeries=function(seriesModel,mlModel,ecModel,api){var coordSys=seriesModel.coordinateSystem;var seriesId=seriesModel.id;var seriesData=seriesModel.getData();var lineDrawMap=this.markerGroupMap;var lineDraw=lineDrawMap.get(seriesId)||lineDrawMap.set(seriesId,new LineDraw/* default */.Z());this.group.add(lineDraw.group);var mlData=createList(coordSys,seriesModel,mlModel);var fromData=mlData.from;var toData=mlData.to;var lineData=mlData.line;inner(mlModel).from=fromData;inner(mlModel).to=toData;// Line data for tooltip and formatter
mlModel.setData(lineData);// TODO
// Functionally, `symbolSize` & `symbolOffset` can also be 2D array now.
// But the related logic and type definition are not finished yet.
// Finish it if required
var symbolType=mlModel.get('symbol');var symbolSize=mlModel.get('symbolSize');var symbolRotate=mlModel.get('symbolRotate');var symbolOffset=mlModel.get('symbolOffset');// TODO: support callback function like markPoint
if(!(0,util/* isArray */.kJ)(symbolType)){symbolType=[symbolType,symbolType];}if(!(0,util/* isArray */.kJ)(symbolSize)){symbolSize=[symbolSize,symbolSize];}if(!(0,util/* isArray */.kJ)(symbolRotate)){symbolRotate=[symbolRotate,symbolRotate];}if(!(0,util/* isArray */.kJ)(symbolOffset)){symbolOffset=[symbolOffset,symbolOffset];}// Update visual and layout of from symbol and to symbol
mlData.from.each(function(idx){updateDataVisualAndLayout(fromData,idx,true);updateDataVisualAndLayout(toData,idx,false);});// Update visual and layout of line
lineData.each(function(idx){var lineStyle=lineData.getItemModel(idx).getModel('lineStyle').getLineStyle();// lineData.setItemVisual(idx, {
//     color: lineColor || fromData.getItemVisual(idx, 'color')
// });
lineData.setItemLayout(idx,[fromData.getItemLayout(idx),toData.getItemLayout(idx)]);if(lineStyle.stroke==null){lineStyle.stroke=fromData.getItemVisual(idx,'style').fill;}lineData.setItemVisual(idx,{fromSymbolKeepAspect:fromData.getItemVisual(idx,'symbolKeepAspect'),fromSymbolOffset:fromData.getItemVisual(idx,'symbolOffset'),fromSymbolRotate:fromData.getItemVisual(idx,'symbolRotate'),fromSymbolSize:fromData.getItemVisual(idx,'symbolSize'),fromSymbol:fromData.getItemVisual(idx,'symbol'),toSymbolKeepAspect:toData.getItemVisual(idx,'symbolKeepAspect'),toSymbolOffset:toData.getItemVisual(idx,'symbolOffset'),toSymbolRotate:toData.getItemVisual(idx,'symbolRotate'),toSymbolSize:toData.getItemVisual(idx,'symbolSize'),toSymbol:toData.getItemVisual(idx,'symbol'),style:lineStyle});});lineDraw.updateData(lineData);// Set host model for tooltip
// FIXME
mlData.line.eachItemGraphicEl(function(el){(0,innerStore/* getECData */.A)(el).dataModel=mlModel;el.traverse(function(child){(0,innerStore/* getECData */.A)(child).dataModel=mlModel;});});function updateDataVisualAndLayout(data,idx,isFrom){var itemModel=data.getItemModel(idx);updateSingleMarkerEndLayout(data,idx,isFrom,seriesModel,api);var style=itemModel.getModel('itemStyle').getItemStyle();if(style.fill==null){style.fill=(0,helper/* getVisualFromData */.UL)(seriesData,'color');}data.setItemVisual(idx,{symbolKeepAspect:itemModel.get('symbolKeepAspect'),// `0` should be considered as a valid value, so use `retrieve2` instead of `||`
symbolOffset:(0,util/* retrieve2 */.pD)(itemModel.get('symbolOffset',true),symbolOffset[isFrom?0:1]),symbolRotate:(0,util/* retrieve2 */.pD)(itemModel.get('symbolRotate',true),symbolRotate[isFrom?0:1]),// TODO: when 2d array is supported, it should ignore parent
symbolSize:(0,util/* retrieve2 */.pD)(itemModel.get('symbolSize'),symbolSize[isFrom?0:1]),symbol:(0,util/* retrieve2 */.pD)(itemModel.get('symbol',true),symbolType[isFrom?0:1]),style:style});}this.markKeep(lineDraw);lineDraw.group.silent=mlModel.get('silent')||seriesModel.get('silent');};MarkLineView.type='markLine';return MarkLineView;}(MarkerView/* default */.Z);function createList(coordSys,seriesModel,mlModel){var coordDimsInfos;if(coordSys){coordDimsInfos=(0,util/* map */.UI)(coordSys&&coordSys.dimensions,function(coordDim){var info=seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim))||{};// In map series data don't have lng and lat dimension. Fallback to same with coordSys
return (0,util/* extend */.l7)((0,util/* extend */.l7)({},info),{name:coordDim,// DON'T use ordinalMeta to parse and collect ordinal.
ordinalMeta:null});});}else{coordDimsInfos=[{name:'value',type:'float'}];}var fromData=new SeriesData/* default */.Z(coordDimsInfos,mlModel);var toData=new SeriesData/* default */.Z(coordDimsInfos,mlModel);// No dimensions
var lineData=new SeriesData/* default */.Z([],mlModel);var optData=(0,util/* map */.UI)(mlModel.get('data'),(0,util/* curry */.WA)(markLineTransform,seriesModel,coordSys,mlModel));if(coordSys){optData=(0,util/* filter */.hX)(optData,(0,util/* curry */.WA)(markLineFilter,coordSys));}var dimValueGetter=markerHelper/* createMarkerDimValueGetter */.CS(!!coordSys,coordDimsInfos);fromData.initData((0,util/* map */.UI)(optData,function(item){return item[0];}),null,dimValueGetter);toData.initData((0,util/* map */.UI)(optData,function(item){return item[1];}),null,dimValueGetter);lineData.initData((0,util/* map */.UI)(optData,function(item){return item[2];}));lineData.hasItemOption=true;return{from:fromData,to:toData,line:lineData};}/* harmony default export */ const marker_MarkLineView = (MarkLineView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/marker/installMarkLine.js
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
 */function install(registers){registers.registerComponentModel(marker_MarkLineModel);registers.registerComponentView(marker_MarkLineView);registers.registerPreprocessor(function(opt){if((0,checkMarkerInSeries/* default */.Z)(opt.series,'markLine')){// Make sure markLine component is enabled
opt.markLine=opt.markLine||{};}});}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/markLine.js
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

/***/ 47676:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
var checkMarkerInSeries = __webpack_require__(11116);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/marker/MarkerModel.js
var MarkerModel = __webpack_require__(91735);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/marker/MarkPointModel.js
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
*/var MarkPointModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(MarkPointModel,_super);function MarkPointModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=MarkPointModel.type;return _this;}MarkPointModel.prototype.createMarkerModelFromSeries=function(markerOpt,masterMarkerModel,ecModel){return new MarkPointModel(markerOpt,masterMarkerModel,ecModel);};MarkPointModel.type='markPoint';MarkPointModel.defaultOption={// zlevel: 0,
z:5,symbol:'pin',symbolSize:50,//symbolRotate: 0,
//symbolOffset: [0, 0]
tooltip:{trigger:'item'},label:{show:true,position:'inside'},itemStyle:{borderWidth:2},emphasis:{label:{show:true}}};return MarkPointModel;}(MarkerModel/* default */.Z);/* harmony default export */ const marker_MarkPointModel = (MarkPointModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(88087);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/SeriesData.js + 1 modules
var SeriesData = __webpack_require__(66278);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/marker/markerHelper.js
var markerHelper = __webpack_require__(65991);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/marker/MarkerView.js
var MarkerView = __webpack_require__(17030);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(80578);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/marker/MarkPointView.js
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
*/function updateMarkerLayout(mpData,seriesModel,api){var coordSys=seriesModel.coordinateSystem;mpData.each(function(idx){var itemModel=mpData.getItemModel(idx);var point;var xPx=number/* parsePercent */.GM(itemModel.get('x'),api.getWidth());var yPx=number/* parsePercent */.GM(itemModel.get('y'),api.getHeight());if(!isNaN(xPx)&&!isNaN(yPx)){point=[xPx,yPx];}// Chart like bar may have there own marker positioning logic
else if(seriesModel.getMarkerPosition){// Use the getMarkerPoisition
point=seriesModel.getMarkerPosition(mpData.getValues(mpData.dimensions,idx));}else if(coordSys){var x=mpData.get(coordSys.dimensions[0],idx);var y=mpData.get(coordSys.dimensions[1],idx);point=coordSys.dataToPoint([x,y]);}// Use x, y if has any
if(!isNaN(xPx)){point[0]=xPx;}if(!isNaN(yPx)){point[1]=yPx;}mpData.setItemLayout(idx,point);});}var MarkPointView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(MarkPointView,_super);function MarkPointView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=MarkPointView.type;return _this;}MarkPointView.prototype.updateTransform=function(markPointModel,ecModel,api){ecModel.eachSeries(function(seriesModel){var mpModel=MarkerModel/* default.getMarkerModelFromSeries */.Z.getMarkerModelFromSeries(seriesModel,'markPoint');if(mpModel){updateMarkerLayout(mpModel.getData(),seriesModel,api);this.markerGroupMap.get(seriesModel.id).updateLayout();}},this);};MarkPointView.prototype.renderSeries=function(seriesModel,mpModel,ecModel,api){var coordSys=seriesModel.coordinateSystem;var seriesId=seriesModel.id;var seriesData=seriesModel.getData();var symbolDrawMap=this.markerGroupMap;var symbolDraw=symbolDrawMap.get(seriesId)||symbolDrawMap.set(seriesId,new SymbolDraw/* default */.Z());var mpData=createData(coordSys,seriesModel,mpModel);// FIXME
mpModel.setData(mpData);updateMarkerLayout(mpModel.getData(),seriesModel,api);mpData.each(function(idx){var itemModel=mpData.getItemModel(idx);var symbol=itemModel.getShallow('symbol');var symbolSize=itemModel.getShallow('symbolSize');var symbolRotate=itemModel.getShallow('symbolRotate');var symbolOffset=itemModel.getShallow('symbolOffset');var symbolKeepAspect=itemModel.getShallow('symbolKeepAspect');// TODO: refactor needed: single data item should not support callback function
if((0,util/* isFunction */.mf)(symbol)||(0,util/* isFunction */.mf)(symbolSize)||(0,util/* isFunction */.mf)(symbolRotate)||(0,util/* isFunction */.mf)(symbolOffset)){var rawIdx=mpModel.getRawValue(idx);var dataParams=mpModel.getDataParams(idx);if((0,util/* isFunction */.mf)(symbol)){symbol=symbol(rawIdx,dataParams);}if((0,util/* isFunction */.mf)(symbolSize)){// FIXME 这里不兼容 ECharts 2.x，2.x 貌似参数是整个数据？
symbolSize=symbolSize(rawIdx,dataParams);}if((0,util/* isFunction */.mf)(symbolRotate)){symbolRotate=symbolRotate(rawIdx,dataParams);}if((0,util/* isFunction */.mf)(symbolOffset)){symbolOffset=symbolOffset(rawIdx,dataParams);}}var style=itemModel.getModel('itemStyle').getItemStyle();var color=(0,helper/* getVisualFromData */.UL)(seriesData,'color');if(!style.fill){style.fill=color;}mpData.setItemVisual(idx,{symbol:symbol,symbolSize:symbolSize,symbolRotate:symbolRotate,symbolOffset:symbolOffset,symbolKeepAspect:symbolKeepAspect,style:style});});// TODO Text are wrong
symbolDraw.updateData(mpData);this.group.add(symbolDraw.group);// Set host model for tooltip
// FIXME
mpData.eachItemGraphicEl(function(el){el.traverse(function(child){(0,innerStore/* getECData */.A)(child).dataModel=mpModel;});});this.markKeep(symbolDraw);symbolDraw.group.silent=mpModel.get('silent')||seriesModel.get('silent');};MarkPointView.type='markPoint';return MarkPointView;}(MarkerView/* default */.Z);function createData(coordSys,seriesModel,mpModel){var coordDimsInfos;if(coordSys){coordDimsInfos=(0,util/* map */.UI)(coordSys&&coordSys.dimensions,function(coordDim){var info=seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim))||{};// In map series data don't have lng and lat dimension. Fallback to same with coordSys
return (0,util/* extend */.l7)((0,util/* extend */.l7)({},info),{name:coordDim,// DON'T use ordinalMeta to parse and collect ordinal.
ordinalMeta:null});});}else{coordDimsInfos=[{name:'value',type:'float'}];}var mpData=new SeriesData/* default */.Z(coordDimsInfos,mpModel);var dataOpt=(0,util/* map */.UI)(mpModel.get('data'),(0,util/* curry */.WA)(markerHelper/* dataTransform */.Z3,seriesModel));if(coordSys){dataOpt=(0,util/* filter */.hX)(dataOpt,(0,util/* curry */.WA)(markerHelper/* dataFilter */.mQ,coordSys));}var dimValueGetter=markerHelper/* createMarkerDimValueGetter */.CS(!!coordSys,coordDimsInfos);mpData.initData(dataOpt,null,dimValueGetter);return mpData;}/* harmony default export */ const marker_MarkPointView = (MarkPointView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/marker/installMarkPoint.js
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
 */function install(registers){registers.registerComponentModel(marker_MarkPointModel);registers.registerComponentView(marker_MarkPointView);registers.registerPreprocessor(function(opt){if((0,checkMarkerInSeries/* default */.Z)(opt.series,'markPoint')){// Make sure markPoint component is enabled
opt.markPoint=opt.markPoint||{};}});}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/markPoint.js
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
*/ // HINT Markpoint can't be used too much
(0,extension/* use */.D)(install);

/***/ }),

/***/ 91735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88161);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57697);
/* harmony import */ var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9959);
/* harmony import */ var _model_mixin_dataFormat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67955);
/* harmony import */ var _model_Component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15022);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/* harmony import */ var _tooltip_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99547);
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
*/function fillLabel(opt){(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .defaultEmphasis */ .Cc)(opt,'label',['show']);}// { [componentType]: MarkerModel }
var inner=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var MarkerModel=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(MarkerModel,_super);function MarkerModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=MarkerModel.type;/**
     * If marker model is created by self from series
     */_this.createdBySelf=false;return _this;}/**
   * @overrite
   */MarkerModel.prototype.init=function(option,parentModel,ecModel){if(false){}this.mergeDefaultAndTheme(option,ecModel);this._mergeOption(option,ecModel,false,true);};MarkerModel.prototype.isAnimationEnabled=function(){if(zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].node */ .Z.node){return false;}var hostSeries=this.__hostSeries;return this.getShallow('animation')&&hostSeries&&hostSeries.isAnimationEnabled();};/**
   * @overrite
   */MarkerModel.prototype.mergeOption=function(newOpt,ecModel){this._mergeOption(newOpt,ecModel,false,false);};MarkerModel.prototype._mergeOption=function(newOpt,ecModel,createdBySelf,isInit){var componentType=this.mainType;if(!createdBySelf){ecModel.eachSeries(function(seriesModel){// mainType can be markPoint, markLine, markArea
var markerOpt=seriesModel.get(this.mainType,true);var markerModel=inner(seriesModel)[componentType];if(!markerOpt||!markerOpt.data){inner(seriesModel)[componentType]=null;return;}if(!markerModel){if(isInit){// Default label emphasis `position` and `show`
fillLabel(markerOpt);}zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .each */ .S6(markerOpt.data,function(item){// FIXME Overwrite fillLabel method ?
if(item instanceof Array){fillLabel(item[0]);fillLabel(item[1]);}else{fillLabel(item);}});markerModel=this.createMarkerModelFromSeries(markerOpt,this,ecModel);// markerModel = new ImplementedMarkerModel(
//     markerOpt, this, ecModel
// );
zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .extend */ .l7(markerModel,{mainType:this.mainType,// Use the same series index and name
seriesIndex:seriesModel.seriesIndex,name:seriesModel.name,createdBySelf:true});markerModel.__hostSeries=seriesModel;}else{markerModel._mergeOption(markerOpt,ecModel,true);}inner(seriesModel)[componentType]=markerModel;},this);}};MarkerModel.prototype.formatTooltip=function(dataIndex,multipleSeries,dataType){var data=this.getData();var value=this.getRawValue(dataIndex);var itemName=data.getName(dataIndex);return (0,_tooltip_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_4__/* .createTooltipMarkup */ .TX)('section',{header:this.name,blocks:[(0,_tooltip_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_4__/* .createTooltipMarkup */ .TX)('nameValue',{name:itemName,value:value,noName:!itemName,noValue:value==null})]});};MarkerModel.prototype.getData=function(){return this._data;};MarkerModel.prototype.setData=function(data){this._data=data;};MarkerModel.getMarkerModelFromSeries=function(seriesModel,// Support three types of markers. Strict check.
componentType){return inner(seriesModel)[componentType];};MarkerModel.type='marker';MarkerModel.dependencies=['series','grid','polar','geo'];return MarkerModel;}(_model_Component_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .mixin */ .jB(MarkerModel,_model_mixin_dataFormat_js__WEBPACK_IMPORTED_MODULE_6__/* .DataFormatMixin.prototype */ .X.prototype);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkerModel);

/***/ }),

/***/ 17030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88161);
/* harmony import */ var _view_Component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74874);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57697);
/* harmony import */ var _MarkerModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91735);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/* harmony import */ var _util_states_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36073);
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
*/var inner=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var MarkerView=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(MarkerView,_super);function MarkerView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=MarkerView.type;return _this;}MarkerView.prototype.init=function(){this.markerGroupMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createHashMap */ .kW)();};MarkerView.prototype.render=function(markerModel,ecModel,api){var _this=this;var markerGroupMap=this.markerGroupMap;markerGroupMap.each(function(item){inner(item).keep=false;});ecModel.eachSeries(function(seriesModel){var markerModel=_MarkerModel_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getMarkerModelFromSeries */ .Z.getMarkerModelFromSeries(seriesModel,_this.type);markerModel&&_this.renderSeries(seriesModel,markerModel,ecModel,api);});markerGroupMap.each(function(item){!inner(item).keep&&_this.group.remove(item.group);});};MarkerView.prototype.markKeep=function(drawGroup){inner(drawGroup).keep=true;};MarkerView.prototype.toggleBlurSeries=function(seriesModelList,isBlur){var _this=this;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(seriesModelList,function(seriesModel){var markerModel=_MarkerModel_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getMarkerModelFromSeries */ .Z.getMarkerModelFromSeries(seriesModel,_this.type);if(markerModel){var data=markerModel.getData();data.eachItemGraphicEl(function(el){if(el){isBlur?(0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__/* .enterBlur */ .SX)(el):(0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__/* .leaveBlur */ .VP)(el);}});}});};MarkerView.type='marker';return MarkerView;}(_view_Component_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkerView);

/***/ }),

/***/ 11116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ checkMarkerInSeries)
/* harmony export */ });
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
*/function checkMarkerInSeries(seriesOpts,markerType){if(!seriesOpts){return false;}var seriesOptArr=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(seriesOpts)?seriesOpts:[seriesOpts];for(var idx=0;idx<seriesOptArr.length;idx++){if(seriesOptArr[idx]&&seriesOptArr[idx][markerType]){return true;}}return false;}

/***/ }),

/***/ 65991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CS": () => (/* binding */ createMarkerDimValueGetter),
/* harmony export */   "Nn": () => (/* binding */ numCalculate),
/* harmony export */   "Z3": () => (/* binding */ dataTransform),
/* harmony export */   "mQ": () => (/* binding */ dataFilter),
/* harmony export */   "r": () => (/* binding */ getAxisInfo)
/* harmony export */ });
/* unused harmony export zoneFilter */
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84646);
/* harmony import */ var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29209);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57697);
/* harmony import */ var _data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85168);
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
*/function hasXOrY(item){return!(isNaN(parseFloat(item.x))&&isNaN(parseFloat(item.y)));}function hasXAndY(item){return!isNaN(parseFloat(item.x))&&!isNaN(parseFloat(item.y));}function markerTypeCalculatorWithExtent(markerType,data,otherDataDim,targetDataDim,otherCoordIndex,targetCoordIndex){var coordArr=[];var stacked=(0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .isDimensionStacked */ .M)(data,targetDataDim/*, otherDataDim*/);var calcDataDim=stacked?data.getCalculationInfo('stackResultDimension'):targetDataDim;var value=numCalculate(data,calcDataDim,markerType);var dataIndex=data.indicesOfNearest(calcDataDim,value)[0];coordArr[otherCoordIndex]=data.get(otherDataDim,dataIndex);coordArr[targetCoordIndex]=data.get(calcDataDim,dataIndex);var coordArrValue=data.get(targetDataDim,dataIndex);// Make it simple, do not visit all stacked value to count precision.
var precision=_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrecision */ .p8(data.get(targetDataDim,dataIndex));precision=Math.min(precision,20);if(precision>=0){coordArr[targetCoordIndex]=+coordArr[targetCoordIndex].toFixed(precision);}return[coordArr,coordArrValue];}// TODO Specified percent
var markerTypeCalculator={min:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .curry */ .WA)(markerTypeCalculatorWithExtent,'min'),max:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .curry */ .WA)(markerTypeCalculatorWithExtent,'max'),average:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .curry */ .WA)(markerTypeCalculatorWithExtent,'average'),median:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .curry */ .WA)(markerTypeCalculatorWithExtent,'median')};/**
 * Transform markPoint data item to format used in List by do the following
 * 1. Calculate statistic like `max`, `min`, `average`
 * 2. Convert `item.xAxis`, `item.yAxis` to `item.coord` array
 */function dataTransform(seriesModel,item){var data=seriesModel.getData();var coordSys=seriesModel.coordinateSystem;// 1. If not specify the position with pixel directly
// 2. If `coord` is not a data array. Which uses `xAxis`,
// `yAxis` to specify the coord on each dimension
// parseFloat first because item.x and item.y can be percent string like '20%'
if(item&&!hasXAndY(item)&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArray */ .kJ)(item.coord)&&coordSys){var dims=coordSys.dimensions;var axisInfo=getAxisInfo(item,data,coordSys,seriesModel);// Clone the option
// Transform the properties xAxis, yAxis, radiusAxis, angleAxis, geoCoord to value
item=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .d9)(item);if(item.type&&markerTypeCalculator[item.type]&&axisInfo.baseAxis&&axisInfo.valueAxis){var otherCoordIndex=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .indexOf */ .cq)(dims,axisInfo.baseAxis.dim);var targetCoordIndex=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .indexOf */ .cq)(dims,axisInfo.valueAxis.dim);var coordInfo=markerTypeCalculator[item.type](data,axisInfo.baseDataDim,axisInfo.valueDataDim,otherCoordIndex,targetCoordIndex);item.coord=coordInfo[0];// Force to use the value of calculated value.
// let item use the value without stack.
item.value=coordInfo[1];}else{// FIXME Only has one of xAxis and yAxis.
var coord=[item.xAxis!=null?item.xAxis:item.radiusAxis,item.yAxis!=null?item.yAxis:item.angleAxis];// Each coord support max, min, average
for(var i=0;i<2;i++){if(markerTypeCalculator[coord[i]]){coord[i]=numCalculate(data,data.mapDimension(dims[i]),coord[i]);}}item.coord=coord;}}return item;}function getAxisInfo(item,data,coordSys,seriesModel){var ret={};if(item.valueIndex!=null||item.valueDim!=null){ret.valueDataDim=item.valueIndex!=null?data.getDimension(item.valueIndex):item.valueDim;ret.valueAxis=coordSys.getAxis(dataDimToCoordDim(seriesModel,ret.valueDataDim));ret.baseAxis=coordSys.getOtherAxis(ret.valueAxis);ret.baseDataDim=data.mapDimension(ret.baseAxis.dim);}else{ret.baseAxis=seriesModel.getBaseAxis();ret.valueAxis=coordSys.getOtherAxis(ret.baseAxis);ret.baseDataDim=data.mapDimension(ret.baseAxis.dim);ret.valueDataDim=data.mapDimension(ret.valueAxis.dim);}return ret;}function dataDimToCoordDim(seriesModel,dataDim){var dimItem=seriesModel.getData().getDimensionInfo(dataDim);return dimItem&&dimItem.coordDim;}/**
 * Filter data which is out of coordinateSystem range
 * [dataFilter description]
 */function dataFilter(// Currently only polar and cartesian has containData.
coordSys,item){// Alwalys return true if there is no coordSys
return coordSys&&coordSys.containData&&item.coord&&!hasXOrY(item)?coordSys.containData(item.coord):true;}function zoneFilter(// Currently only polar and cartesian has containData.
coordSys,item1,item2){// Alwalys return true if there is no coordSys
return coordSys&&coordSys.containZone&&item1.coord&&item2.coord&&!hasXOrY(item1)&&!hasXOrY(item2)?coordSys.containZone(item1.coord,item2.coord):true;}function createMarkerDimValueGetter(inCoordSys,dims){return inCoordSys?function(item,dimName,dataIndex,dimIndex){var rawVal=dimIndex<2// x, y, radius, angle
?item.coord&&item.coord[dimIndex]:item.value;return (0,_data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_3__/* .parseDataValue */ .yQ)(rawVal,dims[dimIndex]);}:function(item,dimName,dataIndex,dimIndex){return (0,_data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_3__/* .parseDataValue */ .yQ)(item.value,dims[dimIndex]);};}function numCalculate(data,valueDataDim,type){if(type==='average'){var sum_1=0;var count_1=0;data.each(valueDataDim,function(val,idx){if(!isNaN(val)){sum_1+=val;count_1++;}});return sum_1/count_1;}else if(type==='median'){return data.getMedian(valueDataDim);}else{// max & min
return data.getDataExtent(valueDataDim)[type==='max'?1:0];}}

/***/ }),

/***/ 27992:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(19568);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(8636);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(15022);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(74874);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(87662);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/title/install.js
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
*/var TitleModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(TitleModel,_super);function TitleModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=TitleModel.type;_this.layoutMode={type:'box',ignoreSize:true};return _this;}TitleModel.type='title';TitleModel.defaultOption={// zlevel: 0,
z:6,show:true,text:'',target:'blank',subtext:'',subtarget:'blank',left:0,top:0,backgroundColor:'rgba(0,0,0,0)',borderColor:'#ccc',borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:'bold',color:'#464646'},subtextStyle:{fontSize:12,color:'#6E7079'}};return TitleModel;}(Component/* default */.Z);// View
var TitleView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(TitleView,_super);function TitleView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=TitleView.type;return _this;}TitleView.prototype.render=function(titleModel,ecModel,api){this.group.removeAll();if(!titleModel.get('show')){return;}var group=this.group;var textStyleModel=titleModel.getModel('textStyle');var subtextStyleModel=titleModel.getModel('subtextStyle');var textAlign=titleModel.get('textAlign');var textVerticalAlign=util/* retrieve2 */.pD(titleModel.get('textBaseline'),titleModel.get('textVerticalAlign'));var textEl=new Text/* default */.ZP({style:(0,labelStyle/* createTextStyle */.Lr)(textStyleModel,{text:titleModel.get('text'),fill:textStyleModel.getTextColor()},{disableBox:true}),z2:10});var textRect=textEl.getBoundingRect();var subText=titleModel.get('subtext');var subTextEl=new Text/* default */.ZP({style:(0,labelStyle/* createTextStyle */.Lr)(subtextStyleModel,{text:subText,fill:subtextStyleModel.getTextColor(),y:textRect.height+titleModel.get('itemGap'),verticalAlign:'top'},{disableBox:true}),z2:10});var link=titleModel.get('link');var sublink=titleModel.get('sublink');var triggerEvent=titleModel.get('triggerEvent',true);textEl.silent=!link&&!triggerEvent;subTextEl.silent=!sublink&&!triggerEvent;if(link){textEl.on('click',function(){(0,format/* windowOpen */.MI)(link,'_'+titleModel.get('target'));});}if(sublink){subTextEl.on('click',function(){(0,format/* windowOpen */.MI)(sublink,'_'+titleModel.get('subtarget'));});}(0,innerStore/* getECData */.A)(textEl).eventData=(0,innerStore/* getECData */.A)(subTextEl).eventData=triggerEvent?{componentType:'title',componentIndex:titleModel.componentIndex}:null;group.add(textEl);subText&&group.add(subTextEl);// If no subText, but add subTextEl, there will be an empty line.
var groupRect=group.getBoundingRect();var layoutOption=titleModel.getBoxLayoutParams();layoutOption.width=groupRect.width;layoutOption.height=groupRect.height;var layoutRect=(0,layout/* getLayoutRect */.ME)(layoutOption,{width:api.getWidth(),height:api.getHeight()},titleModel.get('padding'));// Adjust text align based on position
if(!textAlign){// Align left if title is on the left. center and right is same
textAlign=titleModel.get('left')||titleModel.get('right');// @ts-ignore
if(textAlign==='middle'){textAlign='center';}// Adjust layout by text align
if(textAlign==='right'){layoutRect.x+=layoutRect.width;}else if(textAlign==='center'){layoutRect.x+=layoutRect.width/2;}}if(!textVerticalAlign){textVerticalAlign=titleModel.get('top')||titleModel.get('bottom');// @ts-ignore
if(textVerticalAlign==='center'){textVerticalAlign='middle';}if(textVerticalAlign==='bottom'){layoutRect.y+=layoutRect.height;}else if(textVerticalAlign==='middle'){layoutRect.y+=layoutRect.height/2;}textVerticalAlign=textVerticalAlign||'top';}group.x=layoutRect.x;group.y=layoutRect.y;group.markRedraw();var alignStyle={align:textAlign,verticalAlign:textVerticalAlign};textEl.setStyle(alignStyle);subTextEl.setStyle(alignStyle);// Render background
// Get groupRect again because textAlign has been changed
groupRect=group.getBoundingRect();var padding=layoutRect.margin;var style=titleModel.getItemStyle(['color','opacity']);style.fill=titleModel.get('backgroundColor');var rect=new Rect/* default */.Z({shape:{x:groupRect.x-padding[3],y:groupRect.y-padding[0],width:groupRect.width+padding[1]+padding[3],height:groupRect.height+padding[0]+padding[2],r:titleModel.get('borderRadius')},style:style,subPixelOptimize:true,silent:true});group.add(rect);};TitleView.type='title';return TitleView;}(view_Component/* default */.Z);function install(registers){registers.registerComponentModel(TitleModel);registers.registerComponentView(TitleView);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/title.js
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

/***/ 57364:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/install.js + 5 modules
var install = __webpack_require__(69699);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(15022);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/TooltipModel.js
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
*/var TooltipModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(TooltipModel,_super);function TooltipModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=TooltipModel.type;return _this;}TooltipModel.type='tooltip';TooltipModel.dependencies=['axisPointer'];TooltipModel.defaultOption={// zlevel: 0,
z:60,show:true,// tooltip main content
showContent:true,// 'trigger' only works on coordinate system.
// 'item' | 'axis' | 'none'
trigger:'item',// 'click' | 'mousemove' | 'none'
triggerOn:'mousemove|click',alwaysShowContent:false,displayMode:'single',renderMode:'auto',// whether restraint content inside viewRect.
// If renderMode: 'richText', default true.
// If renderMode: 'html', defaut false (for backward compat).
confine:null,showDelay:0,hideDelay:100,// Animation transition time, unit is second
transitionDuration:0.4,enterable:false,backgroundColor:'#fff',// box shadow
shadowBlur:10,shadowColor:'rgba(0, 0, 0, .2)',shadowOffsetX:1,shadowOffsetY:2,// tooltip border radius, unit is px, default is 4
borderRadius:4,// tooltip border width, unit is px, default is 0 (no border)
borderWidth:1,// Tooltip inside padding, default is 5 for all direction
// Array is allowed to set up, right, bottom, left, same with css
// The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
padding:null,// Extra css text
extraCssText:'',// axis indicator, trigger by axis
axisPointer:{// default is line
// legal values: 'line' | 'shadow' | 'cross'
type:'line',// Valid when type is line, appoint tooltip line locate on which line. Optional
// legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
// default is 'auto', chose the axis which type is category.
// for multiply y axis, cartesian coord chose x axis, polar chose angle axis
axis:'auto',animation:'auto',animationDurationUpdate:200,animationEasingUpdate:'exponentialOut',crossStyle:{color:'#999',width:1,type:'dashed',// TODO formatter
textStyle:{}}// lineStyle and shadowStyle should not be specified here,
// otherwise it will always override those styles on option.axisPointer.
},textStyle:{color:'#666',fontSize:14}};return TooltipModel;}(Component/* default */.Z);/* harmony default export */ const tooltip_TooltipModel = (TooltipModel);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(9959);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(89071);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/dom.js + 1 modules
var dom = __webpack_require__(66319);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(87662);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/helper.js
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
*//* global document */function shouldTooltipConfine(tooltipModel){var confineOption=tooltipModel.get('confine');return confineOption!=null?!!confineOption// In richText mode, the outside part can not be visible.
:tooltipModel.get('renderMode')==='richText';}function testStyle(styleProps){if(!env/* default.domSupported */.Z.domSupported){return;}var style=document.documentElement.style;for(var i=0,len=styleProps.length;i<len;i++){if(styleProps[i]in style){return styleProps[i];}}}var TRANSFORM_VENDOR=testStyle(['transform','webkitTransform','OTransform','MozTransform','msTransform']);var TRANSITION_VENDOR=testStyle(['webkitTransition','transition','OTransition','MozTransition','msTransition']);function toCSSVendorPrefix(styleVendor,styleProp){if(!styleVendor){return styleProp;}styleProp=(0,format/* toCamelCase */.zW)(styleProp,true);var idx=styleVendor.indexOf(styleProp);styleVendor=idx===-1?styleProp:"-"+styleVendor.slice(0,idx)+"-"+styleProp;return styleVendor.toLowerCase();}function getComputedStyle(el,style){var stl=el.currentStyle||document.defaultView&&document.defaultView.getComputedStyle(el);return stl?style?stl[style]:stl:null;}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(99547);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js
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
*//* global document, window */var CSS_TRANSITION_VENDOR=toCSSVendorPrefix(TRANSITION_VENDOR,'transition');var CSS_TRANSFORM_VENDOR=toCSSVendorPrefix(TRANSFORM_VENDOR,'transform');// eslint-disable-next-line
var gCssText="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+(env/* default.transform3dSupported */.Z.transform3dSupported?'will-change:transform;':'');function mirrorPos(pos){pos=pos==='left'?'right':pos==='right'?'left':pos==='top'?'bottom':'top';return pos;}function assembleArrow(tooltipModel,borderColor,arrowPosition){if(!(0,util/* isString */.HD)(arrowPosition)||arrowPosition==='inside'){return'';}var backgroundColor=tooltipModel.get('backgroundColor');var borderWidth=tooltipModel.get('borderWidth');borderColor=(0,format/* convertToColorString */.Lz)(borderColor);var arrowPos=mirrorPos(arrowPosition);var arrowSize=Math.max(Math.round(borderWidth)*1.5,6);var positionStyle='';var transformStyle=CSS_TRANSFORM_VENDOR+':';var rotateDeg;if((0,util/* indexOf */.cq)(['left','right'],arrowPos)>-1){positionStyle+='top:50%';transformStyle+="translateY(-50%) rotate("+(rotateDeg=arrowPos==='left'?-225:-45)+"deg)";}else{positionStyle+='left:50%';transformStyle+="translateX(-50%) rotate("+(rotateDeg=arrowPos==='top'?225:45)+"deg)";}var rotateRadian=rotateDeg*Math.PI/180;var arrowWH=arrowSize+borderWidth;var rotatedWH=arrowWH*Math.abs(Math.cos(rotateRadian))+arrowWH*Math.abs(Math.sin(rotateRadian));var arrowOffset=Math.round(((rotatedWH-Math.SQRT2*borderWidth)/2+Math.SQRT2*borderWidth-(rotatedWH-arrowWH)/2)*100)/100;positionStyle+=";"+arrowPos+":-"+arrowOffset+"px";var borderStyle=borderColor+" solid "+borderWidth+"px;";var styleCss=["position:absolute;width:"+arrowSize+"px;height:"+arrowSize+"px;",positionStyle+";"+transformStyle+";","border-bottom:"+borderStyle,"border-right:"+borderStyle,"background-color:"+backgroundColor+";"];return"<div style=\""+styleCss.join('')+"\"></div>";}function assembleTransition(duration,onlyFade){var transitionCurve='cubic-bezier(0.23,1,0.32,1)';var transitionOption=" "+duration/2+"s "+transitionCurve;var transitionText="opacity"+transitionOption+",visibility"+transitionOption;if(!onlyFade){transitionOption=" "+duration+"s "+transitionCurve;transitionText+=env/* default.transformSupported */.Z.transformSupported?","+CSS_TRANSFORM_VENDOR+transitionOption:",left"+transitionOption+",top"+transitionOption;}return CSS_TRANSITION_VENDOR+':'+transitionText;}function assembleTransform(x,y,toString){// If using float on style, the final width of the dom might
// keep changing slightly while mouse move. So `toFixed(0)` them.
var x0=x.toFixed(0)+'px';var y0=y.toFixed(0)+'px';// not support transform, use `left` and `top` instead.
if(!env/* default.transformSupported */.Z.transformSupported){return toString?"top:"+y0+";left:"+x0+";":[['top',y0],['left',x0]];}// support transform
var is3d=env/* default.transform3dSupported */.Z.transform3dSupported;var translate="translate"+(is3d?'3d':'')+"("+x0+","+y0+(is3d?',0':'')+")";return toString?'top:0;left:0;'+CSS_TRANSFORM_VENDOR+':'+translate+';':[['top',0],['left',0],[TRANSFORM_VENDOR,translate]];}/**
 * @param {Object} textStyle
 * @return {string}
 * @inner
 */function assembleFont(textStyleModel){var cssText=[];var fontSize=textStyleModel.get('fontSize');var color=textStyleModel.getTextColor();color&&cssText.push('color:'+color);cssText.push('font:'+textStyleModel.getFont());fontSize// @ts-ignore, leave it to the tooltip refactor.
&&cssText.push('line-height:'+Math.round(fontSize*3/2)+'px');var shadowColor=textStyleModel.get('textShadowColor');var shadowBlur=textStyleModel.get('textShadowBlur')||0;var shadowOffsetX=textStyleModel.get('textShadowOffsetX')||0;var shadowOffsetY=textStyleModel.get('textShadowOffsetY')||0;shadowColor&&shadowBlur&&cssText.push('text-shadow:'+shadowOffsetX+'px '+shadowOffsetY+'px '+shadowBlur+'px '+shadowColor);(0,util/* each */.S6)(['decoration','align'],function(name){var val=textStyleModel.get(name);val&&cssText.push('text-'+name+':'+val);});return cssText.join(';');}function assembleCssText(tooltipModel,enableTransition,onlyFade){var cssText=[];var transitionDuration=tooltipModel.get('transitionDuration');var backgroundColor=tooltipModel.get('backgroundColor');var shadowBlur=tooltipModel.get('shadowBlur');var shadowColor=tooltipModel.get('shadowColor');var shadowOffsetX=tooltipModel.get('shadowOffsetX');var shadowOffsetY=tooltipModel.get('shadowOffsetY');var textStyleModel=tooltipModel.getModel('textStyle');var padding=(0,tooltipMarkup/* getPaddingFromTooltipModel */.d_)(tooltipModel,'html');var boxShadow=shadowOffsetX+"px "+shadowOffsetY+"px "+shadowBlur+"px "+shadowColor;cssText.push('box-shadow:'+boxShadow);// Animation transition. Do not animate when transitionDuration is 0.
enableTransition&&transitionDuration&&cssText.push(assembleTransition(transitionDuration,onlyFade));if(backgroundColor){cssText.push('background-color:'+backgroundColor);}// Border style
(0,util/* each */.S6)(['width','color','radius'],function(name){var borderName='border-'+name;var camelCase=(0,format/* toCamelCase */.zW)(borderName);var val=tooltipModel.get(camelCase);val!=null&&cssText.push(borderName+':'+val+(name==='color'?'':'px'));});// Text style
cssText.push(assembleFont(textStyleModel));// Padding
if(padding!=null){cssText.push('padding:'+(0,format/* normalizeCssArray */.MY)(padding).join('px ')+'px');}return cssText.join(';')+';';}// If not able to make, do not modify the input `out`.
function makeStyleCoord(out,zr,appendToBody,zrX,zrY){var zrPainter=zr&&zr.painter;if(appendToBody){var zrViewportRoot=zrPainter&&zrPainter.getViewportRoot();if(zrViewportRoot){// Some APPs might use scale on body, so we support CSS transform here.
(0,dom/* transformLocalCoord */.YB)(out,zrViewportRoot,document.body,zrX,zrY);}}else{out[0]=zrX;out[1]=zrY;// xy should be based on canvas root. But tooltipContent is
// the sibling of canvas root. So padding of ec container
// should be considered here.
var viewportRootOffset=zrPainter&&zrPainter.getViewportRootOffset();if(viewportRootOffset){out[0]+=viewportRootOffset.offsetLeft;out[1]+=viewportRootOffset.offsetTop;}}out[2]=out[0]/zr.getWidth();out[3]=out[1]/zr.getHeight();}var TooltipHTMLContent=/** @class */function(){function TooltipHTMLContent(container,api,opt){this._show=false;this._styleCoord=[0,0,0,0];this._enterable=true;this._firstShow=true;this._longHide=true;if(env/* default.wxa */.Z.wxa){return null;}var el=document.createElement('div');// TODO: TYPE
el.domBelongToZr=true;this.el=el;var zr=this._zr=api.getZr();var appendToBody=this._appendToBody=opt&&opt.appendToBody;makeStyleCoord(this._styleCoord,zr,appendToBody,api.getWidth()/2,api.getHeight()/2);if(appendToBody){document.body.appendChild(el);}else{container.appendChild(el);}this._container=container;// FIXME
// Is it needed to trigger zr event manually if
// the browser do not support `pointer-events: none`.
var self=this;el.onmouseenter=function(){// clear the timeout in hideLater and keep showing tooltip
if(self._enterable){clearTimeout(self._hideTimeout);self._show=true;}self._inContent=true;};el.onmousemove=function(e){e=e||window.event;if(!self._enterable){// `pointer-events: none` is set to tooltip content div
// if `enterable` is set as `false`, and `el.onmousemove`
// can not be triggered. But in browser that do not
// support `pointer-events`, we need to do this:
// Try trigger zrender event to avoid mouse
// in and out shape too frequently
var handler=zr.handler;var zrViewportRoot=zr.painter.getViewportRoot();(0,core_event/* normalizeEvent */.OD)(zrViewportRoot,e,true);handler.dispatch('mousemove',e);}};el.onmouseleave=function(){// set `_inContent` to `false` before `hideLater`
self._inContent=false;if(self._enterable){if(self._show){self.hideLater(self._hideDelay);}}};}/**
   * Update when tooltip is rendered
   */TooltipHTMLContent.prototype.update=function(tooltipModel){// FIXME
// Move this logic to ec main?
var container=this._container;var position=getComputedStyle(container,'position');var domStyle=container.style;if(domStyle.position!=='absolute'&&position!=='absolute'){domStyle.position='relative';}// move tooltip if chart resized
var alwaysShowContent=tooltipModel.get('alwaysShowContent');alwaysShowContent&&this._moveIfResized();// update className
this.el.className=tooltipModel.get('className')||'';// Hide the tooltip
// PENDING
// this.hide();
};TooltipHTMLContent.prototype.show=function(tooltipModel,nearPointColor){clearTimeout(this._hideTimeout);clearTimeout(this._longHideTimeout);var el=this.el;var style=el.style;var styleCoord=this._styleCoord;if(!el.innerHTML){style.display='none';}else{style.cssText=gCssText+assembleCssText(tooltipModel,!this._firstShow,this._longHide)// initial transform
+assembleTransform(styleCoord[0],styleCoord[1],true)+("border-color:"+(0,format/* convertToColorString */.Lz)(nearPointColor)+";")+(tooltipModel.get('extraCssText')||'')// If mouse occasionally move over the tooltip, a mouseout event will be
// triggered by canvas, and cause some unexpectable result like dragging
// stop, "unfocusAdjacency". Here `pointer-events: none` is used to solve
// it. Although it is not supported by IE8~IE10, fortunately it is a rare
// scenario.
+(";pointer-events:"+(this._enterable?'auto':'none'));}this._show=true;this._firstShow=false;this._longHide=false;};TooltipHTMLContent.prototype.setContent=function(content,markers,tooltipModel,borderColor,arrowPosition){var el=this.el;if(content==null){el.innerHTML='';return;}var arrow='';if((0,util/* isString */.HD)(arrowPosition)&&tooltipModel.get('trigger')==='item'&&!shouldTooltipConfine(tooltipModel)){arrow=assembleArrow(tooltipModel,borderColor,arrowPosition);}if((0,util/* isString */.HD)(content)){el.innerHTML=content+arrow;}else if(content){// Clear previous
el.innerHTML='';if(!(0,util/* isArray */.kJ)(content)){content=[content];}for(var i=0;i<content.length;i++){if((0,util/* isDom */.Mh)(content[i])&&content[i].parentNode!==el){el.appendChild(content[i]);}}// no arrow if empty
if(arrow&&el.childNodes.length){// no need to create a new parent element, but it's not supported by IE 10 and older.
// const arrowEl = document.createRange().createContextualFragment(arrow);
var arrowEl=document.createElement('div');arrowEl.innerHTML=arrow;el.appendChild(arrowEl);}}};TooltipHTMLContent.prototype.setEnterable=function(enterable){this._enterable=enterable;};TooltipHTMLContent.prototype.getSize=function(){var el=this.el;return[el.offsetWidth,el.offsetHeight];};TooltipHTMLContent.prototype.moveTo=function(zrX,zrY){var styleCoord=this._styleCoord;makeStyleCoord(styleCoord,this._zr,this._appendToBody,zrX,zrY);if(styleCoord[0]!=null&&styleCoord[1]!=null){var style_1=this.el.style;var transforms=assembleTransform(styleCoord[0],styleCoord[1]);(0,util/* each */.S6)(transforms,function(transform){style_1[transform[0]]=transform[1];});}};/**
   * when `alwaysShowContent` is true,
   * move the tooltip after chart resized
   */TooltipHTMLContent.prototype._moveIfResized=function(){// The ratio of left to width
var ratioX=this._styleCoord[2];// The ratio of top to height
var ratioY=this._styleCoord[3];this.moveTo(ratioX*this._zr.getWidth(),ratioY*this._zr.getHeight());};TooltipHTMLContent.prototype.hide=function(){var _this=this;var style=this.el.style;style.visibility='hidden';style.opacity='0';env/* default.transform3dSupported */.Z.transform3dSupported&&(style.willChange='');this._show=false;this._longHideTimeout=setTimeout(function(){return _this._longHide=true;},500);};TooltipHTMLContent.prototype.hideLater=function(time){if(this._show&&!(this._inContent&&this._enterable)){if(time){this._hideDelay=time;// Set show false to avoid invoke hideLater multiple times
this._show=false;this._hideTimeout=setTimeout((0,util/* bind */.ak)(this.hide,this),time);}else{this.hide();}}};TooltipHTMLContent.prototype.isShow=function(){return this._show;};TooltipHTMLContent.prototype.dispose=function(){this.el.parentNode.removeChild(this.el);};return TooltipHTMLContent;}();/* harmony default export */ const tooltip_TooltipHTMLContent = (TooltipHTMLContent);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(42023);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/TooltipRichContent.js
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
*/var TooltipRichContent=/** @class */function(){function TooltipRichContent(api){this._show=false;this._styleCoord=[0,0,0,0];this._enterable=true;this._zr=api.getZr();TooltipRichContent_makeStyleCoord(this._styleCoord,this._zr,api.getWidth()/2,api.getHeight()/2);}/**
   * Update when tooltip is rendered
   */TooltipRichContent.prototype.update=function(tooltipModel){var alwaysShowContent=tooltipModel.get('alwaysShowContent');alwaysShowContent&&this._moveIfResized();};TooltipRichContent.prototype.show=function(){if(this._hideTimeout){clearTimeout(this._hideTimeout);}this.el.show();this._show=true;};/**
   * Set tooltip content
   */TooltipRichContent.prototype.setContent=function(content,markupStyleCreator,tooltipModel,borderColor,arrowPosition){var _this=this;if(util/* isObject */.Kn(content)){(0,log/* throwError */._y)( false?0:'');}if(this.el){this._zr.remove(this.el);}var textStyleModel=tooltipModel.getModel('textStyle');this.el=new Text/* default */.ZP({style:{rich:markupStyleCreator.richTextStyles,text:content,lineHeight:22,borderWidth:1,borderColor:borderColor,textShadowColor:textStyleModel.get('textShadowColor'),fill:tooltipModel.get(['textStyle','color']),padding:(0,tooltipMarkup/* getPaddingFromTooltipModel */.d_)(tooltipModel,'richText'),verticalAlign:'top',align:'left'},z:tooltipModel.get('z')});util/* each */.S6(['backgroundColor','borderRadius','shadowColor','shadowBlur','shadowOffsetX','shadowOffsetY'],function(propName){_this.el.style[propName]=tooltipModel.get(propName);});util/* each */.S6(['textShadowBlur','textShadowOffsetX','textShadowOffsetY'],function(propName){_this.el.style[propName]=textStyleModel.get(propName)||0;});this._zr.add(this.el);var self=this;this.el.on('mouseover',function(){// clear the timeout in hideLater and keep showing tooltip
if(self._enterable){clearTimeout(self._hideTimeout);self._show=true;}self._inContent=true;});this.el.on('mouseout',function(){if(self._enterable){if(self._show){self.hideLater(self._hideDelay);}}self._inContent=false;});};TooltipRichContent.prototype.setEnterable=function(enterable){this._enterable=enterable;};TooltipRichContent.prototype.getSize=function(){var el=this.el;var bounding=this.el.getBoundingRect();// bounding rect does not include shadow. For renderMode richText,
// if overflow, it will be cut. So calculate them accurately.
var shadowOuterSize=calcShadowOuterSize(el.style);return[bounding.width+shadowOuterSize.left+shadowOuterSize.right,bounding.height+shadowOuterSize.top+shadowOuterSize.bottom];};TooltipRichContent.prototype.moveTo=function(x,y){var el=this.el;if(el){var styleCoord=this._styleCoord;TooltipRichContent_makeStyleCoord(styleCoord,this._zr,x,y);x=styleCoord[0];y=styleCoord[1];var style=el.style;var borderWidth=mathMaxWith0(style.borderWidth||0);var shadowOuterSize=calcShadowOuterSize(style);// rich text x, y do not include border.
el.x=x+borderWidth+shadowOuterSize.left;el.y=y+borderWidth+shadowOuterSize.top;el.markRedraw();}};/**
   * when `alwaysShowContent` is true,
   * move the tooltip after chart resized
   */TooltipRichContent.prototype._moveIfResized=function(){// The ratio of left to width
var ratioX=this._styleCoord[2];// The ratio of top to height
var ratioY=this._styleCoord[3];this.moveTo(ratioX*this._zr.getWidth(),ratioY*this._zr.getHeight());};TooltipRichContent.prototype.hide=function(){if(this.el){this.el.hide();}this._show=false;};TooltipRichContent.prototype.hideLater=function(time){if(this._show&&!(this._inContent&&this._enterable)){if(time){this._hideDelay=time;// Set show false to avoid invoke hideLater multiple times
this._show=false;this._hideTimeout=setTimeout(util/* bind */.ak(this.hide,this),time);}else{this.hide();}}};TooltipRichContent.prototype.isShow=function(){return this._show;};TooltipRichContent.prototype.dispose=function(){this._zr.remove(this.el);};return TooltipRichContent;}();function mathMaxWith0(val){return Math.max(0,val);}function calcShadowOuterSize(style){var shadowBlur=mathMaxWith0(style.shadowBlur||0);var shadowOffsetX=mathMaxWith0(style.shadowOffsetX||0);var shadowOffsetY=mathMaxWith0(style.shadowOffsetY||0);return{left:mathMaxWith0(shadowBlur-shadowOffsetX),right:mathMaxWith0(shadowBlur+shadowOffsetX),top:mathMaxWith0(shadowBlur-shadowOffsetY),bottom:mathMaxWith0(shadowBlur+shadowOffsetY)};}function TooltipRichContent_makeStyleCoord(out,zr,zrX,zrY){out[0]=zrX;out[1]=zrY;out[2]=out[0]/zr.getWidth();out[3]=out[1]/zr.getHeight();}/* harmony default export */ const tooltip_TooltipRichContent = (TooltipRichContent);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(19568);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js
var findPointFromSeries = __webpack_require__(57686);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(8636);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(25118);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/globalListener.js
var globalListener = __webpack_require__(74226);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/coord/axisHelper.js + 1 modules
var axisHelper = __webpack_require__(48692);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/axisPointer/viewHelper.js
var viewHelper = __webpack_require__(46806);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(74874);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/time.js
var time = __webpack_require__(74134);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/mixin/dataFormat.js
var dataFormat = __webpack_require__(67955);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(73171);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(57024);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/TooltipView.js
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
 *//*
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
*/var proxyRect=new Rect/* default */.Z({shape:{x:-1,y:-1,width:2,height:2}});var TooltipView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(TooltipView,_super);function TooltipView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=TooltipView.type;return _this;}TooltipView.prototype.init=function(ecModel,api){if(env/* default.node */.Z.node||!api.getDom()){return;}var tooltipModel=ecModel.getComponent('tooltip');var renderMode=this._renderMode=(0,util_model/* getTooltipRenderMode */.U9)(tooltipModel.get('renderMode'));this._tooltipContent=renderMode==='richText'?new tooltip_TooltipRichContent(api):new tooltip_TooltipHTMLContent(api.getDom(),api,{appendToBody:tooltipModel.get('appendToBody',true)});};TooltipView.prototype.render=function(tooltipModel,ecModel,api){if(env/* default.node */.Z.node||!api.getDom()){return;}// Reset
this.group.removeAll();this._tooltipModel=tooltipModel;this._ecModel=ecModel;this._api=api;/**
     * @private
     * @type {boolean}
     */this._alwaysShowContent=tooltipModel.get('alwaysShowContent');var tooltipContent=this._tooltipContent;tooltipContent.update(tooltipModel);tooltipContent.setEnterable(tooltipModel.get('enterable'));this._initGlobalListener();this._keepShow();// PENDING
// `mousemove` event will be triggered very frequently when the mouse moves fast,
// which causes that the `updatePosition` function was also called frequently.
// In Chrome with devtools open and Firefox, tooltip looks laggy and shakes. See #14695 #16101
// To avoid frequent triggering,
// consider throttling it in 50ms when transition is enabled
if(this._renderMode!=='richText'&&tooltipModel.get('transitionDuration')){(0,throttle/* createOrUpdate */.T9)(this,'_updatePosition',50,'fixRate');}else{(0,throttle/* clear */.ZH)(this,'_updatePosition');}};TooltipView.prototype._initGlobalListener=function(){var tooltipModel=this._tooltipModel;var triggerOn=tooltipModel.get('triggerOn');globalListener/* register */.z('itemTooltip',this._api,(0,util/* bind */.ak)(function(currTrigger,e,dispatchAction){// If 'none', it is not controlled by mouse totally.
if(triggerOn!=='none'){if(triggerOn.indexOf(currTrigger)>=0){this._tryShow(e,dispatchAction);}else if(currTrigger==='leave'){this._hide(dispatchAction);}}},this));};TooltipView.prototype._keepShow=function(){var tooltipModel=this._tooltipModel;var ecModel=this._ecModel;var api=this._api;var triggerOn=tooltipModel.get('triggerOn');// Try to keep the tooltip show when refreshing
if(this._lastX!=null&&this._lastY!=null// When user is willing to control tooltip totally using API,
// self.manuallyShowTip({x, y}) might cause tooltip hide,
// which is not expected.
&&triggerOn!=='none'&&triggerOn!=='click'){var self_1=this;clearTimeout(this._refreshUpdateTimeout);this._refreshUpdateTimeout=setTimeout(function(){// Show tip next tick after other charts are rendered
// In case highlight action has wrong result
// FIXME
!api.isDisposed()&&self_1.manuallyShowTip(tooltipModel,ecModel,api,{x:self_1._lastX,y:self_1._lastY,dataByCoordSys:self_1._lastDataByCoordSys});});}};/**
   * Show tip manually by
   * dispatchAction({
   *     type: 'showTip',
   *     x: 10,
   *     y: 10
   * });
   * Or
   * dispatchAction({
   *      type: 'showTip',
   *      seriesIndex: 0,
   *      dataIndex or dataIndexInside or name
   * });
   *
   *  TODO Batch
   */TooltipView.prototype.manuallyShowTip=function(tooltipModel,ecModel,api,payload){if(payload.from===this.uid||env/* default.node */.Z.node||!api.getDom()){return;}var dispatchAction=makeDispatchAction(payload,api);// Reset ticket
this._ticket='';// When triggered from axisPointer.
var dataByCoordSys=payload.dataByCoordSys;var cmptRef=findComponentReference(payload,ecModel,api);if(cmptRef){var rect=cmptRef.el.getBoundingRect().clone();rect.applyTransform(cmptRef.el.transform);this._tryShow({offsetX:rect.x+rect.width/2,offsetY:rect.y+rect.height/2,target:cmptRef.el,position:payload.position,// When manully trigger, the mouse is not on the el, so we'd better to
// position tooltip on the bottom of the el and display arrow is possible.
positionDefault:'bottom'},dispatchAction);}else if(payload.tooltip&&payload.x!=null&&payload.y!=null){var el=proxyRect;el.x=payload.x;el.y=payload.y;el.update();(0,innerStore/* getECData */.A)(el).tooltipConfig={name:null,option:payload.tooltip};// Manually show tooltip while view is not using zrender elements.
this._tryShow({offsetX:payload.x,offsetY:payload.y,target:el},dispatchAction);}else if(dataByCoordSys){this._tryShow({offsetX:payload.x,offsetY:payload.y,position:payload.position,dataByCoordSys:dataByCoordSys,tooltipOption:payload.tooltipOption},dispatchAction);}else if(payload.seriesIndex!=null){if(this._manuallyAxisShowTip(tooltipModel,ecModel,api,payload)){return;}var pointInfo=(0,findPointFromSeries/* default */.Z)(payload,ecModel);var cx=pointInfo.point[0];var cy=pointInfo.point[1];if(cx!=null&&cy!=null){this._tryShow({offsetX:cx,offsetY:cy,target:pointInfo.el,position:payload.position,// When manully trigger, the mouse is not on the el, so we'd better to
// position tooltip on the bottom of the el and display arrow is possible.
positionDefault:'bottom'},dispatchAction);}}else if(payload.x!=null&&payload.y!=null){// FIXME
// should wrap dispatchAction like `axisPointer/globalListener` ?
api.dispatchAction({type:'updateAxisPointer',x:payload.x,y:payload.y});this._tryShow({offsetX:payload.x,offsetY:payload.y,position:payload.position,target:api.getZr().findHover(payload.x,payload.y).target},dispatchAction);}};TooltipView.prototype.manuallyHideTip=function(tooltipModel,ecModel,api,payload){var tooltipContent=this._tooltipContent;if(!this._alwaysShowContent&&this._tooltipModel){tooltipContent.hideLater(this._tooltipModel.get('hideDelay'));}this._lastX=this._lastY=this._lastDataByCoordSys=null;if(payload.from!==this.uid){this._hide(makeDispatchAction(payload,api));}};// Be compatible with previous design, that is, when tooltip.type is 'axis' and
// dispatchAction 'showTip' with seriesIndex and dataIndex will trigger axis pointer
// and tooltip.
TooltipView.prototype._manuallyAxisShowTip=function(tooltipModel,ecModel,api,payload){var seriesIndex=payload.seriesIndex;var dataIndex=payload.dataIndex;// @ts-ignore
var coordSysAxesInfo=ecModel.getComponent('axisPointer').coordSysAxesInfo;if(seriesIndex==null||dataIndex==null||coordSysAxesInfo==null){return;}var seriesModel=ecModel.getSeriesByIndex(seriesIndex);if(!seriesModel){return;}var data=seriesModel.getData();var tooltipCascadedModel=buildTooltipModel([data.getItemModel(dataIndex),seriesModel,(seriesModel.coordinateSystem||{}).model],this._tooltipModel);if(tooltipCascadedModel.get('trigger')!=='axis'){return;}api.dispatchAction({type:'updateAxisPointer',seriesIndex:seriesIndex,dataIndex:dataIndex,position:payload.position});return true;};TooltipView.prototype._tryShow=function(e,dispatchAction){var el=e.target;var tooltipModel=this._tooltipModel;if(!tooltipModel){return;}// Save mouse x, mouse y. So we can try to keep showing the tip if chart is refreshed
this._lastX=e.offsetX;this._lastY=e.offsetY;var dataByCoordSys=e.dataByCoordSys;if(dataByCoordSys&&dataByCoordSys.length){this._showAxisTooltip(dataByCoordSys,e);}else if(el){this._lastDataByCoordSys=null;var seriesDispatcher_1;var cmptDispatcher_1;(0,util_event/* findEventDispatcher */.o)(el,function(target){// Always show item tooltip if mouse is on the element with dataIndex
if((0,innerStore/* getECData */.A)(target).dataIndex!=null){seriesDispatcher_1=target;return true;}// Tooltip provided directly. Like legend.
if((0,innerStore/* getECData */.A)(target).tooltipConfig!=null){cmptDispatcher_1=target;return true;}},true);if(seriesDispatcher_1){this._showSeriesItemTooltip(e,seriesDispatcher_1,dispatchAction);}else if(cmptDispatcher_1){this._showComponentItemTooltip(e,cmptDispatcher_1,dispatchAction);}else{this._hide(dispatchAction);}}else{this._lastDataByCoordSys=null;this._hide(dispatchAction);}};TooltipView.prototype._showOrMove=function(tooltipModel,cb){// showDelay is used in this case: tooltip.enterable is set
// as true. User intent to move mouse into tooltip and click
// something. `showDelay` makes it easier to enter the content
// but tooltip do not move immediately.
var delay=tooltipModel.get('showDelay');cb=(0,util/* bind */.ak)(cb,this);clearTimeout(this._showTimout);delay>0?this._showTimout=setTimeout(cb,delay):cb();};TooltipView.prototype._showAxisTooltip=function(dataByCoordSys,e){var ecModel=this._ecModel;var globalTooltipModel=this._tooltipModel;var point=[e.offsetX,e.offsetY];var singleTooltipModel=buildTooltipModel([e.tooltipOption],globalTooltipModel);var renderMode=this._renderMode;var cbParamsList=[];var articleMarkup=(0,tooltipMarkup/* createTooltipMarkup */.TX)('section',{blocks:[],noHeader:true});// Only for legacy: `Serise['formatTooltip']` returns a string.
var markupTextArrLegacy=[];var markupStyleCreator=new tooltipMarkup/* TooltipMarkupStyleCreator */.iv();(0,util/* each */.S6)(dataByCoordSys,function(itemCoordSys){(0,util/* each */.S6)(itemCoordSys.dataByAxis,function(axisItem){var axisModel=ecModel.getComponent(axisItem.axisDim+'Axis',axisItem.axisIndex);var axisValue=axisItem.value;if(!axisModel||axisValue==null){return;}var axisValueLabel=viewHelper/* getValueLabel */.gk(axisValue,axisModel.axis,ecModel,axisItem.seriesDataIndices,axisItem.valueLabelOpt);var axisSectionMarkup=(0,tooltipMarkup/* createTooltipMarkup */.TX)('section',{header:axisValueLabel,noHeader:!(0,util/* trim */.fy)(axisValueLabel),sortBlocks:true,blocks:[]});articleMarkup.blocks.push(axisSectionMarkup);(0,util/* each */.S6)(axisItem.seriesDataIndices,function(idxItem){var series=ecModel.getSeriesByIndex(idxItem.seriesIndex);var dataIndex=idxItem.dataIndexInside;var cbParams=series.getDataParams(dataIndex);// Can't find data.
if(cbParams.dataIndex<0){return;}cbParams.axisDim=axisItem.axisDim;cbParams.axisIndex=axisItem.axisIndex;cbParams.axisType=axisItem.axisType;cbParams.axisId=axisItem.axisId;cbParams.axisValue=axisHelper/* getAxisRawValue */.DX(axisModel.axis,{value:axisValue});cbParams.axisValueLabel=axisValueLabel;// Pre-create marker style for makers. Users can assemble richText
// text in `formatter` callback and use those markers style.
cbParams.marker=markupStyleCreator.makeTooltipMarker('item',(0,format/* convertToColorString */.Lz)(cbParams.color),renderMode);var seriesTooltipResult=(0,dataFormat/* normalizeTooltipFormatResult */.f)(series.formatTooltip(dataIndex,true,null));var frag=seriesTooltipResult.frag;if(frag){var valueFormatter=buildTooltipModel([series],globalTooltipModel).get('valueFormatter');axisSectionMarkup.blocks.push(valueFormatter?(0,util/* extend */.l7)({valueFormatter:valueFormatter},frag):frag);}if(seriesTooltipResult.text){markupTextArrLegacy.push(seriesTooltipResult.text);}cbParamsList.push(cbParams);});});});// In most cases, the second axis is displays upper on the first one.
// So we reverse it to look better.
articleMarkup.blocks.reverse();markupTextArrLegacy.reverse();var positionExpr=e.position;var orderMode=singleTooltipModel.get('order');var builtMarkupText=(0,tooltipMarkup/* buildTooltipMarkup */.BY)(articleMarkup,markupStyleCreator,renderMode,orderMode,ecModel.get('useUTC'),singleTooltipModel.get('textStyle'));builtMarkupText&&markupTextArrLegacy.unshift(builtMarkupText);var blockBreak=renderMode==='richText'?'\n\n':'<br/>';var allMarkupText=markupTextArrLegacy.join(blockBreak);this._showOrMove(singleTooltipModel,function(){if(this._updateContentNotChangedOnAxis(dataByCoordSys,cbParamsList)){this._updatePosition(singleTooltipModel,positionExpr,point[0],point[1],this._tooltipContent,cbParamsList);}else{this._showTooltipContent(singleTooltipModel,allMarkupText,cbParamsList,Math.random()+'',point[0],point[1],positionExpr,null,markupStyleCreator);}});// Do not trigger events here, because this branch only be entered
// from dispatchAction.
};TooltipView.prototype._showSeriesItemTooltip=function(e,dispatcher,dispatchAction){var ecModel=this._ecModel;var ecData=(0,innerStore/* getECData */.A)(dispatcher);// Use dataModel in element if possible
// Used when mouseover on a element like markPoint or edge
// In which case, the data is not main data in series.
var seriesIndex=ecData.seriesIndex;var seriesModel=ecModel.getSeriesByIndex(seriesIndex);// For example, graph link.
var dataModel=ecData.dataModel||seriesModel;var dataIndex=ecData.dataIndex;var dataType=ecData.dataType;var data=dataModel.getData(dataType);var renderMode=this._renderMode;var positionDefault=e.positionDefault;var tooltipModel=buildTooltipModel([data.getItemModel(dataIndex),dataModel,seriesModel&&(seriesModel.coordinateSystem||{}).model],this._tooltipModel,positionDefault?{position:positionDefault}:null);var tooltipTrigger=tooltipModel.get('trigger');if(tooltipTrigger!=null&&tooltipTrigger!=='item'){return;}var params=dataModel.getDataParams(dataIndex,dataType);var markupStyleCreator=new tooltipMarkup/* TooltipMarkupStyleCreator */.iv();// Pre-create marker style for makers. Users can assemble richText
// text in `formatter` callback and use those markers style.
params.marker=markupStyleCreator.makeTooltipMarker('item',(0,format/* convertToColorString */.Lz)(params.color),renderMode);var seriesTooltipResult=(0,dataFormat/* normalizeTooltipFormatResult */.f)(dataModel.formatTooltip(dataIndex,false,dataType));var orderMode=tooltipModel.get('order');var valueFormatter=tooltipModel.get('valueFormatter');var frag=seriesTooltipResult.frag;var markupText=frag?(0,tooltipMarkup/* buildTooltipMarkup */.BY)(valueFormatter?(0,util/* extend */.l7)({valueFormatter:valueFormatter},frag):frag,markupStyleCreator,renderMode,orderMode,ecModel.get('useUTC'),tooltipModel.get('textStyle')):seriesTooltipResult.text;var asyncTicket='item_'+dataModel.name+'_'+dataIndex;this._showOrMove(tooltipModel,function(){this._showTooltipContent(tooltipModel,markupText,params,asyncTicket,e.offsetX,e.offsetY,e.position,e.target,markupStyleCreator);});// FIXME
// duplicated showtip if manuallyShowTip is called from dispatchAction.
dispatchAction({type:'showTip',dataIndexInside:dataIndex,dataIndex:data.getRawIndex(dataIndex),seriesIndex:seriesIndex,from:this.uid});};TooltipView.prototype._showComponentItemTooltip=function(e,el,dispatchAction){var ecData=(0,innerStore/* getECData */.A)(el);var tooltipConfig=ecData.tooltipConfig;var tooltipOpt=tooltipConfig.option||{};if((0,util/* isString */.HD)(tooltipOpt)){var content=tooltipOpt;tooltipOpt={content:content,// Fixed formatter
formatter:content};}var tooltipModelCascade=[tooltipOpt];var cmpt=this._ecModel.getComponent(ecData.componentMainType,ecData.componentIndex);if(cmpt){tooltipModelCascade.push(cmpt);}// In most cases, component tooltip formatter has different params with series tooltip formatter,
// so that they can not share the same formatter. Since the global tooltip formatter is used for series
// by convension, we do not use it as the default formatter for component.
tooltipModelCascade.push({formatter:tooltipOpt.content});var positionDefault=e.positionDefault;var subTooltipModel=buildTooltipModel(tooltipModelCascade,this._tooltipModel,positionDefault?{position:positionDefault}:null);var defaultHtml=subTooltipModel.get('content');var asyncTicket=Math.random()+'';// PENDING: this case do not support richText style yet.
var markupStyleCreator=new tooltipMarkup/* TooltipMarkupStyleCreator */.iv();// Do not check whether `trigger` is 'none' here, because `trigger`
// only works on coordinate system. In fact, we have not found case
// that requires setting `trigger` nothing on component yet.
this._showOrMove(subTooltipModel,function(){// Use formatterParams from element defined in component
// Avoid users modify it.
var formatterParams=(0,util/* clone */.d9)(subTooltipModel.get('formatterParams')||{});this._showTooltipContent(subTooltipModel,defaultHtml,formatterParams,asyncTicket,e.offsetX,e.offsetY,e.position,el,markupStyleCreator);});// If not dispatch showTip, tip may be hide triggered by axis.
dispatchAction({type:'showTip',from:this.uid});};TooltipView.prototype._showTooltipContent=function(// Use Model<TooltipOption> insteadof TooltipModel because this model may be from series or other options.
// Instead of top level tooltip.
tooltipModel,defaultHtml,params,asyncTicket,x,y,positionExpr,el,markupStyleCreator){// Reset ticket
this._ticket='';if(!tooltipModel.get('showContent')||!tooltipModel.get('show')){return;}var tooltipContent=this._tooltipContent;tooltipContent.setEnterable(tooltipModel.get('enterable'));var formatter=tooltipModel.get('formatter');positionExpr=positionExpr||tooltipModel.get('position');var html=defaultHtml;var nearPoint=this._getNearestPoint([x,y],params,tooltipModel.get('trigger'),tooltipModel.get('borderColor'));var nearPointColor=nearPoint.color;if(formatter){if((0,util/* isString */.HD)(formatter)){var useUTC=tooltipModel.ecModel.get('useUTC');var params0=(0,util/* isArray */.kJ)(params)?params[0]:params;var isTimeAxis=params0&&params0.axisType&&params0.axisType.indexOf('time')>=0;html=formatter;if(isTimeAxis){html=(0,time/* format */.WU)(params0.axisValue,html,useUTC);}html=(0,format/* formatTpl */.kF)(html,params,true);}else if((0,util/* isFunction */.mf)(formatter)){var callback=(0,util/* bind */.ak)(function(cbTicket,html){if(cbTicket===this._ticket){tooltipContent.setContent(html,markupStyleCreator,tooltipModel,nearPointColor,positionExpr);this._updatePosition(tooltipModel,positionExpr,x,y,tooltipContent,params,el);}},this);this._ticket=asyncTicket;html=formatter(params,asyncTicket,callback);}else{html=formatter;}}tooltipContent.setContent(html,markupStyleCreator,tooltipModel,nearPointColor,positionExpr);tooltipContent.show(tooltipModel,nearPointColor);this._updatePosition(tooltipModel,positionExpr,x,y,tooltipContent,params,el);};TooltipView.prototype._getNearestPoint=function(point,tooltipDataParams,trigger,borderColor){if(trigger==='axis'||(0,util/* isArray */.kJ)(tooltipDataParams)){return{color:borderColor||(this._renderMode==='html'?'#fff':'none')};}if(!(0,util/* isArray */.kJ)(tooltipDataParams)){return{color:borderColor||tooltipDataParams.color||tooltipDataParams.borderColor};}};TooltipView.prototype._updatePosition=function(tooltipModel,positionExpr,x,// Mouse x
y,// Mouse y
content,params,el){var viewWidth=this._api.getWidth();var viewHeight=this._api.getHeight();positionExpr=positionExpr||tooltipModel.get('position');var contentSize=content.getSize();var align=tooltipModel.get('align');var vAlign=tooltipModel.get('verticalAlign');var rect=el&&el.getBoundingRect().clone();el&&rect.applyTransform(el.transform);if((0,util/* isFunction */.mf)(positionExpr)){// Callback of position can be an array or a string specify the position
positionExpr=positionExpr([x,y],params,content.el,rect,{viewSize:[viewWidth,viewHeight],contentSize:contentSize.slice()});}if((0,util/* isArray */.kJ)(positionExpr)){x=(0,number/* parsePercent */.GM)(positionExpr[0],viewWidth);y=(0,number/* parsePercent */.GM)(positionExpr[1],viewHeight);}else if((0,util/* isObject */.Kn)(positionExpr)){var boxLayoutPosition=positionExpr;boxLayoutPosition.width=contentSize[0];boxLayoutPosition.height=contentSize[1];var layoutRect=(0,layout/* getLayoutRect */.ME)(boxLayoutPosition,{width:viewWidth,height:viewHeight});x=layoutRect.x;y=layoutRect.y;align=null;// When positionExpr is left/top/right/bottom,
// align and verticalAlign will not work.
vAlign=null;}// Specify tooltip position by string 'top' 'bottom' 'left' 'right' around graphic element
else if((0,util/* isString */.HD)(positionExpr)&&el){var pos=calcTooltipPosition(positionExpr,rect,contentSize,tooltipModel.get('borderWidth'));x=pos[0];y=pos[1];}else{var pos=refixTooltipPosition(x,y,content,viewWidth,viewHeight,align?null:20,vAlign?null:20);x=pos[0];y=pos[1];}align&&(x-=isCenterAlign(align)?contentSize[0]/2:align==='right'?contentSize[0]:0);vAlign&&(y-=isCenterAlign(vAlign)?contentSize[1]/2:vAlign==='bottom'?contentSize[1]:0);if(shouldTooltipConfine(tooltipModel)){var pos=confineTooltipPosition(x,y,content,viewWidth,viewHeight);x=pos[0];y=pos[1];}content.moveTo(x,y);};// FIXME
// Should we remove this but leave this to user?
TooltipView.prototype._updateContentNotChangedOnAxis=function(dataByCoordSys,cbParamsList){var lastCoordSys=this._lastDataByCoordSys;var lastCbParamsList=this._cbParamsList;var contentNotChanged=!!lastCoordSys&&lastCoordSys.length===dataByCoordSys.length;contentNotChanged&&(0,util/* each */.S6)(lastCoordSys,function(lastItemCoordSys,indexCoordSys){var lastDataByAxis=lastItemCoordSys.dataByAxis||[];var thisItemCoordSys=dataByCoordSys[indexCoordSys]||{};var thisDataByAxis=thisItemCoordSys.dataByAxis||[];contentNotChanged=contentNotChanged&&lastDataByAxis.length===thisDataByAxis.length;contentNotChanged&&(0,util/* each */.S6)(lastDataByAxis,function(lastItem,indexAxis){var thisItem=thisDataByAxis[indexAxis]||{};var lastIndices=lastItem.seriesDataIndices||[];var newIndices=thisItem.seriesDataIndices||[];contentNotChanged=contentNotChanged&&lastItem.value===thisItem.value&&lastItem.axisType===thisItem.axisType&&lastItem.axisId===thisItem.axisId&&lastIndices.length===newIndices.length;contentNotChanged&&(0,util/* each */.S6)(lastIndices,function(lastIdxItem,j){var newIdxItem=newIndices[j];contentNotChanged=contentNotChanged&&lastIdxItem.seriesIndex===newIdxItem.seriesIndex&&lastIdxItem.dataIndex===newIdxItem.dataIndex;});// check is cbParams data value changed
lastCbParamsList&&(0,util/* each */.S6)(lastItem.seriesDataIndices,function(idxItem){var seriesIdx=idxItem.seriesIndex;var cbParams=cbParamsList[seriesIdx];var lastCbParams=lastCbParamsList[seriesIdx];if(cbParams&&lastCbParams&&lastCbParams.data!==cbParams.data){contentNotChanged=false;}});});});this._lastDataByCoordSys=dataByCoordSys;this._cbParamsList=cbParamsList;return!!contentNotChanged;};TooltipView.prototype._hide=function(dispatchAction){// Do not directly hideLater here, because this behavior may be prevented
// in dispatchAction when showTip is dispatched.
// FIXME
// duplicated hideTip if manuallyHideTip is called from dispatchAction.
this._lastDataByCoordSys=null;dispatchAction({type:'hideTip',from:this.uid});};TooltipView.prototype.dispose=function(ecModel,api){if(env/* default.node */.Z.node||!api.getDom()){return;}(0,throttle/* clear */.ZH)(this,'_updatePosition');this._tooltipContent.dispose();globalListener/* unregister */.E('itemTooltip',api);};TooltipView.type='tooltip';return TooltipView;}(view_Component/* default */.Z);/**
 * From top to bottom. (the last one should be globalTooltipModel);
 */function buildTooltipModel(modelCascade,globalTooltipModel,defaultTooltipOption){// Last is always tooltip model.
var ecModel=globalTooltipModel.ecModel;var resultModel;if(defaultTooltipOption){resultModel=new Model/* default */.Z(defaultTooltipOption,ecModel,ecModel);resultModel=new Model/* default */.Z(globalTooltipModel.option,resultModel,ecModel);}else{resultModel=globalTooltipModel;}for(var i=modelCascade.length-1;i>=0;i--){var tooltipOpt=modelCascade[i];if(tooltipOpt){if(tooltipOpt instanceof Model/* default */.Z){tooltipOpt=tooltipOpt.get('tooltip',true);}// In each data item tooltip can be simply write:
// {
//  value: 10,
//  tooltip: 'Something you need to know'
// }
if((0,util/* isString */.HD)(tooltipOpt)){tooltipOpt={formatter:tooltipOpt};}if(tooltipOpt){resultModel=new Model/* default */.Z(tooltipOpt,resultModel,ecModel);}}}return resultModel;}function makeDispatchAction(payload,api){return payload.dispatchAction||(0,util/* bind */.ak)(api.dispatchAction,api);}function refixTooltipPosition(x,y,content,viewWidth,viewHeight,gapH,gapV){var size=content.getSize();var width=size[0];var height=size[1];if(gapH!=null){// Add extra 2 pixels for this case:
// At present the "values" in defaut tooltip are using CSS `float: right`.
// When the right edge of the tooltip box is on the right side of the
// viewport, the `float` layout might push the "values" to the second line.
if(x+width+gapH+2>viewWidth){x-=width+gapH;}else{x+=gapH;}}if(gapV!=null){if(y+height+gapV>viewHeight){y-=height+gapV;}else{y+=gapV;}}return[x,y];}function confineTooltipPosition(x,y,content,viewWidth,viewHeight){var size=content.getSize();var width=size[0];var height=size[1];x=Math.min(x+width,viewWidth)-width;y=Math.min(y+height,viewHeight)-height;x=Math.max(x,0);y=Math.max(y,0);return[x,y];}function calcTooltipPosition(position,rect,contentSize,borderWidth){var domWidth=contentSize[0];var domHeight=contentSize[1];var offset=Math.ceil(Math.SQRT2*borderWidth)+8;var x=0;var y=0;var rectWidth=rect.width;var rectHeight=rect.height;switch(position){case'inside':x=rect.x+rectWidth/2-domWidth/2;y=rect.y+rectHeight/2-domHeight/2;break;case'top':x=rect.x+rectWidth/2-domWidth/2;y=rect.y-domHeight-offset;break;case'bottom':x=rect.x+rectWidth/2-domWidth/2;y=rect.y+rectHeight+offset;break;case'left':x=rect.x-domWidth-offset;y=rect.y+rectHeight/2-domHeight/2;break;case'right':x=rect.x+rectWidth+offset;y=rect.y+rectHeight/2-domHeight/2;}return[x,y];}function isCenterAlign(align){return align==='center'||align==='middle';}/**
 * Find target component by payload like:
 * ```js
 * { legendId: 'some_id', name: 'xxx' }
 * { toolboxIndex: 1, name: 'xxx' }
 * { geoName: 'some_name', name: 'xxx' }
 * ```
 * PENDING: at present only
 *
 * If not found, return null/undefined.
 */function findComponentReference(payload,ecModel,api){var queryOptionMap=(0,util_model/* preParseFinder */.zH)(payload).queryOptionMap;var componentMainType=queryOptionMap.keys()[0];if(!componentMainType||componentMainType==='series'){return;}var queryResult=(0,util_model/* queryReferringComponents */.HZ)(ecModel,componentMainType,queryOptionMap.get(componentMainType),{useDefault:false,enableAll:false,enableNone:false});var model=queryResult.models[0];if(!model){return;}var view=api.getViewOfComponentModel(model);var el;view.group.traverse(function(subEl){var tooltipConfig=(0,innerStore/* getECData */.A)(subEl).tooltipConfig;if(tooltipConfig&&tooltipConfig.name===payload.name){el=subEl;return true;// stop
}});if(el){return{componentMainType:componentMainType,componentIndex:model.componentIndex,el:el};}}/* harmony default export */ const tooltip_TooltipView = (TooltipView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip/install.js
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
*/function install_install(registers){(0,extension/* use */.D)(install/* install */.N);registers.registerComponentModel(tooltip_TooltipModel);registers.registerComponentView(tooltip_TooltipView);/**
   * @action
   * @property {string} type
   * @property {number} seriesIndex
   * @property {number} dataIndex
   * @property {number} [x]
   * @property {number} [y]
   */registers.registerAction({type:'showTip',event:'showTip',update:'tooltip:manuallyShowTip'},util/* noop */.ZT);registers.registerAction({type:'hideTip',event:'hideTip',update:'tooltip:manuallyHideTip'},util/* noop */.ZT);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/tooltip.js
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

/***/ 99492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ defaultSeriesFormatTooltip)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99547);
/* harmony import */ var _data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32946);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23958);
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
*/function defaultSeriesFormatTooltip(opt){var series=opt.series;var dataIndex=opt.dataIndex;var multipleSeries=opt.multipleSeries;var data=series.getData();var tooltipDims=data.mapDimensionsAll('defaultedTooltip');var tooltipDimLen=tooltipDims.length;var value=series.getRawValue(dataIndex);var isValueArr=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(value);var markerColor=(0,_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieveVisualColorForTooltipMarker */ .jT)(series,dataIndex);// Complicated rule for pretty tooltip.
var inlineValue;var inlineValueType;var subBlocks;var sortParam;if(tooltipDimLen>1||isValueArr&&!tooltipDimLen){var formatArrResult=formatTooltipArrayValue(value,series,dataIndex,tooltipDims,markerColor);inlineValue=formatArrResult.inlineValues;inlineValueType=formatArrResult.inlineValueTypes;subBlocks=formatArrResult.blocks;// Only support tooltip sort by the first inline value. It's enough in most cases.
sortParam=formatArrResult.inlineValues[0];}else if(tooltipDimLen){var dimInfo=data.getDimensionInfo(tooltipDims[0]);sortParam=inlineValue=(0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__/* .retrieveRawValue */ .hk)(data,dataIndex,tooltipDims[0]);inlineValueType=dimInfo.type;}else{sortParam=inlineValue=isValueArr?value[0]:value;}// Do not show generated series name. It might not be readable.
var seriesNameSpecified=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__/* .isNameSpecified */ .yu)(series);var seriesName=seriesNameSpecified&&series.name||'';var itemName=data.getName(dataIndex);var inlineName=multipleSeries?seriesName:itemName;return (0,_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__/* .createTooltipMarkup */ .TX)('section',{header:seriesName,// When series name not specified, do not show a header line with only '-'.
// This case alway happen in tooltip.trigger: 'item'.
noHeader:multipleSeries||!seriesNameSpecified,sortParam:sortParam,blocks:[(0,_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__/* .createTooltipMarkup */ .TX)('nameValue',{markerType:'item',markerColor:markerColor,// Do not mix display seriesName and itemName in one tooltip,
// which might confuses users.
name:inlineName,// name dimension might be auto assigned, where the name might
// be not readable. So we check trim here.
noName:!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .trim */ .fy)(inlineName),value:inlineValue,valueType:inlineValueType})].concat(subBlocks||[])});}function formatTooltipArrayValue(value,series,dataIndex,tooltipDims,colorStr){// check: category-no-encode-has-axis-data in dataset.html
var data=series.getData();var isValueMultipleLine=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .reduce */ .u4)(value,function(isValueMultipleLine,val,idx){var dimItem=data.getDimensionInfo(idx);return isValueMultipleLine=isValueMultipleLine||dimItem&&dimItem.tooltip!==false&&dimItem.displayName!=null;},false);var inlineValues=[];var inlineValueTypes=[];var blocks=[];tooltipDims.length?(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(tooltipDims,function(dim){setEachItem((0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__/* .retrieveRawValue */ .hk)(data,dataIndex,dim),dim);})// By default, all dims is used on tooltip.
:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(value,setEachItem);function setEachItem(val,dim){var dimInfo=data.getDimensionInfo(dim);// If `dimInfo.tooltip` is not set, show tooltip.
if(!dimInfo||dimInfo.otherDims.tooltip===false){return;}if(isValueMultipleLine){blocks.push((0,_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__/* .createTooltipMarkup */ .TX)('nameValue',{markerType:'subItem',markerColor:colorStr,name:dimInfo.displayName,value:val,valueType:dimInfo.type}));}else{inlineValues.push(val);inlineValueTypes.push(dimInfo.type);}}return{inlineValues:inlineValues,inlineValueTypes:inlineValueTypes,blocks:blocks};}

/***/ }),

/***/ 99547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BY": () => (/* binding */ buildTooltipMarkup),
/* harmony export */   "TX": () => (/* binding */ createTooltipMarkup),
/* harmony export */   "d_": () => (/* binding */ getPaddingFromTooltipModel),
/* harmony export */   "iv": () => (/* binding */ TooltipMarkupStyleCreator),
/* harmony export */   "jT": () => (/* binding */ retrieveVisualColorForTooltipMarker)
/* harmony export */ });
/* harmony import */ var _util_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87662);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85168);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84646);
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
*/var TOOLTIP_LINE_HEIGHT_CSS='line-height:1';// TODO: more textStyle option
function getTooltipTextStyle(textStyle,renderMode){var nameFontColor=textStyle.color||'#6e7079';var nameFontSize=textStyle.fontSize||12;var nameFontWeight=textStyle.fontWeight||'400';var valueFontColor=textStyle.color||'#464646';var valueFontSize=textStyle.fontSize||14;var valueFontWeight=textStyle.fontWeight||'900';if(renderMode==='html'){// `textStyle` is probably from user input, should be encoded to reduce security risk.
return{// eslint-disable-next-line max-len
nameStyle:"font-size:"+(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(nameFontSize+'')+"px;color:"+(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(nameFontColor)+";font-weight:"+(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(nameFontWeight+''),// eslint-disable-next-line max-len
valueStyle:"font-size:"+(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(valueFontSize+'')+"px;color:"+(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(valueFontColor)+";font-weight:"+(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(valueFontWeight+'')};}else{return{nameStyle:{fontSize:nameFontSize,fill:nameFontColor,fontWeight:nameFontWeight},valueStyle:{fontSize:valueFontSize,fill:valueFontColor,fontWeight:valueFontWeight}};}}// See `TooltipMarkupLayoutIntent['innerGapLevel']`.
// (value from UI design)
var HTML_GAPS=[0,10,20,30];var RICH_TEXT_GAPS=['','\n','\n\n','\n\n\n'];// eslint-disable-next-line max-len
function createTooltipMarkup(type,option){option.type=type;return option;}function isSectionFragment(frag){return frag.type==='section';}function getBuilder(frag){return isSectionFragment(frag)?buildSection:buildNameValue;}function getBlockGapLevel(frag){if(isSectionFragment(frag)){var gapLevel_1=0;var subBlockLen=frag.blocks.length;var hasInnerGap_1=subBlockLen>1||subBlockLen>0&&!frag.noHeader;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(frag.blocks,function(subBlock){var subGapLevel=getBlockGapLevel(subBlock);// If the some of the sub-blocks have some gaps (like 10px) inside, this block
// should use a larger gap (like 20px) to distinguish those sub-blocks.
if(subGapLevel>=gapLevel_1){gapLevel_1=subGapLevel+ +(hasInnerGap_1&&(// 0 always can not be readable gap level.
!subGapLevel// If no header, always keep the sub gap level. Otherwise
// look weird in case `multipleSeries`.
||isSectionFragment(subBlock)&&!subBlock.noHeader));}});return gapLevel_1;}return 0;}function buildSection(ctx,fragment,topMarginForOuterGap,toolTipTextStyle){var noHeader=fragment.noHeader;var gaps=getGap(getBlockGapLevel(fragment));var subMarkupTextList=[];var subBlocks=fragment.blocks||[];(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .assert */ .hu)(!subBlocks||(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(subBlocks));subBlocks=subBlocks||[];var orderMode=ctx.orderMode;if(fragment.sortBlocks&&orderMode){subBlocks=subBlocks.slice();var orderMap={valueAsc:'asc',valueDesc:'desc'};if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .hasOwn */ .RI)(orderMap,orderMode)){var comparator_1=new _data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__/* .SortOrderComparator */ .ID(orderMap[orderMode],null);subBlocks.sort(function(a,b){return comparator_1.evaluate(a.sortParam,b.sortParam);});}// FIXME 'seriesDesc' necessary?
else if(orderMode==='seriesDesc'){subBlocks.reverse();}}(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(subBlocks,function(subBlock,idx){var valueFormatter=fragment.valueFormatter;var subMarkupText=getBuilder(subBlock)(// Inherit valueFormatter
valueFormatter?(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)({},ctx),{valueFormatter:valueFormatter}):ctx,subBlock,idx>0?gaps.html:0,toolTipTextStyle);subMarkupText!=null&&subMarkupTextList.push(subMarkupText);});var subMarkupText=ctx.renderMode==='richText'?subMarkupTextList.join(gaps.richText):wrapBlockHTML(subMarkupTextList.join(''),noHeader?topMarginForOuterGap:gaps.html);if(noHeader){return subMarkupText;}var displayableHeader=(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .makeValueReadable */ .uX)(fragment.header,'ordinal',ctx.useUTC);var nameStyle=getTooltipTextStyle(toolTipTextStyle,ctx.renderMode).nameStyle;if(ctx.renderMode==='richText'){return wrapInlineNameRichText(ctx,displayableHeader,nameStyle)+gaps.richText+subMarkupText;}else{return wrapBlockHTML("<div style=\""+nameStyle+";"+TOOLTIP_LINE_HEIGHT_CSS+";\">"+(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(displayableHeader)+'</div>'+subMarkupText,topMarginForOuterGap);}}function buildNameValue(ctx,fragment,topMarginForOuterGap,toolTipTextStyle){var renderMode=ctx.renderMode;var noName=fragment.noName;var noValue=fragment.noValue;var noMarker=!fragment.markerType;var name=fragment.name;var useUTC=ctx.useUTC;var valueFormatter=fragment.valueFormatter||ctx.valueFormatter||function(value){value=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(value)?value:[value];return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .map */ .UI)(value,function(val,idx){return (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .makeValueReadable */ .uX)(val,(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(valueTypeOption)?valueTypeOption[idx]:valueTypeOption,useUTC);});};if(noName&&noValue){return;}var markerStr=noMarker?'':ctx.markupStyleCreator.makeTooltipMarker(fragment.markerType,fragment.markerColor||'#333',renderMode);var readableName=noName?'':(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .makeValueReadable */ .uX)(name,'ordinal',useUTC);var valueTypeOption=fragment.valueType;var readableValueList=noValue?[]:valueFormatter(fragment.value);var valueAlignRight=!noMarker||!noName;// It little weird if only value next to marker but far from marker.
var valueCloseToMarker=!noMarker&&noName;var _a=getTooltipTextStyle(toolTipTextStyle,renderMode),nameStyle=_a.nameStyle,valueStyle=_a.valueStyle;return renderMode==='richText'?(noMarker?'':markerStr)+(noName?'':wrapInlineNameRichText(ctx,readableName,nameStyle))// Value has commas inside, so use ' ' as delimiter for multiple values.
+(noValue?'':wrapInlineValueRichText(ctx,readableValueList,valueAlignRight,valueCloseToMarker,valueStyle)):wrapBlockHTML((noMarker?'':markerStr)+(noName?'':wrapInlineNameHTML(readableName,!noMarker,nameStyle))+(noValue?'':wrapInlineValueHTML(readableValueList,valueAlignRight,valueCloseToMarker,valueStyle)),topMarginForOuterGap);}/**
 * @return markupText. null/undefined means no content.
 */function buildTooltipMarkup(fragment,markupStyleCreator,renderMode,orderMode,useUTC,toolTipTextStyle){if(!fragment){return;}var builder=getBuilder(fragment);var ctx={useUTC:useUTC,renderMode:renderMode,orderMode:orderMode,markupStyleCreator:markupStyleCreator,valueFormatter:fragment.valueFormatter};return builder(ctx,fragment,0,toolTipTextStyle);}function getGap(gapLevel){return{html:HTML_GAPS[gapLevel],richText:RICH_TEXT_GAPS[gapLevel]};}function wrapBlockHTML(encodedContent,topGap){var clearfix='<div style="clear:both"></div>';var marginCSS="margin: "+topGap+"px 0 0";return"<div style=\""+marginCSS+";"+TOOLTIP_LINE_HEIGHT_CSS+";\">"+encodedContent+clearfix+'</div>';}function wrapInlineNameHTML(name,leftHasMarker,style){var marginCss=leftHasMarker?'margin-left:2px':'';return"<span style=\""+style+";"+marginCss+"\">"+(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(name)+'</span>';}function wrapInlineValueHTML(valueList,alignRight,valueCloseToMarker,style){// Do not too close to marker, considering there are multiple values separated by spaces.
var paddingStr=valueCloseToMarker?'10px':'20px';var alignCSS=alignRight?"float:right;margin-left:"+paddingStr:'';valueList=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(valueList)?valueList:[valueList];return"<span style=\""+alignCSS+";"+style+"\">"// Value has commas inside, so use '  ' as delimiter for multiple values.
+(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .map */ .UI)(valueList,function(value){return (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .encodeHTML */ .F1)(value);}).join('&nbsp;&nbsp;')+'</span>';}function wrapInlineNameRichText(ctx,name,style){return ctx.markupStyleCreator.wrapRichTextStyle(name,style);}function wrapInlineValueRichText(ctx,values,alignRight,valueCloseToMarker,style){var styles=[style];var paddingLeft=valueCloseToMarker?10:20;alignRight&&styles.push({padding:[0,0,0,paddingLeft],align:'right'});// Value has commas inside, so use '  ' as delimiter for multiple values.
return ctx.markupStyleCreator.wrapRichTextStyle((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(values)?values.join('  '):values,styles);}function retrieveVisualColorForTooltipMarker(series,dataIndex){var style=series.getData().getItemVisual(dataIndex,'style');var color=style[series.visualDrawType];return (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToColorString */ .Lz)(color);}function getPaddingFromTooltipModel(model,renderMode){var padding=model.get('padding');return padding!=null?padding// We give slightly different to look pretty.
:renderMode==='richText'?[8,10]:10;}/**
 * The major feature is generate styles for `renderMode: 'richText'`.
 * But it also serves `renderMode: 'html'` to provide
 * "renderMode-independent" API.
 */var TooltipMarkupStyleCreator=/** @class */function(){function TooltipMarkupStyleCreator(){this.richTextStyles={};// Notice that "generate a style name" usuall happens repeatly when mouse moving and
// displaying a tooltip. So we put the `_nextStyleNameId` as a member of each creator
// rather than static shared by all creators (which will cause it increase to fast).
this._nextStyleNameId=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .getRandomIdBase */ .jj)();}TooltipMarkupStyleCreator.prototype._generateStyleName=function(){return'__EC_aUTo_'+this._nextStyleNameId++;};TooltipMarkupStyleCreator.prototype.makeTooltipMarker=function(markerType,colorStr,renderMode){var markerId=renderMode==='richText'?this._generateStyleName():null;var marker=(0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__/* .getTooltipMarker */ .A0)({color:colorStr,type:markerType,renderMode:renderMode,markerId:markerId});if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(marker)){return marker;}else{if(false){}this.richTextStyles[markerId]=marker.style;return marker.content;}};/**
   * @usage
   * ```ts
   * const styledText = markupStyleCreator.wrapRichTextStyle([
   *     // The styles will be auto merged.
   *     {
   *         fontSize: 12,
   *         color: 'blue'
   *     },
   *     {
   *         padding: 20
   *     }
   * ]);
   * ```
   */TooltipMarkupStyleCreator.prototype.wrapRichTextStyle=function(text,styles){var finalStl={};if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(styles)){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(styles,function(stl){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)(finalStl,stl);});}else{(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)(finalStl,styles);}var styleName=this._generateStyleName();this.richTextStyles[styleName]=finalStl;return"{"+styleName+"|"+text+"}";};return TooltipMarkupStyleCreator;}();

/***/ }),

/***/ 13863:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/visualDefault.js
var visualDefault = __webpack_require__(68166);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/VisualMapping.js
var VisualMapping = __webpack_require__(1652);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/visualSolution.js
var visualSolution = __webpack_require__(83025);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(15022);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/VisualMapModel.js
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
*/var mapVisual=VisualMapping/* default.mapVisual */.Z.mapVisual;var eachVisual=VisualMapping/* default.eachVisual */.Z.eachVisual;var isArray=util/* isArray */.kJ;var each=util/* each */.S6;var asc=number/* asc */.dt;var linearMap=number/* linearMap */.NU;var VisualMapModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(VisualMapModel,_super);function VisualMapModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=VisualMapModel.type;_this.stateList=['inRange','outOfRange'];_this.replacableOptionKeys=['inRange','outOfRange','target','controller','color'];_this.layoutMode={type:'box',ignoreSize:true};/**
     * [lowerBound, upperBound]
     */_this.dataBound=[-Infinity,Infinity];_this.targetVisuals={};_this.controllerVisuals={};return _this;}VisualMapModel.prototype.init=function(option,parentModel,ecModel){this.mergeDefaultAndTheme(option,ecModel);};/**
   * @protected
   */VisualMapModel.prototype.optionUpdated=function(newOption,isInit){var thisOption=this.option;!isInit&&visualSolution/* replaceVisualOption */.jO(thisOption,newOption,this.replacableOptionKeys);this.textStyleModel=this.getModel('textStyle');this.resetItemSize();this.completeVisualOption();};/**
   * @protected
   */VisualMapModel.prototype.resetVisual=function(supplementVisualOption){var stateList=this.stateList;supplementVisualOption=util/* bind */.ak(supplementVisualOption,this);this.controllerVisuals=visualSolution/* createVisualMappings */.qD(this.option.controller,stateList,supplementVisualOption);this.targetVisuals=visualSolution/* createVisualMappings */.qD(this.option.target,stateList,supplementVisualOption);};/**
   * @public
   */VisualMapModel.prototype.getItemSymbol=function(){return null;};/**
   * @protected
   * @return {Array.<number>} An array of series indices.
   */VisualMapModel.prototype.getTargetSeriesIndices=function(){var optionSeriesIndex=this.option.seriesIndex;var seriesIndices=[];if(optionSeriesIndex==null||optionSeriesIndex==='all'){this.ecModel.eachSeries(function(seriesModel,index){seriesIndices.push(index);});}else{seriesIndices=model/* normalizeToArray */.kF(optionSeriesIndex);}return seriesIndices;};/**
   * @public
   */VisualMapModel.prototype.eachTargetSeries=function(callback,context){util/* each */.S6(this.getTargetSeriesIndices(),function(seriesIndex){var seriesModel=this.ecModel.getSeriesByIndex(seriesIndex);if(seriesModel){callback.call(context,seriesModel);}},this);};/**
   * @pubilc
   */VisualMapModel.prototype.isTargetSeries=function(seriesModel){var is=false;this.eachTargetSeries(function(model){model===seriesModel&&(is=true);});return is;};/**
   * @example
   * this.formatValueText(someVal); // format single numeric value to text.
   * this.formatValueText(someVal, true); // format single category value to text.
   * this.formatValueText([min, max]); // format numeric min-max to text.
   * this.formatValueText([this.dataBound[0], max]); // using data lower bound.
   * this.formatValueText([min, this.dataBound[1]]); // using data upper bound.
   *
   * @param value Real value, or this.dataBound[0 or 1].
   * @param isCategory Only available when value is number.
   * @param edgeSymbols Open-close symbol when value is interval.
   * @protected
   */VisualMapModel.prototype.formatValueText=function(value,isCategory,edgeSymbols){var option=this.option;var precision=option.precision;var dataBound=this.dataBound;var formatter=option.formatter;var isMinMax;edgeSymbols=edgeSymbols||['<','>'];if(util/* isArray */.kJ(value)){value=value.slice();isMinMax=true;}var textValue=isCategory?value// Value is string when isCategory
:isMinMax?[toFixed(value[0]),toFixed(value[1])]:toFixed(value);if(util/* isString */.HD(formatter)){return formatter.replace('{value}',isMinMax?textValue[0]:textValue).replace('{value2}',isMinMax?textValue[1]:textValue);}else if(util/* isFunction */.mf(formatter)){return isMinMax?formatter(value[0],value[1]):formatter(value);}if(isMinMax){if(value[0]===dataBound[0]){return edgeSymbols[0]+' '+textValue[1];}else if(value[1]===dataBound[1]){return edgeSymbols[1]+' '+textValue[0];}else{return textValue[0]+' - '+textValue[1];}}else{// Format single value (includes category case).
return textValue;}function toFixed(val){return val===dataBound[0]?'min':val===dataBound[1]?'max':(+val).toFixed(Math.min(precision,20));}};/**
   * @protected
   */VisualMapModel.prototype.resetExtent=function(){var thisOption=this.option;// Can not calculate data extent by data here.
// Because series and data may be modified in processing stage.
// So we do not support the feature "auto min/max".
var extent=asc([thisOption.min,thisOption.max]);this._dataExtent=extent;};/**
   * PENDING:
   * delete this method if no outer usage.
   *
   * Return  Concrete dimention. If return null/undefined, no dimension used.
   */ // getDataDimension(data: SeriesData) {
//     const optDim = this.option.dimension;
//     if (optDim != null) {
//         return data.getDimension(optDim);
//     }
//     const dimNames = data.dimensions;
//     for (let i = dimNames.length - 1; i >= 0; i--) {
//         const dimName = dimNames[i];
//         const dimInfo = data.getDimensionInfo(dimName);
//         if (!dimInfo.isCalculationCoord) {
//             return dimName;
//         }
//     }
// }
VisualMapModel.prototype.getDataDimensionIndex=function(data){var optDim=this.option.dimension;if(optDim!=null){return data.getDimensionIndex(optDim);}var dimNames=data.dimensions;for(var i=dimNames.length-1;i>=0;i--){var dimName=dimNames[i];var dimInfo=data.getDimensionInfo(dimName);if(!dimInfo.isCalculationCoord){return dimInfo.storeDimIndex;}}};VisualMapModel.prototype.getExtent=function(){return this._dataExtent.slice();};VisualMapModel.prototype.completeVisualOption=function(){var ecModel=this.ecModel;var thisOption=this.option;var base={inRange:thisOption.inRange,outOfRange:thisOption.outOfRange};var target=thisOption.target||(thisOption.target={});var controller=thisOption.controller||(thisOption.controller={});util/* merge */.TS(target,base);// Do not override
util/* merge */.TS(controller,base);// Do not override
var isCategory=this.isCategory();completeSingle.call(this,target);completeSingle.call(this,controller);completeInactive.call(this,target,'inRange','outOfRange');// completeInactive.call(this, target, 'outOfRange', 'inRange');
completeController.call(this,controller);function completeSingle(base){// Compatible with ec2 dataRange.color.
// The mapping order of dataRange.color is: [high value, ..., low value]
// whereas inRange.color and outOfRange.color is [low value, ..., high value]
// Notice: ec2 has no inverse.
if(isArray(thisOption.color)// If there has been inRange: {symbol: ...}, adding color is a mistake.
// So adding color only when no inRange defined.
&&!base.inRange){base.inRange={color:thisOption.color.slice().reverse()};}// Compatible with previous logic, always give a defautl color, otherwise
// simple config with no inRange and outOfRange will not work.
// Originally we use visualMap.color as the default color, but setOption at
// the second time the default color will be erased. So we change to use
// constant DEFAULT_COLOR.
// If user do not want the default color, set inRange: {color: null}.
base.inRange=base.inRange||{color:ecModel.get('gradientColor')};}function completeInactive(base,stateExist,stateAbsent){var optExist=base[stateExist];var optAbsent=base[stateAbsent];if(optExist&&!optAbsent){optAbsent=base[stateAbsent]={};each(optExist,function(visualData,visualType){if(!VisualMapping/* default.isValidType */.Z.isValidType(visualType)){return;}var defa=visualDefault/* default.get */.Z.get(visualType,'inactive',isCategory);if(defa!=null){optAbsent[visualType]=defa;// Compatibable with ec2:
// Only inactive color to rgba(0,0,0,0) can not
// make label transparent, so use opacity also.
if(visualType==='color'&&!optAbsent.hasOwnProperty('opacity')&&!optAbsent.hasOwnProperty('colorAlpha')){optAbsent.opacity=[0,0];}}});}}function completeController(controller){var symbolExists=(controller.inRange||{}).symbol||(controller.outOfRange||{}).symbol;var symbolSizeExists=(controller.inRange||{}).symbolSize||(controller.outOfRange||{}).symbolSize;var inactiveColor=this.get('inactiveColor');var itemSymbol=this.getItemSymbol();var defaultSymbol=itemSymbol||'roundRect';each(this.stateList,function(state){var itemSize=this.itemSize;var visuals=controller[state];// Set inactive color for controller if no other color
// attr (like colorAlpha) specified.
if(!visuals){visuals=controller[state]={color:isCategory?inactiveColor:[inactiveColor]};}// Consistent symbol and symbolSize if not specified.
if(visuals.symbol==null){visuals.symbol=symbolExists&&util/* clone */.d9(symbolExists)||(isCategory?defaultSymbol:[defaultSymbol]);}if(visuals.symbolSize==null){visuals.symbolSize=symbolSizeExists&&util/* clone */.d9(symbolSizeExists)||(isCategory?itemSize[0]:[itemSize[0],itemSize[0]]);}// Filter none
visuals.symbol=mapVisual(visuals.symbol,function(symbol){return symbol==='none'?defaultSymbol:symbol;});// Normalize symbolSize
var symbolSize=visuals.symbolSize;if(symbolSize!=null){var max_1=-Infinity;// symbolSize can be object when categories defined.
eachVisual(symbolSize,function(value){value>max_1&&(max_1=value);});visuals.symbolSize=mapVisual(symbolSize,function(value){return linearMap(value,[0,max_1],[0,itemSize[0]],true);});}},this);}};VisualMapModel.prototype.resetItemSize=function(){this.itemSize=[parseFloat(this.get('itemWidth')),parseFloat(this.get('itemHeight'))];};VisualMapModel.prototype.isCategory=function(){return!!this.option.categories;};/**
   * @public
   * @abstract
   */VisualMapModel.prototype.setSelected=function(selected){};VisualMapModel.prototype.getSelected=function(){return null;};/**
   * @public
   * @abstract
   */VisualMapModel.prototype.getValueState=function(value){return null;};/**
   * FIXME
   * Do not publish to thirt-part-dev temporarily
   * util the interface is stable. (Should it return
   * a function but not visual meta?)
   *
   * @pubilc
   * @abstract
   * @param getColorVisual
   *        params: value, valueState
   *        return: color
   * @return {Object} visualMeta
   *        should includes {stops, outerColors}
   *        outerColor means [colorBeyondMinValue, colorBeyondMaxValue]
   */VisualMapModel.prototype.getVisualMeta=function(getColorVisual){return null;};VisualMapModel.type='visualMap';VisualMapModel.dependencies=['series'];VisualMapModel.defaultOption={show:true,// zlevel: 0,
z:4,seriesIndex:'all',min:0,max:200,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:false,orient:'vertical',backgroundColor:'rgba(0,0,0,0)',borderColor:'#ccc',contentColor:'#5793f3',inactiveColor:'#aaa',borderWidth:0,padding:5,// 接受数组分别设定上右下左边距，同css
textGap:10,precision:0,textStyle:{color:'#333'// 值域文字颜色
}};return VisualMapModel;}(Component/* default */.Z);/* harmony default export */ const visualMap_VisualMapModel = (VisualMapModel);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(36189);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/ContinuousModel.js
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
*/// Constant
var DEFAULT_BAR_BOUND=[20,140];var ContinuousModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ContinuousModel,_super);function ContinuousModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=ContinuousModel.type;return _this;}/**
   * @override
   */ContinuousModel.prototype.optionUpdated=function(newOption,isInit){_super.prototype.optionUpdated.apply(this,arguments);this.resetExtent();this.resetVisual(function(mappingOption){mappingOption.mappingMethod='linear';mappingOption.dataExtent=this.getExtent();});this._resetRange();};/**
   * @protected
   * @override
   */ContinuousModel.prototype.resetItemSize=function(){_super.prototype.resetItemSize.apply(this,arguments);var itemSize=this.itemSize;(itemSize[0]==null||isNaN(itemSize[0]))&&(itemSize[0]=DEFAULT_BAR_BOUND[0]);(itemSize[1]==null||isNaN(itemSize[1]))&&(itemSize[1]=DEFAULT_BAR_BOUND[1]);};/**
   * @private
   */ContinuousModel.prototype._resetRange=function(){var dataExtent=this.getExtent();var range=this.option.range;if(!range||range.auto){// `range` should always be array (so we dont use other
// value like 'auto') for user-friend. (consider getOption).
dataExtent.auto=1;this.option.range=dataExtent;}else if(util/* isArray */.kJ(range)){if(range[0]>range[1]){range.reverse();}range[0]=Math.max(range[0],dataExtent[0]);range[1]=Math.min(range[1],dataExtent[1]);}};/**
   * @protected
   * @override
   */ContinuousModel.prototype.completeVisualOption=function(){_super.prototype.completeVisualOption.apply(this,arguments);util/* each */.S6(this.stateList,function(state){var symbolSize=this.option.controller[state].symbolSize;if(symbolSize&&symbolSize[0]!==symbolSize[1]){symbolSize[0]=symbolSize[1]/3;// For good looking.
}},this);};/**
   * @override
   */ContinuousModel.prototype.setSelected=function(selected){this.option.range=selected.slice();this._resetRange();};/**
   * @public
   */ContinuousModel.prototype.getSelected=function(){var dataExtent=this.getExtent();var dataInterval=number/* asc */.dt((this.get('range')||[]).slice());// Clamp
dataInterval[0]>dataExtent[1]&&(dataInterval[0]=dataExtent[1]);dataInterval[1]>dataExtent[1]&&(dataInterval[1]=dataExtent[1]);dataInterval[0]<dataExtent[0]&&(dataInterval[0]=dataExtent[0]);dataInterval[1]<dataExtent[0]&&(dataInterval[1]=dataExtent[0]);return dataInterval;};/**
   * @override
   */ContinuousModel.prototype.getValueState=function(value){var range=this.option.range;var dataExtent=this.getExtent();// When range[0] === dataExtent[0], any value larger than dataExtent[0] maps to 'inRange'.
// range[1] is processed likewise.
return(range[0]<=dataExtent[0]||range[0]<=value)&&(range[1]>=dataExtent[1]||value<=range[1])?'inRange':'outOfRange';};ContinuousModel.prototype.findTargetDataIndices=function(range){var result=[];this.eachTargetSeries(function(seriesModel){var dataIndices=[];var data=seriesModel.getData();data.each(this.getDataDimensionIndex(data),function(value,dataIndex){range[0]<=value&&value<=range[1]&&dataIndices.push(dataIndex);},this);result.push({seriesId:seriesModel.id,dataIndex:dataIndices});},this);return result;};/**
   * @implement
   */ContinuousModel.prototype.getVisualMeta=function(getColorVisual){var oVals=getColorStopValues(this,'outOfRange',this.getExtent());var iVals=getColorStopValues(this,'inRange',this.option.range.slice());var stops=[];function setStop(value,valueState){stops.push({value:value,color:getColorVisual(value,valueState)});}// Format to: outOfRange -- inRange -- outOfRange.
var iIdx=0;var oIdx=0;var iLen=iVals.length;var oLen=oVals.length;for(;oIdx<oLen&&(!iVals.length||oVals[oIdx]<=iVals[0]);oIdx++){// If oVal[oIdx] === iVals[iIdx], oVal[oIdx] should be ignored.
if(oVals[oIdx]<iVals[iIdx]){setStop(oVals[oIdx],'outOfRange');}}for(var first=1;iIdx<iLen;iIdx++,first=0){// If range is full, value beyond min, max will be clamped.
// make a singularity
first&&stops.length&&setStop(iVals[iIdx],'outOfRange');setStop(iVals[iIdx],'inRange');}for(var first=1;oIdx<oLen;oIdx++){if(!iVals.length||iVals[iVals.length-1]<oVals[oIdx]){// make a singularity
if(first){stops.length&&setStop(stops[stops.length-1].value,'outOfRange');first=0;}setStop(oVals[oIdx],'outOfRange');}}var stopsLen=stops.length;return{stops:stops,outerColors:[stopsLen?stops[0].color:'transparent',stopsLen?stops[stopsLen-1].color:'transparent']};};ContinuousModel.type='visualMap.continuous';ContinuousModel.defaultOption=(0,component/* inheritDefaultOption */.ZL)(visualMap_VisualMapModel.defaultOption,{align:'auto',calculable:false,hoverLink:true,realtime:true,handleIcon:'path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z',handleSize:'120%',handleStyle:{borderColor:'#fff',borderWidth:1},indicatorIcon:'circle',indicatorSize:'50%',indicatorStyle:{borderColor:'#fff',borderWidth:2,shadowBlur:2,shadowOffsetX:1,shadowOffsetY:1,shadowColor:'rgba(0,0,0,0.2)'}// emphasis: {
//     handleStyle: {
//         shadowBlur: 3,
//         shadowOffsetX: 1,
//         shadowOffsetY: 1,
//         shadowColor: 'rgba(0,0,0,0.2)'
//     }
// }
});return ContinuousModel;}(visualMap_VisualMapModel);function getColorStopValues(visualMapModel,valueState,dataExtent){if(dataExtent[0]===dataExtent[1]){return dataExtent.slice();}// When using colorHue mapping, it is not linear color any more.
// Moreover, canvas gradient seems not to be accurate linear.
// FIXME
// Should be arbitrary value 100? or based on pixel size?
var count=200;var step=(dataExtent[1]-dataExtent[0])/count;var value=dataExtent[0];var stopValues=[];for(var i=0;i<=count&&value<dataExtent[1];i++){stopValues.push(value);value+=step;}stopValues.push(dataExtent[1]);return stopValues;}/* harmony default export */ const visualMap_ContinuousModel = (ContinuousModel);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/LinearGradient.js
var LinearGradient = __webpack_require__(45074);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(89071);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(19568);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(87662);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(8636);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(74874);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/VisualMapView.js
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
*/var VisualMapView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(VisualMapView,_super);function VisualMapView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=VisualMapView.type;_this.autoPositionValues={left:1,right:1,top:1,bottom:1};return _this;}VisualMapView.prototype.init=function(ecModel,api){this.ecModel=ecModel;this.api=api;};/**
   * @protected
   */VisualMapView.prototype.render=function(visualMapModel,ecModel,api,payload// TODO: TYPE
){this.visualMapModel=visualMapModel;if(visualMapModel.get('show')===false){this.group.removeAll();return;}this.doRender(visualMapModel,ecModel,api,payload);};/**
   * @protected
   */VisualMapView.prototype.renderBackground=function(group){var visualMapModel=this.visualMapModel;var padding=format/* normalizeCssArray */.MY(visualMapModel.get('padding')||0);var rect=group.getBoundingRect();group.add(new Rect/* default */.Z({z2:-1,silent:true,shape:{x:rect.x-padding[3],y:rect.y-padding[0],width:rect.width+padding[3]+padding[1],height:rect.height+padding[0]+padding[2]},style:{fill:visualMapModel.get('backgroundColor'),stroke:visualMapModel.get('borderColor'),lineWidth:visualMapModel.get('borderWidth')}}));};/**
   * @protected
   * @param targetValue can be Infinity or -Infinity
   * @param visualCluster Only can be 'color' 'opacity' 'symbol' 'symbolSize'
   * @param opts
   * @param opts.forceState Specify state, instead of using getValueState method.
   * @param opts.convertOpacityToAlpha For color gradient in controller widget.
   * @return {*} Visual value.
   */VisualMapView.prototype.getControllerVisual=function(targetValue,visualCluster,opts){opts=opts||{};var forceState=opts.forceState;var visualMapModel=this.visualMapModel;var visualObj={};// Default values.
if(visualCluster==='color'){var defaultColor=visualMapModel.get('contentColor');visualObj.color=defaultColor;}function getter(key){return visualObj[key];}function setter(key,value){visualObj[key]=value;}var mappings=visualMapModel.controllerVisuals[forceState||visualMapModel.getValueState(targetValue)];var visualTypes=VisualMapping/* default.prepareVisualTypes */.Z.prepareVisualTypes(mappings);util/* each */.S6(visualTypes,function(type){var visualMapping=mappings[type];if(opts.convertOpacityToAlpha&&type==='opacity'){type='colorAlpha';visualMapping=mappings.__alphaForOpacity;}if(VisualMapping/* default.dependsOn */.Z.dependsOn(type,visualCluster)){visualMapping&&visualMapping.applyVisual(targetValue,getter,setter);}});return visualObj[visualCluster];};VisualMapView.prototype.positionGroup=function(group){var model=this.visualMapModel;var api=this.api;layout/* positionElement */.p$(group,model.getBoxLayoutParams(),{width:api.getWidth(),height:api.getHeight()});};VisualMapView.prototype.doRender=function(visualMapModel,ecModel,api,payload){};VisualMapView.type='visualMap';return VisualMapView;}(view_Component/* default */.Z);/* harmony default export */ const visualMap_VisualMapView = (VisualMapView);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(45482);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(15021);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/helper/sliderMove.js
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
*/ /**
 * Calculate slider move result.
 * Usage:
 * (1) If both handle0 and handle1 are needed to be moved, set minSpan the same as
 * maxSpan and the same as `Math.abs(handleEnd[1] - handleEnds[0])`.
 * (2) If handle0 is forbidden to cross handle1, set minSpan as `0`.
 *
 * @param delta Move length.
 * @param handleEnds handleEnds[0] can be bigger then handleEnds[1].
 *              handleEnds will be modified in this method.
 * @param extent handleEnds is restricted by extent.
 *              extent[0] should less or equals than extent[1].
 * @param handleIndex Can be 'all', means that both move the two handleEnds.
 * @param minSpan The range of dataZoom can not be smaller than that.
 *              If not set, handle0 and cross handle1. If set as a non-negative
 *              number (including `0`), handles will push each other when reaching
 *              the minSpan.
 * @param maxSpan The range of dataZoom can not be larger than that.
 * @return The input handleEnds.
 */function sliderMove(delta,handleEnds,extent,handleIndex,minSpan,maxSpan){delta=delta||0;var extentSpan=extent[1]-extent[0];// Notice maxSpan and minSpan can be null/undefined.
if(minSpan!=null){minSpan=restrict(minSpan,[0,extentSpan]);}if(maxSpan!=null){maxSpan=Math.max(maxSpan,minSpan!=null?minSpan:0);}if(handleIndex==='all'){var handleSpan=Math.abs(handleEnds[1]-handleEnds[0]);handleSpan=restrict(handleSpan,[0,extentSpan]);minSpan=maxSpan=restrict(handleSpan,[minSpan,maxSpan]);handleIndex=0;}handleEnds[0]=restrict(handleEnds[0],extent);handleEnds[1]=restrict(handleEnds[1],extent);var originalDistSign=getSpanSign(handleEnds,handleIndex);handleEnds[handleIndex]+=delta;// Restrict in extent.
var extentMinSpan=minSpan||0;var realExtent=extent.slice();originalDistSign.sign<0?realExtent[0]+=extentMinSpan:realExtent[1]-=extentMinSpan;handleEnds[handleIndex]=restrict(handleEnds[handleIndex],realExtent);// Expand span.
var currDistSign;currDistSign=getSpanSign(handleEnds,handleIndex);if(minSpan!=null&&(currDistSign.sign!==originalDistSign.sign||currDistSign.span<minSpan)){// If minSpan exists, 'cross' is forbidden.
handleEnds[1-handleIndex]=handleEnds[handleIndex]+originalDistSign.sign*minSpan;}// Shrink span.
currDistSign=getSpanSign(handleEnds,handleIndex);if(maxSpan!=null&&currDistSign.span>maxSpan){handleEnds[1-handleIndex]=handleEnds[handleIndex]+currDistSign.sign*maxSpan;}return handleEnds;}function getSpanSign(handleEnds,handleIndex){var dist=handleEnds[handleIndex]-handleEnds[1-handleIndex];// If `handleEnds[0] === handleEnds[1]`, always believe that handleEnd[0]
// is at left of handleEnds[1] for non-cross case.
return{span:Math.abs(dist),sign:dist>0?-1:dist<0?1:handleIndex?-1:1};}function restrict(value,extend){return Math.min(extend[1]!=null?extend[1]:Infinity,Math.max(extend[0]!=null?extend[0]:-Infinity,value));}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/helper.js
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
*/var paramsSet=[['left','right','width'],['top','bottom','height']];/**
 * @param visualMapModel
 * @param api
 * @param itemSize always [short, long]
 * @return {string} 'left' or 'right' or 'top' or 'bottom'
 */function getItemAlign(visualMapModel,api,itemSize){var modelOption=visualMapModel.option;var itemAlign=modelOption.align;if(itemAlign!=null&&itemAlign!=='auto'){return itemAlign;}// Auto decision align.
var ecSize={width:api.getWidth(),height:api.getHeight()};var realIndex=modelOption.orient==='horizontal'?1:0;var reals=paramsSet[realIndex];var fakeValue=[0,null,10];var layoutInput={};for(var i=0;i<3;i++){layoutInput[paramsSet[1-realIndex][i]]=fakeValue[i];layoutInput[reals[i]]=i===2?itemSize[0]:modelOption[reals[i]];}var rParam=[['x','width',3],['y','height',0]][realIndex];var rect=(0,layout/* getLayoutRect */.ME)(layoutInput,ecSize,modelOption.padding);return reals[(rect.margin[rParam[2]]||0)+rect[rParam[0]]+rect[rParam[1]]*0.5<ecSize[rParam[1]]*0.5?0:1];}/**
 * Prepare dataIndex for outside usage, where dataIndex means rawIndex, and
 * dataIndexInside means filtered index.
 */ // TODO: TYPE more specified payload types.
function makeHighDownBatch(batch,visualMapModel){util/* each */.S6(batch||[],function(batchItem){if(batchItem.dataIndex!=null){batchItem.dataIndexInside=batchItem.dataIndex;batchItem.dataIndex=null;}batchItem.highlightKey='visualMap'+(visualMapModel?visualMapModel.componentIndex:'');});return batch;}
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(20194);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(33518);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(30122);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/ContinuousView.js
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
*/var ContinuousView_linearMap=number/* linearMap */.NU;var ContinuousView_each=util/* each */.S6;var mathMin=Math.min;var mathMax=Math.max;// Arbitrary value
var HOVER_LINK_SIZE=12;var HOVER_LINK_OUT=6;// Notice:
// Any "interval" should be by the order of [low, high].
// "handle0" (handleIndex === 0) maps to
// low data value: this._dataInterval[0] and has low coord.
// "handle1" (handleIndex === 1) maps to
// high data value: this._dataInterval[1] and has high coord.
// The logic of transform is implemented in this._createBarGroup.
var ContinuousView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ContinuousView,_super);function ContinuousView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=ContinuousView.type;_this._shapes={};_this._dataInterval=[];_this._handleEnds=[];_this._hoverLinkDataIndices=[];return _this;}ContinuousView.prototype.doRender=function(visualMapModel,ecModel,api,payload){this._api=api;if(!payload||payload.type!=='selectDataRange'||payload.from!==this.uid){this._buildView();}};ContinuousView.prototype._buildView=function(){this.group.removeAll();var visualMapModel=this.visualMapModel;var thisGroup=this.group;this._orient=visualMapModel.get('orient');this._useHandle=visualMapModel.get('calculable');this._resetInterval();this._renderBar(thisGroup);var dataRangeText=visualMapModel.get('text');this._renderEndsText(thisGroup,dataRangeText,0);this._renderEndsText(thisGroup,dataRangeText,1);// Do this for background size calculation.
this._updateView(true);// After updating view, inner shapes is built completely,
// and then background can be rendered.
this.renderBackground(thisGroup);// Real update view
this._updateView();this._enableHoverLinkToSeries();this._enableHoverLinkFromSeries();this.positionGroup(thisGroup);};ContinuousView.prototype._renderEndsText=function(group,dataRangeText,endsIndex){if(!dataRangeText){return;}// Compatible with ec2, text[0] map to high value, text[1] map low value.
var text=dataRangeText[1-endsIndex];text=text!=null?text+'':'';var visualMapModel=this.visualMapModel;var textGap=visualMapModel.get('textGap');var itemSize=visualMapModel.itemSize;var barGroup=this._shapes.mainGroup;var position=this._applyTransform([itemSize[0]/2,endsIndex===0?-textGap:itemSize[1]+textGap],barGroup);var align=this._applyTransform(endsIndex===0?'bottom':'top',barGroup);var orient=this._orient;var textStyleModel=this.visualMapModel.textStyleModel;this.group.add(new Text/* default */.ZP({style:(0,labelStyle/* createTextStyle */.Lr)(textStyleModel,{x:position[0],y:position[1],verticalAlign:orient==='horizontal'?'middle':align,align:orient==='horizontal'?align:'center',text:text})}));};ContinuousView.prototype._renderBar=function(targetGroup){var visualMapModel=this.visualMapModel;var shapes=this._shapes;var itemSize=visualMapModel.itemSize;var orient=this._orient;var useHandle=this._useHandle;var itemAlign=getItemAlign(visualMapModel,this.api,itemSize);var mainGroup=shapes.mainGroup=this._createBarGroup(itemAlign);var gradientBarGroup=new Group/* default */.Z();mainGroup.add(gradientBarGroup);// Bar
gradientBarGroup.add(shapes.outOfRange=createPolygon());gradientBarGroup.add(shapes.inRange=createPolygon(null,useHandle?getCursor(this._orient):null,util/* bind */.ak(this._dragHandle,this,'all',false),util/* bind */.ak(this._dragHandle,this,'all',true)));// A border radius clip.
gradientBarGroup.setClipPath(new Rect/* default */.Z({shape:{x:0,y:0,width:itemSize[0],height:itemSize[1],r:3}}));var textRect=visualMapModel.textStyleModel.getTextRect('国');var textSize=mathMax(textRect.width,textRect.height);// Handle
if(useHandle){shapes.handleThumbs=[];shapes.handleLabels=[];shapes.handleLabelPoints=[];this._createHandle(visualMapModel,mainGroup,0,itemSize,textSize,orient);this._createHandle(visualMapModel,mainGroup,1,itemSize,textSize,orient);}this._createIndicator(visualMapModel,mainGroup,itemSize,textSize,orient);targetGroup.add(mainGroup);};ContinuousView.prototype._createHandle=function(visualMapModel,mainGroup,handleIndex,itemSize,textSize,orient){var onDrift=util/* bind */.ak(this._dragHandle,this,handleIndex,false);var onDragEnd=util/* bind */.ak(this._dragHandle,this,handleIndex,true);var handleSize=(0,contain_text/* parsePercent */.GM)(visualMapModel.get('handleSize'),itemSize[0]);var handleThumb=(0,symbol/* createSymbol */.th)(visualMapModel.get('handleIcon'),-handleSize/2,-handleSize/2,handleSize,handleSize,null,true);var cursor=getCursor(this._orient);handleThumb.attr({cursor:cursor,draggable:true,drift:onDrift,ondragend:onDragEnd,onmousemove:function onmousemove(e){core_event/* stop */.sT(e.event);}});handleThumb.x=itemSize[0]/2;handleThumb.useStyle(visualMapModel.getModel('handleStyle').getItemStyle());handleThumb.setStyle({strokeNoScale:true,strokeFirst:true});handleThumb.style.lineWidth*=2;handleThumb.ensureState('emphasis').style=visualMapModel.getModel(['emphasis','handleStyle']).getItemStyle();(0,states/* setAsHighDownDispatcher */.Nj)(handleThumb,true);mainGroup.add(handleThumb);// Text is always horizontal layout but should not be effected by
// transform (orient/inverse). So label is built separately but not
// use zrender/graphic/helper/RectText, and is located based on view
// group (according to handleLabelPoint) but not barGroup.
var textStyleModel=this.visualMapModel.textStyleModel;var handleLabel=new Text/* default */.ZP({cursor:cursor,draggable:true,drift:onDrift,onmousemove:function onmousemove(e){// Fot mobile devicem, prevent screen slider on the button.
core_event/* stop */.sT(e.event);},ondragend:onDragEnd,style:(0,labelStyle/* createTextStyle */.Lr)(textStyleModel,{x:0,y:0,text:''})});handleLabel.ensureState('blur').style={opacity:0.1};handleLabel.stateTransition={duration:200};this.group.add(handleLabel);var handleLabelPoint=[handleSize,0];var shapes=this._shapes;shapes.handleThumbs[handleIndex]=handleThumb;shapes.handleLabelPoints[handleIndex]=handleLabelPoint;shapes.handleLabels[handleIndex]=handleLabel;};ContinuousView.prototype._createIndicator=function(visualMapModel,mainGroup,itemSize,textSize,orient){var scale=(0,contain_text/* parsePercent */.GM)(visualMapModel.get('indicatorSize'),itemSize[0]);var indicator=(0,symbol/* createSymbol */.th)(visualMapModel.get('indicatorIcon'),-scale/2,-scale/2,scale,scale,null,true);indicator.attr({cursor:'move',invisible:true,silent:true,x:itemSize[0]/2});var indicatorStyle=visualMapModel.getModel('indicatorStyle').getItemStyle();if(indicator instanceof Image/* default */.ZP){var pathStyle=indicator.style;indicator.useStyle(util/* extend */.l7({// TODO other properties like x, y ?
image:pathStyle.image,x:pathStyle.x,y:pathStyle.y,width:pathStyle.width,height:pathStyle.height},indicatorStyle));}else{indicator.useStyle(indicatorStyle);}mainGroup.add(indicator);var textStyleModel=this.visualMapModel.textStyleModel;var indicatorLabel=new Text/* default */.ZP({silent:true,invisible:true,style:(0,labelStyle/* createTextStyle */.Lr)(textStyleModel,{x:0,y:0,text:''})});this.group.add(indicatorLabel);var indicatorLabelPoint=[(orient==='horizontal'?textSize/2:HOVER_LINK_OUT)+itemSize[0]/2,0];var shapes=this._shapes;shapes.indicator=indicator;shapes.indicatorLabel=indicatorLabel;shapes.indicatorLabelPoint=indicatorLabelPoint;this._firstShowIndicator=true;};ContinuousView.prototype._dragHandle=function(handleIndex,isEnd,// dx is event from ondragend if isEnd is true. It's not used
dx,dy){if(!this._useHandle){return;}this._dragging=!isEnd;if(!isEnd){// Transform dx, dy to bar coordination.
var vertex=this._applyTransform([dx,dy],this._shapes.mainGroup,true);this._updateInterval(handleIndex,vertex[1]);this._hideIndicator();// Considering realtime, update view should be executed
// before dispatch action.
this._updateView();}// dragEnd do not dispatch action when realtime.
if(isEnd===!this.visualMapModel.get('realtime')){// jshint ignore:line
this.api.dispatchAction({type:'selectDataRange',from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()});}if(isEnd){!this._hovering&&this._clearHoverLinkToSeries();}else if(useHoverLinkOnHandle(this.visualMapModel)){this._doHoverLinkToSeries(this._handleEnds[handleIndex],false);}};ContinuousView.prototype._resetInterval=function(){var visualMapModel=this.visualMapModel;var dataInterval=this._dataInterval=visualMapModel.getSelected();var dataExtent=visualMapModel.getExtent();var sizeExtent=[0,visualMapModel.itemSize[1]];this._handleEnds=[ContinuousView_linearMap(dataInterval[0],dataExtent,sizeExtent,true),ContinuousView_linearMap(dataInterval[1],dataExtent,sizeExtent,true)];};/**
   * @private
   * @param {(number|string)} handleIndex 0 or 1 or 'all'
   * @param {number} dx
   * @param {number} dy
   */ContinuousView.prototype._updateInterval=function(handleIndex,delta){delta=delta||0;var visualMapModel=this.visualMapModel;var handleEnds=this._handleEnds;var sizeExtent=[0,visualMapModel.itemSize[1]];sliderMove(delta,handleEnds,sizeExtent,handleIndex,// cross is forbiden
0);var dataExtent=visualMapModel.getExtent();// Update data interval.
this._dataInterval=[ContinuousView_linearMap(handleEnds[0],sizeExtent,dataExtent,true),ContinuousView_linearMap(handleEnds[1],sizeExtent,dataExtent,true)];};ContinuousView.prototype._updateView=function(forSketch){var visualMapModel=this.visualMapModel;var dataExtent=visualMapModel.getExtent();var shapes=this._shapes;var outOfRangeHandleEnds=[0,visualMapModel.itemSize[1]];var inRangeHandleEnds=forSketch?outOfRangeHandleEnds:this._handleEnds;var visualInRange=this._createBarVisual(this._dataInterval,dataExtent,inRangeHandleEnds,'inRange');var visualOutOfRange=this._createBarVisual(dataExtent,dataExtent,outOfRangeHandleEnds,'outOfRange');shapes.inRange.setStyle({fill:visualInRange.barColor// opacity: visualInRange.opacity
}).setShape('points',visualInRange.barPoints);shapes.outOfRange.setStyle({fill:visualOutOfRange.barColor// opacity: visualOutOfRange.opacity
}).setShape('points',visualOutOfRange.barPoints);this._updateHandle(inRangeHandleEnds,visualInRange);};ContinuousView.prototype._createBarVisual=function(dataInterval,dataExtent,handleEnds,forceState){var opts={forceState:forceState,convertOpacityToAlpha:true};var colorStops=this._makeColorGradient(dataInterval,opts);var symbolSizes=[this.getControllerVisual(dataInterval[0],'symbolSize',opts),this.getControllerVisual(dataInterval[1],'symbolSize',opts)];var barPoints=this._createBarPoints(handleEnds,symbolSizes);return{barColor:new LinearGradient/* default */.Z(0,0,0,1,colorStops),barPoints:barPoints,handlesColor:[colorStops[0].color,colorStops[colorStops.length-1].color]};};ContinuousView.prototype._makeColorGradient=function(dataInterval,opts){// Considering colorHue, which is not linear, so we have to sample
// to calculate gradient color stops, but not only caculate head
// and tail.
var sampleNumber=100;// Arbitrary value.
var colorStops=[];var step=(dataInterval[1]-dataInterval[0])/sampleNumber;colorStops.push({color:this.getControllerVisual(dataInterval[0],'color',opts),offset:0});for(var i=1;i<sampleNumber;i++){var currValue=dataInterval[0]+step*i;if(currValue>dataInterval[1]){break;}colorStops.push({color:this.getControllerVisual(currValue,'color',opts),offset:i/sampleNumber});}colorStops.push({color:this.getControllerVisual(dataInterval[1],'color',opts),offset:1});return colorStops;};ContinuousView.prototype._createBarPoints=function(handleEnds,symbolSizes){var itemSize=this.visualMapModel.itemSize;return[[itemSize[0]-symbolSizes[0],handleEnds[0]],[itemSize[0],handleEnds[0]],[itemSize[0],handleEnds[1]],[itemSize[0]-symbolSizes[1],handleEnds[1]]];};ContinuousView.prototype._createBarGroup=function(itemAlign){var orient=this._orient;var inverse=this.visualMapModel.get('inverse');return new Group/* default */.Z(orient==='horizontal'&&!inverse?{scaleX:itemAlign==='bottom'?1:-1,rotation:Math.PI/2}:orient==='horizontal'&&inverse?{scaleX:itemAlign==='bottom'?-1:1,rotation:-Math.PI/2}:orient==='vertical'&&!inverse?{scaleX:itemAlign==='left'?1:-1,scaleY:-1}:{scaleX:itemAlign==='left'?1:-1});};ContinuousView.prototype._updateHandle=function(handleEnds,visualInRange){if(!this._useHandle){return;}var shapes=this._shapes;var visualMapModel=this.visualMapModel;var handleThumbs=shapes.handleThumbs;var handleLabels=shapes.handleLabels;var itemSize=visualMapModel.itemSize;var dataExtent=visualMapModel.getExtent();ContinuousView_each([0,1],function(handleIndex){var handleThumb=handleThumbs[handleIndex];handleThumb.setStyle('fill',visualInRange.handlesColor[handleIndex]);handleThumb.y=handleEnds[handleIndex];var val=ContinuousView_linearMap(handleEnds[handleIndex],[0,itemSize[1]],dataExtent,true);var symbolSize=this.getControllerVisual(val,'symbolSize');handleThumb.scaleX=handleThumb.scaleY=symbolSize/itemSize[0];handleThumb.x=itemSize[0]-symbolSize/2;// Update handle label position.
var textPoint=graphic.applyTransform(shapes.handleLabelPoints[handleIndex],graphic.getTransform(handleThumb,this.group));handleLabels[handleIndex].setStyle({x:textPoint[0],y:textPoint[1],text:visualMapModel.formatValueText(this._dataInterval[handleIndex]),verticalAlign:'middle',align:this._orient==='vertical'?this._applyTransform('left',shapes.mainGroup):'center'});},this);};ContinuousView.prototype._showIndicator=function(cursorValue,textValue,rangeSymbol,halfHoverLinkSize){var visualMapModel=this.visualMapModel;var dataExtent=visualMapModel.getExtent();var itemSize=visualMapModel.itemSize;var sizeExtent=[0,itemSize[1]];var shapes=this._shapes;var indicator=shapes.indicator;if(!indicator){return;}indicator.attr('invisible',false);var opts={convertOpacityToAlpha:true};var color=this.getControllerVisual(cursorValue,'color',opts);var symbolSize=this.getControllerVisual(cursorValue,'symbolSize');var y=ContinuousView_linearMap(cursorValue,dataExtent,sizeExtent,true);var x=itemSize[0]-symbolSize/2;var oldIndicatorPos={x:indicator.x,y:indicator.y};// Update handle label position.
indicator.y=y;indicator.x=x;var textPoint=graphic.applyTransform(shapes.indicatorLabelPoint,graphic.getTransform(indicator,this.group));var indicatorLabel=shapes.indicatorLabel;indicatorLabel.attr('invisible',false);var align=this._applyTransform('left',shapes.mainGroup);var orient=this._orient;var isHorizontal=orient==='horizontal';indicatorLabel.setStyle({text:(rangeSymbol?rangeSymbol:'')+visualMapModel.formatValueText(textValue),verticalAlign:isHorizontal?align:'middle',align:isHorizontal?'center':align});var indicatorNewProps={x:x,y:y,style:{fill:color}};var labelNewProps={style:{x:textPoint[0],y:textPoint[1]}};if(visualMapModel.ecModel.isAnimationEnabled()&&!this._firstShowIndicator){var animationCfg={duration:100,easing:'cubicInOut',additive:true};indicator.x=oldIndicatorPos.x;indicator.y=oldIndicatorPos.y;indicator.animateTo(indicatorNewProps,animationCfg);indicatorLabel.animateTo(labelNewProps,animationCfg);}else{indicator.attr(indicatorNewProps);indicatorLabel.attr(labelNewProps);}this._firstShowIndicator=false;var handleLabels=this._shapes.handleLabels;if(handleLabels){for(var i=0;i<handleLabels.length;i++){// Fade out handle labels.
// NOTE: Must use api enter/leave on emphasis/blur/select state. Or the global states manager will change it.
this._api.enterBlur(handleLabels[i]);}}};ContinuousView.prototype._enableHoverLinkToSeries=function(){var self=this;this._shapes.mainGroup.on('mousemove',function(e){self._hovering=true;if(!self._dragging){var itemSize=self.visualMapModel.itemSize;var pos=self._applyTransform([e.offsetX,e.offsetY],self._shapes.mainGroup,true,true);// For hover link show when hover handle, which might be
// below or upper than sizeExtent.
pos[1]=mathMin(mathMax(0,pos[1]),itemSize[1]);self._doHoverLinkToSeries(pos[1],0<=pos[0]&&pos[0]<=itemSize[0]);}}).on('mouseout',function(){// When mouse is out of handle, hoverLink still need
// to be displayed when realtime is set as false.
self._hovering=false;!self._dragging&&self._clearHoverLinkToSeries();});};ContinuousView.prototype._enableHoverLinkFromSeries=function(){var zr=this.api.getZr();if(this.visualMapModel.option.hoverLink){zr.on('mouseover',this._hoverLinkFromSeriesMouseOver,this);zr.on('mouseout',this._hideIndicator,this);}else{this._clearHoverLinkFromSeries();}};ContinuousView.prototype._doHoverLinkToSeries=function(cursorPos,hoverOnBar){var visualMapModel=this.visualMapModel;var itemSize=visualMapModel.itemSize;if(!visualMapModel.option.hoverLink){return;}var sizeExtent=[0,itemSize[1]];var dataExtent=visualMapModel.getExtent();// For hover link show when hover handle, which might be below or upper than sizeExtent.
cursorPos=mathMin(mathMax(sizeExtent[0],cursorPos),sizeExtent[1]);var halfHoverLinkSize=getHalfHoverLinkSize(visualMapModel,dataExtent,sizeExtent);var hoverRange=[cursorPos-halfHoverLinkSize,cursorPos+halfHoverLinkSize];var cursorValue=ContinuousView_linearMap(cursorPos,sizeExtent,dataExtent,true);var valueRange=[ContinuousView_linearMap(hoverRange[0],sizeExtent,dataExtent,true),ContinuousView_linearMap(hoverRange[1],sizeExtent,dataExtent,true)];// Consider data range is out of visualMap range, see test/visualMap-continuous.html,
// where china and india has very large population.
hoverRange[0]<sizeExtent[0]&&(valueRange[0]=-Infinity);hoverRange[1]>sizeExtent[1]&&(valueRange[1]=Infinity);// Do not show indicator when mouse is over handle,
// otherwise labels overlap, especially when dragging.
if(hoverOnBar){if(valueRange[0]===-Infinity){this._showIndicator(cursorValue,valueRange[1],'< ',halfHoverLinkSize);}else if(valueRange[1]===Infinity){this._showIndicator(cursorValue,valueRange[0],'> ',halfHoverLinkSize);}else{this._showIndicator(cursorValue,cursorValue,'≈ ',halfHoverLinkSize);}}// When realtime is set as false, handles, which are in barGroup,
// also trigger hoverLink, which help user to realize where they
// focus on when dragging. (see test/heatmap-large.html)
// When realtime is set as true, highlight will not show when hover
// handle, because the label on handle, which displays a exact value
// but not range, might mislead users.
var oldBatch=this._hoverLinkDataIndices;var newBatch=[];if(hoverOnBar||useHoverLinkOnHandle(visualMapModel)){newBatch=this._hoverLinkDataIndices=visualMapModel.findTargetDataIndices(valueRange);}var resultBatches=model/* compressBatches */.XI(oldBatch,newBatch);this._dispatchHighDown('downplay',makeHighDownBatch(resultBatches[0],visualMapModel));this._dispatchHighDown('highlight',makeHighDownBatch(resultBatches[1],visualMapModel));};ContinuousView.prototype._hoverLinkFromSeriesMouseOver=function(e){var el=e.target;var visualMapModel=this.visualMapModel;if(!el||(0,innerStore/* getECData */.A)(el).dataIndex==null){return;}var ecData=(0,innerStore/* getECData */.A)(el);var dataModel=this.ecModel.getSeriesByIndex(ecData.seriesIndex);if(!visualMapModel.isTargetSeries(dataModel)){return;}var data=dataModel.getData(ecData.dataType);var value=data.getStore().get(visualMapModel.getDataDimensionIndex(data),ecData.dataIndex);if(!isNaN(value)){this._showIndicator(value,value);}};ContinuousView.prototype._hideIndicator=function(){var shapes=this._shapes;shapes.indicator&&shapes.indicator.attr('invisible',true);shapes.indicatorLabel&&shapes.indicatorLabel.attr('invisible',true);var handleLabels=this._shapes.handleLabels;if(handleLabels){for(var i=0;i<handleLabels.length;i++){// Fade out handle labels.
// NOTE: Must use api enter/leave on emphasis/blur/select state. Or the global states manager will change it.
this._api.leaveBlur(handleLabels[i]);}}};ContinuousView.prototype._clearHoverLinkToSeries=function(){this._hideIndicator();var indices=this._hoverLinkDataIndices;this._dispatchHighDown('downplay',makeHighDownBatch(indices,this.visualMapModel));indices.length=0;};ContinuousView.prototype._clearHoverLinkFromSeries=function(){this._hideIndicator();var zr=this.api.getZr();zr.off('mouseover',this._hoverLinkFromSeriesMouseOver);zr.off('mouseout',this._hideIndicator);};ContinuousView.prototype._applyTransform=function(vertex,element,inverse,global){var transform=graphic.getTransform(element,global?null:this.group);return util/* isArray */.kJ(vertex)?graphic.applyTransform(vertex,transform,inverse):graphic.transformDirection(vertex,transform,inverse);};// TODO: TYPE more specified payload types.
ContinuousView.prototype._dispatchHighDown=function(type,batch){batch&&batch.length&&this.api.dispatchAction({type:type,batch:batch});};/**
   * @override
   */ContinuousView.prototype.dispose=function(){this._clearHoverLinkFromSeries();this._clearHoverLinkToSeries();};/**
   * @override
   */ContinuousView.prototype.remove=function(){this._clearHoverLinkFromSeries();this._clearHoverLinkToSeries();};ContinuousView.type='visualMap.continuous';return ContinuousView;}(visualMap_VisualMapView);function createPolygon(points,cursor,onDrift,onDragEnd){return new Polygon/* default */.Z({shape:{points:points},draggable:!!onDrift,cursor:cursor,drift:onDrift,onmousemove:function onmousemove(e){// Fot mobile devicem, prevent screen slider on the button.
core_event/* stop */.sT(e.event);},ondragend:onDragEnd});}function getHalfHoverLinkSize(visualMapModel,dataExtent,sizeExtent){var halfHoverLinkSize=HOVER_LINK_SIZE/2;var hoverLinkDataSize=visualMapModel.get('hoverLinkDataSize');if(hoverLinkDataSize){halfHoverLinkSize=ContinuousView_linearMap(hoverLinkDataSize,dataExtent,sizeExtent,true)/2;}return halfHoverLinkSize;}function useHoverLinkOnHandle(visualMapModel){var hoverLinkOnHandle=visualMapModel.get('hoverLinkOnHandle');return!!(hoverLinkOnHandle==null?visualMapModel.get('realtime'):hoverLinkOnHandle);}function getCursor(orient){return orient==='vertical'?'ns-resize':'ew-resize';}/* harmony default export */ const visualMap_ContinuousView = (ContinuousView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/visualMapAction.js
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
*/var visualMapActionInfo={type:'selectDataRange',event:'dataRangeSelected',// FIXME use updateView appears wrong
update:'update'};var visualMapActionHander=function visualMapActionHander(payload,ecModel){ecModel.eachComponent({mainType:'visualMap',query:payload},function(model){model.setSelected(payload.selected);});};
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(80578);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/visualEncoding.js
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
*/var visualMapEncodingHandlers=[{createOnAllSeries:true,reset:function reset(seriesModel,ecModel){var resetDefines=[];ecModel.eachComponent('visualMap',function(visualMapModel){var pipelineContext=seriesModel.pipelineContext;if(!visualMapModel.isTargetSeries(seriesModel)||pipelineContext&&pipelineContext.large){return;}resetDefines.push(visualSolution/* incrementalApplyVisual */.Z7(visualMapModel.stateList,visualMapModel.targetVisuals,util/* bind */.ak(visualMapModel.getValueState,visualMapModel),visualMapModel.getDataDimensionIndex(seriesModel.getData())));});return resetDefines;}},// Only support color.
{createOnAllSeries:true,reset:function reset(seriesModel,ecModel){var data=seriesModel.getData();var visualMetaList=[];ecModel.eachComponent('visualMap',function(visualMapModel){if(visualMapModel.isTargetSeries(seriesModel)){var visualMeta=visualMapModel.getVisualMeta(util/* bind */.ak(getColorVisual,null,seriesModel,visualMapModel))||{stops:[],outerColors:[]};var dimIdx=visualMapModel.getDataDimensionIndex(data);if(dimIdx>=0){// visualMeta.dimension should be dimension index, but not concrete dimension.
visualMeta.dimension=dimIdx;visualMetaList.push(visualMeta);}}});// console.log(JSON.stringify(visualMetaList.map(a => a.stops)));
seriesModel.getData().setVisual('visualMeta',visualMetaList);}}];// FIXME
// performance and export for heatmap?
// value can be Infinity or -Infinity
function getColorVisual(seriesModel,visualMapModel,value,valueState){var mappings=visualMapModel.targetVisuals[valueState];var visualTypes=VisualMapping/* default.prepareVisualTypes */.Z.prepareVisualTypes(mappings);var resultVisual={color:(0,helper/* getVisualFromData */.UL)(seriesModel.getData(),'color')// default color.
};for(var i=0,len=visualTypes.length;i<len;i++){var type=visualTypes[i];var mapping=mappings[type==='opacity'?'__alphaForOpacity':type];mapping&&mapping.applyVisual(value,getVisual,setVisual);}return resultVisual.color;function getVisual(key){return resultVisual[key];}function setVisual(key,value){resultVisual[key]=value;}}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/preprocessor.js
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
*/ // @ts-nocheck
var preprocessor_each=util/* each */.S6;function visualMapPreprocessor(option){var visualMap=option&&option.visualMap;if(!util/* isArray */.kJ(visualMap)){visualMap=visualMap?[visualMap]:[];}preprocessor_each(visualMap,function(opt){if(!opt){return;}// rename splitList to pieces
if(has(opt,'splitList')&&!has(opt,'pieces')){opt.pieces=opt.splitList;delete opt.splitList;}var pieces=opt.pieces;if(pieces&&util/* isArray */.kJ(pieces)){preprocessor_each(pieces,function(piece){if(util/* isObject */.Kn(piece)){if(has(piece,'start')&&!has(piece,'min')){piece.min=piece.start;}if(has(piece,'end')&&!has(piece,'max')){piece.max=piece.end;}}});}});}function has(obj,name){return obj&&obj.hasOwnProperty&&obj.hasOwnProperty(name);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/installCommon.js
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
*/var installed=false;function installCommon(registers){if(installed){return;}installed=true;registers.registerSubTypeDefaulter('visualMap',function(option){// Compatible with ec2, when splitNumber === 0, continuous visualMap will be used.
return!option.categories&&(!(option.pieces?option.pieces.length>0:option.splitNumber>0)||option.calculable)?'continuous':'piecewise';});registers.registerAction(visualMapActionInfo,visualMapActionHander);(0,util/* each */.S6)(visualMapEncodingHandlers,function(handler){registers.registerVisual(registers.PRIORITY.VISUAL.COMPONENT,handler);});registers.registerPreprocessor(visualMapPreprocessor);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js
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
*/function install(registers){registers.registerComponentModel(visualMap_ContinuousModel);registers.registerComponentView(visualMap_ContinuousView);installCommon(registers);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/PiecewiseModel.js
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
*/var PiecewiseModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(PiecewiseModel,_super);function PiecewiseModel(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=PiecewiseModel.type;/**
     * The order is always [low, ..., high].
     * [{text: string, interval: Array.<number>}, ...]
     */_this._pieceList=[];return _this;}PiecewiseModel.prototype.optionUpdated=function(newOption,isInit){_super.prototype.optionUpdated.apply(this,arguments);this.resetExtent();var mode=this._mode=this._determineMode();this._pieceList=[];resetMethods[this._mode].call(this,this._pieceList);this._resetSelected(newOption,isInit);var categories=this.option.categories;this.resetVisual(function(mappingOption,state){if(mode==='categories'){mappingOption.mappingMethod='category';mappingOption.categories=util/* clone */.d9(categories);}else{mappingOption.dataExtent=this.getExtent();mappingOption.mappingMethod='piecewise';mappingOption.pieceList=util/* map */.UI(this._pieceList,function(piece){piece=util/* clone */.d9(piece);if(state!=='inRange'){// FIXME
// outOfRange do not support special visual in pieces.
piece.visual=null;}return piece;});}});};/**
   * @protected
   * @override
   */PiecewiseModel.prototype.completeVisualOption=function(){// Consider this case:
// visualMap: {
//      pieces: [{symbol: 'circle', lt: 0}, {symbol: 'rect', gte: 0}]
// }
// where no inRange/outOfRange set but only pieces. So we should make
// default inRange/outOfRange for this case, otherwise visuals that only
// appear in `pieces` will not be taken into account in visual encoding.
var option=this.option;var visualTypesInPieces={};var visualTypes=VisualMapping/* default.listVisualTypes */.Z.listVisualTypes();var isCategory=this.isCategory();util/* each */.S6(option.pieces,function(piece){util/* each */.S6(visualTypes,function(visualType){if(piece.hasOwnProperty(visualType)){visualTypesInPieces[visualType]=1;}});});util/* each */.S6(visualTypesInPieces,function(v,visualType){var exists=false;util/* each */.S6(this.stateList,function(state){exists=exists||has(option,state,visualType)||has(option.target,state,visualType);},this);!exists&&util/* each */.S6(this.stateList,function(state){(option[state]||(option[state]={}))[visualType]=visualDefault/* default.get */.Z.get(visualType,state==='inRange'?'active':'inactive',isCategory);});},this);function has(obj,state,visualType){return obj&&obj[state]&&obj[state].hasOwnProperty(visualType);}_super.prototype.completeVisualOption.apply(this,arguments);};PiecewiseModel.prototype._resetSelected=function(newOption,isInit){var thisOption=this.option;var pieceList=this._pieceList;// Selected do not merge but all override.
var selected=(isInit?thisOption:newOption).selected||{};thisOption.selected=selected;// Consider 'not specified' means true.
util/* each */.S6(pieceList,function(piece,index){var key=this.getSelectedMapKey(piece);if(!selected.hasOwnProperty(key)){selected[key]=true;}},this);if(thisOption.selectedMode==='single'){// Ensure there is only one selected.
var hasSel_1=false;util/* each */.S6(pieceList,function(piece,index){var key=this.getSelectedMapKey(piece);if(selected[key]){hasSel_1?selected[key]=false:hasSel_1=true;}},this);}// thisOption.selectedMode === 'multiple', default: all selected.
};/**
   * @public
   */PiecewiseModel.prototype.getItemSymbol=function(){return this.get('itemSymbol');};/**
   * @public
   */PiecewiseModel.prototype.getSelectedMapKey=function(piece){return this._mode==='categories'?piece.value+'':piece.index+'';};/**
   * @public
   */PiecewiseModel.prototype.getPieceList=function(){return this._pieceList;};/**
   * @return {string}
   */PiecewiseModel.prototype._determineMode=function(){var option=this.option;return option.pieces&&option.pieces.length>0?'pieces':this.option.categories?'categories':'splitNumber';};/**
   * @override
   */PiecewiseModel.prototype.setSelected=function(selected){this.option.selected=util/* clone */.d9(selected);};/**
   * @override
   */PiecewiseModel.prototype.getValueState=function(value){var index=VisualMapping/* default.findPieceIndex */.Z.findPieceIndex(value,this._pieceList);return index!=null?this.option.selected[this.getSelectedMapKey(this._pieceList[index])]?'inRange':'outOfRange':'outOfRange';};/**
   * @public
   * @param pieceIndex piece index in visualMapModel.getPieceList()
   */PiecewiseModel.prototype.findTargetDataIndices=function(pieceIndex){var result=[];var pieceList=this._pieceList;this.eachTargetSeries(function(seriesModel){var dataIndices=[];var data=seriesModel.getData();data.each(this.getDataDimensionIndex(data),function(value,dataIndex){// Should always base on model pieceList, because it is order sensitive.
var pIdx=VisualMapping/* default.findPieceIndex */.Z.findPieceIndex(value,pieceList);pIdx===pieceIndex&&dataIndices.push(dataIndex);},this);result.push({seriesId:seriesModel.id,dataIndex:dataIndices});},this);return result;};/**
   * @private
   * @param piece piece.value or piece.interval is required.
   * @return  Can be Infinity or -Infinity
   */PiecewiseModel.prototype.getRepresentValue=function(piece){var representValue;if(this.isCategory()){representValue=piece.value;}else{if(piece.value!=null){representValue=piece.value;}else{var pieceInterval=piece.interval||[];representValue=pieceInterval[0]===-Infinity&&pieceInterval[1]===Infinity?0:(pieceInterval[0]+pieceInterval[1])/2;}}return representValue;};PiecewiseModel.prototype.getVisualMeta=function(getColorVisual){// Do not support category. (category axis is ordinal, numerical)
if(this.isCategory()){return;}var stops=[];var outerColors=['',''];var visualMapModel=this;function setStop(interval,valueState){var representValue=visualMapModel.getRepresentValue({interval:interval});// Not category
if(!valueState){valueState=visualMapModel.getValueState(representValue);}var color=getColorVisual(representValue,valueState);if(interval[0]===-Infinity){outerColors[0]=color;}else if(interval[1]===Infinity){outerColors[1]=color;}else{stops.push({value:interval[0],color:color},{value:interval[1],color:color});}}// Suplement
var pieceList=this._pieceList.slice();if(!pieceList.length){pieceList.push({interval:[-Infinity,Infinity]});}else{var edge=pieceList[0].interval[0];edge!==-Infinity&&pieceList.unshift({interval:[-Infinity,edge]});edge=pieceList[pieceList.length-1].interval[1];edge!==Infinity&&pieceList.push({interval:[edge,Infinity]});}var curr=-Infinity;util/* each */.S6(pieceList,function(piece){var interval=piece.interval;if(interval){// Fulfill gap.
interval[0]>curr&&setStop([curr,interval[0]],'outOfRange');setStop(interval.slice());curr=interval[1];}},this);return{stops:stops,outerColors:outerColors};};PiecewiseModel.type='visualMap.piecewise';PiecewiseModel.defaultOption=(0,component/* inheritDefaultOption */.ZL)(visualMap_VisualMapModel.defaultOption,{selected:null,minOpen:false,maxOpen:false,align:'auto',itemWidth:20,itemHeight:14,itemSymbol:'roundRect',pieces:null,categories:null,splitNumber:5,selectedMode:'multiple',itemGap:10,hoverLink:true// Enable hover highlight.
});return PiecewiseModel;}(visualMap_VisualMapModel);;/**
 * Key is this._mode
 * @type {Object}
 * @this {module:echarts/component/viusalMap/PiecewiseMode}
 */var resetMethods={splitNumber:function splitNumber(outPieceList){var thisOption=this.option;var precision=Math.min(thisOption.precision,20);var dataExtent=this.getExtent();var splitNumber=thisOption.splitNumber;splitNumber=Math.max(parseInt(splitNumber,10),1);thisOption.splitNumber=splitNumber;var splitStep=(dataExtent[1]-dataExtent[0])/splitNumber;// Precision auto-adaption
while(+splitStep.toFixed(precision)!==splitStep&&precision<5){precision++;}thisOption.precision=precision;splitStep=+splitStep.toFixed(precision);if(thisOption.minOpen){outPieceList.push({interval:[-Infinity,dataExtent[0]],close:[0,0]});}for(var index=0,curr=dataExtent[0];index<splitNumber;curr+=splitStep,index++){var max=index===splitNumber-1?dataExtent[1]:curr+splitStep;outPieceList.push({interval:[curr,max],close:[1,1]});}if(thisOption.maxOpen){outPieceList.push({interval:[dataExtent[1],Infinity],close:[0,0]});}(0,number/* reformIntervals */.nR)(outPieceList);util/* each */.S6(outPieceList,function(piece,index){piece.index=index;piece.text=this.formatValueText(piece.interval);},this);},categories:function categories(outPieceList){var thisOption=this.option;util/* each */.S6(thisOption.categories,function(cate){// FIXME category模式也使用pieceList，但在visualMapping中不是使用pieceList。
// 是否改一致。
outPieceList.push({text:this.formatValueText(cate,true),value:cate});},this);// See "Order Rule".
normalizeReverse(thisOption,outPieceList);},pieces:function pieces(outPieceList){var thisOption=this.option;util/* each */.S6(thisOption.pieces,function(pieceListItem,index){if(!util/* isObject */.Kn(pieceListItem)){pieceListItem={value:pieceListItem};}var item={text:'',index:index};if(pieceListItem.label!=null){item.text=pieceListItem.label;}if(pieceListItem.hasOwnProperty('value')){var value=item.value=pieceListItem.value;item.interval=[value,value];item.close=[1,1];}else{// `min` `max` is legacy option.
// `lt` `gt` `lte` `gte` is recommanded.
var interval=item.interval=[];var close_1=item.close=[0,0];var closeList=[1,0,1];var infinityList=[-Infinity,Infinity];var useMinMax=[];for(var lg=0;lg<2;lg++){var names=[['gte','gt','min'],['lte','lt','max']][lg];for(var i=0;i<3&&interval[lg]==null;i++){interval[lg]=pieceListItem[names[i]];close_1[lg]=closeList[i];useMinMax[lg]=i===2;}interval[lg]==null&&(interval[lg]=infinityList[lg]);}useMinMax[0]&&interval[1]===Infinity&&(close_1[0]=0);useMinMax[1]&&interval[0]===-Infinity&&(close_1[1]=0);if(false){}if(interval[0]===interval[1]&&close_1[0]&&close_1[1]){// Consider: [{min: 5, max: 5, visual: {...}}, {min: 0, max: 5}],
// we use value to lift the priority when min === max
item.value=interval[0];}}item.visual=VisualMapping/* default.retrieveVisuals */.Z.retrieveVisuals(pieceListItem);outPieceList.push(item);},this);// See "Order Rule".
normalizeReverse(thisOption,outPieceList);// Only pieces
(0,number/* reformIntervals */.nR)(outPieceList);util/* each */.S6(outPieceList,function(piece){var close=piece.close;var edgeSymbols=[['<','≤'][close[1]],['>','≥'][close[0]]];piece.text=piece.text||this.formatValueText(piece.value!=null?piece.value:piece.interval,false,edgeSymbols);},this);}};function normalizeReverse(thisOption,pieceList){var inverse=thisOption.inverse;if(thisOption.orient==='vertical'?!inverse:inverse){pieceList.reverse();}}/* harmony default export */ const visualMap_PiecewiseModel = (PiecewiseModel);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/PiecewiseView.js
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
*/var PiecewiseVisualMapView=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(PiecewiseVisualMapView,_super);function PiecewiseVisualMapView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type=PiecewiseVisualMapView.type;return _this;}PiecewiseVisualMapView.prototype.doRender=function(){var thisGroup=this.group;thisGroup.removeAll();var visualMapModel=this.visualMapModel;var textGap=visualMapModel.get('textGap');var textStyleModel=visualMapModel.textStyleModel;var textFont=textStyleModel.getFont();var textFill=textStyleModel.getTextColor();var itemAlign=this._getItemAlign();var itemSize=visualMapModel.itemSize;var viewData=this._getViewData();var endsText=viewData.endsText;var showLabel=util/* retrieve */.Jv(visualMapModel.get('showLabel',true),!endsText);endsText&&this._renderEndsText(thisGroup,endsText[0],itemSize,showLabel,itemAlign);util/* each */.S6(viewData.viewPieceList,function(item){var piece=item.piece;var itemGroup=new Group/* default */.Z();itemGroup.onclick=util/* bind */.ak(this._onItemClick,this,piece);this._enableHoverLink(itemGroup,item.indexInModelPieceList);// TODO Category
var representValue=visualMapModel.getRepresentValue(piece);this._createItemSymbol(itemGroup,representValue,[0,0,itemSize[0],itemSize[1]]);if(showLabel){var visualState=this.visualMapModel.getValueState(representValue);itemGroup.add(new Text/* default */.ZP({style:{x:itemAlign==='right'?-textGap:itemSize[0]+textGap,y:itemSize[1]/2,text:piece.text,verticalAlign:'middle',align:itemAlign,font:textFont,fill:textFill,opacity:visualState==='outOfRange'?0.5:1}}));}thisGroup.add(itemGroup);},this);endsText&&this._renderEndsText(thisGroup,endsText[1],itemSize,showLabel,itemAlign);layout/* box */.BZ(visualMapModel.get('orient'),thisGroup,visualMapModel.get('itemGap'));this.renderBackground(thisGroup);this.positionGroup(thisGroup);};PiecewiseVisualMapView.prototype._enableHoverLink=function(itemGroup,pieceIndex){var _this=this;itemGroup.on('mouseover',function(){return onHoverLink('highlight');}).on('mouseout',function(){return onHoverLink('downplay');});var onHoverLink=function onHoverLink(method){var visualMapModel=_this.visualMapModel;// TODO: TYPE More detailed action types
visualMapModel.option.hoverLink&&_this.api.dispatchAction({type:method,batch:makeHighDownBatch(visualMapModel.findTargetDataIndices(pieceIndex),visualMapModel)});};};PiecewiseVisualMapView.prototype._getItemAlign=function(){var visualMapModel=this.visualMapModel;var modelOption=visualMapModel.option;if(modelOption.orient==='vertical'){return getItemAlign(visualMapModel,this.api,visualMapModel.itemSize);}else{// horizontal, most case left unless specifying right.
var align=modelOption.align;if(!align||align==='auto'){align='left';}return align;}};PiecewiseVisualMapView.prototype._renderEndsText=function(group,text,itemSize,showLabel,itemAlign){if(!text){return;}var itemGroup=new Group/* default */.Z();var textStyleModel=this.visualMapModel.textStyleModel;itemGroup.add(new Text/* default */.ZP({style:(0,labelStyle/* createTextStyle */.Lr)(textStyleModel,{x:showLabel?itemAlign==='right'?itemSize[0]:0:itemSize[0]/2,y:itemSize[1]/2,verticalAlign:'middle',align:showLabel?itemAlign:'center',text:text})}));group.add(itemGroup);};/**
   * @private
   * @return {Object} {peiceList, endsText} The order is the same as screen pixel order.
   */PiecewiseVisualMapView.prototype._getViewData=function(){var visualMapModel=this.visualMapModel;var viewPieceList=util/* map */.UI(visualMapModel.getPieceList(),function(piece,index){return{piece:piece,indexInModelPieceList:index};});var endsText=visualMapModel.get('text');// Consider orient and inverse.
var orient=visualMapModel.get('orient');var inverse=visualMapModel.get('inverse');// Order of model pieceList is always [low, ..., high]
if(orient==='horizontal'?inverse:!inverse){viewPieceList.reverse();}// Origin order of endsText is [high, low]
else if(endsText){endsText=endsText.slice().reverse();}return{viewPieceList:viewPieceList,endsText:endsText};};PiecewiseVisualMapView.prototype._createItemSymbol=function(group,representValue,shapeParam){group.add((0,symbol/* createSymbol */.th)(// symbol will be string
this.getControllerVisual(representValue,'symbol'),shapeParam[0],shapeParam[1],shapeParam[2],shapeParam[3],// color will be string
this.getControllerVisual(representValue,'color')));};PiecewiseVisualMapView.prototype._onItemClick=function(piece){var visualMapModel=this.visualMapModel;var option=visualMapModel.option;var selectedMode=option.selectedMode;if(!selectedMode){return;}var selected=util/* clone */.d9(option.selected);var newKey=visualMapModel.getSelectedMapKey(piece);if(selectedMode==='single'||selectedMode===true){selected[newKey]=true;util/* each */.S6(selected,function(o,key){selected[key]=key===newKey;});}else{selected[newKey]=!selected[newKey];}this.api.dispatchAction({type:'selectDataRange',from:this.uid,visualMapId:this.visualMapModel.id,selected:selected});};PiecewiseVisualMapView.type='visualMap.piecewise';return PiecewiseVisualMapView;}(visualMap_VisualMapView);/* harmony default export */ const PiecewiseView = (PiecewiseVisualMapView);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js
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
*/function installVisualMapPiecewise_install(registers){registers.registerComponentModel(visualMap_PiecewiseModel);registers.registerComponentView(PiecewiseView);installCommon(registers);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap/install.js
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
*/function install_install(registers){(0,extension/* use */.D)(install);(0,extension/* use */.D)(installVisualMapPiecewise_install);// Do not install './dataZoomSelect',
// since it only work for toolbox dataZoom.
}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/component/visualMap.js
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

/***/ 32266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ isCoordinateSystemType)
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
*/function isCoordinateSystemType(coordSys,type){return coordSys.type===type;}

/***/ }),

/***/ 48692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aG": () => (/* binding */ createScaleByModel),
  "Do": () => (/* binding */ estimateLabelUnionRect),
  "DX": () => (/* binding */ getAxisRawValue),
  "PY": () => (/* binding */ getDataDimensionsOnAxis),
  "rk": () => (/* binding */ getOptionCategoryInterval),
  "Xv": () => (/* binding */ getScaleExtent),
  "Yb": () => (/* binding */ ifAxisCrossZero),
  "J9": () => (/* binding */ makeLabelFormatter),
  "Jk": () => (/* binding */ niceScaleExtent),
  "WY": () => (/* binding */ shouldShowAllLabels)
});

// UNUSED EXPORTS: unionAxisExtentFromData

// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/scale/Ordinal.js
var Ordinal = __webpack_require__(29242);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/scale/Interval.js
var Interval = __webpack_require__(46271);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/scale/Scale.js
var Scale = __webpack_require__(51337);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/layout/barGrid.js
var barGrid = __webpack_require__(78356);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(54865);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/scale/Time.js
var Time = __webpack_require__(3454);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/scale/Log.js
var Log = __webpack_require__(12746);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/dataStackHelper.js
var dataStackHelper = __webpack_require__(29209);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(20194);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/scaleRawExtentInfo.js
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
*/var ScaleRawExtentInfo=/** @class */function(){function ScaleRawExtentInfo(scale,model,// Usually: data extent from all series on this axis.
originalExtent){this._prepareParams(scale,model,originalExtent);}/**
   * Parameters depending on ouside (like model, user callback)
   * are prepared and fixed here.
   */ScaleRawExtentInfo.prototype._prepareParams=function(scale,model,// Usually: data extent from all series on this axis.
dataExtent){if(dataExtent[1]<dataExtent[0]){dataExtent=[NaN,NaN];}this._dataMin=dataExtent[0];this._dataMax=dataExtent[1];var isOrdinal=this._isOrdinal=scale.type==='ordinal';this._needCrossZero=scale.type==='interval'&&model.getNeedCrossZero&&model.getNeedCrossZero();var modelMinRaw=this._modelMinRaw=model.get('min',true);if((0,util/* isFunction */.mf)(modelMinRaw)){// This callback alway provide users the full data extent (before data filtered).
this._modelMinNum=parseAxisModelMinMax(scale,modelMinRaw({min:dataExtent[0],max:dataExtent[1]}));}else if(modelMinRaw!=='dataMin'){this._modelMinNum=parseAxisModelMinMax(scale,modelMinRaw);}var modelMaxRaw=this._modelMaxRaw=model.get('max',true);if((0,util/* isFunction */.mf)(modelMaxRaw)){// This callback alway provide users the full data extent (before data filtered).
this._modelMaxNum=parseAxisModelMinMax(scale,modelMaxRaw({min:dataExtent[0],max:dataExtent[1]}));}else if(modelMaxRaw!=='dataMax'){this._modelMaxNum=parseAxisModelMinMax(scale,modelMaxRaw);}if(isOrdinal){// FIXME: there is a flaw here: if there is no "block" data processor like `dataZoom`,
// and progressive rendering is using, here the category result might just only contain
// the processed chunk rather than the entire result.
this._axisDataLen=model.getCategories().length;}else{var boundaryGap=model.get('boundaryGap');var boundaryGapArr=(0,util/* isArray */.kJ)(boundaryGap)?boundaryGap:[boundaryGap||0,boundaryGap||0];if(typeof boundaryGapArr[0]==='boolean'||typeof boundaryGapArr[1]==='boolean'){if(false){}this._boundaryGapInner=[0,0];}else{this._boundaryGapInner=[(0,contain_text/* parsePercent */.GM)(boundaryGapArr[0],1),(0,contain_text/* parsePercent */.GM)(boundaryGapArr[1],1)];}}};/**
   * Calculate extent by prepared parameters.
   * This method has no external dependency and can be called duplicatedly,
   * getting the same result.
   * If parameters changed, should call this method to recalcuate.
   */ScaleRawExtentInfo.prototype.calculate=function(){// Notice: When min/max is not set (that is, when there are null/undefined,
// which is the most common case), these cases should be ensured:
// (1) For 'ordinal', show all axis.data.
// (2) For others:
//      + `boundaryGap` is applied (if min/max set, boundaryGap is
//      disabled).
//      + If `needCrossZero`, min/max should be zero, otherwise, min/max should
//      be the result that originalExtent enlarged by boundaryGap.
// (3) If no data, it should be ensured that `scale.setBlank` is set.
var isOrdinal=this._isOrdinal;var dataMin=this._dataMin;var dataMax=this._dataMax;var axisDataLen=this._axisDataLen;var boundaryGapInner=this._boundaryGapInner;var span=!isOrdinal?dataMax-dataMin||Math.abs(dataMin):null;// Currently if a `'value'` axis model min is specified as 'dataMin'/'dataMax',
// `boundaryGap` will not be used. It's the different from specifying as `null`/`undefined`.
var min=this._modelMinRaw==='dataMin'?dataMin:this._modelMinNum;var max=this._modelMaxRaw==='dataMax'?dataMax:this._modelMaxNum;// If `_modelMinNum`/`_modelMaxNum` is `null`/`undefined`, should not be fixed.
var minFixed=min!=null;var maxFixed=max!=null;if(min==null){min=isOrdinal?axisDataLen?0:NaN:dataMin-boundaryGapInner[0]*span;}if(max==null){max=isOrdinal?axisDataLen?axisDataLen-1:NaN:dataMax+boundaryGapInner[1]*span;}(min==null||!isFinite(min))&&(min=NaN);(max==null||!isFinite(max))&&(max=NaN);var isBlank=(0,util/* eqNaN */.Bu)(min)||(0,util/* eqNaN */.Bu)(max)||isOrdinal&&!axisDataLen;// If data extent modified, need to recalculated to ensure cross zero.
if(this._needCrossZero){// Axis is over zero and min is not set
if(min>0&&max>0&&!minFixed){min=0;// minFixed = true;
}// Axis is under zero and max is not set
if(min<0&&max<0&&!maxFixed){max=0;// maxFixed = true;
}// PENDING:
// When `needCrossZero` and all data is positive/negative, should it be ensured
// that the results processed by boundaryGap are positive/negative?
// If so, here `minFixed`/`maxFixed` need to be set.
}var determinedMin=this._determinedMin;var determinedMax=this._determinedMax;if(determinedMin!=null){min=determinedMin;minFixed=true;}if(determinedMax!=null){max=determinedMax;maxFixed=true;}// Ensure min/max be finite number or NaN here. (not to be null/undefined)
// `NaN` means min/max axis is blank.
return{min:min,max:max,minFixed:minFixed,maxFixed:maxFixed,isBlank:isBlank};};ScaleRawExtentInfo.prototype.modifyDataMinMax=function(minMaxName,val){if(false){}this[DATA_MIN_MAX_ATTR[minMaxName]]=val;};ScaleRawExtentInfo.prototype.setDeterminedMinMax=function(minMaxName,val){var attr=DETERMINED_MIN_MAX_ATTR[minMaxName];if(false){}this[attr]=val;};ScaleRawExtentInfo.prototype.freeze=function(){// @ts-ignore
this.frozen=true;};return ScaleRawExtentInfo;}();var DETERMINED_MIN_MAX_ATTR={min:'_determinedMin',max:'_determinedMax'};var DATA_MIN_MAX_ATTR={min:'_dataMin',max:'_dataMax'};/**
 * Get scale min max and related info only depends on model settings.
 * This method can be called after coordinate system created.
 * For example, in data processing stage.
 *
 * Scale extent info probably be required multiple times during a workflow.
 * For example:
 * (1) `dataZoom` depends it to get the axis extent in "100%" state.
 * (2) `processor/extentCalculator` depends it to make sure whether axis extent is specified.
 * (3) `coordSys.update` use it to finally decide the scale extent.
 * But the callback of `min`/`max` should not be called multiple times.
 * The code below should not be implemented repeatedly either.
 * So we cache the result in the scale instance, which will be recreated at the begining
 * of the workflow (because `scale` instance will be recreated each round of the workflow).
 */function ensureScaleRawExtentInfo(scale,model,// Usually: data extent from all series on this axis.
originalExtent){// Do not permit to recreate.
var rawExtentInfo=scale.rawExtentInfo;if(rawExtentInfo){return rawExtentInfo;}rawExtentInfo=new ScaleRawExtentInfo(scale,model,originalExtent);// @ts-ignore
scale.rawExtentInfo=rawExtentInfo;return rawExtentInfo;}function parseAxisModelMinMax(scale,minMax){return minMax==null?null:(0,util/* eqNaN */.Bu)(minMax)?NaN:scale.parse(minMax);}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/axisHelper.js
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
 * Get axis scale extent before niced.
 * Item of returned array can only be number (including Infinity and NaN).
 *
 * Caution:
 * Precondition of calling this method:
 * The scale extent has been initialized using series data extent via
 * `scale.setExtent` or `scale.unionExtentFromData`;
 */function getScaleExtent(scale,model){var scaleType=scale.type;var rawExtentResult=ensureScaleRawExtentInfo(scale,model,scale.getExtent()).calculate();scale.setBlank(rawExtentResult.isBlank);var min=rawExtentResult.min;var max=rawExtentResult.max;// If bars are placed on a base axis of type time or interval account for axis boundary overflow and current axis
// is base axis
// FIXME
// (1) Consider support value axis, where below zero and axis `onZero` should be handled properly.
// (2) Refactor the logic with `barGrid`. Is it not need to `makeBarWidthAndOffsetInfo` twice with different extent?
//     Should not depend on series type `bar`?
// (3) Fix that might overlap when using dataZoom.
// (4) Consider other chart types using `barGrid`?
// See #6728, #4862, `test/bar-overflow-time-plot.html`
var ecModel=model.ecModel;if(ecModel&&scaleType==='time'/*|| scaleType === 'interval' */){var barSeriesModels=(0,barGrid/* prepareLayoutBarSeries */.Ge)('bar',ecModel);var isBaseAxisAndHasBarSeries_1=false;util/* each */.S6(barSeriesModels,function(seriesModel){isBaseAxisAndHasBarSeries_1=isBaseAxisAndHasBarSeries_1||seriesModel.getBaseAxis()===model.axis;});if(isBaseAxisAndHasBarSeries_1){// Calculate placement of bars on axis. TODO should be decoupled
// with barLayout
var barWidthAndOffset=(0,barGrid/* makeColumnLayout */.My)(barSeriesModels);// Adjust axis min and max to account for overflow
var adjustedScale=adjustScaleForOverflow(min,max,model,barWidthAndOffset);min=adjustedScale.min;max=adjustedScale.max;}}return{extent:[min,max],// "fix" means "fixed", the value should not be
// changed in the subsequent steps.
fixMin:rawExtentResult.minFixed,fixMax:rawExtentResult.maxFixed};}function adjustScaleForOverflow(min,max,model,// Only support cartesian coord yet.
barWidthAndOffset){// Get Axis Length
var axisExtent=model.axis.getExtent();var axisLength=axisExtent[1]-axisExtent[0];// Get bars on current base axis and calculate min and max overflow
var barsOnCurrentAxis=(0,barGrid/* retrieveColumnLayout */.G_)(barWidthAndOffset,model.axis);if(barsOnCurrentAxis===undefined){return{min:min,max:max};}var minOverflow=Infinity;util/* each */.S6(barsOnCurrentAxis,function(item){minOverflow=Math.min(item.offset,minOverflow);});var maxOverflow=-Infinity;util/* each */.S6(barsOnCurrentAxis,function(item){maxOverflow=Math.max(item.offset+item.width,maxOverflow);});minOverflow=Math.abs(minOverflow);maxOverflow=Math.abs(maxOverflow);var totalOverFlow=minOverflow+maxOverflow;// Calculate required buffer based on old range and overflow
var oldRange=max-min;var oldRangePercentOfNew=1-(minOverflow+maxOverflow)/axisLength;var overflowBuffer=oldRange/oldRangePercentOfNew-oldRange;max+=overflowBuffer*(maxOverflow/totalOverFlow);min-=overflowBuffer*(minOverflow/totalOverFlow);return{min:min,max:max};}// Precondition of calling this method:
// The scale extent has been initailized using series data extent via
// `scale.setExtent` or `scale.unionExtentFromData`;
function niceScaleExtent(scale,inModel){var model=inModel;var extentInfo=getScaleExtent(scale,model);var extent=extentInfo.extent;var splitNumber=model.get('splitNumber');if(scale instanceof Log/* default */.Z){scale.base=model.get('logBase');}var scaleType=scale.type;var interval=model.get('interval');var isIntervalOrTime=scaleType==='interval'||scaleType==='time';scale.setExtent(extent[0],extent[1]);scale.calcNiceExtent({splitNumber:splitNumber,fixMin:extentInfo.fixMin,fixMax:extentInfo.fixMax,minInterval:isIntervalOrTime?model.get('minInterval'):null,maxInterval:isIntervalOrTime?model.get('maxInterval'):null});// If some one specified the min, max. And the default calculated interval
// is not good enough. He can specify the interval. It is often appeared
// in angle axis with angle 0 - 360. Interval calculated in interval scale is hard
// to be 60.
// FIXME
if(interval!=null){scale.setInterval&&scale.setInterval(interval);}}/**
 * @param axisType Default retrieve from model.type
 */function createScaleByModel(model,axisType){axisType=axisType||model.get('type');if(axisType){switch(axisType){// Buildin scale
case'category':return new Ordinal/* default */.Z({ordinalMeta:model.getOrdinalMeta?model.getOrdinalMeta():model.getCategories(),extent:[Infinity,-Infinity]});case'time':return new Time/* default */.Z({locale:model.ecModel.getLocaleModel(),useUTC:model.ecModel.get('useUTC')});default:// case 'value'/'interval', 'log', or others.
return new(Scale/* default.getClass */.Z.getClass(axisType)||Interval/* default */.Z)();}}}/**
 * Check if the axis cross 0
 */function ifAxisCrossZero(axis){var dataExtent=axis.scale.getExtent();var min=dataExtent[0];var max=dataExtent[1];return!(min>0&&max>0||min<0&&max<0);}/**
 * @param axis
 * @return Label formatter function.
 *         param: {number} tickValue,
 *         param: {number} idx, the index in all ticks.
 *                         If category axis, this param is not required.
 *         return: {string} label string.
 */function makeLabelFormatter(axis){var labelFormatter=axis.getLabelModel().get('formatter');var categoryTickStart=axis.type==='category'?axis.scale.getExtent()[0]:null;if(axis.scale.type==='time'){return function(tpl){return function(tick,idx){return axis.scale.getFormattedLabel(tick,idx,tpl);};}(labelFormatter);}else if(util/* isString */.HD(labelFormatter)){return function(tpl){return function(tick){// For category axis, get raw value; for numeric axis,
// get formatted label like '1,333,444'.
var label=axis.scale.getLabel(tick);var text=tpl.replace('{value}',label!=null?label:'');return text;};}(labelFormatter);}else if(util/* isFunction */.mf(labelFormatter)){return function(cb){return function(tick,idx){// The original intention of `idx` is "the index of the tick in all ticks".
// But the previous implementation of category axis do not consider the
// `axisLabel.interval`, which cause that, for example, the `interval` is
// `1`, then the ticks "name5", "name7", "name9" are displayed, where the
// corresponding `idx` are `0`, `2`, `4`, but not `0`, `1`, `2`. So we keep
// the definition here for back compatibility.
if(categoryTickStart!=null){idx=tick.value-categoryTickStart;}return cb(getAxisRawValue(axis,tick),idx,tick.level!=null?{level:tick.level}:null);};}(labelFormatter);}else{return function(tick){return axis.scale.getLabel(tick);};}}function getAxisRawValue(axis,tick){// In category axis with data zoom, tick is not the original
// index of axis.data. So tick should not be exposed to user
// in category axis.
return axis.type==='category'?axis.scale.getLabel(tick):tick.value;}/**
 * @param axis
 * @return Be null/undefined if no labels.
 */function estimateLabelUnionRect(axis){var axisModel=axis.model;var scale=axis.scale;if(!axisModel.get(['axisLabel','show'])||scale.isBlank()){return;}var realNumberScaleTicks;var tickCount;var categoryScaleExtent=scale.getExtent();// Optimize for large category data, avoid call `getTicks()`.
if(scale instanceof Ordinal/* default */.Z){tickCount=scale.count();}else{realNumberScaleTicks=scale.getTicks();tickCount=realNumberScaleTicks.length;}var axisLabelModel=axis.getLabelModel();var labelFormatter=makeLabelFormatter(axis);var rect;var step=1;// Simple optimization for large amount of labels
if(tickCount>40){step=Math.ceil(tickCount/40);}for(var i=0;i<tickCount;i+=step){var tick=realNumberScaleTicks?realNumberScaleTicks[i]:{value:categoryScaleExtent[0]+i};var label=labelFormatter(tick,i);var unrotatedSingleRect=axisLabelModel.getTextRect(label);var singleRect=rotateTextRect(unrotatedSingleRect,axisLabelModel.get('rotate')||0);rect?rect.union(singleRect):rect=singleRect;}return rect;}function rotateTextRect(textRect,rotate){var rotateRadians=rotate*Math.PI/180;var beforeWidth=textRect.width;var beforeHeight=textRect.height;var afterWidth=beforeWidth*Math.abs(Math.cos(rotateRadians))+Math.abs(beforeHeight*Math.sin(rotateRadians));var afterHeight=beforeWidth*Math.abs(Math.sin(rotateRadians))+Math.abs(beforeHeight*Math.cos(rotateRadians));var rotatedRect=new BoundingRect/* default */.Z(textRect.x,textRect.y,afterWidth,afterHeight);return rotatedRect;}/**
 * @param model axisLabelModel or axisTickModel
 * @return {number|String} Can be null|'auto'|number|function
 */function getOptionCategoryInterval(model){var interval=model.get('interval');return interval==null?'auto':interval;}/**
 * Set `categoryInterval` as 0 implicitly indicates that
 * show all labels reguardless of overlap.
 * @param {Object} axis axisModel.axis
 */function shouldShowAllLabels(axis){return axis.type==='category'&&getOptionCategoryInterval(axis.getLabelModel())===0;}function getDataDimensionsOnAxis(data,axisDim){// Remove duplicated dat dimensions caused by `getStackedDimension`.
var dataDimMap={};// Currently `mapDimensionsAll` will contain stack result dimension ('__\0ecstackresult').
// PENDING: is it reasonable? Do we need to remove the original dim from "coord dim" since
// there has been stacked result dim?
util/* each */.S6(data.mapDimensionsAll(axisDim),function(dataDim){// For example, the extent of the original dimension
// is [0.1, 0.5], the extent of the `stackResultDimension`
// is [7, 9], the final extent should NOT include [0.1, 0.5],
// because there is no graphic corresponding to [0.1, 0.5].
// See the case in `test/area-stack.html` `main1`, where area line
// stack needs `yAxis` not start from 0.
dataDimMap[(0,dataStackHelper/* getStackedDimension */.IR)(data,dataDim)]=true;});return util/* keys */.XP(dataDimMap);}function unionAxisExtentFromData(dataExtent,data,axisDim){if(data){zrUtil.each(getDataDimensionsOnAxis(data,axisDim),function(dim){var seriesExtent=data.getApproximateExtent(dim);seriesExtent[0]<dataExtent[0]&&(dataExtent[0]=seriesExtent[0]);seriesExtent[1]>dataExtent[1]&&(dataExtent[1]=seriesExtent[1]);});}}

/***/ }),

/***/ 6092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mk": () => (/* binding */ findAxisModels),
/* harmony export */   "Yh": () => (/* binding */ isCartesian2DSeries),
/* harmony export */   "bK": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23958);
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
 * Can only be called after coordinate system creation stage.
 * (Can be called before coordinate system update stage).
 */function layout(gridModel,axisModel,opt){opt=opt||{};var grid=gridModel.coordinateSystem;var axis=axisModel.axis;var layout={};var otherAxisOnZeroOf=axis.getAxesOnZeroOf()[0];var rawAxisPosition=axis.position;var axisPosition=otherAxisOnZeroOf?'onZero':rawAxisPosition;var axisDim=axis.dim;var rect=grid.getRect();var rectBound=[rect.x,rect.x+rect.width,rect.y,rect.y+rect.height];var idx={left:0,right:1,top:0,bottom:1,onZero:2};var axisOffset=axisModel.get('offset')||0;var posBound=axisDim==='x'?[rectBound[2]-axisOffset,rectBound[3]+axisOffset]:[rectBound[0]-axisOffset,rectBound[1]+axisOffset];if(otherAxisOnZeroOf){var onZeroCoord=otherAxisOnZeroOf.toGlobalCoord(otherAxisOnZeroOf.dataToCoord(0));posBound[idx.onZero]=Math.max(Math.min(onZeroCoord,posBound[1]),posBound[0]);}// Axis position
layout.position=[axisDim==='y'?posBound[idx[axisPosition]]:rectBound[0],axisDim==='x'?posBound[idx[axisPosition]]:rectBound[3]];// Axis rotation
layout.rotation=Math.PI/2*(axisDim==='x'?0:1);// Tick and label direction, x y is axisDim
var dirMap={top:-1,bottom:1,left:-1,right:1};layout.labelDirection=layout.tickDirection=layout.nameDirection=dirMap[rawAxisPosition];layout.labelOffset=otherAxisOnZeroOf?posBound[idx[rawAxisPosition]]-posBound[idx.onZero]:0;if(axisModel.get(['axisTick','inside'])){layout.tickDirection=-layout.tickDirection;}if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .retrieve */ .Jv(opt.labelInside,axisModel.get(['axisLabel','inside']))){layout.labelDirection=-layout.labelDirection;}// Special label rotation
var labelRotate=axisModel.get(['axisLabel','rotate']);layout.labelRotate=axisPosition==='top'?-labelRotate:labelRotate;// Over splitLine and splitArea
layout.z2=1;return layout;}function isCartesian2DSeries(seriesModel){return seriesModel.get('coordinateSystem')==='cartesian2d';}function findAxisModels(seriesModel){var axisModelMap={xAxisModel:null,yAxisModel:null};zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(axisModelMap,function(v,key){var axisType=key.replace(/Model$/,'');var axisModel=seriesModel.getReferringComponents(axisType,_util_model_js__WEBPACK_IMPORTED_MODULE_1__/* .SINGLE_REFERRING */ .C6).models[0];if(false){}axisModelMap[key]=axisModel;});return axisModelMap;}

/***/ }),

/***/ 43564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ geoSourceManager)
});

// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/tool/parseSVG.js
var parseSVG = __webpack_require__(5081);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(22060);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(19568);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(54865);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/tool/parseXML.js
var parseXML = __webpack_require__(59145);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(79070);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/contain/polygon.js
var polygon = __webpack_require__(7841);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(13518);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/Region.js
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
*/var TMP_TRANSFORM=[];function transformPoints(points,transform){for(var p=0;p<points.length;p++){vector/* applyTransform */.Ne(points[p],points[p],transform);}}function updateBBoxFromPoints(points,min,max,projection){for(var i=0;i<points.length;i++){var p=points[i];if(projection){// projection may return null point.
p=projection.project(p);}if(p&&isFinite(p[0])&&isFinite(p[1])){vector/* min */.VV(min,min,p);vector/* max */.Fp(max,max,p);}}}function centroid(points){var signedArea=0;var cx=0;var cy=0;var len=points.length;var x0=points[len-1][0];var y0=points[len-1][1];// Polygon should been closed.
for(var i=0;i<len;i++){var x1=points[i][0];var y1=points[i][1];var a=x0*y1-x1*y0;signedArea+=a;cx+=(x0+x1)*a;cy+=(y0+y1)*a;x0=x1;y0=y1;}return signedArea?[cx/signedArea/3,cy/signedArea/3,signedArea]:[points[0][0]||0,points[0][1]||0];}var Region=/** @class */function(){function Region(name){this.name=name;}Region.prototype.setCenter=function(center){this._center=center;};/**
   * Get center point in data unit. That is,
   * for GeoJSONRegion, the unit is lat/lng,
   * for GeoSVGRegion, the unit is SVG local coord.
   */Region.prototype.getCenter=function(){var center=this._center;if(!center){// In most cases there are no need to calculate this center.
// So calculate only when called.
center=this._center=this.calcCenter();}return center;};return Region;}();var GeoJSONPolygonGeometry=/** @class */function(){function GeoJSONPolygonGeometry(exterior,interiors){this.type='polygon';this.exterior=exterior;this.interiors=interiors;}return GeoJSONPolygonGeometry;}();var GeoJSONLineStringGeometry=/** @class */function(){function GeoJSONLineStringGeometry(points){this.type='linestring';this.points=points;}return GeoJSONLineStringGeometry;}();var GeoJSONRegion=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GeoJSONRegion,_super);function GeoJSONRegion(name,geometries,cp){var _this=_super.call(this,name)||this;_this.type='geoJSON';_this.geometries=geometries;_this._center=cp&&[cp[0],cp[1]];return _this;}GeoJSONRegion.prototype.calcCenter=function(){var geometries=this.geometries;var largestGeo;var largestGeoSize=0;for(var i=0;i<geometries.length;i++){var geo=geometries[i];var exterior=geo.exterior;// Simple trick to use points count instead of polygon area as region size.
// Ignore linestring
var size=exterior&&exterior.length;if(size>largestGeoSize){largestGeo=geo;largestGeoSize=size;}}if(largestGeo){return centroid(largestGeo.exterior);}// from bounding rect by default.
var rect=this.getBoundingRect();return[rect.x+rect.width/2,rect.y+rect.height/2];};GeoJSONRegion.prototype.getBoundingRect=function(projection){var rect=this._rect;// Always recalculate if using projection.
if(rect&&!projection){return rect;}var min=[Infinity,Infinity];var max=[-Infinity,-Infinity];var geometries=this.geometries;(0,util/* each */.S6)(geometries,function(geo){if(geo.type==='polygon'){// Doesn't consider hole
updateBBoxFromPoints(geo.exterior,min,max,projection);}else{(0,util/* each */.S6)(geo.points,function(points){updateBBoxFromPoints(points,min,max,projection);});}});// Normalie invalid bounding.
if(!(isFinite(min[0])&&isFinite(min[1])&&isFinite(max[0])&&isFinite(max[1]))){min[0]=min[1]=max[0]=max[1]=0;}rect=new BoundingRect/* default */.Z(min[0],min[1],max[0]-min[0],max[1]-min[1]);if(!projection){this._rect=rect;}return rect;};GeoJSONRegion.prototype.contain=function(coord){var rect=this.getBoundingRect();var geometries=this.geometries;if(!rect.contain(coord[0],coord[1])){return false;}loopGeo:for(var i=0,len=geometries.length;i<len;i++){var geo=geometries[i];// Only support polygon.
if(geo.type!=='polygon'){continue;}var exterior=geo.exterior;var interiors=geo.interiors;if(polygon/* contain */.X(exterior,coord[0],coord[1])){// Not in the region if point is in the hole.
for(var k=0;k<(interiors?interiors.length:0);k++){if(polygon/* contain */.X(interiors[k],coord[0],coord[1])){continue loopGeo;}}return true;}}return false;};/**
   * Transform the raw coords to target bounding.
   * @param x
   * @param y
   * @param width
   * @param height
   */GeoJSONRegion.prototype.transformTo=function(x,y,width,height){var rect=this.getBoundingRect();var aspect=rect.width/rect.height;if(!width){width=aspect*height;}else if(!height){height=width/aspect;}var target=new BoundingRect/* default */.Z(x,y,width,height);var transform=rect.calculateTransform(target);var geometries=this.geometries;for(var i=0;i<geometries.length;i++){var geo=geometries[i];if(geo.type==='polygon'){transformPoints(geo.exterior,transform);(0,util/* each */.S6)(geo.interiors,function(interior){transformPoints(interior,transform);});}else{(0,util/* each */.S6)(geo.points,function(points){transformPoints(points,transform);});}}rect=this._rect;rect.copy(target);// Update center
this._center=[rect.x+rect.width/2,rect.y+rect.height/2];};GeoJSONRegion.prototype.cloneShallow=function(name){name==null&&(name=this.name);var newRegion=new GeoJSONRegion(name,this.geometries,this._center);newRegion._rect=this._rect;newRegion.transformTo=null;// Simply avoid to be called.
return newRegion;};return GeoJSONRegion;}(Region);var GeoSVGRegion=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GeoSVGRegion,_super);function GeoSVGRegion(name,elOnlyForCalculate){var _this=_super.call(this,name)||this;_this.type='geoSVG';_this._elOnlyForCalculate=elOnlyForCalculate;return _this;}GeoSVGRegion.prototype.calcCenter=function(){var el=this._elOnlyForCalculate;var rect=el.getBoundingRect();var center=[rect.x+rect.width/2,rect.y+rect.height/2];var mat=matrix/* identity */.yR(TMP_TRANSFORM);var target=el;while(target&&!target.isGeoSVGGraphicRoot){matrix/* mul */.dC(mat,target.getLocalTransform(),mat);target=target.parent;}matrix/* invert */.U_(mat,mat);vector/* applyTransform */.Ne(center,center,mat);return center;};return GeoSVGRegion;}(Region);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/GeoSVGResource.js
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
 * "region available" means that: enable users to set attribute `name="xxx"` on those tags
 * to make it be a region.
 * 1. region styles and its label styles can be defined in echarts opton:
 * ```js
 * geo: {
 *     regions: [{
 *         name: 'xxx',
 *         itemStyle: { ... },
 *         label: { ... }
 *     }, {
 *         ...
 *     },
 *     ...]
 * };
 * ```
 * 2. name can be duplicated in different SVG tag. All of the tags with the same name share
 * a region option. For exampel if there are two <path> representing two lung lobes. They have
 * no common parents but both of them need to display label "lung" inside.
 */var REGION_AVAILABLE_SVG_TAG_MAP=(0,util/* createHashMap */.kW)(['rect','circle','line','ellipse','polygon','polyline','path',// <text> <tspan> are also enabled becuase some SVG might paint text itself,
// but still need to trigger events or tooltip.
'text','tspan',// <g> is also enabled because this case: if multiple tags share one name
// and need label displayed, every tags will display the name, which is not
// expected. So we can put them into a <g name="xxx">. Thereby only one label
// displayed and located based on the bounding rect of the <g>.
'g']);var GeoSVGResource=/** @class */function(){function GeoSVGResource(mapName,svg){this.type='geoSVG';// All used graphics. key: hostKey, value: root
this._usedGraphicMap=(0,util/* createHashMap */.kW)();// All unused graphics.
this._freedGraphics=[];this._mapName=mapName;// Only perform parse to XML object here, which might be time
// consiming for large SVG.
// Although convert XML to zrender element is also time consiming,
// if we do it here, the clone of zrender elements has to be
// required. So we do it once for each geo instance, util real
// performance issues call for optimizing it.
this._parsedXML=(0,parseXML/* parseXML */.s)(svg);}GeoSVGResource.prototype.load=function()/* nameMap: NameMap */{// In the "load" stage, graphic need to be built to
// get boundingRect for geo coordinate system.
var firstGraphic=this._firstGraphic;// Create the return data structure only when first graphic created.
// Because they will be used in geo coordinate system update stage,
// and `regions` will be mounted at `geo` coordinate system,
// in which there is no "view" info, so that it should better not to
// make references to graphic elements.
if(!firstGraphic){firstGraphic=this._firstGraphic=this._buildGraphic(this._parsedXML);this._freedGraphics.push(firstGraphic);this._boundingRect=this._firstGraphic.boundingRect.clone();// PENDING: `nameMap` will not be supported until some real requirement come.
// if (nameMap) {
//     named = applyNameMap(named, nameMap);
// }
var _a=createRegions(firstGraphic.named),regions=_a.regions,regionsMap=_a.regionsMap;this._regions=regions;this._regionsMap=regionsMap;}return{boundingRect:this._boundingRect,regions:this._regions,regionsMap:this._regionsMap};};GeoSVGResource.prototype._buildGraphic=function(svgXML){var result;var rootFromParse;try{result=svgXML&&(0,parseSVG/* parseSVG */.hS)(svgXML,{ignoreViewBox:true,ignoreRootClip:true})||{};rootFromParse=result.root;(0,util/* assert */.hu)(rootFromParse!=null);}catch(e){throw new Error('Invalid svg format\n'+e.message);}// Note: we keep the covenant that the root has no transform. So always add an extra root.
var root=new Group/* default */.Z();root.add(rootFromParse);root.isGeoSVGGraphicRoot=true;// [THE_RULE_OF_VIEWPORT_AND_VIEWBOX]
//
// Consider: `<svg width="..." height="..." viewBox="...">`
// - the `width/height` we call it `svgWidth/svgHeight` for short.
// - `(0, 0, svgWidth, svgHeight)` defines the viewport of the SVG, or say,
//   "viewport boundingRect", or `boundingRect` for short.
// - `viewBox` defines the transform from the real content ot the viewport.
//   `viewBox` has the same unit as the content of SVG.
//   If `viewBox` exists, a transform is defined, so the unit of `svgWidth/svgHeight` become
//   different from the content of SVG. Otherwise, they are the same.
//
// If both `svgWidth/svgHeight/viewBox` are specified in a SVG file, the transform rule will be:
// 0. `boundingRect` is `(0, 0, svgWidth, svgHeight)`. Set it to Geo['_rect'] (View['_rect']).
// 1. Make a transform from `viewBox` to `boundingRect`.
//    Note: only suport `preserveAspectRatio 'xMidYMid'` here. That is, this transform will preserve
//    the aspect ratio.
// 2. Make a transform from boundingRect to Geo['_viewRect'] (View['_viewRect'])
//    (`Geo`/`View` will do this job).
//    Note: this transform might not preserve aspect radio, which depending on how users specify
//    viewRect in echarts option (e.g., `geo.left/top/width/height` will not preserve aspect ratio,
//    but `geo.layoutCenter/layoutSize` will preserve aspect ratio).
//
// If `svgWidth/svgHeight` not specified, we use `viewBox` as the `boundingRect` to make the SVG
// layout look good.
//
// If neither `svgWidth/svgHeight` nor `viewBox` are not specified, we calculate the boundingRect
// of the SVG content and use them to make SVG layout look good.
var svgWidth=result.width;var svgHeight=result.height;var viewBoxRect=result.viewBoxRect;var boundingRect=this._boundingRect;if(!boundingRect){var bRectX=void 0;var bRectY=void 0;var bRectWidth=void 0;var bRectHeight=void 0;if(svgWidth!=null){bRectX=0;bRectWidth=svgWidth;}else if(viewBoxRect){bRectX=viewBoxRect.x;bRectWidth=viewBoxRect.width;}if(svgHeight!=null){bRectY=0;bRectHeight=svgHeight;}else if(viewBoxRect){bRectY=viewBoxRect.y;bRectHeight=viewBoxRect.height;}// If both viewBox and svgWidth/svgHeight not specified,
// we have to determine how to layout those element to make them look good.
if(bRectX==null||bRectY==null){var calculatedBoundingRect=rootFromParse.getBoundingRect();if(bRectX==null){bRectX=calculatedBoundingRect.x;bRectWidth=calculatedBoundingRect.width;}if(bRectY==null){bRectY=calculatedBoundingRect.y;bRectHeight=calculatedBoundingRect.height;}}boundingRect=this._boundingRect=new BoundingRect/* default */.Z(bRectX,bRectY,bRectWidth,bRectHeight);}if(viewBoxRect){var viewBoxTransform=(0,parseSVG/* makeViewBoxTransform */.sd)(viewBoxRect,boundingRect);// Only support `preserveAspectRatio 'xMidYMid'`
rootFromParse.scaleX=rootFromParse.scaleY=viewBoxTransform.scale;rootFromParse.x=viewBoxTransform.x;rootFromParse.y=viewBoxTransform.y;}// SVG needs to clip based on `viewBox`. And some SVG files really rely on this feature.
// They do not strictly confine all of the content inside a display rect, but deliberately
// use a `viewBox` to define a displayable rect.
// PENDING:
// The drawback of the `setClipPath` here is: the region label (genereted by echarts) near the
// edge might also be clipped, because region labels are put as `textContent` of the SVG path.
root.setClipPath(new Rect/* default */.Z({shape:boundingRect.plain()}));var named=[];(0,util/* each */.S6)(result.named,function(namedItem){if(REGION_AVAILABLE_SVG_TAG_MAP.get(namedItem.svgNodeTagLower)!=null){named.push(namedItem);setSilent(namedItem.el);}});return{root:root,boundingRect:boundingRect,named:named};};/**
   * Consider:
   * (1) One graphic element can not be shared by different `geoView` running simultaneously.
   *     Notice, also need to consider multiple echarts instances share a `mapRecord`.
   * (2) Converting SVG to graphic elements is time consuming.
   * (3) In the current architecture, `load` should be called frequently to get boundingRect,
   *     and it is called without view info.
   * So we maintain graphic elements in this module, and enables `view` to use/return these
   * graphics from/to the pool with it's uid.
   */GeoSVGResource.prototype.useGraphic=function(hostKey/*, nameMap: NameMap */){var usedRootMap=this._usedGraphicMap;var svgGraphic=usedRootMap.get(hostKey);if(svgGraphic){return svgGraphic;}svgGraphic=this._freedGraphics.pop()// use the first boundingRect to avoid duplicated boundingRect calculation.
||this._buildGraphic(this._parsedXML);usedRootMap.set(hostKey,svgGraphic);// PENDING: `nameMap` will not be supported until some real requirement come.
// `nameMap` can only be obtained from echarts option.
// The original `named` must not be modified.
// if (nameMap) {
//     svgGraphic = extend({}, svgGraphic);
//     svgGraphic.named = applyNameMap(svgGraphic.named, nameMap);
// }
return svgGraphic;};GeoSVGResource.prototype.freeGraphic=function(hostKey){var usedRootMap=this._usedGraphicMap;var svgGraphic=usedRootMap.get(hostKey);if(svgGraphic){usedRootMap.removeKey(hostKey);this._freedGraphics.push(svgGraphic);}};return GeoSVGResource;}();function setSilent(el){// Only named element has silent: false, other elements should
// act as background and has no user interaction.
el.silent=false;// text|tspan will be converted to group.
if(el.isGroup){el.traverse(function(child){child.silent=false;});}}function createRegions(named){var regions=[];var regionsMap=(0,util/* createHashMap */.kW)();// Create resions only for the first graphic.
(0,util/* each */.S6)(named,function(namedItem){// Region has feature to calculate center for tooltip or other features.
// If there is a <g name="xxx">, the center should be the center of the
// bounding rect of the g.
if(namedItem.namedFrom!=null){return;}var region=new GeoSVGRegion(namedItem.name,namedItem.el);// PENDING: if `nameMap` supported, this region can not be mounted on
// `this`, but can only be created each time `load()` called.
regions.push(region);// PENDING: if multiple tag named with the same name, only one will be
// found by `_regionsMap`. `_regionsMap` is used to find a coordinate
// by name. We use `region.getCenter()` as the coordinate.
regionsMap.set(namedItem.name,region);});return{regions:regions,regionsMap:regionsMap};}// PENDING: `nameMap` will not be supported until some real requirement come.
// /**
//  * Use the alias in geoNameMap.
//  * The input `named` must not be modified.
//  */
// function applyNameMap(
//     named: GeoSVGGraphicRecord['named'],
//     nameMap: NameMap
// ): GeoSVGGraphicRecord['named'] {
//     const result = [] as GeoSVGGraphicRecord['named'];
//     for (let i = 0; i < named.length; i++) {
//         let regionGraphic = named[i];
//         const name = regionGraphic.name;
//         if (nameMap && nameMap.hasOwnProperty(name)) {
//             regionGraphic = extend({}, regionGraphic);
//             regionGraphic.name = name;
//         }
//         result.push(regionGraphic);
//     }
//     return result;
// }
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/parseGeoJson.js
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
*/ /**
 * Parse and decode geo json
 */function decode(json){if(!json.UTF8Encoding){return json;}var jsonCompressed=json;var encodeScale=jsonCompressed.UTF8Scale;if(encodeScale==null){encodeScale=1024;}var features=jsonCompressed.features;util/* each */.S6(features,function(feature){var geometry=feature.geometry;var encodeOffsets=geometry.encodeOffsets;var coordinates=geometry.coordinates;// Geometry may be appeded manually in the script after json loaded.
// In this case this geometry is usually not encoded.
if(!encodeOffsets){return;}switch(geometry.type){case'LineString':geometry.coordinates=decodeRing(coordinates,encodeOffsets,encodeScale);break;case'Polygon':decodeRings(coordinates,encodeOffsets,encodeScale);break;case'MultiLineString':decodeRings(coordinates,encodeOffsets,encodeScale);break;case'MultiPolygon':util/* each */.S6(coordinates,function(rings,idx){return decodeRings(rings,encodeOffsets[idx],encodeScale);});}});// Has been decoded
jsonCompressed.UTF8Encoding=false;return jsonCompressed;}function decodeRings(rings,encodeOffsets,encodeScale){for(var c=0;c<rings.length;c++){rings[c]=decodeRing(rings[c],encodeOffsets[c],encodeScale);}}function decodeRing(coordinate,encodeOffsets,encodeScale){var result=[];var prevX=encodeOffsets[0];var prevY=encodeOffsets[1];for(var i=0;i<coordinate.length;i+=2){var x=coordinate.charCodeAt(i)-64;var y=coordinate.charCodeAt(i+1)-64;// ZigZag decoding
x=x>>1^-(x&1);y=y>>1^-(y&1);// Delta deocding
x+=prevX;y+=prevY;prevX=x;prevY=y;// Dequantize
result.push([x/encodeScale,y/encodeScale]);}return result;}function parseGeoJSON(geoJson,nameProperty){geoJson=decode(geoJson);return util/* map */.UI(util/* filter */.hX(geoJson.features,function(featureObj){// Output of mapshaper may have geometry null
return featureObj.geometry&&featureObj.properties&&featureObj.geometry.coordinates.length>0;}),function(featureObj){var properties=featureObj.properties;var geo=featureObj.geometry;var geometries=[];switch(geo.type){case'Polygon':var coordinates=geo.coordinates;// According to the GeoJSON specification.
// First must be exterior, and the rest are all interior(holes).
geometries.push(new GeoJSONPolygonGeometry(coordinates[0],coordinates.slice(1)));break;case'MultiPolygon':util/* each */.S6(geo.coordinates,function(item){if(item[0]){geometries.push(new GeoJSONPolygonGeometry(item[0],item.slice(1)));}});break;case'LineString':geometries.push(new GeoJSONLineStringGeometry([geo.coordinates]));break;case'MultiLineString':geometries.push(new GeoJSONLineStringGeometry(geo.coordinates));}var region=new GeoJSONRegion(properties[nameProperty||'name'],geometries,properties.cp);region.properties=properties;return region;});}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/fix/nanhai.js
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
*/ // Fix for 南海诸岛
var geoCoord=[126,25];var nanhaiName='南海诸岛';var points=[[[0,3.5],[7,11.2],[15,11.9],[30,7],[42,0.7],[52,0.7],[56,7.7],[59,0.7],[64,0.7],[64,0],[5,0],[0,3.5]],[[13,16.1],[19,14.7],[16,21.7],[11,23.1],[13,16.1]],[[12,32.2],[14,38.5],[15,38.5],[13,32.2],[12,32.2]],[[16,47.6],[12,53.2],[13,53.2],[18,47.6],[16,47.6]],[[6,64.4],[8,70],[9,70],[8,64.4],[6,64.4]],[[23,82.6],[29,79.8],[30,79.8],[25,82.6],[23,82.6]],[[37,70.7],[43,62.3],[44,62.3],[39,70.7],[37,70.7]],[[48,51.1],[51,45.5],[53,45.5],[50,51.1],[48,51.1]],[[51,35],[51,28.7],[53,28.7],[53,35],[51,35]],[[52,22.4],[55,17.5],[56,17.5],[53,22.4],[52,22.4]],[[58,12.6],[62,7],[63,7],[60,12.6],[58,12.6]],[[0,3.5],[0,93.1],[64,93.1],[64,0],[63,0],[63,92.4],[1,92.4],[1,3.5],[0,3.5]]];for(var i=0;i<points.length;i++){for(var k=0;k<points[i].length;k++){points[i][k][0]/=10.5;points[i][k][1]/=-10.5/0.75;points[i][k][0]+=geoCoord[0];points[i][k][1]+=geoCoord[1];}}function fixNanhai(mapType,regions){if(mapType==='china'){for(var i=0;i<regions.length;i++){// Already exists.
if(regions[i].name===nanhaiName){return;}}regions.push(new GeoJSONRegion(nanhaiName,util/* map */.UI(points,function(exterior){return{type:'polygon',exterior:exterior};}),geoCoord));}}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/fix/textCoord.js
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
*/var coordsOffsetMap={'南海诸岛':[32,80],// 全国
'广东':[0,-10],'香港':[10,5],'澳门':[-10,10],//'北京': [-10, 0],
'天津':[5,5]};function fixTextCoords(mapType,region){if(mapType==='china'){var coordFix=coordsOffsetMap[region.name];if(coordFix){var cp=region.getCenter();cp[0]+=coordFix[0]/10.5;cp[1]+=-coordFix[1]/(10.5/0.75);region.setCenter(cp);}}}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/fix/diaoyuIsland.js
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
*/ // Fix for 钓鱼岛
// let Region = require('../Region');
// let zrUtil = require('zrender/lib/core/util');
// let geoCoord = [126, 25];
var diaoyuIsland_points=[[[123.45165252685547,25.73527164402261],[123.49731445312499,25.73527164402261],[123.49731445312499,25.750734064600884],[123.45165252685547,25.750734064600884],[123.45165252685547,25.73527164402261]]];function fixDiaoyuIsland(mapType,region){if(mapType==='china'&&region.name==='台湾'){region.geometries.push({type:'polygon',exterior:diaoyuIsland_points[0]});}}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/GeoJSONResource.js
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
*/// Built-in GEO fixer.
var DEFAULT_NAME_PROPERTY='name';var GeoJSONResource=/** @class */function(){function GeoJSONResource(mapName,geoJSON,specialAreas){this.type='geoJSON';this._parsedMap=(0,util/* createHashMap */.kW)();this._mapName=mapName;this._specialAreas=specialAreas;// PENDING: delay the parse to the first usage to rapid up the FMP?
this._geoJSON=parseInput(geoJSON);}/**
   * @param nameMap can be null/undefined
   * @param nameProperty can be null/undefined
   */GeoJSONResource.prototype.load=function(nameMap,nameProperty){nameProperty=nameProperty||DEFAULT_NAME_PROPERTY;var parsed=this._parsedMap.get(nameProperty);if(!parsed){var rawRegions=this._parseToRegions(nameProperty);parsed=this._parsedMap.set(nameProperty,{regions:rawRegions,boundingRect:calculateBoundingRect(rawRegions)});}var regionsMap=(0,util/* createHashMap */.kW)();var finalRegions=[];(0,util/* each */.S6)(parsed.regions,function(region){var regionName=region.name;// Try use the alias in geoNameMap
if(nameMap&&(0,util/* hasOwn */.RI)(nameMap,regionName)){region=region.cloneShallow(regionName=nameMap[regionName]);}finalRegions.push(region);regionsMap.set(regionName,region);});return{regions:finalRegions,boundingRect:parsed.boundingRect||new BoundingRect/* default */.Z(0,0,0,0),regionsMap:regionsMap};};GeoJSONResource.prototype._parseToRegions=function(nameProperty){var mapName=this._mapName;var geoJSON=this._geoJSON;var rawRegions;// https://jsperf.com/try-catch-performance-overhead
try{rawRegions=geoJSON?parseGeoJSON(geoJSON,nameProperty):[];}catch(e){throw new Error('Invalid geoJson format\n'+e.message);}fixNanhai(mapName,rawRegions);(0,util/* each */.S6)(rawRegions,function(region){var regionName=region.name;fixTextCoords(mapName,region);fixDiaoyuIsland(mapName,region);// Some area like Alaska in USA map needs to be tansformed
// to look better
var specialArea=this._specialAreas&&this._specialAreas[regionName];if(specialArea){region.transformTo(specialArea.left,specialArea.top,specialArea.width,specialArea.height);}},this);return rawRegions;};/**
   * Only for exporting to users.
   * **MUST NOT** used internally.
   */GeoJSONResource.prototype.getMapForUser=function(){return{// For backward compatibility, use geoJson
// PENDING: it has been returning them without clone.
// do we need to avoid outsite modification?
geoJson:this._geoJSON,geoJSON:this._geoJSON,specialAreas:this._specialAreas};};return GeoJSONResource;}();function calculateBoundingRect(regions){var rect;for(var i=0;i<regions.length;i++){var regionRect=regions[i].getBoundingRect();rect=rect||regionRect.clone();rect.union(regionRect);}return rect;}function parseInput(source){return!(0,util/* isString */.HD)(source)?source:typeof JSON!=='undefined'&&JSON.parse?JSON.parse(source):new Function('return ('+source+');')();}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/coord/geo/geoSourceManager.js
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
*/var storage=(0,util/* createHashMap */.kW)();/* harmony default export */ const geoSourceManager = ({/**
   * Compatible with previous `echarts.registerMap`.
   *
   * @usage
   * ```js
   *
   * echarts.registerMap('USA', geoJson, specialAreas);
   *
   * echarts.registerMap('USA', {
   *     geoJson: geoJson,
   *     specialAreas: {...}
   * });
   * echarts.registerMap('USA', {
   *     geoJSON: geoJson,
   *     specialAreas: {...}
   * });
   *
   * echarts.registerMap('airport', {
   *     svg: svg
   * }
   * ```
   *
   * Note:
   * Do not support that register multiple geoJSON or SVG
   * one map name. Because different geoJSON and SVG have
   * different unit. It's not easy to make sure how those
   * units are mapping/normalize.
   * If intending to use multiple geoJSON or SVG, we can
   * use multiple geo coordinate system.
   */registerMap:function registerMap(mapName,rawDef,rawSpecialAreas){if(rawDef.svg){var resource=new GeoSVGResource(mapName,rawDef.svg);storage.set(mapName,resource);}else{// Recommend:
//     echarts.registerMap('eu', { geoJSON: xxx, specialAreas: xxx });
// Backward compatibility:
//     echarts.registerMap('eu', geoJSON, specialAreas);
//     echarts.registerMap('eu', { geoJson: xxx, specialAreas: xxx });
var geoJSON=rawDef.geoJson||rawDef.geoJSON;if(geoJSON&&!rawDef.features){rawSpecialAreas=rawDef.specialAreas;}else{geoJSON=rawDef;}var resource=new GeoJSONResource(mapName,geoJSON,rawSpecialAreas);storage.set(mapName,resource);}},getGeoResource:function getGeoResource(mapName){return storage.get(mapName);},/**
   * Only for exporting to users.
   * **MUST NOT** used internally.
   */getMapForUser:function getMapForUser(mapName){var resource=storage.get(mapName);// Do not support return SVG until some real requirement come.
return resource&&resource.type==='geoJSON'&&resource.getMapForUser();},load:function load(mapName,nameMap,nameProperty){var resource=storage.get(mapName);if(!resource){if(false){}return;}return resource.load(nameMap,nameProperty);}});

/***/ }),

/***/ 44967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
*/var coordinateSystemCreators={};var CoordinateSystemManager=/** @class */function(){function CoordinateSystemManager(){this._coordinateSystems=[];}CoordinateSystemManager.prototype.create=function(ecModel,api){var coordinateSystems=[];zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(coordinateSystemCreators,function(creater,type){var list=creater.create(ecModel,api);coordinateSystems=coordinateSystems.concat(list||[]);});this._coordinateSystems=coordinateSystems;};CoordinateSystemManager.prototype.update=function(ecModel,api){zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(this._coordinateSystems,function(coordSys){coordSys.update&&coordSys.update(ecModel,api);});};CoordinateSystemManager.prototype.getCoordinateSystems=function(){return this._coordinateSystems.slice();};CoordinateSystemManager.register=function(type,creator){coordinateSystemCreators[type]=creator;};CoordinateSystemManager.get=function(type){return coordinateSystemCreators[type];};return CoordinateSystemManager;}();/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoordinateSystemManager);

/***/ }),

/***/ 69774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hr": () => (/* binding */ PRIORITY),
  "S1": () => (/* binding */ init),
  "zl": () => (/* binding */ registerAction),
  "RS": () => (/* binding */ registerCoordinateSystem),
  "qR": () => (/* binding */ registerLayout),
  "yn": () => (/* binding */ registerLoading),
  "je": () => (/* binding */ registerMap),
  "sq": () => (/* binding */ registerPostInit),
  "Br": () => (/* binding */ registerPostUpdate),
  "ds": () => (/* binding */ registerPreprocessor),
  "Pu": () => (/* binding */ registerProcessor),
  "OB": () => (/* binding */ registerTransform),
  "YK": () => (/* binding */ registerUpdateLifecycle),
  "Og": () => (/* binding */ registerVisual)
});

// UNUSED EXPORTS: connect, dataTool, dependencies, disConnect, disconnect, dispose, getCoordinateSystemDimensions, getInstanceByDom, getInstanceById, getMap, registerLocale, registerTheme, setCanvasCreator, version

// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/zrender.js + 6 modules
var zrender = __webpack_require__(30838);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(9959);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/timsort.js
var timsort = __webpack_require__(70568);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(1793);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Global.js + 2 modules
var Global = __webpack_require__(44015);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/core/ExtensionAPI.js
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
*/var availableMethods=['getDom','getZr','getWidth','getHeight','getDevicePixelRatio','dispatchAction','isSSR','isDisposed','on','off','getDataURL','getConnectedDataURL',// 'getModel',
'getOption',// 'getViewOfComponentModel',
// 'getViewOfSeriesModel',
'getId','updateLabelLayout'];var ExtensionAPI=/** @class */function(){function ExtensionAPI(ecInstance){util/* each */.S6(availableMethods,function(methodName){this[methodName]=util/* bind */.ak(ecInstance[methodName],ecInstance);},this);}return ExtensionAPI;}();/* harmony default export */ const core_ExtensionAPI = (ExtensionAPI);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(44967);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/OptionManager.js
var OptionManager = __webpack_require__(97202);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/preprocessor/backwardCompat.js + 1 modules
var backwardCompat = __webpack_require__(12388);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/processor/dataStack.js
var dataStack = __webpack_require__(29967);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(49261);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(74874);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(99949);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(19568);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(30122);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(73727);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(36073);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(57024);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/style.js
var style = __webpack_require__(59863);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/loading/default.js
var loading_default = __webpack_require__(99341);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/core/task.js
var core_task = __webpack_require__(79736);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(36189);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/core/Scheduler.js
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
*/;var Scheduler=/** @class */function(){function Scheduler(ecInstance,api,dataProcessorHandlers,visualHandlers){// key: handlerUID
this._stageTaskMap=(0,util/* createHashMap */.kW)();this.ecInstance=ecInstance;this.api=api;// Fix current processors in case that in some rear cases that
// processors might be registered after echarts instance created.
// Register processors incrementally for a echarts instance is
// not supported by this stream architecture.
dataProcessorHandlers=this._dataProcessorHandlers=dataProcessorHandlers.slice();visualHandlers=this._visualHandlers=visualHandlers.slice();this._allHandlers=dataProcessorHandlers.concat(visualHandlers);}Scheduler.prototype.restoreData=function(ecModel,payload){// TODO: Only restore needed series and components, but not all components.
// Currently `restoreData` of all of the series and component will be called.
// But some independent components like `title`, `legend`, `graphic`, `toolbox`,
// `tooltip`, `axisPointer`, etc, do not need series refresh when `setOption`,
// and some components like coordinate system, axes, dataZoom, visualMap only
// need their target series refresh.
// (1) If we are implementing this feature some day, we should consider these cases:
// if a data processor depends on a component (e.g., dataZoomProcessor depends
// on the settings of `dataZoom`), it should be re-performed if the component
// is modified by `setOption`.
// (2) If a processor depends on sevral series, speicified by its `getTargetSeries`,
// it should be re-performed when the result array of `getTargetSeries` changed.
// We use `dependencies` to cover these issues.
// (3) How to update target series when coordinate system related components modified.
// TODO: simply the dirty mechanism? Check whether only the case here can set tasks dirty,
// and this case all of the tasks will be set as dirty.
ecModel.restoreData(payload);// Theoretically an overall task not only depends on each of its target series, but also
// depends on all of the series.
// The overall task is not in pipeline, and `ecModel.restoreData` only set pipeline tasks
// dirty. If `getTargetSeries` of an overall task returns nothing, we should also ensure
// that the overall task is set as dirty and to be performed, otherwise it probably cause
// state chaos. So we have to set dirty of all of the overall tasks manually, otherwise it
// probably cause state chaos (consider `dataZoomProcessor`).
this._stageTaskMap.each(function(taskRecord){var overallTask=taskRecord.overallTask;overallTask&&overallTask.dirty();});};// If seriesModel provided, incremental threshold is check by series data.
Scheduler.prototype.getPerformArgs=function(task,isBlock){// For overall task
if(!task.__pipeline){return;}var pipeline=this._pipelineMap.get(task.__pipeline.id);var pCtx=pipeline.context;var incremental=!isBlock&&pipeline.progressiveEnabled&&(!pCtx||pCtx.progressiveRender)&&task.__idxInPipeline>pipeline.blockIndex;var step=incremental?pipeline.step:null;var modDataCount=pCtx&&pCtx.modDataCount;var modBy=modDataCount!=null?Math.ceil(modDataCount/step):null;return{step:step,modBy:modBy,modDataCount:modDataCount};};Scheduler.prototype.getPipeline=function(pipelineId){return this._pipelineMap.get(pipelineId);};/**
   * Current, progressive rendering starts from visual and layout.
   * Always detect render mode in the same stage, avoiding that incorrect
   * detection caused by data filtering.
   * Caution:
   * `updateStreamModes` use `seriesModel.getData()`.
   */Scheduler.prototype.updateStreamModes=function(seriesModel,view){var pipeline=this._pipelineMap.get(seriesModel.uid);var data=seriesModel.getData();var dataLen=data.count();// `progressiveRender` means that can render progressively in each
// animation frame. Note that some types of series do not provide
// `view.incrementalPrepareRender` but support `chart.appendData`. We
// use the term `incremental` but not `progressive` to describe the
// case that `chart.appendData`.
var progressiveRender=pipeline.progressiveEnabled&&view.incrementalPrepareRender&&dataLen>=pipeline.threshold;var large=seriesModel.get('large')&&dataLen>=seriesModel.get('largeThreshold');// TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
// see `test/candlestick-large3.html`
var modDataCount=seriesModel.get('progressiveChunkMode')==='mod'?dataLen:null;seriesModel.pipelineContext=pipeline.context={progressiveRender:progressiveRender,modDataCount:modDataCount,large:large};};Scheduler.prototype.restorePipelines=function(ecModel){var scheduler=this;var pipelineMap=scheduler._pipelineMap=(0,util/* createHashMap */.kW)();ecModel.eachSeries(function(seriesModel){var progressive=seriesModel.getProgressive();var pipelineId=seriesModel.uid;pipelineMap.set(pipelineId,{id:pipelineId,head:null,tail:null,threshold:seriesModel.getProgressiveThreshold(),progressiveEnabled:progressive&&!(seriesModel.preventIncremental&&seriesModel.preventIncremental()),blockIndex:-1,step:Math.round(progressive||700),count:0});scheduler._pipe(seriesModel,seriesModel.dataTask);});};Scheduler.prototype.prepareStageTasks=function(){var stageTaskMap=this._stageTaskMap;var ecModel=this.api.getModel();var api=this.api;(0,util/* each */.S6)(this._allHandlers,function(handler){var record=stageTaskMap.get(handler.uid)||stageTaskMap.set(handler.uid,{});var errMsg='';if(false){}(0,util/* assert */.hu)(!(handler.reset&&handler.overallReset),errMsg);handler.reset&&this._createSeriesStageTask(handler,record,ecModel,api);handler.overallReset&&this._createOverallStageTask(handler,record,ecModel,api);},this);};Scheduler.prototype.prepareView=function(view,model,ecModel,api){var renderTask=view.renderTask;var context=renderTask.context;context.model=model;context.ecModel=ecModel;context.api=api;renderTask.__block=!view.incrementalPrepareRender;this._pipe(model,renderTask);};Scheduler.prototype.performDataProcessorTasks=function(ecModel,payload){// If we do not use `block` here, it should be considered when to update modes.
this._performStageTasks(this._dataProcessorHandlers,ecModel,payload,{block:true});};Scheduler.prototype.performVisualTasks=function(ecModel,payload,opt){this._performStageTasks(this._visualHandlers,ecModel,payload,opt);};Scheduler.prototype._performStageTasks=function(stageHandlers,ecModel,payload,opt){opt=opt||{};var unfinished=false;var scheduler=this;(0,util/* each */.S6)(stageHandlers,function(stageHandler,idx){if(opt.visualType&&opt.visualType!==stageHandler.visualType){return;}var stageHandlerRecord=scheduler._stageTaskMap.get(stageHandler.uid);var seriesTaskMap=stageHandlerRecord.seriesTaskMap;var overallTask=stageHandlerRecord.overallTask;if(overallTask){var overallNeedDirty_1;var agentStubMap=overallTask.agentStubMap;agentStubMap.each(function(stub){if(needSetDirty(opt,stub)){stub.dirty();overallNeedDirty_1=true;}});overallNeedDirty_1&&overallTask.dirty();scheduler.updatePayload(overallTask,payload);var performArgs_1=scheduler.getPerformArgs(overallTask,opt.block);// Execute stubs firstly, which may set the overall task dirty,
// then execute the overall task. And stub will call seriesModel.setData,
// which ensures that in the overallTask seriesModel.getData() will not
// return incorrect data.
agentStubMap.each(function(stub){stub.perform(performArgs_1);});if(overallTask.perform(performArgs_1)){unfinished=true;}}else if(seriesTaskMap){seriesTaskMap.each(function(task,pipelineId){if(needSetDirty(opt,task)){task.dirty();}var performArgs=scheduler.getPerformArgs(task,opt.block);// FIXME
// if intending to decalare `performRawSeries` in handlers, only
// stream-independent (specifically, data item independent) operations can be
// performed. Because is a series is filtered, most of the tasks will not
// be performed. A stream-dependent operation probably cause wrong biz logic.
// Perhaps we should not provide a separate callback for this case instead
// of providing the config `performRawSeries`. The stream-dependent operaions
// and stream-independent operations should better not be mixed.
performArgs.skip=!stageHandler.performRawSeries&&ecModel.isSeriesFiltered(task.context.model);scheduler.updatePayload(task,payload);if(task.perform(performArgs)){unfinished=true;}});}});function needSetDirty(opt,task){return opt.setDirty&&(!opt.dirtyMap||opt.dirtyMap.get(task.__pipeline.id));}this.unfinished=unfinished||this.unfinished;};Scheduler.prototype.performSeriesTasks=function(ecModel){var unfinished;ecModel.eachSeries(function(seriesModel){// Progress to the end for dataInit and dataRestore.
unfinished=seriesModel.dataTask.perform()||unfinished;});this.unfinished=unfinished||this.unfinished;};Scheduler.prototype.plan=function(){// Travel pipelines, check block.
this._pipelineMap.each(function(pipeline){var task=pipeline.tail;do{if(task.__block){pipeline.blockIndex=task.__idxInPipeline;break;}task=task.getUpstream();}while(task);});};Scheduler.prototype.updatePayload=function(task,payload){payload!=='remain'&&(task.context.payload=payload);};Scheduler.prototype._createSeriesStageTask=function(stageHandler,stageHandlerRecord,ecModel,api){var scheduler=this;var oldSeriesTaskMap=stageHandlerRecord.seriesTaskMap;// The count of stages are totally about only several dozen, so
// do not need to reuse the map.
var newSeriesTaskMap=stageHandlerRecord.seriesTaskMap=(0,util/* createHashMap */.kW)();var seriesType=stageHandler.seriesType;var getTargetSeries=stageHandler.getTargetSeries;// If a stageHandler should cover all series, `createOnAllSeries` should be declared mandatorily,
// to avoid some typo or abuse. Otherwise if an extension do not specify a `seriesType`,
// it works but it may cause other irrelevant charts blocked.
if(stageHandler.createOnAllSeries){ecModel.eachRawSeries(create);}else if(seriesType){ecModel.eachRawSeriesByType(seriesType,create);}else if(getTargetSeries){getTargetSeries(ecModel,api).each(create);}function create(seriesModel){var pipelineId=seriesModel.uid;// Init tasks for each seriesModel only once.
// Reuse original task instance.
var task=newSeriesTaskMap.set(pipelineId,oldSeriesTaskMap&&oldSeriesTaskMap.get(pipelineId)||(0,core_task/* createTask */.v)({plan:seriesTaskPlan,reset:seriesTaskReset,count:seriesTaskCount}));task.context={model:seriesModel,ecModel:ecModel,api:api,// PENDING: `useClearVisual` not used?
useClearVisual:stageHandler.isVisual&&!stageHandler.isLayout,plan:stageHandler.plan,reset:stageHandler.reset,scheduler:scheduler};scheduler._pipe(seriesModel,task);}};Scheduler.prototype._createOverallStageTask=function(stageHandler,stageHandlerRecord,ecModel,api){var scheduler=this;var overallTask=stageHandlerRecord.overallTask=stageHandlerRecord.overallTask// For overall task, the function only be called on reset stage.
||(0,core_task/* createTask */.v)({reset:overallTaskReset});overallTask.context={ecModel:ecModel,api:api,overallReset:stageHandler.overallReset,scheduler:scheduler};var oldAgentStubMap=overallTask.agentStubMap;// The count of stages are totally about only several dozen, so
// do not need to reuse the map.
var newAgentStubMap=overallTask.agentStubMap=(0,util/* createHashMap */.kW)();var seriesType=stageHandler.seriesType;var getTargetSeries=stageHandler.getTargetSeries;var overallProgress=true;var shouldOverallTaskDirty=false;// FIXME:TS never used, so comment it
// let modifyOutputEnd = stageHandler.modifyOutputEnd;
// An overall task with seriesType detected or has `getTargetSeries`, we add
// stub in each pipelines, it will set the overall task dirty when the pipeline
// progress. Moreover, to avoid call the overall task each frame (too frequent),
// we set the pipeline block.
var errMsg='';if(false){}(0,util/* assert */.hu)(!stageHandler.createOnAllSeries,errMsg);if(seriesType){ecModel.eachRawSeriesByType(seriesType,createStub);}else if(getTargetSeries){getTargetSeries(ecModel,api).each(createStub);}// Otherwise, (usually it is legancy case), the overall task will only be
// executed when upstream dirty. Otherwise the progressive rendering of all
// pipelines will be disabled unexpectedly. But it still needs stubs to receive
// dirty info from upsteam.
else{overallProgress=false;(0,util/* each */.S6)(ecModel.getSeries(),createStub);}function createStub(seriesModel){var pipelineId=seriesModel.uid;var stub=newAgentStubMap.set(pipelineId,oldAgentStubMap&&oldAgentStubMap.get(pipelineId)||(// When the result of `getTargetSeries` changed, the overallTask
// should be set as dirty and re-performed.
shouldOverallTaskDirty=true,(0,core_task/* createTask */.v)({reset:stubReset,onDirty:stubOnDirty})));stub.context={model:seriesModel,overallProgress:overallProgress// FIXME:TS never used, so comment it
// modifyOutputEnd: modifyOutputEnd
};stub.agent=overallTask;stub.__block=overallProgress;scheduler._pipe(seriesModel,stub);}if(shouldOverallTaskDirty){overallTask.dirty();}};Scheduler.prototype._pipe=function(seriesModel,task){var pipelineId=seriesModel.uid;var pipeline=this._pipelineMap.get(pipelineId);!pipeline.head&&(pipeline.head=task);pipeline.tail&&pipeline.tail.pipe(task);pipeline.tail=task;task.__idxInPipeline=pipeline.count++;task.__pipeline=pipeline;};Scheduler.wrapStageHandler=function(stageHandler,visualType){if((0,util/* isFunction */.mf)(stageHandler)){stageHandler={overallReset:stageHandler,seriesType:detectSeriseType(stageHandler)};}stageHandler.uid=(0,component/* getUID */.Kr)('stageHandler');visualType&&(stageHandler.visualType=visualType);return stageHandler;};;return Scheduler;}();function overallTaskReset(context){context.overallReset(context.ecModel,context.api,context.payload);}function stubReset(context){return context.overallProgress&&stubProgress;}function stubProgress(){this.agent.dirty();this.getDownstream().dirty();}function stubOnDirty(){this.agent&&this.agent.dirty();}function seriesTaskPlan(context){return context.plan?context.plan(context.model,context.ecModel,context.api,context.payload):null;}function seriesTaskReset(context){if(context.useClearVisual){context.data.clearAllVisual();}var resetDefines=context.resetDefines=(0,model/* normalizeToArray */.kF)(context.reset(context.model,context.ecModel,context.api,context.payload));return resetDefines.length>1?(0,util/* map */.UI)(resetDefines,function(v,idx){return makeSeriesTaskProgress(idx);}):singleSeriesTaskProgress;}var singleSeriesTaskProgress=makeSeriesTaskProgress(0);function makeSeriesTaskProgress(resetDefineIdx){return function(params,context){var data=context.data;var resetDefine=context.resetDefines[resetDefineIdx];if(resetDefine&&resetDefine.dataEach){for(var i=params.start;i<params.end;i++){resetDefine.dataEach(data,i);}}else if(resetDefine&&resetDefine.progress){resetDefine.progress(params,data);}};}function seriesTaskCount(context){return context.data.count();}/**
 * Only some legacy stage handlers (usually in echarts extensions) are pure function.
 * To ensure that they can work normally, they should work in block mode, that is,
 * they should not be started util the previous tasks finished. So they cause the
 * progressive rendering disabled. We try to detect the series type, to narrow down
 * the block range to only the series type they concern, but not all series.
 */function detectSeriseType(legacyFunc){seriesType=null;try{// Assume there is no async when calling `eachSeriesByType`.
legacyFunc(ecModelMock,apiMock);}catch(e){}return seriesType;}var ecModelMock={};var apiMock={};var seriesType;mockMethods(ecModelMock,Global/* default */.Z);mockMethods(apiMock,core_ExtensionAPI);ecModelMock.eachSeriesByType=ecModelMock.eachRawSeriesByType=function(type){seriesType=type;};ecModelMock.eachComponent=function(cond){if(cond.mainType==='series'&&cond.subType){seriesType=cond.subType;}};function mockMethods(target,Clz){/* eslint-disable */for(var name_1 in Clz.prototype){// Do not use hasOwnProperty
target[name_1]=util/* noop */.ZT;}/* eslint-enable */}/* harmony default export */ const core_Scheduler = (Scheduler);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/theme/light.js
var light = __webpack_require__(49622);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/theme/dark.js
var dark = __webpack_require__(71753);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/clazz.js
var clazz = __webpack_require__(18496);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/ECEventProcessor.js
var ECEventProcessor = __webpack_require__(77144);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/symbol.js
var symbol = __webpack_require__(76041);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(80578);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(42023);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/legacy/dataSelectAction.js
var dataSelectAction = __webpack_require__(20021);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/transform.js
var transform = __webpack_require__(1337);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/core/locale.js
var locale = __webpack_require__(68593);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(73171);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/visual/decal.js
var decal = __webpack_require__(12616);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/core/lifecycle.js
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
*/;var lifecycle=new Eventful/* default */.Z();/* harmony default export */ const core_lifecycle = (lifecycle);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(11082);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/core/impl.js
var impl = __webpack_require__(38998);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/core/echarts.js
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
 *//*
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
*/var hasWindow=typeof window!=='undefined';var version='5.3.3';var dependencies={zrender:'5.3.2'};var TEST_FRAME_REMAIN_TIME=1;var PRIORITY_PROCESSOR_SERIES_FILTER=800;// Some data processors depends on the stack result dimension (to calculate data extent).
// So data stack stage should be in front of data processing stage.
var PRIORITY_PROCESSOR_DATASTACK=900;// "Data filter" will block the stream, so it should be
// put at the begining of data processing.
var PRIORITY_PROCESSOR_FILTER=1000;var PRIORITY_PROCESSOR_DEFAULT=2000;var PRIORITY_PROCESSOR_STATISTIC=5000;var PRIORITY_VISUAL_LAYOUT=1000;var PRIORITY_VISUAL_PROGRESSIVE_LAYOUT=1100;var PRIORITY_VISUAL_GLOBAL=2000;var PRIORITY_VISUAL_CHART=3000;var PRIORITY_VISUAL_COMPONENT=4000;// Visual property in data. Greater than `PRIORITY_VISUAL_COMPONENT` to enable to
// overwrite the viusal result of component (like `visualMap`)
// using data item specific setting (like itemStyle.xxx on data item)
var PRIORITY_VISUAL_CHART_DATA_CUSTOM=4500;// Greater than `PRIORITY_VISUAL_CHART_DATA_CUSTOM` to enable to layout based on
// visual result like `symbolSize`.
var PRIORITY_VISUAL_POST_CHART_LAYOUT=4600;var PRIORITY_VISUAL_BRUSH=5000;var PRIORITY_VISUAL_ARIA=6000;var PRIORITY_VISUAL_DECAL=7000;var PRIORITY={PROCESSOR:{FILTER:PRIORITY_PROCESSOR_FILTER,SERIES_FILTER:PRIORITY_PROCESSOR_SERIES_FILTER,STATISTIC:PRIORITY_PROCESSOR_STATISTIC},VISUAL:{LAYOUT:PRIORITY_VISUAL_LAYOUT,PROGRESSIVE_LAYOUT:PRIORITY_VISUAL_PROGRESSIVE_LAYOUT,GLOBAL:PRIORITY_VISUAL_GLOBAL,CHART:PRIORITY_VISUAL_CHART,POST_CHART_LAYOUT:PRIORITY_VISUAL_POST_CHART_LAYOUT,COMPONENT:PRIORITY_VISUAL_COMPONENT,BRUSH:PRIORITY_VISUAL_BRUSH,CHART_ITEM:PRIORITY_VISUAL_CHART_DATA_CUSTOM,ARIA:PRIORITY_VISUAL_ARIA,DECAL:PRIORITY_VISUAL_DECAL}};// Main process have three entries: `setOption`, `dispatchAction` and `resize`,
// where they must not be invoked nestedly, except the only case: invoke
// dispatchAction with updateMethod "none" in main process.
// This flag is used to carry out this rule.
// All events will be triggered out side main process (i.e. when !this[IN_MAIN_PROCESS]).
var IN_MAIN_PROCESS_KEY='__flagInMainProcess';var PENDING_UPDATE='__pendingUpdate';var STATUS_NEEDS_UPDATE_KEY='__needsUpdateStatus';var ACTION_REG=/^[a-zA-Z0-9_]+$/;var CONNECT_STATUS_KEY='__connectUpdateStatus';var CONNECT_STATUS_PENDING=0;var CONNECT_STATUS_UPDATING=1;var CONNECT_STATUS_UPDATED=2;;;function createRegisterEventWithLowercaseECharts(method){return function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}if(this.isDisposed()){disposedWarning(this.id);return;}return toLowercaseNameAndCallEventful(this,method,args);};}function createRegisterEventWithLowercaseMessageCenter(method){return function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}return toLowercaseNameAndCallEventful(this,method,args);};}function toLowercaseNameAndCallEventful(host,method,args){// `args[0]` is event name. Event name is all lowercase.
args[0]=args[0]&&args[0].toLowerCase();return Eventful/* default.prototype */.Z.prototype[method].apply(host,args);}var MessageCenter=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(MessageCenter,_super);function MessageCenter(){return _super!==null&&_super.apply(this,arguments)||this;}return MessageCenter;}(Eventful/* default */.Z);var messageCenterProto=MessageCenter.prototype;messageCenterProto.on=createRegisterEventWithLowercaseMessageCenter('on');messageCenterProto.off=createRegisterEventWithLowercaseMessageCenter('off');// ---------------------------------------
// Internal method names for class ECharts
// ---------------------------------------
var prepare;var prepareView;var updateDirectly;var updateMethods;var doConvertPixel;var updateStreamModes;var doDispatchAction;var flushPendingActions;var triggerUpdatedEvent;var bindRenderedEvent;var bindMouseEvent;var render;var renderComponents;var renderSeries;var createExtensionAPI;var enableConnect;var markStatusToUpdate;var applyChangedStates;var ECharts=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(ECharts,_super);function ECharts(dom,// Theme name or themeOption.
theme,opts){var _this=_super.call(this,new ECEventProcessor/* ECEventProcessor */.v())||this;_this._chartsViews=[];_this._chartsMap={};_this._componentsViews=[];_this._componentsMap={};// Can't dispatch action during rendering procedure
_this._pendingActions=[];opts=opts||{};// Get theme by name
if((0,util/* isString */.HD)(theme)){theme=themeStorage[theme];}_this._dom=dom;var defaultRenderer='canvas';var defaultUseDirtyRect=false;if(false){ var devUseDirtyRect, root; }var zr=_this._zr=zrender/* init */.S1(dom,{renderer:opts.renderer||defaultRenderer,devicePixelRatio:opts.devicePixelRatio,width:opts.width,height:opts.height,ssr:opts.ssr,useDirtyRect:opts.useDirtyRect==null?defaultUseDirtyRect:opts.useDirtyRect});_this._ssr=opts.ssr;// Expect 60 fps.
_this._throttledZrFlush=(0,throttle/* throttle */.P2)((0,util/* bind */.ak)(zr.flush,zr),17);theme=(0,util/* clone */.d9)(theme);theme&&(0,backwardCompat/* default */.Z)(theme,true);_this._theme=theme;_this._locale=(0,locale/* createLocaleObject */.D0)(opts.locale||locale/* SYSTEM_LANG */.sO);_this._coordSysMgr=new CoordinateSystem/* default */.Z();var api=_this._api=createExtensionAPI(_this);// Sort on demand
function prioritySortFunc(a,b){return a.__prio-b.__prio;}(0,timsort/* default */.Z)(visualFuncs,prioritySortFunc);(0,timsort/* default */.Z)(dataProcessorFuncs,prioritySortFunc);_this._scheduler=new core_Scheduler(_this,api,dataProcessorFuncs,visualFuncs);_this._messageCenter=new MessageCenter();// Init mouse events
_this._initEvents();// In case some people write `window.onresize = chart.resize`
_this.resize=(0,util/* bind */.ak)(_this.resize,_this);zr.animation.on('frame',_this._onframe,_this);bindRenderedEvent(zr,_this);bindMouseEvent(zr,_this);// ECharts instance can be used as value.
(0,util/* setAsPrimitive */.s7)(_this);return _this;}ECharts.prototype._onframe=function(){if(this._disposed){return;}applyChangedStates(this);var scheduler=this._scheduler;// Lazy update
if(this[PENDING_UPDATE]){var silent=this[PENDING_UPDATE].silent;this[IN_MAIN_PROCESS_KEY]=true;try{prepare(this);updateMethods.update.call(this,null,this[PENDING_UPDATE].updateParams);}catch(e){this[IN_MAIN_PROCESS_KEY]=false;this[PENDING_UPDATE]=null;throw e;}// At present, in each frame, zrender performs:
//   (1) animation step forward.
//   (2) trigger('frame') (where this `_onframe` is called)
//   (3) zrender flush (render).
// If we do nothing here, since we use `setToFinal: true`, the step (3) above
// will render the final state of the elements before the real animation started.
this._zr.flush();this[IN_MAIN_PROCESS_KEY]=false;this[PENDING_UPDATE]=null;flushPendingActions.call(this,silent);triggerUpdatedEvent.call(this,silent);}// Avoid do both lazy update and progress in one frame.
else if(scheduler.unfinished){// Stream progress.
var remainTime=TEST_FRAME_REMAIN_TIME;var ecModel=this._model;var api=this._api;scheduler.unfinished=false;do{var startTime=+new Date();scheduler.performSeriesTasks(ecModel);// Currently dataProcessorFuncs do not check threshold.
scheduler.performDataProcessorTasks(ecModel);updateStreamModes(this,ecModel);// Do not update coordinate system here. Because that coord system update in
// each frame is not a good user experience. So we follow the rule that
// the extent of the coordinate system is determin in the first frame (the
// frame is executed immedietely after task reset.
// this._coordSysMgr.update(ecModel, api);
// console.log('--- ec frame visual ---', remainTime);
scheduler.performVisualTasks(ecModel);renderSeries(this,this._model,api,'remain',{});remainTime-=+new Date()-startTime;}while(remainTime>0&&scheduler.unfinished);// Call flush explicitly for trigger finished event.
if(!scheduler.unfinished){this._zr.flush();}// Else, zr flushing be ensue within the same frame,
// because zr flushing is after onframe event.
}};ECharts.prototype.getDom=function(){return this._dom;};ECharts.prototype.getId=function(){return this.id;};ECharts.prototype.getZr=function(){return this._zr;};ECharts.prototype.isSSR=function(){return this._ssr;};/* eslint-disable-next-line */ECharts.prototype.setOption=function(option,notMerge,lazyUpdate){if(this[IN_MAIN_PROCESS_KEY]){if(false){}return;}if(this._disposed){disposedWarning(this.id);return;}var silent;var replaceMerge;var transitionOpt;if((0,util/* isObject */.Kn)(notMerge)){lazyUpdate=notMerge.lazyUpdate;silent=notMerge.silent;replaceMerge=notMerge.replaceMerge;transitionOpt=notMerge.transition;notMerge=notMerge.notMerge;}this[IN_MAIN_PROCESS_KEY]=true;if(!this._model||notMerge){var optionManager=new OptionManager/* default */.Z(this._api);var theme=this._theme;var ecModel=this._model=new Global/* default */.Z();ecModel.scheduler=this._scheduler;ecModel.ssr=this._ssr;ecModel.init(null,null,null,theme,this._locale,optionManager);}this._model.setOption(option,{replaceMerge:replaceMerge},optionPreprocessorFuncs);var updateParams={seriesTransition:transitionOpt,optionChanged:true};if(lazyUpdate){this[PENDING_UPDATE]={silent:silent,updateParams:updateParams};this[IN_MAIN_PROCESS_KEY]=false;// `setOption(option, {lazyMode: true})` may be called when zrender has been slept.
// It should wake it up to make sure zrender start to render at the next frame.
this.getZr().wakeUp();}else{try{prepare(this);updateMethods.update.call(this,null,updateParams);}catch(e){this[PENDING_UPDATE]=null;this[IN_MAIN_PROCESS_KEY]=false;throw e;}// Ensure zr refresh sychronously, and then pixel in canvas can be
// fetched after `setOption`.
if(!this._ssr){// not use flush when using ssr mode.
this._zr.flush();}this[PENDING_UPDATE]=null;this[IN_MAIN_PROCESS_KEY]=false;flushPendingActions.call(this,silent);triggerUpdatedEvent.call(this,silent);}};/**
   * @deprecated
   */ECharts.prototype.setTheme=function(){(0,log/* deprecateLog */.Sh)('ECharts#setTheme() is DEPRECATED in ECharts 3.0');};// We don't want developers to use getModel directly.
ECharts.prototype.getModel=function(){return this._model;};ECharts.prototype.getOption=function(){return this._model&&this._model.getOption();};ECharts.prototype.getWidth=function(){return this._zr.getWidth();};ECharts.prototype.getHeight=function(){return this._zr.getHeight();};ECharts.prototype.getDevicePixelRatio=function(){return this._zr.painter.dpr/* eslint-disable-next-line */||hasWindow&&window.devicePixelRatio||1;};/**
   * Get canvas which has all thing rendered
   * @deprecated Use renderToCanvas instead.
   */ECharts.prototype.getRenderedCanvas=function(opts){if(false){}return this.renderToCanvas(opts);};ECharts.prototype.renderToCanvas=function(opts){opts=opts||{};var painter=this._zr.painter;if(false){}return painter.getRenderedCanvas({backgroundColor:opts.backgroundColor||this._model.get('backgroundColor'),pixelRatio:opts.pixelRatio||this.getDevicePixelRatio()});};ECharts.prototype.renderToSVGString=function(opts){opts=opts||{};var painter=this._zr.painter;if(false){}return painter.renderToString({useViewBox:opts.useViewBox});};/**
   * Get svg data url
   */ECharts.prototype.getSvgDataURL=function(){if(!env/* default.svgSupported */.Z.svgSupported){return;}var zr=this._zr;var list=zr.storage.getDisplayList();// Stop animations
(0,util/* each */.S6)(list,function(el){el.stopAnimation(null,true);});return zr.painter.toDataURL();};ECharts.prototype.getDataURL=function(opts){if(this._disposed){disposedWarning(this.id);return;}opts=opts||{};var excludeComponents=opts.excludeComponents;var ecModel=this._model;var excludesComponentViews=[];var self=this;(0,util/* each */.S6)(excludeComponents,function(componentType){ecModel.eachComponent({mainType:componentType},function(component){var view=self._componentsMap[component.__viewId];if(!view.group.ignore){excludesComponentViews.push(view);view.group.ignore=true;}});});var url=this._zr.painter.getType()==='svg'?this.getSvgDataURL():this.renderToCanvas(opts).toDataURL('image/'+(opts&&opts.type||'png'));(0,util/* each */.S6)(excludesComponentViews,function(view){view.group.ignore=false;});return url;};ECharts.prototype.getConnectedDataURL=function(opts){if(this._disposed){disposedWarning(this.id);return;}var isSvg=opts.type==='svg';var groupId=this.group;var mathMin=Math.min;var mathMax=Math.max;var MAX_NUMBER=Infinity;if(connectedGroups[groupId]){var left_1=MAX_NUMBER;var top_1=MAX_NUMBER;var right_1=-MAX_NUMBER;var bottom_1=-MAX_NUMBER;var canvasList_1=[];var dpr_1=opts&&opts.pixelRatio||this.getDevicePixelRatio();(0,util/* each */.S6)(instances,function(chart,id){if(chart.group===groupId){var canvas=isSvg?chart.getZr().painter.getSvgDom().innerHTML:chart.renderToCanvas((0,util/* clone */.d9)(opts));var boundingRect=chart.getDom().getBoundingClientRect();left_1=mathMin(boundingRect.left,left_1);top_1=mathMin(boundingRect.top,top_1);right_1=mathMax(boundingRect.right,right_1);bottom_1=mathMax(boundingRect.bottom,bottom_1);canvasList_1.push({dom:canvas,left:boundingRect.left,top:boundingRect.top});}});left_1*=dpr_1;top_1*=dpr_1;right_1*=dpr_1;bottom_1*=dpr_1;var width=right_1-left_1;var height=bottom_1-top_1;var targetCanvas=platform/* platformApi.createCanvas */.qW.createCanvas();var zr_1=zrender/* init */.S1(targetCanvas,{renderer:isSvg?'svg':'canvas'});zr_1.resize({width:width,height:height});if(isSvg){var content_1='';(0,util/* each */.S6)(canvasList_1,function(item){var x=item.left-left_1;var y=item.top-top_1;content_1+='<g transform="translate('+x+','+y+')">'+item.dom+'</g>';});zr_1.painter.getSvgRoot().innerHTML=content_1;if(opts.connectedBackgroundColor){zr_1.painter.setBackgroundColor(opts.connectedBackgroundColor);}zr_1.refreshImmediately();return zr_1.painter.toDataURL();}else{// Background between the charts
if(opts.connectedBackgroundColor){zr_1.add(new Rect/* default */.Z({shape:{x:0,y:0,width:width,height:height},style:{fill:opts.connectedBackgroundColor}}));}(0,util/* each */.S6)(canvasList_1,function(item){var img=new Image/* default */.ZP({style:{x:item.left*dpr_1-left_1,y:item.top*dpr_1-top_1,image:item.dom}});zr_1.add(img);});zr_1.refreshImmediately();return targetCanvas.toDataURL('image/'+(opts&&opts.type||'png'));}}else{return this.getDataURL(opts);}};ECharts.prototype.convertToPixel=function(finder,value){return doConvertPixel(this,'convertToPixel',finder,value);};ECharts.prototype.convertFromPixel=function(finder,value){return doConvertPixel(this,'convertFromPixel',finder,value);};/**
   * Is the specified coordinate systems or components contain the given pixel point.
   * @param {Array|number} value
   * @return {boolean} result
   */ECharts.prototype.containPixel=function(finder,value){if(this._disposed){disposedWarning(this.id);return;}var ecModel=this._model;var result;var findResult=model/* parseFinder */.pm(ecModel,finder);(0,util/* each */.S6)(findResult,function(models,key){key.indexOf('Models')>=0&&(0,util/* each */.S6)(models,function(model){var coordSys=model.coordinateSystem;if(coordSys&&coordSys.containPoint){result=result||!!coordSys.containPoint(value);}else if(key==='seriesModels'){var view=this._chartsMap[model.__viewId];if(view&&view.containPoint){result=result||view.containPoint(value,model);}else{if(false){}}}else{if(false){}}},this);},this);return!!result;};/**
   * Get visual from series or data.
   * @param finder
   *        If string, e.g., 'series', means {seriesIndex: 0}.
   *        If Object, could contain some of these properties below:
   *        {
   *            seriesIndex / seriesId / seriesName,
   *            dataIndex / dataIndexInside
   *        }
   *        If dataIndex is not specified, series visual will be fetched,
   *        but not data item visual.
   *        If all of seriesIndex, seriesId, seriesName are not specified,
   *        visual will be fetched from first series.
   * @param visualType 'color', 'symbol', 'symbolSize'
   */ECharts.prototype.getVisual=function(finder,visualType){var ecModel=this._model;var parsedFinder=model/* parseFinder */.pm(ecModel,finder,{defaultMainType:'series'});var seriesModel=parsedFinder.seriesModel;if(false){}var data=seriesModel.getData();var dataIndexInside=parsedFinder.hasOwnProperty('dataIndexInside')?parsedFinder.dataIndexInside:parsedFinder.hasOwnProperty('dataIndex')?data.indexOfRawIndex(parsedFinder.dataIndex):null;return dataIndexInside!=null?(0,helper/* getItemVisualFromData */.Or)(data,dataIndexInside,visualType):(0,helper/* getVisualFromData */.UL)(data,visualType);};/**
   * Get view of corresponding component model
   */ECharts.prototype.getViewOfComponentModel=function(componentModel){return this._componentsMap[componentModel.__viewId];};/**
   * Get view of corresponding series model
   */ECharts.prototype.getViewOfSeriesModel=function(seriesModel){return this._chartsMap[seriesModel.__viewId];};ECharts.prototype._initEvents=function(){var _this=this;(0,util/* each */.S6)(MOUSE_EVENT_NAMES,function(eveName){var handler=function handler(e){var ecModel=_this.getModel();var el=e.target;var params;var isGlobalOut=eveName==='globalout';// no e.target when 'globalout'.
if(isGlobalOut){params={};}else{el&&(0,util_event/* findEventDispatcher */.o)(el,function(parent){var ecData=(0,innerStore/* getECData */.A)(parent);if(ecData&&ecData.dataIndex!=null){var dataModel=ecData.dataModel||ecModel.getSeriesByIndex(ecData.seriesIndex);params=dataModel&&dataModel.getDataParams(ecData.dataIndex,ecData.dataType)||{};return true;}// If element has custom eventData of components
else if(ecData.eventData){params=(0,util/* extend */.l7)({},ecData.eventData);return true;}},true);}// Contract: if params prepared in mouse event,
// these properties must be specified:
// {
//    componentType: string (component main type)
//    componentIndex: number
// }
// Otherwise event query can not work.
if(params){var componentType=params.componentType;var componentIndex=params.componentIndex;// Special handling for historic reason: when trigger by
// markLine/markPoint/markArea, the componentType is
// 'markLine'/'markPoint'/'markArea', but we should better
// enable them to be queried by seriesIndex, since their
// option is set in each series.
if(componentType==='markLine'||componentType==='markPoint'||componentType==='markArea'){componentType='series';componentIndex=params.seriesIndex;}var model=componentType&&componentIndex!=null&&ecModel.getComponent(componentType,componentIndex);var view=model&&_this[model.mainType==='series'?'_chartsMap':'_componentsMap'][model.__viewId];if(false){}params.event=e;params.type=eveName;_this._$eventProcessor.eventInfo={targetEl:el,packedEvent:params,model:model,view:view};_this.trigger(eveName,params);}};// Consider that some component (like tooltip, brush, ...)
// register zr event handler, but user event handler might
// do anything, such as call `setOption` or `dispatchAction`,
// which probably update any of the content and probably
// cause problem if it is called previous other inner handlers.
handler.zrEventfulCallAtLast=true;_this._zr.on(eveName,handler,_this);});(0,util/* each */.S6)(eventActionMap,function(actionType,eventType){_this._messageCenter.on(eventType,function(event){this.trigger(eventType,event);},_this);});// Extra events
// TODO register?
(0,util/* each */.S6)(['selectchanged'],function(eventType){_this._messageCenter.on(eventType,function(event){this.trigger(eventType,event);},_this);});(0,dataSelectAction/* handleLegacySelectEvents */.s)(this._messageCenter,this,this._api);};ECharts.prototype.isDisposed=function(){return this._disposed;};ECharts.prototype.clear=function(){if(this._disposed){disposedWarning(this.id);return;}this.setOption({series:[]},true);};ECharts.prototype.dispose=function(){if(this._disposed){disposedWarning(this.id);return;}this._disposed=true;var dom=this.getDom();if(dom){model/* setAttribute */.P$(this.getDom(),DOM_ATTRIBUTE_KEY,'');}var chart=this;var api=chart._api;var ecModel=chart._model;(0,util/* each */.S6)(chart._componentsViews,function(component){component.dispose(ecModel,api);});(0,util/* each */.S6)(chart._chartsViews,function(chart){chart.dispose(ecModel,api);});// Dispose after all views disposed
chart._zr.dispose();// Set properties to null.
// To reduce the memory cost in case the top code still holds this instance unexpectedly.
chart._dom=chart._model=chart._chartsMap=chart._componentsMap=chart._chartsViews=chart._componentsViews=chart._scheduler=chart._api=chart._zr=chart._throttledZrFlush=chart._theme=chart._coordSysMgr=chart._messageCenter=null;delete instances[chart.id];};/**
   * Resize the chart
   */ECharts.prototype.resize=function(opts){if(this[IN_MAIN_PROCESS_KEY]){if(false){}return;}if(this._disposed){disposedWarning(this.id);return;}this._zr.resize(opts);var ecModel=this._model;// Resize loading effect
this._loadingFX&&this._loadingFX.resize();if(!ecModel){return;}var needPrepare=ecModel.resetOption('media');var silent=opts&&opts.silent;// There is some real cases that:
// chart.setOption(option, { lazyUpdate: true });
// chart.resize();
if(this[PENDING_UPDATE]){if(silent==null){silent=this[PENDING_UPDATE].silent;}needPrepare=true;this[PENDING_UPDATE]=null;}this[IN_MAIN_PROCESS_KEY]=true;try{needPrepare&&prepare(this);updateMethods.update.call(this,{type:'resize',animation:(0,util/* extend */.l7)({// Disable animation
duration:0},opts&&opts.animation)});}catch(e){this[IN_MAIN_PROCESS_KEY]=false;throw e;}this[IN_MAIN_PROCESS_KEY]=false;flushPendingActions.call(this,silent);triggerUpdatedEvent.call(this,silent);};ECharts.prototype.showLoading=function(name,cfg){if(this._disposed){disposedWarning(this.id);return;}if((0,util/* isObject */.Kn)(name)){cfg=name;name='';}name=name||'default';this.hideLoading();if(!loadingEffects[name]){if(false){}return;}var el=loadingEffects[name](this._api,cfg);var zr=this._zr;this._loadingFX=el;zr.add(el);};/**
   * Hide loading effect
   */ECharts.prototype.hideLoading=function(){if(this._disposed){disposedWarning(this.id);return;}this._loadingFX&&this._zr.remove(this._loadingFX);this._loadingFX=null;};ECharts.prototype.makeActionFromEvent=function(eventObj){var payload=(0,util/* extend */.l7)({},eventObj);payload.type=eventActionMap[eventObj.type];return payload;};/**
   * @param opt If pass boolean, means opt.silent
   * @param opt.silent Default `false`. Whether trigger events.
   * @param opt.flush Default `undefined`.
   *        true: Flush immediately, and then pixel in canvas can be fetched
   *            immediately. Caution: it might affect performance.
   *        false: Not flush.
   *        undefined: Auto decide whether perform flush.
   */ECharts.prototype.dispatchAction=function(payload,opt){if(this._disposed){disposedWarning(this.id);return;}if(!(0,util/* isObject */.Kn)(opt)){opt={silent:!!opt};}if(!actions[payload.type]){return;}// Avoid dispatch action before setOption. Especially in `connect`.
if(!this._model){return;}// May dispatchAction in rendering procedure
if(this[IN_MAIN_PROCESS_KEY]){this._pendingActions.push(payload);return;}var silent=opt.silent;doDispatchAction.call(this,payload,silent);var flush=opt.flush;if(flush){this._zr.flush();}else if(flush!==false&&env/* default.browser.weChat */.Z.browser.weChat){// In WeChat embeded browser, `requestAnimationFrame` and `setInterval`
// hang when sliding page (on touch event), which cause that zr does not
// refresh util user interaction finished, which is not expected.
// But `dispatchAction` may be called too frequently when pan on touch
// screen, which impacts performance if do not throttle them.
this._throttledZrFlush();}flushPendingActions.call(this,silent);triggerUpdatedEvent.call(this,silent);};ECharts.prototype.updateLabelLayout=function(){core_lifecycle.trigger('series:layoutlabels',this._model,this._api,{// Not adding series labels.
// TODO
updatedSeries:[]});};ECharts.prototype.appendData=function(params){if(this._disposed){disposedWarning(this.id);return;}var seriesIndex=params.seriesIndex;var ecModel=this.getModel();var seriesModel=ecModel.getSeriesByIndex(seriesIndex);if(false){}seriesModel.appendData(params);// Note: `appendData` does not support that update extent of coordinate
// system, util some scenario require that. In the expected usage of
// `appendData`, the initial extent of coordinate system should better
// be fixed by axis `min`/`max` setting or initial data, otherwise if
// the extent changed while `appendData`, the location of the painted
// graphic elements have to be changed, which make the usage of
// `appendData` meaningless.
this._scheduler.unfinished=true;this.getZr().wakeUp();};// A work around for no `internal` modifier in ts yet but
// need to strictly hide private methods to JS users.
ECharts.internalField=function(){prepare=function prepare(ecIns){var scheduler=ecIns._scheduler;scheduler.restorePipelines(ecIns._model);scheduler.prepareStageTasks();prepareView(ecIns,true);prepareView(ecIns,false);scheduler.plan();};/**
     * Prepare view instances of charts and components
     */prepareView=function prepareView(ecIns,isComponent){var ecModel=ecIns._model;var scheduler=ecIns._scheduler;var viewList=isComponent?ecIns._componentsViews:ecIns._chartsViews;var viewMap=isComponent?ecIns._componentsMap:ecIns._chartsMap;var zr=ecIns._zr;var api=ecIns._api;for(var i=0;i<viewList.length;i++){viewList[i].__alive=false;}isComponent?ecModel.eachComponent(function(componentType,model){componentType!=='series'&&doPrepare(model);}):ecModel.eachSeries(doPrepare);function doPrepare(model){// By defaut view will be reused if possible for the case that `setOption` with "notMerge"
// mode and need to enable transition animation. (Usually, when they have the same id, or
// especially no id but have the same type & name & index. See the `model.id` generation
// rule in `makeIdAndName` and `viewId` generation rule here).
// But in `replaceMerge` mode, this feature should be able to disabled when it is clear that
// the new model has nothing to do with the old model.
var requireNewView=model.__requireNewView;// This command should not work twice.
model.__requireNewView=false;// Consider: id same and type changed.
var viewId='_ec_'+model.id+'_'+model.type;var view=!requireNewView&&viewMap[viewId];if(!view){var classType=(0,clazz/* parseClassType */.u9)(model.type);var Clazz=isComponent?Component/* default.getClass */.Z.getClass(classType.main,classType.sub):// FIXME:TS
// (ChartView as ChartViewConstructor).getClass('series', classType.sub)
// For backward compat, still support a chart type declared as only subType
// like "liquidfill", but recommend "series.liquidfill"
// But need a base class to make a type series.
Chart/* default.getClass */.Z.getClass(classType.sub);if(false){}view=new Clazz();view.init(ecModel,api);viewMap[viewId]=view;viewList.push(view);zr.add(view.group);}model.__viewId=view.__id=viewId;view.__alive=true;view.__model=model;view.group.__ecComponentInfo={mainType:model.mainType,index:model.componentIndex};!isComponent&&scheduler.prepareView(view,model,ecModel,api);}for(var i=0;i<viewList.length;){var view=viewList[i];if(!view.__alive){!isComponent&&view.renderTask.dispose();zr.remove(view.group);view.dispose(ecModel,api);viewList.splice(i,1);if(viewMap[view.__id]===view){delete viewMap[view.__id];}view.__id=view.group.__ecComponentInfo=null;}else{i++;}}};updateDirectly=function updateDirectly(ecIns,method,payload,mainType,subType){var ecModel=ecIns._model;ecModel.setUpdatePayload(payload);// broadcast
if(!mainType){// FIXME
// Chart will not be update directly here, except set dirty.
// But there is no such scenario now.
(0,util/* each */.S6)([].concat(ecIns._componentsViews).concat(ecIns._chartsViews),callView);return;}var query={};query[mainType+'Id']=payload[mainType+'Id'];query[mainType+'Index']=payload[mainType+'Index'];query[mainType+'Name']=payload[mainType+'Name'];var condition={mainType:mainType,query:query};subType&&(condition.subType=subType);// subType may be '' by parseClassType;
var excludeSeriesId=payload.excludeSeriesId;var excludeSeriesIdMap;if(excludeSeriesId!=null){excludeSeriesIdMap=(0,util/* createHashMap */.kW)();(0,util/* each */.S6)(model/* normalizeToArray */.kF(excludeSeriesId),function(id){var modelId=model/* convertOptionIdName */.U5(id,null);if(modelId!=null){excludeSeriesIdMap.set(modelId,true);}});}// If dispatchAction before setOption, do nothing.
ecModel&&ecModel.eachComponent(condition,function(model){var isExcluded=excludeSeriesIdMap&&excludeSeriesIdMap.get(model.id)!==null;if(isExcluded){return;};if((0,states/* isHighDownPayload */.xp)(payload)){if(model instanceof Series/* default */.Z){if(payload.type===states/* HIGHLIGHT_ACTION_TYPE */.Ki&&!payload.notBlur&&!model.get(['emphasis','disabled'])){(0,states/* blurSeriesFromHighlightPayload */.UL)(model,payload,ecIns._api);}}else{var _a=(0,states/* findComponentHighDownDispatchers */.oJ)(model.mainType,model.componentIndex,payload.name,ecIns._api),focusSelf=_a.focusSelf,dispatchers=_a.dispatchers;if(payload.type===states/* HIGHLIGHT_ACTION_TYPE */.Ki&&focusSelf&&!payload.notBlur){(0,states/* blurComponent */.zI)(model.mainType,model.componentIndex,ecIns._api);}// PENDING:
// Whether to put this "enter emphasis" code in `ComponentView`,
// which will be the same as `ChartView` but might be not necessary
// and will be far from this logic.
if(dispatchers){(0,util/* each */.S6)(dispatchers,function(dispatcher){payload.type===states/* HIGHLIGHT_ACTION_TYPE */.Ki?(0,states/* enterEmphasis */.fD)(dispatcher):(0,states/* leaveEmphasis */.Mh)(dispatcher);});}}}else if((0,states/* isSelectChangePayload */.aG)(payload)){// TODO geo
if(model instanceof Series/* default */.Z){(0,states/* toggleSelectionFromPayload */.og)(model,payload,ecIns._api);(0,states/* updateSeriesElementSelection */.ci)(model);markStatusToUpdate(ecIns);}}},ecIns);ecModel&&ecModel.eachComponent(condition,function(model){var isExcluded=excludeSeriesIdMap&&excludeSeriesIdMap.get(model.id)!==null;if(isExcluded){return;};callView(ecIns[mainType==='series'?'_chartsMap':'_componentsMap'][model.__viewId]);},ecIns);function callView(view){view&&view.__alive&&view[method]&&view[method](view.__model,ecModel,ecIns._api,payload);}};updateMethods={prepareAndUpdate:function prepareAndUpdate(payload){prepare(this);updateMethods.update.call(this,payload,{// Needs to mark option changed if newOption is given.
// It's from MagicType.
// TODO If use a separate flag optionChanged in payload?
optionChanged:payload.newOption!=null});},update:function update(payload,updateParams){var ecModel=this._model;var api=this._api;var zr=this._zr;var coordSysMgr=this._coordSysMgr;var scheduler=this._scheduler;// update before setOption
if(!ecModel){return;}ecModel.setUpdatePayload(payload);scheduler.restoreData(ecModel,payload);scheduler.performSeriesTasks(ecModel);// TODO
// Save total ecModel here for undo/redo (after restoring data and before processing data).
// Undo (restoration of total ecModel) can be carried out in 'action' or outside API call.
// Create new coordinate system each update
// In LineView may save the old coordinate system and use it to get the orignal point
coordSysMgr.create(ecModel,api);scheduler.performDataProcessorTasks(ecModel,payload);// Current stream render is not supported in data process. So we can update
// stream modes after data processing, where the filtered data is used to
// deteming whether use progressive rendering.
updateStreamModes(this,ecModel);// We update stream modes before coordinate system updated, then the modes info
// can be fetched when coord sys updating (consider the barGrid extent fix). But
// the drawback is the full coord info can not be fetched. Fortunately this full
// coord is not requied in stream mode updater currently.
coordSysMgr.update(ecModel,api);clearColorPalette(ecModel);scheduler.performVisualTasks(ecModel,payload);render(this,ecModel,api,payload,updateParams);// Set background
var backgroundColor=ecModel.get('backgroundColor')||'transparent';var darkMode=ecModel.get('darkMode');zr.setBackgroundColor(backgroundColor);// Force set dark mode.
if(darkMode!=null&&darkMode!=='auto'){zr.setDarkMode(darkMode);}core_lifecycle.trigger('afterupdate',ecModel,api);},updateTransform:function updateTransform(payload){var _this=this;var ecModel=this._model;var api=this._api;// update before setOption
if(!ecModel){return;}ecModel.setUpdatePayload(payload);// ChartView.markUpdateMethod(payload, 'updateTransform');
var componentDirtyList=[];ecModel.eachComponent(function(componentType,componentModel){if(componentType==='series'){return;}var componentView=_this.getViewOfComponentModel(componentModel);if(componentView&&componentView.__alive){if(componentView.updateTransform){var result=componentView.updateTransform(componentModel,ecModel,api,payload);result&&result.update&&componentDirtyList.push(componentView);}else{componentDirtyList.push(componentView);}}});var seriesDirtyMap=(0,util/* createHashMap */.kW)();ecModel.eachSeries(function(seriesModel){var chartView=_this._chartsMap[seriesModel.__viewId];if(chartView.updateTransform){var result=chartView.updateTransform(seriesModel,ecModel,api,payload);result&&result.update&&seriesDirtyMap.set(seriesModel.uid,1);}else{seriesDirtyMap.set(seriesModel.uid,1);}});clearColorPalette(ecModel);// Keep pipe to the exist pipeline because it depends on the render task of the full pipeline.
// this._scheduler.performVisualTasks(ecModel, payload, 'layout', true);
this._scheduler.performVisualTasks(ecModel,payload,{setDirty:true,dirtyMap:seriesDirtyMap});// Currently, not call render of components. Geo render cost a lot.
// renderComponents(ecIns, ecModel, api, payload, componentDirtyList);
renderSeries(this,ecModel,api,payload,{},seriesDirtyMap);core_lifecycle.trigger('afterupdate',ecModel,api);},updateView:function updateView(payload){var ecModel=this._model;// update before setOption
if(!ecModel){return;}ecModel.setUpdatePayload(payload);Chart/* default.markUpdateMethod */.Z.markUpdateMethod(payload,'updateView');clearColorPalette(ecModel);// Keep pipe to the exist pipeline because it depends on the render task of the full pipeline.
this._scheduler.performVisualTasks(ecModel,payload,{setDirty:true});render(this,ecModel,this._api,payload,{});core_lifecycle.trigger('afterupdate',ecModel,this._api);},updateVisual:function updateVisual(payload){// updateMethods.update.call(this, payload);
var _this=this;var ecModel=this._model;// update before setOption
if(!ecModel){return;}ecModel.setUpdatePayload(payload);// clear all visual
ecModel.eachSeries(function(seriesModel){seriesModel.getData().clearAllVisual();});// Perform visual
Chart/* default.markUpdateMethod */.Z.markUpdateMethod(payload,'updateVisual');clearColorPalette(ecModel);// Keep pipe to the exist pipeline because it depends on the render task of the full pipeline.
this._scheduler.performVisualTasks(ecModel,payload,{visualType:'visual',setDirty:true});ecModel.eachComponent(function(componentType,componentModel){if(componentType!=='series'){var componentView=_this.getViewOfComponentModel(componentModel);componentView&&componentView.__alive&&componentView.updateVisual(componentModel,ecModel,_this._api,payload);}});ecModel.eachSeries(function(seriesModel){var chartView=_this._chartsMap[seriesModel.__viewId];chartView.updateVisual(seriesModel,ecModel,_this._api,payload);});core_lifecycle.trigger('afterupdate',ecModel,this._api);},updateLayout:function updateLayout(payload){updateMethods.update.call(this,payload);}};doConvertPixel=function doConvertPixel(ecIns,methodName,finder,value){if(ecIns._disposed){disposedWarning(ecIns.id);return;}var ecModel=ecIns._model;var coordSysList=ecIns._coordSysMgr.getCoordinateSystems();var result;var parsedFinder=model/* parseFinder */.pm(ecModel,finder);for(var i=0;i<coordSysList.length;i++){var coordSys=coordSysList[i];if(coordSys[methodName]&&(result=coordSys[methodName](ecModel,parsedFinder,value))!=null){return result;}}if(false){}};updateStreamModes=function updateStreamModes(ecIns,ecModel){var chartsMap=ecIns._chartsMap;var scheduler=ecIns._scheduler;ecModel.eachSeries(function(seriesModel){scheduler.updateStreamModes(seriesModel,chartsMap[seriesModel.__viewId]);});};doDispatchAction=function doDispatchAction(payload,silent){var _this=this;var ecModel=this.getModel();var payloadType=payload.type;var escapeConnect=payload.escapeConnect;var actionWrap=actions[payloadType];var actionInfo=actionWrap.actionInfo;var cptTypeTmp=(actionInfo.update||'update').split(':');var updateMethod=cptTypeTmp.pop();var cptType=cptTypeTmp[0]!=null&&(0,clazz/* parseClassType */.u9)(cptTypeTmp[0]);this[IN_MAIN_PROCESS_KEY]=true;var payloads=[payload];var batched=false;// Batch action
if(payload.batch){batched=true;payloads=(0,util/* map */.UI)(payload.batch,function(item){item=(0,util/* defaults */.ce)((0,util/* extend */.l7)({},item),payload);item.batch=null;return item;});}var eventObjBatch=[];var eventObj;var isSelectChange=(0,states/* isSelectChangePayload */.aG)(payload);var isHighDown=(0,states/* isHighDownPayload */.xp)(payload);// Only leave blur once if there are multiple batches.
if(isHighDown){(0,states/* allLeaveBlur */.T5)(this._api);}(0,util/* each */.S6)(payloads,function(batchItem){// Action can specify the event by return it.
eventObj=actionWrap.action(batchItem,_this._model,_this._api);// Emit event outside
eventObj=eventObj||(0,util/* extend */.l7)({},batchItem);// Convert type to eventType
eventObj.type=actionInfo.event||eventObj.type;eventObjBatch.push(eventObj);// light update does not perform data process, layout and visual.
if(isHighDown){var _a=model/* preParseFinder */.zH(payload),queryOptionMap=_a.queryOptionMap,mainTypeSpecified=_a.mainTypeSpecified;var componentMainType=mainTypeSpecified?queryOptionMap.keys()[0]:'series';updateDirectly(_this,updateMethod,batchItem,componentMainType);markStatusToUpdate(_this);}else if(isSelectChange){// At present `dispatchAction({ type: 'select', ... })` is not supported on components.
// geo still use 'geoselect'.
updateDirectly(_this,updateMethod,batchItem,'series');markStatusToUpdate(_this);}else if(cptType){updateDirectly(_this,updateMethod,batchItem,cptType.main,cptType.sub);}});if(updateMethod!=='none'&&!isHighDown&&!isSelectChange&&!cptType){try{// Still dirty
if(this[PENDING_UPDATE]){prepare(this);updateMethods.update.call(this,payload);this[PENDING_UPDATE]=null;}else{updateMethods[updateMethod].call(this,payload);}}catch(e){this[IN_MAIN_PROCESS_KEY]=false;throw e;}}// Follow the rule of action batch
if(batched){eventObj={type:actionInfo.event||payloadType,escapeConnect:escapeConnect,batch:eventObjBatch};}else{eventObj=eventObjBatch[0];}this[IN_MAIN_PROCESS_KEY]=false;if(!silent){var messageCenter=this._messageCenter;messageCenter.trigger(eventObj.type,eventObj);// Extra triggered 'selectchanged' event
if(isSelectChange){var newObj={type:'selectchanged',escapeConnect:escapeConnect,selected:(0,states/* getAllSelectedIndices */.C5)(ecModel),isFromClick:payload.isFromClick||false,fromAction:payload.type,fromActionPayload:payload};messageCenter.trigger(newObj.type,newObj);}}};flushPendingActions=function flushPendingActions(silent){var pendingActions=this._pendingActions;while(pendingActions.length){var payload=pendingActions.shift();doDispatchAction.call(this,payload,silent);}};triggerUpdatedEvent=function triggerUpdatedEvent(silent){!silent&&this.trigger('updated');};/**
     * Event `rendered` is triggered when zr
     * rendered. It is useful for realtime
     * snapshot (reflect animation).
     *
     * Event `finished` is triggered when:
     * (1) zrender rendering finished.
     * (2) initial animation finished.
     * (3) progressive rendering finished.
     * (4) no pending action.
     * (5) no delayed setOption needs to be processed.
     */bindRenderedEvent=function bindRenderedEvent(zr,ecIns){zr.on('rendered',function(params){ecIns.trigger('rendered',params);// The `finished` event should not be triggered repeatly,
// so it should only be triggered when rendering indeed happend
// in zrender. (Consider the case that dipatchAction is keep
// triggering when mouse move).
if(// Although zr is dirty if initial animation is not finished
// and this checking is called on frame, we also check
// animation finished for robustness.
zr.animation.isFinished()&&!ecIns[PENDING_UPDATE]&&!ecIns._scheduler.unfinished&&!ecIns._pendingActions.length){ecIns.trigger('finished');}});};bindMouseEvent=function bindMouseEvent(zr,ecIns){zr.on('mouseover',function(e){var el=e.target;var dispatcher=(0,util_event/* findEventDispatcher */.o)(el,states/* isHighDownDispatcher */.Av);if(dispatcher){(0,states/* handleGlobalMouseOverForHighDown */.$l)(dispatcher,e,ecIns._api);markStatusToUpdate(ecIns);}}).on('mouseout',function(e){var el=e.target;var dispatcher=(0,util_event/* findEventDispatcher */.o)(el,states/* isHighDownDispatcher */.Av);if(dispatcher){(0,states/* handleGlobalMouseOutForHighDown */.xr)(dispatcher,e,ecIns._api);markStatusToUpdate(ecIns);}}).on('click',function(e){var el=e.target;var dispatcher=(0,util_event/* findEventDispatcher */.o)(el,function(target){return (0,innerStore/* getECData */.A)(target).dataIndex!=null;},true);if(dispatcher){var actionType=dispatcher.selected?'unselect':'select';var ecData=(0,innerStore/* getECData */.A)(dispatcher);ecIns._api.dispatchAction({type:actionType,dataType:ecData.dataType,dataIndexInside:ecData.dataIndex,seriesIndex:ecData.seriesIndex,isFromClick:true});}});};function clearColorPalette(ecModel){ecModel.clearColorPalette();ecModel.eachSeries(function(seriesModel){seriesModel.clearColorPalette();});};// Allocate zlevels for series and components
function allocateZlevels(ecModel){;var componentZLevels=[];var seriesZLevels=[];var hasSeperateZLevel=false;ecModel.eachComponent(function(componentType,componentModel){var zlevel=componentModel.get('zlevel')||0;var z=componentModel.get('z')||0;var zlevelKey=componentModel.getZLevelKey();hasSeperateZLevel=hasSeperateZLevel||!!zlevelKey;(componentType==='series'?seriesZLevels:componentZLevels).push({zlevel:zlevel,z:z,idx:componentModel.componentIndex,type:componentType,key:zlevelKey});});if(hasSeperateZLevel){// Series after component
var zLevels=componentZLevels.concat(seriesZLevels);var lastSeriesZLevel_1;var lastSeriesKey_1;(0,timsort/* default */.Z)(zLevels,function(a,b){if(a.zlevel===b.zlevel){return a.z-b.z;}return a.zlevel-b.zlevel;});(0,util/* each */.S6)(zLevels,function(item){var componentModel=ecModel.getComponent(item.type,item.idx);var zlevel=item.zlevel;var key=item.key;if(lastSeriesZLevel_1!=null){zlevel=Math.max(lastSeriesZLevel_1,zlevel);}if(key){if(zlevel===lastSeriesZLevel_1&&key!==lastSeriesKey_1){zlevel++;}lastSeriesKey_1=key;}else if(lastSeriesKey_1){if(zlevel===lastSeriesZLevel_1){zlevel++;}lastSeriesKey_1='';}lastSeriesZLevel_1=zlevel;componentModel.setZLevel(zlevel);});}}render=function render(ecIns,ecModel,api,payload,updateParams){allocateZlevels(ecModel);renderComponents(ecIns,ecModel,api,payload,updateParams);(0,util/* each */.S6)(ecIns._chartsViews,function(chart){chart.__alive=false;});renderSeries(ecIns,ecModel,api,payload,updateParams);// Remove groups of unrendered charts
(0,util/* each */.S6)(ecIns._chartsViews,function(chart){if(!chart.__alive){chart.remove(ecModel,api);}});};renderComponents=function renderComponents(ecIns,ecModel,api,payload,updateParams,dirtyList){(0,util/* each */.S6)(dirtyList||ecIns._componentsViews,function(componentView){var componentModel=componentView.__model;clearStates(componentModel,componentView);componentView.render(componentModel,ecModel,api,payload);updateZ(componentModel,componentView);updateStates(componentModel,componentView);});};/**
     * Render each chart and component
     */renderSeries=function renderSeries(ecIns,ecModel,api,payload,updateParams,dirtyMap){// Render all charts
var scheduler=ecIns._scheduler;updateParams=(0,util/* extend */.l7)(updateParams||{},{updatedSeries:ecModel.getSeries()});// TODO progressive?
core_lifecycle.trigger('series:beforeupdate',ecModel,api,updateParams);var unfinished=false;ecModel.eachSeries(function(seriesModel){var chartView=ecIns._chartsMap[seriesModel.__viewId];chartView.__alive=true;var renderTask=chartView.renderTask;scheduler.updatePayload(renderTask,payload);// TODO states on marker.
clearStates(seriesModel,chartView);if(dirtyMap&&dirtyMap.get(seriesModel.uid)){renderTask.dirty();}if(renderTask.perform(scheduler.getPerformArgs(renderTask))){unfinished=true;}chartView.group.silent=!!seriesModel.get('silent');// Should not call markRedraw on group, because it will disable zrender
// increamental render (alway render from the __startIndex each frame)
// chartView.group.markRedraw();
updateBlend(seriesModel,chartView);(0,states/* updateSeriesElementSelection */.ci)(seriesModel);});scheduler.unfinished=unfinished||scheduler.unfinished;core_lifecycle.trigger('series:layoutlabels',ecModel,api,updateParams);// transition after label is layouted.
core_lifecycle.trigger('series:transition',ecModel,api,updateParams);ecModel.eachSeries(function(seriesModel){var chartView=ecIns._chartsMap[seriesModel.__viewId];// Update Z after labels updated. Before applying states.
updateZ(seriesModel,chartView);// NOTE: Update states after label is updated.
// label should be in normal status when layouting.
updateStates(seriesModel,chartView);});// If use hover layer
updateHoverLayerStatus(ecIns,ecModel);core_lifecycle.trigger('series:afterupdate',ecModel,api,updateParams);};markStatusToUpdate=function markStatusToUpdate(ecIns){ecIns[STATUS_NEEDS_UPDATE_KEY]=true;// Wake up zrender if it's sleep. Let it update states in the next frame.
ecIns.getZr().wakeUp();};applyChangedStates=function applyChangedStates(ecIns){if(!ecIns[STATUS_NEEDS_UPDATE_KEY]){return;}ecIns.getZr().storage.traverse(function(el){// Not applied on removed elements, it may still in fading.
if(basicTrasition/* isElementRemoved */.eq(el)){return;}applyElementStates(el);});ecIns[STATUS_NEEDS_UPDATE_KEY]=false;};function applyElementStates(el){var newStates=[];var oldStates=el.currentStates;// Keep other states.
for(var i=0;i<oldStates.length;i++){var stateName=oldStates[i];if(!(stateName==='emphasis'||stateName==='blur'||stateName==='select')){newStates.push(stateName);}}// Only use states when it's exists.
if(el.selected&&el.states.select){newStates.push('select');}if(el.hoverState===states/* HOVER_STATE_EMPHASIS */.wU&&el.states.emphasis){newStates.push('emphasis');}else if(el.hoverState===states/* HOVER_STATE_BLUR */.CX&&el.states.blur){newStates.push('blur');}el.useStates(newStates);}function updateHoverLayerStatus(ecIns,ecModel){var zr=ecIns._zr;var storage=zr.storage;var elCount=0;storage.traverse(function(el){if(!el.isGroup){elCount++;}});if(elCount>ecModel.get('hoverLayerThreshold')&&!env/* default.node */.Z.node&&!env/* default.worker */.Z.worker){ecModel.eachSeries(function(seriesModel){if(seriesModel.preventUsingHoverLayer){return;}var chartView=ecIns._chartsMap[seriesModel.__viewId];if(chartView.__alive){chartView.eachRendered(function(el){if(el.states.emphasis){el.states.emphasis.hoverLayer=true;}});}});}};/**
     * Update chart and blend.
     */function updateBlend(seriesModel,chartView){var blendMode=seriesModel.get('blendMode')||null;chartView.eachRendered(function(el){// FIXME marker and other components
if(!el.isGroup){// DONT mark the element dirty. In case element is incremental and don't wan't to rerender.
el.style.blend=blendMode;}});};function updateZ(model,view){if(model.preventAutoZ){return;}var z=model.get('z')||0;var zlevel=model.get('zlevel')||0;// Set z and zlevel
view.eachRendered(function(el){doUpdateZ(el,z,zlevel,-Infinity);// Don't traverse the children because it has been traversed in _updateZ.
return true;});};function doUpdateZ(el,z,zlevel,maxZ2){// Group may also have textContent
var label=el.getTextContent();var labelLine=el.getTextGuideLine();var isGroup=el.isGroup;if(isGroup){// set z & zlevel of children elements of Group
var children=el.childrenRef();for(var i=0;i<children.length;i++){maxZ2=Math.max(doUpdateZ(children[i],z,zlevel,maxZ2),maxZ2);}}else{// not Group
el.z=z;el.zlevel=zlevel;maxZ2=Math.max(el.z2,maxZ2);}// always set z and zlevel if label/labelLine exists
if(label){label.z=z;label.zlevel=zlevel;// lift z2 of text content
// TODO if el.emphasis.z2 is spcefied, what about textContent.
isFinite(maxZ2)&&(label.z2=maxZ2+2);}if(labelLine){var textGuideLineConfig=el.textGuideLineConfig;labelLine.z=z;labelLine.zlevel=zlevel;isFinite(maxZ2)&&(labelLine.z2=maxZ2+(textGuideLineConfig&&textGuideLineConfig.showAbove?1:-1));}return maxZ2;}// Clear states without animation.
// TODO States on component.
function clearStates(model,view){view.eachRendered(function(el){// Not applied on removed elements, it may still in fading.
if(basicTrasition/* isElementRemoved */.eq(el)){return;}var textContent=el.getTextContent();var textGuide=el.getTextGuideLine();if(el.stateTransition){el.stateTransition=null;}if(textContent&&textContent.stateTransition){textContent.stateTransition=null;}if(textGuide&&textGuide.stateTransition){textGuide.stateTransition=null;}// TODO If el is incremental.
if(el.hasState()){el.prevStates=el.currentStates;el.clearStates();}else if(el.prevStates){el.prevStates=null;}});}function updateStates(model,view){var stateAnimationModel=model.getModel('stateAnimation');var enableAnimation=model.isAnimationEnabled();var duration=stateAnimationModel.get('duration');var stateTransition=duration>0?{duration:duration,delay:stateAnimationModel.get('delay'),easing:stateAnimationModel.get('easing')// additive: stateAnimationModel.get('additive')
}:null;view.eachRendered(function(el){if(el.states&&el.states.emphasis){// Not applied on removed elements, it may still in fading.
if(basicTrasition/* isElementRemoved */.eq(el)){return;}if(el instanceof Path/* default */.ZP){(0,states/* savePathStates */.e9)(el);}// Only updated on changed element. In case element is incremental and don't wan't to rerender.
// TODO, a more proper way?
if(el.__dirty){var prevStates=el.prevStates;// Restore states without animation
if(prevStates){el.useStates(prevStates);}}// Update state transition and enable animation again.
if(enableAnimation){el.stateTransition=stateTransition;var textContent=el.getTextContent();var textGuide=el.getTextGuideLine();// TODO Is it necessary to animate label?
if(textContent){textContent.stateTransition=stateTransition;}if(textGuide){textGuide.stateTransition=stateTransition;}}// The use higlighted and selected flag to toggle states.
if(el.__dirty){applyElementStates(el);}}});};createExtensionAPI=function createExtensionAPI(ecIns){return new(/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(class_1,_super);function class_1(){return _super!==null&&_super.apply(this,arguments)||this;}class_1.prototype.getCoordinateSystems=function(){return ecIns._coordSysMgr.getCoordinateSystems();};class_1.prototype.getComponentByElement=function(el){while(el){var modelInfo=el.__ecComponentInfo;if(modelInfo!=null){return ecIns._model.getComponent(modelInfo.mainType,modelInfo.index);}el=el.parent;}};class_1.prototype.enterEmphasis=function(el,highlightDigit){(0,states/* enterEmphasis */.fD)(el,highlightDigit);markStatusToUpdate(ecIns);};class_1.prototype.leaveEmphasis=function(el,highlightDigit){(0,states/* leaveEmphasis */.Mh)(el,highlightDigit);markStatusToUpdate(ecIns);};class_1.prototype.enterBlur=function(el){(0,states/* enterBlur */.SX)(el);markStatusToUpdate(ecIns);};class_1.prototype.leaveBlur=function(el){(0,states/* leaveBlur */.VP)(el);markStatusToUpdate(ecIns);};class_1.prototype.enterSelect=function(el){(0,states/* enterSelect */.XX)(el);markStatusToUpdate(ecIns);};class_1.prototype.leaveSelect=function(el){(0,states/* leaveSelect */.SJ)(el);markStatusToUpdate(ecIns);};class_1.prototype.getModel=function(){return ecIns.getModel();};class_1.prototype.getViewOfComponentModel=function(componentModel){return ecIns.getViewOfComponentModel(componentModel);};class_1.prototype.getViewOfSeriesModel=function(seriesModel){return ecIns.getViewOfSeriesModel(seriesModel);};return class_1;}(core_ExtensionAPI))(ecIns);};enableConnect=function enableConnect(chart){function updateConnectedChartsStatus(charts,status){for(var i=0;i<charts.length;i++){var otherChart=charts[i];otherChart[CONNECT_STATUS_KEY]=status;}}(0,util/* each */.S6)(eventActionMap,function(actionType,eventType){chart._messageCenter.on(eventType,function(event){if(connectedGroups[chart.group]&&chart[CONNECT_STATUS_KEY]!==CONNECT_STATUS_PENDING){if(event&&event.escapeConnect){return;}var action_1=chart.makeActionFromEvent(event);var otherCharts_1=[];(0,util/* each */.S6)(instances,function(otherChart){if(otherChart!==chart&&otherChart.group===chart.group){otherCharts_1.push(otherChart);}});updateConnectedChartsStatus(otherCharts_1,CONNECT_STATUS_PENDING);(0,util/* each */.S6)(otherCharts_1,function(otherChart){if(otherChart[CONNECT_STATUS_KEY]!==CONNECT_STATUS_UPDATING){otherChart.dispatchAction(action_1);}});updateConnectedChartsStatus(otherCharts_1,CONNECT_STATUS_UPDATED);}});});};}();return ECharts;}(Eventful/* default */.Z);var echartsProto=ECharts.prototype;echartsProto.on=createRegisterEventWithLowercaseECharts('on');echartsProto.off=createRegisterEventWithLowercaseECharts('off');/**
 * @deprecated
 */ // @ts-ignore
echartsProto.one=function(eventName,cb,ctx){var self=this;(0,log/* deprecateLog */.Sh)('ECharts#one is deprecated.');function wrapped(){var args2=[];for(var _i=0;_i<arguments.length;_i++){args2[_i]=arguments[_i];}cb&&cb.apply&&cb.apply(this,args2);// @ts-ignore
self.off(eventName,wrapped);};// @ts-ignore
this.on.call(this,eventName,wrapped,ctx);};var MOUSE_EVENT_NAMES=['click','dblclick','mouseover','mouseout','mousemove','mousedown','mouseup','globalout','contextmenu'];function disposedWarning(id){if(false){}}var actions={};/**
 * Map eventType to actionType
 */var eventActionMap={};var dataProcessorFuncs=[];var optionPreprocessorFuncs=[];var visualFuncs=[];var themeStorage={};var loadingEffects={};var instances={};var connectedGroups={};var idBase=+new Date()-0;var groupIdBase=+new Date()-0;var DOM_ATTRIBUTE_KEY='_echarts_instance_';/**
 * @param opts.devicePixelRatio Use window.devicePixelRatio by default
 * @param opts.renderer Can choose 'canvas' or 'svg' to render the chart.
 * @param opts.width Use clientWidth of the input `dom` by default.
 *        Can be 'auto' (the same as null/undefined)
 * @param opts.height Use clientHeight of the input `dom` by default.
 *        Can be 'auto' (the same as null/undefined)
 * @param opts.locale Specify the locale.
 * @param opts.useDirtyRect Enable dirty rectangle rendering or not.
 */function init(dom,theme,opts){var isClient=!(opts&&opts.ssr);if(isClient){if(false){}var existInstance=getInstanceByDom(dom);if(existInstance){if(false){}return existInstance;}if(false){}}var chart=new ECharts(dom,theme,opts);chart.id='ec_'+idBase++;instances[chart.id]=chart;isClient&&model/* setAttribute */.P$(dom,DOM_ATTRIBUTE_KEY,chart.id);enableConnect(chart);core_lifecycle.trigger('afterinit',chart);return chart;}/**
 * @usage
 * (A)
 * ```js
 * let chart1 = echarts.init(dom1);
 * let chart2 = echarts.init(dom2);
 * chart1.group = 'xxx';
 * chart2.group = 'xxx';
 * echarts.connect('xxx');
 * ```
 * (B)
 * ```js
 * let chart1 = echarts.init(dom1);
 * let chart2 = echarts.init(dom2);
 * echarts.connect('xxx', [chart1, chart2]);
 * ```
 */function connect(groupId){// Is array of charts
if(isArray(groupId)){var charts=groupId;groupId=null;// If any chart has group
each(charts,function(chart){if(chart.group!=null){groupId=chart.group;}});groupId=groupId||'g_'+groupIdBase++;each(charts,function(chart){chart.group=groupId;});}connectedGroups[groupId]=true;return groupId;}/**
 * @deprecated
 */function disConnect(groupId){connectedGroups[groupId]=false;}/**
 * Alias and backword compat
 */var disconnect=(/* unused pure expression or super */ null && (disConnect));/**
 * Dispose a chart instance
 */function dispose(chart){if(isString(chart)){chart=instances[chart];}else if(!(chart instanceof ECharts)){// Try to treat as dom
chart=getInstanceByDom(chart);}if(chart instanceof ECharts&&!chart.isDisposed()){chart.dispose();}}function getInstanceByDom(dom){return instances[model/* getAttribute */.IL(dom,DOM_ATTRIBUTE_KEY)];}function getInstanceById(key){return instances[key];}/**
 * Register theme
 */function registerTheme(name,theme){themeStorage[name]=theme;}/**
 * Register option preprocessor
 */function registerPreprocessor(preprocessorFunc){if((0,util/* indexOf */.cq)(optionPreprocessorFuncs,preprocessorFunc)<0){optionPreprocessorFuncs.push(preprocessorFunc);}}function registerProcessor(priority,processor){normalizeRegister(dataProcessorFuncs,priority,processor,PRIORITY_PROCESSOR_DEFAULT);}/**
 * Register postIniter
 * @param {Function} postInitFunc
 */function registerPostInit(postInitFunc){registerUpdateLifecycle('afterinit',postInitFunc);}/**
 * Register postUpdater
 * @param {Function} postUpdateFunc
 */function registerPostUpdate(postUpdateFunc){registerUpdateLifecycle('afterupdate',postUpdateFunc);}function registerUpdateLifecycle(name,cb){core_lifecycle.on(name,cb);}function registerAction(actionInfo,eventName,action){if((0,util/* isFunction */.mf)(eventName)){action=eventName;eventName='';}var actionType=(0,util/* isObject */.Kn)(actionInfo)?actionInfo.type:[actionInfo,actionInfo={event:eventName}][0];// Event name is all lowercase
actionInfo.event=(actionInfo.event||actionType).toLowerCase();eventName=actionInfo.event;if(eventActionMap[eventName]){// Already registered.
return;}// Validate action type and event name.
(0,util/* assert */.hu)(ACTION_REG.test(actionType)&&ACTION_REG.test(eventName));if(!actions[actionType]){actions[actionType]={action:action,actionInfo:actionInfo};}eventActionMap[eventName]=actionType;}function registerCoordinateSystem(type,coordSysCreator){CoordinateSystem/* default.register */.Z.register(type,coordSysCreator);}/**
 * Get dimensions of specified coordinate system.
 * @param {string} type
 * @return {Array.<string|Object>}
 */function getCoordinateSystemDimensions(type){var coordSysCreator=CoordinateSystemManager.get(type);if(coordSysCreator){return coordSysCreator.getDimensionsInfo?coordSysCreator.getDimensionsInfo():coordSysCreator.dimensions.slice();}}function registerLayout(priority,layoutTask){normalizeRegister(visualFuncs,priority,layoutTask,PRIORITY_VISUAL_LAYOUT,'layout');}function registerVisual(priority,visualTask){normalizeRegister(visualFuncs,priority,visualTask,PRIORITY_VISUAL_CHART,'visual');}var registeredTasks=[];function normalizeRegister(targetList,priority,fn,defaultPriority,visualType){if((0,util/* isFunction */.mf)(priority)||(0,util/* isObject */.Kn)(priority)){fn=priority;priority=defaultPriority;}if(false){}// Already registered
if((0,util/* indexOf */.cq)(registeredTasks,fn)>=0){return;}registeredTasks.push(fn);var stageHandler=core_Scheduler.wrapStageHandler(fn,visualType);stageHandler.__prio=priority;stageHandler.__raw=fn;targetList.push(stageHandler);}function registerLoading(name,loadingFx){loadingEffects[name]=loadingFx;}/**
 * ZRender need a canvas context to do measureText.
 * But in node environment canvas may be created by node-canvas.
 * So we need to specify how to create a canvas instead of using document.createElement('canvas')
 *
 *
 * @deprecated use setPlatformAPI({ createCanvas }) instead.
 *
 * @example
 *     let Canvas = require('canvas');
 *     let echarts = require('echarts');
 *     echarts.setCanvasCreator(function () {
 *         // Small size is enough.
 *         return new Canvas(32, 32);
 *     });
 */function setCanvasCreator(creator){if(false){}setPlatformAPI({createCanvas:creator});}/**
 * The parameters and usage: see `geoSourceManager.registerMap`.
 * Compatible with previous `echarts.registerMap`.
 */function registerMap(mapName,geoJson,specialAreas){var registerMap=(0,impl/* getImpl */.C)('registerMap');registerMap&&registerMap(mapName,geoJson,specialAreas);}function getMap(mapName){var getMap=getImpl('getMap');return getMap&&getMap(mapName);}var registerTransform=transform/* registerExternalTransform */.DA;/**
 * Globa dispatchAction to a specified chart instance.
 */ // export function dispatchAction(payload: { chartId: string } & Payload, opt?: Parameters<ECharts['dispatchAction']>[1]) {
//     if (!payload || !payload.chartId) {
//         // Must have chartId to find chart
//         return;
//     }
//     const chart = instances[payload.chartId];
//     if (chart) {
//         chart.dispatchAction(payload, opt);
//     }
// }
// Buitlin global visual
registerVisual(PRIORITY_VISUAL_GLOBAL,style/* seriesStyleTask */.TD);registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM,style/* dataStyleTask */.Tn);registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM,style/* dataColorPaletteTask */.$P);registerVisual(PRIORITY_VISUAL_GLOBAL,symbol/* seriesSymbolTask */.n);registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM,symbol/* dataSymbolTask */.m);registerVisual(PRIORITY_VISUAL_DECAL,decal/* default */.Z);registerPreprocessor(backwardCompat/* default */.Z);registerProcessor(PRIORITY_PROCESSOR_DATASTACK,dataStack/* default */.Z);registerLoading('default',loading_default/* default */.Z);// Default actions
registerAction({type:states/* HIGHLIGHT_ACTION_TYPE */.Ki,event:states/* HIGHLIGHT_ACTION_TYPE */.Ki,update:states/* HIGHLIGHT_ACTION_TYPE */.Ki},util/* noop */.ZT);registerAction({type:states/* DOWNPLAY_ACTION_TYPE */.yx,event:states/* DOWNPLAY_ACTION_TYPE */.yx,update:states/* DOWNPLAY_ACTION_TYPE */.yx},util/* noop */.ZT);registerAction({type:states/* SELECT_ACTION_TYPE */.Hg,event:states/* SELECT_ACTION_TYPE */.Hg,update:states/* SELECT_ACTION_TYPE */.Hg},util/* noop */.ZT);registerAction({type:states/* UNSELECT_ACTION_TYPE */.JQ,event:states/* UNSELECT_ACTION_TYPE */.JQ,update:states/* UNSELECT_ACTION_TYPE */.JQ},util/* noop */.ZT);registerAction({type:states/* TOGGLE_SELECT_ACTION_TYPE */.iK,event:states/* TOGGLE_SELECT_ACTION_TYPE */.iK,update:states/* TOGGLE_SELECT_ACTION_TYPE */.iK},util/* noop */.ZT);// Default theme
registerTheme('light',light/* default */.Z);registerTheme('dark',dark/* default */.Z);// For backward compatibility, where the namespace `dataTool` will
// be mounted on `echarts` is the extension `dataTool` is imported.
var dataTool={};

/***/ }),

/***/ 38998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ getImpl),
/* harmony export */   "M": () => (/* binding */ registerImpl)
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
*/// Implementation of exported APIs. For example registerMap, getMap.
// The implentations will be registered when installing the component.
// Avoid these code being bundled to the core module.
var implsStore={};// TODO Type
function registerImpl(name,impl){if(false){}implsStore[name]=impl;}function getImpl(name){if(false){}return implsStore[name];}

/***/ }),

/***/ 68593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D0": () => (/* binding */ createLocaleObject),
/* harmony export */   "G8": () => (/* binding */ getLocaleModel),
/* harmony export */   "Li": () => (/* binding */ getDefaultLocaleModel),
/* harmony export */   "sO": () => (/* binding */ SYSTEM_LANG)
/* harmony export */ });
/* unused harmony export registerLocale */
/* harmony import */ var _model_Model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25118);
/* harmony import */ var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9959);
/* harmony import */ var _i18n_langEN_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66759);
/* harmony import */ var _i18n_langZH_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68914);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57697);
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
*/// default import ZH and EN lang
var LOCALE_ZH='ZH';var LOCALE_EN='EN';var DEFAULT_LOCALE=LOCALE_EN;var localeStorage={};var localeModels={};var SYSTEM_LANG=!zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].domSupported */ .Z.domSupported?DEFAULT_LOCALE:function(){var langStr=(/* eslint-disable-next-line */document.documentElement.lang||navigator.language||navigator.browserLanguage).toUpperCase();return langStr.indexOf(LOCALE_ZH)>-1?LOCALE_ZH:DEFAULT_LOCALE;}();function registerLocale(locale,localeObj){locale=locale.toUpperCase();localeModels[locale]=new _model_Model_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(localeObj);localeStorage[locale]=localeObj;}// export function getLocale(locale: string) {
//     return localeStorage[locale];
// }
function createLocaleObject(locale){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isString */ .HD)(locale)){var localeObj=localeStorage[locale.toUpperCase()]||{};if(locale===LOCALE_ZH||locale===LOCALE_EN){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .d9)(localeObj);}else{return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .merge */ .TS)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .d9)(localeObj),(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .d9)(localeStorage[DEFAULT_LOCALE]),false);}}else{return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .merge */ .TS)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .d9)(locale),(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .d9)(localeStorage[DEFAULT_LOCALE]),false);}}function getLocaleModel(lang){return localeModels[lang];}function getDefaultLocaleModel(){return localeModels[DEFAULT_LOCALE];}// Default locale
registerLocale(LOCALE_EN,_i18n_langEN_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);registerLocale(LOCALE_ZH,_i18n_langZH_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);

/***/ }),

/***/ 79736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ createTask)
/* harmony export */ });
/* unused harmony export Task */
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
*/;/**
 * @param {Object} define
 * @return See the return of `createTask`.
 */function createTask(define){return new Task(define);}var Task=/** @class */function(){function Task(define){define=define||{};this._reset=define.reset;this._plan=define.plan;this._count=define.count;this._onDirty=define.onDirty;this._dirty=true;}/**
   * @param step Specified step.
   * @param skip Skip customer perform call.
   * @param modBy Sampling window size.
   * @param modDataCount Sampling count.
   * @return whether unfinished.
   */Task.prototype.perform=function(performArgs){var upTask=this._upstream;var skip=performArgs&&performArgs.skip;// TODO some refactor.
// Pull data. Must pull data each time, because context.data
// may be updated by Series.setData.
if(this._dirty&&upTask){var context=this.context;context.data=context.outputData=upTask.context.outputData;}if(this.__pipeline){this.__pipeline.currentTask=this;}var planResult;if(this._plan&&!skip){planResult=this._plan(this.context);}// Support sharding by mod, which changes the render sequence and makes the rendered graphic
// elements uniformed distributed when progress, especially when moving or zooming.
var lastModBy=normalizeModBy(this._modBy);var lastModDataCount=this._modDataCount||0;var modBy=normalizeModBy(performArgs&&performArgs.modBy);var modDataCount=performArgs&&performArgs.modDataCount||0;if(lastModBy!==modBy||lastModDataCount!==modDataCount){planResult='reset';}function normalizeModBy(val){!(val>=1)&&(val=1);// jshint ignore:line
return val;}var forceFirstProgress;if(this._dirty||planResult==='reset'){this._dirty=false;forceFirstProgress=this._doReset(skip);}this._modBy=modBy;this._modDataCount=modDataCount;var step=performArgs&&performArgs.step;if(upTask){if(false){}this._dueEnd=upTask._outputDueEnd;}// DataTask or overallTask
else{if(false){}this._dueEnd=this._count?this._count(this.context):Infinity;}// Note: Stubs, that its host overall task let it has progress, has progress.
// If no progress, pass index from upstream to downstream each time plan called.
if(this._progress){var start=this._dueIndex;var end=Math.min(step!=null?this._dueIndex+step:Infinity,this._dueEnd);if(!skip&&(forceFirstProgress||start<end)){var progress=this._progress;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(progress)){for(var i=0;i<progress.length;i++){this._doProgress(progress[i],start,end,modBy,modDataCount);}}else{this._doProgress(progress,start,end,modBy,modDataCount);}}this._dueIndex=end;// If no `outputDueEnd`, assume that output data and
// input data is the same, so use `dueIndex` as `outputDueEnd`.
var outputDueEnd=this._settedOutputEnd!=null?this._settedOutputEnd:end;if(false){}this._outputDueEnd=outputDueEnd;}else{// (1) Some overall task has no progress.
// (2) Stubs, that its host overall task do not let it has progress, has no progress.
// This should always be performed so it can be passed to downstream.
this._dueIndex=this._outputDueEnd=this._settedOutputEnd!=null?this._settedOutputEnd:this._dueEnd;}return this.unfinished();};Task.prototype.dirty=function(){this._dirty=true;this._onDirty&&this._onDirty(this.context);};Task.prototype._doProgress=function(progress,start,end,modBy,modDataCount){iterator.reset(start,end,modBy,modDataCount);this._callingProgress=progress;this._callingProgress({start:start,end:end,count:end-start,next:iterator.next},this.context);};Task.prototype._doReset=function(skip){this._dueIndex=this._outputDueEnd=this._dueEnd=0;this._settedOutputEnd=null;var progress;var forceFirstProgress;if(!skip&&this._reset){progress=this._reset(this.context);if(progress&&progress.progress){forceFirstProgress=progress.forceFirstProgress;progress=progress.progress;}// To simplify no progress checking, array must has item.
if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(progress)&&!progress.length){progress=null;}}this._progress=progress;this._modBy=this._modDataCount=null;var downstream=this._downstream;downstream&&downstream.dirty();return forceFirstProgress;};Task.prototype.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd;};/**
   * @param downTask The downstream task.
   * @return The downstream task.
   */Task.prototype.pipe=function(downTask){if(false){}// If already downstream, do not dirty downTask.
if(this._downstream!==downTask||this._dirty){this._downstream=downTask;downTask._upstream=this;downTask.dirty();}};Task.prototype.dispose=function(){if(this._disposed){return;}this._upstream&&(this._upstream._downstream=null);this._downstream&&(this._downstream._upstream=null);this._dirty=false;this._disposed=true;};Task.prototype.getUpstream=function(){return this._upstream;};Task.prototype.getDownstream=function(){return this._downstream;};Task.prototype.setOutputEnd=function(end){// This only happend in dataTask, dataZoom, map, currently.
// where dataZoom do not set end each time, but only set
// when reset. So we should record the setted end, in case
// that the stub of dataZoom perform again and earse the
// setted end by upstream.
this._outputDueEnd=this._settedOutputEnd=end;};return Task;}();var iterator=function(){var end;var current;var modBy;var modDataCount;var winCount;var it={reset:function reset(s,e,sStep,sCount){current=s;end=e;modBy=sStep;modDataCount=sCount;winCount=Math.ceil(modDataCount/modBy);it.next=modBy>1&&modDataCount>0?modNext:sequentialNext;}};return it;function sequentialNext(){return current<end?current++:null;}function modNext(){var dataIndex=current%winCount*modBy+Math.ceil(current/winCount);var result=current>=end?null:dataIndex<modDataCount?dataIndex// If modDataCount is smaller than data.count() (consider `appendData` case),
// Use normal linear rendering mode.
:current;current++;return result;}}();///////////////////////////////////////////////////////////
// For stream debug (Should be commented out after used!)
// @usage: printTask(this, 'begin');
// @usage: printTask(this, null, {someExtraProp});
// @usage: Use `__idxInPipeline` as conditional breakpiont.
//
// window.printTask = function (task: any, prefix: string, extra: { [key: string]: unknown }): void {
//     window.ecTaskUID == null && (window.ecTaskUID = 0);
//     task.uidDebug == null && (task.uidDebug = `task_${window.ecTaskUID++}`);
//     task.agent && task.agent.uidDebug == null && (task.agent.uidDebug = `task_${window.ecTaskUID++}`);
//     let props = [];
//     if (task.__pipeline) {
//         let val = `${task.__idxInPipeline}/${task.__pipeline.tail.__idxInPipeline} ${task.agent ? '(stub)' : ''}`;
//         props.push({text: '__idxInPipeline/total', value: val});
//     } else {
//         let stubCount = 0;
//         task.agentStubMap.each(() => stubCount++);
//         props.push({text: 'idx', value: `overall (stubs: ${stubCount})`});
//     }
//     props.push({text: 'uid', value: task.uidDebug});
//     if (task.__pipeline) {
//         props.push({text: 'pipelineId', value: task.__pipeline.id});
//         task.agent && props.push(
//             {text: 'stubFor', value: task.agent.uidDebug}
//         );
//     }
//     props.push(
//         {text: 'dirty', value: task._dirty},
//         {text: 'dueIndex', value: task._dueIndex},
//         {text: 'dueEnd', value: task._dueEnd},
//         {text: 'outputDueEnd', value: task._outputDueEnd}
//     );
//     if (extra) {
//         Object.keys(extra).forEach(key => {
//             props.push({text: key, value: extra[key]});
//         });
//     }
//     let args = ['color: blue'];
//     let msg = `%c[${prefix || 'T'}] %c` + props.map(item => (
//         args.push('color: green', 'color: red'),
//         `${item.text}: %c${item.value}`
//     )).join('%c, ');
//     console.log.apply(console, [msg].concat(args));
//     // console.log(this);
// };
// window.printPipeline = function (task: any, prefix: string) {
//     const pipeline = task.__pipeline;
//     let currTask = pipeline.head;
//     while (currTask) {
//         window.printTask(currTask, prefix);
//         currTask = currTask._downstream;
//     }
// };
// window.showChain = function (chainHeadTask) {
//     var chain = [];
//     var task = chainHeadTask;
//     while (task) {
//         chain.push({
//             task: task,
//             up: task._upstream,
//             down: task._downstream,
//             idxInPipeline: task.__idxInPipeline
//         });
//         task = task._downstream;
//     }
//     return chain;
// };
// window.findTaskInChain = function (task, chainHeadTask) {
//     let chain = window.showChain(chainHeadTask);
//     let result = [];
//     for (let i = 0; i < chain.length; i++) {
//         let chainItem = chain[i];
//         if (chainItem.task === task) {
//             result.push(i);
//         }
//     }
//     return result;
// };
// window.printChainAEachInChainB = function (chainHeadTaskA, chainHeadTaskB) {
//     let chainA = window.showChain(chainHeadTaskA);
//     for (let i = 0; i < chainA.length; i++) {
//         console.log('chainAIdx:', i, 'inChainB:', window.findTaskInChain(chainA[i].task, chainHeadTaskB));
//     }
// };

/***/ }),

/***/ 27720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hG": () => (/* binding */ CtorInt32Array)
/* harmony export */ });
/* unused harmony exports CtorUint32Array, CtorUint16Array, CtorFloat64Array */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85168);
/* harmony import */ var _Source_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40653);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*
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
*/var UNDEFINED='undefined';/* global Float64Array, Int32Array, Uint32Array, Uint16Array */ // Caution: MUST not use `new CtorUint32Array(arr, 0, len)`, because the Ctor of array is
// different from the Ctor of typed array.
var CtorUint32Array=(typeof Uint32Array==="undefined"?"undefined":_typeof(Uint32Array))===UNDEFINED?Array:Uint32Array;var CtorUint16Array=(typeof Uint16Array==="undefined"?"undefined":_typeof(Uint16Array))===UNDEFINED?Array:Uint16Array;var CtorInt32Array=(typeof Int32Array==="undefined"?"undefined":_typeof(Int32Array))===UNDEFINED?Array:Int32Array;var CtorFloat64Array=(typeof Float64Array==="undefined"?"undefined":_typeof(Float64Array))===UNDEFINED?Array:Float64Array;/**
 * Multi dimensional data store
 */var dataCtors={'float':CtorFloat64Array,'int':CtorInt32Array,// Ordinal data type can be string or int
'ordinal':Array,'number':Array,'time':CtorFloat64Array};var defaultDimValueGetters;function getIndicesCtor(rawCount){// The possible max value in this._indicies is always this._rawCount despite of filtering.
return rawCount>65535?CtorUint32Array:CtorUint16Array;};function getInitialExtent(){return[Infinity,-Infinity];};function cloneChunk(originalChunk){var Ctor=originalChunk.constructor;// Only shallow clone is enough when Array.
return Ctor===Array?originalChunk.slice():new Ctor(originalChunk);}function prepareStore(store,dimIdx,dimType,end,append){var DataCtor=dataCtors[dimType||'float'];if(append){var oldStore=store[dimIdx];var oldLen=oldStore&&oldStore.length;if(!(oldLen===end)){var newStore=new DataCtor(end);// The cost of the copy is probably inconsiderable
// within the initial chunkSize.
for(var j=0;j<oldLen;j++){newStore[j]=oldStore[j];}store[dimIdx]=newStore;}}else{store[dimIdx]=new DataCtor(end);}};/**
 * Basically, DataStore API keep immutable.
 */var DataStore=/** @class */function(){function DataStore(){this._chunks=[];// It will not be calculated util needed.
this._rawExtent=[];this._extent=[];this._count=0;this._rawCount=0;this._calcDimNameToIdx=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)();}/**
   * Initialize from data
   */DataStore.prototype.initData=function(provider,inputDimensions,dimValueGetter){if(false){}this._provider=provider;// Clear
this._chunks=[];this._indices=null;this.getRawIndex=this._getRawIdxIdentity;var source=provider.getSource();var defaultGetter=this.defaultDimValueGetter=defaultDimValueGetters[source.sourceFormat];// Default dim value getter
this._dimValueGetter=dimValueGetter||defaultGetter;// Reset raw extent.
this._rawExtent=[];var willRetrieveDataByName=(0,_Source_js__WEBPACK_IMPORTED_MODULE_1__/* .shouldRetrieveDataByName */ .QY)(source);this._dimensions=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)(inputDimensions,function(dim){if(false){}return{// Only pick these two props. Not leak other properties like orderMeta.
type:dim.type,property:dim.property};});this._initDataFromProvider(0,provider.count());};DataStore.prototype.getProvider=function(){return this._provider;};/**
   * Caution: even when a `source` instance owned by a series, the created data store
   * may still be shared by different sereis (the source hash does not use all `source`
   * props, see `sourceManager`). In this case, the `source` props that are not used in
   * hash (like `source.dimensionDefine`) probably only belongs to a certain series and
   * thus should not be fetch here.
   */DataStore.prototype.getSource=function(){return this._provider.getSource();};/**
   * @caution Only used in dataStack.
   */DataStore.prototype.ensureCalculationDimension=function(dimName,type){var calcDimNameToIdx=this._calcDimNameToIdx;var dimensions=this._dimensions;var calcDimIdx=calcDimNameToIdx.get(dimName);if(calcDimIdx!=null){if(dimensions[calcDimIdx].type===type){return calcDimIdx;}}else{calcDimIdx=dimensions.length;}dimensions[calcDimIdx]={type:type};calcDimNameToIdx.set(dimName,calcDimIdx);this._chunks[calcDimIdx]=new dataCtors[type||'float'](this._rawCount);this._rawExtent[calcDimIdx]=getInitialExtent();return calcDimIdx;};DataStore.prototype.collectOrdinalMeta=function(dimIdx,ordinalMeta){var chunk=this._chunks[dimIdx];var dim=this._dimensions[dimIdx];var rawExtents=this._rawExtent;var offset=dim.ordinalOffset||0;var len=chunk.length;if(offset===0){// We need to reset the rawExtent if collect is from start.
// Because this dimension may be guessed as number and calcuating a wrong extent.
rawExtents[dimIdx]=getInitialExtent();}var dimRawExtent=rawExtents[dimIdx];// Parse from previous data offset. len may be changed after appendData
for(var i=offset;i<len;i++){var val=chunk[i]=ordinalMeta.parseAndCollect(chunk[i]);if(!isNaN(val)){dimRawExtent[0]=Math.min(val,dimRawExtent[0]);dimRawExtent[1]=Math.max(val,dimRawExtent[1]);}}dim.ordinalMeta=ordinalMeta;dim.ordinalOffset=len;dim.type='ordinal';// Force to be ordinal
};DataStore.prototype.getOrdinalMeta=function(dimIdx){var dimInfo=this._dimensions[dimIdx];var ordinalMeta=dimInfo.ordinalMeta;return ordinalMeta;};DataStore.prototype.getDimensionProperty=function(dimIndex){var item=this._dimensions[dimIndex];return item&&item.property;};/**
   * Caution: Can be only called on raw data (before `this._indices` created).
   */DataStore.prototype.appendData=function(data){if(false){}var provider=this._provider;var start=this.count();provider.appendData(data);var end=provider.count();if(!provider.persistent){end+=start;}if(start<end){this._initDataFromProvider(start,end,true);}return[start,end];};DataStore.prototype.appendValues=function(values,minFillLen){var chunks=this._chunks;var dimensions=this._dimensions;var dimLen=dimensions.length;var rawExtent=this._rawExtent;var start=this.count();var end=start+Math.max(values.length,minFillLen||0);for(var i=0;i<dimLen;i++){var dim=dimensions[i];prepareStore(chunks,i,dim.type,end,true);}var emptyDataItem=[];for(var idx=start;idx<end;idx++){var sourceIdx=idx-start;// Store the data by dimensions
for(var dimIdx=0;dimIdx<dimLen;dimIdx++){var dim=dimensions[dimIdx];var val=defaultDimValueGetters.arrayRows.call(this,values[sourceIdx]||emptyDataItem,dim.property,sourceIdx,dimIdx);chunks[dimIdx][idx]=val;var dimRawExtent=rawExtent[dimIdx];val<dimRawExtent[0]&&(dimRawExtent[0]=val);val>dimRawExtent[1]&&(dimRawExtent[1]=val);}}this._rawCount=this._count=end;return{start:start,end:end};};DataStore.prototype._initDataFromProvider=function(start,end,append){var provider=this._provider;var chunks=this._chunks;var dimensions=this._dimensions;var dimLen=dimensions.length;var rawExtent=this._rawExtent;var dimNames=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)(dimensions,function(dim){return dim.property;});for(var i=0;i<dimLen;i++){var dim=dimensions[i];if(!rawExtent[i]){rawExtent[i]=getInitialExtent();}prepareStore(chunks,i,dim.type,end,append);}if(provider.fillStorage){provider.fillStorage(start,end,chunks,rawExtent);}else{var dataItem=[];for(var idx=start;idx<end;idx++){// NOTICE: Try not to write things into dataItem
dataItem=provider.getItem(idx,dataItem);// Each data item is value
// [1, 2]
// 2
// Bar chart, line chart which uses category axis
// only gives the 'y' value. 'x' value is the indices of category
// Use a tempValue to normalize the value to be a (x, y) value
// Store the data by dimensions
for(var dimIdx=0;dimIdx<dimLen;dimIdx++){var dimStorage=chunks[dimIdx];// PENDING NULL is empty or zero
var val=this._dimValueGetter(dataItem,dimNames[dimIdx],idx,dimIdx);dimStorage[idx]=val;var dimRawExtent=rawExtent[dimIdx];val<dimRawExtent[0]&&(dimRawExtent[0]=val);val>dimRawExtent[1]&&(dimRawExtent[1]=val);}}}if(!provider.persistent&&provider.clean){// Clean unused data if data source is typed array.
provider.clean();}this._rawCount=this._count=end;// Reset data extent
this._extent=[];};DataStore.prototype.count=function(){return this._count;};/**
   * Get value. Return NaN if idx is out of range.
   */DataStore.prototype.get=function(dim,idx){if(!(idx>=0&&idx<this._count)){return NaN;}var dimStore=this._chunks[dim];return dimStore?dimStore[this.getRawIndex(idx)]:NaN;};DataStore.prototype.getValues=function(dimensions,idx){var values=[];var dimArr=[];if(idx==null){idx=dimensions;// TODO get all from store?
dimensions=[];// All dimensions
for(var i=0;i<this._dimensions.length;i++){dimArr.push(i);}}else{dimArr=dimensions;}for(var i=0,len=dimArr.length;i<len;i++){values.push(this.get(dimArr[i],idx));}return values;};/**
   * @param dim concrete dim
   */DataStore.prototype.getByRawIndex=function(dim,rawIdx){if(!(rawIdx>=0&&rawIdx<this._rawCount)){return NaN;}var dimStore=this._chunks[dim];return dimStore?dimStore[rawIdx]:NaN;};/**
   * Get sum of data in one dimension
   */DataStore.prototype.getSum=function(dim){var dimData=this._chunks[dim];var sum=0;if(dimData){for(var i=0,len=this.count();i<len;i++){var value=this.get(dim,i);if(!isNaN(value)){sum+=value;}}}return sum;};/**
   * Get median of data in one dimension
   */DataStore.prototype.getMedian=function(dim){var dimDataArray=[];// map all data of one dimension
this.each([dim],function(val){if(!isNaN(val)){dimDataArray.push(val);}});// TODO
// Use quick select?
var sortedDimDataArray=dimDataArray.sort(function(a,b){return a-b;});var len=this.count();// calculate median
return len===0?0:len%2===1?sortedDimDataArray[(len-1)/2]:(sortedDimDataArray[len/2]+sortedDimDataArray[len/2-1])/2;};/**
   * Retreive the index with given raw data index
   */DataStore.prototype.indexOfRawIndex=function(rawIndex){if(rawIndex>=this._rawCount||rawIndex<0){return-1;}if(!this._indices){return rawIndex;}// Indices are ascending
var indices=this._indices;// If rawIndex === dataIndex
var rawDataIndex=indices[rawIndex];if(rawDataIndex!=null&&rawDataIndex<this._count&&rawDataIndex===rawIndex){return rawIndex;}var left=0;var right=this._count-1;while(left<=right){var mid=(left+right)/2|0;if(indices[mid]<rawIndex){left=mid+1;}else if(indices[mid]>rawIndex){right=mid-1;}else{return mid;}}return-1;};/**
   * Retreive the index of nearest value
   * @param dim
   * @param value
   * @param [maxDistance=Infinity]
   * @return If and only if multiple indices has
   *         the same value, they are put to the result.
   */DataStore.prototype.indicesOfNearest=function(dim,value,maxDistance){var chunks=this._chunks;var dimData=chunks[dim];var nearestIndices=[];if(!dimData){return nearestIndices;}if(maxDistance==null){maxDistance=Infinity;}var minDist=Infinity;var minDiff=-1;var nearestIndicesLen=0;// Check the test case of `test/ut/spec/data/SeriesData.js`.
for(var i=0,len=this.count();i<len;i++){var dataIndex=this.getRawIndex(i);var diff=value-dimData[dataIndex];var dist=Math.abs(diff);if(dist<=maxDistance){// When the `value` is at the middle of `this.get(dim, i)` and `this.get(dim, i+1)`,
// we'd better not push both of them to `nearestIndices`, otherwise it is easy to
// get more than one item in `nearestIndices` (more specifically, in `tooltip`).
// So we chose the one that `diff >= 0` in this csae.
// But if `this.get(dim, i)` and `this.get(dim, j)` get the same value, both of them
// should be push to `nearestIndices`.
if(dist<minDist||dist===minDist&&diff>=0&&minDiff<0){minDist=dist;minDiff=diff;nearestIndicesLen=0;}if(diff===minDiff){nearestIndices[nearestIndicesLen++]=i;}}}nearestIndices.length=nearestIndicesLen;return nearestIndices;};DataStore.prototype.getIndices=function(){var newIndices;var indices=this._indices;if(indices){var Ctor=indices.constructor;var thisCount=this._count;// `new Array(a, b, c)` is different from `new Uint32Array(a, b, c)`.
if(Ctor===Array){newIndices=new Ctor(thisCount);for(var i=0;i<thisCount;i++){newIndices[i]=indices[i];}}else{newIndices=new Ctor(indices.buffer,0,thisCount);}}else{var Ctor=getIndicesCtor(this._rawCount);newIndices=new Ctor(this.count());for(var i=0;i<newIndices.length;i++){newIndices[i]=i;}}return newIndices;};/**
   * Data filter.
   */DataStore.prototype.filter=function(dims,cb){if(!this._count){return this;}var newStore=this.clone();var count=newStore.count();var Ctor=getIndicesCtor(newStore._rawCount);var newIndices=new Ctor(count);var value=[];var dimSize=dims.length;var offset=0;var dim0=dims[0];var chunks=newStore._chunks;for(var i=0;i<count;i++){var keep=void 0;var rawIdx=newStore.getRawIndex(i);// Simple optimization
if(dimSize===0){keep=cb(i);}else if(dimSize===1){var val=chunks[dim0][rawIdx];keep=cb(val,i);}else{var k=0;for(;k<dimSize;k++){value[k]=chunks[dims[k]][rawIdx];}value[k]=i;keep=cb.apply(null,value);}if(keep){newIndices[offset++]=rawIdx;}}// Set indices after filtered.
if(offset<count){newStore._indices=newIndices;}newStore._count=offset;// Reset data extent
newStore._extent=[];newStore._updateGetRawIdx();return newStore;};/**
   * Select data in range. (For optimization of filter)
   * (Manually inline code, support 5 million data filtering in data zoom.)
   */DataStore.prototype.selectRange=function(range){var newStore=this.clone();var len=newStore._count;if(!len){return this;}var dims=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .keys */ .XP)(range);var dimSize=dims.length;if(!dimSize){return this;}var originalCount=newStore.count();var Ctor=getIndicesCtor(newStore._rawCount);var newIndices=new Ctor(originalCount);var offset=0;var dim0=dims[0];var min=range[dim0][0];var max=range[dim0][1];var storeArr=newStore._chunks;var quickFinished=false;if(!newStore._indices){// Extreme optimization for common case. About 2x faster in chrome.
var idx=0;if(dimSize===1){var dimStorage=storeArr[dims[0]];for(var i=0;i<len;i++){var val=dimStorage[i];// NaN will not be filtered. Consider the case, in line chart, empty
// value indicates the line should be broken. But for the case like
// scatter plot, a data item with empty value will not be rendered,
// but the axis extent may be effected if some other dim of the data
// item has value. Fortunately it is not a significant negative effect.
if(val>=min&&val<=max||isNaN(val)){newIndices[offset++]=idx;}idx++;}quickFinished=true;}else if(dimSize===2){var dimStorage=storeArr[dims[0]];var dimStorage2=storeArr[dims[1]];var min2=range[dims[1]][0];var max2=range[dims[1]][1];for(var i=0;i<len;i++){var val=dimStorage[i];var val2=dimStorage2[i];// Do not filter NaN, see comment above.
if((val>=min&&val<=max||isNaN(val))&&(val2>=min2&&val2<=max2||isNaN(val2))){newIndices[offset++]=idx;}idx++;}quickFinished=true;}}if(!quickFinished){if(dimSize===1){for(var i=0;i<originalCount;i++){var rawIndex=newStore.getRawIndex(i);var val=storeArr[dims[0]][rawIndex];// Do not filter NaN, see comment above.
if(val>=min&&val<=max||isNaN(val)){newIndices[offset++]=rawIndex;}}}else{for(var i=0;i<originalCount;i++){var keep=true;var rawIndex=newStore.getRawIndex(i);for(var k=0;k<dimSize;k++){var dimk=dims[k];var val=storeArr[dimk][rawIndex];// Do not filter NaN, see comment above.
if(val<range[dimk][0]||val>range[dimk][1]){keep=false;}}if(keep){newIndices[offset++]=newStore.getRawIndex(i);}}}}// Set indices after filtered.
if(offset<originalCount){newStore._indices=newIndices;}newStore._count=offset;// Reset data extent
newStore._extent=[];newStore._updateGetRawIdx();return newStore;};// /**
//  * Data mapping to a plain array
//  */
// mapArray(dims: DimensionIndex[], cb: MapArrayCb): any[] {
//     const result: any[] = [];
//     this.each(dims, function () {
//         result.push(cb && (cb as MapArrayCb).apply(null, arguments));
//     });
//     return result;
// }
/**
   * Data mapping to a new List with given dimensions
   */DataStore.prototype.map=function(dims,cb){// TODO only clone picked chunks.
var target=this.clone(dims);this._updateDims(target,dims,cb);return target;};/**
   * @caution Danger!! Only used in dataStack.
   */DataStore.prototype.modify=function(dims,cb){this._updateDims(this,dims,cb);};DataStore.prototype._updateDims=function(target,dims,cb){var targetChunks=target._chunks;var tmpRetValue=[];var dimSize=dims.length;var dataCount=target.count();var values=[];var rawExtent=target._rawExtent;for(var i=0;i<dims.length;i++){rawExtent[dims[i]]=getInitialExtent();}for(var dataIndex=0;dataIndex<dataCount;dataIndex++){var rawIndex=target.getRawIndex(dataIndex);for(var k=0;k<dimSize;k++){values[k]=targetChunks[dims[k]][rawIndex];}values[dimSize]=dataIndex;var retValue=cb&&cb.apply(null,values);if(retValue!=null){// a number or string (in oridinal dimension)?
if(_typeof(retValue)!=='object'){tmpRetValue[0]=retValue;retValue=tmpRetValue;}for(var i=0;i<retValue.length;i++){var dim=dims[i];var val=retValue[i];var rawExtentOnDim=rawExtent[dim];var dimStore=targetChunks[dim];if(dimStore){dimStore[rawIndex]=val;}if(val<rawExtentOnDim[0]){rawExtentOnDim[0]=val;}if(val>rawExtentOnDim[1]){rawExtentOnDim[1]=val;}}}}};/**
   * Large data down sampling using largest-triangle-three-buckets
   * @param {string} valueDimension
   * @param {number} targetCount
   */DataStore.prototype.lttbDownSample=function(valueDimension,rate){var target=this.clone([valueDimension],true);var targetStorage=target._chunks;var dimStore=targetStorage[valueDimension];var len=this.count();var sampledIndex=0;var frameSize=Math.floor(1/rate);var currentRawIndex=this.getRawIndex(0);var maxArea;var area;var nextRawIndex;var newIndices=new(getIndicesCtor(this._rawCount))(Math.min((Math.ceil(len/frameSize)+2)*2,len));// First frame use the first data.
newIndices[sampledIndex++]=currentRawIndex;for(var i=1;i<len-1;i+=frameSize){var nextFrameStart=Math.min(i+frameSize,len-1);var nextFrameEnd=Math.min(i+frameSize*2,len);var avgX=(nextFrameEnd+nextFrameStart)/2;var avgY=0;for(var idx=nextFrameStart;idx<nextFrameEnd;idx++){var rawIndex=this.getRawIndex(idx);var y=dimStore[rawIndex];if(isNaN(y)){continue;}avgY+=y;}avgY/=nextFrameEnd-nextFrameStart;var frameStart=i;var frameEnd=Math.min(i+frameSize,len);var pointAX=i-1;var pointAY=dimStore[currentRawIndex];maxArea=-1;nextRawIndex=frameStart;var firstNaNIndex=-1;var countNaN=0;// Find a point from current frame that construct a triangel with largest area with previous selected point
// And the average of next frame.
for(var idx=frameStart;idx<frameEnd;idx++){var rawIndex=this.getRawIndex(idx);var y=dimStore[rawIndex];if(isNaN(y)){countNaN++;if(firstNaNIndex<0){firstNaNIndex=rawIndex;}continue;}// Calculate triangle area over three buckets
area=Math.abs((pointAX-avgX)*(y-pointAY)-(pointAX-idx)*(avgY-pointAY));if(area>maxArea){maxArea=area;nextRawIndex=rawIndex;// Next a is this b
}}if(countNaN>0&&countNaN<frameEnd-frameStart){// Append first NaN point in every bucket.
// It is necessary to ensure the correct order of indices.
newIndices[sampledIndex++]=Math.min(firstNaNIndex,nextRawIndex);nextRawIndex=Math.max(firstNaNIndex,nextRawIndex);}newIndices[sampledIndex++]=nextRawIndex;currentRawIndex=nextRawIndex;// This a is the next a (chosen b)
}// First frame use the last data.
newIndices[sampledIndex++]=this.getRawIndex(len-1);target._count=sampledIndex;target._indices=newIndices;target.getRawIndex=this._getRawIdx;return target;};/**
   * Large data down sampling on given dimension
   * @param sampleIndex Sample index for name and id
   */DataStore.prototype.downSample=function(dimension,rate,sampleValue,sampleIndex){var target=this.clone([dimension],true);var targetStorage=target._chunks;var frameValues=[];var frameSize=Math.floor(1/rate);var dimStore=targetStorage[dimension];var len=this.count();var rawExtentOnDim=target._rawExtent[dimension]=getInitialExtent();var newIndices=new(getIndicesCtor(this._rawCount))(Math.ceil(len/frameSize));var offset=0;for(var i=0;i<len;i+=frameSize){// Last frame
if(frameSize>len-i){frameSize=len-i;frameValues.length=frameSize;}for(var k=0;k<frameSize;k++){var dataIdx=this.getRawIndex(i+k);frameValues[k]=dimStore[dataIdx];}var value=sampleValue(frameValues);var sampleFrameIdx=this.getRawIndex(Math.min(i+sampleIndex(frameValues,value)||0,len-1));// Only write value on the filtered data
dimStore[sampleFrameIdx]=value;if(value<rawExtentOnDim[0]){rawExtentOnDim[0]=value;}if(value>rawExtentOnDim[1]){rawExtentOnDim[1]=value;}newIndices[offset++]=sampleFrameIdx;}target._count=offset;target._indices=newIndices;target._updateGetRawIdx();return target;};/**
   * Data iteration
   * @param ctx default this
   * @example
   *  list.each('x', function (x, idx) {});
   *  list.each(['x', 'y'], function (x, y, idx) {});
   *  list.each(function (idx) {})
   */DataStore.prototype.each=function(dims,cb){if(!this._count){return;}var dimSize=dims.length;var chunks=this._chunks;for(var i=0,len=this.count();i<len;i++){var rawIdx=this.getRawIndex(i);// Simple optimization
switch(dimSize){case 0:cb(i);break;case 1:cb(chunks[dims[0]][rawIdx],i);break;case 2:cb(chunks[dims[0]][rawIdx],chunks[dims[1]][rawIdx],i);break;default:var k=0;var value=[];for(;k<dimSize;k++){value[k]=chunks[dims[k]][rawIdx];}// Index
value[k]=i;cb.apply(null,value);}}};/**
   * Get extent of data in one dimension
   */DataStore.prototype.getDataExtent=function(dim){// Make sure use concrete dim as cache name.
var dimData=this._chunks[dim];var initialExtent=getInitialExtent();if(!dimData){return initialExtent;}// Make more strict checkings to ensure hitting cache.
var currEnd=this.count();// Consider the most cases when using data zoom, `getDataExtent`
// happened before filtering. We cache raw extent, which is not
// necessary to be cleared and recalculated when restore data.
var useRaw=!this._indices;var dimExtent;if(useRaw){return this._rawExtent[dim].slice();}dimExtent=this._extent[dim];if(dimExtent){return dimExtent.slice();}dimExtent=initialExtent;var min=dimExtent[0];var max=dimExtent[1];for(var i=0;i<currEnd;i++){var rawIdx=this.getRawIndex(i);var value=dimData[rawIdx];value<min&&(min=value);value>max&&(max=value);}dimExtent=[min,max];this._extent[dim]=dimExtent;return dimExtent;};/**
   * Get raw data item
   */DataStore.prototype.getRawDataItem=function(idx){var rawIdx=this.getRawIndex(idx);if(!this._provider.persistent){var val=[];var chunks=this._chunks;for(var i=0;i<chunks.length;i++){val.push(chunks[i][rawIdx]);}return val;}else{return this._provider.getItem(rawIdx);}};/**
   * Clone shallow.
   *
   * @param clonedDims Determine which dims to clone. Will share the data if not specified.
   */DataStore.prototype.clone=function(clonedDims,ignoreIndices){var target=new DataStore();var chunks=this._chunks;var clonedDimsMap=clonedDims&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .reduce */ .u4)(clonedDims,function(obj,dimIdx){obj[dimIdx]=true;return obj;},{});if(clonedDimsMap){for(var i=0;i<chunks.length;i++){// Not clone if dim is not picked.
target._chunks[i]=!clonedDimsMap[i]?chunks[i]:cloneChunk(chunks[i]);}}else{target._chunks=chunks;}this._copyCommonProps(target);if(!ignoreIndices){target._indices=this._cloneIndices();}target._updateGetRawIdx();return target;};DataStore.prototype._copyCommonProps=function(target){target._count=this._count;target._rawCount=this._rawCount;target._provider=this._provider;target._dimensions=this._dimensions;target._extent=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this._extent);target._rawExtent=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this._rawExtent);};DataStore.prototype._cloneIndices=function(){if(this._indices){var Ctor=this._indices.constructor;var indices=void 0;if(Ctor===Array){var thisCount=this._indices.length;indices=new Ctor(thisCount);for(var i=0;i<thisCount;i++){indices[i]=this._indices[i];}}else{indices=new Ctor(this._indices);}return indices;}return null;};DataStore.prototype._getRawIdxIdentity=function(idx){return idx;};DataStore.prototype._getRawIdx=function(idx){if(idx<this._count&&idx>=0){return this._indices[idx];}return-1;};DataStore.prototype._updateGetRawIdx=function(){this.getRawIndex=this._indices?this._getRawIdx:this._getRawIdxIdentity;};DataStore.internalField=function(){function getDimValueSimply(dataItem,property,dataIndex,dimIndex){return (0,_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__/* .parseDataValue */ .yQ)(dataItem[dimIndex],this._dimensions[dimIndex]);}defaultDimValueGetters={arrayRows:getDimValueSimply,objectRows:function objectRows(dataItem,property,dataIndex,dimIndex){return (0,_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__/* .parseDataValue */ .yQ)(dataItem[property],this._dimensions[dimIndex]);},keyedColumns:getDimValueSimply,original:function original(dataItem,property,dataIndex,dimIndex){// Performance sensitive, do not use modelUtil.getDataItemValue.
// If dataItem is an plain object with no value field, the let `value`
// will be assigned with the object, but it will be tread correctly
// in the `convertValue`.
var value=dataItem&&(dataItem.value==null?dataItem:dataItem.value);return (0,_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__/* .parseDataValue */ .yQ)(value instanceof Array?value[dimIndex]// If value is a single number or something else not array.
:value,this._dimensions[dimIndex]);},typedArray:function typedArray(dataItem,property,dataIndex,dimIndex){return dataItem[dimIndex];}};}();return DataStore;}();/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataStore);

/***/ }),

/***/ 74566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
*/var uidBase=0;var OrdinalMeta=/** @class */function(){function OrdinalMeta(opt){this.categories=opt.categories||[];this._needCollect=opt.needCollect;this._deduplication=opt.deduplication;this.uid=++uidBase;}OrdinalMeta.createByAxisModel=function(axisModel){var option=axisModel.option;var data=option.data;var categories=data&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)(data,getName);return new OrdinalMeta({categories:categories,needCollect:!categories,// deduplication is default in axis.
deduplication:option.dedplication!==false});};;OrdinalMeta.prototype.getOrdinal=function(category){// @ts-ignore
return this._getOrCreateMap().get(category);};/**
   * @return The ordinal. If not found, return NaN.
   */OrdinalMeta.prototype.parseAndCollect=function(category){var index;var needCollect=this._needCollect;// The value of category dim can be the index of the given category set.
// This feature is only supported when !needCollect, because we should
// consider a common case: a value is 2017, which is a number but is
// expected to be tread as a category. This case usually happen in dataset,
// where it happent to be no need of the index feature.
if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(category)&&!needCollect){return category;}// Optimize for the scenario:
// category is ['2012-01-01', '2012-01-02', ...], where the input
// data has been ensured not duplicate and is large data.
// Notice, if a dataset dimension provide categroies, usually echarts
// should remove duplication except user tell echarts dont do that
// (set axis.deduplication = false), because echarts do not know whether
// the values in the category dimension has duplication (consider the
// parallel-aqi example)
if(needCollect&&!this._deduplication){index=this.categories.length;this.categories[index]=category;return index;}var map=this._getOrCreateMap();// @ts-ignore
index=map.get(category);if(index==null){if(needCollect){index=this.categories.length;this.categories[index]=category;// @ts-ignore
map.set(category,index);}else{index=NaN;}}return index;};// Consider big data, do not create map until needed.
OrdinalMeta.prototype._getOrCreateMap=function(){return this._map||(this._map=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)(this.categories));};return OrdinalMeta;}();function getName(obj){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(obj)&&obj.value!=null){return obj.value;}else{return obj+'';}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdinalMeta);

/***/ }),

/***/ 66278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ data_SeriesData)
});

// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(25118);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/data/DataDiffer.js
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
*/function dataIndexMapValueLength(valNumOrArrLengthMoreThan2){return valNumOrArrLengthMoreThan2==null?0:valNumOrArrLengthMoreThan2.length||1;}function defaultKeyGetter(item){return item;}var DataDiffer=/** @class */function(){/**
   * @param context Can be visited by this.context in callback.
   */function DataDiffer(oldArr,newArr,oldKeyGetter,newKeyGetter,context,// By default: 'oneToOne'.
diffMode){this._old=oldArr;this._new=newArr;this._oldKeyGetter=oldKeyGetter||defaultKeyGetter;this._newKeyGetter=newKeyGetter||defaultKeyGetter;// Visible in callback via `this.context`;
this.context=context;this._diffModeMultiple=diffMode==='multiple';}/**
   * Callback function when add a data
   */DataDiffer.prototype.add=function(func){this._add=func;return this;};/**
   * Callback function when update a data
   */DataDiffer.prototype.update=function(func){this._update=func;return this;};/**
   * Callback function when update a data and only work in `cbMode: 'byKey'`.
   */DataDiffer.prototype.updateManyToOne=function(func){this._updateManyToOne=func;return this;};/**
   * Callback function when update a data and only work in `cbMode: 'byKey'`.
   */DataDiffer.prototype.updateOneToMany=function(func){this._updateOneToMany=func;return this;};/**
   * Callback function when update a data and only work in `cbMode: 'byKey'`.
   */DataDiffer.prototype.updateManyToMany=function(func){this._updateManyToMany=func;return this;};/**
   * Callback function when remove a data
   */DataDiffer.prototype.remove=function(func){this._remove=func;return this;};DataDiffer.prototype.execute=function(){this[this._diffModeMultiple?'_executeMultiple':'_executeOneToOne']();};DataDiffer.prototype._executeOneToOne=function(){var oldArr=this._old;var newArr=this._new;var newDataIndexMap={};var oldDataKeyArr=new Array(oldArr.length);var newDataKeyArr=new Array(newArr.length);this._initIndexMap(oldArr,null,oldDataKeyArr,'_oldKeyGetter');this._initIndexMap(newArr,newDataIndexMap,newDataKeyArr,'_newKeyGetter');for(var i=0;i<oldArr.length;i++){var oldKey=oldDataKeyArr[i];var newIdxMapVal=newDataIndexMap[oldKey];var newIdxMapValLen=dataIndexMapValueLength(newIdxMapVal);// idx can never be empty array here. see 'set null' logic below.
if(newIdxMapValLen>1){// Consider there is duplicate key (for example, use dataItem.name as key).
// We should make sure every item in newArr and oldArr can be visited.
var newIdx=newIdxMapVal.shift();if(newIdxMapVal.length===1){newDataIndexMap[oldKey]=newIdxMapVal[0];}this._update&&this._update(newIdx,i);}else if(newIdxMapValLen===1){newDataIndexMap[oldKey]=null;this._update&&this._update(newIdxMapVal,i);}else{this._remove&&this._remove(i);}}this._performRestAdd(newDataKeyArr,newDataIndexMap);};/**
   * For example, consider the case:
   * oldData: [o0, o1, o2, o3, o4, o5, o6, o7],
   * newData: [n0, n1, n2, n3, n4, n5, n6, n7, n8],
   * Where:
   *     o0, o1, n0 has key 'a' (many to one)
   *     o5, n4, n5, n6 has key 'b' (one to many)
   *     o2, n1 has key 'c' (one to one)
   *     n2, n3 has key 'd' (add)
   *     o3, o4 has key 'e' (remove)
   *     o6, o7, n7, n8 has key 'f' (many to many, treated as add and remove)
   * Then:
   *     (The order of the following directives are not ensured.)
   *     this._updateManyToOne(n0, [o0, o1]);
   *     this._updateOneToMany([n4, n5, n6], o5);
   *     this._update(n1, o2);
   *     this._remove(o3);
   *     this._remove(o4);
   *     this._remove(o6);
   *     this._remove(o7);
   *     this._add(n2);
   *     this._add(n3);
   *     this._add(n7);
   *     this._add(n8);
   */DataDiffer.prototype._executeMultiple=function(){var oldArr=this._old;var newArr=this._new;var oldDataIndexMap={};var newDataIndexMap={};var oldDataKeyArr=[];var newDataKeyArr=[];this._initIndexMap(oldArr,oldDataIndexMap,oldDataKeyArr,'_oldKeyGetter');this._initIndexMap(newArr,newDataIndexMap,newDataKeyArr,'_newKeyGetter');for(var i=0;i<oldDataKeyArr.length;i++){var oldKey=oldDataKeyArr[i];var oldIdxMapVal=oldDataIndexMap[oldKey];var newIdxMapVal=newDataIndexMap[oldKey];var oldIdxMapValLen=dataIndexMapValueLength(oldIdxMapVal);var newIdxMapValLen=dataIndexMapValueLength(newIdxMapVal);if(oldIdxMapValLen>1&&newIdxMapValLen===1){this._updateManyToOne&&this._updateManyToOne(newIdxMapVal,oldIdxMapVal);newDataIndexMap[oldKey]=null;}else if(oldIdxMapValLen===1&&newIdxMapValLen>1){this._updateOneToMany&&this._updateOneToMany(newIdxMapVal,oldIdxMapVal);newDataIndexMap[oldKey]=null;}else if(oldIdxMapValLen===1&&newIdxMapValLen===1){this._update&&this._update(newIdxMapVal,oldIdxMapVal);newDataIndexMap[oldKey]=null;}else if(oldIdxMapValLen>1&&newIdxMapValLen>1){this._updateManyToMany&&this._updateManyToMany(newIdxMapVal,oldIdxMapVal);newDataIndexMap[oldKey]=null;}else if(oldIdxMapValLen>1){for(var i_1=0;i_1<oldIdxMapValLen;i_1++){this._remove&&this._remove(oldIdxMapVal[i_1]);}}else{this._remove&&this._remove(oldIdxMapVal);}}this._performRestAdd(newDataKeyArr,newDataIndexMap);};DataDiffer.prototype._performRestAdd=function(newDataKeyArr,newDataIndexMap){for(var i=0;i<newDataKeyArr.length;i++){var newKey=newDataKeyArr[i];var newIdxMapVal=newDataIndexMap[newKey];var idxMapValLen=dataIndexMapValueLength(newIdxMapVal);if(idxMapValLen>1){for(var j=0;j<idxMapValLen;j++){this._add&&this._add(newIdxMapVal[j]);}}else if(idxMapValLen===1){this._add&&this._add(newIdxMapVal);}// Support both `newDataKeyArr` are duplication removed or not removed.
newDataIndexMap[newKey]=null;}};DataDiffer.prototype._initIndexMap=function(arr,// Can be null.
map,// In 'byKey', the output `keyArr` is duplication removed.
// In 'byIndex', the output `keyArr` is not duplication removed and
//     its indices are accurately corresponding to `arr`.
keyArr,keyGetterName){var cbModeMultiple=this._diffModeMultiple;for(var i=0;i<arr.length;i++){// Add prefix to avoid conflict with Object.prototype.
var key='_ec_'+this[keyGetterName](arr[i],i);if(!cbModeMultiple){keyArr[i]=key;}if(!map){continue;}var idxMapVal=map[key];var idxMapValLen=dataIndexMapValueLength(idxMapVal);if(idxMapValLen===0){// Simple optimize: in most cases, one index has one key,
// do not need array.
map[key]=i;if(cbModeMultiple){keyArr.push(key);}}else if(idxMapValLen===1){map[key]=[idxMapVal,i];}else{idxMapVal.push(i);}}};return DataDiffer;}();/* harmony default export */ const data_DataDiffer = (DataDiffer);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/dataProvider.js
var dataProvider = __webpack_require__(32946);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/dimensionHelper.js
var dimensionHelper = __webpack_require__(1979);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/SeriesDimensionDefine.js
var SeriesDimensionDefine = __webpack_require__(45288);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/types.js
var types = __webpack_require__(74298);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/Source.js
var Source = __webpack_require__(40653);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/DataStore.js
var DataStore = __webpack_require__(27720);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/SeriesDataSchema.js
var SeriesDataSchema = __webpack_require__(63444);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/data/SeriesData.js
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
*/ /* global Int32Array */var isObject=util/* isObject */.Kn;var map=util/* map */.UI;var CtorInt32Array=typeof Int32Array==='undefined'?Array:Int32Array;// Use prefix to avoid index to be the same as otherIdList[idx],
// which will cause weird udpate animation.
var ID_PREFIX='e\0\0';var INDEX_NOT_FOUND=-1;// type SeriesDimensionIndex = DimensionIndex;
var TRANSFERABLE_PROPERTIES=['hasItemOption','_nameList','_idList','_invertedIndicesMap','_dimSummary','userOutput','_rawData','_dimValueGetter','_nameDimIdx','_idDimIdx','_nameRepeatCount'];var CLONE_PROPERTIES=['_approximateExtent'];// -----------------------------
// Internal method declarations:
// -----------------------------
var prepareInvertedIndex;var getId;var getIdNameFromStore;var normalizeDimensions;var transferProperties;var cloneListForMapAndSample;var makeIdFromName;var SeriesData=/** @class */function(){/**
   * @param dimensionsInput.dimensions
   *        For example, ['someDimName', {name: 'someDimName', type: 'someDimType'}, ...].
   *        Dimensions should be concrete names like x, y, z, lng, lat, angle, radius
   */function SeriesData(dimensionsInput,hostModel){this.type='list';this._dimOmitted=false;this._nameList=[];this._idList=[];// Models of data option is stored sparse for optimizing memory cost
// Never used yet (not used yet).
// private _optionModels: Model[] = [];
// Global visual properties after visual coding
this._visual={};// Globel layout properties.
this._layout={};// Item visual properties after visual coding
this._itemVisuals=[];// Item layout properties after layout
this._itemLayouts=[];// Graphic elemnents
this._graphicEls=[];// key: dim, value: extent
this._approximateExtent={};this._calculationInfo={};// Having detected that there is data item is non primitive type
// (in type `OptionDataItemObject`).
// Like `data: [ { value: xx, itemStyle: {...} }, ...]`
// At present it only happen in `SOURCE_FORMAT_ORIGINAL`.
this.hasItemOption=false;// Methods that create a new list based on this list should be listed here.
// Notice that those method should `RETURN` the new list.
this.TRANSFERABLE_METHODS=['cloneShallow','downSample','lttbDownSample','map'];// Methods that change indices of this list should be listed here.
this.CHANGABLE_METHODS=['filterSelf','selectRange'];this.DOWNSAMPLE_METHODS=['downSample','lttbDownSample'];var dimensions;var assignStoreDimIdx=false;if((0,SeriesDataSchema/* isSeriesDataSchema */.bB)(dimensionsInput)){dimensions=dimensionsInput.dimensions;this._dimOmitted=dimensionsInput.isDimensionOmitted();this._schema=dimensionsInput;}else{assignStoreDimIdx=true;dimensions=dimensionsInput;}dimensions=dimensions||['x','y'];var dimensionInfos={};var dimensionNames=[];var invertedIndicesMap={};var needsHasOwn=false;var emptyObj={};for(var i=0;i<dimensions.length;i++){// Use the original dimensions[i], where other flag props may exists.
var dimInfoInput=dimensions[i];var dimensionInfo=util/* isString */.HD(dimInfoInput)?new SeriesDimensionDefine/* default */.Z({name:dimInfoInput}):!(dimInfoInput instanceof SeriesDimensionDefine/* default */.Z)?new SeriesDimensionDefine/* default */.Z(dimInfoInput):dimInfoInput;var dimensionName=dimensionInfo.name;dimensionInfo.type=dimensionInfo.type||'float';if(!dimensionInfo.coordDim){dimensionInfo.coordDim=dimensionName;dimensionInfo.coordDimIndex=0;}var otherDims=dimensionInfo.otherDims=dimensionInfo.otherDims||{};dimensionNames.push(dimensionName);dimensionInfos[dimensionName]=dimensionInfo;if(emptyObj[dimensionName]!=null){needsHasOwn=true;}if(dimensionInfo.createInvertedIndices){invertedIndicesMap[dimensionName]=[];}if(otherDims.itemName===0){this._nameDimIdx=i;}if(otherDims.itemId===0){this._idDimIdx=i;}if(false){}if(assignStoreDimIdx){dimensionInfo.storeDimIndex=i;}}this.dimensions=dimensionNames;this._dimInfos=dimensionInfos;this._initGetDimensionInfo(needsHasOwn);this.hostModel=hostModel;this._invertedIndicesMap=invertedIndicesMap;if(this._dimOmitted){var dimIdxToName_1=this._dimIdxToName=util/* createHashMap */.kW();util/* each */.S6(dimensionNames,function(dimName){dimIdxToName_1.set(dimensionInfos[dimName].storeDimIndex,dimName);});}}/**
   *
   * Get concrete dimension name by dimension name or dimension index.
   * If input a dimension name, do not validate whether the dimension name exits.
   *
   * @caution
   * @param dim Must make sure the dimension is `SeriesDimensionLoose`.
   * Because only those dimensions will have auto-generated dimension names if not
   * have a user-specified name, and other dimensions will get a return of null/undefined.
   *
   * @notice Becuause of this reason, should better use `getDimensionIndex` instead, for examples:
   * ```js
   * const val = data.getStore().get(data.getDimensionIndex(dim), dataIdx);
   * ```
   *
   * @return Concrete dim name.
   */SeriesData.prototype.getDimension=function(dim){var dimIdx=this._recognizeDimIndex(dim);if(dimIdx==null){return dim;}dimIdx=dim;if(!this._dimOmitted){return this.dimensions[dimIdx];}// Retrieve from series dimension definition becuase it probably contains
// generated dimension name (like 'x', 'y').
var dimName=this._dimIdxToName.get(dimIdx);if(dimName!=null){return dimName;}var sourceDimDef=this._schema.getSourceDimension(dimIdx);if(sourceDimDef){return sourceDimDef.name;}};/**
   * Get dimension index in data store. Return -1 if not found.
   * Can be used to index value from getRawValue.
   */SeriesData.prototype.getDimensionIndex=function(dim){var dimIdx=this._recognizeDimIndex(dim);if(dimIdx!=null){return dimIdx;}if(dim==null){return-1;}var dimInfo=this._getDimInfo(dim);return dimInfo?dimInfo.storeDimIndex:this._dimOmitted?this._schema.getSourceDimensionIndex(dim):-1;};/**
   * The meanings of the input parameter `dim`:
   *
   * + If dim is a number (e.g., `1`), it means the index of the dimension.
   *   For example, `getDimension(0)` will return 'x' or 'lng' or 'radius'.
   * + If dim is a number-like string (e.g., `"1"`):
   *     + If there is the same concrete dim name defined in `series.dimensions` or `dataset.dimensions`,
   *        it means that concrete name.
   *     + If not, it will be converted to a number, which means the index of the dimension.
   *        (why? because of the backward compatbility. We have been tolerating number-like string in
   *        dimension setting, although now it seems that it is not a good idea.)
   *     For example, `visualMap[i].dimension: "1"` is the same meaning as `visualMap[i].dimension: 1`,
   *     if no dimension name is defined as `"1"`.
   * + If dim is a not-number-like string, it means the concrete dim name.
   *   For example, it can be be default name `"x"`, `"y"`, `"z"`, `"lng"`, `"lat"`, `"angle"`, `"radius"`,
   *   or customized in `dimensions` property of option like `"age"`.
   *
   * @return recogonized `DimensionIndex`. Otherwise return null/undefined (means that dim is `DimensionName`).
   */SeriesData.prototype._recognizeDimIndex=function(dim){if(util/* isNumber */.hj(dim)// If being a number-like string but not being defined as a dimension name.
||dim!=null&&!isNaN(dim)&&!this._getDimInfo(dim)&&(!this._dimOmitted||this._schema.getSourceDimensionIndex(dim)<0)){return+dim;}};SeriesData.prototype._getStoreDimIndex=function(dim){var dimIdx=this.getDimensionIndex(dim);if(false){}return dimIdx;};/**
   * Get type and calculation info of particular dimension
   * @param dim
   *        Dimension can be concrete names like x, y, z, lng, lat, angle, radius
   *        Or a ordinal number. For example getDimensionInfo(0) will return 'x' or 'lng' or 'radius'
   */SeriesData.prototype.getDimensionInfo=function(dim){// Do not clone, because there may be categories in dimInfo.
return this._getDimInfo(this.getDimension(dim));};SeriesData.prototype._initGetDimensionInfo=function(needsHasOwn){var dimensionInfos=this._dimInfos;this._getDimInfo=needsHasOwn?function(dimName){return dimensionInfos.hasOwnProperty(dimName)?dimensionInfos[dimName]:undefined;}:function(dimName){return dimensionInfos[dimName];};};/**
   * concrete dimension name list on coord.
   */SeriesData.prototype.getDimensionsOnCoord=function(){return this._dimSummary.dataDimsOnCoord.slice();};SeriesData.prototype.mapDimension=function(coordDim,idx){var dimensionsSummary=this._dimSummary;if(idx==null){return dimensionsSummary.encodeFirstDimNotExtra[coordDim];}var dims=dimensionsSummary.encode[coordDim];return dims?dims[idx]:null;};SeriesData.prototype.mapDimensionsAll=function(coordDim){var dimensionsSummary=this._dimSummary;var dims=dimensionsSummary.encode[coordDim];return(dims||[]).slice();};SeriesData.prototype.getStore=function(){return this._store;};/**
   * Initialize from data
   * @param data source or data or data store.
   * @param nameList The name of a datum is used on data diff and
   *        default label/tooltip.
   *        A name can be specified in encode.itemName,
   *        or dataItem.name (only for series option data),
   *        or provided in nameList from outside.
   */SeriesData.prototype.initData=function(data,nameList,dimValueGetter){var _this=this;var store;if(data instanceof DataStore/* default */.ZP){store=data;}if(!store){var dimensions=this.dimensions;var provider=(0,Source/* isSourceInstance */.Ld)(data)||util/* isArrayLike */.zG(data)?new dataProvider/* DefaultDataProvider */.Pl(data,dimensions.length):data;store=new DataStore/* default */.ZP();var dimensionInfos=map(dimensions,function(dimName){return{type:_this._dimInfos[dimName].type,property:dimName};});store.initData(provider,dimensionInfos,dimValueGetter);}this._store=store;// Reset
this._nameList=(nameList||[]).slice();this._idList=[];this._nameRepeatCount={};this._doInit(0,store.count());// Cache summary info for fast visit. See "dimensionHelper".
// Needs to be initialized after store is prepared.
this._dimSummary=(0,dimensionHelper/* summarizeDimensions */.y)(this,this._schema);this.userOutput=this._dimSummary.userOutput;};/**
   * Caution: Can be only called on raw data (before `this._indices` created).
   */SeriesData.prototype.appendData=function(data){var range=this._store.appendData(data);this._doInit(range[0],range[1]);};/**
   * Caution: Can be only called on raw data (before `this._indices` created).
   * This method does not modify `rawData` (`dataProvider`), but only
   * add values to store.
   *
   * The final count will be increased by `Math.max(values.length, names.length)`.
   *
   * @param values That is the SourceType: 'arrayRows', like
   *        [
   *            [12, 33, 44],
   *            [NaN, 43, 1],
   *            ['-', 'asdf', 0]
   *        ]
   *        Each item is exaclty cooresponding to a dimension.
   */SeriesData.prototype.appendValues=function(values,names){var _a=this._store.appendValues(values,names.length),start=_a.start,end=_a.end;var shouldMakeIdFromName=this._shouldMakeIdFromName();this._updateOrdinalMeta();if(names){for(var idx=start;idx<end;idx++){var sourceIdx=idx-start;this._nameList[idx]=names[sourceIdx];if(shouldMakeIdFromName){makeIdFromName(this,idx);}}}};SeriesData.prototype._updateOrdinalMeta=function(){var store=this._store;var dimensions=this.dimensions;for(var i=0;i<dimensions.length;i++){var dimInfo=this._dimInfos[dimensions[i]];if(dimInfo.ordinalMeta){store.collectOrdinalMeta(dimInfo.storeDimIndex,dimInfo.ordinalMeta);}}};SeriesData.prototype._shouldMakeIdFromName=function(){var provider=this._store.getProvider();return this._idDimIdx==null&&provider.getSource().sourceFormat!==types/* SOURCE_FORMAT_TYPED_ARRAY */.J5&&!provider.fillStorage;};SeriesData.prototype._doInit=function(start,end){if(start>=end){return;}var store=this._store;var provider=store.getProvider();this._updateOrdinalMeta();var nameList=this._nameList;var idList=this._idList;var sourceFormat=provider.getSource().sourceFormat;var isFormatOriginal=sourceFormat===types/* SOURCE_FORMAT_ORIGINAL */.cy;// Each data item is value
// [1, 2]
// 2
// Bar chart, line chart which uses category axis
// only gives the 'y' value. 'x' value is the indices of category
// Use a tempValue to normalize the value to be a (x, y) value
// If dataItem is {name: ...} or {id: ...}, it has highest priority.
// This kind of ids and names are always stored `_nameList` and `_idList`.
if(isFormatOriginal&&!provider.pure){var sharedDataItem=[];for(var idx=start;idx<end;idx++){// NOTICE: Try not to write things into dataItem
var dataItem=provider.getItem(idx,sharedDataItem);if(!this.hasItemOption&&(0,model/* isDataItemOption */.Co)(dataItem)){this.hasItemOption=true;}if(dataItem){var itemName=dataItem.name;if(nameList[idx]==null&&itemName!=null){nameList[idx]=(0,model/* convertOptionIdName */.U5)(itemName,null);}var itemId=dataItem.id;if(idList[idx]==null&&itemId!=null){idList[idx]=(0,model/* convertOptionIdName */.U5)(itemId,null);}}}}if(this._shouldMakeIdFromName()){for(var idx=start;idx<end;idx++){makeIdFromName(this,idx);}}prepareInvertedIndex(this);};/**
   * PENDING: In fact currently this function is only used to short-circuit
   * the calling of `scale.unionExtentFromData` when data have been filtered by modules
   * like "dataZoom". `scale.unionExtentFromData` is used to calculate data extent for series on
   * an axis, but if a "axis related data filter module" is used, the extent of the axis have
   * been fixed and no need to calling `scale.unionExtentFromData` actually.
   * But if we add "custom data filter" in future, which is not "axis related", this method may
   * be still needed.
   *
   * Optimize for the scenario that data is filtered by a given extent.
   * Consider that if data amount is more than hundreds of thousand,
   * extent calculation will cost more than 10ms and the cache will
   * be erased because of the filtering.
   */SeriesData.prototype.getApproximateExtent=function(dim){return this._approximateExtent[dim]||this._store.getDataExtent(this._getStoreDimIndex(dim));};/**
   * Calculate extent on a filtered data might be time consuming.
   * Approximate extent is only used for: calculte extent of filtered data outside.
   */SeriesData.prototype.setApproximateExtent=function(extent,dim){dim=this.getDimension(dim);this._approximateExtent[dim]=extent.slice();};SeriesData.prototype.getCalculationInfo=function(key){return this._calculationInfo[key];};SeriesData.prototype.setCalculationInfo=function(key,value){isObject(key)?util/* extend */.l7(this._calculationInfo,key):this._calculationInfo[key]=value;};/**
   * @return Never be null/undefined. `number` will be converted to string. Becuase:
   * In most cases, name is used in display, where returning a string is more convenient.
   * In other cases, name is used in query (see `indexOfName`), where we can keep the
   * rule that name `2` equals to name `'2'`.
   */SeriesData.prototype.getName=function(idx){var rawIndex=this.getRawIndex(idx);var name=this._nameList[rawIndex];if(name==null&&this._nameDimIdx!=null){name=getIdNameFromStore(this,this._nameDimIdx,rawIndex);}if(name==null){name='';}return name;};SeriesData.prototype._getCategory=function(dimIdx,idx){var ordinal=this._store.get(dimIdx,idx);var ordinalMeta=this._store.getOrdinalMeta(dimIdx);if(ordinalMeta){return ordinalMeta.categories[ordinal];}return ordinal;};/**
   * @return Never null/undefined. `number` will be converted to string. Becuase:
   * In all cases having encountered at present, id is used in making diff comparison, which
   * are usually based on hash map. We can keep the rule that the internal id are always string
   * (treat `2` is the same as `'2'`) to make the related logic simple.
   */SeriesData.prototype.getId=function(idx){return getId(this,this.getRawIndex(idx));};SeriesData.prototype.count=function(){return this._store.count();};/**
   * Get value. Return NaN if idx is out of range.
   *
   * @notice Should better to use `data.getStore().get(dimIndex, dataIdx)` instead.
   */SeriesData.prototype.get=function(dim,idx){var store=this._store;var dimInfo=this._dimInfos[dim];if(dimInfo){return store.get(dimInfo.storeDimIndex,idx);}};/**
   * @notice Should better to use `data.getStore().getByRawIndex(dimIndex, dataIdx)` instead.
   */SeriesData.prototype.getByRawIndex=function(dim,rawIdx){var store=this._store;var dimInfo=this._dimInfos[dim];if(dimInfo){return store.getByRawIndex(dimInfo.storeDimIndex,rawIdx);}};SeriesData.prototype.getIndices=function(){return this._store.getIndices();};SeriesData.prototype.getDataExtent=function(dim){return this._store.getDataExtent(this._getStoreDimIndex(dim));};SeriesData.prototype.getSum=function(dim){return this._store.getSum(this._getStoreDimIndex(dim));};SeriesData.prototype.getMedian=function(dim){return this._store.getMedian(this._getStoreDimIndex(dim));};SeriesData.prototype.getValues=function(dimensions,idx){var _this=this;var store=this._store;return util/* isArray */.kJ(dimensions)?store.getValues(map(dimensions,function(dim){return _this._getStoreDimIndex(dim);}),idx):store.getValues(dimensions);};/**
   * If value is NaN. Inlcuding '-'
   * Only check the coord dimensions.
   */SeriesData.prototype.hasValue=function(idx){var dataDimIndicesOnCoord=this._dimSummary.dataDimIndicesOnCoord;for(var i=0,len=dataDimIndicesOnCoord.length;i<len;i++){// Ordinal type originally can be string or number.
// But when an ordinal type is used on coord, it can
// not be string but only number. So we can also use isNaN.
if(isNaN(this._store.get(dataDimIndicesOnCoord[i],idx))){return false;}}return true;};/**
   * Retreive the index with given name
   */SeriesData.prototype.indexOfName=function(name){for(var i=0,len=this._store.count();i<len;i++){if(this.getName(i)===name){return i;}}return-1;};SeriesData.prototype.getRawIndex=function(idx){return this._store.getRawIndex(idx);};SeriesData.prototype.indexOfRawIndex=function(rawIndex){return this._store.indexOfRawIndex(rawIndex);};/**
   * Only support the dimension which inverted index created.
   * Do not support other cases until required.
   * @param dim concrete dim
   * @param value ordinal index
   * @return rawIndex
   */SeriesData.prototype.rawIndexOf=function(dim,value){var invertedIndices=dim&&this._invertedIndicesMap[dim];if(false){}var rawIndex=invertedIndices[value];if(rawIndex==null||isNaN(rawIndex)){return INDEX_NOT_FOUND;}return rawIndex;};/**
   * Retreive the index of nearest value
   * @param dim
   * @param value
   * @param [maxDistance=Infinity]
   * @return If and only if multiple indices has
   *         the same value, they are put to the result.
   */SeriesData.prototype.indicesOfNearest=function(dim,value,maxDistance){return this._store.indicesOfNearest(this._getStoreDimIndex(dim),value,maxDistance);};SeriesData.prototype.each=function(dims,cb,ctx){'use strict';if(util/* isFunction */.mf(dims)){ctx=cb;cb=dims;dims=[];}// ctxCompat just for compat echarts3
var fCtx=ctx||this;var dimIndices=map(normalizeDimensions(dims),this._getStoreDimIndex,this);this._store.each(dimIndices,fCtx?util/* bind */.ak(cb,fCtx):cb);};SeriesData.prototype.filterSelf=function(dims,cb,ctx){'use strict';if(util/* isFunction */.mf(dims)){ctx=cb;cb=dims;dims=[];}// ctxCompat just for compat echarts3
var fCtx=ctx||this;var dimIndices=map(normalizeDimensions(dims),this._getStoreDimIndex,this);this._store=this._store.filter(dimIndices,fCtx?util/* bind */.ak(cb,fCtx):cb);return this;};/**
   * Select data in range. (For optimization of filter)
   * (Manually inline code, support 5 million data filtering in data zoom.)
   */SeriesData.prototype.selectRange=function(range){'use strict';var _this=this;var innerRange={};var dims=util/* keys */.XP(range);var dimIndices=[];util/* each */.S6(dims,function(dim){var dimIdx=_this._getStoreDimIndex(dim);innerRange[dimIdx]=range[dim];dimIndices.push(dimIdx);});this._store=this._store.selectRange(innerRange);return this;};/* eslint-enable max-len */SeriesData.prototype.mapArray=function(dims,cb,ctx){'use strict';if(util/* isFunction */.mf(dims)){ctx=cb;cb=dims;dims=[];}// ctxCompat just for compat echarts3
ctx=ctx||this;var result=[];this.each(dims,function(){result.push(cb&&cb.apply(this,arguments));},ctx);return result;};SeriesData.prototype.map=function(dims,cb,ctx,ctxCompat){'use strict';// ctxCompat just for compat echarts3
var fCtx=ctx||ctxCompat||this;var dimIndices=map(normalizeDimensions(dims),this._getStoreDimIndex,this);var list=cloneListForMapAndSample(this);list._store=this._store.map(dimIndices,fCtx?util/* bind */.ak(cb,fCtx):cb);return list;};SeriesData.prototype.modify=function(dims,cb,ctx,ctxCompat){var _this=this;// ctxCompat just for compat echarts3
var fCtx=ctx||ctxCompat||this;if(false){}var dimIndices=map(normalizeDimensions(dims),this._getStoreDimIndex,this);// If do shallow clone here, if there are too many stacked series,
// it still cost lots of memory, becuase `_store.dimensions` are not shared.
// We should consider there probably be shallow clone happen in each sereis
// in consequent filter/map.
this._store.modify(dimIndices,fCtx?util/* bind */.ak(cb,fCtx):cb);};/**
   * Large data down sampling on given dimension
   * @param sampleIndex Sample index for name and id
   */SeriesData.prototype.downSample=function(dimension,rate,sampleValue,sampleIndex){var list=cloneListForMapAndSample(this);list._store=this._store.downSample(this._getStoreDimIndex(dimension),rate,sampleValue,sampleIndex);return list;};/**
   * Large data down sampling using largest-triangle-three-buckets
   * @param {string} valueDimension
   * @param {number} targetCount
   */SeriesData.prototype.lttbDownSample=function(valueDimension,rate){var list=cloneListForMapAndSample(this);list._store=this._store.lttbDownSample(this._getStoreDimIndex(valueDimension),rate);return list;};SeriesData.prototype.getRawDataItem=function(idx){return this._store.getRawDataItem(idx);};/**
   * Get model of one data item.
   */ // TODO: Type of data item
SeriesData.prototype.getItemModel=function(idx){var hostModel=this.hostModel;var dataItem=this.getRawDataItem(idx);return new Model/* default */.Z(dataItem,hostModel,hostModel&&hostModel.ecModel);};/**
   * Create a data differ
   */SeriesData.prototype.diff=function(otherList){var thisList=this;return new data_DataDiffer(otherList?otherList.getStore().getIndices():[],this.getStore().getIndices(),function(idx){return getId(otherList,idx);},function(idx){return getId(thisList,idx);});};/**
   * Get visual property.
   */SeriesData.prototype.getVisual=function(key){var visual=this._visual;return visual&&visual[key];};SeriesData.prototype.setVisual=function(kvObj,val){this._visual=this._visual||{};if(isObject(kvObj)){util/* extend */.l7(this._visual,kvObj);}else{this._visual[kvObj]=val;}};/**
   * Get visual property of single data item
   */ // eslint-disable-next-line
SeriesData.prototype.getItemVisual=function(idx,key){var itemVisual=this._itemVisuals[idx];var val=itemVisual&&itemVisual[key];if(val==null){// Use global visual property
return this.getVisual(key);}return val;};/**
   * If exists visual property of single data item
   */SeriesData.prototype.hasItemVisual=function(){return this._itemVisuals.length>0;};/**
   * Make sure itemVisual property is unique
   */ // TODO: use key to save visual to reduce memory.
SeriesData.prototype.ensureUniqueItemVisual=function(idx,key){var itemVisuals=this._itemVisuals;var itemVisual=itemVisuals[idx];if(!itemVisual){itemVisual=itemVisuals[idx]={};}var val=itemVisual[key];if(val==null){val=this.getVisual(key);// TODO Performance?
if(util/* isArray */.kJ(val)){val=val.slice();}else if(isObject(val)){val=util/* extend */.l7({},val);}itemVisual[key]=val;}return val;};// eslint-disable-next-line
SeriesData.prototype.setItemVisual=function(idx,key,value){var itemVisual=this._itemVisuals[idx]||{};this._itemVisuals[idx]=itemVisual;if(isObject(key)){util/* extend */.l7(itemVisual,key);}else{itemVisual[key]=value;}};/**
   * Clear itemVisuals and list visual.
   */SeriesData.prototype.clearAllVisual=function(){this._visual={};this._itemVisuals=[];};SeriesData.prototype.setLayout=function(key,val){isObject(key)?util/* extend */.l7(this._layout,key):this._layout[key]=val;};/**
   * Get layout property.
   */SeriesData.prototype.getLayout=function(key){return this._layout[key];};/**
   * Get layout of single data item
   */SeriesData.prototype.getItemLayout=function(idx){return this._itemLayouts[idx];};/**
   * Set layout of single data item
   */SeriesData.prototype.setItemLayout=function(idx,layout,merge){this._itemLayouts[idx]=merge?util/* extend */.l7(this._itemLayouts[idx]||{},layout):layout;};/**
   * Clear all layout of single data item
   */SeriesData.prototype.clearItemLayouts=function(){this._itemLayouts.length=0;};/**
   * Set graphic element relative to data. It can be set as null
   */SeriesData.prototype.setItemGraphicEl=function(idx,el){var seriesIndex=this.hostModel&&this.hostModel.seriesIndex;(0,innerStore/* setCommonECData */.Q)(seriesIndex,this.dataType,idx,el);this._graphicEls[idx]=el;};SeriesData.prototype.getItemGraphicEl=function(idx){return this._graphicEls[idx];};SeriesData.prototype.eachItemGraphicEl=function(cb,context){util/* each */.S6(this._graphicEls,function(el,idx){if(el){cb&&cb.call(context,el,idx);}});};/**
   * Shallow clone a new list except visual and layout properties, and graph elements.
   * New list only change the indices.
   */SeriesData.prototype.cloneShallow=function(list){if(!list){list=new SeriesData(this._schema?this._schema:map(this.dimensions,this._getDimInfo,this),this.hostModel);}transferProperties(list,this);list._store=this._store;return list;};/**
   * Wrap some method to add more feature
   */SeriesData.prototype.wrapMethod=function(methodName,injectFunction){var originalMethod=this[methodName];if(!util/* isFunction */.mf(originalMethod)){return;}this.__wrappedMethods=this.__wrappedMethods||[];this.__wrappedMethods.push(methodName);this[methodName]=function(){var res=originalMethod.apply(this,arguments);return injectFunction.apply(this,[res].concat(util/* slice */.tP(arguments)));};};// ----------------------------------------------------------
// A work around for internal method visiting private member.
// ----------------------------------------------------------
SeriesData.internalField=function(){prepareInvertedIndex=function prepareInvertedIndex(data){var invertedIndicesMap=data._invertedIndicesMap;util/* each */.S6(invertedIndicesMap,function(invertedIndices,dim){var dimInfo=data._dimInfos[dim];// Currently, only dimensions that has ordinalMeta can create inverted indices.
var ordinalMeta=dimInfo.ordinalMeta;var store=data._store;if(ordinalMeta){invertedIndices=invertedIndicesMap[dim]=new CtorInt32Array(ordinalMeta.categories.length);// The default value of TypedArray is 0. To avoid miss
// mapping to 0, we should set it as INDEX_NOT_FOUND.
for(var i=0;i<invertedIndices.length;i++){invertedIndices[i]=INDEX_NOT_FOUND;}for(var i=0;i<store.count();i++){// Only support the case that all values are distinct.
invertedIndices[store.get(dimInfo.storeDimIndex,i)]=i;}}});};getIdNameFromStore=function getIdNameFromStore(data,dimIdx,idx){return (0,model/* convertOptionIdName */.U5)(data._getCategory(dimIdx,idx),null);};/**
     * @see the comment of `List['getId']`.
     */getId=function getId(data,rawIndex){var id=data._idList[rawIndex];if(id==null&&data._idDimIdx!=null){id=getIdNameFromStore(data,data._idDimIdx,rawIndex);}if(id==null){id=ID_PREFIX+rawIndex;}return id;};normalizeDimensions=function normalizeDimensions(dimensions){if(!util/* isArray */.kJ(dimensions)){dimensions=dimensions!=null?[dimensions]:[];}return dimensions;};/**
     * Data in excludeDimensions is copied, otherwise transfered.
     */cloneListForMapAndSample=function cloneListForMapAndSample(original){var list=new SeriesData(original._schema?original._schema:map(original.dimensions,original._getDimInfo,original),original.hostModel);// FIXME If needs stackedOn, value may already been stacked
transferProperties(list,original);return list;};transferProperties=function transferProperties(target,source){util/* each */.S6(TRANSFERABLE_PROPERTIES.concat(source.__wrappedMethods||[]),function(propName){if(source.hasOwnProperty(propName)){target[propName]=source[propName];}});target.__wrappedMethods=source.__wrappedMethods;util/* each */.S6(CLONE_PROPERTIES,function(propName){target[propName]=util/* clone */.d9(source[propName]);});target._calculationInfo=util/* extend */.l7({},source._calculationInfo);};makeIdFromName=function makeIdFromName(data,idx){var nameList=data._nameList;var idList=data._idList;var nameDimIdx=data._nameDimIdx;var idDimIdx=data._idDimIdx;var name=nameList[idx];var id=idList[idx];if(name==null&&nameDimIdx!=null){nameList[idx]=name=getIdNameFromStore(data,nameDimIdx,idx);}if(id==null&&idDimIdx!=null){idList[idx]=id=getIdNameFromStore(data,idDimIdx,idx);}if(id==null&&name!=null){var nameRepeatCount=data._nameRepeatCount;var nmCnt=nameRepeatCount[name]=(nameRepeatCount[name]||0)+1;id=name;if(nmCnt>1){id+='__ec__'+nmCnt;}idList[idx]=id;}};}();return SeriesData;}();/* harmony default export */ const data_SeriesData = (SeriesData);

/***/ }),

/***/ 45288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
*/var SeriesDimensionDefine=/** @class */function(){/**
   * @param opt All of the fields will be shallow copied.
   */function SeriesDimensionDefine(opt){/**
     * The format of `otherDims` is:
     * ```js
     * {
     *     tooltip?: number
     *     label?: number
     *     itemName?: number
     *     seriesName?: number
     * }
     * ```
     *
     * A `series.encode` can specified these fields:
     * ```js
     * encode: {
     *     // "3, 1, 5" is the index of data dimension.
     *     tooltip: [3, 1, 5],
     *     label: [0, 3],
     *     ...
     * }
     * ```
     * `otherDims` is the parse result of the `series.encode` above, like:
     * ```js
     * // Suppose the index of this data dimension is `3`.
     * this.otherDims = {
     *     // `3` is at the index `0` of the `encode.tooltip`
     *     tooltip: 0,
     *     // `3` is at the index `1` of the `encode.label`
     *     label: 1
     * };
     * ```
     *
     * This prop should never be `null`/`undefined` after initialized.
     */this.otherDims={};if(opt!=null){zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7(this,opt);}}return SeriesDimensionDefine;}();;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeriesDimensionDefine);

/***/ }),

/***/ 40653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kp": () => (/* binding */ detectSourceFormat),
/* harmony export */   "Ld": () => (/* binding */ isSourceInstance),
/* harmony export */   "ML": () => (/* binding */ cloneSourceShallow),
/* harmony export */   "QY": () => (/* binding */ shouldRetrieveDataByName),
/* harmony export */   "_P": () => (/* binding */ createSource),
/* harmony export */   "nx": () => (/* binding */ createSourceFromSeriesDataOption)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57697);
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74298);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23958);
/* harmony import */ var _helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47386);
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
*/;// @inner
var SourceImpl=/** @class */function(){function SourceImpl(fields){this.data=fields.data||(fields.sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL?{}:[]);this.sourceFormat=fields.sourceFormat||_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_UNKNOWN */ .RA;// Visit config
this.seriesLayoutBy=fields.seriesLayoutBy||_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SERIES_LAYOUT_BY_COLUMN */ .fY;this.startIndex=fields.startIndex||0;this.dimensionsDetectedCount=fields.dimensionsDetectedCount;this.metaRawOption=fields.metaRawOption;var dimensionsDefine=this.dimensionsDefine=fields.dimensionsDefine;if(dimensionsDefine){for(var i=0;i<dimensionsDefine.length;i++){var dim=dimensionsDefine[i];if(dim.type==null){if((0,_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_1__/* .guessOrdinal */ .u7)(this,i)===_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_1__/* .BE_ORDINAL.Must */ .Dq.Must){dim.type='ordinal';}}}}}return SourceImpl;}();function isSourceInstance(val){return val instanceof SourceImpl;}/**
 * Create a source from option.
 * NOTE: Created source is immutable. Don't change any properties in it.
 */function createSource(sourceData,thisMetaRawOption,// can be null. If not provided, auto detect it from `sourceData`.
sourceFormat){sourceFormat=sourceFormat||detectSourceFormat(sourceData);var seriesLayoutBy=thisMetaRawOption.seriesLayoutBy;var determined=determineSourceDimensions(sourceData,sourceFormat,seriesLayoutBy,thisMetaRawOption.sourceHeader,thisMetaRawOption.dimensions);var source=new SourceImpl({data:sourceData,sourceFormat:sourceFormat,seriesLayoutBy:seriesLayoutBy,dimensionsDefine:determined.dimensionsDefine,startIndex:determined.startIndex,dimensionsDetectedCount:determined.dimensionsDetectedCount,metaRawOption:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .d9)(thisMetaRawOption)});return source;}/**
 * Wrap original series data for some compatibility cases.
 */function createSourceFromSeriesDataOption(data){return new SourceImpl({data:data,sourceFormat:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedArray */ .fU)(data)?_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_TYPED_ARRAY */ .J5:_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_ORIGINAL */ .cy});}/**
 * Clone source but excludes source data.
 */function cloneSourceShallow(source){return new SourceImpl({data:source.data,sourceFormat:source.sourceFormat,seriesLayoutBy:source.seriesLayoutBy,dimensionsDefine:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .d9)(source.dimensionsDefine),startIndex:source.startIndex,dimensionsDetectedCount:source.dimensionsDetectedCount});}/**
 * Note: An empty array will be detected as `SOURCE_FORMAT_ARRAY_ROWS`.
 */function detectSourceFormat(data){var sourceFormat=_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_UNKNOWN */ .RA;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedArray */ .fU)(data)){sourceFormat=_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_TYPED_ARRAY */ .J5;}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArray */ .kJ)(data)){// FIXME Whether tolerate null in top level array?
if(data.length===0){sourceFormat=_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD;}for(var i=0,len=data.length;i<len;i++){var item=data[i];if(item==null){continue;}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArray */ .kJ)(item)){sourceFormat=_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD;break;}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isObject */ .Kn)(item)){sourceFormat=_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb;break;}}}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isObject */ .Kn)(data)){for(var key in data){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .hasOwn */ .RI)(data,key)&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArrayLike */ .zG)(data[key])){sourceFormat=_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL;break;}}}return sourceFormat;}/**
 * Determine the source definitions from data standalone dimensions definitions
 * are not specified.
 */function determineSourceDimensions(data,sourceFormat,seriesLayoutBy,sourceHeader,// standalone raw dimensions definition, like:
// {
//     dimensions: ['aa', 'bb', { name: 'cc', type: 'time' }]
// }
// in `dataset` or `series`
dimensionsDefine){var dimensionsDetectedCount;var startIndex;// PEDING: could data be null/undefined here?
// currently, if `dataset.source` not specified, error thrown.
// if `series.data` not specified, nothing rendered without error thrown.
// Should test these cases.
if(!data){return{dimensionsDefine:normalizeDimensionsOption(dimensionsDefine),startIndex:startIndex,dimensionsDetectedCount:dimensionsDetectedCount};}if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD){var dataArrayRows=data;// Rule: Most of the first line are string: it is header.
// Caution: consider a line with 5 string and 1 number,
// it still can not be sure it is a head, because the
// 5 string may be 5 values of category columns.
if(sourceHeader==='auto'||sourceHeader==null){arrayRowsTravelFirst(function(val){// '-' is regarded as null/undefined.
if(val!=null&&val!=='-'){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isString */ .HD)(val)){startIndex==null&&(startIndex=1);}else{startIndex=0;}}// 10 is an experience number, avoid long loop.
},seriesLayoutBy,dataArrayRows,10);}else{startIndex=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumber */ .hj)(sourceHeader)?sourceHeader:sourceHeader?1:0;}if(!dimensionsDefine&&startIndex===1){dimensionsDefine=[];arrayRowsTravelFirst(function(val,index){dimensionsDefine[index]=val!=null?val+'':'';},seriesLayoutBy,dataArrayRows,Infinity);}dimensionsDetectedCount=dimensionsDefine?dimensionsDefine.length:seriesLayoutBy===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SERIES_LAYOUT_BY_ROW */ .Wc?dataArrayRows.length:dataArrayRows[0]?dataArrayRows[0].length:null;}else if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb){if(!dimensionsDefine){dimensionsDefine=objectRowsCollectDimensions(data);}}else if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL){if(!dimensionsDefine){dimensionsDefine=[];(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(data,function(colArr,key){dimensionsDefine.push(key);});}}else if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_ORIGINAL */ .cy){var value0=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__/* .getDataItemValue */ .C4)(data[0]);dimensionsDetectedCount=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArray */ .kJ)(value0)&&value0.length||1;}else if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_TYPED_ARRAY */ .J5){if(false){}}return{startIndex:startIndex,dimensionsDefine:normalizeDimensionsOption(dimensionsDefine),dimensionsDetectedCount:dimensionsDetectedCount};}function objectRowsCollectDimensions(data){var firstIndex=0;var obj;while(firstIndex<data.length&&!(obj=data[firstIndex++])){}// jshint ignore: line
if(obj){var dimensions_1=[];(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(obj,function(value,key){dimensions_1.push(key);});return dimensions_1;}}// Consider dimensions defined like ['A', 'price', 'B', 'price', 'C', 'price'],
// which is reasonable. But dimension name is duplicated.
// Returns undefined or an array contains only object without null/undefiend or string.
function normalizeDimensionsOption(dimensionsDefine){if(!dimensionsDefine){// The meaning of null/undefined is different from empty array.
return;}var nameMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .createHashMap */ .kW)();return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .map */ .UI)(dimensionsDefine,function(rawItem,index){rawItem=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isObject */ .Kn)(rawItem)?rawItem:{name:rawItem};// Other fields will be discarded.
var item={name:rawItem.name,displayName:rawItem.displayName,type:rawItem.type};// User can set null in dimensions.
// We dont auto specify name, othewise a given name may
// cause it be refered unexpectedly.
if(item.name==null){return item;}// Also consider number form like 2012.
item.name+='';// User may also specify displayName.
// displayName will always exists except user not
// specified or dim name is not specified or detected.
// (A auto generated dim name will not be used as
// displayName).
if(item.displayName==null){item.displayName=item.name;}var exist=nameMap.get(item.name);if(!exist){nameMap.set(item.name,{count:1});}else{item.name+='-'+exist.count++;}return item;});}function arrayRowsTravelFirst(cb,seriesLayoutBy,data,maxLoop){if(seriesLayoutBy===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SERIES_LAYOUT_BY_ROW */ .Wc){for(var i=0;i<data.length&&i<maxLoop;i++){cb(data[i]?data[i][0]:null,i);}}else{var value0=data[0]||[];for(var i=0;i<value0.length&&i<maxLoop;i++){cb(value0[i],i);}}}function shouldRetrieveDataByName(source){var sourceFormat=source.sourceFormat;return sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb||sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_0__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL;}

/***/ }),

/***/ 63444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eo": () => (/* binding */ SeriesDataSchema),
/* harmony export */   "Jj": () => (/* binding */ ensureSourceDimNameMap),
/* harmony export */   "Jl": () => (/* binding */ shouldOmitUnusedDimensions),
/* harmony export */   "bB": () => (/* binding */ isSeriesDataSchema),
/* harmony export */   "v5": () => (/* binding */ createDimNameMap)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/* harmony import */ var _Source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40653);
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
*/var inner=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var dimTypeShort={float:'f',int:'i',ordinal:'o',number:'n',time:'t'};/**
 * Represents the dimension requirement of a series.
 *
 * NOTICE:
 * When there are too many dimensions in dataset and many series, only the used dimensions
 * (i.e., used by coord sys and declared in `series.encode`) are add to `dimensionDefineList`.
 * But users may query data by other unused dimension names.
 * In this case, users can only query data if and only if they have defined dimension names
 * via ec option, so we provide `getDimensionIndexFromSource`, which only query them from
 * `source` dimensions.
 */var SeriesDataSchema=/** @class */function(){function SeriesDataSchema(opt){this.dimensions=opt.dimensions;this._dimOmitted=opt.dimensionOmitted;this.source=opt.source;this._fullDimCount=opt.fullDimensionCount;this._updateDimOmitted(opt.dimensionOmitted);}SeriesDataSchema.prototype.isDimensionOmitted=function(){return this._dimOmitted;};SeriesDataSchema.prototype._updateDimOmitted=function(dimensionOmitted){this._dimOmitted=dimensionOmitted;if(!dimensionOmitted){return;}if(!this._dimNameMap){this._dimNameMap=ensureSourceDimNameMap(this.source);}};/**
   * @caution Can only be used when `dimensionOmitted: true`.
   *
   * Get index by user defined dimension name (i.e., not internal generate name).
   * That is, get index from `dimensionsDefine`.
   * If no `dimensionsDefine`, or no name get, return -1.
   */SeriesDataSchema.prototype.getSourceDimensionIndex=function(dimName){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(this._dimNameMap.get(dimName),-1);};/**
   * @caution Can only be used when `dimensionOmitted: true`.
   *
   * Notice: may return `null`/`undefined` if user not specify dimension names.
   */SeriesDataSchema.prototype.getSourceDimension=function(dimIndex){var dimensionsDefine=this.source.dimensionsDefine;if(dimensionsDefine){return dimensionsDefine[dimIndex];}};SeriesDataSchema.prototype.makeStoreSchema=function(){var dimCount=this._fullDimCount;var willRetrieveDataByName=(0,_Source_js__WEBPACK_IMPORTED_MODULE_2__/* .shouldRetrieveDataByName */ .QY)(this.source);var makeHashStrict=!shouldOmitUnusedDimensions(dimCount);// If source don't have dimensions or series don't omit unsed dimensions.
// Generate from seriesDimList directly
var dimHash='';var dims=[];for(var fullDimIdx=0,seriesDimIdx=0;fullDimIdx<dimCount;fullDimIdx++){var property=void 0;var type=void 0;var ordinalMeta=void 0;var seriesDimDef=this.dimensions[seriesDimIdx];// The list has been sorted by `storeDimIndex` asc.
if(seriesDimDef&&seriesDimDef.storeDimIndex===fullDimIdx){property=willRetrieveDataByName?seriesDimDef.name:null;type=seriesDimDef.type;ordinalMeta=seriesDimDef.ordinalMeta;seriesDimIdx++;}else{var sourceDimDef=this.getSourceDimension(fullDimIdx);if(sourceDimDef){property=willRetrieveDataByName?sourceDimDef.name:null;type=sourceDimDef.type;}}dims.push({property:property,type:type,ordinalMeta:ordinalMeta});// If retrieving data by index,
//   use <index, type, ordinalMeta> to determine whether data can be shared.
//   (Becuase in this case there might be no dimension name defined in dataset, but indices always exists).
//   (indices are always 0, 1, 2, ..., so we can ignore them to shorten the hash).
// Otherwise if retrieving data by property name (like `data: [{aa: 123, bb: 765}, ...]`),
//   use <property, type, ordinalMeta> in hash.
if(willRetrieveDataByName&&property!=null// For data stack, we have make sure each series has its own dim on this store.
// So we do not add property to hash to make sure they can share this store.
&&(!seriesDimDef||!seriesDimDef.isCalculationCoord)){dimHash+=makeHashStrict// Use escape character '`' in case that property name contains '$'.
?property.replace(/\`/g,'`1').replace(/\$/g,'`2')// For better performance, when there are large dimensions, tolerant this defects that hardly meet.
:property;}dimHash+='$';dimHash+=dimTypeShort[type]||'f';if(ordinalMeta){dimHash+=ordinalMeta.uid;}dimHash+='$';}// Source from endpoint(usually series) will be read differently
// when seriesLayoutBy or startIndex(which is affected by sourceHeader) are different.
// So we use this three props as key.
var source=this.source;var hash=[source.seriesLayoutBy,source.startIndex,dimHash].join('$$');return{dimensions:dims,hash:hash};};SeriesDataSchema.prototype.makeOutputDimensionNames=function(){var result=[];for(var fullDimIdx=0,seriesDimIdx=0;fullDimIdx<this._fullDimCount;fullDimIdx++){var name_1=void 0;var seriesDimDef=this.dimensions[seriesDimIdx];// The list has been sorted by `storeDimIndex` asc.
if(seriesDimDef&&seriesDimDef.storeDimIndex===fullDimIdx){if(!seriesDimDef.isCalculationCoord){name_1=seriesDimDef.name;}seriesDimIdx++;}else{var sourceDimDef=this.getSourceDimension(fullDimIdx);if(sourceDimDef){name_1=sourceDimDef.name;}}result.push(name_1);}return result;};SeriesDataSchema.prototype.appendCalculationDimension=function(dimDef){this.dimensions.push(dimDef);dimDef.isCalculationCoord=true;this._fullDimCount++;// If append dimension on a data store, consider the store
// might be shared by different series, series dimensions not
// really map to store dimensions.
this._updateDimOmitted(true);};return SeriesDataSchema;}();function isSeriesDataSchema(schema){return schema instanceof SeriesDataSchema;}function createDimNameMap(dimsDef){var dataDimNameMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .createHashMap */ .kW)();for(var i=0;i<(dimsDef||[]).length;i++){var dimDefItemRaw=dimsDef[i];var userDimName=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(dimDefItemRaw)?dimDefItemRaw.name:dimDefItemRaw;if(userDimName!=null&&dataDimNameMap.get(userDimName)==null){dataDimNameMap.set(userDimName,i);}}return dataDimNameMap;}function ensureSourceDimNameMap(source){var innerSource=inner(source);return innerSource.dimNameMap||(innerSource.dimNameMap=createDimNameMap(source.dimensionsDefine));}function shouldOmitUnusedDimensions(dimCount){return dimCount>30;}

/***/ }),

/***/ 32650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ prepareSeriesDataSchema)
/* harmony export */ });
/* unused harmony export createDimensions */
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74298);
/* harmony import */ var _SeriesDimensionDefine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45288);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _Source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40653);
/* harmony import */ var _DataStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27720);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23958);
/* harmony import */ var _sourceHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47386);
/* harmony import */ var _SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63444);
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
 * For outside usage compat (like echarts-gl are using it).
 */function createDimensions(source,opt){return prepareSeriesDataSchema(source,opt).dimensions;}/**
 * This method builds the relationship between:
 * + "what the coord sys or series requires (see `coordDimensions`)",
 * + "what the user defines (in `encode` and `dimensions`, see `opt.dimensionsDefine` and `opt.encodeDefine`)"
 * + "what the data source provids (see `source`)".
 *
 * Some guess strategy will be adapted if user does not define something.
 * If no 'value' dimension specified, the first no-named dimension will be
 * named as 'value'.
 *
 * @return The results are always sorted by `storeDimIndex` asc.
 */function prepareSeriesDataSchema(// TODO: TYPE completeDimensions type
source,opt){if(!(0,_Source_js__WEBPACK_IMPORTED_MODULE_0__/* .isSourceInstance */ .Ld)(source)){source=(0,_Source_js__WEBPACK_IMPORTED_MODULE_0__/* .createSourceFromSeriesDataOption */ .nx)(source);}opt=opt||{};var sysDims=opt.coordDimensions||[];var dimsDef=opt.dimensionsDefine||source.dimensionsDefine||[];var coordDimNameMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .createHashMap */ .kW)();var resultList=[];var dimCount=getDimCount(source,sysDims,dimsDef,opt.dimensionsCount);// Try to ignore unsed dimensions if sharing a high dimension datastore
// 30 is an experience value.
var omitUnusedDimensions=opt.canOmitUnusedDimensions&&(0,_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__/* .shouldOmitUnusedDimensions */ .Jl)(dimCount);var isUsingSourceDimensionsDef=dimsDef===source.dimensionsDefine;var dataDimNameMap=isUsingSourceDimensionsDef?(0,_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__/* .ensureSourceDimNameMap */ .Jj)(source):(0,_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__/* .createDimNameMap */ .v5)(dimsDef);var encodeDef=opt.encodeDefine;if(!encodeDef&&opt.encodeDefaulter){encodeDef=opt.encodeDefaulter(source,dimCount);}var encodeDefMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .createHashMap */ .kW)(encodeDef);var indicesMap=new _DataStore_js__WEBPACK_IMPORTED_MODULE_3__/* .CtorInt32Array */ .hG(dimCount);for(var i=0;i<indicesMap.length;i++){indicesMap[i]=-1;}function getResultItem(dimIdx){var idx=indicesMap[dimIdx];if(idx<0){var dimDefItemRaw=dimsDef[dimIdx];var dimDefItem=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(dimDefItemRaw)?dimDefItemRaw:{name:dimDefItemRaw};var resultItem=new _SeriesDimensionDefine_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z();var userDimName=dimDefItem.name;if(userDimName!=null&&dataDimNameMap.get(userDimName)!=null){// Only if `series.dimensions` is defined in option
// displayName, will be set, and dimension will be diplayed vertically in
// tooltip by default.
resultItem.name=resultItem.displayName=userDimName;}dimDefItem.type!=null&&(resultItem.type=dimDefItem.type);dimDefItem.displayName!=null&&(resultItem.displayName=dimDefItem.displayName);var newIdx=resultList.length;indicesMap[dimIdx]=newIdx;resultItem.storeDimIndex=dimIdx;resultList.push(resultItem);return resultItem;}return resultList[idx];}if(!omitUnusedDimensions){for(var i=0;i<dimCount;i++){getResultItem(i);}}// Set `coordDim` and `coordDimIndex` by `encodeDefMap` and normalize `encodeDefMap`.
encodeDefMap.each(function(dataDimsRaw,coordDim){var dataDims=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_5__/* .normalizeToArray */ .kF)(dataDimsRaw).slice();// Note: It is allowed that `dataDims.length` is `0`, e.g., options is
// `{encode: {x: -1, y: 1}}`. Should not filter anything in
// this case.
if(dataDims.length===1&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(dataDims[0])&&dataDims[0]<0){encodeDefMap.set(coordDim,false);return;}var validDataDims=encodeDefMap.set(coordDim,[]);(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(dataDims,function(resultDimIdxOrName,idx){// The input resultDimIdx can be dim name or index.
var resultDimIdx=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(resultDimIdxOrName)?dataDimNameMap.get(resultDimIdxOrName):resultDimIdxOrName;if(resultDimIdx!=null&&resultDimIdx<dimCount){validDataDims[idx]=resultDimIdx;applyDim(getResultItem(resultDimIdx),coordDim,idx);}});});// Apply templetes and default order from `sysDims`.
var availDimIdx=0;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(sysDims,function(sysDimItemRaw){var coordDim;var sysDimItemDimsDef;var sysDimItemOtherDims;var sysDimItem;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(sysDimItemRaw)){coordDim=sysDimItemRaw;sysDimItem={};}else{sysDimItem=sysDimItemRaw;coordDim=sysDimItem.name;var ordinalMeta=sysDimItem.ordinalMeta;sysDimItem.ordinalMeta=null;sysDimItem=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)({},sysDimItem);sysDimItem.ordinalMeta=ordinalMeta;// `coordDimIndex` should not be set directly.
sysDimItemDimsDef=sysDimItem.dimsDef;sysDimItemOtherDims=sysDimItem.otherDims;sysDimItem.name=sysDimItem.coordDim=sysDimItem.coordDimIndex=sysDimItem.dimsDef=sysDimItem.otherDims=null;}var dataDims=encodeDefMap.get(coordDim);// negative resultDimIdx means no need to mapping.
if(dataDims===false){return;}dataDims=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_5__/* .normalizeToArray */ .kF)(dataDims);// dimensions provides default dim sequences.
if(!dataDims.length){for(var i=0;i<(sysDimItemDimsDef&&sysDimItemDimsDef.length||1);i++){while(availDimIdx<dimCount&&getResultItem(availDimIdx).coordDim!=null){availDimIdx++;}availDimIdx<dimCount&&dataDims.push(availDimIdx++);}}// Apply templates.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(dataDims,function(resultDimIdx,coordDimIndex){var resultItem=getResultItem(resultDimIdx);// Coordinate system has a higher priority on dim type than source.
if(isUsingSourceDimensionsDef&&sysDimItem.type!=null){resultItem.type=sysDimItem.type;}applyDim((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .defaults */ .ce)(resultItem,sysDimItem),coordDim,coordDimIndex);if(resultItem.name==null&&sysDimItemDimsDef){var sysDimItemDimsDefItem=sysDimItemDimsDef[coordDimIndex];!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(sysDimItemDimsDefItem)&&(sysDimItemDimsDefItem={name:sysDimItemDimsDefItem});resultItem.name=resultItem.displayName=sysDimItemDimsDefItem.name;resultItem.defaultTooltip=sysDimItemDimsDefItem.defaultTooltip;}// FIXME refactor, currently only used in case: {otherDims: {tooltip: false}}
sysDimItemOtherDims&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .defaults */ .ce)(resultItem.otherDims,sysDimItemOtherDims);});});function applyDim(resultItem,coordDim,coordDimIndex){if(_util_types_js__WEBPACK_IMPORTED_MODULE_6__/* .VISUAL_DIMENSIONS.get */ .f7.get(coordDim)!=null){resultItem.otherDims[coordDim]=coordDimIndex;}else{resultItem.coordDim=coordDim;resultItem.coordDimIndex=coordDimIndex;coordDimNameMap.set(coordDim,true);}}// Make sure the first extra dim is 'value'.
var generateCoord=opt.generateCoord;var generateCoordCount=opt.generateCoordCount;var fromZero=generateCoordCount!=null;generateCoordCount=generateCoord?generateCoordCount||1:0;var extra=generateCoord||'value';function ifNoNameFillWithCoordName(resultItem){if(resultItem.name==null){// Duplication will be removed in the next step.
resultItem.name=resultItem.coordDim;}}// Set dim `name` and other `coordDim` and other props.
if(!omitUnusedDimensions){for(var resultDimIdx=0;resultDimIdx<dimCount;resultDimIdx++){var resultItem=getResultItem(resultDimIdx);var coordDim=resultItem.coordDim;if(coordDim==null){// TODO no need to generate coordDim for isExtraCoord?
resultItem.coordDim=genCoordDimName(extra,coordDimNameMap,fromZero);resultItem.coordDimIndex=0;// Series specified generateCoord is using out.
if(!generateCoord||generateCoordCount<=0){resultItem.isExtraCoord=true;}generateCoordCount--;}ifNoNameFillWithCoordName(resultItem);if(resultItem.type==null&&((0,_sourceHelper_js__WEBPACK_IMPORTED_MODULE_7__/* .guessOrdinal */ .u7)(source,resultDimIdx)===_sourceHelper_js__WEBPACK_IMPORTED_MODULE_7__/* .BE_ORDINAL.Must */ .Dq.Must// Consider the case:
// {
//    dataset: {source: [
//        ['2001', 123],
//        ['2002', 456],
//        ...
//        ['The others', 987],
//    ]},
//    series: {type: 'pie'}
// }
// The first colum should better be treated as a "ordinal" although it
// might not able to be detected as an "ordinal" by `guessOrdinal`.
||resultItem.isExtraCoord&&(resultItem.otherDims.itemName!=null||resultItem.otherDims.seriesName!=null))){resultItem.type='ordinal';}}}else{(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(resultList,function(resultItem){// PENDING: guessOrdinal or let user specify type: 'ordinal' manually?
ifNoNameFillWithCoordName(resultItem);});// Sort dimensions: there are some rule that use the last dim as label,
// and for some latter travel process easier.
resultList.sort(function(item0,item1){return item0.storeDimIndex-item1.storeDimIndex;});}removeDuplication(resultList);return new _SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_2__/* .SeriesDataSchema */ .Eo({source:source,dimensions:resultList,fullDimensionCount:dimCount,dimensionOmitted:omitUnusedDimensions});}function removeDuplication(result){var duplicationMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .createHashMap */ .kW)();for(var i=0;i<result.length;i++){var dim=result[i];var dimOriginalName=dim.name;var count=duplicationMap.get(dimOriginalName)||0;if(count>0){// Starts from 0.
dim.name=dimOriginalName+(count-1);}count++;duplicationMap.set(dimOriginalName,count);}}// ??? TODO
// Originally detect dimCount by data[0]. Should we
// optimize it to only by sysDims and dimensions and encode.
// So only necessary dims will be initialized.
// But
// (1) custom series should be considered. where other dims
// may be visited.
// (2) sometimes user need to calcualte bubble size or use visualMap
// on other dimensions besides coordSys needed.
// So, dims that is not used by system, should be shared in data store?
function getDimCount(source,sysDims,dimsDef,optDimCount){// Note that the result dimCount should not small than columns count
// of data, otherwise `dataDimNameMap` checking will be incorrect.
var dimCount=Math.max(source.dimensionsDetectedCount||1,sysDims.length,dimsDef.length,optDimCount||0);(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(sysDims,function(sysDimItem){var sysDimItemDimsDef;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(sysDimItem)&&(sysDimItemDimsDef=sysDimItem.dimsDef)){dimCount=Math.max(dimCount,sysDimItemDimsDef.length);}});return dimCount;}function genCoordDimName(name,map,fromZero){var mapData=map.data;if(fromZero||mapData.hasOwnProperty(name)){var i=0;while(mapData.hasOwnProperty(name+i)){i++;}name+=i;}map.set(name,true);return name;}

/***/ }),

/***/ 32946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pl": () => (/* binding */ DefaultDataProvider),
/* harmony export */   "_j": () => (/* binding */ getRawSourceItemGetter),
/* harmony export */   "a": () => (/* binding */ getRawSourceDataCounter),
/* harmony export */   "hk": () => (/* binding */ retrieveRawValue),
/* harmony export */   "tB": () => (/* binding */ getRawSourceValueGetter)
/* harmony export */ });
/* unused harmony export retrieveRawAttr */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57697);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23958);
/* harmony import */ var _Source_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40653);
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74298);
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
*/var _a,_b,_c;// TODO
// ??? refactor? check the outer usage of data provider.
// merge with defaultDimValueGetter?
var providerMethods;var mountMethods;/**
 * If normal array used, mutable chunk size is supported.
 * If typed array used, chunk size must be fixed.
 */var DefaultDataProvider=/** @class */function(){function DefaultDataProvider(sourceParam,dimSize){// let source: Source;
var source=!(0,_Source_js__WEBPACK_IMPORTED_MODULE_0__/* .isSourceInstance */ .Ld)(sourceParam)?(0,_Source_js__WEBPACK_IMPORTED_MODULE_0__/* .createSourceFromSeriesDataOption */ .nx)(sourceParam):sourceParam;// declare source is Source;
this._source=source;var data=this._data=source.data;// Typed array. TODO IE10+?
if(source.sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_TYPED_ARRAY */ .J5){if(false){}this._offset=0;this._dimSize=dimSize;this._data=data;}mountMethods(this,data,source);}DefaultDataProvider.prototype.getSource=function(){return this._source;};DefaultDataProvider.prototype.count=function(){return 0;};DefaultDataProvider.prototype.getItem=function(idx,out){return;};DefaultDataProvider.prototype.appendData=function(newData){};DefaultDataProvider.prototype.clean=function(){};DefaultDataProvider.protoInitialize=function(){// PENDING: To avoid potential incompat (e.g., prototype
// is visited somewhere), still init them on prototype.
var proto=DefaultDataProvider.prototype;proto.pure=false;proto.persistent=true;}();DefaultDataProvider.internalField=function(){var _a;mountMethods=function mountMethods(provider,data,source){var sourceFormat=source.sourceFormat;var seriesLayoutBy=source.seriesLayoutBy;var startIndex=source.startIndex;var dimsDef=source.dimensionsDefine;var methods=providerMethods[getMethodMapKey(sourceFormat,seriesLayoutBy)];if(false){}(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)(provider,methods);if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_TYPED_ARRAY */ .J5){provider.getItem=getItemForTypedArray;provider.count=countForTypedArray;provider.fillStorage=fillStorageForTypedArray;}else{var rawItemGetter=getRawSourceItemGetter(sourceFormat,seriesLayoutBy);provider.getItem=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .bind */ .ak)(rawItemGetter,null,data,startIndex,dimsDef);var rawCounter=getRawSourceDataCounter(sourceFormat,seriesLayoutBy);provider.count=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .bind */ .ak)(rawCounter,null,data,startIndex,dimsDef);}};var getItemForTypedArray=function getItemForTypedArray(idx,out){idx=idx-this._offset;out=out||[];var data=this._data;var dimSize=this._dimSize;var offset=dimSize*idx;for(var i=0;i<dimSize;i++){out[i]=data[offset+i];}return out;};var fillStorageForTypedArray=function fillStorageForTypedArray(start,end,storage,extent){var data=this._data;var dimSize=this._dimSize;for(var dim=0;dim<dimSize;dim++){var dimExtent=extent[dim];var min=dimExtent[0]==null?Infinity:dimExtent[0];var max=dimExtent[1]==null?-Infinity:dimExtent[1];var count=end-start;var arr=storage[dim];for(var i=0;i<count;i++){// appendData with TypedArray will always do replace in provider.
var val=data[i*dimSize+dim];arr[start+i]=val;val<min&&(min=val);val>max&&(max=val);}dimExtent[0]=min;dimExtent[1]=max;}};var countForTypedArray=function countForTypedArray(){return this._data?this._data.length/this._dimSize:0;};providerMethods=(_a={},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD+'_'+_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_COLUMN */ .fY]={pure:true,appendData:appendDataSimply},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD+'_'+_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_ROW */ .Wc]={pure:true,appendData:function appendData(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".');}},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb]={pure:true,appendData:appendDataSimply},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL]={pure:true,appendData:function appendData(newData){var data=this._data;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(newData,function(newCol,key){var oldCol=data[key]||(data[key]=[]);for(var i=0;i<(newCol||[]).length;i++){oldCol.push(newCol[i]);}});}},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ORIGINAL */ .cy]={appendData:appendDataSimply},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_TYPED_ARRAY */ .J5]={persistent:false,pure:true,appendData:function appendData(newData){if(false){}this._data=newData;},// Clean self if data is already used.
clean:function clean(){// PENDING
this._offset+=this.count();this._data=null;}},_a);function appendDataSimply(newData){for(var i=0;i<newData.length;i++){this._data.push(newData[i]);}}}();return DefaultDataProvider;}();var getItemSimply=function getItemSimply(rawData,startIndex,dimsDef,idx){return rawData[idx];};var rawSourceItemGetterMap=(_a={},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD+'_'+_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_COLUMN */ .fY]=function(rawData,startIndex,dimsDef,idx){return rawData[idx+startIndex];},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD+'_'+_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_ROW */ .Wc]=function(rawData,startIndex,dimsDef,idx,out){idx+=startIndex;var item=out||[];var data=rawData;for(var i=0;i<data.length;i++){var row=data[i];item[i]=row?row[idx]:null;}return item;},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb]=getItemSimply,_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL]=function(rawData,startIndex,dimsDef,idx,out){var item=out||[];for(var i=0;i<dimsDef.length;i++){var dimName=dimsDef[i].name;if(false){}var col=rawData[dimName];item[i]=col?col[idx]:null;}return item;},_a[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ORIGINAL */ .cy]=getItemSimply,_a);function getRawSourceItemGetter(sourceFormat,seriesLayoutBy){var method=rawSourceItemGetterMap[getMethodMapKey(sourceFormat,seriesLayoutBy)];if(false){}return method;}var countSimply=function countSimply(rawData,startIndex,dimsDef){return rawData.length;};var rawSourceDataCounterMap=(_b={},_b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD+'_'+_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_COLUMN */ .fY]=function(rawData,startIndex,dimsDef){return Math.max(0,rawData.length-startIndex);},_b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD+'_'+_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_ROW */ .Wc]=function(rawData,startIndex,dimsDef){var row=rawData[0];return row?Math.max(0,row.length-startIndex):0;},_b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb]=countSimply,_b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL]=function(rawData,startIndex,dimsDef){var dimName=dimsDef[0].name;if(false){}var col=rawData[dimName];return col?col.length:0;},_b[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ORIGINAL */ .cy]=countSimply,_b);function getRawSourceDataCounter(sourceFormat,seriesLayoutBy){var method=rawSourceDataCounterMap[getMethodMapKey(sourceFormat,seriesLayoutBy)];if(false){}return method;}var getRawValueSimply=function getRawValueSimply(dataItem,dimIndex,property){return dataItem[dimIndex];};var rawSourceValueGetterMap=(_c={},_c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD]=getRawValueSimply,_c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb]=function(dataItem,dimIndex,property){return dataItem[property];},_c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL]=getRawValueSimply,_c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ORIGINAL */ .cy]=function(dataItem,dimIndex,property){// FIXME: In some case (markpoint in geo (geo-map.html)),
// dataItem is {coord: [...]}
var value=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__/* .getDataItemValue */ .C4)(dataItem);return!(value instanceof Array)?value:value[dimIndex];},_c[_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_TYPED_ARRAY */ .J5]=getRawValueSimply,_c);function getRawSourceValueGetter(sourceFormat){var method=rawSourceValueGetterMap[sourceFormat];if(false){}return method;}function getMethodMapKey(sourceFormat,seriesLayoutBy){return sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD?sourceFormat+'_'+seriesLayoutBy:sourceFormat;}// ??? FIXME can these logic be more neat: getRawValue, getRawDataItem,
// Consider persistent.
// Caution: why use raw value to display on label or tooltip?
// A reason is to avoid format. For example time value we do not know
// how to format is expected. More over, if stack is used, calculated
// value may be 0.91000000001, which have brings trouble to display.
// TODO: consider how to treat null/undefined/NaN when display?
function retrieveRawValue(data,dataIndex,// If dimIndex is null/undefined, return OptionDataItem.
// Otherwise, return OptionDataValue.
dim){if(!data){return;}// Consider data may be not persistent.
var dataItem=data.getRawDataItem(dataIndex);if(dataItem==null){return;}var store=data.getStore();var sourceFormat=store.getSource().sourceFormat;if(dim!=null){var dimIndex=data.getDimensionIndex(dim);var property=store.getDimensionProperty(dimIndex);return getRawSourceValueGetter(sourceFormat)(dataItem,dimIndex,property);}else{var result=dataItem;if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ORIGINAL */ .cy){result=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__/* .getDataItemValue */ .C4)(dataItem);}return result;}}/**
 * Compatible with some cases (in pie, map) like:
 * data: [{name: 'xx', value: 5, selected: true}, ...]
 * where only sourceFormat is 'original' and 'objectRows' supported.
 *
 * // TODO
 * Supported detail options in data item when using 'arrayRows'.
 *
 * @param data
 * @param dataIndex
 * @param attr like 'selected'
 */function retrieveRawAttr(data,dataIndex,attr){if(!data){return;}var sourceFormat=data.getStore().getSource().sourceFormat;if(sourceFormat!==SOURCE_FORMAT_ORIGINAL&&sourceFormat!==SOURCE_FORMAT_OBJECT_ROWS){return;}var dataItem=data.getRawDataItem(dataIndex);if(sourceFormat===SOURCE_FORMAT_ORIGINAL&&!isObject(dataItem)){dataItem=null;}if(dataItem){return dataItem[attr];}}

/***/ }),

/***/ 29209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BM": () => (/* binding */ enableDataStack),
/* harmony export */   "IR": () => (/* binding */ getStackedDimension),
/* harmony export */   "M": () => (/* binding */ isDimensionStacked)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63444);
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
 * Note that it is too complicated to support 3d stack by value
 * (have to create two-dimension inverted index), so in 3d case
 * we just support that stacked by index.
 *
 * @param seriesModel
 * @param dimensionsInput The same as the input of <module:echarts/data/SeriesData>.
 *        The input will be modified.
 * @param opt
 * @param opt.stackedCoordDimension Specify a coord dimension if needed.
 * @param opt.byIndex=false
 * @return calculationInfo
 * {
 *     stackedDimension: string
 *     stackedByDimension: string
 *     isStackedByIndex: boolean
 *     stackedOverDimension: string
 *     stackResultDimension: string
 * }
 */function enableDataStack(seriesModel,dimensionsInput,opt){opt=opt||{};var byIndex=opt.byIndex;var stackedCoordDimension=opt.stackedCoordDimension;var dimensionDefineList;var schema;var store;if(isLegacyDimensionsInput(dimensionsInput)){dimensionDefineList=dimensionsInput;}else{schema=dimensionsInput.schema;dimensionDefineList=schema.dimensions;store=dimensionsInput.store;}// Compatibal: when `stack` is set as '', do not stack.
var mayStack=!!(seriesModel&&seriesModel.get('stack'));var stackedByDimInfo;var stackedDimInfo;var stackResultDimension;var stackedOverDimension;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(dimensionDefineList,function(dimensionInfo,index){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(dimensionInfo)){dimensionDefineList[index]=dimensionInfo={name:dimensionInfo};}if(mayStack&&!dimensionInfo.isExtraCoord){// Find the first ordinal dimension as the stackedByDimInfo.
if(!byIndex&&!stackedByDimInfo&&dimensionInfo.ordinalMeta){stackedByDimInfo=dimensionInfo;}// Find the first stackable dimension as the stackedDimInfo.
if(!stackedDimInfo&&dimensionInfo.type!=='ordinal'&&dimensionInfo.type!=='time'&&(!stackedCoordDimension||stackedCoordDimension===dimensionInfo.coordDim)){stackedDimInfo=dimensionInfo;}}});if(stackedDimInfo&&!byIndex&&!stackedByDimInfo){// Compatible with previous design, value axis (time axis) only stack by index.
// It may make sense if the user provides elaborately constructed data.
byIndex=true;}// Add stack dimension, they can be both calculated by coordinate system in `unionExtent`.
// That put stack logic in List is for using conveniently in echarts extensions, but it
// might not be a good way.
if(stackedDimInfo){// Use a weird name that not duplicated with other names.
// Also need to use seriesModel.id as postfix because different
// series may share same data store. The stack dimension needs to be distinguished.
stackResultDimension='__\0ecstackresult_'+seriesModel.id;stackedOverDimension='__\0ecstackedover_'+seriesModel.id;// Create inverted index to fast query index by value.
if(stackedByDimInfo){stackedByDimInfo.createInvertedIndices=true;}var stackedDimCoordDim_1=stackedDimInfo.coordDim;var stackedDimType=stackedDimInfo.type;var stackedDimCoordIndex_1=0;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(dimensionDefineList,function(dimensionInfo){if(dimensionInfo.coordDim===stackedDimCoordDim_1){stackedDimCoordIndex_1++;}});var stackedOverDimensionDefine={name:stackResultDimension,coordDim:stackedDimCoordDim_1,coordDimIndex:stackedDimCoordIndex_1,type:stackedDimType,isExtraCoord:true,isCalculationCoord:true,storeDimIndex:dimensionDefineList.length};var stackResultDimensionDefine={name:stackedOverDimension,// This dimension contains stack base (generally, 0), so do not set it as
// `stackedDimCoordDim` to avoid extent calculation, consider log scale.
coordDim:stackedOverDimension,coordDimIndex:stackedDimCoordIndex_1+1,type:stackedDimType,isExtraCoord:true,isCalculationCoord:true,storeDimIndex:dimensionDefineList.length+1};if(schema){if(store){stackedOverDimensionDefine.storeDimIndex=store.ensureCalculationDimension(stackedOverDimension,stackedDimType);stackResultDimensionDefine.storeDimIndex=store.ensureCalculationDimension(stackResultDimension,stackedDimType);}schema.appendCalculationDimension(stackedOverDimensionDefine);schema.appendCalculationDimension(stackResultDimensionDefine);}else{dimensionDefineList.push(stackedOverDimensionDefine);dimensionDefineList.push(stackResultDimensionDefine);}}return{stackedDimension:stackedDimInfo&&stackedDimInfo.name,stackedByDimension:stackedByDimInfo&&stackedByDimInfo.name,isStackedByIndex:byIndex,stackedOverDimension:stackedOverDimension,stackResultDimension:stackResultDimension};}function isLegacyDimensionsInput(dimensionsInput){return!(0,_SeriesDataSchema_js__WEBPACK_IMPORTED_MODULE_1__/* .isSeriesDataSchema */ .bB)(dimensionsInput.schema);}function isDimensionStacked(data,stackedDim){// Each single series only maps to one pair of axis. So we do not need to
// check stackByDim, whatever stacked by a dimension or stacked by index.
return!!stackedDim&&stackedDim===data.getCalculationInfo('stackedDimension');}function getStackedDimension(data,targetDim){return isDimensionStacked(data,targetDim)?data.getCalculationInfo('stackResultDimension'):targetDim;}

/***/ }),

/***/ 85168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID": () => (/* binding */ SortOrderComparator),
/* harmony export */   "yQ": () => (/* binding */ parseDataValue)
/* harmony export */ });
/* unused harmony exports getRawValueParser, createFilterComparator */
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84646);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _util_log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42023);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*
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
 * Convert raw the value in to inner value in List.
 *
 * [Performance sensitive]
 *
 * [Caution]: this is the key logic of user value parser.
 * For backward compatibiliy, do not modify it until have to!
 */function parseDataValue(value,// For high performance, do not omit the second param.
opt){// Performance sensitive.
var dimType=opt&&opt.type;if(dimType==='ordinal'){// If given value is a category string
return value;}if(dimType==='time'// spead up when using timestamp
&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(value)&&value!=null&&value!=='-'){value=+(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .parseDate */ .sG)(value);}// dimType defaults 'number'.
// If dimType is not ordinal and value is null or undefined or NaN or '-',
// parse to NaN.
// number-like string (like ' 123 ') can be converted to a number.
// where null/undefined or other string will be converted to NaN.
return value==null||value===''?NaN// If string (like '-'), using '+' parse to NaN
// If object, also parse to NaN
:+value;};var valueParserMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)({'number':function number(val){// Do not use `numericToNumber` here. We have by defualt `numericToNumber`.
// Here the number parser can have loose rule:
// enable to cut suffix: "120px" => 120, "14%" => 14.
return parseFloat(val);},'time':function time(val){// return timestamp.
return+(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .parseDate */ .sG)(val);},'trim':function trim(val){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(val)?(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .trim */ .fy)(val):val;}});function getRawValueParser(type){return valueParserMap.get(type);}var ORDER_COMPARISON_OP_MAP={lt:function lt(lval,rval){return lval<rval;},lte:function lte(lval,rval){return lval<=rval;},gt:function gt(lval,rval){return lval>rval;},gte:function gte(lval,rval){return lval>=rval;}};var FilterOrderComparator=/** @class */function(){function FilterOrderComparator(op,rval){if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(rval)){var errMsg='';if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}this._opFn=ORDER_COMPARISON_OP_MAP[op];this._rvalFloat=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .numericToNumber */ .FK)(rval);}// Performance sensitive.
FilterOrderComparator.prototype.evaluate=function(lval){// Most cases is 'number', and typeof maybe 10 times faseter than parseFloat.
return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(lval)?this._opFn(lval,this._rvalFloat):this._opFn((0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .numericToNumber */ .FK)(lval),this._rvalFloat);};return FilterOrderComparator;}();var SortOrderComparator=/** @class */function(){/**
   * @param order by defualt: 'asc'
   * @param incomparable by defualt: Always on the tail.
   *        That is, if 'asc' => 'max', if 'desc' => 'min'
   *        See the definition of "incomparable" in [SORT_COMPARISON_RULE]
   */function SortOrderComparator(order,incomparable){var isDesc=order==='desc';this._resultLT=isDesc?1:-1;if(incomparable==null){incomparable=isDesc?'min':'max';}this._incomparable=incomparable==='min'?-Infinity:Infinity;}// See [SORT_COMPARISON_RULE].
// Performance sensitive.
SortOrderComparator.prototype.evaluate=function(lval,rval){// Most cases is 'number', and typeof maybe 10 times faseter than parseFloat.
var lvalFloat=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(lval)?lval:(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .numericToNumber */ .FK)(lval);var rvalFloat=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(rval)?rval:(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .numericToNumber */ .FK)(rval);var lvalNotNumeric=isNaN(lvalFloat);var rvalNotNumeric=isNaN(rvalFloat);if(lvalNotNumeric){lvalFloat=this._incomparable;}if(rvalNotNumeric){rvalFloat=this._incomparable;}if(lvalNotNumeric&&rvalNotNumeric){var lvalIsStr=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(lval);var rvalIsStr=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(rval);if(lvalIsStr){lvalFloat=rvalIsStr?lval:0;}if(rvalIsStr){rvalFloat=lvalIsStr?rval:0;}}return lvalFloat<rvalFloat?this._resultLT:lvalFloat>rvalFloat?-this._resultLT:0;};return SortOrderComparator;}();var FilterEqualityComparator=/** @class */function(){function FilterEqualityComparator(isEq,rval){this._rval=rval;this._isEQ=isEq;this._rvalTypeof=_typeof(rval);this._rvalFloat=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .numericToNumber */ .FK)(rval);}// Performance sensitive.
FilterEqualityComparator.prototype.evaluate=function(lval){var eqResult=lval===this._rval;if(!eqResult){var lvalTypeof=_typeof(lval);if(lvalTypeof!==this._rvalTypeof&&(lvalTypeof==='number'||this._rvalTypeof==='number')){eqResult=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .numericToNumber */ .FK)(lval)===this._rvalFloat;}}return this._isEQ?eqResult:!eqResult;};return FilterEqualityComparator;}();/**
 * [FILTER_COMPARISON_RULE]
 * `lt`|`lte`|`gt`|`gte`:
 * + rval must be a number. And lval will be converted to number (`numericToNumber`) to compare.
 * `eq`:
 * + If same type, compare with `===`.
 * + If there is one number, convert to number (`numericToNumber`) to compare.
 * + Else return `false`.
 * `ne`:
 * + Not `eq`.
 *
 *
 * [SORT_COMPARISON_RULE]
 * All the values are grouped into three categories:
 * + "numeric" (number and numeric string)
 * + "non-numeric-string" (string that excluding numeric string)
 * + "others"
 * "numeric" vs "numeric": values are ordered by number order.
 * "non-numeric-string" vs "non-numeric-string": values are ordered by ES spec (#sec-abstract-relational-comparison).
 * "others" vs "others": do not change order (always return 0).
 * "numeric" vs "non-numeric-string": "non-numeric-string" is treated as "incomparable".
 * "number" vs "others": "others" is treated as "incomparable".
 * "non-numeric-string" vs "others": "others" is treated as "incomparable".
 * "incomparable" will be seen as -Infinity or Infinity (depends on the settings).
 * MEMO:
 *   non-numeric string sort make sence when need to put the items with the same tag together.
 *   But if we support string sort, we still need to avoid the misleading like `'2' > '12'`,
 *   So we treat "numeric-string" sorted by number order rather than string comparison.
 *
 *
 * [CHECK_LIST_OF_THE_RULE_DESIGN]
 * + Do not support string comparison until required. And also need to
 *   void the misleading of "2" > "12".
 * + Should avoid the misleading case:
 *   `" 22 " gte "22"` is `true` but `" 22 " eq "22"` is `false`.
 * + JS bad case should be avoided: null <= 0, [] <= 0, ' ' <= 0, ...
 * + Only "numeric" can be converted to comparable number, otherwise converted to NaN.
 *   See `util/number.ts#numericToNumber`.
 *
 * @return If `op` is not `RelationalOperator`, return null;
 */function createFilterComparator(op,rval){return op==='eq'||op==='ne'?new FilterEqualityComparator(op==='eq',rval):hasOwn(ORDER_COMPARISON_OP_MAP,op)?new FilterOrderComparator(op,rval):null;}

/***/ }),

/***/ 1979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ getDimensionTypeByAxis),
/* harmony export */   "y": () => (/* binding */ summarizeDimensions)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74298);
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
*/var DimensionUserOuput=/** @class */function(){function DimensionUserOuput(encode,dimRequest){this._encode=encode;this._schema=dimRequest;}DimensionUserOuput.prototype.get=function(){return{// Do not generate full dimension name until fist used.
fullDimensions:this._getFullDimensionNames(),encode:this._encode};};/**
   * Get all data store dimension names.
   * Theoretically a series data store is defined both by series and used dataset (if any).
   * If some dimensions are omitted for performance reason in `this.dimensions`,
   * the dimension name may not be auto-generated if user does not specify a dimension name.
   * In this case, the dimension name is `null`/`undefined`.
   */DimensionUserOuput.prototype._getFullDimensionNames=function(){if(!this._cachedDimNames){this._cachedDimNames=this._schema?this._schema.makeOutputDimensionNames():[];}return this._cachedDimNames;};return DimensionUserOuput;}();;function summarizeDimensions(data,schema){var summary={};var encode=summary.encode={};var notExtraCoordDimMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)();var defaultedLabel=[];var defaultedTooltip=[];var userOutputEncode={};(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(data.dimensions,function(dimName){var dimItem=data.getDimensionInfo(dimName);var coordDim=dimItem.coordDim;if(coordDim){if(false){}var coordDimIndex=dimItem.coordDimIndex;getOrCreateEncodeArr(encode,coordDim)[coordDimIndex]=dimName;if(!dimItem.isExtraCoord){notExtraCoordDimMap.set(coordDim,1);// Use the last coord dim (and label friendly) as default label,
// because when dataset is used, it is hard to guess which dimension
// can be value dimension. If both show x, y on label is not look good,
// and conventionally y axis is focused more.
if(mayLabelDimType(dimItem.type)){defaultedLabel[0]=dimName;}// User output encode do not contain generated coords.
// And it only has index. User can use index to retrieve value from the raw item array.
getOrCreateEncodeArr(userOutputEncode,coordDim)[coordDimIndex]=data.getDimensionIndex(dimItem.name);}if(dimItem.defaultTooltip){defaultedTooltip.push(dimName);}}_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .VISUAL_DIMENSIONS.each */ .f7.each(function(v,otherDim){var encodeArr=getOrCreateEncodeArr(encode,otherDim);var dimIndex=dimItem.otherDims[otherDim];if(dimIndex!=null&&dimIndex!==false){encodeArr[dimIndex]=dimItem.name;}});});var dataDimsOnCoord=[];var encodeFirstDimNotExtra={};notExtraCoordDimMap.each(function(v,coordDim){var dimArr=encode[coordDim];encodeFirstDimNotExtra[coordDim]=dimArr[0];// Not necessary to remove duplicate, because a data
// dim canot on more than one coordDim.
dataDimsOnCoord=dataDimsOnCoord.concat(dimArr);});summary.dataDimsOnCoord=dataDimsOnCoord;summary.dataDimIndicesOnCoord=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)(dataDimsOnCoord,function(dimName){return data.getDimensionInfo(dimName).storeDimIndex;});summary.encodeFirstDimNotExtra=encodeFirstDimNotExtra;var encodeLabel=encode.label;// FIXME `encode.label` is not recommanded, because formatter can not be set
// in this way. Use label.formatter instead. May be remove this approach someday.
if(encodeLabel&&encodeLabel.length){defaultedLabel=encodeLabel.slice();}var encodeTooltip=encode.tooltip;if(encodeTooltip&&encodeTooltip.length){defaultedTooltip=encodeTooltip.slice();}else if(!defaultedTooltip.length){defaultedTooltip=defaultedLabel.slice();}encode.defaultedLabel=defaultedLabel;encode.defaultedTooltip=defaultedTooltip;summary.userOutput=new DimensionUserOuput(userOutputEncode,schema);return summary;}function getOrCreateEncodeArr(encode,dim){if(!encode.hasOwnProperty(dim)){encode[dim]=[];}return encode[dim];}// FIXME:TS should be type `AxisType`
function getDimensionTypeByAxis(axisType){return axisType==='category'?'ordinal':axisType==='time'?'time':'float';}function mayLabelDimType(dimType){// In most cases, ordinal and time do not suitable for label.
// Ordinal info can be displayed on axis. Time is too long.
return!(dimType==='ordinal'||dimType==='time');}// function findTheLastDimMayLabel(data) {
//     // Get last value dim
//     let dimensions = data.dimensions.slice();
//     let valueType;
//     let valueDim;
//     while (dimensions.length && (
//         valueDim = dimensions.pop(),
//         valueType = data.getDimensionInfo(valueDim).type,
//         valueType === 'ordinal' || valueType === 'time'
//     )) {} // jshint ignore:line
//     return valueDim;
// }

/***/ }),

/***/ 47386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dq": () => (/* binding */ BE_ORDINAL),
/* harmony export */   "JT": () => (/* binding */ queryDatasetUpstreamDatasetModels),
/* harmony export */   "Ss": () => (/* binding */ makeSeriesEncodeForNameBased),
/* harmony export */   "Wd": () => (/* binding */ querySeriesUpstreamDatasetModel),
/* harmony export */   "md": () => (/* binding */ resetSourceDefaulter),
/* harmony export */   "pY": () => (/* binding */ makeSeriesEncodeForAxisCoordSys),
/* harmony export */   "u7": () => (/* binding */ guessOrdinal)
/* harmony export */ });
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74298);
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
*/// The result of `guessOrdinal`.
var BE_ORDINAL={Must:1,Might:2,Not:3// Other cases
};var innerGlobalModel=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();/**
 * MUST be called before mergeOption of all series.
 */function resetSourceDefaulter(ecModel){// `datasetMap` is used to make default encode.
innerGlobalModel(ecModel).datasetMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .createHashMap */ .kW)();}/**
 * [The strategy of the arrengment of data dimensions for dataset]:
 * "value way": all axes are non-category axes. So series one by one take
 *     several (the number is coordSysDims.length) dimensions from dataset.
 *     The result of data arrengment of data dimensions like:
 *     | ser0_x | ser0_y | ser1_x | ser1_y | ser2_x | ser2_y |
 * "category way": at least one axis is category axis. So the the first data
 *     dimension is always mapped to the first category axis and shared by
 *     all of the series. The other data dimensions are taken by series like
 *     "value way" does.
 *     The result of data arrengment of data dimensions like:
 *     | ser_shared_x | ser0_y | ser1_y | ser2_y |
 *
 * @return encode Never be `null/undefined`.
 */function makeSeriesEncodeForAxisCoordSys(coordDimensions,seriesModel,source){var encode={};var datasetModel=querySeriesUpstreamDatasetModel(seriesModel);// Currently only make default when using dataset, util more reqirements occur.
if(!datasetModel||!coordDimensions){return encode;}var encodeItemName=[];var encodeSeriesName=[];var ecModel=seriesModel.ecModel;var datasetMap=innerGlobalModel(ecModel).datasetMap;var key=datasetModel.uid+'_'+source.seriesLayoutBy;var baseCategoryDimIndex;var categoryWayValueDimStart;coordDimensions=coordDimensions.slice();(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(coordDimensions,function(coordDimInfoLoose,coordDimIdx){var coordDimInfo=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(coordDimInfoLoose)?coordDimInfoLoose:coordDimensions[coordDimIdx]={name:coordDimInfoLoose};if(coordDimInfo.type==='ordinal'&&baseCategoryDimIndex==null){baseCategoryDimIndex=coordDimIdx;categoryWayValueDimStart=getDataDimCountOnCoordDim(coordDimInfo);}encode[coordDimInfo.name]=[];});var datasetRecord=datasetMap.get(key)||datasetMap.set(key,{categoryWayDim:categoryWayValueDimStart,valueWayDim:0});// TODO
// Auto detect first time axis and do arrangement.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(coordDimensions,function(coordDimInfo,coordDimIdx){var coordDimName=coordDimInfo.name;var count=getDataDimCountOnCoordDim(coordDimInfo);// In value way.
if(baseCategoryDimIndex==null){var start=datasetRecord.valueWayDim;pushDim(encode[coordDimName],start,count);pushDim(encodeSeriesName,start,count);datasetRecord.valueWayDim+=count;// ??? TODO give a better default series name rule?
// especially when encode x y specified.
// consider: when mutiple series share one dimension
// category axis, series name should better use
// the other dimsion name. On the other hand, use
// both dimensions name.
}// In category way, the first category axis.
else if(baseCategoryDimIndex===coordDimIdx){pushDim(encode[coordDimName],0,count);pushDim(encodeItemName,0,count);}// In category way, the other axis.
else{var start=datasetRecord.categoryWayDim;pushDim(encode[coordDimName],start,count);pushDim(encodeSeriesName,start,count);datasetRecord.categoryWayDim+=count;}});function pushDim(dimIdxArr,idxFrom,idxCount){for(var i=0;i<idxCount;i++){dimIdxArr.push(idxFrom+i);}}function getDataDimCountOnCoordDim(coordDimInfo){var dimsDef=coordDimInfo.dimsDef;return dimsDef?dimsDef.length:1;}encodeItemName.length&&(encode.itemName=encodeItemName);encodeSeriesName.length&&(encode.seriesName=encodeSeriesName);return encode;}/**
 * Work for data like [{name: ..., value: ...}, ...].
 *
 * @return encode Never be `null/undefined`.
 */function makeSeriesEncodeForNameBased(seriesModel,source,dimCount){var encode={};var datasetModel=querySeriesUpstreamDatasetModel(seriesModel);// Currently only make default when using dataset, util more reqirements occur.
if(!datasetModel){return encode;}var sourceFormat=source.sourceFormat;var dimensionsDefine=source.dimensionsDefine;var potentialNameDimIndex;if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb||sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6)(dimensionsDefine,function(dim,idx){if(((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(dim)?dim.name:dim)==='name'){potentialNameDimIndex=idx;}});}var idxResult=function(){var idxRes0={};var idxRes1={};var guessRecords=[];// 5 is an experience value.
for(var i=0,len=Math.min(5,dimCount);i<len;i++){var guessResult=doGuessOrdinal(source.data,sourceFormat,source.seriesLayoutBy,dimensionsDefine,source.startIndex,i);guessRecords.push(guessResult);var isPureNumber=guessResult===BE_ORDINAL.Not;// [Strategy of idxRes0]: find the first BE_ORDINAL.Not as the value dim,
// and then find a name dim with the priority:
// "BE_ORDINAL.Might|BE_ORDINAL.Must" > "other dim" > "the value dim itself".
if(isPureNumber&&idxRes0.v==null&&i!==potentialNameDimIndex){idxRes0.v=i;}if(idxRes0.n==null||idxRes0.n===idxRes0.v||!isPureNumber&&guessRecords[idxRes0.n]===BE_ORDINAL.Not){idxRes0.n=i;}if(fulfilled(idxRes0)&&guessRecords[idxRes0.n]!==BE_ORDINAL.Not){return idxRes0;}// [Strategy of idxRes1]: if idxRes0 not satisfied (that is, no BE_ORDINAL.Not),
// find the first BE_ORDINAL.Might as the value dim,
// and then find a name dim with the priority:
// "other dim" > "the value dim itself".
// That is for backward compat: number-like (e.g., `'3'`, `'55'`) can be
// treated as number.
if(!isPureNumber){if(guessResult===BE_ORDINAL.Might&&idxRes1.v==null&&i!==potentialNameDimIndex){idxRes1.v=i;}if(idxRes1.n==null||idxRes1.n===idxRes1.v){idxRes1.n=i;}}}function fulfilled(idxResult){return idxResult.v!=null&&idxResult.n!=null;}return fulfilled(idxRes0)?idxRes0:fulfilled(idxRes1)?idxRes1:null;}();if(idxResult){encode.value=[idxResult.v];// `potentialNameDimIndex` has highest priority.
var nameDimIndex=potentialNameDimIndex!=null?potentialNameDimIndex:idxResult.n;// By default, label use itemName in charts.
// So we dont set encodeLabel here.
encode.itemName=[nameDimIndex];encode.seriesName=[nameDimIndex];}return encode;}/**
 * @return If return null/undefined, indicate that should not use datasetModel.
 */function querySeriesUpstreamDatasetModel(seriesModel){// Caution: consider the scenario:
// A dataset is declared and a series is not expected to use the dataset,
// and at the beginning `setOption({series: { noData })` (just prepare other
// option but no data), then `setOption({series: {data: [...]}); In this case,
// the user should set an empty array to avoid that dataset is used by default.
var thisData=seriesModel.get('data',true);if(!thisData){return (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .queryReferringComponents */ .HZ)(seriesModel.ecModel,'dataset',{index:seriesModel.get('datasetIndex',true),id:seriesModel.get('datasetId',true)},_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .SINGLE_REFERRING */ .C6).models[0];}}/**
 * @return Always return an array event empty.
 */function queryDatasetUpstreamDatasetModels(datasetModel){// Only these attributes declared, we by defualt reference to `datasetIndex: 0`.
// Otherwise, no reference.
if(!datasetModel.get('transform',true)&&!datasetModel.get('fromTransformResult',true)){return[];}return (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .queryReferringComponents */ .HZ)(datasetModel.ecModel,'dataset',{index:datasetModel.get('fromDatasetIndex',true),id:datasetModel.get('fromDatasetId',true)},_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .SINGLE_REFERRING */ .C6).models;}/**
 * The rule should not be complex, otherwise user might not
 * be able to known where the data is wrong.
 * The code is ugly, but how to make it neat?
 */function guessOrdinal(source,dimIndex){return doGuessOrdinal(source.data,source.sourceFormat,source.seriesLayoutBy,source.dimensionsDefine,source.startIndex,dimIndex);}// dimIndex may be overflow source data.
// return {BE_ORDINAL}
function doGuessOrdinal(data,sourceFormat,seriesLayoutBy,dimensionsDefine,startIndex,dimIndex){var result;// Experience value.
var maxLoop=5;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedArray */ .fU)(data)){return BE_ORDINAL.Not;}// When sourceType is 'objectRows' or 'keyedColumns', dimensionsDefine
// always exists in source.
var dimName;var dimType;if(dimensionsDefine){var dimDefItem=dimensionsDefine[dimIndex];if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(dimDefItem)){dimName=dimDefItem.name;dimType=dimDefItem.type;}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(dimDefItem)){dimName=dimDefItem;}}if(dimType!=null){return dimType==='ordinal'?BE_ORDINAL.Must:BE_ORDINAL.Not;}if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD){var dataArrayRows=data;if(seriesLayoutBy===_util_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SERIES_LAYOUT_BY_ROW */ .Wc){var sample=dataArrayRows[dimIndex];for(var i=0;i<(sample||[]).length&&i<maxLoop;i++){if((result=detectValue(sample[startIndex+i]))!=null){return result;}}}else{for(var i=0;i<dataArrayRows.length&&i<maxLoop;i++){var row=dataArrayRows[startIndex+i];if(row&&(result=detectValue(row[dimIndex]))!=null){return result;}}}}else if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb){var dataObjectRows=data;if(!dimName){return BE_ORDINAL.Not;}for(var i=0;i<dataObjectRows.length&&i<maxLoop;i++){var item=dataObjectRows[i];if(item&&(result=detectValue(item[dimName]))!=null){return result;}}}else if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SOURCE_FORMAT_KEYED_COLUMNS */ .hL){var dataKeyedColumns=data;if(!dimName){return BE_ORDINAL.Not;}var sample=dataKeyedColumns[dimName];if(!sample||(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedArray */ .fU)(sample)){return BE_ORDINAL.Not;}for(var i=0;i<sample.length&&i<maxLoop;i++){if((result=detectValue(sample[i]))!=null){return result;}}}else if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SOURCE_FORMAT_ORIGINAL */ .cy){var dataOriginal=data;for(var i=0;i<dataOriginal.length&&i<maxLoop;i++){var item=dataOriginal[i];var val=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .getDataItemValue */ .C4)(item);if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(val)){return BE_ORDINAL.Not;}if((result=detectValue(val[dimIndex]))!=null){return result;}}}function detectValue(val){var beStr=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(val);// Consider usage convenience, '1', '2' will be treated as "number".
// `isFinit('')` get `true`.
if(val!=null&&isFinite(val)&&val!==''){return beStr?BE_ORDINAL.Might:BE_ORDINAL.Not;}else if(beStr&&val!=='-'){return BE_ORDINAL.Must;}}return BE_ORDINAL.Not;}

/***/ }),

/***/ 61251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ SourceManager),
/* harmony export */   "t": () => (/* binding */ disableTransformOptionMerge)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _Source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40653);
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74298);
/* harmony import */ var _sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47386);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1337);
/* harmony import */ var _DataStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27720);
/* harmony import */ var _dataProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32946);
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
 * [REQUIREMENT_MEMO]:
 * (0) `metaRawOption` means `dimensions`/`sourceHeader`/`seriesLayoutBy` in raw option.
 * (1) Keep support the feature: `metaRawOption` can be specified both on `series` and
 * `root-dataset`. Them on `series` has higher priority.
 * (2) Do not support to set `metaRawOption` on a `non-root-dataset`, because it might
 * confuse users: whether those props indicate how to visit the upstream source or visit
 * the transform result source, and some transforms has nothing to do with these props,
 * and some transforms might have multiple upstream.
 * (3) Transforms should specify `metaRawOption` in each output, just like they can be
 * declared in `root-dataset`.
 * (4) At present only support visit source in `SERIES_LAYOUT_BY_COLUMN` in transforms.
 * That is for reducing complexity in transfroms.
 * PENDING: Whether to provide transposition transform?
 *
 * [IMPLEMENTAION_MEMO]:
 * "sourceVisitConfig" are calculated from `metaRawOption` and `data`.
 * They will not be calculated until `source` is about to be visited (to prevent from
 * duplicate calcuation). `source` is visited only in series and input to transforms.
 *
 * [DIMENSION_INHERIT_RULE]:
 * By default the dimensions are inherited from ancestors, unless a transform return
 * a new dimensions definition.
 * Consider the case:
 * ```js
 * dataset: [{
 *     source: [ ['Product', 'Sales', 'Prise'], ['Cookies', 321, 44.21], ...]
 * }, {
 *     transform: { type: 'filter', ... }
 * }]
 * dataset: [{
 *     dimension: ['Product', 'Sales', 'Prise'],
 *     source: [ ['Cookies', 321, 44.21], ...]
 * }, {
 *     transform: { type: 'filter', ... }
 * }]
 * ```
 * The two types of option should have the same behavior after transform.
 *
 *
 * [SCENARIO]:
 * (1) Provide source data directly:
 * ```js
 * series: {
 *     encode: {...},
 *     dimensions: [...]
 *     seriesLayoutBy: 'row',
 *     data: [[...]]
 * }
 * ```
 * (2) Series refer to dataset.
 * ```js
 * series: [{
 *     encode: {...}
 *     // Ignore datasetIndex means `datasetIndex: 0`
 *     // and the dimensions defination in dataset is used
 * }, {
 *     encode: {...},
 *     seriesLayoutBy: 'column',
 *     datasetIndex: 1
 * }]
 * ```
 * (3) dataset transform
 * ```js
 * dataset: [{
 *     source: [...]
 * }, {
 *     source: [...]
 * }, {
 *     // By default from 0.
 *     transform: { type: 'filter', config: {...} }
 * }, {
 *     // Piped.
 *     transform: [
 *         { type: 'filter', config: {...} },
 *         { type: 'sort', config: {...} }
 *     ]
 * }, {
 *     id: 'regressionData',
 *     fromDatasetIndex: 1,
 *     // Third-party transform
 *     transform: { type: 'ecStat:regression', config: {...} }
 * }, {
 *     // retrieve the extra result.
 *     id: 'regressionFormula',
 *     fromDatasetId: 'regressionData',
 *     fromTransformResult: 1
 * }]
 * ```
 */var SourceManager=/** @class */function(){function SourceManager(sourceHost){// Cached source. Do not repeat calculating if not dirty.
this._sourceList=[];this._storeList=[];// version sign of each upstream source manager.
this._upstreamSignList=[];this._versionSignBase=0;this._dirty=true;this._sourceHost=sourceHost;}/**
   * Mark dirty.
   */SourceManager.prototype.dirty=function(){this._setLocalSource([],[]);this._storeList=[];this._dirty=true;};SourceManager.prototype._setLocalSource=function(sourceList,upstreamSignList){this._sourceList=sourceList;this._upstreamSignList=upstreamSignList;this._versionSignBase++;if(this._versionSignBase>9e10){this._versionSignBase=0;}};/**
   * For detecting whether the upstream source is dirty, so that
   * the local cached source (in `_sourceList`) should be discarded.
   */SourceManager.prototype._getVersionSign=function(){return this._sourceHost.uid+'_'+this._versionSignBase;};/**
   * Always return a source instance. Otherwise throw error.
   */SourceManager.prototype.prepareSource=function(){// For the case that call `setOption` multiple time but no data changed,
// cache the result source to prevent from repeating transform.
if(this._isDirty()){this._createSource();this._dirty=false;}};SourceManager.prototype._createSource=function(){this._setLocalSource([],[]);var sourceHost=this._sourceHost;var upSourceMgrList=this._getUpstreamSourceManagers();var hasUpstream=!!upSourceMgrList.length;var resultSourceList;var upstreamSignList;if(isSeries(sourceHost)){var seriesModel=sourceHost;var data=void 0;var sourceFormat=void 0;var upSource=void 0;// Has upstream dataset
if(hasUpstream){var upSourceMgr=upSourceMgrList[0];upSourceMgr.prepareSource();upSource=upSourceMgr.getSource();data=upSource.data;sourceFormat=upSource.sourceFormat;upstreamSignList=[upSourceMgr._getVersionSign()];}// Series data is from own.
else{data=seriesModel.get('data',true);sourceFormat=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .fU)(data)?_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_TYPED_ARRAY */ .J5:_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ORIGINAL */ .cy;upstreamSignList=[];}// See [REQUIREMENT_MEMO], merge settings on series and parent dataset if it is root.
var newMetaRawOption=this._getSourceMetaRawOption()||{};var upMetaRawOption=upSource&&upSource.metaRawOption||{};var seriesLayoutBy=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .retrieve2 */ .pD)(newMetaRawOption.seriesLayoutBy,upMetaRawOption.seriesLayoutBy)||null;var sourceHeader=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .retrieve2 */ .pD)(newMetaRawOption.sourceHeader,upMetaRawOption.sourceHeader);// Note here we should not use `upSource.dimensionsDefine`. Consider the case:
// `upSource.dimensionsDefine` is detected by `seriesLayoutBy: 'column'`,
// but series need `seriesLayoutBy: 'row'`.
var dimensions=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .retrieve2 */ .pD)(newMetaRawOption.dimensions,upMetaRawOption.dimensions);// We share source with dataset as much as possible
// to avoid extra memroy cost of high dimensional data.
var needsCreateSource=seriesLayoutBy!==upMetaRawOption.seriesLayoutBy||!!sourceHeader!==!!upMetaRawOption.sourceHeader||dimensions;resultSourceList=needsCreateSource?[(0,_Source_js__WEBPACK_IMPORTED_MODULE_2__/* .createSource */ ._P)(data,{seriesLayoutBy:seriesLayoutBy,sourceHeader:sourceHeader,dimensions:dimensions},sourceFormat)]:[];}else{var datasetModel=sourceHost;// Has upstream dataset.
if(hasUpstream){var result=this._applyTransform(upSourceMgrList);resultSourceList=result.sourceList;upstreamSignList=result.upstreamSignList;}// Is root dataset.
else{var sourceData=datasetModel.get('source',true);resultSourceList=[(0,_Source_js__WEBPACK_IMPORTED_MODULE_2__/* .createSource */ ._P)(sourceData,this._getSourceMetaRawOption(),null)];upstreamSignList=[];}}if(false){}this._setLocalSource(resultSourceList,upstreamSignList);};SourceManager.prototype._applyTransform=function(upMgrList){var datasetModel=this._sourceHost;var transformOption=datasetModel.get('transform',true);var fromTransformResult=datasetModel.get('fromTransformResult',true);if(false){}if(fromTransformResult!=null){var errMsg='';if(upMgrList.length!==1){if(false){}doThrow(errMsg);}}var sourceList;var upSourceList=[];var upstreamSignList=[];(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(upMgrList,function(upMgr){upMgr.prepareSource();var upSource=upMgr.getSource(fromTransformResult||0);var errMsg='';if(fromTransformResult!=null&&!upSource){if(false){}doThrow(errMsg);}upSourceList.push(upSource);upstreamSignList.push(upMgr._getVersionSign());});if(transformOption){sourceList=(0,_transform_js__WEBPACK_IMPORTED_MODULE_3__/* .applyDataTransform */ .vK)(transformOption,upSourceList,{datasetIndex:datasetModel.componentIndex});}else if(fromTransformResult!=null){sourceList=[(0,_Source_js__WEBPACK_IMPORTED_MODULE_2__/* .cloneSourceShallow */ .ML)(upSourceList[0])];}return{sourceList:sourceList,upstreamSignList:upstreamSignList};};SourceManager.prototype._isDirty=function(){if(this._dirty){return true;}// All sourceList is from the some upsteam.
var upSourceMgrList=this._getUpstreamSourceManagers();for(var i=0;i<upSourceMgrList.length;i++){var upSrcMgr=upSourceMgrList[i];if(// Consider the case that there is ancestor diry, call it recursively.
// The performance is probably not an issue because usually the chain is not long.
upSrcMgr._isDirty()||this._upstreamSignList[i]!==upSrcMgr._getVersionSign()){return true;}}};/**
   * @param sourceIndex By defualt 0, means "main source".
   *                    Most cases there is only one source.
   */SourceManager.prototype.getSource=function(sourceIndex){sourceIndex=sourceIndex||0;var source=this._sourceList[sourceIndex];if(!source){// Series may share source instance with dataset.
var upSourceMgrList=this._getUpstreamSourceManagers();return upSourceMgrList[0]&&upSourceMgrList[0].getSource(sourceIndex);}return source;};/**
   *
   * Get a data store which can be shared across series.
   * Only available for series.
   *
   * @param seriesDimRequest Dimensions that are generated in series.
   *        Should have been sorted by `storeDimIndex` asc.
   */SourceManager.prototype.getSharedDataStore=function(seriesDimRequest){if(false){}var schema=seriesDimRequest.makeStoreSchema();return this._innerGetDataStore(schema.dimensions,seriesDimRequest.source,schema.hash);};SourceManager.prototype._innerGetDataStore=function(storeDims,seriesSource,sourceReadKey){// TODO Can use other sourceIndex?
var sourceIndex=0;var storeList=this._storeList;var cachedStoreMap=storeList[sourceIndex];if(!cachedStoreMap){cachedStoreMap=storeList[sourceIndex]={};}var cachedStore=cachedStoreMap[sourceReadKey];if(!cachedStore){var upSourceMgr=this._getUpstreamSourceManagers()[0];if(isSeries(this._sourceHost)&&upSourceMgr){cachedStore=upSourceMgr._innerGetDataStore(storeDims,seriesSource,sourceReadKey);}else{cachedStore=new _DataStore_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP();// Always create store from source of series.
cachedStore.initData(new _dataProvider_js__WEBPACK_IMPORTED_MODULE_5__/* .DefaultDataProvider */ .Pl(seriesSource,storeDims.length),storeDims);}cachedStoreMap[sourceReadKey]=cachedStore;}return cachedStore;};/**
   * PEDING: Is it fast enough?
   * If no upstream, return empty array.
   */SourceManager.prototype._getUpstreamSourceManagers=function(){// Always get the relationship from the raw option.
// Do not cache the link of the dependency graph, so that
// no need to update them when change happen.
var sourceHost=this._sourceHost;if(isSeries(sourceHost)){var datasetModel=(0,_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .querySeriesUpstreamDatasetModel */ .Wd)(sourceHost);return!datasetModel?[]:[datasetModel.getSourceManager()];}else{return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)((0,_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .queryDatasetUpstreamDatasetModels */ .JT)(sourceHost),function(datasetModel){return datasetModel.getSourceManager();});}};SourceManager.prototype._getSourceMetaRawOption=function(){var sourceHost=this._sourceHost;var seriesLayoutBy;var sourceHeader;var dimensions;if(isSeries(sourceHost)){seriesLayoutBy=sourceHost.get('seriesLayoutBy',true);sourceHeader=sourceHost.get('sourceHeader',true);dimensions=sourceHost.get('dimensions',true);}// See [REQUIREMENT_MEMO], `non-root-dataset` do not support them.
else if(!this._getUpstreamSourceManagers().length){var model=sourceHost;seriesLayoutBy=model.get('seriesLayoutBy',true);sourceHeader=model.get('sourceHeader',true);dimensions=model.get('dimensions',true);}return{seriesLayoutBy:seriesLayoutBy,sourceHeader:sourceHeader,dimensions:dimensions};};return SourceManager;}();// Call this method after `super.init` and `super.mergeOption` to
// disable the transform merge, but do not disable transfrom clone from rawOption.
function disableTransformOptionMerge(datasetModel){var transformOption=datasetModel.option.transform;transformOption&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .setAsPrimitive */ .s7)(datasetModel.option.transform);}function isSeries(sourceHost){// Avoid circular dependency with Series.ts
return sourceHost.mainType==='series';}function doThrow(errMsg){throw new Error(errMsg);}

/***/ }),

/***/ 1337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DA": () => (/* binding */ registerExternalTransform),
/* harmony export */   "vK": () => (/* binding */ applyDataTransform)
/* harmony export */ });
/* unused harmony export ExternalSource */
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74298);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23958);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57697);
/* harmony import */ var _dataProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32946);
/* harmony import */ var _dataValueHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85168);
/* harmony import */ var _util_log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42023);
/* harmony import */ var _Source_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40653);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*
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
 * TODO: disable writable.
 * This structure will be exposed to users.
 */var ExternalSource=/** @class */function(){function ExternalSource(){}ExternalSource.prototype.getRawData=function(){// Only built-in transform available.
throw new Error('not supported');};ExternalSource.prototype.getRawDataItem=function(dataIndex){// Only built-in transform available.
throw new Error('not supported');};ExternalSource.prototype.cloneRawData=function(){return;};/**
   * @return If dimension not found, return null/undefined.
   */ExternalSource.prototype.getDimensionInfo=function(dim){return;};/**
   * dimensions defined if and only if either:
   * (a) dataset.dimensions are declared.
   * (b) dataset data include dimensions definitions in data (detected or via specified `sourceHeader`).
   * If dimensions are defined, `dimensionInfoAll` is corresponding to
   * the defined dimensions.
   * Otherwise, `dimensionInfoAll` is determined by data columns.
   * @return Always return an array (even empty array).
   */ExternalSource.prototype.cloneAllDimensionInfo=function(){return;};ExternalSource.prototype.count=function(){return;};/**
   * Only support by dimension index.
   * No need to support by dimension name in transform function,
   * becuase transform function is not case-specific, no need to use name literally.
   */ExternalSource.prototype.retrieveValue=function(dataIndex,dimIndex){return;};ExternalSource.prototype.retrieveValueFromItem=function(dataItem,dimIndex){return;};ExternalSource.prototype.convertValue=function(rawVal,dimInfo){return (0,_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .parseDataValue */ .yQ)(rawVal,dimInfo);};return ExternalSource;}();function createExternalSource(internalSource,externalTransform){var extSource=new ExternalSource();var data=internalSource.data;var sourceFormat=extSource.sourceFormat=internalSource.sourceFormat;var sourceHeaderCount=internalSource.startIndex;var errMsg='';if(internalSource.seriesLayoutBy!==_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_COLUMN */ .fY){// For the logic simplicity in transformer, only 'culumn' is
// supported in data transform. Otherwise, the `dimensionsDefine`
// might be detected by 'row', which probably confuses users.
if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}// [MEMO]
// Create a new dimensions structure for exposing.
// Do not expose all dimension info to users directly.
// Becuase the dimension is probably auto detected from data and not might reliable.
// Should not lead the transformers to think that is relialbe and return it.
// See [DIMENSION_INHERIT_RULE] in `sourceManager.ts`.
var dimensions=[];var dimsByName={};var dimsDef=internalSource.dimensionsDefine;if(dimsDef){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .each */ .S6)(dimsDef,function(dimDef,idx){var name=dimDef.name;var dimDefExt={index:idx,name:name,displayName:dimDef.displayName};dimensions.push(dimDefExt);// Users probably not sepcify dimension name. For simplicity, data transform
// do not generate dimension name.
if(name!=null){// Dimension name should not be duplicated.
// For simplicity, data transform forbid name duplication, do not generate
// new name like module `completeDimensions.ts` did, but just tell users.
var errMsg_1='';if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .hasOwn */ .RI)(dimsByName,name)){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg_1);}dimsByName[name]=dimDefExt;}});}// If dimension definitions are not defined and can not be detected.
// e.g., pure data `[[11, 22], ...]`.
else{for(var i=0;i<internalSource.dimensionsDetectedCount||0;i++){// Do not generete name or anything others. The consequence process in
// `transform` or `series` probably have there own name generation strategry.
dimensions.push({index:i});}}// Implement public methods:
var rawItemGetter=(0,_dataProvider_js__WEBPACK_IMPORTED_MODULE_4__/* .getRawSourceItemGetter */ ._j)(sourceFormat,_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_COLUMN */ .fY);if(externalTransform.__isBuiltIn){extSource.getRawDataItem=function(dataIndex){return rawItemGetter(data,sourceHeaderCount,dimensions,dataIndex);};extSource.getRawData=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .bind */ .ak)(getRawData,null,internalSource);}extSource.cloneRawData=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .bind */ .ak)(cloneRawData,null,internalSource);var rawCounter=(0,_dataProvider_js__WEBPACK_IMPORTED_MODULE_4__/* .getRawSourceDataCounter */ .a)(sourceFormat,_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_COLUMN */ .fY);extSource.count=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .bind */ .ak)(rawCounter,null,data,sourceHeaderCount,dimensions);var rawValueGetter=(0,_dataProvider_js__WEBPACK_IMPORTED_MODULE_4__/* .getRawSourceValueGetter */ .tB)(sourceFormat);extSource.retrieveValue=function(dataIndex,dimIndex){var rawItem=rawItemGetter(data,sourceHeaderCount,dimensions,dataIndex);return retrieveValueFromItem(rawItem,dimIndex);};var retrieveValueFromItem=extSource.retrieveValueFromItem=function(dataItem,dimIndex){if(dataItem==null){return;}var dimDef=dimensions[dimIndex];// When `dimIndex` is `null`, `rawValueGetter` return the whole item.
if(dimDef){return rawValueGetter(dataItem,dimIndex,dimDef.name);}};extSource.getDimensionInfo=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .bind */ .ak)(getDimensionInfo,null,dimensions,dimsByName);extSource.cloneAllDimensionInfo=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .bind */ .ak)(cloneAllDimensionInfo,null,dimensions);return extSource;}function getRawData(upstream){var sourceFormat=upstream.sourceFormat;if(!isSupportedSourceFormat(sourceFormat)){var errMsg='';if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}return upstream.data;}function cloneRawData(upstream){var sourceFormat=upstream.sourceFormat;var data=upstream.data;if(!isSupportedSourceFormat(sourceFormat)){var errMsg='';if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD){var result=[];for(var i=0,len=data.length;i<len;i++){// Not strictly clone for performance
result.push(data[i].slice());}return result;}else if(sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb){var result=[];for(var i=0,len=data.length;i<len;i++){// Not strictly clone for performance
result.push((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .extend */ .l7)({},data[i]));}return result;}}function getDimensionInfo(dimensions,dimsByName,dim){if(dim==null){return;}// Keep the same logic as `List::getDimension` did.
if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .isNumber */ .hj)(dim)// If being a number-like string but not being defined a dimension name.
||!isNaN(dim)&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .hasOwn */ .RI)(dimsByName,dim)){return dimensions[dim];}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .hasOwn */ .RI)(dimsByName,dim)){return dimsByName[dim];}}function cloneAllDimensionInfo(dimensions){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .d9)(dimensions);}var externalTransformMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .createHashMap */ .kW)();function registerExternalTransform(externalTransform){externalTransform=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .d9)(externalTransform);var type=externalTransform.type;var errMsg='';if(!type){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}var typeParsed=type.split(':');if(typeParsed.length!==2){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}// Namespace 'echarts:xxx' is official namespace, where the transforms should
// be called directly via 'xxx' rather than 'echarts:xxx'.
var isBuiltIn=false;if(typeParsed[0]==='echarts'){type=typeParsed[1];isBuiltIn=true;}externalTransform.__isBuiltIn=isBuiltIn;externalTransformMap.set(type,externalTransform);}function applyDataTransform(rawTransOption,sourceList,infoForPrint){var pipedTransOption=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_5__/* .normalizeToArray */ .kF)(rawTransOption);var pipeLen=pipedTransOption.length;var errMsg='';if(!pipeLen){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}for(var i=0,len=pipeLen;i<len;i++){var transOption=pipedTransOption[i];sourceList=applySingleDataTransform(transOption,sourceList,infoForPrint,pipeLen===1?null:i);// piped transform only support single input, except the fist one.
// piped transform only support single output, except the last one.
if(i!==len-1){sourceList.length=Math.max(sourceList.length,1);}}return sourceList;}function applySingleDataTransform(transOption,upSourceList,infoForPrint,// If `pipeIndex` is null/undefined, no piped transform.
pipeIndex){var errMsg='';if(!upSourceList.length){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Kn)(transOption)){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}var transType=transOption.type;var externalTransform=externalTransformMap.get(transType);if(!externalTransform){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}// Prepare source
var extUpSourceList=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .map */ .UI)(upSourceList,function(upSource){return createExternalSource(upSource,externalTransform);});var resultList=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_5__/* .normalizeToArray */ .kF)(externalTransform.transform({upstream:extUpSourceList[0],upstreamList:extUpSourceList,config:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .d9)(transOption.config)}));if(false){ var printStrArr; }return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .map */ .UI)(resultList,function(result,resultIndex){var errMsg='';if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Kn)(result)){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}if(!result.data){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}var sourceFormat=(0,_Source_js__WEBPACK_IMPORTED_MODULE_6__/* .detectSourceFormat */ .Kp)(result.data);if(!isSupportedSourceFormat(sourceFormat)){if(false){}(0,_util_log_js__WEBPACK_IMPORTED_MODULE_2__/* .throwError */ ._y)(errMsg);}var resultMetaRawOption;var firstUpSource=upSourceList[0];/**
     * Intuitively, the end users known the content of the original `dataset.source`,
     * calucating the transform result in mind.
     * Suppose the original `dataset.source` is:
     * ```js
     * [
     *     ['product', '2012', '2013', '2014', '2015'],
     *     ['AAA', 41.1, 30.4, 65.1, 53.3],
     *     ['BBB', 86.5, 92.1, 85.7, 83.1],
     *     ['CCC', 24.1, 67.2, 79.5, 86.4]
     * ]
     * ```
     * The dimension info have to be detected from the source data.
     * Some of the transformers (like filter, sort) will follow the dimension info
     * of upstream, while others use new dimensions (like aggregate).
     * Transformer can output a field `dimensions` to define the its own output dimensions.
     * We also allow transformers to ignore the output `dimensions` field, and
     * inherit the upstream dimensions definition. It can reduce the burden of handling
     * dimensions in transformers.
     *
     * See also [DIMENSION_INHERIT_RULE] in `sourceManager.ts`.
     */if(firstUpSource&&resultIndex===0// If transformer returns `dimensions`, it means that the transformer has different
// dimensions definitions. We do not inherit anything from upstream.
&&!result.dimensions){var startIndex=firstUpSource.startIndex;// We copy the header of upstream to the result becuase:
// (1) The returned data always does not contain header line and can not be used
// as dimension-detection. In this case we can not use "detected dimensions" of
// upstream directly, because it might be detected based on different `seriesLayoutBy`.
// (2) We should support that the series read the upstream source in `seriesLayoutBy: 'row'`.
// So the original detected header should be add to the result, otherwise they can not be read.
if(startIndex){result.data=firstUpSource.data.slice(0,startIndex).concat(result.data);}resultMetaRawOption={seriesLayoutBy:_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_COLUMN */ .fY,sourceHeader:startIndex,dimensions:firstUpSource.metaRawOption.dimensions};}else{resultMetaRawOption={seriesLayoutBy:_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SERIES_LAYOUT_BY_COLUMN */ .fY,sourceHeader:0,dimensions:result.dimensions};}return (0,_Source_js__WEBPACK_IMPORTED_MODULE_6__/* .createSource */ ._P)(result.data,resultMetaRawOption,null);});}function isSupportedSourceFormat(sourceFormat){return sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_ARRAY_ROWS */ .XD||sourceFormat===_util_types_js__WEBPACK_IMPORTED_MODULE_1__/* .SOURCE_FORMAT_OBJECT_ROWS */ .qb;}

/***/ })

}]);