(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,v=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/sakura-front/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01c1":function(t,e,a){},"034f":function(t,e,a){"use strict";a("85ec")},"0a5b":function(t,e,a){"use strict";a("24ab")},"24ab":function(t,e,a){},"2a37":function(t,e,a){"use strict";a("5ccf")},"398f":function(t,e,a){"use strict";a("acf9")},"3b31":function(t,e,a){"use strict";a("f619")},5154:function(t,e,a){t.exports=a.p+"img/sakura.6f723b9b.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",["Login"!==t.$route.name?a("AppHeader"):t._e(),a("v-main",{class:{bg:t.isActive}},[a("router-view")],1),"Login"!==t.$route.name?a("AppFooter"):t._e()],1)},s=[],i=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),a("v-toolbar-title",[t._v("SAKURA")]),a("v-tabs",{attrs:{dark:""}},[t._l(t.menuItems,(function(e,n){return a("v-tab",{key:n,attrs:{to:e.url}},[t._v(" "+t._s(e.name)+" ")])})),a("v-tab",{on:{click:t.out}},[t._v(" ログアウト ")])],2)],1),a("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",[t._l(t.menuItems,(function(e,n){return a("v-list-item",{key:n,attrs:{to:e.url}},[a("v-list-item-title",[t._v(t._s(e.name))])],1)})),a("v-list-item",{on:{click:t.out}},[a("v-list-item-title",[t._v(" ログアウト ")])],1)],2)],1)],1)],1)}),r=[],c={menuItems:[{name:"HOME",url:"/home"},{name:"メッセージ送信",url:"/send"},{name:"メッセージ履歴",url:"/timeline"},{name:"プロフィール",url:"/profile"},{name:"フレンド申請",url:"/showrequest"}]},l=a("bc3a"),u=a.n(l),d=function(){return u.a.create({baseURL:"http://localhost:3000/v1"})},v={name:"AppHeader",data:function(){return{drawer:!1,menuItems:c.menuItems}},methods:{out:function(){var t=this;console.log("aaaaaaaaaaa"),d().delete("/auth/sign_out",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){console.log(e),localStorage.removeItem("uid"),localStorage.removeItem("access-token"),localStorage.removeItem("client"),console.log("ログアウト成功"),t.$router.push({name:"Login"})}))}}},m=v,g=(a("7f4e"),a("2877")),f=a("6544"),h=a.n(f),p=a("40dc"),b=a("5bc1"),_=a("8860"),x=a("da13"),V=a("1baa"),k=a("5d23"),w=a("f774"),I=a("71a3"),C=a("fe57"),S=a("2a7f"),y=Object(g["a"])(m,i,r,!1,null,"e18c9832",null),L=y.exports;h()(y,{VAppBar:p["a"],VAppBarNavIcon:b["a"],VList:_["a"],VListItem:x["a"],VListItemGroup:V["a"],VListItemTitle:k["d"],VNavigationDrawer:w["a"],VTab:I["a"],VTabs:C["a"],VToolbarTitle:S["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:""}},[a("div",{staticClass:"footer"},[t._v(" SakuraProject ")])])},T=[],O=(a("398f"),a("553a")),A={},$=Object(g["a"])(A,j,T,!1,null,"6b4dfae4",null),F=$.exports;h()($,{VFooter:O["a"]});var M={data:function(){return{isActive:!1}},name:"App",components:{AppHeader:L,AppFooter:F},mounted:function(){"Login"!=this.$route.name&&(this.isActive=!0)}},R=M,E=(a("034f"),a("7496")),B=a("f6c4"),D=Object(g["a"])(R,o,s,!1,null,null,null),P=D.exports;h()(D,{VApp:E["a"],VMain:B["a"]});var U=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mt-15"},[a("v-col",{attrs:{cols:"3"}},[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-email ")])],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" メッセージを送りましょう ")])],1)],1)],1),a("v-row",{staticClass:"mt-15"},[a("v-col",[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-bell ")])],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" 1/21 おじいちゃんの誕生日 "),a("br"),t._v(" 2/2 しおりちゃんの節句 ")])],1)],1),a("v-col",[a("v-btn",{attrs:{icon:""},on:{click:t.showFriend}},[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-heart ")])],1)],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" メモリー ")])],1)],1)],1),a("v-row",{staticClass:"mt-15"},[a("v-col",[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-account ")])],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" プロフィール ")])],1)],1),a("v-col",[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-account-plus ")])],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" 家族を招待 ")])],1)],1)],1),a("v-row",{staticClass:"mt-15"},[a("v-col",[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-cog ")])],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" 設定 ")])],1)],1),a("v-col",[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-star ")])],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" みんなのSAKURAの使い方 ")])],1)],1)],1)],1)},H=[],G={data:function(){return{}},methods:{showFriend:function(){this.$router.push({name:"ShowRequest"})}}},N=G,z=a("8336"),J=a("b0af"),K=a("99d9"),Y=a("62ad"),Q=a("a523"),W=a("132d"),X=a("0fd9"),Z=Object(g["a"])(N,q,H,!1,null,null,null),tt=Z.exports;h()(Z,{VBtn:z["a"],VCard:J["a"],VCardText:K["c"],VCol:Y["a"],VContainer:Q["a"],VIcon:W["a"],VRow:X["a"]});var et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"login mt-5",attrs:{"fill-height":""}},[n("v-row",{attrs:{justify:"center"}},[n("img",{attrs:{src:a("6873"),width:"180",height:"180"}})]),n("v-container",{staticClass:"cont"},[n("v-form",{attrs:{recontainerf:"checkForm"}},[n("v-row",[n("v-icon",[t._v(" mdi-account ")]),n("v-col",[n("v-text-field",{attrs:{label:"姓",outlined:"",filled:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),n("v-col",[n("v-text-field",{attrs:{label:"名",outlined:"",filled:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1)],1),n("v-row",[n("v-icon",[t._v(" mdi-email ")]),n("v-col",[n("v-text-field",{attrs:{label:"メールアドレス",outlined:"",filled:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),n("v-row",[n("v-icon",[t._v(" mdi-key ")]),n("v-col",[n("v-text-field",{attrs:{type:"password",label:"パスワード",outlined:"",filled:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-row",{staticClass:"mb-2"},[n("v-col",[n("v-btn",{staticClass:"mr-6",on:{click:t.signUp}},[t._v("新規登録")]),n("v-btn",{staticClass:"ml-6",on:{click:t.signIn}},[t._v("ログイン")])],1)],1)],1)],1)],1)},at=[],nt=a("1da1"),ot=(a("96cf"),{data:function(){return{firstname:"",lastname:"",name:"",email:"",password:"",title:"",content:"",tasks:[],comment:"",posts:[],user:{}}},methods:{signUp:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.name=t.lastname+" "+t.firstname,console.log(t.name),e.next=4,d().post("/auth",{email:t.email,password:t.password,name:t.name}).then((function(e){localStorage.setItem("access-token",e.headers["access-token"]),localStorage.setItem("client",e.headers["client"]),localStorage.setItem("uid",e.headers["uid"]),localStorage.setItem("id",e.data.data["id"]),t.user={uid:e.headers["uid"],"access-token":e.headers["access-token"],client:e.headers["client"],id:e.data.data["id"]},console.log(t.user),t.$store.dispatch("userLogin",t.user),t.$store.commit("setMessage",{status:!1})}));case 4:return t.id=localStorage.getItem("id"),console.log(t.id),e.next=8,d().put("/users/"+t.id,{email:t.email,password:t.password,name:t.name},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}});case 8:t.email==localStorage.getItem("uid")&&t.$router.push({name:"Home"});case 9:case"end":return e.stop()}}),e)})))()},signIn:function(){var t=this;console.log(this.email),console.log(this.password),d().post("/auth/sign_in",{email:this.email,password:this.password}).then((function(e){localStorage.setItem("access-token",e.headers["access-token"]),localStorage.setItem("client",e.headers["client"]),localStorage.setItem("uid",e.headers["uid"]),localStorage.setItem("id",e.data.data["id"]),t.user={uid:e.headers["uid"],"access-token":e.headers["access-token"],client:e.headers["client"]},t.$store.dispatch("userLogin",t.user),t.$store.commit("setMessage",{status:!1}),t.email==e.headers["uid"]&&t.$router.push({name:"Home"})}))}}}),st=ot,it=(a("bf48"),a("4bd4")),rt=a("8654"),ct=Object(g["a"])(st,et,at,!1,null,"73b882c6",null),lt=ct.exports;h()(ct,{VBtn:z["a"],VCol:Y["a"],VContainer:Q["a"],VForm:it["a"],VIcon:W["a"],VRow:X["a"],VTextField:rt["a"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-card",{attrs:{width:"30%",height:"100%"}},[n("v-list",{attrs:{dense:""}},[n("v-subheader",{staticClass:"text-h5"},[t._v("親")]),n("v-divider"),n("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.family,(function(e,a){return n("v-list-item",{key:a},[n("v-list-item-icon",[n("v-avatar",{attrs:{size:"30"}},[n("img",{attrs:{src:e.avatar}})])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h8"},[t._v(" "+t._s(e.name)+" ("+t._s(e.relation)+")")])],1)],1)})),n("v-divider")],2)],1)],1),n("v-col",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400","max-height":"100%"}},[n("v-img",{attrs:{src:a("7e8f"),height:"100%",width:"100%"}},[n("v-card-actions",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-camera")])],1)],1)],1),n("v-card-title",[t._v(" 山本 まこと ")]),n("v-row",[n("v-card-subtitle",[t._v(" 2002/1/3 ")])],1)],1),n("v-container",[n("v-btn",{attrs:{icon:"","x-large":""},on:{click:t.editMessage}},[n("v-icon",[t._v(" mdi-email ")])],1)],1)],1),n("v-col",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-card-actions",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v(" mdi-plus ")])],1),n("v-card-title",{attrs:{"font-italic":""}},[t._v(" イベント ")])],1),n("v-list",t._l(t.events,(function(e,a){return n("v-list-item",{key:a},[n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.date)+" ")]),n("v-list-item-subtitle",{staticClass:"mb-2"},[t._v(" "+t._s(e.body)+" ")]),n("v-list-item-action-text",[n("v-divider")],1)],1)],1)})),1)],1),n("v-card",{staticClass:"mt-5 mx-auto",attrs:{"max-width":"400"}},[n("v-card-actions",[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v(" mdi-pen ")])],1),n("v-dialog",{attrs:{"retain-focus":!1,persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("ひとこと")])]),n("v-card-text",[n("v-container",[n("v-textarea",{attrs:{required:""},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{"icon,":"",dialog:"false"}},[n("v-icon",[t._v(" mdi-check")])],1)],1)],1)],1),n("v-card-title",{attrs:{"font-italic":""}},[t._v(" ひとこと ")])],1),n("v-card-text",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(t.comment)+" ")])],1)],1)],1)},dt=[],vt={data:function(){return{family:[{name:"太郎",relation:"父",avatar:a("7e8f")},{name:"花子",relation:"母",avatar:a("7e8f")}],items:[{name:"太郎",relation:"父",avatar:a("5154")},{name:"花子",relation:"母",avatar:a("5154")},{text:"Conversions",avatar:a("5154")}],events:[{date:"2021/11/24",body:"誕生日"},{date:"2022/2/21",body:"BTSのライブ"},{date:"2023/3/17",body:"専門学校卒業"}],profiles:[{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""}],dialog:!1,comment:"卒業まであとわずか\n２月にイタリアへの卒業旅行，ちゃんと行けるかなー"}},methods:{editMessage:function(){this.$router.push({name:"SendMessage"})}}},mt=vt,gt=a("8212"),ft=a("169a"),ht=a("ce7e"),pt=a("adda"),bt=a("34c3"),_t=a("2fa4"),xt=a("e0c7"),Vt=a("a844"),kt=Object(g["a"])(mt,ut,dt,!1,null,null,null),wt=kt.exports;h()(kt,{VAvatar:gt["a"],VBtn:z["a"],VCard:J["a"],VCardActions:K["a"],VCardSubtitle:K["b"],VCardText:K["c"],VCardTitle:K["d"],VCol:Y["a"],VContainer:Q["a"],VDialog:ft["a"],VDivider:ht["a"],VIcon:W["a"],VImg:pt["a"],VList:_["a"],VListItem:x["a"],VListItemActionText:k["a"],VListItemContent:k["b"],VListItemGroup:V["a"],VListItemIcon:bt["a"],VListItemSubtitle:k["c"],VListItemTitle:k["d"],VRow:X["a"],VSpacer:_t["a"],VSubheader:xt["a"],VTextarea:Vt["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-list",[t._l(t.messages,(function(e,n){return[a("v-list-item",{key:n,on:{click:function(a){return t.showMessage(e)}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.from)+"さんからメッセージが届いています ")])],1),a("v-list-item-action",[a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.deleteMessage(e)}}},[a("v-icon",[t._v(" mdi-delete ")])],1)],1)],1),n+1<t.messages.length?a("v-divider",{key:"divider-"+n}):t._e()]}))],2)],1)],1)},Ct=[],St={data:function(){return{search:"",messages:{},recieved:{}}},mounted:function(){var t=this;d().get("/searches",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.messages=e.data}))},methods:{deleteMessage:function(t){d().delete("/messages/".concat(t.id),{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}})},showMessage:function(t){this.$router.push({name:"Message",params:{content:t}})}}},yt=St,Lt=a("1800"),jt=Object(g["a"])(yt,It,Ct,!1,null,null,null),Tt=jt.exports;h()(jt,{VBtn:z["a"],VCard:J["a"],VContainer:Q["a"],VDivider:ht["a"],VIcon:W["a"],VList:_["a"],VListItem:x["a"],VListItemAction:Lt["a"],VListItemContent:k["b"],VListItemTitle:k["d"]});var Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mt-15"},[a("v-col",{attrs:{cols:"3"}},[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-email ")])],1),a("v-col",{attrs:{cols:"9"}},[a("v-card",[a("v-card-text",[t._v(" メッセージを送る ")])],1)],1)],1),a("v-row",{staticClass:"mt-15"},[a("v-col",[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-bell ")])],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" 1/22 おじいちゃんの誕生日 ")])],1)],1),a("v-col",[a("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-heart ")])],1),a("v-col",[a("v-card",[a("v-card-text",[t._v(" メモリー ")])],1)],1)],1)],1)},At=[],$t={},Ft=Object(g["a"])($t,Ot,At,!1,null,null,null),Mt=Ft.exports;h()(Ft,{VCard:J["a"],VCardText:K["c"],VCol:Y["a"],VContainer:Q["a"],VIcon:W["a"],VRow:X["a"]});var Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"1"}},[n("v-avatar",{attrs:{size:"100"}},[n("img",{attrs:{src:a("7e8f")}})])],1),n("v-col",{attrs:{cols:"5"}},[n("v-row",[n("v-card-text",[n("div",{staticClass:"text-h4"},[t._v(" ゆうた誕生日おめでとう! ")])])],1),n("v-row",[n("v-col",[n("strong",[t._v("受信時刻：2021/05/23 10:13")])]),n("v-col",[n("strong",[t._v("発信時刻:2021/05/21 15:13")])])],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-plus ")])],1)],1),n("v-col",{attrs:{cols:"10"}},[t._v(" aaaaaaaaaaaaaaaa ")])],1)],1)},Et=[],Bt=(a("3b31"),{}),Dt=Object(g["a"])(Bt,Rt,Et,!1,null,null,null),Pt=Dt.exports;h()(Dt,{VAvatar:gt["a"],VBtn:z["a"],VCardText:K["c"],VCol:Y["a"],VContainer:Q["a"],VIcon:W["a"],VRow:X["a"]});var Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"bg",attrs:{fluid:"","fill-height":""}},[n("v-col",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-img",{attrs:{src:a("7e8f"),height:"300px"}},[n("v-card-actions",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-camera")])],1)],1)],1),n("v-card-title",[t._v(" 山本 まこと ")]),n("v-row",[n("v-card-subtitle",[t._v(" 2002/1/3 ")])],1)],1)],1),n("v-col",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-card-actions",[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v(" mdi-plus ")])],1),n("v-card-title",{attrs:{"font-italic":""}},[t._v(" イベント ")])],1),n("v-list",t._l(t.events,(function(e,a){return n("v-list-item",{key:a},[n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.date)+" ")]),n("v-list-item-subtitle",{staticClass:"mb-2"},[t._v(" "+t._s(e.body)+" ")]),n("v-list-item-action-text",[n("v-divider")],1)],1)],1)})),1)],1),n("v-card",{staticClass:"mt-5 mx-auto",attrs:{"max-width":"400"}},[n("v-card-actions",[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v(" mdi-pen ")])],1),n("v-dialog",{attrs:{"retain-focus":!1,persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("ひとこと")])]),n("v-card-text",[n("v-container",[n("v-textarea",{attrs:{required:""},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{"icon,":"",dialog:"false"}},[n("v-icon",[t._v(" mdi-check")])],1)],1)],1)],1),n("v-card-title",{attrs:{"font-italic":""}},[t._v(" ひとこと ")])],1),n("v-card-text",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(t.comment)+" ")])],1)],1),n("v-col",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n("v-card-title",{attrs:{"font-italic":""}},[t._v(" プロフィール ")]),n("v-row",{attrs:{"align-content":"center"}},[n("v-col",[n("v-list",t._l(t.profiles,(function(e,a){return n("v-list-item",{key:a},[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",[t._v("mdi-minus")]),t._v(" "+t._s(e.content))],1)],1)],1)})),1)],1)],1)],1)],1)],1)},qt=[],Ht={data:function(){return{events:[{date:"2021/11/24",body:"誕生日"},{date:"2022/2/21",body:"BTSのライブ"},{date:"2023/3/17",body:"専門学校卒業"}],profiles:[{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""},{content:""}],dialog:!1,comment:"卒業まであとわずか．\n２月にイタリアへの卒業旅行，ちゃんと行けるかなー"}}},Gt=Ht,Nt=(a("2a37"),Object(g["a"])(Gt,Ut,qt,!1,null,null,null)),zt=Nt.exports;h()(Nt,{VBtn:z["a"],VCard:J["a"],VCardActions:K["a"],VCardSubtitle:K["b"],VCardText:K["c"],VCardTitle:K["d"],VCol:Y["a"],VContainer:Q["a"],VDialog:ft["a"],VDivider:ht["a"],VIcon:W["a"],VImg:pt["a"],VList:_["a"],VListItem:x["a"],VListItemActionText:k["a"],VListItemContent:k["b"],VListItemSubtitle:k["c"],VListItemTitle:k["d"],VRow:X["a"],VSpacer:_t["a"],VTextarea:Vt["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-list",t._l(t.member,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.name)+" ")])],1),a("v-list-item-action",[a("v-btn",{on:{click:function(a){return t.followFeind(e.id)}}},[t._v(" フォロー ")])],1)],1)})),1)],1),a("v-card",[a("v-list",t._l(t.friend,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1)],1),a("v-card",[a("v-list",t._l(t.follower,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1)],1)],1)},Kt=[],Yt={data:function(){return{member:{},friend:{},follower:{}}},mounted:function(){var t=this;d().get("/users",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.member=e.data,console.log(e.data)}))},methods:{followFeind:function(t){console.log(t),d().post("/users/"+t+"/relationships",{user_id:t},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t)}))}}},Qt=Yt,Wt=Object(g["a"])(Qt,Jt,Kt,!1,null,null,null),Xt=Wt.exports;h()(Wt,{VBtn:z["a"],VCard:J["a"],VContainer:Q["a"],VList:_["a"],VListItem:x["a"],VListItemAction:Lt["a"],VListItemContent:k["b"],VListItemTitle:k["d"]});var Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"space-around"}},[a("v-card-text",[a("div",{staticClass:"font-weight-bold"},[t._v(" 2021 ")]),a("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.messages,(function(e){return a("v-timeline-item",{key:e.time,attrs:{color:e.color,small:""}},[a("v-card",[a("div",[a("v-card-title",{staticClass:"title"},[a("v-col",{attrs:{cols:"8"}},[t._v(" "+t._s(e.time)+" ")]),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!0}}},[a("v-icon",[t._v(" mdi-book ")])],1),a("v-dialog",{attrs:{"retain-focus":!1,persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("コメントする")])]),a("v-card-text",[a("v-container",[a("v-textarea",{attrs:{required:""},model:{value:e.comment,callback:function(a){t.$set(e,"comment",a)},expression:"message.comment"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.saveComment(),t.dialog=!1}}},[a("v-icon",[t._v(" mdi-check")])],1)],1)],1)],1)],1)],1),a("v-card-text",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(e.title)+" ")]),a("v-divider")],1)])],1)})),1)],1)],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.lookComment(),t.dialog=!1}}},[a("v-icon",[t._v(" mdi-star")])],1)],1)},te=[],ee=(a("159b"),a("fb6a"),""),ae={data:function(){return{messages:[],dialog:!1}},methods:{saveComment:function(){console.log("aaaaa"),console.log(this.messages)},lookComment:function(){console.log(this.messages)},showMessage:function(){this.$router.push({name:"MessageContent"})}},mounted:function(){var t=this;d().get("/users/"+localStorage.getItem("id")+"/messages",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.messages=e.data,console.log(t.messages),console.log(t.messages.length),t.messages.forEach((function(t){return console.log(t.time,ee=new Date(1e3*t.time),t.time=ee.getFullYear()+"/"+("0"+(ee.getMonth()+1)).slice(-2)+"/"+("0"+ee.getDate()).slice(-2)+" "+("0"+ee.getHours()).slice(-2)+":"+("0"+ee.getMinutes()).slice(-2))}))}))}},ne=ae,oe=a("8414"),se=a("1e06"),ie=Object(g["a"])(ne,Zt,te,!1,null,null,null),re=ie.exports;h()(ie,{VBtn:z["a"],VCard:J["a"],VCardActions:K["a"],VCardText:K["c"],VCardTitle:K["d"],VCol:Y["a"],VContainer:Q["a"],VDialog:ft["a"],VDivider:ht["a"],VIcon:W["a"],VRow:X["a"],VSpacer:_t["a"],VTextarea:Vt["a"],VTimeline:oe["a"],VTimelineItem:se["a"]});var ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"mt-5"},[n("v-combobox",{attrs:{"item-text":"name","item-value":"id",items:t.adress,label:"宛先",outlined:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),n("v-row",{staticClass:"m",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"2"}},[n("v-avatar",{attrs:{size:"100"}},[n("img",{attrs:{src:a("7e8f")}})])],1),n("v-col",{attrs:{cols:"5"}},[n("div",{staticClass:"text-h4"},[n("v-text-field",{attrs:{outlined:"",label:"件名"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("v-row",[n("v-col",[n("v-select",{attrs:{items:t.yearrange,label:"年"},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}})],1),n("v-col",[n("v-select",{attrs:{items:t.monthrange,label:"月"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1),n("v-col",[n("v-select",{attrs:{items:t.daysrange,label:"日"},model:{value:t.day,callback:function(e){t.day=e},expression:"day"}})],1),n("v-col",[n("v-select",{attrs:{items:t.hoursrange,label:"時"},model:{value:t.hour,callback:function(e){t.hour=e},expression:"hour"}})],1),n("v-col",[n("v-select",{attrs:{items:t.minutesrange,label:"分"},model:{value:t.minute,callback:function(e){t.minute=e},expression:"minute"}})],1)],1)],1)],1),n("v-row",[n("v-container",{attrs:{fluid:""}},[n("v-textarea",{attrs:{counter:"",label:"メッセージ",height:"300",value:t.value,outlined:""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1)],1),n("v-row",{attrs:{justify:"end"}},[n("v-card-actions",[n("v-btn",{attrs:{outlined:"",text:""},on:{click:t.sendMessage}},[t._v("送信する")])],1)],1)],1)},le=[],ue=a("5530"),de=a("2909"),ve=(a("d81d"),a("cb29"),a("d3b7"),a("ddb0"),a("2f62")),me=2021,ge=2100,fe=new Array(ge-me+1).fill(null).map((function(t,e){return e+me})),he=1,pe=12,be=new Array(pe-he+1).fill(null).map((function(t,e){return e+he})),_e=Object(de["a"])(Array(31)).map((function(t,e){return e})),xe=Object(de["a"])(Array(24)).map((function(t,e){return e})),Ve=Object(de["a"])(Array(60).keys()),ke={data:function(){return{head:"メッセージ送信",value:null,item_minutes:["0","1","2","3","4","5"],adress:[],select:"",to:"",body:"",year:"2021",yearrange:fe,month:"6",monthrange:be,day:"3",daysrange:_e,hour:"",hoursrange:xe,minute:"",minutesrange:Ve,time:[],title:[],message:{},user:""}},computed:Object(ue["a"])({},Object(ve["b"])(["user_token"])),mounted:function(){var t=this;d().get("/users",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}},console.log(this.user_token)).then((function(e){return t.adress=e.data,console.log(e)}))},methods:{sendMessage:function(){this.message.to_id=this.select.id,this.message.from_id=localStorage.getItem("id"),this.message.title=this.title,this.message.body=this.body;var t=new Date(this.year,this.month-1,this.day,this.hour,this.minute);this.message.time=t.getTime()/1e3,console.log(this.message),d().post("/users/"+localStorage.getItem("id")+"/messages",this.message,{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t.data)}))}}},we=ke,Ie=(a("0a5b"),a("2b5d")),Ce=a("b974"),Se=Object(g["a"])(we,ce,le,!1,null,null,null),ye=Se.exports;h()(Se,{VAvatar:gt["a"],VBtn:z["a"],VCardActions:K["a"],VCol:Y["a"],VCombobox:Ie["a"],VContainer:Q["a"],VRow:X["a"],VSelect:Ce["a"],VTextField:rt["a"],VTextarea:Vt["a"]});var Le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mt-8"},[a("v-card-title",[t._v(" ユーザ検索 ")]),a("v-card-text",[a("v-text-field",{attrs:{outlined:"",label:"メールアドレス"},model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}})],1),a("v-card-actions",[a("v-btn",{on:{click:t.searchUser}},[t._v(" 検索 ")])],1),t._v(" "+t._s(t.userSearched.name)+" "),t.userSearched.id>0?a("v-btn",{on:{click:function(e){return t.followFeind(t.item.id)}}},[t._v(" フォロー ")]):t._e()],1),a("v-card",{staticClass:"mt-8"},[a("v-card-title",[t._v(" フレンド申請中 ")]),a("v-list",t._l(t.toFriend,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.name)+" ")])],1),a("v-list-item-action",[a("v-btn",{on:{click:function(a){return t.destroyFriend(e.id)}}},[t._v(" 削除 ")])],1)],1)})),1)],1),a("v-card",{staticClass:"mt-8"},[a("v-card-title",[t._v(" 申請されいているフレンド ")]),a("v-list",t._l(t.fromFriend,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.name)+" ")])],1),a("v-list-item-action",[a("v-btn",{on:{click:function(a){return t.acceptFriend(e.id)}}},[t._v(" 承諾 ")]),a("v-btn",{on:{click:function(a){return t.destroyFriend(e.id)}}},[t._v(" 削除 ")])],1)],1)})),1)],1)],1)},je=[],Te={data:function(){return{toFriend:{},fromFriend:{},status:"",userSearched:{},mail:""}},mounted:function(){var t=this;d().get("/users/"+localStorage.getItem("id")+"/followings",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.toFriend=e.data,console.log(e.data)})),d().get("/users/"+localStorage.getItem("id")+"/followers",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return t.fromFriend=e.data,console.log(e.data)}))},methods:{destroyFriend:function(t){var e=this;console.log(t),d().delete("/users/"+t+"/relationships",{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.status=t.data.status,console.log(t),e.$router.go({path:e.$router.currentRoute.path,force:!0})}))},acceptFriend:function(t){var e=this;console.log(t),d().put("/users/"+t+"/relationships",{status:"true"},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return e.status=t.data.status,console.log(t),e.$router.go({path:e.$router.currentRoute.path,force:!0})}))},searchUser:function(){var t=this;d().get("/users/"+localStorage.getItem("id")+"/search",{params:{email:this.mail}},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(e){return console.log(e),t.userSearched=e.data,console.log(t.userSearched)}))},followFeind:function(t){console.log(t),d().post("/users/"+t+"/relationships",{user_id:t},{headers:{"access-token":localStorage.getItem("access-token"),uid:localStorage.getItem("uid"),client:localStorage.getItem("client")}}).then((function(t){return console.log(t)}))}}},Oe=Te,Ae=Object(g["a"])(Oe,Le,je,!1,null,null,null),$e=Ae.exports;h()(Ae,{VBtn:z["a"],VCard:J["a"],VCardActions:K["a"],VCardText:K["c"],VCardTitle:K["d"],VContainer:Q["a"],VList:_["a"],VListItem:x["a"],VListItemAction:Lt["a"],VListItemContent:k["b"],VListItemTitle:k["d"],VTextField:rt["a"]}),n["a"].use(U["a"]);var Fe=[{path:"/",name:"Login",component:lt,meta:{isPublic:!0}},{path:"/home",name:"Home",component:tt},{path:"/send",name:"Send",component:wt},{path:"/received",name:"Received",component:Tt},{path:"/message",name:"Message",component:Mt},{path:"/profile",name:"Profile",component:zt},{path:"/test",name:"Test",component:Xt},{path:"/timeline",name:"TimeLine",component:re},{path:"/sendmessage",name:"SendMessage",component:ye},{path:"/messagecontent",name:"MessageContent",component:Pt},{path:"/showrequest",name:"ShowRequest",component:$e}],Me=new U["a"]({mode:"history",base:"/sakura-front/",routes:Fe});Me.beforeEach((function(t,e,a){t.matched.some((function(t){return!t.meta.isPublic}))&&!localStorage.getItem("access-token")?a({name:"Login",query:{redirect:t.fullPath}}):a()}));var Re=Me,Ee=a("0e44");n["a"].use(ve["a"]);var Be=new ve["a"].Store({state:{user_token:{uid:"","access-token":"",client:""},flash_message:{status:!1,messasge:""},timeline:""},mutations:{USER_LOGIN:function(t,e){t.user_token=e},setMessage:function(t,e){t.flash_message=e},editComment:function(t,e){t.timeline=e}},actions:{userLogin:function(t,e){return Object(nt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,n("USER_LOGIN",e),a.abrupt("return",e);case 3:case"end":return a.stop()}}),a)})))()},editComment:function(t,e){return Object(nt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,n("editComment",e),a.abrupt("return",e);case 3:case"end":return a.stop()}}),a)})))()}},plugins:[Object(Ee["a"])({})],modules:{}}),De=a("f309");n["a"].use(De["a"]);var Pe=new De["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Re,store:Be,vuetify:Pe,render:function(t){return t(P)}}).$mount("#app")},"5ccf":function(t,e,a){},6873:function(t,e,a){t.exports=a.p+"img/sakura-card.a97567b2.png"},"6e65":function(t,e,a){},"7e8f":function(t,e,a){t.exports=a.p+"img/cat.62eb8506.jpg"},"7f4e":function(t,e,a){"use strict";a("6e65")},"85ec":function(t,e,a){},acf9:function(t,e,a){},bf48:function(t,e,a){"use strict";a("01c1")},f619:function(t,e,a){}});
//# sourceMappingURL=app.02832081.js.map