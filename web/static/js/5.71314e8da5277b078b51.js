webpackJsonp([5],{"4tg9":function(t,e){t.exports="http://cdn.tianyalei.com/taobao/static/img/dd.b8de366.png"},Eh2O:function(t,e){t.exports="http://cdn.tianyalei.com/taobao/static/img/didan.64bee89.png"},FnPu:function(t,e){t.exports={data:function(){return{scopeRow:null,dialogVisible:!1}},methods:{dialogSure:function(){this.dialogVisible=!1,this.rejectAjax()},rejectAjax:function(){var t=this,e=this.scopeRow,s=new FormData;s.append("taskId",e.id),this.axios.post("/giftmall/tui",s,{headers:{"Content-type":"application/x-www-form-urlencoded; charset=utf-8"}}).then(function(e){200==e.data.code?(t.$message("退货成功"),t.taskList()):t.$message.error(e.data.message)})},rejectRow:function(t){this.scopeRow=t,this.dialogVisible=!0},handleClose:function(){}}}},MsNL:function(t,e){},TSAD:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mvHQ"),i=s.n(a),o=s("rQpX"),n=s("Qc6y"),r=s("RxMd"),c=s("/W+i"),l=s("FnPu"),u=s.n(l),m=s("qU8K"),d=s("PJh5"),p=s.n(d),v={components:{foot:o.default,top:n.default,topMember:r.default},mixins:[u.a],filters:{timeFormater:m.a},data:function(){return{priceForm:"",mytotal:0,member:"",password:"",oldPassword:"",tableData:[],page:1,size:10,total:0,editInforDiv:!1,editMmDiv:!1,memberInfor:{},welcomeWord:["","尊敬的VIP","尊敬的超级VIP"],vipLevel:["普通会员","VIP会员","超级VIP会员"],systemNotice:[],normalNotice:[]}},mounted:function(){null==sessionStorage.getItem("token")&&this.$router.push({path:"/login"}),this.getPrice(),this.taskList(),this.getMoney(),this.getMember(),this.getNotice(1),this.getNotice(2)},methods:{moment:p.a,toArticle:function(t){this.$router.push({path:"/article",query:{id:t.id,type:t.type}})},applyDialog:function(){this.$alert("您好，底单申请请联系客服<br/>QQ:"+this.memberInfor.qq+"<br/>微信:"+this.memberInfor.wx,"底单申请",{confirmButtonText:"确定",dangerouslyUseHTMLString:!0})},getInfor:function(t){this.member=t},getMember:function(){var t=this;this.axios.get("/giftmall/webSite/info",{headers:{"Content-Type":"application/x-www-form-urlencoded",domain:this.url,Authorization:sessionStorage.getItem("token")}}).then(function(e){200==e.data.code&&(t.memberInfor=e.data.data,sessionStorage.setItem("memberInfor",i()(t.memberInfor)))})},editInfor:function(){var t=this;this.axios.put("/giftmall/user",this.qs.stringify({qq:this.member.qq,wx:this.member.wx}),{headers:{"Content-Type":"application/x-www-form-urlencoded",domain:this.url,Authorization:sessionStorage.getItem("token")}}).then(function(e){200==e.data.code?t.$message({message:"修改成功",type:"success"}):t.$message({message:e.data.message,type:"warning"})})},editPassword:function(){var t=this;this.axios.put("/giftmall/user/password",this.qs.stringify({oldPassword:Object(c.a)(this.oldPassword),password:Object(c.a)(this.password)}),{headers:{"Content-Type":"application/x-www-form-urlencoded",domain:this.url,Authorization:sessionStorage.getItem("token")}}).then(function(e){200==e.data.code?(t.$message({message:"修改成功",type:"success"}),t.$router.push({path:"/login"})):t.$message({message:e.data.message,type:"warning"})})},getMoney:function(){var t=this;this.axios.get("/giftmall/wallet/myTotal",{headers:{"Content-Type":"application/x-www-form-urlencoded",domain:this.url,Authorization:sessionStorage.getItem("token")}}).then(function(e){200==e.data.code&&(t.mytotal=e.data.data)})},getNotice:function(t){var e=this;this.axios.get("/giftmall/notice?size=5&type="+t,{headers:{"Content-Type":"application/x-www-form-urlencoded",domain:this.url,Authorization:sessionStorage.getItem("token")}}).then(function(s){200==s.data.code&&(1===t?e.systemNotice=s.data.data.list:e.normalNotice=s.data.data.list)})},taskList:function(){var t=this;this.axios.get("/giftmall/task?&page="+(t.page-1)+"&size="+t.size,{headers:{"Content-Type":"application/x-www-form-urlencoded",domain:this.url,Authorization:sessionStorage.getItem("token")}}).then(function(e){if(200==e.data.code){for(var s=0;s<e.data.data.list.length;s++)e.data.data.list[s].payTime&&(e.data.data.list[s].payTime=t.gettime(e.data.data.list[s].payTime));t.tableData=e.data.data.list,t.total=e.data.data.totalCount}})},getPrice:function(){var t=this;this.axios.get("/giftmall/expressPrice/my",{headers:{"Content-Type":"application/x-www-form-urlencoded",domain:this.url,Authorization:sessionStorage.getItem("token")}}).then(function(e){200==e.data.code&&(t.priceForm=e.data.data,sessionStorage.setItem("priceForm",i()(e.data.data)))})},capitalDetail:function(){this.$router.push({path:"/capitalDetail"})},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.size=t,this.taskList()},handleCurrentChange:function(t){console.log("当前页: "+t),this.page=t,this.taskList()},gettime:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()>8?e.getMonth()+1:"0"+(e.getMonth()+1))+"-"+(e.getDate()>9?e.getDate():"0"+e.getDate())+"   "+(e.getHours()>9?e.getHours():"0"+e.getHours())+":"+(e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes())+":"+(e.getSeconds()>9?e.getSeconds():"0"+e.getSeconds())}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top",{on:{member:t.getInfor}}),t._v(" "),a("div",{staticClass:"box mar content"},[a("div",{staticClass:"left_content"},[a("a",{staticClass:"left_title"},[t._v("会员中心首页")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){t.editInforDiv=!0}}},[t._v("编辑资料")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){return t.$router.push({path:"/cost"})}}},[t._v("物流成本")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:t.capitalDetail}},[t._v("资金明细")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){t.editMmDiv=!0}}},[t._v("修改密码")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){return t.$router.push({path:"/recharge"})}}},[t._v("余额充值")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){return t.$router.push({path:"/buy"})}}},[t._v("立即采购")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){return t.$router.push({path:"/order"})}}},[t._v("订单管理")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){return t.$router.push({path:"/check"})}}},[t._v("查件补发")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){return t.$router.push({path:"/bindShop"})}}},[t._v("绑定店铺")]),t._v(" "),a("span",{staticClass:"left_item",on:{click:function(e){return t.$router.push({path:"/moreBuy"})}}},[t._v("批量采购")])]),t._v(" "),a("div",{staticClass:"right_content"},[a("div",{staticClass:"info"},[a("div",{staticClass:"account"},[a("div",{staticClass:"account_title"},[t._v("我的账户")]),t._v(" "),a("span",{staticClass:"account_item level"},[t._v("等　级：　"+t._s(t.vipLevel[t.member.vip])+"　"),a("span",{directives:[{name:"show",rawName:"v-show",value:0===t.member.vip,expression:"member.vip === 0"}],staticStyle:{color:"red",cursor:"pointer"},on:{click:function(e){return t.$router.push({path:"/cost"})}}},[t._v("[升级VIP]")])]),t._v(" "),a("span",{staticClass:"account_item phone"},[t._v("手机号：　"+t._s(t.member.account))]),t._v(" "),a("span",{staticClass:"account_item email"},[t._v("邮　箱：　-")]),t._v(" "),a("span",{staticClass:"account_item regist"},[t._v("注　册：　"+t._s(t.moment(t.member.createTime).format("YYYY-MM-DD HH:mm")))]),t._v(" "),a("span",{staticClass:"account_item money"},[t._v("余　额：　"+t._s(t.mytotal/100)+"元　"),a("span",{staticStyle:{color:"red",cursor:"pointer"},on:{click:function(e){return t.$router.push({path:"/recharge"})}}},[t._v("[立即充值]")])])]),t._v(" "),a("div",{staticClass:"account"},[a("div",{staticClass:"account_title"},[t._v("专属客服")]),t._v(" "),a("span",{staticClass:"account_item number"},[t._v("工　号：　"+t._s(t.memberInfor.id))]),t._v(" "),a("span",{staticClass:"account_item name"},[t._v("姓　名：　"+t._s(t.memberInfor.name))]),t._v(" "),a("span",{staticClass:"account_item qq"},[t._v("Q　 Q：　"+t._s(t.memberInfor.qq))]),t._v(" "),a("span",{staticClass:"account_item wx"},[t._v("微　信：　"+t._s(t.memberInfor.wx))]),t._v(" "),a("span",{staticClass:"account_item phone"},[t._v("电　话：　"+t._s(t.memberInfor.kefuMobile))])])]),t._v(" "),a("div",{staticClass:"fun_root"},[a("div",{staticClass:"fun_item",on:{click:function(e){return t.$router.push({path:"/buy"})}}},[a("img",{staticClass:"order_img",attrs:{src:s("XM5S")}}),t._v(" "),a("span",{staticClass:"fun_span_item"},[t._v("立即发货")])]),t._v(" "),a("div",{staticClass:"white_line"}),t._v(" "),a("div",{staticClass:"fun_item",on:{click:function(e){return t.$router.push({path:"/order"})}}},[a("img",{staticClass:"order_img",attrs:{src:s("4tg9")}}),t._v(" "),a("span",{staticClass:"fun_span_item "},[t._v("订单管理")])]),t._v(" "),a("div",{staticClass:"white_line"}),t._v(" "),a("div",{staticClass:"fun_item",on:{click:function(e){return t.$router.push({path:"/check"})}}},[a("img",{staticClass:"order_img",attrs:{src:s("hxPe")}}),t._v(" "),a("span",{staticClass:"fun_span_item "},[t._v("售后管理")])]),t._v(" "),a("div",{staticClass:"white_line"}),t._v(" "),a("div",{staticClass:"fun_item",on:{click:t.applyDialog}},[a("img",{staticClass:"order_img",attrs:{src:s("Eh2O")}}),t._v(" "),a("span",{staticClass:"fun_span_item "},[t._v("底单申请")])])]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"account"},[a("div",{staticClass:"account_title"},[t._v("最新公告")]),t._v(" "),t._l(t.systemNotice,function(e,s){return a("div",{staticClass:"article",on:{click:function(s){return t.toArticle(e)}}},[a("span",{staticClass:"article_title"},[t._v(t._s(s+1)+"."+t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(t.moment(e.createTime).format("YYYY-MM-DD HH:mm")))])])})],2),t._v(" "),a("div",{staticClass:"account"},[a("div",{staticClass:"account_title"},[t._v("常见问题")]),t._v(" "),t._l(t.normalNotice,function(e,s){return a("div",{staticClass:"article",on:{click:function(s){return t.toArticle(e)}}},[a("span",{staticClass:"article_title"},[t._v(t._s(s+1)+"."+t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(t.moment(e.createTime).format("YYYY-MM-DD HH:mm")))])])})],2)])])]),t._v(" "),a("foot"),t._v(" "),a("el-dialog",{attrs:{title:"编辑资料",visible:t.editInforDiv,width:"30%"},on:{"update:visible":function(e){t.editInforDiv=e}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"QQ"}},[a("el-input",{model:{value:t.member.qq,callback:function(e){t.$set(t.member,"qq",e)},expression:"member.qq"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"微信"}},[a("el-input",{model:{value:t.member.wx,callback:function(e){t.$set(t.member,"wx",e)},expression:"member.wx"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editInforDiv=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editInforDiv=!1,t.editInfor()}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改密码",visible:t.editMmDiv,width:"30%"},on:{"update:visible":function(e){t.editMmDiv=e}}},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"旧密码"}},[a("el-input",{attrs:{"show-password":""},model:{value:t.oldPassword,callback:function(e){t.oldPassword=e},expression:"oldPassword"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{attrs:{"show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),a("div",{staticClass:"mar cen"},[a("el-button",{on:{click:function(e){t.editMmDiv=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editMmDiv=!1,t.editPassword()}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("该操作将删除该任务并退还用户消费的费用，您是否确认退货")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.dialogSure}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var _=s("VU/8")(v,f,!1,function(t){s("MsNL")},"data-v-2349ca88",null);e.default=_.exports},XM5S:function(t,e){t.exports="http://cdn.tianyalei.com/taobao/static/img/fh.06026ec.png"},hxPe:function(t,e){t.exports="http://cdn.tianyalei.com/taobao/static/img/sh.d107b27.png"},qU8K:function(t,e,s){"use strict";function a(t){return t<10?"0"+t:t}e.a=function(t){var e=new Date(t),s=e.getFullYear(),i=e.getMonth()+1,o=e.getDate(),n=e.getHours(),r=e.getMinutes(),c=e.getSeconds();return s+"-"+a(i)+"-"+a(o)+" "+a(n)+":"+a(r)+":"+a(c)}}});
//# sourceMappingURL=5.71314e8da5277b078b51.js.map