(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 5154:
/***/ ((module) => {

// Exports
module.exports = {
	"success": "login_success__o5O6m",
	"outer": "login_outer__hIox_",
	"hed": "login_hed__1z9Af",
	"divForm": "login_divForm__aPj7z",
	"lab": "login_lab__bdQAV",
	"lab1": "login_lab1__9FN_u",
	"reg": "login_reg__nlAsc",
	"inp": "login_inp__2T_1A",
	"forg": "login_forg__55Jtq",
	"sub": "login_sub__uWPi1",
	"error": "login_error__z7xCM"
};


/***/ }),

/***/ 4984:
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
/* harmony import */ var _static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5154);
/* harmony import */ var _static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);








const MediaQuery = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "login.js -> " + "react-responsive"
        ]
    },
    ssr: false
});
class Login extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
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
        const { flag , productId , success  } = props.query;
        // If flag is 'normal' then redirect user actually in the
        // profile or index... Otherwise if there is a flag then that
        // is where to redirect
        // if these flag, productId are not passed.. 'undefined' then
        // then this means there is no need to redirect user somewhere
        // that is normal access of 'login' and by default we redirect
        // user to the index page....
        return {
            flag,
            productId,
            success
        };
    }
    signIn = async (e)=>{
        e.preventDefault();
        console.log("HEy im clicked..");
        console.log(this.props.flag);
        if (this.state.username.trim().length === 0 || this.state.password.trim().length === 0) {
            // we don't accept empty fields..
            this.setState({
                message: "We don't accept empty field"
            });
            this.errorContainer.current.style.display = "block";
            this.errorShow = setTimeout(()=>{
                this.errorContainer.current.style.display = "none";
            }, 5000);
            // I think we should clear all make all fields empty..
            this.user.current.value = "";
            this.pass.current.value = "";
            return;
        }
        // otherwise send the request to login in server
        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        });
        let data = await response.json();
        console.log("data", data);
        if (response.status !== 200) {
            this.setState({
                message: "Invalid Credentials"
            });
            this.errorContainer.current.style.display = "block";
            this.erro = setTimeout(()=>{
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
        console.log("Everything is good now");
        localStorage.setItem("authTokens", JSON.stringify(data));
        // then check if the props passed if they are undefined then
        // we have default redirect to the index/profile page... but
        //
        if (this.props.flag) {
            next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                pathname: this.props.flag,
                query: {
                    product: this.props.productId
                }
            });
        } else {
            console.log("redirect to index page...");
            next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                pathname: "/"
            });
        }
    };
    register = ()=>{
        if (this.props.flag) {
            next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                pathname: "/jisajili",
                query: {
                    flag: this.props.flag,
                    productId: this.props.productId
                }
            });
        } else {
            next_router__WEBPACK_IMPORTED_MODULE_6___default().push("jisajili");
        }
    };
    componentDidMount() {
        console.log(this.props.flag, this.props.productId);
        // componentDidMountError... vs ref.. ref is null
        if (this.props.success) {
            // Na hii ndo changamoto mojawapo ya kutumia ClassBasedComponents..
            if (this.successContainer.current) {
                // then here you need to display this success message
                this.successContainer.current.style.display = "block";
                this.successTimeout = setTimeout(()=>{
                    this.successContainer.current.style.display = "none";
                }, 7000);
            }
        } else {
            console.log("Not defined..");
        }
    }
    componentWillUnmount() {
        clearTimeout(this.errorShow);
        clearTimeout(this.erro);
        clearTimeout(this.successTimeout);
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
                                className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().outer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().hed),
                                        children: "Fill credentials to login."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().divForm),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            onSubmit: this.signIn,
                                            autoComplete: "off",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().reg),
                                                    onClick: this.register,
                                                    children: "Don't have account? Register"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().lab),
                                                    children: "email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inp),
                                                    type: "text",
                                                    ref: this.user,
                                                    onChange: (e)=>this.setState({
                                                            username: e.target.value
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().lab1),
                                                    children: "password"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inp),
                                                    type: "password",
                                                    ref: this.pass,
                                                    onChange: (e)=>this.setState({
                                                            password: e.target.value
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().forg),
                                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/reset"),
                                                    children: "Forgot password?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().error),
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().sub),
                                                    children: "Login Here"
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
                                className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().outer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().hed),
                                        children: "Fill credentials to login."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().divForm),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            onSubmit: this.signIn,
                                            autoComplete: "off",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().reg),
                                                    onClick: this.register,
                                                    children: "Don't have account? Register"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().lab),
                                                    children: "email"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inp),
                                                    type: "text",
                                                    ref: this.user,
                                                    onChange: (e)=>this.setState({
                                                            username: e.target.value
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().lab1),
                                                    children: "password"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().inp),
                                                    type: "password",
                                                    ref: this.pass,
                                                    onChange: (e)=>this.setState({
                                                            password: e.target.value
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().forg),
                                                    children: "Forgot password?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().error),
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: (_static_css_login_module_css__WEBPACK_IMPORTED_MODULE_7___default().sub),
                                                    children: "Login Here"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

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
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(4984)));
module.exports = __webpack_exports__;

})();