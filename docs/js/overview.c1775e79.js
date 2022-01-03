(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["overview"],{2226:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-system-bar",{attrs:{height:"30"}},[t._v("fffffff")]),a("v-app-bar",{attrs:{app:"",color:"#E39623",dark:"","shrink-on-scroll":"",prominent:"",src:i("ec24"),height:"300","fade-img-on-scroll":""},scopedSlots:t._u([null],null,!0)},[a("v-app-bar-title",{staticClass:"text-no-wrap app-title"},[t._v("Camping Electric Calculator")]),a("v-spacer"),a("v-spacer"),a("v-btn",{attrs:{icon:"",href:"https://www.youtube.com/channel/UC1WhvBxYkiGQlAO6YR7uEQQ",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-youtube")])],1),a("v-btn",{attrs:{icon:"",href:"https://github.com/freegroup/CampingElectricCalculator",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-github")])],1)],1),a("v-main",[a("v-container",[a("h1",[t._v("How to wire a Campervan")]),a("h3",[t._v("How to size your electrical system")]),a("v-container",[t._v(" Wiring and installing the electrical system is probably one of the most complicated and daunting tasks in a van conversion. I've spent a lot of time reading blog posts, forum comments, and watching YouTube videos to see if there are any really good how-to guides out there. In fact, there are a lot. ")]),a("v-container",[t._v(" But all of them explains how to figure it all out by hand or by exel sheets. "),a("b",[t._v("But why calculate everything again and again by hand if you can use software for it")]),t._v(". I'm not really a fan of excel lists though. That's why I built a tool with which you can simply model your electrical system in a MindMap and in the background, it calculates whether the components harmonize and fit. ")]),a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"350"}},[a("v-img",{attrs:{src:i("2d50"),height:"200px"}}),a("v-card-title",[t._v("Get the correct sizing")]),a("v-card-subtitle",[t._v("Connect your components in a mind map and calculate if the components are well dimensioned.")]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange lighten-2",to:{path:"/map"},text:""}},[t._v("Start")]),a("v-spacer")],1)],1)],1),a("v-flex",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"350"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),a("v-card-title",[t._v("Top western road trips")]),a("v-card-subtitle",[t._v("1,000 miles of wonder")]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange lighten-2",text:""}},[t._v("Explore")]),a("v-spacer")],1)],1)],1)],1)],1),a("h3",[t._v("Disclaimer")]),a("v-container",[t._v(" But as it is with software and the dear people....they can be faulty. So see the tool here as a support and not as the absolute truth. Better calculate again. ")]),a("v-container",{staticStyle:{height:"1000px"}})],1)],1),a("v-footer",{attrs:{app:""}},[t._v(" Bugreports are always welcome and the errors will of course be fixed. "),a("v-btn",{attrs:{icon:"",href:"https://github.com/freegroup/CampingElectricCalculator/issues",target:"_blank"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)},s=[],n={name:"Overview",components:{}},o=n,r=(i("9bde"),i("2877")),c=i("6544"),l=i.n(c),h=i("7496"),d=i("40dc"),u=i("3206"),p=i("80d2"),f=i("0246"),v=Object(u["a"])("VAppBar","v-app-bar-title","v-app-bar"),b=v.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,i=Object(f["easeInOutCubic"])(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(p["g"])(t+(e-t)*i),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}}),m=i("8336"),g=i("b0af"),y=i("99d9"),w=(i("4de4"),i("d3b7"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b"),i("2b0e"));function x(t){return w["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var a=i.props,s=i.data,n=i.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var o=s.attrs;if(o){s.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(s.staticClass+=" ".concat(r.join(" ")))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,n)}})}var _=i("d9f7"),C=x("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,s=e.data,n=e.children,o=s.attrs;return o&&(s.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,Object(_["a"])(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),n)}}),O=x("flex"),j=i("5530"),B=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),V=i("3a66"),k=i("d10f"),$=i("58df"),S=Object($["a"])(B["a"],Object(V["a"])("footer",["height","inset"]),k["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(j["a"])(Object(j["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(j["a"])(Object(j["a"])({},B["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(p["g"])(t),left:Object(p["g"])(this.computedLeft),right:Object(p["g"])(this.computedRight),bottom:Object(p["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),A=i("132d"),I=i("adda"),P=x("layout"),W=i("f6c4"),N=i("2fa4"),E=(i("8308"),i("a9ad")),H=i("7560"),R=Object($["a"])(Object(V["a"])("bar",["height","window"]),E["a"],H["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return Object(j["a"])({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(p["g"])(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),Object(p["m"])(this))}}),T=Object(r["a"])(o,a,s,!1,null,null,null);e["default"]=T.exports;l()(T,{VApp:h["a"],VAppBar:d["a"],VAppBarTitle:b,VBtn:m["a"],VCard:g["a"],VCardActions:y["a"],VCardSubtitle:y["b"],VCardTitle:y["d"],VContainer:C,VFlex:O,VFooter:S,VIcon:A["a"],VImg:I["a"],VLayout:P,VMain:W["a"],VSpacer:N["a"],VSystemBar:R})},"2d50":function(t,e,i){t.exports=i.p+"img/mindmap.b4f1ffef.png"},"4b85":function(t,e,i){},8308:function(t,e,i){},"9bde":function(t,e,i){"use strict";i("b23c")},b23c:function(t,e,i){},b5b6:function(t,e,i){},ec24:function(t,e,i){t.exports=i.p+"img/banner.a279e643.png"}}]);
//# sourceMappingURL=overview.c1775e79.js.map