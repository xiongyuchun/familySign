require('../../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/components/TUIChat/message-list/message-elements/message-audio"],{2788:function(n,e,t){"use strict";t.r(e);var o=t("cad2"),a=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=a.a},6019:function(n,e,t){"use strict";t.r(e);var o=t("c2b74"),a=t("2788");for(var u in a)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(u);t("7344");var c=t("f0c5"),l=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"25c58a34",null,!1,o["a"],void 0);e["default"]=l.exports},7344:function(n,e,t){"use strict";var o=t("c269"),a=t.n(o);a.a},c269:function(n,e,t){},c2b74:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){}));var o=function(){var n=this.$createElement;this._self._c},a=[]},cad2:function(n,e,t){"use strict";var o=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t("2ab0"),u=t("8e85"),c=o(t("8fa1")),l={};l.props={content:{type:Object,default:function(){return{}}},messageItem:{type:Object,default:function(){return{}}}},l.setup=function(n,e){var t=n,o=(0,a.ref)(),l=(0,a.ref)(),r=((0,a.ref)(),(0,a.ref)(!1)),i=null===u.TUIGlobal||void 0===u.TUIGlobal?void 0:u.TUIGlobal.createInnerAudioContext();(0,a.watchEffect)((function(){o.value=t.content,l.value=t.messageItem})),(0,a.onMounted)((function(){i.onPlay((function(){console.log("开始播放")})),i.onEnded((function(){console.log("停止播放")})),i.onError((function(){null===u.TUIGlobal||void 0===u.TUIGlobal||u.TUIGlobal.showToast({icon:"none",title:"该音频暂不支持播放"})}))}));return{audioIcon:c.default,data:o,message:l,handlePlay:function(){l.value.hasRiskContent||(o.value.url&&(i.src=o.value.url,i.play()),r.value=!0)}}},l.components=Object.assign({Icon:function(){t.e("TUIKit/components/common/Icon").then(function(){return resolve(t("b42b"))}.bind(null,t)).catch(t.oe)}},l.components);var r=l;e.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/components/TUIChat/message-list/message-elements/message-audio-create-component',
    {
        'TUIKit/components/TUIChat/message-list/message-elements/message-audio-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6019"))
        })
    },
    [['TUIKit/components/TUIChat/message-list/message-elements/message-audio-create-component']]
]);
