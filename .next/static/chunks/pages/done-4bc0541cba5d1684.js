(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{6245:function(e,t,i){"use strict";function s(e){this.message=e}s.prototype=new Error,s.prototype.name="InvalidCharacterError";var n="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new s("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,n,r=0,d=0,o="";n=t.charAt(d++);~n&&(i=r%4?64*i+n:n,r++%4)?o+=String.fromCharCode(255&i>>(-2*r&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return o};function r(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(n(e).replace(/(.)/g,(function(e,t){var i=t.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i})))}(t)}catch(e){return n(t)}}function d(e){this.message=e}d.prototype=new Error,d.prototype.name="InvalidTokenError",t.Z=function(e,t){if("string"!=typeof e)throw new d("Invalid token specified");var i=!0===(t=t||{}).header?0:1;try{return JSON.parse(r(e.split(".")[i]))}catch(e){throw new d("Invalid token specified: "+e.message)}}},188:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/done",function(){return i(7143)}])},7143:function(e,t,i){"use strict";i.r(t);var s=i(4111),n=i(7568),r=i(1438),d=i(2951),o=i(4924),l=i(8029),a=i(5950),c=i(4051),h=i.n(c),p=i(5893),x=i(7294),g=i(4443),u=i(6245),j=i(5152),m=i.n(j),b=i(1163),v=i.n(b),y=i(167),f=i.n(y),T=i(8286),I=m()((function(){return i.e(852).then(i.t.bind(i,1852,23))}),{loadableGenerated:{webpack:function(){return[1852]}},ssr:!1}),W=function(e){(0,l.Z)(i,e);var t=(0,a.Z)(i);function i(e){var d;return(0,r.Z)(this,i),d=t.call(this,e),(0,o.Z)((0,s.Z)(d),"state",{isAunthenticatd:!1,user_id:null}),(0,o.Z)((0,s.Z)(d),"executingTokenLogics",(function(){try{var e=localStorage.getItem("authTokens")?JSON.parse(localStorage.getItem("authTokens")):null;if(!e)return console.log("You needed to login, no records"),void d.setState({isAunthenticated:!1});var t=(0,u.Z)(e.refresh).exp;console.log("Hey this is the expire date of the refreshToken"),console.log(t),console.log("Lets try to access the json access token"),console.log(e.access);var i=(0,u.Z)(e.access),s=i.user_id;d.setState({user_id:s}),console.log("This is expiring time for you..."),console.log(i);var n=i.exp;if(console.log(n),1e3*n-Date.now()<1){if(console.log("Hey we need to either update or make user login again"),1e3*t-Date.now<1)return console.log("Even ur refresh token has already been expired we need you to login again...."),void d.setState({isAunthenticated:!1});console.log("Our refresh token is alive you should use it to update your access token"),d.updateToken(e.refresh),d.setState({isAunthenticated:!0,user_id:s})}else d.setState({isAunthenticated:!0,user_id:s})}catch(r){console.log(r.message),console.log("Invalid token specified since, when the token is expired the jwt automatically change your storage and it ill look like this"),d.setState({isAunthenticated:!1})}})),(0,o.Z)((0,s.Z)(d),"updateToken",function(){var e=(0,n.Z)(h().mark((function e(t){var i,s;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T.Z,"/api/token/refresh/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:t})});case 2:return i=e.sent,e.next=5,i.json();case 5:s=e.sent,localStorage.setItem("authTokens",JSON.stringify(s));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d}return(0,d.Z)(i,[{key:"componentDidMount",value:function(){this.executingTokenLogics()}},{key:"render",value:function(){return(0,p.jsx)(g.Z,{isAunthenticated:this.state.isAunthenticatd,children:(0,p.jsx)("div",{children:(0,p.jsx)(p.Fragment,{children:this.props.isValid?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(I,{maxWidth:500,children:(0,p.jsxs)("div",{style:{paddingTop:"15%",width:"75%",marginLeft:"auto",marginRight:"auto"},children:[(0,p.jsxs)("p",{style:{fontWeight:"bold",color:"grey",textAlign:"center",fontSize:"130%"},children:["!Your order has been created successful!",(0,p.jsx)("hr",{})]}),(0,p.jsx)("p",{style:{textAlign:"left",color:"red",paddingBottom:"0%",marginBottom:"0%",fontSize:"100%",fontWeight:"bold"},children:"Muhimu soma!(In swahili)"}),(0,p.jsxs)("p",{style:{paddingTop:"0%",marginTop:"0%",fontWeight:"bold",color:"grey"},children:["***Data hizi( za hapo chini"," ",(0,p.jsx)("span",{style:{color:"black"},children:(0,p.jsx)("i",{children:"order id"})})," ","na"," ",(0,p.jsx)("span",{style:{color:"black"},children:(0,p.jsx)("i",{children:"transaction number"})}),") zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo wako, unaweza ukazipiga picha au ukaziandika pembeni. Wasiliana nasi kwa maelezo zaidi.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{style:{background:"#edeceb"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{paddingTop:"2%",marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold",color:"black"},children:"Order id:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validUniqueId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(15)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validUniqueId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(20)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validUniqueId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(25)]}):(0,p.jsx)(p.Fragment,{})})]})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold",color:"black"},children:"Transaction number:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validTransactionId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(15)]}):(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validTransactionId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(20)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validTransactionId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(25)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})})]})]}),(0,p.jsx)("hr",{})]})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{textAlign:"left",color:"red",paddingBottom:"0%",marginBottom:"0%",fontSize:"100%",fontWeight:"bold"},children:"Read this(In English)"}),(0,p.jsx)("p",{style:{fontWeight:"bold",color:"grey"},children:"*** Keep these data with you they will be used to verify if its you who ordered the product, Don't lose these data until you receive your product."}),(0,p.jsxs)("div",{style:{background:"#edeceb"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{paddingTop:"2%",marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold"},children:"Order id:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validUniqueId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(15)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validUniqueId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(20)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validUniqueId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(25)]}):(0,p.jsx)(p.Fragment,{})})]})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold"},children:"Transaction number:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validTransactionId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(15)]}):(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validTransactionId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(20)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validTransactionId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(25)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})})]})]}),(0,p.jsx)("hr",{})]})]})]})}),(0,p.jsx)(I,{minWidth:501,maxWidth:800,children:(0,p.jsxs)("div",{style:{paddingTop:"11%",width:"70%",marginLeft:"auto",marginRight:"auto"},children:[(0,p.jsxs)("p",{style:{fontWeight:"bold",color:"grey",textAlign:"center",fontSize:"130%"},children:["!Your order has been created successful!",(0,p.jsx)("hr",{})]}),(0,p.jsx)("p",{style:{textAlign:"left",color:"red",paddingBottom:"0%",marginBottom:"0%",fontSize:"100%",fontWeight:"bold"},children:"Muhimu soma!(In swahili)"}),(0,p.jsxs)("p",{style:{paddingTop:"0%",marginTop:"0%",fontWeight:"bold",color:"grey"},children:["***Data hizi( za hapo chini"," ",(0,p.jsx)("span",{style:{color:"black"},children:(0,p.jsx)("i",{children:"order id"})})," ","na"," ",(0,p.jsx)("span",{style:{color:"black"},children:(0,p.jsx)("i",{children:"transaction number"})}),") zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo wako, unaweza ukazipiga picha au ukaziandika pembeni. Wasiliana nasi kwa maelezo zaidi.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{style:{background:"#edeceb"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{paddingTop:"2%",marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold",color:"black"},children:"Order id:"}),(0,p.jsx)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%",textAlign:"center"},children:this.props.validUniqueId})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold",color:"black"},children:"Transaction number:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validTransactionId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(15)]}):(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validTransactionId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(20)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validTransactionId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(25)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})})]})]}),(0,p.jsx)("hr",{})]})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{textAlign:"left",color:"red",paddingBottom:"0%",marginBottom:"0%",fontSize:"100%",fontWeight:"bold"},children:"Read this(In English)"}),(0,p.jsx)("p",{style:{fontWeight:"bold",color:"grey"},children:"*** Keep these data with you they will be used to verify if its you who ordered the product, Don't lose these data until you receive your product."}),(0,p.jsxs)("div",{style:{background:"#edeceb"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{paddingTop:"2%",marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold"},children:"Order id:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validUniqueId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(15)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validUniqueId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(20)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validUniqueId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(25)]}):(0,p.jsx)(p.Fragment,{})})]})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold"},children:"Transaction number:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validTransactionId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(15)]}):(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validTransactionId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(20)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validTransactionId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(25)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})})]})]}),(0,p.jsx)("hr",{})]})]})]})}),(0,p.jsx)(I,{minWidth:801,maxWidth:1200,children:(0,p.jsxs)("div",{style:{paddingTop:"9%",width:"70%",marginLeft:"auto",marginRight:"auto"},children:[(0,p.jsxs)("p",{style:{fontWeight:"bold",color:"grey",textAlign:"center",fontSize:"130%"},children:["!Your order has been created successful!",(0,p.jsx)("hr",{})]}),(0,p.jsx)("p",{style:{textAlign:"left",color:"red",paddingBottom:"0%",marginBottom:"0%",fontSize:"100%",fontWeight:"bold"},children:"Muhimu soma!(In swahili)"}),(0,p.jsxs)("p",{style:{paddingTop:"0%",marginTop:"0%",fontWeight:"bold",color:"grey"},children:["***Data hizi( za hapo chini"," ",(0,p.jsx)("span",{style:{color:"black"},children:(0,p.jsx)("i",{children:"order id"})})," ","na"," ",(0,p.jsx)("span",{style:{color:"black"},children:(0,p.jsx)("i",{children:"transaction number"})}),") zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo wako, unaweza ukazipiga picha au ukaziandika pembeni. Wasiliana nasi kwa maelezo zaidi.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{style:{background:"#edeceb"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{paddingTop:"2%",marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold",color:"black"},children:"Order id:"}),(0,p.jsx)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%",textAlign:"center"},children:this.props.validUniqueId})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold",color:"black"},children:"Transaction number:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validTransactionId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(15)]}):(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validTransactionId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(20)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validTransactionId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(25)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})})]})]}),(0,p.jsx)("hr",{})]})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{textAlign:"left",color:"red",paddingBottom:"0%",marginBottom:"0%",fontSize:"100%",fontWeight:"bold"},children:"Read this(In English)"}),(0,p.jsx)("p",{style:{fontWeight:"bold",color:"grey"},children:"*** Keep these data with you they will be used to verify if its you who ordered the product, Don't lose these data until you receive your product."}),(0,p.jsxs)("div",{style:{background:"#edeceb"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{paddingTop:"2%",marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold"},children:"Order id:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validUniqueId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(15)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validUniqueId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(20)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validUniqueId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(25)]}):(0,p.jsx)(p.Fragment,{})})]})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold"},children:"Transaction number:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validTransactionId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(15)]}):(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validTransactionId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(20)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validTransactionId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(25)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})})]})]}),(0,p.jsx)("hr",{})]})]})]})}),(0,p.jsx)(I,{minWidth:1201,children:(0,p.jsxs)("div",{style:{paddingTop:"4%",width:"60%",marginLeft:"auto",marginRight:"auto"},children:[(0,p.jsxs)("p",{style:{fontWeight:"bold",color:"grey",textAlign:"center",fontSize:"130%"},children:["!Your order has been created successful!",(0,p.jsx)("hr",{})]}),(0,p.jsx)("p",{style:{textAlign:"left",color:"red",paddingBottom:"0%",marginBottom:"0%",fontSize:"100%",fontWeight:"bold"},children:"Muhimu soma!(In swahili)"}),(0,p.jsxs)("p",{style:{paddingTop:"0%",marginTop:"0%",fontWeight:"bold",color:"grey"},children:["***Data hizi( za hapo chini"," ",(0,p.jsx)("span",{style:{color:"black"},children:(0,p.jsx)("i",{children:"order id"})})," ","na"," ",(0,p.jsx)("span",{style:{color:"black"},children:(0,p.jsx)("i",{children:"transaction number"})}),") zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo wako, unaweza ukazipiga picha au ukaziandika pembeni. Wasiliana nasi kwa maelezo zaidi.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{style:{background:"#edeceb"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{paddingTop:"2%",marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold",color:"black"},children:"Order id:"}),(0,p.jsx)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%",textAlign:"center"},children:this.props.validUniqueId})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold",color:"black"},children:"Transaction number:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validTransactionId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(15)]}):(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validTransactionId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(20)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validTransactionId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(25)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})})]})]}),(0,p.jsx)("hr",{})]})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{textAlign:"left",color:"red",paddingBottom:"0%",marginBottom:"0%",fontSize:"100%",fontWeight:"bold"},children:"Read this(In English)"}),(0,p.jsx)("p",{style:{fontWeight:"bold",color:"grey"},children:"*** Keep these data with you they will be used to verify if its you who ordered the product, Don't lose these data until you receive your product."}),(0,p.jsxs)("div",{style:{background:"#edeceb"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{paddingTop:"2%",marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold"},children:"Order id:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validUniqueId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(15)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validUniqueId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(20)]}):(0,p.jsx)(p.Fragment,{})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validUniqueId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validUniqueId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validUniqueId.substr(25)]}):(0,p.jsx)(p.Fragment,{})})]})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{style:{marginBottom:"0%",paddingBottom:"0%",textAlign:"center",fontWeight:"bold"},children:"Transaction number:"}),(0,p.jsxs)("p",{style:{marginTop:"0%",paddingTop:"0%",color:"grey",fontWeight:"bold",fontSize:"120%"},children:[(0,p.jsx)(I,{maxWidth:350,children:this.props.validTransactionId.length>15?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,15)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(15)]}):(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})}),(0,p.jsx)(I,{minWidth:351,maxWidth:400,children:this.props.validTransactionId.length>20?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,20)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(20)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})}),(0,p.jsx)(I,{minWidth:401,children:this.props.validTransactionId.length>25?(0,p.jsxs)("p",{style:{textAlign:"center"},children:[this.props.validTransactionId.substr(0,25)," ",(0,p.jsx)("br",{}),this.props.validTransactionId.substr(25)]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("p",{style:{textAlign:"center"},children:this.props.validTransactionId})})})]})]}),(0,p.jsx)("hr",{})]})]})]})})]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:f().conte,children:[(0,p.jsx)(I,{maxWidth:899,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",overflowX:"hidden"},children:(0,p.jsx)("img",{src:"../static/images/notHere.gif",width:200,height:200})}),(0,p.jsx)("div",{children:(0,p.jsxs)("p",{style:{textAlign:"center",fontWeight:"bold",color:"grey",fontSize:"110%"},children:["Oops! 404 Error, Page is not found..",(0,p.jsx)("br",{}),(0,p.jsx)("button",{className:"btn btn-info",style:{marginTop:"2%",fontWeight:"bold"},onClick:function(){return v().push("/")},children:"Back home"})]})})]})}),(0,p.jsx)(I,{minWidth:900,maxWidth:1199,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",overflowX:"hidden"},children:(0,p.jsx)("img",{src:"../static/images/notHere.gif",width:200,height:200})}),(0,p.jsx)("div",{children:(0,p.jsxs)("p",{style:{textAlign:"center",fontWeight:"bold",color:"grey",fontSize:"120%"},children:["Oops! 404 Error, Page is not found..",(0,p.jsx)("br",{}),(0,p.jsxs)("button",{className:"btn btn-info",style:{marginTop:"2%",fontWeight:"bold"},onClick:function(){return v().push("/")},children:[" ","Back home"]})]})})]})}),(0,p.jsx)(I,{minWidth:1200,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",overflowX:"hidden"},children:(0,p.jsx)("img",{src:"../static/images/notHere.gif",width:300,height:300})}),(0,p.jsx)("div",{children:(0,p.jsxs)("p",{style:{textAlign:"center",fontWeight:"bold",color:"grey",fontSize:"130%"},children:["Oops! 404 Error, Page is not found..",(0,p.jsx)("br",{}),(0,p.jsx)("button",{className:"btn btn-info",style:{marginTop:"2%",fontWeight:"bold"},onClick:function(){return v().push("/")},children:"Back home"})]})})]})})]})})})})})}}],[{key:"getInitialProps",value:function(e){return(0,n.Z)(h().mark((function t(){var i,s,n,r,d,o,l,a,c,p,x,g,u;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.query.unique_id,t.next=3,fetch("".concat(T.Z,"/api/placed_orders/"));case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,console.log("This are all orders found "),console.log(n),r=!1,d=null,o=null,l=null,a=!0,c=!1,p=void 0,t.prev=14,x=n[Symbol.iterator]();case 16:if(a=(g=x.next()).done){t.next=27;break}if((u=g.value).uniqueOrderId!==i){t.next=24;break}return d=u.uniqueOrderId,o=u.mobile,l=u.orderId,r=!0,t.abrupt("break",27);case 24:a=!0,t.next=16;break;case 27:t.next=33;break;case 29:t.prev=29,t.t0=t.catch(14),c=!0,p=t.t0;case 33:t.prev=33,t.prev=34,a||null==x.return||x.return();case 36:if(t.prev=36,!c){t.next=39;break}throw p;case 39:return t.finish(36);case 40:return t.finish(33);case 41:return console.log("This is result for you to view on server"),console.log(d,o,l,r),console.log("This is what order returned if it found or not"),console.log(r),t.abrupt("return",{validPhoneNumber:o,validTransactionId:l,validUniqueId:d,isValid:r});case 46:case"end":return t.stop()}}),t,null,[[14,29,33,41],[34,,36,40]])})))()}}]),i}(x.Component);t.default=W},167:function(e){e.exports={conte:"done_conte__P_X72"}},8005:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var s=i(7462),n=i(6010),r=i(7294),d=i(8459),o=i(8935),l=i(2519),a=i(9591);function c(e){var t=e.children,i=e.className,a=e.computer,h=e.color,p=e.floated,x=e.largeScreen,g=e.mobile,u=e.only,j=e.stretched,m=e.tablet,b=e.textAlign,v=e.verticalAlign,y=e.widescreen,f=e.width,T=(0,n.Z)(h,(0,d.lG)(j,"stretched"),(0,d.MR)(u,"only"),(0,d.X4)(b),(0,d.cD)(p,"floated"),(0,d.Ok)(v),(0,d.H0)(a,"wide computer"),(0,d.H0)(x,"wide large screen"),(0,d.H0)(g,"wide mobile"),(0,d.H0)(m,"wide tablet"),(0,d.H0)(y,"wide widescreen"),(0,d.H0)(f,"wide"),"column",i),I=(0,o.Z)(c,e),W=(0,l.Z)(c,e);return r.createElement(W,(0,s.Z)({},I,{className:T}),t)}c.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],c.propTypes={},c.create=(0,a.u5)(c,(function(e){return{children:e}}));var h=c;function p(e){var t=e.centered,i=e.children,a=e.className,c=e.color,h=e.columns,x=e.divided,g=e.only,u=e.reversed,j=e.stretched,m=e.textAlign,b=e.verticalAlign,v=(0,n.Z)(c,(0,d.lG)(t,"centered"),(0,d.lG)(x,"divided"),(0,d.lG)(j,"stretched"),(0,d.MR)(g,"only"),(0,d.MR)(u,"reversed"),(0,d.X4)(m),(0,d.Ok)(b),(0,d.H0)(h,"column",!0),"row",a),y=(0,o.Z)(p,e),f=(0,l.Z)(p,e);return r.createElement(f,(0,s.Z)({},y,{className:v}),i)}p.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],p.propTypes={};var x=p;function g(e){var t=e.celled,i=e.centered,a=e.children,c=e.className,h=e.columns,p=e.container,x=e.divided,u=e.doubling,j=e.inverted,m=e.padded,b=e.relaxed,v=e.reversed,y=e.stackable,f=e.stretched,T=e.textAlign,I=e.verticalAlign,W=(0,n.Z)("ui",(0,d.lG)(i,"centered"),(0,d.lG)(p,"container"),(0,d.lG)(u,"doubling"),(0,d.lG)(j,"inverted"),(0,d.lG)(y,"stackable"),(0,d.lG)(f,"stretched"),(0,d.sU)(t,"celled"),(0,d.sU)(x,"divided"),(0,d.sU)(m,"padded"),(0,d.sU)(b,"relaxed"),(0,d.MR)(v,"reversed"),(0,d.X4)(T),(0,d.Ok)(I),(0,d.H0)(h,"column",!0),"grid",c),k=(0,o.Z)(g,e),A=(0,l.Z)(g,e);return r.createElement(A,(0,s.Z)({},k,{className:W}),a)}g.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],g.Column=h,g.Row=x,g.propTypes={};var u=g}},function(e){e.O(0,[643,967,18,443,774,888,179],(function(){return t=188,e(e.s=t);var t}));var t=e.O();_N_E=t}]);