(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var a,r,i=t(0),o=t.n(i),c=t(6),s=t.n(c),l=(t(19),t(7)),b=t(11),d=t(8),u=t(9),m=t(2),p=t(13),h=t(12),x=t(3),j=t(4),f=j.a.form(a||(a=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 300px;\n  border: 2px solid #000;\n\n  label {\n    display: flex;\n    flex-direction: column;\n\n    &:not(:first-of-type) {\n      margin-top: 10px;\n    }\n  }\n\n  input {\n    margin-top: 4px;\n    width: 160px;\n\n    &:focus {\n      border: 2px solid #286fe0;\n      outline: none;\n    }\n  }\n\n  button {\n    margin-top: 20px;\n    padding: 4px;\n    max-width: 100px;\n    border: 0.2px solid #b7b7b7;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: box-shadow 250ms linear, -webkit-box-shadow 250ms linear,\n      -moz-box-shadow 250ms linear;\n\n    &:hover {\n      -webkit-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      -moz-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n    }\n\n    &:active {\n      color: #fff;\n      background-color: #286fe0;\n    }\n  }\n"]))),O=t(1),g=function(n){var e=n.name,t=n.number,a=n.handleChange,r=n.handleSubmit;return Object(O.jsxs)(f,{onSubmit:r,children:[Object(O.jsxs)("label",{children:["Name",Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:a,value:e})]}),Object(O.jsxs)("label",{children:["Phone number",Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:a,value:t})]}),Object(O.jsx)("button",{type:"submit",children:"Add contact"})]})},v=j.a.label(r||(r=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-top: 4px;\n    width: 160px;\n\n    &:focus {\n      border: 2px solid #286fe0;\n      outline: none;\n    }\n  }\n"]))),w=function(n){var e=n.filter,t=n.handleChange;return Object(O.jsxs)(v,{children:["Find contacts by name",Object(O.jsx)("input",{type:"text",name:"filter",onChange:t,value:e})]})},C=function(n){var e=n.name,t=n.number;return Object(O.jsx)("li",{children:"".concat(e,": ").concat(t)})},y=function(n){var e=n.contacts;return Object(O.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.name,a=n.number;return Object(O.jsx)(C,{name:t,number:a},e)}))})},k=t(26),S=function(n){Object(p.a)(t,n);var e=Object(h.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},n.contactsFiltering=function(e){return n.state.contacts.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))},n.availability\u0421heck=function(e){return!!n.state.contacts.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))&&(alert("".concat(e," is already in contacts")),!0)},n.handleSubmit=function(e){e.preventDefault();var t=Object(m.a)(n),a=t.state,r=a.name,i=a.number,o=t.availability\u0421heck;r&&i&&(o(r)||n.setState((function(n){var e=n.contacts,t=n.name,a=n.number,r={id:Object(k.a)(),name:t,number:a};return{contacts:[].concat(Object(b.a)(e),[r]),filter:"",name:"",number:""}})))},n.handleChange=function(e){var t=e.target.name;n.setState(Object(l.a)({},t,e.target.value.trim()))},n}return Object(u.a)(t,[{key:"render",value:function(){var n=this.state,e=n.filter,t=n.name,a=n.number,r=this.handleChange,i=this.handleSubmit,o=this.contactsFiltering;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(g,{name:t,number:a,handleChange:r,handleSubmit:i}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(w,{filter:e,handleChange:r}),Object(O.jsx)(y,{contacts:o(e)})]})}}]),t}(i.Component);s.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.96078561.chunk.js.map