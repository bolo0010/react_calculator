(this.webpackJsonpkalkulator_react=this.webpackJsonpkalkulator_react||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(4),l=a.n(i),u=a(5),r=a(6),c=a(8),f=a(7),y=a(0),k=function(e){var t=e.value,a=e.newValue,n=e.flag,s=e.score,i=e.isEmpty;return Object(y.jsx)("div",{className:"screen",children:Object(y.jsxs)("span",{className:"screen__numbers",children:[i?"0":null," ",n?a:t," ",s," "]})})},o=a(2),m=function(e){var t=e.id,a=e.key_fun,n=e.key_name,s=e.click;return Object(y.jsx)("div",{className:"".concat(n," ","key"),id:t,value:a,onClick:s,children:a})},v=[{id:0,key_name:"Reset",key_fun:"CE"},{id:1,key_name:"Delete",key_fun:"<"},{id:2,key_name:"Division",key_fun:"/"},{id:3,key_name:"Seven",key_fun:7},{id:4,key_name:"Eight",key_fun:8},{id:5,key_name:"Nine",key_fun:9},{id:6,key_name:"Multiplication",key_fun:"X"},{id:7,key_name:"Four",key_fun:4},{id:8,key_name:"Five",key_fun:5},{id:9,key_name:"Six",key_fun:6},{id:10,key_name:"Subtraction",key_fun:"-"},{id:11,key_name:"One",key_fun:1},{id:12,key_name:"Two",key_fun:2},{id:13,key_name:"Three",key_fun:3},{id:14,key_name:"Addition",key_fun:"+"},{id:15,key_name:"Opposite value",key_fun:"+/-"},{id:16,key_name:"Zero",key_fun:0},{id:17,key_name:"Point",key_fun:"."},{id:18,key_name:"Equal",key_fun:"="}],_=function(e){var t=e.click,a=v.map((function(e){return Object(y.jsx)(m,Object(o.a)(Object(o.a)({},e),{},{click:t}),e.id)}));return Object(y.jsx)("div",{className:"keyboard",children:a})},d=(a(14),function(e){Object(c.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isEmpty:!0,value:"",newValue:"",flag:!1,fun:"",score:""},e.handleClick=function(t){var a=e.state,n=a.flag,s=a.fun,i=a.score;if(i&&e.setState({score:""}),isNaN(Number(t.target.textContent))){if("CE"===t.target.textContent)e.setState({value:"",newValue:"",flag:!1,fun:"",score:"",isEmpty:!0});else if("<"===t.target.textContent)if(n){var l=e.state.newValue;l.length<2&&e.setState({isEmpty:!0}),"-"===l[0]&&l.length<3&&(e.setState({isEmpty:!0}),l=l.slice(0,1)),l=l.slice(0,-1),e.setState({newValue:l})}else{var u=e.state.value;u.length<2&&e.setState({isEmpty:!0}),"-"===u[0]&&u.length<3&&(e.setState({isEmpty:!0}),u=u.slice(0,1)),u=u.slice(0,-1),e.setState({value:u})}else if("/"===t.target.textContent||"+"===t.target.textContent||"-"===t.target.textContent||"X"===t.target.textContent)e.state.value&&e.state.newValue||e.setState({isEmpty:!0}),e.setState({flag:!0,fun:t.target.textContent});else if("="===t.target.textContent){!i&&s||e.setState({isEmpty:!0});var r="",c=e.state.value,f=e.state.newValue;if("/"===e.state.fun){if("0"===f||""===f)return void alert("Nie dziel przez 0!");r=c/f}else"+"===s?r=Number(c)+Number(f):"-"===s?r=c-f:"X"===s&&(r=c*f);e.setState({value:"",newValue:"",flag:!1,fun:"",score:r})}else if("."===t.target.textContent)if(n){var y=e.state.newValue;if(y||(y+="0"),y.includes("."))return;y+=t.target.textContent,e.setState({newValue:y,isEmpty:!1})}else{var k=e.state.value;if(k||(k+="0"),k.includes("."))return;k+=t.target.textContent,e.setState({value:k,isEmpty:!1})}else if("+/-"===t.target.textContent)if(n){var o=e.state.newValue;if("0"===o||""===o)return;o=String(-o),e.setState({newValue:o})}else{var m=e.state.value;if("0"===m||""===m)return;m=String(-m),e.setState({value:m})}}else{var v=Number(t.target.textContent);if(e.state.value.length<15)if(n){var _=e.state.newValue;"0"===_[0]&&"."!==_[1]&&(_=_.slice(0,0)),_+=v,e.setState({newValue:_,isEmpty:!1})}else{var d=e.state.value;"0"===d[0]&&"."!==d[1]&&(d=d.slice(0,0)),d+=v,e.setState({value:d,isEmpty:!1})}}},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(k,{value:this.state.value,newValue:this.state.newValue,flag:this.state.flag,score:this.state.score,isEmpty:this.state.isEmpty}),Object(y.jsx)(_,{click:this.handleClick})]})}}]),a}(s.a.Component));l.a.render(Object(y.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b99350a9.chunk.js.map