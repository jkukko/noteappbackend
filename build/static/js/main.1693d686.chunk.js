(this.webpackJsonpnoteapp_front=this.webpackJsonpnoteapp_front||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(2),o=e(15),r=e.n(o),a=e(6),i=e(3),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content,Object(u.jsx)("button",{onClick:e,children:c})]})},j=function(t){var n=t.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})},l=e(4),f=e.n(l),p="https://noteareimportant.herokuapp.com/api/notes",b=function(){var t=f.a.get(p),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},d=function(t){return f.a.post(p,t).then((function(t){return t.data}))},h=function(t,n){return f.a.put("".concat(p,"/").concat(t),n).then((function(t){return t.data}))},m=function(){var t=Object(c.useState)([]),n=Object(i.a)(t,2),e=n[0],o=n[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),f=l[0],p=l[1],m=Object(c.useState)(!0),O=Object(i.a)(m,2),v=O[0],x=O[1],g=Object(c.useState)(null),k=Object(i.a)(g,2),S=k[0],w=k[1];Object(c.useEffect)((function(){b().then((function(t){o(t)}))}),[]);var I=v?e:e.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:S}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return x(!v)},children:["show ",v?"important":"all"]})}),Object(u.jsx)("ul",{children:I.map((function(t,n){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){"http://localhost:3001/notes/".concat(t);var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});h(t,c).then((function(n){o(e.map((function(e){return e.id!==t?e:n})))})).catch((function(t){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}},n)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:f,date:(new Date).toISOString(),important:Math.random()>.5,id:e.length+1};d(n).then((function(t){o(e.concat(t)),p("")}))},children:[Object(u.jsx)("input",{value:f,onChange:function(t){p(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]})]})};e(39);r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1693d686.chunk.js.map