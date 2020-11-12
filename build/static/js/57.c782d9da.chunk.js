(this["webpackJsonplego-ecom"]=this["webpackJsonplego-ecom"]||[]).push([[57],{2079:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",(function(){return p})),s.d(a,"default",(function(){return c})),s.d(a,"tableOfContents",(function(){return l})),s.d(a,"frontMatter",(function(){return i}));var t=s(22),e=(s(0),s(342)),p={text:"2 min read",minutes:1.76,time:105600,words:352},o={};function c(n){var a=n.components,s=Object(t.a)(n,["components"]);return Object(e.b)("wrapper",Object.assign({},o,s,{components:a,mdxType:"MDXLayout"}),Object(e.b)("h1",{id:"analytics"},"Analytics"),Object(e.b)("h2",{id:"tool"},"Tool"),Object(e.b)("p",null,"For this product we implemented ",Object(e.b)("a",{target:"_blank",href:"https://analytics.google.com/"},"Google Analytics"),". It helps us to track page views, but it can be extended to track specific user action, such as button clicks which can be important for your team to understand what can be improved."),Object(e.b)("h2",{id:"integration"},"Integration"),Object(e.b)("p",null,"There are a few steps to implement the SDK."),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("p",{parentName:"li"},"Create a Google account, this gives you permission to multiple platforms.")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("p",{parentName:"li"},"Find your Google Analytics ID. For more information follow this ",Object(e.b)("a",{target:"_blank",href:"https://support.google.com/analytics/answer/1008080?hl=en"},"link"),".")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("p",{parentName:"li"},"Setup your Google Analytics ID as a process variable (",Object(e.b)("inlineCode",{parentName:"p"},"REACT_APP_GA_MEASUREMENT_ID"),"). We recommend to configure it in ",Object(e.b)("inlineCode",{parentName:"p"},".env")," file. This allows you to have multiple environments with different accounts.")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("p",{parentName:"li"},"Load the SDK in all pages. We already prepared a component for you, it can be found in ",Object(e.b)("inlineCode",{parentName:"p"},"src/components/GoogleAnalytics"),". Since we are using React based on CRA, client side solution, we only have to load it in one place, the app root. Ensure it has access to the Router context if you want to automate pageview tracking."))),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Router</span></span> <span class="token attr-name">history</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>history<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">GoogleAnalytics</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Router</span></span><span class="token punctuation">></span></span>\n'}}))),Object(e.b)("h2",{id:"tracking"},"Tracking"),Object(e.b)("h3",{id:"page-views"},"Page views"),Object(e.b)("p",null,"There are multiple ways to track a page view. For this project we decided to have a custom component, ",Object(e.b)("inlineCode",{parentName:"p"},"Page"),", and wrap each view with it. Once the component is mounted, it sends the page view event with the page information. It can be easily extended.\nIf you want to do it manually do the following:"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> track <span class="token keyword">from</span> <span class="token string">\'src/utils/analytics\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">AccountBillingView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    track<span class="token punctuation">.</span><span class="token function">pageView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> \n      page_path<span class="token operator">:</span> location<span class="token punctuation">.</span>pathname\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Billing Details\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}))),Object(e.b)("h3",{id:"actions"},"Actions"),Object(e.b)("p",null,"One action can trigger one or more events. Lets say that you want to track all link clicks, but one link is more important and you want to have an extra tracking event or you simply want to have specific actions tracked. It depends on your business requirements.\nHere is an example:"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> track <span class="token keyword">from</span> <span class="token string">\'src/utils/analytics\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">AccountSettingsView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">handleCloseAccount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    track<span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span><span class="token string">\'close_account\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Settings\n\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleCloseAccount<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        Close Account\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}))))}c.isMDXComponent=!0;var l=function(){return[{id:"tool",level:2,title:"Tool",children:[]},{id:"integration",level:2,title:"Integration",children:[]},{id:"tracking",level:2,title:"Tracking",children:[{id:"page-views",level:3,title:"Page views",children:[]},{id:"actions",level:3,title:"Actions",children:[]}]}]},i={}}}]);
//# sourceMappingURL=57.c782d9da.chunk.js.map