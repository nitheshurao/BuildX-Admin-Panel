(this["webpackJsonplego-ecom"]=this["webpackJsonplego-ecom"]||[]).push([[36],{1172:function(e,a,t){"use strict";var r=t(249);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),o=(0,r(t(340)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=o},1182:function(e,a,t){"use strict";var r=t(1),n=t(70),o=t(5),c=t(0),l=(t(102),t(2),t(4)),i=t(7),s=t(128),m=t(26),u=t(190),d=Object(u.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(339);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(o.a)(e,["classes"]);return c.createElement(p.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),c.createElement(d,{className:a.icon}))}));var g=c.forwardRef((function(e,a){var t=e.children,i=e.classes,m=e.className,u=e.component,d=void 0===u?"nav":u,p=e.expandText,g=void 0===p?"Show path":p,f=e.itemsAfterCollapse,h=void 0===f?1:f,v=e.itemsBeforeCollapse,E=void 0===v?1:v,y=e.maxItems,j=void 0===y?8:y,x=e.separator,O=void 0===x?"/":x,k=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),N=c.useState(!1),S=N[0],C=N[1],B=c.Children.toArray(t).filter((function(e){return c.isValidElement(e)})).map((function(e,a){return c.createElement("li",{className:i.li,key:"child-".concat(a)},e)}));return c.createElement(s.a,Object(r.a)({ref:a,component:d,color:"textSecondary",className:Object(l.a)(i.root,m)},k),c.createElement("ol",{className:i.ol},function(e,a,t){return e.reduce((function(r,n,o){return o<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:a},t)):r.push(n),r}),[])}(S||j&&B.length<=j?B:function(e){return E+h>=e.length?e:[].concat(Object(n.a)(e.slice(0,E)),[c.createElement(b,{"aria-label":g,key:"ellipsis",onClick:function(){C(!0)}})],Object(n.a)(e.slice(e.length-h,e.length)))}(B),i.separator,O)))}));a.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},1205:function(e,a,t){"use strict";var r=t(22),n=t(0),o=t.n(n),c=t(4),l=t(1247),i=t.n(l),s=t(331),m=Object(s.a)((function(e){return{root:{"& .ql-toolbar":{borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),"& .ql-picker-label:hover":{color:e.palette.secondary.main},"& .ql-picker-label.ql-active":{color:e.palette.secondary.main},"& .ql-picker-item:hover":{color:e.palette.secondary.main},"& .ql-picker-item.ql-selected":{color:e.palette.secondary.main},"& button:hover":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button:focus":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:e.palette.secondary.main}},"& .ql-stroke":{stroke:e.palette.text.primary},"& .ql-picker":{color:e.palette.text.primary},"& .ql-picker-options":{padding:e.spacing(2),backgroundColor:e.palette.background.default,border:"none",boxShadow:e.shadows[10],borderRadius:e.shape.borderRadius}},"& .ql-container":{border:"none","& .ql-editor":{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"&.ql-blank::before":{color:e.palette.text.secondary}}}},stepButton:{"& + &":{marginLeft:e.spacing(2)}}}}));a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]),n=m();return o.a.createElement(i.a,Object.assign({className:Object(c.a)(n.root,a)},t))}},1223:function(e,a,t){"use strict";a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var t=1024,r=a<0?0:a,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(t));return"".concat(parseFloat((e/Math.pow(t,o)).toFixed(r))," ").concat(n[o])}},1230:function(e,a,t){"use strict";var r=t(55),n=t(51),o=t(28),c=t(22),l=t(0),i=t.n(l),s=t(4),m=t(1326),u=t(191),d=t.n(u),p=t(331),b=t(128),g=t(1158),f=t(1125),h=t(1093),v=t(1092),E=t(1284),y=t(1139),j=t(1137),x=t(1100),O=t(1126),k=t(1216),N=t.n(k),S=t(1184),C=t.n(S),B=t(1223),q=Object(p.a)((function(e){return{root:{},dropZone:{border:"1px dashed ".concat(e.palette.divider),padding:e.spacing(6),outline:"none",display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center","&:hover":{backgroundColor:e.palette.action.hover,opacity:.5,cursor:"pointer"}},dragActive:{backgroundColor:e.palette.action.active,opacity:.5},image:{width:130},info:{marginTop:e.spacing(1)},list:{maxHeight:320},actions:{marginTop:e.spacing(2),display:"flex",justifyContent:"flex-end","& > * + *":{marginLeft:e.spacing(2)}}}}));a.a=function(e){var a,t=e.className,u=Object(c.a)(e,["className"]),p=q(),k=Object(l.useState)([]),S=Object(o.a)(k,2),w=S[0],T=S[1],M=Object(l.useCallback)((function(e){T((function(a){return Object(n.a)(a).concat(e)}))}),[]),P=Object(m.a)({onDrop:M}),z=P.getRootProps,R=P.getInputProps,L=P.isDragActive;return i.a.createElement("div",Object.assign({className:Object(s.a)(p.root,t)},u),i.a.createElement("div",Object.assign({className:Object(s.a)((a={},Object(r.a)(a,p.dropZone,!0),Object(r.a)(a,p.dragActive,L),a))},z()),i.a.createElement("input",R()),i.a.createElement("div",null,i.a.createElement("img",{alt:"Select file",className:p.image,src:"/static/images/undraw_add_file2_gvbb.svg"})),i.a.createElement("div",null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h3"},"Select files"),i.a.createElement(g.a,{mt:2},i.a.createElement(b.a,{color:"textPrimary",variant:"body1"},"Drop files here or click"," ",i.a.createElement(f.a,{underline:"always"},"browse")," ","thorough your machine")))),w.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{options:{suppressScrollX:!0}},i.a.createElement(h.a,{className:p.list},w.map((function(e,a){return i.a.createElement(v.a,{divider:a<w.length-1,key:a},i.a.createElement(E.a,null,i.a.createElement(N.a,null)),i.a.createElement(y.a,{primary:e.name,primaryTypographyProps:{variant:"h5"},secondary:Object(B.a)(e.size)}),i.a.createElement(j.a,{title:"More options"},i.a.createElement(x.a,{edge:"end"},i.a.createElement(C.a,null))))})))),i.a.createElement("div",{className:p.actions},i.a.createElement(O.a,{onClick:function(){T([])},size:"small"},"Remove all"),i.a.createElement(O.a,{color:"secondary",size:"small",variant:"contained"},"Upload files"))))}},2161:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(331),c=t(1155),l=t(341),i=t(22),s=t(23),m=t(4),u=t(1182),d=t(1125),p=t(128),b=t(1172),g=t.n(b),f=Object(o.a)((function(){return{root:{}}}));var h=function(e){var a=e.className,t=Object(i.a)(e,["className"]),r=f();return n.a.createElement("div",Object.assign({className:Object(m.a)(r.root,a)},t),n.a.createElement(u.a,{separator:n.a.createElement(g.a,{fontSize:"small"}),"aria-label":"breadcrumb"},n.a.createElement(d.a,{variant:"body1",color:"inherit",to:"/app",component:s.a},"Dashboard"),n.a.createElement(d.a,{variant:"body1",color:"inherit",to:"/app/management",component:s.a},"Management"),n.a.createElement(p.a,{variant:"body1",color:"textPrimary"},"Create brand")),n.a.createElement(p.a,{variant:"h3",color:"textPrimary"},"Create New Brand"))},v=t(56),E=t.n(v),y=t(95),j=t(43),x=t(42),O=t(1190),k=t(250),N=t.n(k),S=t(1201),C=t(132),B=t(1156),q=t(1183),w=t(1203),T=t(1146),M=t(1158),P=t(248),z=t(1106),R=t(1221),L=t(1133),A=t(1126),F=t(1205),I=t(1230),D=Object(o.a)((function(){return{root:{},editor:{"& .ql-editor":{height:400}}}}));function _(e){var a=e.className,t=(e.onSubmitSuccess,Object(i.a)(e,["className","onSubmitSuccess"])),r=D(),o=(Object(j.g)(),Object(C.useSnackbar)().enqueueSnackbar);Object(x.c)();return n.a.createElement(S.a,{initialValues:{category:"",subcategory:"",description:"",images:[],includesTaxes:!1,isTaxable:!1,name:"",price:"",productCode:"",productSku:"",salePrice:""},validationSchema:O.f().shape({category:O.h().max(255),subcategory:O.h().max(255),description:O.h().max(5e3),images:O.a(),includesTaxes:O.b().required(),isTaxable:O.b().required(),name:O.h().max(255).required()}),onSubmit:function(){var e=Object(y.a)(E.a.mark((function e(a,t){var r,n,c,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setErrors,r=t.setStatus,n=t.setSubmitting,e.prev=1,console.log("inside createBrand "),c={method:"post",url:"https://15.207.7.54:8081/brands/register",data:{name:a.name,description:a.description.replace(/<[^>]+>/g,"")},headers:{"Content-Type":"application/json"}},console.log("------------------------config--------------------"),console.log(c),e.next=8,N()(c);case 8:l=e.sent,console.log("-----------------resp------------------"),console.log(l),r({success:!0}),n(!1),o("Brand Created",{variant:"success"}),e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(1),console.log("----------------------resp==error---------------------"),console.log(e.t0),e.abrupt("return",e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var o=e.errors,c=e.handleBlur,l=e.handleChange,i=e.handleSubmit,s=e.isSubmitting,u=e.setFieldValue,d=e.touched,b=e.values;return n.a.createElement("form",Object.assign({onSubmit:i,className:Object(m.a)(r.root,a)},t),n.a.createElement(B.a,{container:!0,spacing:3},n.a.createElement(B.a,{item:!0,xs:12,lg:8},n.a.createElement(q.a,null,n.a.createElement(w.a,null,n.a.createElement(T.a,{error:Boolean(d.name&&o.name),fullWidth:!0,helperText:d.name&&o.name,label:"Brand Name",name:"name",onBlur:c,onChange:l,value:b.name,variant:"outlined"}),n.a.createElement(M.a,{mt:3,mb:1},n.a.createElement(p.a,{variant:"subtitle2",color:"textSecondary"},"Description")),n.a.createElement(P.a,{variant:"outlined"},n.a.createElement(F.a,{className:r.editor,value:b.description,onChange:function(e){return u("description",e)}})),d.description&&o.description&&n.a.createElement(M.a,{mt:2},n.a.createElement(z.a,{error:!0},o.description)))),n.a.createElement(M.a,{mt:3},n.a.createElement(q.a,null,n.a.createElement(R.a,{title:"Upload Images"}),n.a.createElement(L.a,null),n.a.createElement(w.a,null,n.a.createElement(I.a,null)))))),o.submit&&n.a.createElement(M.a,{mt:3},n.a.createElement(z.a,{error:!0},o.submit)),n.a.createElement(M.a,{mt:2},n.a.createElement(A.a,{color:"secondary",variant:"contained",type:"submit",disabled:s},"Create Brand")))}))}_.defaultProps={onSubmitSuccess:function(){}};var W=_,H=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=H();return n.a.createElement(l.a,{className:e.root,title:"Create Brand"},n.a.createElement(c.a,{maxWidth:!1},n.a.createElement(h,null),n.a.createElement(W,null)))}}}]);
//# sourceMappingURL=36.0aba324c.chunk.js.map