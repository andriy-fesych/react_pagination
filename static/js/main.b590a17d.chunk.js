(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(17),r=a.n(c),n=a(11),l=a(2),s=(a(28),a(5)),i=a(0),o=a(22),j=a.n(o),b=a(3),u=function(e){var t=e.total,a=Object(n.b)(),c=Object(s.a)(a,2),r=c[0],l=c[1],i=Number(r.get("page"))||1,o=Math.ceil(t/(Number(r.get("perPage"))||5));function u(e){e.preventDefault();var t=new URLSearchParams(r);Number.isNaN(e.currentTarget.innerText)||(t.set("page",e.currentTarget.innerText),l(t)),"\xab"===e.currentTarget.innerText&&(t.set("page","".concat(i-1)),l(t)),"\xbb"===e.currentTarget.innerText&&(t.set("page","".concat(i+1)),l(t))}return Object(b.jsxs)("ul",{className:"pagination",children:[Object(b.jsx)("li",{className:j()("page-item",{disabled:1===(Number(r.get("page"))||1)}),children:Object(b.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===(Number(r.get("page"))||1),onClick:u,children:"\xab"})}),function(){for(var e=[],t=1;t<=o;t+=1)e.push(Object(b.jsx)("li",{className:j()("page-item",{active:i===t}),children:Object(b.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"/",onClick:u,children:t})}));return e}(),Object(b.jsx)("li",{className:j()("page-item",{disabled:i===o}),children:Object(b.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":i===o,onClick:u,children:"\xbb"})})]})};function m(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var g=m(1,42).map((function(e){return Object(b.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)})})),p=function(){var e=Object(i.useState)(42),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.b)(),l=Object(s.a)(r,2),o=l[0],j=l[1],p=Number(o.get("page"))||1,d=Number(o.get("perPage"))||5,h=(p-1)*d+1,x=h+d>g.length?g.length:h+d-1;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{children:["Items with Pagination,",Object(b.jsx)("br",{}),"current items per page is ".concat(o.get("perPage")||"default is 5"),Object(b.jsx)("br",{}),"current page is ".concat(o.get("page")||"default 1"),Object(b.jsx)("br",{}),"current params are: ".concat(o.toString().replace(/&/g,"; "))]}),Object(b.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(p," (items ").concat(h," - ").concat(x," of ").concat(g.length,")")}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(b.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:Number(o.get("perPage"))||5,onChange:function(e){return function(e){var t=new URLSearchParams(o);t.set("perPage","".concat(e)),t.set("page","1"),j(t)}(+e.target.value)},children:[Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"5",children:"5"}),Object(b.jsx)("option",{value:"10",children:"10"}),Object(b.jsx)("option",{value:"20",children:"20"})]})}),Object(b.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("input",{id:"totalItems",type:"number",value:a,onChange:function(e){return function(e){c(e),g=m(1,e).map((function(e){return Object(b.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)})}));var t=new URLSearchParams(o);t.set("page","1"),j(t)}(+e.target.value)},max:"999",className:"col-3 col-sm-2 col-xl-1"}),Object(b.jsx)("label",{htmlFor:"totalItems",className:"col-form-label col",children:"Total items"})]}),Object(b.jsx)(u,{total:g.length}),Object(b.jsx)("ul",{children:g.slice(h-1,x)})]})},d=function(){return Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",element:Object(b.jsx)(p,{})}),Object(b.jsx)(l.b,{path:"/home",element:Object(b.jsx)(l.a,{to:"/",replace:!0})})]})};r.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b590a17d.chunk.js.map