(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(50),o=a.n(s),i=(a(57),a(4)),r=a(7),l=a(9),u=a(8),m=a(10),d=(a(58),a(114)),p=a(113),v=a(15),h=a(2),b=a(111),f=a(110),g=a(51),E=a.n(g),j=function e(){var t=this;Object(i.a)(this,e),this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})},this.service=E.a.create({baseURL:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_URL:"http://192.168.20.138:5002",REACT_APP_SOCKET_PORT:"http://192.168.20.138:5001"}).API_URL,"/auth")})},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1,redirect:!0})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(h.a)({},a.state,Object(v.a)({},n,c)))},a.state={username:"",password:"",redirect:!1},a.service=new j,a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.redirect?c.a.createElement(b.a,{to:"/home"}):"",c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),c.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),c.a.createElement("button",null,"Log In")),c.a.createElement(f.a,{to:"/signup"},c.a.createElement("button",null,"Sign Up")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:t,password:n,error:!1,redirect:!0})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(h.a)({},a.state,Object(v.a)({},n,c)))},a.state={username:"",password:"",redirect:!1},a.service=new j,a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.redirect?c.a.createElement(b.a,{to:"/home"}):"",c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),c.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),c.a.createElement("button",null,"Sign Up")))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f.a,{to:"/feria"},c.a.createElement("button",null,"feria")),c.a.createElement(f.a,{to:"/basket"},c.a.createElement("button",null,"basket")),c.a.createElement(f.a,{to:"/robo"},c.a.createElement("button",null,"robo")),c.a.createElement(f.a,{to:"/pesca"},c.a.createElement("button",null,"pesca")),c.a.createElement(f.a,{to:"/funam"},c.a.createElement("button",null,"funam")))}}]),t}(n.Component),y=a(16),S=a.n(y),C=(a(49),S()("".concat("http://192.168.20.138:5002"))),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={speedX:0,speedY:0,speedZ:0,score:[],movement:"cuadrado ",bellResizing:"bell ",startGame:!1},a.test(),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"calcMove",value:function(e,t,a){C.emit("basket",{speedX:e,speedY:t,speedZ:a})}},{key:"showPC",value:function(e){this.setState(Object(h.a)({},this.state,{score:e.move}))}},{key:"movement",value:function(e){var t="cuadrado ",a=Math.floor(e.score);a>=100?(t+="topHit ",this.bellResizing()):a>=80&&a<=99?t+="power80Hit ":a>=60&&a<=79?t+="power60Hit ":a>=40&&a<=59&&(t+="power40Hit "),this.setState(Object(h.a)({},this.state,{movement:t}))}},{key:"bellResizing",value:function(){this.setState(Object(h.a)({},this.state,{bellResizing:"bell bellAnimation "}))}},{key:"test",value:function(){var e=this;window.DeviceMotionEvent?window.addEventListener("devicemotion",function(t){var a=e.state.speedX,n=e.state.speedY,c=e.state.speedZ;a<t.acceleration.x&&t.acceleration.x&&(a=t.acceleration.x,e.setState(Object(h.a)({},e.state,{speedX:a,speedY:n,speedZ:c})),a>20&&e.calcMove(a,n,c)),n<t.acceleration.y&&t.acceleration.y&&(n=t.acceleration.y,e.setState(Object(h.a)({},e.state,{speedX:a,speedY:n,speedZ:c})),n>20&&e.calcMove(a,n,c)),c<t.acceleration.z&&t.acceleration.z&&(c=t.acceleration.z,e.setState(Object(h.a)({},e.state,{speedX:a,speedY:n,speedZ:c})),c>20&&e.calcMove(a,n,c))},!1):console.log("correcto")}},{key:"handleClick",value:function(e){C.emit("clickedB")}},{key:"render",value:function(){var e=this;return C.on("basket",function(t){t.finish?e.showPC(t):e.movement(t)}),C.on("clickedB",function(t){console.log(t),t&&e.setState(Object(h.a)({},e.state,{startGame:!0}))}),c.a.createElement("div",null,this.state.startGame?c.a.createElement("div",null,c.a.createElement("p",null,this.state.speedX),0===this.state.speedX?c.a.createElement("div",null,this.state.score.map(function(e){return c.a.createElement("div",null,e.id," - ",e.score)})):c.a.createElement("div",null,c.a.createElement("p",null,"SpeedX: ",this.state.speedX.toFixed(2)),c.a.createElement("p",null,"SpeedY: ",this.state.speedY.toFixed(2)),c.a.createElement("p",null,"SpeedZ: ",this.state.speedZ.toFixed(2)),c.a.createElement("p",null,"Classes: ",this.state.movement),c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("div",{className:"objects"},c.a.createElement("img",{alt:"",className:"fair",src:"/img/juego-martillo.png"}),c.a.createElement("img",{alt:"",className:this.state.bellResizing,src:"/img/campana.png"}),c.a.createElement("img",{alt:"",className:this.state.movement,src:"/img/cuadrado.png"})),c.a.createElement("div",{className:"background"}))),c.a.createElement("div",{id:"winner"})):c.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"start"))}}]),t}(n.Component),x=S()("".concat("http://192.168.20.138:5002"));var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={speedX:0,speedY:0,speedZ:0,score:[],movement:"cuadrado ",bellResizing:"bell ",score2:0},a.test(),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"calcMove",value:function(e,t,a){var n=this;x.emit("move",{speedX:e,speedY:t,speedZ:a}),x.on("move",function(e){n.movement(e)}),x.on("moveAll",function(e){console.log(e),0==n.state.speedX&&n.setState({score:e.move})})}},{key:"movement",value:function(e){var t="cuadrado ",a=Math.floor(e.score);a>=100?(t+="topHit ",this.bellResizing()):a>=80&&a<=99?t+="power80Hit ":a>=60&&a<=79?t+="power60Hit ":a>=40&&a<=59&&(t+="power40Hit "),this.setState(Object(h.a)({},this.state,{movement:t,score2:e}))}},{key:"bellResizing",value:function(){var e="bell ";e+="bellAnimation ",this.setState(Object(h.a)({},this.state,{bellResizing:e}))}},{key:"test",value:function(){var e=this;console.log(window.DeviceMotionEvent),window.DeviceMotionEvent?window.addEventListener("devicemotion",function(t){var a=e.state.speedX,n=e.state.speedY,c=e.state.speedZ;a<t.acceleration.x&&t.acceleration.x&&(a=t.acceleration.x,e.setState({speedX:a,speedY:n,speedZ:c}),a>20&&e.calcMove(a,n,c)),n<t.acceleration.y&&t.acceleration.y&&(n=t.acceleration.y,e.setState({speedX:a,speedY:n,speedZ:c}),n>20&&e.calcMove(a,n,c)),c<t.acceleration.z&&t.acceleration.z&&(c=t.acceleration.z,e.setState({speedX:a,speedY:n,speedZ:c}),c>20&&e.calcMove(a,n,c))},!1):console.log("correcto")}},{key:"handleClick",value:function(e){var t,a=this;t=function(e,t){console.log(t),t&&a.setState(Object(h.a)({},a.state,{a:!0}))},x.emit("clicked"),x.on("clicked",function(e){return t(null,e)})}},{key:"render",value:function(){return console.log(this.state),c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("div",{className:"objects"},c.a.createElement("img",{alt:"",className:"fair",src:"/img/juego-martillo.png"}),c.a.createElement("img",{alt:"",className:this.state.bellResizing,src:"/img/campana.png"}),c.a.createElement("img",{alt:"",className:this.state.movement,src:"/img/cuadrado.png"})),c.a.createElement("div",{className:"background"})))}}]),t}(n.Component),Y=(a(108),S()("".concat("http://192.168.20.138:5002")));var Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={speedX:0,speedY:0,speedZ:0,score:[],movement:"ball ",canastaPoint:"canasta "},a.test(),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"calcMove",value:function(e,t,a){var n=this;Y.emit("move",{speedX:e,speedY:t,speedZ:a}),Y.on("move",function(e){console.log(e),e.finish?(console.log(e.move),n.showPC(e)):n.movement(e)})}},{key:"showPC",value:function(e){0===this.state.speedX&&this.setState(Object(h.a)({},this.state,{score:e.move}))}},{key:"movement",value:function(e){var t="ball ",a=Math.floor(e.score);a>=100?(t+="ballNice ",this.canastaPoint()):a>=80&&a<=99?t+="power80Hit ":a>=60&&a<=79?t+="power60Hit ":a>=40&&a<=59&&(t+="power40Hit "),this.setState(Object(h.a)({},this.state,{movement:t}))}},{key:"canastaPoint",value:function(){this.setState(Object(h.a)({},this.state,{canastaPoint:"NaNcanastaPoint "}))}},{key:"test",value:function(){var e=this;window.DeviceMotionEvent?window.addEventListener("devicemotion",function(t){var a=e.state.speedX,n=e.state.speedY,c=e.state.speedZ;a<t.acceleration.x&&t.acceleration.x&&(a=t.acceleration.x,e.setState(Object(h.a)({},e.state,{speedX:a,speedY:n,speedZ:c})),a>20&&e.calcMove(a,n,c)),n<t.acceleration.y&&t.acceleration.y&&(n=t.acceleration.y,e.setState(Object(h.a)({},e.state,{speedX:a,speedY:n,speedZ:c})),n>20&&e.calcMove(a,n,c)),c<t.acceleration.z&&t.acceleration.z&&(c=t.acceleration.z,e.setState(Object(h.a)({},e.state,{speedX:a,speedY:n,speedZ:c})),c>20&&e.calcMove(a,n,c))},!1):console.log("correcto")}},{key:"handleClick",value:function(e){var t,a=this;t=function(e,t){console.log(t),t&&a.setState(Object(h.a)({},a.state,{a:!0}))},Y.emit("clicked"),Y.on("clicked",function(e){return t(null,e)})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("div",{className:"objects"},c.a.createElement("img",{alt:"",className:this.state.canastaPoint,src:"/img/basket/canasta.png"}),c.a.createElement("img",{alt:"",className:this.state.movement,src:"/img/basket/ball.png"}))),c.a.createElement("div",{className:"backgroundBasket"}),c.a.createElement("div",{id:"winner"}))}}]),t}(n.Component),z=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d.a,null,c.a.createElement(p.a,{exact:!0,path:"/",component:O}),c.a.createElement(p.a,{exact:!0,path:"/signup",component:w}),c.a.createElement(p.a,{exact:!0,path:"/home",component:k}),c.a.createElement(p.a,{exact:!0,path:"/feria",component:X}),c.a.createElement(p.a,{exact:!0,path:"/basket",component:N}),c.a.createElement(p.a,{exact:!0,path:"/pollas",component:Z})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(112);o.a.render(c.a.createElement(M.a,null,c.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){},52:function(e,t,a){e.exports=a(109)},57:function(e,t,a){},58:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.7e05fc2b.chunk.js.map