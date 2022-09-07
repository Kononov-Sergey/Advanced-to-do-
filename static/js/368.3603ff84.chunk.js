"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[368],{918:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var n=s(871),a=s(791),r=s(152),u=s(18),c=s(258),o="HighlightedTodo_Todo__6mzJN",d="HighlightedTodo_change-btn__oKKmY",i=s(184),l=function(e){var t=(0,a.useState)(!1),s=(0,r.Z)(t,2),l=s[0],x=s[1],h=(0,a.useState)(e.topic),f=(0,r.Z)(h,2),m=f[0],j=f[1],b=(0,a.useState)(e.text),p=(0,r.Z)(b,2),_=p[0],k=p[1],v=(0,u.Z)(c.CU),N=v.sendRequest,S=v.status,T=(0,n.s0)();return(0,a.useEffect)((function(){"completed"===S&&T("/Todos",{replace:!0})}),[S,T]),(0,a.useEffect)((function(){e.topic!==m||e.text!==_?x(!0):x(!1)}),[m,_]),(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var s={id:e.todoId,topic:m,text:_,status:e.status};N(s)},className:o,children:[(0,i.jsx)("label",{children:"Topic:"}),(0,i.jsx)("input",{onInput:function(e){j(e.currentTarget.value)},defaultValue:m}),(0,i.jsx)("label",{children:"Text:"}),(0,i.jsx)("textarea",{onInput:function(e){k(e.currentTarget.value)},defaultValue:_,rows:2}),l&&(0,i.jsx)("button",{type:"submit",className:d,children:"Change"})]})},x=s(711),h=s(214),f=s(861),m="NewSubtaskForm_form__0zTKk",j="NewSubtaskForm_control__SmXtN",b="NewSubtaskForm_actions__6rTuv",p=function(e){var t=(0,u.Z)(c.m0),s=t.sendRequest,n=t.status,r=(0,a.useRef)(null),o=function(){var t=(0,f.Z)((0,h.Z)().mark((function t(n){var a,u;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""===(null===(a=r.current)||void 0===a?void 0:a.value)||!e.todoID){t.next=6;break}return u={subtaskData:{text:r.current.value},todoId:e.todoID},t.next=5,s(u);case 5:e.showTextArea(!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,i.jsxs)("form",{className:m,onSubmit:o,children:["pending"===n&&(0,i.jsx)("div",{className:"centered",children:(0,i.jsx)(x.Z,{})}),(0,i.jsxs)("div",{className:j,children:[(0,i.jsx)("label",{htmlFor:"Subtask",children:"Your Subtask"}),(0,i.jsx)("textarea",{id:"Subtask",rows:5,ref:r})]}),(0,i.jsx)("div",{className:b,children:(0,i.jsx)("button",{className:"btn",children:"Add Subtask"})})]})},_="SubTaskItem_item__9P4No",k=function(e){return(0,i.jsx)("li",{className:_,children:(0,i.jsx)("p",{children:e.text})})},v="SubtasksList_Subtasks__L4any",N=function(e){return(0,i.jsx)("ul",{className:v,children:e.Subtasks.map((function(e){return(0,i.jsx)(k,{text:e.text},e.id)}))})},S="Subtasks_Subtasks__vSwCd",T=function(){var e=(0,n.UO)(),t=(0,u.Z)(c.EK,!0),s=t.sendRequest,o=t.status,d=t.data,l=t.error,h=(0,a.useState)(!1),f=(0,r.Z)(h,2),m=f[0],j=f[1],b=d,_=e.TodoID,k=null;(0,a.useEffect)((function(){s(_)}),[s,_,m]);return"pending"===o&&(k=(0,i.jsx)("div",{className:"centered",children:(0,i.jsx)(x.Z,{})})),"completed"===o&&b&&b.length>0&&(k=(0,i.jsx)(N,{Subtasks:b})),"completed"!==o||b&&0!==b.length||(k=(0,i.jsx)("p",{className:"centered",children:"No subtasks were added yet!"})),l&&(k=(0,i.jsx)("p",{className:"centered",children:l})),(0,i.jsxs)("section",{className:S,children:[(0,i.jsx)("h2",{children:"Subtasks"}),k,!m&&(0,i.jsx)("button",{className:"btn",onClick:function(){j(!0)},children:"Add a subtask"}),m&&(0,i.jsx)(p,{showTextArea:j,todoID:e.TodoID})]})},g=function(){var e=(0,n.UO)(),t=(0,u.Z)(c.hg,!0),s=t.sendRequest,r=t.status,o=t.data,d=t.error;return(0,a.useEffect)((function(){s(e.TodoID)}),[s,e.TodoID]),"pending"===r?(0,i.jsx)("div",{className:"centered",children:(0,i.jsx)(x.Z,{})}):d?(0,i.jsx)("div",{className:"centered",children:(0,i.jsx)("h1",{children:d})}):o.text?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{text:o.text,topic:o.topic,todoId:e.TodoID||"",status:o.status}),(0,i.jsx)(T,{})]}):(0,i.jsx)("div",{className:"centered",children:(0,i.jsx)("h1",{children:"Not Todo found!"})})}}}]);
//# sourceMappingURL=368.3603ff84.chunk.js.map