(this["webpackJsonpgoogle-keep"]=this["webpackJsonpgoogle-keep"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},50:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(12),r=c.n(s),i=(c(44),c(18)),a=(c(45),c(30)),o=c(31),l=c(38),d=c(36),j=(c(46),c(13)),b="add-note",u="remove-note",x="clear-notes",h="edit-note",m=function(e){return{type:u,id:e}},O=c(77),f=c(78),p=c(89),v=c(79),y=(c(50),c(2));var N=function(e){var t=Object(j.c)(),c=Object(n.useState)(!1),s=Object(i.a)(c,2),r=s[0],a=s[1],o=function(){return a(!r)},l=Object(n.useRef)(),d=Object(n.useRef)();return Object(y.jsxs)("div",{className:" d-flex    flex-column justify-content-center  col-12  col-lg-2 col-md-4 col-sm-6  ",children:[Object(y.jsxs)("div",{className:" my-2 p-2 note d-flex flex-column justify-content-between ",children:[Object(y.jsx)("h4",{className:"mb-0",children:e.header}),Object(y.jsx)("hr",{}),Object(y.jsx)("p",{children:e.text}),Object(y.jsxs)("div",{className:"d-flex justify-content-around my-3",children:[Object(y.jsx)("button",{className:"btn",onClick:function(){t(m(e.id))},children:Object(y.jsx)(O.a,{})}),Object(y.jsx)("button",{className:"btn",onClick:o,children:Object(y.jsx)(f.a,{})})]})]}),Object(y.jsx)("div",{children:Object(y.jsx)(p.a,{isOpen:r,toggle:o,centered:!0,style:{maxWidth:"1200px",width:"80%"},children:Object(y.jsx)(v.a,{className:"invest-content",children:Object(y.jsx)("div",{className:"form-container my-5 d-flex justify-content-center",children:Object(y.jsxs)("form",{onSubmit:function(c){var n,s,r;c.preventDefault(),t((n=e.id,s=l.current.value,r=d.current.value,{type:h,id:n,header:s,text:r})),o()},className:"form px-5 d-flex flex-column",children:[Object(y.jsx)("input",{type:"text",className:"form-control title",placeholder:"Title",ref:l,required:!0}),Object(y.jsx)("input",{type:"text",className:"form-control title",placeholder:"Subject",ref:d,required:!0}),Object(y.jsx)("div",{className:"w-100 d-flex justify-content-end mt-3 mb-1",children:Object(y.jsx)("button",{className:"btn mb-3 ",type:"submit",children:"Add Note"})})]})})})})})]})},g=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.notes;return Object(y.jsxs)("div",{className:"content text-center ",children:[e.length?Object(y.jsx)("div",{className:"row px-3 mx-0  ",children:e.map((function(e){return Object(y.jsx)(N,{header:e.header,text:e.text,id:e.id})}))}):Object(y.jsxs)("h1",{children:["there is no notes ",Object(y.jsx)("br",{})," add some"]}),Object(y.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(y.jsx)("button",{className:"btn mb-3 ",onClick:this.props.clear_Notes,children:"Clear Notes"})})]})}}]),c}(n.Component);var k=Object(j.b)((function(e){return{notes:e}}),{remove_Note:m,clear_Notes:function(){return{type:x}}})(g),w=c(80),C=c(81),S=c(82),T=c(83),P=(c(59),function(){return Object(y.jsxs)("div",{className:"footer text-center  py-4",children:[Object(y.jsx)("h6",{children:"Designed By Abdelaziz"}),Object(y.jsx)("h6",{children:"@Copyright All rights reserved"}),Object(y.jsxs)("div",{className:"icons my-1",children:[Object(y.jsx)("span",{children:Object(y.jsx)(w.a,{})}),Object(y.jsx)("span",{children:Object(y.jsx)(C.a,{})}),Object(y.jsx)("span",{children:Object(y.jsx)(S.a,{})}),Object(y.jsx)("span",{children:Object(y.jsx)(T.a,{})})]})]})});c(60);function B(){var e=Object(j.c)(),t=Object(n.useRef)(),c=Object(n.useRef)();return Object(y.jsx)("div",{className:"form-container my-5 d-flex justify-content-center",children:Object(y.jsxs)("form",{onSubmit:function(n){var s,r;n.preventDefault(),e((s=t.current.value,r=c.current.value,{type:b,header:s,text:r})),t.current.value="",c.current.value=""},className:"form px-5 d-flex flex-column",children:[Object(y.jsx)("input",{type:"text",className:"form-control title",placeholder:"Title",ref:t,required:!0}),Object(y.jsx)("input",{type:"text",className:"form-control title",placeholder:"Subject",ref:c,required:!0}),Object(y.jsx)("div",{className:"w-100 d-flex justify-content-end mt-3 mb-1",children:Object(y.jsx)("button",{className:"btn mb-3 ",type:"submit",children:"Add Note"})})]})})}c(61);var D=c(84),R=c(85),q=c(86),H=c(87),_=c(88),A=c.p+"static/media/user.03a0c317.png";function E(e){var t=Object(y.jsx)("img",{src:"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png",alt:"logo"});return Object(y.jsx)("div",{className:"",children:Object(y.jsxs)("div",{className:"header d-flex justify-content-between align-items-center",children:[Object(y.jsxs)("div",{className:"d-flex align-items-center ",children:[t,Object(y.jsx)("h4",{children:"Keep"}),e.isDark?Object(y.jsxs)("button",{onClick:e.modeHandler,className:"btn ms-3 ",children:["Light  ",Object(y.jsx)(D.a,{})]}):Object(y.jsxs)("button",{onClick:e.modeHandler,className:"btn ms-3",children:["Dark  ",Object(y.jsx)(R.a,{})]})]}),Object(y.jsxs)("div",{className:"left",children:[Object(y.jsx)("span",{children:Object(y.jsx)(q.a,{})}),Object(y.jsx)("span",{children:Object(y.jsx)(H.a,{})}),Object(y.jsx)("span",{children:Object(y.jsx)(_.a,{})}),Object(y.jsx)("span",{children:Object(y.jsx)("img",{src:A,alt:"",style:{height:"30px"}})})]})]})})}var L=function(){var e=Object(n.useState)("app"),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),a=Object(i.a)(r,2),o=a[0],l=a[1];return Object(y.jsxs)("div",{className:c,children:[Object(y.jsx)(E,{modeHandler:function(){o?(s("app"),l(!1)):(s("app app-dark"),l(!0))},isDark:o}),Object(y.jsx)(B,{}),Object(y.jsx)(k,{}),Object(y.jsx)(P,{})]})},M=(c(62),c(37)),J=c(24),z=[{id:1,header:"documentaries",text:"Sad Hill Unearthed , Casting JonBenet ,  Made You Look ,The Bleeding Edge   ,Misha and the Wolves  . "},{id:2,header:"Novels to read",text:"To Kill a Mockingbird,1984, The Lord of the Rings, The Great Gatsby,Pride and Prejudice ."},{id:3,header:"Books to read",text:"Idiot brain ,Principles of Psychology , Consciousness Explained ,Power of your subconcious mind ,Happy brain"},{id:4,header:"Courses to finish",text:"SEO foundations ,Typescript Course,"},{id:5,header:"Films to watch",text:"Manchester By the sea ,The children of men, Psycho,No country for old men"},{id:6,header:"Lessons to revise",text:"React redux ,react hooks,OOP in js,No country for old men"}],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,c=[];return t.type===b?[].concat(Object(J.a)(e),[{id:e.length+1,header:t.header,text:t.text}]):t.type===u?c=e.filter((function(e){return e.id!==t.id})):t.type===x?c=[]:t.type===h?(c=e.filter((function(e){return e.id!==t.id})),[].concat(Object(J.a)(c),[{id:t.id,header:t.header,text:t.text}])):e},I=Object(M.a)(G);r.a.render(Object(y.jsx)(j.a,{store:I,children:Object(y.jsx)(L,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.b63a3215.chunk.js.map