(this["webpackJsonplego-ecom"]=this["webpackJsonplego-ecom"]||[]).push([[13],{1183:function(e,a,t){"use strict";var r=t(1),n=t(5),l=t(0),s=(t(2),t(4)),i=t(248),o=t(7),m=l.forwardRef((function(e,a){var t=e.classes,o=e.className,m=e.raised,c=void 0!==m&&m,u=Object(n.a)(e,["classes","className","raised"]);return l.createElement(i.a,Object(r.a)({className:Object(s.a)(t.root,o),elevation:c?8:1,ref:a},u))}));a.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(m)},1203:function(e,a,t){"use strict";var r=t(1),n=t(5),l=t(0),s=(t(2),t(4)),i=t(7),o=l.forwardRef((function(e,a){var t=e.classes,i=e.className,o=e.component,m=void 0===o?"div":o,c=Object(n.a)(e,["classes","className","component"]);return l.createElement(m,Object(r.a)({className:Object(s.a)(t.root,i),ref:a},c))}));a.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},2168:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(23),s=t(43),i=t(331),o=t(1155),m=t(1183),c=t(1203),u=t(128),d=t(1158),p=t(1133),f=t(1125),b=t(341),h=(t(76),t(56)),v=t.n(h),g=t(95),N=t(22),E=t(42),j=t(4),w=t(1190),S=t(1201),O=t(1146),x=t(1126),y=t(77),B=Object(i.a)((function(){return{root:{}}}));function C(e){var a=e.className,t=e.onSubmitSuccess,r=Object(N.a)(e,["className","onSubmitSuccess"]),l=B(),s=Object(E.c)();return n.a.createElement(S.a,{initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:w.f().shape({firstName:w.h().max(255).required("First name is required"),lastName:w.h().max(255).required("Last name is required"),email:w.h().email("Must be a valid email").max(255).required("Email is required"),password:w.h().min(7).max(255).required("Password is required")}),onSubmit:function(){var e=Object(g.a)(v.a.mark((function e(a,r){var n,l,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setErrors,l=r.setStatus,i=r.setSubmitting,e.prev=1,e.next=4,s(Object(y.i)(a));case 4:t(),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),l({success:!1}),n({submit:e.t0.message}),i(!1);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,s=e.handleBlur,i=e.handleChange,o=e.handleSubmit,m=e.isSubmitting,c=e.touched,u=e.values;return n.a.createElement("form",Object.assign({className:Object(j.a)(l.root,a),onSubmit:o},r),n.a.createElement(O.a,{error:Boolean(c.firstName&&t.firstName),fullWidth:!0,helperText:c.firstName&&t.firstName,label:"First Name",margin:"normal",name:"firstName",onBlur:s,onChange:i,type:"firstName",value:u.firstName,variant:"outlined"}),n.a.createElement(O.a,{error:Boolean(c.lastName&&t.lastName),fullWidth:!0,helperText:c.lastName&&t.lastName,label:"Last Name",margin:"normal",name:"lastName",onBlur:s,onChange:i,type:"lastName",value:u.lastName,variant:"outlined"}),n.a.createElement(O.a,{error:Boolean(c.email&&t.email),fullWidth:!0,helperText:c.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:s,onChange:i,type:"email",value:u.email,variant:"outlined"}),n.a.createElement(O.a,{error:Boolean(c.password&&t.password),fullWidth:!0,helperText:c.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:s,onChange:i,type:"password",value:u.password,variant:"outlined"}),n.a.createElement(d.a,{mt:2},n.a.createElement(x.a,{color:"secondary",disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create account")))}))}C.default={onSubmitSuccess:function(){}};var q=C,k=Object(i.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",height:"100%",minHeight:"100%",flexDirection:"column",paddingBottom:80,paddingTop:80}}}));a.default=function(){var e=k(),a=Object(s.g)();return n.a.createElement(b.a,{className:e.root,title:"Register"},n.a.createElement(o.a,{maxWidth:"sm"},n.a.createElement(m.a,null,n.a.createElement(c.a,null,n.a.createElement(u.a,{gutterBottom:!0,variant:"h2",color:"textPrimary"},"Sign up"),n.a.createElement(u.a,{variant:"subtitle1"},"Sign up on the internal platform"),n.a.createElement(d.a,{mt:3},n.a.createElement(q,{onSubmitSuccess:function(){a.push("/app/login")}})),n.a.createElement(d.a,{my:2},n.a.createElement(p.a,null)),n.a.createElement(f.a,{component:l.a,to:"/login",variant:"body2",color:"textSecondary"},"Have an account?")))))}}}]);
//# sourceMappingURL=13.b4d34f9d.chunk.js.map