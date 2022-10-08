(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 8232:
/***/ ((module) => {

// Exports
module.exports = {
	"father": "register_father__9Sa5p",
	"spt": "register_spt__93hvx",
	"hr": "register_hr__fIMue",
	"cont": "register_cont__hh89I",
	"cont2": "register_cont2__MeQWT",
	"loginError": "register_loginError__nCs1L",
	"fp": "register_fp__4VdDS"
};


/***/ }),

/***/ 72:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8019);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_css_register_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8232);
/* harmony import */ var _static_css_register_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_css_register_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6215);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);






// import { Router } from "next/router";


// Hii register page if the user want to visit it it should check if the user has been logged in if he's loged in then
// you should redirect him to the profile like what genius do... So for user to visit this register page we should make
// sure he is not-logged
class Register extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        isAunthenticated: false,
        username: "",
        password: "",
        email: "",
        nywila: "",
        message: "",
        message1: "",
        message3: "",
        loading: false
    };
    constructor(props){
        super(props);
        this.errorContainer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.errorContainer1 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.loginError = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    }
    executingTokenLogics = ()=>{
        try {
            const tokens = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null;
            if (!tokens) {
                console.log("You needed to login, no records");
                this.setState({
                    isAunthenticated: false
                });
                return;
            }
            const decodedRefreshToken = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(tokens.refresh);
            const expireRefreshTime = decodedRefreshToken.exp;
            console.log("Hey this is the expire date of the refreshToken");
            console.log(expireRefreshTime);
            console.log("Lets try to access the json access token");
            console.log(tokens.access);
            const decodedAccessData = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(tokens.access);
            console.log("This is expiring time for you...");
            console.log(decodedAccessData);
            const expireAccessTime = decodedAccessData.exp;
            console.log(expireAccessTime);
            const diff = expireAccessTime * 1000 - Date.now();
            if (diff < 1) {
                console.log("Hey we need to either update or make user login again");
                if (expireRefreshTime * 1000 - Date.now < 1) {
                    console.log("Even ur refresh token has already been expired we need you to login again....");
                    this.setState({
                        isAunthenticated: false
                    });
                    return;
                }
                console.log("Our refresh token is alive you should use it to update your access token");
                this.updateToken(tokens.refresh);
                this.setState({
                    isAunthenticated: true
                });
                _routes__WEBPACK_IMPORTED_MODULE_5__.Router.push({
                    pathname: "/profile"
                });
            } else {
                this.setState({
                    isAunthenticated: true
                });
                _routes__WEBPACK_IMPORTED_MODULE_5__.Router.push({
                    pathname: "/profile"
                });
            }
        } catch (InvalidTokenError) {
            console.log(InvalidTokenError.message);
            console.log("Invalid token specified since, when the token is expired the jwt automatically change your storage and it ill look like this");
            this.setState({
                isAunthenticated: false
            });
        }
    };
    static async getInitialProps(props) {
        const { flag  } = props.query;
        return {
            flag
        };
    }
    updateToken = async (refreshToken)=>{
        let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                refresh: refreshToken
            })
        });
        let data = await response.json();
        localStorage.setItem("authTokens", JSON.stringify(data));
    };
    componentDidMount() {
        this.executingTokenLogics();
    }
    componentWillUnmount() {
        clearTimeout(this.errorTimeout);
        clearTimeout(this.errorShow);
        clearTimeout(this.errorShow2);
    }
    onRegister = (e)=>{
        this.setState({
            loading: true
        });
        console.log("these are username and passwords");
        console.log(this.state.password, this.state.username);
        e.preventDefault();
        if (this.state.username.trim().length === 0 || this.state.password.trim().length === 0) {
            this.setState({
                message: "We don't accept empty field"
            });
            this.errorContainer.current.style.display = "block";
            this.errorShow = setTimeout(()=>{
                this.errorContainer.current.style.display = "none";
            }, 5000);
            this.setState({
                loading: false
            });
            return;
        }
        if (this.state.password.trim().length < 6) {
            this.setState({
                message: "Shorter password less than 6 characters"
            });
            this.errorContainer.current.style.display = "block";
            this.errorShow = setTimeout(()=>{
                this.errorContainer.current.style.display = "none";
            }, 5000);
            this.setState({
                loading: false
            });
            return;
        }
        if (!this.state.username.trim().includes("@")) {
            this.setState({
                message: "Wrong format of email"
            });
            this.errorContainer.current.style.display = "block";
            this.errorShow = setTimeout(()=>{
                this.errorContainer.current.style.display = "none";
            }, 5000);
            this.setState({
                loading: false
            });
            return;
        }
        fetch("http://localhost:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        }).then((response)=>response.json()).then((json)=>{
            if (json.err) {
                this.setState({
                    message: "Failed!, the user of this email already exist"
                });
                this.errorContainer.current.style.display = "block";
                this.timeout1 = setTimeout(()=>{
                    this.errorContainer.current.style.display = "none";
                }, 5000);
                this.setState({
                    loading: false
                });
                return;
            } else if (json.error) {
                this.setState({
                    message: "Failed!, Invalid data"
                });
                this.errorContainer.current.style.display = "block";
                this.timeout1 = setTimeout(()=>{
                    this.errorContainer.current.style.display = "none";
                }, 5000);
                this.setState({
                    loading: false
                });
                return;
            }
            console.log("Everything is good bro...");
            // don't forget to set loading false at the end
            this.setState({
                message1: "Everything is good"
            });
            this.errorContainer1.current.style.display = "block";
            this.timeout2 = setTimeout(async ()=>{
                console.log("we should login this user");
                let weLive = await fetch("http://127.0.0.1:8000/api/token/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: this.state.username,
                        password: this.state.password
                    })
                });
                let gza = await weLive.json();
                if (weLive.status !== 200) {
                    return console.log("Error to login this user, status code of 200 is returned");
                }
                localStorage.setItem("authTokens", JSON.stringify(gza));
                this.errorContainer1.current.style.display = "none";
                this.setState({
                    loading: false
                });
                // By this we should redirect the user either in the 'mycart' if its
                // passed when user trying to visit my cart when he is not authenticated
                // otherwise we should redirect to the home/index page....
                if (this.props.flag) {
                    _routes__WEBPACK_IMPORTED_MODULE_5__.Router.push({
                        pathname: this.props.flag
                    });
                } else {
                    _routes__WEBPACK_IMPORTED_MODULE_5__.Router.push("/");
                }
            });
        });
    };
    onLogin = async (e)=>{
        e.preventDefault();
        if (this.state.email.trim().length === 0 || this.state.nywila.trim().length === 0) {
            this.setState({
                message3: "We don't accept empty field"
            });
            this.loginError.current.style.display = "block";
            this.errorShow2 = setTimeout(()=>{
                this.loginError.current.style.display = "none";
            }, 5000);
            this.setState({
                loading: false
            });
            return;
        }
        console.log(this.state.email, this.state.nywila);
        // sasa hapa ni ishu ya
        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.nywila
            })
        });
        let data = await response.json();
        console.log("data: ", data);
        // kama itakataa ku-login hapa kwenye data instead ya kutuletea accessToken and RefreshToken itatupa error
        // kama hii Object { detail: "No active account found with the given credentials" }, ukiona hivi ujue user
        // kaweka credentials za uongo sawa...
        // if(data.detail)
        if (response.status !== 200) {
            console.log("Bad credentials");
            this.setState({
                message3: "Unable to login, Bad credentials!"
            });
            this.loginError.current.style.display = "block";
            this.errorTimeout = setTimeout(()=>{
                this.loginError.current.style.display = "none";
            }, 5000);
            return;
        }
        console.log("everything is good, you have good credentials...");
        // here we needed to store the token we've got from the server in our local storage...
        // we can get the user_id, the id of login user and if you want you can return any field of the
        // user model back like 'email' by overriding some class of that api... But in my case I didn't
        // override to add some customization so in my case here I have the 'user_id' field offered
        // after decrypting the 'accessToken' we have... So in this case let's decrypt it and access the
        // user_id..
        console.log("this is the id of the user");
        const user = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(data.access);
        console.log("This is decoded jwd token....");
        console.log(user);
        console.log(user.user_id);
        localStorage.setItem("authTokens", JSON.stringify(data));
        // after that push this to the homepage where by default we should have the
        // normal detection if the username is loged in or not....
        if (this.props.flag) {
            _routes__WEBPACK_IMPORTED_MODULE_5__.Router.push({
                pathname: this.props.flag
            });
        } else {
            _routes__WEBPACK_IMPORTED_MODULE_5__.Router.push("/");
        }
    };
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_static_css_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().father),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
                            width: 10,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Header, {
                                        as: "h2",
                                        children: "You dont have Account? Create one for you."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                                widths: "equal",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
                                                        fluid: true,
                                                        label: "Email",
                                                        onChange: (event)=>this.setState({
                                                                username: event.target.value
                                                            })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
                                                        fluid: true,
                                                        label: "Password",
                                                        type: "password",
                                                        onChange: (event)=>this.setState({
                                                                password: event.target.value
                                                            })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                loading: this.state.loading,
                                                type: "submit",
                                                content: "Register",
                                                fluid: true,
                                                primary: true,
                                                onClick: this.onRegister
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_static_css_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().cont),
                                        ref: this.errorContainer,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
                                            error: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message.Header, {
                                                    children: "Error, unable create account!"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                    name: "warning sign"
                                                }),
                                                this.state.message
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_static_css_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().cont2),
                                        ref: this.errorContainer1,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
                                            success: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message.Header, {
                                                    children: "Account created successful"
                                                }),
                                                this.state.message1
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
                            width: 6,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_static_css_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().spt),
                                        children: [
                                            "Already have account",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                name: "question"
                                            }),
                                            " Login here"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        onChange: (event)=>this.setState({
                                                                email: event.target.value
                                                            })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Password"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "password",
                                                        onChange: (event)=>this.setState({
                                                                nywila: event.target.value
                                                            })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_static_css_register_module_css__WEBPACK_IMPORTED_MODULE_6___default().fp),
                                                onClick: ()=>_routes__WEBPACK_IMPORTED_MODULE_5__.Router.push("/reset"),
                                                children: "Forgot password?"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                animated: "vertical",
                                                fluid: true,
                                                color: "teal",
                                                onClick: this.onLogin,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {
                                                        visible: true,
                                                        children: "Login"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button.Content, {
                                                        hidden: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                            name: "arrow right"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: this.loginError,
                                        style: {
                                            display: "none",
                                            marginTop: "1%"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
                                            error: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message.Header, {
                                                    children: "Unauthorized "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                    name: "warning sign"
                                                }),
                                                this.state.message3
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);


/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 662:
/***/ ((module) => {

"use strict";
module.exports = require("next-routes");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4225:
/***/ ((module) => {

"use strict";
module.exports = require("react-media");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1831:
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,159,675,226,19], () => (__webpack_exec__(72)));
module.exports = __webpack_exports__;

})();