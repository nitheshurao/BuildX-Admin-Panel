(this["webpackJsonplego-ecom"]=this["webpackJsonplego-ecom"]||[]).push([[52],{1170:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a(0);function n(){var e=Object(l.useRef)(!0);return Object(l.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1654:function(e,t){},1655:function(e,t){},2157:function(e,t,a){"use strict";a.r(t);var l=a(28),n=a(0),r=a.n(n),c=a(331),o=a(1155),m=a(1158),i=a(1133),s=a(15),E=a(1170),y=a(341),u=a(22),b=a(23),g=a(4),h=a(1440),d=a(1156),f=a(1182),p=a(1125),v=a(128),D=a(1162),w=a(1126),x=a(1378),C=a(1792),N=a.n(C),j=a(1172),P=a.n(j),O=a(3),k=a.n(O),S=h.f.create({page:{backgroundColor:"#fff",padding:24},h1:{fontSize:24,fontWeight:500},h5:{fontSize:12,fontWeight:500},h6:{fontSize:10,fontWeight:500},body1:{fontSize:9,lineHeight:1.5},body2:{fontSize:8,lineHeight:1.5},mb1:{marginBottom:4},header:{flexDirection:"row",justifyContent:"space-between"},brand:{height:24,width:24},company:{marginTop:32,flexDirection:"row",justifyContent:"space-between"},references:{marginTop:32,flexDirection:"row",justifyContent:"space-between"},billing:{marginTop:32},items:{marginTop:32},notes:{marginTop:32},table:{display:"table",width:"auto"},tableHeader:{},tableBody:{},tableRow:{flexDirection:"row",borderBottomWidth:1,borderColor:"#eeeeee",borderStyle:"solid"},tableCell1:{padding:6,width:"\u20b9{COL1_WIDTH}%"},tableCellN:{padding:6,width:"\u20b9{COLN_WIDTH}%"},alignRight:{textAlign:"right"}});var T=function(e){var t=e.invoice;return r.a.createElement(h.a,null,r.a.createElement(h.e,{size:"A4",style:S.page},r.a.createElement(h.h,{style:S.header},r.a.createElement(h.h,null,r.a.createElement(h.b,{source:"/static/logo-short.jpg",style:S.brand}),r.a.createElement(h.g,{style:S.h5},"www.devias.io")),r.a.createElement(h.h,null,r.a.createElement(h.g,{style:S.h1},"PAID"),r.a.createElement(h.g,{style:S.h5},"Invoice #",t.id))),r.a.createElement(h.h,{style:S.company},r.a.createElement(h.h,null,r.a.createElement(h.g,{style:S.body1},"Street King William, 123"),r.a.createElement(h.g,{style:S.body1},"Level 2, C, 442456"),r.a.createElement(h.g,{style:S.body1},"San Francisco, CA, India")),r.a.createElement(h.h,null,r.a.createElement(h.g,{style:S.body1},"Company No. 4675933"),r.a.createElement(h.g,{style:S.body1},"EU VAT No. 949 67545 45")),r.a.createElement(h.h,null,r.a.createElement(h.g,{style:S.body1},"Email: rithesh@gmail.com"),r.a.createElement(h.g,{style:S.body1},"Tel: (+91)9956277189"))),r.a.createElement(h.h,{style:S.references},r.a.createElement(h.h,null,r.a.createElement(h.g,{style:[S.h5,S.mb1]},"Due Date"),r.a.createElement(h.g,{style:S.body1},k()(t.dueDate).format("DD MMM YYYY"))),r.a.createElement(h.h,null,r.a.createElement(h.g,{style:[S.h5,S.mb1]},"Date of issue"),r.a.createElement(h.g,{style:S.body1},k()(t.issueDate).format("DD MMM YYYY"))),r.a.createElement(h.h,null,r.a.createElement(h.g,{style:[S.h5,S.mb1]},"Reference"),r.a.createElement(h.g,{style:S.body1},t.ref))),r.a.createElement(h.h,{style:S.billing},r.a.createElement(h.g,{style:[S.h5,S.mb1]},"Billed to"),r.a.createElement(h.g,{style:S.body1},"redhn"),r.a.createElement(h.g,{style:S.body1},"prakashnagr"),r.a.createElement(h.g,{style:S.body1},"6934656584231"),r.a.createElement(h.g,{style:S.body1},"bangalor ,india")),r.a.createElement(h.h,{style:S.items},r.a.createElement(h.h,{style:S.table},r.a.createElement(h.h,{style:S.tableHeader},r.a.createElement(h.h,{style:S.tableRow},r.a.createElement(h.h,{style:S.tableCell1},r.a.createElement(h.g,{style:S.h6},"Description")),r.a.createElement(h.h,{style:S.tableCellN}),r.a.createElement(h.h,{style:S.tableCellN},r.a.createElement(h.g,{style:[S.h6,S.alignRight]},"Price")))),r.a.createElement(h.h,{style:S.tableBody},t.products.map((function(e,a){return r.a.createElement(h.h,{style:S.tableRow,key:a},r.a.createElement(h.h,{style:S.tableCell1},r.a.createElement(h.g,{style:S.body2},e.desc)),r.a.createElement(h.h,{style:S.tableCellN}),r.a.createElement(h.h,{style:S.tableCellN},r.a.createElement(h.g,{style:[S.body2,S.alignRight]},t.currency,e.value)))})),r.a.createElement(h.h,{style:S.tableRow},r.a.createElement(h.h,{style:S.tableCell1}),r.a.createElement(h.h,{style:S.tableCellN},r.a.createElement(h.g,{style:S.body2},"Subtotal")),r.a.createElement(h.h,{style:S.tableCellN},r.a.createElement(h.g,{style:[S.body2,S.alignRight]},t.currency,t.subtotal))),r.a.createElement(h.h,{style:S.tableRow},r.a.createElement(h.h,{style:S.tableCell1}),r.a.createElement(h.h,{style:S.tableCellN},r.a.createElement(h.g,{style:S.body2},"Taxes")),r.a.createElement(h.h,{style:S.tableCellN},r.a.createElement(h.g,{style:[S.body2,S.alignRight]},t.currency,t.taxes))),r.a.createElement(h.h,{style:S.tableRow},r.a.createElement(h.h,{style:S.tableCell1}),r.a.createElement(h.h,{style:S.tableCellN},r.a.createElement(h.g,{style:S.body2},"Total")),r.a.createElement(h.h,{style:S.tableCellN},r.a.createElement(h.g,{style:[S.body2,S.alignRight]},t.currency,t.total)))))),r.a.createElement(h.h,{style:S.notes},r.a.createElement(h.g,{style:[S.h5,S.mb1]},"Notes"),r.a.createElement(h.g,{style:S.body1},"Please make sure you have the right bank registration number as I had issues before and make sure you guys cover transfer expenses."))))},Y=Object(c.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}}}}));var R=function(e){var t=e.invoice,a=e.className,c=Object(u.a)(e,["invoice","className"]),o=Y(),i=Object(n.useState)(!1),s=Object(l.a)(i,2),E=s[0],y=s[1];return r.a.createElement(d.a,Object.assign({container:!0,justify:"space-between",spacing:3,className:Object(g.a)(o.root,a)},c),r.a.createElement(d.a,{item:!0},r.a.createElement(f.a,{separator:r.a.createElement(P.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(p.a,{variant:"body1",color:"inherit",to:"/app",component:b.a},"Dashboard"),r.a.createElement(p.a,{variant:"body1",color:"inherit",to:"/app/management",component:b.a},"Management"),r.a.createElement(v.a,{variant:"body1",color:"textPrimary"},"Invoices")),r.a.createElement(v.a,{variant:"h3",color:"textPrimary"},"Invoice Details")),r.a.createElement(d.a,{item:!0},r.a.createElement(D.a,{smDown:!0},r.a.createElement(w.a,{className:o.action,onClick:function(){return y(!0)}},"Preview PDF")),r.a.createElement(h.c,{document:r.a.createElement(T,{invoice:t}),fileName:"invoice",style:{textDecoration:"none"}},r.a.createElement(w.a,{color:"secondary",variant:"contained",className:o.action},"Download PDF")),r.a.createElement(x.a,{fullScreen:!0,open:E},r.a.createElement(m.a,{height:"100%",display:"flex",flexDirection:"column"},r.a.createElement(m.a,{bgcolor:"common.white",p:2},r.a.createElement(w.a,{variant:"contained",color:"secondary",onClick:function(){return y(!1)}},r.a.createElement(N.a,null),"Back")),r.a.createElement(m.a,{flexGrow:1},r.a.createElement(h.d,{width:"100%",height:"100%",style:{border:"none"}},r.a.createElement(T,{invoice:t})))))))},B=a(191),I=a.n(B),M=a(248),W=a(1340),A=a(1432),z=a(1341),H=a(1342),L=a(1343),F=a(76),J=Object(c.a)((function(){return{root:{}}}));var U=function(e){var t=e.invoice,a=e.className,l=Object(u.a)(e,["invoice","className"]),n=J();return r.a.createElement(M.a,Object.assign({className:Object(g.a)(n.root,a)},l),r.a.createElement(I.a,null,r.a.createElement(m.a,{minWidth:800,p:6},r.a.createElement(d.a,{container:!0,justify:"space-between"},r.a.createElement(d.a,{item:!0},r.a.createElement(F.a,null),r.a.createElement(v.a,{variant:"h5",color:"textPrimary"},"www.")),r.a.createElement(d.a,{item:!0},r.a.createElement(v.a,{align:"right",variant:"h1",color:"textPrimary"},"PAID"),r.a.createElement(v.a,{align:"right",variant:"h5",color:"textPrimary"},"Invoice #",t.id))),r.a.createElement(m.a,{my:4},r.a.createElement(d.a,{container:!0,justify:"space-between"},r.a.createElement(d.a,{item:!0},r.a.createElement(v.a,{variant:"body1",color:"textPrimary"},"jpnagar, banaglor"," ",r.a.createElement("br",null),"Level 2, C, 442456"," ",r.a.createElement("br",null),"San Francisco, CA, India")),r.a.createElement(d.a,{item:!0},r.a.createElement(v.a,{variant:"body1",color:"textPrimary"},"Company No. 4675933"," ",r.a.createElement("br",null),"EU VAT No. 949 67545 45"," ",r.a.createElement("br",null))),r.a.createElement(d.a,{item:!0},r.a.createElement(v.a,{align:"right",variant:"body1",color:"textPrimary"},"Email: accounts@gmail.com"," ",r.a.createElement("br",null),"Tel: (+91) 652 3456 23")))),r.a.createElement(m.a,{my:4},r.a.createElement(d.a,{container:!0,justify:"space-between"},r.a.createElement(d.a,{item:!0},r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Due date"),r.a.createElement(v.a,{variant:"body1",color:"textPrimary"},k()(t.dueDate).format("DD MMM YYYY"))),r.a.createElement(d.a,{item:!0},r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Date of issue"),r.a.createElement(v.a,{variant:"body1",color:"textPrimary"},k()(t.issueDate).format("DD MMM YYYY"))),r.a.createElement(d.a,{item:!0},r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Reference"),r.a.createElement(v.a,{variant:"body1",color:"textPrimary"},t.ref)))),r.a.createElement(m.a,{my:4},r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Billed to"),r.a.createElement(v.a,null,t.customer.name," ",r.a.createElement("br",null),t.customer.company," ",r.a.createElement("br",null),t.customer.taxId," ",r.a.createElement("br",null),t.customer.address," ",r.a.createElement("br",null))),r.a.createElement(W.a,null,r.a.createElement(A.a,null,r.a.createElement(z.a,null,r.a.createElement(H.a,null,"Description"),r.a.createElement(H.a,null),r.a.createElement(H.a,{align:"right"},"Price"))),r.a.createElement(L.a,null,t.products.map((function(e){return r.a.createElement(z.a,{key:e.id},r.a.createElement(H.a,null,e.desc),r.a.createElement(H.a,null),r.a.createElement(H.a,{align:"right"},t.currency,e.value))})),r.a.createElement(z.a,null,r.a.createElement(H.a,null),r.a.createElement(H.a,null,"Subtotal"),r.a.createElement(H.a,{align:"right"},t.currency,t.subtotal)),r.a.createElement(z.a,null,r.a.createElement(H.a,null),r.a.createElement(H.a,null,"Taxes"),r.a.createElement(H.a,{align:"right"},t.currency,t.taxes)),r.a.createElement(z.a,null,r.a.createElement(H.a,null),r.a.createElement(H.a,null,"Total"),r.a.createElement(H.a,{align:"right"},t.currency,t.total)))),r.a.createElement(m.a,{mt:2},r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Notes"),r.a.createElement(v.a,{variant:"body1",color:"textSecondary"},"Please make sure you have the right bank registration number as I had issues before and make sure you guys cover transfer expenses.")))))},V=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=V(),t=Object(E.a)(),a=Object(n.useState)(null),c=Object(l.a)(a,2),u=c[0],b=c[1],g=Object(n.useCallback)((function(){s.a.get("/api/management/invoices/1").then((function(e){t.current&&b(e.data.invoice)}))}),[t]);return Object(n.useEffect)((function(){g()}),[g]),u?r.a.createElement(y.a,{className:e.root,title:"Invoice Details"},r.a.createElement(o.a,{maxWidth:"lg"},r.a.createElement(R,{invoice:u}),r.a.createElement(m.a,{my:2},r.a.createElement(i.a,null)),r.a.createElement(U,{invoice:u}))):null}}}]);
//# sourceMappingURL=52.2b774c64.chunk.js.map