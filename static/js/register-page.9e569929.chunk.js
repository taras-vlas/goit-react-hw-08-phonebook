(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{118:function(e,a,t){e.exports={container:"Title_container__1vgRE",title:"Title_title__30cli",appear:"Title_appear__1iyOW",appearActive:"Title_appearActive___kNjQ"}},119:function(e,a,t){e.exports={Wrapper:"HookForm_Wrapper__2dABZ",HeaderWrapper:"HookForm_HeaderWrapper__13XqK",form:"HookForm_form__1_aEP",label:"HookForm_label__53JkJ",text:"HookForm_text__3d4R6",input:"HookForm_input__2oYiD",container:"HookForm_container__2rEuy",button:"HookForm_button__2sq8s"}},120:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t(0),r=t(130),n=t(118),o=t.n(n),i=t(1),c=function(e){var a=e.children,t=Object(s.createRef)(null);return Object(i.jsx)(r.a,{in:!0,appear:!0,timeout:250,classNames:o.a,nodeRef:t,children:Object(i.jsx)("div",{className:o.a.container,children:Object(i.jsx)("h1",{className:o.a.title,ref:t,children:a})})})};c.defaultProps={children:[]};var l=c},130:function(e,a,t){"use strict";var s=t(5),r=t(8),n=t(14);t(6);function o(e,a){return e.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var i=t(0),c=t.n(i),l=t(122),p=function(e,a){return e&&a&&a.split(" ").forEach((function(a){return s=a,void((t=e).classList?t.classList.remove(s):"string"===typeof t.className?t.className=o(t.className,s):t.setAttribute("class",o(t.className&&t.className.baseVal||"",s)));var t,s}))},u=function(e){function a(){for(var a,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(a=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},a.onEnter=function(e,t){var s=a.resolveArguments(e,t),r=s[0],n=s[1];a.removeClasses(r,"exit"),a.addClass(r,n?"appear":"enter","base"),a.props.onEnter&&a.props.onEnter(e,t)},a.onEntering=function(e,t){var s=a.resolveArguments(e,t),r=s[0],n=s[1]?"appear":"enter";a.addClass(r,n,"active"),a.props.onEntering&&a.props.onEntering(e,t)},a.onEntered=function(e,t){var s=a.resolveArguments(e,t),r=s[0],n=s[1]?"appear":"enter";a.removeClasses(r,n),a.addClass(r,n,"done"),a.props.onEntered&&a.props.onEntered(e,t)},a.onExit=function(e){var t=a.resolveArguments(e)[0];a.removeClasses(t,"appear"),a.removeClasses(t,"enter"),a.addClass(t,"exit","base"),a.props.onExit&&a.props.onExit(e)},a.onExiting=function(e){var t=a.resolveArguments(e)[0];a.addClass(t,"exit","active"),a.props.onExiting&&a.props.onExiting(e)},a.onExited=function(e){var t=a.resolveArguments(e)[0];a.removeClasses(t,"exit"),a.addClass(t,"exit","done"),a.props.onExited&&a.props.onExited(e)},a.resolveArguments=function(e,t){return a.props.nodeRef?[a.props.nodeRef.current,e]:[e,t]},a.getClassNames=function(e){var t=a.props.classNames,s="string"===typeof t,r=s?""+(s&&t?t+"-":"")+e:t[e];return{baseClassName:r,activeClassName:s?r+"-active":t[e+"Active"],doneClassName:s?r+"-done":t[e+"Done"]}},a}Object(n.a)(a,e);var t=a.prototype;return t.addClass=function(e,a,t){var s=this.getClassNames(a)[t+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===a&&"done"===t&&r&&(s+=" "+r),"active"===t&&e&&e.scrollTop,s&&(this.appliedClasses[a][t]=s,function(e,a){e&&a&&a.split(" ").forEach((function(a){return s=a,void((t=e).classList?t.classList.add(s):function(e,a){return e.classList?!!a&&e.classList.contains(a):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+a+" ")}(t,s)||("string"===typeof t.className?t.className=t.className+" "+s:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+s)));var t,s}))}(e,s))},t.removeClasses=function(e,a){var t=this.appliedClasses[a],s=t.base,r=t.active,n=t.done;this.appliedClasses[a]={},s&&p(e,s),r&&p(e,r),n&&p(e,n)},t.render=function(){var e=this.props,a=(e.classNames,Object(r.a)(e,["classNames"]));return c.a.createElement(l.a,Object(s.a)({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(c.a.Component);u.defaultProps={classNames:""},u.propTypes={};a.a=u},165:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var s=t(120),r=t(2),n=t(21),o=t(117),i=t(0),c=t(11),l=t(163),p=t(10),u=t(119),d=t.n(u),m=t(1),v={name:"",email:"",password:""},b={onRegister:p.a.register},f=Object(c.b)(null,b)((function(e){var a=e.onRegister,t=Object(i.useState)(v),s=Object(o.a)(t,2),c=s[0],p=s[1],u=c.name,b=c.email,f=c.password,h=function(e){var a=e.target,t=a.name,s=a.value;p((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(r.a)({},t,s))}))},x=function(){p(v)};return Object(m.jsxs)("form",{className:d.a.form,onSubmit:function(e){e.preventDefault(),a(c),x()},children:[Object(m.jsx)("div",{className:d.a.HeaderWrapper,children:Object(m.jsx)(l.a,{label:"Your name",onChange:h,value:u,type:"text",name:"name",placeholder:"Should be your Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(m.jsx)("div",{className:d.a.HeaderWrapper,children:Object(m.jsx)(l.a,{label:"Email",onChange:function(){return h({})},value:b,type:"email",name:"email","aria-label":"Input for your Email",placeholder:"Should be your Email",required:!0})}),Object(m.jsx)("div",{className:d.a.HeaderWrapper,children:Object(m.jsx)(l.a,{label:"Password",onChange:h,value:f,type:"password",name:"password","aria-label":"Input for your password",placeholder:"Should be at least 7 characters",required:!0})}),Object(m.jsx)("div",{className:d.a.container,children:Object(m.jsx)("button",{type:"submit",className:d.a.button,children:"Create account"})})]})})),h=function(){return Object(m.jsxs)("main",{children:[Object(m.jsx)(s.a,{children:"Create your account"}),Object(m.jsx)(f,{})]})}}}]);
//# sourceMappingURL=register-page.9e569929.chunk.js.map