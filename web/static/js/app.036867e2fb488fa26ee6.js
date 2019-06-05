webpackJsonp([1],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-form', {
    staticClass: "toolbar",
    staticStyle: {
      "margin-top": "10px",
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "120px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "支付时间"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "value-format": "yyyy-MM-dd",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    on: {
      "change": _vm.datechange
    },
    model: {
      value: (_vm.dateValue),
      callback: function($$v) {
        _vm.dateValue = $$v
      },
      expression: "dateValue"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户账号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "平台订单号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.orderId),
      callback: function($$v) {
        _vm.orderId = $$v
      },
      expression: "orderId"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "第三方订单编号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.orderNum),
      callback: function($$v) {
        _vm.orderNum = $$v
      },
      expression: "orderNum"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "分站名称"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.webSiteId),
      callback: function($$v) {
        _vm.webSiteId = $$v
      },
      expression: "webSiteId"
    }
  }, _vm._l((_vm.fzlist), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }), 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "平台筛选"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.orignal),
      callback: function($$v) {
        _vm.orignal = $$v
      },
      expression: "orignal"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "淘宝天猫",
      "value": "淘宝天猫"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "京东",
      "value": "京东"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "拼多多",
      "value": "拼多多"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "状态筛选"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.state),
      callback: function($$v) {
        _vm.state = $$v
      },
      expression: "state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "未发货",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已发货",
      "value": "1"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.daochu
    }
  }, [_vm._v("导出报表")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.uploadDiv = true
      }
    }
  }, [_vm._v("上传报表")])], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": "",
      "header-cell-style": {
        background: '#f7f7f7'
      }
    },
    on: {
      "selection-change": _vm.handleSelectionChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "webSiteName",
      "label": "分站名称",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "account",
      "label": "分站账号",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "orderCount",
      "align": "center",
      "label": "订单数"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "订单金额"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                " + _vm._s(scope.row.money / 100) + " 元\n            ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "payTime",
      "align": "center",
      "width": "200",
      "label": "支付时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "orignal",
      "align": "center",
      "label": "平台"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "state",
      "align": "center",
      "label": "任务状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 0) ? _c('span', [_vm._v("未发货")]) : _vm._e(), _vm._v(" "), (scope.row.state == 1) ? _c('span', [_vm._v("已发货")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "align": "center"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.detailList(scope.row.id);
            }
          }
        }, [_vm._v("查看详细订单")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_c('el-pagination', {
    attrs: {
      "background": "",
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "查看订单",
      "custom-class": "orderMain",
      "visible": _vm.detailDiv
    },
    on: {
      "update:visible": function($event) {
        _vm.detailDiv = $event
      }
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "平台订单号"
    },
    model: {
      value: (_vm.detailForm.id),
      callback: function($$v) {
        _vm.$set(_vm.detailForm, "id", $$v)
      },
      expression: "detailForm.id"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "收件人手机"
    },
    model: {
      value: (_vm.detailForm.mobile),
      callback: function($$v) {
        _vm.$set(_vm.detailForm, "mobile", $$v)
      },
      expression: "detailForm.mobile"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "第三方订单号"
    },
    model: {
      value: (_vm.detailForm.orderNum),
      callback: function($$v) {
        _vm.$set(_vm.detailForm, "orderNum", $$v)
      },
      expression: "detailForm.orderNum"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "快递单号"
    },
    model: {
      value: (_vm.detailForm.packNum),
      callback: function($$v) {
        _vm.$set(_vm.detailForm, "packNum", $$v)
      },
      expression: "detailForm.packNum"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-date-picker', {
    attrs: {
      "placeholder": "支付日期",
      "type": "daterange",
      "range-separator": "至",
      "value-format": "yyyy-MM-dd",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    on: {
      "change": _vm.datechange2
    },
    model: {
      value: (_vm.dateValue),
      callback: function($$v) {
        _vm.dateValue = $$v
      },
      expression: "dateValue"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "全部包裹状态"
    },
    model: {
      value: (_vm.detailForm.state),
      callback: function($$v) {
        _vm.$set(_vm.detailForm, "state", $$v)
      },
      expression: "detailForm.state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "未发货",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已发货",
      "value": "1"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "15px",
      "text-align": "center"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.search2
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData2,
      "border": "",
      "max-height": "250"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "orderNum",
      "fixed": "",
      "label": "第三方订单号",
      "align": "center",
      "width": "200"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "expressCompany",
      "align": "center",
      "label": "快递"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "packNum",
      "align": "center",
      "label": "快递单号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userName",
      "align": "center",
      "label": "收件人姓名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "mobile",
      "align": "center",
      "label": "收件人手机"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "商品费用"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                " + _vm._s(scope.row.price / 100) + " 元\n             ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "快递费用"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                " + _vm._s(scope.row.expressPrice / 100) + " 元\n             ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createTime",
      "width": "200",
      "align": "center",
      "label": "创建时间"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_c('el-pagination', {
    attrs: {
      "background": "",
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size2,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total2
    },
    on: {
      "size-change": _vm.handleSizeChange2,
      "current-change": _vm.handleCurrentChange2
    }
  })], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "上传报表",
      "visible": _vm.uploadDiv,
      "custom-class": "upDiv"
    },
    on: {
      "update:visible": function($event) {
        _vm.uploadDiv = $event
      }
    }
  }, [_c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "drag": "",
      "multiple": false,
      "limit": 1,
      "show-file-list": true,
      "on-change": _vm.importExcel,
      "auto-upload": false,
      "action": "/"
    }
  }, [_c('i', {
    staticClass: "el-icon-upload"
  }), _vm._v(" "), _c('div', {
    staticClass: "el-upload__text"
  }, [_vm._v("将文件拖到此处，或"), _c('em', [_vm._v("点击上传")])])]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.uploadDiv = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.uploadDiv = false;
        _vm.uploader()
      }
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "用户账号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.kefuMobile),
      callback: function($$v) {
        _vm.kefuMobile = $$v
      },
      expression: "kefuMobile"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "用户人QQ"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.qq),
      callback: function($$v) {
        _vm.qq = $$v
      },
      expression: "qq"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "微信号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.wx),
      callback: function($$v) {
        _vm.wx = $$v
      },
      expression: "wx"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "邀请人账号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.domainName),
      callback: function($$v) {
        _vm.domainName = $$v
      },
      expression: "domainName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "激活状态"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "激活状态"
    },
    model: {
      value: (_vm.region),
      callback: function($$v) {
        _vm.region = $$v
      },
      expression: "region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "激活状态",
      "value": "激活状态"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "未登录天数"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.qq),
      callback: function($$v) {
        _vm.qq = $$v
      },
      expression: "qq"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "偏远预警"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "偏远预警"
    },
    model: {
      value: (_vm.region),
      callback: function($$v) {
        _vm.region = $$v
      },
      expression: "region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "偏远预警",
      "value": "偏远预警"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "沟通类别"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "沟通类别"
    },
    model: {
      value: (_vm.region),
      callback: function($$v) {
        _vm.region = $$v
      },
      expression: "region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "沟通类别",
      "value": "沟通类别"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "用户规模"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "用户规模"
    },
    model: {
      value: (_vm.region),
      callback: function($$v) {
        _vm.region = $$v
      },
      expression: "region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "用户规模",
      "value": "用户规模"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "使用状态"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "使用状态"
    },
    model: {
      value: (_vm.region),
      callback: function($$v) {
        _vm.region = $$v
      },
      expression: "region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "使用状态",
      "value": "使用状态"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "偏远地区"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "偏远地区"
    },
    model: {
      value: (_vm.region),
      callback: function($$v) {
        _vm.region = $$v
      },
      expression: "region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "偏远地区",
      "value": "偏远地区"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left",
      "width": "100%"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("重置条件")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1), _vm._v(" "), [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "QQ",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "账号",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "微信号",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "分站名称",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "邀请人",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "激活状态",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "未登录天数",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "偏远预警",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "注册时间",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "0.5",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "1",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "续重",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "余额",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "累计充值",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "累计单数",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "累计单量",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "日均单量",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "5-11",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "5-12",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "5-13",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "5-14",
      "sortable": ""
    }
  })], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1042:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1043:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login_vue__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_Home_vue__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Homes_vue__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Homes_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Homes_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_nav1_Form_vue__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_nav1_Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_nav1_Form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_nav1_user_vue__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_nav1_user_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_nav1_user_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_nav2_Page4_vue__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_nav2_Page4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_nav2_Page4_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_nav2_Page5_vue__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_nav2_Page5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_nav2_Page5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_nav3_Page6_vue__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_nav3_Page6_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_nav3_Page6_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_charts_echarts_vue__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_charts_echarts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_charts_echarts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_goods_index_vue__ = __webpack_require__(969);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_goods_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__views_goods_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_goods_wares_vue__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_goods_wares_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__views_goods_wares_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_withdrawal_with_vue__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_withdrawal_with_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__views_withdrawal_with_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_withdrawal_withdrawal_vue__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_withdrawal_withdrawal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__views_withdrawal_withdrawal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_subscriber_subscriber1_vue__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_subscriber_subscriber1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__views_subscriber_subscriber1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_subscriber_subscriber2_vue__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_subscriber_subscriber2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__views_subscriber_subscriber2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_subscriber_subscriber3_vue__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_subscriber_subscriber3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__views_subscriber_subscriber3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_subscriber_subscriber4_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_subscriber_subscriber4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__views_subscriber_subscriber4_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_capital_capital_vue__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_capital_capital_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__views_capital_capital_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_capital_consumption_vue__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_capital_consumption_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__views_capital_consumption_vue__);



















