(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var a,i,o,r,c=e(1),s=e.n(c),d=e(9),l=e.n(d),b=(e(18),e(10)),p=e(12),u=e(4),x=e(5),h=e(7),m=e(6),f=e(25),j=e(2),g=e(3),v=g.a.form(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 300px;\n  border: 2px solid #000;\n\n  label {\n    display: flex;\n    flex-direction: column;\n\n    &:not(:first-of-type) {\n      margin-top: 10px;\n    }\n  }\n\n  input {\n    margin-top: 4px;\n    width: 160px;\n\n    &:focus {\n      border: 2px solid #286fe0;\n      outline: none;\n    }\n  }\n\n  button {\n    margin-top: 20px;\n    padding: 4px;\n    max-width: 100px;\n    border: 0.2px solid #b7b7b7;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: box-shadow 250ms linear, -webkit-box-shadow 250ms linear,\n      -moz-box-shadow 250ms linear;\n\n    &:hover {\n      -webkit-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      -moz-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n    }\n\n    &:active {\n      color: #fff;\n      background-color: #286fe0;\n    }\n  }\n"]))),O=e(0),w=function(n){Object(h.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,i=e.number,o=n.props,r=o.availability\u0421heck,c=o.contactAdding;!r(a)&&a&&i&&(c({id:Object(f.a)(),name:a,number:i}),n.setState({name:"",number:""}))},n}return Object(x.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number,a=this.props.handleChange;return Object(O.jsxs)(v,{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{children:["Name",Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:a.bind(this),value:t})]}),Object(O.jsxs)("label",{children:["Phone number",Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:a.bind(this),value:e})]}),Object(O.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),e}(c.Component),y=g.a.label(i||(i=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-top: 4px;\n    width: 160px;\n\n    &:focus {\n      border: 2px solid #286fe0;\n      outline: none;\n    }\n  }\n"]))),C=function(n){var t=n.filter,e=n.handleChange;return Object(O.jsxs)(y,{children:["Find contacts by name",Object(O.jsx)("input",{type:"text",name:"filter",onChange:e,value:t})]})},k=g.a.li(o||(o=Object(j.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  padding-left: 20px;\n\n  &:not(:last-of-type) {\n    margin-bottom: 12px;\n  }\n\n  ::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n\n    width: 4px;\n    height: 4px;\n    background-color: #000;\n    border: 1px solid #000;\n    border-radius: 50%;\n  }\n\n  span {\n    display: inline-block;\n  }\n\n  button {\n    display: inline-block;\n    padding: 1px 4px;\n    margin-left: 10px;\n    border: 0.5px solid #b7b7b7;\n    border-radius: 4px;\n    font-size: 11px;\n    line-height: 1;\n\n    &:hover {\n      -webkit-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      -moz-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n    }\n\n    &:active {\n      background-color: #286fe0;\n    }\n  }\n"]))),A=function(n){var t=n.id,e=n.name,a=n.number,i=n.contactRemoving;return Object(O.jsxs)(k,{children:[Object(O.jsx)("span",{children:"".concat(e,": ").concat(a)}),Object(O.jsx)("button",{type:"button","data-id":t,onClick:function(){return i(t)},children:"Delete"})]})},S=function(n){var t=n.contacts,e=n.contactRemoving;return Object(O.jsx)("ul",{children:t.map((function(n){var t=n.id,a=n.name,i=n.number;return Object(O.jsx)(A,{id:t,name:a,number:i,contactRemoving:e},t)}))})},z=g.a.div(r||(r=Object(j.a)(["\n  padding: 60px;\n"]))),R=function(n){Object(h.a)(e,n);var t=Object(m.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.contactsFiltering=function(t){return n.state.contacts.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},n.contactAdding=function(t){n.setState((function(n){var e=n.contacts,a=n.filter;return{contacts:[].concat(Object(p.a)(e),[t]),filter:a}}))},n.contactRemoving=function(t){n.setState((function(n){var e=n.contacts,a=n.filter;return{contacts:e.filter((function(n){return n.id!==t})),filter:a}}))},n.availability\u0421heck=function(t){return!!n.state.contacts.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))&&(alert("".concat(t," is already in contacts")),!0)},n}return Object(x.a)(e,[{key:"handleChange",value:function(n){var t=n.target.name;this.setState(Object(b.a)({},t,n.target.value.trim()))}},{key:"render",value:function(){var n=this.state.filter;return Object(O.jsxs)(z,{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(w,{handleChange:this.handleChange,"availability\u0421heck":this.availability\u0421heck,contactAdding:this.contactAdding}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(C,{filter:n,handleChange:this.handleChange.bind(this)}),Object(O.jsx)(S,{contacts:this.contactsFiltering(n),contactRemoving:this.contactRemoving})]})}}]),e}(c.Component);l.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e1a306a1.chunk.js.map