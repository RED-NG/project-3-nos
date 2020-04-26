(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a(90)},75:function(e,t,a){},87:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=a(8),s=a(9),i=a(12),u=a(10),m=a(13),d=a(19),h=a.n(d),p=function(e,t){return{type:"GET_ERRORS",payload:{msg:e,status:t,id:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}},f=function(){return{type:"CLEAR_ERRORS"}},g=function(e){var t=e().auth.token,a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},E=(a(75),a(51)),y=a(25),b=a(91),O=a(92);var v=function(){return r.a.createElement("div",{className:"home-bg-pic"},r.a.createElement(b.a,{className:".col-sm-12 .col-md-6 .offset-md-3"},r.a.createElement(O.a,null,r.a.createElement("h1",{className:"display-3"},"No stock? No problem!"),r.a.createElement("p",{className:"lead"},"NoS is an application designed for business owners looking for a solution to simplify inventory management."))))},j=a(100),S=a(93),D=a(11),N=function(){return{type:"ITEMS_LOADING"}},C=a(21),w=a(109),k=a(94),I=a(95),A=a(96),_=a(97),L=a(98),U=a(99),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:"",count:0,threshold:0},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name,count:a.state.count,threshold:a.state.threshold};console.log("created Item on submit",t),console.log("created Item on submit",JSON.stringify(t)),a.props.addItem(t),a.toggle()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{color:"danger",onClick:this.toggle,className:"mb-1"},"Add an item"),r.a.createElement(w.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(k.a,{toggle:this.toggle},"Add an item into your inventory"),r.a.createElement(I.a,null,r.a.createElement(A.a,{onSubmit:this.onSubmit},r.a.createElement(_.a,null,r.a.createElement(L.a,{for:"item"},"Product to add:"),r.a.createElement(U.a,{type:"text",name:"name",id:"name",placeholder:"Name of product",onChange:this.onChange,className:"mb-1"}),r.a.createElement(U.a,{type:"text",name:"count",id:"count",placeholder:"How many units do you have?",onChange:this.onChange,className:"mb-1"}),r.a.createElement(U.a,{type:"text",name:"threshold",id:"threshold",placeholder:"How many before you need to buy more?",onChange:this.onChange,className:"mb-1"}),r.a.createElement(S.a,{color:"danger",block:!0},"Submit item"))))))}}]),t}(n.Component),R=Object(D.b)(function(e){return{item:e.item}},{addItem:function(e){return function(t,a){console.log("item at addItem",e),h.a.post("/api/items",e,g(a)).then(function(e){return t({type:"ADD_ITEMS",payload:e.data})}).catch(function(e){return t(p(e.response.data,e.response.status))})}}})(T),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:"",sold:0,date:"",profit:0,modalData:{}},a.saleModal={header:"Add a sale you made",nameLabel:"Sales figures to add:",soldPurchase:"How many units have you sold today?",date:"Enter the date this sales occurred",profit:"Enter the amount earned from this sale in dollars"},a.purchaseModal={header:"Log a purchase you made",nameLabel:"Purchases to add",soldPurchase:"How many units have you purchased?",date:"Enter the date this purchase occurred",profit:"Enter the amount spent from this purchase in dollars"},a.toggle=function(){a.setState({modal:!a.state.modal})},a.showModal=function(e){a.setState({modalData:e},a.toggle)},a.onChange=function(e){a.setState(Object(C.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){var t;e.preventDefault(),a.state.modalData===a.saleModal?t={name:a.state.name,sold:-a.state.sold,date:a.state.date,profit:a.state.profit}:a.state.modalData===a.purchaseModal&&(t={name:a.state.name,sold:a.state.sold,date:a.state.date,profit:-a.state.profit}),console.log("created Item on submit",t),console.log("created Item on submit",JSON.stringify(t)),a.props.addDay(t),a.toggle()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S.a,{color:"danger",onClick:function(){return e.showModal(e.saleModal)},className:"mb-1"},"Record a sale"),r.a.createElement(S.a,{color:"danger",onClick:function(){return e.showModal(e.purchaseModal)},className:"mb-1 ml-3"},"Record a purchase"),r.a.createElement(w.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(k.a,{toggle:this.toggle},this.state.modalData.header),r.a.createElement(I.a,null,r.a.createElement(A.a,{onSubmit:this.onSubmit},r.a.createElement(_.a,null,r.a.createElement(L.a,{for:"item"},this.state.modalData.nameLabel),r.a.createElement(U.a,{type:"text",name:"name",id:"name",placeholder:"Name of product",onChange:this.onChange,className:"mb-1"}),r.a.createElement(U.a,{type:"text",name:"sold",id:"sold",placeholder:this.state.modalData.soldPurchase,onChange:this.onChange,className:"mb-1"})," ",r.a.createElement(U.a,{type:"date",name:"date",id:"date",placeholder:this.state.modalData.date,onChange:this.onChange,className:"mb-1"}),r.a.createElement(U.a,{type:"text",name:"profit",id:"profit",placeholder:this.state.modalData.profit,onChange:this.onChange,className:"mb-1"}),r.a.createElement(S.a,{color:"danger",block:!0},"Submit day"))))))}}]),t}(n.Component),M=Object(D.b)(function(e){return{day:e.day}},{addDay:function(e){return function(t,a){console.log("item at addDay",e),h.a.post("/api/items/day",e,g(a)).then(function(e){return t({type:"ADD_DAY",payload:e.data})}).catch(function(e){return t(p(e.response.data,e.response.status))})}}})(G),x=(a(87),a(29)),F=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this.props.day.days,t={},a=0;a<e.length;a++)t[e[a].date]?t[e[a].date]+=e[a].profit:t[e[a].date]=e[a].profit;var n=Object.entries(t);return n.sort(function(e,t){var a=new Date(e[0]);return new Date(t[0])-a}),r.a.createElement(j.a,{dark:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Total Profits"))),r.a.createElement("tbody",null,n.map(function(e,t){var a=Object(x.a)(e,2),n=a[0],o=a[1];return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"float-center"},new Date(n).toLocaleDateString()),r.a.createElement("td",{className:"float-center"},"$",o.toFixed(2)))})))}}]),t}(n.Component),P=Object(D.b)(function(e){return{day:e.day}})(F),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item.items,a=this.props.day.days,n={};return t.forEach(function(e){n[e.name]={_id:e._id,count:e.count,threshold:e.threshold}}),a.forEach(function(e){n[e.name]&&(n[e.name].count+=e.sold)}),r.a.createElement(j.a,{dark:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Current Stock Count"),r.a.createElement("th",null,"Threshold Count"),r.a.createElement("th",null,"Delete item"))),r.a.createElement("tbody",null,Object.entries(n).map(function(t){var a,n=Object(x.a)(t,2),o=n[0],l=n[1],c=l._id,s=l.count,i=l.threshold;return a=s<=i?"low-stock":"in-stock",r.a.createElement("tr",{key:c,className:a},r.a.createElement("td",{className:"float-center"},o),r.a.createElement("td",{className:"float-center"},s),r.a.createElement("td",{className:"float-center"},i),r.a.createElement("td",null,r.a.createElement(S.a,{className:"removeItemBtn float-center",color:"danger",size:"sm mr-1",onClick:e.props.onDelete.bind(e,c)},"\xd7")))})))}}]),t}(n.Component),J=Object(D.b)(function(e){return{day:e.day,item:e.item}})(H),Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).dayDelete=function(e){a.props.deleteDay(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getDays(),this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.day.days,a=Object.create(null);return t.forEach(function(e){var t=e.name,n=e.sold,r=a[t]||0;a[t]=r+n}),r.a.createElement(b.a,null,r.a.createElement(R,null),r.a.createElement(J,{onDelete:this.props.deleteItems}),r.a.createElement(M,null),r.a.createElement(j.a,{dark:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Product name"),r.a.createElement("th",null,"Units bought/sold"),r.a.createElement("th",null,"Profit/Cost"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,t.map(function(t){var a=t._id,n=t.name,o=t.sold,l=t.date,c=t.profit;return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"float-center"},new Date(l).toLocaleDateString()),r.a.createElement("td",{className:"float-center"},n),r.a.createElement("td",{className:"float-center"},o),r.a.createElement("td",{className:"float-center"},c),r.a.createElement("td",null,r.a.createElement(S.a,{className:"removeItemBtn float-center",color:"danger",size:"sm mr-1",onClick:e.dayDelete.bind(e,a)},"\xd7")))}))),r.a.createElement(P,null))}}]),t}(n.Component),W=Object(D.b)(function(e){return{item:e.item,day:e.day}},{getItems:function(){return function(e){e(N()),h.a.get("/api/items").then(function(t){return e({type:"GET_ITEMS",payload:t.data})}).catch(function(t){return e(p(t.response.data,t.response.status))})}},deleteItems:function(e){return function(t,a){h.a.delete("/api/items/".concat(e),g(a)).then(function(a){return t({type:"DELETE_ITEM",payload:e})}).catch(function(e){return t(p(e.response.data,e.response.status))})}},getDays:function(){return function(e){e(N()),h.a.get("/api/items/day").then(function(t){return e({type:"GET_DAYS",payload:t.data})}).catch(function(t){return e(p(t.response.data,t.response.status))})}},deleteDay:function(e){return function(t,a){h.a.delete("/api/items/day/".concat(e),g(a)).then(function(a){return t({type:"DELETE_DAY",payload:e})}).catch(function(e){return t(p(e.response.data,e.response.status))})}}})(Y),B=(a(88),a(101)),X=a(102),z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,firstname:"",lastname:"",email:"",password:"",msg:null},a.toggle=function(){a.props.clearAllErr(),a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n={firstname:t.firstname,lastname:t.lastname,email:t.email,password:t.password};a.props.signupUser(n)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("SIGNUP_FAILED"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B.a,{onClick:this.toggle,href:"#"},"Register"),r.a.createElement(w.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(k.a,{toggle:this.toggle},"Sign up for an account"),r.a.createElement(I.a,null,this.state.msg?r.a.createElement(X.a,{color:"dark"},this.state.msg):null,r.a.createElement(A.a,{onSubmit:this.onSubmit},r.a.createElement(_.a,null,r.a.createElement(U.a,{type:"text",name:"firstname",id:"firstname",placeholder:"Enter your first name",onChange:this.onChange,className:"mb-1"}),r.a.createElement(U.a,{type:"text",name:"lastname",id:"lastname",placeholder:"Enter your last name",onChange:this.onChange,className:"mb-1"}),r.a.createElement(U.a,{type:"text",name:"email",id:"email",placeholder:"Enter your email address",onChange:this.onChange,className:"mb-1"})," ",r.a.createElement(U.a,{type:"password",name:"password",id:"password",placeholder:"Enter a password",onChange:this.onChange,className:"mb-1"}),r.a.createElement(S.a,{color:"danger",block:!0},"Sign up"))))))}}]),t}(n.Component),V=Object(D.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}},{signupUser:function(e){var t=e.firstname,a=e.lastname,n=e.email,r=e.password;return function(e){var o=JSON.stringify({firstname:t,lastname:a,email:n,password:r});h.a.post("/api/users",o,{headers:{"Content-Type":"application/json"}}).then(function(t){return e({type:"SIGNUP_SUCCESSFUL",payload:t.data})}).catch(function(t){e(p(t.response.data,t.response.status,"SIGNUP_FAILED")),e({type:"SIGNUP_FAILED"})})}},clearAllErr:f})(z),$=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(B.a,{onClick:this.props.logout,href:"#"},"Logout"))}}]),t}(n.Component),q=Object(D.b)(null,{logout:function(){return{type:"LOGOUT_SUCCESSFUL"}}})($),K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,email:"",password:"",msg:null},a.toggle=function(){a.props.clearAllErr(),a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n={email:t.email,password:t.password};a.props.loginUser(n)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("LOGIN_FAILED"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B.a,{onClick:this.toggle,href:"#"},"Login"),r.a.createElement(w.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(k.a,{toggle:this.toggle},"Login to your account"),r.a.createElement(I.a,null,this.state.msg?r.a.createElement(X.a,{color:"dark"},this.state.msg):null,r.a.createElement(A.a,{onSubmit:this.onSubmit},r.a.createElement(_.a,null,r.a.createElement(U.a,{type:"text",name:"email",id:"email",placeholder:"Enter your email address",onChange:this.onChange,className:"mb-1"})," ",r.a.createElement(U.a,{type:"password",name:"password",id:"password",placeholder:"Enter a password",onChange:this.onChange,className:"mb-1"}),r.a.createElement(S.a,{color:"danger",block:!0},"Login"))))))}}]),t}(n.Component),Q=Object(D.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}},{loginUser:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});h.a.post("/api/auth",n,{headers:{"Content-Type":"application/json"}}).then(function(t){return e({type:"LOGIN_SUCCESSFUL",payload:t.data})}).catch(function(t){e(p(t.response.data,t.response.status,"LOGIN_FAILED")),e({type:"LOGIN_FAILED"})})}},clearAllErr:f})(K),Z=a(103),ee=a(104),te=a(105),ae=a(106),ne=a(107),re=a(108),oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user,o=r.a.createElement(n.Fragment,null,r.a.createElement(Z.a,null,r.a.createElement("span",{className:"navbar-text mr-3"},r.a.createElement("strong",null,a?"Welcome back ".concat(a.firstname," ").concat(a.lastname):""))),r.a.createElement(Z.a,null,r.a.createElement(B.a,{href:"/"},"Home")),r.a.createElement(Z.a,null,r.a.createElement(B.a,{href:"/inventory"},"Inventory")),r.a.createElement(Z.a,null,r.a.createElement(B.a,{href:"/projection"},"Projection")),r.a.createElement(q,null)),l=r.a.createElement(n.Fragment,null,r.a.createElement(Z.a,null,r.a.createElement(V,null)),r.a.createElement(Z.a,null,r.a.createElement(Q,null)));return r.a.createElement("div",null,r.a.createElement(ee.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(b.a,null,r.a.createElement(te.a,{href:"/"},"NoS"),r.a.createElement(ae.a,{onClick:this.toggle}),r.a.createElement(ne.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(re.a,{className:"ml-auto",navbar:!0},t?o:l)))))}}]),t}(n.Component),le=Object(D.b)(function(e){return{auth:e.auth}},null)(oe),ce=a(24),se=a(50),ie=a(30),ue=a(14),me={items:[],loading:!1},de={days:[],loading:!1},he={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},pe={msg:{},status:null,id:null},fe=Object(ce.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(ue.a)({},e,{items:t.payload,loading:!1});case"DELETE_ITEM":return Object(ue.a)({},e,{items:e.items.filter(function(e){return e._id!==t.payload})});case"ADD_ITEMS":return Object(ue.a)({},e,{items:[t.payload].concat(Object(ie.a)(e.items))});case"ITEMS_LOADING":return Object(ue.a)({},e,{loading:!0});default:return e}},day:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DAYS":return Object(ue.a)({},e,{days:t.payload,loading:!1});case"ADD_DAY":return Object(ue.a)({},e,{days:[t.payload].concat(Object(ie.a)(e.days))});case"DELETE_DAY":return Object(ue.a)({},e,{days:e.days.filter(function(e){return e._id!==t.payload})});case"ITEMS_LOADING":return Object(ue.a)({},e,{loading:!0});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(ue.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(ue.a)({},e,{isAuthenticated:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESSFUL":case"SIGNUP_SUCCESSFUL":return localStorage.setItem("token",t.payload.token),Object(ue.a)({},e,t.payload,{isAuthenticated:!0,isLoading:!1});case"LOGIN_FAILED":case"LOGOUT_SUCCESSFUL":case"SIGNUP_FAILED":case"AUTHENTICATION_ERROR":return localStorage.removeItem("token"),Object(ue.a)({},e,{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{msg:{},status:null,id:null};default:return e}}}),ge=[se.a],Ee=Object(ce.e)(fe,{},Object(ce.d)(ce.a.apply(void 0,ge),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var ye=function(){return r.a.createElement("div",null)},be=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){Ee.dispatch(function(e,t){e({type:"USER_LOADING"}),h.a.get("/api/auth/user",g(t)).then(function(t){return e({type:"USER_LOADED",payload:t.data})}).catch(function(t){e(p(t.response.data,t.response.status)),e({type:"AUTHENTICATION_ERROR"})})})}},{key:"render",value:function(){return r.a.createElement(D.a,{store:Ee},r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(le,null),r.a.createElement(y.a,{exact:!0,path:"/",component:v}),r.a.createElement(y.a,{exact:!0,path:"/inventory",component:W}),r.a.createElement(y.a,{exact:!0,path:"/projection",component:ye}))))}}]),t}(n.Component),Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(be,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Oe?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ve(e)})}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.4528581a.chunk.js.map