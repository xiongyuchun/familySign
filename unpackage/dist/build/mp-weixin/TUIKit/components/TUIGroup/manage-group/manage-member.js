require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/components/TUIGroup/manage-group/manage-member"],{"086f":function(e,t,r){},"7a49":function(e,t,r){"use strict";r.r(t);var n=r("b3dd"),a=r.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"86c1":function(e,t,r){"use strict";var n=r("086f"),a=r.n(n);a.a},b3dd:function(e,t,r){"use strict";var n=r("4ea4"),a=r("7037");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r("a6ed")),u=r("2ab0"),i=n(r("c76b")),l=r("d31c");function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}var f={};f.props={list:{type:Array,default:function(){return[]}},total:{type:Number,default:function(){return 0}},isShowDel:{type:Boolean,default:function(){return!1}},self:{type:Object,default:function(){return{}}}},f.setup=function(e,t){var r=e,n=(0,u.ref)(0),a=(0,u.ref)([]),c=(0,u.ref)(!1),f=(0,u.ref)({});(0,u.watchEffect)((function(){n.value=r.total,c.value=r.isShowDel,a.value=r.list,f.value=r.self}));var s=t.emit;return{TUITranslateService:o.TUITranslateService,delIcon:i.default,isUniFrameWork:l.isUniFrameWork,totalMember:n,memberList:a,isShowDeleteBtn:c,handleRoleName:function(e){var t="";switch(null===e||void 0===e?void 0:e.role){case o.default.TYPES.GRP_MBR_ROLE_ADMIN:t=o.TUITranslateService.t("TUIGroup.管理员");break;case o.default.TYPES.GRP_MBR_ROLE_OWNER:t=o.TUITranslateService.t("TUIGroup.群主");break}return t&&(t="(".concat(t,")")),e.userID===f.value.userID&&(t+=" (".concat(o.TUITranslateService.t("TUIGroup.我"),")")),t},getMore:function(){s("more")},submit:function(e){s("del",[e])},handleMemberProfileShow:function(e){s("handleMemberProfileShow",e)},close:function(e){s("close",e)}}},f.components=Object.assign({Icon:function(){r.e("TUIKit/components/common/Icon").then(function(){return resolve(r("b42b"))}.bind(null,r)).catch(r.oe)}},f.components);var s=f;t.default=s},f2e4:function(e,t,r){"use strict";r.r(t);var n=r("f9ff"),a=r("7a49");for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("86c1");var u=r("f0c5"),i=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"612f5d07",null,!1,n["a"],void 0);t["default"]=i.exports},f9ff:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,r=(e._self._c,e.isUniFrameWork?null:e.__map(e.memberList,(function(t,r){var n=e.__get_orig(t),a=e.handleRoleName(t);return{$orig:n,m0:a}}))),n=e.isUniFrameWork?null:e.memberList.length,a=!e.isUniFrameWork&&n<e.totalMember?e.TUITranslateService.t("TUIGroup.查看更多"):null,o=e.isUniFrameWork?e.TUITranslateService.t("TUIGroup.群成员"):null,u=e.isUniFrameWork?e.TUITranslateService.t("关闭"):null,i=e.isUniFrameWork?e.__map(e.memberList,(function(t,r){var n=e.__get_orig(t),a=e.handleRoleName(t);return{$orig:n,m1:a}})):null,l=e.isUniFrameWork?e.memberList.length:null,c=e.isUniFrameWork&&l<e.totalMember?e.TUITranslateService.t("TUIGroup.查看更多"):null;e.$mp.data=Object.assign({},{$root:{l0:r,g0:n,g1:a,g2:o,g3:u,l1:i,g4:l,g5:c}})},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/components/TUIGroup/manage-group/manage-member-create-component',
    {
        'TUIKit/components/TUIGroup/manage-group/manage-member-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f2e4"))
        })
    },
    [['TUIKit/components/TUIGroup/manage-group/manage-member-create-component']]
]);
