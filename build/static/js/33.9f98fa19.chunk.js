(this["webpackJsonplego-ecom"]=this["webpackJsonplego-ecom"]||[]).push([[33],{1170:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1176:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1177:function(e,a,t){"use strict";var n=t(55),r=t(22),c=t(0),l=t.n(c),o=t(4),i=t(331),s=t(26),m=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.d)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.d)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.d)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.d)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.d)(e.palette.warning.main,.08)}}}));function u(e){var a=e.className,t=e.color,c=e.children,i=(e.style,Object(r.a)(e,["className","color","children","style"])),s=m();return l.a.createElement("span",Object.assign({className:Object(o.a)(s.root,Object(n.a)({},s[t],t),a)},i),c)}u.defaultProps={className:"",color:"secondary"},a.a=u},1194:function(e,a,t){"use strict";var n=t(28),r=t(0),c=t.n(r),l=t(331),o=t(1137),i=t(1100),s=t(602),m=t(1136),u=t(1284),p=t(1139),g=t(1184),f=t.n(g),d=t(1229),b=t.n(d),E=t(1216),h=t.n(E),j=t(1285),v=t.n(j),O=t(1222),y=t.n(O),x=Object(l.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));a.a=Object(r.memo)((function(e){var a=x(),t=Object(r.useRef)(null),l=Object(r.useState)(!1),g=Object(n.a)(l,2),d=g[0],E=g[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"More options"},c.a.createElement(i.a,Object.assign({},e,{onClick:function(){E(!0)},ref:t}),c.a.createElement(f.a,{fontSize:"small"}))),c.a.createElement(s.a,{anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){E(!1)},open:d,PaperProps:{className:a.menu},transformOrigin:{vertical:"top",horizontal:"left"}},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(b.a,null)),c.a.createElement(p.a,{primary:"Import"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,null)),c.a.createElement(p.a,{primary:"Copy"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(v.a,null)),c.a.createElement(p.a,{primary:"Export"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(y.a,null)),c.a.createElement(p.a,{primary:"Achive"}))))}))},1286:function(e,a,t){"use strict";var n=t(249);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(340)).default)(r.default.createElement("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),"AttachMoney");a.default=c},1344:function(e,a,t){"use strict";var n=t(22),r=t(0),c=t.n(r),l=t(4),o=t(331),i=t(10),s=t(1137),m=t(1164),u=t(128),p=Object(o.a)((function(e){return{root:{display:"flex",paddingLeft:20},avatar:{border:"3px solid ".concat(e.palette.background.default),marginLeft:-20,"&:hover":{zIndex:2}},more:{backgroundColor:i.a.red[600],color:i.a.common.white}}}));function g(e){var a=e.avatars,t=e.limit,r=e.className,o=Object(n.a)(e,["avatars","limit","className"]),i=p(),g=0,f=a.slice(0,t).map((function(e){return c.a.createElement(s.a,{key:++g,title:"View"},c.a.createElement(m.a,{className:i.avatar,src:e}))}));return a.length>t&&f.push(c.a.createElement(m.a,{key:++g,className:Object(l.a)(i.avatar,i.more)},c.a.createElement(u.a,{color:"inherit",variant:"subtitle2"},"+",a.length-t))),c.a.createElement("div",Object.assign({className:Object(l.a)(i.root,r)},o),f)}g.defaultProps={avatars:[],limit:3},a.a=Object(r.memo)(g)},1587:function(e,a,t){"use strict";var n=t(249);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(340)).default)(r.default.createElement("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"}),"FolderOpenOutlined");a.default=c},2137:function(e,a,t){"use strict";t.r(a);var n=t(55),r=t(0),c=t.n(r),l=t(331),o=t(1155),i=t(1156),s=t(341),m=t(28),u=t(22),p=t(23),g=t(4),f=t(1182),d=t(1125),b=t(128),E=t(1126),h=t(240),j=t(602),v=t(1136),O=t(1172),y=t.n(O),x=t(1586),N=[{value:"today",text:"Today"},{value:"yesterday",text:"Yesterday"},{value:"last_30_days",text:"Last 30 days"},{value:"last_year",text:"Last year"}],k=Object(l.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var C=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=k(),l=Object(r.useRef)(null),o=Object(r.useState)(!1),s=Object(m.a)(o,2),O=s[0],C=s[1],w=Object(r.useState)(N[2].text),S=Object(m.a)(w,2),T=S[0],I=S[1];return c.a.createElement(i.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(g.a)(n.root,a)},t),c.a.createElement(i.a,{item:!0},c.a.createElement(f.a,{separator:c.a.createElement(y.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(d.a,{variant:"body1",color:"inherit",to:"/app",component:p.a},"Dashboard"),c.a.createElement(b.a,{variant:"body1",color:"textPrimary"},"Reports")),c.a.createElement(b.a,{variant:"h3",color:"textPrimary"},"Here's what's happening")),c.a.createElement(i.a,{item:!0},c.a.createElement(E.a,{ref:l,onClick:function(){return C(!0)}},c.a.createElement(h.a,{fontSize:"small",className:n.actionIcon},c.a.createElement(x.a,null)),T),c.a.createElement(j.a,{anchorEl:l.current,onClose:function(){return C(!1)},open:O,PaperProps:{className:n.menu},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},N.map((function(e){return c.a.createElement(v.a,{key:e.value,onClick:function(){return I(e.text)}},e.text)})))))},w=t(3),S=t.n(w),T=t(191),I=t.n(T),M=t(1183),P=t(1221),z=t(1133),L=t(1158),R=t(1340),W=t(1432),A=t(1341),D=t(1342),_=t(1137),H=t(2173),V=t(1343),Y=t(1164),B=t(15),F=t(1176),G=t(1170),J=t(1194),q={"html-css":"/static/images/technologies/html.svg","react-js":"/static/images/technologies/react-js.svg","vue-js":"/static/images/technologies/vue-js.svg",angular:"/static/images/technologies/angular.svg",figma:"/static/images/technologies/figma.svg",sketch:"/static/images/technologies/sketch.svg"},U=Object(l.a)((function(e){return{root:{},technology:{height:30,"& + &":{marginLeft:e.spacing(1)}},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var K=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=U(),l=Object(G.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],f=(i[1],Object(r.useCallback)((function(){B.a.get("/api/reports/latest-projects").then((function(e){l.current}))}),[l]));return Object(r.useEffect)((function(){f()}),[f]),s?c.a.createElement(M.a,Object.assign({className:Object(g.a)(n.root,a)},t),c.a.createElement(P.a,{action:c.a.createElement(J.a,null),title:"Latest Projects"}),c.a.createElement(z.a,null),c.a.createElement(I.a,null,c.a.createElement(L.a,{minWidth:900},c.a.createElement(R.a,null,c.a.createElement(W.a,null,c.a.createElement(A.a,null,c.a.createElement(D.a,{sortDirection:"desc"},c.a.createElement(_.a,{enterDelay:300,title:"Sort"},c.a.createElement(H.a,{active:!0,direction:"desc"},"Project Name"))),c.a.createElement(D.a,null,"Owner"),c.a.createElement(D.a,null,"Amount"),c.a.createElement(D.a,null,"Technology"),c.a.createElement(D.a,{align:"right"},"Date"))),c.a.createElement(V.a,null,s.map((function(e){return c.a.createElement(A.a,{hover:!0,key:e.id},c.a.createElement(D.a,null,e.title),c.a.createElement(D.a,null,c.a.createElement(L.a,{display:"flex",alignItems:"center"},c.a.createElement(Y.a,{alt:"Author",className:n.avatar,src:e.author.avatar},Object(F.a)(e.author.name)),c.a.createElement(L.a,{ml:1},e.author.name))),c.a.createElement(D.a,null,e.currency,e.price),c.a.createElement(D.a,null,e.technologies.map((function(e){return c.a.createElement("img",{alt:"Tech",key:e,className:n.technology,src:q[e]})}))),c.a.createElement(D.a,{align:"right"},S()(e.createdAt).format("DD MMM, YYYY")))})))))),c.a.createElement(L.a,{p:2,display:"flex",justifyContent:"flex-end"},c.a.createElement(E.a,{component:p.a,size:"small",to:"/app/projects"},"See all",c.a.createElement(y.a,{className:n.navigateNextIcon})))):null},Q=(t(1587),t(1177));Object(l.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));t(257),t(32),t(26),Object(l.a)((function(){return{root:{position:"relative"}}}));var X=Object(l.a)((function(){return{root:{},chart:{height:"100%"}}}));var Z=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=X();return c.a.createElement(M.a,Object.assign({className:Object(g.a)(n.root,a)},t),c.a.createElement(z.a,null))},$=t(51);Object(l.a)((function(){return{root:{position:"relative"}}}));var ee=Object(l.a)((function(e){return{root:{},current:{marginTop:e.spacing(.5),marginRight:e.spacing(.5)},navigateNextIcon:{marginLeft:e.spacing(1)}}}));var ae=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=ee(),l=Object(G.a)(),o=Object(r.useState)([163,166,161,159,99,163,173,166,167,183,176,172]),i=Object(m.a)(o,2),s=i[0],p=i[1],f=Object(r.useCallback)((function(){l.current&&p((function(e){var a=Object($.a)(e);return a.shift(),a.push(0),a})),setTimeout((function(){l.current&&p((function(e){var a,t,n=Object($.a)(e),r=(a=100,t=200,a=Math.ceil(a),t=Math.floor(t),Math.floor(Math.random()*(t-a+1))+a);return n.pop(),n.push(r),n}))}),500)}),[l]);return Object(r.useEffect)((function(){setInterval((function(){return f()}),2e3)}),[f]),s.map((function(e,a){return a})),c.a.createElement(M.a,Object.assign({className:Object(g.a)(n.root,a)},t))},te=t(1286),ne=t.n(te);Object(l.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}}));var re=t(1157),ce=Object(l.a)((function(e){return{root:{padding:e.spacing(3)},progress:{margin:e.spacing(0,1),flexGrow:1}}}));var le=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=ce(),r=97;return c.a.createElement(M.a,Object.assign({className:Object(g.a)(n.root,a)},t),c.a.createElement(b.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"System Health"),c.a.createElement(L.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},c.a.createElement(b.a,{variant:"h3",color:"textPrimary"},r,"%"),c.a.createElement(re.a,{className:n.progress,value:r,color:"secondary",variant:"determinate"})))},oe=t(1093),ie=t(2),se=t.n(ie),me=(t(1344),Object(l.a)((function(e){return{root:{},viewButton:{marginLeft:e.spacing(2)}}})));function ue(e){var a=e.task;e.className,Object(u.a)(e,["task","className"]),me();if(a.deadline){var t=S()(),n=S()(a.deadline);n.isAfter(t)&&n.diff(t,"day")<3&&("".concat(n.diff(t,"day")," days remaining"),!0)}}ue.propTypes={className:se.a.string,task:se.a.object.isRequired};var pe=ue,ge=Object(l.a)((function(){return{root:{}}}));var fe=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=ge(),l=Object(G.a)(),o=Object(r.useState)(null),i=Object(m.a)(o,2),s=i[0],p=(i[1],Object(r.useCallback)((function(){B.a.get("/api/reports/tasks").then((function(e){l.current}))}),[l]));return Object(r.useEffect)((function(){p()}),[p]),s?c.a.createElement(M.a,Object.assign({className:Object(g.a)(n.root,a)},t),c.a.createElement(P.a,{action:c.a.createElement(J.a,null),title:"Team Tasks"}),c.a.createElement(z.a,null),c.a.createElement(I.a,null,c.a.createElement(L.a,{minWidth:400},c.a.createElement(oe.a,null,s.map((function(e,a){return c.a.createElement(pe,{divider:a<s.length-1,key:e.id,task:e})})))))):null},de=Object(l.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var be=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=de(),r="24,000",l="\u20b9",o=4;return c.a.createElement(M.a,Object.assign({className:Object(g.a)(n.root,a)},t),c.a.createElement(L.a,{flexGrow:1},c.a.createElement(b.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Todays money"),c.a.createElement(L.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},c.a.createElement(b.a,{variant:"h3",color:"textPrimary"},l,r),c.a.createElement(Q.a,{className:n.label,color:o>0?"success":"error"},o>0?"+":"",o,"%"))),c.a.createElement(Y.a,{className:n.avatar},c.a.createElement(ne.a,null)))},Ee=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},container:Object(n.a)({},e.breakpoints.up("lg"),{paddingLeft:64,paddingRight:64})}}));a.default=function(){var e=Ee();return c.a.createElement(s.a,{className:e.root,title:"Dashboard"},c.a.createElement(o.a,{maxWidth:!1,className:e.container},c.a.createElement(C,null),c.a.createElement(i.a,{container:!0,spacing:3},c.a.createElement(i.a,{item:!0,lg:3,sm:6,xs:12},c.a.createElement(be,null)),c.a.createElement(i.a,{item:!0,lg:3,sm:6,xs:12},c.a.createElement(le,null)),c.a.createElement(i.a,{item:!0,lg:3,sm:6,xs:12},c.a.createElement(ae,null)),c.a.createElement(i.a,{item:!0,lg:9,xs:12},c.a.createElement(Z,null)),c.a.createElement(i.a,{item:!0,lg:5,xl:4,xs:12},c.a.createElement(fe,null)),c.a.createElement(i.a,{item:!0,lg:7,xl:8,xs:12},c.a.createElement(K,null)))))}}}]);
//# sourceMappingURL=33.9f98fa19.chunk.js.map