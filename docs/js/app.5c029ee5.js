(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},s=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a5cede88"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}o[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/sakura-front/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},2629:function(e,t,a){},"398f":function(e,t,a){"use strict";a("acf9")},"3bdd":function(e,t,a){},"47d3":function(e,t,a){"use strict";a("b401")},5293:function(e,t,a){"use strict";a("8fbc")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",["Login"!==e.$route.name?a("AppHeader"):e._e(),a("v-main",[a("router-view")],1),"Login"!==e.$route.name?a("AppFooter"):e._e()],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-toolbar-title",[e._v("サービス名")]),a("v-tabs",{attrs:{dark:""}},[e._l(e.menuItems,(function(t,n){return a("v-tab",{key:n,attrs:{to:t.url}},[e._v(" "+e._s(t.name)+" ")])})),a("v-tab",{on:{click:e.out}},[e._v(" ログアウト ")])],2)],1),a("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",[e._l(e.menuItems,(function(t,n){return a("v-list-item",{key:n,attrs:{to:t.url}},[a("v-list-item-title",[e._v(e._s(t.name))])],1)})),a("v-list-item",{on:{click:e.out}},[a("v-list-item-title",[e._v(" ログアウト ")])],1)],2)],1)],1)],1)},i=[],c={menuItems:[{name:"HOME",url:"/home"},{name:"メッセージ送信",url:"/send"},{name:"メッセージ履歴",url:"/received"}]},l=a("bc3a"),u=a.n(l),d=function(){return u.a.create({baseURL:"https://8caec69835d1.ngrok.io/v1"})},m={name:"AppHeader",data:function(){return{drawer:!1,menuItems:c.menuItems}},methods:{out:function(){var e=this;console.log("aaaaaaaaaaa"),d().delete("/auth/sign_out",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){console.log(t),localStorage.removeItem("uid"),localStorage.removeItem("access-token"),localStorage.removeItem("client"),console.log("ログアウト成功"),e.$router.push({name:"Login"})}))}}},f=m,v=(a("94fb"),a("2877")),p=a("6544"),h=a.n(p),g=a("40dc"),b=a("5bc1"),_=a("8860"),k=a("da13"),w=a("1baa"),x=a("5d23"),V=a("f774"),I=a("71a3"),S=a("fe57"),y=a("2a7f"),C=Object(v["a"])(f,r,i,!1,null,"f2ea7fb2",null),O=C.exports;h()(C,{VAppBar:g["a"],VAppBarNavIcon:b["a"],VList:_["a"],VListItem:k["a"],VListItemGroup:w["a"],VListItemTitle:x["b"],VNavigationDrawer:V["a"],VTab:I["a"],VTabs:S["a"],VToolbarTitle:y["a"]});var j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{dark:""}},[a("div",{staticClass:"footer"},[e._v(" SakuraProject ")])])},$=[],E=(a("398f"),a("553a")),T={},A=Object(v["a"])(T,j,$,!1,null,"6b4dfae4",null),L=A.exports;h()(A,{VFooter:E["a"]});var P={name:"App",components:{AppHeader:O,AppFooter:L}},M=P,H=(a("034f"),a("7496")),R=a("f6c4"),B=Object(v["a"])(M,o,s,!1,null,null,null),F=B.exports;h()(B,{VApp:H["a"],VMain:R["a"]});a("d3b7"),a("3ca3"),a("ddb0");var U=a("8c4f"),q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home"},[a("HomeAbout")],1)},N=[],G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-about"},[e._m(0),n("v-container",[n("v-row",{staticClass:"home-about__contents"},[n("v-col",{staticClass:"home-about__contents-img",attrs:{md:"5"}},[n("img",{staticClass:"img-fluid",attrs:{src:a("d442"),alt:""}})]),n("v-col",{staticClass:"home-about__contents-text",attrs:{md:"5"}},[n("p",[e._v("家族にメッセージを残しましょう")])])],1),n("AppButton",{attrs:{"button-text":e.buttonText,url:e.url}})],1)],1)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section__title"},[a("div",{staticClass:"section__title-text"},[e._v("メッセージ送信")])])}],J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"button"},[a("v-col",[a("v-btn",{attrs:{large:"",color:"error","min-width":"300",to:e.url}},[e._v(" ＞＞"+e._s(e.buttonText)+" ")])],1)],1)},K=[],z={props:{buttonText:{type:String,required:!0},url:{type:String,required:!0}}},Q=z,W=(a("98c3"),a("8336")),X=a("62ad"),Y=a("0fd9"),Z=Object(v["a"])(Q,J,K,!1,null,null,null),ee=Z.exports;h()(Z,{VBtn:W["a"],VCol:X["a"],VRow:Y["a"]});var te={data:function(){return{buttonText:"メッセージを書く",url:"/send"}},components:{AppButton:ee}},ae=te,ne=(a("b1b6"),a("a523")),oe=Object(v["a"])(ae,G,D,!1,null,"10f3c631",null),se=oe.exports;h()(oe,{VCol:X["a"],VContainer:ne["a"],VRow:Y["a"]});var re={components:{HomeAbout:se}},ie=re,ce=(a("dfb4"),Object(v["a"])(ie,q,N,!1,null,"2f98ce03",null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"login",attrs:{fluid:"","fill-height":""}},[e._v(" SAKURA TEST "),a("v-form",{attrs:{recontainerf:"checkForm"}},[a("v-row",[a("v-text-field",{attrs:{label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{staticClass:"mr-4",on:{click:e.signUp}},[e._v("新規登録")])],1),a("v-row",[a("v-text-field",{attrs:{label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{staticClass:"mr-4",on:{click:e.signIn}},[e._v("ログイン")])],1)],1)],1)},de=[],me={data:function(){return{name:"",email:"",password:"",title:"",content:"",tasks:[],comment:"",posts:[],user:{}}},methods:{signUp:function(){var e=this;d().post("/auth",{email:this.email,password:this.password}).then((function(t){localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers["client"]),localStorage.setItem("uid",t.headers["uid"]),e.user={uid:t.headers["uid"],"access-token":t.headers["access-token"],client:t.headers["client"]},e.$store.dispatch("userLogin",e.user)})),this.$store.commit("setMessage",{status:!1}),this.$router.push({name:"Home"})},signIn:function(){var e=this;d().post("/auth/sign_in",{email:this.email,password:this.password}).then((function(t){localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers["client"]),localStorage.setItem("uid",t.headers["uid"]),e.user={uid:t.headers["uid"],"access-token":t.headers["access-token"],client:t.headers["client"]},e.$store.dispatch("userLogin",e.user),e.$store.commit("setMessage",{status:!1}),e.email==t.headers["uid"]&&e.$router.push({name:"Home"})}))}}},fe=me,ve=(a("5293"),a("4bd4")),pe=a("8654"),he=Object(v["a"])(fe,ue,de,!1,null,"42847ffe",null),ge=he.exports;h()(he,{VBtn:W["a"],VContainer:ne["a"],VForm:ve["a"],VRow:Y["a"],VTextField:pe["a"]});var be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"about",attrs:{fluid:"","fill-height":""}},[a("v-row",[a("AppBackgroundHolder",{attrs:{head:e.head}})],1),a("v-row",[a("v-combobox",{attrs:{"item-text":"name","item-value":"id",items:e.adress,label:"宛先"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),a("v-row",[a("v-text-field",{attrs:{label:"何分後"},model:{value:e.time,callback:function(t){e.time=e._n(t)},expression:"time"}})],1),a("v-row",[a("v-text-field",{attrs:{label:"タイトル"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),a("v-row",[a("v-container",{attrs:{fluid:""}},[a("v-textarea",{attrs:{counter:"",label:"メッセージ",height:"300",value:e.value},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}})],1)],1),a("v-row",[a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:e.setPeople}},[e._v("送信する")])],1)],1),a("v-row",[e._v(" "+e._s(e.message)+" ")])],1)},_e=[],ke=a("5530"),we=(a("b0c0"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"background-holder__content",attrs:{fluid:"","fill-height":""}},[a("v-row",[a("v-col",{staticClass:"background-holder__content-text"},[a("p",[e._v(e._s(e.head))])])],1)],1)}),xe=[],Ve={props:{head:{type:String,required:!0}}},Ie=Ve,Se=(a("47d3"),Object(v["a"])(Ie,we,xe,!1,null,"344df3ae",null)),ye=Se.exports;h()(Se,{VCol:X["a"],VContainer:ne["a"],VRow:Y["a"]});var Ce=a("2f62"),Oe={data:function(){return{head:"メッセージ送信",value:"Hello",item_minutes:["0","1","2","3","4","5"],date:"2018-03-02",adress:[],select:[],to:[],body:[],time:[],title:[],message:{},user:""}},components:{AppBackgroundHolder:ye},computed:Object(ke["a"])({},Object(Ce["b"])(["user_token"])),mounted:function(){var e=this;d().get("/users",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}},console.log(this.user_token)).then((function(t){return e.adress=t.data,console.log(t)}))},methods:{setPeople:function(){var e=this;return this.message.to=this.select.name,this.adress.forEach((function(t){t.email==localStorage.getItem("uid")&&(e.message.from=t.name)})),this.message.title=this.title,this.message.body=this.body,this.message.time=this.time,console.log(this.message),d().post("/messages",this.message,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}),this.$store.commit("setMessage",{status:!0,message:"メッセージを送信しました"}),this.$router.push({name:"Home"}),this.message}}},je=Oe,$e=a("99d9"),Ee=a("2b5d"),Te=a("ce7e"),Ae=a("a844"),Le=Object(v["a"])(je,be,_e,!1,null,null,null),Pe=Le.exports;h()(Le,{VBtn:W["a"],VCardActions:$e["a"],VCombobox:Ee["a"],VContainer:ne["a"],VDivider:Te["a"],VRow:Y["a"],VTextField:pe["a"],VTextarea:Ae["a"]});var Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-list",e._l(e.messages,(function(t,n){return a("v-list-item",{key:n},[a("v-row",[a("v-col",{attrs:{sm:"11"}},[a("v-list-item",{on:{click:function(a){return e.showMessage(t)}}},[e._v(" "+e._s(t.from)+"さんからメッセージが届いています ")])],1),a("v-col",{attrs:{sm:"1"}},[a("v-btn",{attrs:{icon:""},on:{click:function(a){return e.deleteMessage(t)}}},[a("v-icon",[e._v(" mdi-delete ")])],1)],1)],1)],1)})),1)],1)},He=[],Re={data:function(){return{search:"",messages:{},recieved:{}}},mounted:function(){var e=this;d().get("/searches",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t.data),e.messages=t.data}))},methods:{deleteMessage:function(e){d().delete("/messages/".concat(e.id),{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}})},showMessage:function(e){this.$router.push({name:"Message",params:{content:e}})}}},Be=Re,Fe=a("132d"),Ue=Object(v["a"])(Be,Me,He,!1,null,null,null),qe=Ue.exports;h()(Ue,{VBtn:W["a"],VCol:X["a"],VContainer:ne["a"],VIcon:Fe["a"],VList:_["a"],VListItem:k["a"],VRow:Y["a"]});var Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{fluid:""}},[a("v-card-title",[e._v(" "+e._s(e.message.from)+" ")]),a("v-card-title",[e._v(" 送信時間：10分前 ")]),a("v-card-title",[e._v(" タイトル : "+e._s(e.message.title)+" ")]),e._v(" 内容 "),a("v-card-text",{attrs:{flat:""}},[e._v(" "+e._s(e.message.body)+" ")])],1)},Ge=[],De={data:function(){return{message:{}}},mounted:function(){this.message=this.$route.params.content,console.log(this.$route.params.content)}},Je=De,Ke=a("b0af"),ze=Object(v["a"])(Je,Ne,Ge,!1,null,null,null),Qe=ze.exports;h()(ze,{VCard:Ke["a"],VCardText:$e["b"],VCardTitle:$e["c"]}),n["a"].use(U["a"]);var We=[{path:"/",name:"Login",component:ge,meta:{isPublic:!0}},{path:"/home",name:"Home",component:le},{path:"/send",name:"Send",component:Pe},{path:"/received",name:"Received",component:qe},{path:"/message",name:"Message",component:Qe},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Xe=new U["a"]({mode:"history",base:"/sakura-front/",routes:We});Xe.beforeEach((function(e,t,a){e.matched.some((function(e){return!e.meta.isPublic}))&&!localStorage.getItem("access-token")?a({name:"Login",query:{redirect:e.fullPath}}):a()}));var Ye=Xe,Ze=a("1da1"),et=(a("96cf"),a("0e44"));n["a"].use(Ce["a"]);var tt=new Ce["a"].Store({state:{user_token:{uid:"","access-token":"",client:""},flash_message:{status:!1,messasge:""}},mutations:{USER_LOGIN:function(e,t){e.user_token=t},setMessage:function(e,t){e.flash_message=t}},actions:{userLogin:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,n("USER_LOGIN",t),a.abrupt("return",t);case 3:case"end":return a.stop()}}),a)})))()}},plugins:[Object(et["a"])({})],modules:{}}),at=a("f309");n["a"].use(at["a"]);var nt=new at["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Ye,store:tt,vuetify:nt,render:function(e){return e(F)}}).$mount("#app")},8582:function(e,t,a){},"85ec":function(e,t,a){},"8fbc":function(e,t,a){},"94fb":function(e,t,a){"use strict";a("8582")},"98c3":function(e,t,a){"use strict";a("3bdd")},acf9:function(e,t,a){},b1b6:function(e,t,a){"use strict";a("d70c")},b401:function(e,t,a){},d442:function(e,t,a){e.exports=a.p+"img/family1.5e40ee0a.png"},d70c:function(e,t,a){},dfb4:function(e,t,a){"use strict";a("2629")}});
//# sourceMappingURL=app.5c029ee5.js.map