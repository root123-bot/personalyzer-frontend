(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(4984)}])},4984:function(e,s,t){"use strict";t.r(s);var r=t(4111),n=t(7568),a=t(1438),i=t(2951),o=t(4924),c=t(8029),l=t(5950),u=t(4051),p=t.n(u),d=t(5893),h=t(7294),m=t(9008),f=t.n(m),g=t(7805),x=t.n(g),v=t(8156),j=t(5150),b=t(8286),Z=t(5152),y=t.n(Z),N=t(1163),_=t.n(N),w=y()((function(){return t.e(852).then(t.t.bind(t,1852,23))}),{loadableGenerated:{webpack:function(){return[1852]}},ssr:!1}),k=function(e){(0,c.Z)(t,e);var s=(0,l.Z)(t);function t(e){var i;(0,a.Z)(this,t),i=s.call(this,e),(0,o.Z)((0,r.Z)(i),"state",{username:"",password:"",message:""});var c=(0,r.Z)(i);return(0,o.Z)((0,r.Z)(i),"signIn",function(){var e=(0,n.Z)(p().mark((function e(s){var t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),console.log("HEy im clicked.."),console.log(c.props.flag),0!==c.state.username.trim().length&&0!==c.state.password.trim().length){e.next=10;break}return c.setState({message:"We don't accept empty field"}),c.errorContainer.current.style.display="block",c.errorShow=setTimeout((function(){c.errorContainer.current.style.display="none"}),5e3),c.user.current.value="",c.pass.current.value="",e.abrupt("return");case 10:return e.next=12,fetch("".concat(b.Z,"/api/token/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.state.username,password:c.state.password})});case 12:return t=e.sent,e.next=15,t.json();case 15:if(r=e.sent,console.log("data",r),200===t.status){e.next=25;break}return c.setState({message:"Invalid Credentials"}),c.errorContainer.current.style.display="block",c.erro=setTimeout((function(){c.errorContainer.current.style.display="none"}),5e3),c.user.current.value="",c.pass.current.value="",c.setState({username:"",password:""}),e.abrupt("return");case 25:console.log("Everything is good now"),localStorage.setItem("authTokens",JSON.stringify(r)),c.props.flag?_().push({pathname:c.props.flag,query:{product:c.props.productId}}):(console.log("redirect to index page..."),_().push({pathname:"/"}));case 28:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),(0,o.Z)((0,r.Z)(i),"register",(function(){i.props.flag?_().push({pathname:"/jisajili",query:{flag:i.props.flag,productId:i.props.productId}}):_().push("jisajili")})),i.errorContainer=h.createRef(),i.pass=h.createRef(),i.user=h.createRef(),i.successContainer=h.createRef(),i}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.flag,this.props.productId),this.props.success?this.successContainer.current&&(this.successContainer.current.style.display="block",this.successTimeout=setTimeout((function(){e.successContainer.current.style.display="none"}),7e3)):console.log("Not defined..")}},{key:"componentWillUnmount",value:function(){clearTimeout(this.errorShow),clearTimeout(this.erro),clearTimeout(this.successTimeout)}},{key:"render",value:function(){var e=this;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(w,{minWidth:200,maxWidth:400,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"PERSONALYZER"}),(0,d.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),(0,d.jsx)("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,d.jsxs)("div",{className:x().outer,children:[(0,d.jsx)("p",{className:x().hed,children:"Fill credentials to login."}),(0,d.jsx)("hr",{}),(0,d.jsx)("div",{className:x().divForm,children:(0,d.jsxs)("form",{onSubmit:this.signIn,autoComplete:"off",children:[(0,d.jsx)("p",{className:x().reg,onClick:this.register,children:"Don't have account? Register"}),(0,d.jsx)("label",{className:x().lab,children:"email"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:x().inp,type:"text",ref:this.user,onChange:function(s){return e.setState({username:s.target.value})}}),(0,d.jsx)("br",{}),(0,d.jsx)("label",{className:x().lab1,children:"password"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:x().inp,type:"password",ref:this.pass,onChange:function(s){return e.setState({password:s.target.value})}}),(0,d.jsx)("br",{}),(0,d.jsx)("p",{className:x().forg,onClick:function(){return _().push("/reset")},children:"Forgot password?"}),(0,d.jsx)("div",{className:x().error,ref:this.errorContainer,children:(0,d.jsx)(v.Z,{error:!0,size:"mini",children:(0,d.jsxs)(v.Z.Header,{children:[(0,d.jsx)(j.Z,{name:"warning"}),this.state.message]})})}),(0,d.jsx)("button",{type:"submit",className:x().sub,children:"Login Here"})]})})]})]})}),(0,d.jsx)(w,{minWidth:401,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"PERSONALYZER"}),(0,d.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),(0,d.jsx)("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,d.jsxs)("div",{className:x().outer,children:[(0,d.jsx)("p",{className:x().hed,children:"Fill credentials to login."}),(0,d.jsx)("hr",{}),(0,d.jsx)("div",{className:x().divForm,children:(0,d.jsxs)("form",{onSubmit:this.signIn,autoComplete:"off",children:[(0,d.jsx)("p",{className:x().reg,onClick:this.register,children:"Don't have account? Register"}),(0,d.jsx)("label",{className:x().lab,children:"email"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:x().inp,type:"text",ref:this.user,onChange:function(s){return e.setState({username:s.target.value})}}),(0,d.jsx)("br",{}),(0,d.jsx)("label",{className:x().lab1,children:"password"}),(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:x().inp,type:"password",ref:this.pass,onChange:function(s){return e.setState({password:s.target.value})}}),(0,d.jsx)("br",{}),(0,d.jsx)("p",{className:x().forg,onClick:function(){return _().push("/reset")},children:"Forgot password?"}),(0,d.jsx)("div",{className:x().error,ref:this.errorContainer,children:(0,d.jsx)(v.Z,{error:!0,size:"mini",children:(0,d.jsxs)(v.Z.Header,{children:[(0,d.jsx)(j.Z,{name:"warning"}),this.state.message]})})}),(0,d.jsx)("button",{type:"submit",className:x().sub,children:"Login Here"})]})})]})]})})]})}}],[{key:"getInitialProps",value:function(e){return(0,n.Z)(p().mark((function s(){var t,r,n,a;return p().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.query,r=t.flag,n=t.productId,a=t.success,s.abrupt("return",{flag:r,productId:n,success:a});case 2:case"end":return s.stop()}}),s)})))()}}]),t}(h.Component);s.default=k},8286:function(e,s){"use strict";s.Z="https://web-production-0b93.up.railway.app"},7805:function(e){e.exports={success:"login_success__o5O6m",outer:"login_outer__hIox_",hed:"login_hed__1z9Af",divForm:"login_divForm__aPj7z",lab:"login_lab__bdQAV",lab1:"login_lab1__9FN_u",reg:"login_reg__nlAsc",inp:"login_inp__2T_1A",forg:"login_forg__55Jtq",sub:"login_sub__uWPi1",error:"login_error__z7xCM"}},8156:function(e,s,t){"use strict";t.d(s,{Z:function(){return N}});var r=t(7462),n=t(5068),a=t(7601),i=t(6010),o=t(7294),c=t(8459),l=t(8935),u=t(2519),p=t(2248),d=t(9591),h=t(5150);function m(e){var s=e.children,t=e.className,n=e.content,a=(0,i.Z)("content",t),c=(0,l.Z)(m,e),d=(0,u.Z)(m,e);return o.createElement(d,(0,r.Z)({},c,{className:a}),p.kK(s)?n:s)}m.handledProps=["as","children","className","content"],m.propTypes={};var f=m;function g(e){var s=e.children,t=e.className,n=e.content,a=(0,i.Z)("header",t),c=(0,l.Z)(g,e),d=(0,u.Z)(g,e);return o.createElement(d,(0,r.Z)({},c,{className:a}),p.kK(s)?n:s)}g.handledProps=["as","children","className","content"],g.propTypes={},g.create=(0,d.u5)(g,(function(e){return{content:e}}));var x=g,v=t(3871);function j(e){var s=e.children,t=e.className,n=e.content,a=(0,i.Z)("content",t),c=(0,l.Z)(j,e),d=(0,u.Z)(j,e);return o.createElement(d,(0,r.Z)({},c,{className:a}),p.kK(s)?n:s)}j.handledProps=["as","children","className","content"],j.propTypes={},j.defaultProps={as:"li"},j.create=(0,d.u5)(j,(function(e){return{content:e}}));var b=j;function Z(e){var s=e.children,t=e.className,n=e.items,a=(0,i.Z)("list",t),c=(0,l.Z)(Z,e),d=(0,u.Z)(Z,e);return o.createElement(d,(0,r.Z)({},c,{className:a}),p.kK(s)?(0,v.Z)(n,b.create):s)}Z.handledProps=["as","children","className","items"],Z.propTypes={},Z.defaultProps={as:"ul"},Z.create=(0,d.u5)(Z,(function(e){return{items:e}}));var y=Z,N=function(e){function s(){for(var s,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(s=e.call.apply(e,[this].concat(r))||this).handleDismiss=function(e){var t=s.props.onDismiss;t&&t(e,s.props)},s}return(0,n.Z)(s,e),s.prototype.render=function(){var e=this.props,t=e.attached,n=e.children,m=e.className,g=e.color,v=e.compact,j=e.content,b=e.error,Z=e.floating,N=e.header,_=e.hidden,w=e.icon,k=e.info,C=e.list,T=e.negative,E=e.onDismiss,S=e.positive,G=e.size,P=e.success,I=e.visible,R=e.warning,F=(0,i.Z)("ui",g,G,(0,c.lG)(v,"compact"),(0,c.lG)(b,"error"),(0,c.lG)(Z,"floating"),(0,c.lG)(_,"hidden"),(0,c.lG)(w,"icon"),(0,c.lG)(k,"info"),(0,c.lG)(T,"negative"),(0,c.lG)(S,"positive"),(0,c.lG)(P,"success"),(0,c.lG)(I,"visible"),(0,c.lG)(R,"warning"),(0,c.sU)(t,"attached"),"message",m),O=E&&o.createElement(h.Z,{name:"close",onClick:this.handleDismiss}),D=(0,l.Z)(s,this.props),K=(0,u.Z)(s,this.props);return p.kK(n)?o.createElement(K,(0,r.Z)({},D,{className:F}),O,h.Z.create(w,{autoGenerateKey:!1}),(!(0,a.Z)(N)||!(0,a.Z)(j)||!(0,a.Z)(C))&&o.createElement(f,null,x.create(N,{autoGenerateKey:!1}),y.create(C,{autoGenerateKey:!1}),(0,d.BU)(j,{autoGenerateKey:!1}))):o.createElement(K,(0,r.Z)({},D,{className:F}),O,n)},s}(o.Component);N.handledProps=["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"],N.propTypes={},N.Content=f,N.Header=x,N.List=y,N.Item=b},3871:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var r=t(4073),n=t(2456),a=t(820),i=t(585);var o=function(e,s){var t=-1,r=(0,i.Z)(e)?Array(e.length):[];return(0,a.Z)(e,(function(e,n,a){r[++t]=s(e,n,a)})),r},c=t(7771);var l=function(e,s){return((0,c.Z)(e)?r.Z:o)(e,(0,n.Z)(s,3))}}},function(e){e.O(0,[643,774,888,179],(function(){return s=6429,e(e.s=s);var s}));var s=e.O();_N_E=s}]);