require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/tui-customer-service-plugin/components/message-form/index"],{2017:function(e,n,t){"use strict";t.r(n);var u=t("58be"),o=t.n(u);for(var r in u)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(r);n["default"]=o.a},"58be":function(e,n,t){"use strict";var u=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(t("cda2")),r=o.default.computed,i={props:["payload"],emits:["sendMessage"],components:{FormBranch:function(){t.e("TUIKit/tui-customer-service-plugin/components/message-form/form-branch").then(function(){return resolve(t("c702"))}.bind(null,t)).catch(t.oe)},FormInput:function(){t.e("TUIKit/tui-customer-service-plugin/components/message-form/form-input").then(function(){return resolve(t("3696"))}.bind(null,t)).catch(t.oe)}},setup:function(e,n){var t=n.emit,u=r((function(){var n;return(null===(n=e.payload)||void 0===n?void 0:n.content)||{type:0,header:"",items:[]}}));return{content:u,handleContentListItemClick:function(e){t("sendMessage",{text:e.content})},handleFormSaveInputSubmit:function(e){t("sendMessage",{text:e})}}}};n.default=i},b7d0:function(e,n,t){},d4dd:function(e,n,t){"use strict";t.r(n);var u=t("f760"),o=t("2017");for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("eabe");var i=t("f0c5"),c=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);n["default"]=c.exports},eabe:function(e,n,t){"use strict";var u=t("b7d0"),o=t.n(u);o.a},f760:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var u=function(){var e=this.$createElement;this._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/tui-customer-service-plugin/components/message-form/index-create-component',
    {
        'TUIKit/tui-customer-service-plugin/components/message-form/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d4dd"))
        })
    },
    [['TUIKit/tui-customer-service-plugin/components/message-form/index-create-component']]
]);
