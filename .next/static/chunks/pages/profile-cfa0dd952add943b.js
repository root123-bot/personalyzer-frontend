(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6245:function(e,r,t){"use strict";function s(e){this.message=e}s.prototype=new Error,s.prototype.name="InvalidCharacterError";var n="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new s("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,i=0,l="";n=r.charAt(i++);~n&&(t=a%4?64*t+n:n,a++%4)?l+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return l};function a(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(n(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return n(r)}}function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidTokenError",r.Z=function(e,r){if("string"!=typeof e)throw new i("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(a(e.split(".")[t]))}catch(e){throw new i("Invalid token specified: "+e.message)}}},9344:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t(8812)}])},8812:function(e,r,t){"use strict";t.r(r);var s=t(4111),n=t(7568),a=t(1438),i=t(2951),l=t(4924),c=t(8029),o=t(5950),d=t(4051),p=t.n(d),u=t(5893),h=t(7294),m=t(8019),f=t(6245),g=t(9718),y=t.n(g),x=t(1163),j=t.n(x),v=t(8005),b=t(5150),_=t(3623),N=t(8286),w=t(5152),k=t.n(w)()((function(){return t.e(852).then(t.t.bind(t,1852,23))}),{loadableGenerated:{webpack:function(){return[1852]}},ssr:!1}),Z=function(e){(0,c.Z)(t,e);var r=(0,o.Z)(t);function t(e){var i;(0,a.Z)(this,t),i=r.call(this,e),(0,l.Z)((0,s.Z)(i),"state",{isAunthenticated:!1,cartproducts:[],user_id:null,net_price:0,net_quantity:0,profile:[],profile_pic:null,profile_file:null,username:"",password:"",oldPassword:"",errorMessage:""}),(0,l.Z)((0,s.Z)(i),"preview",(function(e){e.preventDefault();var r=e.target.files[0];if(r&&"image"===r.type.substr(0,5)){i.setState({profile_file:r});var t=new FileReader;t.onload=function(){i.setState({profile_pic:t.result}),console.log("This is the new image"),i.actualPreview.current.style.backgroundImage="url(".concat(t.result,")"),i.actualPreview.current.style.backgroundSize="100% 100%",i.actualPreview.current.style.backgroundRepeat="no-repeat"},t.readAsDataURL(r)}else i.setState({profile_pic:null})}));var c=(0,s.Z)(i);(0,l.Z)((0,s.Z)(i),"editPro",function(){var e=(0,n.Z)(p().mark((function e(r){var t,s,n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),console.log("Hey im in clicking the button..."),!((t=c.state.profile_file)||c.state.username.length>0)){e.next=18;break}return s=t,(n=new FormData).append("id",c.state.user_id),n.append("image",s),c.state.username.trim().length>1?n.append("name",c.state.username):n.append("name","431EFD#"),console.log("Thsi is upload data for you"),console.log(n),e.next=13,fetch("".concat(N.Z,"/api/edit/"),{method:"POST",body:n});case 13:return a=e.sent,e.next=16,a.json();case 16:e.sent,window.location.reload();case 18:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),(0,l.Z)((0,s.Z)(i),"paraO",(function(){i.para1.current.style.background="rgb(221, 221, 221)",i.para1.current.style.borderRight="1px solid grey",i.para2.current.style.background="none",i.para2.current.style.borderRight="none",i.para3.current.style.background="none",i.para3.current.style.borderRight="none",i.para4.current.style.background="none",i.para4.current.style.borderRight="none",i.profile.current.style.display="block",i.cartSummary.current.style.display="none",i.notification.current.style.display="none",i.password.current.style.display="none",i.editProfile.current.style.display="none",i.success.current.style.display="none",i.err.current.style.display="none"})),(0,l.Z)((0,s.Z)(i),"paraT",(function(){console.log("IM para2"),i.para2.current.style.background="rgb(221, 221, 221)",i.para2.current.style.borderRight="1px solid grey",i.para1.current.style.background="none",i.para1.current.style.borderRight="none",i.para3.current.style.background="none",i.para3.current.style.borderRight="none",i.para4.current.style.background="none",i.para4.current.style.borderRight="none",i.profile.current.style.display="none",i.cartSummary.current.style.display="block",i.notification.current.style.display="none",i.password.current.style.display="none",i.editProfile.current.style.display="none",i.success.current.style.display="none",i.err.current.style.display="none"})),(0,l.Z)((0,s.Z)(i),"paraTh",(function(){i.para3.current.style.background="rgb(221, 221, 221)",i.para3.current.style.borderRight="1px solid grey",i.para2.current.style.background="none",i.para2.current.style.borderRight="none",i.para1.current.style.background="none",i.para1.current.style.borderRight="none",i.para4.current.style.background="none",i.para4.current.style.borderRight="none",i.profile.current.style.display="none",i.cartSummary.current.style.display="none",i.notification.current.style.display="block",i.password.current.style.display="none",i.editProfile.current.style.display="none",i.success.current.style.display="none",i.err.current.style.display="none"})),(0,l.Z)((0,s.Z)(i),"paraF",(function(){i.para4.current.style.background="rgb(221, 221, 221)",i.para4.current.style.borderRight="1px solid grey",i.para2.current.style.background="none",i.para2.current.style.borderRight="none",i.para3.current.style.background="none",i.para3.current.style.borderRight="none",i.para1.current.style.background="none",i.para1.current.style.borderRight="none",i.profile.current.style.display="none",i.cartSummary.current.style.display="none",i.notification.current.style.display="none",i.password.current.style.display="block",i.editProfile.current.style.display="none",i.success.current.style.display="none",i.err.current.style.display="none"}));var o=(0,s.Z)(i);(0,l.Z)((0,s.Z)(i),"executingTokenLogics",(0,n.Z)(p().mark((function e(){var r,t,s,n,a,i,l,c,d,u,h,m,g,y,x,j,v,b,_,w,k,Z;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=localStorage.getItem("authTokens")?JSON.parse(localStorage.getItem("authTokens")):null){e.next=6;break}return console.log("You needed to login, no records"),o.setState({isAunthenticated:!1}),e.abrupt("return");case 6:if(t=(0,f.Z)(r.refresh),s=t.exp,console.log("Hey this is the expire date of the refreshToken"),console.log(s),console.log("Lets try to access the json access token"),console.log(r.access),n=(0,f.Z)(r.access),a=n.user_id,o.setState({user_id:a}),console.log("This is expiring time for you..."),console.log(n),i=n.exp,console.log(i),!(1e3*i-Date.now()<1)){e.next=31;break}if(console.log("Hey we need to either update or make user login again"),!(1e3*s-Date.now<1)){e.next=26;break}return console.log("Even ur refresh token has already been expired we need you to login again...."),o.setState({isAunthenticated:!1}),e.abrupt("return");case 26:console.log("Our refresh token is alive you should use it to update your access token"),o.updateToken(r.refresh),o.setState({isAunthenticated:!0,user_id:a}),e.next=32;break;case 31:o.setState({isAunthenticated:!0,user_id:a});case 32:return e.next=34,fetch("".concat(N.Z,"/api/cartproducts/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a})});case 34:return l=e.sent,e.next=37,l.json();case 37:if(!(c=e.sent).message){e.next=49;break}return e.next=41,fetch("".concat(N.Z,"/api/profile/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a})});case 41:return d=e.sent,e.next=44,d.json();case 44:return u=e.sent,o.setState({profile:u,profile_pic:u.profile_picture}),console.log("THIS IS THE PROFILE FOR YOU...."),console.log(u),e.abrupt("return");case 49:if(!(c.length<1)){e.next=60;break}return e.next=52,fetch("".concat(N.Z,"/api/profile/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a})});case 52:return h=e.sent,e.next=55,h.json();case 55:return m=e.sent,o.setState({profile:m,profile_pic:m.profile_picture}),console.log("THIS IS THE PROFILE FOR YOU...."),console.log(m),e.abrupt("return");case 60:for(g=0,y=0,x=!0,j=!1,v=void 0,e.prev=63,b=c[Symbol.iterator]();!(x=(_=b.next()).done);x=!0)w=_.value,g=w.quantity+g,y=w.subTotal+y;e.next=71;break;case 67:e.prev=67,e.t0=e.catch(63),j=!0,v=e.t0;case 71:e.prev=71,e.prev=72,x||null==b.return||b.return();case 74:if(e.prev=74,!j){e.next=77;break}throw v;case 77:return e.finish(74);case 78:return e.finish(71);case 79:return o.setState({cartproducts:c.reverse(),net_price:y,net_quantity:g}),e.next=82,fetch("".concat(N.Z,"/api/profile/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a})});case 82:return k=e.sent,e.next=85,k.json();case 85:Z=e.sent,o.setState({profile:Z,profile_pic:Z.profile_picture}),console.log("THIS IS THE PROFILE FOR YOU...."),console.log(Z),e.next=96;break;case 91:e.prev=91,e.t1=e.catch(0),console.log(e.t1.message),console.log("Invalid token specified since, when the token is expired the jwt automatically change your storage and it ill look like this"),o.setState({isAunthenticated:!1});case 96:case"end":return e.stop()}}),e,null,[[0,91],[63,67,71,79],[72,,74,78]])})))),(0,l.Z)((0,s.Z)(i),"edit",(function(){i.profile.current.style.display="none",i.cartSummary.current.style.display="none",i.notification.current.style.display="none",i.password.current.style.display="none",i.editProfile.current.style.display="block",i.updateUsername.current.value=i.state.profile.full_name}));var d=(0,s.Z)(i);return(0,l.Z)((0,s.Z)(i),"changePassword",function(){var e=(0,n.Z)(p().mark((function e(r){var t,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),0!==d.state.password.trim().length&&0!==d.state.oldPassword.trim().length){e.next=7;break}return d.setState({errorMessage:"We don't accept empty field"}),d.success.current.style.display="none",d.err.current.style.display="block",d.showError=setTimeout((function(){d.err.current.style.display="none"}),5e3),e.abrupt("return");case 7:if(!(d.state.password.trim().length>6&&d.state.oldPassword.trim().length>0)){e.next=19;break}return e.next=10,fetch("".concat(N.Z,"/api/change_password/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:d.state.user_id,password:d.state.password,old:d.state.oldPassword})});case 10:return t=e.sent,e.next=13,t.json();case 13:s=e.sent,console.log("This is the data from the server"),console.log(s),s.message?(d.success.current.style.display="block",d.err.current.style.display="none",d.showSuccess=setTimeout((function(){d.success.current.style.display="none"}),5e3),d.inp.current.value="",d.inpOld.current.value=""):(console.log("I thinks you passed wrong old password"),d.setState({errorMessage:"Password change request failed, use correct credentials"}),d.success.current.style.display="none",d.err.current.style.display="block",d.showError=setTimeout((function(){d.err.current.style.display="none"}),5e3)),e.next=20;break;case 19:console.log("Weak password"),d.setState({errorMessage:"Use strong password"}),d.success.current.style.display="none",d.err.current.style.display="block",d.showError=setTimeout((function(){d.err.current.style.display="none"}),5e3);case 20:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),(0,l.Z)((0,s.Z)(i),"updateToken",function(){var e=(0,n.Z)(p().mark((function e(r){var t,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N.Z,"/api/token/refresh/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:r})});case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,localStorage.setItem("authTokens",JSON.stringify(s));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),(0,l.Z)((0,s.Z)(i),"onLogout",(function(e){e.preventDefault(),localStorage.removeItem("authTokens"),j().push("/")})),i.para1=h.createRef(),i.para2=h.createRef(),i.para3=h.createRef(),i.para4=h.createRef(),i.profile=h.createRef(),i.cartSummary=h.createRef(),i.notification=h.createRef(),i.password=h.createRef(),i.editProfile=h.createRef(),i.actualPreview=h.createRef(),i.success=h.createRef(),i.err=h.createRef(),i.inp=h.createRef(),i.inpOld=h.createRef(),i.updateUsername=h.createRef(),i}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){var e=this;return(0,n.Z)(p().mark((function r(){return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.executingTokenLogics(),e.executingTokenLogicsInterval=setInterval((function(){return e.executingTokenLogics()}),12e5);case 2:case"end":return r.stop()}}),r)})))()}},{key:"componentWillUnmount",value:function(){clearInterval(this.executingTokenLogics),clearTimeout(this.success),clearTimeout(this.showError)}},{key:"render",value:function(){var e=this;return(0,u.jsx)(m.Z,{isAunthenticated:this.state.isAunthenticated,children:(0,u.jsx)(k,{minWidth:900,children:this.state.isAunthenticated?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{style:{marginTop:"10%",fontWeight:"bold",color:"blue",textDecoration:"underline",cursor:"pointer"},onClick:this.onLogout,children:"logout"}),(0,u.jsx)("div",{className:y().pro,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(v.Z.Column,{width:6,children:(0,u.jsxs)("div",{className:y().col1,children:[(0,u.jsxs)("p",{className:y().para1,ref:this.para1,onClick:this.paraO,children:[(0,u.jsx)(b.Z,{size:"large",name:"user circle"}),"Profile"]}),(0,u.jsxs)("p",{className:y().para,ref:this.para2,onClick:this.paraT,children:[(0,u.jsx)(b.Z,{size:"large",name:"shopping cart"}),"My Cart"]}),(0,u.jsxs)("p",{className:y().para,ref:this.para3,onClick:this.paraTh,children:[(0,u.jsx)(b.Z,{size:"large",name:"bell"}),"Notifications"]}),(0,u.jsxs)("p",{className:y().para4,ref:this.para4,onClick:this.paraF,children:[(0,u.jsx)(b.Z,{size:"large",name:"lock"}),"Change Password"]})]})}),(0,u.jsx)(v.Z.Column,{width:10,children:(0,u.jsxs)("div",{className:y().col2,children:[(0,u.jsxs)("div",{className:y().profile,ref:this.profile,children:[(0,u.jsx)(k,{maxWidth:1e3,children:(0,u.jsx)("img",{className:y().wrapperImage,src:"".concat(N.Z).concat(this.state.profile_pic),width:180,height:180})}),(0,u.jsx)(k,{minWidth:1001,children:(0,u.jsx)("img",{className:y().wrapperImage,src:"".concat(N.Z).concat(this.state.profile_pic),width:200,height:200})}),(0,u.jsx)(k,{minWidth:900,maxWidth:991,children:(0,u.jsxs)("div",{className:y().pos,children:[(0,u.jsxs)("div",{className:y().nameWrapper,children:[(0,u.jsx)("span",{className:y().actualname1}),(0,u.jsx)("span",{className:y().actualValue,children:this.state.profile.full_name}),(0,u.jsx)("hr",{className:y().nl})]}),(0,u.jsx)("div",{className:y().emailWrapper,children:(0,u.jsxs)("span",{className:y().mail,children:[(0,u.jsx)("span",{className:y().mvalue,children:"email: "}),(0,u.jsx)("span",{className:y().mname,children:this.state.profile.get_email})]})}),(0,u.jsx)("div",{className:y().catWrapper,children:(0,u.jsxs)("span",{className:y().mail,children:[(0,u.jsxs)("span",{className:y().mvalue,children:["category:"," "]}),(0,u.jsx)("span",{className:y().mname,children:"customer"})]})}),(0,u.jsx)("div",{className:y().orderWrapper}),(0,u.jsx)("div",{className:y().chName,children:(0,u.jsx)("span",{className:y().changeName,onClick:this.edit,children:"Edit profile"})})]})}),(0,u.jsx)(k,{minWidth:992,maxWidth:1200,children:(0,u.jsxs)("div",{className:y().pos,style:{left:"40%"},children:[(0,u.jsxs)("div",{className:y().nameWrapper,children:[(0,u.jsx)("span",{className:y().actualname1}),(0,u.jsx)("span",{className:y().actualValue,children:this.state.profile.full_name}),(0,u.jsx)("hr",{className:y().nl})]}),(0,u.jsx)("div",{className:y().emailWrapper,children:(0,u.jsxs)("span",{className:y().mail,children:[(0,u.jsx)("span",{className:y().mvalue,children:"email: "}),(0,u.jsx)("span",{className:y().mname,children:this.state.profile.get_email})]})}),(0,u.jsx)("div",{className:y().catWrapper,children:(0,u.jsxs)("span",{className:y().mail,children:[(0,u.jsxs)("span",{className:y().mvalue,children:["category:"," "]}),(0,u.jsx)("span",{className:y().mname,children:"customer"})]})}),(0,u.jsx)("div",{className:y().orderWrapper}),(0,u.jsx)("div",{className:y().chName,children:(0,u.jsx)("span",{className:y().changeName,onClick:this.edit,children:"Edit profile"})})]})}),(0,u.jsx)(k,{minWidth:1201,children:(0,u.jsxs)("div",{className:y().pos,style:{left:"33%"},children:[(0,u.jsxs)("div",{className:y().nameWrapper,children:[(0,u.jsx)("span",{className:y().actualname1}),(0,u.jsx)("span",{className:y().actualValue,children:this.state.profile.full_name}),(0,u.jsx)("hr",{className:y().nl})]}),(0,u.jsx)("div",{className:y().emailWrapper,children:(0,u.jsxs)("span",{className:y().mail,children:[(0,u.jsx)("span",{className:y().mvalue,children:"email: "}),(0,u.jsx)("span",{className:y().mname,children:this.state.profile.get_email})]})}),(0,u.jsx)("div",{className:y().catWrapper,children:(0,u.jsxs)("span",{className:y().mail,children:[(0,u.jsxs)("span",{className:y().mvalue,children:["category:"," "]}),(0,u.jsx)("span",{className:y().mname,children:"customer"})]})}),(0,u.jsx)("div",{className:y().orderWrapper}),(0,u.jsx)("div",{className:y().chName,children:(0,u.jsx)("span",{className:y().changeName,onClick:this.edit,children:"Edit profile"})})]})})]}),(0,u.jsx)("div",{className:y().cartSum,ref:this.cartSummary,children:this.state.cartproducts.length>0?(0,u.jsxs)("div",{children:[(0,u.jsxs)(_.Z,{as:"h2",color:"grey",children:[(0,u.jsx)(b.Z,{name:"tags",size:"tiny"}),(0,u.jsx)(_.Z.Content,{children:"Cart summary."})]}),(0,u.jsx)("hr",{className:y().hl}),(0,u.jsxs)("div",{className:y().itemsWrapper,children:[(0,u.jsxs)("div",{className:y().cs,children:[(0,u.jsx)("span",{className:y().tit,children:"Number of items:"}),(0,u.jsx)("span",{className:this.state.nq,children:this.state.net_quantity})]}),(0,u.jsxs)("div",{className:y().cs1,children:[(0,u.jsx)("span",{className:y().tit1,children:"Total Price:"}),(0,u.jsx)("span",{className:this.state.np,children:"".concat(new Intl.NumberFormat("en-US",{style:"currency",currency:"Tsh",minimumFractionDigits:0}).format(this.state.net_price),"/=")})]})]})]}):(0,u.jsxs)("div",{children:[(0,u.jsxs)(_.Z,{as:"h2",color:"grey",children:[(0,u.jsx)(b.Z,{name:"tags",size:"tiny"}),(0,u.jsx)(_.Z.Content,{children:"Cart summary."})]}),(0,u.jsx)("hr",{className:y().hl}),(0,u.jsx)("div",{className:y().itemsWrapper,children:(0,u.jsx)(_.Z,{as:"h4",color:"grey",children:(0,u.jsx)(_.Z.Content,{children:"Your cart appear to be empty, add some products in your cart."})})})]})}),(0,u.jsxs)("div",{className:y().notiWrapper,ref:this.notification,children:[(0,u.jsxs)(_.Z,{as:"h2",color:"grey",children:[(0,u.jsx)(b.Z,{name:"tags",size:"tiny"}),(0,u.jsx)(_.Z.Content,{children:"Notification center"})]}),(0,u.jsx)("hr",{className:y().hl}),(0,u.jsx)("div",{className:y().itemsWrapper,children:(0,u.jsxs)(_.Z,{as:"h4",color:"grey",children:[(0,u.jsx)(b.Z,{name:"bars"}),(0,u.jsx)(_.Z.Content,{children:"Currenly you have no any notification."})]})})]}),(0,u.jsxs)("div",{className:y().passWrapper,ref:this.password,children:[(0,u.jsxs)(_.Z,{as:"h2",color:"grey",children:[(0,u.jsx)(b.Z,{name:"tags",size:"tiny"}),(0,u.jsx)(_.Z.Content,{children:"Change password."})]}),(0,u.jsx)("hr",{className:y().hl}),(0,u.jsxs)("form",{className:y().passForm,children:[(0,u.jsx)("label",{className:y().lab,children:"Old password"}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{className:y().inp,type:"password",ref:this.inpOld,onChange:function(r){return e.setState({oldPassword:r.target.value})}}),(0,u.jsx)("br",{}),(0,u.jsx)("label",{className:y().lab1,children:"New password"}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{className:y().inp,type:"password",ref:this.inp,onChange:function(r){return e.setState({password:r.target.value})}})," ",(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:y().success,ref:this.success,children:[(0,u.jsx)("img",{src:"../static/images/check-mark.png",width:12}),(0,u.jsx)("span",{className:y().neno,children:"Password changes successful"})]}),(0,u.jsxs)("div",{className:y().error,ref:this.err,children:[(0,u.jsx)("img",{src:"../static/images/warning.png",width:12}),(0,u.jsx)("span",{className:y().neno1,children:this.state.errorMessage})]}),(0,u.jsx)("button",{className:y().btn,type:"submit",onClick:this.changePassword,children:"Submit"})]})]}),(0,u.jsxs)("div",{className:y().editProfile,ref:this.editProfile,children:[(0,u.jsxs)(_.Z,{as:"h2",color:"grey",children:[(0,u.jsx)(b.Z,{name:"edit outline",size:"tiny"}),(0,u.jsx)(_.Z.Content,{children:"Edit Profile"})]}),(0,u.jsx)("hr",{className:y().hl}),(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(v.Z.Column,{width:8,children:(0,u.jsxs)("div",{className:y().ediProfileWrapper,children:[(0,u.jsx)("label",{className:y().jina,children:"USERNAME:"}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{ref:this.updateUsername,className:y().jinaInp,onChange:function(r){return e.setState({username:r.target.value})}})]})}),(0,u.jsx)(v.Z.Column,{width:8,children:(0,u.jsxs)("div",{className:y().ediProfileWrapper,children:[(0,u.jsx)("label",{className:y().jina,children:"CHANGE AVATAR:"}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{accept:"images/*",id:"upload",className:y().upload,type:"file",onChange:this.preview}),(0,u.jsx)("label",{ref:this.actualPreview,htmlFor:"upload",className:y().chan,style:{backgroundImage:"".concat(N.Z).concat(this.state.profile.profile_picture,")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"},children:(0,u.jsx)("img",{src:"../static/images/imag.png",width:25,height:25})})]})}),(0,u.jsx)("button",{type:"submit",className:y().sub,onClick:this.editPro,children:"Save"})]})]})]})})]})})]}):(0,u.jsxs)("div",{style:{paddingTop:"15%"},children:[(0,u.jsx)(k,{maxWidth:899,children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",overflowX:"hidden"},children:(0,u.jsx)("img",{src:"../static/images/demon.gif",width:200,height:200})}),(0,u.jsx)("div",{children:(0,u.jsxs)("p",{style:{textAlign:"center",fontWeight:"bold",color:"grey",fontSize:"110%"},children:[(0,u.jsxs)(k,{maxWidth:450,children:["We don't accept anonymous user to view profile. Login/Register here"," "]}),(0,u.jsxs)(k,{minWidth:451,children:["We don't accept anonymous user to view profile.",(0,u.jsx)("br",{})," Login/Register here"," "]}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{style:{marginTop:"1%",fontWeight:"bold"},className:"btn btn-warning",onClick:function(){return j().push("/jisajili")},children:"Register"}),(0,u.jsx)("button",{style:{marginLeft:"5%",marginTop:"1%",fontWeight:"bold"},className:"btn btn-info",onClick:function(){return j().push("/login")},children:"Login"})]})})]})}),(0,u.jsx)(k,{minWidth:900,maxWidth:1199,children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",overflowX:"hidden"},children:(0,u.jsx)("img",{src:"../static/images/demon.gif",width:200,height:200})}),(0,u.jsx)("div",{children:(0,u.jsxs)("p",{style:{textAlign:"center",fontWeight:"bold",color:"grey",fontSize:"120%"},children:["We don't accept anonymous user to view profile. ",(0,u.jsx)("br",{})," ","Login/Register here ",(0,u.jsx)("br",{}),(0,u.jsx)("button",{style:{marginTop:"1%",fontWeight:"bold"},className:"btn btn-info",onClick:function(){return j().push("/register")},children:"Sign in"})]})})]})}),(0,u.jsx)(k,{minWidth:1200,children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",overflowX:"hidden"},children:(0,u.jsx)("img",{src:"../static/images/demon.gif",width:300,height:300})}),(0,u.jsx)("div",{children:(0,u.jsxs)("p",{style:{textAlign:"center",fontWeight:"bold",color:"grey",fontSize:"130%"},children:["We don't accept anonymous user to view profile. ",(0,u.jsx)("br",{})," ","Login/Register here ",(0,u.jsx)("br",{}),(0,u.jsx)("button",{style:{marginTop:"1%",fontWeight:"bold"},className:"btn btn-info",onClick:function(){return j().push("/register")},children:"Sign in"})]})})]})})]})})})}}]),t}(h.Component);r.default=Z},9718:function(e){e.exports={pro:"profile_pro__mtng2",col1:"profile_col1__8pOtM",para:"profile_para__LRcrF",para1:"profile_para1__oChnI",para4:"profile_para4__XuRFX",wrapperImage:"profile_wrapperImage__rutHt",pos:"profile_pos__cwZHJ",nameWrapper:"profile_nameWrapper__Y0FY7",actualname:"profile_actualname__yGsKp",actualValue:"profile_actualValue__R7Vuq",emailWrapper:"profile_emailWrapper__YJkvs",mail:"profile_mail__x3Juw",mvalue:"profile_mvalue__xxFTG",nl:"profile_nl__q06dM",hl:"profile_hl__OaRHt",cartSum:"profile_cartSum__3WNqy",itemsWrapper:"profile_itemsWrapper__lfdv0",cs:"profile_cs__XcdIS",tit:"profile_tit__zcpJC",tit1:"profile_tit1__mBB47",cs1:"profile_cs1__ve5qL",notiWrapper:"profile_notiWrapper__rWH00",passWrapper:"profile_passWrapper__eojXJ",lab:"profile_lab__x0IKZ",lab1:"profile_lab1__6BLt4",passForm:"profile_passForm__BvMC5",inp:"profile_inp__V5sU7",chName:"profile_chName__mrIQ0",changeName:"profile_changeName__9u0u_",changeName1:"profile_changeName1__gaXjw",btn:"profile_btn__b_1Rh",editProfile:"profile_editProfile__uy7Kj",jina:"profile_jina__lcNkM",jinaInp:"profile_jinaInp__ZRCCd",upload:"profile_upload__TGEM2",chan:"profile_chan__7B66c",sub:"profile_sub__HKbOX",success:"profile_success__ix1v1",neno:"profile_neno__R0WZi",error:"profile_error__mV_im",neno1:"profile_neno1__uTdS2",profile:"profile_profile__mAzum"}},8005:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var s=t(7462),n=t(6010),a=t(7294),i=t(8459),l=t(8935),c=t(2519),o=t(9591);function d(e){var r=e.children,t=e.className,o=e.computer,p=e.color,u=e.floated,h=e.largeScreen,m=e.mobile,f=e.only,g=e.stretched,y=e.tablet,x=e.textAlign,j=e.verticalAlign,v=e.widescreen,b=e.width,_=(0,n.Z)(p,(0,i.lG)(g,"stretched"),(0,i.MR)(f,"only"),(0,i.X4)(x),(0,i.cD)(u,"floated"),(0,i.Ok)(j),(0,i.H0)(o,"wide computer"),(0,i.H0)(h,"wide large screen"),(0,i.H0)(m,"wide mobile"),(0,i.H0)(y,"wide tablet"),(0,i.H0)(v,"wide widescreen"),(0,i.H0)(b,"wide"),"column",t),N=(0,l.Z)(d,e),w=(0,c.Z)(d,e);return a.createElement(w,(0,s.Z)({},N,{className:_}),r)}d.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],d.propTypes={},d.create=(0,o.u5)(d,(function(e){return{children:e}}));var p=d;function u(e){var r=e.centered,t=e.children,o=e.className,d=e.color,p=e.columns,h=e.divided,m=e.only,f=e.reversed,g=e.stretched,y=e.textAlign,x=e.verticalAlign,j=(0,n.Z)(d,(0,i.lG)(r,"centered"),(0,i.lG)(h,"divided"),(0,i.lG)(g,"stretched"),(0,i.MR)(m,"only"),(0,i.MR)(f,"reversed"),(0,i.X4)(y),(0,i.Ok)(x),(0,i.H0)(p,"column",!0),"row",o),v=(0,l.Z)(u,e),b=(0,c.Z)(u,e);return a.createElement(b,(0,s.Z)({},v,{className:j}),t)}u.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],u.propTypes={};var h=u;function m(e){var r=e.celled,t=e.centered,o=e.children,d=e.className,p=e.columns,u=e.container,h=e.divided,f=e.doubling,g=e.inverted,y=e.padded,x=e.relaxed,j=e.reversed,v=e.stackable,b=e.stretched,_=e.textAlign,N=e.verticalAlign,w=(0,n.Z)("ui",(0,i.lG)(t,"centered"),(0,i.lG)(u,"container"),(0,i.lG)(f,"doubling"),(0,i.lG)(g,"inverted"),(0,i.lG)(v,"stackable"),(0,i.lG)(b,"stretched"),(0,i.sU)(r,"celled"),(0,i.sU)(h,"divided"),(0,i.sU)(y,"padded"),(0,i.sU)(x,"relaxed"),(0,i.MR)(j,"reversed"),(0,i.X4)(_),(0,i.Ok)(N),(0,i.H0)(p,"column",!0),"grid",d),k=(0,l.Z)(m,e),Z=(0,c.Z)(m,e);return a.createElement(Z,(0,s.Z)({},k,{className:w}),o)}m.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],m.Column=p,m.Row=h,m.propTypes={};var f=m},3623:function(e,r,t){"use strict";t.d(r,{Z:function(){return x}});var s=t(7462),n=t(6010),a=t(7294),i=t(8459),l=t(8935),c=t(2519),o=t(2248),d=t(5150),p=t(650),u=t(9591);function h(e){var r=e.children,t=e.className,i=e.content,d=(0,n.Z)("sub header",t),p=(0,l.Z)(h,e),u=(0,c.Z)(h,e);return a.createElement(u,(0,s.Z)({},p,{className:d}),o.kK(r)?i:r)}h.handledProps=["as","children","className","content"],h.propTypes={},h.create=(0,u.u5)(h,(function(e){return{content:e}}));var m=h;function f(e){var r=e.children,t=e.className,i=e.content,d=(0,n.Z)("content",t),p=(0,l.Z)(f,e),u=(0,c.Z)(f,e);return a.createElement(u,(0,s.Z)({},p,{className:d}),o.kK(r)?i:r)}f.handledProps=["as","children","className","content"],f.propTypes={};var g=f;function y(e){var r=e.attached,t=e.block,u=e.children,h=e.className,f=e.color,x=e.content,j=e.disabled,v=e.dividing,b=e.floated,_=e.icon,N=e.image,w=e.inverted,k=e.size,Z=e.sub,S=e.subheader,T=e.textAlign,C=(0,n.Z)("ui",f,k,(0,i.lG)(t,"block"),(0,i.lG)(j,"disabled"),(0,i.lG)(v,"dividing"),(0,i.cD)(b,"floated"),(0,i.lG)(!0===_,"icon"),(0,i.lG)(!0===N,"image"),(0,i.lG)(w,"inverted"),(0,i.lG)(Z,"sub"),(0,i.sU)(r,"attached"),(0,i.X4)(T),"header",h),R=(0,l.Z)(y,e),W=(0,c.Z)(y,e);if(!o.kK(u))return a.createElement(W,(0,s.Z)({},R,{className:C}),u);var P=d.Z.create(_,{autoGenerateKey:!1}),O=p.Z.create(N,{autoGenerateKey:!1}),I=m.create(S,{autoGenerateKey:!1});return P||O?a.createElement(W,(0,s.Z)({},R,{className:C}),P||O,(x||I)&&a.createElement(g,null,x,I)):a.createElement(W,(0,s.Z)({},R,{className:C}),x,I)}y.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],y.propTypes={},y.Content=g,y.Subheader=m;var x=y}},function(e){e.O(0,[643,967,18,129,19,774,888,179],(function(){return r=9344,e(e.s=r);var r}));var r=e.O();_N_E=r}]);