require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/components/TUISearch/search-more/index"],{"67fd":function(e,n,t){"use strict";var r=t("b23c"),o=t.n(r);o.a},"6d00":function(e,n,t){"use strict";t.r(n);var r=t("8cf2"),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},"7b75":function(e,n,t){"use strict";t.r(n);var r=t("e1d7"),o=t("6d00");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("67fd");var c=t("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"022b801b",null,!1,r["a"],void 0);n["default"]=u.exports},"8cf2":function(e,n,t){"use strict";var r=t("4ea4"),o=t("7037");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("448a")),c=t("2ab0"),u=t("a6ed"),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=a?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(r,c,u):r[c]=e[c]}r.default=e,t&&t.set(e,r);return r}(t("e16a")),f=r(t("2b8d")),l=t("d31c");function s(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}var d={};d.props={searchType:{type:String,default:"global",validator:function(e){return["global","conversation"].includes(e)}}},d.setup=function(e,n){var t=e,r=(0,c.ref)(),o=(0,c.ref)(!1),s=function(){o.value=!o.value},d=(0,c.ref)([]);(0,c.onMounted)((function(){d.value=(0,a.default)(i.default.getExtensionList(i.TUIConstants.TUISearch.EXTENSION.SEARCH_MORE.EXT_ID)),i.default.callService({serviceName:i.TUIConstants.TUIConversation.SERVICE.NAME,method:i.TUIConstants.TUIConversation.SERVICE.METHOD.HIDE_CONVERSATION_HEADER,params:{}})})),(0,c.watch)((function(){return o.value}),(function(){o.value&&(b(r.value),u.TUIStore.update(u.StoreName.CUSTOM,"currentSearchingStatus",{isSearching:!1,searchType:t.searchType}))}));var v=!1,p=!1,b=function(e){l.isUniFrameWork||(document.addEventListener("click",h),(null===e||void 0===e?void 0:e.addEventListener)&&(null===e||void 0===e||e.addEventListener("click",E)))},h=function(){v=!0,!p&&v&&(o.value=!1),v=!1,p=!1},E=function(){p=!0};return{searchMoreSVG:f.default,searchMoreRef:r,isListShow:o,toggleMore:s,extensionList:d,handleMenu:function(e){var n=e.listener,t=void 0===n?{onClicked:function(){}}:n;t.onClicked(e),s()}}},d.components=Object.assign({Icon:function(){t.e("TUIKit/components/common/Icon").then(function(){return resolve(t("b42b"))}.bind(null,t)).catch(t.oe)}},d.components);var v=d;n.default=v},b23c:function(e,n,t){},e1d7:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var r=function(){var e=this.$createElement;this._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/components/TUISearch/search-more/index-create-component',
    {
        'TUIKit/components/TUISearch/search-more/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7b75"))
        })
    },
    [['TUIKit/components/TUISearch/search-more/index-create-component']]
]);
