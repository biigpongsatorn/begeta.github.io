webpackJsonp([31],{DCsE:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".is-bd-top[data-v-747d9941]{border-top:1px solid #dbdbdb}.is-bd-right[data-v-747d9941]{border-right:1px solid #dbdbdb}.is-bd-bottom[data-v-747d9941]{border-bottom:1px solid #dbdbdb}.is-bd-left[data-v-747d9941]{border-left:1px solid #dbdbdb}.cl-777[data-v-747d9941]{color:#777}",""])},L26m:function(t,e,s){"use strict";var a=s("xWb7"),i=s("oOol"),n=!1;var r=function(t){n||s("omsQ")},o=s("VU/8")(a.a,i.a,!1,r,"data-v-747d9941",null);o.options.__file="components\\TableAtomic.vue",e.a=o.exports},Lwyv:function(t,e,s){"use strict";var a=s("oxj4"),i=s("M9Kf"),n=s("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="components\\Responsive.vue",e.a=n.exports},M9Kf:function(t,e,s){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("table-atomic",{attrs:{data:this.responsive_data}})],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},RP7H:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pd-10px"},[s("h1",[t._v("Justify Content")]),s("div",[t._v("เป็น Atomic Class ที่ใช้จัดการ การกระจาย Content ด้านใน Container ใช้ Justify Content เพื่อจัดในแกน Main-Axis")]),s("h3",[t._v("Property")]),s("table-atomic",{attrs:{data:t.property}}),s("h3",[t._v("Value")]),s("table-atomic",{attrs:{data:t.value}}),t._m(0),s("responsive"),t._m(1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Responsive "),e("span",{staticClass:"cl-success"},[this._v("YES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Hover "),e("span",{staticClass:"cl-danger"},[this._v("NO")])])}]};e.a=i},i5w3:function(t,e,s){"use strict";var a=s("L26m"),i=s("Lwyv");e.a={components:{TableAtomic:a.a,Responsive:i.a},data:function(){return{property:[["Class","jtf-ct-[value]-[responsive]"],["Property","justify-content"]],value:{class:["Class","start","end","left","right","flex-start","flex-end","strecth","space-between","space-around","space-evenly"],description:["Value Description",'สำหรับ "start"','สำหรับ "end"','สำหรับ "left"','สำหรับ "right"','สำหรับ "flex-start"','สำหรับ "flex-end"','สำหรับ "strecth"','สำหรับ "space-between"','สำหรับ "space-around"','สำหรับ "space-evenly"']}}}}},oGFR:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("i5w3"),i=s("RP7H"),n=s("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="pages\\alignment\\justifycontent.vue",e.default=n.exports},oOol:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dp-flex mg-5px"},t._l(t.data,function(e,a){return s("div",{key:a,staticClass:"dp-flex f-drt-column w-40pct is-bd-bottom",class:{"is-bd-right":0!==a}},t._l(e,function(e,a){return s("div",{key:a,staticClass:"is-bd-top is-bd-left pd-5px h-45px pd-10px"},[t.isColorCode(e)?s("div",[s("div",{staticClass:"f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px",style:{backgroundColor:e}}),s("div",{staticClass:"f-left pd-t-5px pd-l-10px",class:{"f-w-bold cl-black":0===a,"cl-777":0!==a}},[t._v(t._s(e))])]):s("span",{class:{"f-w-bold cl-black":0===a,"cl-777":0!==a}},[t._v(t._s(e))])])}))}))};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},omsQ:function(t,e,s){var a=s("DCsE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("1ed64a89",a,!1,{sourceMap:!1})},oxj4:function(t,e,s){"use strict";var a=s("L26m");e.a={components:{TableAtomic:a.a},data:function(){return{responsive_data:[["Class","mobile","tablet","desktop","widescreen"],["Breakpoints","up to 768px","from 769px","from 1024px","from 1408px"]]}}}},xWb7:function(t,e,s){"use strict";e.a={props:["data"],methods:{isColorCode:function(t){return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(t)}}}}});