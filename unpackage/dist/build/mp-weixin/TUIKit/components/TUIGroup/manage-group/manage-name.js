require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/components/TUIGroup/manage-group/manage-name"],{"95d8":function(e,n,t){"use strict";t.r(n);var a=t("a56c"),u=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=u.a},"9eec":function(e,n,t){},a56c:function(e,n,t){"use strict";var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=t("a6ed"),i=t("2ab0"),o=a(t("fd15")),r=t("9c83"),c=t("d31c"),l={};l.props={data:{type:Object,default:function(){return{}}},isAuthor:{type:Boolean,default:!1}},l.setup=function(e,n){var t=e,a=(0,i.ref)({}),l=(0,i.ref)(""),s=(0,i.ref)(!1),v=(0,i.ref)(null);(0,i.watchEffect)((function(){a.value=t.data}));var d=n.emit,f=function(){l.value?(l.value!==a.value.name&&(d("update",{key:"name",value:l.value}),a.value.name=l.value,l.value="",(0,r.Toast)({message:u.TUITranslateService.t("TUIGroup.群名称修改成功"),type:r.TOAST_TYPE.SUCCESS})),T()):(0,r.Toast)({message:u.TUITranslateService.t("TUIGroup.群名称不能为空"),type:r.TOAST_TYPE.ERROR})},T=function(){t.isAuthor&&(s.value=!s.value,c.isPC&&(0,i.nextTick)((function(){I(v.value)}))),s.value&&(l.value=a.value.name)},p=!1,m=!1,I=function(e){c.isUniFrameWork||(document.addEventListener("mousedown",U),(null===e||void 0===e?void 0:e.addEventListener)&&(null===e||void 0===e||e.addEventListener("mousedown",E)))},U=function(){p=!0,!m&&p&&(f(),g(v.value)),p=!1,m=!1},E=function(){m=!0},g=function(e){document.removeEventListener("mousedown",U),(null===e||void 0===e?void 0:e.removeEventListener)&&(null===e||void 0===e||e.removeEventListener("mousedown",E))};return{TUITranslateService:u.TUITranslateService,editIcon:o.default,isPC:c.isPC,groupProfile:a,inputGroupName:l,isEdit:s,nameInputRef:v,updateProfile:f,close:T}},l.components=Object.assign({Icon:function(){t.e("TUIKit/components/common/Icon").then(function(){return resolve(t("b42b"))}.bind(null,t)).catch(t.oe)}},l.components);var s=l;n.default=s},aca9:function(e,n,t){"use strict";var a=t("9eec"),u=t.n(a);u.a},c105:function(e,n,t){"use strict";t.r(n);var a=t("ef58"),u=t("95d8");for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);t("aca9");var o=t("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"2936e17c",null,!1,a["a"],void 0);n["default"]=r.exports},ef58:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){}));var a=function(){var e=this,n=e.$createElement,t=(e._self._c,e.TUITranslateService.t("TUIGroup.群名称")),a=e.isEdit&&!e.isPC?e.TUITranslateService.t("TUIGroup.修改群聊名称"):null,u=e.isEdit&&!e.isPC?e.TUITranslateService.t("TUIGroup.修改群聊名称后，将在群内通知其他成员"):null,i=e.isEdit&&!e.isPC?e.TUITranslateService.t("关闭"):null,o=e.isEdit&&!e.isPC?e.TUITranslateService.t("TUIGroup.仅限中文、字母、数字和下划线，2-20个字"):null,r=e.isEdit&&!e.isPC?e.TUITranslateService.t("确认"):null;e.$mp.data=Object.assign({},{$root:{g0:t,g1:a,g2:u,g3:i,g4:o,g5:r}})},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/components/TUIGroup/manage-group/manage-name-create-component',
    {
        'TUIKit/components/TUIGroup/manage-group/manage-name-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c105"))
        })
    },
    [['TUIKit/components/TUIGroup/manage-group/manage-name-create-component']]
]);
