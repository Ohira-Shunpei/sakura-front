(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a5cede88"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}s[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/sakura-front/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0000":function(e,t,a){"use strict";a("e2cc1")},"01c4":function(e,t,a){"use strict";a("ceb6")},"034f":function(e,t,a){"use strict";a("85ec")},"12ee":function(e,t,a){"use strict";a("6656")},"1d0a":function(e,t,a){e.exports=a.p+"img/post.d5d76fd2.jpg"},3568:function(e,t,a){"use strict";a("682a")},"398f":function(e,t,a){"use strict";a("acf9")},5336:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",["Login"!==e.$route.name?a("AppHeader"):e._e(),a("v-main",[a("router-view")],1),"Login"!==e.$route.name?a("AppFooter"):e._e()],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-toolbar-title",[e._v("サービス名")]),a("v-tabs",{attrs:{dark:""}},[e._l(e.menuItems,(function(t,n){return a("v-tab",{key:n,attrs:{to:t.url}},[e._v(" "+e._s(t.name)+" ")])})),a("v-tab",[e._v(" ログアウト ")])],2)],1),a("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",[e._l(e.menuItems,(function(t,n){return a("v-list-item",{key:n,attrs:{to:t.url}},[a("v-list-item-title",[e._v(e._s(t.name))])],1)})),a("v-list-item",{on:{click:e.out}},[a("v-list-item-title",[e._v(" ログアウト ")])],1)],2)],1)],1)],1)},i=[],c={menuItems:[{name:"HOME",url:"/home"},{name:"メッセージ送信",url:"/send"},{name:"メッセージ履歴",url:"/received"}]},l=a("bc3a"),u=a.n(l),d=function(){return u.a.create({baseURL:"https://3.112.29.58/v1"})},m={name:"AppHeader",data:function(){return{drawer:!1,menuItems:c.menuItems}},methods:{out:function(){var e=this;console.log("aaaaaaaaaaa"),d().delete("/auth/sign_out",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){console.log(t),localStorage.removeItem("uid"),localStorage.removeItem("access-token"),localStorage.removeItem("client"),console.log("ログアウト成功"),e.$router.push({name:"Login"})}))}}},f=m,v=(a("bd77"),a("2877")),p=a("6544"),h=a.n(p),g=a("40dc"),b=a("5bc1"),_=a("8860"),k=a("da13"),w=a("1baa"),x=a("5d23"),I=a("f774"),V=a("71a3"),y=a("fe57"),S=a("2a7f"),O=Object(v["a"])(f,r,i,!1,null,"0a07c66b",null),j=O.exports;h()(O,{VAppBar:g["a"],VAppBarNavIcon:b["a"],VList:_["a"],VListItem:k["a"],VListItemGroup:w["a"],VListItemTitle:x["b"],VNavigationDrawer:I["a"],VTab:V["a"],VTabs:y["a"],VToolbarTitle:S["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{dark:""}},[a("div",{staticClass:"footer"},[e._v(" SakuraProject ")])])},$=[],L=(a("398f"),a("553a")),E={},A=Object(v["a"])(E,C,$,!1,null,"6b4dfae4",null),P=A.exports;h()(A,{VFooter:L["a"]});var M={name:"App",components:{AppHeader:j,AppFooter:P}},T=M,H=(a("034f"),a("7496")),R=a("f6c4"),B=Object(v["a"])(T,s,o,!1,null,null,null),F=B.exports;h()(B,{VApp:H["a"],VMain:R["a"]});a("d3b7"),a("3ca3"),a("ddb0");var U=a("8c4f"),N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home"},[a("HomeAbout")],1)},q=[],D=a("90d2"),G={components:{HomeAbout:D["default"]}},J=G,K=(a("0000"),Object(v["a"])(J,N,q,!1,null,"5d84cf4a",null)),z=K.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"login",attrs:{fluid:"","fill-height":""}},[e._v(" SAKURA "),a("v-form",{attrs:{recontainerf:"checkForm"}},[a("v-row",[a("v-text-field",{attrs:{label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{staticClass:"mr-4",on:{click:e.signUp}},[e._v("新規登録")])],1),a("v-row",[a("v-text-field",{attrs:{label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{staticClass:"mr-4",on:{click:e.signIn}},[e._v("ログイン")])],1)],1)],1)},W=[],X={data:function(){return{name:"",email:"",password:"",title:"",content:"",tasks:[],comment:"",posts:[],user:{}}},methods:{signUp:function(){var e=this;d().post("/auth",{email:this.email,password:this.password}).then((function(t){localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers["client"]),localStorage.setItem("uid",t.headers["uid"]),e.user={uid:t.headers["uid"],"access-token":t.headers["access-token"],client:t.headers["client"]},console.log(e.user),console.log(e.user),e.$store.dispatch("userLogin",e.user),e.$store.commit("setMessage",{status:!1}),e.email==t.headers["uid"]&&e.$router.push({name:"Home"})}))},signIn:function(){var e=this;console.log(this.email),console.log(this.password),d().post("/auth/sign_in",{email:this.email,password:this.password}).then((function(t){console.log(t),localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers["client"]),localStorage.setItem("uid",t.headers["uid"]),e.user={uid:t.headers["uid"],"access-token":t.headers["access-token"],client:t.headers["client"]},e.$store.dispatch("userLogin",e.user),e.$store.commit("setMessage",{status:!1}),e.email==t.headers["uid"]&&e.$router.push({name:"Home"})}))}}},Y=X,Z=(a("12ee"),a("8336")),ee=a("a523"),te=a("4bd4"),ae=a("0fd9"),ne=a("8654"),se=Object(v["a"])(Y,Q,W,!1,null,"db258fba",null),oe=se.exports;h()(se,{VBtn:Z["a"],VContainer:ee["a"],VForm:te["a"],VRow:ae["a"],VTextField:ne["a"]});var re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"about",attrs:{fluid:"","fill-height":""}},[a("v-row",[a("AppBackgroundHolder",{attrs:{head:e.head}})],1),a("v-row",[a("v-combobox",{attrs:{"item-text":"name","item-value":"id",items:e.adress,label:"宛先"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),a("v-row",[a("v-text-field",{attrs:{label:"何分後"},model:{value:e.time,callback:function(t){e.time=e._n(t)},expression:"time"}})],1),a("v-row",[a("v-text-field",{attrs:{label:"タイトル"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),a("v-row",[a("v-container",{attrs:{fluid:""}},[a("v-textarea",{attrs:{counter:"",label:"メッセージ",height:"300",value:e.value},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}})],1)],1),a("v-row",[a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:e.setPeople}},[e._v("送信する")])],1)],1),a("v-row",[e._v(" "+e._s(e.message)+" ")])],1)},ie=[],ce=a("5530"),le=(a("b0c0"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"background-holder__content",attrs:{fluid:"","fill-height":""}},[a("v-col",{staticClass:"background-holder__content-text"},[a("p",[e._v(e._s(e.head))])])],1)}),ue=[],de={props:{head:{type:String,required:!0}}},me=de,fe=(a("3568"),a("62ad")),ve=Object(v["a"])(me,le,ue,!1,null,"b20ea5b4",null),pe=ve.exports;h()(ve,{VCol:fe["a"],VContainer:ee["a"]});var he=a("2f62"),ge={data:function(){return{head:"メッセージ送信",value:"Hello",item_minutes:["0","1","2","3","4","5"],date:"2018-03-02",adress:[],select:[],to:[],body:[],time:[],title:[],message:{},user:""}},components:{AppBackgroundHolder:pe},computed:Object(ce["a"])({},Object(he["b"])(["user_token"])),mounted:function(){var e=this;d().get("/users",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}},console.log(this.user_token)).then((function(t){return e.adress=t.data,console.log(t)}))},methods:{setPeople:function(){var e=this;return this.message.to=this.select.name,this.adress.forEach((function(t){t.email==localStorage.getItem("uid")&&(e.message.from=t.name)})),this.message.title=this.title,this.message.body=this.body,this.message.time=this.time,console.log(this.message),d().post("/messages",this.message,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}),this.$store.commit("setMessage",{status:!0,message:"メッセージを送信しました"}),this.$router.push({name:"Home"}),this.message}}},be=ge,_e=a("99d9"),ke=a("2b5d"),we=a("ce7e"),xe=a("a844"),Ie=Object(v["a"])(be,re,ie,!1,null,null,null),Ve=Ie.exports;h()(Ie,{VBtn:Z["a"],VCardActions:_e["a"],VCombobox:ke["a"],VContainer:ee["a"],VDivider:we["a"],VRow:ae["a"],VTextField:ne["a"],VTextarea:xe["a"]});var ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-list",[e._l(e.messages,(function(t,n){return[a("v-list-item",{key:n,on:{click:function(a){return e.showMessage(t)}}},[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.from)+"さんからメッセージが届いています ")])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:function(a){return e.deleteMessage(t)}}},[a("v-icon",[e._v(" mdi-delete ")])],1)],1)],1),n+1<e.messages.length?a("v-divider",{key:"divider-"+n}):e._e()]}))],2)],1)],1)},Se=[],Oe={data:function(){return{search:"",messages:{},recieved:{}}},mounted:function(){var e=this;d().get("/searches",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.messages=t.data}))},methods:{deleteMessage:function(e){d().delete("/messages/".concat(e.id),{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}})},showMessage:function(e){this.$router.push({name:"Message",params:{content:e}})}}},je=Oe,Ce=a("b0af"),$e=a("132d"),Le=a("1800"),Ee=Object(v["a"])(je,ye,Se,!1,null,null,null),Ae=Ee.exports;h()(Ee,{VBtn:Z["a"],VCard:Ce["a"],VContainer:ee["a"],VDivider:we["a"],VIcon:$e["a"],VList:_["a"],VListItem:k["a"],VListItemAction:Le["a"],VListItemContent:x["a"],VListItemTitle:x["b"]});var Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{fluid:""}},[a("v-card-title",[e._v(" "+e._s(e.message.from)+" ")]),a("v-card-title",[e._v(" 送信時間：10分前 ")]),a("v-card-title",[e._v(" タイトル : "+e._s(e.message.title)+" ")]),e._v(" 内容 "),a("v-card-text",{attrs:{flat:""}},[e._v(" "+e._s(e.message.body)+" ")])],1)},Me=[],Te={data:function(){return{message:{}}},mounted:function(){this.message=this.$route.params.content,console.log(this.$route.params.content)}},He=Te,Re=Object(v["a"])(He,Pe,Me,!1,null,null,null),Be=Re.exports;h()(Re,{VCard:Ce["a"],VCardText:_e["b"],VCardTitle:_e["c"]}),n["a"].use(U["a"]);var Fe=[{path:"/",name:"Login",component:oe,meta:{isPublic:!0}},{path:"/home",name:"Home",component:z},{path:"/send",name:"Send",component:Ve},{path:"/received",name:"Received",component:Ae},{path:"/message",name:"Message",component:Be},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Ue=new U["a"]({mode:"history",base:"/sakura-front/",routes:Fe});Ue.beforeEach((function(e,t,a){e.matched.some((function(e){return!e.meta.isPublic}))&&!localStorage.getItem("access-token")?a({name:"Login",query:{redirect:e.fullPath}}):a()}));var Ne=Ue,qe=a("1da1"),De=(a("96cf"),a("0e44"));n["a"].use(he["a"]);var Ge=new he["a"].Store({state:{user_token:{uid:"","access-token":"",client:""},flash_message:{status:!1,messasge:""}},mutations:{USER_LOGIN:function(e,t){e.user_token=t},setMessage:function(e,t){e.flash_message=t}},actions:{userLogin:function(e,t){return Object(qe["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,n("USER_LOGIN",t),a.abrupt("return",t);case 3:case"end":return a.stop()}}),a)})))()}},plugins:[Object(De["a"])({})],modules:{}}),Je=a("f309");n["a"].use(Je["a"]);var Ke=new Je["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Ne,store:Ge,vuetify:Ke,render:function(e){return e(F)}}).$mount("#app")},"634f":function(e,t,a){},6656:function(e,t,a){},"682a":function(e,t,a){},8244:function(e,t,a){"use strict";var n=a("5336"),s=a.n(n);t["default"]=s.a},"85ec":function(e,t,a){},"90d2":function(e,t,a){"use strict";var n=a("d12b"),s=a("8244"),o=(a("01c4"),a("2877")),r=a("6544"),i=a.n(r),c=a("62ad"),l=a("a523"),u=a("0fd9"),d=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"5ffea618",null);t["default"]=d.exports,i()(d,{VCol:c["a"],VContainer:l["a"],VRow:u["a"]})},acf9:function(e,t,a){},bd77:function(e,t,a){"use strict";a("634f")},ceb6:function(e,t,a){},d12b:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-about"},[e._m(0),n("v-container",[n("v-row",[n("v-col",{attrs:{md:"7"}},[n("img",{attrs:{src:a("d442")}})]),n("v-col",{attrs:{md:"5"}},[n("img",{attrs:{src:a("1d0a"),width:"400",height:"300"}})])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section__title"},[a("div",{staticClass:"section__title-text"},[e._v("未来へメッセージを送りましょう")])])}]},d442:function(e,t,a){e.exports=a.p+"img/family1.5e40ee0a.png"},e2cc1:function(e,t,a){}});
//# sourceMappingURL=app.3702b361.js.map