let routes = [{
    path: '/login',
    component: __WEBPACK_IMPORTED_MODULE_0__views_Login_vue___default.a,
    name: '',
    hidden: true
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '',
    iconCls: 'fa fa-bar-chart',
    leaf: true,
    children: [{ path: '/Homes', component: __WEBPACK_IMPORTED_MODULE_2__views_Homes_vue___default.a, name: '业务概括' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '用户管理',
    iconCls: 'el-icon-message',
    children: [{ path: '/subscriber1', component: __WEBPACK_IMPORTED_MODULE_13__views_subscriber_subscriber1_vue___default.a, name: '用户列表' }, { path: '/subscriber2', component: __WEBPACK_IMPORTED_MODULE_14__views_subscriber_subscriber2_vue___default.a, name: '任务列表' }, { path: '/subscriber3', component: __WEBPACK_IMPORTED_MODULE_15__views_subscriber_subscriber3_vue___default.a, name: '包裹列表' }, { path: '/subscriber4', component: __WEBPACK_IMPORTED_MODULE_16__views_subscriber_subscriber4_vue___default.a, name: '提现列表' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '站点管理',
    iconCls: 'el-icon-message',
    children: [{ path: '/form', component: __WEBPACK_IMPORTED_MODULE_3__views_nav1_Form_vue___default.a, name: '创建分站' }, { path: '/user', component: __WEBPACK_IMPORTED_MODULE_4__views_nav1_user_vue___default.a, name: '分站列表' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '业绩统计',
    iconCls: 'fa fa-id-card-o',
    children: [{ path: '/page4', component: __WEBPACK_IMPORTED_MODULE_5__views_nav2_Page4_vue___default.a, name: '营收日报' }, { path: '/page5', component: __WEBPACK_IMPORTED_MODULE_6__views_nav2_Page5_vue___default.a, name: '分站业绩' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '提现审核',
    iconCls: 'fa fa-id-card-o',
    children: [{ path: '/with', component: __WEBPACK_IMPORTED_MODULE_11__views_withdrawal_with_vue___default.a, name: '分站站长提现' }, { path: '/withdrawal', component: __WEBPACK_IMPORTED_MODULE_12__views_withdrawal_withdrawal_vue___default.a, name: '分站用户提现' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '商品管理',
    iconCls: 'fa fa-id-card-o',
    children: [{ path: '/index', component: __WEBPACK_IMPORTED_MODULE_9__views_goods_index_vue___default.a, name: '商品录入' }, { path: '/wares', component: __WEBPACK_IMPORTED_MODULE_10__views_goods_wares_vue___default.a, name: '商品列表' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true,
    children: [{ path: '/page6', component: __WEBPACK_IMPORTED_MODULE_7__views_nav3_Page6_vue___default.a, name: '查件处理' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '',
    iconCls: 'fa fa-bar-chart',
    leaf: true,
    children: [{ path: '/echarts', component: __WEBPACK_IMPORTED_MODULE_8__views_charts_echarts_vue___default.a, name: '成本设置' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_1__views_Home_vue___default.a,
    name: '资金明细',
    iconCls: 'fa fa-id-card-o',
    children: [{ path: '/capital', component: __WEBPACK_IMPORTED_MODULE_17__views_capital_capital_vue___default.a, name: '充值明细' }, { path: '/consumption', component: __WEBPACK_IMPORTED_MODULE_18__views_capital_consumption_vue___default.a, name: '消费明细' }]
}, {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = gettime;
function gettime(t) {
  var _time = new Date(t);
  var year = _time.getFullYear(); //2017
  var month = _time.getMonth() > 8 ? _time.getMonth() + 1 : '0' + (_time.getMonth() + 1); //7
  var date = _time.getDate() > 9 ? _time.getDate() : '0' + _time.getDate(); //10
  var hour = _time.getHours() > 9 ? _time.getHours() : '0' + _time.getHours();; //10
  var minute = _time.getMinutes() > 9 ? _time.getMinutes() : '0' + _time.getMinutes();; //56
  var second = _time.getSeconds() > 9 ? _time.getSeconds() : '0' + _time.getSeconds();; //15

  return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second; //这里自己按自己需要的格式拼接
}

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hex_md5;
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s) {
  return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}
function b64_md5(s) {
  return binl2b64(core_md5(str2binl(s), s.length * chrsz));
}
function str_md5(s) {
  return binl2str(core_md5(str2binl(s), s.length * chrsz));
}
function hex_hmac_md5(key, data) {
  return binl2hex(core_hmac_md5(key, data));
}
function b64_hmac_md5(key, data) {
  return binl2b64(core_hmac_md5(key, data));
}
function str_hmac_md5(key, data) {
  return binl2str(core_hmac_md5(key, data));
}

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test() {
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;

  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t) {
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
  return md5_cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
  return md5_cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data) {
  var bkey = str2binl(key);
  if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16),
      opad = Array(16);
  for (var i = 0; i < 16; i++) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xFFFF;
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str) {
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < str.length * chrsz; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin) {
  var str = "";
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < bin.length * 32; i += chrsz) str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray) {
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i += 3) {
    var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;
    for (var j = 0; j < 4; j++) {
      if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
    }
  }
  return str;
}

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let base = '';

const requestLogin = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/login`, params).then(res => res.data);
};
/* unused harmony export requestLogin */


const getUserList = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/list`, { params: params });
};
/* unused harmony export getUserList */


const getUserListPage = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/listpage`, { params: params });
};
/* unused harmony export getUserListPage */


const removeUser = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/remove`, { params: params });
};
/* unused harmony export removeUser */


const batchRemoveUser = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/batchremove`, { params: params });
};
/* unused harmony export batchRemoveUser */


const editUser = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/edit`, { params: params });
};
/* unused harmony export editUser */


const addUser = params => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/add`, { params: params });
};
/* unused harmony export addUser */


var instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: '/api',
    timeout: 50000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'domain': 'taobao.tianyalei.com'
    }
});
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(441);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// 应用初始状态
const state = {
    count: 10

    // 定义所需的 mutations
};const mutations = {
    INCREMENT(state) {
        state.count++;
    },
    DECREMENT(state) {
        state.count--;
    }
};

// 创建 store 实例
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
    getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
    state,
    mutations
}));

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(949)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(424),
  /* template */
  __webpack_require__(986),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app',
	components: {}
});

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			sysName: 'VUEADMIN',
			collapsed: false,
			sysUserName: '',
			sysUserAvatar: 'http://tx.haiqq.com/uploads/allimg/170505/0T54JE8-2.jpg',
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		};
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		},
		handleopen() {
			//console.log('handleopen');
		},
		handleclose() {
			//console.log('handleclose');
		},
		handleselect: function (a, b) {},
		//退出登录
		logout: function () {
			var _this = this;
			this.$confirm('确认退出吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('user');
				_this.$router.push('/login');
			}).catch(() => {});
		},
		//折叠导航栏
		collapse: function () {
			this.collapsed = !this.collapsed;
		},
		showMenu(i, status) {
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
		}
	},
	mounted() {
		var user = sessionStorage.getItem('user');
		if (user) {
			user = JSON.parse(user);
			this.sysUserName = user.name || '';
			this.sysUserAvatar = user.avatar || '';
		}
	}
});

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            chartColumn: null,
            chartBar: null,
            chartLine: null,
            chartPie: null,
            chartLine1: null,
            chartLine2: null
        };
    },

    methods: {
        drawColumnChart() {
            this.chartColumn = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartColumn'));
            this.chartColumn.setOption({
                title: {
                    text: '用户等级',
                    // subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["注销用户", "vip用户", "扩展用户"]
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{ value: 335, name: '注销用户' }, { value: 310, name: 'vip用户' }, { value: 234, name: '扩展用户' }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
        },
        drawBarChart() {
            this.chartBar = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartBar'));
            this.chartBar.setOption({
                title: {
                    text: '商家类型',
                    // subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["大商家", "中商家", "小商家"]
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{ value: 335, name: '大商家' }, { value: 310, name: '中商家' }, { value: 234, name: '小商家' }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
        },
        drawLineChart() {
            this.chartLine = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartLine'));
            this.chartLine.setOption({
                title: {
                    // text: ' '
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    // data: ['1', '1', '1']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['未联系上', '已联系', '初步沟通', '确定合作', '已合作', '悔单', '放弃', '信息错误', '未联系']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                }, {
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                }, {
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }]
            });
        },
        drawPieChart() {
            this.chartPie = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie'));
            this.chartPie.setOption({
                title: {
                    text: '使用情况',
                    // subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["未使用", "使用中", "暂停使用"]
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{ value: 335, name: '未使用' }, { value: 310, name: '使用中' }, { value: 234, name: '暂停使用' }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
        },

        drawLineChart1() {
            this.chartLine1 = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartLine1'));
            this.chartLine1.setOption({
                title: {
                    text: '今日包裹数'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['包裹数']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false
                    // data: [ ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    // { 
                    //     type: 'line',
                    //     stack: '总量',
                    //     data: [120, 132, 101, 134, 90, 230, 210]
                    // } 
                ]
            });
        },
        drawLineChart2() {
            this.chartLine2 = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartLine2'));
            this.chartLine2.setOption({
                title: {
                    text: '新增注册数'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['新增注册']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false
                    // data: [ ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    // { 
                    //     type: 'line',
                    //     stack: '总量',
                    //     data: [120, 132, 101, 134, 90, 230, 210]
                    // } 
                ]
            });
        },
        drawCharts() {
            this.drawColumnChart();
            this.drawBarChart();
            this.drawLineChart();
            this.drawPieChart();
            this.drawLineChart1();
            this.drawLineChart2();
        }
    },

    mounted: function () {
        this.drawCharts();
    },
    updated: function () {
        this.drawCharts();
    }
});

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_md5__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { requestLogin } from '../api/api';




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      account: '',
      password: ''
    };
  },
  methods: {
    login() {

      let that = this;
      this.axios.post('/sysUser/login', this.qs.stringify({
        account: this.account,
        password: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_md5__["a" /* hex_md5 */])(this.password)
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'domain': 'taobao.tianyalei.com'
        }
      }).then(function (response) {
        //  console.log(response,that)

        if (response.data.code == 200) {
          //  let { msg, code, user } = data;
          //  that.$router.replace({name:'Table'}); 
          //  console.log(that.$router)
          //登陆成功       
          that.$message({
            message: '登录成功',
            type: 'success'
          });
          sessionStorage.setItem('token', response.data.data);
          //跳转  
          that.$router.replace({ name: '业务概括' });
        } else {
          that.$message({
            message: response.data.message,
            type: 'warning'
          });
        }
      }).catch(error => {
        // console.log(error) 
      });
    }

  }
});

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      id: "",
      nearPrice1: "",
      nearPrice2: "",
      nearPrice3: "",
      farPrice1: "",
      farPrice2: "",
      farPrice3: ""
    };
  },
  methods: {
    getData() {
      let that = this;
      this.axios.get("/expressPrice", {
        headers: {
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com"
        }
      }).then(res => {
        var arry = res.data.data;
        for (var i = 0; i < arry.length; i++) {
          if (arry[i].vip == -1) {
            that.id = arry[i].id;
            that.nearPrice1 = arry[i].nearPrice1 / 100;
            that.nearPrice2 = arry[i].nearPrice2 / 100;
            that.nearPrice3 = arry[i].nearPrice3 / 100;
            that.farPrice1 = arry[i].farPrice1 / 100;
            that.farPrice2 = arry[i].farPrice2 / 100;
            that.farPrice3 = arry[i].farPrice3 / 100;
          }
        }
      });
    },
    register() {
      let that = this;
      if (that.id) {
        this.axios.put("/expressPrice", this.qs.stringify({
          id: that.id,
          nearPrice1: this.nearPrice1 * 100,
          nearPrice2: this.nearPrice2 * 100,
          nearPrice3: this.nearPrice3 * 100,
          farPrice1: this.farPrice1 * 100,
          farPrice2: this.farPrice2 * 100,
          farPrice3: this.farPrice3 * 100,
          vip: -1,
          forUser: false
        }), {
          headers: {
            Authorization: sessionStorage.getItem("token"),
            "Content-Type": "application/x-www-form-urlencoded",
            domain: "taobao.tianyalei.com"
          }
        }).then(function (response) {
          if (response.data.code == 200) {
            that.$message({
              message: "提交成功",
              type: "success"
            });
          }
        });
      } else {
        this.axios.post("/expressPrice", this.qs.stringify({
          nearPrice1: this.nearPrice1 * 100,
          nearPrice2: this.nearPrice2 * 100,
          nearPrice3: this.nearPrice3 * 100,
          farPrice1: this.farPrice1 * 100,
          farPrice2: this.farPrice2 * 100,
          farPrice3: this.farPrice3 * 100,
          vip: -1,
          forUser: false
        }), {
          headers: {
            Authorization: sessionStorage.getItem("token"),
            "Content-Type": "application/x-www-form-urlencoded",
            domain: "taobao.tianyalei.com"
          }
        }).then(function (response) {
          if (response.data.code == 200) {
            that.$message({
              message: "提交成功",
              type: "success"
            });
          }
        });
      }
    }
  },
  created() {
    this.getData();
  }
});

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			dialogImageUrl: '',
			fileList: [],
			dialogVisible: false,
			form: {
				name: '',
				shopCode: '',
				price: '',
				oldPrice: '',
				weight: '',
				amount: '',
				images: '',
				detail: '',
				state: "0",
				goodBrand: false,
				newGoods: false
			}
		};
	},
	mounted() {
		if (this.$route.query.id) {
			this.getDetail();
		}
	},
	methods: {
		getDetail() {
			let that = this;
			this.axios.get("/goods/" + that.$route.query.id, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					"domain": "taobao.tianyalei.com",
					"Authorization": sessionStorage.getItem('token')
				}
			}).then(function (response) {
				if (response.data.code == 200) {
					that.form.name = response.data.data.name;
					that.form.shopCode = response.data.data.shopCode;
					that.form.price = response.data.data.price / 100;
					that.form.oldPrice = response.data.data.oldPrice / 100;
					that.form.weight = response.data.data.weight / 1000;
					that.form.amount = response.data.data.amount;
					that.form.images = response.data.data.images;
					that.form.detail = response.data.data.detail;
					that.form.state = response.data.data.state.toString();
					that.form.goodBrand = response.data.data.goodBrand;
					that.form.newGoods = response.data.data.newGoods;
					if (that.form.images) {
						var arry = that.form.images.split(',');
						for (var i = 0; i < arry.length; i++) {
							that.fileList.push({
								name: "1",
								url: arry[i]
							});
						}
					}
				}
			});
		},
		fileChange(file, fileList) {
			let that = this;
			this.FileChange(file, res => {
				console.log(res.url);
				that.fileList.push({ name: "1", url: res.url });
			});
		},
		FileChange(e, callback) {
			if (!e) return;
			let file = e.raw;
			if (!file) return;
			let param = new FormData();
			param.append('chunk', '0');
			param.append('chunks', '1');
			param.append('file', file, file.name);
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data',
					'Authorization': sessionStorage.getItem("token"),
					'domain': 'taobao.tianyalei.com'
				}
			};
			this.axios({
				method: "GET",
				headers: {
					"Authorization": sessionStorage.getItem("token"),
					"Content-Type": "multipart/form-data",
					"domain": "taobao.tianyalei.com"
				},
				url: "/qiniu/token"
			}).then(res => {
				let token = res.data.data;
				param.append('token', token);
				this.Uploading(param, config, callback);
				return;
			});
		},
		Uploading(param, config, callback) {
			this.axios.post('http://upload-z1.qiniup.com/', param, config).then(res => {
				let params = {
					message: 'ok',
					url: `http://qiniu.tianyalei.com/${res.data.key}`
				};
				if (callback) callback(params);
			}).catch(err => {
				console.log(err, 'pppp');
			});
		},
		handleRemove(file, fileList) {
			console.log(file);
			for (var i = 0; i < this.fileList.length; i++) {
				if (file.url == this.fileList[i].url) {
					this.fileList.splice(i, 1);
				}
			}
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		send() {
			let that = this;
			if (that.$route.query.id) {
				that.form.id = that.$route.query.id;
			} else {
				delete that.form.id;
			}
			let newary = [];
			for (var i = 0; i < that.fileList.length; i++) {
				newary.push(that.fileList[i].url);
			}
			that.form.images = newary.join(',');

			that.form.price = that.form.price * 100;
			that.form.oldPrice = that.form.oldPrice * 100;
			that.form.weight = that.form.weight * 1000;
			this.axios.post('/goods', this.qs.stringify(that.form), {
				headers: {
					'Authorization': sessionStorage.getItem("token"),
					'Content-Type': 'application/x-www-form-urlencoded',
					'domain': 'taobao.tianyalei.com'
				}
			}).then(function (response) {
				if (response.data.code == 200) {
					that.$message({
						message: '提交成功',
						type: 'success'
					});
					that.$router.push({ path: '/wares' });
				}
			});
		}
	}
});

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      dataList: [],
      state: "",
      name: "",
      total: 0,
      page: 1,
      size: 10,
      dataList: [],
      addDiv: false,
      delDiv: false,
      addNum: 0,
      delNum: 0,
      id: '',
      amount: 0
    };
  },
  methods: {
    //获取列表
    shousuo: function () {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          "Authorization": sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          "domain": "taobao.tianyalei.com"
        },
        url: "/goods?page=" + (that.page - 1) + "&size=" + that.size + "&name=" + that.name + "&state=" + that.state
      }).then(function (response) {
        if (response.data.code == 200) {
          that.dataList = response.data.data.list;
          that.total = response.data.data.totalCount;
          for (var i = 0; i < that.dataList.length; i++) {
            if (that.dataList[i].images) {
              that.dataList[i].images = that.dataList[i].images.split(',')[0];
            } else {
              that.dataList[i].images = '../../../static/nopic.jpg';
            }
          }
        }
      });
    },
    edit(id) {
      this.$router.push({
        path: '/index',
        query: {
          id: id
        }
      });
    },
    sxj(id, state) {
      let that = this;
      this.axios.put('/goods', this.qs.stringify({ id: id, state: state }), {
        headers: {
          'Authorization': sessionStorage.getItem("token"),
          'Content-Type': 'application/x-www-form-urlencoded',
          'domain': 'taobao.tianyalei.com'
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          that.$message({
            message: '提交成功',
            type: 'success'
          });
          that.shousuo();
        }
      });
    },
    // 删除
    del(id) {
      let that = this;
      this.$confirm('确定要删除此商品吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.axios({
          url: "/goods/" + id,
          method: "Delete",
          headers: {
            "Authorization": sessionStorage.getItem("token"),
            "Content-Type": "application/x-www-form-urlencoded",
            "domain": "taobao.tianyalei.com"
          }
        }).then(response => {
          if (response.data.code == 200) {
            that.$message({
              message: "删除成功",
              type: "success"
            });
            that.shousuo();
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    kucun(id, isadd, num) {
      this.id = id;
      this.amount = num;
      if (isadd == 'add') {
        this.addDiv = true;
      } else {
        this.delDiv = true;
      }
    },
    changeNum(isadd) {
      if (isadd == 'add') {
        this.amount = Number(this.amount) + Number(this.addNum);
      } else {
        this.amount = Number(this.amount) - Number(this.delNum);
      }
      let that = this;
      this.axios.put('/goods', this.qs.stringify({ id: this.id, amount: this.amount }), {
        headers: {
          'Authorization': sessionStorage.getItem("token"),
          'Content-Type': 'application/x-www-form-urlencoded',
          'domain': 'taobao.tianyalei.com'
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          that.$message({
            message: '库存修改成功',
            type: 'success'
          });
          that.shousuo();
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.shousuo();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.shousuo();
    }

  },

  created() {
    this.shousuo();
  }
});

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_md5__ = __webpack_require__(242);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			dialogImageUrl: '',
			fileList: [],
			dialogVisible: false,
			id: '',
			domainName: '',
			name: '',
			contactPerson: '',
			mobile: '',
			companyName: '',
			address: '',
			kefuMobile: '',
			wx: '',
			qq: '',
			nearPrice1: '',
			nearPrice2: '',
			nearPrice3: '',
			farPrice1: '',
			farPrice2: '',
			farPrice3: '',
			account: '',
			password: '',
			addUploadUrl: '',
			qrcode: '',
			region: '',
			delivery: false,
			type: [],
			resource: '',
			desc: ''
		};
	},
	mounted() {
		if (this.$route.query.id) {
			this.getDetail();
			this.id = this.$route.query.id;
		}
	},
	methods: {
		getDetail() {
			let that = this;
			this.axios.get("/webSite/" + that.$route.query.id, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					"domain": "taobao.tianyalei.com",
					"Authorization": sessionStorage.getItem('token')
				}
			}).then(function (response) {
				if (response.data.code == 200) {
					that.account = response.data.data.account;
					that.password = "";
					that.qq = response.data.data.qq;
					that.wx = response.data.data.wx;
					that.name = response.data.data.name;
					that.contactPerson = response.data.data.contactPerson;
					that.mobile = response.data.data.mobile;
					that.companyName = response.data.data.companyName;
					that.domainName = response.data.data.domainName;
					that.address = response.data.data.address;
					that.kefuMobile = response.data.data.kefuMobile;
					that.nearPrice1 = response.data.data.nearPrice1 / 100;
					that.nearPrice2 = response.data.data.nearPrice2 / 100;
					that.nearPrice3 = response.data.data.nearPrice3 / 100;
					that.farPrice1 = response.data.data.farPrice1 / 100;
					that.farPrice2 = response.data.data.farPrice2 / 100;
					that.farPrice3 = response.data.data.farPrice3 / 100;
					that.qrcode = response.data.data.qrcode;
					that.fileList = [{ name: '1', url: response.data.data.qrcode }];
				}
			});
		},
		register() {
			let that = this;
			if (that.domainName == '') {
				that.$message({ message: '请输入域名', type: 'warning' });
				return;
			}
			if (that.nearPrice1 == '' || that.nearPrice2 == '' || that.nearPrice3 == '' || that.farPrice1 == '' || that.farPrice2 == '' || that.farPrice3 == '') {
				that.$message({ message: '价格设置必填', type: 'warning' });
				return;
			}
			if (that.account == '') {
				that.$message({ message: '请输入账号', type: 'warning' });
				return;
			}
			if (that.password == "") {
				that.$message({ message: '请填写密码', type: 'warning' });
				return;
			}
			this.qrcode = this.fileList[0].url;
			this.axios.post('/webSite', this.qs.stringify({
				account: this.account,
				password: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_md5__["a" /* hex_md5 */])(this.password),
				qq: this.qq,
				wx: this.wx,
				name: this.name,
				contactPerson: this.contactPerson,
				mobile: this.mobile,
				companyName: this.companyName,
				address: this.address,
				kefuMobile: this.kefuMobile,
				nearPrice1: this.nearPrice1 * 100,
				nearPrice2: this.nearPrice2 * 100,
				nearPrice3: this.nearPrice3 * 100,
				farPrice1: this.farPrice1 * 100,
				farPrice2: this.farPrice2 * 100,
				farPrice3: this.farPrice3 * 100,
				qrcode: this.qrcode
			}), {
				headers: {
					'Authorization': sessionStorage.getItem("token"),
					'Content-Type': 'application/x-www-form-urlencoded',
					'domain': 'taobao.tianyalei.com'
				}
			}).then(function (response) {
				if (response.data.code == 200) {
					//登陆成功    
					//  this.clearForm();    
					that.$message({
						message: '创建成功',
						type: 'success'
					});
					that.$router.push({ path: '/user' });
				}
			});
		},
		edit() {
			let that = this;
			if (that.domainName == '') {
				that.$message({ message: '请输入域名', type: 'warning' });
				return;
			}
			if (that.nearPrice1 == '' || that.nearPrice2 == '' || that.nearPrice3 == '' || that.farPrice1 == '' || that.farPrice2 == '' || that.farPrice3 == '') {
				that.$message({ message: '价格设置必填', type: 'warning' });
				return;
			}
			if (that.account == '') {
				that.$message({ message: '请输入账号', type: 'warning' });
				return;
			}
			if (that.password == "") {
				that.$message({ message: '请填写密码', type: 'warning' });
				return;
			}
			this.qrcode = this.fileList[0].url;
			this.axios.put('/webSite', this.qs.stringify({
				id: this.id,
				account: this.account,
				password: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_md5__["a" /* hex_md5 */])(this.password),
				qq: this.qq,
				wx: this.wx,
				name: this.name,
				contactPerson: this.contactPerson,
				mobile: this.mobile,
				companyName: this.companyName,
				address: this.address,
				kefuMobile: this.kefuMobile,
				nearPrice1: this.nearPrice1 * 100,
				nearPrice2: this.nearPrice2 * 100,
				nearPrice3: this.nearPrice3 * 100,
				farPrice1: this.farPrice1 * 100,
				farPrice2: this.farPrice2 * 100,
				farPrice3: this.farPrice3 * 100,
				qrcode: this.qrcode
			}), {
				headers: {
					'Authorization': sessionStorage.getItem("token"),
					'Content-Type': 'application/x-www-form-urlencoded',
					'domain': 'taobao.tianyalei.com'
				}
			}).then(function (response) {
				if (response.data.code == 200) {
					//登陆成功    
					//  this.clearForm();    
					that.$message({
						message: '修改成功',
						type: 'success'
					});
					that.$router.push({ path: '/user' });
				}
			});
		},
		fileChange(file, fileList) {
			let that = this;
			this.FileChange(file, res => {
				console.log(res.url);
				that.fileList.push({ name: "1", url: res.url });
			});
		},
		FileChange(e, callback) {
			if (!e) return;
			let file = e.raw;
			if (!file) return;
			let param = new FormData();
			param.append('chunk', '0');
			param.append('chunks', '1');
			param.append('file', file, file.name);
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data',
					'Authorization': sessionStorage.getItem("token"),
					'domain': 'taobao.tianyalei.com'
				}
			};
			this.axios({
				method: "GET",
				headers: {
					"Authorization": sessionStorage.getItem("token"),
					"Content-Type": "multipart/form-data",
					"domain": "taobao.tianyalei.com"
				},
				url: "/qiniu/token"
			}).then(res => {
				let token = res.data.data;
				param.append('token', token);
				this.Uploading(param, config, callback);
				return;
			});
		},
		Uploading(param, config, callback) {
			this.axios.post('http://upload-z1.qiniup.com/', param, config).then(res => {
				let params = {
					message: 'ok',
					url: `http://qiniu.tianyalei.com/${res.data.key}`
				};
				if (callback) callback(params);
			}).catch(err => {
				console.log(err, 'pppp');
			});
		},
		handleRemove(file, fileList) {
			console.log(file);
			for (var i = 0; i < this.fileList.length; i++) {
				if (file.url == this.fileList[i].url) {
					this.fileList.splice(i, 1);
				}
			}
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		}
	}
});

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_formData__ = __webpack_require__(241);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      account: "",
      name: "",
      page: 1,
      size: 10,
      total: 0,
      dataList: [],
      open: true
    };
  },
  methods: {
    shousuo: function () {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com"
        },
        url: "/webSite?page=" + (that.page - 1) + "&size=" + that.size + "&name=" + that.name + "&account=" + that.account
      }).then(function (response) {
        if (response.data.code == 200) {
          that.dataList = response.data.data.list;
          that.total = response.data.data.totalCount;
          for (var i = 0; i < that.dataList.length; i++) {
            that.dataList[i].createTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_formData__["a" /* gettime */])(that.dataList[i].createTime);
          }
        }
      });
    },
    edit(id) {
      this.$router.push({
        path: '/form',
        query: {
          id: id
        }
      });
    },
    del(id) {
      let that = this;
      this.$confirm('确定要删除此分站吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.axios({
          url: "/webSite/" + id,
          method: "Delete",
          headers: {
            "Authorization": sessionStorage.getItem("token"),
            "Content-Type": "application/x-www-form-urlencoded",
            "domain": "taobao.tianyalei.com"
          }
        }).then(response => {
          if (response.data.code == 200) {
            that.$message({
              message: "删除成功",
              type: "success"
            });
            that.shousuo();
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    used(id, istrue) {
      let that = this;
      this.axios.post('/webSite/open', this.qs.stringify({ id: id, open: istrue }), {
        headers: {
          'Authorization': sessionStorage.getItem("token"),
          'Content-Type': 'application/x-www-form-urlencoded',
          'domain': 'taobao.tianyalei.com'
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          that.$message({
            message: '修改成功',
            type: 'success'
          });
          that.shousuo();
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.shousuo();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.shousuo();
    }
  },
  created() {
    this.shousuo();
  }
});

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// export default {
// 	data() {
// 		return { 
// 				id:'', 
// 				nearPrice1:'',
// 				nearPrice2:'',
// 				nearPrice3:'',
// 				farPrice1:'',
// 				farPrice2:'',
// 				farPrice3:'',
// 				account:'',
// 				password:'',
// 				addUploadUrl:'',
// 				qrcode:'',
// 				region:'',
// 				delivery: false,
// 				type: [],
// 				resource: '',
// 				desc: '' 
// 		}
// 	},
// 	methods: {  
// 	 register(){   
// 				let that=this; 
// 				var token = window.localStorage.getItem("token");//获取token 
// 				var domainName=window.location.origin;  //获取当前域名 
// 				this.axios.post('/expressPrice',  
// 				{
// 					headers: {
// 						'Authorization':sessionStorage.getItem("token"),
// 						'Content-Type':'application/x-www-form-urlencoded',
// 						'domain':'taobao.tianyalei.com'
// 					}
//       })
//   .then(function (response) {
//      if(response.data.code==200){     
//             that.$message({
//               message:'搜索成功',
//               type: 'success'
// 		  });   

//         }
//    }) 
//    },
//    },
//     created(){
//   this.getData()   
// }
//  }

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_formData__ = __webpack_require__(241);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      total: 0,
      page: 1,
      size: 10,
      dataList: [],
      dateValue: "",
      fzlist: [],
      begin: "",
      end: "",
      state: "",
      webSiteId: "",
      chuliDiv: false,
      id: '',
      newPackNum: ''
    };
  },
  methods: {
    //获取列表
    getfzlist() {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com"
        },
        url: "/webSite?page=0&size=999999&name=&account="
      }).then(function (response) {
        if (response.data.code == 200) {
          that.fzlist = response.data.data.list;
        }
      });
    },
    shousuo: function () {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com"
        },
        url: "/queryPack?page=" + (that.page - 1) + "&size=" + that.size + "&state=" + that.state + "&begin=" + that.begin + "&end=" + that.end + "&webSiteId=" + that.webSiteId
      }).then(function (response) {
        if (response.data.code == 200) {
          that.dataList = response.data.data.list;
          that.total = response.data.data.totalCount;
          for (var i = 0; i < that.dataList.length; i++) {
            that.dataList[i].createTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_formData__["a" /* gettime */])(that.dataList[i].createTime);
          }
        }
      });
    },
    datechange(e) {
      this.begin = e.split("至")[0];
      this.end = e.split("至")[1];
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.shousuo();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.shousuo();
    },
    chuli(id, state) {
      let that = this;
      if (state) {
        that.id = id;
        that.chuliDiv = true;
      } else {
        this.$confirm("请确认此拒绝, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          that.axios.put("/queryPack", that.qs.stringify({ id: id, state: -1 }), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              domain: "taobao.tianyalei.com",
              Authorization: sessionStorage.getItem("token")
            }
          }).then(function (response) {
            if (response.data.code == 200) {
              that.$message({
                message: "已拒绝",
                type: "warning"
              });
              that.shousuo();
            } else {
              that.$message({
                message: response.data.message,
                type: "warning"
              });
            }
          });
        });
      }
    },
    send() {
      let that = this;
      that.axios.put("/queryPack", that.qs.stringify({ id: that.id, state: 1, newPackNum: that.newPackNum }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com",
          Authorization: sessionStorage.getItem("token")
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          that.$message({
            message: "已处理",
            type: "warning"
          });
          that.shousuo();
        } else {
          that.$message({
            message: response.data.message,
            type: "warning"
          });
        }
      });
    }
  },

  created() {
    this.getfzlist();
    this.shousuo();
  }
});

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xlsx__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xlsx__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      dateValue: '',
      account: '',
      webSiteId: '',
      orderNum: '',
      orderId: '',
      state: '',
      orignal: '',
      page: 1,
      size: 10,
      total: 0,
      tableData: [],
      page2: 1,
      size2: 10,
      total2: 0,
      tableData2: [],
      fzlist: [],
      begin: '',
      end: '',
      detailDiv: false,
      uploadDiv: false,
      taskIds: '',
      detailForm: {
        id: '',
        taskId: '',
        mobile: '',
        orderNum: '',
        packNum: '',
        state: '',
        begin: '',
        end: ''
      },
      list: []
    };
  },
  mounted() {
    this.getfzlist();
    this.search();
  },
  methods: {
    datechange(e) {
      this.begin = e.split('至')[0];
      this.end = e.split('至')[1];
    },
    datechange2(e) {
      this.detailForm.begin = e.split('至')[0];
      this.detailForm.end = e.split('至')[1];
    },
    getfzlist() {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          "Authorization": sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          "domain": "taobao.tianyalei.com"
        },
        url: "/webSite?page=0&size=999999&name=&account="
      }).then(function (response) {
        if (response.data.code == 200) {
          that.fzlist = response.data.data.list;
        }
      });
    },
    search() {
      let that = this;
      this.axios.get("task?begin=" + that.begin + '&end=' + that.end + '&state=' + that.state + '&page=' + (that.page - 1) + '&size=' + that.size + '&account=' + that.account + '&webSiteId=' + that.webSiteId + '&orderNum=' + that.orderNum + '&orderId=' + that.orderId + '&orignal=' + that.orignal, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "domain": "taobao.tianyalei.com",
          "Authorization": sessionStorage.getItem('token')
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          for (var i = 0; i < response.data.data.list.length; i++) {
            response.data.data.list[i].payTime = that.gettime(response.data.data.list[i].payTime);
          }
          that.tableData = response.data.data.list;
          that.total = response.data.data.totalCount;
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.search();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.search();
    },
    handleSizeChange2(val) {
      console.log(`每页 ${val} 条`);
      this.size2 = val;
      this.search2();
    },
    handleCurrentChange2(val) {
      console.log(`当前页: ${val}`);
      this.page2 = val;
      this.search2();
    },
    gettime(t) {
      var _time = new Date(t);
      var year = _time.getFullYear(); //2017
      var month = _time.getMonth() > 8 ? _time.getMonth() + 1 : '0' + (_time.getMonth() + 1); //7
      var date = _time.getDate() > 9 ? _time.getDate() : '0' + _time.getDate(); //10
      var hour = _time.getHours() > 9 ? _time.getHours() : '0' + _time.getHours();; //10
      var minute = _time.getMinutes() > 9 ? _time.getMinutes() : '0' + _time.getMinutes();; //56
      var second = _time.getSeconds() > 9 ? _time.getSeconds() : '0' + _time.getSeconds();; //15

      return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second; //这里自己按自己需要的格式拼接
    },
    detailList(id) {
      this.detailDiv = true;
      this.detailForm.taskId = id;
      this.search2();
    },
    search2() {
      this.detailForm.begin = this.dateValue[0];
      this.detailForm.end = this.dateValue[1];
      this.detailForm.page = this.page2 - 1;
      this.detailForm.size = this.size2;
      let that = this;
      this.axios.get('/order?' + that.qs.stringify(that.detailForm), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "domain": "taobao.tianyalei.com",
          "Authorization": sessionStorage.getItem('token')
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          for (var i = 0; i < response.data.data.list.length; i++) {
            if (response.data.data.list[i].createTime) {
              response.data.data.list[i].createTime = that.gettime(response.data.data.list[i].createTime);
            }
          }
          that.tableData2 = response.data.data.list;
          that.total2 = response.data.data.totalCount;
        }
      });
    },
    handleSelectionChange(val) {
      console.log(val);
      let arry = [];
      for (var i = 0; i < val.length; i++) {
        arry.push(val[i].id);
      }
      this.taskIds = arry.join(',');
    },
    daochu() {
      let that = this;
      if (this.taskIds == '') {
        that.$message({
          message: "请最少勾选一条数据",
          type: 'warning'
        });
        return;
      }

      this.axios.post('/task/outputExcel', this.qs.stringify({ taskIds: this.taskIds }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'domain': 'taobao.tianyalei.com',
          "Authorization": sessionStorage.getItem('token')
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          let arry = [];
          for (var i = 0; i < response.data.data.length; i++) {
            arry.push({
              店铺名称: response.data.data[i].shopName,
              原始单号: response.data.data[i].orderId,
              收件人: response.data.data[i].userName,
              手机: response.data.data[i].mobile,
              网名: response.data.data[i].buyAccount,
              地址: response.data.data[i].address,
              物流公司: response.data.data[i].expressCompany,
              发货条件: response.data.data[i].condition,
              商品编码: response.data.data[i].shopCode,
              货品数量: response.data.data[i].goodsCount,
              应收合计: response.data.data[i].totalMoney / 100,
              邮费: response.data.data[i].expressMoney / 100,
              优惠金额: response.data.data[i].youhui / 100,
              货品总价: response.data.data[i].goodsMoney / 100,
              订单类别: response.data.data[i].orderType
            });
          }
          that.JSONToExcelConvertor(arry, '订单列表');
        } else {
          that.$message({
            message: response.data.message,
            type: 'warning'
          });
        }
      });
    },
    //json数据转excel
    JSONToExcelConvertor(JSONData, FileName) {
      //先转化json  
      var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
      var excel = '<table border="1"  rull="all" style="border-collapse: collapse">';
      var row = "<tr>";
      //设置表头  
      var keys = Object.keys(JSONData[0]);
      keys.forEach(function (item) {
        row += "<td>" + item + '</td>';
      });
      //换行  
      excel += row + "</tr>";
      //设置数据
      for (var i = 0; i < arrData.length; i++) {
        var row = "<tr>";
        for (var index in arrData[i]) {
          console.log(arrData[i][index]);
          //var value = arrData[i][index] === "." ? "" : arrData[i][index];  
          row += '<td>' + arrData[i][index] + '</td>';
        }
        excel += row + "</tr>";
      }

      excel += "</table>";

      var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
      excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
      excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
      excelFile += '; charset=UTF-8">';
      excelFile += "<head>";
      excelFile += "<!--[if gte mso 9]>";
      excelFile += "<xml>";
      excelFile += "<x:ExcelWorkbook>";
      excelFile += "<x:ExcelWorksheets>";
      excelFile += "<x:ExcelWorksheet>";
      excelFile += "<x:Name>";
      excelFile += "{worksheet}";
      excelFile += "</x:Name>";
      excelFile += "<x:WorksheetOptions>";
      excelFile += "<x:DisplayGridlines/>";
      excelFile += "</x:WorksheetOptions>";
      excelFile += "</x:ExcelWorksheet>";
      excelFile += "</x:ExcelWorksheets>";
      excelFile += "</x:ExcelWorkbook>";
      excelFile += "</xml>";
      excelFile += "<![endif]-->";
      excelFile += "</head>";
      excelFile += "<body>";
      excelFile += excel;
      excelFile += "</body>";
      excelFile += "</html>";

      var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);

      var link = document.createElement("a");
      link.href = uri;

      link.style = "visibility:hidden";
      link.download = FileName + ".xls";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    sortArr(arr, str) {
      var _arr = [],
          _t = [],

      // 临时的变量
      _tmp;

      // 按照特定的参数将数组排序将具有相同值得排在一起
      arr = arr.sort(function (a, b) {
        var s = a[str],
            t = b[str];

        return s < t ? -1 : 1;
      });

      if (arr.length) {
        _tmp = arr[0][str];
      }
      // console.log( arr );
      // 将相同类别的对象添加到统一个数组
      for (var i in arr) {
        console.log(_tmp);
        if (arr[i][str] === _tmp) {
          console.log(_tmp);
          _t.push(arr[i]);
        } else {
          _tmp = arr[i][str];
          _arr.push(_t);
          _t = [arr[i]];
        }
      }
      // 将最后的内容推出新数组
      _arr.push(_t);
      return _arr;
    },
    importExcel(evt) {
      //读取方法
      this.$message({
        message: '上传成功',
        type: 'success'
      });
      this.buyList = [];
      let that = this;
      var wb; //读取完成的数据
      var rABS = false; //是否将文件读取为二进制字符串
      var isCSV;
      if (!evt) {
        return;
      }
      var f = evt.raw;
      var reader = new FileReader();

      var pet = new Promise(function (resolve, reject) {
        reader.onload = function (e) {
          var data = e.target.result;
          var XLSX = __webpack_require__(354);
          wb = null;
          if (isCSV) {
            data = new Uint8Array(data);
            let f = that.isUTF8(data);
            //console.log("是CSV文件,编码" + (f ? "是" : "不是") + "UTF-8");
            if (f) {
              data = e.target.result;
            } else {
              var str = cptable.utils.decode(936, data);
              wb = XLSX.read(str, {
                type: "string"
              });
            }
          } else {
            //console.log("不是CSV文件");
          }
          if (!wb) {
            wb = rABS || isCSV ? XLSX.read(btoa(that.fixdata(data)), {
              type: 'base64'
            }) : XLSX.read(data, {
              type: 'binary'
            });
          }
          //console.log(wb);
          //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
          //wb.Sheets[Sheet名]获取第一个Sheet的数据
          //console.log(JSON.parse(JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])).replace(/\s+/g,"")));
          var result = JSON.parse(JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])).replace(/\s+/g, "").replace(/'/g, ''));
          var array = [];
          for (var i = 0; i < result.length; i++) {
            array.push({
              orderId: result[i].原始单号.toString(),
              expressCompany: result[i].物流公司.toString(),
              packNum: result[i].物流单号.toString()
            });
          }

          that.list = array;
          resolve(result);
        };
        isCSV = f.name.split(".").reverse()[0] == "csv"; //判断是否是 CSV
        if (rABS || isCSV) {
          reader.readAsArrayBuffer(f);
        } else {
          reader.readAsBinaryString(f);
        }
        evt.value = "";
      }).catch(error => console.log(error));
      console.log(pet);
      return pet;
    },
    fixdata(data) {
      //文件流转BinaryString
      var o = "",
          l = 0,
          w = 10240;
      iconv.skipDecodeWarning = true;
      let str = iconv.encode(o, 'utf-8');
      for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    },
    isUTF8(bytes) {
      //非中文格式CSV文件转换UTF-8方法
      var i = 0;
      while (i < bytes.length) {
        if ( // ASCII
        bytes[i] == 0x09 || bytes[i] == 0x0A || bytes[i] == 0x0D || 0x20 <= bytes[i] && bytes[i] <= 0x7E) {
          i += 1;
          continue;
        }
        if ( // non-overlong 2-byte
        0xC2 <= bytes[i] && bytes[i] <= 0xDF && 0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF) {
          i += 2;
          continue;
        }
        if ( // excluding overlongs
        bytes[i] == 0xE0 && 0xA0 <= bytes[i + 1] && bytes[i + 1] <= 0xBF && 0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF || // straight 3-byte
        (0xE1 <= bytes[i] && bytes[i] <= 0xEC || bytes[i] == 0xEE || bytes[i] == 0xEF) && 0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF && 0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF || // excluding surrogates
        bytes[i] == 0xED && 0x80 <= bytes[i + 1] && bytes[i + 1] <= 0x9F && 0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF) {
          i += 3;
          continue;
        }
        if ( // planes 1-3
        bytes[i] == 0xF0 && 0x90 <= bytes[i + 1] && bytes[i + 1] <= 0xBF && 0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF && 0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF || // planes 4-15
        0xF1 <= bytes[i] && bytes[i] <= 0xF3 && 0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF && 0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF && 0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF || // plane 16
        bytes[i] == 0xF4 && 0x80 <= bytes[i + 1] && bytes[i + 1] <= 0x8F && 0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF && 0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF) {
          i += 4;
          continue;
        }
        return false;
      }
      return true;
    },
    uploader() {
      let that = this;
      this.axios.post('/task/inputExcel', {
        list: this.list
      }, {
        headers: {
          'Authorization': sessionStorage.getItem("token"),
          'Content-Type': 'application/json',
          'domain': 'taobao.tianyalei.com'
        }
      }).then(function (response) {
        if (response.data.code == 200) {
          that.$message({
            message: '导入成功',
            type: 'success'
          });
          that.uploadDiv = false;
          that.search();
        }
      });
    }
  }
});

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      total: 0,
      page: 1,
      size: 10,
      dataList: [],
      dateValue: '',
      fzlist: [],
      begin: '',
      end: '',
      account: '',
      taskId: '',
      state: '',
      mobile: '',
      packNum: '',
      orderNum: '',
      webSiteId: ''
    };
  },
  methods: {
    //获取列表
    getfzlist() {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          "Authorization": sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          "domain": "taobao.tianyalei.com"
        },
        url: "/webSite?page=0&size=999999&name=&account="
      }).then(function (response) {
        if (response.data.code == 200) {
          that.fzlist = response.data.data.list;
        }
      });
    },
    shousuo: function () {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          "Authorization": sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          "domain": "taobao.tianyalei.com"
        },
        url: "/pack?page=" + (that.page - 1) + "&size=" + that.size + "&account=" + that.account + "&state=" + that.state + "&taskId=" + that.taskId + "&mobile=" + that.mobile + "&packNum=" + that.packNum + "&orderNum=" + that.orderNum + "&webSiteId=" + that.webSiteId
      }).then(function (response) {
        if (response.data.code == 200) {
          that.dataList = response.data.data.list;
          that.total = response.data.data.totalCount;
        }
      });
    },
    datechange(e) {
      this.begin = e.split('至')[0];
      this.end = e.split('至')[1];
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.shousuo();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.shousuo();
    }

  },

  created() {
    this.getfzlist();
    this.shousuo();
  }
});

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      total: 0,
      page: 1,
      size: 10,
      dataList: [],
      dateValue: "",
      fzlist: [],
      begin: "",
      end: "",
      state: "",
      webSiteId: ""
    };
  },
  methods: {
    //获取列表
    getfzlist() {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com"
        },
        url: "/webSite?page=0&size=999999&name=&account="
      }).then(function (response) {
        if (response.data.code == 200) {
          that.fzlist = response.data.data.list;
        }
      });
    },
    shousuo: function () {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com"
        },
        url: "/sysDrawMoney?page=" + (that.page - 1) + "&size=" + that.size + "&state=" + that.state + "&begin=" + that.begin + "&end=" + that.end + "&webSiteId=" + that.webSiteId
      }).then(function (response) {
        if (response.data.code == 200) {
          that.dataList = response.data.data.list;
          that.total = response.data.data.totalCount;
        }
      });
    },
    datechange(e) {
      this.begin = e.split("至")[0];
      this.end = e.split("至")[1];
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.shousuo();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.shousuo();
    },
    chuli(id, state) {
      let that = this;
      this.$confirm('请确认此操作, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.axios.put('/sysDrawMoney', that.qs.stringify({ id: id, state: state }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'domain': 'taobao.tianyalei.com',
            "Authorization": sessionStorage.getItem('token')
          }
        }).then(function (response) {
          if (response.data.code == 200) {
            that.$message({
              message: '已处理',
              type: 'warning'
            });
            that.shousuo();
          } else {
            that.$message({
              message: response.data.message,
              type: 'warning'
            });
          }
        });
      });
    }
  },

  created() {
    this.getfzlist();
    this.shousuo();
  }
});

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      total: 0,
      page: 1,
      size: 10,
      dataList: [],
      dateValue: "",
      fzlist: [],
      begin: "",
      end: "",
      userName: "",
      mobile: '',
      webSiteId: ""
    };
  },
  methods: {
    //获取列表
    getfzlist() {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com"
        },
        url: "/webSite?page=0&size=999999&name=&account="
      }).then(function (response) {
        if (response.data.code == 200) {
          that.fzlist = response.data.data.list;
        }
      });
    },
    shousuo: function () {
      let that = this;
      this.axios({
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
          domain: "taobao.tianyalei.com"
        },
        url: "/userDrawMoney?page=" + (that.page - 1) + "&size=" + that.size + "&userName=" + that.userName + "&mobile=" + that.mobile + "&begin=" + that.begin + "&end=" + that.end + "&webSiteId=" + that.webSiteId
      }).then(function (response) {
        if (response.data.code == 200) {
          that.dataList = response.data.data.list;
          that.total = response.data.data.totalCount;
        }
      });
    },
    datechange(e) {
      this.begin = e.split("至")[0];
      this.end = e.split("至")[1];
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.shousuo();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.shousuo();
    },
    chuli(id, state) {
      let that = this;
      this.$confirm('请确认此操作, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        that.axios.put('/userDrawMoney', that.qs.stringify({ id: id, state: state }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'domain': 'taobao.tianyalei.com',
            "Authorization": sessionStorage.getItem('token')
          }
        }).then(function (response) {
          if (response.data.code == 200) {
            that.$message({
              message: '已处理',
              type: 'warning'
            });
            that.shousuo();
          } else {
            that.$message({
              message: response.data.message,
              type: 'warning'
            });
          }
        });
      });
    }
  },

  created() {
    this.getfzlist();
    this.shousuo();
  }
});

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_router__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vuex_store__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_qs__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_api__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_font_awesome_css_font_awesome_min_css__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_font_awesome_css_font_awesome_min_css__);





