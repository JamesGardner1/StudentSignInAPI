(function(t){function e(e){for(var s,i,d=e[0],u=e[1],o=e[2],l=0,f=[];l<d.length;l++)i=d[l],r[i]&&f.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,d=1;d<n.length;d++){var u=n[d];0!==r[u]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var o=0;o<d.length;o++)e(d[o]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"197b":function(t,e,n){},"3d71":function(t,e,n){},5054:function(t,e,n){"use strict";var s=n("bc16"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NewStudentForm",{on:{"student-added":t.newStudentAdded}}),n("StudentTable",{attrs:{students:t.students},on:{"student-present":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}}),n("StudentMessage",{attrs:{message:t.message,name:t.name}})],1)},a=[],i=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors&&t.errors.length>0,expression:"errors && errors.length > 0"}],staticClass:"alert alert-danger"},t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0),n("div",{staticClass:"card add-student m-2 p-2"},[n("form",[n("h4",{staticClass:"card-title"},[t._v("Add new student")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStudentName,expression:"newStudentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:t.newStudentName},on:{input:function(e){e.target.composing||(t.newStudentName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"starID"}},[t._v("Star ID")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStarID,expression:"newStarID",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"starID"},domProps:{value:t.newStarID},on:{input:function(e){e.target.composing||(t.newStarID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addStudent(e)}}},[t._v("Add")])])])])}),d=[],u={name:"NewStudentForm",data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName&&this.newStarID){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}else this.errors.push("Name and StarID are required.")}}},o=u,c=(n("a07e"),n("2877")),l=Object(c["a"])(o,i,d,!1,null,null,null),f=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card student-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Students")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(t.editTable)?t._i(t.editTable,null)>-1:t.editTable},on:{change:function(e){var n=t.editTable,s=e.target,r=!!s.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);s.checked?i<0&&(t.editTable=n.concat([a])):i>-1&&(t.editTable=n.slice(0,i).concat(n.slice(i+1)))}else t.editTable=r}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[t._v("Edit table?")])]),n("div",{attrs:{id:"student-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("StarID")]),n("th",[t._v("Present?")]),n("th",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}]},[t._v("Delete")])]),t._l(t.students,function(e){return n("StudentRow",{key:e.name,attrs:{student:e,edit:t.editTable},on:{"student-present":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}})})],2)])])])},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",{class:"present-"+t.student.present},[s("td",[t._v(t._s(t.student.name))]),s("td",[t._v(t._s(t.student.starID))]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.student.present,expression:"student.present"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.student.present)?t._i(t.student.present,null)>-1:t.student.present},on:{change:[function(e){var n=t.student.present,s=e.target,r=!!s.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);s.checked?i<0&&t.$set(t.student,"present",n.concat([a])):i>-1&&t.$set(t.student,"present",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(t.student,"present",r)},function(e){return t.checked(t.student)}]}})]),s("td",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}]},[s("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:function(e){return t.deleteStudent(t.student)}}})])])},h=[],A={name:"StudentRow",props:{student:Object,edit:Boolean},methods:{checked:function(t){this.$emit("student-present",t)},deleteStudent:function(t){confirm("Delete ".concat(t.name,"?"))&&this.$emit("delete-student",t)}}},b=A,S=(n("5054"),Object(c["a"])(b,v,h,!1,null,null,null)),g=S.exports,w={name:"StudentTable",components:{StudentRow:g},data:function(){return{editTable:!1}},props:{students:Array},methods:{studentArrivedOrLeft:function(t){this.$emit("student-present",t)},studentDeleted:function(t){this.$emit("delete-student",t)}}},y=w,_=(n("b1d5"),Object(c["a"])(y,p,m,!1,null,null,null)),C=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("transition",{attrs:{name:"fade"}},[t.seeMessage?n("div",{staticClass:"alert alert-success"},[t._v(t._s(t.message)+" "+t._s(t.name))]):t._e()])],1)},I=[],M={name:"StudentMessage",data:function(){return{seeMessage:!1}},props:{message:String,name:String},watch:{message:function(){var t=this;this.seeMessage=!0,setTimeout(function(){t.seeMessage=!1},3e3)}}},k=M,j=(n("e517"),Object(c["a"])(k,x,I,!1,null,null,null)),D=j.exports,O={name:"app",data:function(){return{students:[],message:"",name:""}},components:{NewStudentForm:f,StudentTable:C,StudentMessage:D},mounted:function(){this.updateStudents()},methods:{newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then(function(t){e.updateStudents()}).catch(function(t){var e=t.response.data.join(", ");alert("Error adding student.\n"+e)})},studentArrivedOrLeft:function(t){var e=this;this.$student_api.updateStudent(t).then(function(){e.message=t.present?"Welcome,":"Goodbye, ",e.name=t.name,e.updateStudents()})},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t.id).then(function(){e.updateStudents()})},updateStudents:function(){var t=this;this.$student_api.getAllStudents().then(function(e){t.students=e})}}},N=O,T=Object(c["a"])(N,r,a,!1,null,null,null),E=T.exports,U=n("9f7b"),P=n.n(U),F=n("bc3a"),G=n.n(F),Q="/api/students",R={getAllStudents:function(){return G.a.get(Q).then(function(t){return t.data})},addStudent:function(t){return G.a.post(Q,t).then(function(t){return t.data})},updateStudent:function(t){return G.a.patch("".concat(Q,"/").concat(t.id),t).then(function(t){return t.data})},deleteStudent:function(t){return G.a.delete("".concat(Q,"/").concat(t)).then(function(t){return t.data})}};n("f9e3"),n("2dd8");s["a"].use(P.a),s["a"].prototype.$student_api=R,new s["a"]({render:function(t){return t(E)}}).$mount("#app")},"85a7":function(t,e,n){},a07e:function(t,e,n){"use strict";var s=n("3d71"),r=n.n(s);r.a},b1d5:function(t,e,n){"use strict";var s=n("197b"),r=n.n(s);r.a},bc16:function(t,e,n){},e517:function(t,e,n){"use strict";var s=n("85a7"),r=n.n(s);r.a},ed3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM2SURBVGhD7ZnLbtNAFIYjbgt23FbAC7BCSmYIUqWIcalYsCTitoMtrItgwQKJdE0rlcsjoCJVFCQeAygPAJQNAVTiJCqgZjhneiyF5Iztie1JkfxLnxTLM+f8x554xuNKqVKlsks3m3t7s7LeVfIusNINxAfgRxjI3wj+7gZy3ZyDNthW36/soe7TU3+udhIMLoRKfAGD2oUwEBvYt9eQJyicP3Ua1aOhkk+BX5w5FzAGFLKMMSl8sYIrd62rxHfOTEbaGJvS5C/dPHUArtQzJnGuQBGPdbW6n9LmI32xehDMv+YSFgEU8QpzUvpsoivvzXwEFLGay53wMWxs4HAiG5MJAlznAvskDGqXyY6bOhdOH4NJ5xsX1DPtn4E4QrbSC28fE2xKiCWylU5mhnWZpM7Xdf/2Tf4cg2kLfbhzHOilp+rHyV6y4I+7wAViASN/3qxpvb2ttx7c49sMgW2wLfZxLKJF9uKFiywYPhtckDEi85ESiojMR3IpAgr4lGoB2A/EWS4AR//WjX8MGVmKGDVvBMcYY7StjZ6qSrJpl1kSM51t2IwNF5GmTSpmxR2yaReM/xds5xjiDOZm3iCek027oOH6eMdkWKMDOB4M6IA0sXlAyfdk0y56e+IDJMAWMaws5hGYWMmmXU7PfwZTBF75UcGdyGQeQG9k0658ChgZNigoyksB//0Qwj8K2zkB1jzeidHhlKUIJd6RTbuggBW2cwyseTIad46LFU+ax+hunsiUmCebdpkNKq4zg/elRFATZNMuWsx95gKMsRsXcyho3OKCsERFJJiPiIpwMY+ESjwke8nC7T6n+QCMFPxCs+X0QoOCRd0yF2w6iEWylV74Io0TBx/QI0p+3ZyrHyZbbgrPyatsUI/A8GmSnckEf54nXGAvKPmIbEyuna1FscomKBDMiR9OyEY2mc1dJda4REUAw+Zlbpu7kXCj1c9ml1jUjcY+Spu/QnXmCiRqjyfOTLuj5CVKU6zMIzYQS06TnQWcpPCqb87MHKLw/kQzdgv4yJmLA/vg8sB5hi1CuMjCTSfct8E1O7544Hc0vEPIzjc18ZbOzeOqMvXCrFSpUjGqVP4C/xYkeiCFjZAAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.41c577fe.js.map