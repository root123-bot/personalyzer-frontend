(() => {
var exports = {};
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 8957:
/***/ ((module) => {

// Exports
module.exports = {
	"succe": "jisajili_succe__TEpC_",
	"success": "jisajili_success__qXNn_",
	"outer": "jisajili_outer__jZpOT",
	"hed": "jisajili_hed__TSd1F",
	"divForm": "jisajili_divForm__7l6AO",
	"lab": "jisajili_lab__aX1HC",
	"lab1": "jisajili_lab1__5jMaJ",
	"reg": "jisajili_reg__NymXS",
	"inp": "jisajili_inp__0_Ru4",
	"forg": "jisajili_forg__Nqbl2",
	"sub": "jisajili_sub___2XSf",
	"error": "jisajili_error__Zihip"
};


/***/ }),

/***/ 5271:
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8957);
/* harmony import */ var _static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8286);








const MediaQuery = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "jisajili.js -> " + "react-responsive"
        ]
    },
    ssr: false
});
class Jisajili extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        username: "",
        password: "",
        message: ""
    };
    constructor(props){
        super(props);
        this.errorContainer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.pass = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.user = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.successContainer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    }
    static async getInitialProps(props) {
        const { flag , productId  } = props.query;
        return {
            flag,
            productId
        };
    }
    register = async (e)=>{
        e.preventDefault();
        console.log("THEY EXECUTE ME..");
        if (this.state.username.trim().length === 0 || this.state.password.trim().length === 0) {
            this.setState({
                message: "We don't accept empty field"
            });
            this.errorContainer.current.style.display = "block";
            this.errorShow = setTimeout(()=>{
                this.errorContainer.current.style.display = "none";
            }, 5000);
            this.user.current.value = "";
            this.pass.current.value = "";
            this.setState({
                username: "",
                password: ""
            });
            return;
        }
        if (this.state.password.trim().length < 6) {
            this.setState({
                message: "Shorter password, minimum is 6 characters"
            });
            this.errorContainer.current.style.display = "block";
            this.errorShow = setTimeout(()=>{
                this.errorContainer.current.style.display = "none";
            }, 5000);
            this.user.current.value = "";
            this.pass.current.value = "";
            this.setState({
                username: "",
                password: ""
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
            this.user.current.value = "";
            this.pass.current.value = "";
            this.setState({
                username: "",
                password: ""
            });
            return;
        }
        // ishu iliyopo ni kwamba hii method inakuwa haijamaliza ila code za chini zinakuwa exected...
        // ko naona ni lazima tutumie await hapa tujaribu but mwanzo ilikataa...
        fetch(`${_utils_domain__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z}/api/register/`, {
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
                console.log(json.err);
                this.setState({
                    message: "Failed!, user of this email already exist"
                });
                this.errorContainer.current.style.display = "block";
                this.errorShow = setTimeout(()=>{
                    this.errorContainer.current.style.display = "none";
                }, 5000);
                this.user.current.value = "";
                this.pass.current.value = "";
                this.setState({
                    username: "",
                    password: ""
                });
                return;
            } else if (json.error) {
                this.setState({
                    message: "Failed!, Invalid data"
                });
                this.errorContainer.current.style.display = "block";
                this.errorShow = setTimeout(()=>{
                    this.errorContainer.current.style.display = "none";
                }, 5000);
                this.user.current.value = "";
                this.pass.current.value = "";
                this.setState({
                    username: "",
                    password: ""
                });
                return;
            }
            console.log("IF YOU ARE LIVING IN THE WORLD TODAY YOU WILL HEAR THE SLANG THAT WU TANG SAY...");
            console.log("User has been created succesful...");
            // Then you're account has been created successful... You should send
            // the success url to login page as message... as flag='success'
            // this success .. when login get the message of 'flag='success' then it
            // should detect that user has been created account successful and it should
            // display that message..=
            // Router.push({ pathname: "/login", query: { success: "created" } });
            // Nakushauri kama huyu mtu asha-create account then embu m-redirect
            // kama kikuu kwenye page husika.. There is no need to login ndo kitu unachotakiwa ufanye
            // so vilevile hii inakuwa na flag... Ya-kudetect kuwa hii imetoka wapi..
            // this process remember is inside .then in else condition and you should know that
            // if we put this outside this then statement like normal code it will be executed
            // even if the process of promise for writing the user is not executed.. so you should
            // need to wrap this inside here to avoid the process of access/login the user when the user
            // creation process is still not finished for this what you will get is an error indicating that
            // user is not exist na kitu hichi ndo kilichokuwa kinanipata... Koz ni sahihi hii block ilikuwa
            // outside then promise code block.. That's why me getting an error at that time but now i know what
            // happened... Vilevile ulikuwa unashangaa mbona kwenye block of then on creation of user I set if
            // error like user already exist when returned to halt full function by return; and instead of halting
            // you see it goes outside the block and execute the codes of retrieving/login the user .. this is
            // because the process of user creation is async so its not finished when you access the
            // created user and this cause you to get an error...
            this.successContainer.current.style.display = "block";
            this.loginTimeout = setTimeout(async ()=>{
                // WE should login this user
                console.log("WE SHOULD LOGIN THIS USER");
                console.log(this.state.username, this.state.password);
                let weLive = await fetch(`${_utils_domain__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z}/api/token/`, {
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
                // Japo hii status nategemea itaenda poa tu...
                console.log("gza", gza);
                if (weLive.status !== 200) {
                    return console.log("Error in login... Bad creditials");
                }
                localStorage.setItem("authTokens", JSON.stringify(gza));
                this.successContainer.current.style.display = "none";
                if (this.props.flag) {
                    next_router__WEBPACK_IMPORTED_MODULE_5___default().push({
                        pathname: this.props.flag,
                        query: {
                            product: this.props.productId
                        }
                    });
                } else {
                    next_router__WEBPACK_IMPORTED_MODULE_5___default().push({
                        pathname: "/"
                    });
                }
            }, 50);
        });
    };
    login = ()=>{
        if (this.props.flag) {
            next_router__WEBPACK_IMPORTED_MODULE_5___default().push({
                pathname: "/login",
                query: {
                    flag: this.props.flag,
                    productId: this.props.productId
                }
            });
        } else {
            next_router__WEBPACK_IMPORTED_MODULE_5___default().push("login");
        }
    };
    componentWillUnmount() {
        clearTimeout(this.errorShow);
        clearTimeout(this.loginTimeout);
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                    minWidth: 200,
                    maxWidth: 400,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                        children: "PERSONALYZER"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                        rel: "stylesheet",
                                        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                                        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                                        crossorigin: "anonymous"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                        rel: "stylesheet",
                                        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1.0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().outer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().hed),
                                        children: "Create account to get started."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().divForm),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            onSubmit: this.register,
                                            autoComplete: "off",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().reg),
                                                    onClick: this.login,
                                                    children: "Already have account? Login"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().lab),
                                                    children: "email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().inp),
                                                    type: "text",
                                                    ref: this.user,
                                                    onChange: (e)=>this.setState({
                                                            username: e.target.value
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().lab1),
                                                    children: "password"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().inp),
                                                    type: "password",
                                                    ref: this.pass,
                                                    onChange: (e)=>this.setState({
                                                            password: e.target.value
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().error),
                                                    ref: this.errorContainer,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
                                                        error: true,
                                                        size: "mini",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message.Header, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                                    name: "warning"
                                                                }),
                                                                this.state.message
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().succe),
                                                    ref: this.successContainer,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
                                                        success: true,
                                                        size: "mini",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message.Header, {
                                                            children: "Account have been created succesful!"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().sub),
                                                    children: "Register here"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                    minWidth: 401,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                        children: "PERSONALYZER"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                        rel: "stylesheet",
                                        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                                        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                                        crossorigin: "anonymous"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                        rel: "stylesheet",
                                        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1.0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().outer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().hed),
                                        children: "Create account to get started."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().divForm),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            onSubmit: this.register,
                                            autoComplete: "off",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().reg),
                                                    onClick: this.login,
                                                    children: "Already have account? Login"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().lab),
                                                    children: "email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().inp),
                                                    type: "text",
                                                    ref: this.user,
                                                    onChange: (e)=>this.setState({
                                                            username: e.target.value
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().lab1),
                                                    children: "password"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().inp),
                                                    type: "password",
                                                    ref: this.pass,
                                                    onChange: (e)=>this.setState({
                                                            password: e.target.value
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().error),
                                                    ref: this.errorContainer,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
                                                        error: true,
                                                        size: "mini",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message.Header, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                                    name: "warning"
                                                                }),
                                                                this.state.message
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().succe),
                                                    ref: this.successContainer,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
                                                        success: true,
                                                        size: "mini",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message.Header, {
                                                            children: "Account have been created succesful!"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: (_static_css_jisajili_module_css__WEBPACK_IMPORTED_MODULE_7___default().sub),
                                                    children: "Register here"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jisajili);


/***/ }),

/***/ 8286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const BACKEND_ORIGIN = "https://web-production-0b93.up.railway.app" // umeone hii 'url' haina '/' mwishoni.. usisahau ichi kitu coz kwenye code ni-miadd hii kwenye nilivyoimport..
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BACKEND_ORIGIN);


/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(5271)));
module.exports = __webpack_exports__;

})();