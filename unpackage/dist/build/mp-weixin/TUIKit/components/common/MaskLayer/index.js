require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/components/common/MaskLayer/index"],{"0301":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var u=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){if(t.target!==t.currentTarget)return null;!e.isWeChat&&e.toggleView})},a=[]},"6a58":function(e,t,n){"use strict";n.r(t);var u=n("0301"),a=n("6d66");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("ea86");var o=n("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"62e9e174",null,!1,u["a"],void 0);t["default"]=f.exports},"6d66":function(e,t,n){"use strict";n.r(t);var u=n("e03f"),a=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=a.a},e03f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n("2ab0"),a=n("d31c"),r={};r.props={show:{type:Boolean,default:function(){return!1}}},r.setup=function(e,t){var n=e,r=(0,u.ref)(!1);(0,u.watchEffect)((function(){r.value=n.show}));var o=t.emit;return{isWeChat:a.isWeChat,showMask:r,toggleView:function(){r.value=!r.value,o("update:show",r.value)}}};var o=r;t.default=o},ea86:function(e,t,n){"use strict";var u=n("feb0"),a=n.n(u);a.a},feb0:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/components/common/MaskLayer/index-create-component',
    {
        'TUIKit/components/common/MaskLayer/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6a58"))
        })
    },
    [['TUIKit/components/common/MaskLayer/index-create-component']]
]);
