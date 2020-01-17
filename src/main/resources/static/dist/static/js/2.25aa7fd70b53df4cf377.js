webpackJsonp([2],{Dcsh:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("mvHQ"),r=o.n(a),l=o("fZjL"),s=o.n(l),i={name:"ServerService",data:function(){return{tableData:[],obj:{key:"",value:""},dialogVisible:!1,dialogFormVisible:!1,formLabelWidth:"120px",form:{sName:"",sType:"",autoNotice:!1,autoRepair:!1,chargePerson:"",testMethodIds:"",repairMethodIds:[]},keys:[],newform:{sName:"",sType:"",autoNotice:!1,autoRepair:!1,chargePerson:"",testMethodIds:"",repairMethodIds:[]},person:[],testList:[],serviceContent:{},repairList:[],eId:""}},methods:{goIndex:function(){this.$router.push("/")},handleEdit:function(e,t){this.index=e,this.dialogFormVisible=!0,this.keys=s()(t),this.serviceContent=t,this.form=t;var o=JSON.parse(this.form.sMessage);this.obj=o[0]},handleDelete:function(e,t){var o=this;this.$axios.delete("http://192.168.1.155:8888/serverController/"+t.sId).then(function(e){e.data?(o.$message({message:"恭喜你，删除成功",type:"success"}),window.location.reload()):o.$message.error("删除失败")})},updateUser:function(){var e=this;this.dialogFormVisible=!1,this.form.autoNotice?this.form.autoNotice=1:this.form.autoNotice=0,this.autoRepair?this.form.autoRepair=1:this.form.autoRepair=0,this.$axios.put("http://192.168.1.155:8888/serverController",this.form).then(function(t){t.data?(e.$message({message:"恭喜你，修改成功",type:"success"}),window.location.reload()):e.$message.error("修改失败")})},addService:function(){this.dialogVisible=!0},submit:function(){var e=this;this.newform.sMessage=r()([this.obj]),this.newform.repairMethodIds=r()(this.newform.repairMethodIds),this.newform.autoNotice?this.newform.autoNotice=1:this.newform.autoNotice=0,this.newform.autoRepair?this.newform.autoRepair=1:this.newform.autoRepair=0,this.newform.testMethodIds=r()([this.newform.testMethodIds]),this.newform.eId=this.eId,this.$axios.post("http://192.168.1.155:8888/serverController/insertServer",this.newform).then(function(t){t.data?(e.$message({message:"恭喜你，添加成功",type:"success"}),e.dialogVisible=!1,window.location.reload()):e.$message.error("添加失败")})},goTest:function(e,t){this.$router.push("/test").then(function(){})}},created:function(){var e=this;this.eId=localStorage.getItem("eId"),this.$axios.get("http://192.168.1.155:8888/CPController").then(function(t){e.person=t.data}),this.$axios.get("http://192.168.1.155:8888/TMController").then(function(t){console.log(t),e.testList=t.data}),this.$axios.get("http://192.168.1.155:8888/RMController").then(function(t){console.log(t),e.repairList=t.data})},mounted:function(){var e=this,t=[];this.$axios.get("http://192.168.1.155:8888/serverController").then(function(o){for(var a=0;a<o.data.length;a++)o.data[a].eId==e.eId&&t.push(o.data[a]);e.tableData=t})}},n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"server_service"},[o("div",{staticStyle:{width:"100%","text-align":"right",height:"80px","line-height":"80px"}},[o("span",{staticStyle:{float:"left","font-size":"20px","font-weight":"bold","margin-left":"10px"}},[e._v("设备服务")]),e._v(" "),o("el-button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:e.addService}},[e._v("添加")])],1),e._v(" "),o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[o("el-table-column",{attrs:{prop:"sName",label:"服务名",width:"180"}}),e._v(" "),o("el-table-column",{attrs:{prop:"sType",label:"服务类型"}}),e._v(" "),o("el-table-column",{attrs:{prop:"autoNotice",label:"报警通知"}}),e._v(" "),o("el-table-column",{attrs:{prop:"chargePerson",label:"负责人"}}),e._v(" "),o("el-table-column",{attrs:{prop:"autoRepair",label:"是否自动修复"}}),e._v(" "),o("el-table-column",{attrs:{prop:"methods",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small"},on:{click:function(o){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),o("el-button",{attrs:{size:"small  ",type:"danger"},on:{click:function(o){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),o("el-button",{attrs:{size:"small  ",type:"primary"},on:{click:function(o){return e.goTest(t.$index,t.row)}}},[e._v("管理")])]}}])})],1),e._v(" "),o("el-dialog",{attrs:{title:"修改信息",visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{attrs:{model:e.form}},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"服务名称"}},[o("el-input",{model:{value:e.form.sName,callback:function(t){e.$set(e.form,"sName",t)},expression:"form.sName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"服务类型"}},[o("el-input",{model:{value:e.form.sType,callback:function(t){e.$set(e.form,"sType",t)},expression:"form.sType"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"报警通知"}},[o("el-switch",{model:{value:e.form.autoNotice,callback:function(t){e.$set(e.form,"autoNotice",t)},expression:"form.autoNotice"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"自动修复"}},[o("el-switch",{model:{value:e.form.autoRepair,callback:function(t){e.$set(e.form,"autoRepair",t)},expression:"form.autoRepair"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"负责人"}},[o("el-select",{attrs:{placeholder:"请选择负责人"},model:{value:e.form.chargePerson,callback:function(t){e.$set(e.form,"chargePerson",t)},expression:"form.chargePerson"}},e._l(e.person,function(e,t){return o("el-option",{key:t,attrs:{label:e.cName,value:e.cId}})}),1)],1),e._v(" "),o("div",[o("div",{staticStyle:{"text-align":"center"}},[e._v("自定义配置信息")]),e._v("\n            属性名:"),o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.obj.key,callback:function(t){e.$set(e.obj,"key",t)},expression:"obj.key"}}),e._v("\n            属性值"),o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.obj.value,callback:function(t){e.$set(e.obj,"value",t)},expression:"obj.value"}})],1)],1),e._v(" "),o("span",[e._v("报警通知、自动修复要填写（0或者1）否则提交不成功")])],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.updateUser}},[e._v("确 定")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"新增服务",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("el-form",{ref:"form",attrs:{model:e.newform,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"服务名称"}},[o("el-input",{model:{value:e.newform.sName,callback:function(t){e.$set(e.newform,"sName",t)},expression:"newform.sName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"服务类型"}},[o("el-input",{model:{value:e.newform.sType,callback:function(t){e.$set(e.newform,"sType",t)},expression:"newform.sType"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"报警通知"}},[o("el-switch",{model:{value:e.newform.autoNotice,callback:function(t){e.$set(e.newform,"autoNotice",t)},expression:"newform.autoNotice"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"自动修复"}},[o("el-switch",{model:{value:e.newform.autoRepair,callback:function(t){e.$set(e.newform,"autoRepair",t)},expression:"newform.autoRepair"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"负责人"}},[o("el-select",{attrs:{placeholder:"请选择负责人"},model:{value:e.newform.chargePerson,callback:function(t){e.$set(e.newform,"chargePerson",t)},expression:"newform.chargePerson"}},e._l(e.person,function(e,t){return o("el-option",{key:t,attrs:{label:e.cName,value:e.cId}})}),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"自动检测方法"}},[o("el-select",{attrs:{placeholder:"请选择方法"},model:{value:e.newform.testMethodIds,callback:function(t){e.$set(e.newform,"testMethodIds",t)},expression:"newform.testMethodIds"}},e._l(e.testList,function(e,t){return o("el-option",{key:t,attrs:{label:e.tName,value:e.tId}})}),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"自动修复方法"}},[o("el-checkbox-group",{model:{value:e.newform.repairMethodIds,callback:function(t){e.$set(e.newform,"repairMethodIds",t)},expression:"newform.repairMethodIds"}},e._l(e.repairList,function(e,t){return o("el-checkbox",{key:t,attrs:{label:e.rName,name:"rId"}})}),1)],1),e._v(" "),o("div",[o("div",{staticStyle:{"text-align":"center","background-color":"#545c64",height:"50px","line-height":"50px",color:"white"}},[e._v("自定义配置信息")]),e._v(" "),o("div",{staticStyle:{"margin-top":"10px"}},[e._v("属性名:"),o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.obj.key,callback:function(t){e.$set(e.obj,"key",t)},expression:"obj.key"}})],1),e._v(" "),o("div",{staticStyle:{"margin-top":"10px"}},[e._v("属性值"),o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.obj.value,callback:function(t){e.$set(e.obj,"value",t)},expression:"obj.value"}})],1)])],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("添加")])],1)],1)],1)},staticRenderFns:[]};var c=o("VU/8")(i,n,!1,function(e){o("EURP")},"data-v-d778e55e",null);t.default=c.exports},EURP:function(e,t){}});
//# sourceMappingURL=2.25aa7fd70b53df4cf377.js.map