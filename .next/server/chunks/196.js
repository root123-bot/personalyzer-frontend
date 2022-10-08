exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 2596:
/***/ ((module) => {

// Exports
module.exports = {
	"spt": "sign_spt__vpeQV",
	"cont": "sign_cont__9g5Ro",
	"cont2": "sign_cont2__0kzC7",
	"fp": "sign_fp___z0GJ"
};


/***/ }),

/***/ 5196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_css_sign_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2596);
/* harmony import */ var _static_css_sign_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_css_sign_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






class Sign extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        username: "",
        password: "",
        email: "",
        nywila: "",
        message: "",
        message2: "",
        loading: false
    };
    constructor(props){
        super(props);
        this.errorContainer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.errorContainer1 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.loginError = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.loginSuccess = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    }
    onRegister = (e)=>{
        //console.log('Hey you clicked on register')
        this.setState({
            loading: true
        });
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
                message: "Shorter password less than6 characters"
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
                console.log(json.err);
                this.setState({
                    message: "Failed!, the user of this email already exist"
                });
                this.errorContainer.current.style.display = "block";
                this.timeout1 = setTimeout(()=>{
                    this.errorContainer.current.style.display = "none";
                }, 5000);
                // this.setState({
                //     username: "",
                //     password: ""
                // })
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
            console.log("Everyting is good bro...");
            this.setState({
                loading: false
            });
            this.errorContainer1.current.style.display = "block";
            this.timeout2 = setTimeout(async ()=>{
                // lets login the user...
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
                console.log("gza", gza);
                if (weLive.status !== 200) {
                    return console.log("Error to login this user, status code of 200 is returned");
                }
                localStorage.setItem("authTokens", JSON.stringify(gza));
                this.errorContainer1.current.style.display = "none";
                this.props.closeLoginPanel();
            }, 100);
        });
    };
    onLogin = async (e)=>{
        e.preventDefault();
        if (this.state.email.trim().length === 0 || this.state.nywila.trim().length === 0) {
            this.setState({
                message2: "We don't accept empty field"
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
        console.log("data", data);
        if (response.status != 200) {
            this.setState({
                message2: "Unable to login, Bad credentials!"
            });
            console.log("Bad credentials");
            this.loginError.current.style.display = "block";
            this.loginSetTimeout = setTimeout(()=>{
                this.loginError.current.style.display = "none";
            }, 5000);
            return;
        }
        console.log("Everything is good, you have good credentails...");
        console.log("this is the id of the user");
        const user = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(data.access);
        console.log("This is decoded jwt token...");
        console.log(user);
        console.log(user.user_id);
        localStorage.setItem("authTokens", JSON.stringify(data));
        console.log("Mpaka hatua hii inabid u-close hii window coz user ashalogin");
        this.loginSuccess.current.style.display = "block";
        this.successSetTimeOut = setTimeout(()=>{
            this.loginSuccess.current.style.display = "none";
            // Hizi ni component mbili tofauti so ikikataa ni sawa tu ....
            // so how we can close this window...
            {
                this.props.closeLoginPanel();
            }
        }, 1000);
    };
    componentWillUnmount() {
        clearTimeout(this.timeout1);
        clearTimeout(this.timeout2);
        clearTimeout(this.loginSetTimeout);
        clearTimeout(this.successSetTimeOut);
        clearTimeout(this.errorShow);
        clearTimeout(this.errorShow2);
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_static_css_sign_module_css__WEBPACK_IMPORTED_MODULE_5___default().father),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
                        as: "h1",
                        content: "To have many more features like adding items to shoping cart you should login.",
                        color: "grey",
                        textAlign: "center"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        style: {
                            border: "1px solid grey"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                width: 10,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
                                            as: "h2",
                                            children: [
                                                " ",
                                                "You don't have account? Create one for you."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                                    widths: "equal",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
                                                            fluid: true,
                                                            label: "Username",
                                                            onChange: (event)=>this.setState({
                                                                    username: event.target.value
                                                                })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
                                                            fluid: true,
                                                            label: "Password",
                                                            type: "password",
                                                            onChange: (event)=>this.setState({
                                                                    password: event.target.value
                                                                })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
                                            className: (_static_css_sign_module_css__WEBPACK_IMPORTED_MODULE_5___default().cont),
                                            ref: this.errorContainer,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
                                                error: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message.Header, {
                                                        children: "Error, unable create account!"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "warning sign"
                                                    }),
                                                    this.state.message
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_static_css_sign_module_css__WEBPACK_IMPORTED_MODULE_5___default().cont2),
                                            ref: this.errorContainer1,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
                                                success: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message.Header, {
                                                        children: "Account created successful"
                                                    }),
                                                    "Now you can login with your password and email as username"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                width: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_static_css_sign_module_css__WEBPACK_IMPORTED_MODULE_5___default().spt),
                                            children: [
                                                "Already have account",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                    name: "question"
                                                }),
                                                "Login here"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "Username"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            onChange: (event)=>this.setState({
                                                                    email: event.target.value
                                                                })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "Password"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            onChange: (event)=>this.setState({
                                                                    nywila: event.target.value
                                                                }),
                                                            type: "password"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_sign_module_css__WEBPACK_IMPORTED_MODULE_5___default().fp),
                                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/reset"),
                                                    children: "Forgot password?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                    animated: "vertical",
                                                    fluid: true,
                                                    color: "teal",
                                                    onClick: this.onLogin,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button.Content, {
                                                            visible: true,
                                                            children: "Login"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button.Content, {
                                                            hidden: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
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
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
                                                error: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message.Header, {
                                                        children: "Unauthorized"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "warning sign"
                                                    }),
                                                    this.state.message2
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            ref: this.loginSuccess,
                                            style: {
                                                display: "none",
                                                marginTop: "1%"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
                                                success: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message.Header, {
                                                        children: "Login successful"
                                                    }),
                                                    "Now you're free to add items to the cart"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sign);


/***/ })

};
;