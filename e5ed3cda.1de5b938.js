(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(158)),o={id:"why",title:"Why",sidebar_label:"Why"},s={id:"getstarted/why",isDocsHomePage:!1,title:"Why",description:"vsync, an easy, efficient way to sync credentials across from one origin to multiple destinations",source:"@site/docs/getstarted/why.md",permalink:"/vsync/docs/getstarted/why",editUrl:"https://github.com/ExpediaGroup/vsync/edit/master/website/docs/getstarted/why.md",sidebar_label:"Why",sidebar:"someSidebar",next:{title:"Install",permalink:"/vsync/docs/getstarted/install"}},l=[{value:"Similar products",id:"similar-products",children:[{value:"Shell scripts",id:"shell-scripts",children:[]},{value:"Custom application for copying the secrets",id:"custom-application-for-copying-the-secrets",children:[]},{value:"Vault Enterprise",id:"vault-enterprise",children:[]}]},{value:"Prerequiste",id:"prerequiste",children:[]},{value:"Legal",id:"legal",children:[]}],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"vsync"),", an easy, efficient way to sync credentials across from one origin to multiple destinations"),Object(i.b)("p",null,"Developers might have their apps in multiple datacenters, each having its own vault. Its difficult for developers to update secrets in each datacenter for their apps to pickup updated secrets like database passwords. Instead we can have single origin vault, where developer will update and we can replicate the secrets to other vaults. This is where vsync fits in."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Parallel workers to finish the job faster"),Object(i.b)("li",{parentName:"ul"},"No need of cron jobs to trigger syncing"),Object(i.b)("li",{parentName:"ul"},"Cleanly closes the cycles"),Object(i.b)("li",{parentName:"ul"},"Exposes telemetry data (OpenTelemetry integration in future)"),Object(i.b)("li",{parentName:"ul"},"Clean vault audit log, as it uses only kv metadata for comparison and they are not clogged because of secret distribution"),Object(i.b)("li",{parentName:"ul"},"Transform the path between origin and destination while syncing eg: secret/data/runner/stage/app1 => runnerv2/data/stage/app1/secrets without impacting apps / users"),Object(i.b)("li",{parentName:"ul"},"Loopback to have origin and destination in the same vault"),Object(i.b)("li",{parentName:"ul"},"Meta sync information is stored in consul")),Object(i.b)("h2",{id:"similar-products"},"Similar products"),Object(i.b)("h3",{id:"shell-scripts"},"Shell scripts"),Object(i.b)("p",null,"Generally people comeup with shell scripts and a cron job that does the job of sequentially copying secrets from one vault to another."),Object(i.b)("h3",{id:"custom-application-for-copying-the-secrets"},"Custom application for copying the secrets"),Object(i.b)("p",null,"Vsync is one of them. One major missing feature is parallelly copying which does should not stop the job while copying the a particular bad secret"),Object(i.b)("h3",{id:"vault-enterprise"},"Vault Enterprise"),Object(i.b)("p",null,"Vault Enterprise is a paid version of vault. It uses write ahead log streaming to sync blazingly fast. We all know hashicorp products are more robust. One missing piece is tranforming the paths while syncing. Its useful while performing a major platform migration without impacting any application / teams."),Object(i.b)("h2",{id:"prerequiste"},"Prerequiste"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All vault kv mount must be of type ",Object(i.b)("inlineCode",{parentName:"li"},"KV V2")),Object(i.b)("li",{parentName:"ul"},"Currently, only works for secrets in KV mount, does not work for policies"),Object(i.b)("li",{parentName:"ul"},"Currently, works only with consul as kv backend"),Object(i.b)("li",{parentName:"ul"},"Single origin where developers will update their secrets"),Object(i.b)("li",{parentName:"ul"},"All secrets are synced, in order to have region / environment specific secrets we may need to use secret paths like ",Object(i.b)("inlineCode",{parentName:"li"},"plaform/stage/us-east-1/myapp/secrets"))),Object(i.b)("h2",{id:"legal"},"Legal"),Object(i.b)("p",null,"This project is available under the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.apache.org/licenses/LICENSE-2.0.html"}),"Apache 2.0 License"),"."))}p.isMDXComponent=!0},158:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);