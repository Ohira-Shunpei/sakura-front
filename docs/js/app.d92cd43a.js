(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/sakura-front/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0a5b":function(e,t,a){"use strict";a("24ab")},"24ab":function(e,t,a){},"25be":function(e,t,a){},"2a37":function(e,t,a){"use strict";a("5ccf")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",["Login"!==e.$route.name?a("AppHeader"):e._e(),a("v-main",{class:{bg:e.isActive}},[a("router-view")],1)],1)},o=[],s=(a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-toolbar-title",[e._v("SAKURA")]),a("v-tabs",{attrs:{dark:""}},[e._l(e.menuItems,(function(t,n){return a("v-tab",{key:n,attrs:{to:t.url}},[e._v(" "+e._s(t.name)+" ")])})),a("v-tab",{on:{click:e.out}},[e._v(" ログアウト ")])],2)],1),a("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",[e._l(e.menuItems,(function(t,n){return a("v-list-item",{key:n,attrs:{to:t.url}},[a("v-list-item-title",[e._v(e._s(t.name))])],1)})),a("v-list-item",{on:{click:e.out}},[a("v-list-item-title",[e._v(" ログアウト ")])],1)],2)],1)],1)],1)}),i=[],c={menuItems:[{name:"HOME",url:"/home"},{name:"送信",url:"/send"},{name:"受信",url:"/timeline"},{name:"プロフィール",url:"/profile"},{name:"フレンド申請",url:"/showrequest"}]},l=a("bc3a"),u=a.n(l),d=function(){return u.a.create({baseURL:"https://13.114.43.226/v1"})},m={name:"AppHeader",data:function(){return{drawer:!1,menuItems:c.menuItems}},methods:{out:function(){var e=this;console.log("aaaaaaaaaaa"),d().delete("/auth/sign_out",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){console.log(t),localStorage.removeItem("uid"),localStorage.removeItem("access-token"),localStorage.removeItem("client"),console.log("ログアウト成功"),e.$router.push({name:"Login"})}))}}},v=m,g=(a("7f4e"),a("2877")),h=a("6544"),f=a.n(h),p=a("40dc"),b=a("5bc1"),_=a("8860"),k=a("da13"),I=a("1baa"),w=a("5d23"),S=a("f774"),V=a("71a3"),x=a("fe57"),y=a("2a7f"),C=Object(g["a"])(v,s,i,!1,null,"e18c9832",null),L=C.exports;f()(C,{VAppBar:p["a"],VAppBarNavIcon:b["a"],VList:_["a"],VListItem:k["a"],VListItemGroup:I["a"],VListItemTitle:w["b"],VNavigationDrawer:S["a"],VTab:V["a"],VTabs:x["a"],VToolbarTitle:y["a"]});var j={data:function(){return{isActive:!1}},name:"App",components:{AppHeader:L},mounted:function(){"Login"!=this.$route.name&&(this.isActive=!0)}},$=j,R=(a("034f"),a("7496")),M=a("f6c4"),O=Object(g["a"])($,r,o,!1,null,null,null),F=O.exports;f()(O,{VApp:R["a"],VMain:M["a"]});var A=a("8c4f"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"mt-15"},[a("v-col",{attrs:{cols:"3"}},[a("v-btn",{attrs:{icon:""},on:{click:e.sendMessage}},[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-email ")])],1)],1),a("v-col",[a("v-card",[a("v-card-text",[e._v(" 送信 ")])],1)],1)],1),a("v-row",{staticClass:"mt-15"},[a("v-col",[a("v-btn",{attrs:{icon:""},on:{click:e.receiveMessage}},[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-bell ")])],1)],1),a("v-col",[a("v-card",[a("v-card-text",[e._v(" 受信 ")])],1)],1),a("v-col",[a("v-btn",{attrs:{icon:""},on:{click:e.requestFriend}},[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-account-search ")])],1)],1),a("v-col",[a("v-card",[a("v-card-text",[e._v(" フレンド申請 ")])],1)],1)],1),a("v-row",{staticClass:"mt-15"},[a("v-col",[a("v-btn",{attrs:{icon:""},on:{click:e.showProfile}},[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-account ")])],1)],1),a("v-col",[a("v-card",[a("v-card-text",[e._v(" プロフィール ")])],1)],1),a("v-col",[a("v-btn",{attrs:{icon:""},on:{click:e.inviteFamiliy}},[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-account-plus ")])],1)],1),a("v-col",[a("v-card",[a("v-card-text",[e._v(" 家族を招待 ")])],1)],1)],1),a("v-row",{staticClass:"mt-15"},[a("v-col",[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-cog ")])],1),a("v-col",[a("v-card")],1),a("v-col",[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-star ")])],1),a("v-col",[a("v-card")],1)],1)],1)},D=[],E={data:function(){return{}},methods:{showProfile:function(){this.$router.push({name:"Profile"})},inviteFamiliy:function(){this.$router.push({name:"ShowRequest"})},sendMessage:function(){this.$router.push({name:"Send"})},receiveMessage:function(){this.$router.push({name:"TimeLine"})},requestFriend:function(){this.$router.push({name:"ShowRequest"})}}},U=E,H=a("8336"),P=a("b0af"),B=a("99d9"),z=a("62ad"),q=a("a523"),Y=a("132d"),G=a("0fd9"),N=Object(g["a"])(U,T,D,!1,null,null,null),J=N.exports;f()(N,{VBtn:H["a"],VCard:P["a"],VCardText:B["c"],VCol:z["a"],VContainer:q["a"],VIcon:Y["a"],VRow:G["a"]});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"login mt-5",attrs:{"fill-height":""}},[n("v-row",{attrs:{justify:"center"}},[n("img",{attrs:{src:a("6873"),width:"180",height:"180"}})]),n("v-container",{staticClass:"cont"},[n("v-form",{attrs:{recontainerf:"checkForm"}},[n("v-row",[n("v-icon",[e._v(" mdi-account ")]),n("v-col",[n("v-text-field",{attrs:{label:"姓",outlined:"",filled:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),n("v-col",[n("v-text-field",{attrs:{label:"名",outlined:"",filled:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1)],1),n("v-row",[n("v-icon",[e._v(" mdi-email ")]),n("v-col",[n("v-text-field",{attrs:{label:"メールアドレス",outlined:"",filled:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),n("v-row",[n("v-icon",[e._v(" mdi-key ")]),n("v-col",[n("v-text-field",{attrs:{type:"password",label:"パスワード",outlined:"",filled:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("v-row",{staticClass:"mb-2"},[n("v-col",[n("v-btn",{staticClass:"mr-6",on:{click:e.signUp}},[e._v("新規登録")]),n("v-btn",{staticClass:"ml-6",on:{click:e.signIn}},[e._v("ログイン")])],1)],1)],1)],1)],1)},Q=[],W=a("1da1"),X=(a("96cf"),{data:function(){return{firstname:"",lastname:"",name:"",email:"",password:"",title:"",content:"",tasks:[],comment:"",posts:[],user:{}}},methods:{signUp:function(){var e=this;return Object(W["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.name=e.lastname+" "+e.firstname,console.log(e.name),t.next=4,d().post("/auth",{email:e.email,password:e.password}).then((function(t){localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers["client"]),localStorage.setItem("uid",t.headers["uid"]),localStorage.setItem("id",t.data.data["id"]),e.user={uid:t.headers["uid"],"access-token":t.headers["access-token"],client:t.headers["client"],id:t.data.data["id"]},console.log(e.user),e.$store.dispatch("userLogin",e.user),e.$store.commit("setMessage",{status:!1})}));case 4:return e.id=localStorage.getItem("id"),console.log(e.id),t.next=8,d().put("/users/"+e.id,{email:e.email,password:e.password,name:e.name},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}});case 8:e.email==localStorage.getItem("uid")&&e.$router.push({name:"Home"});case 9:case"end":return t.stop()}}),t)})))()},signIn:function(){var e=this;console.log(this.email),console.log(this.password),d().post("/auth/sign_in",{email:this.email,password:this.password}).then((function(t){localStorage.setItem("access-token",t.headers["access-token"]),localStorage.setItem("client",t.headers["client"]),localStorage.setItem("uid",t.headers["uid"]),localStorage.setItem("id",t.data.data["id"]),e.user={uid:t.headers["uid"],"access-token":t.headers["access-token"],client:t.headers["client"]},e.$store.dispatch("userLogin",e.user),e.$store.commit("setMessage",{status:!1}),e.email==t.headers["uid"]&&e.$router.push({name:"Home"})}))}}}),Z=X,ee=(a("8aa5c"),a("4bd4")),te=a("8654"),ae=Object(g["a"])(Z,K,Q,!1,null,"a7c11a74",null),ne=ae.exports;f()(ae,{VBtn:H["a"],VCol:z["a"],VContainer:q["a"],VForm:ee["a"],VIcon:Y["a"],VRow:G["a"],VTextField:te["a"]});var re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-card",{attrs:{width:"400px",height:"100%"}},[a("v-list",{attrs:{dense:""}},[a("v-subheader",{staticClass:"text-h5"},[e._v("送信相手")]),a("v-divider"),a("v-list-item-group",{attrs:{color:"primary"}},[e._l(e.frineds,(function(t,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-avatar",{attrs:{size:"30"}},[a("img",{attrs:{src:e.railsURL+t.avatar_url}})])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h8"},[e._v(" "+e._s(t.name))])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:function(a){return e.selectFrined(t)}}},[a("v-icon",[e._v(" mdi-arrow-right-bold ")])],1)],1)],1)})),a("v-divider")],2)],1)],1),e.select.name?a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400","max-height":"100%"}},[a("v-img",{attrs:{src:e.railsURL+e.select.avatar_url,height:"100%",width:"100%"}}),a("v-card-title",[e._v(" "+e._s(e.select.name)+" ")]),a("v-row",[a("v-card-subtitle",[e._v(" "+e._s(e.select.birthdate)+" ")])],1),a("v-container",[a("v-btn",{attrs:{icon:"","x-large":""},on:{click:e.editMessage}},[a("v-icon",{attrs:{"x-large":""}},[e._v(" mdi-email ")])],1)],1)],1):e._e()],1)},oe=[],se={data:function(){return{frineds:{},dialog:!1,select:{name:null,avatar:null,birthdate:null},railsURL:"http://localhost:3000"}},mounted:function(){var e=this;return Object(W["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d().get("/family/"+localStorage.getItem("id"),{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t.data),e.frineds=t.data}));case 2:case"end":return t.stop()}}),t)})))()},methods:{editMessage:function(){console.log(this.select),this.$router.push({name:"SendMessage",params:{to_id:this.select.id}})},selectFrined:function(e){this.select=e}}},ie=se,ce=a("8212"),le=a("ce7e"),ue=a("adda"),de=a("1800"),me=a("34c3"),ve=a("e0c7"),ge=Object(g["a"])(ie,re,oe,!1,null,null,null),he=ge.exports;f()(ge,{VAvatar:ce["a"],VBtn:H["a"],VCard:P["a"],VCardSubtitle:B["b"],VCardTitle:B["d"],VContainer:q["a"],VDivider:le["a"],VIcon:Y["a"],VImg:ue["a"],VList:_["a"],VListItem:k["a"],VListItemAction:de["a"],VListItemContent:w["a"],VListItemGroup:I["a"],VListItemIcon:me["a"],VListItemTitle:w["b"],VRow:G["a"],VSubheader:ve["a"]});var fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-list",[e._l(e.messages,(function(t,n){return[a("v-list-item",{key:n,on:{click:function(a){return e.showMessage(t)}}},[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.from)+"さんからメッセージが届いています ")])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:function(a){return e.deleteMessage(t)}}},[a("v-icon",[e._v(" mdi-delete ")])],1)],1)],1),n+1<e.messages.length?a("v-divider",{key:"divider-"+n}):e._e()]}))],2)],1)],1)},pe=[],be={data:function(){return{search:"",messages:{},recieved:{}}},mounted:function(){var e=this;d().get("/searches",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.messages=t.data}))},methods:{deleteMessage:function(e){d().delete("/messages/".concat(e.id),{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}})},showMessage:function(e){this.$router.push({name:"Message",params:{content:e}})}}},_e=be,ke=Object(g["a"])(_e,fe,pe,!1,null,null,null),Ie=ke.exports;f()(ke,{VBtn:H["a"],VCard:P["a"],VContainer:q["a"],VDivider:le["a"],VIcon:Y["a"],VList:_["a"],VListItem:k["a"],VListItemAction:de["a"],VListItemContent:w["a"],VListItemTitle:w["b"]});var we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-container",[a("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"2"}},[a("v-avatar",[a("img",{staticStyle:{"object-fit":"cover"},attrs:{src:e.railsURL+e.avatar_url}})])],1),a("v-col",{attrs:{cols:"10"}},[a("v-row",[e._v(" 件名 : "+e._s(e.message.title)+" ")]),a("v-row",[e._v(" "+e._s(e.message.time)+" ← "+e._s(e.message.created_time)+" ")])],1)],1),a("v-container",{staticClass:"mt-10"},[a("v-row",[e._v(" "+e._s(e.message.body)+" ")]),a("v-row",{staticClass:"mt-10"},[a("v-img",{attrs:{src:e.railsURL+e.message.image_url,height:"500","max-width":"500"}})],1)],1)],1)],1)},Se=[],Ve=(a("fb6a"),""),xe="",ye={data:function(){return{message_id:"",message:{},uploadedImage:"",railsURL:"http://localhost:3000",avatar_url:""}},created:function(){this.message_id=this.$route.params.message_id,this.avatar_url=this.$route.params.avatar_url},mounted:function(){var e=this;d().get("/users/"+localStorage.getItem("id")+"/messages/"+this.message_id,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.message=t.data,Ve=new Date(1e3*e.message.time),e.message.time=Ve.getFullYear()+"/"+("0"+(Ve.getMonth()+1)).slice(-2)+"/"+("0"+Ve.getDate()).slice(-2)+" "+("0"+Ve.getHours()).slice(-2)+":"+("0"+Ve.getMinutes()).slice(-2),xe=new Date(1e3*e.message.created_time),e.message.created_time=xe.getFullYear()+"/"+("0"+(xe.getMonth()+1)).slice(-2)+"/"+("0"+xe.getDate()).slice(-2)+" "+("0"+xe.getHours()).slice(-2)+":"+("0"+xe.getMinutes()).slice(-2)}))}},Ce=ye,Le=Object(g["a"])(Ce,we,Se,!1,null,null,null),je=Le.exports;f()(Le,{VAvatar:ce["a"],VCard:P["a"],VCol:z["a"],VContainer:q["a"],VImg:ue["a"],VRow:G["a"]});var $e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"bg",attrs:{fluid:"","fill-height":""}},[a("v-col",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{attrs:{src:e.railsURL+e.profile.avatar,height:"300px"}},[a("v-card-actions",[a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog_avatar=!0}}},[a("v-icon",[e._v("mdi-camera")])],1),a("v-dialog",{attrs:{"retain-focus":!1,persistent:"","max-width":"600px"},model:{value:e.dialog_avatar,callback:function(t){e.dialog_avatar=t},expression:"dialog_avatar"}},[a("v-card",[a("v-card-title",[e._v(" プロフィール画像を変更 ")]),a("input",{ref:"file",attrs:{name:"uploadedImage",type:"file",accept:"image/png, image/jpeg"},on:{change:e.onFileChange}}),a("br"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:e.postItem}},[a("v-icon",[e._v(" mdi-book ")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog_avatar=!1}}},[a("v-icon",[e._v(" mdi-close ")])],1)],1)],1)],1)],1)],1),a("v-card-title",[e._v(" "+e._s(e.profile.name)+" ")]),a("v-row",[e.profile.birthdate?a("div",[a("v-card-subtitle",[e._v(" "+e._s(e.profile.birthdate)+" ")]),a("v-card-actions",[a("v-btn",{on:{click:function(t){e.dialog=!0}}},[e._v(" 変更 ")]),a("v-dialog",{attrs:{persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("生年月日")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",[a("v-select",{attrs:{items:e.yearrange,label:"年"},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),a("v-col",[a("v-select",{attrs:{items:e.monthrange,label:"月"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1),a("v-col",[a("v-select",{attrs:{items:e.daysrange,label:"日"},model:{value:e.day,callback:function(t){e.day=t},expression:"day"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),a("v-btn",{attrs:{icon:"",dialog:"false"},on:{click:e.registerBirthdate}},[a("v-icon",[e._v(" mdi-check")])],1)],1)],1)],1)],1)],1):a("div",[a("v-card-subtitle",[e._v(" 生年月日が未登録です ")]),a("v-card-actions",[a("v-btn",{on:{click:function(t){e.dialog=!0}}},[e._v(" 登録 ")]),a("v-dialog",{attrs:{persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("生年月日")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",[a("v-select",{attrs:{items:e.yearrange,label:"年"},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),a("v-col",[a("v-select",{attrs:{items:e.monthrange,label:"月"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1),a("v-col",[a("v-select",{attrs:{items:e.daysrange,label:"日"},model:{value:e.day,callback:function(t){e.day=t},expression:"day"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),a("v-btn",{attrs:{icon:"",dialog:"false"},on:{click:e.registerBirthdate}},[a("v-icon",[e._v(" mdi-check")])],1)],1)],1)],1)],1)],1)])],1)],1)],1)},Re=[],Me=a("2909"),Oe=(a("d81d"),a("cb29"),1930),Fe=2030,Ae=new Array(Fe-Oe+1).fill(null).map((function(e,t){return t+Oe})),Te=1,De=12,Ee=new Array(De-Te+1).fill(null).map((function(e,t){return t+Te})),Ue=Object(Me["a"])(Array(31)).map((function(e,t){return t})),He={data:function(){return{profile:{birthdate:"",avatar:"",name:null},year:"",yearrange:Ae,month:"",monthrange:Ee,day:"",daysrange:Ue,dialog:!1,dialog_avatar:!1,comment:"卒業まであとわずか．\n２月にイタリアへの卒業旅行，ちゃんと行けるかなー",post:{},uploadedImage:"",railsURL:"http://localhost:3000"}},mounted:function(){var e=this;return Object(W["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d().get("/profile/"+localStorage.getItem("id"),{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.profile.name=t.data.name,e.profile.avatar=t.data.avatar_url,e.profile.birthdate=t.data.birthdate,console.log(e.profile)}));case 2:case"end":return t.stop()}}),t)})))()},methods:{registerBirthdate:function(){var e=this;d().put("/update_birthdate/",{id:localStorage.getItem("id"),year:this.year,month:this.month,day:this.day},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t),e.$router.push({name:"Home"})}))},onFileChange:function(e){e.preventDefault();var t=e.target.files;this.uploadedImage=t[0],this.profile.avatar=this.uploadedImage,console.log(t),console.log(this.uploadedImage)},postItem:function(){var e=this,t=new FormData;t.append("avatar",this.uploadedImage),t.append("id",localStorage.getItem("id")),console.log(t),d().put("/update_avatar",t,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){e.uploadedImage="",e.$refs.file.value="",e.profile.avatar=t.data.avatar,console.log(t),e.$router.push({name:"Home"})})).catch((function(e){console.log(e)}))}}},Pe=He,Be=(a("2a37"),a("169a")),ze=a("b974"),qe=a("2fa4"),Ye=Object(g["a"])(Pe,$e,Re,!1,null,null,null),Ge=Ye.exports;f()(Ye,{VBtn:H["a"],VCard:P["a"],VCardActions:B["a"],VCardSubtitle:B["b"],VCardText:B["c"],VCardTitle:B["d"],VCol:z["a"],VContainer:q["a"],VDialog:Be["a"],VIcon:Y["a"],VImg:ue["a"],VRow:G["a"],VSelect:ze["a"],VSpacer:qe["a"]});var Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{size:e.cardsize}},[e._v(" hogehoge ")])},Je=[],Ke={data:function(){return{cardsize:""}},mounted:function(){switch(console.log(this.$vuetify.breakpoint.name),this.$vuetify.breakpoint.name){case"xs":this.cardsize=220;break;case"sm":this.cardsize=400;break;case"md":this.cardsize=500;break;case"lg":this.cardsize=600;break;case"xl":this.cardsize=800;break}}},Qe=Ke,We=Object(g["a"])(Qe,Ne,Je,!1,null,null,null),Xe=We.exports;f()(We,{VCard:P["a"]});var Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{justify:"space-around"}},[a("v-card-text",[a("div",{staticClass:"font-weight-bold"},[e._v(" 2021 ")]),a("v-timeline",{attrs:{"align-top":"",dense:e.$vuetify.breakpoint.smAndDown}},e._l(e.messages,(function(t,n){return a("v-timeline-item",{key:t.time,attrs:{color:t.color,small:""}},[a("v-card",[a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-avatar",[a("img",{staticStyle:{"object-fit":"cover"},attrs:{src:e.railsURL+e.avatar_urls[n]}})])],1),a("v-col",{attrs:{cols:"10"}},[a("v-card-subtitle",[e._v(" "+e._s(t.time)+" ← "+e._s(t.created_time)+" ")])],1)],1),a("v-card-title",{staticClass:"justify-center"},[e._v(" "+e._s(t.title)+" ")]),a("v-card-actions",[a("v-btn",{on:{click:function(a){return e.showContent(t,n)}}},[e._v(" 開く ")]),a("v-btn",{on:{click:function(a){return e.deleteMessage(t)}}},[e._v(" 削除 ")])],1)],1)],1)})),1)],1)],1),a("v-btn",{attrs:{icon:""},on:{click:e.lookSending}},[a("v-icon",[e._v(" mdi-star")])],1)],1)},et=[],tt=(a("159b"),""),at="",nt={data:function(){return{messages:[],dialog:!1,railsURL:"http://localhost:3000",users:[],avatar_urls:[]}},methods:{saveComment:function(){console.log("aaaaa"),console.log(this.messages)},lookSending:function(){this.$router.push({name:"Sending"})},showContent:function(e,t){this.$router.push({name:"MessageContent",params:{message_id:e.id,avatar_url:this.avatar_urls[t]}})},deleteMessage:function(e){var t=this;d().delete("/messages/"+e.id,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){console.log(e),t.$router.go({path:t.$router.currentRoute.path,force:!0})})).catch((function(e){console.log(e)}))}},mounted:function(){var e=this;return Object(W["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d().get("/users/"+localStorage.getItem("id")+"/messages",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.messages=t.data.messages,e.messages.forEach((function(e){return tt=new Date(1e3*e.time),e.time=tt.getFullYear()+"/"+("0"+(tt.getMonth()+1)).slice(-2)+"/"+("0"+tt.getDate()).slice(-2)+" "+("0"+tt.getHours()).slice(-2)+":"+("0"+tt.getMinutes()).slice(-2),at=new Date(1e3*e.created_time),e.created_time=at.getFullYear()+"/"+("0"+(at.getMonth()+1)).slice(-2)+"/"+("0"+at.getDate()).slice(-2)+" "+("0"+at.getHours()).slice(-2)+":"+("0"+at.getMinutes()).slice(-2)})),e.users=t.data.users}));case 2:e.users.forEach((function(t){return d().get("users/"+t.id,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.avatar_urls.push(t.data.avatar_url)}))}));case 3:case"end":return t.stop()}}),t)})))()}},rt=nt,ot=a("8414"),st=a("1e06"),it=Object(g["a"])(rt,Ze,et,!1,null,null,null),ct=it.exports;f()(it,{VAvatar:ce["a"],VBtn:H["a"],VCard:P["a"],VCardActions:B["a"],VCardSubtitle:B["b"],VCardText:B["c"],VCardTitle:B["d"],VCol:z["a"],VContainer:q["a"],VIcon:Y["a"],VRow:G["a"],VTimeline:ot["a"],VTimelineItem:st["a"]});var lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"2"}},[n("v-avatar",{attrs:{size:"100"}},[n("img",{attrs:{src:a("7e8f")}})])],1),n("v-col",{attrs:{cols:"5"}},[n("div",{staticClass:"text-h4"},[n("v-text-field",{attrs:{outlined:"",label:"件名"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),n("v-row",[n("v-col",[n("v-select",{attrs:{items:e.yearrange,label:"年"},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),n("v-col",[n("v-select",{attrs:{items:e.monthrange,label:"月"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1),n("v-col",[n("v-select",{attrs:{items:e.daysrange,label:"日"},model:{value:e.day,callback:function(t){e.day=t},expression:"day"}})],1),n("v-col",[n("v-select",{attrs:{items:e.hoursrange,label:"時"},model:{value:e.hour,callback:function(t){e.hour=t},expression:"hour"}})],1),n("v-col",[n("v-select",{attrs:{items:e.minutesrange,label:"分"},model:{value:e.minute,callback:function(t){e.minute=t},expression:"minute"}})],1)],1)],1),n("v-col",[n("p",[n("label",[e._v("画像")]),n("input",{ref:"file",attrs:{name:"uploadedImage",type:"file",accept:"image/png, image/jpeg"},on:{change:e.onFileChange}}),n("br")])])],1),n("v-row",[n("v-container",{attrs:{fluid:""}},[n("v-textarea",{attrs:{counter:"",label:"メッセージ",height:"300",value:e.value,outlined:""},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}})],1)],1),n("v-row",{attrs:{justify:"end"}},[n("v-card-actions",[n("v-btn",{attrs:{outlined:"",text:""},on:{click:e.sendMessage}},[e._v("送信する")])],1)],1)],1)},ut=[],dt=a("5530"),mt=(a("d3b7"),a("ddb0"),a("2f62")),vt=2021,gt=2100,ht=new Array(gt-vt+1).fill(null).map((function(e,t){return t+vt})),ft=1,pt=12,bt=new Array(pt-ft+1).fill(null).map((function(e,t){return t+ft})),_t=1,kt=31,It=new Array(kt-_t+1).fill(null).map((function(e,t){return t+_t})),wt=Object(Me["a"])(Array(24)).map((function(e,t){return t})),St=Object(Me["a"])(Array(60).keys()),Vt={props:["to_id"],data:function(){return{head:"メッセージ送信",value:null,item_minutes:["0","1","2","3","4","5"],user:[],select:"",to:"",body:"",year:"2021",yearrange:ht,month:"6",monthrange:bt,day:"3",daysrange:It,hour:"",hoursrange:wt,minute:"",minutesrange:St,time:[],title:[],message:{},uploadedImage:"",railsURL:"http://localhost:3000"}},computed:Object(dt["a"])({},Object(mt["b"])(["user_token"])),mounted:function(){var e=this;d().get("/users/"+this.to_id,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}},console.log(this.user_token)).then((function(t){return e.user=t.data,console.log(t)}))},methods:{sendMessage:function(){var e=this,t=new Date(this.year,this.month-1,this.day,this.hour,this.minute),a=new FormData;a.append("image",this.uploadedImage),a.append("from_id",localStorage.getItem("id")),a.append("to_id",this.to_id),a.append("title",this.title),a.append("body",this.body),a.append("time",t.getTime()/1e3),d().post("/users/"+localStorage.getItem("id")+"/messages",a,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t.data),e.$router.push({name:"Send"})}))},onFileChange:function(e){e.preventDefault();var t=e.target.files;this.uploadedImage=t[0],console.log(t),console.log(this.uploadedImage)}}},xt=Vt,yt=(a("0a5b"),a("a844")),Ct=Object(g["a"])(xt,lt,ut,!1,null,null,null),Lt=Ct.exports;f()(Ct,{VAvatar:ce["a"],VBtn:H["a"],VCardActions:B["a"],VCol:z["a"],VContainer:q["a"],VRow:G["a"],VSelect:ze["a"],VTextField:te["a"],VTextarea:yt["a"]});var jt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"mt-8"},[a("v-card-title",[e._v(" 家族を検索 ")]),a("v-card-text",[a("v-text-field",{attrs:{outlined:"",label:"メールアドレス"},model:{value:e.mail,callback:function(t){e.mail=t},expression:"mail"}})],1),a("v-card-actions",[a("v-btn",{on:{click:e.searchUser}},[e._v(" 検索 ")])],1),a("v-col",[e._v(" "+e._s(e.userSearched.name)+" ")]),a("v-col",[e.userSearched.id>0?a("v-btn",{on:{click:function(t){return e.followFeind(e.userSearched.id)}}},[e._v(" 申請 ")]):e._e()],1)],1),a("v-card",{staticClass:"mt-8"},[a("v-card-title",[e._v(" フレンド申請中 ")]),a("v-list",e._l(e.toFriend,(function(t,n){return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.name)+" ")])],1),a("v-list-item-action",[a("v-btn",{on:{click:function(a){return e.destroyFriend(t.id)}}},[e._v(" 削除 ")])],1)],1)})),1)],1),a("v-card",{staticClass:"mt-8"},[a("v-card-title",[e._v(" 申請されいているフレンド ")]),a("v-list",e._l(e.fromFriend,(function(t,n){return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.name)+" ")])],1),a("v-list-item-action",[a("v-btn",{on:{click:function(a){return e.acceptFriend(t.id)}}},[e._v(" 承諾 ")]),a("v-btn",{on:{click:function(a){return e.destroyFriend(t.id)}}},[e._v(" 削除 ")])],1)],1)})),1)],1)],1)},$t=[],Rt={data:function(){return{toFriend:{},fromFriend:{},status:"",userSearched:{},mail:""}},mounted:function(){var e=this;d().get("/users/"+localStorage.getItem("id")+"/followings",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.toFriend=t.data,console.log(t.data)})),d().get("/users/"+localStorage.getItem("id")+"/followers",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.fromFriend=t.data,console.log(t.data)}))},methods:{destroyFriend:function(e){var t=this;console.log(e),d().delete("/users/"+e+"/relationships",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.status=e.data.status,console.log(e),t.$router.push({name:"Home"})}))},acceptFriend:function(e){var t=this;console.log(e),d().put("/users/"+e+"/relationships",{status:"true"},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.status=e.data.status,console.log(e),t.$router.push({name:"Home"})}))},searchUser:function(){var e=this;d().get("/users/"+localStorage.getItem("id")+"/search",{params:{email:this.mail}},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t),e.userSearched=t.data,console.log(e.userSearched)}))},followFeind:function(e){var t=this;console.log(e),d().post("/users/"+e+"/relationships",{user_id:e},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return console.log(e),t.$router.push({name:"Home"})}))}}},Mt=Rt,Ot=Object(g["a"])(Mt,jt,$t,!1,null,null,null),Ft=Ot.exports;f()(Ot,{VBtn:H["a"],VCard:P["a"],VCardActions:B["a"],VCardText:B["c"],VCardTitle:B["d"],VCol:z["a"],VContainer:q["a"],VList:_["a"],VListItem:k["a"],VListItemAction:de["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VTextField:te["a"]});var At=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",e._l(e.messages,(function(t,n){return a("v-list-item",{key:t.time},[a("v-card",{attrs:{height:"100",width:"800"}},[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-avatar",[a("img",{attrs:{src:e.railsURL+e.avatar_urls[n]}})])],1),a("v-col",{attrs:{cols:"9"}},[e._v(" "+e._s(e.user_names[n])+"さんからメッセージが届きます ")])],1)],1)],1)})),1)},Tt=[],Dt="",Et="",Ut={data:function(){return{messages:[],dialog:!1,railsURL:"http://localhost:3000",user_names:[],users:[],avatar_urls:[]}},methods:{},mounted:function(){var e=this;return Object(W["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d().get("/sending/",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t),e.messages=t.data.messages,e.messages.forEach((function(e){return Dt=new Date(1e3*e.time),e.time=Dt.getFullYear()+"/"+("0"+(Dt.getMonth()+1)).slice(-2)+"/"+("0"+Dt.getDate()).slice(-2)+" "+("0"+Dt.getHours()).slice(-2)+":"+("0"+Dt.getMinutes()).slice(-2),Et=new Date(1e3*e.created_time),e.created_time=Et.getFullYear()+"/"+("0"+(Et.getMonth()+1)).slice(-2)+"/"+("0"+Et.getDate()).slice(-2)+" "+("0"+Et.getHours()).slice(-2)+":"+("0"+Et.getMinutes()).slice(-2)})),e.users=t.data.users}));case 2:e.users.forEach((function(t){return d().get("users/"+t.id,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.user_names.push(t.data.name),e.avatar_urls.push(t.data.avatar_url)}))}));case 3:case"end":return t.stop()}}),t)})))()}},Ht=Ut,Pt=Object(g["a"])(Ht,At,Tt,!1,null,null,null),Bt=Pt.exports;f()(Pt,{VAvatar:ce["a"],VCard:P["a"],VCol:z["a"],VContainer:q["a"],VListItem:k["a"],VRow:G["a"]}),n["a"].use(A["a"]);var zt=[{path:"/",name:"Login",component:ne,meta:{isPublic:!0}},{path:"/home",name:"Home",component:J},{path:"/send",name:"Send",component:he,props:!0},{path:"/received",name:"Received",component:Ie},{path:"/profile",name:"Profile",component:Ge},{path:"/test",name:"Test",component:Xe},{path:"/timeline",name:"TimeLine",component:ct},{path:"/sendmessage",name:"SendMessage",component:Lt,props:!0},{path:"/messagecontent",name:"MessageContent",component:je},{path:"/showrequest",name:"ShowRequest",component:Ft},{path:"/sending",name:"Sending",component:Bt}],qt=new A["a"]({mode:"history",base:"/sakura-front/",routes:zt});qt.beforeEach((function(e,t,a){e.matched.some((function(e){return!e.meta.isPublic}))&&!localStorage.getItem("access-token")?a({name:"Login",query:{redirect:e.fullPath}}):a()}));var Yt=qt,Gt=a("0e44");n["a"].use(mt["a"]);var Nt=new mt["a"].Store({state:{user_token:{uid:"","access-token":"",client:""},flash_message:{status:!1,messasge:""},timeline:""},mutations:{USER_LOGIN:function(e,t){e.user_token=t},setMessage:function(e,t){e.flash_message=t},editComment:function(e,t){e.timeline=t}},actions:{userLogin:function(e,t){return Object(W["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,n("USER_LOGIN",t),a.abrupt("return",t);case 3:case"end":return a.stop()}}),a)})))()},editComment:function(e,t){return Object(W["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,n("editComment",t),a.abrupt("return",t);case 3:case"end":return a.stop()}}),a)})))()}},plugins:[Object(Gt["a"])({})],modules:{}}),Jt=a("f309");n["a"].use(Jt["a"]);var Kt=new Jt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Yt,store:Nt,vuetify:Kt,render:function(e){return e(F)}}).$mount("#app")},"5ccf":function(e,t,a){},6873:function(e,t,a){e.exports=a.p+"img/sakura-card.a97567b2.png"},"6e65":function(e,t,a){},"7e8f":function(e,t,a){e.exports=a.p+"img/cat.62eb8506.jpg"},"7f4e":function(e,t,a){"use strict";a("6e65")},"85ec":function(e,t,a){},"8aa5c":function(e,t,a){"use strict";a("25be")}});
//# sourceMappingURL=app.d92cd43a.js.map