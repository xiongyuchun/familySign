require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["TUIKit/components/common/Icon"],{"45bc":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("2ab0"),r=i("d31c"),u={};u.props={file:{key:"file",required:!1,type:String,default:""},size:{key:"size",required:!1,type:String},width:{key:"width",required:!1,type:String,default:"20px"},height:{key:"height",required:!1,type:String,default:"20px"},hotAreaSize:{key:"hotAreaSize",required:!1,type:[Number,String]}},u.setup=function(e,t){var i=t.emit,u=e,o=(0,n.computed)((function(){if(u.hotAreaSize)return isNaN(Number(u.hotAreaSize))?String(u.hotAreaSize):"".concat(u.hotAreaSize,"px")})),c=(0,n.computed)((function(){return u.size?u.size:u.width})),a=(0,n.computed)((function(){return u.size?u.size:u.height}));return{isApp:r.isApp,isPC:r.isPC,props:u,iconHotAreaSize:o,iconWidth:c,iconHeight:a,handleImgClick:function(e){i("onClick",e)}}};var o=u;t.default=o},"6fd1":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this.$createElement;this._self._c},r=[]},"79d9":function(e,t,i){},b2b2:function(e,t,i){"use strict";i.r(t);var n=i("45bc"),r=i.n(n);for(var u in n)["default"].indexOf(u)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(u);t["default"]=r.a},b388:function(e,t,i){"use strict";var n=i("79d9"),r=i.n(n);r.a},b42b:function(e,t,i){"use strict";i.r(t);var n=i("6fd1"),r=i("b2b2");for(var u in r)["default"].indexOf(u)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(u);i("b388");var o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"4cd7fc6a",null,!1,n["a"],void 0);t["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'TUIKit/components/common/Icon-create-component',
    {
        'TUIKit/components/common/Icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b42b"))
        })
    },
    [['TUIKit/components/common/Icon-create-component']]
]);
