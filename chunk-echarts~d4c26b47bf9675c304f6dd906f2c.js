"use strict";
(self["webpackChunkicode_run"] = self["webpackChunkicode_run"] || []).push([["chunk-echarts~d4c26b47"],{

/***/ 44133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* reexport */ graphic_namespaceObject),
  "S1": () => (/* reexport */ echarts/* init */.S1),
  "je": () => (/* reexport */ echarts/* registerMap */.je)
});

// UNUSED EXPORTS: Axis, ChartView, ComponentModel, ComponentView, List, Model, PRIORITY, SeriesModel, color, connect, dataTool, default, dependencies, disConnect, disconnect, dispose, env, extendChartView, extendComponentModel, extendComponentView, extendSeriesModel, format, getCoordinateSystemDimensions, getInstanceByDom, getInstanceById, getMap, helper, innerDrawElementOnCanvas, matrix, number, parseGeoJSON, parseGeoJson, registerAction, registerCoordinateSystem, registerLayout, registerLoading, registerLocale, registerPostInit, registerPostUpdate, registerPreprocessor, registerProcessor, registerTheme, registerTransform, registerUpdateLifecycle, registerVisual, setCanvasCreator, setPlatformAPI, throttle, time, use, util, vector, version, zrUtil, zrender

// NAMESPACE OBJECT: ../my-cli/node_modules/echarts/lib/export/api/graphic.js
var graphic_namespaceObject = {};
__webpack_require__.r(graphic_namespaceObject);
__webpack_require__.d(graphic_namespaceObject, {
  "o": () => (LinearGradient/* default */.Z)
});

// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/core/echarts.js + 3 modules
var echarts = __webpack_require__(69774);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/LinearGradient.js
var LinearGradient = __webpack_require__(45074);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/export/api/graphic.js
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
*/
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/export/api.js
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
*/ // These APIs are for more advanced usages
// For example extend charts and components, creating graphic elements, formatting.
//////////////// Helper Methods /////////////////////
//////////////// Export for Exension Usage ////////////////
// export {SeriesData};
// TODO: Compatitable with exists echarts-gl code
// Only for GL
//////////////// Deprecated Extension Methods ////////////////
// Should use `ComponentModel.extend` or `class XXXX extend ComponentModel` to create class.
// Then use `registerComponentModel` in `install` parameter when `use` this extension. For example:
// class Bar3DModel extends ComponentModel {}
// export function install(registers) { regsiters.registerComponentModel(Bar3DModel); }
// echarts.use(install);
function extendComponentModel(proto){var Model=ComponentModel.extend(proto);ComponentModel.registerClass(Model);return Model;}function extendComponentView(proto){var View=ComponentView.extend(proto);ComponentView.registerClass(View);return View;}function extendSeriesModel(proto){var Model=SeriesModel.extend(proto);SeriesModel.registerClass(Model);return Model;}function extendChartView(proto){var View=ChartView.extend(proto);ChartView.registerClass(View);return View;}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(37107);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(54865);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/animation/basicTrasition.js
var basicTrasition = __webpack_require__(21438);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(5661);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(84646);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(81319);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelGuideHelper.js
var labelGuideHelper = __webpack_require__(80998);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelLayoutHelper.js
var labelLayoutHelper = __webpack_require__(94424);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/label/LabelManager.js
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
*/ // TODO: move labels out of viewport.
function cloneArr(points){if(points){var newPoints=[];for(var i=0;i<points.length;i++){newPoints.push(points[i].slice());}return newPoints;}}function prepareLayoutCallbackParams(labelItem,hostEl){var label=labelItem.label;var labelLine=hostEl&&hostEl.getTextGuideLine();return{dataIndex:labelItem.dataIndex,dataType:labelItem.dataType,seriesIndex:labelItem.seriesModel.seriesIndex,text:labelItem.label.style.text,rect:labelItem.hostRect,labelRect:labelItem.rect,// x: labelAttr.x,
// y: labelAttr.y,
align:label.style.align,verticalAlign:label.style.verticalAlign,labelLinePoints:cloneArr(labelLine&&labelLine.shape.points)};}var LABEL_OPTION_TO_STYLE_KEYS=['align','verticalAlign','width','height','fontSize'];var dummyTransformable=new Transformable/* default */.ZP();var labelLayoutInnerStore=(0,model/* makeInner */.Yf)();var labelLineAnimationStore=(0,model/* makeInner */.Yf)();function extendWithKeys(target,source,keys){for(var i=0;i<keys.length;i++){var key=keys[i];if(source[key]!=null){target[key]=source[key];}}}var LABEL_LAYOUT_PROPS=['x','y','rotation'];var LabelManager=/** @class */function(){function LabelManager(){this._labelList=[];this._chartViewList=[];}LabelManager.prototype.clearLabels=function(){this._labelList=[];this._chartViewList=[];};/**
   * Add label to manager
   */LabelManager.prototype._addLabel=function(dataIndex,dataType,seriesModel,label,layoutOption){var labelStyle=label.style;var hostEl=label.__hostTarget;var textConfig=hostEl.textConfig||{};// TODO: If label is in other state.
var labelTransform=label.getComputedTransform();var labelRect=label.getBoundingRect().plain();BoundingRect/* default.applyTransform */.Z.applyTransform(labelRect,labelRect,labelTransform);if(labelTransform){dummyTransformable.setLocalTransform(labelTransform);}else{// Identity transform.
dummyTransformable.x=dummyTransformable.y=dummyTransformable.rotation=dummyTransformable.originX=dummyTransformable.originY=0;dummyTransformable.scaleX=dummyTransformable.scaleY=1;}var host=label.__hostTarget;var hostRect;if(host){hostRect=host.getBoundingRect().plain();var transform=host.getComputedTransform();BoundingRect/* default.applyTransform */.Z.applyTransform(hostRect,hostRect,transform);}var labelGuide=hostRect&&host.getTextGuideLine();this._labelList.push({label:label,labelLine:labelGuide,seriesModel:seriesModel,dataIndex:dataIndex,dataType:dataType,layoutOption:layoutOption,computedLayoutOption:null,rect:labelRect,hostRect:hostRect,// Label with lower priority will be hidden when overlapped
// Use rect size as default priority
priority:hostRect?hostRect.width*hostRect.height:0,// Save default label attributes.
// For restore if developers want get back to default value in callback.
defaultAttr:{ignore:label.ignore,labelGuideIgnore:labelGuide&&labelGuide.ignore,x:dummyTransformable.x,y:dummyTransformable.y,scaleX:dummyTransformable.scaleX,scaleY:dummyTransformable.scaleY,rotation:dummyTransformable.rotation,style:{x:labelStyle.x,y:labelStyle.y,align:labelStyle.align,verticalAlign:labelStyle.verticalAlign,width:labelStyle.width,height:labelStyle.height,fontSize:labelStyle.fontSize},cursor:label.cursor,attachedPos:textConfig.position,attachedRot:textConfig.rotation}});};LabelManager.prototype.addLabelsOfSeries=function(chartView){var _this=this;this._chartViewList.push(chartView);var seriesModel=chartView.__model;var layoutOption=seriesModel.get('labelLayout');/**
     * Ignore layouting if it's not specified anything.
     */if(!((0,util/* isFunction */.mf)(layoutOption)||(0,util/* keys */.XP)(layoutOption).length)){return;}chartView.group.traverse(function(child){if(child.ignore){return true;// Stop traverse descendants.
}// Only support label being hosted on graphic elements.
var textEl=child.getTextContent();var ecData=(0,innerStore/* getECData */.A)(child);// Can only attach the text on the element with dataIndex
if(textEl&&!textEl.disableLabelLayout){_this._addLabel(ecData.dataIndex,ecData.dataType,seriesModel,textEl,layoutOption);}});};LabelManager.prototype.updateLayoutConfig=function(api){var width=api.getWidth();var height=api.getHeight();function createDragHandler(el,labelLineModel){return function(){(0,labelGuideHelper/* updateLabelLinePoints */.d)(el,labelLineModel);};}for(var i=0;i<this._labelList.length;i++){var labelItem=this._labelList[i];var label=labelItem.label;var hostEl=label.__hostTarget;var defaultLabelAttr=labelItem.defaultAttr;var layoutOption=void 0;// TODO A global layout option?
if((0,util/* isFunction */.mf)(labelItem.layoutOption)){layoutOption=labelItem.layoutOption(prepareLayoutCallbackParams(labelItem,hostEl));}else{layoutOption=labelItem.layoutOption;}layoutOption=layoutOption||{};labelItem.computedLayoutOption=layoutOption;var degreeToRadian=Math.PI/180;// TODO hostEl should always exists.
// Or label should not have parent because the x, y is all in global space.
if(hostEl){hostEl.setTextConfig({// Force to set local false.
local:false,// Ignore position and rotation config on the host el if x or y is changed.
position:layoutOption.x!=null||layoutOption.y!=null?null:defaultLabelAttr.attachedPos,// Ignore rotation config on the host el if rotation is changed.
rotation:layoutOption.rotate!=null?layoutOption.rotate*degreeToRadian:defaultLabelAttr.attachedRot,offset:[layoutOption.dx||0,layoutOption.dy||0]});}var needsUpdateLabelLine=false;if(layoutOption.x!=null){// TODO width of chart view.
label.x=(0,number/* parsePercent */.GM)(layoutOption.x,width);label.setStyle('x',0);// Ignore movement in style. TODO: origin.
needsUpdateLabelLine=true;}else{label.x=defaultLabelAttr.x;label.setStyle('x',defaultLabelAttr.style.x);}if(layoutOption.y!=null){// TODO height of chart view.
label.y=(0,number/* parsePercent */.GM)(layoutOption.y,height);label.setStyle('y',0);// Ignore movement in style.
needsUpdateLabelLine=true;}else{label.y=defaultLabelAttr.y;label.setStyle('y',defaultLabelAttr.style.y);}if(layoutOption.labelLinePoints){var guideLine=hostEl.getTextGuideLine();if(guideLine){guideLine.setShape({points:layoutOption.labelLinePoints});// Not update
needsUpdateLabelLine=false;}}var labelLayoutStore=labelLayoutInnerStore(label);labelLayoutStore.needsUpdateLabelLine=needsUpdateLabelLine;label.rotation=layoutOption.rotate!=null?layoutOption.rotate*degreeToRadian:defaultLabelAttr.rotation;label.scaleX=defaultLabelAttr.scaleX;label.scaleY=defaultLabelAttr.scaleY;for(var k=0;k<LABEL_OPTION_TO_STYLE_KEYS.length;k++){var key=LABEL_OPTION_TO_STYLE_KEYS[k];label.setStyle(key,layoutOption[key]!=null?layoutOption[key]:defaultLabelAttr.style[key]);}if(layoutOption.draggable){label.draggable=true;label.cursor='move';if(hostEl){var hostModel=labelItem.seriesModel;if(labelItem.dataIndex!=null){var data=labelItem.seriesModel.getData(labelItem.dataType);hostModel=data.getItemModel(labelItem.dataIndex);}label.on('drag',createDragHandler(hostEl,hostModel.getModel('labelLine')));}}else{// TODO Other drag functions?
label.off('drag');label.cursor=defaultLabelAttr.cursor;}}};LabelManager.prototype.layout=function(api){var width=api.getWidth();var height=api.getHeight();var labelList=(0,labelLayoutHelper/* prepareLayoutList */.VT)(this._labelList);var labelsNeedsAdjustOnX=(0,util/* filter */.hX)(labelList,function(item){return item.layoutOption.moveOverlap==='shiftX';});var labelsNeedsAdjustOnY=(0,util/* filter */.hX)(labelList,function(item){return item.layoutOption.moveOverlap==='shiftY';});(0,labelLayoutHelper/* shiftLayoutOnX */.WE)(labelsNeedsAdjustOnX,0,width);(0,labelLayoutHelper/* shiftLayoutOnY */.GI)(labelsNeedsAdjustOnY,0,height);var labelsNeedsHideOverlap=(0,util/* filter */.hX)(labelList,function(item){return item.layoutOption.hideOverlap;});(0,labelLayoutHelper/* hideOverlap */.yl)(labelsNeedsHideOverlap);};/**
   * Process all labels. Not only labels with layoutOption.
   */LabelManager.prototype.processLabelsOverall=function(){var _this=this;(0,util/* each */.S6)(this._chartViewList,function(chartView){var seriesModel=chartView.__model;var ignoreLabelLineUpdate=chartView.ignoreLabelLineUpdate;var animationEnabled=seriesModel.isAnimationEnabled();chartView.group.traverse(function(child){if(child.ignore&&!child.forceLabelAnimation){return true;// Stop traverse descendants.
}var needsUpdateLabelLine=!ignoreLabelLineUpdate;var label=child.getTextContent();if(!needsUpdateLabelLine&&label){needsUpdateLabelLine=labelLayoutInnerStore(label).needsUpdateLabelLine;}if(needsUpdateLabelLine){_this._updateLabelLine(child,seriesModel);}if(animationEnabled){_this._animateLabels(child,seriesModel);}});});};LabelManager.prototype._updateLabelLine=function(el,seriesModel){// Only support label being hosted on graphic elements.
var textEl=el.getTextContent();// Update label line style.
var ecData=(0,innerStore/* getECData */.A)(el);var dataIndex=ecData.dataIndex;// Only support labelLine on the labels represent data.
if(textEl&&dataIndex!=null){var data=seriesModel.getData(ecData.dataType);var itemModel=data.getItemModel(dataIndex);var defaultStyle={};var visualStyle=data.getItemVisual(dataIndex,'style');var visualType=data.getVisual('drawType');// Default to be same with main color
defaultStyle.stroke=visualStyle[visualType];var labelLineModel=itemModel.getModel('labelLine');(0,labelGuideHelper/* setLabelLineStyle */.Iu)(el,(0,labelGuideHelper/* getLabelLineStatesModels */.$x)(itemModel),defaultStyle);(0,labelGuideHelper/* updateLabelLinePoints */.d)(el,labelLineModel);}};LabelManager.prototype._animateLabels=function(el,seriesModel){var textEl=el.getTextContent();var guideLine=el.getTextGuideLine();// Animate
if(textEl// `forceLabelAnimation` has the highest priority
&&(el.forceLabelAnimation||!textEl.ignore&&!textEl.invisible&&!el.disableLabelAnimation&&!(0,basicTrasition/* isElementRemoved */.eq)(el))){var layoutStore=labelLayoutInnerStore(textEl);var oldLayout=layoutStore.oldLayout;var ecData=(0,innerStore/* getECData */.A)(el);var dataIndex=ecData.dataIndex;var newProps={x:textEl.x,y:textEl.y,rotation:textEl.rotation};var data=seriesModel.getData(ecData.dataType);if(!oldLayout){textEl.attr(newProps);// Disable fade in animation if value animation is enabled.
if(!(0,labelStyle/* labelInner */.qA)(textEl).valueAnimation){var oldOpacity=(0,util/* retrieve2 */.pD)(textEl.style.opacity,1);// Fade in animation
textEl.style.opacity=0;(0,basicTrasition/* initProps */.KZ)(textEl,{style:{opacity:oldOpacity}},seriesModel,dataIndex);}}else{textEl.attr(oldLayout);// Make sure the animation from is in the right status.
var prevStates=el.prevStates;if(prevStates){if((0,util/* indexOf */.cq)(prevStates,'select')>=0){textEl.attr(layoutStore.oldLayoutSelect);}if((0,util/* indexOf */.cq)(prevStates,'emphasis')>=0){textEl.attr(layoutStore.oldLayoutEmphasis);}}(0,basicTrasition/* updateProps */.D)(textEl,newProps,seriesModel,dataIndex);}layoutStore.oldLayout=newProps;if(textEl.states.select){var layoutSelect=layoutStore.oldLayoutSelect={};extendWithKeys(layoutSelect,newProps,LABEL_LAYOUT_PROPS);extendWithKeys(layoutSelect,textEl.states.select,LABEL_LAYOUT_PROPS);}if(textEl.states.emphasis){var layoutEmphasis=layoutStore.oldLayoutEmphasis={};extendWithKeys(layoutEmphasis,newProps,LABEL_LAYOUT_PROPS);extendWithKeys(layoutEmphasis,textEl.states.emphasis,LABEL_LAYOUT_PROPS);}(0,labelStyle/* animateLabelValue */.tD)(textEl,dataIndex,data,seriesModel,seriesModel);}if(guideLine&&!guideLine.ignore&&!guideLine.invisible){var layoutStore=labelLineAnimationStore(guideLine);var oldLayout=layoutStore.oldLayout;var newLayout={points:guideLine.shape.points};if(!oldLayout){guideLine.setShape(newLayout);guideLine.style.strokePercent=0;(0,basicTrasition/* initProps */.KZ)(guideLine,{style:{strokePercent:1}},seriesModel);}else{guideLine.attr({shape:oldLayout});(0,basicTrasition/* updateProps */.D)(guideLine,{shape:newLayout},seriesModel);}layoutStore.oldLayout=newLayout;}};return LabelManager;}();/* harmony default export */ const label_LabelManager = (LabelManager);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/label/installLabelLayout.js
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
*/var getLabelManager=(0,model/* makeInner */.Yf)();function installLabelLayout(registers){registers.registerUpdateLifecycle('series:beforeupdate',function(ecModel,api,params){// TODO api provide an namespace that can save stuff per instance
var labelManager=getLabelManager(api).labelManager;if(!labelManager){labelManager=getLabelManager(api).labelManager=new label_LabelManager();}labelManager.clearLabels();});registers.registerUpdateLifecycle('series:layoutlabels',function(ecModel,api,params){var labelManager=getLabelManager(api).labelManager;params.updatedSeries.forEach(function(series){labelManager.addLabelsOfSeries(api.getViewOfSeriesModel(series));});labelManager.updateLayoutConfig(api);labelManager.layout(api);labelManager.processLabelsOverall();});}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/export/core.js
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
*/ // Core API from echarts/src/echarts
// Import label layout by default.
// TODO will be treeshaked.
(0,extension/* use */.D)(installLabelLayout);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/canvas/Painter.js + 1 modules
var Painter = __webpack_require__(59275);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/renderer/installCanvasRenderer.js
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
*/function install(registers){registers.registerPainter('canvas',Painter/* default */.Z);}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/component/dataset/install.js
var dataset_install = __webpack_require__(56345);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/echarts.js
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
*/// Default to have canvas renderer and dataset for compitatble reason.
(0,extension/* use */.D)([install,dataset_install/* install */.N]);// TODO: Compatitable with the following code
// import echarts from 'echarts/lib/echarts.js'
/* harmony default export */ const lib_echarts = ({init:function init(){if(false){}// @ts-ignore
return echarts/* init.apply */.S1.apply(null,arguments);}});// Import label layout by default.
// TODO remove
(0,extension/* use */.D)(installLabelLayout);

/***/ }),

/***/ 37107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ use)
/* harmony export */ });
/* harmony import */ var _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69774);
/* harmony import */ var _view_Component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74874);
/* harmony import */ var _view_Chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99949);
/* harmony import */ var _model_Component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15022);
/* harmony import */ var _model_Series_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49261);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57697);
/* harmony import */ var _core_impl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38998);
/* harmony import */ var zrender_lib_zrender_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30838);
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
*/var extensions=[];var extensionRegisters={registerPreprocessor:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerPreprocessor */ .ds,registerProcessor:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerProcessor */ .Pu,registerPostInit:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerPostInit */ .sq,registerPostUpdate:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerPostUpdate */ .Br,registerUpdateLifecycle:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerUpdateLifecycle */ .YK,registerAction:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerAction */ .zl,registerCoordinateSystem:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerCoordinateSystem */ .RS,registerLayout:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLayout */ .qR,registerVisual:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerVisual */ .Og,registerTransform:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerTransform */ .OB,registerLoading:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLoading */ .yn,registerMap:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .registerMap */ .je,registerImpl:_core_impl_js__WEBPACK_IMPORTED_MODULE_1__/* .registerImpl */ .M,PRIORITY:_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__/* .PRIORITY */ .Hr,ComponentModel:_model_Component_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,ComponentView:_view_Component_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,SeriesModel:_model_Series_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,ChartView:_view_Chart_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,// TODO Use ComponentModel and SeriesModel instead of Constructor
registerComponentModel:function registerComponentModel(ComponentModelClass){_model_Component_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].registerClass */ .Z.registerClass(ComponentModelClass);},registerComponentView:function registerComponentView(ComponentViewClass){_view_Component_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].registerClass */ .Z.registerClass(ComponentViewClass);},registerSeriesModel:function registerSeriesModel(SeriesModelClass){_model_Series_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].registerClass */ .Z.registerClass(SeriesModelClass);},registerChartView:function registerChartView(ChartViewClass){_view_Chart_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].registerClass */ .Z.registerClass(ChartViewClass);},registerSubTypeDefaulter:function registerSubTypeDefaulter(componentType,defaulter){_model_Component_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].registerSubTypeDefaulter */ .Z.registerSubTypeDefaulter(componentType,defaulter);},registerPainter:function registerPainter(painterType,PainterCtor){(0,zrender_lib_zrender_js__WEBPACK_IMPORTED_MODULE_6__/* .registerPainter */ .wm)(painterType,PainterCtor);}};function use(ext){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__/* .isArray */ .kJ)(ext)){// use([ChartLine, ChartBar]);
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__/* .each */ .S6)(ext,function(singleExt){use(singleExt);});return;}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__/* .indexOf */ .cq)(extensions,ext)>=0){return;}extensions.push(ext);if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__/* .isFunction */ .mf)(ext)){ext={install:ext};}ext.install(extensionRegisters);}

/***/ }),

/***/ 66759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
*/ /**
 * Language: English.
 *//* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({time:{month:['January','February','March','April','May','June','July','August','September','October','November','December'],monthAbbr:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],dayOfWeek:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayOfWeekAbbr:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']},legend:{selector:{all:'All',inverse:'Inv'}},toolbox:{brush:{title:{rect:'Box Select',polygon:'Lasso Select',lineX:'Horizontally Select',lineY:'Vertically Select',keep:'Keep Selections',clear:'Clear Selections'}},dataView:{title:'Data View',lang:['Data View','Close','Refresh']},dataZoom:{title:{zoom:'Zoom',back:'Zoom Reset'}},magicType:{title:{line:'Switch to Line Chart',bar:'Switch to Bar Chart',stack:'Stack',tiled:'Tile'}},restore:{title:'Restore'},saveAsImage:{title:'Save as Image',lang:['Right Click to Save Image']}},series:{typeNames:{pie:'Pie chart',bar:'Bar chart',line:'Line chart',scatter:'Scatter plot',effectScatter:'Ripple scatter plot',radar:'Radar chart',tree:'Tree',treemap:'Treemap',boxplot:'Boxplot',candlestick:'Candlestick',k:'K line chart',heatmap:'Heat map',map:'Map',parallel:'Parallel coordinate map',lines:'Line graph',graph:'Relationship graph',sankey:'Sankey diagram',funnel:'Funnel chart',gauge:'Gauge',pictorialBar:'Pictorial bar',themeRiver:'Theme River Map',sunburst:'Sunburst'}},aria:{general:{withTitle:'This is a chart about "{title}"',withoutTitle:'This is a chart'},series:{single:{prefix:'',withName:' with type {seriesType} named {seriesName}.',withoutName:' with type {seriesType}.'},multiple:{prefix:'. It consists of {seriesCount} series count.',withName:' The {seriesId} series is a {seriesType} representing {seriesName}.',withoutName:' The {seriesId} series is a {seriesType}.',separator:{middle:'',end:''}}},data:{allData:'The data is as follows: ',partialData:'The first {displayCnt} items are: ',withName:'the data for {name} is {value}',withoutName:'{value}',separator:{middle:', ',end:'. '}}}});

/***/ }),

/***/ 68914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
 *//* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({time:{month:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],monthAbbr:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],dayOfWeek:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],dayOfWeekAbbr:['日','一','二','三','四','五','六']},legend:{selector:{all:'全选',inverse:'反选'}},toolbox:{brush:{title:{rect:'矩形选择',polygon:'圈选',lineX:'横向选择',lineY:'纵向选择',keep:'保持选择',clear:'清除选择'}},dataView:{title:'数据视图',lang:['数据视图','关闭','刷新']},dataZoom:{title:{zoom:'区域缩放',back:'区域缩放还原'}},magicType:{title:{line:'切换为折线图',bar:'切换为柱状图',stack:'切换为堆叠',tiled:'切换为平铺'}},restore:{title:'还原'},saveAsImage:{title:'保存为图片',lang:['右键另存为图片']}},series:{typeNames:{pie:'饼图',bar:'柱状图',line:'折线图',scatter:'散点图',effectScatter:'涟漪散点图',radar:'雷达图',tree:'树图',treemap:'矩形树图',boxplot:'箱型图',candlestick:'K线图',k:'K线图',heatmap:'热力图',map:'地图',parallel:'平行坐标图',lines:'线图',graph:'关系图',sankey:'桑基图',funnel:'漏斗图',gauge:'仪表盘图',pictorialBar:'象形柱图',themeRiver:'主题河流图',sunburst:'旭日图'}},aria:{general:{withTitle:'这是一个关于“{title}”的图表。',withoutTitle:'这是一个图表，'},series:{single:{prefix:'',withName:'图表类型是{seriesType}，表示{seriesName}。',withoutName:'图表类型是{seriesType}。'},multiple:{prefix:'它由{seriesCount}个图表系列组成。',withName:'第{seriesId}个系列是一个表示{seriesName}的{seriesType}，',withoutName:'第{seriesId}个系列是一个{seriesType}，',separator:{middle:'；',end:'。'}}},data:{allData:'其数据是——',partialData:'其中，前{displayCnt}项是——',withName:'{name}的数据是{value}',withoutName:'{value}',separator:{middle:'，',end:''}}}});

/***/ }),

/***/ 80998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$x": () => (/* binding */ getLabelLineStatesModels),
/* harmony export */   "Iu": () => (/* binding */ setLabelLineStyle),
/* harmony export */   "_A": () => (/* binding */ limitSurfaceAngle),
/* harmony export */   "d": () => (/* binding */ updateLabelLinePoints),
/* harmony export */   "qK": () => (/* binding */ limitTurnAngle)
/* harmony export */ });
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40532);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73727);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72160);
/* harmony import */ var zrender_lib_core_PathProxy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28937);
/* harmony import */ var zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85197);
/* harmony import */ var zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86250);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57697);
/* harmony import */ var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13518);
/* harmony import */ var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79070);
/* harmony import */ var _util_states_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36073);
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
*/var PI2=Math.PI*2;var CMD=zrender_lib_core_PathProxy_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CMD */ .Z.CMD;var DEFAULT_SEARCH_SPACE=['top','right','bottom','left'];function getCandidateAnchor(pos,distance,rect,outPt,outDir){var width=rect.width;var height=rect.height;switch(pos){case'top':outPt.set(rect.x+width/2,rect.y-distance);outDir.set(0,-1);break;case'bottom':outPt.set(rect.x+width/2,rect.y+height+distance);outDir.set(0,1);break;case'left':outPt.set(rect.x-distance,rect.y+height/2);outDir.set(-1,0);break;case'right':outPt.set(rect.x+width+distance,rect.y+height/2);outDir.set(1,0);break;}}function projectPointToArc(cx,cy,r,startAngle,endAngle,anticlockwise,x,y,out){x-=cx;y-=cy;var d=Math.sqrt(x*x+y*y);x/=d;y/=d;// Intersect point.
var ox=x*r+cx;var oy=y*r+cy;if(Math.abs(startAngle-endAngle)%PI2<1e-4){// Is a circle
out[0]=ox;out[1]=oy;return d-r;}if(anticlockwise){var tmp=startAngle;startAngle=(0,zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeRadian */ .m)(endAngle);endAngle=(0,zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeRadian */ .m)(tmp);}else{startAngle=(0,zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeRadian */ .m)(startAngle);endAngle=(0,zrender_lib_contain_util_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeRadian */ .m)(endAngle);}if(startAngle>endAngle){endAngle+=PI2;}var angle=Math.atan2(y,x);if(angle<0){angle+=PI2;}if(angle>=startAngle&&angle<=endAngle||angle+PI2>=startAngle&&angle+PI2<=endAngle){// Project point is on the arc.
out[0]=ox;out[1]=oy;return d-r;}var x1=r*Math.cos(startAngle)+cx;var y1=r*Math.sin(startAngle)+cy;var x2=r*Math.cos(endAngle)+cx;var y2=r*Math.sin(endAngle)+cy;var d1=(x1-x)*(x1-x)+(y1-y)*(y1-y);var d2=(x2-x)*(x2-x)+(y2-y)*(y2-y);if(d1<d2){out[0]=x1;out[1]=y1;return Math.sqrt(d1);}else{out[0]=x2;out[1]=y2;return Math.sqrt(d2);}}function projectPointToLine(x1,y1,x2,y2,x,y,out,limitToEnds){var dx=x-x1;var dy=y-y1;var dx1=x2-x1;var dy1=y2-y1;var lineLen=Math.sqrt(dx1*dx1+dy1*dy1);dx1/=lineLen;dy1/=lineLen;// dot product
var projectedLen=dx*dx1+dy*dy1;var t=projectedLen/lineLen;if(limitToEnds){t=Math.min(Math.max(t,0),1);}t*=lineLen;var ox=out[0]=x1+t*dx1;var oy=out[1]=y1+t*dy1;return Math.sqrt((ox-x)*(ox-x)+(oy-y)*(oy-y));}function projectPointToRect(x1,y1,width,height,x,y,out){if(width<0){x1=x1+width;width=-width;}if(height<0){y1=y1+height;height=-height;}var x2=x1+width;var y2=y1+height;var ox=out[0]=Math.min(Math.max(x,x1),x2);var oy=out[1]=Math.min(Math.max(y,y1),y2);return Math.sqrt((ox-x)*(ox-x)+(oy-y)*(oy-y));}var tmpPt=[];function nearestPointOnRect(pt,rect,out){var dist=projectPointToRect(rect.x,rect.y,rect.width,rect.height,pt.x,pt.y,tmpPt);out.set(tmpPt[0],tmpPt[1]);return dist;}/**
 * Calculate min distance corresponding point.
 * This method won't evaluate if point is in the path.
 */function nearestPointOnPath(pt,path,out){var xi=0;var yi=0;var x0=0;var y0=0;var x1;var y1;var minDist=Infinity;var data=path.data;var x=pt.x;var y=pt.y;for(var i=0;i<data.length;){var cmd=data[i++];if(i===1){xi=data[i];yi=data[i+1];x0=xi;y0=yi;}var d=minDist;switch(cmd){case CMD.M:// moveTo 命令重新创建一个新的 subpath, 并且更新新的起点
// 在 closePath 的时候使用
x0=data[i++];y0=data[i++];xi=x0;yi=y0;break;case CMD.L:d=projectPointToLine(xi,yi,data[i],data[i+1],x,y,tmpPt,true);xi=data[i++];yi=data[i++];break;case CMD.C:d=(0,zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_2__/* .cubicProjectPoint */ .t1)(xi,yi,data[i++],data[i++],data[i++],data[i++],data[i],data[i+1],x,y,tmpPt);xi=data[i++];yi=data[i++];break;case CMD.Q:d=(0,zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_2__/* .quadraticProjectPoint */ .Wr)(xi,yi,data[i++],data[i++],data[i],data[i+1],x,y,tmpPt);xi=data[i++];yi=data[i++];break;case CMD.A:// TODO Arc 判断的开销比较大
var cx=data[i++];var cy=data[i++];var rx=data[i++];var ry=data[i++];var theta=data[i++];var dTheta=data[i++];// TODO Arc 旋转
i+=1;var anticlockwise=!!(1-data[i++]);x1=Math.cos(theta)*rx+cx;y1=Math.sin(theta)*ry+cy;// 不是直接使用 arc 命令
if(i<=1){// 第一个命令起点还未定义
x0=x1;y0=y1;}// zr 使用scale来模拟椭圆, 这里也对x做一定的缩放
var _x=(x-cx)*ry/rx+cx;d=projectPointToArc(cx,cy,ry,theta,theta+dTheta,anticlockwise,_x,y,tmpPt);xi=Math.cos(theta+dTheta)*rx+cx;yi=Math.sin(theta+dTheta)*ry+cy;break;case CMD.R:x0=xi=data[i++];y0=yi=data[i++];var width=data[i++];var height=data[i++];d=projectPointToRect(x0,y0,width,height,x,y,tmpPt);break;case CMD.Z:d=projectPointToLine(xi,yi,x0,y0,x,y,tmpPt,true);xi=x0;yi=y0;break;}if(d<minDist){minDist=d;out.set(tmpPt[0],tmpPt[1]);}}return minDist;}// Temporal varible for intermediate usage.
var pt0=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();var pt1=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();var pt2=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();var dir=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();var dir2=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();/**
 * Calculate a proper guide line based on the label position and graphic element definition
 * @param label
 * @param labelRect
 * @param target
 * @param targetRect
 */function updateLabelLinePoints(target,labelLineModel){if(!target){return;}var labelLine=target.getTextGuideLine();var label=target.getTextContent();// Needs to create text guide in each charts.
if(!(label&&labelLine)){return;}var labelGuideConfig=target.textGuideLineConfig||{};var points=[[0,0],[0,0],[0,0]];var searchSpace=labelGuideConfig.candidates||DEFAULT_SEARCH_SPACE;var labelRect=label.getBoundingRect().clone();labelRect.applyTransform(label.getComputedTransform());var minDist=Infinity;var anchorPoint=labelGuideConfig.anchor;var targetTransform=target.getComputedTransform();var targetInversedTransform=targetTransform&&(0,zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__/* .invert */ .U_)([],targetTransform);var len=labelLineModel.get('length2')||0;if(anchorPoint){pt2.copy(anchorPoint);}for(var i=0;i<searchSpace.length;i++){var candidate=searchSpace[i];getCandidateAnchor(candidate,0,labelRect,pt0,dir);_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].scaleAndAdd */ .Z.scaleAndAdd(pt1,pt0,dir,len);// Transform to target coord space.
pt1.transform(targetInversedTransform);// Note: getBoundingRect will ensure the `path` being created.
var boundingRect=target.getBoundingRect();var dist=anchorPoint?anchorPoint.distance(pt1):target instanceof _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP?nearestPointOnPath(pt1,target.path,pt2):nearestPointOnRect(pt1,boundingRect,pt2);// TODO pt2 is in the path
if(dist<minDist){minDist=dist;// Transform back to global space.
pt1.transform(targetTransform);pt2.transform(targetTransform);pt2.toArray(points[0]);pt1.toArray(points[1]);pt0.toArray(points[2]);}}limitTurnAngle(points,labelLineModel.get('minTurnAngle'));labelLine.setShape({points:points});}// Temporal variable for the limitTurnAngle function
var tmpArr=[];var tmpProjPoint=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();/**
 * Reduce the line segment attached to the label to limit the turn angle between two segments.
 * @param linePoints
 * @param minTurnAngle Radian of minimum turn angle. 0 - 180
 */function limitTurnAngle(linePoints,minTurnAngle){if(!(minTurnAngle<=180&&minTurnAngle>0)){return;}minTurnAngle=minTurnAngle/180*Math.PI;// The line points can be
//      /pt1----pt2 (label)
//     /
// pt0/
pt0.fromArray(linePoints[0]);pt1.fromArray(linePoints[1]);pt2.fromArray(linePoints[2]);_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].sub */ .Z.sub(dir,pt0,pt1);_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].sub */ .Z.sub(dir2,pt2,pt1);var len1=dir.len();var len2=dir2.len();if(len1<1e-3||len2<1e-3){return;}dir.scale(1/len1);dir2.scale(1/len2);var angleCos=dir.dot(dir2);var minTurnAngleCos=Math.cos(minTurnAngle);if(minTurnAngleCos<angleCos){// Smaller than minTurnAngle
// Calculate project point of pt0 on pt1-pt2
var d=projectPointToLine(pt1.x,pt1.y,pt2.x,pt2.y,pt0.x,pt0.y,tmpArr,false);tmpProjPoint.fromArray(tmpArr);// Calculate new projected length with limited minTurnAngle and get the new connect point
tmpProjPoint.scaleAndAdd(dir2,d/Math.tan(Math.PI-minTurnAngle));// Limit the new calculated connect point between pt1 and pt2.
var t=pt2.x!==pt1.x?(tmpProjPoint.x-pt1.x)/(pt2.x-pt1.x):(tmpProjPoint.y-pt1.y)/(pt2.y-pt1.y);if(isNaN(t)){return;}if(t<0){_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].copy */ .Z.copy(tmpProjPoint,pt1);}else if(t>1){_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].copy */ .Z.copy(tmpProjPoint,pt2);}tmpProjPoint.toArray(linePoints[1]);}}/**
 * Limit the angle of line and the surface
 * @param maxSurfaceAngle Radian of minimum turn angle. 0 - 180. 0 is same direction to normal. 180 is opposite
 */function limitSurfaceAngle(linePoints,surfaceNormal,maxSurfaceAngle){if(!(maxSurfaceAngle<=180&&maxSurfaceAngle>0)){return;}maxSurfaceAngle=maxSurfaceAngle/180*Math.PI;pt0.fromArray(linePoints[0]);pt1.fromArray(linePoints[1]);pt2.fromArray(linePoints[2]);_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].sub */ .Z.sub(dir,pt1,pt0);_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].sub */ .Z.sub(dir2,pt2,pt1);var len1=dir.len();var len2=dir2.len();if(len1<1e-3||len2<1e-3){return;}dir.scale(1/len1);dir2.scale(1/len2);var angleCos=dir.dot(surfaceNormal);var maxSurfaceAngleCos=Math.cos(maxSurfaceAngle);if(angleCos<maxSurfaceAngleCos){// Calculate project point of pt0 on pt1-pt2
var d=projectPointToLine(pt1.x,pt1.y,pt2.x,pt2.y,pt0.x,pt0.y,tmpArr,false);tmpProjPoint.fromArray(tmpArr);var HALF_PI=Math.PI/2;var angle2=Math.acos(dir2.dot(surfaceNormal));var newAngle=HALF_PI+angle2-maxSurfaceAngle;if(newAngle>=HALF_PI){// parallel
_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].copy */ .Z.copy(tmpProjPoint,pt2);}else{// Calculate new projected length with limited minTurnAngle and get the new connect point
tmpProjPoint.scaleAndAdd(dir2,d/Math.tan(Math.PI/2-newAngle));// Limit the new calculated connect point between pt1 and pt2.
var t=pt2.x!==pt1.x?(tmpProjPoint.x-pt1.x)/(pt2.x-pt1.x):(tmpProjPoint.y-pt1.y)/(pt2.y-pt1.y);if(isNaN(t)){return;}if(t<0){_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].copy */ .Z.copy(tmpProjPoint,pt1);}else if(t>1){_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].copy */ .Z.copy(tmpProjPoint,pt2);}}tmpProjPoint.toArray(linePoints[1]);}}function setLabelLineState(labelLine,ignore,stateName,stateModel){var isNormal=stateName==='normal';var stateObj=isNormal?labelLine:labelLine.ensureState(stateName);// Make sure display.
stateObj.ignore=ignore;// Set smooth
var smooth=stateModel.get('smooth');if(smooth&&smooth===true){smooth=0.3;}stateObj.shape=stateObj.shape||{};if(smooth>0){stateObj.shape.smooth=smooth;}var styleObj=stateModel.getModel('lineStyle').getLineStyle();isNormal?labelLine.useStyle(styleObj):stateObj.style=styleObj;}function buildLabelLinePath(path,shape){var smooth=shape.smooth;var points=shape.points;if(!points){return;}path.moveTo(points[0][0],points[0][1]);if(smooth>0&&points.length>=3){var len1=zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__/* .dist */ .TK(points[0],points[1]);var len2=zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__/* .dist */ .TK(points[1],points[2]);if(!len1||!len2){path.lineTo(points[1][0],points[1][1]);path.lineTo(points[2][0],points[2][1]);return;}var moveLen=Math.min(len1,len2)*smooth;var midPoint0=zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__/* .lerp */ .t7([],points[1],points[0],moveLen/len1);var midPoint2=zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__/* .lerp */ .t7([],points[1],points[2],moveLen/len2);var midPoint1=zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_6__/* .lerp */ .t7([],midPoint0,midPoint2,0.5);path.bezierCurveTo(midPoint0[0],midPoint0[1],midPoint0[0],midPoint0[1],midPoint1[0],midPoint1[1]);path.bezierCurveTo(midPoint2[0],midPoint2[1],midPoint2[0],midPoint2[1],points[2][0],points[2][1]);}else{for(var i=1;i<points.length;i++){path.lineTo(points[i][0],points[i][1]);}}}/**
 * Create a label line if necessary and set it's style.
 */function setLabelLineStyle(targetEl,statesModels,defaultStyle){var labelLine=targetEl.getTextGuideLine();var label=targetEl.getTextContent();if(!label){// Not show label line if there is no label.
if(labelLine){targetEl.removeTextGuideLine();}return;}var normalModel=statesModels.normal;var showNormal=normalModel.get('show');var labelIgnoreNormal=label.ignore;for(var i=0;i<_util_states_js__WEBPACK_IMPORTED_MODULE_7__/* .DISPLAY_STATES.length */ .qc.length;i++){var stateName=_util_states_js__WEBPACK_IMPORTED_MODULE_7__/* .DISPLAY_STATES */ .qc[i];var stateModel=statesModels[stateName];var isNormal=stateName==='normal';if(stateModel){var stateShow=stateModel.get('show');var isLabelIgnored=isNormal?labelIgnoreNormal:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__/* .retrieve2 */ .pD)(label.states[stateName]&&label.states[stateName].ignore,labelIgnoreNormal);if(isLabelIgnored// Not show when label is not shown in this state.
||!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__/* .retrieve2 */ .pD)(stateShow,showNormal)// Use normal state by default if not set.
){var stateObj=isNormal?labelLine:labelLine&&labelLine.states[stateName];if(stateObj){stateObj.ignore=true;}continue;}// Create labelLine if not exists
if(!labelLine){labelLine=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z();targetEl.setTextGuideLine(labelLine);// Reset state of normal because it's new created.
// NOTE: NORMAL should always been the first!
if(!isNormal&&(labelIgnoreNormal||!showNormal)){setLabelLineState(labelLine,true,'normal',statesModels.normal);}// Use same state proxy.
if(targetEl.stateProxy){labelLine.stateProxy=targetEl.stateProxy;}}setLabelLineState(labelLine,false,stateName,stateModel);}}if(labelLine){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_8__/* .defaults */ .ce)(labelLine.style,defaultStyle);// Not fill.
labelLine.style.fill=null;var showAbove=normalModel.get('showAbove');var labelLineConfig=targetEl.textGuideLineConfig=targetEl.textGuideLineConfig||{};labelLineConfig.showAbove=showAbove||false;// Custom the buildPath.
labelLine.buildPath=buildLabelLinePath;}}function getLabelLineStatesModels(itemModel,labelLineName){labelLineName=labelLineName||'labelLine';var statesModels={normal:itemModel.getModel(labelLineName)};for(var i=0;i<_util_states_js__WEBPACK_IMPORTED_MODULE_7__/* .SPECIAL_STATES.length */ .L1.length;i++){var stateName=_util_states_js__WEBPACK_IMPORTED_MODULE_7__/* .SPECIAL_STATES */ .L1[i];statesModels[stateName]=itemModel.getModel([stateName,labelLineName]);}return statesModels;}

/***/ }),

/***/ 94424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ shiftLayoutOnY),
/* harmony export */   "VT": () => (/* binding */ prepareLayoutList),
/* harmony export */   "WE": () => (/* binding */ shiftLayoutOnX),
/* harmony export */   "yl": () => (/* binding */ hideOverlap)
/* harmony export */ });
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80609);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54865);
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
*/function prepareLayoutList(input){var list=[];for(var i=0;i<input.length;i++){var rawItem=input[i];if(rawItem.defaultAttr.ignore){continue;}var label=rawItem.label;var transform=label.getComputedTransform();// NOTE: Get bounding rect after getComputedTransform, or label may not been updated by the host el.
var localRect=label.getBoundingRect();var isAxisAligned=!transform||transform[1]<1e-5&&transform[2]<1e-5;var minMargin=label.style.margin||0;var globalRect=localRect.clone();globalRect.applyTransform(transform);globalRect.x-=minMargin/2;globalRect.y-=minMargin/2;globalRect.width+=minMargin;globalRect.height+=minMargin;var obb=isAxisAligned?new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(localRect,transform):null;list.push({label:label,labelLine:rawItem.labelLine,rect:globalRect,localRect:localRect,obb:obb,priority:rawItem.priority,defaultAttr:rawItem.defaultAttr,layoutOption:rawItem.computedLayoutOption,axisAligned:isAxisAligned,transform:transform});}return list;}function shiftLayout(list,xyDim,sizeDim,minBound,maxBound,balanceShift){var len=list.length;if(len<2){return;}list.sort(function(a,b){return a.rect[xyDim]-b.rect[xyDim];});var lastPos=0;var delta;var adjusted=false;var shifts=[];var totalShifts=0;for(var i=0;i<len;i++){var item=list[i];var rect=item.rect;delta=rect[xyDim]-lastPos;if(delta<0){// shiftForward(i, len, -delta);
rect[xyDim]-=delta;item.label[xyDim]-=delta;adjusted=true;}var shift=Math.max(-delta,0);shifts.push(shift);totalShifts+=shift;lastPos=rect[xyDim]+rect[sizeDim];}if(totalShifts>0&&balanceShift){// Shift back to make the distribution more equally.
shiftList(-totalShifts/len,0,len);}// TODO bleedMargin?
var first=list[0];var last=list[len-1];var minGap;var maxGap;updateMinMaxGap();// If ends exceed two bounds, squeeze at most 80%, then take the gap of two bounds.
minGap<0&&squeezeGaps(-minGap,0.8);maxGap<0&&squeezeGaps(maxGap,0.8);updateMinMaxGap();takeBoundsGap(minGap,maxGap,1);takeBoundsGap(maxGap,minGap,-1);// Handle bailout when there is not enough space.
updateMinMaxGap();if(minGap<0){squeezeWhenBailout(-minGap);}if(maxGap<0){squeezeWhenBailout(maxGap);}function updateMinMaxGap(){minGap=first.rect[xyDim]-minBound;maxGap=maxBound-last.rect[xyDim]-last.rect[sizeDim];}function takeBoundsGap(gapThisBound,gapOtherBound,moveDir){if(gapThisBound<0){// Move from other gap if can.
var moveFromMaxGap=Math.min(gapOtherBound,-gapThisBound);if(moveFromMaxGap>0){shiftList(moveFromMaxGap*moveDir,0,len);var remained=moveFromMaxGap+gapThisBound;if(remained<0){squeezeGaps(-remained*moveDir,1);}}else{squeezeGaps(-gapThisBound*moveDir,1);}}}function shiftList(delta,start,end){if(delta!==0){adjusted=true;}for(var i=start;i<end;i++){var item=list[i];var rect=item.rect;rect[xyDim]+=delta;item.label[xyDim]+=delta;}}// Squeeze gaps if the labels exceed margin.
function squeezeGaps(delta,maxSqeezePercent){var gaps=[];var totalGaps=0;for(var i=1;i<len;i++){var prevItemRect=list[i-1].rect;var gap=Math.max(list[i].rect[xyDim]-prevItemRect[xyDim]-prevItemRect[sizeDim],0);gaps.push(gap);totalGaps+=gap;}if(!totalGaps){return;}var squeezePercent=Math.min(Math.abs(delta)/totalGaps,maxSqeezePercent);if(delta>0){for(var i=0;i<len-1;i++){// Distribute the shift delta to all gaps.
var movement=gaps[i]*squeezePercent;// Forward
shiftList(movement,0,i+1);}}else{// Backward
for(var i=len-1;i>0;i--){// Distribute the shift delta to all gaps.
var movement=gaps[i-1]*squeezePercent;shiftList(-movement,i,len);}}}/**
   * Squeeze to allow overlap if there is no more space available.
   * Let other overlapping strategy like hideOverlap do the job instead of keep exceeding the bounds.
   */function squeezeWhenBailout(delta){var dir=delta<0?-1:1;delta=Math.abs(delta);var moveForEachLabel=Math.ceil(delta/(len-1));for(var i=0;i<len-1;i++){if(dir>0){// Forward
shiftList(moveForEachLabel,0,i+1);}else{// Backward
shiftList(-moveForEachLabel,len-i-1,len);}delta-=moveForEachLabel;if(delta<=0){return;}}}return adjusted;}/**
 * Adjust labels on x direction to avoid overlap.
 */function shiftLayoutOnX(list,leftBound,rightBound,// If average the shifts on all labels and add them to 0
// TODO: Not sure if should enable it.
// Pros: The angle of lines will distribute more equally
// Cons: In some layout. It may not what user wanted. like in pie. the label of last sector is usually changed unexpectedly.
balanceShift){return shiftLayout(list,'x','width',leftBound,rightBound,balanceShift);}/**
 * Adjust labels on y direction to avoid overlap.
 */function shiftLayoutOnY(list,topBound,bottomBound,// If average the shifts on all labels and add them to 0
balanceShift){return shiftLayout(list,'y','height',topBound,bottomBound,balanceShift);}function hideOverlap(labelList){var displayedLabels=[];// TODO, render overflow visible first, put in the displayedLabels.
labelList.sort(function(a,b){return b.priority-a.priority;});var globalRect=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(0,0,0,0);function hideEl(el){if(!el.ignore){// Show on emphasis.
var emphasisState=el.ensureState('emphasis');if(emphasisState.ignore==null){emphasisState.ignore=false;}}el.ignore=true;}for(var i=0;i<labelList.length;i++){var labelItem=labelList[i];var isAxisAligned=labelItem.axisAligned;var localRect=labelItem.localRect;var transform=labelItem.transform;var label=labelItem.label;var labelLine=labelItem.labelLine;globalRect.copy(labelItem.rect);// Add a threshold because layout may be aligned precisely.
globalRect.width-=0.1;globalRect.height-=0.1;globalRect.x+=0.05;globalRect.y+=0.05;var obb=labelItem.obb;var overlapped=false;for(var j=0;j<displayedLabels.length;j++){var existsTextCfg=displayedLabels[j];// Fast rejection.
if(!globalRect.intersect(existsTextCfg.rect)){continue;}if(isAxisAligned&&existsTextCfg.axisAligned){// Is overlapped
overlapped=true;break;}if(!existsTextCfg.obb){// If self is not axis aligned. But other is.
existsTextCfg.obb=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(existsTextCfg.localRect,existsTextCfg.transform);}if(!obb){// If self is axis aligned. But other is not.
obb=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(localRect,transform);}if(obb.intersect(existsTextCfg.obb)){overlapped=true;break;}}// TODO Callback to determine if this overlap should be handled?
if(overlapped){hideEl(label);labelLine&&hideEl(labelLine);}else{label.attr('ignore',labelItem.defaultAttr.ignore);labelLine&&labelLine.attr('ignore',labelItem.defaultAttr.labelGuideIgnore);displayedLabels.push(labelItem);}}}

/***/ }),

/***/ 9610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lr": () => (/* binding */ createTextStyle),
/* harmony export */   "k3": () => (/* binding */ getLabelStatesModels),
/* harmony export */   "ni": () => (/* binding */ setLabelStyle),
/* harmony export */   "pe": () => (/* binding */ setLabelValueAnimation),
/* harmony export */   "qA": () => (/* binding */ labelInner),
/* harmony export */   "qT": () => (/* binding */ getFont),
/* harmony export */   "tD": () => (/* binding */ animateLabelValue)
/* harmony export */ });
/* unused harmony exports setLabelText, createTextConfig */
/* harmony import */ var zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95067);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _util_states_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36073);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23958);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21438);
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
*/var EMPTY_OBJ={};function setLabelText(label,labelTexts){for(var i=0;i<_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .SPECIAL_STATES.length */ .L1.length;i++){var stateName=_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .SPECIAL_STATES */ .L1[i];var text=labelTexts[stateName];var state=label.ensureState(stateName);state.style=state.style||{};state.style.text=text;}var oldStates=label.currentStates.slice();label.clearStates(true);label.setStyle({text:labelTexts.normal});label.useStates(oldStates,true);}function getLabelText(opt,stateModels,interpolatedValue){var labelFetcher=opt.labelFetcher;var labelDataIndex=opt.labelDataIndex;var labelDimIndex=opt.labelDimIndex;var normalModel=stateModels.normal;var baseText;if(labelFetcher){baseText=labelFetcher.getFormattedLabel(labelDataIndex,'normal',null,labelDimIndex,normalModel&&normalModel.get('formatter'),interpolatedValue!=null?{interpolatedValue:interpolatedValue}:null);}if(baseText==null){baseText=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .mf)(opt.defaultText)?opt.defaultText(labelDataIndex,opt,interpolatedValue):opt.defaultText;}var statesText={normal:baseText};for(var i=0;i<_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .SPECIAL_STATES.length */ .L1.length;i++){var stateName=_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .SPECIAL_STATES */ .L1[i];var stateModel=stateModels[stateName];statesText[stateName]=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(labelFetcher?labelFetcher.getFormattedLabel(labelDataIndex,stateName,null,labelDimIndex,stateModel&&stateModel.get('formatter')):null,baseText);}return statesText;}function setLabelStyle(targetEl,labelStatesModels,opt,stateSpecified// TODO specified position?
){opt=opt||EMPTY_OBJ;var isSetOnText=targetEl instanceof zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP;var needsCreateText=false;for(var i=0;i<_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .DISPLAY_STATES.length */ .qc.length;i++){var stateModel=labelStatesModels[_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .DISPLAY_STATES */ .qc[i]];if(stateModel&&stateModel.getShallow('show')){needsCreateText=true;break;}}var textContent=isSetOnText?targetEl:targetEl.getTextContent();if(needsCreateText){if(!isSetOnText){// Reuse the previous
if(!textContent){textContent=new zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP();targetEl.setTextContent(textContent);}// Use same state proxy
if(targetEl.stateProxy){textContent.stateProxy=targetEl.stateProxy;}}var labelStatesTexts=getLabelText(opt,labelStatesModels);var normalModel=labelStatesModels.normal;var showNormal=!!normalModel.getShallow('show');var normalStyle=createTextStyle(normalModel,stateSpecified&&stateSpecified.normal,opt,false,!isSetOnText);normalStyle.text=labelStatesTexts.normal;if(!isSetOnText){// Always create new
targetEl.setTextConfig(createTextConfig(normalModel,opt,false));}for(var i=0;i<_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .SPECIAL_STATES.length */ .L1.length;i++){var stateName=_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .SPECIAL_STATES */ .L1[i];var stateModel=labelStatesModels[stateName];if(stateModel){var stateObj=textContent.ensureState(stateName);var stateShow=!!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(stateModel.getShallow('show'),showNormal);if(stateShow!==showNormal){stateObj.ignore=!stateShow;}stateObj.style=createTextStyle(stateModel,stateSpecified&&stateSpecified[stateName],opt,true,!isSetOnText);stateObj.style.text=labelStatesTexts[stateName];if(!isSetOnText){var targetElEmphasisState=targetEl.ensureState(stateName);targetElEmphasisState.textConfig=createTextConfig(stateModel,opt,true);}}}// PENDING: if there is many requirements that emphasis position
// need to be different from normal position, we might consider
// auto slient is those cases.
textContent.silent=!!normalModel.getShallow('silent');// Keep x and y
if(textContent.style.x!=null){normalStyle.x=textContent.style.x;}if(textContent.style.y!=null){normalStyle.y=textContent.style.y;}textContent.ignore=!showNormal;// Always create new style.
textContent.useStyle(normalStyle);textContent.dirty();if(opt.enableTextSetter){labelInner(textContent).setLabelText=function(interpolatedValue){var labelStatesTexts=getLabelText(opt,labelStatesModels,interpolatedValue);setLabelText(textContent,labelStatesTexts);};}}else if(textContent){// Not display rich text.
textContent.ignore=true;}targetEl.dirty();}function getLabelStatesModels(itemModel,labelName){labelName=labelName||'label';var statesModels={normal:itemModel.getModel(labelName)};for(var i=0;i<_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .SPECIAL_STATES.length */ .L1.length;i++){var stateName=_util_states_js__WEBPACK_IMPORTED_MODULE_0__/* .SPECIAL_STATES */ .L1[i];statesModels[stateName]=itemModel.getModel([stateName,labelName]);}return statesModels;}/**
 * Set basic textStyle properties.
 */function createTextStyle(textStyleModel,specifiedTextStyle,// Fixed style in the code. Can't be set by model.
opt,isNotNormal,isAttached// If text is attached on an element. If so, auto color will handling in zrender.
){var textStyle={};setTextStyleCommon(textStyle,textStyleModel,opt,isNotNormal,isAttached);specifiedTextStyle&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .extend */ .l7)(textStyle,specifiedTextStyle);// textStyle.host && textStyle.host.dirty && textStyle.host.dirty(false);
return textStyle;}function createTextConfig(textStyleModel,opt,isNotNormal){opt=opt||{};var textConfig={};var labelPosition;var labelRotate=textStyleModel.getShallow('rotate');var labelDistance=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(textStyleModel.getShallow('distance'),isNotNormal?null:5);var labelOffset=textStyleModel.getShallow('offset');labelPosition=textStyleModel.getShallow('position')||(isNotNormal?null:'inside');// 'outside' is not a valid zr textPostion value, but used
// in bar series, and magric type should be considered.
labelPosition==='outside'&&(labelPosition=opt.defaultOutsidePosition||'top');if(labelPosition!=null){textConfig.position=labelPosition;}if(labelOffset!=null){textConfig.offset=labelOffset;}if(labelRotate!=null){labelRotate*=Math.PI/180;textConfig.rotation=labelRotate;}if(labelDistance!=null){textConfig.distance=labelDistance;}// fill and auto is determined by the color of path fill if it's not specified by developers.
textConfig.outsideFill=textStyleModel.get('color')==='inherit'?opt.inheritColor||null:'auto';return textConfig;}/**
 * The uniform entry of set text style, that is, retrieve style definitions
 * from `model` and set to `textStyle` object.
 *
 * Never in merge mode, but in overwrite mode, that is, all of the text style
 * properties will be set. (Consider the states of normal and emphasis and
 * default value can be adopted, merge would make the logic too complicated
 * to manage.)
 */function setTextStyleCommon(textStyle,textStyleModel,opt,isNotNormal,isAttached){// Consider there will be abnormal when merge hover style to normal style if given default value.
opt=opt||EMPTY_OBJ;var ecModel=textStyleModel.ecModel;var globalTextStyle=ecModel&&ecModel.option.textStyle;// Consider case:
// {
//     data: [{
//         value: 12,
//         label: {
//             rich: {
//                 // no 'a' here but using parent 'a'.
//             }
//         }
//     }],
//     rich: {
//         a: { ... }
//     }
// }
var richItemNames=getRichItemNames(textStyleModel);var richResult;if(richItemNames){richResult={};for(var name_1 in richItemNames){if(richItemNames.hasOwnProperty(name_1)){// Cascade is supported in rich.
var richTextStyle=textStyleModel.getModel(['rich',name_1]);// In rich, never `disableBox`.
// FIXME: consider `label: {formatter: '{a|xx}', color: 'blue', rich: {a: {}}}`,
// the default color `'blue'` will not be adopted if no color declared in `rich`.
// That might confuses users. So probably we should put `textStyleModel` as the
// root ancestor of the `richTextStyle`. But that would be a break change.
setTokenTextStyle(richResult[name_1]={},richTextStyle,globalTextStyle,opt,isNotNormal,isAttached,false,true);}}}if(richResult){textStyle.rich=richResult;}var overflow=textStyleModel.get('overflow');if(overflow){textStyle.overflow=overflow;}var margin=textStyleModel.get('minMargin');if(margin!=null){textStyle.margin=margin;}setTokenTextStyle(textStyle,textStyleModel,globalTextStyle,opt,isNotNormal,isAttached,true,false);}// Consider case:
// {
//     data: [{
//         value: 12,
//         label: {
//             rich: {
//                 // no 'a' here but using parent 'a'.
//             }
//         }
//     }],
//     rich: {
//         a: { ... }
//     }
// }
// TODO TextStyleModel
function getRichItemNames(textStyleModel){// Use object to remove duplicated names.
var richItemNameMap;while(textStyleModel&&textStyleModel!==textStyleModel.ecModel){var rich=(textStyleModel.option||EMPTY_OBJ).rich;if(rich){richItemNameMap=richItemNameMap||{};var richKeys=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .keys */ .XP)(rich);for(var i=0;i<richKeys.length;i++){var richKey=richKeys[i];richItemNameMap[richKey]=1;}}textStyleModel=textStyleModel.parentModel;}return richItemNameMap;}var TEXT_PROPS_WITH_GLOBAL=['fontStyle','fontWeight','fontSize','fontFamily','textShadowColor','textShadowBlur','textShadowOffsetX','textShadowOffsetY'];var TEXT_PROPS_SELF=['align','lineHeight','width','height','tag','verticalAlign'];var TEXT_PROPS_BOX=['padding','borderWidth','borderRadius','borderDashOffset','backgroundColor','borderColor','shadowColor','shadowBlur','shadowOffsetX','shadowOffsetY'];function setTokenTextStyle(textStyle,textStyleModel,globalTextStyle,opt,isNotNormal,isAttached,isBlock,inRich){// In merge mode, default value should not be given.
globalTextStyle=!isNotNormal&&globalTextStyle||EMPTY_OBJ;var inheritColor=opt&&opt.inheritColor;var fillColor=textStyleModel.getShallow('color');var strokeColor=textStyleModel.getShallow('textBorderColor');var opacity=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(textStyleModel.getShallow('opacity'),globalTextStyle.opacity);if(fillColor==='inherit'||fillColor==='auto'){if(false){}if(inheritColor){fillColor=inheritColor;}else{fillColor=null;}}if(strokeColor==='inherit'||strokeColor==='auto'){if(false){}if(inheritColor){strokeColor=inheritColor;}else{strokeColor=null;}}if(!isAttached){// Only use default global textStyle.color if text is individual.
// Otherwise it will use the strategy of attached text color because text may be on a path.
fillColor=fillColor||globalTextStyle.color;strokeColor=strokeColor||globalTextStyle.textBorderColor;}if(fillColor!=null){textStyle.fill=fillColor;}if(strokeColor!=null){textStyle.stroke=strokeColor;}var textBorderWidth=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(textStyleModel.getShallow('textBorderWidth'),globalTextStyle.textBorderWidth);if(textBorderWidth!=null){textStyle.lineWidth=textBorderWidth;}var textBorderType=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(textStyleModel.getShallow('textBorderType'),globalTextStyle.textBorderType);if(textBorderType!=null){textStyle.lineDash=textBorderType;}var textBorderDashOffset=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(textStyleModel.getShallow('textBorderDashOffset'),globalTextStyle.textBorderDashOffset);if(textBorderDashOffset!=null){textStyle.lineDashOffset=textBorderDashOffset;}if(!isNotNormal&&opacity==null&&!inRich){opacity=opt&&opt.defaultOpacity;}if(opacity!=null){textStyle.opacity=opacity;}// TODO
if(!isNotNormal&&!isAttached){// Set default finally.
if(textStyle.fill==null&&opt.inheritColor){textStyle.fill=opt.inheritColor;}}// Do not use `getFont` here, because merge should be supported, where
// part of these properties may be changed in emphasis style, and the
// others should remain their original value got from normal style.
for(var i=0;i<TEXT_PROPS_WITH_GLOBAL.length;i++){var key=TEXT_PROPS_WITH_GLOBAL[i];var val=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(textStyleModel.getShallow(key),globalTextStyle[key]);if(val!=null){textStyle[key]=val;}}for(var i=0;i<TEXT_PROPS_SELF.length;i++){var key=TEXT_PROPS_SELF[i];var val=textStyleModel.getShallow(key);if(val!=null){textStyle[key]=val;}}if(textStyle.verticalAlign==null){var baseline=textStyleModel.getShallow('baseline');if(baseline!=null){textStyle.verticalAlign=baseline;}}if(!isBlock||!opt.disableBox){for(var i=0;i<TEXT_PROPS_BOX.length;i++){var key=TEXT_PROPS_BOX[i];var val=textStyleModel.getShallow(key);if(val!=null){textStyle[key]=val;}}var borderType=textStyleModel.getShallow('borderType');if(borderType!=null){textStyle.borderDash=borderType;}if((textStyle.backgroundColor==='auto'||textStyle.backgroundColor==='inherit')&&inheritColor){if(false){}textStyle.backgroundColor=inheritColor;}if((textStyle.borderColor==='auto'||textStyle.borderColor==='inherit')&&inheritColor){if(false){}textStyle.borderColor=inheritColor;}}}function getFont(opt,ecModel){var gTextStyleModel=ecModel&&ecModel.getModel('textStyle');return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .trim */ .fy)([// FIXME in node-canvas fontWeight is before fontStyle
opt.fontStyle||gTextStyleModel&&gTextStyleModel.getShallow('fontStyle')||'',opt.fontWeight||gTextStyleModel&&gTextStyleModel.getShallow('fontWeight')||'',(opt.fontSize||gTextStyleModel&&gTextStyleModel.getShallow('fontSize')||12)+'px',opt.fontFamily||gTextStyleModel&&gTextStyleModel.getShallow('fontFamily')||'sans-serif'].join(' '));}var labelInner=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__/* .makeInner */ .Yf)();function setLabelValueAnimation(label,labelStatesModels,value,getDefaultText){if(!label){return;}var obj=labelInner(label);obj.prevValue=obj.value;obj.value=value;var normalLabelModel=labelStatesModels.normal;obj.valueAnimation=normalLabelModel.get('valueAnimation');if(obj.valueAnimation){obj.precision=normalLabelModel.get('precision');obj.defaultInterpolatedText=getDefaultText;obj.statesModels=labelStatesModels;}}function animateLabelValue(textEl,dataIndex,data,animatableModel,labelFetcher){var labelInnerStore=labelInner(textEl);if(!labelInnerStore.valueAnimation||labelInnerStore.prevValue===labelInnerStore.value){// Value not changed, no new label animation
return;}var defaultInterpolatedText=labelInnerStore.defaultInterpolatedText;// Consider the case that being animating, do not use the `obj.value`,
// Otherwise it will jump to the `obj.value` when this new animation started.
var currValue=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .retrieve2 */ .pD)(labelInnerStore.interpolatedValue,labelInnerStore.prevValue);var targetValue=labelInnerStore.value;function during(percent){var interpolated=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__/* .interpolateRawValues */ .pk)(data,labelInnerStore.precision,currValue,targetValue,percent);labelInnerStore.interpolatedValue=percent===1?null:interpolated;var labelText=getLabelText({labelDataIndex:dataIndex,labelFetcher:labelFetcher,defaultText:defaultInterpolatedText?defaultInterpolatedText(interpolated):interpolated+''},labelInnerStore.statesModels,interpolated);setLabelText(textEl,labelText);}textEl.percent=0;(labelInnerStore.prevValue==null?_util_graphic_js__WEBPACK_IMPORTED_MODULE_4__/* .initProps */ .KZ:_util_graphic_js__WEBPACK_IMPORTED_MODULE_4__/* .updateProps */ .D)(textEl,{// percent is used to prevent animation from being aborted #15916
percent:1},animatableModel,dataIndex,null,during);}

/***/ }),

/***/ 78970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ createSectorCalculateTextPosition),
/* harmony export */   "W": () => (/* binding */ setSectorTextRotation)
/* harmony export */ });
/* harmony import */ var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20194);
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
*/function createSectorCalculateTextPosition(positionMapping,opts){opts=opts||{};var isRoundCap=opts.isRoundCap;return function(out,opts,boundingRect){var textPosition=opts.position;if(!textPosition||textPosition instanceof Array){return (0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_0__/* .calculateTextPosition */ .wI)(out,opts,boundingRect);}var mappedSectorPosition=positionMapping(textPosition);var distance=opts.distance!=null?opts.distance:5;var sector=this.shape;var cx=sector.cx;var cy=sector.cy;var r=sector.r;var r0=sector.r0;var middleR=(r+r0)/2;var startAngle=sector.startAngle;var endAngle=sector.endAngle;var middleAngle=(startAngle+endAngle)/2;var extraDist=isRoundCap?Math.abs(r-r0)/2:0;var mathCos=Math.cos;var mathSin=Math.sin;// base position: top-left
var x=cx+r*mathCos(startAngle);var y=cy+r*mathSin(startAngle);var textAlign='left';var textVerticalAlign='top';switch(mappedSectorPosition){case'startArc':x=cx+(r0-distance)*mathCos(middleAngle);y=cy+(r0-distance)*mathSin(middleAngle);textAlign='center';textVerticalAlign='top';break;case'insideStartArc':x=cx+(r0+distance)*mathCos(middleAngle);y=cy+(r0+distance)*mathSin(middleAngle);textAlign='center';textVerticalAlign='bottom';break;case'startAngle':x=cx+middleR*mathCos(startAngle)+adjustAngleDistanceX(startAngle,distance+extraDist,false);y=cy+middleR*mathSin(startAngle)+adjustAngleDistanceY(startAngle,distance+extraDist,false);textAlign='right';textVerticalAlign='middle';break;case'insideStartAngle':x=cx+middleR*mathCos(startAngle)+adjustAngleDistanceX(startAngle,-distance+extraDist,false);y=cy+middleR*mathSin(startAngle)+adjustAngleDistanceY(startAngle,-distance+extraDist,false);textAlign='left';textVerticalAlign='middle';break;case'middle':x=cx+middleR*mathCos(middleAngle);y=cy+middleR*mathSin(middleAngle);textAlign='center';textVerticalAlign='middle';break;case'endArc':x=cx+(r+distance)*mathCos(middleAngle);y=cy+(r+distance)*mathSin(middleAngle);textAlign='center';textVerticalAlign='bottom';break;case'insideEndArc':x=cx+(r-distance)*mathCos(middleAngle);y=cy+(r-distance)*mathSin(middleAngle);textAlign='center';textVerticalAlign='top';break;case'endAngle':x=cx+middleR*mathCos(endAngle)+adjustAngleDistanceX(endAngle,distance+extraDist,true);y=cy+middleR*mathSin(endAngle)+adjustAngleDistanceY(endAngle,distance+extraDist,true);textAlign='left';textVerticalAlign='middle';break;case'insideEndAngle':x=cx+middleR*mathCos(endAngle)+adjustAngleDistanceX(endAngle,-distance+extraDist,true);y=cy+middleR*mathSin(endAngle)+adjustAngleDistanceY(endAngle,-distance+extraDist,true);textAlign='right';textVerticalAlign='middle';break;default:return (0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_0__/* .calculateTextPosition */ .wI)(out,opts,boundingRect);}out=out||{};out.x=x;out.y=y;out.align=textAlign;out.verticalAlign=textVerticalAlign;return out;};}function setSectorTextRotation(sector,textPosition,positionMapping,rotateType){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .hj)(rotateType)){// user-set rotation
sector.setTextConfig({rotation:rotateType});return;}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ)(textPosition)){// user-set position, use 0 as auto rotation
sector.setTextConfig({rotation:0});return;}var shape=sector.shape;var startAngle=shape.clockwise?shape.startAngle:shape.endAngle;var endAngle=shape.clockwise?shape.endAngle:shape.startAngle;var middleAngle=(startAngle+endAngle)/2;var anchorAngle;var mappedSectorPosition=positionMapping(textPosition);switch(mappedSectorPosition){case'startArc':case'insideStartArc':case'middle':case'insideEndArc':case'endArc':anchorAngle=middleAngle;break;case'startAngle':case'insideStartAngle':anchorAngle=startAngle;break;case'endAngle':case'insideEndAngle':anchorAngle=endAngle;break;default:sector.setTextConfig({rotation:0});return;}var rotate=Math.PI*1.5-anchorAngle;/**
   * TODO: labels with rotate > Math.PI / 2 should be rotate another
   * half round flipped to increase readability. However, only middle
   * position supports this for now, because in other positions, the
   * anchor point is not at the center of the text, so the positions
   * after rotating is not as expected.
   */if(mappedSectorPosition==='middle'&&rotate>Math.PI/2&&rotate<Math.PI*1.5){rotate-=Math.PI;}sector.setTextConfig({rotation:rotate});}function adjustAngleDistanceX(angle,distance,isEnd){return distance*Math.sin(angle)*(isEnd?-1:1);}function adjustAngleDistanceY(angle,distance,isEnd){return distance*Math.cos(angle)*(isEnd?1:-1);}

/***/ }),

/***/ 78356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bk": () => (/* binding */ createProgressiveLayout),
/* harmony export */   "G_": () => (/* binding */ retrieveColumnLayout),
/* harmony export */   "Ge": () => (/* binding */ prepareLayoutBarSeries),
/* harmony export */   "My": () => (/* binding */ makeColumnLayout),
/* harmony export */   "bK": () => (/* binding */ layout)
/* harmony export */ });
/* unused harmony export getLayoutOnAxis */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84646);
/* harmony import */ var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29209);
/* harmony import */ var _chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75187);
/* harmony import */ var _util_vendor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17044);
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
*/var STACK_PREFIX='__ec_stack_';function getSeriesStackId(seriesModel){return seriesModel.get('stack')||STACK_PREFIX+seriesModel.seriesIndex;}function getAxisKey(axis){return axis.dim+axis.index;}/**
 * @return {Object} {width, offset, offsetCenter} If axis.type is not 'category', return undefined.
 */function getLayoutOnAxis(opt){var params=[];var baseAxis=opt.axis;var axisKey='axis0';if(baseAxis.type!=='category'){return;}var bandWidth=baseAxis.getBandWidth();for(var i=0;i<opt.count||0;i++){params.push(defaults({bandWidth:bandWidth,axisKey:axisKey,stackId:STACK_PREFIX+i},opt));}var widthAndOffsets=doCalBarWidthAndOffset(params);var result=[];for(var i=0;i<opt.count;i++){var item=widthAndOffsets[axisKey][STACK_PREFIX+i];item.offsetCenter=item.offset+item.width/2;result.push(item);}return result;}function prepareLayoutBarSeries(seriesType,ecModel){var seriesModels=[];ecModel.eachSeriesByType(seriesType,function(seriesModel){// Check series coordinate, do layout for cartesian2d only
if(isOnCartesian(seriesModel)){seriesModels.push(seriesModel);}});return seriesModels;}/**
 * Map from (baseAxis.dim + '_' + baseAxis.index) to min gap of two adjacent
 * values.
 * This works for time axes, value axes, and log axes.
 * For a single time axis, return value is in the form like
 * {'x_0': [1000000]}.
 * The value of 1000000 is in milliseconds.
 */function getValueAxesMinGaps(barSeries){/**
   * Map from axis.index to values.
   * For a single time axis, axisValues is in the form like
   * {'x_0': [1495555200000, 1495641600000, 1495728000000]}.
   * Items in axisValues[x], e.g. 1495555200000, are time values of all
   * series.
   */var axisValues={};(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(barSeries,function(seriesModel){var cartesian=seriesModel.coordinateSystem;var baseAxis=cartesian.getBaseAxis();if(baseAxis.type!=='time'&&baseAxis.type!=='value'){return;}var data=seriesModel.getData();var key=baseAxis.dim+'_'+baseAxis.index;var dimIdx=data.getDimensionIndex(data.mapDimension(baseAxis.dim));var store=data.getStore();for(var i=0,cnt=store.count();i<cnt;++i){var value=store.get(dimIdx,i);if(!axisValues[key]){// No previous data for the axis
axisValues[key]=[value];}else{// No value in previous series
axisValues[key].push(value);}// Ignore duplicated time values in the same axis
}});var axisMinGaps={};for(var key in axisValues){if(axisValues.hasOwnProperty(key)){var valuesInAxis=axisValues[key];if(valuesInAxis){// Sort axis values into ascending order to calculate gaps
valuesInAxis.sort(function(a,b){return a-b;});var min=null;for(var j=1;j<valuesInAxis.length;++j){var delta=valuesInAxis[j]-valuesInAxis[j-1];if(delta>0){// Ignore 0 delta because they are of the same axis value
min=min===null?delta:Math.min(min,delta);}}// Set to null if only have one data
axisMinGaps[key]=min;}}}return axisMinGaps;}function makeColumnLayout(barSeries){var axisMinGaps=getValueAxesMinGaps(barSeries);var seriesInfoList=[];(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(barSeries,function(seriesModel){var cartesian=seriesModel.coordinateSystem;var baseAxis=cartesian.getBaseAxis();var axisExtent=baseAxis.getExtent();var bandWidth;if(baseAxis.type==='category'){bandWidth=baseAxis.getBandWidth();}else if(baseAxis.type==='value'||baseAxis.type==='time'){var key=baseAxis.dim+'_'+baseAxis.index;var minGap=axisMinGaps[key];var extentSpan=Math.abs(axisExtent[1]-axisExtent[0]);var scale=baseAxis.scale.getExtent();var scaleSpan=Math.abs(scale[1]-scale[0]);bandWidth=minGap?extentSpan/scaleSpan*minGap:extentSpan;// When there is only one data value
}else{var data=seriesModel.getData();bandWidth=Math.abs(axisExtent[1]-axisExtent[0])/data.count();}var barWidth=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .parsePercent */ .GM)(seriesModel.get('barWidth'),bandWidth);var barMaxWidth=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .parsePercent */ .GM)(seriesModel.get('barMaxWidth'),bandWidth);var barMinWidth=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .parsePercent */ .GM)(// barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
// the auto-calculated bar width might be less than 0.5 / 1.
seriesModel.get('barMinWidth')||(isInLargeMode(seriesModel)?0.5:1),bandWidth);var barGap=seriesModel.get('barGap');var barCategoryGap=seriesModel.get('barCategoryGap');seriesInfoList.push({bandWidth:bandWidth,barWidth:barWidth,barMaxWidth:barMaxWidth,barMinWidth:barMinWidth,barGap:barGap,barCategoryGap:barCategoryGap,axisKey:getAxisKey(baseAxis),stackId:getSeriesStackId(seriesModel)});});return doCalBarWidthAndOffset(seriesInfoList);}function doCalBarWidthAndOffset(seriesInfoList){// Columns info on each category axis. Key is cartesian name
var columnsMap={};(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(seriesInfoList,function(seriesInfo,idx){var axisKey=seriesInfo.axisKey;var bandWidth=seriesInfo.bandWidth;var columnsOnAxis=columnsMap[axisKey]||{bandWidth:bandWidth,remainedWidth:bandWidth,autoWidthCount:0,categoryGap:null,gap:'20%',stacks:{}};var stacks=columnsOnAxis.stacks;columnsMap[axisKey]=columnsOnAxis;var stackId=seriesInfo.stackId;if(!stacks[stackId]){columnsOnAxis.autoWidthCount++;}stacks[stackId]=stacks[stackId]||{width:0,maxWidth:0};// Caution: In a single coordinate system, these barGrid attributes
// will be shared by series. Consider that they have default values,
// only the attributes set on the last series will work.
// Do not change this fact unless there will be a break change.
var barWidth=seriesInfo.barWidth;if(barWidth&&!stacks[stackId].width){// See #6312, do not restrict width.
stacks[stackId].width=barWidth;barWidth=Math.min(columnsOnAxis.remainedWidth,barWidth);columnsOnAxis.remainedWidth-=barWidth;}var barMaxWidth=seriesInfo.barMaxWidth;barMaxWidth&&(stacks[stackId].maxWidth=barMaxWidth);var barMinWidth=seriesInfo.barMinWidth;barMinWidth&&(stacks[stackId].minWidth=barMinWidth);var barGap=seriesInfo.barGap;barGap!=null&&(columnsOnAxis.gap=barGap);var barCategoryGap=seriesInfo.barCategoryGap;barCategoryGap!=null&&(columnsOnAxis.categoryGap=barCategoryGap);});var result={};(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(columnsMap,function(columnsOnAxis,coordSysName){result[coordSysName]={};var stacks=columnsOnAxis.stacks;var bandWidth=columnsOnAxis.bandWidth;var categoryGapPercent=columnsOnAxis.categoryGap;if(categoryGapPercent==null){var columnCount=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .keys */ .XP)(stacks).length;// More columns in one group
// the spaces between group is smaller. Or the column will be too thin.
categoryGapPercent=Math.max(35-columnCount*4,15)+'%';}var categoryGap=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .parsePercent */ .GM)(categoryGapPercent,bandWidth);var barGapPercent=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .parsePercent */ .GM)(columnsOnAxis.gap,1);var remainedWidth=columnsOnAxis.remainedWidth;var autoWidthCount=columnsOnAxis.autoWidthCount;var autoWidth=(remainedWidth-categoryGap)/(autoWidthCount+(autoWidthCount-1)*barGapPercent);autoWidth=Math.max(autoWidth,0);// Find if any auto calculated bar exceeded maxBarWidth
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(stacks,function(column){var maxWidth=column.maxWidth;var minWidth=column.minWidth;if(!column.width){var finalWidth=autoWidth;if(maxWidth&&maxWidth<finalWidth){finalWidth=Math.min(maxWidth,remainedWidth);}// `minWidth` has higher priority. `minWidth` decide that wheter the
// bar is able to be visible. So `minWidth` should not be restricted
// by `maxWidth` or `remainedWidth` (which is from `bandWidth`). In
// the extreme cases for `value` axis, bars are allowed to overlap
// with each other if `minWidth` specified.
if(minWidth&&minWidth>finalWidth){finalWidth=minWidth;}if(finalWidth!==autoWidth){column.width=finalWidth;remainedWidth-=finalWidth+barGapPercent*finalWidth;autoWidthCount--;}}else{// `barMinWidth/barMaxWidth` has higher priority than `barWidth`, as
// CSS does. Becuase barWidth can be a percent value, where
// `barMaxWidth` can be used to restrict the final width.
var finalWidth=column.width;if(maxWidth){finalWidth=Math.min(finalWidth,maxWidth);}// `minWidth` has higher priority, as described above
if(minWidth){finalWidth=Math.max(finalWidth,minWidth);}column.width=finalWidth;remainedWidth-=finalWidth+barGapPercent*finalWidth;autoWidthCount--;}});// Recalculate width again
autoWidth=(remainedWidth-categoryGap)/(autoWidthCount+(autoWidthCount-1)*barGapPercent);autoWidth=Math.max(autoWidth,0);var widthSum=0;var lastColumn;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(stacks,function(column,idx){if(!column.width){column.width=autoWidth;}lastColumn=column;widthSum+=column.width*(1+barGapPercent);});if(lastColumn){widthSum-=lastColumn.width*barGapPercent;}var offset=-widthSum/2;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(stacks,function(column,stackId){result[coordSysName][stackId]=result[coordSysName][stackId]||{bandWidth:bandWidth,offset:offset,width:column.width};offset+=column.width*(1+barGapPercent);});});return result;}function retrieveColumnLayout(barWidthAndOffset,axis,seriesModel){if(barWidthAndOffset&&axis){var result=barWidthAndOffset[getAxisKey(axis)];if(result!=null&&seriesModel!=null){return result[getSeriesStackId(seriesModel)];}return result;}}function layout(seriesType,ecModel){var seriesModels=prepareLayoutBarSeries(seriesType,ecModel);var barWidthAndOffset=makeColumnLayout(seriesModels);(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(seriesModels,function(seriesModel){var data=seriesModel.getData();var cartesian=seriesModel.coordinateSystem;var baseAxis=cartesian.getBaseAxis();var stackId=getSeriesStackId(seriesModel);var columnLayoutInfo=barWidthAndOffset[getAxisKey(baseAxis)][stackId];var columnOffset=columnLayoutInfo.offset;var columnWidth=columnLayoutInfo.width;data.setLayout({bandWidth:columnLayoutInfo.bandWidth,offset:columnOffset,size:columnWidth});});}// TODO: Do not support stack in large mode yet.
function createProgressiveLayout(seriesType){return{seriesType:seriesType,plan:(0,_chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(),reset:function reset(seriesModel){if(!isOnCartesian(seriesModel)){return;}var data=seriesModel.getData();var cartesian=seriesModel.coordinateSystem;var baseAxis=cartesian.getBaseAxis();var valueAxis=cartesian.getOtherAxis(baseAxis);var valueDimIdx=data.getDimensionIndex(data.mapDimension(valueAxis.dim));var baseDimIdx=data.getDimensionIndex(data.mapDimension(baseAxis.dim));var drawBackground=seriesModel.get('showBackground',true);var valueDim=data.mapDimension(valueAxis.dim);var stackResultDim=data.getCalculationInfo('stackResultDimension');var stacked=(0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_3__/* .isDimensionStacked */ .M)(data,valueDim)&&!!data.getCalculationInfo('stackedOnSeries');var isValueAxisH=valueAxis.isHorizontal();var valueAxisStart=getValueAxisStart(baseAxis,valueAxis);var isLarge=isInLargeMode(seriesModel);var barMinHeight=seriesModel.get('barMinHeight')||0;var stackedDimIdx=stackResultDim&&data.getDimensionIndex(stackResultDim);// Layout info.
var columnWidth=data.getLayout('size');var columnOffset=data.getLayout('offset');return{progress:function progress(params,data){var count=params.count;var largePoints=isLarge&&(0,_util_vendor_js__WEBPACK_IMPORTED_MODULE_4__/* .createFloat32Array */ .o)(count*3);var largeBackgroundPoints=isLarge&&drawBackground&&(0,_util_vendor_js__WEBPACK_IMPORTED_MODULE_4__/* .createFloat32Array */ .o)(count*3);var largeDataIndices=isLarge&&(0,_util_vendor_js__WEBPACK_IMPORTED_MODULE_4__/* .createFloat32Array */ .o)(count);var coordLayout=cartesian.master.getRect();var bgSize=isValueAxisH?coordLayout.width:coordLayout.height;var dataIndex;var store=data.getStore();var idxOffset=0;while((dataIndex=params.next())!=null){var value=store.get(stacked?stackedDimIdx:valueDimIdx,dataIndex);var baseValue=store.get(baseDimIdx,dataIndex);var baseCoord=valueAxisStart;var startValue=void 0;// Because of the barMinHeight, we can not use the value in
// stackResultDimension directly.
if(stacked){startValue=+value-store.get(valueDimIdx,dataIndex);}var x=void 0;var y=void 0;var width=void 0;var height=void 0;if(isValueAxisH){var coord=cartesian.dataToPoint([value,baseValue]);if(stacked){var startCoord=cartesian.dataToPoint([startValue,baseValue]);baseCoord=startCoord[0];}x=baseCoord;y=coord[1]+columnOffset;width=coord[0]-baseCoord;height=columnWidth;if(Math.abs(width)<barMinHeight){width=(width<0?-1:1)*barMinHeight;}}else{var coord=cartesian.dataToPoint([baseValue,value]);if(stacked){var startCoord=cartesian.dataToPoint([baseValue,startValue]);baseCoord=startCoord[1];}x=coord[0]+columnOffset;y=baseCoord;width=columnWidth;height=coord[1]-baseCoord;if(Math.abs(height)<barMinHeight){// Include zero to has a positive bar
height=(height<=0?-1:1)*barMinHeight;}}if(!isLarge){data.setItemLayout(dataIndex,{x:x,y:y,width:width,height:height});}else{largePoints[idxOffset]=x;largePoints[idxOffset+1]=y;largePoints[idxOffset+2]=isValueAxisH?width:height;if(largeBackgroundPoints){largeBackgroundPoints[idxOffset]=isValueAxisH?coordLayout.x:x;largeBackgroundPoints[idxOffset+1]=isValueAxisH?y:coordLayout.y;largeBackgroundPoints[idxOffset+2]=bgSize;}largeDataIndices[dataIndex]=dataIndex;}idxOffset+=3;}if(isLarge){data.setLayout({largePoints:largePoints,largeDataIndices:largeDataIndices,largeBackgroundPoints:largeBackgroundPoints,valueAxisHorizontal:isValueAxisH});}}};}};}function isOnCartesian(seriesModel){return seriesModel.coordinateSystem&&seriesModel.coordinateSystem.type==='cartesian2d';}function isInLargeMode(seriesModel){return seriesModel.pipelineContext&&seriesModel.pipelineContext.large;}// See cases in `test/bar-start.html` and `#7412`, `#8747`.
function getValueAxisStart(baseAxis,valueAxis){return valueAxis.toGlobalCoord(valueAxis.dataToCoord(valueAxis.type==='log'?1:0));}

/***/ }),

/***/ 13329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ pointsLayout)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75187);
/* harmony import */ var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29209);
/* harmony import */ var _util_vendor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17044);
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
*/function pointsLayout(seriesType,forceStoreInTypedArray){return{seriesType:seriesType,plan:(0,_chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),reset:function reset(seriesModel){var data=seriesModel.getData();var coordSys=seriesModel.coordinateSystem;var pipelineContext=seriesModel.pipelineContext;var useTypedArray=forceStoreInTypedArray||pipelineContext.large;if(!coordSys){return;}var dims=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .map */ .UI)(coordSys.dimensions,function(dim){return data.mapDimension(dim);}).slice(0,2);var dimLen=dims.length;var stackResultDim=data.getCalculationInfo('stackResultDimension');if((0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_2__/* .isDimensionStacked */ .M)(data,dims[0])){dims[0]=stackResultDim;}if((0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_2__/* .isDimensionStacked */ .M)(data,dims[1])){dims[1]=stackResultDim;}var store=data.getStore();var dimIdx0=data.getDimensionIndex(dims[0]);var dimIdx1=data.getDimensionIndex(dims[1]);return dimLen&&{progress:function progress(params,data){var segCount=params.end-params.start;var points=useTypedArray&&(0,_util_vendor_js__WEBPACK_IMPORTED_MODULE_3__/* .createFloat32Array */ .o)(segCount*dimLen);var tmpIn=[];var tmpOut=[];for(var i=params.start,offset=0;i<params.end;i++){var point=void 0;if(dimLen===1){var x=store.get(dimIdx0,i);// NOTE: Make sure the second parameter is null to use default strategy.
point=coordSys.dataToPoint(x,null,tmpOut);}else{tmpIn[0]=store.get(dimIdx0,i);tmpIn[1]=store.get(dimIdx1,i);// Let coordinate system to handle the NaN data.
point=coordSys.dataToPoint(tmpIn,null,tmpOut);}if(useTypedArray){points[offset++]=point[0];points[offset++]=point[1];}else{data.setItemLayout(i,point.slice());}}useTypedArray&&data.setLayout('points',points);}};}};};

/***/ }),

/***/ 20021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ handleLegacySelectEvents),
/* harmony export */   "y": () => (/* binding */ createLegacyDataSelectAction)
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
*/// Legacy data selection action.
// Inlucdes: pieSelect, pieUnSelect, pieToggleSelect, mapSelect, mapUnSelect, mapToggleSelect
function createLegacyDataSelectAction(seriesType,ecRegisterAction){function getSeriesIndices(ecModel,payload){var seriesIndices=[];ecModel.eachComponent({mainType:'series',subType:seriesType,query:payload},function(seriesModel){seriesIndices.push(seriesModel.seriesIndex);});return seriesIndices;}(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)([[seriesType+'ToggleSelect','toggleSelect'],[seriesType+'Select','select'],[seriesType+'UnSelect','unselect']],function(eventsMap){ecRegisterAction(eventsMap[0],function(payload,ecModel,api){payload=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7)({},payload);if(false){}api.dispatchAction((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7)(payload,{type:eventsMap[1],seriesIndex:getSeriesIndices(ecModel,payload)}));});});}function handleSeriesLegacySelectEvents(type,eventPostfix,ecIns,ecModel,payload){var legacyEventName=type+eventPostfix;if(!ecIns.isSilent(legacyEventName)){if(false){}ecModel.eachComponent({mainType:'series',subType:'pie'},function(seriesModel){var seriesIndex=seriesModel.seriesIndex;var selectedMap=seriesModel.option.selectedMap;var selected=payload.selected;for(var i=0;i<selected.length;i++){if(selected[i].seriesIndex===seriesIndex){var data=seriesModel.getData();var dataIndex=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_1__/* .queryDataIndex */ .gO)(data,payload.fromActionPayload);ecIns.trigger(legacyEventName,{type:legacyEventName,seriesId:seriesModel.id,name:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(dataIndex)?data.getName(dataIndex[0]):data.getName(dataIndex),selected:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(selectedMap)?selectedMap:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7)({},selectedMap)});}}});}}function handleLegacySelectEvents(messageCenter,ecIns,api){messageCenter.on('selectchanged',function(params){var ecModel=api.getModel();if(params.isFromClick){handleSeriesLegacySelectEvents('map','selectchanged',ecIns,ecModel,params);handleSeriesLegacySelectEvents('pie','selectchanged',ecIns,ecModel,params);}else if(params.fromAction==='select'){handleSeriesLegacySelectEvents('map','selected',ecIns,ecModel,params);handleSeriesLegacySelectEvents('pie','selected',ecIns,ecModel,params);}else if(params.fromAction==='unselect'){handleSeriesLegacySelectEvents('map','unselected',ecIns,ecModel,params);handleSeriesLegacySelectEvents('pie','unselected',ecIns,ecModel,params);}});}

/***/ }),

/***/ 99341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ defaultLoading)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22060);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19568);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95067);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32837);
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
 * @param {module:echarts/ExtensionAPI} api
 * @param {Object} [opts]
 * @param {string} [opts.text]
 * @param {string} [opts.color]
 * @param {string} [opts.textColor]
 * @return {module:zrender/Element}
 */function defaultLoading(api,opts){opts=opts||{};zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .defaults */ .ce(opts,{text:'loading',textColor:'#000',fontSize:12,fontWeight:'normal',fontStyle:'normal',fontFamily:'sans-serif',maskColor:'rgba(255, 255, 255, 0.8)',showSpinner:true,color:'#5470c6',spinnerRadius:10,lineWidth:5,zlevel:0});var group=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();var mask=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({style:{fill:opts.maskColor},zlevel:opts.zlevel,z:10000});group.add(mask);var textContent=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP({style:{text:opts.text,fill:opts.textColor,fontSize:opts.fontSize,fontWeight:opts.fontWeight,fontStyle:opts.fontStyle,fontFamily:opts.fontFamily},zlevel:opts.zlevel,z:10001});var labelRect=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({style:{fill:'none'},textContent:textContent,textConfig:{position:'right',distance:10},zlevel:opts.zlevel,z:10001});group.add(labelRect);var arc;if(opts.showSpinner){arc=new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z({shape:{startAngle:-PI/2,endAngle:-PI/2+0.1,r:opts.spinnerRadius},style:{stroke:opts.color,lineCap:'round',lineWidth:opts.lineWidth},zlevel:opts.zlevel,z:10001});arc.animateShape(true).when(1000,{endAngle:PI*3/2}).start('circularInOut');arc.animateShape(true).when(1000,{startAngle:PI*3/2}).delay(300).start('circularInOut');group.add(arc);}// Inject resize
group.resize=function(){var textWidth=textContent.getBoundingRect().width;var r=opts.showSpinner?opts.spinnerRadius:0;// cx = (containerWidth - arcDiameter - textDistance - textWidth) / 2
// textDistance needs to be calculated when both animation and text exist
var cx=(api.getWidth()-r*2-(opts.showSpinner&&textWidth?10:0)-textWidth)/2-(opts.showSpinner&&textWidth?0:5+textWidth/2)// only show the text
+(opts.showSpinner?0:textWidth/2)// only show the spinner
+(textWidth?0:r);var cy=api.getHeight()/2;opts.showSpinner&&arc.setShape({cx:cx,cy:cy});labelRect.setShape({x:cx-r,y:cy-r,width:r*2,height:r*2});mask.setShape({x:0,y:0,width:api.getWidth(),height:api.getHeight()});};group.resize();return group;}

/***/ }),

/***/ 15022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88161);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57697);
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25118);
/* harmony import */ var _util_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36189);
/* harmony import */ var _util_clazz_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18496);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/* harmony import */ var _util_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);
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
*/var inner=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var ComponentModel=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(ComponentModel,_super);function ComponentModel(option,parentModel,ecModel){var _this=_super.call(this,option,parentModel,ecModel)||this;_this.uid=_util_component_js__WEBPACK_IMPORTED_MODULE_2__/* .getUID */ .Kr('ec_cpt_model');return _this;}ComponentModel.prototype.init=function(option,parentModel,ecModel){this.mergeDefaultAndTheme(option,ecModel);};ComponentModel.prototype.mergeDefaultAndTheme=function(option,ecModel){var layoutMode=_util_layout_js__WEBPACK_IMPORTED_MODULE_3__/* .fetchLayoutMode */ .YD(this);var inputPositionParams=layoutMode?_util_layout_js__WEBPACK_IMPORTED_MODULE_3__/* .getLayoutParams */ .tE(option):{};var themeModel=ecModel.getTheme();zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .merge */ .TS(option,themeModel.get(this.mainType));zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .merge */ .TS(option,this.getDefaultOption());if(layoutMode){_util_layout_js__WEBPACK_IMPORTED_MODULE_3__/* .mergeLayoutParam */ .dt(option,inputPositionParams,layoutMode);}};ComponentModel.prototype.mergeOption=function(option,ecModel){zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .merge */ .TS(this.option,option,true);var layoutMode=_util_layout_js__WEBPACK_IMPORTED_MODULE_3__/* .fetchLayoutMode */ .YD(this);if(layoutMode){_util_layout_js__WEBPACK_IMPORTED_MODULE_3__/* .mergeLayoutParam */ .dt(this.option,option,layoutMode);}};/**
   * Called immediately after `init` or `mergeOption` of this instance called.
   */ComponentModel.prototype.optionUpdated=function(newCptOption,isInit){};/**
   * [How to declare defaultOption]:
   *
   * (A) If using class declaration in typescript (since echarts 5):
   * ```ts
   * import {ComponentOption} from '../model/option.js';
   * export interface XxxOption extends ComponentOption {
   *     aaa: number
   * }
   * export class XxxModel extends Component {
   *     static type = 'xxx';
   *     static defaultOption: XxxOption = {
   *         aaa: 123
   *     }
   * }
   * Component.registerClass(XxxModel);
   * ```
   * ```ts
   * import {inheritDefaultOption} from '../util/component.js';
   * import {XxxModel, XxxOption} from './XxxModel.js';
   * export interface XxxSubOption extends XxxOption {
   *     bbb: number
   * }
   * class XxxSubModel extends XxxModel {
   *     static defaultOption: XxxSubOption = inheritDefaultOption(XxxModel.defaultOption, {
   *         bbb: 456
   *     })
   *     fn() {
   *         let opt = this.getDefaultOption();
   *         // opt is {aaa: 123, bbb: 456}
   *     }
   * }
   * ```
   *
   * (B) If using class extend (previous approach in echarts 3 & 4):
   * ```js
   * let XxxComponent = Component.extend({
   *     defaultOption: {
   *         xx: 123
   *     }
   * })
   * ```
   * ```js
   * let XxxSubComponent = XxxComponent.extend({
   *     defaultOption: {
   *         yy: 456
   *     },
   *     fn: function () {
   *         let opt = this.getDefaultOption();
   *         // opt is {xx: 123, yy: 456}
   *     }
   * })
   * ```
   */ComponentModel.prototype.getDefaultOption=function(){var ctor=this.constructor;// If using class declaration, it is different to travel super class
// in legacy env and auto merge defaultOption. So if using class
// declaration, defaultOption should be merged manually.
if(!(0,_util_clazz_js__WEBPACK_IMPORTED_MODULE_5__/* .isExtendedClass */ .PT)(ctor)){// When using ts class, defaultOption must be declared as static.
return ctor.defaultOption;}// FIXME: remove this approach?
var fields=inner(this);if(!fields.defaultOption){var optList=[];var clz=ctor;while(clz){var opt=clz.prototype.defaultOption;opt&&optList.push(opt);clz=clz.superClass;}var defaultOption={};for(var i=optList.length-1;i>=0;i--){defaultOption=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .merge */ .TS(defaultOption,optList[i],true);}fields.defaultOption=defaultOption;}return fields.defaultOption;};/**
   * Notice: always force to input param `useDefault` in case that forget to consider it.
   * The same behavior as `modelUtil.parseFinder`.
   *
   * @param useDefault In many cases like series refer axis and axis refer grid,
   *        If axis index / axis id not specified, use the first target as default.
   *        In other cases like dataZoom refer axis, if not specified, measn no refer.
   */ComponentModel.prototype.getReferringComponents=function(mainType,opt){var indexKey=mainType+'Index';var idKey=mainType+'Id';return (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .queryReferringComponents */ .HZ)(this.ecModel,mainType,{index:this.get(indexKey,true),id:this.get(idKey,true)},opt);};ComponentModel.prototype.getBoxLayoutParams=function(){// Consider itself having box layout configs.
var boxLayoutModel=this;return{left:boxLayoutModel.get('left'),top:boxLayoutModel.get('top'),right:boxLayoutModel.get('right'),bottom:boxLayoutModel.get('bottom'),width:boxLayoutModel.get('width'),height:boxLayoutModel.get('height')};};/**
   * Get key for zlevel.
   * If developers don't configure zlevel. We will assign zlevel to series based on the key.
   * For example, lines with trail effect and progressive series will in an individual zlevel.
   */ComponentModel.prototype.getZLevelKey=function(){return'';};ComponentModel.prototype.setZLevel=function(zlevel){this.option.zlevel=zlevel;};ComponentModel.protoInitialize=function(){var proto=ComponentModel.prototype;proto.type='component';proto.id='';proto.name='';proto.mainType='';proto.subType='';proto.componentIndex=0;}();return ComponentModel;}(_Model_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);(0,_util_clazz_js__WEBPACK_IMPORTED_MODULE_5__/* .mountExtend */ .pw)(ComponentModel,_Model_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);(0,_util_clazz_js__WEBPACK_IMPORTED_MODULE_5__/* .enableClassManagement */ .au)(ComponentModel);_util_component_js__WEBPACK_IMPORTED_MODULE_2__/* .enableSubTypeDefaulter */ .cj(ComponentModel);_util_component_js__WEBPACK_IMPORTED_MODULE_2__/* .enableTopologicalTravel */ .jS(ComponentModel,getDependencies);function getDependencies(componentType){var deps=[];zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .each */ .S6(ComponentModel.getClassesByMainType(componentType),function(clz){deps=deps.concat(clz.dependencies||clz.prototype.dependencies||[]);});// Ensure main type.
deps=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .map */ .UI(deps,function(type){return (0,_util_clazz_js__WEBPACK_IMPORTED_MODULE_5__/* .parseClassType */ .u9)(type).main;});// Hack dataset for convenience.
if(componentType!=='dataset'&&zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .indexOf */ .cq(deps,'dataset')<=0){deps.unshift('dataset');}return deps;}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentModel);

/***/ }),

/***/ 44015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Global)
});

// EXTERNAL MODULE: ../my-cli/node_modules/echarts/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(88161);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(25118);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(15022);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/model/globalDefault.js
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
*/var platform='';// Navigator not exists in node
if(typeof navigator!=='undefined'){/* global navigator */platform=navigator.platform||'';}var decalColor='rgba(0, 0, 0, 0.2)';/* harmony default export */ const globalDefault = ({darkMode:'auto',// backgroundColor: 'rgba(0,0,0,0)',
colorBy:'series',color:['#5470c6','#91cc75','#fac858','#ee6666','#73c0de','#3ba272','#fc8452','#9a60b4','#ea7ccc'],gradientColor:['#f6efa6','#d88273','#bf444c'],aria:{decal:{decals:[{color:decalColor,dashArrayX:[1,0],dashArrayY:[2,5],symbolSize:1,rotation:Math.PI/6},{color:decalColor,symbol:'circle',dashArrayX:[[8,8],[0,8,8,0]],dashArrayY:[6,0],symbolSize:0.8},{color:decalColor,dashArrayX:[1,0],dashArrayY:[4,3],rotation:-Math.PI/4},{color:decalColor,dashArrayX:[[6,6],[0,6,6,0]],dashArrayY:[6,0]},{color:decalColor,dashArrayX:[[1,0],[1,6]],dashArrayY:[1,0,6,0],rotation:Math.PI/4},{color:decalColor,symbol:'triangle',dashArrayX:[[9,9],[0,9,9,0]],dashArrayY:[7,2],symbolSize:0.75}]}},// If xAxis and yAxis declared, grid is created by default.
// grid: {},
textStyle:{// color: '#000',
// decoration: 'none',
// PENDING
fontFamily:platform.match(/^Win/)?'Microsoft YaHei':'sans-serif',// fontFamily: 'Arial, Verdana, sans-serif',
fontSize:12,fontStyle:'normal',fontWeight:'normal'},// http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
// Default is source-over
blendMode:null,stateAnimation:{duration:300,easing:'cubicOut'},animation:'auto',animationDuration:1000,animationDurationUpdate:500,animationEasing:'cubicInOut',animationEasingUpdate:'cubicInOut',animationThreshold:2000,// Configuration for progressive/incremental rendering
progressiveThreshold:3000,progressive:400,// Threshold of if use single hover layer to optimize.
// It is recommended that `hoverLayerThreshold` is equivalent to or less than
// `progressiveThreshold`, otherwise hover will cause restart of progressive,
// which is unexpected.
// see example <echarts/test/heatmap-large.html>.
hoverLayerThreshold:3000,// See: module:echarts/scale/Time
useUTC:false});
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/data/helper/sourceHelper.js
var sourceHelper = __webpack_require__(47386);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/model/internalComponentCreator.js
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
*/var internalOptionCreatorMap=(0,util/* createHashMap */.kW)();function registerInternalOptionCreator(mainType,creator){assert(internalOptionCreatorMap.get(mainType)==null&&creator);internalOptionCreatorMap.set(mainType,creator);}function concatInternalOptions(ecModel,mainType,newCmptOptionList){var internalOptionCreator=internalOptionCreatorMap.get(mainType);if(!internalOptionCreator){return newCmptOptionList;}var internalOptions=internalOptionCreator(ecModel);if(!internalOptions){return newCmptOptionList;}if(false){ var i; }return newCmptOptionList.concat(internalOptions);}
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/mixin/palette.js
var palette = __webpack_require__(56064);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/model/Global.js
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
 * Caution: If the mechanism should be changed some day, these cases
 * should be considered:
 *
 * (1) In `merge option` mode, if using the same option to call `setOption`
 * many times, the result should be the same (try our best to ensure that).
 * (2) In `merge option` mode, if a component has no id/name specified, it
 * will be merged by index, and the result sequence of the components is
 * consistent to the original sequence.
 * (3) In `replaceMerge` mode, keep the result sequence of the components is
 * consistent to the original sequence, even though there might result in "hole".
 * (4) `reset` feature (in toolbox). Find detailed info in comments about
 * `mergeOption` in module:echarts/model/OptionManager.
 */// -----------------------
// Internal method names:
// -----------------------
var reCreateSeriesIndices;var assertSeriesInitialized;var initBase;var OPTION_INNER_KEY='\0_ec_inner';var OPTION_INNER_VALUE=1;var BUITIN_COMPONENTS_MAP={grid:'GridComponent',polar:'PolarComponent',geo:'GeoComponent',singleAxis:'SingleAxisComponent',parallel:'ParallelComponent',calendar:'CalendarComponent',graphic:'GraphicComponent',toolbox:'ToolboxComponent',tooltip:'TooltipComponent',axisPointer:'AxisPointerComponent',brush:'BrushComponent',title:'TitleComponent',timeline:'TimelineComponent',markPoint:'MarkPointComponent',markLine:'MarkLineComponent',markArea:'MarkAreaComponent',legend:'LegendComponent',dataZoom:'DataZoomComponent',visualMap:'VisualMapComponent',// aria: 'AriaComponent',
// dataset: 'DatasetComponent',
// Dependencies
xAxis:'GridComponent',yAxis:'GridComponent',angleAxis:'PolarComponent',radiusAxis:'PolarComponent'};var BUILTIN_CHARTS_MAP={line:'LineChart',bar:'BarChart',pie:'PieChart',scatter:'ScatterChart',radar:'RadarChart',map:'MapChart',tree:'TreeChart',treemap:'TreemapChart',graph:'GraphChart',gauge:'GaugeChart',funnel:'FunnelChart',parallel:'ParallelChart',sankey:'SankeyChart',boxplot:'BoxplotChart',candlestick:'CandlestickChart',effectScatter:'EffectScatterChart',lines:'LinesChart',heatmap:'HeatmapChart',pictorialBar:'PictorialBarChart',themeRiver:'ThemeRiverChart',sunburst:'SunburstChart',custom:'CustomChart'};var componetsMissingLogPrinted={};function checkMissingComponents(option){each(option,function(componentOption,mainType){if(!ComponentModel.hasClass(mainType)){var componentImportName=BUITIN_COMPONENTS_MAP[mainType];if(componentImportName&&!componetsMissingLogPrinted[componentImportName]){error("Component "+mainType+" is used but not imported.\nimport { "+componentImportName+" } from 'echarts/components';\necharts.use(["+componentImportName+"]);");componetsMissingLogPrinted[componentImportName]=true;}}});}var GlobalModel=/** @class */function(_super){(0,tslib_es6/* __extends */.ZT)(GlobalModel,_super);function GlobalModel(){return _super!==null&&_super.apply(this,arguments)||this;}GlobalModel.prototype.init=function(option,parentModel,ecModel,theme,locale,optionManager){theme=theme||{};this.option=null;// Mark as not initialized.
this._theme=new Model/* default */.Z(theme);this._locale=new Model/* default */.Z(locale);this._optionManager=optionManager;};GlobalModel.prototype.setOption=function(option,opts,optionPreprocessorFuncs){if(false){}var innerOpt=normalizeSetOptionInput(opts);this._optionManager.setOption(option,optionPreprocessorFuncs,innerOpt);this._resetOption(null,innerOpt);};/**
   * @param type null/undefined: reset all.
   *        'recreate': force recreate all.
   *        'timeline': only reset timeline option
   *        'media': only reset media query option
   * @return Whether option changed.
   */GlobalModel.prototype.resetOption=function(type,opt){return this._resetOption(type,normalizeSetOptionInput(opt));};GlobalModel.prototype._resetOption=function(type,opt){var optionChanged=false;var optionManager=this._optionManager;if(!type||type==='recreate'){var baseOption=optionManager.mountOption(type==='recreate');if(false){}if(!this.option||type==='recreate'){initBase(this,baseOption);}else{this.restoreData();this._mergeOption(baseOption,opt);}optionChanged=true;}if(type==='timeline'||type==='media'){this.restoreData();}// By design, if `setOption(option2)` at the second time, and `option2` is a `ECUnitOption`,
// it should better not have the same props with `MediaUnit['option']`.
// Becuase either `option2` or `MediaUnit['option']` will be always merged to "current option"
// rather than original "baseOption". If they both override a prop, the result might be
// unexpected when media state changed after `setOption` called.
// If we really need to modify a props in each `MediaUnit['option']`, use the full version
// (`{baseOption, media}`) in `setOption`.
// For `timeline`, the case is the same.
if(!type||type==='recreate'||type==='timeline'){var timelineOption=optionManager.getTimelineOption(this);if(timelineOption){optionChanged=true;this._mergeOption(timelineOption,opt);}}if(!type||type==='recreate'||type==='media'){var mediaOptions=optionManager.getMediaOption(this);if(mediaOptions.length){(0,util/* each */.S6)(mediaOptions,function(mediaOption){optionChanged=true;this._mergeOption(mediaOption,opt);},this);}}return optionChanged;};GlobalModel.prototype.mergeOption=function(option){this._mergeOption(option,null);};GlobalModel.prototype._mergeOption=function(newOption,opt){var option=this.option;var componentsMap=this._componentsMap;var componentsCount=this._componentsCount;var newCmptTypes=[];var newCmptTypeMap=(0,util/* createHashMap */.kW)();var replaceMergeMainTypeMap=opt&&opt.replaceMergeMainTypeMap;(0,sourceHelper/* resetSourceDefaulter */.md)(this);// If no component class, merge directly.
// For example: color, animaiton options, etc.
(0,util/* each */.S6)(newOption,function(componentOption,mainType){if(componentOption==null){return;}if(!Component/* default.hasClass */.Z.hasClass(mainType)){// globalSettingTask.dirty();
option[mainType]=option[mainType]==null?(0,util/* clone */.d9)(componentOption):(0,util/* merge */.TS)(option[mainType],componentOption,true);}else if(mainType){newCmptTypes.push(mainType);newCmptTypeMap.set(mainType,true);}});if(replaceMergeMainTypeMap){// If there is a mainType `xxx` in `replaceMerge` but not declared in option,
// we trade it as it is declared in option as `{xxx: []}`. Because:
// (1) for normal merge, `{xxx: null/undefined}` are the same meaning as `{xxx: []}`.
// (2) some preprocessor may convert some of `{xxx: null/undefined}` to `{xxx: []}`.
replaceMergeMainTypeMap.each(function(val,mainTypeInReplaceMerge){if(Component/* default.hasClass */.Z.hasClass(mainTypeInReplaceMerge)&&!newCmptTypeMap.get(mainTypeInReplaceMerge)){newCmptTypes.push(mainTypeInReplaceMerge);newCmptTypeMap.set(mainTypeInReplaceMerge,true);}});}Component/* default.topologicalTravel */.Z.topologicalTravel(newCmptTypes,Component/* default.getAllClassMainTypes */.Z.getAllClassMainTypes(),visitComponent,this);function visitComponent(mainType){var newCmptOptionList=concatInternalOptions(this,mainType,model/* normalizeToArray */.kF(newOption[mainType]));var oldCmptList=componentsMap.get(mainType);var mergeMode=// `!oldCmptList` means init. See the comment in `mappingToExists`
!oldCmptList?'replaceAll':replaceMergeMainTypeMap&&replaceMergeMainTypeMap.get(mainType)?'replaceMerge':'normalMerge';var mappingResult=model/* mappingToExists */.ab(oldCmptList,newCmptOptionList,mergeMode);// Set mainType and complete subType.
model/* setComponentTypeToKeyInfo */.O0(mappingResult,mainType,Component/* default */.Z);// Empty it before the travel, in order to prevent `this._componentsMap`
// from being used in the `init`/`mergeOption`/`optionUpdated` of some
// components, which is probably incorrect logic.
option[mainType]=null;componentsMap.set(mainType,null);componentsCount.set(mainType,0);var optionsByMainType=[];var cmptsByMainType=[];var cmptsCountByMainType=0;var tooltipExists;var tooltipWarningLogged;(0,util/* each */.S6)(mappingResult,function(resultItem,index){var componentModel=resultItem.existing;var newCmptOption=resultItem.newOption;if(!newCmptOption){if(componentModel){// Consider where is no new option and should be merged using {},
// see removeEdgeAndAdd in topologicalTravel and
// ComponentModel.getAllClassMainTypes.
componentModel.mergeOption({},this);componentModel.optionUpdated({},false);}// If no both `resultItem.exist` and `resultItem.option`,
// either it is in `replaceMerge` and not matched by any id,
// or it has been removed in previous `replaceMerge` and left a "hole" in this component index.
}else{var isSeriesType=mainType==='series';var ComponentModelClass=Component/* default.getClass */.Z.getClass(mainType,resultItem.keyInfo.subType,!isSeriesType// Give a more detailed warn later if series don't exists
);if(!ComponentModelClass){if(false){ var seriesImportName, subType; }return;}// TODO Before multiple tooltips get supported, we do this check to avoid unexpected exception.
if(mainType==='tooltip'){if(tooltipExists){if(false){}return;}tooltipExists=true;}if(componentModel&&componentModel.constructor===ComponentModelClass){componentModel.name=resultItem.keyInfo.name;// componentModel.settingTask && componentModel.settingTask.dirty();
componentModel.mergeOption(newCmptOption,this);componentModel.optionUpdated(newCmptOption,false);}else{// PENDING Global as parent ?
var extraOpt=(0,util/* extend */.l7)({componentIndex:index},resultItem.keyInfo);componentModel=new ComponentModelClass(newCmptOption,this,this,extraOpt);// Assign `keyInfo`
(0,util/* extend */.l7)(componentModel,extraOpt);if(resultItem.brandNew){componentModel.__requireNewView=true;}componentModel.init(newCmptOption,this,this);// Call optionUpdated after init.
// newCmptOption has been used as componentModel.option
// and may be merged with theme and default, so pass null
// to avoid confusion.
componentModel.optionUpdated(null,true);}}if(componentModel){optionsByMainType.push(componentModel.option);cmptsByMainType.push(componentModel);cmptsCountByMainType++;}else{// Always do assign to avoid elided item in array.
optionsByMainType.push(void 0);cmptsByMainType.push(void 0);}},this);option[mainType]=optionsByMainType;componentsMap.set(mainType,cmptsByMainType);componentsCount.set(mainType,cmptsCountByMainType);// Backup series for filtering.
if(mainType==='series'){reCreateSeriesIndices(this);}}// If no series declared, ensure `_seriesIndices` initialized.
if(!this._seriesIndices){reCreateSeriesIndices(this);}};/**
   * Get option for output (cloned option and inner info removed)
   */GlobalModel.prototype.getOption=function(){var option=(0,util/* clone */.d9)(this.option);(0,util/* each */.S6)(option,function(optInMainType,mainType){if(Component/* default.hasClass */.Z.hasClass(mainType)){var opts=model/* normalizeToArray */.kF(optInMainType);// Inner cmpts need to be removed.
// Inner cmpts might not be at last since ec5.0, but still
// compatible for users: if inner cmpt at last, splice the returned array.
var realLen=opts.length;var metNonInner=false;for(var i=realLen-1;i>=0;i--){// Remove options with inner id.
if(opts[i]&&!model/* isComponentIdInternal */.lY(opts[i])){metNonInner=true;}else{opts[i]=null;!metNonInner&&realLen--;}}opts.length=realLen;option[mainType]=opts;}});delete option[OPTION_INNER_KEY];return option;};GlobalModel.prototype.getTheme=function(){return this._theme;};GlobalModel.prototype.getLocaleModel=function(){return this._locale;};GlobalModel.prototype.setUpdatePayload=function(payload){this._payload=payload;};GlobalModel.prototype.getUpdatePayload=function(){return this._payload;};/**
   * @param idx If not specified, return the first one.
   */GlobalModel.prototype.getComponent=function(mainType,idx){var list=this._componentsMap.get(mainType);if(list){var cmpt=list[idx||0];if(cmpt){return cmpt;}else if(idx==null){for(var i=0;i<list.length;i++){if(list[i]){return list[i];}}}}};/**
   * @return Never be null/undefined.
   */GlobalModel.prototype.queryComponents=function(condition){var mainType=condition.mainType;if(!mainType){return[];}var index=condition.index;var id=condition.id;var name=condition.name;var cmpts=this._componentsMap.get(mainType);if(!cmpts||!cmpts.length){return[];}var result;if(index!=null){result=[];(0,util/* each */.S6)(model/* normalizeToArray */.kF(index),function(idx){cmpts[idx]&&result.push(cmpts[idx]);});}else if(id!=null){result=queryByIdOrName('id',id,cmpts);}else if(name!=null){result=queryByIdOrName('name',name,cmpts);}else{// Return all non-empty components in that mainType
result=(0,util/* filter */.hX)(cmpts,function(cmpt){return!!cmpt;});}return filterBySubType(result,condition);};/**
   * The interface is different from queryComponents,
   * which is convenient for inner usage.
   *
   * @usage
   * let result = findComponents(
   *     {mainType: 'dataZoom', query: {dataZoomId: 'abc'}}
   * );
   * let result = findComponents(
   *     {mainType: 'series', subType: 'pie', query: {seriesName: 'uio'}}
   * );
   * let result = findComponents(
   *     {mainType: 'series',
   *     filter: function (model, index) {...}}
   * );
   * // result like [component0, componnet1, ...]
   */GlobalModel.prototype.findComponents=function(condition){var query=condition.query;var mainType=condition.mainType;var queryCond=getQueryCond(query);var result=queryCond?this.queryComponents(queryCond)// Retrieve all non-empty components.
:(0,util/* filter */.hX)(this._componentsMap.get(mainType),function(cmpt){return!!cmpt;});return doFilter(filterBySubType(result,condition));function getQueryCond(q){var indexAttr=mainType+'Index';var idAttr=mainType+'Id';var nameAttr=mainType+'Name';return q&&(q[indexAttr]!=null||q[idAttr]!=null||q[nameAttr]!=null)?{mainType:mainType,// subType will be filtered finally.
index:q[indexAttr],id:q[idAttr],name:q[nameAttr]}:null;}function doFilter(res){return condition.filter?(0,util/* filter */.hX)(res,condition.filter):res;}};GlobalModel.prototype.eachComponent=function(mainType,cb,context){var componentsMap=this._componentsMap;if((0,util/* isFunction */.mf)(mainType)){var ctxForAll_1=cb;var cbForAll_1=mainType;componentsMap.each(function(cmpts,componentType){for(var i=0;cmpts&&i<cmpts.length;i++){var cmpt=cmpts[i];cmpt&&cbForAll_1.call(ctxForAll_1,componentType,cmpt,cmpt.componentIndex);}});}else{var cmpts=(0,util/* isString */.HD)(mainType)?componentsMap.get(mainType):(0,util/* isObject */.Kn)(mainType)?this.findComponents(mainType):null;for(var i=0;cmpts&&i<cmpts.length;i++){var cmpt=cmpts[i];cmpt&&cb.call(context,cmpt,cmpt.componentIndex);}}};/**
   * Get series list before filtered by name.
   */GlobalModel.prototype.getSeriesByName=function(name){var nameStr=model/* convertOptionIdName */.U5(name,null);return (0,util/* filter */.hX)(this._componentsMap.get('series'),function(oneSeries){return!!oneSeries&&nameStr!=null&&oneSeries.name===nameStr;});};/**
   * Get series list before filtered by index.
   */GlobalModel.prototype.getSeriesByIndex=function(seriesIndex){return this._componentsMap.get('series')[seriesIndex];};/**
   * Get series list before filtered by type.
   * FIXME: rename to getRawSeriesByType?
   */GlobalModel.prototype.getSeriesByType=function(subType){return (0,util/* filter */.hX)(this._componentsMap.get('series'),function(oneSeries){return!!oneSeries&&oneSeries.subType===subType;});};/**
   * Get all series before filtered.
   */GlobalModel.prototype.getSeries=function(){return (0,util/* filter */.hX)(this._componentsMap.get('series'),function(oneSeries){return!!oneSeries;});};/**
   * Count series before filtered.
   */GlobalModel.prototype.getSeriesCount=function(){return this._componentsCount.get('series');};/**
   * After filtering, series may be different
   * frome raw series.
   */GlobalModel.prototype.eachSeries=function(cb,context){assertSeriesInitialized(this);(0,util/* each */.S6)(this._seriesIndices,function(rawSeriesIndex){var series=this._componentsMap.get('series')[rawSeriesIndex];cb.call(context,series,rawSeriesIndex);},this);};/**
   * Iterate raw series before filtered.
   *
   * @param {Function} cb
   * @param {*} context
   */GlobalModel.prototype.eachRawSeries=function(cb,context){(0,util/* each */.S6)(this._componentsMap.get('series'),function(series){series&&cb.call(context,series,series.componentIndex);});};/**
   * After filtering, series may be different.
   * frome raw series.
   */GlobalModel.prototype.eachSeriesByType=function(subType,cb,context){assertSeriesInitialized(this);(0,util/* each */.S6)(this._seriesIndices,function(rawSeriesIndex){var series=this._componentsMap.get('series')[rawSeriesIndex];if(series.subType===subType){cb.call(context,series,rawSeriesIndex);}},this);};/**
   * Iterate raw series before filtered of given type.
   */GlobalModel.prototype.eachRawSeriesByType=function(subType,cb,context){return (0,util/* each */.S6)(this.getSeriesByType(subType),cb,context);};GlobalModel.prototype.isSeriesFiltered=function(seriesModel){assertSeriesInitialized(this);return this._seriesIndicesMap.get(seriesModel.componentIndex)==null;};GlobalModel.prototype.getCurrentSeriesIndices=function(){return(this._seriesIndices||[]).slice();};GlobalModel.prototype.filterSeries=function(cb,context){assertSeriesInitialized(this);var newSeriesIndices=[];(0,util/* each */.S6)(this._seriesIndices,function(seriesRawIdx){var series=this._componentsMap.get('series')[seriesRawIdx];cb.call(context,series,seriesRawIdx)&&newSeriesIndices.push(seriesRawIdx);},this);this._seriesIndices=newSeriesIndices;this._seriesIndicesMap=(0,util/* createHashMap */.kW)(newSeriesIndices);};GlobalModel.prototype.restoreData=function(payload){reCreateSeriesIndices(this);var componentsMap=this._componentsMap;var componentTypes=[];componentsMap.each(function(components,componentType){if(Component/* default.hasClass */.Z.hasClass(componentType)){componentTypes.push(componentType);}});Component/* default.topologicalTravel */.Z.topologicalTravel(componentTypes,Component/* default.getAllClassMainTypes */.Z.getAllClassMainTypes(),function(componentType){(0,util/* each */.S6)(componentsMap.get(componentType),function(component){if(component&&(componentType!=='series'||!isNotTargetSeries(component,payload))){component.restoreData();}});});};GlobalModel.internalField=function(){reCreateSeriesIndices=function reCreateSeriesIndices(ecModel){var seriesIndices=ecModel._seriesIndices=[];(0,util/* each */.S6)(ecModel._componentsMap.get('series'),function(series){// series may have been removed by `replaceMerge`.
series&&seriesIndices.push(series.componentIndex);});ecModel._seriesIndicesMap=(0,util/* createHashMap */.kW)(seriesIndices);};assertSeriesInitialized=function assertSeriesInitialized(ecModel){// Components that use _seriesIndices should depends on series component,
// which make sure that their initialization is after series.
if(false){}};initBase=function initBase(ecModel,baseOption){// Using OPTION_INNER_KEY to mark that this option can not be used outside,
// i.e. `chart.setOption(chart.getModel().option);` is forbiden.
ecModel.option={};ecModel.option[OPTION_INNER_KEY]=OPTION_INNER_VALUE;// Init with series: [], in case of calling findSeries method
// before series initialized.
ecModel._componentsMap=(0,util/* createHashMap */.kW)({series:[]});ecModel._componentsCount=(0,util/* createHashMap */.kW)();// If user spefied `option.aria`, aria will be enable. This detection should be
// performed before theme and globalDefault merge.
var airaOption=baseOption.aria;if((0,util/* isObject */.Kn)(airaOption)&&airaOption.enabled==null){airaOption.enabled=true;}mergeTheme(baseOption,ecModel._theme.option);// TODO Needs clone when merging to the unexisted property
(0,util/* merge */.TS)(baseOption,globalDefault,false);ecModel._mergeOption(baseOption,null);};}();return GlobalModel;}(Model/* default */.Z);function isNotTargetSeries(seriesModel,payload){if(payload){var index=payload.seriesIndex;var id=payload.seriesId;var name_1=payload.seriesName;return index!=null&&seriesModel.componentIndex!==index||id!=null&&seriesModel.id!==id||name_1!=null&&seriesModel.name!==name_1;}}function mergeTheme(option,theme){// PENDING
// NOT use `colorLayer` in theme if option has `color`
var notMergeColorLayer=option.color&&!option.colorLayer;(0,util/* each */.S6)(theme,function(themeItem,name){if(name==='colorLayer'&&notMergeColorLayer){return;}// If it is component model mainType, the model handles that merge later.
// otherwise, merge them here.
if(!Component/* default.hasClass */.Z.hasClass(name)){if(_typeof(themeItem)==='object'){option[name]=!option[name]?(0,util/* clone */.d9)(themeItem):(0,util/* merge */.TS)(option[name],themeItem,false);}else{if(option[name]==null){option[name]=themeItem;}}}});}function queryByIdOrName(attr,idOrName,cmpts){// Here is a break from echarts4: string and number are
// treated as equal.
if((0,util/* isArray */.kJ)(idOrName)){var keyMap_1=(0,util/* createHashMap */.kW)();(0,util/* each */.S6)(idOrName,function(idOrNameItem){if(idOrNameItem!=null){var idName=model/* convertOptionIdName */.U5(idOrNameItem,null);idName!=null&&keyMap_1.set(idOrNameItem,true);}});return (0,util/* filter */.hX)(cmpts,function(cmpt){return cmpt&&keyMap_1.get(cmpt[attr]);});}else{var idName_1=model/* convertOptionIdName */.U5(idOrName,null);return (0,util/* filter */.hX)(cmpts,function(cmpt){return cmpt&&idName_1!=null&&cmpt[attr]===idName_1;});}}function filterBySubType(components,condition){// Using hasOwnProperty for restrict. Consider
// subType is undefined in user payload.
return condition.hasOwnProperty('subType')?(0,util/* filter */.hX)(components,function(cmpt){return cmpt&&cmpt.subType===condition.subType;}):components;}function normalizeSetOptionInput(opts){var replaceMergeMainTypeMap=(0,util/* createHashMap */.kW)();opts&&(0,util/* each */.S6)(model/* normalizeToArray */.kF(opts.replaceMerge),function(mainType){if(false){}replaceMergeMainTypeMap.set(mainType,true);});return{replaceMergeMainTypeMap:replaceMergeMainTypeMap};}(0,util/* mixin */.jB)(GlobalModel,palette/* PaletteMixin */._);/* harmony default export */ const Global = (GlobalModel);

/***/ }),

/***/ 25118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ model_Model)
});

// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(9959);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/clazz.js
var clazz = __webpack_require__(18496);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/mixin/makeStyleMapper.js
var makeStyleMapper = __webpack_require__(14598);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/model/mixin/areaStyle.js
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
*/var AREA_STYLE_KEY_MAP=[['fill','color'],['shadowBlur'],['shadowOffsetX'],['shadowOffsetY'],['opacity'],['shadowColor']// Option decal is in `DecalObject` but style.decal is in `PatternObject`.
// So do not transfer decal directly.
];var getAreaStyle=(0,makeStyleMapper/* default */.Z)(AREA_STYLE_KEY_MAP);var AreaStyleMixin=/** @class */function(){function AreaStyleMixin(){}AreaStyleMixin.prototype.getAreaStyle=function(excludes,includes){return getAreaStyle(this,excludes,includes);};return AreaStyleMixin;}();;
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(9610);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/graphic/Text.js + 1 modules
var Text = __webpack_require__(95067);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/model/mixin/textStyle.js
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
*/var PATH_COLOR=['textStyle','color'];var textStyleParams=['fontStyle','fontWeight','fontSize','fontFamily','padding','lineHeight','rich','width','height','overflow'];// TODO Performance improvement?
var tmpText=new Text/* default */.ZP();var TextStyleMixin=/** @class */function(){function TextStyleMixin(){}/**
   * Get color property or get color from option.textStyle.color
   */ // TODO Callback
TextStyleMixin.prototype.getTextColor=function(isEmphasis){var ecModel=this.ecModel;return this.getShallow('color')||(!isEmphasis&&ecModel?ecModel.get(PATH_COLOR):null);};/**
   * Create font string from fontStyle, fontWeight, fontSize, fontFamily
   * @return {string}
   */TextStyleMixin.prototype.getFont=function(){return (0,labelStyle/* getFont */.qT)({fontStyle:this.getShallow('fontStyle'),fontWeight:this.getShallow('fontWeight'),fontSize:this.getShallow('fontSize'),fontFamily:this.getShallow('fontFamily')},this.ecModel);};TextStyleMixin.prototype.getTextRect=function(text){var style={text:text,verticalAlign:this.getShallow('verticalAlign')||this.getShallow('baseline')};for(var i=0;i<textStyleParams.length;i++){style[textStyleParams[i]]=this.getShallow(textStyleParams[i]);}tmpText.useStyle(style);tmpText.update();return tmpText.getBoundingRect();};return TextStyleMixin;}();;/* harmony default export */ const textStyle = (TextStyleMixin);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/mixin/lineStyle.js
var lineStyle = __webpack_require__(35448);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/model/mixin/itemStyle.js
var itemStyle = __webpack_require__(68008);
// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/model/Model.js
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
*/var Model=/** @class */function(){function Model(option,parentModel,ecModel){this.parentModel=parentModel;this.ecModel=ecModel;this.option=option;// Simple optimization
// if (this.init) {
//     if (arguments.length <= 4) {
//         this.init(option, parentModel, ecModel, extraOpt);
//     }
//     else {
//         this.init.apply(this, arguments);
//     }
// }
}Model.prototype.init=function(option,parentModel,ecModel){var rest=[];for(var _i=3;_i<arguments.length;_i++){rest[_i-3]=arguments[_i];}};/**
   * Merge the input option to me.
   */Model.prototype.mergeOption=function(option,ecModel){(0,util/* merge */.TS)(this.option,option,true);};// `path` can be 'a.b.c', so the return value type have to be `ModelOption`
// TODO: TYPE strict key check?
// get(path: string | string[], ignoreParent?: boolean): ModelOption;
Model.prototype.get=function(path,ignoreParent){if(path==null){return this.option;}return this._doGet(this.parsePath(path),!ignoreParent&&this.parentModel);};Model.prototype.getShallow=function(key,ignoreParent){var option=this.option;var val=option==null?option:option[key];if(val==null&&!ignoreParent){var parentModel=this.parentModel;if(parentModel){// FIXME:TS do not know how to make it works
val=parentModel.getShallow(key);}}return val;};// `path` can be 'a.b.c', so the return value type have to be `Model<ModelOption>`
// getModel(path: string | string[], parentModel?: Model): Model;
// TODO 'a.b.c' is deprecated
Model.prototype.getModel=function(path,parentModel){var hasPath=path!=null;var pathFinal=hasPath?this.parsePath(path):null;var obj=hasPath?this._doGet(pathFinal):this.option;parentModel=parentModel||this.parentModel&&this.parentModel.getModel(this.resolveParentPath(pathFinal));return new Model(obj,parentModel,this.ecModel);};/**
   * If model has option
   */Model.prototype.isEmpty=function(){return this.option==null;};Model.prototype.restoreData=function(){};// Pending
Model.prototype.clone=function(){var Ctor=this.constructor;return new Ctor((0,util/* clone */.d9)(this.option));};// setReadOnly(properties): void {
// clazzUtil.setReadOnly(this, properties);
// }
// If path is null/undefined, return null/undefined.
Model.prototype.parsePath=function(path){if(typeof path==='string'){return path.split('.');}return path;};// Resolve path for parent. Perhaps useful when parent use a different property.
// Default to be a identity resolver.
// Can be modified to a different resolver.
Model.prototype.resolveParentPath=function(path){return path;};// FIXME:TS check whether put this method here
Model.prototype.isAnimationEnabled=function(){if(!env/* default.node */.Z.node&&this.option){if(this.option.animation!=null){return!!this.option.animation;}else if(this.parentModel){return this.parentModel.isAnimationEnabled();}}};Model.prototype._doGet=function(pathArr,parentModel){var obj=this.option;if(!pathArr){return obj;}for(var i=0;i<pathArr.length;i++){// Ignore empty
if(!pathArr[i]){continue;}// obj could be number/string/... (like 0)
obj=obj&&_typeof(obj)==='object'?obj[pathArr[i]]:null;if(obj==null){break;}}if(obj==null&&parentModel){obj=parentModel._doGet(this.resolveParentPath(pathArr),parentModel.parentModel);}return obj;};return Model;}();;// Enable Model.extend.
(0,clazz/* enableClassExtend */.dm)(Model);(0,clazz/* enableClassCheck */.Qj)(Model);(0,util/* mixin */.jB)(Model,lineStyle/* LineStyleMixin */.K);(0,util/* mixin */.jB)(Model,itemStyle/* ItemStyleMixin */.D);(0,util/* mixin */.jB)(Model,AreaStyleMixin);(0,util/* mixin */.jB)(Model,textStyle);/* harmony default export */ const model_Model = (Model);

/***/ }),

/***/ 97202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23958);
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
*/var QUERY_REG=/^(min|max)?(.+)$/;// Key: mainType
// type FakeComponentsMap = HashMap<(MappingExistingItem & { subType: string })[]>;
/**
 * TERM EXPLANATIONS:
 * See `ECOption` and `ECUnitOption` in `src/util/types.ts`.
 */var OptionManager=/** @class */function(){// timeline.notMerge is not supported in ec3. Firstly there is rearly
// case that notMerge is needed. Secondly supporting 'notMerge' requires
// rawOption cloned and backuped when timeline changed, which does no
// good to performance. What's more, that both timeline and setOption
// method supply 'notMerge' brings complex and some problems.
// Consider this case:
// (step1) chart.setOption({timeline: {notMerge: false}, ...}, false);
// (step2) chart.setOption({timeline: {notMerge: true}, ...}, false);
function OptionManager(api){this._timelineOptions=[];this._mediaList=[];/**
     * -1, means default.
     * empty means no media.
     */this._currentMediaIndices=[];this._api=api;}OptionManager.prototype.setOption=function(rawOption,optionPreprocessorFuncs,opt){if(rawOption){// That set dat primitive is dangerous if user reuse the data when setOption again.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)((0,_util_model_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeToArray */ .kF)(rawOption.series),function(series){series&&series.data&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .fU)(series.data)&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .setAsPrimitive */ .s7)(series.data);});(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)((0,_util_model_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeToArray */ .kF)(rawOption.dataset),function(dataset){dataset&&dataset.source&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .fU)(dataset.source)&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .setAsPrimitive */ .s7)(dataset.source);});}// Caution: some series modify option data, if do not clone,
// it should ensure that the repeat modify correctly
// (create a new object when modify itself).
rawOption=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(rawOption);// FIXME
// If some property is set in timeline options or media option but
// not set in baseOption, a warning should be given.
var optionBackup=this._optionBackup;var newParsedOption=parseRawOption(rawOption,optionPreprocessorFuncs,!optionBackup);this._newBaseOption=newParsedOption.baseOption;// For setOption at second time (using merge mode);
if(optionBackup){// FIXME
// the restore merge solution is essentially incorrect.
// the mapping can not be 100% consistent with ecModel, which probably brings
// potential bug!
// The first merge is delayed, becuase in most cases, users do not call `setOption` twice.
// let fakeCmptsMap = this._fakeCmptsMap;
// if (!fakeCmptsMap) {
//     fakeCmptsMap = this._fakeCmptsMap = createHashMap();
//     mergeToBackupOption(fakeCmptsMap, null, optionBackup.baseOption, null);
// }
// mergeToBackupOption(
//     fakeCmptsMap, optionBackup.baseOption, newParsedOption.baseOption, opt
// );
// For simplicity, timeline options and media options do not support merge,
// that is, if you `setOption` twice and both has timeline options, the latter
// timeline opitons will not be merged to the formers, but just substitude them.
if(newParsedOption.timelineOptions.length){optionBackup.timelineOptions=newParsedOption.timelineOptions;}if(newParsedOption.mediaList.length){optionBackup.mediaList=newParsedOption.mediaList;}if(newParsedOption.mediaDefault){optionBackup.mediaDefault=newParsedOption.mediaDefault;}}else{this._optionBackup=newParsedOption;}};OptionManager.prototype.mountOption=function(isRecreate){var optionBackup=this._optionBackup;this._timelineOptions=optionBackup.timelineOptions;this._mediaList=optionBackup.mediaList;this._mediaDefault=optionBackup.mediaDefault;this._currentMediaIndices=[];return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(isRecreate// this._optionBackup.baseOption, which is created at the first `setOption`
// called, and is merged into every new option by inner method `mergeToBackupOption`
// each time `setOption` called, can be only used in `isRecreate`, because
// its reliability is under suspicion. In other cases option merge is
// performed by `model.mergeOption`.
?optionBackup.baseOption:this._newBaseOption);};OptionManager.prototype.getTimelineOption=function(ecModel){var option;var timelineOptions=this._timelineOptions;if(timelineOptions.length){// getTimelineOption can only be called after ecModel inited,
// so we can get currentIndex from timelineModel.
var timelineModel=ecModel.getComponent('timeline');if(timelineModel){option=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(// FIXME:TS as TimelineModel or quivlant interface
timelineOptions[timelineModel.getCurrentIndex()]);}}return option;};OptionManager.prototype.getMediaOption=function(ecModel){var ecWidth=this._api.getWidth();var ecHeight=this._api.getHeight();var mediaList=this._mediaList;var mediaDefault=this._mediaDefault;var indices=[];var result=[];// No media defined.
if(!mediaList.length&&!mediaDefault){return result;}// Multi media may be applied, the latter defined media has higher priority.
for(var i=0,len=mediaList.length;i<len;i++){if(applyMediaQuery(mediaList[i].query,ecWidth,ecHeight)){indices.push(i);}}// FIXME
// Whether mediaDefault should force users to provide? Otherwise
// the change by media query can not be recorvered.
if(!indices.length&&mediaDefault){indices=[-1];}if(indices.length&&!indicesEquals(indices,this._currentMediaIndices)){result=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)(indices,function(index){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(index===-1?mediaDefault.option:mediaList[index].option);});}// Otherwise return nothing.
this._currentMediaIndices=indices;return result;};return OptionManager;}();/**
 * [RAW_OPTION_PATTERNS]
 * (Note: "series: []" represents all other props in `ECUnitOption`)
 *
 * (1) No prop "baseOption" declared:
 * Root option is used as "baseOption" (except prop "options" and "media").
 * ```js
 * option = {
 *     series: [],
 *     timeline: {},
 *     options: [],
 * };
 * option = {
 *     series: [],
 *     media: {},
 * };
 * option = {
 *     series: [],
 *     timeline: {},
 *     options: [],
 *     media: {},
 * }
 * ```
 *
 * (2) Prop "baseOption" declared:
 * If "baseOption" declared, `ECUnitOption` props can only be declared
 * inside "baseOption" except prop "timeline" (compat ec2).
 * ```js
 * option = {
 *     baseOption: {
 *         timeline: {},
 *         series: [],
 *     },
 *     options: []
 * };
 * option = {
 *     baseOption: {
 *         series: [],
 *     },
 *     media: []
 * };
 * option = {
 *     baseOption: {
 *         timeline: {},
 *         series: [],
 *     },
 *     options: []
 *     media: []
 * };
 * option = {
 *     // ec3 compat ec2: allow (only) `timeline` declared
 *     // outside baseOption. Keep this setting for compat.
 *     timeline: {},
 *     baseOption: {
 *         series: [],
 *     },
 *     options: [],
 *     media: []
 * };
 * ```
 */function parseRawOption(// `rawOption` May be modified
rawOption,optionPreprocessorFuncs,isNew){var mediaList=[];var mediaDefault;var baseOption;var declaredBaseOption=rawOption.baseOption;// Compatible with ec2, [RAW_OPTION_PATTERNS] above.
var timelineOnRoot=rawOption.timeline;var timelineOptionsOnRoot=rawOption.options;var mediaOnRoot=rawOption.media;var hasMedia=!!rawOption.media;var hasTimeline=!!(timelineOptionsOnRoot||timelineOnRoot||declaredBaseOption&&declaredBaseOption.timeline);if(declaredBaseOption){baseOption=declaredBaseOption;// For merge option.
if(!baseOption.timeline){baseOption.timeline=timelineOnRoot;}}// For convenience, enable to use the root option as the `baseOption`:
// `{ ...normalOptionProps, media: [{ ... }, { ... }] }`
else{if(hasTimeline||hasMedia){rawOption.options=rawOption.media=null;}baseOption=rawOption;}if(hasMedia){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(mediaOnRoot)){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(mediaOnRoot,function(singleMedia){if(false){}if(singleMedia&&singleMedia.option){if(singleMedia.query){mediaList.push(singleMedia);}else if(!mediaDefault){// Use the first media default.
mediaDefault=singleMedia;}}});}else{if(false){}}}doPreprocess(baseOption);(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(timelineOptionsOnRoot,function(option){return doPreprocess(option);});(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(mediaList,function(media){return doPreprocess(media.option);});function doPreprocess(option){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(optionPreprocessorFuncs,function(preProcess){preProcess(option,isNew);});}return{baseOption:baseOption,timelineOptions:timelineOptionsOnRoot||[],mediaDefault:mediaDefault,mediaList:mediaList};}/**
 * @see <http://www.w3.org/TR/css3-mediaqueries/#media1>
 * Support: width, height, aspectRatio
 * Can use max or min as prefix.
 */function applyMediaQuery(query,ecWidth,ecHeight){var realMap={width:ecWidth,height:ecHeight,aspectratio:ecWidth/ecHeight// lowser case for convenientce.
};var applicatable=true;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(query,function(value,attr){var matched=attr.match(QUERY_REG);if(!matched||!matched[1]||!matched[2]){return;}var operator=matched[1];var realAttr=matched[2].toLowerCase();if(!compare(realMap[realAttr],value,operator)){applicatable=false;}});return applicatable;}function compare(real,expect,operator){if(operator==='min'){return real>=expect;}else if(operator==='max'){return real<=expect;}else{// Equals
return real===expect;}}function indicesEquals(indices1,indices2){// indices is always order by asc and has only finite number.
return indices1.join(',')===indices2.join(',');}/**
 * Consider case:
 * `chart.setOption(opt1);`
 * Then user do some interaction like dataZoom, dataView changing.
 * `chart.setOption(opt2);`
 * Then user press 'reset button' in toolbox.
 *
 * After doing that all of the interaction effects should be reset, the
 * chart should be the same as the result of invoke
 * `chart.setOption(opt1); chart.setOption(opt2);`.
 *
 * Although it is not able ensure that
 * `chart.setOption(opt1); chart.setOption(opt2);` is equivalents to
 * `chart.setOption(merge(opt1, opt2));` exactly,
 * this might be the only simple way to implement that feature.
 *
 * MEMO: We've considered some other approaches:
 * 1. Each model handle its self restoration but not uniform treatment.
 *     (Too complex in logic and error-prone)
 * 2. Use a shadow ecModel. (Performace expensive)
 *
 * FIXME: A possible solution:
 * Add a extra level of model for each component model. The inheritance chain would be:
 * ecModel <- componentModel <- componentActionModel <- dataItemModel
 * And all of the actions can only modify the `componentActionModel` rather than
 * `componentModel`. `setOption` will only modify the `ecModel` and `componentModel`.
 * When "resotre" action triggered, model from `componentActionModel` will be discarded
 * instead of recreating the "ecModel" from the "_optionBackup".
 */ // function mergeToBackupOption(
//     fakeCmptsMap: FakeComponentsMap,
//     // `tarOption` Can be null/undefined, means init
//     tarOption: ECUnitOption,
//     newOption: ECUnitOption,
//     // Can be null/undefined
//     opt: InnerSetOptionOpts
// ): void {
//     newOption = newOption || {} as ECUnitOption;
//     const notInit = !!tarOption;
//     each(newOption, function (newOptsInMainType, mainType) {
//         if (newOptsInMainType == null) {
//             return;
//         }
//         if (!ComponentModel.hasClass(mainType)) {
//             if (tarOption) {
//                 tarOption[mainType] = merge(tarOption[mainType], newOptsInMainType, true);
//             }
//         }
//         else {
//             const oldTarOptsInMainType = notInit ? normalizeToArray(tarOption[mainType]) : null;
//             const oldFakeCmptsInMainType = fakeCmptsMap.get(mainType) || [];
//             const resultTarOptsInMainType = notInit ? (tarOption[mainType] = [] as ComponentOption[]) : null;
//             const resultFakeCmptsInMainType = fakeCmptsMap.set(mainType, []);
//             const mappingResult = mappingToExists(
//                 oldFakeCmptsInMainType,
//                 normalizeToArray(newOptsInMainType),
//                 (opt && opt.replaceMergeMainTypeMap.get(mainType)) ? 'replaceMerge' : 'normalMerge'
//             );
//             setComponentTypeToKeyInfo(mappingResult, mainType, ComponentModel as ComponentModelConstructor);
//             each(mappingResult, function (resultItem, index) {
//                 // The same logic as `Global.ts#_mergeOption`.
//                 let fakeCmpt = resultItem.existing;
//                 const newOption = resultItem.newOption;
//                 const keyInfo = resultItem.keyInfo;
//                 let fakeCmptOpt;
//                 if (!newOption) {
//                     fakeCmptOpt = oldTarOptsInMainType[index];
//                 }
//                 else {
//                     if (fakeCmpt && fakeCmpt.subType === keyInfo.subType) {
//                         fakeCmpt.name = keyInfo.name;
//                         if (notInit) {
//                             fakeCmptOpt = merge(oldTarOptsInMainType[index], newOption, true);
//                         }
//                     }
//                     else {
//                         fakeCmpt = extend({}, keyInfo);
//                         if (notInit) {
//                             fakeCmptOpt = clone(newOption);
//                         }
//                     }
//                 }
//                 if (fakeCmpt) {
//                     notInit && resultTarOptsInMainType.push(fakeCmptOpt);
//                     resultFakeCmptsInMainType.push(fakeCmpt);
//                 }
//                 else {
//                     notInit && resultTarOptsInMainType.push(void 0);
//                     resultFakeCmptsInMainType.push(void 0);
//                 }
//             });
//         }
//     });
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionManager);

/***/ }),

/***/ 49261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SERIES_UNIVERSAL_TRANSITION_PROP */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88161);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57697);
/* harmony import */ var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9959);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15022);
/* harmony import */ var _mixin_palette_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56064);
/* harmony import */ var _model_mixin_dataFormat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67955);
/* harmony import */ var _util_layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var _core_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79736);
/* harmony import */ var _util_clazz_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18496);
/* harmony import */ var _data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61251);
/* harmony import */ var _component_tooltip_seriesFormatTooltip_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99492);
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
*/var inner=_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf();function getSelectionKey(data,dataIndex){return data.getName(dataIndex)||data.getId(dataIndex);}var SERIES_UNIVERSAL_TRANSITION_PROP='__universalTransitionEnabled';var SeriesModel=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(SeriesModel,_super);function SeriesModel(){// [Caution]: Becuase this class or desecendants can be used as `XXX.extend(subProto)`,
// the class members must not be initialized in constructor or declaration place.
// Otherwise there is bad case:
//   class A {xxx = 1;}
//   enableClassExtend(A);
//   class B extends A {}
//   var C = B.extend({xxx: 5});
//   var c = new C();
//   console.log(c.xxx); // expect 5 but always 1.
var _this=_super!==null&&_super.apply(this,arguments)||this;// ---------------------------------------
// Props about data selection
// ---------------------------------------
_this._selectedDataIndicesMap={};return _this;}SeriesModel.prototype.init=function(option,parentModel,ecModel){this.seriesIndex=this.componentIndex;this.dataTask=(0,_core_task_js__WEBPACK_IMPORTED_MODULE_2__/* .createTask */ .v)({count:dataTaskCount,reset:dataTaskReset});this.dataTask.context={model:this};this.mergeDefaultAndTheme(option,ecModel);var sourceManager=inner(this).sourceManager=new _data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_3__/* .SourceManager */ .U(this);sourceManager.prepareSource();var data=this.getInitialData(option,ecModel);wrapData(data,this);this.dataTask.context.data=data;if(false){}inner(this).dataBeforeProcessed=data;// If we reverse the order (make data firstly, and then make
// dataBeforeProcessed by cloneShallow), cloneShallow will
// cause data.graph.data !== data when using
// module:echarts/data/Graph or module:echarts/data/Tree.
// See module:echarts/data/helper/linkSeriesData
// Theoretically, it is unreasonable to call `seriesModel.getData()` in the model
// init or merge stage, because the data can be restored. So we do not `restoreData`
// and `setData` here, which forbids calling `seriesModel.getData()` in this stage.
// Call `seriesModel.getRawData()` instead.
// this.restoreData();
autoSeriesName(this);this._initSelectedMapFromData(data);};/**
   * Util for merge default and theme to option
   */SeriesModel.prototype.mergeDefaultAndTheme=function(option,ecModel){var layoutMode=(0,_util_layout_js__WEBPACK_IMPORTED_MODULE_4__/* .fetchLayoutMode */ .YD)(this);var inputPositionParams=layoutMode?(0,_util_layout_js__WEBPACK_IMPORTED_MODULE_4__/* .getLayoutParams */ .tE)(option):{};// Backward compat: using subType on theme.
// But if name duplicate between series subType
// (for example: parallel) add component mainType,
// add suffix 'Series'.
var themeSubType=this.subType;if(_Component_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].hasClass */ .Z.hasClass(themeSubType)){themeSubType+='Series';}zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .merge */ .TS(option,ecModel.getTheme().get(this.subType));zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .merge */ .TS(option,this.getDefaultOption());// Default label emphasis `show`
_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .defaultEmphasis */ .Cc(option,'label',['show']);this.fillDataTextStyle(option.data);if(layoutMode){(0,_util_layout_js__WEBPACK_IMPORTED_MODULE_4__/* .mergeLayoutParam */ .dt)(option,inputPositionParams,layoutMode);}};SeriesModel.prototype.mergeOption=function(newSeriesOption,ecModel){// this.settingTask.dirty();
newSeriesOption=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .merge */ .TS(this.option,newSeriesOption,true);this.fillDataTextStyle(newSeriesOption.data);var layoutMode=(0,_util_layout_js__WEBPACK_IMPORTED_MODULE_4__/* .fetchLayoutMode */ .YD)(this);if(layoutMode){(0,_util_layout_js__WEBPACK_IMPORTED_MODULE_4__/* .mergeLayoutParam */ .dt)(this.option,newSeriesOption,layoutMode);}var sourceManager=inner(this).sourceManager;sourceManager.dirty();sourceManager.prepareSource();var data=this.getInitialData(newSeriesOption,ecModel);wrapData(data,this);this.dataTask.dirty();this.dataTask.context.data=data;inner(this).dataBeforeProcessed=data;autoSeriesName(this);this._initSelectedMapFromData(data);};SeriesModel.prototype.fillDataTextStyle=function(data){// Default data label emphasis `show`
// FIXME Tree structure data ?
// FIXME Performance ?
if(data&&!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .isTypedArray */ .fU(data)){var props=['show'];for(var i=0;i<data.length;i++){if(data[i]&&data[i].label){_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .defaultEmphasis */ .Cc(data[i],'label',props);}}}};/**
   * Init a data structure from data related option in series
   * Must be overriden.
   */SeriesModel.prototype.getInitialData=function(option,ecModel){return;};/**
   * Append data to list
   */SeriesModel.prototype.appendData=function(params){// FIXME ???
// (1) If data from dataset, forbidden append.
// (2) support append data of dataset.
var data=this.getRawData();data.appendData(params.data);};/**
   * Consider some method like `filter`, `map` need make new data,
   * We should make sure that `seriesModel.getData()` get correct
   * data in the stream procedure. So we fetch data from upstream
   * each time `task.perform` called.
   */SeriesModel.prototype.getData=function(dataType){var task=getCurrentTask(this);if(task){var data=task.context.data;return dataType==null?data:data.getLinkedData(dataType);}else{// When series is not alive (that may happen when click toolbox
// restore or setOption with not merge mode), series data may
// be still need to judge animation or something when graphic
// elements want to know whether fade out.
return inner(this).data;}};SeriesModel.prototype.getAllData=function(){var mainData=this.getData();return mainData&&mainData.getLinkedDataAll?mainData.getLinkedDataAll():[{data:mainData}];};SeriesModel.prototype.setData=function(data){var task=getCurrentTask(this);if(task){var context=task.context;// Consider case: filter, data sample.
// FIXME:TS never used, so comment it
// if (context.data !== data && task.modifyOutputEnd) {
//     task.setOutputEnd(data.count());
// }
context.outputData=data;// Caution: setData should update context.data,
// Because getData may be called multiply in a
// single stage and expect to get the data just
// set. (For example, AxisProxy, x y both call
// getData and setDate sequentially).
// So the context.data should be fetched from
// upstream each time when a stage starts to be
// performed.
if(task!==this.dataTask){context.data=data;}}inner(this).data=data;};SeriesModel.prototype.getEncode=function(){var encode=this.get('encode',true);if(encode){return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .createHashMap */ .kW(encode);}};SeriesModel.prototype.getSourceManager=function(){return inner(this).sourceManager;};SeriesModel.prototype.getSource=function(){return this.getSourceManager().getSource();};/**
   * Get data before processed
   */SeriesModel.prototype.getRawData=function(){return inner(this).dataBeforeProcessed;};SeriesModel.prototype.getColorBy=function(){var colorBy=this.get('colorBy');return colorBy||'series';};SeriesModel.prototype.isColorBySeries=function(){return this.getColorBy()==='series';};/**
   * Get base axis if has coordinate system and has axis.
   * By default use coordSys.getBaseAxis();
   * Can be overrided for some chart.
   * @return {type} description
   */SeriesModel.prototype.getBaseAxis=function(){var coordSys=this.coordinateSystem;// @ts-ignore
return coordSys&&coordSys.getBaseAxis&&coordSys.getBaseAxis();};/**
   * Default tooltip formatter
   *
   * @param dataIndex
   * @param multipleSeries
   * @param dataType
   * @param renderMode valid values: 'html'(by default) and 'richText'.
   *        'html' is used for rendering tooltip in extra DOM form, and the result
   *        string is used as DOM HTML content.
   *        'richText' is used for rendering tooltip in rich text form, for those where
   *        DOM operation is not supported.
   * @return formatted tooltip with `html` and `markers`
   *        Notice: The override method can also return string
   */SeriesModel.prototype.formatTooltip=function(dataIndex,multipleSeries,dataType){return (0,_component_tooltip_seriesFormatTooltip_js__WEBPACK_IMPORTED_MODULE_7__/* .defaultSeriesFormatTooltip */ .w)({series:this,dataIndex:dataIndex,multipleSeries:multipleSeries});};SeriesModel.prototype.isAnimationEnabled=function(){var ecModel=this.ecModel;// Disable animation if using echarts in node but not give ssr flag.
// In ssr mode, renderToString will generate svg with css animation.
if(zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"].node */ .Z.node&&!(ecModel&&ecModel.ssr)){return false;}var animationEnabled=this.getShallow('animation');if(animationEnabled){if(this.getData().count()>this.getShallow('animationThreshold')){animationEnabled=false;}}return!!animationEnabled;};SeriesModel.prototype.restoreData=function(){this.dataTask.dirty();};SeriesModel.prototype.getColorFromPalette=function(name,scope,requestColorNum){var ecModel=this.ecModel;// PENDING
var color=_mixin_palette_js__WEBPACK_IMPORTED_MODULE_9__/* .PaletteMixin.prototype.getColorFromPalette.call */ ._.prototype.getColorFromPalette.call(this,name,scope,requestColorNum);if(!color){color=ecModel.getColorFromPalette(name,scope,requestColorNum);}return color;};/**
   * Use `data.mapDimensionsAll(coordDim)` instead.
   * @deprecated
   */SeriesModel.prototype.coordDimToDataDim=function(coordDim){return this.getRawData().mapDimensionsAll(coordDim);};/**
   * Get progressive rendering count each step
   */SeriesModel.prototype.getProgressive=function(){return this.get('progressive');};/**
   * Get progressive rendering count each step
   */SeriesModel.prototype.getProgressiveThreshold=function(){return this.get('progressiveThreshold');};// PENGING If selectedMode is null ?
SeriesModel.prototype.select=function(innerDataIndices,dataType){this._innerSelect(this.getData(dataType),innerDataIndices);};SeriesModel.prototype.unselect=function(innerDataIndices,dataType){var selectedMap=this.option.selectedMap;if(!selectedMap){return;}var selectedMode=this.option.selectedMode;var data=this.getData(dataType);if(selectedMode==='series'||selectedMap==='all'){this.option.selectedMap={};this._selectedDataIndicesMap={};return;}for(var i=0;i<innerDataIndices.length;i++){var dataIndex=innerDataIndices[i];var nameOrId=getSelectionKey(data,dataIndex);selectedMap[nameOrId]=false;this._selectedDataIndicesMap[nameOrId]=-1;}};SeriesModel.prototype.toggleSelect=function(innerDataIndices,dataType){var tmpArr=[];for(var i=0;i<innerDataIndices.length;i++){tmpArr[0]=innerDataIndices[i];this.isSelected(innerDataIndices[i],dataType)?this.unselect(tmpArr,dataType):this.select(tmpArr,dataType);}};SeriesModel.prototype.getSelectedDataIndices=function(){if(this.option.selectedMap==='all'){return[].slice.call(this.getData().getIndices());}var selectedDataIndicesMap=this._selectedDataIndicesMap;var nameOrIds=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .keys */ .XP(selectedDataIndicesMap);var dataIndices=[];for(var i=0;i<nameOrIds.length;i++){var dataIndex=selectedDataIndicesMap[nameOrIds[i]];if(dataIndex>=0){dataIndices.push(dataIndex);}}return dataIndices;};SeriesModel.prototype.isSelected=function(dataIndex,dataType){var selectedMap=this.option.selectedMap;if(!selectedMap){return false;}var data=this.getData(dataType);return(selectedMap==='all'||selectedMap[getSelectionKey(data,dataIndex)])&&!data.getItemModel(dataIndex).get(['select','disabled']);};SeriesModel.prototype.isUniversalTransitionEnabled=function(){if(this[SERIES_UNIVERSAL_TRANSITION_PROP]){return true;}var universalTransitionOpt=this.option.universalTransition;// Quick reject
if(!universalTransitionOpt){return false;}if(universalTransitionOpt===true){return true;}// Can be simply 'universalTransition: true'
return universalTransitionOpt&&universalTransitionOpt.enabled;};SeriesModel.prototype._innerSelect=function(data,innerDataIndices){var _a,_b;var option=this.option;var selectedMode=option.selectedMode;var len=innerDataIndices.length;if(!selectedMode||!len){return;}if(selectedMode==='series'){option.selectedMap='all';}else if(selectedMode==='multiple'){if(!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .isObject */ .Kn(option.selectedMap)){option.selectedMap={};}var selectedMap=option.selectedMap;for(var i=0;i<len;i++){var dataIndex=innerDataIndices[i];// TODO diffrent types of data share same object.
var nameOrId=getSelectionKey(data,dataIndex);selectedMap[nameOrId]=true;this._selectedDataIndicesMap[nameOrId]=data.getRawIndex(dataIndex);}}else if(selectedMode==='single'||selectedMode===true){var lastDataIndex=innerDataIndices[len-1];var nameOrId=getSelectionKey(data,lastDataIndex);option.selectedMap=(_a={},_a[nameOrId]=true,_a);this._selectedDataIndicesMap=(_b={},_b[nameOrId]=data.getRawIndex(lastDataIndex),_b);}};SeriesModel.prototype._initSelectedMapFromData=function(data){// Ignore select info in data if selectedMap exists.
// NOTE It's only for legacy usage. edge data is not supported.
if(this.option.selectedMap){return;}var dataIndices=[];if(data.hasItemOption){data.each(function(idx){var rawItem=data.getRawDataItem(idx);if(rawItem&&rawItem.selected){dataIndices.push(idx);}});}if(dataIndices.length>0){this._innerSelect(data,dataIndices);}};// /**
//  * @see {module:echarts/stream/Scheduler}
//  */
// abstract pipeTask: null
SeriesModel.registerClass=function(clz){return _Component_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].registerClass */ .Z.registerClass(clz);};SeriesModel.protoInitialize=function(){var proto=SeriesModel.prototype;proto.type='series.__base__';proto.seriesIndex=0;proto.ignoreStyleOnData=false;proto.hasSymbolVisual=false;proto.defaultSymbol='circle';// Make sure the values can be accessed!
proto.visualStyleAccessPath='itemStyle';proto.visualDrawType='fill';}();return SeriesModel;}(_Component_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .mixin */ .jB(SeriesModel,_model_mixin_dataFormat_js__WEBPACK_IMPORTED_MODULE_10__/* .DataFormatMixin */ .X);zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .mixin */ .jB(SeriesModel,_mixin_palette_js__WEBPACK_IMPORTED_MODULE_9__/* .PaletteMixin */ ._);(0,_util_clazz_js__WEBPACK_IMPORTED_MODULE_11__/* .mountExtend */ .pw)(SeriesModel,_Component_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);/**
 * MUST be called after `prepareSource` called
 * Here we need to make auto series, especially for auto legend. But we
 * do not modify series.name in option to avoid side effects.
 */function autoSeriesName(seriesModel){// User specified name has higher priority, otherwise it may cause
// series can not be queried unexpectedly.
var name=seriesModel.name;if(!_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .isNameSpecified */ .yu(seriesModel)){seriesModel.name=getSeriesAutoName(seriesModel)||name;}}function getSeriesAutoName(seriesModel){var data=seriesModel.getRawData();var dataDims=data.mapDimensionsAll('seriesName');var nameArr=[];zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .each */ .S6(dataDims,function(dataDim){var dimInfo=data.getDimensionInfo(dataDim);dimInfo.displayName&&nameArr.push(dimInfo.displayName);});return nameArr.join(' ');}function dataTaskCount(context){return context.model.getRawData().count();}function dataTaskReset(context){var seriesModel=context.model;seriesModel.setData(seriesModel.getRawData().cloneShallow());return dataTaskProgress;}function dataTaskProgress(param,context){// Avoid repead cloneShallow when data just created in reset.
if(context.outputData&&param.end>context.outputData.count()){context.model.getRawData().cloneShallow(context.outputData);}}// TODO refactor
function wrapData(data,seriesModel){zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .each */ .S6(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .concatArray */ .WW(data.CHANGABLE_METHODS,data.DOWNSAMPLE_METHODS),function(methodName){data.wrapMethod(methodName,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .curry */ .WA(onDataChange,seriesModel));});}function onDataChange(seriesModel,newList){var task=getCurrentTask(seriesModel);if(task){// Consider case: filter, selectRange
task.setOutputEnd((newList||this).count());}return newList;}function getCurrentTask(seriesModel){var scheduler=(seriesModel.ecModel||{}).scheduler;var pipeline=scheduler&&scheduler.getPipeline(seriesModel.uid);if(pipeline){// When pipline finished, the currrentTask keep the last
// task (renderTask).
var task=pipeline.currentTask;if(task){var agentStubMap=task.agentStubMap;if(agentStubMap){task=agentStubMap.get(seriesModel.uid);}}return task;}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeriesModel);

/***/ }),

/***/ 67955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ DataFormatMixin),
/* harmony export */   "f": () => (/* binding */ normalizeTooltipFormatResult)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32946);
/* harmony import */ var _util_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87662);
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
*/var DIMENSION_LABEL_REG=/\{@(.+?)\}/g;var DataFormatMixin=/** @class */function(){function DataFormatMixin(){}/**
   * Get params for formatter
   */DataFormatMixin.prototype.getDataParams=function(dataIndex,dataType){var data=this.getData(dataType);var rawValue=this.getRawValue(dataIndex,dataType);var rawDataIndex=data.getRawIndex(dataIndex);var name=data.getName(dataIndex);var itemOpt=data.getRawDataItem(dataIndex);var style=data.getItemVisual(dataIndex,'style');var color=style&&style[data.getItemVisual(dataIndex,'drawType')||'fill'];var borderColor=style&&style.stroke;var mainType=this.mainType;var isSeries=mainType==='series';var userOutput=data.userOutput&&data.userOutput.get();return{componentType:mainType,componentSubType:this.subType,componentIndex:this.componentIndex,seriesType:isSeries?this.subType:null,seriesIndex:this.seriesIndex,seriesId:isSeries?this.id:null,seriesName:isSeries?this.name:null,name:name,dataIndex:rawDataIndex,data:itemOpt,dataType:dataType,value:rawValue,color:color,borderColor:borderColor,dimensionNames:userOutput?userOutput.fullDimensions:null,encode:userOutput?userOutput.encode:null,// Param name list for mapping `a`, `b`, `c`, `d`, `e`
$vars:['seriesName','name','value']};};/**
   * Format label
   * @param dataIndex
   * @param status 'normal' by default
   * @param dataType
   * @param labelDimIndex Only used in some chart that
   *        use formatter in different dimensions, like radar.
   * @param formatter Formatter given outside.
   * @return return null/undefined if no formatter
   */DataFormatMixin.prototype.getFormattedLabel=function(dataIndex,status,dataType,labelDimIndex,formatter,extendParams){status=status||'normal';var data=this.getData(dataType);var params=this.getDataParams(dataIndex,dataType);if(extendParams){params.value=extendParams.interpolatedValue;}if(labelDimIndex!=null&&zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ(params.value)){params.value=params.value[labelDimIndex];}if(!formatter){var itemModel=data.getItemModel(dataIndex);// @ts-ignore
formatter=itemModel.get(status==='normal'?['label','formatter']:[status,'label','formatter']);}if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf(formatter)){params.status=status;params.dimensionIndex=labelDimIndex;return formatter(params);}else if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD(formatter)){var str=(0,_util_format_js__WEBPACK_IMPORTED_MODULE_1__/* .formatTpl */ .kF)(formatter,params);// Support 'aaa{@[3]}bbb{@product}ccc'.
// Do not support '}' in dim name util have to.
return str.replace(DIMENSION_LABEL_REG,function(origin,dimStr){var len=dimStr.length;var dimLoose=dimStr;if(dimLoose.charAt(0)==='['&&dimLoose.charAt(len-1)===']'){dimLoose=+dimLoose.slice(1,len-1);// Also support: '[]' => 0
if(false){}}var val=(0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__/* .retrieveRawValue */ .hk)(data,dataIndex,dimLoose);if(extendParams&&zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ(extendParams.interpolatedValue)){var dimIndex=data.getDimensionIndex(dimLoose);if(dimIndex>=0){val=extendParams.interpolatedValue[dimIndex];}}return val!=null?val+'':'';});}};/**
   * Get raw value in option
   */DataFormatMixin.prototype.getRawValue=function(idx,dataType){return (0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__/* .retrieveRawValue */ .hk)(this.getData(dataType),idx);};/**
   * Should be implemented.
   * @param {number} dataIndex
   * @param {boolean} [multipleSeries=false]
   * @param {string} [dataType]
   */DataFormatMixin.prototype.formatTooltip=function(dataIndex,multipleSeries,dataType){// Empty function
return;};return DataFormatMixin;}();;// PENDING: previously we accept this type when calling `formatTooltip`,
// but guess little chance has been used outside. Do we need to backward
// compat it?
// type TooltipFormatResultLegacyObject = {
//     // `html` means the markup language text, either in 'html' or 'richText'.
//     // The name `html` is not appropriate becuase in 'richText' it is not a HTML
//     // string. But still support it for backward compat.
//     html: string;
//     markers: Dictionary<ColorString>;
// };
/**
 * For backward compat, normalize the return from `formatTooltip`.
 */function normalizeTooltipFormatResult(result){var markupText;// let markers: Dictionary<ColorString>;
var markupFragment;if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn(result)){if(result.type){markupFragment=result;}else{if(false){}}// else {
//     markupText = (result as TooltipFormatResultLegacyObject).html;
//     markers = (result as TooltipFormatResultLegacyObject).markers;
//     if (markersExisting) {
//         markers = zrUtil.merge(markersExisting, markers);
//     }
// }
}else{markupText=result;}return{text:markupText,// markers: markers || markersExisting,
frag:markupFragment};}

/***/ }),

/***/ 68008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ItemStyleMixin),
/* harmony export */   "t": () => (/* binding */ ITEM_STYLE_KEY_MAP)
/* harmony export */ });
/* harmony import */ var _makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14598);
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
*/var ITEM_STYLE_KEY_MAP=[['fill','color'],['stroke','borderColor'],['lineWidth','borderWidth'],['opacity'],['shadowBlur'],['shadowOffsetX'],['shadowOffsetY'],['shadowColor'],['lineDash','borderType'],['lineDashOffset','borderDashOffset'],['lineCap','borderCap'],['lineJoin','borderJoin'],['miterLimit','borderMiterLimit']// Option decal is in `DecalObject` but style.decal is in `PatternObject`.
// So do not transfer decal directly.
];var getItemStyle=(0,_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ITEM_STYLE_KEY_MAP);var ItemStyleMixin=/** @class */function(){function ItemStyleMixin(){}ItemStyleMixin.prototype.getItemStyle=function(excludes,includes){return getItemStyle(this,excludes,includes);};return ItemStyleMixin;}();

/***/ }),

/***/ 35448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ LineStyleMixin),
/* harmony export */   "v": () => (/* binding */ LINE_STYLE_KEY_MAP)
/* harmony export */ });
/* harmony import */ var _makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14598);
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
*/var LINE_STYLE_KEY_MAP=[['lineWidth','width'],['stroke','color'],['opacity'],['shadowBlur'],['shadowOffsetX'],['shadowOffsetY'],['shadowColor'],['lineDash','type'],['lineDashOffset','dashOffset'],['lineCap','cap'],['lineJoin','join'],['miterLimit']// Option decal is in `DecalObject` but style.decal is in `PatternObject`.
// So do not transfer decal directly.
];var getLineStyle=(0,_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(LINE_STYLE_KEY_MAP);var LineStyleMixin=/** @class */function(){function LineStyleMixin(){}LineStyleMixin.prototype.getLineStyle=function(excludes){return getLineStyle(this,excludes);};return LineStyleMixin;}();;

/***/ }),

/***/ 14598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeStyleMapper)
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
*/ // TODO Parse shadow style
// TODO Only shallow path support
function makeStyleMapper(properties,ignoreParent){// Normalize
for(var i=0;i<properties.length;i++){if(!properties[i][1]){properties[i][1]=properties[i][0];}}ignoreParent=ignoreParent||false;return function(model,excludes,includes){var style={};for(var i=0;i<properties.length;i++){var propName=properties[i][1];if(excludes&&zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .cq(excludes,propName)>=0||includes&&zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .cq(includes,propName)<0){continue;}var val=model.getShallow(propName,ignoreParent);if(val!=null){style[properties[i][0]]=val;}}// TODO Text or image?
return style;};}

/***/ }),

/***/ 56064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ PaletteMixin)
/* harmony export */ });
/* unused harmony export getDecalFromPalette */
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
*/var innerColor=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var innerDecal=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var PaletteMixin=/** @class */function(){function PaletteMixin(){}PaletteMixin.prototype.getColorFromPalette=function(name,scope,requestNum){var defaultPalette=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .normalizeToArray */ .kF)(this.get('color',true));var layeredPalette=this.get('colorLayer',true);return getFromPalette(this,innerColor,defaultPalette,layeredPalette,name,scope,requestNum);};PaletteMixin.prototype.clearColorPalette=function(){clearPalette(this,innerColor);};return PaletteMixin;}();function getDecalFromPalette(ecModel,name,scope,requestNum){var defaultDecals=normalizeToArray(ecModel.get(['aria','decal','decals']));return getFromPalette(ecModel,innerDecal,defaultDecals,null,name,scope,requestNum);}function getNearestPalette(palettes,requestColorNum){var paletteNum=palettes.length;// TODO palettes must be in order
for(var i=0;i<paletteNum;i++){if(palettes[i].length>requestColorNum){return palettes[i];}}return palettes[paletteNum-1];}/**
 * @param name MUST NOT be null/undefined. Otherwise call this function
 *             twise with the same parameters will get different result.
 * @param scope default this.
 * @return Can be null/undefined
 */function getFromPalette(that,inner,defaultPalette,layeredPalette,name,scope,requestNum){scope=scope||that;var scopeFields=inner(scope);var paletteIdx=scopeFields.paletteIdx||0;var paletteNameMap=scopeFields.paletteNameMap=scopeFields.paletteNameMap||{};// Use `hasOwnProperty` to avoid conflict with Object.prototype.
if(paletteNameMap.hasOwnProperty(name)){return paletteNameMap[name];}var palette=requestNum==null||!layeredPalette?defaultPalette:getNearestPalette(layeredPalette,requestNum);// In case can't find in layered color palette.
palette=palette||defaultPalette;if(!palette||!palette.length){return;}var pickedPaletteItem=palette[paletteIdx];if(name){paletteNameMap[name]=pickedPaletteItem;}scopeFields.paletteIdx=(paletteIdx+1)%palette.length;return pickedPaletteItem;}function clearPalette(that,inner){inner(that).paletteIdx=0;inner(that).paletteNameMap={};}

/***/ }),

/***/ 8847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getCoordSysInfoBySeries)
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
*/ /**
 * Helper for model references.
 * There are many manners to refer axis/coordSys.
 */ // TODO
// merge relevant logic to this file?
// check: "modelHelper" of tooltip and "BrushTargetManager".
/**
 * @class
 * For example:
 * {
 *     coordSysName: 'cartesian2d',
 *     coordSysDims: ['x', 'y', ...],
 *     axisMap: HashMap({
 *         x: xAxisModel,
 *         y: yAxisModel
 *     }),
 *     categoryAxisMap: HashMap({
 *         x: xAxisModel,
 *         y: undefined
 *     }),
 *     // The index of the first category axis in `coordSysDims`.
 *     // `null/undefined` means no category axis exists.
 *     firstCategoryDimIndex: 1,
 *     // To replace user specified encode.
 * }
 */var CoordSysInfo=/** @class */function(){function CoordSysInfo(coordSysName){this.coordSysDims=[];this.axisMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)();this.categoryAxisMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)();this.coordSysName=coordSysName;}return CoordSysInfo;}();function getCoordSysInfoBySeries(seriesModel){var coordSysName=seriesModel.get('coordinateSystem');var result=new CoordSysInfo(coordSysName);var fetch=fetchers[coordSysName];if(fetch){fetch(seriesModel,result,result.axisMap,result.categoryAxisMap);return result;}}var fetchers={cartesian2d:function cartesian2d(seriesModel,result,axisMap,categoryAxisMap){var xAxisModel=seriesModel.getReferringComponents('xAxis',_util_model_js__WEBPACK_IMPORTED_MODULE_1__/* .SINGLE_REFERRING */ .C6).models[0];var yAxisModel=seriesModel.getReferringComponents('yAxis',_util_model_js__WEBPACK_IMPORTED_MODULE_1__/* .SINGLE_REFERRING */ .C6).models[0];if(false){}result.coordSysDims=['x','y'];axisMap.set('x',xAxisModel);axisMap.set('y',yAxisModel);if(isCategory(xAxisModel)){categoryAxisMap.set('x',xAxisModel);result.firstCategoryDimIndex=0;}if(isCategory(yAxisModel)){categoryAxisMap.set('y',yAxisModel);result.firstCategoryDimIndex==null&&(result.firstCategoryDimIndex=1);}},singleAxis:function singleAxis(seriesModel,result,axisMap,categoryAxisMap){var singleAxisModel=seriesModel.getReferringComponents('singleAxis',_util_model_js__WEBPACK_IMPORTED_MODULE_1__/* .SINGLE_REFERRING */ .C6).models[0];if(false){}result.coordSysDims=['single'];axisMap.set('single',singleAxisModel);if(isCategory(singleAxisModel)){categoryAxisMap.set('single',singleAxisModel);result.firstCategoryDimIndex=0;}},polar:function polar(seriesModel,result,axisMap,categoryAxisMap){var polarModel=seriesModel.getReferringComponents('polar',_util_model_js__WEBPACK_IMPORTED_MODULE_1__/* .SINGLE_REFERRING */ .C6).models[0];var radiusAxisModel=polarModel.findAxisModel('radiusAxis');var angleAxisModel=polarModel.findAxisModel('angleAxis');if(false){}result.coordSysDims=['radius','angle'];axisMap.set('radius',radiusAxisModel);axisMap.set('angle',angleAxisModel);if(isCategory(radiusAxisModel)){categoryAxisMap.set('radius',radiusAxisModel);result.firstCategoryDimIndex=0;}if(isCategory(angleAxisModel)){categoryAxisMap.set('angle',angleAxisModel);result.firstCategoryDimIndex==null&&(result.firstCategoryDimIndex=1);}},geo:function geo(seriesModel,result,axisMap,categoryAxisMap){result.coordSysDims=['lng','lat'];},parallel:function parallel(seriesModel,result,axisMap,categoryAxisMap){var ecModel=seriesModel.ecModel;var parallelModel=ecModel.getComponent('parallel',seriesModel.get('parallelIndex'));var coordSysDims=result.coordSysDims=parallelModel.dimensions.slice();(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(parallelModel.parallelAxisIndex,function(axisIndex,index){var axisModel=ecModel.getComponent('parallelAxis',axisIndex);var axisDim=coordSysDims[index];axisMap.set(axisDim,axisModel);if(isCategory(axisModel)){categoryAxisMap.set(axisDim,axisModel);if(result.firstCategoryDimIndex==null){result.firstCategoryDimIndex=index;}}});}};function isCategory(axisModel){return axisModel.get('type')==='category';}

/***/ }),

/***/ 12388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ globalBackwardCompat)
});

// EXTERNAL MODULE: ../my-cli/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(57697);
// EXTERNAL MODULE: ../my-cli/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(23958);
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/preprocessor/helper/compatStyle.js
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
*/var each=util/* each */.S6;var isObject=util/* isObject */.Kn;var POSSIBLE_STYLES=['areaStyle','lineStyle','nodeStyle','linkStyle','chordStyle','label','labelLine'];function compatEC2ItemStyle(opt){var itemStyleOpt=opt&&opt.itemStyle;if(!itemStyleOpt){return;}for(var i=0,len=POSSIBLE_STYLES.length;i<len;i++){var styleName=POSSIBLE_STYLES[i];var normalItemStyleOpt=itemStyleOpt.normal;var emphasisItemStyleOpt=itemStyleOpt.emphasis;if(normalItemStyleOpt&&normalItemStyleOpt[styleName]){if(false){}opt[styleName]=opt[styleName]||{};if(!opt[styleName].normal){opt[styleName].normal=normalItemStyleOpt[styleName];}else{util/* merge */.TS(opt[styleName].normal,normalItemStyleOpt[styleName]);}normalItemStyleOpt[styleName]=null;}if(emphasisItemStyleOpt&&emphasisItemStyleOpt[styleName]){if(false){}opt[styleName]=opt[styleName]||{};if(!opt[styleName].emphasis){opt[styleName].emphasis=emphasisItemStyleOpt[styleName];}else{util/* merge */.TS(opt[styleName].emphasis,emphasisItemStyleOpt[styleName]);}emphasisItemStyleOpt[styleName]=null;}}}function convertNormalEmphasis(opt,optType,useExtend){if(opt&&opt[optType]&&(opt[optType].normal||opt[optType].emphasis)){var normalOpt=opt[optType].normal;var emphasisOpt=opt[optType].emphasis;if(normalOpt){if(false){}// Timeline controlStyle has other properties besides normal and emphasis
if(useExtend){opt[optType].normal=opt[optType].emphasis=null;util/* defaults */.ce(opt[optType],normalOpt);}else{opt[optType]=normalOpt;}}if(emphasisOpt){if(false){}opt.emphasis=opt.emphasis||{};opt.emphasis[optType]=emphasisOpt;// Also compat the case user mix the style and focus together in ec3 style
// for example: { itemStyle: { normal: {}, emphasis: {focus, shadowBlur} } }
if(emphasisOpt.focus){opt.emphasis.focus=emphasisOpt.focus;}if(emphasisOpt.blurScope){opt.emphasis.blurScope=emphasisOpt.blurScope;}}}}function removeEC3NormalStatus(opt){convertNormalEmphasis(opt,'itemStyle');convertNormalEmphasis(opt,'lineStyle');convertNormalEmphasis(opt,'areaStyle');convertNormalEmphasis(opt,'label');convertNormalEmphasis(opt,'labelLine');// treemap
convertNormalEmphasis(opt,'upperLabel');// graph
convertNormalEmphasis(opt,'edgeLabel');}function compatTextStyle(opt,propName){// Check whether is not object (string\null\undefined ...)
var labelOptSingle=isObject(opt)&&opt[propName];var textStyle=isObject(labelOptSingle)&&labelOptSingle.textStyle;if(textStyle){if(false){}for(var i=0,len=model/* TEXT_STYLE_OPTIONS.length */.Td.length;i<len;i++){var textPropName=model/* TEXT_STYLE_OPTIONS */.Td[i];if(textStyle.hasOwnProperty(textPropName)){labelOptSingle[textPropName]=textStyle[textPropName];}}}}function compatEC3CommonStyles(opt){if(opt){removeEC3NormalStatus(opt);compatTextStyle(opt,'label');opt.emphasis&&compatTextStyle(opt.emphasis,'label');}}function processSeries(seriesOpt){if(!isObject(seriesOpt)){return;}compatEC2ItemStyle(seriesOpt);removeEC3NormalStatus(seriesOpt);compatTextStyle(seriesOpt,'label');// treemap
compatTextStyle(seriesOpt,'upperLabel');// graph
compatTextStyle(seriesOpt,'edgeLabel');if(seriesOpt.emphasis){compatTextStyle(seriesOpt.emphasis,'label');// treemap
compatTextStyle(seriesOpt.emphasis,'upperLabel');// graph
compatTextStyle(seriesOpt.emphasis,'edgeLabel');}var markPoint=seriesOpt.markPoint;if(markPoint){compatEC2ItemStyle(markPoint);compatEC3CommonStyles(markPoint);}var markLine=seriesOpt.markLine;if(markLine){compatEC2ItemStyle(markLine);compatEC3CommonStyles(markLine);}var markArea=seriesOpt.markArea;if(markArea){compatEC3CommonStyles(markArea);}var data=seriesOpt.data;// Break with ec3: if `setOption` again, there may be no `type` in option,
// then the backward compat based on option type will not be performed.
if(seriesOpt.type==='graph'){data=data||seriesOpt.nodes;var edgeData=seriesOpt.links||seriesOpt.edges;if(edgeData&&!util/* isTypedArray */.fU(edgeData)){for(var i=0;i<edgeData.length;i++){compatEC3CommonStyles(edgeData[i]);}}util/* each */.S6(seriesOpt.categories,function(opt){removeEC3NormalStatus(opt);});}if(data&&!util/* isTypedArray */.fU(data)){for(var i=0;i<data.length;i++){compatEC3CommonStyles(data[i]);}}// mark point data
markPoint=seriesOpt.markPoint;if(markPoint&&markPoint.data){var mpData=markPoint.data;for(var i=0;i<mpData.length;i++){compatEC3CommonStyles(mpData[i]);}}// mark line data
markLine=seriesOpt.markLine;if(markLine&&markLine.data){var mlData=markLine.data;for(var i=0;i<mlData.length;i++){if(util/* isArray */.kJ(mlData[i])){compatEC3CommonStyles(mlData[i][0]);compatEC3CommonStyles(mlData[i][1]);}else{compatEC3CommonStyles(mlData[i]);}}}// Series
if(seriesOpt.type==='gauge'){compatTextStyle(seriesOpt,'axisLabel');compatTextStyle(seriesOpt,'title');compatTextStyle(seriesOpt,'detail');}else if(seriesOpt.type==='treemap'){convertNormalEmphasis(seriesOpt.breadcrumb,'itemStyle');util/* each */.S6(seriesOpt.levels,function(opt){removeEC3NormalStatus(opt);});}else if(seriesOpt.type==='tree'){removeEC3NormalStatus(seriesOpt.leaves);}// sunburst starts from ec4, so it does not need to compat levels.
}function toArr(o){return util/* isArray */.kJ(o)?o:o?[o]:[];}function toObj(o){return(util/* isArray */.kJ(o)?o[0]:o)||{};}function globalCompatStyle(option,isTheme){each(toArr(option.series),function(seriesOpt){isObject(seriesOpt)&&processSeries(seriesOpt);});var axes=['xAxis','yAxis','radiusAxis','angleAxis','singleAxis','parallelAxis','radar'];isTheme&&axes.push('valueAxis','categoryAxis','logAxis','timeAxis');each(axes,function(axisName){each(toArr(option[axisName]),function(axisOpt){if(axisOpt){compatTextStyle(axisOpt,'axisLabel');compatTextStyle(axisOpt.axisPointer,'label');}});});each(toArr(option.parallel),function(parallelOpt){var parallelAxisDefault=parallelOpt&&parallelOpt.parallelAxisDefault;compatTextStyle(parallelAxisDefault,'axisLabel');compatTextStyle(parallelAxisDefault&&parallelAxisDefault.axisPointer,'label');});each(toArr(option.calendar),function(calendarOpt){convertNormalEmphasis(calendarOpt,'itemStyle');compatTextStyle(calendarOpt,'dayLabel');compatTextStyle(calendarOpt,'monthLabel');compatTextStyle(calendarOpt,'yearLabel');});// radar.name.textStyle
each(toArr(option.radar),function(radarOpt){compatTextStyle(radarOpt,'name');// Use axisName instead of name because component has name property
if(radarOpt.name&&radarOpt.axisName==null){radarOpt.axisName=radarOpt.name;delete radarOpt.name;if(false){}}if(radarOpt.nameGap!=null&&radarOpt.axisNameGap==null){radarOpt.axisNameGap=radarOpt.nameGap;delete radarOpt.nameGap;if(false){}}if(false){}});each(toArr(option.geo),function(geoOpt){if(isObject(geoOpt)){compatEC3CommonStyles(geoOpt);each(toArr(geoOpt.regions),function(regionObj){compatEC3CommonStyles(regionObj);});}});each(toArr(option.timeline),function(timelineOpt){compatEC3CommonStyles(timelineOpt);convertNormalEmphasis(timelineOpt,'label');convertNormalEmphasis(timelineOpt,'itemStyle');convertNormalEmphasis(timelineOpt,'controlStyle',true);var data=timelineOpt.data;util/* isArray */.kJ(data)&&util/* each */.S6(data,function(item){if(util/* isObject */.Kn(item)){convertNormalEmphasis(item,'label');convertNormalEmphasis(item,'itemStyle');}});});each(toArr(option.toolbox),function(toolboxOpt){convertNormalEmphasis(toolboxOpt,'iconStyle');each(toolboxOpt.feature,function(featureOpt){convertNormalEmphasis(featureOpt,'iconStyle');});});compatTextStyle(toObj(option.axisPointer),'label');compatTextStyle(toObj(option.tooltip).axisPointer,'label');// Clean logs
// storedLogs = {};
}
;// CONCATENATED MODULE: ../my-cli/node_modules/echarts/lib/preprocessor/backwardCompat.js
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
*/function get(opt,path){var pathArr=path.split(',');var obj=opt;for(var i=0;i<pathArr.length;i++){obj=obj&&obj[pathArr[i]];if(obj==null){break;}}return obj;}function set(opt,path,val,overwrite){var pathArr=path.split(',');var obj=opt;var key;var i=0;for(;i<pathArr.length-1;i++){key=pathArr[i];if(obj[key]==null){obj[key]={};}obj=obj[key];}if(overwrite||obj[pathArr[i]]==null){obj[pathArr[i]]=val;}}function compatLayoutProperties(option){option&&(0,util/* each */.S6)(LAYOUT_PROPERTIES,function(prop){if(prop[0]in option&&!(prop[1]in option)){option[prop[1]]=option[prop[0]];}});}var LAYOUT_PROPERTIES=[['x','left'],['y','top'],['x2','right'],['y2','bottom']];var COMPATITABLE_COMPONENTS=['grid','geo','parallel','legend','toolbox','title','visualMap','dataZoom','timeline'];var BAR_ITEM_STYLE_MAP=[['borderRadius','barBorderRadius'],['borderColor','barBorderColor'],['borderWidth','barBorderWidth']];function compatBarItemStyle(option){var itemStyle=option&&option.itemStyle;if(itemStyle){for(var i=0;i<BAR_ITEM_STYLE_MAP.length;i++){var oldName=BAR_ITEM_STYLE_MAP[i][1];var newName=BAR_ITEM_STYLE_MAP[i][0];if(itemStyle[oldName]!=null){itemStyle[newName]=itemStyle[oldName];if(false){}}}}}function compatPieLabel(option){if(!option){return;}if(option.alignTo==='edge'&&option.margin!=null&&option.edgeDistance==null){if(false){}option.edgeDistance=option.margin;}}function compatSunburstState(option){if(!option){return;}if(option.downplay&&!option.blur){option.blur=option.downplay;if(false){}}}function compatGraphFocus(option){if(!option){return;}if(option.focusNodeAdjacency!=null){option.emphasis=option.emphasis||{};if(option.emphasis.focus==null){if(false){}option.emphasis.focus='adjacency';}}}function traverseTree(data,cb){if(data){for(var i=0;i<data.length;i++){cb(data[i]);data[i]&&traverseTree(data[i].children,cb);}}}function globalBackwardCompat(option,isTheme){globalCompatStyle(option,isTheme);// Make sure series array for model initialization.
option.series=(0,model/* normalizeToArray */.kF)(option.series);(0,util/* each */.S6)(option.series,function(seriesOpt){if(!(0,util/* isObject */.Kn)(seriesOpt)){return;}var seriesType=seriesOpt.type;if(seriesType==='line'){if(seriesOpt.clipOverflow!=null){seriesOpt.clip=seriesOpt.clipOverflow;if(false){}}}else if(seriesType==='pie'||seriesType==='gauge'){if(seriesOpt.clockWise!=null){seriesOpt.clockwise=seriesOpt.clockWise;if(false){}}compatPieLabel(seriesOpt.label);var data=seriesOpt.data;if(data&&!(0,util/* isTypedArray */.fU)(data)){for(var i=0;i<data.length;i++){compatPieLabel(data[i]);}}if(seriesOpt.hoverOffset!=null){seriesOpt.emphasis=seriesOpt.emphasis||{};if(seriesOpt.emphasis.scaleSize=null){if(false){}seriesOpt.emphasis.scaleSize=seriesOpt.hoverOffset;}}}else if(seriesType==='gauge'){var pointerColor=get(seriesOpt,'pointer.color');pointerColor!=null&&set(seriesOpt,'itemStyle.color',pointerColor);}else if(seriesType==='bar'){compatBarItemStyle(seriesOpt);compatBarItemStyle(seriesOpt.backgroundStyle);compatBarItemStyle(seriesOpt.emphasis);var data=seriesOpt.data;if(data&&!(0,util/* isTypedArray */.fU)(data)){for(var i=0;i<data.length;i++){if(_typeof(data[i])==='object'){compatBarItemStyle(data[i]);compatBarItemStyle(data[i]&&data[i].emphasis);}}}}else if(seriesType==='sunburst'){var highlightPolicy=seriesOpt.highlightPolicy;if(highlightPolicy){seriesOpt.emphasis=seriesOpt.emphasis||{};if(!seriesOpt.emphasis.focus){seriesOpt.emphasis.focus=highlightPolicy;if(false){}}}compatSunburstState(seriesOpt);traverseTree(seriesOpt.data,compatSunburstState);}else if(seriesType==='graph'||seriesType==='sankey'){compatGraphFocus(seriesOpt);// TODO nodes, edges?
}else if(seriesType==='map'){if(seriesOpt.mapType&&!seriesOpt.map){if(false){}seriesOpt.map=seriesOpt.mapType;}if(seriesOpt.mapLocation){if(false){}(0,util/* defaults */.ce)(seriesOpt,seriesOpt.mapLocation);}}if(seriesOpt.hoverAnimation!=null){seriesOpt.emphasis=seriesOpt.emphasis||{};if(seriesOpt.emphasis&&seriesOpt.emphasis.scale==null){if(false){}seriesOpt.emphasis.scale=seriesOpt.hoverAnimation;}}compatLayoutProperties(seriesOpt);});// dataRange has changed to visualMap
if(option.dataRange){option.visualMap=option.dataRange;}(0,util/* each */.S6)(COMPATITABLE_COMPONENTS,function(componentName){var options=option[componentName];if(options){if(!(0,util/* isArray */.kJ)(options)){options=[options];}(0,util/* each */.S6)(options,function(option){compatLayoutProperties(option);});}});}

/***/ }),

/***/ 10565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ dataFilter)
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
*/function dataFilter(seriesType){return{seriesType:seriesType,reset:function reset(seriesModel,ecModel){var legendModels=ecModel.findComponents({mainType:'legend'});if(!legendModels||!legendModels.length){return;}var data=seriesModel.getData();data.filterSelf(function(idx){var name=data.getName(idx);// If in any legend component the status is not selected.
for(var i=0;i<legendModels.length;i++){// @ts-ignore FIXME: LegendModel
if(!legendModels[i].isSelected(name)){return false;}}return true;});}};}

/***/ }),

/***/ 61203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ dataSample)
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
*/var samplers={average:function average(frame){var sum=0;var count=0;for(var i=0;i<frame.length;i++){if(!isNaN(frame[i])){sum+=frame[i];count++;}}// Return NaN if count is 0
return count===0?NaN:sum/count;},sum:function sum(frame){var sum=0;for(var i=0;i<frame.length;i++){// Ignore NaN
sum+=frame[i]||0;}return sum;},max:function max(frame){var max=-Infinity;for(var i=0;i<frame.length;i++){frame[i]>max&&(max=frame[i]);}// NaN will cause illegal axis extent.
return isFinite(max)?max:NaN;},min:function min(frame){var min=Infinity;for(var i=0;i<frame.length;i++){frame[i]<min&&(min=frame[i]);}// NaN will cause illegal axis extent.
return isFinite(min)?min:NaN;},// TODO
// Median
nearest:function nearest(frame){return frame[0];}};var indexSampler=function indexSampler(frame){return Math.round(frame.length/2);};function dataSample(seriesType){return{seriesType:seriesType,// FIXME:TS never used, so comment it
// modifyOutputEnd: true,
reset:function reset(seriesModel,ecModel,api){var data=seriesModel.getData();var sampling=seriesModel.get('sampling');var coordSys=seriesModel.coordinateSystem;var count=data.count();// Only cartesian2d support down sampling. Disable it when there is few data.
if(count>10&&coordSys.type==='cartesian2d'&&sampling){var baseAxis=coordSys.getBaseAxis();var valueAxis=coordSys.getOtherAxis(baseAxis);var extent=baseAxis.getExtent();var dpr=api.getDevicePixelRatio();// Coordinste system has been resized
var size=Math.abs(extent[1]-extent[0])*(dpr||1);var rate=Math.round(count/size);if(isFinite(rate)&&rate>1){if(sampling==='lttb'){seriesModel.setData(data.lttbDownSample(data.mapDimension(valueAxis.dim),1/rate));}var sampler=void 0;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(sampling)){sampler=samplers[sampling];}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(sampling)){sampler=sampling;}if(sampler){// Only support sample the first dim mapped from value axis.
seriesModel.setData(data.downSample(data.mapDimension(valueAxis.dim),1/rate,sampler,indexSampler));}}}}};}

/***/ }),

/***/ 29967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ dataStack)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84646);
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
*/// (1) [Caution]: the logic is correct based on the premises:
//     data processing stage is blocked in stream.
//     See <module:echarts/stream/Scheduler#performDataProcessorTasks>
// (2) Only register once when import repeatedly.
//     Should be executed after series is filtered and before stack calculation.
function dataStack(ecModel){var stackInfoMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)();ecModel.eachSeries(function(seriesModel){var stack=seriesModel.get('stack');// Compatible: when `stack` is set as '', do not stack.
if(stack){var stackInfoList=stackInfoMap.get(stack)||stackInfoMap.set(stack,[]);var data=seriesModel.getData();var stackInfo={// Used for calculate axis extent automatically.
// TODO: Type getCalculationInfo return more specific type?
stackResultDimension:data.getCalculationInfo('stackResultDimension'),stackedOverDimension:data.getCalculationInfo('stackedOverDimension'),stackedDimension:data.getCalculationInfo('stackedDimension'),stackedByDimension:data.getCalculationInfo('stackedByDimension'),isStackedByIndex:data.getCalculationInfo('isStackedByIndex'),data:data,seriesModel:seriesModel};// If stacked on axis that do not support data stack.
if(!stackInfo.stackedDimension||!(stackInfo.isStackedByIndex||stackInfo.stackedByDimension)){return;}stackInfoList.length&&data.setCalculationInfo('stackedOnSeries',stackInfoList[stackInfoList.length-1].seriesModel);stackInfoList.push(stackInfo);}});stackInfoMap.each(calculateStack);}function calculateStack(stackInfoList){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(stackInfoList,function(targetStackInfo,idxInStack){var resultVal=[];var resultNaN=[NaN,NaN];var dims=[targetStackInfo.stackResultDimension,targetStackInfo.stackedOverDimension];var targetData=targetStackInfo.data;var isStackedByIndex=targetStackInfo.isStackedByIndex;var stackStrategy=targetStackInfo.seriesModel.get('stackStrategy')||'samesign';// Should not write on raw data, because stack series model list changes
// depending on legend selection.
targetData.modify(dims,function(v0,v1,dataIndex){var sum=targetData.get(targetStackInfo.stackedDimension,dataIndex);// Consider `connectNulls` of line area, if value is NaN, stackedOver
// should also be NaN, to draw a appropriate belt area.
if(isNaN(sum)){return resultNaN;}var byValue;var stackedDataRawIndex;if(isStackedByIndex){stackedDataRawIndex=targetData.getRawIndex(dataIndex);}else{byValue=targetData.get(targetStackInfo.stackedByDimension,dataIndex);}// If stackOver is NaN, chart view will render point on value start.
var stackedOver=NaN;for(var j=idxInStack-1;j>=0;j--){var stackInfo=stackInfoList[j];// Has been optimized by inverted indices on `stackedByDimension`.
if(!isStackedByIndex){stackedDataRawIndex=stackInfo.data.rawIndexOf(stackInfo.stackedByDimension,byValue);}if(stackedDataRawIndex>=0){var val=stackInfo.data.getByRawIndex(stackInfo.stackResultDimension,stackedDataRawIndex);// Considering positive stack, negative stack and empty data
if(stackStrategy==='all'// single stack group
||stackStrategy==='positive'&&val>0||stackStrategy==='negative'&&val<0||stackStrategy==='samesign'&&sum>=0&&val>0// All positive stack
||stackStrategy==='samesign'&&sum<=0&&val<0// All negative stack
){// The sum has to be very small to be affected by the
// floating arithmetic problem. An incorrect result will probably
// cause axis min/max to be filtered incorrectly.
sum=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__/* .addSafe */ .S$)(sum,val);stackedOver=val;break;}}}resultVal[0]=sum;resultVal[1]=stackedOver;return resultVal;});});}

/***/ }),

/***/ 76365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ negativeDataFilter)
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
*/function negativeDataFilter(seriesType){return{seriesType:seriesType,reset:function reset(seriesModel,ecModel){var data=seriesModel.getData();data.filterSelf(function(idx){// handle negative value condition
var valueDim=data.mapDimension('value');var curValue=data.get(valueDim,idx);if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(curValue)&&!isNaN(curValue)&&curValue<0){return false;}return true;});}};}

/***/ }),

/***/ 46271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88161);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84646);
/* harmony import */ var _util_format_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87662);
/* harmony import */ var _Scale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51337);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32590);
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
*/var roundNumber=_util_number_js__WEBPACK_IMPORTED_MODULE_0__/* .round */ .NM;var IntervalScale=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(IntervalScale,_super);function IntervalScale(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type='interval';// Step is calculated in adjustExtent.
_this._interval=0;_this._intervalPrecision=2;return _this;}IntervalScale.prototype.parse=function(val){return val;};IntervalScale.prototype.contain=function(val){return _helper_js__WEBPACK_IMPORTED_MODULE_2__/* .contain */ .XS(val,this._extent);};IntervalScale.prototype.normalize=function(val){return _helper_js__WEBPACK_IMPORTED_MODULE_2__/* .normalize */ .Fv(val,this._extent);};IntervalScale.prototype.scale=function(val){return _helper_js__WEBPACK_IMPORTED_MODULE_2__/* .scale */ .bA(val,this._extent);};IntervalScale.prototype.setExtent=function(start,end){var thisExtent=this._extent;// start,end may be a Number like '25',so...
if(!isNaN(start)){thisExtent[0]=parseFloat(start);}if(!isNaN(end)){thisExtent[1]=parseFloat(end);}};IntervalScale.prototype.unionExtent=function(other){var extent=this._extent;other[0]<extent[0]&&(extent[0]=other[0]);other[1]>extent[1]&&(extent[1]=other[1]);// unionExtent may called by it's sub classes
this.setExtent(extent[0],extent[1]);};IntervalScale.prototype.getInterval=function(){return this._interval;};IntervalScale.prototype.setInterval=function(interval){this._interval=interval;// Dropped auto calculated niceExtent and use user setted extent
// We assume user wan't to set both interval, min, max to get a better result
this._niceExtent=this._extent.slice();this._intervalPrecision=_helper_js__WEBPACK_IMPORTED_MODULE_2__/* .getIntervalPrecision */ .lb(interval);};/**
   * @param expandToNicedExtent Whether expand the ticks to niced extent.
   */IntervalScale.prototype.getTicks=function(expandToNicedExtent){var interval=this._interval;var extent=this._extent;var niceTickExtent=this._niceExtent;var intervalPrecision=this._intervalPrecision;var ticks=[];// If interval is 0, return [];
if(!interval){return ticks;}// Consider this case: using dataZoom toolbox, zoom and zoom.
var safeLimit=10000;if(extent[0]<niceTickExtent[0]){if(expandToNicedExtent){ticks.push({value:roundNumber(niceTickExtent[0]-interval,intervalPrecision)});}else{ticks.push({value:extent[0]});}}var tick=niceTickExtent[0];while(tick<=niceTickExtent[1]){ticks.push({value:tick});// Avoid rounding error
tick=roundNumber(tick+interval,intervalPrecision);if(tick===ticks[ticks.length-1].value){// Consider out of safe float point, e.g.,
// -3711126.9907707 + 2e-10 === -3711126.9907707
break;}if(ticks.length>safeLimit){return[];}}// Consider this case: the last item of ticks is smaller
// than niceTickExtent[1] and niceTickExtent[1] === extent[1].
var lastNiceTick=ticks.length?ticks[ticks.length-1].value:niceTickExtent[1];if(extent[1]>lastNiceTick){if(expandToNicedExtent){ticks.push({value:roundNumber(lastNiceTick+interval,intervalPrecision)});}else{ticks.push({value:extent[1]});}}return ticks;};IntervalScale.prototype.getMinorTicks=function(splitNumber){var ticks=this.getTicks(true);var minorTicks=[];var extent=this.getExtent();for(var i=1;i<ticks.length;i++){var nextTick=ticks[i];var prevTick=ticks[i-1];var count=0;var minorTicksGroup=[];var interval=nextTick.value-prevTick.value;var minorInterval=interval/splitNumber;while(count<splitNumber-1){var minorTick=roundNumber(prevTick.value+(count+1)*minorInterval);// For the first and last interval. The count may be less than splitNumber.
if(minorTick>extent[0]&&minorTick<extent[1]){minorTicksGroup.push(minorTick);}count++;}minorTicks.push(minorTicksGroup);}return minorTicks;};/**
   * @param opt.precision If 'auto', use nice presision.
   * @param opt.pad returns 1.50 but not 1.5 if precision is 2.
   */IntervalScale.prototype.getLabel=function(data,opt){if(data==null){return'';}var precision=opt&&opt.precision;if(precision==null){precision=_util_number_js__WEBPACK_IMPORTED_MODULE_0__/* .getPrecision */ .p8(data.value)||0;}else if(precision==='auto'){// Should be more precise then tick.
precision=this._intervalPrecision;}// (1) If `precision` is set, 12.005 should be display as '12.00500'.
// (2) Use roundNumber (toFixed) to avoid scientific notation like '3.5e-7'.
var dataNum=roundNumber(data.value,precision,true);return _util_format_js__WEBPACK_IMPORTED_MODULE_3__/* .addCommas */ .OD(dataNum);};/**
   * @param splitNumber By default `5`.
   */IntervalScale.prototype.calcNiceTicks=function(splitNumber,minInterval,maxInterval){splitNumber=splitNumber||5;var extent=this._extent;var span=extent[1]-extent[0];if(!isFinite(span)){return;}// User may set axis min 0 and data are all negative
// FIXME If it needs to reverse ?
if(span<0){span=-span;extent.reverse();}var result=_helper_js__WEBPACK_IMPORTED_MODULE_2__/* .intervalScaleNiceTicks */ .Qf(extent,splitNumber,minInterval,maxInterval);this._intervalPrecision=result.intervalPrecision;this._interval=result.interval;this._niceExtent=result.niceTickExtent;};IntervalScale.prototype.calcNiceExtent=function(opt){var extent=this._extent;// If extent start and end are same, expand them
if(extent[0]===extent[1]){if(extent[0]!==0){// Expand extent
var expandSize=extent[0];// In the fowllowing case
//      Axis has been fixed max 100
//      Plus data are all 100 and axis extent are [100, 100].
// Extend to the both side will cause expanded max is larger than fixed max.
// So only expand to the smaller side.
if(!opt.fixMax){extent[1]+=expandSize/2;extent[0]-=expandSize/2;}else{extent[0]-=expandSize/2;}}else{extent[1]=1;}}var span=extent[1]-extent[0];// If there are no data and extent are [Infinity, -Infinity]
if(!isFinite(span)){extent[0]=0;extent[1]=1;}this.calcNiceTicks(opt.splitNumber,opt.minInterval,opt.maxInterval);// let extent = this._extent;
var interval=this._interval;if(!opt.fixMin){extent[0]=roundNumber(Math.floor(extent[0]/interval)*interval);}if(!opt.fixMax){extent[1]=roundNumber(Math.ceil(extent[1]/interval)*interval);}};IntervalScale.prototype.setNiceExtent=function(min,max){this._niceExtent=[min,max];};IntervalScale.type='interval';return IntervalScale;}(_Scale_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);_Scale_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].registerClass */ .Z.registerClass(IntervalScale);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntervalScale);

/***/ }),

/***/ 12746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88161);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57697);
/* harmony import */ var _Scale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51337);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84646);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32590);
/* harmony import */ var _Interval_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46271);
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
*/// Use some method of IntervalScale
var scaleProto=_Scale_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].prototype */ .Z.prototype;// FIXME:TS refactor: not good to call it directly with `this`?
var intervalScaleProto=_Interval_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].prototype */ .Z.prototype;var roundingErrorFix=_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .round */ .NM;var mathFloor=Math.floor;var mathCeil=Math.ceil;var mathPow=Math.pow;var mathLog=Math.log;var LogScale=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__extends */ .ZT)(LogScale,_super);function LogScale(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.type='log';_this.base=10;_this._originalScale=new _Interval_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();// FIXME:TS actually used by `IntervalScale`
_this._interval=0;return _this;}/**
   * @param Whether expand the ticks to niced extent.
   */LogScale.prototype.getTicks=function(expandToNicedExtent){var originalScale=this._originalScale;var extent=this._extent;var originalExtent=originalScale.getExtent();var ticks=intervalScaleProto.getTicks.call(this,expandToNicedExtent);return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .map */ .UI(ticks,function(tick){var val=tick.value;var powVal=_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .round */ .NM(mathPow(this.base,val));// Fix #4158
powVal=val===extent[0]&&this._fixMin?fixRoundingError(powVal,originalExtent[0]):powVal;powVal=val===extent[1]&&this._fixMax?fixRoundingError(powVal,originalExtent[1]):powVal;return{value:powVal};},this);};LogScale.prototype.setExtent=function(start,end){var base=this.base;start=mathLog(start)/mathLog(base);end=mathLog(end)/mathLog(base);intervalScaleProto.setExtent.call(this,start,end);};/**
   * @return {number} end
   */LogScale.prototype.getExtent=function(){var base=this.base;var extent=scaleProto.getExtent.call(this);extent[0]=mathPow(base,extent[0]);extent[1]=mathPow(base,extent[1]);// Fix #4158
var originalScale=this._originalScale;var originalExtent=originalScale.getExtent();this._fixMin&&(extent[0]=fixRoundingError(extent[0],originalExtent[0]));this._fixMax&&(extent[1]=fixRoundingError(extent[1],originalExtent[1]));return extent;};LogScale.prototype.unionExtent=function(extent){this._originalScale.unionExtent(extent);var base=this.base;extent[0]=mathLog(extent[0])/mathLog(base);extent[1]=mathLog(extent[1])/mathLog(base);scaleProto.unionExtent.call(this,extent);};LogScale.prototype.unionExtentFromData=function(data,dim){// TODO
// filter value that <= 0
this.unionExtent(data.getApproximateExtent(dim));};/**
   * Update interval and extent of intervals for nice ticks
   * @param approxTickNum default 10 Given approx tick number
   */LogScale.prototype.calcNiceTicks=function(approxTickNum){approxTickNum=approxTickNum||10;var extent=this._extent;var span=extent[1]-extent[0];if(span===Infinity||span<=0){return;}var interval=_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .quantity */ .Xd(span);var err=approxTickNum/span*interval;// Filter ticks to get closer to the desired count.
if(err<=0.5){interval*=10;}// Interval should be integer
while(!isNaN(interval)&&Math.abs(interval)<1&&Math.abs(interval)>0){interval*=10;}var niceExtent=[_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .round */ .NM(mathCeil(extent[0]/interval)*interval),_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .round */ .NM(mathFloor(extent[1]/interval)*interval)];this._interval=interval;this._niceExtent=niceExtent;};LogScale.prototype.calcNiceExtent=function(opt){intervalScaleProto.calcNiceExtent.call(this,opt);this._fixMin=opt.fixMin;this._fixMax=opt.fixMax;};LogScale.prototype.parse=function(val){return val;};LogScale.prototype.contain=function(val){val=mathLog(val)/mathLog(this.base);return _helper_js__WEBPACK_IMPORTED_MODULE_5__/* .contain */ .XS(val,this._extent);};LogScale.prototype.normalize=function(val){val=mathLog(val)/mathLog(this.base);return _helper_js__WEBPACK_IMPORTED_MODULE_5__/* .normalize */ .Fv(val,this._extent);};LogScale.prototype.scale=function(val){val=_helper_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .bA(val,this._extent);return mathPow(this.base,val);};LogScale.type='log';return LogScale;}(_Scale_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);var proto=LogScale.prototype;proto.getMinorTicks=intervalScaleProto.getMinorTicks;proto.getLabel=intervalScaleProto.getLabel;function fixRoundingError(val,originalVal){return roundingErrorFix(val,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .getPrecision */ .p8(originalVal));}_Scale_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].registerClass */ .Z.registerClass(LogScale);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogScale);

/***/ }),

/***/ 29242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88161);
/* harmony import */ var _Scale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51337);
/* harmony import */ var _data_OrdinalMeta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74566);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32590);
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
*//**
 * Linear continuous scale
 * http://en.wikipedia.org/wiki/Level_of_measurement
 */ // FIXME only one data
var OrdinalScale=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(OrdinalScale,_super);function OrdinalScale(setting){var _this=_super.call(this,setting)||this;_this.type='ordinal';var ordinalMeta=_this.getSetting('ordinalMeta');// Caution: Should not use instanceof, consider ec-extensions using
// import approach to get OrdinalMeta class.
if(!ordinalMeta){ordinalMeta=new _data_OrdinalMeta_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({});}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArray */ .kJ)(ordinalMeta)){ordinalMeta=new _data_OrdinalMeta_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({categories:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .map */ .UI)(ordinalMeta,function(item){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isObject */ .Kn)(item)?item.value:item;})});}_this._ordinalMeta=ordinalMeta;_this._extent=_this.getSetting('extent')||[0,ordinalMeta.categories.length-1];return _this;}OrdinalScale.prototype.parse=function(val){// Caution: Math.round(null) will return `0` rather than `NaN`
if(val==null){return NaN;}return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isString */ .HD)(val)?this._ordinalMeta.getOrdinal(val)// val might be float.
:Math.round(val);};OrdinalScale.prototype.contain=function(rank){rank=this.parse(rank);return _helper_js__WEBPACK_IMPORTED_MODULE_3__/* .contain */ .XS(rank,this._extent)&&this._ordinalMeta.categories[rank]!=null;};/**
   * Normalize given rank or name to linear [0, 1]
   * @param val raw ordinal number.
   * @return normalized value in [0, 1].
   */OrdinalScale.prototype.normalize=function(val){val=this._getTickNumber(this.parse(val));return _helper_js__WEBPACK_IMPORTED_MODULE_3__/* .normalize */ .Fv(val,this._extent);};/**
   * @param val normalized value in [0, 1].
   * @return raw ordinal number.
   */OrdinalScale.prototype.scale=function(val){val=Math.round(_helper_js__WEBPACK_IMPORTED_MODULE_3__/* .scale */ .bA(val,this._extent));return this.getRawOrdinalNumber(val);};OrdinalScale.prototype.getTicks=function(){var ticks=[];var extent=this._extent;var rank=extent[0];while(rank<=extent[1]){ticks.push({value:rank});rank++;}return ticks;};OrdinalScale.prototype.getMinorTicks=function(splitNumber){// Not support.
return;};/**
   * @see `Ordinal['_ordinalNumbersByTick']`
   */OrdinalScale.prototype.setSortInfo=function(info){if(info==null){this._ordinalNumbersByTick=this._ticksByOrdinalNumber=null;return;}var infoOrdinalNumbers=info.ordinalNumbers;var ordinalsByTick=this._ordinalNumbersByTick=[];var ticksByOrdinal=this._ticksByOrdinalNumber=[];// Unnecessary support negative tick in `realtimeSort`.
var tickNum=0;var allCategoryLen=this._ordinalMeta.categories.length;for(var len=Math.min(allCategoryLen,infoOrdinalNumbers.length);tickNum<len;++tickNum){var ordinalNumber=infoOrdinalNumbers[tickNum];ordinalsByTick[tickNum]=ordinalNumber;ticksByOrdinal[ordinalNumber]=tickNum;}// Handle that `series.data` only covers part of the `axis.category.data`.
var unusedOrdinal=0;for(;tickNum<allCategoryLen;++tickNum){while(ticksByOrdinal[unusedOrdinal]!=null){unusedOrdinal++;};ordinalsByTick.push(unusedOrdinal);ticksByOrdinal[unusedOrdinal]=tickNum;}};OrdinalScale.prototype._getTickNumber=function(ordinal){var ticksByOrdinalNumber=this._ticksByOrdinalNumber;// also support ordinal out of range of `ordinalMeta.categories.length`,
// where ordinal numbers are used as tick value directly.
return ticksByOrdinalNumber&&ordinal>=0&&ordinal<ticksByOrdinalNumber.length?ticksByOrdinalNumber[ordinal]:ordinal;};/**
   * @usage
   * ```js
   * const ordinalNumber = ordinalScale.getRawOrdinalNumber(tickVal);
   *
   * // case0
   * const rawOrdinalValue = axisModel.getCategories()[ordinalNumber];
   * // case1
   * const rawOrdinalValue = this._ordinalMeta.categories[ordinalNumber];
   * // case2
   * const coord = axis.dataToCoord(ordinalNumber);
   * ```
   *
   * @param {OrdinalNumber} tickNumber index of display
   */OrdinalScale.prototype.getRawOrdinalNumber=function(tickNumber){var ordinalNumbersByTick=this._ordinalNumbersByTick;// tickNumber may be out of range, e.g., when axis max is larger than `ordinalMeta.categories.length`.,
// where ordinal numbers are used as tick value directly.
return ordinalNumbersByTick&&tickNumber>=0&&tickNumber<ordinalNumbersByTick.length?ordinalNumbersByTick[tickNumber]:tickNumber;};/**
   * Get item on tick
   */OrdinalScale.prototype.getLabel=function(tick){if(!this.isBlank()){var ordinalNumber=this.getRawOrdinalNumber(tick.value);var cateogry=this._ordinalMeta.categories[ordinalNumber];// Note that if no data, ordinalMeta.categories is an empty array.
// Return empty if it's not exist.
return cateogry==null?'':cateogry+'';}};OrdinalScale.prototype.count=function(){return this._extent[1]-this._extent[0]+1;};OrdinalScale.prototype.unionExtentFromData=function(data,dim){this.unionExtent(data.getApproximateExtent(dim));};/**
   * @override
   * If value is in extent range
   */OrdinalScale.prototype.isInExtentRange=function(value){value=this._getTickNumber(value);return this._extent[0]<=value&&this._extent[1]>=value;};OrdinalScale.prototype.getOrdinalMeta=function(){return this._ordinalMeta;};OrdinalScale.prototype.calcNiceTicks=function(){};OrdinalScale.prototype.calcNiceExtent=function(){};OrdinalScale.type='ordinal';return OrdinalScale;}(_Scale_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);_Scale_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].registerClass */ .Z.registerClass(OrdinalScale);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdinalScale);

/***/ }),

/***/ 51337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_clazz_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18496);
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
*/var Scale=/** @class */function(){function Scale(setting){this._setting=setting||{};this._extent=[Infinity,-Infinity];}Scale.prototype.getSetting=function(name){return this._setting[name];};/**
   * Set extent from data
   */Scale.prototype.unionExtent=function(other){var extent=this._extent;other[0]<extent[0]&&(extent[0]=other[0]);other[1]>extent[1]&&(extent[1]=other[1]);// not setExtent because in log axis it may transformed to power
// this.setExtent(extent[0], extent[1]);
};/**
   * Set extent from data
   */Scale.prototype.unionExtentFromData=function(data,dim){this.unionExtent(data.getApproximateExtent(dim));};/**
   * Get extent
   *
   * Extent is always in increase order.
   */Scale.prototype.getExtent=function(){return this._extent.slice();};/**
   * Set extent
   */Scale.prototype.setExtent=function(start,end){var thisExtent=this._extent;if(!isNaN(start)){thisExtent[0]=start;}if(!isNaN(end)){thisExtent[1]=end;}};/**
   * If value is in extent range
   */Scale.prototype.isInExtentRange=function(value){return this._extent[0]<=value&&this._extent[1]>=value;};/**
   * When axis extent depends on data and no data exists,
   * axis ticks should not be drawn, which is named 'blank'.
   */Scale.prototype.isBlank=function(){return this._isBlank;};/**
   * When axis extent depends on data and no data exists,
   * axis ticks should not be drawn, which is named 'blank'.
   */Scale.prototype.setBlank=function(isBlank){this._isBlank=isBlank;};return Scale;}();_util_clazz_js__WEBPACK_IMPORTED_MODULE_0__/* .enableClassManagement */ .au(Scale);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scale);

/***/ }),

/***/ 3454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88161);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84646);
/* harmony import */ var _util_time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74134);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32590);
/* harmony import */ var _Interval_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46271);
/* harmony import */ var _Scale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51337);
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
*//*
* A third-party license is embeded for some of the code in this file:
* The "scaleLevels" was originally copied from "d3.js" with some
* modifications made for this project.
* (See more details in the comment on the definition of "scaleLevels" below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/ // [About UTC and local time zone]:
// In most cases, `number.parseDate` will treat input data string as local time
// (except time zone is specified in time string). And `format.formateTime` returns
// local time by default. option.useUTC is false by default. This design have
// concidered these common case:
// (1) Time that is persistent in server is in UTC, but it is needed to be diplayed
// in local time by default.
// (2) By default, the input data string (e.g., '2011-01-02') should be displayed
// as its original time, without any time difference.
// FIXME 公用？
var bisect=function bisect(a,x,lo,hi){while(lo<hi){var mid=lo+hi>>>1;if(a[mid][1]<x){lo=mid+1;}else{hi=mid;}}return lo;};var TimeScale=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(TimeScale,_super);function TimeScale(settings){var _this=_super.call(this,settings)||this;_this.type='time';return _this;}/**
   * Get label is mainly for other components like dataZoom, tooltip.
   */TimeScale.prototype.getLabel=function(tick){var useUTC=this.getSetting('useUTC');return (0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .format */ .WU)(tick.value,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .fullLeveledFormatter */ .V8[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .getDefaultFormatPrecisionOfInterval */ .xC)((0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrimaryTimeUnit */ .Tj)(this._minLevelUnit))]||_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .fullLeveledFormatter.second */ .V8.second,useUTC,this.getSetting('locale'));};TimeScale.prototype.getFormattedLabel=function(tick,idx,labelFormatter){var isUTC=this.getSetting('useUTC');var lang=this.getSetting('locale');return (0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .leveledFormat */ .k7)(tick,idx,labelFormatter,lang,isUTC);};/**
   * @override
   */TimeScale.prototype.getTicks=function(){var interval=this._interval;var extent=this._extent;var ticks=[];// If interval is 0, return [];
if(!interval){return ticks;}ticks.push({value:extent[0],level:0});var useUTC=this.getSetting('useUTC');var innerTicks=getIntervalTicks(this._minLevelUnit,this._approxInterval,useUTC,extent);ticks=ticks.concat(innerTicks);ticks.push({value:extent[1],level:0});return ticks;};TimeScale.prototype.calcNiceExtent=function(opt){var extent=this._extent;// If extent start and end are same, expand them
if(extent[0]===extent[1]){// Expand extent
extent[0]-=_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2;extent[1]+=_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2;}// If there are no data and extent are [Infinity, -Infinity]
if(extent[1]===-Infinity&&extent[0]===Infinity){var d=new Date();extent[1]=+new Date(d.getFullYear(),d.getMonth(),d.getDate());extent[0]=extent[1]-_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2;}this.calcNiceTicks(opt.splitNumber,opt.minInterval,opt.maxInterval);};TimeScale.prototype.calcNiceTicks=function(approxTickNum,minInterval,maxInterval){approxTickNum=approxTickNum||10;var extent=this._extent;var span=extent[1]-extent[0];this._approxInterval=span/approxTickNum;if(minInterval!=null&&this._approxInterval<minInterval){this._approxInterval=minInterval;}if(maxInterval!=null&&this._approxInterval>maxInterval){this._approxInterval=maxInterval;}var scaleIntervalsLen=scaleIntervals.length;var idx=Math.min(bisect(scaleIntervals,this._approxInterval,0,scaleIntervalsLen),scaleIntervalsLen-1);// Interval that can be used to calculate ticks
this._interval=scaleIntervals[idx][1];// Min level used when picking ticks from top down.
// We check one more level to avoid the ticks are to sparse in some case.
this._minLevelUnit=scaleIntervals[Math.max(idx-1,0)][0];};TimeScale.prototype.parse=function(val){// val might be float.
return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumber */ .hj)(val)?val:+_util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .parseDate */ .sG(val);};TimeScale.prototype.contain=function(val){return _helper_js__WEBPACK_IMPORTED_MODULE_4__/* .contain */ .XS(this.parse(val),this._extent);};TimeScale.prototype.normalize=function(val){return _helper_js__WEBPACK_IMPORTED_MODULE_4__/* .normalize */ .Fv(this.parse(val),this._extent);};TimeScale.prototype.scale=function(val){return _helper_js__WEBPACK_IMPORTED_MODULE_4__/* .scale */ .bA(val,this._extent);};TimeScale.type='time';return TimeScale;}(_Interval_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);/**
 * This implementation was originally copied from "d3.js"
 * <https://github.com/d3/d3/blob/b516d77fb8566b576088e73410437494717ada26/src/time/scale.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 */var scaleIntervals=[// Format                           interval
['second',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_SECOND */ .WT],['minute',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_MINUTE */ .yR],['hour',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_HOUR */ .dV],['quarter-day',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_HOUR */ .dV*6],['half-day',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_HOUR */ .dV*12],['day',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2*1.2],['half-week',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2*3.5],['week',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2*7],['month',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2*31],['quarter',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2*95],['half-year',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_YEAR */ .P5/2],['year',_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_YEAR */ .P5]// 1Y
];function isUnitValueSame(unit,valueA,valueB,isUTC){var dateA=_util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .parseDate */ .sG(valueA);var dateB=_util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .parseDate */ .sG(valueB);var isSame=function isSame(unit){return (0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .getUnitValue */ .q5)(dateA,unit,isUTC)===(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .getUnitValue */ .q5)(dateB,unit,isUTC);};var isSameYear=function isSameYear(){return isSame('year');};// const isSameHalfYear = () => isSameYear() && isSame('half-year');
// const isSameQuater = () => isSameYear() && isSame('quarter');
var isSameMonth=function isSameMonth(){return isSameYear()&&isSame('month');};var isSameDay=function isSameDay(){return isSameMonth()&&isSame('day');};// const isSameHalfDay = () => isSameDay() && isSame('half-day');
var isSameHour=function isSameHour(){return isSameDay()&&isSame('hour');};var isSameMinute=function isSameMinute(){return isSameHour()&&isSame('minute');};var isSameSecond=function isSameSecond(){return isSameMinute()&&isSame('second');};var isSameMilliSecond=function isSameMilliSecond(){return isSameSecond()&&isSame('millisecond');};switch(unit){case'year':return isSameYear();case'month':return isSameMonth();case'day':return isSameDay();case'hour':return isSameHour();case'minute':return isSameMinute();case'second':return isSameSecond();case'millisecond':return isSameMilliSecond();}}// const primaryUnitGetters = {
//     year: fullYearGetterName(),
//     month: monthGetterName(),
//     day: dateGetterName(),
//     hour: hoursGetterName(),
//     minute: minutesGetterName(),
//     second: secondsGetterName(),
//     millisecond: millisecondsGetterName()
// };
// const primaryUnitUTCGetters = {
//     year: fullYearGetterName(true),
//     month: monthGetterName(true),
//     day: dateGetterName(true),
//     hour: hoursGetterName(true),
//     minute: minutesGetterName(true),
//     second: secondsGetterName(true),
//     millisecond: millisecondsGetterName(true)
// };
// function moveTick(date: Date, unitName: TimeUnit, step: number, isUTC: boolean) {
//     step = step || 1;
//     switch (getPrimaryTimeUnit(unitName)) {
//         case 'year':
//             date[fullYearSetterName(isUTC)](date[fullYearGetterName(isUTC)]() + step);
//             break;
//         case 'month':
//             date[monthSetterName(isUTC)](date[monthGetterName(isUTC)]() + step);
//             break;
//         case 'day':
//             date[dateSetterName(isUTC)](date[dateGetterName(isUTC)]() + step);
//             break;
//         case 'hour':
//             date[hoursSetterName(isUTC)](date[hoursGetterName(isUTC)]() + step);
//             break;
//         case 'minute':
//             date[minutesSetterName(isUTC)](date[minutesGetterName(isUTC)]() + step);
//             break;
//         case 'second':
//             date[secondsSetterName(isUTC)](date[secondsGetterName(isUTC)]() + step);
//             break;
//         case 'millisecond':
//             date[millisecondsSetterName(isUTC)](date[millisecondsGetterName(isUTC)]() + step);
//             break;
//     }
//     return date.getTime();
// }
// const DATE_INTERVALS = [[8, 7.5], [4, 3.5], [2, 1.5]];
// const MONTH_INTERVALS = [[6, 5.5], [3, 2.5], [2, 1.5]];
// const MINUTES_SECONDS_INTERVALS = [[30, 30], [20, 20], [15, 15], [10, 10], [5, 5], [2, 2]];
function getDateInterval(approxInterval,daysInMonth){approxInterval/=_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2;return approxInterval>16?16// Math.floor(daysInMonth / 2) + 1  // In this case we only want one tick betwen two month.
:approxInterval>7.5?7// TODO week 7 or day 8?
:approxInterval>3.5?4:approxInterval>1.5?2:1;}function getMonthInterval(approxInterval){var APPROX_ONE_MONTH=30*_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2;approxInterval/=APPROX_ONE_MONTH;return approxInterval>6?6:approxInterval>3?3:approxInterval>2?2:1;}function getHourInterval(approxInterval){approxInterval/=_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_HOUR */ .dV;return approxInterval>12?12:approxInterval>6?6:approxInterval>3.5?4:approxInterval>2?2:1;}function getMinutesAndSecondsInterval(approxInterval,isMinutes){approxInterval/=isMinutes?_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_MINUTE */ .yR:_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_SECOND */ .WT;return approxInterval>30?30:approxInterval>20?20:approxInterval>15?15:approxInterval>10?10:approxInterval>5?5:approxInterval>2?2:1;}function getMillisecondsInterval(approxInterval){return _util_number_js__WEBPACK_IMPORTED_MODULE_3__/* .nice */ .kx(approxInterval,true);}function getFirstTimestampOfUnit(date,unitName,isUTC){var outDate=new Date(date);switch((0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrimaryTimeUnit */ .Tj)(unitName)){case'year':case'month':outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .monthSetterName */ .vh)(isUTC)](0);case'day':outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .dateSetterName */ .f5)(isUTC)](1);case'hour':outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .hoursSetterName */ .En)(isUTC)](0);case'minute':outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .minutesSetterName */ .eN)(isUTC)](0);case'second':outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .secondsSetterName */ .rM)(isUTC)](0);outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .millisecondsSetterName */ .cb)(isUTC)](0);}return outDate.getTime();}function getIntervalTicks(bottomUnitName,approxInterval,isUTC,extent){var safeLimit=10000;var unitNames=_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .timeUnits */ .FW;var iter=0;function addTicksInSpan(interval,minTimestamp,maxTimestamp,getMethodName,setMethodName,isDate,out){var date=new Date(minTimestamp);var dateTime=minTimestamp;var d=date[getMethodName]();// if (isDate) {
//     d -= 1; // Starts with 0;   PENDING
// }
while(dateTime<maxTimestamp&&dateTime<=extent[1]){out.push({value:dateTime});d+=interval;date[setMethodName](d);dateTime=date.getTime();}// This extra tick is for calcuating ticks of next level. Will not been added to the final result
out.push({value:dateTime,notAdd:true});}function addLevelTicks(unitName,lastLevelTicks,levelTicks){var newAddedTicks=[];var isFirstLevel=!lastLevelTicks.length;if(isUnitValueSame((0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrimaryTimeUnit */ .Tj)(unitName),extent[0],extent[1],isUTC)){return;}if(isFirstLevel){lastLevelTicks=[{// TODO Optimize. Not include so may ticks.
value:getFirstTimestampOfUnit(new Date(extent[0]),unitName,isUTC)},{value:extent[1]}];}for(var i=0;i<lastLevelTicks.length-1;i++){var startTick=lastLevelTicks[i].value;var endTick=lastLevelTicks[i+1].value;if(startTick===endTick){continue;}var interval=void 0;var getterName=void 0;var setterName=void 0;var isDate=false;switch(unitName){case'year':interval=Math.max(1,Math.round(approxInterval/_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY */ .s2/365));getterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .fullYearGetterName */ .sx)(isUTC);setterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .fullYearSetterName */ .xL)(isUTC);break;case'half-year':case'quarter':case'month':interval=getMonthInterval(approxInterval);getterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .monthGetterName */ .CW)(isUTC);setterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .monthSetterName */ .vh)(isUTC);break;case'week':// PENDING If week is added. Ignore day.
case'half-week':case'day':interval=getDateInterval(approxInterval,31);// Use 32 days and let interval been 16
getterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .dateGetterName */ .xz)(isUTC);setterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .dateSetterName */ .f5)(isUTC);isDate=true;break;case'half-day':case'quarter-day':case'hour':interval=getHourInterval(approxInterval);getterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .hoursGetterName */ .Wp)(isUTC);setterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .hoursSetterName */ .En)(isUTC);break;case'minute':interval=getMinutesAndSecondsInterval(approxInterval,true);getterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .minutesGetterName */ .fn)(isUTC);setterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .minutesSetterName */ .eN)(isUTC);break;case'second':interval=getMinutesAndSecondsInterval(approxInterval,false);getterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .secondsGetterName */ .MV)(isUTC);setterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .secondsSetterName */ .rM)(isUTC);break;case'millisecond':interval=getMillisecondsInterval(approxInterval);getterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .millisecondsGetterName */ .RZ)(isUTC);setterName=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .millisecondsSetterName */ .cb)(isUTC);break;}addTicksInSpan(interval,startTick,endTick,getterName,setterName,isDate,newAddedTicks);if(unitName==='year'&&levelTicks.length>1&&i===0){// Add nearest years to the left extent.
levelTicks.unshift({value:levelTicks[0].value-interval});}}for(var i=0;i<newAddedTicks.length;i++){levelTicks.push(newAddedTicks[i]);}// newAddedTicks.length && console.log(unitName, newAddedTicks);
return newAddedTicks;}var levelsTicks=[];var currentLevelTicks=[];var tickCount=0;var lastLevelTickCount=0;for(var i=0;i<unitNames.length&&iter++<safeLimit;++i){var primaryTimeUnit=(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrimaryTimeUnit */ .Tj)(unitNames[i]);if(!(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .isPrimaryTimeUnit */ .$K)(unitNames[i])){// TODO
continue;}addLevelTicks(unitNames[i],levelsTicks[levelsTicks.length-1]||[],currentLevelTicks);var nextPrimaryTimeUnit=unitNames[i+1]?(0,_util_time_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrimaryTimeUnit */ .Tj)(unitNames[i+1]):null;if(primaryTimeUnit!==nextPrimaryTimeUnit){if(currentLevelTicks.length){lastLevelTickCount=tickCount;// Remove the duplicate so the tick count can be precisely.
currentLevelTicks.sort(function(a,b){return a.value-b.value;});var levelTicksRemoveDuplicated=[];for(var i_1=0;i_1<currentLevelTicks.length;++i_1){var tickValue=currentLevelTicks[i_1].value;if(i_1===0||currentLevelTicks[i_1-1].value!==tickValue){levelTicksRemoveDuplicated.push(currentLevelTicks[i_1]);if(tickValue>=extent[0]&&tickValue<=extent[1]){tickCount++;}}}var targetTickNum=(extent[1]-extent[0])/approxInterval;// Added too much in this level and not too less in last level
if(tickCount>targetTickNum*1.5&&lastLevelTickCount>targetTickNum/1.5){break;}// Only treat primary time unit as one level.
levelsTicks.push(levelTicksRemoveDuplicated);if(tickCount>targetTickNum||bottomUnitName===unitNames[i]){break;}}// Reset if next unitName is primary
currentLevelTicks=[];}}if(false){}var levelsTicksInExtent=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .hX)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .map */ .UI)(levelsTicks,function(levelTicks){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .hX)(levelTicks,function(tick){return tick.value>=extent[0]&&tick.value<=extent[1]&&!tick.notAdd;});}),function(levelTicks){return levelTicks.length>0;});var ticks=[];var maxLevel=levelsTicksInExtent.length-1;for(var i=0;i<levelsTicksInExtent.length;++i){var levelTicks=levelsTicksInExtent[i];for(var k=0;k<levelTicks.length;++k){ticks.push({value:levelTicks[k].value,level:maxLevel-i});}}ticks.sort(function(a,b){return a.value-b.value;});// Remove duplicates
var result=[];for(var i=0;i<ticks.length;++i){if(i===0||ticks[i].value!==ticks[i-1].value){result.push(ticks[i]);}}return result;}_Scale_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"].registerClass */ .Z.registerClass(TimeScale);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeScale);

/***/ }),

/***/ 32590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fv": () => (/* binding */ normalize),
/* harmony export */   "Qf": () => (/* binding */ intervalScaleNiceTicks),
/* harmony export */   "XS": () => (/* binding */ contain),
/* harmony export */   "bA": () => (/* binding */ scale),
/* harmony export */   "lM": () => (/* binding */ isIntervalOrLogScale),
/* harmony export */   "lb": () => (/* binding */ getIntervalPrecision),
/* harmony export */   "r1": () => (/* binding */ increaseInterval)
/* harmony export */ });
/* unused harmony exports isValueNice, fixExtent */
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84646);
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
*/function isValueNice(val){var exp10=Math.pow(10,quantityExponent(Math.abs(val)));var f=Math.abs(val/exp10);return f===0||f===1||f===2||f===3||f===5;}function isIntervalOrLogScale(scale){return scale.type==='interval'||scale.type==='log';}/**
 * @param extent Both extent[0] and extent[1] should be valid number.
 *               Should be extent[0] < extent[1].
 * @param splitNumber splitNumber should be >= 1.
 */function intervalScaleNiceTicks(extent,splitNumber,minInterval,maxInterval){var result={};var span=extent[1]-extent[0];var interval=result.interval=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__/* .nice */ .kx)(span/splitNumber,true);if(minInterval!=null&&interval<minInterval){interval=result.interval=minInterval;}if(maxInterval!=null&&interval>maxInterval){interval=result.interval=maxInterval;}// Tow more digital for tick.
var precision=result.intervalPrecision=getIntervalPrecision(interval);// Niced extent inside original extent
var niceTickExtent=result.niceTickExtent=[(0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__/* .round */ .NM)(Math.ceil(extent[0]/interval)*interval,precision),(0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__/* .round */ .NM)(Math.floor(extent[1]/interval)*interval,precision)];fixExtent(niceTickExtent,extent);return result;}function increaseInterval(interval){var exp10=Math.pow(10,(0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__/* .quantityExponent */ .xW)(interval));// Increase interval
var f=interval/exp10;if(!f){f=1;}else if(f===2){f=3;}else if(f===3){f=5;}else{// f is 1 or 5
f*=2;}return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__/* .round */ .NM)(f*exp10);}/**
 * @return interval precision
 */function getIntervalPrecision(interval){// Tow more digital for tick.
return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__/* .getPrecision */ .p8)(interval)+2;}function clamp(niceTickExtent,idx,extent){niceTickExtent[idx]=Math.max(Math.min(niceTickExtent[idx],extent[1]),extent[0]);}// In some cases (e.g., splitNumber is 1), niceTickExtent may be out of extent.
function fixExtent(niceTickExtent,extent){!isFinite(niceTickExtent[0])&&(niceTickExtent[0]=extent[0]);!isFinite(niceTickExtent[1])&&(niceTickExtent[1]=extent[1]);clamp(niceTickExtent,0,extent);clamp(niceTickExtent,1,extent);if(niceTickExtent[0]>niceTickExtent[1]){niceTickExtent[0]=niceTickExtent[1];}}function contain(val,extent){return val>=extent[0]&&val<=extent[1];}function normalize(val,extent){if(extent[1]===extent[0]){return 0.5;}return(val-extent[0])/(extent[1]-extent[0]);}function scale(val,extent){return val*(extent[1]-extent[0])+extent[0];}

/***/ }),

/***/ 71753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
*/var contrastColor='#B9B8CE';var backgroundColor='#100C2A';var axisCommon=function axisCommon(){return{axisLine:{lineStyle:{color:contrastColor}},splitLine:{lineStyle:{color:'#484753'}},splitArea:{areaStyle:{color:['rgba(255,255,255,0.02)','rgba(255,255,255,0.05)']}},minorSplitLine:{lineStyle:{color:'#20203B'}}};};var colorPalette=['#4992ff','#7cffb2','#fddd60','#ff6e76','#58d9f9','#05c091','#ff8a45','#8d48e3','#dd79ff'];var theme={darkMode:true,color:colorPalette,backgroundColor:backgroundColor,axisPointer:{lineStyle:{color:'#817f91'},crossStyle:{color:'#817f91'},label:{// TODO Contrast of label backgorundColor
color:'#fff'}},legend:{textStyle:{color:contrastColor}},textStyle:{color:contrastColor},title:{textStyle:{color:'#EEF1FA'},subtextStyle:{color:'#B9B8CE'}},toolbox:{iconStyle:{borderColor:contrastColor}},dataZoom:{borderColor:'#71708A',textStyle:{color:contrastColor},brushStyle:{color:'rgba(135,163,206,0.3)'},handleStyle:{color:'#353450',borderColor:'#C5CBE3'},moveHandleStyle:{color:'#B0B6C3',opacity:0.3},fillerColor:'rgba(135,163,206,0.2)',emphasis:{handleStyle:{borderColor:'#91B7F2',color:'#4D587D'},moveHandleStyle:{color:'#636D9A',opacity:0.7}},dataBackground:{lineStyle:{color:'#71708A',width:1},areaStyle:{color:'#71708A'}},selectedDataBackground:{lineStyle:{color:'#87A3CE'},areaStyle:{color:'#87A3CE'}}},visualMap:{textStyle:{color:contrastColor}},timeline:{lineStyle:{color:contrastColor},label:{color:contrastColor},controlStyle:{color:contrastColor,borderColor:contrastColor}},calendar:{itemStyle:{color:backgroundColor},dayLabel:{color:contrastColor},monthLabel:{color:contrastColor},yearLabel:{color:contrastColor}},timeAxis:axisCommon(),logAxis:axisCommon(),valueAxis:axisCommon(),categoryAxis:axisCommon(),line:{symbol:'circle'},graph:{color:colorPalette},gauge:{title:{color:contrastColor},axisLine:{lineStyle:{color:[[1,'rgba(207,212,219,0.2)']]}},axisLabel:{color:contrastColor},detail:{color:'#EEF1FA'}},candlestick:{itemStyle:{color:'#f64e56',color0:'#54ea92',borderColor:'#f64e56',borderColor0:'#54ea92'// borderColor: '#ca2824',
// borderColor0: '#09a443'
}}};theme.categoryAxis.splitLine.show=false;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ 49622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
*/var colorAll=['#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C','#ff9f7f','#fb7293','#E062AE','#E690D1','#e7bcf3','#9d96f5','#8378EA','#96BFFF'];/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({color:colorAll,colorLayer:[['#37A2DA','#ffd85c','#fd7b5f'],['#37A2DA','#67E0E3','#FFDB5C','#ff9f7f','#E062AE','#9d96f5'],['#37A2DA','#32C5E9','#9FE6B8','#FFDB5C','#ff9f7f','#fb7293','#e7bcf3','#8378EA','#96BFFF'],colorAll]});

/***/ }),

/***/ 77144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ ECEventProcessor)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _clazz_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18496);
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
 * Usage of query:
 * `chart.on('click', query, handler);`
 * The `query` can be:
 * + The component type query string, only `mainType` or `mainType.subType`,
 *   like: 'xAxis', 'series', 'xAxis.category' or 'series.line'.
 * + The component query object, like:
 *   `{seriesIndex: 2}`, `{seriesName: 'xx'}`, `{seriesId: 'some'}`,
 *   `{xAxisIndex: 2}`, `{xAxisName: 'xx'}`, `{xAxisId: 'some'}`.
 * + The data query object, like:
 *   `{dataIndex: 123}`, `{dataType: 'link'}`, `{name: 'some'}`.
 * + The other query object (cmponent customized query), like:
 *   `{element: 'some'}` (only available in custom series).
 *
 * Caveat: If a prop in the `query` object is `null/undefined`, it is the
 * same as there is no such prop in the `query` object.
 */var ECEventProcessor=/** @class */function(){function ECEventProcessor(){}ECEventProcessor.prototype.normalizeQuery=function(query){var cptQuery={};var dataQuery={};var otherQuery={};// `query` is `mainType` or `mainType.subType` of component.
if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD(query)){var condCptType=(0,_clazz_js__WEBPACK_IMPORTED_MODULE_1__/* .parseClassType */ .u9)(query);// `.main` and `.sub` may be ''.
cptQuery.mainType=condCptType.main||null;cptQuery.subType=condCptType.sub||null;}// `query` is an object, convert to {mainType, index, name, id}.
else{// `xxxIndex`, `xxxName`, `xxxId`, `name`, `dataIndex`, `dataType` is reserved,
// can not be used in `compomentModel.filterForExposedEvent`.
var suffixes_1=['Index','Name','Id'];var dataKeys_1={name:1,dataIndex:1,dataType:1};zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(query,function(val,key){var reserved=false;for(var i=0;i<suffixes_1.length;i++){var propSuffix=suffixes_1[i];var suffixPos=key.lastIndexOf(propSuffix);if(suffixPos>0&&suffixPos===key.length-propSuffix.length){var mainType=key.slice(0,suffixPos);// Consider `dataIndex`.
if(mainType!=='data'){cptQuery.mainType=mainType;cptQuery[propSuffix.toLowerCase()]=val;reserved=true;}}}if(dataKeys_1.hasOwnProperty(key)){dataQuery[key]=val;reserved=true;}if(!reserved){otherQuery[key]=val;}});}return{cptQuery:cptQuery,dataQuery:dataQuery,otherQuery:otherQuery};};ECEventProcessor.prototype.filter=function(eventType,query){// They should be assigned before each trigger call.
var eventInfo=this.eventInfo;if(!eventInfo){return true;}var targetEl=eventInfo.targetEl;var packedEvent=eventInfo.packedEvent;var model=eventInfo.model;var view=eventInfo.view;// For event like 'globalout'.
if(!model||!view){return true;}var cptQuery=query.cptQuery;var dataQuery=query.dataQuery;return check(cptQuery,model,'mainType')&&check(cptQuery,model,'subType')&&check(cptQuery,model,'index','componentIndex')&&check(cptQuery,model,'name')&&check(cptQuery,model,'id')&&check(dataQuery,packedEvent,'name')&&check(dataQuery,packedEvent,'dataIndex')&&check(dataQuery,packedEvent,'dataType')&&(!view.filterForExposedEvent||view.filterForExposedEvent(eventType,query.otherQuery,targetEl,packedEvent));function check(query,host,prop,propOnHost){return query[prop]==null||host[propOnHost||prop]===query[prop];}};ECEventProcessor.prototype.afterTrigger=function(){// Make sure the eventInfo wont be used in next trigger.
this.eventInfo=null;};return ECEventProcessor;}();;

/***/ }),

/***/ 18496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PT": () => (/* binding */ isExtendedClass),
/* harmony export */   "Qj": () => (/* binding */ enableClassCheck),
/* harmony export */   "au": () => (/* binding */ enableClassManagement),
/* harmony export */   "dm": () => (/* binding */ enableClassExtend),
/* harmony export */   "pw": () => (/* binding */ mountExtend),
/* harmony export */   "u9": () => (/* binding */ parseClassType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88161);
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
*/var TYPE_DELIMITER='.';var IS_CONTAINER='___EC__COMPONENT__CONTAINER___';var IS_EXTENDED_CLASS='___EC__EXTENDED_CLASS___';/**
 * Notice, parseClassType('') should returns {main: '', sub: ''}
 * @public
 */function parseClassType(componentType){var ret={main:'',sub:''};if(componentType){var typeArr=componentType.split(TYPE_DELIMITER);ret.main=typeArr[0]||'';ret.sub=typeArr[1]||'';}return ret;}/**
 * @public
 */function checkClassType(componentType){zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .assert */ .hu(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(componentType),'componentType "'+componentType+'" illegal');}function isExtendedClass(clz){return!!(clz&&clz[IS_EXTENDED_CLASS]);}/**
 * Implements `ExtendableConstructor` for `rootClz`.
 *
 * @usage
 * ```ts
 * class Xxx {}
 * type XxxConstructor = typeof Xxx & ExtendableConstructor
 * enableClassExtend(Xxx as XxxConstructor);
 * ```
 */function enableClassExtend(rootClz,mandatoryMethods){rootClz.$constructor=rootClz;// FIXME: not necessary?
rootClz.extend=function(proto){if(false){}var superClass=this;var ExtendedClass;if(isESClass(superClass)){ExtendedClass=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(class_1,_super);function class_1(){return _super.apply(this,arguments)||this;}return class_1;}(superClass);}else{// For backward compat, we both support ts class inheritance and this
// "extend" approach.
// The constructor should keep the same behavior as ts class inheritance:
// If this constructor/$constructor is not declared, auto invoke the super
// constructor.
// If this constructor/$constructor is declared, it is responsible for
// calling the super constructor.
ExtendedClass=function ExtendedClass(){(proto.$constructor||superClass).apply(this,arguments);};zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .inherits */ .XW(ExtendedClass,this);}zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7(ExtendedClass.prototype,proto);ExtendedClass[IS_EXTENDED_CLASS]=true;ExtendedClass.extend=this.extend;ExtendedClass.superCall=superCall;ExtendedClass.superApply=superApply;ExtendedClass.superClass=superClass;return ExtendedClass;};}function isESClass(fn){return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf(fn)&&/^class\s/.test(Function.prototype.toString.call(fn));}/**
 * A work around to both support ts extend and this extend mechanism.
 * on sub-class.
 * @usage
 * ```ts
 * class Component { ... }
 * classUtil.enableClassExtend(Component);
 * classUtil.enableClassManagement(Component, {registerWhenExtend: true});
 *
 * class Series extends Component { ... }
 * // Without calling `markExtend`, `registerWhenExtend` will not work.
 * Component.markExtend(Series);
 * ```
 */function mountExtend(SubClz,SupperClz){SubClz.extend=SupperClz.extend;}// A random offset.
var classBase=Math.round(Math.random()*10);/**
 * Implements `CheckableConstructor` for `target`.
 * Can not use instanceof, consider different scope by
 * cross domain or es module import in ec extensions.
 * Mount a method "isInstance()" to Clz.
 *
 * @usage
 * ```ts
 * class Xxx {}
 * type XxxConstructor = typeof Xxx & CheckableConstructor;
 * enableClassCheck(Xxx as XxxConstructor)
 * ```
 */function enableClassCheck(target){var classAttr=['__\0is_clz',classBase++].join('_');target.prototype[classAttr]=true;if(false){}target.isInstance=function(obj){return!!(obj&&obj[classAttr]);};}// superCall should have class info, which can not be fetch from 'this'.
// Consider this case:
// class A has method f,
// class B inherits class A, overrides method f, f call superApply('f'),
// class C inherits class B, do not overrides method f,
// then when method of class C is called, dead loop occured.
function superCall(context,methodName){var args=[];for(var _i=2;_i<arguments.length;_i++){args[_i-2]=arguments[_i];}return this.superClass.prototype[methodName].apply(context,args);}function superApply(context,methodName,args){return this.superClass.prototype[methodName].apply(context,args);}/**
 * Implements `ClassManager` for `target`
 *
 * @usage
 * ```ts
 * class Xxx {}
 * type XxxConstructor = typeof Xxx & ClassManager
 * enableClassManagement(Xxx as XxxConstructor);
 * ```
 */function enableClassManagement(target){/**
   * Component model classes
   * key: componentType,
   * value:
   *     componentClass, when componentType is 'a'
   *     or Object.<subKey, componentClass>, when componentType is 'a.b'
   */var storage={};target.registerClass=function(clz){// `type` should not be a "instance memeber".
// If using TS class, should better declared as `static type = 'series.pie'`.
// otherwise users have to mount `type` on prototype manually.
// For backward compat and enable instance visit type via `this.type`,
// we stil support fetch `type` from prototype.
var componentFullType=clz.type||clz.prototype.type;if(componentFullType){checkClassType(componentFullType);// If only static type declared, we assign it to prototype mandatorily.
clz.prototype.type=componentFullType;var componentTypeInfo=parseClassType(componentFullType);if(!componentTypeInfo.sub){if(false){}storage[componentTypeInfo.main]=clz;}else if(componentTypeInfo.sub!==IS_CONTAINER){var container=makeContainer(componentTypeInfo);container[componentTypeInfo.sub]=clz;}}return clz;};target.getClass=function(mainType,subType,throwWhenNotFound){var clz=storage[mainType];if(clz&&clz[IS_CONTAINER]){clz=subType?clz[subType]:null;}if(throwWhenNotFound&&!clz){throw new Error(!subType?mainType+'.'+'type should be specified.':'Component '+mainType+'.'+(subType||'')+' is used but not imported.');}return clz;};target.getClassesByMainType=function(componentType){var componentTypeInfo=parseClassType(componentType);var result=[];var obj=storage[componentTypeInfo.main];if(obj&&obj[IS_CONTAINER]){zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(obj,function(o,type){type!==IS_CONTAINER&&result.push(o);});}else{result.push(obj);}return result;};target.hasClass=function(componentType){// Just consider componentType.main.
var componentTypeInfo=parseClassType(componentType);return!!storage[componentTypeInfo.main];};/**
   * @return Like ['aa', 'bb'], but can not be ['aa.xx']
   */target.getAllClassMainTypes=function(){var types=[];zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(storage,function(obj,type){types.push(type);});return types;};/**
   * If a main type is container and has sub types
   */target.hasSubTypes=function(componentType){var componentTypeInfo=parseClassType(componentType);var obj=storage[componentTypeInfo.main];return obj&&obj[IS_CONTAINER];};function makeContainer(componentTypeInfo){var container=storage[componentTypeInfo.main];if(!container||!container[IS_CONTAINER]){container=storage[componentTypeInfo.main]={};container[IS_CONTAINER]=true;}return container;}}// /**
//  * @param {string|Array.<string>} properties
//  */
// export function setReadOnly(obj, properties) {
// FIXME It seems broken in IE8 simulation of IE11
// if (!zrUtil.isArray(properties)) {
//     properties = properties != null ? [properties] : [];
// }
// zrUtil.each(properties, function (prop) {
//     let value = obj[prop];
//     Object.defineProperty
//         && Object.defineProperty(obj, prop, {
//             value: value, writable: false
//         });
//     zrUtil.isArray(obj[prop])
//         && Object.freeze
//         && Object.freeze(obj[prop]);
// });
// }

/***/ }),

/***/ 36189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kr": () => (/* binding */ getUID),
/* harmony export */   "ZL": () => (/* binding */ inheritDefaultOption),
/* harmony export */   "cj": () => (/* binding */ enableSubTypeDefaulter),
/* harmony export */   "jS": () => (/* binding */ enableTopologicalTravel)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _clazz_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18496);
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
*/// A random offset
var base=Math.round(Math.random()*10);/**
 * @public
 * @param {string} type
 * @return {string}
 */function getUID(type){// Considering the case of crossing js context,
// use Math.random to make id as unique as possible.
return[type||'',base++].join('_');}/**
 * Implements `SubTypeDefaulterManager` for `target`.
 */function enableSubTypeDefaulter(target){var subTypeDefaulters={};target.registerSubTypeDefaulter=function(componentType,defaulter){var componentTypeInfo=(0,_clazz_js__WEBPACK_IMPORTED_MODULE_0__/* .parseClassType */ .u9)(componentType);subTypeDefaulters[componentTypeInfo.main]=defaulter;};target.determineSubType=function(componentType,option){var type=option.type;if(!type){var componentTypeMain=(0,_clazz_js__WEBPACK_IMPORTED_MODULE_0__/* .parseClassType */ .u9)(componentType).main;if(target.hasSubTypes(componentType)&&subTypeDefaulters[componentTypeMain]){type=subTypeDefaulters[componentTypeMain](option);}}return type;};}/**
 * Implements `TopologicalTravelable<any>` for `entity`.
 *
 * Topological travel on Activity Network (Activity On Vertices).
 * Dependencies is defined in Model.prototype.dependencies, like ['xAxis', 'yAxis'].
 * If 'xAxis' or 'yAxis' is absent in componentTypeList, just ignore it in topology.
 * If there is circular dependencey, Error will be thrown.
 */function enableTopologicalTravel(entity,dependencyGetter){/**
   * @param targetNameList Target Component type list.
   *                       Can be ['aa', 'bb', 'aa.xx']
   * @param fullNameList By which we can build dependency graph.
   * @param callback Params: componentType, dependencies.
   * @param context Scope of callback.
   */entity.topologicalTravel=function(targetNameList,fullNameList,callback,context){if(!targetNameList.length){return;}var result=makeDepndencyGraph(fullNameList);var graph=result.graph;var noEntryList=result.noEntryList;var targetNameSet={};zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6(targetNameList,function(name){targetNameSet[name]=true;});while(noEntryList.length){var currComponentType=noEntryList.pop();var currVertex=graph[currComponentType];var isInTargetNameSet=!!targetNameSet[currComponentType];if(isInTargetNameSet){callback.call(context,currComponentType,currVertex.originalDeps.slice());delete targetNameSet[currComponentType];}zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6(currVertex.successor,isInTargetNameSet?removeEdgeAndAdd:removeEdge);}zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6(targetNameSet,function(){var errMsg='';if(false){}throw new Error(errMsg);});function removeEdge(succComponentType){graph[succComponentType].entryCount--;if(graph[succComponentType].entryCount===0){noEntryList.push(succComponentType);}}// Consider this case: legend depends on series, and we call
// chart.setOption({series: [...]}), where only series is in option.
// If we do not have 'removeEdgeAndAdd', legendModel.mergeOption will
// not be called, but only sereis.mergeOption is called. Thus legend
// have no chance to update its local record about series (like which
// name of series is available in legend).
function removeEdgeAndAdd(succComponentType){targetNameSet[succComponentType]=true;removeEdge(succComponentType);}};function makeDepndencyGraph(fullNameList){var graph={};var noEntryList=[];zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6(fullNameList,function(name){var thisItem=createDependencyGraphItem(graph,name);var originalDeps=thisItem.originalDeps=dependencyGetter(name);var availableDeps=getAvailableDependencies(originalDeps,fullNameList);thisItem.entryCount=availableDeps.length;if(thisItem.entryCount===0){noEntryList.push(name);}zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6(availableDeps,function(dependentName){if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .indexOf */ .cq(thisItem.predecessor,dependentName)<0){thisItem.predecessor.push(dependentName);}var thatItem=createDependencyGraphItem(graph,dependentName);if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .indexOf */ .cq(thatItem.successor,dependentName)<0){thatItem.successor.push(name);}});});return{graph:graph,noEntryList:noEntryList};}function createDependencyGraphItem(graph,name){if(!graph[name]){graph[name]={predecessor:[],successor:[]};}return graph[name];}function getAvailableDependencies(originalDeps,fullNameList){var availableDeps=[];zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .each */ .S6(originalDeps,function(dep){zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .indexOf */ .cq(fullNameList,dep)>=0&&availableDeps.push(dep);});return availableDeps;}}function inheritDefaultOption(superOption,subOption){// See also `model/Component.ts#getDefaultOption`
return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .merge */ .TS(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .merge */ .TS({},superOption,true),subOption,true);}

/***/ }),

/***/ 7335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ createOrUpdatePatternFromDecal)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_WeakMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9298);
/* harmony import */ var zrender_lib_core_LRU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96880);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57697);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84646);
/* harmony import */ var _symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33518);
/* harmony import */ var zrender_lib_canvas_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64420);
/* harmony import */ var zrender_lib_core_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11082);
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
*/var decalMap=new zrender_lib_core_WeakMap_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();var decalCache=new zrender_lib_core_LRU_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP(100);var decalKeys=['symbol','symbolSize','symbolKeepAspect','color','backgroundColor','dashArrayX','dashArrayY','maxTileWidth','maxTileHeight'];/**
 * Create or update pattern image from decal options
 *
 * @param {InnerDecalObject | 'none'} decalObject decal options, 'none' if no decal
 * @return {Pattern} pattern with generated image, null if no decal
 */function createOrUpdatePatternFromDecal(decalObject,api){if(decalObject==='none'){return null;}var dpr=api.getDevicePixelRatio();var zr=api.getZr();var isSVG=zr.painter.type==='svg';if(decalObject.dirty){decalMap["delete"](decalObject);}var oldPattern=decalMap.get(decalObject);if(oldPattern){return oldPattern;}var decalOpt=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .defaults */ .ce)(decalObject,{symbol:'rect',symbolSize:1,symbolKeepAspect:true,color:'rgba(0, 0, 0, 0.2)',backgroundColor:null,dashArrayX:5,dashArrayY:5,rotation:0,maxTileWidth:512,maxTileHeight:512});if(decalOpt.backgroundColor==='none'){decalOpt.backgroundColor=null;}var pattern={repeat:'repeat'};setPatternnSource(pattern);pattern.rotation=decalOpt.rotation;pattern.scaleX=pattern.scaleY=isSVG?1:1/dpr;decalMap.set(decalObject,pattern);decalObject.dirty=false;return pattern;function setPatternnSource(pattern){var keys=[dpr];var isValidKey=true;for(var i=0;i<decalKeys.length;++i){var value=decalOpt[decalKeys[i]];if(value!=null&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArray */ .kJ)(value)&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isString */ .HD)(value)&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumber */ .hj)(value)&&typeof value!=='boolean'){isValidKey=false;break;}keys.push(value);}var cacheKey;if(isValidKey){cacheKey=keys.join(',')+(isSVG?'-svg':'');var cache=decalCache.get(cacheKey);if(cache){isSVG?pattern.svgElement=cache:pattern.image=cache;}}var dashArrayX=normalizeDashArrayX(decalOpt.dashArrayX);var dashArrayY=normalizeDashArrayY(decalOpt.dashArrayY);var symbolArray=normalizeSymbolArray(decalOpt.symbol);var lineBlockLengthsX=getLineBlockLengthX(dashArrayX);var lineBlockLengthY=getLineBlockLengthY(dashArrayY);var canvas=!isSVG&&zrender_lib_core_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .platformApi.createCanvas */ .qW.createCanvas();var svgRoot=isSVG&&{tag:'g',attrs:{},key:'dcl',children:[]};var pSize=getPatternSize();var ctx;if(canvas){canvas.width=pSize.width*dpr;canvas.height=pSize.height*dpr;ctx=canvas.getContext('2d');}brushDecal();if(isValidKey){decalCache.put(cacheKey,canvas||svgRoot);}pattern.image=canvas;pattern.svgElement=svgRoot;pattern.svgWidth=pSize.width;pattern.svgHeight=pSize.height;/**
     * Get minumum length that can make a repeatable pattern.
     *
     * @return {Object} pattern width and height
     */function getPatternSize(){/**
       * For example, if dash is [[3, 2], [2, 1]] for X, it looks like
       * |---  ---  ---  ---  --- ...
       * |-- -- -- -- -- -- -- -- ...
       * |---  ---  ---  ---  --- ...
       * |-- -- -- -- -- -- -- -- ...
       * So the minumum length of X is 15,
       * which is the least common multiple of `3 + 2` and `2 + 1`
       * |---  ---  ---  |---  --- ...
       * |-- -- -- -- -- |-- -- -- ...
       */var width=1;for(var i=0,xlen=lineBlockLengthsX.length;i<xlen;++i){width=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .getLeastCommonMultiple */ .nl)(width,lineBlockLengthsX[i]);}var symbolRepeats=1;for(var i=0,xlen=symbolArray.length;i<xlen;++i){symbolRepeats=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__/* .getLeastCommonMultiple */ .nl)(symbolRepeats,symbolArray[i].length);}width*=symbolRepeats;var height=lineBlockLengthY*lineBlockLengthsX.length*symbolArray.length;if(false){ var warn; }return{width:Math.max(1,Math.min(width,decalOpt.maxTileWidth)),height:Math.max(1,Math.min(height,decalOpt.maxTileHeight))};}function brushDecal(){if(ctx){ctx.clearRect(0,0,canvas.width,canvas.height);if(decalOpt.backgroundColor){ctx.fillStyle=decalOpt.backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height);}}var ySum=0;for(var i=0;i<dashArrayY.length;++i){ySum+=dashArrayY[i];}if(ySum<=0){// dashArrayY is 0, draw nothing
return;}var y=-lineBlockLengthY;var yId=0;var yIdTotal=0;var xId0=0;while(y<pSize.height){if(yId%2===0){var symbolYId=yIdTotal/2%symbolArray.length;var x=0;var xId1=0;var xId1Total=0;while(x<pSize.width*2){var xSum=0;for(var i=0;i<dashArrayX[xId0].length;++i){xSum+=dashArrayX[xId0][i];}if(xSum<=0){// Skip empty line
break;}// E.g., [15, 5, 20, 5] draws only for 15 and 20
if(xId1%2===0){var size=(1-decalOpt.symbolSize)*0.5;var left=x+dashArrayX[xId0][xId1]*size;var top_1=y+dashArrayY[yId]*size;var width=dashArrayX[xId0][xId1]*decalOpt.symbolSize;var height=dashArrayY[yId]*decalOpt.symbolSize;var symbolXId=xId1Total/2%symbolArray[symbolYId].length;brushSymbol(left,top_1,width,height,symbolArray[symbolYId][symbolXId]);}x+=dashArrayX[xId0][xId1];++xId1Total;++xId1;if(xId1===dashArrayX[xId0].length){xId1=0;}}++xId0;if(xId0===dashArrayX.length){xId0=0;}}y+=dashArrayY[yId];++yIdTotal;++yId;if(yId===dashArrayY.length){yId=0;}}function brushSymbol(x,y,width,height,symbolType){var scale=isSVG?1:dpr;var symbol=(0,_symbol_js__WEBPACK_IMPORTED_MODULE_5__/* .createSymbol */ .th)(symbolType,x*scale,y*scale,width*scale,height*scale,decalOpt.color,decalOpt.symbolKeepAspect);if(isSVG){var symbolVNode=zr.painter.renderOneToVNode(symbol);if(symbolVNode){svgRoot.children.push(symbolVNode);}}else{// Paint to canvas for all other renderers.
(0,zrender_lib_canvas_graphic_js__WEBPACK_IMPORTED_MODULE_6__/* .brushSingle */ .RV)(ctx,symbol);}}}}}/**
 * Convert symbol array into normalized array
 *
 * @param {string | (string | string[])[]} symbol symbol input
 * @return {string[][]} normolized symbol array
 */function normalizeSymbolArray(symbol){if(!symbol||symbol.length===0){return[['rect']];}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isString */ .HD)(symbol)){return[[symbol]];}var isAllString=true;for(var i=0;i<symbol.length;++i){if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isString */ .HD)(symbol[i])){isAllString=false;break;}}if(isAllString){return normalizeSymbolArray([symbol]);}var result=[];for(var i=0;i<symbol.length;++i){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isString */ .HD)(symbol[i])){result.push([symbol[i]]);}else{result.push(symbol[i]);}}return result;}/**
 * Convert dash input into dashArray
 *
 * @param {DecalDashArrayX} dash dash input
 * @return {number[][]} normolized dash array
 */function normalizeDashArrayX(dash){if(!dash||dash.length===0){return[[0,0]];}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumber */ .hj)(dash)){var dashValue=Math.ceil(dash);return[[dashValue,dashValue]];}/**
   * [20, 5] should be normalized into [[20, 5]],
   * while [20, [5, 10]] should be normalized into [[20, 20], [5, 10]]
   */var isAllNumber=true;for(var i=0;i<dash.length;++i){if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumber */ .hj)(dash[i])){isAllNumber=false;break;}}if(isAllNumber){return normalizeDashArrayX([dash]);}var result=[];for(var i=0;i<dash.length;++i){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumber */ .hj)(dash[i])){var dashValue=Math.ceil(dash[i]);result.push([dashValue,dashValue]);}else{var dashValue=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .map */ .UI)(dash[i],function(n){return Math.ceil(n);});if(dashValue.length%2===1){// [4, 2, 1] means |----  -    -- |----  -    -- |
// so normalize it to be [4, 2, 1, 4, 2, 1]
result.push(dashValue.concat(dashValue));}else{result.push(dashValue);}}}return result;}/**
 * Convert dash input into dashArray
 *
 * @param {DecalDashArrayY} dash dash input
 * @return {number[]} normolized dash array
 */function normalizeDashArrayY(dash){if(!dash||_typeof(dash)==='object'&&dash.length===0){return[0,0];}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumber */ .hj)(dash)){var dashValue_1=Math.ceil(dash);return[dashValue_1,dashValue_1];}var dashValue=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .map */ .UI)(dash,function(n){return Math.ceil(n);});return dash.length%2?dashValue.concat(dashValue):dashValue;}/**
 * Get block length of each line. A block is the length of dash line and space.
 * For example, a line with [4, 1] has a dash line of 4 and a space of 1 after
 * that, so the block length of this line is 5.
 *
 * @param {number[][]} dash dash arrary of X or Y
 * @return {number[]} block length of each line
 */function getLineBlockLengthX(dash){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .map */ .UI)(dash,function(line){return getLineBlockLengthY(line);});}function getLineBlockLengthY(dash){var blockLength=0;for(var i=0;i<dash.length;++i){blockLength+=dash[i];}if(dash.length%2===1){// [4, 2, 1] means |----  -    -- |----  -    -- |
// So total length is (4 + 2 + 1) * 2
return blockLength*2;}return blockLength;}

/***/ }),

/***/ 73171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ findEventDispatcher)
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
*/function findEventDispatcher(target,det,returnFirstMatch){var found;while(target){if(det(target)){found=target;if(returnFirstMatch){break;}}target=target.__hostTarget||target.parent;}return found;}

/***/ }),

/***/ 87662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* binding */ getTooltipMarker),
/* harmony export */   "F1": () => (/* binding */ encodeHTML),
/* harmony export */   "Lz": () => (/* binding */ convertToColorString),
/* harmony export */   "MI": () => (/* binding */ windowOpen),
/* harmony export */   "MY": () => (/* binding */ normalizeCssArray),
/* harmony export */   "OD": () => (/* binding */ addCommas),
/* harmony export */   "kF": () => (/* binding */ formatTpl),
/* harmony export */   "uX": () => (/* binding */ makeValueReadable),
/* harmony export */   "zW": () => (/* binding */ toCamelCase)
/* harmony export */ });
/* unused harmony exports formatTplSimple, formatTime, capitalFirst */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57697);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84646);
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74134);
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
 * Add a comma each three digit.
 */function addCommas(x){if(!(0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumeric */ .kE)(x)){return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD(x)?x:'-';}var parts=(x+'').split('.');return parts[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,'$1,')+(parts.length>1?'.'+parts[1]:'');}function toCamelCase(str,upperCaseFirst){str=(str||'').toLowerCase().replace(/-(.)/g,function(match,group1){return group1.toUpperCase();});if(upperCaseFirst&&str){str=str.charAt(0).toUpperCase()+str.slice(1);}return str;}var normalizeCssArray=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeCssArray */ .MY;var replaceReg=/([&<>"'])/g;var replaceMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'};function encodeHTML(source){return source==null?'':(source+'').replace(replaceReg,function(str,c){return replaceMap[c];});}/**
 * Make value user readable for tooltip and label.
 * "User readable":
 *     Try to not print programmer-specific text like NaN, Infinity, null, undefined.
 *     Avoid to display an empty string, which users can not recognize there is
 *     a value and it might look like a bug.
 */function makeValueReadable(value,valueType,useUTC){var USER_READABLE_DEFUALT_TIME_PATTERN='{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}';function stringToUserReadable(str){return str&&zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .trim */ .fy(str)?str:'-';}function isNumberUserReadable(num){return!!(num!=null&&!isNaN(num)&&isFinite(num));}var isTypeTime=valueType==='time';var isValueDate=value instanceof Date;if(isTypeTime||isValueDate){var date=isTypeTime?(0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* .parseDate */ .sG)(value):value;if(!isNaN(+date)){return (0,_time_js__WEBPACK_IMPORTED_MODULE_2__/* .format */ .WU)(date,USER_READABLE_DEFUALT_TIME_PATTERN,useUTC);}else if(isValueDate){return'-';}// In other cases, continue to try to display the value in the following code.
}if(valueType==='ordinal'){return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isStringSafe */ .cd(value)?stringToUserReadable(value):zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .hj(value)?isNumberUserReadable(value)?value+'':'-':'-';}// By default.
var numericResult=(0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* .numericToNumber */ .FK)(value);return isNumberUserReadable(numericResult)?addCommas(numericResult):zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isStringSafe */ .cd(value)?stringToUserReadable(value):typeof value==='boolean'?value+'':'-';}var TPL_VAR_ALIAS=['a','b','c','d','e','f','g'];var wrapVar=function wrapVar(varName,seriesIdx){return'{'+varName+(seriesIdx==null?'':seriesIdx)+'}';};/**
 * Template formatter
 * @param {Array.<Object>|Object} paramsList
 */function formatTpl(tpl,paramsList,encode){if(!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .kJ(paramsList)){paramsList=[paramsList];}var seriesLen=paramsList.length;if(!seriesLen){return'';}var $vars=paramsList[0].$vars||[];for(var i=0;i<$vars.length;i++){var alias=TPL_VAR_ALIAS[i];tpl=tpl.replace(wrapVar(alias),wrapVar(alias,0));}for(var seriesIdx=0;seriesIdx<seriesLen;seriesIdx++){for(var k=0;k<$vars.length;k++){var val=paramsList[seriesIdx][$vars[k]];tpl=tpl.replace(wrapVar(TPL_VAR_ALIAS[k],seriesIdx),encode?encodeHTML(val):val);}}return tpl;}/**
 * simple Template formatter
 */function formatTplSimple(tpl,param,encode){zrUtil.each(param,function(value,key){tpl=tpl.replace('{'+key+'}',encode?encodeHTML(value):value);});return tpl;}function getTooltipMarker(inOpt,extraCssText){var opt=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD(inOpt)?{color:inOpt,extraCssText:extraCssText}:inOpt||{};var color=opt.color;var type=opt.type;extraCssText=opt.extraCssText;var renderMode=opt.renderMode||'html';if(!color){return'';}if(renderMode==='html'){return type==='subItem'?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;'+'border-radius:4px;width:4px;height:4px;background-color:'// Only support string
+encodeHTML(color)+';'+(extraCssText||'')+'"></span>':'<span style="display:inline-block;margin-right:4px;'+'border-radius:10px;width:10px;height:10px;background-color:'+encodeHTML(color)+';'+(extraCssText||'')+'"></span>';}else{// Should better not to auto generate style name by auto-increment number here.
// Because this util is usually called in tooltip formatter, which is probably
// called repeatly when mouse move and the auto-increment number increases fast.
// Users can make their own style name by theirselves, make it unique and readable.
var markerId=opt.markerId||'markerX';return{renderMode:renderMode,content:'{'+markerId+'|}  ',style:type==='subItem'?{width:4,height:4,borderRadius:2,backgroundColor:color}:{width:10,height:10,borderRadius:5,backgroundColor:color}};}}/**
 * @deprecated Use `time/format` instead.
 * ISO Date format
 * @param {string} tpl
 * @param {number} value
 * @param {boolean} [isUTC=false] Default in local time.
 *           see `module:echarts/scale/Time`
 *           and `module:echarts/util/number#parseDate`.
 * @inner
 */function formatTime(tpl,value,isUTC){if(false){}if(tpl==='week'||tpl==='month'||tpl==='quarter'||tpl==='half-year'||tpl==='year'){tpl='MM-dd\nyyyy';}var date=parseDate(value);var getUTC=isUTC?'getUTC':'get';var y=date[getUTC+'FullYear']();var M=date[getUTC+'Month']()+1;var d=date[getUTC+'Date']();var h=date[getUTC+'Hours']();var m=date[getUTC+'Minutes']();var s=date[getUTC+'Seconds']();var S=date[getUTC+'Milliseconds']();tpl=tpl.replace('MM',pad(M,2)).replace('M',M).replace('yyyy',y).replace('yy',pad(y%100+'',2)).replace('dd',pad(d,2)).replace('d',d).replace('hh',pad(h,2)).replace('h',h).replace('mm',pad(m,2)).replace('m',m).replace('ss',pad(s,2)).replace('s',s).replace('SSS',pad(S,3));return tpl;}/**
 * Capital first
 * @param {string} str
 * @return {string}
 */function capitalFirst(str){return str?str.charAt(0).toUpperCase()+str.substr(1):str;}/**
 * @return Never be null/undefined.
 */function convertToColorString(color,defaultColor){defaultColor=defaultColor||'transparent';return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD(color)?color:zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn(color)?color.colorStops&&(color.colorStops[0]||{}).color||defaultColor:defaultColor;}/**
 * open new tab
 * @param link url
 * @param target blank or self
 */function windowOpen(link,target){/* global window */if(target==='_blank'||target==='blank'){var blank=window.open();blank.opener=null;blank.location.href=link;}else{window.open(link,target);}}

/***/ }),

/***/ 45482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arc": () => (/* reexport safe */ zrender_lib_graphic_shape_Arc_js__WEBPACK_IMPORTED_MODULE_19__.Z),
/* harmony export */   "BezierCurve": () => (/* reexport safe */ zrender_lib_graphic_shape_BezierCurve_js__WEBPACK_IMPORTED_MODULE_18__.Z),
/* harmony export */   "BoundingRect": () => (/* reexport safe */ zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_26__.Z),
/* harmony export */   "Circle": () => (/* reexport safe */ zrender_lib_graphic_shape_Circle_js__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   "CompoundPath": () => (/* reexport safe */ zrender_lib_graphic_CompoundPath_js__WEBPACK_IMPORTED_MODULE_23__.Z),
/* harmony export */   "Ellipse": () => (/* reexport safe */ zrender_lib_graphic_shape_Ellipse_js__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   "Group": () => (/* reexport safe */ zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_20__.Z),
/* harmony export */   "Image": () => (/* reexport safe */ zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_3__.ZP),
/* harmony export */   "IncrementalDisplayable": () => (/* reexport safe */ zrender_lib_graphic_IncrementalDisplayable_js__WEBPACK_IMPORTED_MODULE_22__.Z),
/* harmony export */   "Line": () => (/* reexport safe */ zrender_lib_graphic_shape_Line_js__WEBPACK_IMPORTED_MODULE_17__.Z),
/* harmony export */   "LinearGradient": () => (/* reexport safe */ zrender_lib_graphic_LinearGradient_js__WEBPACK_IMPORTED_MODULE_24__.Z),
/* harmony export */   "OrientedBoundingRect": () => (/* reexport safe */ zrender_lib_core_OrientedBoundingRect_js__WEBPACK_IMPORTED_MODULE_27__.Z),
/* harmony export */   "Path": () => (/* reexport safe */ zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_1__.ZP),
/* harmony export */   "Point": () => (/* reexport safe */ zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_28__.Z),
/* harmony export */   "Polygon": () => (/* reexport safe */ zrender_lib_graphic_shape_Polygon_js__WEBPACK_IMPORTED_MODULE_14__.Z),
/* harmony export */   "Polyline": () => (/* reexport safe */ zrender_lib_graphic_shape_Polyline_js__WEBPACK_IMPORTED_MODULE_15__.Z),
/* harmony export */   "RadialGradient": () => (/* reexport safe */ zrender_lib_graphic_RadialGradient_js__WEBPACK_IMPORTED_MODULE_25__.Z),
/* harmony export */   "Rect": () => (/* reexport safe */ zrender_lib_graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_16__.Z),
/* harmony export */   "Ring": () => (/* reexport safe */ zrender_lib_graphic_shape_Ring_js__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "Sector": () => (/* reexport safe */ zrender_lib_graphic_shape_Sector_js__WEBPACK_IMPORTED_MODULE_12__.C),
/* harmony export */   "Text": () => (/* reexport safe */ zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_21__.ZP),
/* harmony export */   "applyTransform": () => (/* binding */ applyTransform),
/* harmony export */   "clipPointsByRect": () => (/* binding */ clipPointsByRect),
/* harmony export */   "clipRectByRect": () => (/* binding */ clipRectByRect),
/* harmony export */   "createIcon": () => (/* binding */ createIcon),
/* harmony export */   "extendPath": () => (/* binding */ extendPath),
/* harmony export */   "extendShape": () => (/* binding */ extendShape),
/* harmony export */   "getShapeClass": () => (/* binding */ getShapeClass),
/* harmony export */   "getTransform": () => (/* binding */ getTransform),
/* harmony export */   "groupTransition": () => (/* binding */ groupTransition),
/* harmony export */   "initProps": () => (/* reexport safe */ _animation_basicTrasition_js__WEBPACK_IMPORTED_MODULE_0__.KZ),
/* harmony export */   "isElementRemoved": () => (/* reexport safe */ _animation_basicTrasition_js__WEBPACK_IMPORTED_MODULE_0__.eq),
/* harmony export */   "lineLineIntersect": () => (/* binding */ lineLineIntersect),
/* harmony export */   "linePolygonIntersect": () => (/* binding */ linePolygonIntersect),
/* harmony export */   "makeImage": () => (/* binding */ makeImage),
/* harmony export */   "makePath": () => (/* binding */ makePath),
/* harmony export */   "mergePath": () => (/* binding */ mergePath),
/* harmony export */   "registerShape": () => (/* binding */ registerShape),
/* harmony export */   "removeElement": () => (/* reexport safe */ _animation_basicTrasition_js__WEBPACK_IMPORTED_MODULE_0__.bX),
/* harmony export */   "removeElementWithFadeOut": () => (/* reexport safe */ _animation_basicTrasition_js__WEBPACK_IMPORTED_MODULE_0__.XD),
/* harmony export */   "resizePath": () => (/* binding */ resizePath),
/* harmony export */   "setTooltipConfig": () => (/* binding */ setTooltipConfig),
/* harmony export */   "subPixelOptimize": () => (/* binding */ subPixelOptimize),
/* harmony export */   "subPixelOptimizeLine": () => (/* binding */ subPixelOptimizeLine),
/* harmony export */   "subPixelOptimizeRect": () => (/* binding */ subPixelOptimizeRect),
/* harmony export */   "transformDirection": () => (/* binding */ transformDirection),
/* harmony export */   "traverseElements": () => (/* binding */ traverseElements),
/* harmony export */   "updateProps": () => (/* reexport safe */ _animation_basicTrasition_js__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var zrender_lib_tool_path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13518);
/* harmony import */ var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79070);
/* harmony import */ var zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73727);
/* harmony import */ var zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81319);
/* harmony import */ var zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30122);
/* harmony import */ var zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22060);
/* harmony import */ var zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(95067);
/* harmony import */ var zrender_lib_graphic_shape_Circle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35739);
/* harmony import */ var zrender_lib_graphic_shape_Ellipse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6924);
/* harmony import */ var zrender_lib_graphic_shape_Sector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38502);
/* harmony import */ var zrender_lib_graphic_shape_Ring_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16786);
/* harmony import */ var zrender_lib_graphic_shape_Polygon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15021);
/* harmony import */ var zrender_lib_graphic_shape_Polyline_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72160);
/* harmony import */ var zrender_lib_graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19568);
/* harmony import */ var zrender_lib_graphic_shape_Line_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29526);
/* harmony import */ var zrender_lib_graphic_shape_BezierCurve_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(61670);
/* harmony import */ var zrender_lib_graphic_shape_Arc_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32837);
/* harmony import */ var zrender_lib_graphic_CompoundPath_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(48977);
/* harmony import */ var zrender_lib_graphic_LinearGradient_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(45074);
/* harmony import */ var zrender_lib_graphic_RadialGradient_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(50338);
/* harmony import */ var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54865);
/* harmony import */ var zrender_lib_core_OrientedBoundingRect_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(80609);
/* harmony import */ var zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(40532);
/* harmony import */ var zrender_lib_graphic_IncrementalDisplayable_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(44933);
/* harmony import */ var zrender_lib_graphic_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80146);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57697);
/* harmony import */ var _innerStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5661);
/* harmony import */ var _animation_basicTrasition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21438);
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
 * @deprecated export for compatitable reason
 */var mathMax=Math.max;var mathMin=Math.min;var _customShapeMap={};/**
 * Extend shape with parameters
 */function extendShape(opts){return zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].extend */ .ZP.extend(opts);}var extendPathFromString=zrender_lib_tool_path_js__WEBPACK_IMPORTED_MODULE_2__/* .extendFromString */ .Pc;/**
 * Extend path
 */function extendPath(pathData,opts){return extendPathFromString(pathData,opts);}/**
 * Register a user defined shape.
 * The shape class can be fetched by `getShapeClass`
 * This method will overwrite the registered shapes, including
 * the registered built-in shapes, if using the same `name`.
 * The shape can be used in `custom series` and
 * `graphic component` by declaring `{type: name}`.
 *
 * @param name
 * @param ShapeClass Can be generated by `extendShape`.
 */function registerShape(name,ShapeClass){_customShapeMap[name]=ShapeClass;}/**
 * Find shape class registered by `registerShape`. Usually used in
 * fetching user defined shape.
 *
 * [Caution]:
 * (1) This method **MUST NOT be used inside echarts !!!**, unless it is prepared
 * to use user registered shapes.
 * Because the built-in shape (see `getBuiltInShape`) will be registered by
 * `registerShape` by default. That enables users to get both built-in
 * shapes as well as the shapes belonging to themsleves. But users can overwrite
 * the built-in shapes by using names like 'circle', 'rect' via calling
 * `registerShape`. So the echarts inner featrues should not fetch shapes from here
 * in case that it is overwritten by users, except that some features, like
 * `custom series`, `graphic component`, do it deliberately.
 *
 * (2) In the features like `custom series`, `graphic component`, the user input
 * `{tpye: 'xxx'}` does not only specify shapes but also specify other graphic
 * elements like `'group'`, `'text'`, `'image'` or event `'path'`. Those names
 * are reserved names, that is, if some user register a shape named `'image'`,
 * the shape will not be used. If we intending to add some more reserved names
 * in feature, that might bring break changes (disable some existing user shape
 * names). But that case probably rearly happen. So we dont make more mechanism
 * to resolve this issue here.
 *
 * @param name
 * @return The shape class. If not found, return nothing.
 */function getShapeClass(name){if(_customShapeMap.hasOwnProperty(name)){return _customShapeMap[name];}}/**
 * Create a path element from path data string
 * @param pathData
 * @param opts
 * @param rect
 * @param layout 'center' or 'cover' default to be cover
 */function makePath(pathData,opts,rect,layout){var path=zrender_lib_tool_path_js__WEBPACK_IMPORTED_MODULE_2__/* .createFromString */ .iR(pathData,opts);if(rect){if(layout==='center'){rect=centerGraphic(rect,path.getBoundingRect());}resizePath(path,rect);}return path;}/**
 * Create a image element from image url
 * @param imageUrl image url
 * @param opts options
 * @param rect constrain rect
 * @param layout 'center' or 'cover'. Default to be 'cover'
 */function makeImage(imageUrl,rect,layout){var zrImg=new zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP({style:{image:imageUrl,x:rect.x,y:rect.y,width:rect.width,height:rect.height},onload:function onload(img){if(layout==='center'){var boundingRect={width:img.width,height:img.height};zrImg.setStyle(centerGraphic(rect,boundingRect));}}});return zrImg;}/**
 * Get position of centered element in bounding box.
 *
 * @param  rect         element local bounding box
 * @param  boundingRect constraint bounding box
 * @return element position containing x, y, width, and height
 */function centerGraphic(rect,boundingRect){// Set rect to center, keep width / height ratio.
var aspect=boundingRect.width/boundingRect.height;var width=rect.height*aspect;var height;if(width<=rect.width){height=rect.height;}else{width=rect.width;height=width/aspect;}var cx=rect.x+rect.width/2;var cy=rect.y+rect.height/2;return{x:cx-width/2,y:cy-height/2,width:width,height:height};}var mergePath=zrender_lib_tool_path_js__WEBPACK_IMPORTED_MODULE_2__/* .mergePath */ .AA;/**
 * Resize a path to fit the rect
 * @param path
 * @param rect
 */function resizePath(path,rect){if(!path.applyTransform){return;}var pathRect=path.getBoundingRect();var m=pathRect.calculateTransform(rect);path.applyTransform(m);}/**
 * Sub pixel optimize line for canvas
 */function subPixelOptimizeLine(param){zrender_lib_graphic_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_4__/* .subPixelOptimizeLine */ ._3(param.shape,param.shape,param.style);return param;}/**
 * Sub pixel optimize rect for canvas
 */function subPixelOptimizeRect(param){zrender_lib_graphic_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_4__/* .subPixelOptimizeRect */ .Pw(param.shape,param.shape,param.style);return param;}/**
 * Sub pixel optimize for canvas
 *
 * @param position Coordinate, such as x, y
 * @param lineWidth Should be nonnegative integer.
 * @param positiveOrNegative Default false (negative).
 * @return Optimized position.
 */var subPixelOptimize=zrender_lib_graphic_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_4__/* .subPixelOptimize */ .vu;/**
 * Get transform matrix of target (param target),
 * in coordinate of its ancestor (param ancestor)
 *
 * @param target
 * @param [ancestor]
 */function getTransform(target,ancestor){var mat=zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .yR([]);while(target&&target!==ancestor){zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__/* .mul */ .dC(mat,target.getLocalTransform(),mat);target=target.parent;}return mat;}/**
 * Apply transform to an vertex.
 * @param target [x, y]
 * @param transform Can be:
 *      + Transform matrix: like [1, 0, 0, 1, 0, 0]
 *      + {position, rotation, scale}, the same as `zrender/Transformable`.
 * @param invert Whether use invert matrix.
 * @return [x, y]
 */function applyTransform(target,transform,invert){if(transform&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .isArrayLike */ .zG)(transform)){transform=zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getLocalTransform */ .ZP.getLocalTransform(transform);}if(invert){transform=zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .U_([],transform);}return zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_8__/* .applyTransform */ .Ne([],target,transform);}/**
 * @param direction 'left' 'right' 'top' 'bottom'
 * @param transform Transform matrix: like [1, 0, 0, 1, 0, 0]
 * @param invert Whether use invert matrix.
 * @return Transformed direction. 'left' 'right' 'top' 'bottom'
 */function transformDirection(direction,transform,invert){// Pick a base, ensure that transform result will not be (0, 0).
var hBase=transform[4]===0||transform[5]===0||transform[0]===0?1:Math.abs(2*transform[4]/transform[0]);var vBase=transform[4]===0||transform[5]===0||transform[2]===0?1:Math.abs(2*transform[4]/transform[2]);var vertex=[direction==='left'?-hBase:direction==='right'?hBase:0,direction==='top'?-vBase:direction==='bottom'?vBase:0];vertex=applyTransform(vertex,transform,invert);return Math.abs(vertex[0])>Math.abs(vertex[1])?vertex[0]>0?'right':'left':vertex[1]>0?'bottom':'top';}function isNotGroup(el){return!el.isGroup;}function isPath(el){return el.shape!=null;}/**
 * Apply group transition animation from g1 to g2.
 * If no animatableModel, no animation.
 */function groupTransition(g1,g2,animatableModel){if(!g1||!g2){return;}function getElMap(g){var elMap={};g.traverse(function(el){if(isNotGroup(el)&&el.anid){elMap[el.anid]=el;}});return elMap;}function getAnimatableProps(el){var obj={x:el.x,y:el.y,rotation:el.rotation};if(isPath(el)){obj.shape=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .extend */ .l7)({},el.shape);}return obj;}var elMap1=getElMap(g1);g2.traverse(function(el){if(isNotGroup(el)&&el.anid){var oldEl=elMap1[el.anid];if(oldEl){var newProp=getAnimatableProps(el);el.attr(getAnimatableProps(oldEl));(0,_animation_basicTrasition_js__WEBPACK_IMPORTED_MODULE_0__/* .updateProps */ .D)(el,newProp,animatableModel,(0,_innerStore_js__WEBPACK_IMPORTED_MODULE_9__/* .getECData */ .A)(el).dataIndex);}}});}function clipPointsByRect(points,rect){// FIXME: this way migth be incorrect when grpahic clipped by a corner.
// and when element have border.
return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .map */ .UI)(points,function(point){var x=point[0];x=mathMax(x,rect.x);x=mathMin(x,rect.x+rect.width);var y=point[1];y=mathMax(y,rect.y);y=mathMin(y,rect.y+rect.height);return[x,y];});}/**
 * Return a new clipped rect. If rect size are negative, return undefined.
 */function clipRectByRect(targetRect,rect){var x=mathMax(targetRect.x,rect.x);var x2=mathMin(targetRect.x+targetRect.width,rect.x+rect.width);var y=mathMax(targetRect.y,rect.y);var y2=mathMin(targetRect.y+targetRect.height,rect.y+rect.height);// If the total rect is cliped, nothing, including the border,
// should be painted. So return undefined.
if(x2>=x&&y2>=y){return{x:x,y:y,width:x2-x,height:y2-y};}}function createIcon(iconStr,// Support 'image://' or 'path://' or direct svg path.
opt,rect){var innerOpts=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .extend */ .l7)({rectHover:true},opt);var style=innerOpts.style={strokeNoScale:true};rect=rect||{x:-1,y:-1,width:2,height:2};if(iconStr){return iconStr.indexOf('image://')===0?(style.image=iconStr.slice(8),(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .defaults */ .ce)(style,rect),new zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP(innerOpts)):makePath(iconStr.replace('path://',''),innerOpts,rect,'center');}}/**
 * Return `true` if the given line (line `a`) and the given polygon
 * are intersect.
 * Note that we do not count colinear as intersect here because no
 * requirement for that. We could do that if required in future.
 */function linePolygonIntersect(a1x,a1y,a2x,a2y,points){for(var i=0,p2=points[points.length-1];i<points.length;i++){var p=points[i];if(lineLineIntersect(a1x,a1y,a2x,a2y,p[0],p[1],p2[0],p2[1])){return true;}p2=p;}}/**
 * Return `true` if the given two lines (line `a` and line `b`)
 * are intersect.
 * Note that we do not count colinear as intersect here because no
 * requirement for that. We could do that if required in future.
 */function lineLineIntersect(a1x,a1y,a2x,a2y,b1x,b1y,b2x,b2y){// let `vec_m` to be `vec_a2 - vec_a1` and `vec_n` to be `vec_b2 - vec_b1`.
var mx=a2x-a1x;var my=a2y-a1y;var nx=b2x-b1x;var ny=b2y-b1y;// `vec_m` and `vec_n` are parallel iff
//     exising `k` such that `vec_m = k · vec_n`, equivalent to `vec_m X vec_n = 0`.
var nmCrossProduct=crossProduct2d(nx,ny,mx,my);if(nearZero(nmCrossProduct)){return false;}// `vec_m` and `vec_n` are intersect iff
//     existing `p` and `q` in [0, 1] such that `vec_a1 + p * vec_m = vec_b1 + q * vec_n`,
//     such that `q = ((vec_a1 - vec_b1) X vec_m) / (vec_n X vec_m)`
//           and `p = ((vec_a1 - vec_b1) X vec_n) / (vec_n X vec_m)`.
var b1a1x=a1x-b1x;var b1a1y=a1y-b1y;var q=crossProduct2d(b1a1x,b1a1y,mx,my)/nmCrossProduct;if(q<0||q>1){return false;}var p=crossProduct2d(b1a1x,b1a1y,nx,ny)/nmCrossProduct;if(p<0||p>1){return false;}return true;}/**
 * Cross product of 2-dimension vector.
 */function crossProduct2d(x1,y1,x2,y2){return x1*y2-x2*y1;}function nearZero(val){return val<=1e-6&&val>=-1e-6;}function setTooltipConfig(opt){var itemTooltipOption=opt.itemTooltipOption;var componentModel=opt.componentModel;var itemName=opt.itemName;var itemTooltipOptionObj=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .isString */ .HD)(itemTooltipOption)?{formatter:itemTooltipOption}:itemTooltipOption;var mainType=componentModel.mainType;var componentIndex=componentModel.componentIndex;var formatterParams={componentType:mainType,name:itemName,$vars:['name']};formatterParams[mainType+'Index']=componentIndex;var formatterParamsExtra=opt.formatterParamsExtra;if(formatterParamsExtra){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .each */ .S6)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .keys */ .XP)(formatterParamsExtra),function(key){if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .hasOwn */ .RI)(formatterParams,key)){formatterParams[key]=formatterParamsExtra[key];formatterParams.$vars.push(key);}});}var ecData=(0,_innerStore_js__WEBPACK_IMPORTED_MODULE_9__/* .getECData */ .A)(opt.el);ecData.componentMainType=mainType;ecData.componentIndex=componentIndex;ecData.tooltipConfig={name:itemName,option:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .defaults */ .ce)({content:itemName,formatterParams:formatterParams},itemTooltipOptionObj)};}function traverseElement(el,cb){var stopped;// TODO
// Polyfill for fixing zrender group traverse don't visit it's root issue.
if(el.isGroup){stopped=cb(el);}if(!stopped){el.traverse(cb);}}function traverseElements(els,cb){if(els){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_6__/* .isArray */ .kJ)(els)){for(var i=0;i<els.length;i++){traverseElement(els[i],cb);}}else{traverseElement(els,cb);}}}// Register built-in shapes. These shapes might be overwirtten
// by users, although we do not recommend that.
registerShape('circle',zrender_lib_graphic_shape_Circle_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z);registerShape('ellipse',zrender_lib_graphic_shape_Ellipse_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z);registerShape('sector',zrender_lib_graphic_shape_Sector_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .C);registerShape('ring',zrender_lib_graphic_shape_Ring_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);registerShape('polygon',zrender_lib_graphic_shape_Polygon_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z);registerShape('polyline',zrender_lib_graphic_shape_Polyline_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z);registerShape('rect',zrender_lib_graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z);registerShape('line',zrender_lib_graphic_shape_Line_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z);registerShape('bezierCurve',zrender_lib_graphic_shape_BezierCurve_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z);registerShape('arc',zrender_lib_graphic_shape_Arc_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z);

/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getECData),
/* harmony export */   "Q": () => (/* binding */ setCommonECData)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
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
*/var getECData=(0,_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var setCommonECData=function setCommonECData(seriesIndex,dataType,dataIdx,el){if(el){var ecData=getECData(el);// Add data index and series index for indexing the data by element
// Useful in tooltip
ecData.dataIndex=dataIdx;ecData.dataType=dataType;ecData.seriesIndex=seriesIndex;// TODO: not store dataIndex on children.
if(el.type==='group'){el.traverse(function(child){var childECData=getECData(child);childECData.seriesIndex=seriesIndex;childECData.dataIndex=dataIdx;childECData.dataType=dataType;});}}};

/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BZ": () => (/* binding */ box),
/* harmony export */   "ME": () => (/* binding */ getLayoutRect),
/* harmony export */   "YD": () => (/* binding */ fetchLayoutMode),
/* harmony export */   "dt": () => (/* binding */ mergeLayoutParam),
/* harmony export */   "p$": () => (/* binding */ positionElement),
/* harmony export */   "tE": () => (/* binding */ getLayoutParams)
/* harmony export */ });
/* unused harmony exports LOCATION_PARAMS, HV_NAMES, vbox, hbox, getAvailableSize, sizeCalculable, copyLayoutParams */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54865);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84646);
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87662);
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
*/ // Layout helpers for each component positioning
var each=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6;/**
 * @public
 */var LOCATION_PARAMS=['left','right','top','bottom','width','height'];/**
 * @public
 */var HV_NAMES=[['width','left','right'],['height','top','bottom']];function boxLayout(orient,group,gap,maxWidth,maxHeight){var x=0;var y=0;if(maxWidth==null){maxWidth=Infinity;}if(maxHeight==null){maxHeight=Infinity;}var currentLineMaxSize=0;group.eachChild(function(child,idx){var rect=child.getBoundingRect();var nextChild=group.childAt(idx+1);var nextChildRect=nextChild&&nextChild.getBoundingRect();var nextX;var nextY;if(orient==='horizontal'){var moveX=rect.width+(nextChildRect?-nextChildRect.x+rect.x:0);nextX=x+moveX;// Wrap when width exceeds maxWidth or meet a `newline` group
// FIXME compare before adding gap?
if(nextX>maxWidth||child.newline){x=0;nextX=moveX;y+=currentLineMaxSize+gap;currentLineMaxSize=rect.height;}else{// FIXME: consider rect.y is not `0`?
currentLineMaxSize=Math.max(currentLineMaxSize,rect.height);}}else{var moveY=rect.height+(nextChildRect?-nextChildRect.y+rect.y:0);nextY=y+moveY;// Wrap when width exceeds maxHeight or meet a `newline` group
if(nextY>maxHeight||child.newline){x+=currentLineMaxSize+gap;y=0;nextY=moveY;currentLineMaxSize=rect.width;}else{currentLineMaxSize=Math.max(currentLineMaxSize,rect.width);}}if(child.newline){return;}child.x=x;child.y=y;child.markRedraw();orient==='horizontal'?x=nextX+gap:y=nextY+gap;});}/**
 * VBox or HBox layouting
 * @param {string} orient
 * @param {module:zrender/graphic/Group} group
 * @param {number} gap
 * @param {number} [width=Infinity]
 * @param {number} [height=Infinity]
 */var box=boxLayout;/**
 * VBox layouting
 * @param {module:zrender/graphic/Group} group
 * @param {number} gap
 * @param {number} [width=Infinity]
 * @param {number} [height=Infinity]
 */var vbox=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .curry */ .WA(boxLayout,'vertical');/**
 * HBox layouting
 * @param {module:zrender/graphic/Group} group
 * @param {number} gap
 * @param {number} [width=Infinity]
 * @param {number} [height=Infinity]
 */var hbox=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .curry */ .WA(boxLayout,'horizontal');/**
 * If x or x2 is not specified or 'center' 'left' 'right',
 * the width would be as long as possible.
 * If y or y2 is not specified or 'middle' 'top' 'bottom',
 * the height would be as long as possible.
 */function getAvailableSize(positionInfo,containerRect,margin){var containerWidth=containerRect.width;var containerHeight=containerRect.height;var x=parsePercent(positionInfo.left,containerWidth);var y=parsePercent(positionInfo.top,containerHeight);var x2=parsePercent(positionInfo.right,containerWidth);var y2=parsePercent(positionInfo.bottom,containerHeight);(isNaN(x)||isNaN(parseFloat(positionInfo.left)))&&(x=0);(isNaN(x2)||isNaN(parseFloat(positionInfo.right)))&&(x2=containerWidth);(isNaN(y)||isNaN(parseFloat(positionInfo.top)))&&(y=0);(isNaN(y2)||isNaN(parseFloat(positionInfo.bottom)))&&(y2=containerHeight);margin=formatUtil.normalizeCssArray(margin||0);return{width:Math.max(x2-x-margin[1]-margin[3],0),height:Math.max(y2-y-margin[0]-margin[2],0)};}/**
 * Parse position info.
 */function getLayoutRect(positionInfo,containerRect,margin){margin=_format_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeCssArray */ .MY(margin||0);var containerWidth=containerRect.width;var containerHeight=containerRect.height;var left=(0,_number_js__WEBPACK_IMPORTED_MODULE_2__/* .parsePercent */ .GM)(positionInfo.left,containerWidth);var top=(0,_number_js__WEBPACK_IMPORTED_MODULE_2__/* .parsePercent */ .GM)(positionInfo.top,containerHeight);var right=(0,_number_js__WEBPACK_IMPORTED_MODULE_2__/* .parsePercent */ .GM)(positionInfo.right,containerWidth);var bottom=(0,_number_js__WEBPACK_IMPORTED_MODULE_2__/* .parsePercent */ .GM)(positionInfo.bottom,containerHeight);var width=(0,_number_js__WEBPACK_IMPORTED_MODULE_2__/* .parsePercent */ .GM)(positionInfo.width,containerWidth);var height=(0,_number_js__WEBPACK_IMPORTED_MODULE_2__/* .parsePercent */ .GM)(positionInfo.height,containerHeight);var verticalMargin=margin[2]+margin[0];var horizontalMargin=margin[1]+margin[3];var aspect=positionInfo.aspect;// If width is not specified, calculate width from left and right
if(isNaN(width)){width=containerWidth-right-horizontalMargin-left;}if(isNaN(height)){height=containerHeight-bottom-verticalMargin-top;}if(aspect!=null){// If width and height are not given
// 1. Graph should not exceeds the container
// 2. Aspect must be keeped
// 3. Graph should take the space as more as possible
// FIXME
// Margin is not considered, because there is no case that both
// using margin and aspect so far.
if(isNaN(width)&&isNaN(height)){if(aspect>containerWidth/containerHeight){width=containerWidth*0.8;}else{height=containerHeight*0.8;}}// Calculate width or height with given aspect
if(isNaN(width)){width=aspect*height;}if(isNaN(height)){height=width/aspect;}}// If left is not specified, calculate left from right and width
if(isNaN(left)){left=containerWidth-right-width-horizontalMargin;}if(isNaN(top)){top=containerHeight-bottom-height-verticalMargin;}// Align left and top
switch(positionInfo.left||positionInfo.right){case'center':left=containerWidth/2-width/2-margin[3];break;case'right':left=containerWidth-width-horizontalMargin;break;}switch(positionInfo.top||positionInfo.bottom){case'middle':case'center':top=containerHeight/2-height/2-margin[0];break;case'bottom':top=containerHeight-height-verticalMargin;break;}// If something is wrong and left, top, width, height are calculated as NaN
left=left||0;top=top||0;if(isNaN(width)){// Width may be NaN if only one value is given except width
width=containerWidth-horizontalMargin-left-(right||0);}if(isNaN(height)){// Height may be NaN if only one value is given except height
height=containerHeight-verticalMargin-top-(bottom||0);}var rect=new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(left+margin[3],top+margin[0],width,height);rect.margin=margin;return rect;}/**
 * Position a zr element in viewport
 *  Group position is specified by either
 *  {left, top}, {right, bottom}
 *  If all properties exists, right and bottom will be igonred.
 *
 * Logic:
 *     1. Scale (against origin point in parent coord)
 *     2. Rotate (against origin point in parent coord)
 *     3. Traslate (with el.position by this method)
 * So this method only fixes the last step 'Traslate', which does not affect
 * scaling and rotating.
 *
 * If be called repeatly with the same input el, the same result will be gotten.
 *
 * Return true if the layout happend.
 *
 * @param el Should have `getBoundingRect` method.
 * @param positionInfo
 * @param positionInfo.left
 * @param positionInfo.top
 * @param positionInfo.right
 * @param positionInfo.bottom
 * @param positionInfo.width Only for opt.boundingModel: 'raw'
 * @param positionInfo.height Only for opt.boundingModel: 'raw'
 * @param containerRect
 * @param margin
 * @param opt
 * @param opt.hv Only horizontal or only vertical. Default to be [1, 1]
 * @param opt.boundingMode
 *        Specify how to calculate boundingRect when locating.
 *        'all': Position the boundingRect that is transformed and uioned
 *               both itself and its descendants.
 *               This mode simplies confine the elements in the bounding
 *               of their container (e.g., using 'right: 0').
 *        'raw': Position the boundingRect that is not transformed and only itself.
 *               This mode is useful when you want a element can overflow its
 *               container. (Consider a rotated circle needs to be located in a corner.)
 *               In this mode positionInfo.width/height can only be number.
 */function positionElement(el,positionInfo,containerRect,margin,opt,out){var h=!opt||!opt.hv||opt.hv[0];var v=!opt||!opt.hv||opt.hv[1];var boundingMode=opt&&opt.boundingMode||'all';out=out||el;out.x=el.x;out.y=el.y;if(!h&&!v){return false;}var rect;if(boundingMode==='raw'){rect=el.type==='group'?new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(0,0,+positionInfo.width||0,+positionInfo.height||0):el.getBoundingRect();}else{rect=el.getBoundingRect();if(el.needLocalTransform()){var transform=el.getLocalTransform();// Notice: raw rect may be inner object of el,
// which should not be modified.
rect=rect.clone();rect.applyTransform(transform);}}// The real width and height can not be specified but calculated by the given el.
var layoutRect=getLayoutRect(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .defaults */ .ce({width:rect.width,height:rect.height},positionInfo),containerRect,margin);// Because 'tranlate' is the last step in transform
// (see zrender/core/Transformable#getLocalTransform),
// we can just only modify el.position to get final result.
var dx=h?layoutRect.x-rect.x:0;var dy=v?layoutRect.y-rect.y:0;if(boundingMode==='raw'){out.x=dx;out.y=dy;}else{out.x+=dx;out.y+=dy;}if(out===el){el.markRedraw();}return true;}/**
 * @param option Contains some of the properties in HV_NAMES.
 * @param hvIdx 0: horizontal; 1: vertical.
 */function sizeCalculable(option,hvIdx){return option[HV_NAMES[hvIdx][0]]!=null||option[HV_NAMES[hvIdx][1]]!=null&&option[HV_NAMES[hvIdx][2]]!=null;}function fetchLayoutMode(ins){var layoutMode=ins.layoutMode||ins.constructor.layoutMode;return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn(layoutMode)?layoutMode:layoutMode?{type:layoutMode}:null;}/**
 * Consider Case:
 * When default option has {left: 0, width: 100}, and we set {right: 0}
 * through setOption or media query, using normal zrUtil.merge will cause
 * {right: 0} does not take effect.
 *
 * @example
 * ComponentModel.extend({
 *     init: function () {
 *         ...
 *         let inputPositionParams = layout.getLayoutParams(option);
 *         this.mergeOption(inputPositionParams);
 *     },
 *     mergeOption: function (newOption) {
 *         newOption && zrUtil.merge(thisOption, newOption, true);
 *         layout.mergeLayoutParam(thisOption, newOption);
 *     }
 * });
 *
 * @param targetOption
 * @param newOption
 * @param opt
 */function mergeLayoutParam(targetOption,newOption,opt){var ignoreSize=opt&&opt.ignoreSize;!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ(ignoreSize)&&(ignoreSize=[ignoreSize,ignoreSize]);var hResult=merge(HV_NAMES[0],0);var vResult=merge(HV_NAMES[1],1);copy(HV_NAMES[0],targetOption,hResult);copy(HV_NAMES[1],targetOption,vResult);function merge(names,hvIdx){var newParams={};var newValueCount=0;var merged={};var mergedValueCount=0;var enoughParamNumber=2;each(names,function(name){merged[name]=targetOption[name];});each(names,function(name){// Consider case: newOption.width is null, which is
// set by user for removing width setting.
hasProp(newOption,name)&&(newParams[name]=merged[name]=newOption[name]);hasValue(newParams,name)&&newValueCount++;hasValue(merged,name)&&mergedValueCount++;});if(ignoreSize[hvIdx]){// Only one of left/right is premitted to exist.
if(hasValue(newOption,names[1])){merged[names[2]]=null;}else if(hasValue(newOption,names[2])){merged[names[1]]=null;}return merged;}// Case: newOption: {width: ..., right: ...},
// or targetOption: {right: ...} and newOption: {width: ...},
// There is no conflict when merged only has params count
// little than enoughParamNumber.
if(mergedValueCount===enoughParamNumber||!newValueCount){return merged;}// Case: newOption: {width: ..., right: ...},
// Than we can make sure user only want those two, and ignore
// all origin params in targetOption.
else if(newValueCount>=enoughParamNumber){return newParams;}else{// Chose another param from targetOption by priority.
for(var i=0;i<names.length;i++){var name_1=names[i];if(!hasProp(newParams,name_1)&&hasProp(targetOption,name_1)){newParams[name_1]=targetOption[name_1];break;}}return newParams;}}function hasProp(obj,name){return obj.hasOwnProperty(name);}function hasValue(obj,name){return obj[name]!=null&&obj[name]!=='auto';}function copy(names,target,source){each(names,function(name){target[name]=source[name];});}}/**
 * Retrieve 'left', 'right', 'top', 'bottom', 'width', 'height' from object.
 */function getLayoutParams(source){return copyLayoutParams({},source);}/**
 * Retrieve 'left', 'right', 'top', 'bottom', 'width', 'height' from object.
 * @param {Object} source
 * @return {Object} Result contains those props.
 */function copyLayoutParams(target,source){source&&target&&each(LOCATION_PARAMS,function(name){source.hasOwnProperty(name)&&(target[name]=source[name]);});return target;}

/***/ }),

/***/ 42023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sh": () => (/* binding */ deprecateLog),
/* harmony export */   "_y": () => (/* binding */ throwError)
/* harmony export */ });
/* unused harmony exports log, warn, error, deprecateReplaceLog, makePrintable */
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
*/var ECHARTS_PREFIX='[ECharts] ';var storedLogs={};var hasConsole=typeof console!=='undefined'// eslint-disable-next-line
&&console.warn&&console.log;function outputLog(type,str,onlyOnce){if(hasConsole){if(onlyOnce){if(storedLogs[str]){return;}storedLogs[str]=true;}// eslint-disable-next-line
console[type](ECHARTS_PREFIX+str);}}function log(str,onlyOnce){outputLog('log',str,onlyOnce);}function warn(str,onlyOnce){outputLog('warn',str,onlyOnce);}function error(str,onlyOnce){outputLog('error',str,onlyOnce);}function deprecateLog(str){if(false){}}function deprecateReplaceLog(oldOpt,newOpt,scope){if(false){}}/**
 * If in __DEV__ environment, get console printable message for users hint.
 * Parameters are separated by ' '.
 * @usuage
 * makePrintable('This is an error on', someVar, someObj);
 *
 * @param hintInfo anything about the current execution context to hint users.
 * @throws Error
 */function makePrintable(){var hintInfo=[];for(var _i=0;_i<arguments.length;_i++){hintInfo[_i]=arguments[_i];}var msg='';if(false){ var makePrintableStringIfPossible_1; }return msg;}/**
 * @throws Error
 */function throwError(msg){throw new Error(msg);}

/***/ }),

/***/ 23958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C4": () => (/* binding */ getDataItemValue),
/* harmony export */   "C6": () => (/* binding */ SINGLE_REFERRING),
/* harmony export */   "Cc": () => (/* binding */ defaultEmphasis),
/* harmony export */   "Co": () => (/* binding */ isDataItemOption),
/* harmony export */   "HZ": () => (/* binding */ queryReferringComponents),
/* harmony export */   "IL": () => (/* binding */ getAttribute),
/* harmony export */   "O0": () => (/* binding */ setComponentTypeToKeyInfo),
/* harmony export */   "P$": () => (/* binding */ setAttribute),
/* harmony export */   "Td": () => (/* binding */ TEXT_STYLE_OPTIONS),
/* harmony export */   "U5": () => (/* binding */ convertOptionIdName),
/* harmony export */   "U9": () => (/* binding */ getTooltipRenderMode),
/* harmony export */   "XI": () => (/* binding */ compressBatches),
/* harmony export */   "Yf": () => (/* binding */ makeInner),
/* harmony export */   "ab": () => (/* binding */ mappingToExists),
/* harmony export */   "gO": () => (/* binding */ queryDataIndex),
/* harmony export */   "kF": () => (/* binding */ normalizeToArray),
/* harmony export */   "lY": () => (/* binding */ isComponentIdInternal),
/* harmony export */   "pk": () => (/* binding */ interpolateRawValues),
/* harmony export */   "pm": () => (/* binding */ parseFinder),
/* harmony export */   "yu": () => (/* binding */ isNameSpecified),
/* harmony export */   "zH": () => (/* binding */ preParseFinder)
/* harmony export */ });
/* unused harmony exports makeInternalComponentId, MULTIPLE_REFERRING, groupData */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9959);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84646);
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
*/function interpolateNumber(p0,p1,percent){return(p1-p0)*percent+p0;}/**
 * Make the name displayable. But we should
 * make sure it is not duplicated with user
 * specified name, so use '\0';
 */var DUMMY_COMPONENT_NAME_PREFIX='series\0';var INTERNAL_COMPONENT_ID_PREFIX='\0_ec_\0';/**
 * If value is not array, then translate it to array.
 * @param  {*} value
 * @return {Array} [value] or value
 */function normalizeToArray(value){return value instanceof Array?value:value==null?[]:[value];}/**
 * Sync default option between normal and emphasis like `position` and `show`
 * In case some one will write code like
 *     label: {
 *          show: false,
 *          position: 'outside',
 *          fontSize: 18
 *     },
 *     emphasis: {
 *          label: { show: true }
 *     }
 */function defaultEmphasis(opt,key,subOpts){// Caution: performance sensitive.
if(opt){opt[key]=opt[key]||{};opt.emphasis=opt.emphasis||{};opt.emphasis[key]=opt.emphasis[key]||{};// Default emphasis option from normal
for(var i=0,len=subOpts.length;i<len;i++){var subOptName=subOpts[i];if(!opt.emphasis[key].hasOwnProperty(subOptName)&&opt[key].hasOwnProperty(subOptName)){opt.emphasis[key][subOptName]=opt[key][subOptName];}}}}var TEXT_STYLE_OPTIONS=['fontStyle','fontWeight','fontSize','fontFamily','rich','tag','color','textBorderColor','textBorderWidth','width','height','lineHeight','align','verticalAlign','baseline','shadowColor','shadowBlur','shadowOffsetX','shadowOffsetY','textShadowColor','textShadowBlur','textShadowOffsetX','textShadowOffsetY','backgroundColor','borderColor','borderWidth','borderRadius','padding'];// modelUtil.LABEL_OPTIONS = modelUtil.TEXT_STYLE_OPTIONS.concat([
//     'position', 'offset', 'rotate', 'origin', 'show', 'distance', 'formatter',
//     'fontStyle', 'fontWeight', 'fontSize', 'fontFamily',
//     // FIXME: deprecated, check and remove it.
//     'textStyle'
// ]);
/**
 * The method do not ensure performance.
 * data could be [12, 2323, {value: 223}, [1221, 23], {value: [2, 23]}]
 * This helper method retieves value from data.
 */function getDataItemValue(dataItem){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(dataItem)&&!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(dataItem)&&!(dataItem instanceof Date)?dataItem.value:dataItem;}/**
 * data could be [12, 2323, {value: 223}, [1221, 23], {value: [2, 23]}]
 * This helper method determine if dataItem has extra option besides value
 */function isDataItemOption(dataItem){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(dataItem)&&!(dataItem instanceof Array);// // markLine data can be array
// && !(dataItem[0] && isObject(dataItem[0]) && !(dataItem[0] instanceof Array));
};/**
 * Mapping to existings for merge.
 *
 * Mode "normalMege":
 *     The mapping result (merge result) will keep the order of the existing
 *     component, rather than the order of new option. Because we should ensure
 *     some specified index reference (like xAxisIndex) keep work.
 *     And in most cases, "merge option" is used to update partial option but not
 *     be expected to change the order.
 *
 * Mode "replaceMege":
 *     (1) Only the id mapped components will be merged.
 *     (2) Other existing components (except internal compoonets) will be removed.
 *     (3) Other new options will be used to create new component.
 *     (4) The index of the existing compoents will not be modified.
 *     That means their might be "hole" after the removal.
 *     The new components are created first at those available index.
 *
 * Mode "replaceAll":
 *     This mode try to support that reproduce an echarts instance from another
 *     echarts instance (via `getOption`) in some simple cases.
 *     In this senario, the `result` index are exactly the consistent with the `newCmptOptions`,
 *     which ensures the compoennt index referring (like `xAxisIndex: ?`) corrent. That is,
 *     the "hole" in `newCmptOptions` will also be kept.
 *     On the contrary, other modes try best to eliminate holes.
 *     PENDING: This is an experimental mode yet.
 *
 * @return See the comment of <MappingResult>.
 */function mappingToExists(existings,newCmptOptions,mode){var isNormalMergeMode=mode==='normalMerge';var isReplaceMergeMode=mode==='replaceMerge';var isReplaceAllMode=mode==='replaceAll';existings=existings||[];newCmptOptions=(newCmptOptions||[]).slice();var existingIdIdxMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)();// Validate id and name on user input option.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(newCmptOptions,function(cmptOption,index){if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(cmptOption)){newCmptOptions[index]=null;return;}if(false){}});var result=prepareResult(existings,existingIdIdxMap,mode);if(isNormalMergeMode||isReplaceMergeMode){mappingById(result,existings,existingIdIdxMap,newCmptOptions);}if(isNormalMergeMode){mappingByName(result,newCmptOptions);}if(isNormalMergeMode||isReplaceMergeMode){mappingByIndex(result,newCmptOptions,isReplaceMergeMode);}else if(isReplaceAllMode){mappingInReplaceAllMode(result,newCmptOptions);}makeIdAndName(result);// The array `result` MUST NOT contain elided items, otherwise the
// forEach will ommit those items and result in incorrect result.
return result;}function prepareResult(existings,existingIdIdxMap,mode){var result=[];if(mode==='replaceAll'){return result;}// Do not use native `map` to in case that the array `existings`
// contains elided items, which will be ommited.
for(var index=0;index<existings.length;index++){var existing=existings[index];// Because of replaceMerge, `existing` may be null/undefined.
if(existing&&existing.id!=null){existingIdIdxMap.set(existing.id,index);}// For non-internal-componnets:
//     Mode "normalMerge": all existings kept.
//     Mode "replaceMerge": all existing removed unless mapped by id.
// For internal-components:
//     go with "replaceMerge" approach in both mode.
result.push({existing:mode==='replaceMerge'||isComponentIdInternal(existing)?null:existing,newOption:null,keyInfo:null,brandNew:null});}return result;}function mappingById(result,existings,existingIdIdxMap,newCmptOptions){// Mapping by id if specified.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(newCmptOptions,function(cmptOption,index){if(!cmptOption||cmptOption.id==null){return;}var optionId=makeComparableKey(cmptOption.id);var existingIdx=existingIdIdxMap.get(optionId);if(existingIdx!=null){var resultItem=result[existingIdx];(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .assert */ .hu)(!resultItem.newOption,'Duplicated option on id "'+optionId+'".');resultItem.newOption=cmptOption;// In both mode, if id matched, new option will be merged to
// the existings rather than creating new component model.
resultItem.existing=existings[existingIdx];newCmptOptions[index]=null;}});}function mappingByName(result,newCmptOptions){// Mapping by name if specified.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(newCmptOptions,function(cmptOption,index){if(!cmptOption||cmptOption.name==null){return;}for(var i=0;i<result.length;i++){var existing=result[i].existing;if(!result[i].newOption// Consider name: two map to one.
// Can not match when both ids existing but different.
&&existing&&(existing.id==null||cmptOption.id==null)&&!isComponentIdInternal(cmptOption)&&!isComponentIdInternal(existing)&&keyExistAndEqual('name',existing,cmptOption)){result[i].newOption=cmptOption;newCmptOptions[index]=null;return;}}});}function mappingByIndex(result,newCmptOptions,brandNew){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(newCmptOptions,function(cmptOption){if(!cmptOption){return;}// Find the first place that not mapped by id and not internal component (consider the "hole").
var resultItem;var nextIdx=0;while(// Be `!resultItem` only when `nextIdx >= result.length`.
(resultItem=result[nextIdx])&&(// (1) Existing models that already have id should be able to mapped to. Because
// after mapping performed, model will always be assigned with an id if user not given.
// After that all models have id.
// (2) If new option has id, it can only set to a hole or append to the last. It should
// not be merged to the existings with different id. Because id should not be overwritten.
// (3) Name can be overwritten, because axis use name as 'show label text'.
resultItem.newOption||isComponentIdInternal(resultItem.existing)||// In mode "replaceMerge", here no not-mapped-non-internal-existing.
resultItem.existing&&cmptOption.id!=null&&!keyExistAndEqual('id',cmptOption,resultItem.existing))){nextIdx++;}if(resultItem){resultItem.newOption=cmptOption;resultItem.brandNew=brandNew;}else{result.push({newOption:cmptOption,brandNew:brandNew,existing:null,keyInfo:null});}nextIdx++;});}function mappingInReplaceAllMode(result,newCmptOptions){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(newCmptOptions,function(cmptOption){// The feature "reproduce" requires "hole" will also reproduced
// in case that compoennt index referring are broken.
result.push({newOption:cmptOption,brandNew:true,existing:null,keyInfo:null});});}/**
 * Make id and name for mapping result (result of mappingToExists)
 * into `keyInfo` field.
 */function makeIdAndName(mapResult){// We use this id to hash component models and view instances
// in echarts. id can be specified by user, or auto generated.
// The id generation rule ensures new view instance are able
// to mapped to old instance when setOption are called in
// no-merge mode. So we generate model id by name and plus
// type in view id.
// name can be duplicated among components, which is convenient
// to specify multi components (like series) by one name.
// Ensure that each id is distinct.
var idMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)();(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(mapResult,function(item){var existing=item.existing;existing&&idMap.set(existing.id,item);});(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(mapResult,function(item){var opt=item.newOption;// Force ensure id not duplicated.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .assert */ .hu)(!opt||opt.id==null||!idMap.get(opt.id)||idMap.get(opt.id)===item,'id duplicates: '+(opt&&opt.id));opt&&opt.id!=null&&idMap.set(opt.id,item);!item.keyInfo&&(item.keyInfo={});});// Make name and id.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(mapResult,function(item,index){var existing=item.existing;var opt=item.newOption;var keyInfo=item.keyInfo;if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(opt)){return;}// name can be overwitten. Consider case: axis.name = '20km'.
// But id generated by name will not be changed, which affect
// only in that case: setOption with 'not merge mode' and view
// instance will be recreated, which can be accepted.
keyInfo.name=opt.name!=null?makeComparableKey(opt.name):existing?existing.name// Avoid diffferent series has the same name,
// because name may be used like in color pallet.
:DUMMY_COMPONENT_NAME_PREFIX+index;if(existing){keyInfo.id=makeComparableKey(existing.id);}else if(opt.id!=null){keyInfo.id=makeComparableKey(opt.id);}else{// Consider this situatoin:
//  optionA: [{name: 'a'}, {name: 'a'}, {..}]
//  optionB [{..}, {name: 'a'}, {name: 'a'}]
// Series with the same name between optionA and optionB
// should be mapped.
var idNum=0;do{keyInfo.id='\0'+keyInfo.name+'\0'+idNum++;}while(idMap.get(keyInfo.id));}idMap.set(keyInfo.id,item);});}function keyExistAndEqual(attr,obj1,obj2){var key1=convertOptionIdName(obj1[attr],null);var key2=convertOptionIdName(obj2[attr],null);// See `MappingExistingItem`. `id` and `name` trade string equals to number.
return key1!=null&&key2!=null&&key1===key2;}/**
 * @return return null if not exist.
 */function makeComparableKey(val){if(false){}return convertOptionIdName(val,'');}function convertOptionIdName(idOrName,defaultValue){if(idOrName==null){return defaultValue;}return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(idOrName)?idOrName:(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(idOrName)||(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isStringSafe */ .cd)(idOrName)?idOrName+'':defaultValue;}function warnInvalidateIdOrName(idOrName){if(false){}}function isValidIdOrName(idOrName){return isStringSafe(idOrName)||isNumeric(idOrName);}function isNameSpecified(componentModel){var name=componentModel.name;// Is specified when `indexOf` get -1 or > 0.
return!!(name&&name.indexOf(DUMMY_COMPONENT_NAME_PREFIX));}/**
 * @public
 * @param {Object} cmptOption
 * @return {boolean}
 */function isComponentIdInternal(cmptOption){return cmptOption&&cmptOption.id!=null&&makeComparableKey(cmptOption.id).indexOf(INTERNAL_COMPONENT_ID_PREFIX)===0;}function makeInternalComponentId(idSuffix){return INTERNAL_COMPONENT_ID_PREFIX+idSuffix;}function setComponentTypeToKeyInfo(mappingResult,mainType,componentModelCtor){// Set mainType and complete subType.
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(mappingResult,function(item){var newOption=item.newOption;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn)(newOption)){item.keyInfo.mainType=mainType;item.keyInfo.subType=determineSubType(mainType,newOption,item.existing,componentModelCtor);}});}function determineSubType(mainType,newCmptOption,existComponent,componentModelCtor){var subType=newCmptOption.type?newCmptOption.type:existComponent?existComponent.subType// Use determineSubType only when there is no existComponent.
:componentModelCtor.determineSubType(mainType,newCmptOption);// tooltip, markline, markpoint may always has no subType
return subType;}/**
 * A helper for removing duplicate items between batchA and batchB,
 * and in themselves, and categorize by series.
 *
 * @param batchA Like: [{seriesId: 2, dataIndex: [32, 4, 5]}, ...]
 * @param batchB Like: [{seriesId: 2, dataIndex: [32, 4, 5]}, ...]
 * @return result: [resultBatchA, resultBatchB]
 */function compressBatches(batchA,batchB){var mapA={};var mapB={};makeMap(batchA||[],mapA);makeMap(batchB||[],mapB,mapA);return[mapToArray(mapA),mapToArray(mapB)];function makeMap(sourceBatch,map,otherMap){for(var i=0,len=sourceBatch.length;i<len;i++){var seriesId=convertOptionIdName(sourceBatch[i].seriesId,null);if(seriesId==null){return;}var dataIndices=normalizeToArray(sourceBatch[i].dataIndex);var otherDataIndices=otherMap&&otherMap[seriesId];for(var j=0,lenj=dataIndices.length;j<lenj;j++){var dataIndex=dataIndices[j];if(otherDataIndices&&otherDataIndices[dataIndex]){otherDataIndices[dataIndex]=null;}else{(map[seriesId]||(map[seriesId]={}))[dataIndex]=1;}}}}function mapToArray(map,isData){var result=[];for(var i in map){if(map.hasOwnProperty(i)&&map[i]!=null){if(isData){result.push(+i);}else{var dataIndices=mapToArray(map[i],true);dataIndices.length&&result.push({seriesId:i,dataIndex:dataIndices});}}}return result;}}/**
 * @param payload Contains dataIndex (means rawIndex) / dataIndexInside / name
 *                         each of which can be Array or primary type.
 * @return dataIndex If not found, return undefined/null.
 */function queryDataIndex(data,payload){if(payload.dataIndexInside!=null){return payload.dataIndexInside;}else if(payload.dataIndex!=null){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(payload.dataIndex)?(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)(payload.dataIndex,function(value){return data.indexOfRawIndex(value);}):data.indexOfRawIndex(payload.dataIndex);}else if(payload.name!=null){return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(payload.name)?(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI)(payload.name,function(value){return data.indexOfName(value);}):data.indexOfName(payload.name);}}/**
 * Enable property storage to any host object.
 * Notice: Serialization is not supported.
 *
 * For example:
 * let inner = zrUitl.makeInner();
 *
 * function some1(hostObj) {
 *      inner(hostObj).someProperty = 1212;
 *      ...
 * }
 * function some2() {
 *      let fields = inner(this);
 *      fields.someProperty1 = 1212;
 *      fields.someProperty2 = 'xx';
 *      ...
 * }
 *
 * @return {Function}
 */function makeInner(){var key='__ec_inner_'+innerUniqueIndex++;return function(hostObj){return hostObj[key]||(hostObj[key]={});};}var innerUniqueIndex=(0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .getRandomIdBase */ .jj)();/**
 * The same behavior as `component.getReferringComponents`.
 */function parseFinder(ecModel,finderInput,opt){var _a=preParseFinder(finderInput,opt),mainTypeSpecified=_a.mainTypeSpecified,queryOptionMap=_a.queryOptionMap,others=_a.others;var result=others;var defaultMainType=opt?opt.defaultMainType:null;if(!mainTypeSpecified&&defaultMainType){queryOptionMap.set(defaultMainType,{});}queryOptionMap.each(function(queryOption,mainType){var queryResult=queryReferringComponents(ecModel,mainType,queryOption,{useDefault:defaultMainType===mainType,enableAll:opt&&opt.enableAll!=null?opt.enableAll:true,enableNone:opt&&opt.enableNone!=null?opt.enableNone:true});result[mainType+'Models']=queryResult.models;result[mainType+'Model']=queryResult.models[0];});return result;}function preParseFinder(finderInput,opt){var finder;if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(finderInput)){var obj={};obj[finderInput+'Index']=0;finder=obj;}else{finder=finderInput;}var queryOptionMap=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)();var others={};var mainTypeSpecified=false;(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6)(finder,function(value,key){// Exclude 'dataIndex' and other illgal keys.
if(key==='dataIndex'||key==='dataIndexInside'){others[key]=value;return;}var parsedKey=key.match(/^(\w+)(Index|Id|Name)$/)||[];var mainType=parsedKey[1];var queryType=(parsedKey[2]||'').toLowerCase();if(!mainType||!queryType||opt&&opt.includeMainTypes&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .cq)(opt.includeMainTypes,mainType)<0){return;}mainTypeSpecified=mainTypeSpecified||!!mainType;var queryOption=queryOptionMap.get(mainType)||queryOptionMap.set(mainType,{});queryOption[queryType]=value;});return{mainTypeSpecified:mainTypeSpecified,queryOptionMap:queryOptionMap,others:others};}var SINGLE_REFERRING={useDefault:true,enableAll:false,enableNone:false};var MULTIPLE_REFERRING={useDefault:false,enableAll:true,enableNone:true};function queryReferringComponents(ecModel,mainType,userOption,opt){opt=opt||SINGLE_REFERRING;var indexOption=userOption.index;var idOption=userOption.id;var nameOption=userOption.name;var result={models:null,specified:indexOption!=null||idOption!=null||nameOption!=null};if(!result.specified){// Use the first as default if `useDefault`.
var firstCmpt=void 0;result.models=opt.useDefault&&(firstCmpt=ecModel.getComponent(mainType))?[firstCmpt]:[];return result;}if(indexOption==='none'||indexOption===false){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .assert */ .hu)(opt.enableNone,'`"none"` or `false` is not a valid value on index option.');result.models=[];return result;}// `queryComponents` will return all components if
// both all of index/id/name are null/undefined.
if(indexOption==='all'){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .assert */ .hu)(opt.enableAll,'`"all"` is not a valid value on index option.');indexOption=idOption=nameOption=null;}result.models=ecModel.queryComponents({mainType:mainType,index:indexOption,id:idOption,name:nameOption});return result;}function setAttribute(dom,key,value){dom.setAttribute?dom.setAttribute(key,value):dom[key]=value;}function getAttribute(dom,key){return dom.getAttribute?dom.getAttribute(key):dom[key];}function getTooltipRenderMode(renderModeOption){if(renderModeOption==='auto'){// Using html when `document` exists, use richText otherwise
return zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].domSupported */ .Z.domSupported?'html':'richText';}else{return renderModeOption||'html';}}/**
 * Group a list by key.
 */function groupData(array,getKey// return key
){var buckets=createHashMap();var keys=[];each(array,function(item){var key=getKey(item);(buckets.get(key)||(keys.push(key),buckets.set(key,[]))).push(item);});return{keys:keys,buckets:buckets};}/**
 * Interpolate raw values of a series with percent
 *
 * @param data         data
 * @param labelModel   label model of the text element
 * @param sourceValue  start value. May be null/undefined when init.
 * @param targetValue  end value
 * @param percent      0~1 percentage; 0 uses start value while 1 uses end value
 * @return             interpolated values
 *                     If `sourceValue` and `targetValue` are `number`, return `number`.
 *                     If `sourceValue` and `targetValue` are `string`, return `string`.
 *                     If `sourceValue` and `targetValue` are `(string | number)[]`, return `(string | number)[]`.
 *                     Other cases do not supported.
 */function interpolateRawValues(data,precision,sourceValue,targetValue,percent){var isAutoPrecision=precision==null||precision==='auto';if(targetValue==null){return targetValue;}if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(targetValue)){var value=interpolateNumber(sourceValue||0,targetValue,percent);return (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .round */ .NM)(value,isAutoPrecision?Math.max((0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrecision */ .p8)(sourceValue||0),(0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrecision */ .p8)(targetValue)):precision);}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(targetValue)){return percent<1?sourceValue:targetValue;}else{var interpolated=[];var leftArr=sourceValue;var rightArr=targetValue;var length_1=Math.max(leftArr?leftArr.length:0,rightArr.length);for(var i=0;i<length_1;++i){var info=data.getDimensionInfo(i);// Don't interpolate ordinal dims
if(info&&info.type==='ordinal'){// In init, there is no `sourceValue`, but should better not to get undefined result.
interpolated[i]=(percent<1&&leftArr?leftArr:rightArr)[i];}else{var leftVal=leftArr&&leftArr[i]?leftArr[i]:0;var rightVal=rightArr[i];var value=interpolateNumber(leftVal,rightVal,percent);interpolated[i]=(0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .round */ .NM)(value,isAutoPrecision?Math.max((0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrecision */ .p8)(leftVal),(0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .getPrecision */ .p8)(rightVal)):precision);}}return interpolated;}}

/***/ }),

/***/ 84646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FK": () => (/* binding */ numericToNumber),
/* harmony export */   "GM": () => (/* binding */ parsePercent),
/* harmony export */   "M9": () => (/* binding */ getPixelPrecision),
/* harmony export */   "NM": () => (/* binding */ round),
/* harmony export */   "NU": () => (/* binding */ linearMap),
/* harmony export */   "S$": () => (/* binding */ addSafe),
/* harmony export */   "Xd": () => (/* binding */ quantity),
/* harmony export */   "dt": () => (/* binding */ asc),
/* harmony export */   "eJ": () => (/* binding */ getPercentWithPrecision),
/* harmony export */   "jj": () => (/* binding */ getRandomIdBase),
/* harmony export */   "kE": () => (/* binding */ isNumeric),
/* harmony export */   "kx": () => (/* binding */ nice),
/* harmony export */   "mW": () => (/* binding */ isRadianAroundZero),
/* harmony export */   "nR": () => (/* binding */ reformIntervals),
/* harmony export */   "nl": () => (/* binding */ getLeastCommonMultiple),
/* harmony export */   "p8": () => (/* binding */ getPrecision),
/* harmony export */   "sG": () => (/* binding */ parseDate),
/* harmony export */   "wW": () => (/* binding */ remRadian),
/* harmony export */   "xW": () => (/* binding */ quantityExponent)
/* harmony export */ });
/* unused harmony exports getPrecisionSafe, MAX_SAFE_INTEGER, quantile, getGreatestCommonDividor */
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
*/ /*
* A third-party license is embeded for some of the code in this file:
* The method "quantile" was copied from "d3.js".
* (See more details in the comment of the method below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/var RADIAN_EPSILON=1e-4;// Although chrome already enlarge this number to 100 for `toFixed`, but
// we sill follow the spec for compatibility.
var ROUND_SUPPORTED_PRECISION_MAX=20;function _trim(str){return str.replace(/^\s+|\s+$/g,'');}/**
 * Linear mapping a value from domain to range
 * @param  val
 * @param  domain Domain extent domain[0] can be bigger than domain[1]
 * @param  range  Range extent range[0] can be bigger than range[1]
 * @param  clamp Default to be false
 */function linearMap(val,domain,range,clamp){var d0=domain[0];var d1=domain[1];var r0=range[0];var r1=range[1];var subDomain=d1-d0;var subRange=r1-r0;if(subDomain===0){return subRange===0?r0:(r0+r1)/2;}// Avoid accuracy problem in edge, such as
// 146.39 - 62.83 === 83.55999999999999.
// See echarts/test/ut/spec/util/number.js#linearMap#accuracyError
// It is a little verbose for efficiency considering this method
// is a hotspot.
if(clamp){if(subDomain>0){if(val<=d0){return r0;}else if(val>=d1){return r1;}}else{if(val>=d0){return r0;}else if(val<=d1){return r1;}}}else{if(val===d0){return r0;}if(val===d1){return r1;}}return(val-d0)/subDomain*subRange+r0;}/**
 * Convert a percent string to absolute number.
 * Returns NaN if percent is not a valid string or number
 */function parsePercent(percent,all){switch(percent){case'center':case'middle':percent='50%';break;case'left':case'top':percent='0%';break;case'right':case'bottom':percent='100%';break;}if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD(percent)){if(_trim(percent).match(/%$/)){return parseFloat(percent)/100*all;}return parseFloat(percent);}return percent==null?NaN:+percent;}function round(x,precision,returnStr){if(precision==null){precision=10;}// Avoid range error
precision=Math.min(Math.max(0,precision),ROUND_SUPPORTED_PRECISION_MAX);// PENDING: 1.005.toFixed(2) is '1.00' rather than '1.01'
x=(+x).toFixed(precision);return returnStr?x:+x;}/**
 * Inplacd asc sort arr.
 * The input arr will be modified.
 */function asc(arr){arr.sort(function(a,b){return a-b;});return arr;}/**
 * Get precision.
 */function getPrecision(val){val=+val;if(isNaN(val)){return 0;}// It is much faster than methods converting number to string as follows
//      let tmp = val.toString();
//      return tmp.length - 1 - tmp.indexOf('.');
// especially when precision is low
// Notice:
// (1) If the loop count is over about 20, it is slower than `getPrecisionSafe`.
//     (see https://jsbench.me/2vkpcekkvw/1)
// (2) If the val is less than for example 1e-15, the result may be incorrect.
//     (see test/ut/spec/util/number.test.ts `getPrecision_equal_random`)
if(val>1e-14){var e=1;for(var i=0;i<15;i++,e*=10){if(Math.round(val*e)/e===val){return i;}}}return getPrecisionSafe(val);}/**
 * Get precision with slow but safe method
 */function getPrecisionSafe(val){// toLowerCase for: '3.4E-12'
var str=val.toString().toLowerCase();// Consider scientific notation: '3.4e-12' '3.4e+12'
var eIndex=str.indexOf('e');var exp=eIndex>0?+str.slice(eIndex+1):0;var significandPartLen=eIndex>0?eIndex:str.length;var dotIndex=str.indexOf('.');var decimalPartLen=dotIndex<0?0:significandPartLen-1-dotIndex;return Math.max(0,decimalPartLen-exp);}/**
 * Minimal dicernible data precisioin according to a single pixel.
 */function getPixelPrecision(dataExtent,pixelExtent){var log=Math.log;var LN10=Math.LN10;var dataQuantity=Math.floor(log(dataExtent[1]-dataExtent[0])/LN10);var sizeQuantity=Math.round(log(Math.abs(pixelExtent[1]-pixelExtent[0]))/LN10);// toFixed() digits argument must be between 0 and 20.
var precision=Math.min(Math.max(-dataQuantity+sizeQuantity,0),20);return!isFinite(precision)?20:precision;}/**
 * Get a data of given precision, assuring the sum of percentages
 * in valueList is 1.
 * The largest remainer method is used.
 * https://en.wikipedia.org/wiki/Largest_remainder_method
 *
 * @param valueList a list of all data
 * @param idx index of the data to be processed in valueList
 * @param precision integer number showing digits of precision
 * @return percent ranging from 0 to 100
 */function getPercentWithPrecision(valueList,idx,precision){if(!valueList[idx]){return 0;}var sum=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .reduce */ .u4(valueList,function(acc,val){return acc+(isNaN(val)?0:val);},0);if(sum===0){return 0;}var digits=Math.pow(10,precision);var votesPerQuota=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI(valueList,function(val){return(isNaN(val)?0:val)/sum*digits*100;});var targetSeats=digits*100;var seats=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI(votesPerQuota,function(votes){// Assign automatic seats.
return Math.floor(votes);});var currentSum=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .reduce */ .u4(seats,function(acc,val){return acc+val;},0);var remainder=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI(votesPerQuota,function(votes,idx){return votes-seats[idx];});// Has remainding votes.
while(currentSum<targetSeats){// Find next largest remainder.
var max=Number.NEGATIVE_INFINITY;var maxId=null;for(var i=0,len=remainder.length;i<len;++i){if(remainder[i]>max){max=remainder[i];maxId=i;}}// Add a vote to max remainder.
++seats[maxId];remainder[maxId]=0;++currentSum;}return seats[idx]/digits;}/**
 * Solve the floating point adding problem like 0.1 + 0.2 === 0.30000000000000004
 * See <http://0.30000000000000004.com/>
 */function addSafe(val0,val1){var maxPrecision=Math.max(getPrecision(val0),getPrecision(val1));// const multiplier = Math.pow(10, maxPrecision);
// return (Math.round(val0 * multiplier) + Math.round(val1 * multiplier)) / multiplier;
var sum=val0+val1;// // PENDING: support more?
return maxPrecision>ROUND_SUPPORTED_PRECISION_MAX?sum:round(sum,maxPrecision);}// Number.MAX_SAFE_INTEGER, ie do not support.
var MAX_SAFE_INTEGER=9007199254740991;/**
 * To 0 - 2 * PI, considering negative radian.
 */function remRadian(radian){var pi2=Math.PI*2;return(radian%pi2+pi2)%pi2;}/**
 * @param {type} radian
 * @return {boolean}
 */function isRadianAroundZero(val){return val>-RADIAN_EPSILON&&val<RADIAN_EPSILON;}// eslint-disable-next-line
var TIME_REG=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;// jshint ignore:line
/**
 * @param value valid type: number | string | Date, otherwise return `new Date(NaN)`
 *   These values can be accepted:
 *   + An instance of Date, represent a time in its own time zone.
 *   + Or string in a subset of ISO 8601, only including:
 *     + only year, month, date: '2012-03', '2012-03-01', '2012-03-01 05', '2012-03-01 05:06',
 *     + separated with T or space: '2012-03-01T12:22:33.123', '2012-03-01 12:22:33.123',
 *     + time zone: '2012-03-01T12:22:33Z', '2012-03-01T12:22:33+8000', '2012-03-01T12:22:33-05:00',
 *     all of which will be treated as local time if time zone is not specified
 *     (see <https://momentjs.com/>).
 *   + Or other string format, including (all of which will be treated as loacal time):
 *     '2012', '2012-3-1', '2012/3/1', '2012/03/01',
 *     '2009/6/12 2:00', '2009/6/12 2:05:08', '2009/6/12 2:05:08.123'
 *   + a timestamp, which represent a time in UTC.
 * @return date Never be null/undefined. If invalid, return `new Date(NaN)`.
 */function parseDate(value){if(value instanceof Date){return value;}else if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD(value)){// Different browsers parse date in different way, so we parse it manually.
// Some other issues:
// new Date('1970-01-01') is UTC,
// new Date('1970/01/01') and new Date('1970-1-01') is local.
// See issue #3623
var match=TIME_REG.exec(value);if(!match){// return Invalid Date.
return new Date(NaN);}// Use local time when no timezone offset specifed.
if(!match[8]){// match[n] can only be string or undefined.
// But take care of '12' + 1 => '121'.
return new Date(+match[1],+(match[2]||1)-1,+match[3]||1,+match[4]||0,+(match[5]||0),+match[6]||0,match[7]?+match[7].substring(0,3):0);}// Timezoneoffset of Javascript Date has considered DST (Daylight Saving Time,
// https://tc39.github.io/ecma262/#sec-daylight-saving-time-adjustment).
// For example, system timezone is set as "Time Zone: America/Toronto",
// then these code will get different result:
// `new Date(1478411999999).getTimezoneOffset();  // get 240`
// `new Date(1478412000000).getTimezoneOffset();  // get 300`
// So we should not use `new Date`, but use `Date.UTC`.
else{var hour=+match[4]||0;if(match[8].toUpperCase()!=='Z'){hour-=+match[8].slice(0,3);}return new Date(Date.UTC(+match[1],+(match[2]||1)-1,+match[3]||1,hour,+(match[5]||0),+match[6]||0,match[7]?+match[7].substring(0,3):0));}}else if(value==null){return new Date(NaN);}return new Date(Math.round(value));}/**
 * Quantity of a number. e.g. 0.1, 1, 10, 100
 *
 * @param val
 * @return
 */function quantity(val){return Math.pow(10,quantityExponent(val));}/**
 * Exponent of the quantity of a number
 * e.g., 1234 equals to 1.234*10^3, so quantityExponent(1234) is 3
 *
 * @param val non-negative value
 * @return
 */function quantityExponent(val){if(val===0){return 0;}var exp=Math.floor(Math.log(val)/Math.LN10);/**
   * exp is expected to be the rounded-down result of the base-10 log of val.
   * But due to the precision loss with Math.log(val), we need to restore it
   * using 10^exp to make sure we can get val back from exp. #11249
   */if(val/Math.pow(10,exp)>=10){exp++;}return exp;}/**
 * find a “nice” number approximately equal to x. Round the number if round = true,
 * take ceiling if round = false. The primary observation is that the “nicest”
 * numbers in decimal are 1, 2, and 5, and all power-of-ten multiples of these numbers.
 *
 * See "Nice Numbers for Graph Labels" of Graphic Gems.
 *
 * @param  val Non-negative value.
 * @param  round
 * @return Niced number
 */function nice(val,round){var exponent=quantityExponent(val);var exp10=Math.pow(10,exponent);var f=val/exp10;// 1 <= f < 10
var nf;if(round){if(f<1.5){nf=1;}else if(f<2.5){nf=2;}else if(f<4){nf=3;}else if(f<7){nf=5;}else{nf=10;}}else{if(f<1){nf=1;}else if(f<2){nf=2;}else if(f<3){nf=3;}else if(f<5){nf=5;}else{nf=10;}}val=nf*exp10;// Fix 3 * 0.1 === 0.30000000000000004 issue (see IEEE 754).
// 20 is the uppper bound of toFixed.
return exponent>=-20?+val.toFixed(exponent<0?-exponent:0):val;}/**
 * This code was copied from "d3.js"
 * <https://github.com/d3/d3/blob/9cc9a875e636a1dcf36cc1e07bdf77e1ad6e2c74/src/arrays/quantile.js>.
 * See the license statement at the head of this file.
 * @param ascArr
 */function quantile(ascArr,p){var H=(ascArr.length-1)*p+1;var h=Math.floor(H);var v=+ascArr[h-1];var e=H-h;return e?v+e*(ascArr[h]-v):v;}/**
 * Order intervals asc, and split them when overlap.
 * expect(numberUtil.reformIntervals([
 *     {interval: [18, 62], close: [1, 1]},
 *     {interval: [-Infinity, -70], close: [0, 0]},
 *     {interval: [-70, -26], close: [1, 1]},
 *     {interval: [-26, 18], close: [1, 1]},
 *     {interval: [62, 150], close: [1, 1]},
 *     {interval: [106, 150], close: [1, 1]},
 *     {interval: [150, Infinity], close: [0, 0]}
 * ])).toEqual([
 *     {interval: [-Infinity, -70], close: [0, 0]},
 *     {interval: [-70, -26], close: [1, 1]},
 *     {interval: [-26, 18], close: [0, 1]},
 *     {interval: [18, 62], close: [0, 1]},
 *     {interval: [62, 150], close: [0, 1]},
 *     {interval: [150, Infinity], close: [0, 0]}
 * ]);
 * @param list, where `close` mean open or close
 *        of the interval, and Infinity can be used.
 * @return The origin list, which has been reformed.
 */function reformIntervals(list){list.sort(function(a,b){return littleThan(a,b,0)?-1:1;});var curr=-Infinity;var currClose=1;for(var i=0;i<list.length;){var interval=list[i].interval;var close_1=list[i].close;for(var lg=0;lg<2;lg++){if(interval[lg]<=curr){interval[lg]=curr;close_1[lg]=!lg?1-currClose:1;}curr=interval[lg];currClose=close_1[lg];}if(interval[0]===interval[1]&&close_1[0]*close_1[1]!==1){list.splice(i,1);}else{i++;}}return list;function littleThan(a,b,lg){return a.interval[lg]<b.interval[lg]||a.interval[lg]===b.interval[lg]&&(a.close[lg]-b.close[lg]===(!lg?1:-1)||!lg&&littleThan(a,b,1));}}/**
 * [Numberic is defined as]:
 *     `parseFloat(val) == val`
 * For example:
 * numeric:
 *     typeof number except NaN, '-123', '123', '2e3', '-2e3', '011', 'Infinity', Infinity,
 *     and they rounded by white-spaces or line-terminal like ' -123 \n ' (see es spec)
 * not-numeric:
 *     null, undefined, [], {}, true, false, 'NaN', NaN, '123ab',
 *     empty string, string with only white-spaces or line-terminal (see es spec),
 *     0x12, '0x12', '-0x12', 012, '012', '-012',
 *     non-string, ...
 *
 * @test See full test cases in `test/ut/spec/util/number.js`.
 * @return Must be a typeof number. If not numeric, return NaN.
 */function numericToNumber(val){var valFloat=parseFloat(val);return valFloat==val// eslint-disable-line eqeqeq
&&(valFloat!==0||!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD(val)||val.indexOf('x')<=0)// For case ' 0x0 '.
?valFloat:NaN;}/**
 * Definition of "numeric": see `numericToNumber`.
 */function isNumeric(val){return!isNaN(numericToNumber(val));}/**
 * Use random base to prevent users hard code depending on
 * this auto generated marker id.
 * @return An positive integer.
 */function getRandomIdBase(){return Math.round(Math.random()*9);}/**
 * Get the greatest common dividor
 *
 * @param {number} a one number
 * @param {number} b the other number
 */function getGreatestCommonDividor(a,b){if(b===0){return a;}return getGreatestCommonDividor(b,a%b);}/**
 * Get the least common multiple
 *
 * @param {number} a one number
 * @param {number} b the other number
 */function getLeastCommonMultiple(a,b){if(a==null){return b;}if(b==null){return a;}return a*b/getGreatestCommonDividor(a,b);}

/***/ }),

/***/ 34053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88161);
/* harmony import */ var _graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73727);
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
 * Sausage: similar to sector, but have half circle on both sides
 */var SausageShape=/** @class */function(){function SausageShape(){this.cx=0;this.cy=0;this.r0=0;this.r=0;this.startAngle=0;this.endAngle=Math.PI*2;this.clockwise=true;}return SausageShape;}();var SausagePath=/** @class */function(_super){(0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__extends */ .ZT)(SausagePath,_super);function SausagePath(opts){var _this=_super.call(this,opts)||this;_this.type='sausage';return _this;}SausagePath.prototype.getDefaultShape=function(){return new SausageShape();};SausagePath.prototype.buildPath=function(ctx,shape){var cx=shape.cx;var cy=shape.cy;var r0=Math.max(shape.r0||0,0);var r=Math.max(shape.r,0);var dr=(r-r0)*0.5;var rCenter=r0+dr;var startAngle=shape.startAngle;var endAngle=shape.endAngle;var clockwise=shape.clockwise;var PI2=Math.PI*2;var lessThanCircle=clockwise?endAngle-startAngle<PI2:startAngle-endAngle<PI2;if(!lessThanCircle){// Normalize angles
startAngle=endAngle-(clockwise?PI2:-PI2);}var unitStartX=Math.cos(startAngle);var unitStartY=Math.sin(startAngle);var unitEndX=Math.cos(endAngle);var unitEndY=Math.sin(endAngle);if(lessThanCircle){ctx.moveTo(unitStartX*r0+cx,unitStartY*r0+cy);ctx.arc(unitStartX*rCenter+cx,unitStartY*rCenter+cy,dr,-Math.PI+startAngle,startAngle,!clockwise);}else{ctx.moveTo(unitStartX*r+cx,unitStartY*r+cy);}ctx.arc(cx,cy,r,startAngle,endAngle,!clockwise);ctx.arc(unitEndX*rCenter+cx,unitEndY*rCenter+cy,dr,endAngle-Math.PI*2,endAngle-Math.PI,!clockwise);if(r0!==0){ctx.arc(cx,cy,r0,endAngle,startAngle,clockwise);}// ctx.closePath();
};return SausagePath;}(_graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SausagePath);

/***/ }),

/***/ 36073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$l": () => (/* binding */ handleGlobalMouseOverForHighDown),
/* harmony export */   "Av": () => (/* binding */ isHighDownDispatcher),
/* harmony export */   "C5": () => (/* binding */ getAllSelectedIndices),
/* harmony export */   "CX": () => (/* binding */ HOVER_STATE_BLUR),
/* harmony export */   "Gl": () => (/* binding */ setStatesFlag),
/* harmony export */   "Hg": () => (/* binding */ SELECT_ACTION_TYPE),
/* harmony export */   "JQ": () => (/* binding */ UNSELECT_ACTION_TYPE),
/* harmony export */   "Ki": () => (/* binding */ HIGHLIGHT_ACTION_TYPE),
/* harmony export */   "L1": () => (/* binding */ SPECIAL_STATES),
/* harmony export */   "MA": () => (/* binding */ setDefaultStateProxy),
/* harmony export */   "Mh": () => (/* binding */ leaveEmphasis),
/* harmony export */   "Nj": () => (/* binding */ setAsHighDownDispatcher),
/* harmony export */   "RW": () => (/* binding */ getHighlightDigit),
/* harmony export */   "SJ": () => (/* binding */ leaveSelect),
/* harmony export */   "SX": () => (/* binding */ enterBlur),
/* harmony export */   "T5": () => (/* binding */ allLeaveBlur),
/* harmony export */   "UL": () => (/* binding */ blurSeriesFromHighlightPayload),
/* harmony export */   "VP": () => (/* binding */ leaveBlur),
/* harmony export */   "WO": () => (/* binding */ setStatesStylesFromModel),
/* harmony export */   "XX": () => (/* binding */ enterSelect),
/* harmony export */   "aG": () => (/* binding */ isSelectChangePayload),
/* harmony export */   "ci": () => (/* binding */ updateSeriesElementSelection),
/* harmony export */   "e9": () => (/* binding */ savePathStates),
/* harmony export */   "fD": () => (/* binding */ enterEmphasis),
/* harmony export */   "iK": () => (/* binding */ TOGGLE_SELECT_ACTION_TYPE),
/* harmony export */   "k5": () => (/* binding */ toggleHoverEmphasis),
/* harmony export */   "oJ": () => (/* binding */ findComponentHighDownDispatchers),
/* harmony export */   "og": () => (/* binding */ toggleSelectionFromPayload),
/* harmony export */   "qc": () => (/* binding */ DISPLAY_STATES),
/* harmony export */   "th": () => (/* binding */ enableComponentHighDownFeatures),
/* harmony export */   "vF": () => (/* binding */ enableHoverEmphasis),
/* harmony export */   "wU": () => (/* binding */ HOVER_STATE_EMPHASIS),
/* harmony export */   "xp": () => (/* binding */ isHighDownPayload),
/* harmony export */   "xr": () => (/* binding */ handleGlobalMouseOutForHighDown),
/* harmony export */   "yx": () => (/* binding */ DOWNPLAY_ACTION_TYPE),
/* harmony export */   "zI": () => (/* binding */ blurComponent),
/* harmony export */   "zr": () => (/* binding */ Z2_EMPHASIS_LIFT)
/* harmony export */ });
/* unused harmony exports HOVER_STATE_NORMAL, Z2_SELECT_LIFT, clearStates, enterEmphasisWhenMouseOver, leaveEmphasisWhenMouseOut, blurSeries, disableHoverEmphasis, enableHoverFocus */
/* harmony import */ var zrender_lib_core_LRU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96880);
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57697);
/* harmony import */ var _innerStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5661);
/* harmony import */ var zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16304);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/* harmony import */ var zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73727);
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
*/// Reserve 0 as default.
var _highlightNextDigit=1;var _highlightKeyMap={};var getSavedStates=(0,_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var getComponentStates=(0,_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var HOVER_STATE_NORMAL=0;var HOVER_STATE_BLUR=1;var HOVER_STATE_EMPHASIS=2;var SPECIAL_STATES=['emphasis','blur','select'];var DISPLAY_STATES=['normal','emphasis','blur','select'];var Z2_EMPHASIS_LIFT=10;var Z2_SELECT_LIFT=9;var HIGHLIGHT_ACTION_TYPE='highlight';var DOWNPLAY_ACTION_TYPE='downplay';var SELECT_ACTION_TYPE='select';var UNSELECT_ACTION_TYPE='unselect';var TOGGLE_SELECT_ACTION_TYPE='toggleSelect';function hasFillOrStroke(fillOrStroke){return fillOrStroke!=null&&fillOrStroke!=='none';}// Most lifted color are duplicated.
var liftedColorCache=new zrender_lib_core_LRU_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP(100);function liftColor(color){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isString */ .HD)(color)){var liftedColor=liftedColorCache.get(color);if(!liftedColor){liftedColor=zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_3__/* .lift */ .xb(color,-0.1);liftedColorCache.put(color,liftedColor);}return liftedColor;}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isGradientObject */ .Qq)(color)){var ret=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},color);ret.colorStops=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .map */ .UI)(color.colorStops,function(stop){return{offset:stop.offset,color:zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_3__/* .lift */ .xb(stop.color,-0.1)};});return ret;}// Change nothing.
return color;}function doChangeHoverState(el,stateName,hoverStateEnum){if(el.onHoverStateChange&&(el.hoverState||0)!==hoverStateEnum){el.onHoverStateChange(stateName);}el.hoverState=hoverStateEnum;}function singleEnterEmphasis(el){// Only mark the flag.
// States will be applied in the echarts.ts in next frame.
doChangeHoverState(el,'emphasis',HOVER_STATE_EMPHASIS);}function singleLeaveEmphasis(el){// Only mark the flag.
// States will be applied in the echarts.ts in next frame.
if(el.hoverState===HOVER_STATE_EMPHASIS){doChangeHoverState(el,'normal',HOVER_STATE_NORMAL);}}function singleEnterBlur(el){doChangeHoverState(el,'blur',HOVER_STATE_BLUR);}function singleLeaveBlur(el){if(el.hoverState===HOVER_STATE_BLUR){doChangeHoverState(el,'normal',HOVER_STATE_NORMAL);}}function singleEnterSelect(el){el.selected=true;}function singleLeaveSelect(el){el.selected=false;}function updateElementState(el,updater,commonParam){updater(el,commonParam);}function traverseUpdateState(el,updater,commonParam){updateElementState(el,updater,commonParam);el.isGroup&&el.traverse(function(child){updateElementState(child,updater,commonParam);});}function setStatesFlag(el,stateName){switch(stateName){case'emphasis':el.hoverState=HOVER_STATE_EMPHASIS;break;case'normal':el.hoverState=HOVER_STATE_NORMAL;break;case'blur':el.hoverState=HOVER_STATE_BLUR;break;case'select':el.selected=true;}}/**
 * If we reuse elements when rerender.
 * DONT forget to clearStates before we update the style and shape.
 * Or we may update on the wrong state instead of normal state.
 */function clearStates(el){if(el.isGroup){el.traverse(function(child){child.clearStates();});}else{el.clearStates();}}function getFromStateStyle(el,props,toStateName,defaultValue){var style=el.style;var fromState={};for(var i=0;i<props.length;i++){var propName=props[i];var val=style[propName];fromState[propName]=val==null?defaultValue&&defaultValue[propName]:val;}for(var i=0;i<el.animators.length;i++){var animator=el.animators[i];if(animator.__fromStateTransition// Dont consider the animation to emphasis state.
&&animator.__fromStateTransition.indexOf(toStateName)<0&&animator.targetName==='style'){animator.saveTo(fromState,props);}}return fromState;}function createEmphasisDefaultState(el,stateName,targetStates,state){var hasSelect=targetStates&&(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .indexOf */ .cq)(targetStates,'select')>=0;var cloned=false;if(el instanceof zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP){var store=getSavedStates(el);var fromFill=hasSelect?store.selectFill||store.normalFill:store.normalFill;var fromStroke=hasSelect?store.selectStroke||store.normalStroke:store.normalStroke;if(hasFillOrStroke(fromFill)||hasFillOrStroke(fromStroke)){state=state||{};var emphasisStyle=state.style||{};// inherit case
if(emphasisStyle.fill==='inherit'){cloned=true;state=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},state);emphasisStyle=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},emphasisStyle);emphasisStyle.fill=fromFill;}// Apply default color lift
else if(!hasFillOrStroke(emphasisStyle.fill)&&hasFillOrStroke(fromFill)){cloned=true;// Not modify the original value.
state=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},state);emphasisStyle=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},emphasisStyle);// Already being applied 'emphasis'. DON'T lift color multiple times.
emphasisStyle.fill=liftColor(fromFill);}// Not highlight stroke if fill has been highlighted.
else if(!hasFillOrStroke(emphasisStyle.stroke)&&hasFillOrStroke(fromStroke)){if(!cloned){state=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},state);emphasisStyle=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},emphasisStyle);}emphasisStyle.stroke=liftColor(fromStroke);}state.style=emphasisStyle;}}if(state){// TODO Share with textContent?
if(state.z2==null){if(!cloned){state=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},state);}var z2EmphasisLift=el.z2EmphasisLift;state.z2=el.z2+(z2EmphasisLift!=null?z2EmphasisLift:Z2_EMPHASIS_LIFT);}}return state;}function createSelectDefaultState(el,stateName,state){// const hasSelect = indexOf(el.currentStates, stateName) >= 0;
if(state){// TODO Share with textContent?
if(state.z2==null){state=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},state);var z2SelectLift=el.z2SelectLift;state.z2=el.z2+(z2SelectLift!=null?z2SelectLift:Z2_SELECT_LIFT);}}return state;}function createBlurDefaultState(el,stateName,state){var hasBlur=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .indexOf */ .cq)(el.currentStates,stateName)>=0;var currentOpacity=el.style.opacity;var fromState=!hasBlur?getFromStateStyle(el,['opacity'],stateName,{opacity:1}):null;state=state||{};var blurStyle=state.style||{};if(blurStyle.opacity==null){// clone state
state=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({},state);blurStyle=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .extend */ .l7)({// Already being applied 'emphasis'. DON'T mul opacity multiple times.
opacity:hasBlur?currentOpacity:fromState.opacity*0.1},blurStyle);state.style=blurStyle;}return state;}function elementStateProxy(stateName,targetStates){var state=this.states[stateName];if(this.style){if(stateName==='emphasis'){return createEmphasisDefaultState(this,stateName,targetStates,state);}else if(stateName==='blur'){return createBlurDefaultState(this,stateName,state);}else if(stateName==='select'){return createSelectDefaultState(this,stateName,state);}}return state;}/**FI
 * Set hover style (namely "emphasis style") of element.
 * @param el Should not be `zrender/graphic/Group`.
 * @param focus 'self' | 'selfInSeries' | 'series'
 */function setDefaultStateProxy(el){el.stateProxy=elementStateProxy;var textContent=el.getTextContent();var textGuide=el.getTextGuideLine();if(textContent){textContent.stateProxy=elementStateProxy;}if(textGuide){textGuide.stateProxy=elementStateProxy;}}function enterEmphasisWhenMouseOver(el,e){!shouldSilent(el,e)// "emphasis" event highlight has higher priority than mouse highlight.
&&!el.__highByOuter&&traverseUpdateState(el,singleEnterEmphasis);}function leaveEmphasisWhenMouseOut(el,e){!shouldSilent(el,e)// "emphasis" event highlight has higher priority than mouse highlight.
&&!el.__highByOuter&&traverseUpdateState(el,singleLeaveEmphasis);}function enterEmphasis(el,highlightDigit){el.__highByOuter|=1<<(highlightDigit||0);traverseUpdateState(el,singleEnterEmphasis);}function leaveEmphasis(el,highlightDigit){!(el.__highByOuter&=~(1<<(highlightDigit||0)))&&traverseUpdateState(el,singleLeaveEmphasis);}function enterBlur(el){traverseUpdateState(el,singleEnterBlur);}function leaveBlur(el){traverseUpdateState(el,singleLeaveBlur);}function enterSelect(el){traverseUpdateState(el,singleEnterSelect);}function leaveSelect(el){traverseUpdateState(el,singleLeaveSelect);}function shouldSilent(el,e){return el.__highDownSilentOnTouch&&e.zrByTouch;}function allLeaveBlur(api){var model=api.getModel();var leaveBlurredSeries=[];var allComponentViews=[];model.eachComponent(function(componentType,componentModel){var componentStates=getComponentStates(componentModel);var isSeries=componentType==='series';var view=isSeries?api.getViewOfSeriesModel(componentModel):api.getViewOfComponentModel(componentModel);!isSeries&&allComponentViews.push(view);if(componentStates.isBlured){// Leave blur anyway
view.group.traverse(function(child){singleLeaveBlur(child);});isSeries&&leaveBlurredSeries.push(componentModel);}componentStates.isBlured=false;});(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(allComponentViews,function(view){if(view&&view.toggleBlurSeries){view.toggleBlurSeries(leaveBlurredSeries,false,model);}});}function blurSeries(targetSeriesIndex,focus,blurScope,api){var ecModel=api.getModel();blurScope=blurScope||'coordinateSystem';function leaveBlurOfIndices(data,dataIndices){for(var i=0;i<dataIndices.length;i++){var itemEl=data.getItemGraphicEl(dataIndices[i]);itemEl&&leaveBlur(itemEl);}}if(targetSeriesIndex==null){return;}if(!focus||focus==='none'){return;}var targetSeriesModel=ecModel.getSeriesByIndex(targetSeriesIndex);var targetCoordSys=targetSeriesModel.coordinateSystem;if(targetCoordSys&&targetCoordSys.master){targetCoordSys=targetCoordSys.master;}var blurredSeries=[];ecModel.eachSeries(function(seriesModel){var sameSeries=targetSeriesModel===seriesModel;var coordSys=seriesModel.coordinateSystem;if(coordSys&&coordSys.master){coordSys=coordSys.master;}var sameCoordSys=coordSys&&targetCoordSys?coordSys===targetCoordSys:sameSeries;// If there is no coordinate system. use sameSeries instead.
if(!(// Not blur other series if blurScope series
blurScope==='series'&&!sameSeries// Not blur other coordinate system if blurScope is coordinateSystem
||blurScope==='coordinateSystem'&&!sameCoordSys// Not blur self series if focus is series.
||focus==='series'&&sameSeries// TODO blurScope: coordinate system
)){var view=api.getViewOfSeriesModel(seriesModel);view.group.traverse(function(child){singleEnterBlur(child);});if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArrayLike */ .zG)(focus)){leaveBlurOfIndices(seriesModel.getData(),focus);}else if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isObject */ .Kn)(focus)){var dataTypes=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .keys */ .XP)(focus);for(var d=0;d<dataTypes.length;d++){leaveBlurOfIndices(seriesModel.getData(dataTypes[d]),focus[dataTypes[d]]);}}blurredSeries.push(seriesModel);getComponentStates(seriesModel).isBlured=true;}});ecModel.eachComponent(function(componentType,componentModel){if(componentType==='series'){return;}var view=api.getViewOfComponentModel(componentModel);if(view&&view.toggleBlurSeries){view.toggleBlurSeries(blurredSeries,true,ecModel);}});}function blurComponent(componentMainType,componentIndex,api){if(componentMainType==null||componentIndex==null){return;}var componentModel=api.getModel().getComponent(componentMainType,componentIndex);if(!componentModel){return;}getComponentStates(componentModel).isBlured=true;var view=api.getViewOfComponentModel(componentModel);if(!view||!view.focusBlurEnabled){return;}view.group.traverse(function(child){singleEnterBlur(child);});}function blurSeriesFromHighlightPayload(seriesModel,payload,api){var seriesIndex=seriesModel.seriesIndex;var data=seriesModel.getData(payload.dataType);if(!data){if(false){}return;}var dataIndex=(0,_model_js__WEBPACK_IMPORTED_MODULE_0__/* .queryDataIndex */ .gO)(data,payload);// Pick the first one if there is multiple/none exists.
dataIndex=((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArray */ .kJ)(dataIndex)?dataIndex[0]:dataIndex)||0;var el=data.getItemGraphicEl(dataIndex);if(!el){var count=data.count();var current=0;// If data on dataIndex is NaN.
while(!el&&current<count){el=data.getItemGraphicEl(current++);}}if(el){var ecData=(0,_innerStore_js__WEBPACK_IMPORTED_MODULE_5__/* .getECData */ .A)(el);blurSeries(seriesIndex,ecData.focus,ecData.blurScope,api);}else{// If there is no element put on the data. Try getting it from raw option
// TODO Should put it on seriesModel?
var focus_1=seriesModel.get(['emphasis','focus']);var blurScope=seriesModel.get(['emphasis','blurScope']);if(focus_1!=null){blurSeries(seriesIndex,focus_1,blurScope,api);}}}function findComponentHighDownDispatchers(componentMainType,componentIndex,name,api){var ret={focusSelf:false,dispatchers:null};if(componentMainType==null||componentMainType==='series'||componentIndex==null||name==null){return ret;}var componentModel=api.getModel().getComponent(componentMainType,componentIndex);if(!componentModel){return ret;}var view=api.getViewOfComponentModel(componentModel);if(!view||!view.findHighDownDispatchers){return ret;}var dispatchers=view.findHighDownDispatchers(name);// At presnet, the component (like Geo) only blur inside itself.
// So we do not use `blurScope` in component.
var focusSelf;for(var i=0;i<dispatchers.length;i++){if(false){}if((0,_innerStore_js__WEBPACK_IMPORTED_MODULE_5__/* .getECData */ .A)(dispatchers[i]).focus==='self'){focusSelf=true;break;}}return{focusSelf:focusSelf,dispatchers:dispatchers};}function handleGlobalMouseOverForHighDown(dispatcher,e,api){if(false){}var ecData=(0,_innerStore_js__WEBPACK_IMPORTED_MODULE_5__/* .getECData */ .A)(dispatcher);var _a=findComponentHighDownDispatchers(ecData.componentMainType,ecData.componentIndex,ecData.componentHighDownName,api),dispatchers=_a.dispatchers,focusSelf=_a.focusSelf;// If `findHighDownDispatchers` is supported on the component,
// highlight/downplay elements with the same name.
if(dispatchers){if(focusSelf){blurComponent(ecData.componentMainType,ecData.componentIndex,api);}(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(dispatchers,function(dispatcher){return enterEmphasisWhenMouseOver(dispatcher,e);});}else{// Try blur all in the related series. Then emphasis the hoverred.
// TODO. progressive mode.
blurSeries(ecData.seriesIndex,ecData.focus,ecData.blurScope,api);if(ecData.focus==='self'){blurComponent(ecData.componentMainType,ecData.componentIndex,api);}// Other than series, component that not support `findHighDownDispatcher` will
// also use it. But in this case, highlight/downplay are only supported in
// mouse hover but not in dispatchAction.
enterEmphasisWhenMouseOver(dispatcher,e);}}function handleGlobalMouseOutForHighDown(dispatcher,e,api){if(false){}allLeaveBlur(api);var ecData=(0,_innerStore_js__WEBPACK_IMPORTED_MODULE_5__/* .getECData */ .A)(dispatcher);var dispatchers=findComponentHighDownDispatchers(ecData.componentMainType,ecData.componentIndex,ecData.componentHighDownName,api).dispatchers;if(dispatchers){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(dispatchers,function(dispatcher){return leaveEmphasisWhenMouseOut(dispatcher,e);});}else{leaveEmphasisWhenMouseOut(dispatcher,e);}}function toggleSelectionFromPayload(seriesModel,payload,api){if(!isSelectChangePayload(payload)){return;}var dataType=payload.dataType;var data=seriesModel.getData(dataType);var dataIndex=(0,_model_js__WEBPACK_IMPORTED_MODULE_0__/* .queryDataIndex */ .gO)(data,payload);if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .isArray */ .kJ)(dataIndex)){dataIndex=[dataIndex];}seriesModel[payload.type===TOGGLE_SELECT_ACTION_TYPE?'toggleSelect':payload.type===SELECT_ACTION_TYPE?'select':'unselect'](dataIndex,dataType);}function updateSeriesElementSelection(seriesModel){var allData=seriesModel.getAllData();(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(allData,function(_a){var data=_a.data,type=_a.type;data.eachItemGraphicEl(function(el,idx){seriesModel.isSelected(idx,type)?enterSelect(el):leaveSelect(el);});});}function getAllSelectedIndices(ecModel){var ret=[];ecModel.eachSeries(function(seriesModel){var allData=seriesModel.getAllData();(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__/* .each */ .S6)(allData,function(_a){var data=_a.data,type=_a.type;var dataIndices=seriesModel.getSelectedDataIndices();if(dataIndices.length>0){var item={dataIndex:dataIndices,seriesIndex:seriesModel.seriesIndex};if(type!=null){item.dataType=type;}ret.push(item);}});});return ret;}/**
 * Enable the function that mouseover will trigger the emphasis state.
 *
 * NOTE:
 * This function should be used on the element with dataIndex, seriesIndex.
 *
 */function enableHoverEmphasis(el,focus,blurScope){setAsHighDownDispatcher(el,true);traverseUpdateState(el,setDefaultStateProxy);enableHoverFocus(el,focus,blurScope);}function disableHoverEmphasis(el){setAsHighDownDispatcher(el,false);}function toggleHoverEmphasis(el,focus,blurScope,isDisabled){isDisabled?disableHoverEmphasis(el):enableHoverEmphasis(el,focus,blurScope);}function enableHoverFocus(el,focus,blurScope){var ecData=(0,_innerStore_js__WEBPACK_IMPORTED_MODULE_5__/* .getECData */ .A)(el);if(focus!=null){// TODO dataIndex may be set after this function. This check is not useful.
// if (ecData.dataIndex == null) {
//     if (__DEV__) {
//         console.warn('focus can only been set on element with dataIndex');
//     }
// }
// else {
ecData.focus=focus;ecData.blurScope=blurScope;// }
}else if(ecData.focus){ecData.focus=null;}}var OTHER_STATES=['emphasis','blur','select'];var defaultStyleGetterMap={itemStyle:'getItemStyle',lineStyle:'getLineStyle',areaStyle:'getAreaStyle'};/**
 * Set emphasis/blur/selected states of element.
 */function setStatesStylesFromModel(el,itemModel,styleType,// default itemStyle
getter){styleType=styleType||'itemStyle';for(var i=0;i<OTHER_STATES.length;i++){var stateName=OTHER_STATES[i];var model=itemModel.getModel([stateName,styleType]);var state=el.ensureState(stateName);// Let it throw error if getterType is not found.
state.style=getter?getter(model):model[defaultStyleGetterMap[styleType]]();}}/**
 *
 * Set element as highlight / downplay dispatcher.
 * It will be checked when element recieved mouseover event or from highlight action.
 * It's in change of all highlight/downplay behavior of it's children.
 *
 * @param el
 * @param el.highDownSilentOnTouch
 *        In touch device, mouseover event will be trigger on touchstart event
 *        (see module:zrender/dom/HandlerProxy). By this mechanism, we can
 *        conveniently use hoverStyle when tap on touch screen without additional
 *        code for compatibility.
 *        But if the chart/component has select feature, which usually also use
 *        hoverStyle, there might be conflict between 'select-highlight' and
 *        'hover-highlight' especially when roam is enabled (see geo for example).
 *        In this case, `highDownSilentOnTouch` should be used to disable
 *        hover-highlight on touch device.
 * @param asDispatcher If `false`, do not set as "highDownDispatcher".
 */function setAsHighDownDispatcher(el,asDispatcher){var disable=asDispatcher===false;var extendedEl=el;// Make `highDownSilentOnTouch` and `onStateChange` only work after
// `setAsHighDownDispatcher` called. Avoid it is modified by user unexpectedly.
if(el.highDownSilentOnTouch){extendedEl.__highDownSilentOnTouch=el.highDownSilentOnTouch;}// Simple optimize, since this method might be
// called for each elements of a group in some cases.
if(!disable||extendedEl.__highDownDispatcher){// Emphasis, normal can be triggered manually by API or other components like hover link.
// el[method]('emphasis', onElementEmphasisEvent)[method]('normal', onElementNormalEvent);
// Also keep previous record.
extendedEl.__highByOuter=extendedEl.__highByOuter||0;extendedEl.__highDownDispatcher=!disable;}}function isHighDownDispatcher(el){return!!(el&&el.__highDownDispatcher);}/**
 * Enable component highlight/downplay features:
 * + hover link (within the same name)
 * + focus blur in component
 */function enableComponentHighDownFeatures(el,componentModel,componentHighDownName){var ecData=(0,_innerStore_js__WEBPACK_IMPORTED_MODULE_5__/* .getECData */ .A)(el);ecData.componentMainType=componentModel.mainType;ecData.componentIndex=componentModel.componentIndex;ecData.componentHighDownName=componentHighDownName;}/**
 * Support hightlight/downplay record on each elements.
 * For the case: hover highlight/downplay (legend, visualMap, ...) and
 * user triggerred hightlight/downplay should not conflict.
 * Only all of the highlightDigit cleared, return to normal.
 * @param {string} highlightKey
 * @return {number} highlightDigit
 */function getHighlightDigit(highlightKey){var highlightDigit=_highlightKeyMap[highlightKey];if(highlightDigit==null&&_highlightNextDigit<=32){highlightDigit=_highlightKeyMap[highlightKey]=_highlightNextDigit++;}return highlightDigit;}function isSelectChangePayload(payload){var payloadType=payload.type;return payloadType===SELECT_ACTION_TYPE||payloadType===UNSELECT_ACTION_TYPE||payloadType===TOGGLE_SELECT_ACTION_TYPE;}function isHighDownPayload(payload){var payloadType=payload.type;return payloadType===HIGHLIGHT_ACTION_TYPE||payloadType===DOWNPLAY_ACTION_TYPE;}function savePathStates(el){var store=getSavedStates(el);store.normalFill=el.style.fill;store.normalStroke=el.style.stroke;var selectState=el.states.select||{};store.selectFill=selectState.style&&selectState.style.fill||null;store.selectStroke=selectState.style&&selectState.style.stroke||null;}

/***/ }),

/***/ 33518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cq": () => (/* binding */ normalizeSymbolOffset),
/* harmony export */   "th": () => (/* binding */ createSymbol),
/* harmony export */   "zp": () => (/* binding */ normalizeSymbolSize)
/* harmony export */ });
/* unused harmony export symbolBuildProxies */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57697);
/* harmony import */ var _graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73727);
/* harmony import */ var _graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29526);
/* harmony import */ var _graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19568);
/* harmony import */ var _graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35739);
/* harmony import */ var _graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45482);
/* harmony import */ var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54865);
/* harmony import */ var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20194);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84646);
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
*/ // Symbol factory
/**
 * Triangle shape
 * @inner
 */var Triangle=_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].extend */ .ZP.extend({type:'triangle',shape:{cx:0,cy:0,width:0,height:0},buildPath:function buildPath(path,shape){var cx=shape.cx;var cy=shape.cy;var width=shape.width/2;var height=shape.height/2;path.moveTo(cx,cy-height);path.lineTo(cx+width,cy+height);path.lineTo(cx-width,cy+height);path.closePath();}});/**
 * Diamond shape
 * @inner
 */var Diamond=_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].extend */ .ZP.extend({type:'diamond',shape:{cx:0,cy:0,width:0,height:0},buildPath:function buildPath(path,shape){var cx=shape.cx;var cy=shape.cy;var width=shape.width/2;var height=shape.height/2;path.moveTo(cx,cy-height);path.lineTo(cx+width,cy);path.lineTo(cx,cy+height);path.lineTo(cx-width,cy);path.closePath();}});/**
 * Pin shape
 * @inner
 */var Pin=_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].extend */ .ZP.extend({type:'pin',shape:{// x, y on the cusp
x:0,y:0,width:0,height:0},buildPath:function buildPath(path,shape){var x=shape.x;var y=shape.y;var w=shape.width/5*3;// Height must be larger than width
var h=Math.max(w,shape.height);var r=w/2;// Dist on y with tangent point and circle center
var dy=r*r/(h-r);var cy=y-h+r+dy;var angle=Math.asin(dy/r);// Dist on x with tangent point and circle center
var dx=Math.cos(angle)*r;var tanX=Math.sin(angle);var tanY=Math.cos(angle);var cpLen=r*0.6;var cpLen2=r*0.7;path.moveTo(x-dx,cy+dy);path.arc(x,cy,r,Math.PI-angle,Math.PI*2+angle);path.bezierCurveTo(x+dx-tanX*cpLen,cy+dy+tanY*cpLen,x,y-cpLen2,x,y);path.bezierCurveTo(x,y-cpLen2,x-dx+tanX*cpLen,cy+dy+tanY*cpLen,x-dx,cy+dy);path.closePath();}});/**
 * Arrow shape
 * @inner
 */var Arrow=_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].extend */ .ZP.extend({type:'arrow',shape:{x:0,y:0,width:0,height:0},buildPath:function buildPath(ctx,shape){var height=shape.height;var width=shape.width;var x=shape.x;var y=shape.y;var dx=width/3*2;ctx.moveTo(x,y);ctx.lineTo(x+dx,y+height);ctx.lineTo(x,y+height/4*3);ctx.lineTo(x-dx,y+height);ctx.lineTo(x,y);ctx.closePath();}});/**
 * Map of path contructors
 */ // TODO Use function to build symbol path.
var symbolCtors={line:_graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,rect:_graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,roundRect:_graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,square:_graphic_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,circle:_graphic_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,diamond:Diamond,pin:Pin,arrow:Arrow,triangle:Triangle};var symbolShapeMakers={line:function line(x,y,w,h,shape){shape.x1=x;shape.y1=y+h/2;shape.x2=x+w;shape.y2=y+h/2;},rect:function rect(x,y,w,h,shape){shape.x=x;shape.y=y;shape.width=w;shape.height=h;},roundRect:function roundRect(x,y,w,h,shape){shape.x=x;shape.y=y;shape.width=w;shape.height=h;shape.r=Math.min(w,h)/4;},square:function square(x,y,w,h,shape){var size=Math.min(w,h);shape.x=x;shape.y=y;shape.width=size;shape.height=size;},circle:function circle(x,y,w,h,shape){// Put circle in the center of square
shape.cx=x+w/2;shape.cy=y+h/2;shape.r=Math.min(w,h)/2;},diamond:function diamond(x,y,w,h,shape){shape.cx=x+w/2;shape.cy=y+h/2;shape.width=w;shape.height=h;},pin:function pin(x,y,w,h,shape){shape.x=x+w/2;shape.y=y+h/2;shape.width=w;shape.height=h;},arrow:function arrow(x,y,w,h,shape){shape.x=x+w/2;shape.y=y+h/2;shape.width=w;shape.height=h;},triangle:function triangle(x,y,w,h,shape){shape.cx=x+w/2;shape.cy=y+h/2;shape.width=w;shape.height=h;}};var symbolBuildProxies={};(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .each */ .S6)(symbolCtors,function(Ctor,name){symbolBuildProxies[name]=new Ctor();});var SymbolClz=_graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].extend */ .ZP.extend({type:'symbol',shape:{symbolType:'',x:0,y:0,width:0,height:0},calculateTextPosition:function calculateTextPosition(out,config,rect){var res=(0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_5__/* .calculateTextPosition */ .wI)(out,config,rect);var shape=this.shape;if(shape&&shape.symbolType==='pin'&&config.position==='inside'){res.y=rect.y+rect.height*0.4;}return res;},buildPath:function buildPath(ctx,shape,inBundle){var symbolType=shape.symbolType;if(symbolType!=='none'){var proxySymbol=symbolBuildProxies[symbolType];if(!proxySymbol){// Default rect
symbolType='rect';proxySymbol=symbolBuildProxies[symbolType];}symbolShapeMakers[symbolType](shape.x,shape.y,shape.width,shape.height,proxySymbol.shape);proxySymbol.buildPath(ctx,proxySymbol.shape,inBundle);}}});// Provide setColor helper method to avoid determine if set the fill or stroke outside
function symbolPathSetColor(color,innerColor){if(this.type!=='image'){var symbolStyle=this.style;if(this.__isEmptyBrush){symbolStyle.stroke=color;symbolStyle.fill=innerColor||'#fff';// TODO Same width with lineStyle in LineView
symbolStyle.lineWidth=2;}else if(this.shape.symbolType==='line'){symbolStyle.stroke=color;}else{symbolStyle.fill=color;}this.markRedraw();}}/**
 * Create a symbol element with given symbol configuration: shape, x, y, width, height, color
 */function createSymbol(symbolType,x,y,w,h,color,// whether to keep the ratio of w/h,
keepAspect){// TODO Support image object, DynamicImage.
var isEmpty=symbolType.indexOf('empty')===0;if(isEmpty){symbolType=symbolType.substr(5,1).toLowerCase()+symbolType.substr(6);}var symbolPath;if(symbolType.indexOf('image://')===0){symbolPath=_graphic_js__WEBPACK_IMPORTED_MODULE_6__.makeImage(symbolType.slice(8),new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(x,y,w,h),keepAspect?'center':'cover');}else if(symbolType.indexOf('path://')===0){symbolPath=_graphic_js__WEBPACK_IMPORTED_MODULE_6__.makePath(symbolType.slice(7),{},new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z(x,y,w,h),keepAspect?'center':'cover');}else{symbolPath=new SymbolClz({shape:{symbolType:symbolType,x:x,y:y,width:w,height:h}});}symbolPath.__isEmptyBrush=isEmpty;// TODO Should deprecate setColor
symbolPath.setColor=symbolPathSetColor;if(color){symbolPath.setColor(color);}return symbolPath;}function normalizeSymbolSize(symbolSize){if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .isArray */ .kJ)(symbolSize)){symbolSize=[+symbolSize,+symbolSize];}return[symbolSize[0]||0,symbolSize[1]||0];}function normalizeSymbolOffset(symbolOffset,symbolSize){if(symbolOffset==null){return;}if(!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .isArray */ .kJ)(symbolOffset)){symbolOffset=[symbolOffset,symbolOffset];}return[(0,_number_js__WEBPACK_IMPORTED_MODULE_8__/* .parsePercent */ .GM)(symbolOffset[0],symbolSize[0])||0,(0,_number_js__WEBPACK_IMPORTED_MODULE_8__/* .parsePercent */ .GM)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .retrieve2 */ .pD)(symbolOffset[1],symbolOffset[0]),symbolSize[1])||0];}

/***/ }),

/***/ 57024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P2": () => (/* binding */ throttle),
/* harmony export */   "T9": () => (/* binding */ createOrUpdate),
/* harmony export */   "ZH": () => (/* binding */ clear)
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
*/var ORIGIN_METHOD='\0__throttleOriginMethod';var RATE='\0__throttleRate';var THROTTLE_TYPE='\0__throttleType';;/**
 * @public
 * @param {(Function)} fn
 * @param {number} [delay=0] Unit: ms.
 * @param {boolean} [debounce=false]
 *        true: If call interval less than `delay`, only the last call works.
 *        false: If call interval less than `delay, call works on fixed rate.
 * @return {(Function)} throttled fn.
 */function throttle(fn,delay,debounce){var currCall;var lastCall=0;var lastExec=0;var timer=null;var diff;var scope;var args;var debounceNextCall;delay=delay||0;function exec(){lastExec=new Date().getTime();timer=null;fn.apply(scope,args||[]);}var cb=function cb(){var cbArgs=[];for(var _i=0;_i<arguments.length;_i++){cbArgs[_i]=arguments[_i];}currCall=new Date().getTime();scope=this;args=cbArgs;var thisDelay=debounceNextCall||delay;var thisDebounce=debounceNextCall||debounce;debounceNextCall=null;diff=currCall-(thisDebounce?lastCall:lastExec)-thisDelay;clearTimeout(timer);// Here we should make sure that: the `exec` SHOULD NOT be called later
// than a new call of `cb`, that is, preserving the command order. Consider
// calculating "scale rate" when roaming as an example. When a call of `cb`
// happens, either the `exec` is called dierectly, or the call is delayed.
// But the delayed call should never be later than next call of `cb`. Under
// this assurance, we can simply update view state each time `dispatchAction`
// triggered by user roaming, but not need to add extra code to avoid the
// state being "rolled-back".
if(thisDebounce){timer=setTimeout(exec,thisDelay);}else{if(diff>=0){exec();}else{timer=setTimeout(exec,-diff);}}lastCall=currCall;};/**
   * Clear throttle.
   * @public
   */cb.clear=function(){if(timer){clearTimeout(timer);timer=null;}};/**
   * Enable debounce once.
   */cb.debounceNextCall=function(debounceDelay){debounceNextCall=debounceDelay;};return cb;}/**
 * Create throttle method or update throttle rate.
 *
 * @example
 * ComponentView.prototype.render = function () {
 *     ...
 *     throttle.createOrUpdate(
 *         this,
 *         '_dispatchAction',
 *         this.model.get('throttle'),
 *         'fixRate'
 *     );
 * };
 * ComponentView.prototype.remove = function () {
 *     throttle.clear(this, '_dispatchAction');
 * };
 * ComponentView.prototype.dispose = function () {
 *     throttle.clear(this, '_dispatchAction');
 * };
 *
 */function createOrUpdate(obj,fnAttr,rate,throttleType){var fn=obj[fnAttr];if(!fn){return;}var originFn=fn[ORIGIN_METHOD]||fn;var lastThrottleType=fn[THROTTLE_TYPE];var lastRate=fn[RATE];if(lastRate!==rate||lastThrottleType!==throttleType){if(rate==null||!throttleType){return obj[fnAttr]=originFn;}fn=obj[fnAttr]=throttle(originFn,rate,throttleType==='debounce');fn[ORIGIN_METHOD]=originFn;fn[THROTTLE_TYPE]=throttleType;fn[RATE]=rate;}return fn;}/**
 * Clear throttle. Example see throttle.createOrUpdate.
 */function clear(obj,fnAttr){var fn=obj[fnAttr];if(fn&&fn[ORIGIN_METHOD]){// Clear throttle
fn.clear&&fn.clear();obj[fnAttr]=fn[ORIGIN_METHOD];}}

/***/ }),

/***/ 74134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$K": () => (/* binding */ isPrimaryTimeUnit),
/* harmony export */   "CW": () => (/* binding */ monthGetterName),
/* harmony export */   "En": () => (/* binding */ hoursSetterName),
/* harmony export */   "FW": () => (/* binding */ timeUnits),
/* harmony export */   "MV": () => (/* binding */ secondsGetterName),
/* harmony export */   "P5": () => (/* binding */ ONE_YEAR),
/* harmony export */   "RZ": () => (/* binding */ millisecondsGetterName),
/* harmony export */   "Tj": () => (/* binding */ getPrimaryTimeUnit),
/* harmony export */   "V8": () => (/* binding */ fullLeveledFormatter),
/* harmony export */   "WT": () => (/* binding */ ONE_SECOND),
/* harmony export */   "WU": () => (/* binding */ format),
/* harmony export */   "Wp": () => (/* binding */ hoursGetterName),
/* harmony export */   "cb": () => (/* binding */ millisecondsSetterName),
/* harmony export */   "dV": () => (/* binding */ ONE_HOUR),
/* harmony export */   "eN": () => (/* binding */ minutesSetterName),
/* harmony export */   "f5": () => (/* binding */ dateSetterName),
/* harmony export */   "fn": () => (/* binding */ minutesGetterName),
/* harmony export */   "k7": () => (/* binding */ leveledFormat),
/* harmony export */   "q5": () => (/* binding */ getUnitValue),
/* harmony export */   "rM": () => (/* binding */ secondsSetterName),
/* harmony export */   "s2": () => (/* binding */ ONE_DAY),
/* harmony export */   "sx": () => (/* binding */ fullYearGetterName),
/* harmony export */   "vh": () => (/* binding */ monthSetterName),
/* harmony export */   "xC": () => (/* binding */ getDefaultFormatPrecisionOfInterval),
/* harmony export */   "xL": () => (/* binding */ fullYearSetterName),
/* harmony export */   "xz": () => (/* binding */ dateGetterName),
/* harmony export */   "yR": () => (/* binding */ ONE_MINUTE)
/* harmony export */ });
/* unused harmony exports defaultLeveledFormatter, primaryTimeUnits, pad, getUnitFromValue */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57697);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84646);
/* harmony import */ var _core_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68593);
/* harmony import */ var _model_Model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25118);
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
*/var ONE_SECOND=1000;var ONE_MINUTE=ONE_SECOND*60;var ONE_HOUR=ONE_MINUTE*60;var ONE_DAY=ONE_HOUR*24;var ONE_YEAR=ONE_DAY*365;var defaultLeveledFormatter={year:'{yyyy}',month:'{MMM}',day:'{d}',hour:'{HH}:{mm}',minute:'{HH}:{mm}',second:'{HH}:{mm}:{ss}',millisecond:'{HH}:{mm}:{ss} {SSS}',none:'{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}'};var fullDayFormatter='{yyyy}-{MM}-{dd}';var fullLeveledFormatter={year:'{yyyy}',month:'{yyyy}-{MM}',day:fullDayFormatter,hour:fullDayFormatter+' '+defaultLeveledFormatter.hour,minute:fullDayFormatter+' '+defaultLeveledFormatter.minute,second:fullDayFormatter+' '+defaultLeveledFormatter.second,millisecond:defaultLeveledFormatter.none};var primaryTimeUnits=['year','month','day','hour','minute','second','millisecond'];var timeUnits=['year','half-year','quarter','month','week','half-week','day','half-day','quarter-day','hour','minute','second','millisecond'];function pad(str,len){str+='';return'0000'.substr(0,len-str.length)+str;}function getPrimaryTimeUnit(timeUnit){switch(timeUnit){case'half-year':case'quarter':return'month';case'week':case'half-week':return'day';case'half-day':case'quarter-day':return'hour';default:// year, minutes, second, milliseconds
return timeUnit;}}function isPrimaryTimeUnit(timeUnit){return timeUnit===getPrimaryTimeUnit(timeUnit);}function getDefaultFormatPrecisionOfInterval(timeUnit){switch(timeUnit){case'year':case'month':return'day';case'millisecond':return'millisecond';default:// Also for day, hour, minute, second
return'second';}}function format(// Note: The result based on `isUTC` are totally different, which can not be just simply
// substituted by the result without `isUTC`. So we make the param `isUTC` mandatory.
time,template,isUTC,lang){var date=_number_js__WEBPACK_IMPORTED_MODULE_0__/* .parseDate */ .sG(time);var y=date[fullYearGetterName(isUTC)]();var M=date[monthGetterName(isUTC)]()+1;var q=Math.floor((M-1)/3)+1;var d=date[dateGetterName(isUTC)]();var e=date['get'+(isUTC?'UTC':'')+'Day']();var H=date[hoursGetterName(isUTC)]();var h=(H-1)%12+1;var m=date[minutesGetterName(isUTC)]();var s=date[secondsGetterName(isUTC)]();var S=date[millisecondsGetterName(isUTC)]();var localeModel=lang instanceof _model_Model_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z?lang:(0,_core_locale_js__WEBPACK_IMPORTED_MODULE_2__/* .getLocaleModel */ .G8)(lang||_core_locale_js__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_LANG */ .sO)||(0,_core_locale_js__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultLocaleModel */ .Li)();var timeModel=localeModel.getModel('time');var month=timeModel.get('month');var monthAbbr=timeModel.get('monthAbbr');var dayOfWeek=timeModel.get('dayOfWeek');var dayOfWeekAbbr=timeModel.get('dayOfWeekAbbr');return(template||'').replace(/{yyyy}/g,y+'').replace(/{yy}/g,y%100+'').replace(/{Q}/g,q+'').replace(/{MMMM}/g,month[M-1]).replace(/{MMM}/g,monthAbbr[M-1]).replace(/{MM}/g,pad(M,2)).replace(/{M}/g,M+'').replace(/{dd}/g,pad(d,2)).replace(/{d}/g,d+'').replace(/{eeee}/g,dayOfWeek[e]).replace(/{ee}/g,dayOfWeekAbbr[e]).replace(/{e}/g,e+'').replace(/{HH}/g,pad(H,2)).replace(/{H}/g,H+'').replace(/{hh}/g,pad(h+'',2)).replace(/{h}/g,h+'').replace(/{mm}/g,pad(m,2)).replace(/{m}/g,m+'').replace(/{ss}/g,pad(s,2)).replace(/{s}/g,s+'').replace(/{SSS}/g,pad(S,3)).replace(/{S}/g,S+'');}function leveledFormat(tick,idx,formatter,lang,isUTC){var template=null;if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .isString */ .HD(formatter)){// Single formatter for all units at all levels
template=formatter;}else if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .mf(formatter)){// Callback formatter
template=formatter(tick.value,idx,{level:tick.level});}else{var defaults=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .extend */ .l7({},defaultLeveledFormatter);if(tick.level>0){for(var i=0;i<primaryTimeUnits.length;++i){defaults[primaryTimeUnits[i]]="{primary|"+defaults[primaryTimeUnits[i]]+"}";}}var mergedFormatter=formatter?formatter.inherit===false?formatter// Use formatter with bigger units
:zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .defaults */ .ce(formatter,defaults):defaults;var unit=getUnitFromValue(tick.value,isUTC);if(mergedFormatter[unit]){template=mergedFormatter[unit];}else if(mergedFormatter.inherit){// Unit formatter is not defined and should inherit from bigger units
var targetId=timeUnits.indexOf(unit);for(var i=targetId-1;i>=0;--i){if(mergedFormatter[unit]){template=mergedFormatter[unit];break;}}template=template||defaults.none;}if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .isArray */ .kJ(template)){var levelId=tick.level==null?0:tick.level>=0?tick.level:template.length+tick.level;levelId=Math.min(levelId,template.length-1);template=template[levelId];}}return format(new Date(tick.value),template,isUTC,lang);}function getUnitFromValue(value,isUTC){var date=_number_js__WEBPACK_IMPORTED_MODULE_0__/* .parseDate */ .sG(value);var M=date[monthGetterName(isUTC)]()+1;var d=date[dateGetterName(isUTC)]();var h=date[hoursGetterName(isUTC)]();var m=date[minutesGetterName(isUTC)]();var s=date[secondsGetterName(isUTC)]();var S=date[millisecondsGetterName(isUTC)]();var isSecond=S===0;var isMinute=isSecond&&s===0;var isHour=isMinute&&m===0;var isDay=isHour&&h===0;var isMonth=isDay&&d===1;var isYear=isMonth&&M===1;if(isYear){return'year';}else if(isMonth){return'month';}else if(isDay){return'day';}else if(isHour){return'hour';}else if(isMinute){return'minute';}else if(isSecond){return'second';}else{return'millisecond';}}function getUnitValue(value,unit,isUTC){var date=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__/* .isNumber */ .hj(value)?_number_js__WEBPACK_IMPORTED_MODULE_0__/* .parseDate */ .sG(value):value;unit=unit||getUnitFromValue(value,isUTC);switch(unit){case'year':return date[fullYearGetterName(isUTC)]();case'half-year':return date[monthGetterName(isUTC)]()>=6?1:0;case'quarter':return Math.floor((date[monthGetterName(isUTC)]()+1)/4);case'month':return date[monthGetterName(isUTC)]();case'day':return date[dateGetterName(isUTC)]();case'half-day':return date[hoursGetterName(isUTC)]()/24;case'hour':return date[hoursGetterName(isUTC)]();case'minute':return date[minutesGetterName(isUTC)]();case'second':return date[secondsGetterName(isUTC)]();case'millisecond':return date[millisecondsGetterName(isUTC)]();}}function fullYearGetterName(isUTC){return isUTC?'getUTCFullYear':'getFullYear';}function monthGetterName(isUTC){return isUTC?'getUTCMonth':'getMonth';}function dateGetterName(isUTC){return isUTC?'getUTCDate':'getDate';}function hoursGetterName(isUTC){return isUTC?'getUTCHours':'getHours';}function minutesGetterName(isUTC){return isUTC?'getUTCMinutes':'getMinutes';}function secondsGetterName(isUTC){return isUTC?'getUTCSeconds':'getSeconds';}function millisecondsGetterName(isUTC){return isUTC?'getUTCMilliseconds':'getMilliseconds';}function fullYearSetterName(isUTC){return isUTC?'setUTCFullYear':'setFullYear';}function monthSetterName(isUTC){return isUTC?'setUTCMonth':'setMonth';}function dateSetterName(isUTC){return isUTC?'setUTCDate':'setDate';}function hoursSetterName(isUTC){return isUTC?'setUTCHours':'setHours';}function minutesSetterName(isUTC){return isUTC?'setUTCMinutes':'setMinutes';}function secondsSetterName(isUTC){return isUTC?'setUTCSeconds':'setSeconds';}function millisecondsSetterName(isUTC){return isUTC?'setUTCMilliseconds':'setMilliseconds';}

/***/ }),

/***/ 74298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J5": () => (/* binding */ SOURCE_FORMAT_TYPED_ARRAY),
/* harmony export */   "RA": () => (/* binding */ SOURCE_FORMAT_UNKNOWN),
/* harmony export */   "Wc": () => (/* binding */ SERIES_LAYOUT_BY_ROW),
/* harmony export */   "XD": () => (/* binding */ SOURCE_FORMAT_ARRAY_ROWS),
/* harmony export */   "cy": () => (/* binding */ SOURCE_FORMAT_ORIGINAL),
/* harmony export */   "f7": () => (/* binding */ VISUAL_DIMENSIONS),
/* harmony export */   "fY": () => (/* binding */ SERIES_LAYOUT_BY_COLUMN),
/* harmony export */   "hL": () => (/* binding */ SOURCE_FORMAT_KEYED_COLUMNS),
/* harmony export */   "qb": () => (/* binding */ SOURCE_FORMAT_OBJECT_ROWS)
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
*/;;;var VISUAL_DIMENSIONS=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .createHashMap */ .kW)(['tooltip','label','itemName','itemId','itemGroupId','seriesName']);var SOURCE_FORMAT_ORIGINAL='original';var SOURCE_FORMAT_ARRAY_ROWS='arrayRows';var SOURCE_FORMAT_OBJECT_ROWS='objectRows';var SOURCE_FORMAT_KEYED_COLUMNS='keyedColumns';var SOURCE_FORMAT_TYPED_ARRAY='typedArray';var SOURCE_FORMAT_UNKNOWN='unknown';var SERIES_LAYOUT_BY_COLUMN='column';var SERIES_LAYOUT_BY_ROW='row';;;;;

/***/ }),

/***/ 17044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ createFloat32Array)
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
*//* global Float32Array */var supportFloat32Array=typeof Float32Array!=='undefined';var Float32ArrayCtor=!supportFloat32Array?Array:Float32Array;function createFloat32Array(arg){if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(arg)){// Return self directly if don't support TypedArray.
return supportFloat32Array?new Float32Array(arg):arg;}// Else is number
return new Float32ArrayCtor(arg);}

/***/ }),

/***/ 99949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57697);
/* harmony import */ var zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22060);
/* harmony import */ var _util_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36189);
/* harmony import */ var _util_clazz_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18496);
/* harmony import */ var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23958);
/* harmony import */ var _util_states_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36073);
/* harmony import */ var _core_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79736);
/* harmony import */ var _chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75187);
/* harmony import */ var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45482);
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
*/var inner=_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf();var renderPlanner=(0,_chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();var ChartView=/** @class */function(){function ChartView(){this.group=new zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z();this.uid=_util_component_js__WEBPACK_IMPORTED_MODULE_3__/* .getUID */ .Kr('viewChart');this.renderTask=(0,_core_task_js__WEBPACK_IMPORTED_MODULE_4__/* .createTask */ .v)({plan:renderTaskPlan,reset:renderTaskReset});this.renderTask.context={view:this};}ChartView.prototype.init=function(ecModel,api){};ChartView.prototype.render=function(seriesModel,ecModel,api,payload){if(false){}};/**
   * Highlight series or specified data item.
   */ChartView.prototype.highlight=function(seriesModel,ecModel,api,payload){var data=seriesModel.getData(payload&&payload.dataType);if(!data){if(false){}return;}toggleHighlight(data,payload,'emphasis');};/**
   * Downplay series or specified data item.
   */ChartView.prototype.downplay=function(seriesModel,ecModel,api,payload){var data=seriesModel.getData(payload&&payload.dataType);if(!data){if(false){}return;}toggleHighlight(data,payload,'normal');};/**
   * Remove self.
   */ChartView.prototype.remove=function(ecModel,api){this.group.removeAll();};/**
   * Dispose self.
   */ChartView.prototype.dispose=function(ecModel,api){};ChartView.prototype.updateView=function(seriesModel,ecModel,api,payload){this.render(seriesModel,ecModel,api,payload);};// FIXME never used?
ChartView.prototype.updateLayout=function(seriesModel,ecModel,api,payload){this.render(seriesModel,ecModel,api,payload);};// FIXME never used?
ChartView.prototype.updateVisual=function(seriesModel,ecModel,api,payload){this.render(seriesModel,ecModel,api,payload);};/**
   * Traverse the new rendered elements.
   *
   * It will traverse the new added element in progressive rendering.
   * And traverse all in normal rendering.
   */ChartView.prototype.eachRendered=function(cb){(0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.traverseElements)(this.group,cb);};ChartView.markUpdateMethod=function(payload,methodName){inner(payload).updateMethod=methodName;};ChartView.protoInitialize=function(){var proto=ChartView.prototype;proto.type='chart';}();return ChartView;}();;/**
 * Set state of single element
 */function elSetState(el,state,highlightDigit){if(el&&(0,_util_states_js__WEBPACK_IMPORTED_MODULE_6__/* .isHighDownDispatcher */ .Av)(el)){(state==='emphasis'?_util_states_js__WEBPACK_IMPORTED_MODULE_6__/* .enterEmphasis */ .fD:_util_states_js__WEBPACK_IMPORTED_MODULE_6__/* .leaveEmphasis */ .Mh)(el,highlightDigit);}}function toggleHighlight(data,payload,state){var dataIndex=_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .queryDataIndex */ .gO(data,payload);var highlightDigit=payload&&payload.highlightKey!=null?(0,_util_states_js__WEBPACK_IMPORTED_MODULE_6__/* .getHighlightDigit */ .RW)(payload.highlightKey):null;if(dataIndex!=null){(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__/* .each */ .S6)(_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .normalizeToArray */ .kF(dataIndex),function(dataIdx){elSetState(data.getItemGraphicEl(dataIdx),state,highlightDigit);});}else{data.eachItemGraphicEl(function(el){elSetState(el,state,highlightDigit);});}}_util_clazz_js__WEBPACK_IMPORTED_MODULE_8__/* .enableClassExtend */ .dm(ChartView,['dispose']);_util_clazz_js__WEBPACK_IMPORTED_MODULE_8__/* .enableClassManagement */ .au(ChartView);function renderTaskPlan(context){return renderPlanner(context.model);}function renderTaskReset(context){var seriesModel=context.model;var ecModel=context.ecModel;var api=context.api;var payload=context.payload;// FIXME: remove updateView updateVisual
var progressiveRender=seriesModel.pipelineContext.progressiveRender;var view=context.view;var updateMethod=payload&&inner(payload).updateMethod;var methodName=progressiveRender?'incrementalPrepareRender':updateMethod&&view[updateMethod]?updateMethod// `appendData` is also supported when data amount
// is less than progressive threshold.
:'render';if(methodName!=='render'){view[methodName](seriesModel,ecModel,api,payload);}return progressMethodMap[methodName];}var progressMethodMap={incrementalPrepareRender:{progress:function progress(params,context){context.view.incrementalRender(params,context.model,context.ecModel,context.api,context.payload);}},render:{// Put view.render in `progress` to support appendData. But in this case
// view.render should not be called in reset, otherwise it will be called
// twise. Use `forceFirstProgress` to make sure that view.render is called
// in any cases.
forceFirstProgress:true,progress:function progress(params,context){context.view.render(context.model,context.ecModel,context.api,context.payload);}}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartView);

/***/ }),

/***/ 74874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22060);
/* harmony import */ var _util_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36189);
/* harmony import */ var _util_clazz_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18496);
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
*/var ComponentView=/** @class */function(){function ComponentView(){this.group=new zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();this.uid=_util_component_js__WEBPACK_IMPORTED_MODULE_1__/* .getUID */ .Kr('viewComponent');}ComponentView.prototype.init=function(ecModel,api){};ComponentView.prototype.render=function(model,ecModel,api,payload){};ComponentView.prototype.dispose=function(ecModel,api){};ComponentView.prototype.updateView=function(model,ecModel,api,payload){// Do nothing;
};ComponentView.prototype.updateLayout=function(model,ecModel,api,payload){// Do nothing;
};ComponentView.prototype.updateVisual=function(model,ecModel,api,payload){// Do nothing;
};/**
   * Hook for toggle blur target series.
   * Can be used in marker for blur or leave blur the markers
   */ComponentView.prototype.toggleBlurSeries=function(seriesModels,isBlur,ecModel){// Do nothing;
};/**
   * Traverse the new rendered elements.
   *
   * It will traverse the new added element in progressive rendering.
   * And traverse all in normal rendering.
   */ComponentView.prototype.eachRendered=function(cb){var group=this.group;if(group){group.traverse(cb);}};return ComponentView;}();;_util_clazz_js__WEBPACK_IMPORTED_MODULE_2__/* .enableClassExtend */ .dm(ComponentView);_util_clazz_js__WEBPACK_IMPORTED_MODULE_2__/* .enableClassManagement */ .au(ComponentView);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentView);

/***/ }),

/***/ 25739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
*/ /**
 * LegendVisualProvider is an bridge that pick encoded color from data and
 * provide to the legend component.
 */var LegendVisualProvider=/** @class */function(){function LegendVisualProvider(// Function to get data after filtered. It stores all the encoding info
getDataWithEncodedVisual,// Function to get raw data before filtered.
getRawData){this._getDataWithEncodedVisual=getDataWithEncodedVisual;this._getRawData=getRawData;}LegendVisualProvider.prototype.getAllNames=function(){var rawData=this._getRawData();// We find the name from the raw data. In case it's filtered by the legend component.
// Normally, the name can be found in rawData, but can't be found in filtered data will display as gray.
return rawData.mapArray(rawData.getName);};LegendVisualProvider.prototype.containName=function(name){var rawData=this._getRawData();return rawData.indexOfName(name)>=0;};LegendVisualProvider.prototype.indexOfName=function(name){// Only get data when necessary.
// Because LegendVisualProvider constructor may be new in the stage that data is not prepared yet.
// Invoking Series#getData immediately will throw an error.
var dataWithEncodedVisual=this._getDataWithEncodedVisual();return dataWithEncodedVisual.indexOfName(name);};LegendVisualProvider.prototype.getItemVisual=function(dataIndex,key){// Get encoded visual properties from final filtered data.
var dataWithEncodedVisual=this._getDataWithEncodedVisual();return dataWithEncodedVisual.getItemVisual(dataIndex,key);};return LegendVisualProvider;}();/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LegendVisualProvider);

/***/ }),

/***/ 1652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16304);
/* harmony import */ var _util_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84646);
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
*/var each=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6;var isObject=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn;var CATEGORY_DEFAULT_VISUAL_INDEX=-1;var VisualMapping=/** @class */function(){function VisualMapping(option){var mappingMethod=option.mappingMethod;var visualType=option.type;var thisOption=this.option=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9(option);this.type=visualType;this.mappingMethod=mappingMethod;this._normalizeData=normalizers[mappingMethod];var visualHandler=VisualMapping.visualHandlers[visualType];this.applyVisual=visualHandler.applyVisual;this.getColorMapper=visualHandler.getColorMapper;this._normalizedToVisual=visualHandler._normalizedToVisual[mappingMethod];if(mappingMethod==='piecewise'){normalizeVisualRange(thisOption);preprocessForPiecewise(thisOption);}else if(mappingMethod==='category'){thisOption.categories?preprocessForSpecifiedCategory(thisOption)// categories is ordinal when thisOption.categories not specified,
// which need no more preprocess except normalize visual.
:normalizeVisualRange(thisOption,true);}else{// mappingMethod === 'linear' or 'fixed'
zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .assert */ .hu(mappingMethod!=='linear'||thisOption.dataExtent);normalizeVisualRange(thisOption);}}VisualMapping.prototype.mapValueToVisual=function(value){var normalized=this._normalizeData(value);return this._normalizedToVisual(normalized,value);};VisualMapping.prototype.getNormalizer=function(){return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .bind */ .ak(this._normalizeData,this);};/**
   * List available visual types.
   *
   * @public
   * @return {Array.<string>}
   */VisualMapping.listVisualTypes=function(){return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .keys */ .XP(VisualMapping.visualHandlers);};// /**
//  * @public
//  */
// static addVisualHandler(name, handler) {
//     visualHandlers[name] = handler;
// }
/**
   * @public
   */VisualMapping.isValidType=function(visualType){return VisualMapping.visualHandlers.hasOwnProperty(visualType);};/**
   * Convinent method.
   * Visual can be Object or Array or primary type.
   */VisualMapping.eachVisual=function(visual,callback,context){if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn(visual)){zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(visual,callback,context);}else{callback.call(context,visual);}};VisualMapping.mapVisual=function(visual,callback,context){var isPrimary;var newVisual=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ(visual)?[]:zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn(visual)?{}:(isPrimary=true,null);VisualMapping.eachVisual(visual,function(v,key){var newVal=callback.call(context,v,key);isPrimary?newVisual=newVal:newVisual[key]=newVal;});return newVisual;};/**
   * Retrieve visual properties from given object.
   */VisualMapping.retrieveVisuals=function(obj){var ret={};var hasVisual;obj&&each(VisualMapping.visualHandlers,function(h,visualType){if(obj.hasOwnProperty(visualType)){ret[visualType]=obj[visualType];hasVisual=true;}});return hasVisual?ret:null;};/**
   * Give order to visual types, considering colorSaturation, colorAlpha depends on color.
   *
   * @public
   * @param {(Object|Array)} visualTypes If Object, like: {color: ..., colorSaturation: ...}
   *                                     IF Array, like: ['color', 'symbol', 'colorSaturation']
   * @return {Array.<string>} Sorted visual types.
   */VisualMapping.prepareVisualTypes=function(visualTypes){if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ(visualTypes)){visualTypes=visualTypes.slice();}else if(isObject(visualTypes)){var types_1=[];each(visualTypes,function(item,type){types_1.push(type);});visualTypes=types_1;}else{return[];}visualTypes.sort(function(type1,type2){// color should be front of colorSaturation, colorAlpha, ...
// symbol and symbolSize do not matter.
return type2==='color'&&type1!=='color'&&type1.indexOf('color')===0?1:-1;});return visualTypes;};/**
   * 'color', 'colorSaturation', 'colorAlpha', ... are depends on 'color'.
   * Other visuals are only depends on themself.
   */VisualMapping.dependsOn=function(visualType1,visualType2){return visualType2==='color'?!!(visualType1&&visualType1.indexOf(visualType2)===0):visualType1===visualType2;};/**
   * @param value
   * @param pieceList [{value: ..., interval: [min, max]}, ...]
   *                         Always from small to big.
   * @param findClosestWhenOutside Default to be false
   * @return index
   */VisualMapping.findPieceIndex=function(value,pieceList,findClosestWhenOutside){var possibleI;var abs=Infinity;// value has the higher priority.
for(var i=0,len=pieceList.length;i<len;i++){var pieceValue=pieceList[i].value;if(pieceValue!=null){if(pieceValue===value// FIXME
// It is supposed to compare value according to value type of dimension,
// but currently value type can exactly be string or number.
// Compromise for numeric-like string (like '12'), especially
// in the case that visualMap.categories is ['22', '33'].
||zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD(pieceValue)&&pieceValue===value+''){return i;}findClosestWhenOutside&&updatePossible(pieceValue,i);}}for(var i=0,len=pieceList.length;i<len;i++){var piece=pieceList[i];var interval=piece.interval;var close_1=piece.close;if(interval){if(interval[0]===-Infinity){if(littleThan(close_1[1],value,interval[1])){return i;}}else if(interval[1]===Infinity){if(littleThan(close_1[0],interval[0],value)){return i;}}else if(littleThan(close_1[0],interval[0],value)&&littleThan(close_1[1],value,interval[1])){return i;}findClosestWhenOutside&&updatePossible(interval[0],i);findClosestWhenOutside&&updatePossible(interval[1],i);}}if(findClosestWhenOutside){return value===Infinity?pieceList.length-1:value===-Infinity?0:possibleI;}function updatePossible(val,index){var newAbs=Math.abs(val-value);if(newAbs<abs){abs=newAbs;possibleI=index;}}};VisualMapping.visualHandlers={color:{applyVisual:makeApplyVisual('color'),getColorMapper:function getColorMapper(){var thisOption=this.option;return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .bind */ .ak(thisOption.mappingMethod==='category'?function(value,isNormalized){!isNormalized&&(value=this._normalizeData(value));return doMapCategory.call(this,value);}:function(value,isNormalized,out){// If output rgb array
// which will be much faster and useful in pixel manipulation
var returnRGBArray=!!out;!isNormalized&&(value=this._normalizeData(value));out=zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .fastLerp */ .Uu(value,thisOption.parsedVisual,out);return returnRGBArray?out:zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .stringify */ .Pz(out,'rgba');},this);},_normalizedToVisual:{linear:function linear(normalized){return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .stringify */ .Pz(zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .fastLerp */ .Uu(normalized,this.option.parsedVisual),'rgba');},category:doMapCategory,piecewise:function piecewise(normalized,value){var result=getSpecifiedVisual.call(this,value);if(result==null){result=zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .stringify */ .Pz(zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .fastLerp */ .Uu(normalized,this.option.parsedVisual),'rgba');}return result;},fixed:doMapFixed}},colorHue:makePartialColorVisualHandler(function(color,value){return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .modifyHSL */ .ox(color,value);}),colorSaturation:makePartialColorVisualHandler(function(color,value){return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .modifyHSL */ .ox(color,null,value);}),colorLightness:makePartialColorVisualHandler(function(color,value){return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .modifyHSL */ .ox(color,null,null,value);}),colorAlpha:makePartialColorVisualHandler(function(color,value){return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .modifyAlpha */ .m8(color,value);}),decal:{applyVisual:makeApplyVisual('decal'),_normalizedToVisual:{linear:null,category:doMapCategory,piecewise:null,fixed:null}},opacity:{applyVisual:makeApplyVisual('opacity'),_normalizedToVisual:createNormalizedToNumericVisual([0,1])},liftZ:{applyVisual:makeApplyVisual('liftZ'),_normalizedToVisual:{linear:doMapFixed,category:doMapFixed,piecewise:doMapFixed,fixed:doMapFixed}},symbol:{applyVisual:function applyVisual(value,getter,setter){var symbolCfg=this.mapValueToVisual(value);setter('symbol',symbolCfg);},_normalizedToVisual:{linear:doMapToArray,category:doMapCategory,piecewise:function piecewise(normalized,value){var result=getSpecifiedVisual.call(this,value);if(result==null){result=doMapToArray.call(this,normalized);}return result;},fixed:doMapFixed}},symbolSize:{applyVisual:makeApplyVisual('symbolSize'),_normalizedToVisual:createNormalizedToNumericVisual([0,1])}};return VisualMapping;}();function preprocessForPiecewise(thisOption){var pieceList=thisOption.pieceList;thisOption.hasSpecialVisual=false;zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(pieceList,function(piece,index){piece.originIndex=index;// piece.visual is "result visual value" but not
// a visual range, so it does not need to be normalized.
if(piece.visual!=null){thisOption.hasSpecialVisual=true;}});}function preprocessForSpecifiedCategory(thisOption){// Hash categories.
var categories=thisOption.categories;var categoryMap=thisOption.categoryMap={};var visual=thisOption.visual;each(categories,function(cate,index){categoryMap[cate]=index;});// Process visual map input.
if(!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ(visual)){var visualArr_1=[];if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn(visual)){each(visual,function(v,cate){var index=categoryMap[cate];visualArr_1[index!=null?index:CATEGORY_DEFAULT_VISUAL_INDEX]=v;});}else{// Is primary type, represents default visual.
visualArr_1[CATEGORY_DEFAULT_VISUAL_INDEX]=visual;}visual=setVisualToOption(thisOption,visualArr_1);}// Remove categories that has no visual,
// then we can mapping them to CATEGORY_DEFAULT_VISUAL_INDEX.
for(var i=categories.length-1;i>=0;i--){if(visual[i]==null){delete categoryMap[categories[i]];categories.pop();}}}function normalizeVisualRange(thisOption,isCategory){var visual=thisOption.visual;var visualArr=[];if(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isObject */ .Kn(visual)){each(visual,function(v){visualArr.push(v);});}else if(visual!=null){visualArr.push(visual);}var doNotNeedPair={color:1,symbol:1};if(!isCategory&&visualArr.length===1&&!doNotNeedPair.hasOwnProperty(thisOption.type)){// Do not care visualArr.length === 0, which is illegal.
visualArr[1]=visualArr[0];}setVisualToOption(thisOption,visualArr);}function makePartialColorVisualHandler(applyValue){return{applyVisual:function applyVisual(value,getter,setter){// Only used in HSL
var colorChannel=this.mapValueToVisual(value);// Must not be array value
setter('color',applyValue(getter('color'),colorChannel));},_normalizedToVisual:createNormalizedToNumericVisual([0,1])};}function doMapToArray(normalized){var visual=this.option.visual;return visual[Math.round((0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .linearMap */ .NU)(normalized,[0,1],[0,visual.length-1],true))]||{};// TODO {}?
}function makeApplyVisual(visualType){return function(value,getter,setter){setter(visualType,this.mapValueToVisual(value));};}function doMapCategory(normalized){var visual=this.option.visual;return visual[this.option.loop&&normalized!==CATEGORY_DEFAULT_VISUAL_INDEX?normalized%visual.length:normalized];}function doMapFixed(){// visual will be convert to array.
return this.option.visual[0];}/**
 * Create mapped to numeric visual
 */function createNormalizedToNumericVisual(sourceExtent){return{linear:function linear(normalized){return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .linearMap */ .NU)(normalized,sourceExtent,this.option.visual,true);},category:doMapCategory,piecewise:function piecewise(normalized,value){var result=getSpecifiedVisual.call(this,value);if(result==null){result=(0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .linearMap */ .NU)(normalized,sourceExtent,this.option.visual,true);}return result;},fixed:doMapFixed};}function getSpecifiedVisual(value){var thisOption=this.option;var pieceList=thisOption.pieceList;if(thisOption.hasSpecialVisual){var pieceIndex=VisualMapping.findPieceIndex(value,pieceList);var piece=pieceList[pieceIndex];if(piece&&piece.visual){return piece.visual[this.type];}}}function setVisualToOption(thisOption,visualArr){thisOption.visual=visualArr;if(thisOption.type==='color'){thisOption.parsedVisual=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .UI(visualArr,function(item){var color=zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__/* .parse */ .Qc(item);if(!color&&"production"!=='production'){}return color||[0,0,0,1];});}return visualArr;}/**
 * Normalizers by mapping methods.
 */var normalizers={linear:function linear(value){return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .linearMap */ .NU)(value,this.option.dataExtent,[0,1],true);},piecewise:function piecewise(value){var pieceList=this.option.pieceList;var pieceIndex=VisualMapping.findPieceIndex(value,pieceList,true);if(pieceIndex!=null){return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__/* .linearMap */ .NU)(pieceIndex,[0,pieceList.length-1],[0,1],true);}},category:function category(value){var index=this.option.categories?this.option.categoryMap[value]:value;// ordinal value
return index==null?CATEGORY_DEFAULT_VISUAL_INDEX:index;},fixed:zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .noop */ .ZT};function littleThan(close,a,b){return close?a<=b:a<b;}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VisualMapping);

/***/ }),

/***/ 12616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ decalVisual)
/* harmony export */ });
/* harmony import */ var _util_decal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7335);
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
*/function decalVisual(ecModel,api){ecModel.eachRawSeries(function(seriesModel){if(ecModel.isSeriesFiltered(seriesModel)){return;}var data=seriesModel.getData();if(data.hasItemVisual()){data.each(function(idx){var decal=data.getItemVisual(idx,'decal');if(decal){var itemStyle=data.ensureUniqueItemVisual(idx,'style');itemStyle.decal=(0,_util_decal_js__WEBPACK_IMPORTED_MODULE_0__/* .createOrUpdatePatternFromDecal */ .I)(decal,api);}});}var decal=data.getVisual('decal');if(decal){var style=data.getVisual('style');style.decal=(0,_util_decal_js__WEBPACK_IMPORTED_MODULE_0__/* .createOrUpdatePatternFromDecal */ .I)(decal,api);}});}

/***/ }),

/***/ 80578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LZ": () => (/* binding */ setItemVisualFromData),
/* harmony export */   "Or": () => (/* binding */ getItemVisualFromData),
/* harmony export */   "UL": () => (/* binding */ getVisualFromData)
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
*/function getItemVisualFromData(data,dataIndex,key){switch(key){case'color':var style=data.getItemVisual(dataIndex,'style');return style[data.getVisual('drawType')];case'opacity':return data.getItemVisual(dataIndex,'style').opacity;case'symbol':case'symbolSize':case'liftZ':return data.getItemVisual(dataIndex,key);default:if(false){}}}function getVisualFromData(data,key){switch(key){case'color':var style=data.getVisual('style');return style[data.getVisual('drawType')];case'opacity':return data.getVisual('style').opacity;case'symbol':case'symbolSize':case'liftZ':return data.getVisual(key);default:if(false){}}}function setItemVisualFromData(data,dataIndex,key,value){switch(key){case'color':// Make sure not sharing style object.
var style=data.ensureUniqueItemVisual(dataIndex,'style');style[data.getVisual('drawType')]=value;// Mark the color has been changed, not from palette anymore
data.setItemVisual(dataIndex,'colorFromPalette',false);break;case'opacity':data.ensureUniqueItemVisual(dataIndex,'style').opacity=value;break;case'symbol':case'symbolSize':case'liftZ':data.setItemVisual(dataIndex,key,value);break;default:if(false){}}}

/***/ }),

/***/ 59863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$P": () => (/* binding */ dataColorPaletteTask),
/* harmony export */   "TD": () => (/* binding */ seriesStyleTask),
/* harmony export */   "Tn": () => (/* binding */ dataStyleTask)
/* harmony export */ });
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57697);
/* harmony import */ var _model_mixin_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14598);
/* harmony import */ var _model_mixin_itemStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68008);
/* harmony import */ var _model_mixin_lineStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35448);
/* harmony import */ var _model_Model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25118);
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
*/var inner=(0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__/* .makeInner */ .Yf)();var defaultStyleMappers={itemStyle:(0,_model_mixin_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_model_mixin_itemStyle_js__WEBPACK_IMPORTED_MODULE_2__/* .ITEM_STYLE_KEY_MAP */ .t,true),lineStyle:(0,_model_mixin_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_model_mixin_lineStyle_js__WEBPACK_IMPORTED_MODULE_3__/* .LINE_STYLE_KEY_MAP */ .v,true)};var defaultColorKey={lineStyle:'stroke',itemStyle:'fill'};function getStyleMapper(seriesModel,stylePath){var styleMapper=seriesModel.visualStyleMapper||defaultStyleMappers[stylePath];if(!styleMapper){console.warn("Unkown style type '"+stylePath+"'.");return defaultStyleMappers.itemStyle;}return styleMapper;}function getDefaultColorKey(seriesModel,stylePath){// return defaultColorKey[stylePath] ||
var colorKey=seriesModel.visualDrawType||defaultColorKey[stylePath];if(!colorKey){console.warn("Unkown style type '"+stylePath+"'.");return'fill';}return colorKey;}var seriesStyleTask={createOnAllSeries:true,performRawSeries:true,reset:function reset(seriesModel,ecModel){var data=seriesModel.getData();var stylePath=seriesModel.visualStyleAccessPath||'itemStyle';// Set in itemStyle
var styleModel=seriesModel.getModel(stylePath);var getStyle=getStyleMapper(seriesModel,stylePath);var globalStyle=getStyle(styleModel);var decalOption=styleModel.getShallow('decal');if(decalOption){data.setVisual('decal',decalOption);decalOption.dirty=true;}// TODO
var colorKey=getDefaultColorKey(seriesModel,stylePath);var color=globalStyle[colorKey];// TODO style callback
var colorCallback=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .mf)(color)?color:null;var hasAutoColor=globalStyle.fill==='auto'||globalStyle.stroke==='auto';// Get from color palette by default.
if(!globalStyle[colorKey]||colorCallback||hasAutoColor){// Note: if some series has color specified (e.g., by itemStyle.color), we DO NOT
// make it effect palette. Bacause some scenarios users need to make some series
// transparent or as background, which should better not effect the palette.
var colorPalette=seriesModel.getColorFromPalette(// TODO series count changed.
seriesModel.name,null,ecModel.getSeriesCount());if(!globalStyle[colorKey]){globalStyle[colorKey]=colorPalette;data.setVisual('colorFromPalette',true);}globalStyle.fill=globalStyle.fill==='auto'||(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .mf)(globalStyle.fill)?colorPalette:globalStyle.fill;globalStyle.stroke=globalStyle.stroke==='auto'||(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .mf)(globalStyle.stroke)?colorPalette:globalStyle.stroke;}data.setVisual('style',globalStyle);data.setVisual('drawType',colorKey);// Only visible series has each data be visual encoded
if(!ecModel.isSeriesFiltered(seriesModel)&&colorCallback){data.setVisual('colorFromPalette',false);return{dataEach:function dataEach(data,idx){var dataParams=seriesModel.getDataParams(idx);var itemStyle=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .extend */ .l7)({},globalStyle);itemStyle[colorKey]=colorCallback(dataParams);data.setItemVisual(idx,'style',itemStyle);}};}}};var sharedModel=new _model_Model_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z();var dataStyleTask={createOnAllSeries:true,performRawSeries:true,reset:function reset(seriesModel,ecModel){if(seriesModel.ignoreStyleOnData||ecModel.isSeriesFiltered(seriesModel)){return;}var data=seriesModel.getData();var stylePath=seriesModel.visualStyleAccessPath||'itemStyle';// Set in itemStyle
var getStyle=getStyleMapper(seriesModel,stylePath);var colorKey=data.getVisual('drawType');return{dataEach:data.hasItemOption?function(data,idx){// Not use getItemModel for performance considuration
var rawItem=data.getRawDataItem(idx);if(rawItem&&rawItem[stylePath]){sharedModel.option=rawItem[stylePath];var style=getStyle(sharedModel);var existsStyle=data.ensureUniqueItemVisual(idx,'style');(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .extend */ .l7)(existsStyle,style);if(sharedModel.option.decal){data.setItemVisual(idx,'decal',sharedModel.option.decal);sharedModel.option.decal.dirty=true;}if(colorKey in style){data.setItemVisual(idx,'colorFromPalette',false);}}}:null};}};// Pick color from palette for the data which has not been set with color yet.
// Note: do not support stream rendering. No such cases yet.
var dataColorPaletteTask={performRawSeries:true,overallReset:function overallReset(ecModel){// Each type of series use one scope.
// Pie and funnel are using diferrent scopes
var paletteScopeGroupByType=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__/* .createHashMap */ .kW)();ecModel.eachSeries(function(seriesModel){var colorBy=seriesModel.getColorBy();if(seriesModel.isColorBySeries()){return;}var key=seriesModel.type+'-'+colorBy;var colorScope=paletteScopeGroupByType.get(key);if(!colorScope){colorScope={};paletteScopeGroupByType.set(key,colorScope);}inner(seriesModel).scope=colorScope;});ecModel.eachSeries(function(seriesModel){if(seriesModel.isColorBySeries()||ecModel.isSeriesFiltered(seriesModel)){return;}var dataAll=seriesModel.getRawData();var idxMap={};var data=seriesModel.getData();var colorScope=inner(seriesModel).scope;var stylePath=seriesModel.visualStyleAccessPath||'itemStyle';var colorKey=getDefaultColorKey(seriesModel,stylePath);data.each(function(idx){var rawIdx=data.getRawIndex(idx);idxMap[rawIdx]=idx;});// Iterate on data before filtered. To make sure color from palette can be
// Consistent when toggling legend.
dataAll.each(function(rawIdx){var idx=idxMap[rawIdx];var fromPalette=data.getItemVisual(idx,'colorFromPalette');// Get color from palette for each data only when the color is inherited from series color, which is
// also picked from color palette. So following situation is not in the case:
// 1. series.itemStyle.color is set
// 2. color is encoded by visualMap
if(fromPalette){var itemStyle=data.ensureUniqueItemVisual(idx,'style');var name_1=dataAll.getName(rawIdx)||rawIdx+'';var dataCount=dataAll.count();itemStyle[colorKey]=seriesModel.getColorFromPalette(name_1,colorScope,dataCount);}});});}};

/***/ }),

/***/ 76041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ dataSymbolTask),
/* harmony export */   "n": () => (/* binding */ seriesSymbolTask)
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
*/var SYMBOL_PROPS_WITH_CB=['symbol','symbolSize','symbolRotate','symbolOffset'];var SYMBOL_PROPS=SYMBOL_PROPS_WITH_CB.concat(['symbolKeepAspect']);// Encoding visual for all series include which is filtered for legend drawing
var seriesSymbolTask={createOnAllSeries:true,// For legend.
performRawSeries:true,reset:function reset(seriesModel,ecModel){var data=seriesModel.getData();if(seriesModel.legendIcon){data.setVisual('legendIcon',seriesModel.legendIcon);}if(!seriesModel.hasSymbolVisual){return;}var symbolOptions={};var symbolOptionsCb={};var hasCallback=false;for(var i=0;i<SYMBOL_PROPS_WITH_CB.length;i++){var symbolPropName=SYMBOL_PROPS_WITH_CB[i];var val=seriesModel.get(symbolPropName);if((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .mf)(val)){hasCallback=true;symbolOptionsCb[symbolPropName]=val;}else{symbolOptions[symbolPropName]=val;}}symbolOptions.symbol=symbolOptions.symbol||seriesModel.defaultSymbol;data.setVisual((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l7)({legendIcon:seriesModel.legendIcon||symbolOptions.symbol,symbolKeepAspect:seriesModel.get('symbolKeepAspect')},symbolOptions));// Only visible series has each data be visual encoded
if(ecModel.isSeriesFiltered(seriesModel)){return;}var symbolPropsCb=(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .keys */ .XP)(symbolOptionsCb);function dataEach(data,idx){var rawValue=seriesModel.getRawValue(idx);var params=seriesModel.getDataParams(idx);for(var i=0;i<symbolPropsCb.length;i++){var symbolPropName=symbolPropsCb[i];data.setItemVisual(idx,symbolPropName,symbolOptionsCb[symbolPropName](rawValue,params));}}return{dataEach:hasCallback?dataEach:null};}};var dataSymbolTask={createOnAllSeries:true,// For legend.
performRawSeries:true,reset:function reset(seriesModel,ecModel){if(!seriesModel.hasSymbolVisual){return;}// Only visible series has each data be visual encoded
if(ecModel.isSeriesFiltered(seriesModel)){return;}var data=seriesModel.getData();function dataEach(data,idx){var itemModel=data.getItemModel(idx);for(var i=0;i<SYMBOL_PROPS.length;i++){var symbolPropName=SYMBOL_PROPS[i];var val=itemModel.getShallow(symbolPropName,true);if(val!=null){data.setItemVisual(idx,symbolPropName,val);}}}return{dataEach:data.hasItemOption?dataEach:null};}};

/***/ }),

/***/ 68166:
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
*/ /**
 * @file Visual mapping.
 */var visualDefault={/**
   * @public
   */get:function get(visualType,key,isCategory){var value=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9((defaultOption[visualType]||{})[key]);return isCategory?zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ(value)?value[value.length-1]:value:value;}};var defaultOption={color:{active:['#006edd','#e0ffff'],inactive:['rgba(0,0,0,0)']},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[0.3,1],inactive:[0,0]},colorLightness:{active:[0.9,0.5],inactive:[0,0]},colorAlpha:{active:[0.3,1],inactive:[0,0]},opacity:{active:[0.3,1],inactive:[0,0]},symbol:{active:['circle','roundRect','diamond'],inactive:['none']},symbolSize:{active:[10,50],inactive:[0,0]}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visualDefault);

/***/ }),

/***/ 83025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z7": () => (/* binding */ incrementalApplyVisual),
/* harmony export */   "jO": () => (/* binding */ replaceVisualOption),
/* harmony export */   "qD": () => (/* binding */ createVisualMappings)
/* harmony export */ });
/* unused harmony export applyVisual */
/* harmony import */ var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57697);
/* harmony import */ var _VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1652);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80578);
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
 * @file Visual solution, for consistent option specification.
 */var each=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6;function hasKeys(obj){if(obj){for(var name_1 in obj){if(obj.hasOwnProperty(name_1)){return true;}}}}function createVisualMappings(option,stateList,supplementVisualOption){var visualMappings={};each(stateList,function(state){var mappings=visualMappings[state]=createMappings();each(option[state],function(visualData,visualType){if(!_VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isValidType */ .Z.isValidType(visualType)){return;}var mappingOption={type:visualType,visual:visualData};supplementVisualOption&&supplementVisualOption(mappingOption,state);mappings[visualType]=new _VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(mappingOption);// Prepare a alpha for opacity, for some case that opacity
// is not supported, such as rendering using gradient color.
if(visualType==='opacity'){mappingOption=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9(mappingOption);mappingOption.type='colorAlpha';mappings.__hidden.__alphaForOpacity=new _VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(mappingOption);}});});return visualMappings;function createMappings(){var Creater=function Creater(){};// Make sure hidden fields will not be visited by
// object iteration (with hasOwnProperty checking).
Creater.prototype.__hidden=Creater.prototype;var obj=new Creater();return obj;}}function replaceVisualOption(thisOption,newOption,keys){// Visual attributes merge is not supported, otherwise it
// brings overcomplicated merge logic. See #2853. So if
// newOption has anyone of these keys, all of these keys
// will be reset. Otherwise, all keys remain.
var has;zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(keys,function(key){if(newOption.hasOwnProperty(key)&&hasKeys(newOption[key])){has=true;}});has&&zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(keys,function(key){if(newOption.hasOwnProperty(key)&&hasKeys(newOption[key])){thisOption[key]=zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9(newOption[key]);}else{delete thisOption[key];}});}/**
 * @param stateList
 * @param visualMappings
 * @param list
 * @param getValueState param: valueOrIndex, return: state.
 * @param scope Scope for getValueState
 * @param dimension Concrete dimension, if used.
 */ // ???! handle brush?
function applyVisual(stateList,visualMappings,data,getValueState,scope,dimension){var visualTypesMap={};zrUtil.each(stateList,function(state){var visualTypes=VisualMapping.prepareVisualTypes(visualMappings[state]);visualTypesMap[state]=visualTypes;});var dataIndex;function getVisual(key){return getItemVisualFromData(data,dataIndex,key);}function setVisual(key,value){setItemVisualFromData(data,dataIndex,key,value);}if(dimension==null){data.each(eachItem);}else{data.each([dimension],eachItem);}function eachItem(valueOrIndex,index){dataIndex=dimension==null?valueOrIndex// First argument is index
:index;var rawDataItem=data.getRawDataItem(dataIndex);// Consider performance
// @ts-ignore
if(rawDataItem&&rawDataItem.visualMap===false){return;}var valueState=getValueState.call(scope,valueOrIndex);var mappings=visualMappings[valueState];var visualTypes=visualTypesMap[valueState];for(var i=0,len=visualTypes.length;i<len;i++){var type=visualTypes[i];mappings[type]&&mappings[type].applyVisual(valueOrIndex,getVisual,setVisual);}}}/**
 * @param data
 * @param stateList
 * @param visualMappings <state, Object.<visualType, module:echarts/visual/VisualMapping>>
 * @param getValueState param: valueOrIndex, return: state.
 * @param dim dimension or dimension index.
 */function incrementalApplyVisual(stateList,visualMappings,getValueState,dim){var visualTypesMap={};zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6(stateList,function(state){var visualTypes=_VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].prepareVisualTypes */ .Z.prepareVisualTypes(visualMappings[state]);visualTypesMap[state]=visualTypes;});return{progress:function progress(params,data){var dimIndex;if(dim!=null){dimIndex=data.getDimensionIndex(dim);}function getVisual(key){return (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__/* .getItemVisualFromData */ .Or)(data,dataIndex,key);}function setVisual(key,value){(0,_helper_js__WEBPACK_IMPORTED_MODULE_2__/* .setItemVisualFromData */ .LZ)(data,dataIndex,key,value);}var dataIndex;var store=data.getStore();while((dataIndex=params.next())!=null){var rawDataItem=data.getRawDataItem(dataIndex);// Consider performance
// @ts-ignore
if(rawDataItem&&rawDataItem.visualMap===false){continue;}var value=dim!=null?store.get(dimIndex,dataIndex):dataIndex;var valueState=getValueState(value);var mappings=visualMappings[valueState];var visualTypes=visualTypesMap[valueState];for(var i=0,len=visualTypes.length;i<len;i++){var type=visualTypes[i];mappings[type]&&mappings[type].applyVisual(value,getVisual,setVisual);}}}};}

/***/ }),

/***/ 88161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZT": () => (/* binding */ __extends)
/* harmony export */ });
/* unused harmony exports __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};function __extends(d,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());}var _assign=function __assign(){_assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return _assign.apply(this,arguments);};function __rest(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;}function __decorate(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if((typeof Reflect==="undefined"?"undefined":_typeof(Reflect))==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;}return c>3&&r&&Object.defineProperty(target,key,r),r;}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex);};}function __metadata(metadataKey,metadataValue){if((typeof Reflect==="undefined"?"undefined":_typeof(Reflect))==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(metadataKey,metadataValue);}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});}function __generator(thisArg,body){var _={label:0,sent:function sent(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_){try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}}var __createBinding=Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];};function __exportStar(m,o){for(var p in m){if(p!=="default"&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding(o,m,p);}}function __values(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function next(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");}function __read(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done){ar.push(r.value);}}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;}/** @deprecated */function __spread(){for(var ar=[],i=0;i<arguments.length;i++){ar=ar.concat(__read(arguments[i]));}return ar;}/** @deprecated */function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++){s+=arguments[i].length;}for(var r=Array(s),k=0,i=0;i<il;i++){for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++){r[k]=a[j];}}return r;}function __spreadArray(to,from,pack){if(pack||arguments.length===2)for(var i=0,l=from.length,ar;i<l;i++){if(ar||!(i in from)){if(!ar)ar=Array.prototype.slice.call(from,0,i);ar[i]=from[i];}}return to.concat(ar||from);}function __await(v){return this instanceof __await?(this.v=v,this):new __await(v);}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this;},i;function verb(n){if(g[n])i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v);});};}function resume(n,v){try{step(g[n](v));}catch(e){settle(q[0][3],e);}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r);}function fulfill(value){resume("next",value);}function reject(value){resume("throw",value);}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1]);}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e;}),verb("return"),i[Symbol.iterator]=function(){return this;},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:n==="return"}:f?f(v):v;}:f;}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o=typeof __values==="function"?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this;},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value);});};}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d});},reject);}}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw});}else{cooked.raw=raw;}return cooked;};var __setModuleDefault=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod};}function __classPrivateFieldGet(receiver,state,kind,f){if(kind==="a"&&!f)throw new TypeError("Private accessor was defined without a getter");if(typeof state==="function"?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return kind==="m"?f:kind==="a"?f.call(receiver):f?f.value:state.get(receiver);}function __classPrivateFieldSet(receiver,state,value,kind,f){if(kind==="m")throw new TypeError("Private method is not writable");if(kind==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof state==="function"?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot write private member to an object whose class did not declare it");return kind==="a"?f.call(receiver,value):f?f.value=value:state.set(receiver,value),value;}

/***/ })

}]);