(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){e.exports=t.p+"static/media/Ellipse.532c6eed.svg"},function(e,a,t){e.exports=t.p+"static/media/menubar.73c838f4.svg"},function(e,a,t){e.exports=t.p+"static/media/Ellipse-darktheme.513397cb.svg"},function(e,a,t){e.exports=t.p+"static/media/menubar-darktheme.373edf06.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/mark-img.da9647be.png"},function(e,a,t){e.exports=t.p+"static/media/billgates-img.8c3729bb.png"},function(e,a,t){e.exports=t.p+"static/media/bgdull-img.61eb6510.svg"},function(e,a,t){e.exports=t.p+"static/media/guywithmic2.87fc57e6.png"},function(e,a,t){e.exports=t.p+"static/media/guywithmic2-darktheme.5912472a.png"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),i=t.n(o),s=t(12),l=t(1),c=Object(n.createContext)(void 0),m={lightTheme:{themeName:"lightTheme",mainColor:"#0060f3",secondaryColor:"#1B45AE",tertiaryColor:"white",mainFontColor:"white",secondaryFontColor:"black",tellerEllipse:t(22),menuBarIcon:t(23)},darkTheme:{themeName:"darkTheme",mainColor:"#0E2C46",secondaryColor:"#803343",tertiaryColor:"#F16529",mainFontColor:"#F16529",secondaryFontColor:"black",tellerEllipse:t(24),menuBarIcon:t(25)}},u=function(e){return"darkTheme"===e?m.darkTheme:m.lightTheme},d=function(e){var a=Object(n.useState)("lightTheme"),t=Object(l.a)(a,2),o=t[0],i=t[1],m=Object(n.useCallback)((function(){i((function(e){return"lightTheme"===e?"darkTheme":"lightTheme"}))}),[o]);return r.a.createElement(c.Provider,{value:Object(s.a)(Object(s.a)({},u(o)),{},{setTheme:m})},e.children)},p=(t(26),t(27),function(e){var a=e.backGroundPatter,t=e.repeatVertical,o=void 0!==t&&t,i=e.customStyle,s=void 0===i?"":i,l=o?"x":"y",m=Object(n.useContext)(c);return r.a.createElement("div",{className:"repeatingpatternbackground-container ".concat(s),style:{backgroundImage:"url(".concat(a,")"),backgroundRepeat:"repeat-".concat(l),backgroundColor:"".concat(m&&m.mainColor)}},e.children)}),h=(t(28),function(e){var a=Object(n.useContext)(c),t=e.customStyle;return r.a.createElement("h1",{style:{color:a&&a.mainFontColor},className:"page-header ".concat(t)},e.children)}),g=(t(29),function(e){var a=e.customWrapperStyle,t=void 0===a?"":a,o=e.image,i=e.quote,s=e.by,l=e.extra,m=Object(n.useContext)(c);return r.a.createElement("div",{className:"quote-container ".concat(t)},r.a.createElement("div",{style:{backgroundImage:"url(".concat(m&&m.tellerEllipse,")")},className:"tellerImage-container"},r.a.createElement("img",{className:"tellerImage",src:o,alt:"person that quoted the below quote"})),r.a.createElement("div",{style:{backgroundColor:m&&m.tertiaryColor},className:"quotecontent-container"},r.a.createElement("div",{className:"quote"},r.a.createElement("p",null,'"',i,'"',r.a.createElement("br",null),r.a.createElement("span",{className:"name-container"},"-",s))),l&&r.a.createElement("div",{className:"extra-container"},l)))}),b=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},f=(t(30),function(e){var a=e.id,t=Object(n.useContext)(c);return r.a.createElement("div",{style:{WebkitTextStrokeColor:t&&t.secondaryFontColor,WebkitTextFillColor:t&&t.mainFontColor},id:a||"",className:"portfolio-details-container"},e.children)}),E=function(e){var a=e.header,t=e.emoji;return r.a.createElement("h2",{className:"header"},a," ",t)},v=function(e){var a=e.header,t=e.body,o=e.emoji,i=e.id,s=Object(n.useContext)(c);return r.a.createElement(f,{id:i},r.a.createElement(E,{header:a,emoji:o}),r.a.createElement("div",{style:{color:s&&s.mainFontColor},className:"body"},t))},y=t(2),k=t(7),w=t.n(k),C=(t(41),function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1],i=function(){o((function(e){return!e}))};Object(n.useEffect)((function(){for(var e=document.getElementsByClassName("nav-item"),a=0;a<e.length;a++)e[a].addEventListener("click",i,!1);return function(){for(var a=0;a<e.length;a++)e[a].removeEventListener("click",i,!1)}}),[]);var s=w()({"menubar-container":!0,selected:t}),m=w()({menubar:!0}),u=w()({menuoptions:!0,selected:!t}),d=Object(n.useContext)(c);return r.a.createElement("div",{className:s,onClick:i},r.a.createElement("div",{style:{backgroundImage:"url(".concat(d&&d.menuBarIcon,")")},className:m,onClick:function(e){e.stopPropagation(),o((function(e){return!e}))}}),r.a.createElement("div",{className:u,onClick:function(e){return e.stopPropagation()}},r.a.createElement("ul",{onChange:function(e){e.stopPropagation(),o((function(e){return!e}))}},r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content1",spy:!0,smooth:!0,offset:-70,duration:500},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content2",spy:!0,smooth:!0,offset:-70,duration:500},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content3",spy:!0,smooth:!0,offset:-70,duration:500},"Digital footprint")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.Link,{hashSpy:!0,activeClass:"active",to:"content4",spy:!0,smooth:!0,offset:-70,duration:500},"Current Working Status")))))}),j=(t(42),function(e){var a=e.introText,t=e.name,o=e.profession,i=e.extra,s=e.containerCustomStyle,l=Object(n.useContext)(c);return r.a.createElement("div",{style:{color:l&&l.mainFontColor},className:"intro-paragraph ".concat(s)},r.a.createElement("p",null,r.a.createElement("span",null,"".concat(a)),r.a.createElement("br",null),r.a.createElement("span",{className:"weight-regular"},"".concat(t)),r.a.createElement("br",null),r.a.createElement("span",{className:"weight-regular"},"".concat(o)),r.a.createElement("br",null),i))}),N=(t(43),t(44),t(45)),S=t(46),I=t(47),x=function(){var e=Object(n.useContext)(c);Object(n.useCallback)((function(){return e&&"lightTheme"===e.themeName?t(48):e&&"darkTheme"===e.themeName?t(49):void 0}),[e]);return r.a.createElement(p,{backGroundPatter:I,repeatVertical:!1,backgroundColor:"#0060f3",customStyle:"portfolio-style"},r.a.createElement(C,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"welcome-header"},r.a.createElement(h,null,"WELCOME")),r.a.createElement(j,{introText:"Hi!, i'm",name:"Suvel Rathneswar",profession:"Software Engineer",extra:r.a.createElement("span",null,r.a.createElement(b,{label:"office bag",symbol:"\ud83d\udcbc"}),"@ Soft Suave,Banglore")})),r.a.createElement(g,{customWrapperStyle:"quotes-wrapper",quote:"Programming is like any other sport.You might know the rules but\r you have to play to learn.",by:"Zuckerberg",image:N}),r.a.createElement("div",{className:"container"},r.a.createElement(v,{id:"content1",header:"Skills",emoji:r.a.createElement(b,{label:"libraries",symbol:"\ud83d\udee0"}),body:"React.js,Typescript,Lodash,Moment.js,Three.js,Storybook,React-testing-library,Node.js,Express.js, REST API,SQL and PLSQL, Firebase,JsFroce,AWS( Ec2, Lamda,S3),Bash scripting,github pages,git,Notion, Figma,Jira."}),r.a.createElement(v,{id:"content2",header:"Projects",emoji:r.a.createElement(b,{label:"printer",symbol:"\ud83d\udcc3"}),body:r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Kannaku Sollu (Currently building \ud83d\udc77\u200d\u2642\ufe0f)"),r.a.createElement("p",{className:"justified-paragraph"},"Kannaku Sollu is a fun project that I have designed and developed to showcase my approach towards the application Splitwise."),r.a.createElement("p",{className:"justified-paragraph"},"I am building the application so that I could have emoji expressions which should be self-explanatory of the expenses, like snacks or grocery things, which are more user friendly in my opinion. This is the first project that I have tried to implement micro animation and transition when moving from one to another section."),r.a.createElement("a",{className:"bold-link bule-bg",href:"https://suvel.github.io/kannaku_sollu/",target:"_blank"},"Link to the web application")),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Tenant and Users"),r.a.createElement("p",{className:"justified-paragraph"},"Tenant and Users is an admin dashboard that supports multi routes and user-type customized dashboard views, charts, and a heat map to visualize the data and to make data-driven decisions."),r.a.createElement("span",null,"I was responsible for:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Building a desktop and mobile responsive web application that supports cross-browsers, and optimizing the user experience for the same."),r.a.createElement("li",null,"Creating a heat map using Marker Clustering and Google map"),r.a.createElement("li",null,"Using Firebase NoSQL database and Firestore to manage data and resources"))),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Warehouse Stimulation"),r.a.createElement("p",{className:"justified-paragraph"},"Warehouse Stimulation is a React based proof of work that renders a dynamic warehouse with racks, aisle, floor markers from an input Object. It also renders pallets on those racks and provides functionality to toggle the arrangement of the same. The project was aimed to visualize the different types of possible arrangements and to make the process of data driven decision making simple."),r.a.createElement("p",{className:"justified-paragraph"},"I was responsible for brainstorming with clients to document the requirements, building the application from starch, deploying the application and improving the application\u2019s performance in the course of developing the same."),r.a.createElement("a",{className:"bold-link bule-bg",href:"https://suvel-the-dev.github.io/warehouse_management/",target:"_blank"},"Link to proof of work demo")),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"ChickIncubator"),r.a.createElement("p",{className:"justified-paragraph"},"ChickIncubator is an application that helps supervisors and workers of a chicken incubator factory to assign work, create checklists, renew equipment and troubleshoot issues. I was responsible for creating new REST endpoints and services on the Express server, updating MySQL queries and procedures that were used by the server, maintaining the application to be mobile responsive and creating new React components."),r.a.createElement("p",{className:"justified-paragraph"},"I have also redesigned a page to reduce the number of clicks that were made in order to use the application, this very much appreciated by the client.")),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Truckers"),r.a.createElement("p",{className:"justified-paragraph"},"Truckers is a logistic application that is created using ionic and backed by an Express REST server."),r.a.createElement("p",{className:"justified-paragraph"},"I was responsible for creating routes, connecting the server with the JsForce, documenting the APIs in Postman and also analyzing the frontend application\u2019s API request through logs, to make sure it was not bottlenecking the server unnecessarily."),r.a.createElement("p",{className:"justified-paragraph"},"While working in this project I have created an Express middleware that logs the Method, query parameters, payload, the body of the request, and the response to the requests that are sent to the server, through I was able to find certain screens of the application were initiating unnecessary API calls and reported the same to the Ionic developer to correct the same, which had a slight improvement in application UX.")),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Tpro"),r.a.createElement("p",{className:"justified-paragraph"},"Tpro is an admin dashboard that enables its customers to create, schedule , visualize, and send emails about related reports."),r.a.createElement("p",{className:"justified-paragraph"},"I was responsible for creating AMIs for multiple instances and upgrading the instances with scripts that could startup the services automatically on rebooting, running cron jobs to maintain the volume of the instances, and creating the Lambda function that cleans up the S3 to remove unnecessary resources."),r.a.createElement("p",{className:"justified-paragraph"},"I was able to find and fix a server that was constantly going down, the issue was in the RAM configuration as the configured RAM had less memory compared to the load it was processing. I added Swap memory to mitigate the issue, and this was very much appreciated by the project manager.")))}),r.a.createElement(v,{id:"content3",header:"Digital footprint",body:r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{target:"_blank",href:"https://github.com/suvel",className:"bold-link bule-bg"},"Git Repository"),r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/suvel-rathneswar-%E2%A0%80-baab611b7/",className:"bold-link bule-bg"},"Linkedin"),r.a.createElement("a",{target:"_blank",href:"https://www.behance.net/findsuvel",className:"bold-link bule-bg"},"Behance"),r.a.createElement("a",{target:"_blank",href:"mailto: find.suvel@gmail.com",className:"bold-link bule-bg"},"Email me")),emoji:r.a.createElement(b,{label:"repo",symbol:"\ud83d\udcc1"})}),r.a.createElement(v,{id:"content4",header:"Current Working Status",body:r.a.createElement("p",{className:"justified-paragraph"},"I am software trainee at softsuave,bangalore. Soft Suave is a fast growing Information Technology (IT) company headquartered in one of the largest technology-hubs in India \u2013 Chennai with a sales office in Catonsville, MD \u2013 United States. Soft Suave is specialized in providing end-to-end IT Services and Solutions to mid-market and Fortune-500 across the USA, UK, Australia, France, Denmark, Iceland, UAE, and India. We have a significant expertise and a best-in-class track record in creating and delivering high-value IT-enabled business solutions. We provide rapid and cost-effective Enterprise Solutions in several key areas including Web Application Development, Mobile Application Development, Cloud Computing and Legacy Modernization. Soft Suave is an ISO 9001-2015 certified company"),emoji:r.a.createElement(b,{label:"repo",symbol:"\ud83d\udc54"})})),r.a.createElement(g,{customWrapperStyle:"quotes-wrapper",quote:"We all need people who will give us feedback.That\u2019s how we\r improve.",by:"Bill Gates",image:S,extra:r.a.createElement("a",{style:{color:"rgb(0, 96, 243)"},href:"mailto: find.suvel@gmail.com"},"Send your feedbacks here")}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null,r.a.createElement(x,null))),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.dfc13805.chunk.js.map