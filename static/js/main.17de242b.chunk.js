(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(75)},42:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(19),s=n.n(o),r=(n(42),n(3)),c=n(4),l=n(6),u=n(5),d=n(7),p=(n(45),n(47),n(9)),m="[AddTask] Add task",b="[DeleteTask] Delete task from list",h="SHOW TASK action",f="EDIT TASK action",g="Toogle visible on/off",k="Toggle Add dialog on/off",E="Toggle Edit dialog on/off",O=function(){return{type:g}},j=function(){return{type:k}},v=function(){return{type:E}},D=n(11),w=(n(26),n(27),n(28),n(59),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).lineThru=function(){n.setState({taskDone:!n.state.taskDone})},n.state={taskDone:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Task"},i.a.createElement("div",{className:!0!==this.props.taskDone?"task-left-column":"task-left-column-done",onClick:function(){return e.lineThru()}},i.a.createElement("p",null," ",this.props.name," ")),i.a.createElement("div",{className:"task-right-column"},i.a.createElement(D.Button,{label:"Show",icon:"pi pi-info",className:"p-button-success",onClick:function(){e.props.showTask(e.props),e.props.toggleShowTask()}}),i.a.createElement(D.Button,{label:"Edit",icon:"pi pi-spinner",className:"p-button-text",onClick:function(){e.props.showTask(e.props),e.props.toggleEditDialogHandler()}}),i.a.createElement(D.Button,{label:"Delete",icon:"pi pi-ban",className:"p-button-danger",onClick:function(){return e.props.deleteTask(e.props)}})))}}]),t}(a.Component)),T=Object(p.a)(null,function(e){return{deleteTask:function(t){return e(function(e){return{type:b,payload:e}}(t))},showTask:function(t){return e(function(e){return{type:h,payload:e}}(t))},toggleShowTask:function(){return e(O())},toggleEditDialogHandler:function(){return e(v())}}})(w),N=(n(61),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"TodoList"},this.props.todoList.tasks.map(function(e,t){return i.a.createElement("div",{className:"border",key:t},i.a.createElement(T,{id:e.id,name:e.name,description:e.description}))}))}}]),t}(a.Component)),y=Object(p.a)(function(e){return{todoList:e.todoList}},function(e){return{toggleAddTaskDialog:function(){return e(j())}}})(N),L=(n(63),n(35)),C=n(12),S=function(){return"_"+Math.random().toString(36).substr(2,9)},A={tasks:[{id:S(),name:"React",description:"Develop your skills in react"},{id:S(),name:"Redux",description:"develop your skills in redux"}],showName:"",showDescription:"",editedItemId:"",showTaskVisible:!1,addDialogVisible:!1,editDialogVisible:!1};var x=n(15),V=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).saveName=function(e){n.setState({tempName:e.target.value})},n.saveDescription=function(e){n.setState({tempDescription:e.target.value})},n.state={tempName:"",tempDescription:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"AddTask"},i.a.createElement(x.Dialog,{header:"Adding new task",visible:this.props.todoList.addDialogVisible,width:"600px",modal:!0,onHide:this.props.toggleAddTaskDialog},i.a.createElement("p",null,"Title:"),i.a.createElement("input",{onChange:this.saveName,value:this.state.tempName,maxLength:70}),i.a.createElement("br",null),i.a.createElement("p",null,"Description:"),i.a.createElement("textarea",{onChange:this.saveDescription,value:this.state.tempDescription,maxLength:400}),i.a.createElement("br",null),""!==this.state.tempName?i.a.createElement(D.Button,{label:"Add",icon:"pi pi-plus-circle",className:"p-button-success",onClick:function(){e.props.addItem({id:S(),name:e.state.tempName,description:e.state.tempDescription}),e.setState({id:"",tempName:"",tempDescription:""}),e.props.toggleAddTaskDialog()}}):i.a.createElement(D.Button,{label:"Add",icon:"pi pi-plus-circle",className:"p-button-success",onClick:function(){e.props.addItem({id:S(),name:e.state.tempName,description:e.state.tempDescription}),e.setState({id:"",tempName:"",tempDescription:""}),e.props.toggleAddTaskDialog()},disabled:!0})))}}]),t}(a.Component),I=Object(p.a)(function(e){return{todoList:e.todoList}},function(e){return{addItem:function(t){return e(function(e){return{type:m,payload:e}}(t))},toggleAddTaskDialog:function(){return e(j())}}})(V),B=(n(67),function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(x.Dialog,{header:"".concat(this.props.todoList.showName),visible:this.props.todoList.showTaskVisible,width:"600px",modal:!0,onHide:this.props.toggleShowTask},i.a.createElement("div",{className:"ShowTask"},i.a.createElement("p",null,"Task name:"),i.a.createElement("p",null,this.props.todoList.showName),i.a.createElement("p",null,"Task Description:"),i.a.createElement("p",{className:"desc"},this.props.todoList.showDescription)))}}]),t}(a.Component)),H=Object(p.a)(function(e){return{todoList:e.todoList}},function(e){return{toggleShowTask:function(){return e(O())}}})(B),W=(n(69),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).saveName=function(e){n.setState({newName:e.target.value})},n.saveDescription=function(e){n.setState({newDescription:e.target.value})},n.state={newName:"",newDescription:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"EditTask"},i.a.createElement(x.Dialog,{header:"You are editing ".concat(this.props.todoList.showName," task"),visible:this.props.todoList.editDialogVisible,width:"600px",modal:!0,onHide:this.props.toggleEditDialogHandler},i.a.createElement("p",null,"Enter new title"),i.a.createElement("input",{onChange:this.saveName,maxLength:70}),i.a.createElement("p",null,"Enter new description"),i.a.createElement("textarea",{onChange:this.saveDescription,maxLength:400}),i.a.createElement("br",null),""!==this.state.newName?i.a.createElement(D.Button,{label:"Edit",icon:"pi pi-spinner",onClick:function(){e.props.editTask({name:e.state.newName,description:e.state.newDescription})}}):i.a.createElement(D.Button,{label:"Edit",icon:"pi pi-spinner",onClick:function(){e.props.editTask({name:e.state.newName,description:e.state.newDescription})},disabled:!0})))}}]),t}(a.Component)),M=Object(p.a)(function(e){return{todoList:e.todoList}},function(e){return{editTask:function(t){return e(function(e){return{type:f,payload:e}}(t))},toggleEditDialogHandler:function(){return e(v())}}})(W),R=(n(71),function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"AddTaskButton"},i.a.createElement("button",{className:"add-button",onClick:this.props.toggleAddTaskDialog},"+"))}}]),t}(a.Component)),J=Object(p.a)(function(e){return{todoList:e.todoList}},function(e){return{toggleAddTaskDialog:function(){return e(j())}}})(R),K=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Main"},i.a.createElement(y,null),i.a.createElement("br",null),i.a.createElement(I,null),i.a.createElement(H,null),i.a.createElement(M,null),i.a.createElement(J,null))}}]),t}(a.Component),Y=n(76),$=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(Y.a,{basename:"/"},i.a.createElement(K,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(16),q=n(31),z=n(22),F=n(32),G=n.n(F),P=n(8),Q=n(33),U=n(34),X=Object(P.combineReducers)({todoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n={id:S(),name:t.payload.name,description:t.payload.description};return Object(C.a)({},e,{tasks:Object(L.a)(e.tasks).concat([n])});case b:return Object(C.a)({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.payload.id})});case h:return Object(C.a)({},e,{showName:t.payload.name,showDescription:t.payload.description,editedItemId:t.payload.id});case f:return Object(C.a)({},e,{tasks:e.tasks.map(function(n){return n.id===e.editedItemId?Object(C.a)({},n,{name:t.payload.name,description:t.payload.description}):n})});case g:return Object(C.a)({},e,{showTaskVisible:!e.showTaskVisible});case k:return Object(C.a)({},e,{addDialogVisible:!e.addDialogVisible});case E:return Object(C.a)({},e,{editDialogVisible:!e.editDialogVisible});default:return e}}}),Z={key:"root",storage:G.a},ee=Object(z.a)(Z,X),te=Object(P.createStore)(ee,{},Object(Q.composeWithDevTools)(Object(P.applyMiddleware)(U.a))),ne=Object(z.b)(te);s.a.render(i.a.createElement(_.a,{store:te},i.a.createElement(q.a,{loading:null,persistor:ne},i.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.17de242b.chunk.js.map