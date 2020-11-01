(this["webpackJsonplego-ecom"]=this["webpackJsonplego-ecom"]||[]).push([[64],{2081:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",(function(){return p})),s.d(a,"default",(function(){return c})),s.d(a,"tableOfContents",(function(){return l})),s.d(a,"frontMatter",(function(){return i}));var t=s(22),e=(s(0),s(342)),p={text:"2 min read",minutes:1.205,time:72300.00000000001,words:241},o={};function c(n){var a=n.components,s=Object(t.a)(n,["components"]);return Object(e.b)("wrapper",Object.assign({},o,s,{components:a,mdxType:"MDXLayout"}),Object(e.b)("h1",{id:"routing"},"Routing"),Object(e.b)("p",null,"The entire routing is based on the ",Object(e.b)("inlineCode",{parentName:"p"},"react-router")," and ",Object(e.b)("inlineCode",{parentName:"p"},"react-router-dom")," modules."),Object(e.b)("h2",{id:"lazy-loading-routes"},"Lazy loading routes"),Object(e.b)("p",null,"Most React apps will have their files \u201cbundled\u201d using tools like Webpack, Rollup or Browserify. Bundling is the process of following imported files and merging them into a single file: a \u201cbundle\u201d. This bundle can then be included on a webpage to load an entire app at once."),Object(e.b)("p",null,"To reduce bundle size, we use the new ",Object(e.b)("inlineCode",{parentName:"p"},"lazy")," and ",Object(e.b)("inlineCode",{parentName:"p"},"Suspense")," React methods with the dynamic import() syntax."),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  lazy<span class="token punctuation">,</span>\n  Suspense\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> LoadingScreen <span class="token keyword">from</span> <span class="token string">\'src/components/LoadingScreen\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LoadingScreen</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span>\n          <span class="token attr-name">exact</span>\n          <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/404<span class="token punctuation">"</span></span>\n          <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'src/views/pages/ErrorView\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Switch</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}))),Object(e.b)("p",null,Object(e.b)("inlineCode",{parentName:"p"},"lazy")," takes a function that must call a dynamic ",Object(e.b)("inlineCode",{parentName:"p"},"import()"),". This must return a Promise which resolves to a module with a default export containing a React component."),Object(e.b)("p",null,"The lazy component should then be rendered inside a ",Object(e.b)("inlineCode",{parentName:"p"},"Suspense")," component, which allows us to show some fallback content (such as a loading indicator) while we\u2019re waiting for the lazy component to load."),Object(e.b)("h2",{id:"protecting-routes"},"Protecting routes"),Object(e.b)("p",null,"We created route wrappers to check the user credentials before displaying the route content. For example, we only allow the dashboard rendering only if the user is logged in and login/register pages for unauthencated users. This can be extended and add one extra layer of security by checking for user role. It\u2019s up to you to decide your protection method."))}c.isMDXComponent=!0;var l=function(){return[{id:"lazy-loading-routes",level:2,title:"Lazy loading routes",children:[]},{id:"protecting-routes",level:2,title:"Protecting routes",children:[]}]},i={}}}]);
//# sourceMappingURL=64.5a33e7ac.chunk.js.map