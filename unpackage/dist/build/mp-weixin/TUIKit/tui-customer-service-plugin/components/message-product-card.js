require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/tui-customer-service-plugin/components/message-product-card"],{"045c":function(n,t,e){"use strict";e.r(t);var u=e("2fca"),a=e("5af4");for(var c in a)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(c);e("1f09");var o=e("f0c5"),i=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"9953ff22",null,!1,u["a"],void 0);t["default"]=i.exports},"1f09":function(n,t,e){"use strict";var u=e("3fac"),a=e.n(u);a.a},2808:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=e("9dd7"),a={props:["payload"],emits:["sendMessage"],setup:function(t,e){e.emit;return{props:t,isApp:u.isApp,jumpProductCard:function(){window?window.open(t.payload.content.url,"_blank"):n&&n.navigateTo({url:"/TUIKit/components/TUIChat/web-view?url=".concat(t.payload.content.url)})}}}};t.default=a}).call(this,e("543d")["default"])},"2fca":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){}));var u=function(){var n=this.$createElement;this._self._c},a=[]},"3fac":function(n,t,e){},"5af4":function(n,t,e){"use strict";e.r(t);var u=e("2808"),a=e.n(u);for(var c in u)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(c);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/tui-customer-service-plugin/components/message-product-card-create-component',
    {
        'TUIKit/tui-customer-service-plugin/components/message-product-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("045c"))
        })
    },
    [['TUIKit/tui-customer-service-plugin/components/message-product-card-create-component']]
]);
