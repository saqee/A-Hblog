(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{156:function(e,t){},273:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(29),s=a.n(r),o=a(5),i=a(8),l=a(3),j=a(4),d=a.n(j),u=a(7),p=a(11),b=a.n(p),O="SET_LOADER",m="CLOSE_LOADER",h="POST_ERRORS",x="REDIRECT_TRUE",g="REDIRECT_FALSE",v="SET_MESSAGE",f="REMOVE_MESSAGE",E="REMOVE_ERRORS",y="SET_POST",N=function(e,t){return function(){var a=Object(u.a)(d.a.mark((function a(c,n){var r,s,o,i,l,j,u,p,h;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=n(),s=r.AuthReducer.token,o={headers:{authorization:"Bearer ".concat(s)}},a.prev=2,c({type:O}),a.next=6,b.a.get("/posts/".concat(e,"/").concat(t),o);case 6:i=a.sent,l=i.data,j=l.response,u=l.count,p=l.perPage,c({type:m}),c({type:y,payload:{response:j,count:u,perPage:p}}),console.log(j),a.next=21;break;case 16:a.prev=16,a.t0=a.catch(2),c({type:m}),h=a.t0.response.data.errors,console.log(h);case 21:case"end":return a.stop()}}),a,null,[[2,16]])})));return function(e,t){return a.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a,c){var n,r,s,o,i,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c(),r=n.AuthReducer.token,s={headers:{authorization:"Bearer ".concat(r)}},a({type:"SET_LOADER"}),t.prev=3,t.next=6,b.a.post("/update",e,s);case 6:o=t.sent,i=o.data,a({type:"SET_UPDATE"}),a({type:"REDIRECT_TRUE"}),a({type:"SET_MESSAGE",payload:i.msg}),t.next=19;break;case 13:t.prev=13,t.t0=t.catch(3),a({type:"CLOSE_LOADER"}),l=t.t0.response.data.errors,a({type:"SET_UPDATE_ERRORS",payload:l}),a({type:"SET_UPDATE_ERRORS_RESET"});case 19:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e,a){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){var c,n,r,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"SET_LOADER"}),t.prev=1,t.next=4,b.a.get("/explore/".concat(e));case 4:c=t.sent,n=c.data,r=n.post,s=n.commentdata,a({type:"CLOSE_LOADER"}),a({type:"SET_DETAILS",payload:r}),a({type:"COMMENTS",payload:s}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),a({type:"CLOSE_LOADER"}),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},S=a(0),T=function(){return Object(S.jsx)("div",{className:"loader_container",children:Object(S.jsx)("div",{className:"loader_container_item"})})},w=function(e){var t=e.page,a=e.perPage,c=e.count,n=e.path,r=Math.ceil(c/a);return Object(S.jsxs)("div",{className:"pagination col-12",children:[function(){if(t>1&&0==!t)return Object(S.jsxs)("li",{children:["  ",Object(S.jsx)(o.b,{to:"/".concat(n,"/").concat(parseInt(t)-1),children:Object(S.jsx)("i",{class:"arrow fas fa-angle-double-left"})})]})}()," ",function(){for(var e=[],t=1;t<=r;t++)e.push(Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/".concat(n,"/").concat(t),children:t})}));return e}(),function(){if(t<r)return Object(S.jsxs)("li",{children:["  ",Object(S.jsx)(o.b,{to:"/".concat(n,"/").concat(parseInt(t)+1),children:Object(S.jsx)("i",{class:"arrow fas fa-angle-double-right"})})]})}()]})},A=a(23),L=a.n(A),P=a(31),k=a.n(P),D=function(){var e=Object(i.h)().page;void 0===e&&(e=1);var t=Object(l.b)(),a=Object(l.c)((function(e){return e.PostReducer})).loading,n=Object(l.c)((function(e){return e.FetchPosts})),r=n.count,s=n.perPage,j=n.posts;return Object(c.useEffect)((function(){t(function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){var c,n,r,s,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"SET_LOADER"}),t.prev=1,t.next=4,b.a.get("/home/".concat(e));case 4:c=t.sent,n=c.data,r=n.response,s=n.count,o=n.perPage,a({type:"CLOSE_LOADER"}),a({type:"SET_POST",payload:{response:r,count:s,perPage:o}}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),a({type:"CLOSE_LOADER"});case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[e]),console.log(e,s,j,r),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"row mt-100",children:[Object(S.jsx)("div",{className:"col-8 home",style:{marginBottom:"20px"},children:a?Object(S.jsx)(T,{}):j.length>0?j.map((function(e){return Object(S.jsxs)("div",{className:"row post-bg",children:[Object(S.jsx)("div",{className:"col-8",children:Object(S.jsxs)("div",{className:"post",children:[Object(S.jsxs)("div",{className:"post_header",children:[Object(S.jsx)("div",{className:"post_header_avater",children:e.userName[0]}),Object(S.jsxs)("div",{className:"post_header_user",children:[Object(S.jsx)("span",{children:e.userName}),Object(S.jsx)("span",{children:L()(e.updatedAt).format("MMMM Do YYYY, h:mm:ss a")})]})]}),Object(S.jsxs)("div",{className:"post_body",children:[Object(S.jsx)("h1",{className:"post_body_title",children:Object(S.jsx)(o.b,{to:"/details/".concat(e._id),style:{textDecoration:"none",color:"grey"},children:e.title})}),Object(S.jsx)("div",{className:"post_body_details",children:k()(e.body)})]})]})}),Object(S.jsx)("div",{className:"col-4",children:Object(S.jsx)("div",{className:"post_image",children:Object(S.jsx)("img",{src:"/images/".concat(e.image),alt:"post image"})})})]})})):"no Posts Remaining"}),Object(S.jsx)(w,{count:r,page:e,path:"home",perPage:s})]})})},C=a(16),I=a(2),M=a(10),U=a(9),F="SET_LOADER",B="CLOSE_LOADER",G="REGISTER_ERROR",Y="LOGOUT",z=function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){var c,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={headers:{"Content-Type":"application/json"}},a({type:F}),t.prev=2,t.next=5,b.a.post("/register",e,c);case 5:n=t.sent,r=n.data,a({type:B}),localStorage.setItem("myToken",r.token),a({type:"SET_TOKEN",payload:r.token}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),a({type:G,payload:t.t0.response.data.errors}),a({type:"CLOSE_LOADER"});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a){var c,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={headers:{"Content-Type":"application/json"}},a({type:F}),t.prev=2,t.next=5,b.a.post("/login",e,c);case 5:n=t.sent,r=n.data,a({type:B}),localStorage.setItem("myToken",r.token),a({type:"SET_TOKEN",payload:r.token}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),a({type:B}),a({type:"LOGIN_ERRORS",payload:t.t0.response.data.errors});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()},V=function(){var e=Object(c.useState)({name:"",email:"",password:""}),t=Object(M.a)(e,2),a=t[0],n=t[1],r=function(e){n(Object(I.a)(Object(I.a)({},a),{},Object(C.a)({},e.target.name,e.target.value)))},s=(Object(i.g)(),Object(l.b)()),o=Object(l.c)((function(e){return e.AuthReducer})),j=o.loading,p=o.registerErrors,b=o.user,O=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s(z(a)),console.log(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log(p),p&&p.map((function(e){return U.b.error(e.msg)}))}),[p,b]),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"row mt-80",children:[Object(S.jsx)("div",{className:"col-8",children:Object(S.jsx)("div",{className:"bgImage",children:Object(S.jsx)(U.a,{})})}),Object(S.jsx)("div",{className:"col-4",children:Object(S.jsxs)("div",{className:"account",children:[Object(S.jsx)("h2",{className:"form_heading",children:"Register"}),Object(S.jsx)("div",{className:"account_section",children:Object(S.jsxs)("form",{onSubmit:O,children:[Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"name",value:a.name,onChange:r,className:"group_control",placeholder:"name"})}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"email",value:a.email,onChange:r,className:"group_control",placeholder:"email"})}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"password",value:a.password,onChange:r,className:"group_control",placeholder:"Password"})}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"submit",className:"btn btn-default btn-block",value:j?"...":"Register"})})]})})]})})]})})},J=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(M.a)(e,2),a=t[0],n=t[1],r=Object(l.b)(),s=Object(l.c)((function(e){return e.AuthReducer})).loginErrors,o=function(e){n(Object(I.a)(Object(I.a)({},a),{},Object(C.a)({},e.target.name,e.target.value)))},i=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r(K(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s&&s.map((function(e){return U.b.error(e.msg)}))}),[s]),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"row mt-80",children:[Object(S.jsx)("div",{className:"col-8",children:Object(S.jsx)("div",{className:"bgImage",children:Object(S.jsx)(U.a,{})})}),Object(S.jsx)("div",{className:"col-4",children:Object(S.jsxs)("div",{className:"account",children:[Object(S.jsx)("h2",{className:"form_heading",children:"Login"}),Object(S.jsx)("div",{className:"account_section",children:Object(S.jsxs)("form",{onSubmit:i,children:[Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"email",onChange:o,value:a.email,className:"group_control",placeholder:"email"})}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"password",onChange:o,value:a.password,className:"group_control",placeholder:"Password"})}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"submit",className:"btn btn-default btn-block",value:"Login"})})]})})]})})]})})},Q=function(){var e=Object(l.c)((function(e){return e.AuthReducer})).user,t=Object(l.b)(),a=e?Object(S.jsxs)("div",{className:"navbar_right",children:[Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{children:e.name})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/create",children:"Create Post"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/",onClick:function(){localStorage.removeItem("myToken"),t({type:"LOGOUT"})},children:"Logout"})})]}):Object(S.jsxs)("div",{className:"navbar_right",children:[Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/login",children:"Login"})}),Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/register",children:"Register"})})]});return Object(S.jsx)("nav",{className:"navbar",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"navbar_row",children:[Object(S.jsx)("div",{className:"navabr_left",children:Object(S.jsx)(o.b,{to:"/",children:Object(S.jsx)("img",{src:"images/logo1.png",alt:""})})}),a]})})})},W=a(44),q=a.n(W),H=(a(100),function(){var e=Object(i.g)(),t=Object(i.h)().id,a=Object(l.b)(),n=Object(l.c)((function(e){return e.FetchPost})),r=n.post,s=n.postStatus,o=Object(l.c)((function(e){return e.UpdatePost})).editErrors,j=Object(l.c)((function(e){return e.PostReducer})),p=j.loading,O=j.redirect,m=Object(c.useState)({title:"",description:""}),h=Object(M.a)(m,2),x=h[0],g=h[1],v=Object(c.useState)(""),f=Object(M.a)(v,2),E=f[0],y=f[1];Object(c.useEffect)((function(){s?(g({title:r.title,description:r.description}),y(r.body)):a(function(e){return function(){var t=Object(u.a)(d.a.mark((function t(a,c){var n,r,s,o,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c(),r=n.AuthReducer.token,s={headers:{authorization:"Bearer ".concat(r)}},t.prev=2,a({type:"SET_LOADER"}),t.next=6,b.a.get("/post/"+e,s);case 6:o=t.sent,i=o.data.post,console.log(i),a({type:"CLOSE_LOADER"}),a({type:"POST",payload:i}),a({type:"POST_REQUEST"}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),a({type:"CLOSE_LOADER"});case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e,a){return t.apply(this,arguments)}}()}(t))}),[r]),console.log(r);var N=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a(_({title:x.title,description:x.description,body:E,id:r._id}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){0!==o.length&&o.map((function(e){U.b.error(e.msg)}))}),[o]),Object(c.useEffect)((function(){O&&e.push("/dashboard")})),p?Object(S.jsx)(T,{}):Object(S.jsx)("div",{className:"mt-100",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(U.a,{}),Object(S.jsx)("form",{onSubmit:N,children:Object(S.jsx)("div",{className:"row",children:Object(S.jsxs)("div",{className:"col-7",children:[Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"title",onChange:function(e){return g(Object(I.a)(Object(I.a)({},x),{},{title:e.target.value}))},value:x.title,className:"group_control"})}),Object(S.jsx)(q.a,{theme:"snow",value:E,onChange:y})]}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("textarea",{type:"text",name:"description",defaultValue:x.description,onKeyUp:function(e){return g(Object(I.a)(Object(I.a)({},x),{},{description:e.target.value}))},onChange:function(e){return g(Object(I.a)(Object(I.a)({},x),{},{description:e.target.value}))},className:"group_control",placeholder:"Post description",rows:"10",cols:"10"})}),Object(S.jsx)("span",{children:x.description?x.description.length:"0"}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"submit",className:"btn btn-default btn-block",value:"Edit Post"})})]})})})]})})}),X=(a(273),a(32)),Z=a(101),$=a(102),ee=a(103),te={loading:!1,registerErrors:[],loginErrors:[],token:"",user:""},ae=function(e){var t=Object(ee.a)(e),a=new Date(1e3*t.exp);return new Date>a?(localStorage.removeItem("myToken"),null):t},ce=localStorage.getItem("myToken");if(ce){var ne=ae(ce);if(ne){te.token=ce;var re=ne.user;te.user=re}}var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;if(t.type===F)return Object(I.a)(Object(I.a)({},e),{},{loading:!0});if(t.type===B)return Object(I.a)(Object(I.a)({},e),{},{loading:!1});if(t.type===G)return Object(I.a)(Object(I.a)({},e),{},{registerErrors:t.payload});if("SET_TOKEN"===t.type){var a=ae(t.payload),c=a.user;return Object(I.a)(Object(I.a)({},e),{},{token:t.payload,user:c,loginErrors:[],registerErrors:[]})}return t.type===Y?Object(I.a)(Object(I.a)({},e),{},{token:"",user:""}):"LOGIN_ERRORS"===t.type?Object(I.a)(Object(I.a)({},e),{},{loginErrors:t.payload}):e},oe={updateErrors:[]},ie={loading:!1,postErrors:[],redirect:!1,message:"",posts:[],count:0,perPage:0,post:{},postStatus:!1,updatePost:[],editErrors:[],imageErrors:[],details:{},comments:[]},le=Object(X.combineReducers)({AuthReducer:se,PostReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return t.type===O?Object(I.a)(Object(I.a)({},e),{},{loading:!0}):t.type===m?Object(I.a)(Object(I.a)({},e),{},{loading:!1}):t.type===h||t.type===h?Object(I.a)(Object(I.a)({},e),{},{postErrors:t.payload}):t.type===x?Object(I.a)(Object(I.a)({},e),{},{redirect:!0}):t.type===g?Object(I.a)(Object(I.a)({},e),{},{redirect:!1}):t.type===v?Object(I.a)(Object(I.a)({},e),{},{message:t.payload}):t.type===f?Object(I.a)(Object(I.a)({},e),{},{message:""}):t.type===E?Object(I.a)(Object(I.a)({},e),{},{postErrors:[]}):"SET_DETAILS"===t.type?Object(I.a)(Object(I.a)({},e),{},{details:t.payload}):"COMMENTS"===t.type?Object(I.a)(Object(I.a)({},e),{},{comments:t.payload}):e},FetchPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return t.type===y?Object(I.a)(Object(I.a)({},e),{},{posts:t.payload.response,count:t.payload.count,perPage:t.payload.perPage}):e},FetchPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return"POST"===t.type?Object(I.a)(Object(I.a)({},e),{},{post:t.payload}):"POST_REQUEST"===t.type?Object(I.a)(Object(I.a)({},e),{},{postStatus:!0}):e},UpdatePost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return"SET_UPDATE"===t.type?Object(I.a)(Object(I.a)({},e),{},{updatePost:t.payload}):"SET_UPDATE_ERRORS"===t.type?Object(I.a)(Object(I.a)({},e),{},{editErrors:t.payload}):"SET_UPDATE_ERRORS_RESET"===t.type?Object(I.a)(Object(I.a)({},e),{},{editErrors:[]}):e},ImageUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return"IMAGE_ERRORS"===t.type?Object(I.a)(Object(I.a)({},e),{},{imageErrors:t.payload}):"IMAGE_ERRORS_RESET"===t.type?Object(I.a)(Object(I.a)({},e),{},{imageErrors:""}):e},updateName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;return"SET_PROFILE_ERRORS"===t.type?Object(I.a)(Object(I.a)({},e),{},{updateErrors:t.payload}):"SET_PROFILE_ERRORS_RESET"===t.type?Object(I.a)(Object(I.a)({},e),{},{updateErrors:[]}):e}}),je=[$.a],de=Object(X.createStore)(le,Object(Z.composeWithDevTools)(X.applyMiddleware.apply(void 0,je))),ue=function(){return Object(S.jsx)("div",{className:"sidebar_container",children:Object(S.jsxs)("div",{className:"sidebar_container_item",children:[Object(S.jsx)("div",{className:"profile",children:Object(S.jsx)(o.b,{to:"/username",children:"Change Name"})}),Object(S.jsx)("div",{className:"profile",children:Object(S.jsx)(o.b,{to:"",children:"Change Password"})})]})})},pe=function(){var e=Object(l.c)((function(e){return e.PostReducer})),t=e.redirect,a=e.message,n=e.loading,r=Object(l.c)((function(e){return e.FetchPosts})),s=r.posts,j=r.count,p=r.perPage,O=Object(l.c)((function(e){return e.AuthReducer})),m=O.user._id,h=O.token,x=Object(i.h)().page,g=Object(l.b)();Object(c.useEffect)((function(){t&&g({type:"REDIRECT_FALSE"}),a&&(U.b.success(a),g({type:"REMOVE_MESSAGE"}))})),void 0===x&&(x=1);var f=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete post")){e.next=16;break}return e.prev=2,g({type:"SET_LOADER"}),a={headers:{authorization:"Bearer ".concat(h)}},e.next=7,b.a.get("/delete/".concat(t),a);case 7:c=e.sent,n=c.data.msg,g(N(m,x)),g({type:v,payload:n}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),g({type:"CLOSE_LOADER"});case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g(N(m,x))}),[x]),Object(S.jsxs)("div",{className:"container mt-100",style:{padding:"2rem 1rem"},children:[Object(S.jsx)(U.a,{}),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsxs)("div",{className:"col-3",children:[Object(S.jsx)("h1",{style:{textAlign:"center",marginBottom:"20px"},children:"User Profile"}),Object(S.jsx)(ue,{})]}),Object(S.jsx)("div",{className:"col-1"}),Object(S.jsxs)("div",{className:"col-7",children:[Object(S.jsx)("h1",{style:{textAlign:"center"},children:"User Post By YourSelf"}),n?Object(S.jsx)(T,{}):s.length>0?s.map((function(e){return Object(S.jsx)("div",{className:"dashboard_post",children:Object(S.jsxs)("div",{className:"post_title",children:[Object(S.jsx)("div",{className:"title",children:Object(S.jsx)("h1",{children:Object(S.jsx)(o.b,{to:"/",children:e.title})})}),Object(S.jsxs)("div",{className:"icon",children:[Object(S.jsx)(o.b,{Link:!0,to:"/updateImage/".concat(e._id),children:Object(S.jsx)("i",{class:"icon fas fa-images"})}),Object(S.jsx)(o.b,{Link:!0,to:"/edit/".concat(e._id),children:Object(S.jsx)("i",{class:"icon fas fa-edit"})}),Object(S.jsx)(o.b,{Link:!0,to:"/",onClick:function(){return f(e._id)},children:Object(S.jsx)("i",{class:"icon fas fa-trash"})})]})]},e._id)})})):"<h1>You dont any posts</h1>"]}),Object(S.jsx)(w,{page:x,path:"dashboard",count:j,perPage:p})]})]})},be=function(e){return Object(l.c)((function(e){return e.AuthReducer})).user?Object(S.jsx)(i.b,{path:e.path,exact:e.exact,component:e.component}):Object(S.jsx)(i.a,{to:"/login"})},Oe=function(e){return Object(l.c)((function(e){return e.AuthReducer})).user?Object(S.jsx)(i.a,{to:"/dashboard"}):Object(S.jsx)(i.b,{path:e.path,exact:e.exact,component:e.component})},me=function(e){var t=Object(l.c)((function(e){return e.PostReducer})),a=t.postErrors,n=t.redirect,r=(t.message,Object(l.c)((function(e){return e.AuthReducer})).user),s=Object(l.b)(),o=Object(c.useState)("Choose Image"),i=Object(M.a)(o,2),j=i[0],p=i[1],m=Object(c.useState)(""),h=Object(M.a)(m,2),g=h[0],f=h[1],y=Object(c.useState)(""),N=Object(M.a)(y,2),_=N[0],R=N[1],T=Object(c.useState)(!1),w=Object(M.a)(T,2),A=w[0],L=w[1],P=Object(c.useState)({title:"",description:"",image:""}),k=Object(M.a)(P,2),D=k[0],F=k[1],B=r.name,G=r._id,Y=Object(c.useState)(""),z=Object(M.a)(Y,2),K=z[0],V=z[1];return Object(c.useEffect)((function(){n&&e.history.push("/dashboard"),0!==a.length&&a.map((function(e){return U.b.error(e.msg)}))}),[a,n]),Object(S.jsx)("div",{className:"create mt-100",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(U.a,{}),Object(S.jsx)("form",{onSubmit:function(e){e.preventDefault();var t,a=D.title,c=D.description,n=D.image,r=new FormData;r.append("slug",_),r.append("body",K),r.append("name",B),r.append("id",G),r.append("title",a),r.append("description",c),r.append("image",n),s((t=r,function(){var e=Object(u.a)(d.a.mark((function e(a,c){var n,r,s,o,i,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),r=n.AuthReducer.token,e.prev=1,a({type:O}),s={headers:{authorization:"Bearer ".concat(r)}},e.next=6,b.a.post("/create",t,s);case 6:o=e.sent,i=o.data.msg,a({type:E}),a({type:x}),a({type:v,payload:i}),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),l=e.t0.response.data.errors,a({type:"POST_ERRORS",payload:l}),console.log(e.t0.response);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()))},children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"col-6",children:Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("h3",{children:"Create Post"}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"title",onChange:function(e){F(Object(I.a)(Object(I.a)({},D),{},Object(C.a)({},e.target.name,e.target.value)));var t=e.target.value.trim().split(" ").join("-");R(t)},value:D.title,className:"group_control",placeholder:"Title"})}),Object(S.jsxs)("div",{className:"group",children:[Object(S.jsx)("label",{htmlFor:"image",className:"image_label",children:j}),Object(S.jsx)("input",{type:"file",id:"image",name:"image",onChange:function(e){if(0!==e.target.files.length){p(e.target.files[0].name);var t=new FileReader;t.onloadend=function(){f(t.result)},t.readAsDataURL(e.target.files[0]),F(Object(I.a)(Object(I.a)({},D),{},Object(C.a)({},e.target.name,e.target.files[0])))}},className:"group_control",placeholder:""})]}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)(q.a,{theme:"snow",value:K,onChange:V})}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("textarea",{type:"text",name:"description",defaultValue:D.description,onChange:function(e){F(Object(I.a)(Object(I.a)({},D),{},Object(C.a)({},e.target.name,e.target.value)))},className:"group_control",placeholder:"Post description",rows:"20",cols:"10"})})]})}),Object(S.jsxs)("div",{className:"col-6 p-15",children:[Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"slug",value:_,onChange:function(e){R(e.target.value),L(!0)},className:"group_control",placeholder:"Post Url"})}),A?Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"submit",className:"btn btn-default",onClick:function(e){e.preventDefault(),R(_.trim().split(" ").join("-"))},value:"Update Url"})}):"",Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("div",{className:"previewImage",children:g?Object(S.jsx)("img",{src:g}):" "})}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"submit",className:"btn btn-default btn-block",value:"Create Post"})})]})]})})]})})},he=function(){var e=Object(i.h)().id,t=Object(i.g)(),a=Object(l.b)(),n=Object(l.c)((function(e){return e.ImageUpdate})).imageErrors,r=Object(l.c)((function(e){return e.PostReducer})).redirect,s=Object(c.useState)({image:"",imagePreview:"",imageName:"choose Image"}),o=Object(M.a)(s,2),j=o[0],p=o[1];return Object(c.useEffect)((function(){n&&n.map((function(e){U.b.error(e.msg)}))}),[n]),Object(c.useEffect)((function(){r&&t.push("/dashboard")})),Object(S.jsx)("div",{className:"container mt-100",children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)(U.a,{}),Object(S.jsx)("div",{className:"col-6",children:Object(S.jsx)("div",{className:"card",children:Object(S.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault();var c,n=new FormData;n.append("id",e),console.log(e),n.append("image",j.image),a((c=n,function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,r,s,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.AuthReducer.token,s={headers:{authorization:"Bearer ".concat(r)}},t({type:"SET_LOADER"}),e.prev=3,e.next=6,b.a.post("/updateImage",c,s);case 6:o=e.sent,i=o.data.msg,t({type:"CLOSE_LOADER"}),t({type:"REDIRECT_TRUE"}),t({type:"SET_MESSAGE",payload:i}),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(3),t({type:"CLOSE_LOADER"}),t({type:"IMAGE_ERRORS",payload:e.t0.response.data.errors}),t({type:"IMAGE_ERRORS_RESET"}),console.log(e.t0.response);case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}()))},children:[Object(S.jsxs)("div",{className:"group",children:[Object(S.jsxs)("label",{htmlFor:"image",style:{paddingTop:"2rem",cursor:"pointer",fontSize:"1.5rem"},children:[" ",j.imageName]}),Object(S.jsx)("input",{type:"file",name:"image",onChange:function(e){if(0!==e.target.files.length){p(Object(I.a)({},j));var t=new FileReader;t.onloadend=function(){p(Object(I.a)(Object(I.a)({},j),{},{imagePreview:t.result,image:e.target.files[0],imageName:e.target.files[0].name}))},t.readAsDataURL(e.target.files[0])}},id:"image"})]}),Object(S.jsx)("div",{className:"group",children:j.imagePreview?Object(S.jsxs)("div",{children:[" ",Object(S.jsx)("img",{src:j.imagePreview,style:{width:"100%",height:"70%",marginTop:"3rem"}})]}):""}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"submit",className:"btn btn-default",style:{marginTop:"1rem"},value:"Image Post Update"})})]})})})]})})},xe=function(){var e=Object(l.b)(),t=Object(i.g)(),a=Object(c.useState)(""),n=Object(M.a)(a,2),r=n[0],s=n[1],o=Object(l.c)((function(e){return e.AuthReducer})).user,j=o.name,p=o._id,O=Object(l.c)((function(e){return e.PostReducer})),m=(O.loading,O.redirect),h=Object(l.c)((function(e){return e.updateName})).updateErrors;Object(c.useEffect)((function(){s(j)}),[]),Object(c.useEffect)((function(){0!==h.length&&h.map((function(e){U.b.error(e.msg)}))}),[h]);return Object(c.useEffect)((function(){m&&t.push("/dashboard")}),[m]),Object(S.jsx)("div",{className:"container mt-100",children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)(U.a,{}),Object(S.jsx)("div",{className:"col-3 p-15",children:Object(S.jsx)(ue,{})}),Object(S.jsx)("div",{className:"col-6 p-15",children:Object(S.jsx)("form",{action:"",onSubmit:function(t){var a;t.preventDefault(),e((a={name:r,id:p},function(){var e=Object(u.a)(d.a.mark((function e(t,c){var n,r,s,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),r=n.AuthReducer.token,s={headers:{authorization:"Bearer ".concat(r)}},t({type:"SET_LOADER"}),e.prev=3,e.next=6,b.a.post("/updateName",a,s);case 6:o=e.sent,i=o.data,t({type:"CLOSE_LOADER"}),localStorage.setItem("myToken",i.token),t({type:"SET_TOKEN",payload:i.token}),t({type:"SET_MESSAGE",payload:i.msg}),t({type:"REDIRECT_TRUE"}),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),t({type:"CLOSE_LOADER"}),t({type:"SET_PROFILE_ERRORS",payload:e.t0.response.data.errors}),t({type:"SET_PROFILE_ERRORS_RESET"});case 20:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,a){return e.apply(this,arguments)}}()))},children:Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("h3",{children:"Update Name"}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"text",name:"title",onChange:function(e){return s(e.target.value)},value:r,className:"group_control"})}),Object(S.jsx)("div",{className:"group",children:Object(S.jsx)("input",{type:"submit",className:"btn btn-default ",value:"Change Name"})})]})})})]})})},ge=function(e){var t=e.comments;return console.log(t),t.length>0?t.map((function(e){return Object(S.jsxs)("div",{className:"",children:[Object(S.jsxs)("div",{className:"post_header",children:[Object(S.jsx)("div",{className:"post_header_avater",children:e.UserName?e.UserName[0]:""}),Object(S.jsxs)("div",{className:"post_header_user",children:[Object(S.jsx)("span",{children:e.UserName}),Object(S.jsx)("span",{children:L()(e.updatedAt).format("MMMM Do YYYY, h:mm:ss a")})]})]}),Object(S.jsx)("div",{className:"post_body_details",style:{marginLeft:"4rem",borderBottom:"1px dotted grey",padding:"1rem",fontSize:"1.4rem"},children:e.comment})]})})):"no comment available.write comment and be the first commenter"},ve=function(){var e=Object(i.h)().id,t=Object(l.b)(),a=Object(l.c)((function(e){return e.AuthReducer})).user,n=Object(l.c)((function(e){return e.PostReducer})),r=n.loading,s=n.details,j=n.comments,p=s.title,O=s.body,m=s.userName,h=s.description,x=s.image,g=s.slug,v=(s.createdAt,s.updatedAt),f=s._id;console.log(s),Object(c.useEffect)((function(){t(R(e))}),[]);var E=Object(c.useState)(),y=Object(M.a)(E,2),N=y[0],_=y[1];return Object(S.jsx)("div",{className:"container",children:Object(S.jsx)("div",{className:"row mt-100",children:r?Object(S.jsx)(T,{}):Object(S.jsxs)("div",{className:"col-9 post_details",children:[Object(S.jsxs)("div",{className:"post_header",children:[Object(S.jsx)("div",{className:"post_header_avater",children:m?m.charAt(0):""}),Object(S.jsxs)("div",{className:"post_header_user",children:[Object(S.jsx)("span",{children:m}),Object(S.jsx)("span",{children:L()(v).format("MMMM Do YYYY, h:mm:ss a")})]})]}),Object(S.jsxs)("div",{className:"post_body",children:[Object(S.jsx)("h1",{className:"post_body_title",children:Object(S.jsx)(o.b,{style:{textDecoration:"none",color:"Black"},children:p})}),Object(S.jsx)("div",{children:Object(S.jsx)("span",{children:g})}),Object(S.jsx)("div",{className:"post_body_details",style:{textDecoration:"none",color:"grey"},children:k()(O).slice(0,100)}),Object(S.jsx)("div",{className:"post_body_details",children:k()(h)})]}),Object(S.jsxs)("div",{className:"post_image",style:{width:"100%",height:"50%"},children:[Object(S.jsx)("img",{src:"/images/".concat(x),style:{width:"100%",height:"50%",objectFit:"cover",marginBottom:"20px"},alt:"post image"}),a?Object(S.jsx)("div",{className:"post_comment",children:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("form",{onSubmit:function(a){var c;a.preventDefault(),console.log(N),t((c={comment:N,id:f,userName:m},function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,r,s,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.AuthReducer.token,s={headers:{authorization:"Bearer ".concat(r)}},e.prev=2,t({type:"SET_LOADER"}),e.next=6,b.a.post("/comment",c,s);case 6:o=e.sent,i=o.data,console.log(i),t({type:"CLOSE_LOADER"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),t({type:"CLOSE_LOADER"});case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}())),t(R(e))},children:Object(S.jsxs)("div",{className:"group",children:[Object(S.jsx)("input",{type:"text",onChange:function(e){return _(e.target.value)},className:"group_control",style:{marginBottom:"20px"},placeholder:"Write your comment"}),Object(S.jsx)("input",{type:"submit",className:"btn btn-default",value:"Send Comment"})]})}),Object(S.jsx)(ge,{comments:j})]})}):""]})]})})})};var fe=function(){return Object(S.jsx)(l.a,{store:de,children:Object(S.jsxs)(o.a,{children:[Object(S.jsx)(Q,{}),Object(S.jsxs)(i.d,{children:[Object(S.jsx)(i.b,{path:"/",exact:!0,component:D}),Object(S.jsx)(i.b,{path:"/home/:page",exact:!0,component:D}),Object(S.jsx)(i.b,{path:"/details/:id",exact:!0,component:ve}),Object(S.jsx)(Oe,{path:"/login",exact:!0,component:J}),Object(S.jsx)(Oe,{path:"/register",exact:!0,component:V}),Object(S.jsx)(be,{path:"/dashboard/:page?",exact:!0,component:pe}),Object(S.jsx)(be,{path:"/edit/:id",exact:!0,component:H}),Object(S.jsx)(be,{path:"/username",exact:!0,component:xe}),Object(S.jsx)(be,{path:"/updateImage/:id",exact:!0,component:he}),Object(S.jsx)(be,{path:"/create",exact:!0,component:me})]})]})})},Ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,275)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(fe,{})}),document.getElementById("root")),Ee()}},[[274,1,2]]]);
//# sourceMappingURL=main.702e056b.chunk.js.map