//import './assets/theme/theme-green/index.css'



//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'

// import Mock from './mock' 
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.axios = __WEBPACK_IMPORTED_MODULE_11__api_api__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.qs = __WEBPACK_IMPORTED_MODULE_10_qs___default.a;

// Mock.bootstrap();


__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vuex__["a" /* default */]);

//NProgress.configure({ showSpinner: false });

const router = new __WEBPACK_IMPORTED_MODULE_5_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */]
});

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('token');
  }
  let token = sessionStorage.getItem('token');

  // console.log(token)
  if (!token && to.path != '/login') {
    next({ path: '/login' });
  } else {
    next();
  }
});

// router.afterEach(transition => {
// NProgress.done();
// });

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  el: '#app',
  // template: '<App/>',
  router,
  store: __WEBPACK_IMPORTED_MODULE_6__vuex_store__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a },
  render: h => h(__WEBPACK_IMPORTED_MODULE_2__App___default.a)
}).$mount('#app');

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//test
const increment = ({ commit }) => {
    commit('INCREMENT');
};
/* harmony export (immutable) */ __webpack_exports__["increment"] = increment;

const decrement = ({ commit }) => {
    commit('DECREMENT');
};
/* harmony export (immutable) */ __webpack_exports__["decrement"] = decrement;


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//test
const getCount = state => {
    return state.count;
};
/* harmony export (immutable) */ __webpack_exports__["getCount"] = getCount;


