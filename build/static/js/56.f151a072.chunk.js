(this["webpackJsonplego-ecom"]=this["webpackJsonplego-ecom"]||[]).push([[56],{1193:function(e,a,t){"use strict";a.a=function(e){return new Promise((function(a){return setTimeout(a,e)}))}},2171:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t(331),o=t(1155),i=t(1182),m=t(1125),s=t(128),u=t(1158),d=t(1156),p=t(1172),E=t.n(p),h=t(341),b=t(56),f=t.n(b),y=t(28),v=t(22),g=t(95),x=t(1190),w=t(2088),j=t(2143),k=t(2134),O=t(1146),N=t(1243),q=t(1106),F=t(1183),S=t(1221),C=t(1133),T=t(1203),R=t(1124),B=t(1126),P=t(2150),J=t(1193),W=x.f().shape({email:x.h().email().required("Required"),firstName:x.h().required("Required"),lastName:x.h().required("Required"),password:x.h().min(7,"Must be at least 7 characters").max(255).required("Required"),policy:x.c().oneOf([!0],"This field must be checked")});function z(){return D.apply(this,arguments)}function D(){return(D=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(J.a)(1e3);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new w.a({_error:"Login failed!"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function I(e){var a=e.input,t=e.label,n=e.meta,l=n.touched,c=n.invalid,o=n.error,i=Object(v.a)(e,["input","label","meta"]);return r.a.createElement(O.a,Object.assign({error:l&&c,fullWidth:!0,helperText:l&&o,label:t,variant:"outlined"},a,i))}function L(e){var a=e.input,t=e.label,n=e.meta,l=n.touched,c=n.invalid,o=n.error,i=Object(v.a)(e,["input","label","meta"]);return r.a.createElement("div",null,r.a.createElement(u.a,{alignItems:"center",display:"flex",ml:-1},r.a.createElement(N.a,Object.assign({checked:!!a.value,onChange:a.onChange},a,i)),t),Boolean(l&&c)&&r.a.createElement(q.a,{error:!0},o))}var A=Object(k.a)({form:"BasicForm",validate:function(e){var a={};try{W.validateSync(e,{abortEarly:!1})}catch(t){t.inner.forEach((function(e){a[e.path]=e.message}))}return a},initialValues:{email:"johnnydoe@yahoo.com",firstName:"John",lastName:"Doe",password:"thisisasecuredpassword",policy:!1}})((function(e){var a=e.handleSubmit,t=e.submitting,l=Object(n.useState)(!0),c=Object(y.a)(l,2),o=c[0],i=c[1];return r.a.createElement("form",{onSubmit:a(z)},r.a.createElement(F.a,null,r.a.createElement(S.a,{title:"Basic Form"}),r.a.createElement(C.a,null),r.a.createElement(T.a,null,o&&r.a.createElement(u.a,{mb:3},r.a.createElement(P.a,{onClose:function(){return i(!1)},severity:"info"},"This is an info alert - check it out!")),t?r.a.createElement(u.a,{display:"flex",justifyContent:"center",my:5},r.a.createElement(R.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,md:6,xs:12},r.a.createElement(j.a,{name:"firstName",label:"First Name",component:I})),r.a.createElement(d.a,{item:!0,md:6,xs:12},r.a.createElement(j.a,{name:"lastName",label:"Last Name",component:I}))),r.a.createElement(u.a,{mt:2},r.a.createElement(j.a,{name:"email",label:"Email Address",type:"email",component:I})),r.a.createElement(u.a,{mt:2},r.a.createElement(j.a,{name:"password",label:"Password",type:"password",component:I})),r.a.createElement(u.a,{mt:2},r.a.createElement(j.a,{name:"policy",label:r.a.createElement(s.a,{variant:"body2",color:"textSecondary"},"I have read the"," ",r.a.createElement(m.a,{component:"a",href:"#",color:"secondary"},"Terms and Conditions")),component:L})),r.a.createElement(u.a,{mt:2},r.a.createElement(B.a,{color:"secondary",disabled:t,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Sign up"))))))})),H=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=H();return r.a.createElement(h.a,{className:e.root,title:"Formik Form"},r.a.createElement(o.a,{maxWidth:"lg"},r.a.createElement(i.a,{separator:r.a.createElement(E.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(m.a,{variant:"body1",color:"inherit",to:"/app",component:l.a},"Dashboard"),r.a.createElement(s.a,{variant:"body1",color:"textPrimary"},"Forms")),r.a.createElement(s.a,{variant:"h3",color:"textPrimary"},"Redux Form"),r.a.createElement(u.a,{mt:3},r.a.createElement(d.a,{container:!0},r.a.createElement(d.a,{item:!0,xs:12,md:6},r.a.createElement(A,null))))))}}}]);
//# sourceMappingURL=56.f151a072.chunk.js.map