webpackJsonp([9],{"+I4i":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("rQpX"),l=a("Qc6y"),i=a("PJh5"),s=a.n(i),o={components:{foot:n.default,top:l.default},data:function(){return{type:"1",tableData:[],urlList:[]}},mounted:function(){this.getUrlList(),this.getList()},methods:{moment:s.a,getList:function(){var t=this;this.axios.get("/giftmall/agiso/shop",{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){200==e.data.code&&(t.tableData=e.data.data)})},getUrlList:function(){var t=this;this.axios.get("/giftmall/agiso/url",{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){200==e.data.code&&(t.urlList=e.data.data)})},addShop:function(){var t=void 0;t="1"===this.type?this.urlList.taobao:this.urlList.pdd,window.open(t)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("top"),t._v(" "),a("div",{staticClass:"box mar fffbg",staticStyle:{"min-height":"500px"}},[t._m(0),t._v(" "),a("div",{staticClass:" over",staticStyle:{margin:"20px 1% 0 1%"}},[a("el-form",{attrs:{inline:"true"}},[a("el-form-item",[a("el-select",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("el-option",{key:"1",attrs:{label:"淘宝/天猫",value:"1"}}),t._v(" "),a("el-option",{key:"2",attrs:{label:"拼多多",value:"2"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.addShop}},[t._v("添加平台")])],1)],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"94%",margin:"10px 1%"},attrs:{data:t.tableData,border:"","header-cell-style":{background:"#f7f7f7"}}},[a("el-table-column",{attrs:{prop:"work",label:"平台",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(2===e.row.type?"拼多多":"淘宝/天猫"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"shopName",label:"店铺名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"提交时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.moment(e.row.createTime).format("YYYY-MM-DD HH:mm")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"endTime",label:"到期截止时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("永久")])]}}])})],1),t._v(" "),a("div",{staticClass:"tip"},[a("span",[t._v("1.绑定店铺，能自动上传到对应平台订单的发货信息；")]),a("br"),t._v(" "),a("span",[t._v("2.绑定核验淘宝/天猫店铺步骤：①服务市场订购：点击"),a("a",{staticStyle:{color:"red"},attrs:{href:t.urlList.taobao,target:"_blank"}},[t._v("淘宝前往订购")]),t._v("②选择订购有效期 ③点击添加绑定店铺，跳转授权验证店铺。")]),a("br"),t._v(" "),a("span",[t._v("3.绑定核验拼多多店铺步骤：①服务市场订购：点击"),a("a",{staticStyle:{color:"red"},attrs:{href:t.urlList.pdd,target:"_blank"}},[t._v("拼多多前往订购")]),t._v("②选择订购有效期 ③点击添加绑定店铺，跳转授权验证店铺。")]),a("br"),t._v(" "),a("span",[t._v("4.自动发货：当任务状态为‘已完成’时，系统会自动更新淘宝后台对应订单的物流信息。")])])],1),t._v(" "),a("foot")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainH"},[e("div",{staticClass:"mainHICO"}),this._v(" "),e("span",{staticClass:"pull-left"},[this._v("绑定店铺")])])}]};var c=a("VU/8")(o,r,!1,function(t){a("QheS"),a("N0uv")},"data-v-5385b645",null);e.default=c.exports},N0uv:function(t,e){},QheS:function(t,e){}});
//# sourceMappingURL=9.e772d5f0bd1e44d064e8.js.map