(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7162],{3905:function(e,t,a){"use strict";a.r(t),a.d(t,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){return function(t){var a=m(t.components);return n.createElement(e,r({},t,{components:a}))}},m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=i,b=c["".concat(l,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(95318).default;t.Z=void 0;var i=n(a(2784));var r=function(e){var t=e.children,a=e.hidden,n=e.className;return i.default.createElement("div",{role:"tabpanel",hidden:a,className:n},t)};t.Z=r},10279:function(e,t,a){"use strict";var n=a(95318).default,i=a(20862).default;t.Z=void 0;var r=i(a(2784)),l=n(a(80944)),o=n(a(86010)),s=n(a(13693));var d=37,c=39;var m=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,i=e.values,m=e.groupId,u=e.className,p=(0,l.default)(),b=p.tabGroupChoices,f=p.setTabGroupChoices,x=(0,r.useState)(n),g=x[0],v=x[1],h=r.Children.toArray(e.children),N=[];if(null!=m){var y=b[m];null!=y&&y!==g&&i.some((function(e){return e.value===y}))&&v(y)}var k=function(e){var t=e.currentTarget,a=N.indexOf(t),n=i[a].value;v(n),null!=m&&(f(m,n),setTimeout((function(){var e,a,n,i,r,l,o,d;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,d=l.innerWidth,a>=0&&r<=d&&i<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.default.tabItemActive),setTimeout((function(){return t.classList.remove(s.default.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case d:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null==(t=a)||t.focus()};return r.default.createElement("div",{className:"tabs-container"},r.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},u)},i.map((function(e){var t=e.value,a=e.label;return r.default.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.default)("tabs__item",s.default.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:k,onClick:k},a)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.default.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};t.Z=m},79443:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,a(2784).createContext)(void 0);t.default=n},80944:function(e,t,a){"use strict";var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(2784),r=n(a(79443));var l=function(){var e=(0,i.useContext)(r.default);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};t.default=l},99390:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return b}});var n=a(22122),i=a(19756),r=(a(2784),a(3905)),l=a(10279),o=a(58215),s=["components"],d={id:"getting-started",title:"Setup and Installation",sidebar_label:"Installation",slug:"/"},c=void 0,m={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Setup and Installation",description:"Prerequisites",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Setup and Installation",sidebar_label:"Installation",slug:"/"},sidebar:"someSidebar",next:{title:"The fundamentals",permalink:"/docs/the-fundamentals"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation",id:"installation",children:[{value:"Additional step for Linux users",id:"additional-step-for-linux-users",children:[]}]}],p={toc:u};function b(e){var t=e.components,a=(0,i.default)(e,s);return(0,r.mdx)("wrapper",(0,n.default)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,"The only dependencies for Remotion are FFMPEG and Node.js."),(0,r.mdx)("p",null,"Please read these guides to install them in case you haven't yet."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg"},"Installing FFMPEG")," - Minimum: Version 4.1.0"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Installing Node.js")," - Minimum: Version 12.10.0")),(0,r.mdx)("h2",{id:"installation"},"Installation"),(0,r.mdx)("p",null,"You can initialize a new Remotion video using"),(0,r.mdx)(l.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.mdx)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.mdx)("div",{className:"shiki-twoslash-fragment"},(0,r.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"npm init video"))))),(0,r.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"npm init video"))))))),(0,r.mdx)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.mdx)("div",{className:"shiki-twoslash-fragment"},(0,r.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"yarn create video"))))),(0,r.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"yarn create video")))))))),(0,r.mdx)("p",null,"That's it! Wait for the installation to be finished and follow the instructions in the terminal."),(0,r.mdx)("h3",{id:"additional-step-for-linux-users"},"Additional step for Linux users"),(0,r.mdx)("p",null,"Linux users need to install some additional packages to get Chrome/Puppeteer working correctly."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Ubuntu")),(0,r.mdx)("div",{className:"shiki-twoslash-fragment"},(0,r.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"apt install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev"))))),(0,r.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"apt install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev")))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Arch linux")," "),(0,r.mdx)("div",{className:"shiki-twoslash-fragment"},(0,r.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"sudo pacman -S dconf alsa-lib atk glibc cairo libcups dbus expat fontconfig gcc gdk-pixbuf2 glib2 gtk3 nspr pango gcc-libs libx11 libxcomposite libxcursor libxdamage libxext libxfixes libxi libxrandr libxrender libxss libxtst ca-certificates ttf-liberation libappindicator-gtk3 nss lsb-release xdg-utils wget mesa"))))),(0,r.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"sudo pacman -S dconf alsa-lib atk glibc cairo libcups dbus expat fontconfig gcc gdk-pixbuf2 glib2 gtk3 nspr pango gcc-libs libx11 libxcomposite libxcursor libxdamage libxext libxfixes libxi libxrandr libxrender libxss libxtst ca-certificates ttf-liberation libappindicator-gtk3 nss lsb-release xdg-utils wget mesa")))))),(0,r.mdx)("p",null,"Got instructions for more Linux distributions? ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/getting-started.md"},"Add them to this page"),"!"))}b.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.r(t),a.d(t,{default:function(){return i}})},13693:function(e,t,a){"use strict";a.r(t),t.default={tabItem:"tabItem_1uMI",tabItemActive:"tabItemActive_2DSg",blink:"blink_XB8L"}}}]);