/***/ }),

/***/ 947:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 949:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 950:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(950)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(425),
  /* template */
  __webpack_require__(987),
  /* scopeId */
  "data-v-498d7046",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(955)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(426),
  /* template */
  __webpack_require__(997),
  /* scopeId */
  "data-v-e0c95634",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(954)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(427),
  /* template */
  __webpack_require__(996),
  /* scopeId */
  "data-v-ac56cb4a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(994),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(990),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(953)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(428),
  /* template */
  __webpack_require__(995),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(947)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(429),
  /* template */
  __webpack_require__(982),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(952)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(430),
  /* template */
  __webpack_require__(993),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(951)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(431),
  /* template */
  __webpack_require__(992),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(948)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(432),
  /* template */
  __webpack_require__(985),
  /* scopeId */
  "data-v-43694a5e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(433),
  /* template */
  __webpack_require__(988),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(989),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(434),
  /* template */
  __webpack_require__(983),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(1001),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(956)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(435),
  /* template */
  __webpack_require__(1000),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(436),
  /* template */
  __webpack_require__(999),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  null,
  /* template */
  __webpack_require__(998),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(437),
  /* template */
  __webpack_require__(991),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(438),
  /* template */
  __webpack_require__(984),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-form', {
    staticStyle: {
      "margin-top": "15px"
    },
    attrs: {
      "label-width": "80px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticStyle: {
      "padding-top": "5px",
      "text-align": "center"
    }
  }, [_c('el-checkbox', {
    attrs: {
      "label": "精品"
    },
    model: {
      value: (_vm.form.goodBrand),
      callback: function($$v) {
        _vm.$set(_vm.form, "goodBrand", $$v)
      },
      expression: "form.goodBrand"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "新品"
    },
    model: {
      value: (_vm.form.newGoods),
      callback: function($$v) {
        _vm.$set(_vm.form, "newGoods", $$v)
      },
      expression: "form.newGoods"
    }
  })], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "上架状态"
    }
  }, [_c('el-select', {
    model: {
      value: (_vm.form.state),
      callback: function($$v) {
        _vm.$set(_vm.form, "state", $$v)
      },
      expression: "form.state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "上架",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "下架",
      "value": "-1"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "商品编码"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.shopCode),
      callback: function($$v) {
        _vm.$set(_vm.form, "shopCode", $$v)
      },
      expression: "form.shopCode"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "价格"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位:元"
    },
    model: {
      value: (_vm.form.price),
      callback: function($$v) {
        _vm.$set(_vm.form, "price", $$v)
      },
      expression: "form.price"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "原价"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位:元"
    },
    model: {
      value: (_vm.form.oldPrice),
      callback: function($$v) {
        _vm.$set(_vm.form, "oldPrice", $$v)
      },
      expression: "form.oldPrice"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "重量"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位:kg"
    },
    model: {
      value: (_vm.form.weight),
      callback: function($$v) {
        _vm.$set(_vm.form, "weight", $$v)
      },
      expression: "form.weight"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "库存"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.amount),
      callback: function($$v) {
        _vm.$set(_vm.form, "amount", $$v)
      },
      expression: "form.amount"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "缩略图"
    }
  }, [_c('el-upload', {
    attrs: {
      "action": "/",
      "list-type": "picture-card",
      "auto-upload": false,
      "file-list": _vm.fileList,
      "on-change": _vm.fileChange,
      "on-preview": _vm.handlePictureCardPreview,
      "on-remove": _vm.handleRemove
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "visible": _vm.dialogVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogVisible = $event
      }
    }
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "src": _vm.dialogImageUrl,
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品详情"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.detail),
      expression: "form.detail"
    }],
    staticStyle: {
      "height": "300px",
      "width": "100%",
      "border": "1px solid #ccc"
    },
    domProps: {
      "value": (_vm.form.detail)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "detail", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.send
    }
  }, [_vm._v("立即提交")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 983:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-form', {
    staticClass: "toolbar",
    staticStyle: {
      "margin-top": "10px",
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "100px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "选择分站"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.webSiteId),
      callback: function($$v) {
        _vm.webSiteId = $$v
      },
      expression: "webSiteId"
    }
  }, _vm._l((_vm.fzlist), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }), 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "申请日期"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "value-format": "yyyy-MM-dd",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    on: {
      "change": _vm.datechange
    },
    model: {
      value: (_vm.dateValue),
      callback: function($$v) {
        _vm.dateValue = $$v
      },
      expression: "dateValue"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "查件状态"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.state),
      callback: function($$v) {
        _vm.state = $$v
      },
      expression: "state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "未处理",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已处理",
      "value": "1"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.shousuo
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "highlight-current-row": "",
      "data": _vm.dataList
    }
  }, [_c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "packNum",
      "label": "快递单号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "createTime",
      "label": "申请日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "reason",
      "label": "申请原因"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "remark",
      "label": "申请备注"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 0) ? _c('span', [_vm._v("未处理")]) : _vm._e(), _vm._v(" "), (scope.row.state == -1) ? _c('span', [_vm._v("已处理")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.chuli(scope.row.id, true)
            }
          }
        }, [_vm._v("处理")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.chuli(scope.row.id, false)
            }
          }
        }, [_vm._v("拒绝")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_c('el-pagination', {
    attrs: {
      "background": "",
      "current-page": _vm.page,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "查件处理",
      "visible": _vm.chuliDiv,
      "custom-class": "addDiv",
      "width": "20%"
    },
    on: {
      "update:visible": function($event) {
        _vm.chuliDiv = $event
      }
    }
  }, [_vm._v("\n      快递单号："), _c('el-input', {
    model: {
      value: (_vm.newPackNum),
      callback: function($$v) {
        _vm.newPackNum = $$v
      },
      expression: "newPackNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.chuliDiv = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.chuliDiv = false;
        _vm.send()
      }
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-form', {
    staticClass: "toolbar",
    staticStyle: {
      "margin-top": "10px",
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "80px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "选择分站"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.webSiteId),
      callback: function($$v) {
        _vm.webSiteId = $$v
      },
      expression: "webSiteId"
    }
  }, _vm._l((_vm.fzlist), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }), 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户姓名"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.userName),
      callback: function($$v) {
        _vm.userName = $$v
      },
      expression: "userName"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "手机号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.mobile),
      callback: function($$v) {
        _vm.mobile = $$v
      },
      expression: "mobile"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "日期"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "value-format": "yyyy-MM-dd",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    on: {
      "change": _vm.datechange
    },
    model: {
      value: (_vm.dateValue),
      callback: function($$v) {
        _vm.dateValue = $$v
      },
      expression: "dateValue"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.shousuo
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("导出报表")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "highlight-current-row": "",
      "data": _vm.dataList
    }
  }, [_c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "webSiteName",
      "label": "分站名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "userName",
      "label": "用户姓名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "bank",
      "label": "提现银行"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "cardNum",
      "label": "银行账号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "提现金额"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v(_vm._s(scope.row.money / 100) + " 元")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 0) ? _c('span', [_vm._v("未处理")]) : _vm._e(), _vm._v(" "), (scope.row.state == -1) ? _c('span', [_vm._v("已处理")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.chuli(scope.row.id, 1)
            }
          }
        }, [_vm._v("处理")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.chuli(scope.row.id, -1)
            }
          }
        }, [_vm._v("拒绝")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_c('el-pagination', {
    attrs: {
      "background": "",
      "current-page": _vm.page,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 985:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "分站名称"
    },
    model: {
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "登录账号"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.shousuo
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    attrs: {
      "highlight-current-row": "",
      "data": _vm.dataList
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "分站名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "account",
      "label": "登录账号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "contactPerson",
      "label": "联系人"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "mobile",
      "label": "联系电话"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createTime",
      "label": "开通时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.deleteFlag == false) ? _c('span', [_vm._v("正常")]) : _vm._e(), _vm._v(" "), (scope.row.deleteFlag == true) ? _c('span', [_vm._v("停用")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.edit(scope.row.id)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), (scope.row.deleteFlag == false) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.used(scope.row.id, false)
            }
          }
        }, [_vm._v("停用")]) : _vm._e(), _vm._v(" "), (scope.row.deleteFlag == true) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.used(scope.row.id, true)
            }
          }
        }, [_vm._v("启用")]) : _vm._e(), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.del(scope.row.id)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_c('el-pagination', {
    attrs: {
      "background": "",
      "current-page": _vm.page,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "container"
  }, [_c('el-col', {
    staticClass: "header",
    staticStyle: {
      "background-color": "#4b646f"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-col', {
    staticClass: "logo",
    class: _vm.collapsed ? 'logo-collapse-width' : 'logo-width',
    attrs: {
      "span": 10
    }
  }, [_vm._v("\n\t\t  礼品淘后台管理系统 \n\t\t")]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('div', {
    staticClass: "tools",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.collapse($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "userinfo",
    attrs: {
      "span": 4
    }
  }, [_c('el-dropdown', {
    attrs: {
      "trigger": "hover"
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link userinfo-inner"
  }, [_c('img', {
    attrs: {
      "src": this.sysUserAvatar
    }
  }), _vm._v(" " + _vm._s(_vm.sysUserName))]), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', [_vm._v("修改密码")]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "divided": ""
    },
    nativeOn: {
      "click": function($event) {
        return _vm.logout($event)
      }
    }
  }, [_vm._v("退出登录")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "main",
    attrs: {
      "span": 24
    }
  }, [_c('aside', {
    class: _vm.collapsed ? 'menu-collapsed' : 'menu-expanded'
  }, [_c('el-menu', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.collapsed),
      expression: "!collapsed"
    }],
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.$route.path,
      "unique-opened": "",
      "router": ""
    },
    on: {
      "open": _vm.handleopen,
      "close": _vm.handleclose,
      "select": _vm.handleselect
    }
  }, [_vm._l((_vm.$router.options.routes), function(item, index) {
    return (!item.hidden) ? [(!item.leaf) ? _c('el-submenu', {
      attrs: {
        "index": index + ''
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.name))]), _vm._v(" "), _vm._l((item.children), function(child) {
      return (!child.hidden) ? _c('el-menu-item', {
        key: child.path,
        attrs: {
          "index": child.path
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    })], 2) : _vm._e(), _vm._v(" "), (item.leaf && item.children.length > 0) ? _c('el-menu-item', {
      attrs: {
        "index": item.children[0].path
      }
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.children[0].name))]) : _vm._e()] : _vm._e()
  })], 2), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.collapsed),
      expression: "collapsed"
    }],
    ref: "menuCollapsed",
    staticClass: "el-menu el-menu-vertical-demo collapsed"
  }, _vm._l((_vm.$router.options.routes), function(item, index) {
    return (!item.hidden) ? _c('li', {
      staticClass: "el-submenu item"
    }, [(!item.leaf) ? [_c('div', {
      staticClass: "el-submenu__title",
      staticStyle: {
        "padding-left": "20px"
      },
      on: {
        "mouseover": function($event) {
          return _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          return _vm.showMenu(index, false)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })]), _vm._v(" "), _c('ul', {
      staticClass: "el-menu submenu",
      class: 'submenu-hook-' + index,
      on: {
        "mouseover": function($event) {
          return _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          return _vm.showMenu(index, false)
        }
      }
    }, _vm._l((item.children), function(child) {
      return (!child.hidden) ? _c('li', {
        key: child.path,
        staticClass: "el-menu-item",
        class: _vm.$route.path == child.path ? 'is-active' : '',
        staticStyle: {
          "padding-left": "40px"
        },
        on: {
          "click": function($event) {
            return _vm.$router.push(child.path)
          }
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    }), 0)] : [_c('li', {
      staticClass: "el-submenu"
    }, [_c('div', {
      staticClass: "el-submenu__title el-menu-item",
      class: _vm.$route.path == item.children[0].path ? 'is-active' : '',
      staticStyle: {
        "padding-left": "20px",
        "height": "56px",
        "line-height": "56px",
        "padding": "0 20px"
      },
      on: {
        "click": function($event) {
          return _vm.$router.push(item.children[0].path)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })])])]], 2) : _vm._e()
  }), 0)], 1), _vm._v(" "), _c('section', {
    staticClass: "content-container"
  }, [_c('div', {
    staticClass: "grid-content bg-purple-light"
  }, [_c('el-col', {
    staticClass: "breadcrumb-container",
    attrs: {
      "span": 24
    }
  }, [_c('strong', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.$route.name))]), _vm._v(" "), _c('el-breadcrumb', {
    staticClass: "breadcrumb-inner",
    attrs: {
      "separator": "/"
    }
  }, _vm._l((_vm.$route.matched), function(item) {
    return _c('el-breadcrumb-item', {
      key: item.path
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t\t\t")])
  }), 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "content-wrapper",
    attrs: {
      "span": 24
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "float": "left"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "35%"
    },
    attrs: {
      "placeholder": "开始时间"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  }), _vm._v("-\n                    "), _c('el-input', {
    staticStyle: {
      "width": "35%"
    },
    attrs: {
      "placeholder": "结束时间"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1), _vm._v(" "), [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "日期",
      "width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "总订单数",
      "width": "100",
      "formatter": _vm.formatSex,
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "总包裹数",
      "width": "100",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "新增注册",
      "width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "下单用户",
      "min-width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "分站奖金",
      "min-width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "分站累计奖金",
      "width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "分站收益",
      "min-width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "分站累计收益",
      "min-width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.handleClick(scope.row)
            }
          }
        }, [_vm._v("订单详情")])]
      }
    }])
  })], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "float": "left"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "分站名称"
    },
    model: {
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "35%"
    },
    attrs: {
      "placeholder": "开始时间"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  }), _vm._v("-\n                    "), _c('el-input', {
    staticStyle: {
      "width": "35%"
    },
    attrs: {
      "placeholder": "结束时间"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.daochu
    }
  }, [_vm._v("导出表格")])], 1)], 1)], 1), _vm._v(" "), [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "日期",
      "width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "总订单数",
      "width": "100",
      "formatter": _vm.formatSex,
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "总包裹数",
      "width": "100",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "新增注册",
      "width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "下单用户",
      "min-width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "分站奖金",
      "min-width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "分站累计奖金",
      "width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "分站收益",
      "min-width": "80",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "分站累计收益",
      "min-width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.handleClick(scope.row)
            }
          }
        }, [_vm._v("订单详情")])]
      }
    }])
  })], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "分站名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.qq),
      callback: function($$v) {
        _vm.qq = $$v
      },
      expression: "qq"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "会员账号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.qq),
      callback: function($$v) {
        _vm.qq = $$v
      },
      expression: "qq"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "35%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "时间"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    model: {
      value: (_vm.value6),
      callback: function($$v) {
        _vm.value6 = $$v
      },
      expression: "value6"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "right",
      "width": "15%",
      "margin": "10px 0"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("导出")])], 1)], 1)], 1), _vm._v(" "), [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "交易时间",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "流水类型",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "交易类型",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "流水备注",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "交易前金额",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "交易后金额",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "交易金额",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "商品成本",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "商品利润",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "快递成本",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "快递利润",
      "sortable": ""
    }
  })], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-form', {
    staticClass: "toolbar",
    staticStyle: {
      "margin-top": "10px",
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "100px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "选择分站"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.webSiteId),
      callback: function($$v) {
        _vm.webSiteId = $$v
      },
      expression: "webSiteId"
    }
  }, _vm._l((_vm.fzlist), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }), 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "日期"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "value-format": "yyyy-MM-dd",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    on: {
      "change": _vm.datechange
    },
    model: {
      value: (_vm.dateValue),
      callback: function($$v) {
        _vm.dateValue = $$v
      },
      expression: "dateValue"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "状态"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.state),
      callback: function($$v) {
        _vm.state = $$v
      },
      expression: "state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "未处理",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已处理",
      "value": "1"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.shousuo
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("导出报表")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "highlight-current-row": "",
      "data": _vm.dataList
    }
  }, [_c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "webSiteName",
      "label": "分站名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "bank",
      "label": "提现银行"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "cardNum",
      "label": "银行账号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "提现金额"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v(_vm._s(scope.row.money / 100) + " 元")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 0) ? _c('span', [_vm._v("未处理")]) : _vm._e(), _vm._v(" "), (scope.row.state == -1) ? _c('span', [_vm._v("已处理")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.chuli(scope.row.id, 1)
            }
          }
        }, [_vm._v("处理")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.chuli(scope.row.id, -1)
            }
          }
        }, [_vm._v("拒绝")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_c('el-pagination', {
    attrs: {
      "background": "",
      "current-page": _vm.page,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-form', {
    staticStyle: {
      "margin": "20px",
      "width": "90%"
    },
    attrs: {
      "label-width": "110px"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "float": "left"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "分站名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "联系人"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.contactPerson),
      callback: function($$v) {
        _vm.contactPerson = $$v
      },
      expression: "contactPerson"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "联系电话"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.mobile),
      callback: function($$v) {
        _vm.mobile = $$v
      },
      expression: "mobile"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "公司名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.companyName),
      callback: function($$v) {
        _vm.companyName = $$v
      },
      expression: "companyName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "公司地址"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.address),
      callback: function($$v) {
        _vm.address = $$v
      },
      expression: "address"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "分站域名"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.domainName),
      callback: function($$v) {
        _vm.domainName = $$v
      },
      expression: "domainName"
    }
  })], 1)], 1), _vm._v(" "), _c('p', {
    staticClass: "titlefg"
  }, [_vm._v("分站客服联系方式")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "float": "left"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "客服电话"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.kefuMobile),
      callback: function($$v) {
        _vm.kefuMobile = $$v
      },
      expression: "kefuMobile"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "微信号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.wx),
      callback: function($$v) {
        _vm.wx = $$v
      },
      expression: "wx"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "QQ"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.qq),
      callback: function($$v) {
        _vm.qq = $$v
      },
      expression: "qq"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "100%",
      "float": "left"
    },
    attrs: {
      "label": "二维码"
    }
  }, [_c('el-upload', {
    attrs: {
      "action": "/",
      "list-type": "picture-card",
      "auto-upload": false,
      "file-list": _vm.fileList,
      "on-change": _vm.fileChange,
      "on-preview": _vm.handlePictureCardPreview,
      "on-remove": _vm.handleRemove
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "visible": _vm.dialogVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogVisible = $event
      }
    }
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "src": _vm.dialogImageUrl,
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('p', {
    staticClass: "titlefg"
  }, [_vm._v("价格设置")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "float": "left"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "0.5kg内(普通)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.nearPrice1),
      callback: function($$v) {
        _vm.nearPrice1 = $$v
      },
      expression: "nearPrice1"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "0.5-1kg内(普通)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.nearPrice2),
      callback: function($$v) {
        _vm.nearPrice2 = $$v
      },
      expression: "nearPrice2"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "续重(普通)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.nearPrice3),
      callback: function($$v) {
        _vm.nearPrice3 = $$v
      },
      expression: "nearPrice3"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "0.5kg内(偏远)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.farPrice1),
      callback: function($$v) {
        _vm.farPrice1 = $$v
      },
      expression: "farPrice1"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "0.5-1kg内(偏远)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.farPrice2),
      callback: function($$v) {
        _vm.farPrice2 = $$v
      },
      expression: "farPrice2"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "续重(偏远)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.farPrice3),
      callback: function($$v) {
        _vm.farPrice3 = $$v
      },
      expression: "farPrice3"
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "titlefg"
  }, [_vm._v("账号设置")]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "账号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left"
    },
    attrs: {
      "label": "密码"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "width": "100%",
      "float": "left"
    }
  }, [_c('el-form-item', [(_vm.id) ? _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.edit
    }
  }, [_vm._v("立即修改")]) : _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("立即创建")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "活动名称"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "商品名称"
    },
    model: {
      value: (_vm.name),
      callback: function($$v) {
        _vm.name = $$v
      },
      expression: "name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商品状态"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "选择商品状态"
    },
    model: {
      value: (_vm.state),
      callback: function($$v) {
        _vm.state = $$v
      },
      expression: "state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "上架",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "下架",
      "value": "-1"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.shousuo
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("导出报表")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "highlight-current-row": "",
      "data": _vm.dataList
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "商品",
      "width": "400"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('div', {
          staticStyle: {
            "height": "60px",
            "padding-top": "10px"
          }
        }, [_c('img', {
          staticStyle: {
            "width": "50px",
            "height": "50px",
            "float": "left",
            "margin-right": "5px"
          },
          attrs: {
            "src": scope.row.images
          }
        }), _vm._v(" "), _c('div', [_vm._v(_vm._s(scope.row.name))])])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "价格"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n               " + _vm._s(scope.row.price / 100) + " 元\n            ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "min-width": "200",
      "label": "库存"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('div', [_c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.kucun(scope.row.id, 'del', scope.row.amount)
            }
          }
        }, [_vm._v("减少库存")]), _vm._v(" "), _c('span', {
          staticStyle: {
            "display": "inline-block",
            "width": "70px"
          }
        }, [_vm._v(_vm._s(scope.row.amount))]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              return _vm.kucun(scope.row.id, 'add', scope.row.amount)
            }
          }
        }, [_vm._v("增加库存")])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "saleCount",
      "label": "销量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "重量"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n               " + _vm._s(scope.row.weight / 1000) + " kg\n            ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 0) ? _c('span', [_vm._v("上架")]) : _vm._e(), _vm._v(" "), (scope.row.state == -1) ? _c('span', [_vm._v("下架")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "操作",
      "width": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.edit(scope.row.id)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), (scope.row.state == 0) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.sxj(scope.row.id, -1)
            }
          }
        }, [_vm._v("下架")]) : _vm._e(), _vm._v(" "), (scope.row.state == -1) ? _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.sxj(scope.row.id, 0)
            }
          }
        }, [_vm._v("上架")]) : _vm._e(), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.del(scope.row.id)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_c('el-pagination', {
    attrs: {
      "background": "",
      "current-page": _vm.page,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "增加库存",
      "visible": _vm.addDiv,
      "custom-class": "addDiv",
      "width": "20%"
    },
    on: {
      "update:visible": function($event) {
        _vm.addDiv = $event
      }
    }
  }, [_vm._v("\n      新增："), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.addNum),
      callback: function($$v) {
        _vm.addNum = $$v
      },
      expression: "addNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.addDiv = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.addDiv = false;
        _vm.changeNum('add')
      }
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "减少库存",
      "visible": _vm.delDiv,
      "custom-class": "addDiv",
      "width": "20%"
    },
    on: {
      "update:visible": function($event) {
        _vm.delDiv = $event
      }
    }
  }, [_vm._v("\n      减少："), _c('el-input', {
    staticStyle: {
      "width": "200px"
    },
    model: {
      value: (_vm.delNum),
      callback: function($$v) {
        _vm.delNum = $$v
      },
      expression: "delNum"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.delDiv = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.delDiv = false;
        _vm.changeNum('del')
      }
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "分站名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.qq),
      callback: function($$v) {
        _vm.qq = $$v
      },
      expression: "qq"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "会员账号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.qq),
      callback: function($$v) {
        _vm.qq = $$v
      },
      expression: "qq"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "35%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "时间"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    model: {
      value: (_vm.value6),
      callback: function($$v) {
        _vm.value6 = $$v
      },
      expression: "value6"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "right",
      "width": "15%",
      "margin": "10px 0"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("导出")])], 1)], 1)], 1), _vm._v(" "), [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "分站名称",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "会员账号",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "充值金额",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "交易类型",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "流水备注",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "交易前金额",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "交易后金额",
      "sortable": ""
    }
  })], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-form', {
    ref: "form",
    staticStyle: {
      "margin": "20px",
      "width": "90%"
    },
    attrs: {
      "label-width": "120px"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "float": "left"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "0.5kg内(普通)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.nearPrice1),
      callback: function($$v) {
        _vm.nearPrice1 = $$v
      },
      expression: "nearPrice1"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "0.5-1kg内(普通)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.nearPrice2),
      callback: function($$v) {
        _vm.nearPrice2 = $$v
      },
      expression: "nearPrice2"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "续重(普通)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.nearPrice3),
      callback: function($$v) {
        _vm.nearPrice3 = $$v
      },
      expression: "nearPrice3"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "0.5kg内(偏远)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.farPrice1),
      callback: function($$v) {
        _vm.farPrice1 = $$v
      },
      expression: "farPrice1"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "0.5-1kg内(偏远)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.farPrice2),
      callback: function($$v) {
        _vm.farPrice2 = $$v
      },
      expression: "farPrice2"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "margin": "10px",
      "width": "30%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "续重(偏远)"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "单位：元"
    },
    model: {
      value: (_vm.farPrice3),
      callback: function($$v) {
        _vm.farPrice3 = $$v
      },
      expression: "farPrice3"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "float": "left"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("立即提交")])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-form', {
    staticClass: "demo-ruleForm login-container",
    attrs: {
      "label-position": "left",
      "label-width": "0px"
    }
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("礼品淘管理后台系统")]), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "prefix-icon": "el-icon-mobile",
      "placeholder": "账号"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "prefix-icon": "el-icon-lock",
      "show-password": "",
      "placeholder": "密码"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('el-button', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 14
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('div', {
    staticStyle: {
      "height": "100%",
      "border": "1px solid #e6e6e6",
      "overflow": "hidden"
    }
  }, [_c('div', {
    staticClass: "dashboard-stats",
    staticStyle: {
      "float": "left",
      "width": "48%",
      "background-color": "#578ebe",
      "margin": "10px 0"
    }
  }, [_c('div', {
    staticClass: "dashboard-stats-item",
    staticStyle: {
      "text-align": "center",
      "padding-left": "0"
    }
  }, [_c('h4', {
    staticStyle: {
      "padding": "0"
    }
  }, [_c('a', [_vm._v("所有用户余额")])]), _vm._v(" "), _c('button', {
    staticStyle: {
      "border": "0",
      "padding": "0",
      "background-color": "#578ebe"
    }
  }, [_vm._v("去提现")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "#fff",
      "padding": "0",
      "margin": "3px 0",
      "font-size": "12px"
    }
  }, [_vm._v("每月10号可申请上月奖金")])])]), _vm._v(" "), _c('div', {
    staticClass: "dashboard-stats",
    staticStyle: {
      "float": "right",
      "width": "48%",
      "background-color": "#e35b5a",
      "margin": "10px 0"
    }
  }, [_c('div', {
    staticClass: "dashboard-stats-item",
    staticStyle: {
      "text-align": "center",
      "padding-left": "0"
    }
  }, [_c('h4', {
    staticStyle: {
      "padding": "0"
    }
  }, [_vm._v("当然所有收益")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "#fff",
      "font-size": "12px"
    }
  }, [_vm._v("查看搜索")])])]), _vm._v(" "), _c('div', {
    staticClass: "dashboard-stats",
    staticStyle: {
      "float": "left",
      "width": "48%",
      "background-color": "#578ebe",
      "margin": "10px 0"
    }
  }, [_c('div', {
    staticClass: "dashboard-stats-item",
    staticStyle: {
      "text-align": "center",
      "padding-left": "0"
    }
  }, [_c('h4', {
    staticStyle: {
      "padding": "0"
    }
  }, [_vm._v("管理客户数")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("0")])])]), _vm._v(" "), _c('div', {
    staticClass: "dashboard-stats",
    staticStyle: {
      "float": "right",
      "width": "48%",
      "background-color": "#e35b5a",
      "margin": "10px 0"
    }
  }, [_c('div', {
    staticClass: "dashboard-stats-item",
    staticStyle: {
      "text-align": "center",
      "padding-left": "0"
    }
  }, [_c('h4', {
    staticStyle: {
      "padding": "0"
    }
  }, [_vm._v("分站数")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("62")])])])]), _vm._v(" "), _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "id": "chartColumn"
    }
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "id": "chartBar"
    }
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "id": "chartPie"
    }
  })])])], 1)], 1)], 1), _vm._v(" "), _c('el-row')], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 10
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "600px"
    },
    attrs: {
      "id": "chartLine"
    }
  })])]), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple-dark"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "400px"
    },
    attrs: {
      "id": "chartLine1"
    }
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple-dark"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "400px"
    },
    attrs: {
      "id": "chartLine2"
    }
  })])])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "margin": "10px 0",
      "width": "25%",
      "float": "left",
      "white-space": "nowrap"
    },
    attrs: {
      "label": "状态"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "状态"
    },
    model: {
      value: (_vm.region),
      callback: function($$v) {
        _vm.region = $$v
      },
      expression: "region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "状态",
      "value": "状态"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left",
      "margin": "10px 0"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "35%"
    },
    attrs: {
      "placeholder": "开始时间"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  }), _vm._v("-\n                    "), _c('el-input', {
    staticStyle: {
      "width": "35%"
    },
    attrs: {
      "placeholder": "结束时间"
    },
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "left",
      "margin": "10px 0"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1), _vm._v(" "), [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "商家名称",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "申请时间",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "提现金额",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "状态",
      "sortable": ""
    }
  })], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-form', {
    staticClass: "toolbar",
    staticStyle: {
      "margin-top": "10px",
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "120px"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "支付时间"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "daterange",
      "range-separator": "至",
      "value-format": "yyyy-MM-dd",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期"
    },
    on: {
      "change": _vm.datechange
    },
    model: {
      value: (_vm.dateValue),
      callback: function($$v) {
        _vm.dateValue = $$v
      },
      expression: "dateValue"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户账号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.account),
      callback: function($$v) {
        _vm.account = $$v
      },
      expression: "account"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "平台任务号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.taskId),
      callback: function($$v) {
        _vm.taskId = $$v
      },
      expression: "taskId"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "包裹状态"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.state),
      callback: function($$v) {
        _vm.state = $$v
      },
      expression: "state"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "未发货",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "已发货",
      "value": "1"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "收货人手机"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.mobile),
      callback: function($$v) {
        _vm.mobile = $$v
      },
      expression: "mobile"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "快递单号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.packNum),
      callback: function($$v) {
        _vm.packNum = $$v
      },
      expression: "packNum"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "订单编号"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.orderNum),
      callback: function($$v) {
        _vm.orderNum = $$v
      },
      expression: "orderNum"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "选择分站"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.webSiteId),
      callback: function($$v) {
        _vm.webSiteId = $$v
      },
      expression: "webSiteId"
    }
  }, _vm._l((_vm.fzlist), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.name,
        "value": item.id
      }
    })
  }), 1)], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.shousuo
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("导出报表")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "highlight-current-row": "",
      "data": _vm.dataList
    }
  }, [_c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "taskId",
      "label": "平台任务号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "id",
      "label": "包裹号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "account",
      "label": "用户账号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "taskId",
      "label": "账号备注"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "taskId",
      "label": "商品编码"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "taskId",
      "label": "金额"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "orderNum",
      "label": "第三方订单号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "label": "包裹状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.state == 0) ? _c('span', [_vm._v("未发货")]) : _vm._e(), _vm._v(" "), (scope.row.state == -1) ? _c('span', [_vm._v("已发货")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "packNum",
      "label": "快递单号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "taskId",
      "label": "商品费用"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "taskId",
      "label": "快递费用"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "20px",
      "text-align": "center"
    }
  }, [_c('el-pagination', {
    attrs: {
      "background": "",
      "current-page": _vm.page,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.size,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ })

},[439]);
//# sourceMappingURL=app.036867e2fb488fa26ee6.js.map