"use strict";(self.webpackChunkexample_react_i18next=self.webpackChunkexample_react_i18next||[]).push([[678],{6819:function(e,t,n){n.d(t,{Ow:function(){return g},UE:function(){return m},Ec:function(){return f}});n(4525);var a=n(4925),l=n(7294),r=n(1082),c=n(4545),o=n(9868);const i=["to","language"],m=e=>{let{to:t,language:n}=e,m=(0,a.Z)(e,i);const{defaultLang:u,prefixDefault:E,locale:s}=(0,o.q)(),d=n||s;return l.createElement(r.rU,Object.assign({},m,{to:(0,c.localizedPath)({defaultLang:u,prefixDefault:E,locale:d,path:t})}))},u=["href","children"],E=e=>/^#/.test(e),s=e=>/^\/(?!\/)/.test(e),d=e=>/\..+$/.test(e);function f(e){let{href:t,children:n}=e,r=(0,a.Z)(e,u);return E(t)||!s(t)||d(t)?l.createElement("a",Object.assign({},r,{href:t}),n):l.createElement(m,Object.assign({},r,{to:t}),n)}n(3631);const g=()=>{const{config:e}=(0,o.q)();return l.createElement("ul",null,e.map((e=>l.createElement("li",{key:e.code},e.localName," (",e.name,")"))))}},8678:function(e,t,n){var a=n(7294),l=n(3905),r=n(1572),c=n(6819);const o={a:c.Ec};t.Z=e=>{let{children:t}=e;const{t:n}=(0,r.$G)();return a.createElement(a.Fragment,null,a.createElement("header",null,a.createElement(c.UE,{to:"/"},n("home"))),a.createElement("main",null,a.createElement(l.MDXProvider,{components:o},t)))}},9357:function(e,t,n){var a=n(7294),l=n(4593),r=n(1082);t.Z=e=>{let{description:t,title:n,children:c}=e;const{site:o}=(0,r.K2)("63159454"),i=t||o.siteMetadata.description;return a.createElement(l.q,{title:n,titleTemplate:`%s | ${o.siteMetadata.title}`},a.createElement("meta",{name:"description",content:i}),a.createElement("meta",{name:"og:title",content:n}),a.createElement("meta",{name:"og:description",content:i}),a.createElement("meta",{name:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:o.siteMetadata.author}),a.createElement("meta",{name:"twitter:title",content:n}),a.createElement("meta",{name:"twitter:description",content:i}),c)}},6558:function(e,t,n){n.r(t);var a=n(7294),l=n(1572),r=n(6819),c=n(8678),o=n(9357);t.default=e=>{let{data:t}=e;const{t:n}=(0,l.$G)();return a.createElement(c.Z,null,a.createElement(o.Z,{title:n("home")}),a.createElement("h1",null,n("helloWorld")),a.createElement("p",null,n("indexNote")),a.createElement("p",null,a.createElement(r.UE,{to:"/page-2/"},n("secondPageLink"))),a.createElement("p",null,a.createElement(r.UE,{to:"/page-3/"},n("thirdPageLink"))),a.createElement("p",null,a.createElement(r.UE,{to:"/page-2/",language:"de"},n("secondPageGermanLink"))),a.createElement("p",null,a.createElement(r.UE,{to:"/",language:"en"},n("indexPageEnglishLink"))),a.createElement("ul",null,t.allFile.nodes.map((e=>{let{childMdx:t}=e;return a.createElement("li",{key:t.frontmatter.slug},a.createElement(r.UE,{to:t.frontmatter.slug},t.frontmatter.title))}))),a.createElement("h2",null,n("overviewLang")),a.createElement(r.Ow,null))}},4925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-index-js-8c92e8fb9205fe586ef8.js.map