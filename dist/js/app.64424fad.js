(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],b=0,l=[];b<u.length;b++)a=u[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var p=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0475":function(e,t,n){"use strict";n("9165")},"23ec":function(e,t,n){"use strict";n("bb24")},"46f2":function(e,t,n){"use strict";n("fe54")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={key:0,id:"flashMessage"},c=Object(r["g"])("h1",null,"Pongpanoth Panya",-1),a={id:"nav"},u=Object(r["f"])("Home"),i=Object(r["f"])(" | "),s=Object(r["f"])("About");function p(e,t,n,p,b,l){var v=Object(r["w"])("router-link"),f=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[l.GStore.flashMessage?(Object(r["p"])(),Object(r["d"])("div",o,Object(r["y"])(l.GStore.flashMessage),1)):Object(r["e"])("",!0),c,Object(r["g"])("div",a,[Object(r["g"])(v,{to:{name:"EventList"}},{default:Object(r["B"])((function(){return[u]})),_:1}),i,Object(r["g"])(v,{to:{name:"About"}},{default:Object(r["B"])((function(){return[s]})),_:1})]),Object(r["g"])(f)],64)}var b={inject:["GStore"]};n("0475");b.render=p;var l=b,v=n("6c02"),f=Object(r["C"])("data-v-06612759");Object(r["s"])("data-v-06612759");var d=Object(r["g"])("h1",null,"Events For Good",-1),j={class:"events"},O={class:"pagination"},g=Object(r["f"])(" Prev Page"),h=Object(r["f"])(" Next Page");Object(r["q"])();var m=f((function(e,t,n,o,c,a){var u=Object(r["w"])("EventCard"),i=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])(r["a"],null,[d,Object(r["g"])("div",j,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.events,(function(e){return Object(r["p"])(),Object(r["d"])(u,{key:e.id,event:e},null,8,["event"])})),128)),Object(r["g"])("div",O,[1!=n.page?(Object(r["p"])(),Object(r["d"])(i,{key:0,id:"page-prev",to:{name:"EventList",query:{page:n.page-1}},rel:"prev"},{default:f((function(){return[g]})),_:1},8,["to"])):Object(r["e"])("",!0),a.hasNextPage?(Object(r["p"])(),Object(r["d"])(i,{key:1,id:"page-next",to:{name:"EventList",query:{page:n.page+1}},rel:"next"},{default:f((function(){return[h]})),_:1},8,["to"])):Object(r["e"])("",!0)])])],64)})),y=(n("a9e3"),Object(r["C"])("data-v-abd99634"));Object(r["s"])("data-v-abd99634");var E={class:"event-card"};Object(r["q"])();var k=y((function(e,t,n,o,c,a){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:y((function(){return[Object(r["g"])("div",E,[Object(r["g"])("span",null,"@"+Object(r["y"])(n.event.time)+" on "+Object(r["y"])(n.event.date),1),Object(r["g"])("h4",null,Object(r["y"])(n.event.title),1)])]})),_:1},8,["to"])})),w={name:"EventCard",props:{event:{type:Object,required:!0}}};n("23ec");w.render=k,w.__scopeId="data-v-abd99634";var _=w,S=n("bc3a"),x=n.n(S),M=x.a.create({baseURL:"https://my-json-server.typicode.com/MamuroI/lab06",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),P={getEvents:function(e,t){return M.get("/events?_limit="+e+"&_page="+t)},getEvent:function(e){return M.get("/events/"+e)}},G={name:"EventList",props:{page:{type:Number,required:!0}},components:{EventCard:_},data:function(){return{events:null,totalEvents:0}},beforeRouteEnter:function(e,t,n){P.getEvents(3,parseInt(e.query.page)||1).then((function(e){n((function(t){t.events=e.data,t.totalEvents=e.headers["x-total-count"]}))})).catch((function(){n({name:"NetworkError"})}))},beforeRouteUpdate:function(e){var t=this;P.getEvents(3,parseInt(e.query.page)||1).then((function(e){t.events=e.data,t.totalEvents=e.headers["x-total-count"]})).catch((function(){return{name:"NetworkError"}}))},computed:{hasNextPage:function(){var e=Math.ceil(this.totalEvents/3);return this.page<e}}};n("46f2");G.render=m,G.__scopeId="data-v-06612759";var q=G,C={class:"about"},R=Object(r["g"])("h1",null,"A site for events in CAMT.",-1);function N(e,t){return Object(r["p"])(),Object(r["d"])("div",C,[R])}const B={};B.render=N;var L=B;n("a4d3"),n("e01a");function A(e,t,n,o,c,a){return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("p",null,Object(r["y"])(n.event.time)+" on "+Object(r["y"])(n.event.date)+" @ "+Object(r["y"])(n.event.location),1),Object(r["g"])("p",null,Object(r["y"])(n.event.description),1)],64)}var I={props:["event"]};I.render=A;var T=I,D=Object(r["g"])("p",null,"Regstration form here",-1);function U(e,t,n,o,c,a){return Object(r["p"])(),Object(r["d"])(r["a"],null,[D,Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return a.register&&a.register.apply(a,arguments)})},"Register Me")],64)}var F={props:["event"],inject:["GStore"],methods:{register:function(){var e=this;this.GStore.flashMessage="You are successfully registered for "+this.event.title,setTimeout((function(){e.GStore.flashMessage=""}),3e3),this.$router.push({name:"EventDetails",params:{id:this.event.id}})}}};F.render=U;var J=F;function $(e,t,n,o,c,a){return Object(r["p"])(),Object(r["d"])("p",null,"Edit the event here")}var H={props:["event"]};H.render=$;var Y=H,z={key:0},K={id:"nav"},Q=Object(r["f"])("Details"),V=Object(r["f"])(" | "),W=Object(r["f"])("Register"),X=Object(r["f"])(" | "),Z=Object(r["f"])("Edit");function ee(e,t,n,o,c,a){var u=Object(r["w"])("router-link"),i=Object(r["w"])("router-view");return a.GStore.event?(Object(r["p"])(),Object(r["d"])("div",z,[Object(r["g"])("h1",null,Object(r["y"])(a.GStore.event.title),1),Object(r["g"])("div",K,[Object(r["g"])(u,{to:{name:"EventDetails"}},{default:Object(r["B"])((function(){return[Q]})),_:1}),V,Object(r["g"])(u,{to:{name:"EventRegister"}},{default:Object(r["B"])((function(){return[W]})),_:1}),X,Object(r["g"])(u,{to:{name:"EventEdit"}},{default:Object(r["B"])((function(){return[Z]})),_:1})]),Object(r["g"])(i,{event:a.GStore.event},null,8,["event"])])):Object(r["e"])("",!0)}var te={inject:["GStore"]};te.render=ee;var ne=te,re=Object(r["g"])("h1",null,"Oops!",-1),oe=Object(r["f"])("Back to the home page");function ce(e,t,n,o,c,a){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",null,[re,Object(r["g"])("h3",null,"The "+Object(r["y"])(n.resource)+" you're looking for is not here.",1),Object(r["g"])(u,{to:{name:"EventList"}},{default:Object(r["B"])((function(){return[oe]})),_:1})])}var ae={props:{resource:{type:String,required:!0,default:"page"}}};ae.render=ce;var ue=ae,ie={class:"networkError"},se=Object(r["g"])("h1",null,"Uh-Oh!",-1),pe=Object(r["f"])(" It looks like you're experiencing some network issues, please take a breath and "),be=Object(r["f"])(" to try again. ");function le(e,t){return Object(r["p"])(),Object(r["d"])("div",ie,[se,Object(r["g"])("h3",null,[pe,Object(r["g"])("a",{href:"#",onClick:t[1]||(t[1]=function(t){return e.$router.go(-1)})},"click here"),be])])}const ve={};ve.render=le;var fe=ve,de=n("323e"),je=n.n(de),Oe=Object(r["t"])({flashMessage:"",event:null}),ge=[{path:"/",name:"EventList",component:q,props:function(e){return{page:parseInt(e.query.page)||1}}},{path:"/about",name:"About",component:L},{path:"/event/:id",name:"EventLayout",props:!0,component:ne,beforeEnter:function(e){return P.getEvent(e.params.id).then((function(e){Oe.event=e.data})).catch((function(e){return e.response&&404==e.response.status?{name:"404Resource",params:{resource:"event"}}:{name:"NetworkError"}}))},children:[{path:"",name:"EventDetails",component:T},{path:"register",name:"EventRegister",props:!0,component:J},{path:"edit",name:"EventEdit",props:!0,component:Y}]},{path:"/404/:resource",name:"404Resource",component:ue,props:!0},{path:"/:catchAll(.*)",name:"NotFound",component:ue},{path:"/network-error",name:"NetworkError",component:fe}],he=Object(v["a"])({history:Object(v["b"])("/"),routes:ge,scrollBehavior:function(e,t,n){return n||{top:0}}});he.beforeEach((function(){je.a.start()})),he.afterEach((function(){je.a.done()}));var me=he;n("a5d8");Object(r["c"])(l).use(me).provide("GStore",Oe).mount("#app")},9165:function(e,t,n){},bb24:function(e,t,n){},fe54:function(e,t,n){}});
//# sourceMappingURL=app.64424fad.js.map