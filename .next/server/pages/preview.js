(() => {
var exports = {};
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 9188:
/***/ ((module) => {

// Exports
module.exports = {
	"err1": "preview_err1__4ktDS",
	"odb": "preview_odb__JXPvu",
	"ima": "preview_ima__C71_g",
	"pre": "preview_pre__5Epvd",
	"nex": "preview_nex__EtAEV",
	"imgNo": "preview_imgNo__SQmfS",
	"tit": "preview_tit__nNlmo",
	"main": "preview_main__fcHhW",
	"sub": "preview_sub__tGPaD",
	"priQuan": "preview_priQuan__LDn4W",
	"price": "preview_price__fVgzF",
	"beiNdogo": "preview_beiNdogo__a_wj_",
	"bei": "preview_bei__tC2EU",
	"qua": "preview_qua__Ur3WC",
	"namba": "preview_namba__X_jbn",
	"amountWrapper": "preview_amountWrapper__M6yo6",
	"actualAmount": "preview_actualAmount__b698G",
	"plus": "preview_plus__r7H1l",
	"minus": "preview_minus__KoG3N",
	"customizations": "preview_customizations__rJn_H",
	"holder": "preview_holder__oDKSE",
	"custom": "preview_custom__M_xWC",
	"ch": "preview_ch__mgjNa",
	"pName": "preview_pName__2MKb_",
	"pValue": "preview_pValue__8W1Kd",
	"radioContainer": "preview_radioContainer__prN1g",
	"label": "preview_label___YSDY",
	"rad": "preview_rad__h4HZC",
	"text": "preview_text__bn4ej",
	"head": "preview_head__FF57P",
	"ason": "preview_ason__Vvtoh"
};


/***/ }),

/***/ 6600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4443);
/* harmony import */ var _components_Sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5196);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9188);
/* harmony import */ var _static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3877);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_7__, swiper__WEBPACK_IMPORTED_MODULE_8__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_7__, swiper__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const MediaQuery = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "preview.js -> " + "react-responsive"
        ]
    },
    ssr: false
});
// THIS IS ONLY FOR PHONES 200px to 576px devices but not for tablet
// and pc or other large devices
class Preview extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        isAunthenticated: false,
        selectedProp: "",
        customValue: "",
        index: 1,
        productQuantity: 1,
        selectedObjPrice: 0,
        productPrice: 0,
        secondPropsAttributeValue: ""
    };
    constructor(props){
        super(props);
        this.initialProp = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.imageConte = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.err1 = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this.uwanja = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    }
    static async getInitialProps(props) {
        const { product  } = props.query;
        const response = await fetch("http://127.0.0.1:8000/api/product/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product
            })
        });
        const data = await response.json();
        return {
            data,
            product
        };
    }
    addToCart = async (e)=>{
        e.preventDefault();
        console.log("Im adding something to cart..");
        // first detect if the user has login or not
        // if not redirect them to /login...
        await this.executingTokenLogics(); // Hii ishu ya ku-setState inatu-chelewesha
        // coz ina some delay.. Ko nifanyeje hapa hata user akiwa amelogin anakuwa
        // anaambiwa ni anonymous...
        if (!this.state.isAunthenticated) {
            console.log("You're anonymous user.");
            next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                pathname: "/login",
                query: {
                    flag: "/preview",
                    productId: this.props.product
                }
            });
            return;
        }
        console.log("You've been authenticated.");
        // I don't know but I think access_token will be decoded...
        const tokens = localStorage.getItem("authTokens");
        const json = JSON.parse(tokens);
        let access = json.access;
        let decodedAccessData = "";
        try {
            decodedAccessData = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(access);
        } catch (err) {
            if (this.uwanja.current) {
                this.uwanja.current.value = "";
                this.setState({
                    customValue: ""
                });
            }
        }
        const user_id = decodedAccessData.user_id;
        const id = this.props.product;
        const price = this.state.selectedObjPrice;
        const quantity = this.state.productQuantity;
        const value = this.state.selectedProp;
        const secondPropsAttributeValue = this.state.secondPropsAttributeValue;
        const customization = this.state.customValue;
        console.log("This is data i need to post..");
        console.log(id, price, quantity, value, customization);
        let check = await fetch("http://127.0.0.1:8000/api/cartExistOrNot/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id,
                productId: id,
                price,
                quantity,
                customization,
                value,
                secondValue: secondPropsAttributeValue
            })
        });
        let output = await check.json();
        if (output.status == false) {
            // then either huyu mtu hana cart au kuna error imekuwa imetokea hata kama mtu ana cart..
            // then hii itarukia on creating a new cart...
            // this request create a new cart..
            try {
                let response = await fetch("http://127.0.0.1:8000/api/carts/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: user_id,
                        productId: id,
                        price,
                        quantity,
                        customization,
                        value,
                        secondValue: secondPropsAttributeValue
                    })
                });
                let data = await response.json();
                console.log("Hey this is the response from the server");
                console.log(data);
                if (this.uwanja.current) {
                    this.uwanja.current.value = "";
                    this.setState({
                        customValue: ""
                    });
                }
                console.log("This is success for you...");
                this.err1.current.style.display = "block";
                this.successInterval = setTimeout(()=>{
                    this.err1.current.style.display = "none";
                }, 5000);
            // Redirect user to the cart component....
            // Router.push({ pathname: "/cart" });
            } catch (err1) {
                if (this.uwanja.current) {
                    this.uwanja.current.value = "";
                    this.setState({
                        customValue: ""
                    });
                }
            }
        } else {
            // Lakni ni sahihi kama status huko juu sio False then hii item ishakuwa
            // added to the cart so we also need to return the success message this is
            // logic behind having success in else statement...
            console.log("No need to create a new cart you have one for you....");
            let cartByThatUser = output.cart;
            console.log("Hey this is cart by our user....");
            console.log(cartByThatUser);
            console.log("Even ma mama thinks that my mind has gone");
            this.err1.current.style.display = "block";
            this.successInterval = setTimeout(()=>{
                this.err1.current.style.display = "none";
            }, 5000);
            if (this.uwanja.current) {
                this.uwanja.current.value = "";
                this.setState({
                    customValue: ""
                });
            }
        // Redirect user to the cart component....
        // Router.push({ pathname: "/cart" });
        }
    };
    componentWillUnmount() {
        clearTimeout(this.successInterval);
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
            } else {
                this.setState({
                    isAunthenticated: true
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
    // this function will get called everytime we click the next or prev
    // button... Dont forget this....
    detectIndexOfImageOnPreview = ()=>{
        // image in focus
        const path = this.imageConte.current.src;
        const imageInFocus = path.substr(21);
        const allImages = this.props.data.get_urls;
        const imageIndex = allImages.indexOf(imageInFocus);
        console.log("This is imageIndex for you ", imageIndex);
        this.setState({
            index: imageIndex + 1
        });
    };
    next = ()=>{
        // first get all images found...
        console.log(this.props.data.get_urls);
        // first get the image in preview then you should detect if
        // its the last one or not.. If its the last one when the
        // user click next you should change src to first index or
        // image.. But what if its not the last one if its not the
        // last one then its easier change it to next image of it..
        const imageInAction = this.props.data.get_urls.indexOf(this.imageConte.current.src.substr(21));
        console.log("This is the index of image in action...", imageInAction);
        if (imageInAction + 1 === this.props.data.get_urls.length) {
            console.log("Your the last image...");
            this.imageConte.current.src = `http://127.0.0.1:8000${this.props.data.get_urls[0]}`;
        } else {
            console.log("Your not the last image...");
            this.imageConte.current.src = `http://127.0.0.1:8000${this.props.data.get_urls[imageInAction + 1]}`;
        }
        this.detectIndexOfImageOnPreview();
    };
    prev = ()=>{
        console.log(this.props.data.get_urls);
        // first get all images found...
        console.log(this.props.data.get_urls);
        const imageInAction = this.props.data.get_urls.indexOf(this.imageConte.current.src.substr(21));
        console.log("This is the index of image in action...", imageInAction);
        if (imageInAction === 0) {
            console.log("Your the first image...");
            this.imageConte.current.src = `http://127.0.0.1:8000${this.props.data.get_urls[this.props.data.get_urls.length - 1]}`;
        } else {
            console.log("Your not the first image...");
            this.imageConte.current.src = `http://127.0.0.1:8000${this.props.data.get_urls[imageInAction - 1]}`;
        }
        this.detectIndexOfImageOnPreview();
    };
    onIncrease = ()=>{
        this.setState({
            productQuantity: this.state.productQuantity + 1
        });
        this.setState({
            selectedObjPrice: this.state.selectedObjPrice + this.state.productPrice
        });
    };
    onDecrease = ()=>{
        if (this.state.productQuantity > 1) {
            this.setState({
                productQuantity: this.state.productQuantity - 1
            });
            this.setState({
                selectedObjPrice: this.state.selectedObjPrice - this.state.productPrice
            });
        }
    };
    async componentDidMount() {
        // NIMEGUNDUA LEO KUWA getInitialProps() ndo inayoanza ku-run before
        // componentDidMount.. So you can now take data from getInitialProps and
        // assign them to the state by using the componentDidMount()
        this.executingTokenLogics();
        const { data  } = this.props;
        // I think this condition should be checked because eti if it does not
        // has property selection it will not set the price...
        if (data.hasPropertySelection) {
            this.setState({
                selectedProp: Object.values(data.map_property[0])[0],
                selectedObjPrice: data.price,
                productPrice: data.price
            });
        } else {
            this.setState({
                selectedObjPrice: data.price,
                productPrice: data.price
            });
        }
        if (data.hasSecondPropertySelection) {
            this.setState({
                secondPropsAttributeValue: Object.values(data.map_secondProps[0])[0]
            });
        }
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavBar3__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            isAunthenticated: this.state.isAunthenticated,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                        minWidth: 200,
                        maxWidth: 400,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().odb),
                            children: [
                                this.props.data.get_urls.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.EffectFade,
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination
                                    ],
                                    navigation: true,
                                    effect: "fade",
                                    speed: 300,
                                    slidesPerView: 1,
                                    loop: true,
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().myswiper),
                                    pagination: {
                                        clickable: true
                                    },
                                    children: this.props.data.get_urls.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `http://127.0.0.1:8000${image}`,
                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ima),
                                                // ref={this.imageConte}
                                                height: 280
                                            }, image)
                                        }))
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ima),
                                    ref: this.imageConte,
                                    src: `http://127.0.0.1:8000${this.props.data.get_urls[0]}`,
                                    height: 280
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().tit),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
                                            children: this.props.data.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().sub),
                                            children: this.props.data.description
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().priQuan),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                    width: 8,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().price),
                                                            children: "Price:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                            minWidth: 200,
                                                            maxWidth: 349,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().beiNdogo),
                                                                children: `${new Intl.NumberFormat("en-US", {
                                                                    style: "currency",
                                                                    currency: "Tsh",
                                                                    minimumFractionDigits: 0
                                                                }).format(parseInt(this.state.selectedObjPrice))}`
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                            minWidth: 350,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().bei),
                                                                children: `${new Intl.NumberFormat("en-US", {
                                                                    style: "currency",
                                                                    currency: "Tsh",
                                                                    minimumFractionDigits: 0
                                                                }).format(parseInt(this.state.selectedObjPrice))}`
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                    width: 8,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().qua),
                                                            children: [
                                                                "Quantity:",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().namba),
                                                                    children: this.state.productQuantity
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().amountWrapper),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().plus),
                                                                    onClick: this.onDecrease,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                                        size: "small",
                                                                        name: "minus"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().actualAmount),
                                                                    children: this.state.productQuantity
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().minus),
                                                                    onClick: this.onIncrease,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                                        size: "small",
                                                                        name: "plus"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().customizations),
                                    children: [
                                        this.props.data.hasPropertySelection === false && this.props.data.isCustomized === false && this.props.data.hasSecondPropertySelection === false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: " "
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().holder),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().custom),
                                                    children: "User Customizations"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ch)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                    children: [
                                                        this.props.data.hasPropertySelection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                            width: 9,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                        children: [
                                                                            Object.keys(this.props.data.map_property[0])[0],
                                                                            ":"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                        name: Object.values(this.props.data.map_property[0])[0],
                                                                        style: {
                                                                            fontSize: "12px"
                                                                        },
                                                                        ref: this.initialProp,
                                                                        children: this.state.selectedProp.length > 10 ? this.state.selectedProp.substr(0, 9) + ".." : this.state.selectedProp
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().radioContainer),
                                                                        children: this.props.data.property_values.map((prop)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                        type: "radio",
                                                                                        id: prop,
                                                                                        name: "property",
                                                                                        checked: this.state.selectedProp === prop,
                                                                                        onChange: ()=>this.setState({
                                                                                                selectedProp: prop
                                                                                            })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                        htmlFor: prop,
                                                                                        children: prop
                                                                                    })
                                                                                ]
                                                                            }, prop))
                                                                    })
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                        this.props.data.hasSecondPropertySelection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                            width: 7,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                                style: {
                                                                                    fontSize: "15px"
                                                                                },
                                                                                children: [
                                                                                    Object.keys(this.props.data.map_secondProps[0])[0],
                                                                                    ":"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                                style: {
                                                                                    fontSize: "12px"
                                                                                },
                                                                                children: this.state.secondPropsAttributeValue.length > 7 ? this.state.secondPropsAttributeValue.substr(0, 6) + ".." : this.state.secondPropsAttributeValue
                                                                            })
                                                                        ]
                                                                    }),
                                                                    this.props.data.second_propsValue.map((propa)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                    type: "radio",
                                                                                    id: propa,
                                                                                    name: "propa",
                                                                                    checked: this.state.secondPropsAttributeValue === propa,
                                                                                    onChange: ()=>this.setState({
                                                                                            secondPropsAttributeValue: propa
                                                                                        })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                    htmlFor: propa,
                                                                                    children: propa
                                                                                })
                                                                            ]
                                                                        }, propa))
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                    ]
                                                }),
                                                this.props.data.isCustomized ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().text),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().head),
                                                                children: "Customize product's image/text."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ason),
                                                                children: [
                                                                    "*** Leave blank to use default one.",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    "*** In case of image write a web link to that image"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                minWidth: 200,
                                                                maxWidth: 340,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    row: 2,
                                                                    cols: 28,
                                                                    className: this.tarea,
                                                                    onChange: (e)=>this.setState({
                                                                            customValue: e.target.value
                                                                        }),
                                                                    ref: this.uwanja
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                minWidth: 341,
                                                                maxWidth: 360,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    row: 2,
                                                                    cols: 30,
                                                                    className: this.tarea,
                                                                    onChange: (e)=>this.setState({
                                                                            customValue: e.target.value
                                                                        }),
                                                                    ref: this.uwanja
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                minWidth: 361,
                                                                maxWidth: 380,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    row: 2,
                                                                    cols: 32,
                                                                    className: this.tarea,
                                                                    onChange: (e)=>this.setState({
                                                                            customValue: e.target.value
                                                                        }),
                                                                    ref: this.uwanja
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                minWidth: 381,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    row: 2,
                                                                    cols: 34,
                                                                    className: this.tarea,
                                                                    onChange: (e)=>this.setState({
                                                                            customValue: e.target.value
                                                                        }),
                                                                    ref: this.uwanja
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().err1),
                                            ref: this.err1,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
                                                success: true,
                                                size: "mini",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                                                        children: "Success, Item has been added to cart"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                        name: "warning sign"
                                                    }),
                                                    "Click the cart icon above to preview your cart."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginBottom: "2%"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                animated: true,
                                                primary: true,
                                                size: "medium",
                                                fluid: true,
                                                onClick: this.addToCart,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button.Content, {
                                                        visible: true,
                                                        children: "Add to Cart"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button.Content, {
                                                        hidden: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                            name: "shop"
                                                        })
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
                        maxWidth: 576,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().odb),
                            children: [
                                this.props.data.get_urls.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.EffectFade,
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination
                                    ],
                                    navigation: true,
                                    effect: "fade",
                                    speed: 300,
                                    slidesPerView: 1,
                                    loop: true,
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().myswiper),
                                    pagination: {
                                        clickable: true
                                    },
                                    children: this.props.data.get_urls.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `http://127.0.0.1:8000${image}`,
                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ima),
                                                // ref={this.imageConte}
                                                height: 350
                                            }, image)
                                        }))
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ima),
                                    ref: this.imageConte,
                                    src: `http://127.0.0.1:8000${this.props.data.get_urls[0]}`,
                                    height: 350
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().tit),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
                                            children: this.props.data.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().sub),
                                            children: this.props.data.description
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().priQuan),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                    width: 8,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().price),
                                                            children: "Price:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().bei),
                                                            children: `${new Intl.NumberFormat("en-US", {
                                                                style: "currency",
                                                                currency: "Tsh",
                                                                minimumFractionDigits: 0
                                                            }).format(parseInt(this.state.selectedObjPrice))}`
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                    width: 8,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().qua),
                                                            children: [
                                                                "Quantity:",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().namba),
                                                                    children: this.state.productQuantity
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().amountWrapper),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().plus),
                                                                    onClick: this.onDecrease,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                                        size: "small",
                                                                        name: "minus"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().actualAmount),
                                                                    children: this.state.productQuantity
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().minus),
                                                                    onClick: this.onIncrease,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                                        size: "small",
                                                                        name: "plus"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().customizations),
                                    children: [
                                        this.props.data.hasPropertySelection === false && this.props.data.isCustomized === false && this.props.data.hasSecondPropertySelection === false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: " "
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().holder),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().custom),
                                                    children: "User Customizations"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ch)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                    children: [
                                                        this.props.data.hasPropertySelection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                            width: 9,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                        children: [
                                                                            Object.keys(this.props.data.map_property[0])[0],
                                                                            ":"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                        style: {
                                                                            fontSize: "13px"
                                                                        },
                                                                        children: this.state.selectedProp.length > 12 ? this.state.selectedProp.substr(0, 11) + ".." : this.state.selectedProp
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().radioContainer),
                                                                        children: this.props.data.property_values.map((prop)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                        type: "radio",
                                                                                        id: prop,
                                                                                        name: "property",
                                                                                        checked: this.state.selectedProp == prop,
                                                                                        onChange: ()=>this.setState({
                                                                                                selectedProp: prop
                                                                                            })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                        htmlFor: prop,
                                                                                        children: prop
                                                                                    })
                                                                                ]
                                                                            }, prop))
                                                                    })
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                        this.props.data.hasSecondPropertySelection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                            width: 7,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                                style: {
                                                                                    fontSize: "15px"
                                                                                },
                                                                                children: [
                                                                                    Object.keys(this.props.data.map_secondProps[0])[0],
                                                                                    ":"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                                style: {
                                                                                    fontSize: "13px"
                                                                                },
                                                                                children: this.state.secondPropsAttributeValue.length > 7 ? this.state.secondPropsAttributeValue.substr(0, 6) + ".." : this.state.secondPropsAttributeValue
                                                                            })
                                                                        ]
                                                                    }),
                                                                    this.props.data.second_propsValue.map((propa)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                    type: "radio",
                                                                                    id: propa,
                                                                                    name: "propa",
                                                                                    checked: this.state.secondPropsAttributeValue === propa,
                                                                                    onChange: ()=>this.setState({
                                                                                            secondPropsAttributeValue: propa
                                                                                        })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                    htmlFor: propa,
                                                                                    children: propa
                                                                                })
                                                                            ]
                                                                        }, propa))
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                    ]
                                                }),
                                                this.props.data.isCustomized ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().text),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().head),
                                                                children: "Customize product's image/text."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ason),
                                                                children: [
                                                                    "*** Leave blank to use default one.",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    "*** In case of image write a web link to that image"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                minWidth: 401,
                                                                maxWidth: 450,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    row: 2,
                                                                    cols: 36,
                                                                    className: this.tarea,
                                                                    onChange: (e)=>this.setState({
                                                                            customValue: e.target.value
                                                                        }),
                                                                    ref: this.uwanja
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                minWidth: 451,
                                                                maxWidth: 500,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    row: 2,
                                                                    cols: 40,
                                                                    className: this.tarea,
                                                                    onChange: (e)=>this.setState({
                                                                            customValue: e.target.value
                                                                        }),
                                                                    ref: this.uwanja
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                minWidth: 501,
                                                                maxWidth: 576,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    row: 2,
                                                                    cols: 45,
                                                                    className: this.tarea,
                                                                    onChange: (e)=>this.setState({
                                                                            customValue: e.target.value
                                                                        }),
                                                                    ref: this.uwanja
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().err1),
                                            ref: this.err1,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
                                                success: true,
                                                size: "mini",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                                                        children: "Success, Item has been added to cart"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                        name: "warning sign"
                                                    }),
                                                    "Click the cart icon above to preview your cart."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginBottom: "2%"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                animated: true,
                                                primary: true,
                                                size: "medium",
                                                fluid: true,
                                                onClick: this.addToCart,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button.Content, {
                                                        visible: true,
                                                        children: "Add to Cart"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button.Content, {
                                                        hidden: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                            name: "shop"
                                                        })
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
                        minWidth: 577,
                        maxWidth: 899,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().odb),
                            children: [
                                this.props.data.get_urls.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.EffectFade,
                                        swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination
                                    ],
                                    navigation: true,
                                    effect: "fade",
                                    speed: 300,
                                    slidesPerView: 1,
                                    loop: true,
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().myswiper),
                                    pagination: {
                                        clickable: true
                                    },
                                    children: this.props.data.get_urls.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `http://127.0.0.1:8000${image}`,
                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ima),
                                                // ref={this.imageConte}
                                                height: 450
                                            }, image)
                                        }))
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ima),
                                    ref: this.imageConte,
                                    src: `http://127.0.0.1:8000${this.props.data.get_urls[0]}`,
                                    height: 450
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().tit),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
                                            children: this.props.data.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().sub),
                                            children: this.props.data.description
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().priQuan),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                    width: 8,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().price),
                                                            children: "Price:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().bei),
                                                            children: `${new Intl.NumberFormat("en-US", {
                                                                style: "currency",
                                                                currency: "Tsh",
                                                                minimumFractionDigits: 0
                                                            }).format(parseInt(this.state.selectedObjPrice))}`
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                    width: 8,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().qua),
                                                            children: [
                                                                "Quantity:",
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().namba),
                                                                    children: this.state.productQuantity
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().amountWrapper),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().plus),
                                                                    onClick: this.onDecrease,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                                        size: "small",
                                                                        name: "minus"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().actualAmount),
                                                                    children: this.state.productQuantity
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().minus),
                                                                    onClick: this.onIncrease,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                                        size: "small",
                                                                        name: "plus"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().customizations),
                                    children: [
                                        this.props.data.hasPropertySelection === false && this.props.data.isCustomized === false && this.props.data.hasSecondPropertySelection === false ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: " "
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().holder),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().custom),
                                                    children: "User Customizations"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ch)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                    maxWidth: 699,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                            children: [
                                                                this.props.data.hasPropertySelection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                                    width: 9,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                                children: [
                                                                                    Object.keys(this.props.data.map_property[0])[0],
                                                                                    ":"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                                style: {
                                                                                    fontSize: "14px"
                                                                                },
                                                                                children: this.state.selectedProp > 18 ? this.state.selectedProp.substr(0, 17) + ".." : this.state.selectedProp
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().radioContainer),
                                                                                children: this.props.data.property_values.map((prop)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                                type: "radio",
                                                                                                id: prop,
                                                                                                name: "property",
                                                                                                checked: this.state.selectedProp == prop,
                                                                                                onChange: ()=>this.setState({
                                                                                                        selectedProp: prop
                                                                                                    })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                                htmlFor: prop,
                                                                                                children: prop
                                                                                            })
                                                                                        ]
                                                                                    }, prop))
                                                                            })
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                                this.props.data.hasSecondPropertySelection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                                    width: 7,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                                        style: {
                                                                                            fontSize: "15px"
                                                                                        },
                                                                                        children: [
                                                                                            Object.keys(this.props.data.map_secondProps[0])[0],
                                                                                            ":"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                                        style: {
                                                                                            fontSize: "14px"
                                                                                        },
                                                                                        children: this.state.secondPropsAttributeValue.length > 15 ? this.state.secondPropsAttributeValue.substr(0, 14) + ".." : this.state.secondPropsAttributeValue
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            this.props.data.second_propsValue.map((propa)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                            type: "radio",
                                                                                            id: propa,
                                                                                            name: "propa",
                                                                                            checked: this.state.secondPropsAttributeValue === propa,
                                                                                            onChange: ()=>this.setState({
                                                                                                    secondPropsAttributeValue: propa
                                                                                                })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                            htmlFor: propa,
                                                                                            children: propa
                                                                                        })
                                                                                    ]
                                                                                }, propa))
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                            ]
                                                        }),
                                                        this.props.data.isCustomized ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().text),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().head),
                                                                        children: "Customize product's image/text."
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ason),
                                                                        children: [
                                                                            "*** Leave blank to use default one.",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                            "*** In case of image write a web link to that image"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                        row: 2,
                                                                        cols: 45,
                                                                        className: this.tarea,
                                                                        onChange: (e)=>this.setState({
                                                                                customValue: e.target.value
                                                                            }),
                                                                        ref: this.uwanja
                                                                    })
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                    minWidth: 700,
                                                    children: this.props.data.hasPropertySelection && this.props.data.secondPropsAttributeValue ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                                        width: 9,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                                children: [
                                                                                    Object.keys(this.props.data.map_property[0])[0],
                                                                                    ":"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                                children: this.state.selectedProp
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().radioContainer),
                                                                                children: this.props.data.property_values.map((prop)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                                type: "radio",
                                                                                                id: prop,
                                                                                                name: "property",
                                                                                                checked: this.state.selectedProp == prop,
                                                                                                onChange: ()=>this.setState({
                                                                                                        selectedProp: prop
                                                                                                    })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                                htmlFor: prop,
                                                                                                children: prop
                                                                                            })
                                                                                        ]
                                                                                    }, prop))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                                        width: 7,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                                            style: {
                                                                                                fontSize: "15px"
                                                                                            },
                                                                                            children: [
                                                                                                Object.keys(this.props.data.map_secondProps[0])[0],
                                                                                                ":"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                                            style: {
                                                                                                fontSize: "14px"
                                                                                            },
                                                                                            children: this.state.secondPropsAttributeValue.length > 15 ? this.state.secondPropsAttributeValue.substr(0, 14) + ".." : this.state.secondPropsAttributeValue
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                this.props.data.second_propsValue.map((propa)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                                type: "radio",
                                                                                                id: propa,
                                                                                                name: "propa",
                                                                                                checked: this.state.secondPropsAttributeValue === propa,
                                                                                                onChange: ()=>this.setState({
                                                                                                        secondPropsAttributeValue: propa
                                                                                                    })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                                htmlFor: propa,
                                                                                                children: propa
                                                                                            })
                                                                                        ]
                                                                                    }, propa))
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            this.props.data.isCustomized ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().text),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().head),
                                                                        children: "Customize product's image/text."
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ason),
                                                                        children: [
                                                                            "*** Leave blank to use default one.",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                            "*** In case of image write a web link to that image"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 700,
                                                                        maxWidth: 800,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                            row: 2,
                                                                            cols: 33,
                                                                            className: this.tarea,
                                                                            onChange: (e)=>this.setState({
                                                                                    customValue: e.target.value
                                                                                }),
                                                                            ref: this.uwanja
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 801,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                            row: 2,
                                                                            cols: 45,
                                                                            className: this.tarea,
                                                                            onChange: (e)=>this.setState({
                                                                                    customValue: e.target.value
                                                                                }),
                                                                            ref: this.uwanja
                                                                        })
                                                                    })
                                                                ]
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
                                                            children: [
                                                                this.props.data.hasPropertySelection ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                                    width: 7,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                            children: [
                                                                                Object.keys(this.props.data.map_property[0])[0],
                                                                                ":"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                            children: this.state.selectedProp
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().radioContainer),
                                                                            children: this.props.data.property_values.map((prop)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                            type: "radio",
                                                                                            id: prop,
                                                                                            name: "property",
                                                                                            checked: this.state.selectedProp == prop,
                                                                                            onChange: ()=>this.setState({
                                                                                                    selectedProp: prop
                                                                                                })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                            htmlFor: prop,
                                                                                            children: prop
                                                                                        })
                                                                                    ]
                                                                                }, prop))
                                                                        })
                                                                    ]
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                                this.props.data.hasSecondPropertySelection ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                                    width: 7,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pName),
                                                                                        style: {
                                                                                            fontSize: "15px"
                                                                                        },
                                                                                        children: [
                                                                                            Object.keys(this.props.data.map_secondProps[0])[0],
                                                                                            ":"
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().pValue),
                                                                                        style: {
                                                                                            fontSize: "14px"
                                                                                        },
                                                                                        children: this.state.secondPropsAttributeValue.length > 18 ? this.state.secondPropsAttributeValue.substr(0, 17) + ".." : this.state.secondPropsAttributeValue
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            this.props.data.second_propsValue.map((propa)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().rad),
                                                                                            type: "radio",
                                                                                            id: propa,
                                                                                            name: "propa",
                                                                                            checked: this.state.secondPropsAttributeValue === propa,
                                                                                            onChange: ()=>this.setState({
                                                                                                    secondPropsAttributeValue: propa
                                                                                                })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().label),
                                                                                            htmlFor: propa,
                                                                                            children: propa
                                                                                        })
                                                                                    ]
                                                                                }, propa))
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                                this.props.data.isCustomized ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {
                                                                    width: 9,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().text),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().head),
                                                                                children: "Customize product's image/text."
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().ason),
                                                                                children: [
                                                                                    "*** Leave blank to use default one.",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    "*** In case of image write a web link to that image"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                                minWidth: 700,
                                                                                maxWidth: 800,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                                    row: 2,
                                                                                    cols: 33,
                                                                                    className: this.tarea,
                                                                                    onChange: (e)=>this.setState({
                                                                                            customValue: e.target.value
                                                                                        }),
                                                                                    ref: this.uwanja
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                                minWidth: 801,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                                    row: 2,
                                                                                    cols: 36,
                                                                                    className: this.tarea,
                                                                                    onChange: (e)=>this.setState({
                                                                                            customValue: e.target.value
                                                                                        }),
                                                                                    ref: this.uwanja
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_static_css_preview_module_css__WEBPACK_IMPORTED_MODULE_10___default().err1),
                                            ref: this.err1,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
                                                success: true,
                                                size: "mini",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                                                        children: "Success, Item has been added to cart"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                        name: "warning sign"
                                                    }),
                                                    "Click the cart icon above to preview your cart."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginBottom: "2%"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                animated: true,
                                                primary: true,
                                                size: "medium",
                                                fluid: true,
                                                onClick: this.addToCart,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button.Content, {
                                                        visible: true,
                                                        children: "Add to Cart"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button.Content, {
                                                        hidden: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                                                            name: "shop"
                                                        })
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
                        minWidth: 900,
                        children: "This page is only reserved for small screen devices ranging from 200px to 400px... So your device is out of bound"
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,159,675,226,196,443], () => (__webpack_exec__(6600)));
module.exports = __webpack_exports__;

})();