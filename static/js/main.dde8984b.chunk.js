(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),s=(a(26),a(27),a(3)),i=(a(28),a(6)),u=(a(29),a(8)),o=[{name:"profile",location:"/profile",active:!0},{name:"projects",location:"/projects"},{name:"dotfiles",location:"/dotfiles"}];a(30);var m=function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],i=function(e){return e.classList.add("active")};return Object(n.useEffect)((function(){return function(){if(!c){var t=e.current.childNodes,a=!0,n=!1,r=void 0;try{for(var s,u=t[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var o=s.value;o.classList.contains("github")||(o.onclick=function(t){var a=t.target;e.current.childNodes.forEach((function(e){return e.classList.remove("active")})),i(a)})}}catch(m){n=!0,r=m}finally{try{a||null==u.return||u.return()}finally{if(n)throw r}}l(!0)}}()})),r.a.createElement("div",{id:"menu"},r.a.createElement("div",{ref:e,className:"sections"},o.map((function(e,t){var a;return r.a.createElement(u.b,{to:e.location,className:"section "+e.name+(a=e,"active"in a?" active":""),key:t})})),r.a.createElement("a",{href:"https://github.com/0-l/",target:"_blank",rel:"noopener noreferrer",className:"section github"},r.a.createElement("p",{style:{display:"none"}})),r.a.createElement("div",{className:"mark"})))},d=(a(36),a(10)),f=a.n(d),v=a(19),p=a(20),h=new(function(){function e(){Object(v.a)(this,e),this.url="https://api.github.com/users/"+this.username,this.data=this.getData()}return Object(p.a)(e,[{key:"getData",value:function(){var e;return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.awrap(fetch(this.url));case 3:if(e=t.sent,!this.achievedRateLimit(e)){t.next=6;break}return t.abrupt("return",this.defaultResponse);case 6:return t.next=8,f.a.awrap(e.json());case 8:return t.abrupt("return",t.sent);case 11:return t.prev=11,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",this.defaultResponse);case 15:case"end":return t.stop()}}),null,this,[[0,11]])}},{key:"achievedRateLimit",value:function(e){var t=e.status;return[403,404].includes(t)}},{key:"username",get:function(){var e=document.URL;return e.includes("localhost")?this.defaultResponse.username:e.split("/")[2].split(".")[0]}},{key:"defaultResponse",get:function(){return{username:"0-l",name:"Bruno",surname:"Coimbra",bio:"I'm a fullstack developer living in Brazil.",avatar_url:"../../../assets/avatar.jpg"}}}]),e}());var E=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return h.data.then((function(e){c(e.bio)})),r.a.createElement("div",{id:"profile"},r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,a))};var b=function(){return r.a.createElement(r.a.Fragment,null)};var j=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(i.f)(),c=Object(n.useState)(!1),l=Object(s.a)(c,2),u=l[0],o=l[1],d={expanded:"expanded",hidden:"hidden",fullscreen:"fullscreen",retracted:"retract"};Object(n.useEffect)((function(){!function(t){var a=e.current.parentNode;t?a.classList.add(d.fullscreen):a.classList.remove(d.fullscreen)}(["/projects"].includes(a.location.pathname))}),[a.location.pathname,d]);var f=function(){var a=e.current.classList;a.add(d.retracted),setTimeout((function(){a.remove(d.expanded),a.remove(d.retracted),t.current.classList.remove(d.hidden)}),500)};return r.a.createElement("div",{className:"more",ref:e,onClick:function(){u||(e.current.classList.add(d.expanded),o(!0),a.push("/profile"))}},r.a.createElement("div",{className:"dots",ref:t},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"more-info"},r.a.createElement("div",{className:"paginator"},r.a.createElement(i.b,{history:a},r.a.createElement("div",{onClick:function(){f(),o(!1),a.push("/")},className:"go-back"}),r.a.createElement("div",{className:"content"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/profile",component:E}),r.a.createElement(i.a,{exact:!0,path:"/projects",component:b}))),r.a.createElement(m,null)))))};a(38);var O=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return h.data.then((function(e){c(e.avatar_url)})),r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{alt:"",src:a}))};a(39);var g=function(e){return r.a.createElement("div",{className:e.loaded?"loader loaded":"loader"})};var N=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),u=i[0],o=i[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),f=d[0],v=d[1];return h.data.then((function(e){c(e.name),o(e.surname),v(!1)})),Object(n.useEffect)((function(){v(!0)}),[a,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{loaded:f}),r.a.createElement("div",{id:"card"},r.a.createElement(O,null),r.a.createElement("div",{className:"info"},r.a.createElement("h1",{className:"fullname"},r.a.createElement("span",null,a),r.a.createElement("span",{className:"surname"}," ",u)),r.a.createElement("h2",{className:"role"},"Developer")),r.a.createElement(j,null)))};function k(){return r.a.createElement(u.a,{basename:window.location.pathname||"/"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:N})))}var y=function(){return r.a.createElement(k,null)};l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.dde8984b.chunk.js.map