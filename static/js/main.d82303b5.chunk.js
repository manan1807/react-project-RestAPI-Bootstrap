(this["webpackJsonpbootstrap-app"]=this["webpackJsonpbootstrap-app"]||[]).push([[0],{33:function(e,t,n){e.exports=n(50)},38:function(e,t,n){},39:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},40:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(13),c=n.n(r),o=(n(38),n(39),n(40),n(52));var m=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"List function Component Using BootStrap"),l.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"City"))),l.a.createElement("tbody",null,[{name:"Manan",age:24,city:"Sirsa"},{name:"Kunal",age:25,city:"Delhi"},{name:"harshit",age:26,city:"Haldwani"}].map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.city))})))))},u=n(14);var i=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(u.a)(c,2),m=o[0],i=o[1],E=Object(a.useState)(""),s=Object(u.a)(E,2),p=s[0],h=s[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Form Component"),l.a.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Enter Name"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:function(e){return i(e.target.value)},placeholder:"Enter Age"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:function(e){return h(e.target.value)},placeholder:"Enter City"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){var e={name:n,age:m,city:p};alert("Details has been added to the Users List"),console.log(e)}},"ShowData"))};function E(){return l.a.createElement("h1",null,"Home Page")}var s=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("http://localhost:8080/topics").then((function(e){e.json().then((function(e){console.warn(e),r(e)}))}))}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"List function Component Using BootStrap"),l.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,n.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.description))})))))},p=n(15),h=n(3),d=n(53),f=n(54);var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.a,null,l.a.createElement(d.a,{bg:"dark",variant:"dark"},l.a.createElement(d.a.Brand,{href:"#home"},"Components"),l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(f.a.Link,{href:"#home"}," ",l.a.createElement(p.b,{to:"/Component/Home"},"Home")),l.a.createElement(f.a.Link,{href:"#features"},l.a.createElement(p.b,{to:"/Component/UsersList"},"UsersList")),l.a.createElement(f.a.Link,{href:"#pricing"},l.a.createElement(p.b,{to:"/Component/Form"},"Form")),l.a.createElement(f.a.Link,{href:"#pricing"},l.a.createElement(p.b,{to:"/Component/GetAPIonUserList"},"GETRequest")))),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/Component/Home"},l.a.createElement(E,null)),l.a.createElement(h.a,{path:"/Component/UsersList"},l.a.createElement(m,null)),l.a.createElement(h.a,{path:"/Component/Form"},l.a.createElement(i,null)),l.a.createElement(h.a,{path:"/Component/GetAPIonUserList"},l.a.createElement(s,null)))))};n(49);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d82303b5.chunk.js.map