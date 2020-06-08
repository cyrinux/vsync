(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),o=(n(0),n(154)),i={id:"install",title:"Install",sidebar_label:"Install"},l={id:"getstarted/install",title:"Install",description:"Manual download",source:"@site/docs/getstarted/install.md",permalink:"/vsync/docs/getstarted/install",editUrl:"https://github.com/ExpediaGroup/vsync/edit/master/website/docs/getstarted/install.md",sidebar_label:"Install",sidebar:"someSidebar",previous:{title:"Why",permalink:"/vsync/docs/getstarted/why"},next:{title:"Config",permalink:"/vsync/docs/getstarted/config"}},s=[{value:"Manual download",id:"manual-download",children:[]},{value:"Docker images",id:"docker-images",children:[]},{value:"Usage",id:"usage",children:[]}],c={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"manual-download"},"Manual download"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Goto ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ExpediaGroup/vsync/releases"}),"releases")," page"),Object(o.b)("li",{parentName:"ol"},"Download the latest binary for your OS"),Object(o.b)("li",{parentName:"ol"},"Place the binary somewhere in global path, like ",Object(o.b)("inlineCode",{parentName:"li"},"/usr/local/bin"))),Object(o.b)("h3",{id:"docker-images"},"Docker images"),Object(o.b)("p",null,"Find the latest release tag from github release page of this project"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"TODO: add docker image \n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'A tool that sync secrets between different vaults probably within same environment vaults\n\nUsage:\n  vsync [flags]\n  vsync [command]\n\nAvailable Commands:\n  destination Performs comparisons of sync data structures and copies data from origin to destination for nullifying the diffs\n  help        Help about any command\n  origin      Generate sync data structure in consul kv for entities that we need to distribute\n\nFlags:\n  -c, --config string                       load the config file along with path (default is $HOME/.vsync.json)\n      --destination.consul.address string   destination vault address\n      --destination.dc string               destination datacenter\n      --destination.vault.address string    destination vault address\n      --destination.vault.token string      destination vault token\n  -h, --help                                help for vsync\n      --log.level string                    logger level (info|debug)\n      --log.type string                     logger type (console|json)\n      --origin.consul.address string        origin consul address\n      --origin.dc string                    origin datacenter\n      --origin.vault.address string         origin vault address\n      --origin.vault.token string           origin vault token\n      --version                             version information\n\nUse "vsync [command] --help" for more information about a command.\n')))}d.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,g=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(g,l(l({ref:t},c),{},{components:n})):a.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);