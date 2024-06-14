require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/components/common/ImagePreviewer/image-item"],{"0b53":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var u=function(){var t=this.$createElement;this._self._c},r=[]},"1e60":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("2ab0"),r={};r.props={zoom:{type:Number,default:1},rotate:{type:Number,default:0},src:{type:String,default:""},messageItem:{type:Object,default:function(){return{}}}},r.setup=function(t,e){var n=t,r=(0,u.computed)((function(){var t,e,u=null===n||void 0===n||null===(t=n.messageItem)||void 0===t||null===(e=t.payload)||void 0===e?void 0:e.imageInfoArray[0],r=u.width,i=void 0===r?0:r,a=u.height,o=void 0===a?0:a;return i>=o}));return{props:n,isWidth:r}};var i=r;e.default=i},"9b8b":function(t,e,n){"use strict";var u=n("adf6"),r=n.n(u);r.a},adf6:function(t,e,n){},bb66:function(t,e,n){"use strict";n.r(e);var u=n("0b53"),r=n("e079");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("9b8b");var a=n("f0c5"),o=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=o.exports},e079:function(t,e,n){"use strict";n.r(e);var u=n("1e60"),r=n.n(u);for(var i in u)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/components/common/ImagePreviewer/image-item-create-component',
    {
        'TUIKit/components/common/ImagePreviewer/image-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bb66"))
        })
    },
    [['TUIKit/components/common/ImagePreviewer/image-item-create-component']]
]);
