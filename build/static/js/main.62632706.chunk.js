(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){e.exports=a.p+"static/media/Ellipse.532c6eed.svg"},function(e,t,a){e.exports=a.p+"static/media/menubar.73c838f4.svg"},function(e,t,a){e.exports=a.p+"static/media/Ellipse-darktheme.513397cb.svg"},function(e,t,a){e.exports=a.p+"static/media/menubar-darktheme.373edf06.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/mark-img.da9647be.png"},function(e,t,a){e.exports=a.p+"static/media/billgates-img.8c3729bb.png"},function(e,t,a){e.exports=a.p+"static/media/bgdull-img.61eb6510.svg"},function(e,t,a){e.exports=a.p+"static/media/guywithmic2.87fc57e6.png"},function(e,t,a){e.exports=a.p+"static/media/guywithmic2-darktheme.5912472a.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),i=a(12),c=a(1),s=Object(n.createContext)(void 0),m={lightTheme:{themeName:"lightTheme",mainColor:"#0060f3",secondaryColor:"#1B45AE",tertiaryColor:"white",mainFontColor:"white",secondaryFontColor:"black",tellerEllipse:a(22),menuBarIcon:a(23)},darkTheme:{themeName:"darkTheme",mainColor:"#0E2C46",secondaryColor:"#803343",tertiaryColor:"#F16529",mainFontColor:"#F16529",secondaryFontColor:"black",tellerEllipse:a(24),menuBarIcon:a(25)}},u=function(e){return"darkTheme"===e?m.darkTheme:m.lightTheme},d=function(e){var t=Object(n.useState)("lightTheme"),a=Object(c.a)(t,2),o=a[0],l=a[1],m=Object(n.useCallback)((function(){l((function(e){return"lightTheme"===e?"darkTheme":"lightTheme"}))}),[o]);return r.a.createElement(s.Provider,{value:Object(i.a)(Object(i.a)({},u(o)),{},{setTheme:m})},e.children)},h=(a(26),a(27),function(e){var t=e.backGroundPatter,a=e.repeatVertical,o=void 0!==a&&a,l=e.customStyle,i=void 0===l?"":l,c=o?"x":"y",m=Object(n.useContext)(s);return r.a.createElement("div",{className:"repeatingpatternbackground-container ".concat(i),style:{backgroundImage:"url(".concat(t,")"),backgroundRepeat:"repeat-".concat(c),backgroundColor:"".concat(m&&m.mainColor)}},e.children)}),p=(a(28),function(e){var t=Object(n.useContext)(s),a=e.customStyle;return r.a.createElement("h1",{style:{color:t&&t.mainFontColor},className:"page-header ".concat(a)},e.children)}),b=(a(29),function(e){var t=e.customWrapperStyle,a=void 0===t?"":t,o=e.image,l=e.quote,i=e.by,c=e.extra,m=Object(n.useContext)(s);return r.a.createElement("div",{className:"quote-container ".concat(a)},r.a.createElement("div",{style:{backgroundImage:"url(".concat(m&&m.tellerEllipse,")")},className:"tellerImage-container"},r.a.createElement("img",{className:"tellerImage",src:o,alt:"person that quoted the below quote"})),r.a.createElement("div",{style:{backgroundColor:m&&m.tertiaryColor},className:"quotecontent-container"},r.a.createElement("div",{className:"quote"},r.a.createElement("p",null,'"',l,'"',r.a.createElement("br",null),r.a.createElement("span",{className:"name-container"},"-",i))),c&&r.a.createElement("div",{className:"extra-container"},c)))}),g=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},f=(a(30),function(e){var t=e.id,a=Object(n.useContext)(s);return r.a.createElement("div",{style:{WebkitTextStrokeColor:a&&a.secondaryFontColor,WebkitTextFillColor:a&&a.mainFontColor},id:t||"",className:"portfolio-details-container"},e.children)}),v=function(e){var t=e.header,a=e.emoji;return r.a.createElement("h2",{className:"header"},t," ",a)},E=function(e){var t=e.header,a=e.body,o=e.emoji,l=e.id,i=Object(n.useContext)(s);return r.a.createElement(f,{id:l},r.a.createElement(v,{header:t,emoji:o}),r.a.createElement("div",{style:{color:i&&i.mainFontColor},className:"body"},a))},y=a(2),C=a(7),k=a.n(C),N=(a(41),function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1],l=function(){o((function(e){return!e}))};Object(n.useEffect)((function(){for(var e=document.getElementsByClassName("nav-item"),t=0;t<e.length;t++)e[t].addEventListener("click",l,!1);return function(){for(var t=0;t<e.length;t++)e[t].removeEventListener("click",l,!1)}}),[]);var i=k()({"menubar-container":!0,selected:a}),m=k()({menubar:!0}),u=k()({menuoptions:!0,selected:!a}),d=Object(n.useContext)(s);return r.a.createElement("div",{className:i,onClick:l},r.a.createElement("div",{style:{backgroundImage:"url(".concat(d&&d.menuBarIcon,")")},className:m,onClick:function(e){e.stopPropagation(),o((function(e){return!e}))}}),r.a.createElement("div",{className:u,onClick:function(e){return e.stopPropagation()}},r.a.createElement(j,null),r.a.createElement("ul",{onChange:function(e){e.stopPropagation(),o((function(e){return!e}))}},r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content1",spy:!0,smooth:!0,offset:-70,duration:500},"Libraries")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content2",spy:!0,smooth:!0,offset:-70,duration:500},"Current Project")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content3",spy:!0,smooth:!0,offset:-70,duration:500},"My works")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content4",spy:!0,smooth:!0,offset:-70,duration:500},"Current Working Status")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content5",spy:!0,smooth:!0,offset:-70,duration:500},"Hire me")))))}),w=(a(42),function(e){var t=e.introText,a=e.name,o=e.profession,l=e.extra,i=e.containerCustomStyle,c=Object(n.useContext)(s);return r.a.createElement("div",{style:{color:c&&c.mainFontColor},className:"intro-paragraph ".concat(i)},r.a.createElement("p",null,r.a.createElement("span",null,"".concat(t)),r.a.createElement("br",null),r.a.createElement("span",{className:"weight-regular"},"".concat(a)),r.a.createElement("br",null),r.a.createElement("span",{className:"weight-regular"},"".concat(o)),r.a.createElement("br",null),l))}),j=(a(43),function(e){var t=Object(n.useContext)(s),a=Object(n.useState)(!0),o=Object(c.a)(a,2),l=o[0],i=o[1],m=Object(n.useCallback)((function(){i((function(e){return!e})),t&&t.setTheme()}),[l]);return r.a.createElement("div",{className:"themeswitcher-container"},r.a.createElement("div",null,"Theme Switcher"),r.a.createElement("div",{style:{marginLeft:"2px"},className:"toggler-container"},r.a.createElement("div",{style:{backgroundColor:t&&t.mainColor,borderColor:t&&t.mainColor},className:"toggler"},r.a.createElement("div",{style:{float:l?"left":"right",backgroundColor:t&&t.mainFontColor,borderColor:t&&t.mainColor},onClick:m,className:"switch"}))))}),S=(a(44),a(45)),x=a(46),T=a(47),O=function(){var e=Object(n.useContext)(s),t=Object(n.useCallback)((function(){return e&&"lightTheme"===e.themeName?a(48):e&&"darkTheme"===e.themeName?a(49):void 0}),[e]);return r.a.createElement(h,{backGroundPatter:T,repeatVertical:!1,backgroundColor:"#0060f3",customStyle:"portfolio-style"},r.a.createElement(N,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"welcome-header"},r.a.createElement(p,null,"WELCOME")),r.a.createElement(w,{introText:"Hi!, i'm",name:"Suvel Rathneswar",profession:"Web Developer",extra:r.a.createElement("span",null,r.a.createElement(g,{label:"office bag",symbol:"\ud83d\udcbc"}),"@ Soft Suave,Banglore")})),r.a.createElement(b,{customWrapperStyle:"quotes-wrapper",quote:"Programming is like any other sport.You might know the rules but\r you have to play to learn.",by:"Zuckerberg",image:S,extra:r.a.createElement("img",{src:t(),alt:"personalphoto",className:"personal-image"})}),r.a.createElement("div",{className:"container"},r.a.createElement(E,{id:"content1",header:"Libraries",emoji:r.a.createElement(g,{label:"libraries",symbol:"\ud83d\udce6"}),body:"react,typescript,lodash,moment,classnames"}),r.a.createElement(E,{id:"content2",header:"Current Project",emoji:r.a.createElement(g,{label:"printer",symbol:"\ud83d\udda8\ufe0f"}),body:r.a.createElement("p",{className:"justified-paragraph"},'The Current project that i am working on is "Admin portal" site where there are three level of user and each having their own set of authorization and data set . The "Tenant admin/Super admin" highest level of authority , they can create and manipulate tenant and tenant data."Tenant / admin " is the user who invite or create user and manage them. I have used Core UI bootstrap frame ,google-map-react (There is Tab for "Tenant/user" where we mark the user data on their respective co-ordinates, the client wanted a heat-map like functionality on this tab so we used google-map-react to achieve that),points-cluster (I used clustering techniques to group the users because we had a problem in "google-map-react" as its markers where overlapping each other while zooming out.) , react-idle-timer (I also maintain session in this project,with the help of "react-idle-timer" we notify the user about their ideal state,when the individual do not make any "mouse movement" or "key press" the ideal listener is triggered), firebase and redux.')}),r.a.createElement(E,{id:"content3",header:"My works",body:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"bold-link"},"Git Repository"),r.a.createElement("p",{className:"bold-link"},"Behance")),emoji:r.a.createElement(g,{label:"repo",symbol:"\ud83d\udcc1"})}),r.a.createElement(E,{id:"content4",header:"Current Working Status",body:r.a.createElement("p",{className:"justified-paragraph"},"I am software trainee at softsuave,bangalore. Soft Suave is a fast growing Information Technology (IT) company headquartered in one of the largest technology-hubs in India \u2013 Chennai with a sales office in Catonsville, MD \u2013 United States. Soft Suave is specialized in providing end-to-end IT Services and Solutions to mid-market and Fortune-500 across the USA, UK, Australia, France, Denmark, Iceland, UAE, and India. We have a significant expertise and a best-in-class track record in creating and delivering high-value IT-enabled business solutions. We provide rapid and cost-effective Enterprise Solutions in several key areas including Web Application Development, Mobile Application Development, Cloud Computing and Legacy Modernization. Soft Suave is an ISO 9001-2015 certified company"),emoji:r.a.createElement(g,{label:"repo",symbol:"\ud83d\udc54"})})),r.a.createElement(b,{customWrapperStyle:"quotes-wrapper",quote:"We all need people who will give us feedback.That\u2019s how we\r improve.",by:"Bill Gates",image:x,extra:r.a.createElement(f,null,r.a.createElement(v,{header:"Send Feedback",emoji:r.a.createElement(g,{label:"office bag",symbol:"\ud83d\udc8c"})}))}),r.a.createElement("div",{className:"container"},r.a.createElement(E,{id:"content5",header:"Hire me!",body:r.a.createElement("p",{className:"bold-link"},"find.suvel@gmail.com"),emoji:r.a.createElement(g,{label:"repo",symbol:"\ud83e\udd1d"})})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null,r.a.createElement(O,null))),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.62632706.chunk.js.map