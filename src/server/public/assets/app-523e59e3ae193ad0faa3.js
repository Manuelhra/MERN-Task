!function(e){function t(t){for(var a,o,s=t[0],l=t[1],u=t[2],p=0,m=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(i&&i(t);m.length;)m.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={0:0},c=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var i=l;c.push([40,1]),r()}({17:function(e,t,r){"use strict";(function(e){var r={backendUrl:e.env.BACKEND_URL||"http://localhost:4000",apiKeyTokenAdmin:e.env.API_KEY_TOKEN_ADMIN||"38ed9b941cca3a940680e6a5d92aa76c4c443adb023e74c2d1a44a5b10582bf8",apiKeyTokenPublic:e.env.API_KEY_TOKEN_PUBLIC||"68c8ccb4ebb48f550257ed00bae69b3f4a18aaf56989fb2e802c1f3a6663ec2d"};t.a=r}).call(this,r(29))},40:function(e,t,r){e.exports=r(74)},74:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(13),o=r.n(c),s=r(38),l=r(4),u=r(12),i=r(1),p=r.n(i),m=r(5),f=r.n(m),d=r(11),b=r.n(d),y=r(6),O=r.n(y),j=r(3),g=r.n(j),v=Object(a.createContext)(),h=r(16),P=r.n(h),w="showFormProject",E="errorProjects",k="getProjects",x="addProject",N="errorForm",D="selectedProject",F="deleteProject",S="getProjectTasks",T="addTask",C="errorTask",_="deleteTask",A="selectedTask",R="updateTask",I="changeSelectedTaskValue",U="errorTaskMessage",q="showAlert",K="hiddenAlert",L="successfullyRegister",M="errorRegister",Y="getUser",z="successfullyLogin",B="errorLogin",V="logout";function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G=function(e,t){switch(t.type){case w:return H(H({},e),{},{showForm:t.payload});case k:return H(H({},e),{},{projects:t.payload,message:null,error:!1});case x:return H(H({},e),{},{projects:[].concat(P()(e.projects),[t.payload]),showForm:!1,message:null,error:!1});case N:return H(H({},e),{},{error:t.payload,message:null});case D:return H(H({},e),{},{selectedProject:e.projects.filter((function(e){return e._id===t.payload}))});case F:return H(H({},e),{},{projects:e.projects.filter((function(e){return e._id!==t.payload})),selectedProject:{},message:null});case E:return H(H({},e),{},{message:t.payload});default:return e}},Q=r(35),W=r.n(Q),X=r(17),Z=W.a.create({baseURL:X.a.backendUrl});function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te=function(e){var t=e.children,r=Object(a.useReducer)(G,{projects:[],showForm:!1,selectedProject:{},message:null,error:!1}),c=O()(r,2),o=c[0],s=c[1],l=function(){var e=b()(f.a.mark((function e(){var t,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.get("/api/projects");case 3:t=e.sent,r=t.data.data,s({type:k,payload:r.values}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),a=e.t0.response.data.message,s({type:E,payload:{msg:a,category:"alert-error"}});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=b()(f.a.mark((function e(t){var r,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.post("/api/projects",t);case 3:r=e.sent,a=r.data.data,s({type:x,payload:a}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response.data.message,s({type:E,payload:{msg:n,category:"alert-error"}});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=b()(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.delete("/api/projects/".concat(t));case 3:s({type:F,payload:t}),e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),r=e.t0.response.data.message,s({type:E,payload:{msg:r,category:"alert-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(v.Provider,{value:ee(ee({},o),{},{showFormFn:function(e){s({type:w,payload:e})},addProjectFn:u,showErrorFn:function(e){s({type:N,payload:e})},selectedProjectFn:function(e){s({type:D,payload:e})},deleteProjectFn:i,getProjectsFn:l})},t)};te.propTypes={children:g.a.node.isRequired};var re=te,ae=Object(a.createContext)();function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=function(e,t){switch(t.type){case S:return ce(ce({},e),{},{tasksProject:t.payload});case T:return ce(ce({},e),{},{tasksProject:[t.payload].concat(P()(e.tasksProject)),error:!1,message:null});case C:return ce(ce({},e),{},{error:t.payload});case _:return ce(ce({},e),{},{tasksProject:e.tasksProject.filter((function(e){return e.id!==t.payload})),message:null});case R:return ce(ce({},e),{},{tasksProject:e.tasksProject.map((function(e){return e._id===t.payload._id?t.payload:e})),message:null});case A:case I:return ce(ce({},e),{},{selectedTask:t.payload});case U:return ce(ce({},e),{},{message:t.payload});default:return e}};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){var t=e.children,r=Object(a.useReducer)(oe,{tasksProject:[],error:!1,selectedTask:{},message:null}),c=O()(r,2),o=c[0],s=c[1],l=function(){var e=b()(f.a.mark((function e(t){var r,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.get("/api/tasks?_id=".concat(t));case 3:r=e.sent,a=r.data.data,s({type:S,payload:a.values}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response.data.message,s({type:U,payload:{msg:n,category:"alert-error"}});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=b()(f.a.mark((function e(t){var r,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.post("/api/tasks",t);case 3:r=e.sent,a=r.data.data,s({type:T,payload:a}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response.data.message,s({type:U,payload:{msg:n,category:"alert-error"}});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=b()(f.a.mark((function e(t,r){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.delete("/api/tasks/".concat(t,"?_id=").concat(r));case 3:s({type:_,payload:t}),e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),a=e.t0.response.data.message,s({type:U,payload:{msg:a,category:"alert-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=b()(f.a.mark((function e(t){var r,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.put("/api/tasks/".concat(t._id,"?_id=").concat(t.project_id._id),t);case 3:r=e.sent,a=r.data.data,s({type:R,payload:a}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response.data.message,s({type:U,payload:{msg:n,category:"alert-error"}});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(ae.Provider,{value:le(le({},o),{},{getTasksProjectFn:l,addTaskFn:u,showErrorFn:function(e){s({type:C,payload:e})},deleteTaskFn:i,selectedTaskFn:function(e){s({type:A,payload:e})},updateTaskFn:p,changeSelectedTaskValueFn:function(e){s({type:I,payload:e})}})},t)};ue.propTypes={children:g.a.node.isRequired};var ie=ue;function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var fe=function(e,t){switch(t.type){case K:case q:return me(me({},e),{},{alert:t.payload});default:return e}},de=Object(a.createContext)();function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Oe=function(e){var t=e.children,r=Object(a.useReducer)(fe,{alert:null}),c=O()(r,2),o=c[0],s=c[1];return n.a.createElement(de.Provider,{value:ye(ye({},o),{},{showAlertFn:function(e,t){s({type:q,payload:{msg:e,category:t}}),setTimeout((function(){s({type:K,payload:null})}),5e3)}})},t)};Oe.propTypes={children:g.a.node.isRequired};var je=Oe;function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=function(e,t){switch(t.type){case L:return ve(ve({},e),{},{user:t.payload,message:null,loading:!1});case z:return localStorage.setItem("token",t.payload.token),ve(ve({},e),{},{user:t.payload.data,message:null,authenticated:!0,loading:!1});case Y:return ve(ve({},e),{},{user:t.payload,authenticated:!0});case V:case M:case B:return localStorage.removeItem("token"),ve(ve({},e),{},{user:{},message:t.payload,authenticated:!1,loading:!1});default:return e}},Pe=Object(a.createContext)(),we=function(e){e?Z.defaults.headers.common.Authorization=e:delete Z.defaults.headers.common.Authorization};function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var xe=function(e){var t=e.children,r={token:localStorage.getItem("token"),authenticated:!1,user:{},message:null,loading:!0},c=Object(a.useReducer)(he,r),o=O()(c,2),s=o[0],l=o[1],u=function(){var e=b()(f.a.mark((function e(t){var r,a,n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.post("/api/auth/sign-up",t);case 3:r=e.sent,a=r.data.data,l({type:L,payload:a}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response.data.email,c={msg:n.message,category:"alert-error"},l({type:M,payload:c});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=b()(f.a.mark((function e(t){var r,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ke(ke({},t),{},{apiKeyToken:X.a.apiKeyTokenAdmin}),e.prev=1,e.next=4,Z.post("/api/auth/login",r);case 4:a=e.sent,l({type:z,payload:a.data}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),n=e.t0.response.data.message,l({type:B,payload:{msg:n,category:"alert-error"}});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=b()(f.a.mark((function e(){var t,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&we(t),e.prev=2,e.next=5,Z.get("/api/users/auth");case 5:r=e.sent,a=r.data.data,l({type:Y,payload:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),l({type:B});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(Pe.Provider,{value:ke(ke({},s),{},{registerUserFn:u,loginFn:i,userAuthorizationFn:p,logoutFn:function(){l({type:V})}})},t)};xe.propTypes={children:g.a.node.isRequired};var Ne=xe;function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se=function(){var e=Object(a.useState)({name:"",email:"",password:"",passwordConfirmation:""}),t=O()(e,2),r=t[0],c=t[1],o=r.name,s=r.email,i=r.password,m=r.passwordConfirmation,f=Object(l.g)(),d=Object(a.useContext)(de),b=d.alert,y=d.showAlertFn,j=Object(a.useContext)(Pe),g=j.message,v=j.user,h=j.registerUserFn;Object(a.useEffect)((function(){return g?y(g.msg,g.category):Object.keys(v).length>0?f.push("/projects"):void 0}),[g,v,f]);var P=function(e){c(Fe(Fe({},r),{},p()({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-user"},b&&n.a.createElement("div",{className:"alert ".concat(b.category)},b.msg),n.a.createElement("div",{className:"content-form shadow-dark"},n.a.createElement("h1",null,"Sign Up"),n.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),""===o.trim()||""===s.trim()||""===i.trim()||""===m.trim()?y("All fields are required.","alert-error"):i.length<6||m.length<6?y("The password must be at least 6 characters long","alert-error"):i!==m?y("Password does not match","alert-error"):void h({name:o,email:s,password:i})}},n.a.createElement("div",{className:"field-form"},n.a.createElement("p",null,"Name"),n.a.createElement("label",{htmlFor:"name"},n.a.createElement("input",{id:"name",name:"name",type:"text",value:o,placeholder:"Your name",onChange:P}))),n.a.createElement("div",{className:"field-form"},n.a.createElement("p",null,"Email"),n.a.createElement("label",{htmlFor:"email"},n.a.createElement("input",{id:"email",name:"email",type:"email",value:s,placeholder:"Your email",onChange:P}))),n.a.createElement("div",{className:"field-form"},n.a.createElement("p",null,"Password"),n.a.createElement("label",{htmlFor:"password"},n.a.createElement("input",{id:"password",name:"password",type:"password",value:i,placeholder:"Your password",onChange:P}))),n.a.createElement("div",{className:"field-form"},n.a.createElement("p",null,"Password confirmation"),n.a.createElement("label",{htmlFor:"passwordConfirmation"},n.a.createElement("input",{id:"passwordConfirmation",name:"passwordConfirmation",type:"password",value:m,placeholder:"Repeat password",onChange:P}))),n.a.createElement("div",{className:"field-form"},n.a.createElement("input",{type:"submit",value:"SignUp",className:"btn btn-primary btn-block"}))),n.a.createElement(u.b,{to:"/",className:"link-survey"},"Login")))};function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _e=function(){var e=Object(a.useState)({email:"",password:""}),t=O()(e,2),r=t[0],c=t[1],o=r.email,s=r.password,i=Object(l.g)(),m=Object(a.useContext)(de),f=m.alert,d=m.showAlertFn,b=Object(a.useContext)(Pe),y=b.message,j=b.authenticated,g=b.loginFn;Object(a.useEffect)((function(){return y?d(y.msg,y.category):j?i.push("/projects"):void 0}),[y,j,i]);var v=function(e){c(Ce(Ce({},r),{},p()({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"form-user"},f&&n.a.createElement("div",{className:"alert ".concat(f.category)},f.msg),n.a.createElement("div",{className:"content-form shadow-dark"},n.a.createElement("h1",null,"Login"),n.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===o.trim()||""===s.trim())return d("All fields are required.","alert-error");g({email:o,password:s})}},n.a.createElement("div",{className:"field-form"},n.a.createElement("p",null,"Email"),n.a.createElement("label",{htmlFor:"email"},n.a.createElement("input",{id:"email",name:"email",type:"email",value:o,placeholder:"Email",onChange:v}))),n.a.createElement("div",{className:"field-form"},n.a.createElement("p",null,"Password"),n.a.createElement("label",{htmlFor:"password"},n.a.createElement("input",{id:"password",name:"password",type:"password",value:s,placeholder:"Your password",onChange:v}))),n.a.createElement("div",{className:"field-form"},n.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary btn-block"}))),n.a.createElement(u.b,{to:"/sign-up",className:"link-survey"},"Sign Up")))};function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ie=function(){var e=Object(a.useState)({name:""}),t=O()(e,2),r=t[0],c=t[1],o=r.name,s=Object(a.useContext)(v),l=s.showForm,u=s.error,i=s.showFormFn,m=s.addProjectFn,f=s.showErrorFn;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button",className:"btn btn-block btn-primary",onClick:function(){return i(!l)}},"New Project"),l&&n.a.createElement("form",{className:"form-new-project",onSubmit:function(e){return e.preventDefault(),""===o.trim()?f(!0):(m(r),f(!1),c({name:""}))}},n.a.createElement("input",{type:"text",name:"name",value:o,className:"input-text",placeholder:"Project's name",onChange:function(e){c(Re(Re({},r),{},p()({},e.target.name,e.target.value)))}}),n.a.createElement("input",{type:"submit",value:"Add project",className:"btn btn-primary btn-block"})),u&&n.a.createElement("p",{className:"message error"},"Project name is required"))},Ue=function(e){var t=e.project,r=Object(a.useContext)(v).selectedProjectFn,c=Object(a.useContext)(ae).getTasksProjectFn,o=Object(a.useContext)(Pe).userAuthorizationFn;Object(a.useEffect)((function(){o()}),[]);return n.a.createElement("button",{type:"button",className:"btn btn-blank",onClick:function(){r(t._id),c(t._id)}},t.name)};Ue.defaultProps={project:{}},Ue.propTypes={project:g.a.objectOf(g.a.any)};var qe=Ue,Ke=function(){var e=Object(a.useContext)(v),t=e.projects,r=e.message,c=e.getProjectsFn,o=Object(a.useContext)(de),s=o.alert,l=o.showAlertFn;return Object(a.useEffect)((function(){r&&l(r.msg,r.category),c()}),[r]),0===t.length?n.a.createElement("p",null,"No projects yet."):n.a.createElement("ul",{className:"list-projects"},s&&n.a.createElement("div",{className:"alert ".concat(s.category)},s.msg),t.map((function(e){return n.a.createElement(qe,{key:e._id,project:e})})))},Le=function(){return n.a.createElement("aside",null,n.a.createElement("h1",null,"MERN",n.a.createElement("span",null,"Tasks")),n.a.createElement(Ie,null),n.a.createElement("div",{className:"projects"},n.a.createElement("h2",null,"Your Projects"),n.a.createElement(Ke,null)))},Me=function(){var e=Object(a.useContext)(Pe),t=e.user,r=e.logoutFn;return n.a.createElement("header",{className:"app-header"},Object.keys(t).length>0&&n.a.createElement("p",{className:"name-user"},"Hey"," ",n.a.createElement("span",null,t.name)),n.a.createElement("nav",{className:"nav-principal"},n.a.createElement("button",{type:"button",className:"btn btn-blank",onClick:r},"LogOut")))};function Ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Be=function(){var e=Object(a.useState)({name:""}),t=O()(e,2),r=t[0],c=t[1],o=r.name,s=Object(a.useContext)(v).selectedProject,l=Object(a.useContext)(ae),u=l.selectedTask,i=l.error,m=l.addTaskFn,f=l.showErrorFn,d=l.getTasksProjectFn,b=l.updateTaskFn,y=l.changeSelectedTaskValueFn;if(Object(a.useEffect)((function(){return Object.keys(u).length>0?c(u):c({name:""})}),[u]),0===Object.keys(s).length)return null;var j=O()(s,1)[0];return n.a.createElement("div",{className:"form"},n.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===o.trim())return f(!0);if(Object.keys(u).length>0)b(r),y({});else{var t=ze(ze({},r),{},{project_id:j._id,_id:j._id});m(t)}return f(!1),d(j._id),c({name:""})}},n.a.createElement("div",{className:"content-input"},n.a.createElement("input",{type:"text",name:"name",value:o,className:"input-text",placeholder:"Name of the homework",onChange:function(e){c(ze(ze({},r),{},p()({},e.target.name,e.target.value)))}})),n.a.createElement("div",{className:"content-input"},n.a.createElement("input",{type:"submit",value:Object.keys(u).length>0?"Edit task":"Add task",className:"btn btn-primary btn-submit btn-block"}))),i&&n.a.createElement("p",{className:"message error"},"The name of the task is required"))},Ve=r(77),Je=r(76);function He(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?He(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Qe=function(e){var t=e.task,r=Object(a.useContext)(ae),c=r.deleteTaskFn,o=r.getTasksProjectFn,s=r.updateTaskFn,l=r.selectedTaskFn,u=Object(a.useContext)(v).selectedProject,i=O()(u,1)[0],p=function(e){switch(e){case"changeStateTask":var r=Ge(Ge({},t),{},{status:!t.status});s(r),o(i._id);break;case"editTask":l(t);break;case"deleteTask":c(t._id,i._id),o(i._id)}};return n.a.createElement("li",{className:"task shadow"},n.a.createElement("p",null,t.name),n.a.createElement("div",{className:"state"},t.status?n.a.createElement("button",{type:"button",className:"complete",onClick:function(){return p("changeStateTask")}},"Complete"):n.a.createElement("button",{type:"button",className:"incomplete",onClick:function(){return p("changeStateTask")}},"Incomplete")),n.a.createElement("div",{className:"actions"},n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return p("editTask")}},"Edit"),n.a.createElement("button",{type:"button",className:"btn btn-second",onClick:function(){return p("deleteTask")}},"Delete")))};Qe.defaultProps={task:{}},Qe.propTypes={task:g.a.objectOf(g.a.any)};var We=Qe,Xe=function(){var e=Object(a.useContext)(v),t=e.selectedProject,r=e.deleteProjectFn,c=Object(a.useContext)(ae).tasksProject,o=void 0===c?[]:c;if(0===Object.keys(t).length)return n.a.createElement("h1",null,"Select a project.");var s=O()(t,1)[0];return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Project:"," ",s.name),n.a.createElement("ul",{className:"list-tasks"},0===o.length?n.a.createElement("li",{className:"task"},"No homework"):n.a.createElement(Ve.a,null,o.map((function(e){return n.a.createElement(Je.a,{key:e._id,timeout:200},n.a.createElement(We,{task:e,className:"task"}))})))),n.a.createElement("button",{type:"button",className:"btn btn-delete",onClick:function(){return r(s._id)}},"Delete project ×"))},Ze=function(){return n.a.createElement("div",{className:"content-app"},n.a.createElement(Le,null),n.a.createElement("div",{className:"section-principal"},n.a.createElement(Me,null),n.a.createElement("main",null,n.a.createElement(Be,null),n.a.createElement("div",{className:"content-tasks"},n.a.createElement(Xe,null)))))},$e=r(37),et=r.n($e),tt=function(e){var t=e.component,r=et()(e,["component"]),c=Object(a.useContext)(Pe),o=c.authenticated,s=c.loading,u=c.userAuthorizationFn;return Object(a.useEffect)((function(){u()}),[]),n.a.createElement(l.b,r,o||s?n.a.createElement(t,r):n.a.createElement(l.a,{to:"/"}))};tt.propTypes={component:g.a.element.isRequired};var rt=tt,at=localStorage.getItem("token");at&&we(at);var nt=function(){return n.a.createElement(re,null,n.a.createElement(ie,null,n.a.createElement(je,null,n.a.createElement(Ne,null,n.a.createElement(u.a,null,n.a.createElement(l.d,null,n.a.createElement(l.b,{exact:!0,path:"/"},n.a.createElement(_e,null)),n.a.createElement(l.b,{exact:!0,path:"/sign-up"},n.a.createElement(Se,null)),n.a.createElement(rt,{exact:!0,path:"/projects",component:Ze})))))))},ct=Object(s.a)();o.a.hydrate(n.a.createElement(l.c,{history:ct},n.a.createElement(nt,null)),document.getElementById("root"))}});