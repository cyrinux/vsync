(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),o=(n(0),n(154)),a={id:"faq",title:"Faq",sidebar_label:"Faq"},l={id:"faq",title:"Faq",description:"Why",source:"@site/docs/faq.md",permalink:"/vsync/docs/faq",editUrl:"https://github.com/ExpediaGroup/vsync/edit/master/website/docs/faq.md",sidebar_label:"Faq",sidebar:"someSidebar",previous:{title:"Destination",permalink:"/vsync/docs/internals/destination"},next:{title:"Build",permalink:"/vsync/docs/contribution/build"}},c=[{value:"Why",id:"why",children:[{value:"Why do we need vsync?",id:"why-do-we-need-vsync",children:[]},{value:"Why its named VSYNC?",id:"why-its-named-vsync",children:[]},{value:"Why not use as vault enterprise replication replacement?",id:"why-not-use-as-vault-enterprise-replication-replacement",children:[]},{value:"Requirements?",id:"requirements",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"Why we choose nomad?",id:"why-we-choose-nomad",children:[]}]},{value:"Failures",id:"failures",children:[{value:"If I delete the sync info in consul",id:"if-i-delete-the-sync-info-in-consul",children:[]},{value:"If there is no origin sync info yet for destination",id:"if-there-is-no-origin-sync-info-yet-for-destination",children:[]},{value:"Does not halt / stop syncing",id:"does-not-halt--stop-syncing",children:[]}]}],s={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why"},"Why"),Object(o.b)("h3",{id:"why-do-we-need-vsync"},"Why do we need vsync?"),Object(o.b)("p",null,"If you have multiple vault clusters, 1 in every region (may be under same environment)."),Object(o.b)("p",null,"Users need to create / update / delete secrets from each of those vaults manually for their apps (deployed in that region) to get the recent version of secret."),Object(o.b)("p",null,"Instead you can ask users to update in one vault (origin) and we can propagate changes to other vaults (destinations)"),Object(o.b)("p",null,"This we call it sync."),Object(o.b)("p",null,"Currently, vsync works only for kv v2 secrets."),Object(o.b)("h3",{id:"why-its-named-vsync"},"Why its named VSYNC?"),Object(o.b)("p",null,"Vault SYNC (oh com'on, naming is hard!!!)"),Object(o.b)("p",null,"Its short, easy to understand, so why not?"),Object(o.b)("h3",{id:"why-not-use-as-vault-enterprise-replication-replacement"},"Why not use as vault enterprise replication replacement?"),Object(o.b)("p",null,"Vault replication is an enterprise feature with hashicorp quality."),Object(o.b)("p",null,"It primarily uses streaming write ahead log to get changes propagated to other vault, which is blazing fast when compared to vsync."),Object(o.b)("h3",{id:"requirements"},"Requirements?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"vault (atleast 1, we can use vsync in vault that is both origin and destination)"),Object(o.b)("li",{parentName:"ol"},"consul (atleast 1)"),Object(o.b)("li",{parentName:"ol"},"50 mb of memory"),Object(o.b)("li",{parentName:"ol"},"500 Mhz of cpu (may be less, like 300 Mhz)"),Object(o.b)("li",{parentName:"ol"},"300 Mb of disk space (may be less)")),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("h3",{id:"why-we-choose-nomad"},"Why we choose nomad?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Good integration between vault and nomad"),Object(o.b)("li",{parentName:"ul"},"Jobs will restart itself if something happens"),Object(o.b)("li",{parentName:"ul"},"Canary deployments"),Object(o.b)("li",{parentName:"ul"},"Isolated Fork/Exec Driver"),Object(o.b)("li",{parentName:"ul"},"Hashicorp quality")),Object(o.b)("h2",{id:"failures"},"Failures"),Object(o.b)("h3",{id:"if-i-delete-the-sync-info-in-consul"},"If I delete the sync info in consul"),Object(o.b)("p",null,"Vsync will stop with a fatal error, if you restart vsync it should be fine again"),Object(o.b)("h3",{id:"if-there-is-no-origin-sync-info-yet-for-destination"},"If there is no origin sync info yet for destination"),Object(o.b)("p",null,"Destination will wait for some time and then throw fatal error that it could not hook the consul watch on sync info"),Object(o.b)("h3",{id:"does-not-halt--stop-syncing"},"Does not halt / stop syncing"),Object(o.b)("p",null,"It is designed not to stop sync because of copying one secret from origin to destination."),Object(o.b)("p",null,"It should stop with fatal error for major error like if it could not start the cycle, missing required vault token permission etc"))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,y=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(y,l(l({ref:t},s),{},{components:n})):i.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);