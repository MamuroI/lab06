(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],p=0,l=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"23ec":function(e,t,n){"use strict";n("bb24")},"46f2":function(e,t,n){"use strict";n("fe54")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={key:0,id:"flashMessage"},o={id:"nav"},a=Object(r["f"])("Home"),u=Object(r["f"])(" | "),i=Object(r["f"])("About");function s(e,t,n,s,b,p){var l=Object(r["w"])("router-link"),v=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[p.GStore.flashMessage?(Object(r["p"])(),Object(r["d"])("div",c,Object(r["y"])(p.GStore.flashMessage),1)):Object(r["e"])("",!0),Object(r["g"])("div",o,[Object(r["g"])(l,{to:{name:"EventList"}},{default:Object(r["B"])((function(){return[a]})),_:1}),u,Object(r["g"])(l,{to:{name:"About"}},{default:Object(r["B"])((function(){return[i]})),_:1})]),Object(r["g"])(v)],64)}var b={inject:["GStore"]};n("dcf3");b.render=s;var p=b,l=n("6c02"),v=Object(r["C"])("data-v-06612759");Object(r["s"])("data-v-06612759");var f=Object(r["g"])("h1",null,"Events For Good",-1),d={class:"events"},j={class:"pagination"},O=Object(r["f"])(" Prev Page"),g=Object(r["f"])(" Next Page");Object(r["q"])();var h=v((function(e,t,n,c,o,a){var u=Object(r["w"])("EventCard"),i=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])(r["a"],null,[f,Object(r["g"])("div",d,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.events,(function(e){return Object(r["p"])(),Object(r["d"])(u,{key:e.id,event:e},null,8,["event"])})),128)),Object(r["g"])("div",j,[1!=n.page?(Object(r["p"])(),Object(r["d"])(i,{key:0,id:"page-prev",to:{name:"EventList",query:{page:n.page-1}},rel:"prev"},{default:v((function(){return[O]})),_:1},8,["to"])):Object(r["e"])("",!0),a.hasNextPage?(Object(r["p"])(),Object(r["d"])(i,{key:1,id:"page-next",to:{name:"EventList",query:{page:n.page+1}},rel:"next"},{default:v((function(){return[g]})),_:1},8,["to"])):Object(r["e"])("",!0)])])],64)})),m=(n("a9e3"),Object(r["C"])("data-v-abd99634"));Object(r["s"])("data-v-abd99634");var y={class:"event-card"};Object(r["q"])();var E=m((function(e,t,n,c,o,a){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:m((function(){return[Object(r["g"])("div",y,[Object(r["g"])("span",null,"@"+Object(r["y"])(n.event.time)+" on "+Object(r["y"])(n.event.date),1),Object(r["g"])("h4",null,Object(r["y"])(n.event.title),1)])]})),_:1},8,["to"])})),k={name:"EventCard",props:{event:{type:Object,required:!0}}};n("23ec");k.render=E,k.__scopeId="data-v-abd99634";var w=k,_=n("bc3a"),S=n.n(_),x=S.a.create({baseURL:"https://my-json-server.typicode.com/MamuroI/lab06",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),M={getEvents:function(e,t){return x.get("/events?_limit="+e+"&_page="+t)},getEvent:function(e){return x.get("/events/"+e)}},G={name:"EventList",props:{page:{type:Number,required:!0}},components:{EventCard:w},data:function(){return{events:null,totalEvents:0}},beforeRouteEnter:function(e,t,n){M.getEvents(3,parseInt(e.query.page)||1).then((function(e){n((function(t){t.events=e.data,t.totalEvents=e.headers["x-total-count"]}))})).catch((function(){n({name:"NetworkError"})}))},beforeRouteUpdate:function(e){var t=this;M.getEvents(3,parseInt(e.query.page)||1).then((function(e){t.events=e.data,t.totalEvents=e.headers["x-total-count"]})).catch((function(){return{name:"NetworkError"}}))},computed:{hasNextPage:function(){var e=Math.ceil(this.totalEvents/3);return this.page<e}}};n("46f2");G.render=h,G.__scopeId="data-v-06612759";var P=G,q={class:"about"},C=Object(r["g"])("h1",null,"A site for events in CAMT.",-1);function R(e,t){return Object(r["p"])(),Object(r["d"])("div",q,[C])}const N={};N.render=R;var B=N;n("a4d3"),n("e01a");function L(e,t,n,c,o,a){return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("p",null,Object(r["y"])(n.event.time)+" on "+Object(r["y"])(n.event.date)+" @ "+Object(r["y"])(n.event.location),1),Object(r["g"])("p",null,Object(r["y"])(n.event.description),1)],64)}var A={props:["event"]};A.render=L;var I=A,T=Object(r["g"])("p",null,"Regstration form here",-1);function D(e,t,n,c,o,a){return Object(r["p"])(),Object(r["d"])(r["a"],null,[T,Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return a.register&&a.register.apply(a,arguments)})},"Register Me")],64)}var U={props:["event"],inject:["GStore"],methods:{register:function(){var e=this;this.GStore.flashMessage="You are successfully registered for "+this.event.title,setTimeout((function(){e.GStore.flashMessage=""}),3e3),this.$router.push({name:"EventDetails",params:{id:this.event.id}})}}};U.render=D;var F=U;function J(e,t,n,c,o,a){return Object(r["p"])(),Object(r["d"])("p",null,"Edit the event here")}var $={props:["event"]};$.render=J;var H=$,Y={key:0},z={id:"nav"},K=Object(r["f"])("Details"),Q=Object(r["f"])(" | "),V=Object(r["f"])("Register"),W=Object(r["f"])(" | "),X=Object(r["f"])("Edit");function Z(e,t,n,c,o,a){var u=Object(r["w"])("router-link"),i=Object(r["w"])("router-view");return a.GStore.event?(Object(r["p"])(),Object(r["d"])("div",Y,[Object(r["g"])("h1",null,Object(r["y"])(a.GStore.event.title),1),Object(r["g"])("div",z,[Object(r["g"])(u,{to:{name:"EventDetails"}},{default:Object(r["B"])((function(){return[K]})),_:1}),Q,Object(r["g"])(u,{to:{name:"EventRegister"}},{default:Object(r["B"])((function(){return[V]})),_:1}),W,Object(r["g"])(u,{to:{name:"EventEdit"}},{default:Object(r["B"])((function(){return[X]})),_:1})]),Object(r["g"])(i,{event:a.GStore.event},null,8,["event"])])):Object(r["e"])("",!0)}var ee={inject:["GStore"]};ee.render=Z;var te=ee,ne=Object(r["g"])("h1",null,"Oops!",-1),re=Object(r["f"])("Back to the home page");function ce(e,t,n,c,o,a){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",null,[ne,Object(r["g"])("h3",null,"The "+Object(r["y"])(n.resource)+" you're looking for is not here.",1),Object(r["g"])(u,{to:{name:"EventList"}},{default:Object(r["B"])((function(){return[re]})),_:1})])}var oe={props:{resource:{type:String,required:!0,default:"page"}}};oe.render=ce;var ae=oe,ue={class:"networkError"},ie=Object(r["g"])("h1",null,"Uh-Oh!",-1),se=Object(r["f"])(" It looks like you're experiencing some network issues, please take a breath and "),be=Object(r["f"])(" to try again. ");function pe(e,t){return Object(r["p"])(),Object(r["d"])("div",ue,[ie,Object(r["g"])("h3",null,[se,Object(r["g"])("a",{href:"#",onClick:t[1]||(t[1]=function(t){return e.$router.go(-1)})},"click here"),be])])}const le={};le.render=pe;var ve=le,fe=n("323e"),de=n.n(fe),je=Object(r["t"])({flashMessage:"",event:null}),Oe=[{path:"/",name:"EventList",component:P,props:function(e){return{page:parseInt(e.query.page)||1}}},{path:"/about",name:"About",component:B},{path:"/event/:id",name:"EventLayout",props:!0,component:te,beforeEnter:function(e){return M.getEvent(e.params.id).then((function(e){je.event=e.data})).catch((function(e){return e.response&&404==e.response.status?{name:"404Resource",params:{resource:"event"}}:{name:"NetworkError"}}))},children:[{path:"",name:"EventDetails",component:I},{path:"register",name:"EventRegister",props:!0,component:F},{path:"edit",name:"EventEdit",props:!0,component:H}]},{path:"/404/:resource",name:"404Resource",component:ae,props:!0},{path:"/:catchAll(.*)",name:"NotFound",component:ae},{path:"/network-error",name:"NetworkError",component:ve}],ge=Object(l["a"])({history:Object(l["b"])("/"),routes:Oe,scrollBehavior:function(e,t,n){return n||{top:0}}});ge.beforeEach((function(){de.a.start()})),ge.afterEach((function(){de.a.done()}));var he=ge;n("a5d8");Object(r["c"])(p).use(he).provide("GStore",je).mount("#app")},"688b":function(e,t,n){},bb24:function(e,t,n){},dcf3:function(e,t,n){"use strict";n("688b")},fe54:function(e,t,n){}});
//# sourceMappingURL=app.25078c3d.js.map