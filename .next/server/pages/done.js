(() => {
var exports = {};
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 4898:
/***/ ((module) => {

// Exports
module.exports = {
	"conte": "done_conte__P_X72"
};


/***/ }),

/***/ 7143:
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
/* harmony import */ var _components_NavBar3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4443);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_css_done_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4898);
/* harmony import */ var _static_css_done_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_css_done_module_css__WEBPACK_IMPORTED_MODULE_6__);







const MediaQuery = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "done.js -> " + "react-responsive"
        ]
    },
    ssr: false
});
class DonePlacingOrder extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        isAunthenticatd: false,
        user_id: null
    };
    constructor(props){
        super(props);
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
            const decodedRefreshToken = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(tokens.refresh);
            const expireRefreshTime = decodedRefreshToken.exp;
            console.log("Hey this is the expire date of the refreshToken");
            console.log(expireRefreshTime);
            console.log("Lets try to access the json access token");
            console.log(tokens.access);
            const decodedAccessData = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(tokens.access);
            const user = decodedAccessData.user_id;
            this.setState({
                user_id: user
            });
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
                    isAunthenticated: true,
                    user_id: user
                });
            } else {
                this.setState({
                    isAunthenticated: true,
                    user_id: user
                });
            }
        } catch (InvalidTokenError) {
            // so this will only capture the InvalidTokenError which is caused by using already expired-token because and I said automatically when
            // we made request to the jwd to decode it will return error that our token is already expired and by default as we coded it will update
            // our localstorage to look like >>> authToken: {"detail": "Token is blacklisted", "code": "token_not_valid"}
            console.log(InvalidTokenError.message);
            console.log("Invalid token specified since, when the token is expired the jwt automatically change your storage and it ill look like this");
            // authToken: {"detail": "Token is blacklisted", "code": "token_not_valid"}
            this.setState({
                isAunthenticated: false
            });
        }
    };
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
    // this is server side rendering that's why we see our console.log
    // appear on server..
    static async getInitialProps(props) {
        // here we need to fetch the last orderedCart orderId
        // of that user...... I think we should push namba ya
        // muamala from order.js then after push we should get it
        // here and checks the validitiy
        const { unique_id  } = props.query;
        // then fetch on the backend all the orderId
        const order = await fetch("http://localhost:8000/api/placed_orders/");
        const data = await order.json();
        console.log("This are all orders found ");
        console.log(data);
        let isValid = false;
        let validUniqueId = null;
        let validPhoneNumber = null;
        let validTransactionId = null;
        for (let oda of data){
            if (oda.uniqueOrderId === unique_id) {
                validUniqueId = oda.uniqueOrderId;
                validPhoneNumber = oda.mobile;
                validTransactionId = oda.orderId;
                isValid = true;
                break;
            }
        }
        console.log("This is result for you to view on server");
        console.log(validUniqueId, validPhoneNumber, validTransactionId, isValid);
        // UNAWEZA UKAULIZA WHAT IF MTU AKIWEKA ORDER AMBAYO NI SAHIHI KABISA BUT NI ORDER YA
        // KITAMBO HICHO AMBAYO ISHAKUWA PROCESSED... HAPA USIWAZE COZ NOW NAENDA KU-ADD VALIDATION
        // KWENYE ORDER/AU API INABIDI IRETURN ONLY THE ORDER WHICH IS NOT COMPLETED.. NA INABIDI
        // UJUE PIA NI MUHIMU SANA UKISHA-COMPLETE ORDER U-ENDE KWENE ORDER KUJAZA KUWA ORDER ISHAKUWA
        // COMPLETED LA SIVYO UTALIA PASKO ANAWEZA AKAJA MTU AKAKWAMBIA ORDER YANGU BADO KUMBE ORDER
        // ISHAKUWA COMPLETED.....
        console.log("This is what order returned if it found or not");
        console.log(isValid);
        return {
            validPhoneNumber,
            validTransactionId,
            validUniqueId,
            isValid
        };
    }
    componentDidMount() {
        this.executingTokenLogics();
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavBar3_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            isAunthenticated: this.state.isAunthenticatd,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: this.props.isValid ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                maxWidth: 500,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        paddingTop: "15%",
                                        width: "75%",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                fontWeight: "bold",
                                                color: "grey",
                                                textAlign: "center",
                                                fontSize: "130%"
                                            },
                                            children: [
                                                "!Your order has been created successful!",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                textAlign: "left",
                                                color: "red",
                                                paddingBottom: "0%",
                                                marginBottom: "0%",
                                                fontSize: "100%",
                                                fontWeight: "bold"
                                            },
                                            children: "Muhimu soma!(In swahili)"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                paddingTop: "0%",
                                                marginTop: "0%",
                                                fontWeight: "bold",
                                                color: "grey"
                                            },
                                            children: [
                                                "***Data hizi( za hapo chini",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "black"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "order id"
                                                    })
                                                }),
                                                " ",
                                                "na",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "black"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "transaction number"
                                                    })
                                                }),
                                                ") zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo wako, unaweza ukazipiga picha au ukaziandika pembeni. Wasiliana nasi kwa maelezo zaidi.",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        background: "#edeceb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        paddingTop: "2%",
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    },
                                                                    children: "Order id:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validUniqueId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validUniqueId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validUniqueId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    },
                                                                    children: "Transaction number:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validTransactionId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: this.props.validTransactionId
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validTransactionId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validTransactionId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        textAlign: "left",
                                                        color: "red",
                                                        paddingBottom: "0%",
                                                        marginBottom: "0%",
                                                        fontSize: "100%",
                                                        fontWeight: "bold"
                                                    },
                                                    children: "Read this(In English)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        fontWeight: "bold",
                                                        color: "grey"
                                                    },
                                                    children: "*** Keep these data with you they will be used to verify if its you who ordered the product, Don't lose these data until you receive your product."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        background: "#edeceb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        paddingTop: "2%",
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: "Order id:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validUniqueId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validUniqueId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validUniqueId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: "Transaction number:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validTransactionId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: this.props.validTransactionId
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validTransactionId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validTransactionId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                minWidth: 501,
                                maxWidth: 800,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        paddingTop: "11%",
                                        width: "70%",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                fontWeight: "bold",
                                                color: "grey",
                                                textAlign: "center",
                                                fontSize: "130%"
                                            },
                                            children: [
                                                "!Your order has been created successful!",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                textAlign: "left",
                                                color: "red",
                                                paddingBottom: "0%",
                                                marginBottom: "0%",
                                                fontSize: "100%",
                                                fontWeight: "bold"
                                            },
                                            children: "Muhimu soma!(In swahili)"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                paddingTop: "0%",
                                                marginTop: "0%",
                                                fontWeight: "bold",
                                                color: "grey"
                                            },
                                            children: [
                                                "***Data hizi( za hapo chini",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "black"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "order id"
                                                    })
                                                }),
                                                " ",
                                                "na",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "black"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "transaction number"
                                                    })
                                                }),
                                                ") zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo wako, unaweza ukazipiga picha au ukaziandika pembeni. Wasiliana nasi kwa maelezo zaidi.",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        background: "#edeceb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        paddingTop: "2%",
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    },
                                                                    children: "Order id:"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%",
                                                                        textAlign: "center"
                                                                    },
                                                                    children: this.props.validUniqueId
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    },
                                                                    children: "Transaction number:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validTransactionId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: this.props.validTransactionId
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validTransactionId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validTransactionId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        textAlign: "left",
                                                        color: "red",
                                                        paddingBottom: "0%",
                                                        marginBottom: "0%",
                                                        fontSize: "100%",
                                                        fontWeight: "bold"
                                                    },
                                                    children: "Read this(In English)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        fontWeight: "bold",
                                                        color: "grey"
                                                    },
                                                    children: "*** Keep these data with you they will be used to verify if its you who ordered the product, Don't lose these data until you receive your product."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        background: "#edeceb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        paddingTop: "2%",
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: "Order id:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validUniqueId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validUniqueId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validUniqueId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: "Transaction number:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validTransactionId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: this.props.validTransactionId
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validTransactionId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validTransactionId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                minWidth: 801,
                                maxWidth: 1200,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        paddingTop: "9%",
                                        width: "70%",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                fontWeight: "bold",
                                                color: "grey",
                                                textAlign: "center",
                                                fontSize: "130%"
                                            },
                                            children: [
                                                "!Your order has been created successful!",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                textAlign: "left",
                                                color: "red",
                                                paddingBottom: "0%",
                                                marginBottom: "0%",
                                                fontSize: "100%",
                                                fontWeight: "bold"
                                            },
                                            children: "Muhimu soma!(In swahili)"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                paddingTop: "0%",
                                                marginTop: "0%",
                                                fontWeight: "bold",
                                                color: "grey"
                                            },
                                            children: [
                                                "***Data hizi( za hapo chini",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "black"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "order id"
                                                    })
                                                }),
                                                " ",
                                                "na",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "black"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "transaction number"
                                                    })
                                                }),
                                                ") zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo wako, unaweza ukazipiga picha au ukaziandika pembeni. Wasiliana nasi kwa maelezo zaidi.",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        background: "#edeceb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        paddingTop: "2%",
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    },
                                                                    children: "Order id:"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%",
                                                                        textAlign: "center"
                                                                    },
                                                                    children: this.props.validUniqueId
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    },
                                                                    children: "Transaction number:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validTransactionId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: this.props.validTransactionId
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validTransactionId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validTransactionId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        textAlign: "left",
                                                        color: "red",
                                                        paddingBottom: "0%",
                                                        marginBottom: "0%",
                                                        fontSize: "100%",
                                                        fontWeight: "bold"
                                                    },
                                                    children: "Read this(In English)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        fontWeight: "bold",
                                                        color: "grey"
                                                    },
                                                    children: "*** Keep these data with you they will be used to verify if its you who ordered the product, Don't lose these data until you receive your product."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        background: "#edeceb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        paddingTop: "2%",
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: "Order id:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validUniqueId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validUniqueId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validUniqueId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: "Transaction number:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validTransactionId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: this.props.validTransactionId
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validTransactionId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validTransactionId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                minWidth: 1201,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        paddingTop: "4%",
                                        width: "60%",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                fontWeight: "bold",
                                                color: "grey",
                                                textAlign: "center",
                                                fontSize: "130%"
                                            },
                                            children: [
                                                "!Your order has been created successful!",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                textAlign: "left",
                                                color: "red",
                                                paddingBottom: "0%",
                                                marginBottom: "0%",
                                                fontSize: "100%",
                                                fontWeight: "bold"
                                            },
                                            children: "Muhimu soma!(In swahili)"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                paddingTop: "0%",
                                                marginTop: "0%",
                                                fontWeight: "bold",
                                                color: "grey"
                                            },
                                            children: [
                                                "***Data hizi( za hapo chini",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "black"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "order id"
                                                    })
                                                }),
                                                " ",
                                                "na",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        color: "black"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        children: "transaction number"
                                                    })
                                                }),
                                                ") zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo wako, unaweza ukazipiga picha au ukaziandika pembeni. Wasiliana nasi kwa maelezo zaidi.",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        background: "#edeceb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        paddingTop: "2%",
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    },
                                                                    children: "Order id:"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%",
                                                                        textAlign: "center"
                                                                    },
                                                                    children: this.props.validUniqueId
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                        color: "black"
                                                                    },
                                                                    children: "Transaction number:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validTransactionId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: this.props.validTransactionId
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validTransactionId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validTransactionId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        textAlign: "left",
                                                        color: "red",
                                                        paddingBottom: "0%",
                                                        marginBottom: "0%",
                                                        fontSize: "100%",
                                                        fontWeight: "bold"
                                                    },
                                                    children: "Read this(In English)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        fontWeight: "bold",
                                                        color: "grey"
                                                    },
                                                    children: "*** Keep these data with you they will be used to verify if its you who ordered the product, Don't lose these data until you receive your product."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        background: "#edeceb"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        paddingTop: "2%",
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: "Order id:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validUniqueId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validUniqueId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validUniqueId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validUniqueId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validUniqueId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        marginBottom: "0%",
                                                                        paddingBottom: "0%",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: "Transaction number:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    style: {
                                                                        marginTop: "0%",
                                                                        paddingTop: "0%",
                                                                        color: "grey",
                                                                        fontWeight: "bold",
                                                                        fontSize: "120%"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            maxWidth: 350,
                                                                            children: this.props.validTransactionId.length > 15 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 15),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(15)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: this.props.validTransactionId
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 351,
                                                                            maxWidth: 400,
                                                                            children: this.props.validTransactionId.length > 20 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 20),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(20)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                            minWidth: 401,
                                                                            children: this.props.validTransactionId.length > 25 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                style: {
                                                                                    textAlign: "center"
                                                                                },
                                                                                children: [
                                                                                    this.props.validTransactionId.substr(0, 25),
                                                                                    " ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    this.props.validTransactionId.substr(25)
                                                                                ]
                                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    style: {
                                                                                        textAlign: "center"
                                                                                    },
                                                                                    children: this.props.validTransactionId
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_static_css_done_module_css__WEBPACK_IMPORTED_MODULE_6___default().conte),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                    maxWidth: 899,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    overflowX: "hidden"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "../static/images/notHere.gif",
                                                    width: 200,
                                                    height: 200
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    style: {
                                                        textAlign: "center",
                                                        fontWeight: "bold",
                                                        color: "grey",
                                                        fontSize: "110%"
                                                    },
                                                    children: [
                                                        "Oops! 404 Error, Page is not found..",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn btn-info",
                                                            style: {
                                                                marginTop: "2%",
                                                                fontWeight: "bold"
                                                            },
                                                            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/"),
                                                            children: "Back home"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                    minWidth: 900,
                                    maxWidth: 1199,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    overflowX: "hidden"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "../static/images/notHere.gif",
                                                    width: 200,
                                                    height: 200
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    style: {
                                                        textAlign: "center",
                                                        fontWeight: "bold",
                                                        color: "grey",
                                                        fontSize: "120%"
                                                    },
                                                    children: [
                                                        "Oops! 404 Error, Page is not found..",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: "btn btn-info",
                                                            style: {
                                                                marginTop: "2%",
                                                                fontWeight: "bold"
                                                            },
                                                            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/"),
                                                            children: [
                                                                " ",
                                                                "Back home"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                    minWidth: 1200,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    overflowX: "hidden"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "../static/images/notHere.gif",
                                                    width: 300,
                                                    height: 300
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    style: {
                                                        textAlign: "center",
                                                        fontWeight: "bold",
                                                        color: "grey",
                                                        fontSize: "130%"
                                                    },
                                                    children: [
                                                        "Oops! 404 Error, Page is not found..",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn btn-info",
                                                            style: {
                                                                marginTop: "2%",
                                                                fontWeight: "bold"
                                                            },
                                                            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/"),
                                                            children: "Back home"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonePlacingOrder);


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
var __webpack_exports__ = __webpack_require__.X(0, [152,159,675,226,443], () => (__webpack_exec__(7143)));
module.exports = __webpack_exports__;

})();