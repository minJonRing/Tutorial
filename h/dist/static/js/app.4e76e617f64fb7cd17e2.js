webpackJsonp([1,2],[,,,,,,,,,,,,,function(t,e,s){"use strict";var a=s(5),o=s(0);a.a.use(o.d);var n={bl:!0,userinfo:"",txts:""},i={userdata:function(t,e){t.userinfo=e},txtdata:function(t,e){t.txts=e},bl:function(t,e){t.bl=e}},r={cyuserdata:function(t,e){return(0,t.commit)("userdata",e)},cytxtdata:function(t,e){return(0,t.commit)("txtdata",e)},bl:function(t,e){return(0,t.commit)("bl",e)}},l={showUsers:function(t){return t.userinfo},showTxts:function(t){return t.txts},bl:function(t){return t.bl}};e.a=new o.d.Store({state:n,mutations:i,actions:r,getters:l})},,,,,function(t,e,s){s(38);var a=s(1)(s(75),s(31),null,null);t.exports=a.exports},function(t,e,s){"use strict";var a=s(5),o=s(6),n=s(13),i=s(25),r=s.n(i),l=s(24),c=s.n(l),u=s(23),d=s.n(u),p=s(26),m=s.n(p),v=s(22),f=s.n(v);a.a.use(o.a);var h=new o.a({mode:"history",routes:[{path:"/",name:"Lists",component:r.a,beforeEnter:function(t,e,s){s(!0)}},{path:"/login",name:"Login",component:m.a},{path:"/user/:_id",name:"Home",component:d.a},{path:"/user/:_id/edit",name:"Edit",component:f.a},{path:"/lists/:_listid",name:"ListInfo",component:c.a}]});h.beforeEach(function(t,e,s){n.a.state.userinfo!=sessionStorage.getItem("user")?axios.post("/api/init",{user:sessionStorage.getItem("user")}).then(function(t){n.a.state.userinfo=sessionStorage.getItem("user"),n.a.state.txts=JSON.parse(sessionStorage.getItem("txts")),s(!0)}).catch(function(t){s(!0)}):s(!0)}),e.a=h},function(t,e,s){t.exports=s.p+"static/img/bj.35216d0.jpg"},function(t,e,s){s(35);var a=s(1)(s(76),s(27),"data-v-1533c74c",null);t.exports=a.exports},function(t,e,s){var a=s(1)(s(77),s(29),null,null);t.exports=a.exports},function(t,e,s){s(36);var a=s(1)(s(78),s(28),"data-v-19424351",null);t.exports=a.exports},function(t,e,s){s(40);var a=s(1)(s(79),s(33),"data-v-ce7bad84",null);t.exports=a.exports},function(t,e,s){s(37);var a=s(1)(s(80),s(30),"data-v-4b7a8b93",null);t.exports=a.exports},function(t,e,s){s(39);var a=s(1)(s(81),s(32),"data-v-60601d42",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"addtext"}},[s("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button","data-toggle":"modal","data-target":"#myModal"}},[t._v("\n\t  Add New Document\n\t")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("span",{staticClass:"showmsg"},[t._v(t._s(t.msg))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"text-info",attrs:{for:"utitle"}},[t._v("Title")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"utitle",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"text-info",attrs:{for:"utext"}},[t._v("Text")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{name:"",rows:"16",id:"utext",placeholder:"Text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary save",attrs:{type:"button"},on:{click:t.save}},[t._v("Save changes")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-8 col-lg-offset-2",attrs:{id:"home"}},[a("div",{staticClass:"userdate bor_sha"},[a("img",{staticClass:"img-responsive",staticStyle:{width:"100px",height:"100px"},attrs:{src:s(20),alt:"Responsive image"}}),t._v(" "),a("div",{staticClass:"editinfo"},[a("p",[t._v(t._s(t.name||t.username))]),t._v(" "),a("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.state||"这个用户很懒，什么都没写"))]),t._v(" "),a("router-link",{staticClass:"pull-right",attrs:{to:"/user/"+this.$route.params._id+"/edit"}},[t._v("Edit")])],1)]),t._v(" "),t.texts?a("ul",t._l(t.texts,function(e){return a("li",{staticClass:"bor_sha"},[a("router-link",{attrs:{to:"/lists/"+e._id}},[a("span",[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.text))]),t._v(" "),a("span")])],1)})):a("em",[t._v("没有文章")]),t._v(" "),t.showUsers==this.$route.params._id?a("addtext"):t._e(),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edituser col-xs-8 col-lg-6 col-xs-offset-2 col-lg-offset-3"},[s("form",{attrs:{action:"/api/adduserinfo",method:"post","accept-charset":"utf-8",enctype:"multipart/form-data"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"},{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"path",value:"",placeholder:""},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"text-info",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"text-info",attrs:{for:"state"}},[t._v("State")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"form-control",attrs:{name:"state",rows:"10",id:"state",placeholder:"state"},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"btn btn-info",attrs:{type:""},on:{click:t.submit}},[t._v("updata")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-8 col-lg-6 col-xs-offset-2 col-lg-offset-3",attrs:{id:"lists"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.bls,expression:"bls"}]},[t._v("最新列表前10:")]),t._v(" "),s("ul",{staticStyle:{top:"30px"}},t._l(t.getlists,function(e){return s("li",{staticClass:"box"},[s("h2",[s("router-link",{staticClass:"text-warning fontSize",attrs:{to:"/lists/"+e._id}},[t._v(t._s(e.title))])],1),t._v(" "),s("p",[t._v(t._s(e.text))]),t._v(" "),s("span",[t._v("Doctor: "+t._s(e.fate.name||e.fate.username))])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"nav navbar navbar-default "},[s("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Index")])],1),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[s("ul",{staticClass:"nav navbar-nav"},[t.showUsers?s("li",[s("router-link",{staticStyle:{display:"inline-block",position:"static"},attrs:{to:"/user/"+t.showUsers}},[t._v("userinfo")]),s("router-link",{staticStyle:{display:"inline-block",position:"static"},attrs:{to:"/"},nativeOn:{click:function(e){t.logout(e)}}},[t._v("logout")])],1):s("li",[s("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[s("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-8 col-sm-6 col-lg-4 col-xs-offset-2  col-sm-offset-3 col-lg-offset-4",attrs:{id:"log"}},[s("div",{staticClass:"form-group"},[s("p",{staticClass:"msg"},[t._v(t._s(t.msg))]),t._v(" "),s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Username:En add Number")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"Username",onkeyup:"value=value.replace(/[\\W]/g,'') ",onbeforepaste:"clipboardData.setData('text',clipboardData.getData('text').replace(/[^\\d]/g,''))"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password:En add Number")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password",onkeyup:"value=value.replace(/[\\W]/g,'') "},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-default",on:{click:t.login}},[t._v("login")]),t._v(" "),s("button",{staticClass:"btn btn-default",on:{click:t.sign}},[t._v("sign")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-8 col-lg-6 col-xs-offset-2 col-lg-offset-3 bor_sha",attrs:{id:"listinfo"},on:{click:function(e){e.preventDefault(),t.vby=!1}}},[s("h2",[t._v(t._s(t.title))]),t._v(" "),s("p",[t._v(t._s(t.txt))]),t._v(" "),s("router-link",{attrs:{to:"/user/"+t.user}},[t._v("Doctor: "+t._s(t.doctoe))]),t._v(" "),t.showUsers&&t.showUsers==t.user?s("div",[t.vby?s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{name:"",cols:"100%",rows:"10"},domProps:{value:t.msg},on:{click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.msg=e.target.value)}}}):t._e(),t._v(" "),s("button",{staticClass:"btn btn-info",attrs:{type:""},on:{click:function(e){e.stopPropagation(),t.changeVby(e)}}},[t._v(t._s(t.showText))]),t._v(" "),s("button",{staticClass:"btn btn-danger",attrs:{type:""},on:{click:function(e){e.stopPropagation(),t.detext(e)}}},[t._v("删除")])]):t._e()],1)},staticRenderFns:[]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),o=s.n(a),n=s(0);e.default={name:"app",computed:o()({},s.i(n.a)(["showUsers"])),methods:o()({},s.i(n.b)(["bl","cyuserdata"]),{logout:function(){var t=this;axios.post("/api/logout").then(function(e){t.$store.dispatch("cyuserdata",""),sessionStorage.setItem("user","")}).catch(function(t){})}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(12),o=s.n(a),n=s(2),i=s.n(n),r=s(0);e.default={name:"addtext",data:function(){return{title:"",text:"",msg:""}},computed:i()({},s.i(r.a)(["showUsers"])),methods:i()({},s.i(r.b)(["cyuserdata"]),{save:function(){var t=this,e=document.querySelector(".save"),s=this.title,a=this.text;s&&a?axios.post("/api/textadd",{title:s,text:a,fate:this.showUsers}).then(function(s){t.msg="success",e.setAttribute("data-dismiss","modal"),document.querySelector(".modal-backdrop").style.display="none",t.title=t.text="",t.$store.dispatch("cytxtdata",s.data[1]),sessionStorage.setItem("txts",o()(s.data[1])),t.$router.push("/lists/"+s.data[0])}).catch(function(e){t.msg="error"}):this.msg="title or text not null"},changeEl:function(t){}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),o=s.n(a),n=s(0);e.default={name:"edituser",created:function(){this.path=this.$route.params},data:function(){return{path:"",name:"",state:"",files:""}},methods:o()({},s.i(n.b)(["cytxtdata"]),{submit:function(){var t=this;this.name&&this.state&&axios.post("/api/updatauserinfo",{name:this.name,state:this.state,id:this.$route.params._id}).then(function(e){t.$store.dispatch("cytxtdata",e.data),t.$router.push("/user/"+t.$route.params._id)}).catch(function(t){})}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),o=s.n(a),n=s(21),i=s.n(n),r=s(0);e.default={name:"home",data:function(){return{username:"",state:"",name:"",texts:""}},created:function(){var t=this;axios.post("/api/getuser",{user:this.$route.params._id}).then(function(e){var s=e.data;t.username=s.username,t.name=s.name||"",t.state=s.state,t.texts=s.texts}).catch(function(t){})},computed:o()({},s.i(r.a)(["showUsers"])),components:{addtext:i.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(12),o=s.n(a),n=s(2),i=s.n(n),r=s(0);e.default={name:"listinfo",data:function(){return{texts:["编辑","保存"],text:"编辑",vby:!1,user:"",title:"",doctoe:"",msg:"",txt:""}},created:function(){for(var t in this.showTxts)if(this.showTxts[t]._id==this.$route.params._listid)return this.title=this.showTxts[t].title,this.txt=this.msg=this.showTxts[t].text,this.doctoe=this.showTxts[t].fate.name||this.showTxts[t].fate.username,void(this.user=this.showTxts[t].fate._id)},computed:i()({},s.i(r.a)(["showUsers","showTxts"]),{showText:function(){return this.text=this.texts[0==this.vby?0:1]}}),methods:i()({},s.i(r.b)(["cyuserdata"]),{changeVby:function(){var t=this;this.vby&&this.txt!=this.msg&&(this.txt=this.msg,axios.post("/api/save",{title:this.title,text:this.txt,user:this.user}).then(function(e){t.$store.dispatch("cytxtdata",e.data),sessionStorage.setItem("txts",o()(e.data)),alert("success")}).catch(function(t){alert("err")})),this.vby=!this.vby},detext:function(){var t=this;axios.post("/api/delate",{title:this.title,uid:this.showUsers,tid:this.$route.params._listid}).then(function(e){t.$store.dispatch("cytxtdata",e.data),sessionStorage.setItem("txts",o()(e.data)),t.$router.push("/user/"+t.user),alert("success")}).catch(function(t){alert("err")})}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(73),o=s.n(a),n=s(12),i=s.n(n),r=s(2),l=s.n(r),c=s(0);e.default={name:"lists",created:function(){this.gettxt()},mounted:function(){this.shubiao()},data:function(){return{now:0,bls:!0,lists:""}},computed:l()({},s.i(c.a)(["showTxts"]),{getlists:function(){return this.lists=this.showTxts.slice(0,10)}}),methods:l()({},s.i(c.b)(["cytxtdata"]),{gettxt:function(){var t=this;axios.post("/api/getlists").then(function(e){t.$store.dispatch("cytxtdata",e.data),sessionStorage.setItem("txts",i()(e.data))}).catch(function(t){})},shubiao:function(){document.addEventListener&&document.querySelector("#lists > ul").addEventListener("DOMMouseScroll",this.scrollFunc),document.querySelector("#lists > ul").onmousewheel=this.scrollFunc},scrollFunc:function(t){t=t||window.event,this.bls=!1,t.wheelDelta?(this.now=t.wheelDelta>0?10:-10,document.querySelector("#lists > ul").style.top=o()(document.querySelector("#lists > ul").style.top)+this.now+"px",o()(document.querySelector("#lists > ul").style.top)>20&&(document.querySelector("#lists > ul").style.top="30px",this.bls=!0)):t.detail&&(this.now=t.wheelDelta>0?10:-10,document.querySelector("#lists > ul").style.top+=this.now+"px")}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),o=s.n(a),n=s(0);s(6);e.default={name:"log",data:function(){return{msg:"",username:"222",password:"222"}},computed:o()({},s.i(n.a)(["showUsers"])),methods:o()({},s.i(n.c)(["userdata"]),s.i(n.b)(["cyuserdata","bl"]),{login:function(){var t=this;this.username&&this.password&&axios.post("/api/login",{username:this.username,password:this.password}).then(function(e){if(e.data){t.msg="登入成功";var s=e.data._id;t.$store.dispatch("cyuserdata",s),sessionStorage.setItem("user",s),t.$store.dispatch("bl",!0),t.$router.push("/user/"+s)}else t.msg="用户名或密码错误"}).catch(function(e){t.msg="出错了"})},sign:function(){var t=this;this.username&&this.password&&axios.post("/api/sign",{username:this.username,password:this.password}).then(function(e){console.log(e.data),"OK"==e.data?t.msg="注册成功":t.msg="用户名已存在"}).catch(function(e){t.msg="出错了"})}})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(5),o=s(18),n=s.n(o),i=s(19),r=(s(6),s(13));a.a.config.productionTip=!1,new a.a({el:"#app",store:r.a,router:i.a,template:"<App/>",components:{App:n.a}})}],[82]);
//# sourceMappingURL=app.4e76e617f64fb7cd17e2.js.map