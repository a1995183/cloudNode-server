webpackJsonp([0],{AtFq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{content:[]}},methods:{getData:function(){var t=this;this.$axios.get("/article/"+this.$route.params.id).then(function(e){t.content=e.data,console.log(t.content)})}},created:function(){this.getData()}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.content.author?n("div",{staticClass:"body-content"},[n("div",{staticClass:"left-img"},[n("img",{attrs:{width:"140",height:"140",src:t.content.author.avatar}})]),t._v(" "),n("div",{staticClass:"right-text"},[n("p",{staticStyle:{"font-size":"16px"}},[t._v("\r\n            作者："),n("span",{staticClass:"name",staticStyle:{"font-weight":"400",color:"#409eff"},domProps:{textContent:t._s(t.content.author.username)}}),t._v(" "),n("i",{staticStyle:{"border-left":"1px solid #333",margin:"0 5px"}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.content.title)}})]),t._v(" "),n("span",{domProps:{textContent:t._s(t.content.createdTime)}}),t._v(" "),n("p",{staticClass:"lll"},[t._v("浏览："+t._s(t.content.readnumber)+"回复："+t._s(t.content.commonnum)+"分类："+t._s(t.content.category.name))])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"bottom-last",domProps:{innerHTML:t._s(t.content.content)}})]):t._e()},staticRenderFns:[]};var s=n("VU/8")(a,o,!1,function(t){n("rb6E")},"data-v-f8a7851c",null);e.default=s.exports},rb6E:function(t,e){}});
//# sourceMappingURL=0.b595197e74220eefce07.js.map