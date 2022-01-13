(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["overview"],{"0bc6":function(t,e,i){},2226:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"#E39623",dark:"","shrink-on-scroll":"",prominent:"",src:i("ec24"),height:"300","fade-img-on-scroll":""},scopedSlots:t._u([null],null,!0)},[a("v-app-bar-title",{staticClass:"text-no-wrap app-title"},[t._v("Camping Electric Calculator")]),a("v-spacer"),a("v-spacer"),a("v-btn",{attrs:{icon:"",href:"https://www.youtube.com/channel/UC1WhvBxYkiGQlAO6YR7uEQQ",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-youtube")])],1),a("v-btn",{attrs:{icon:"",href:"https://github.com/freegroup/CampingElectricCalculator",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-github")])],1)],1),a("v-main",[a("v-container",[a("h1",[t._v("How to size your electrical system")]),a("v-container",[t._v(" Size of the solar system on the motorhome in practice Since not everyone knows their energy needs ahead of time, I'd like to give you a few avatars or pointers here. ")]),t._l(t.profiles,(function(e,i){return[a("v-card",{key:"profile"+i,staticClass:"mx-auto mb-10"},[a("v-card-title",[a("v-icon",{staticClass:"mr-4 pink--text"},[t._v("mdi-account")]),t._v(" "+t._s(t.$t("profile."+e.name+".name")))],1),a("v-card-subtitle",[t._v(t._s(t.$t("profile."+e.name+".description")))]),a("v-divider"),a("v-subheader",[t._v("Suggested Setups")]),a("v-list",{attrs:{"two-line":""}},[t._l(e.setups,(function(e,i){return a("v-list-item",{key:i,attrs:{to:{path:"/map/"+e.id}}},[a("v-list-item-avatar",[a("v-icon",{staticClass:"grey yellow--text lighten-1"},[t._v("mdi-white-balance-sunny")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.label))]),a("v-list-item-subtitle",[t._v("Estimated Cost: "+t._s(t.cost(e)))])],1)],1)})),a("v-list-item",{attrs:{to:{path:"/map/new"}}},[a("v-list-item-avatar",[a("v-icon",{staticClass:"grey yellow--text lighten-1"},[t._v("mdi-plus")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Create your own.....")]),a("v-list-item-subtitle")],1)],1)],2)],1)]})),a("h3",[t._v("Disclaimer")]),a("v-container",[t._v(" But as it is with software and the dear people....they can be faulty. So see the tool here as a support and not as the absolute truth. Better calculate again. ")]),a("v-container",{staticStyle:{height:"1000px"}})],2)],1),a("v-footer",{attrs:{app:""}},[t._v(" Bugreports are always welcome and the errors will of course be fixed. "),a("v-btn",{attrs:{icon:"",href:"https://github.com/freegroup/CampingElectricCalculator/issues",target:"_blank"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)},s=[],n=i("5530"),r=(i("b680"),i("2f62")),o={name:"Overview",components:{},methods:{cost:function(t){var e=t.config.price;return e?e.low===e.high?e.low.toFixed(2)+" €":e.low.toFixed(2)+" - "+e.high.toFixed(2)+" €":" - "}},computed:Object(n["a"])({},Object(r["b"])({profiles:function(t){return t.profile.all}}))},c=o,l=(i("9bde"),i("2877")),d=i("6544"),u=i.n(d),p=i("7496"),h=i("40dc"),f=i("3206"),v=i("80d2"),b=i("0246"),m=Object(f["a"])("VAppBar","v-app-bar-title","v-app-bar"),g=m.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,i=Object(b["easeInOutCubic"])(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(v["g"])(t+(e-t)*i),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}}),y=i("8336"),_=i("b0af"),w=i("99d9"),C=i("a523"),O=i("ce7e"),j=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),x=i("3a66"),V=i("d10f"),B=i("58df"),k=Object(B["a"])(j["a"],Object(x["a"])("footer",["height","inset"]),V["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(n["a"])(Object(n["a"])({},j["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(n["a"])(Object(n["a"])({},j["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(v["g"])(t),left:Object(v["g"])(this.computedLeft),right:Object(v["g"])(this.computedRight),bottom:Object(v["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),S=i("132d"),$=i("adda"),A=i("8860"),I=i("da13"),P=i("8270"),L=i("5d23"),W=i("f6c4"),E=i("2fa4"),R=i("e0c7"),D=Object(l["a"])(c,a,s,!1,null,null,null);e["default"]=D.exports;u()(D,{VApp:p["a"],VAppBar:h["a"],VAppBarTitle:g,VBtn:y["a"],VCard:_["a"],VCardSubtitle:w["b"],VCardTitle:w["d"],VContainer:C["a"],VDivider:O["a"],VFooter:k,VIcon:S["a"],VImg:$["a"],VList:A["a"],VListItem:I["a"],VListItemAvatar:P["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VMain:W["a"],VSpacer:E["a"],VSubheader:R["a"]})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var a=i("b0af"),s=i("80d2"),n=Object(s["i"])("v-card__actions"),r=Object(s["i"])("v-card__subtitle"),o=Object(s["i"])("v-card__text"),c=Object(s["i"])("v-card__title");a["a"]},"9bde":function(t,e,i){"use strict";i("b23c")},a523:function(t,e,i){"use strict";i("4de4"),i("d3b7"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var a=i("2b0e");function s(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var a=i.props,s=i.data,n=i.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var r=s.attrs;if(r){s.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,n)}})}var n=i("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,s=e.data,r=e.children,o=s.attrs;return o&&(s.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),r)}})},b23c:function(t,e,i){},b5b6:function(t,e,i){},e0c7:function(t,e,i){"use strict";var a=i("5530"),s=(i("0bc6"),i("7560")),n=i("58df");e["a"]=Object(n["a"])(s["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(a["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},ec24:function(t,e,i){t.exports=i.p+"img/banner.a279e643.png"}}]);
//# sourceMappingURL=overview.22761d2a.js.map