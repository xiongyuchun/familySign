require('../../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/components/TUIContact/contact-search/index"],{22641:function(e,t,n){"use strict";n.r(t);var a=n("2ce1"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},"2ce1":function(e,t,n){"use strict";var a=n("4ea4"),r=n("7037");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n("2eee")),c=a(n("c973")),o=n("a6ed"),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var o=u?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(a,c,o):a[c]=e[c]}a.default=e,n&&n.set(e,a);return a}(n("e16a")),l=n("d31c"),s=n("8e85"),f=a(n("b806")),d=a(n("7ff4")),v=n("2ab0");function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var h={setup:function(e,t){var n=o.TUITranslateService.t("TUIContact.输入ID"),a=(0,v.ref)(!1),r=(0,v.ref)(""),p=(0,v.ref)({user:{label:"联系人",list:[]},group:{label:"群聊",list:[]}}),h=function(){var e=(0,c.default)(u.default.mark((function e(){return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.value){e.next=2;break}return e.abrupt("return");case 2:i.default.callService({serviceName:i.TUIConstants.TUISearch.SERVICE.NAME,method:i.TUIConstants.TUISearch.SERVICE.METHOD.SEARCH_USER,params:{userID:r.value}}).then((function(e){p.value.user.list=e.data})).catch((function(e){p.value.user.list=[],console.warn("search user error",e)})),i.default.callService({serviceName:i.TUIConstants.TUISearch.SERVICE.NAME,method:i.TUIConstants.TUISearch.SERVICE.METHOD.SEARCH_GROUP,params:{groupID:r.value}}).then((function(e){p.value.group.list=[e.data.group]})).catch((function(e){p.value.group.list=[],console.warn("search group error",e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.watch)((function(){return p.value}),(function(){o.TUIStore.update(o.StoreName.CUSTOM,"currentContactSearchResult",p.value)}),{deep:!0,immediate:!0}),(0,v.watch)((function(){return a.value}),(function(){o.TUIStore.update(o.StoreName.CUSTOM,"currentContactSearchingStatus",a.value),a.value&&(r.value="",p.value.user.list=[],p.value.group.list=[])}),{deep:!0,immediate:!0}),s.TUIGlobal.updateContactSearch=h,s.TUIGlobal.closeSearching=function(){a.value=!1},{TUITranslateService:o.TUITranslateService,isPC:l.isPC,addSVG:f.default,backSVG:d.default,searchingPlaceholder:n,isSearching:a,searchValue:r,handleSearchingHeaderClicked:function(){a.value||(a.value=!0)},handleSearchingIconClicked:function(){a.value=!a.value},search:h}}};h.components=Object.assign({Icon:function(){n.e("TUIKit/components/common/Icon").then(function(){return resolve(n("b42b"))}.bind(null,n)).catch(n.oe)}},h.components);var S=h;t.default=S},3156:function(e,t,n){"use strict";n.r(t);var a=n("f346"),r=n("22641");for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("851b");var c=n("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"4f3ef4a6",null,!1,a["a"],void 0);t["default"]=o.exports},"6b5a":function(e,t,n){},"851b":function(e,t,n){"use strict";var a=n("6b5a"),r=n.n(a);r.a},f346:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.isSearching&&e.isPC?null:e.TUITranslateService.t("TUIContact.添加好友/群聊")),a=e.isSearching?e.TUITranslateService.t("取消"):null;e._isMounted||(e.e0=function(t){e.isSearching=!1}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:a}})},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/components/TUIContact/contact-search/index-create-component',
    {
        'TUIKit/components/TUIContact/contact-search/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3156"))
        })
    },
    [['TUIKit/components/TUIContact/contact-search/index-create-component']]
]);
