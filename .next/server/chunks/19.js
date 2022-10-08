"use strict";
exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 8019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3437);
/* harmony import */ var _static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6215);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4225);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);










// import MediaQuery from 'react-responsive'  // https://www.npmjs.com/package/react-responsive

const MediaQuery = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/NavBar.js -> " + "react-responsive"
        ]
    },
    ssr: false
});
// Hii jinsi ya ku-import hivi ndo ime-solve tatizo la media-Queries kukataa kusema kuwa there is
// Hydaration error na now kila kitu kinaenda sawa nahisi kila unavyooimport hii ssr inabidi iwe
// False... Give credit to this man...https://lightrun.com/answers/yocontra-react-responsive-nextjs-expected-server-html-to-contain-a-matching-div-in-div
// Haa hii error imeniangaisha sana mpaka nikataka nikate tamaa but now imekuwa solved...
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props)=>{
    const userNameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const actualPreview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const showProfile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const changeProfileForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const spanToChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const imageToDisappear = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passInp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const oldPassInp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const err = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const heade = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const changePass = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const topDiv = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const sideBarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const profileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const list = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const kapu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const kapuLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: profile_file , 1: setProfileFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: profile_pic , 1: setProfilePic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: jina , 1: setJina  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: dimension , 1: setDimension  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: hasDefaultProfile , 1: setHasDefaultProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: oldPassword , 1: setOldPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: userId , 1: setUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: hasProfile , 1: setHasProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: qr , 1: setQr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: filteredQs , 1: setFilteredQs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loginIn , 1: setLoginIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: searchTerm , 1: setSearchTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const toggleSidebarOn = async ()=>{
        window.scrollTo(0, 0);
        sideBarRef.current.style.display = "block";
        topDiv.current.style.pointerEvents = "none";
        document.body.style.overflow = "hidden";
        topDiv.current.style.opacity = "0.1";
        console.log("Sometimes inafeli");
    };
    const preview = async (e)=>{
        console.log("Hello world");
        const file = e.target.files[0];
        console.log("This is the file on the preview");
        console.log(file);
        if (file && file.type.substr(0, 5) === "image") {
            setProfileFile(file);
            const reader = new FileReader();
            reader.onload = ()=>{
                setProfilePic(reader.result);
                console.log("This is the new image");
                actualPreview.current.style.backgroundImage = `url(${reader.result})`;
                actualPreview.current.style.backgroundSize = "100% 100%";
                actualPreview.current.style.backgroundRepeat = "no-repeat";
            };
            reader.readAsDataURL(file);
        } else {
            setProfilePic(null);
        }
    };
    const redeamMeToProfile = async (e)=>{
        changeProfileForm.current.style.display = "none";
        showProfile.current.style.display = "block";
    };
    const editPro = async (e)=>{
        console.log("Im adding changes to update profile");
        e.preventDefault();
        const file = profile_file;
        if (file || jina.trim().length > 0) {
            console.log("Hey there is name and image associtated");
            console.log(file, jina);
            const image = file;
            const uploadData = new FormData();
            uploadData.append("id", userId);
            uploadData.append("image", image);
            jina.trim().length > 1 ? uploadData.append("name", jina) : uploadData.append("name", "431EFD#");
            const response = await fetch("http://localhost:8000/api/edit/", {
                method: "POST",
                body: uploadData
            });
            const data = await response.json();
            console.log("This is the response after updating profile");
            console.log(data);
            fetchSomeData();
            redeamMeToProfile();
        } else {
            console.log("User is trying to post null data...");
        }
    };
    const showChangeProfile = async (e)=>{
        console.log("me waiting for something");
        changeProfileForm.current.style.display = "block";
        showProfile.current.style.display = "none";
        userNameRef.current.value = name;
    };
    const changeNyila = async ()=>{
        if (changePass.current.style.display === "none") {
            heade.current.style.fontSize = "18px";
            heade.current.style.color = "white";
            heade.current.style.marginBottom = "0%";
            heade.current.style.paddingBottom = "0%";
            changePass.current.style.display = "block";
        } else {
            changePass.current.style.display = "none";
            heade.current.style.fontSize = "16px";
            heade.current.style.color = "grey";
        }
    };
    const changePassword = async (e)=>{
        e.preventDefault();
        console.log("Hello im trying to change password...");
        console.log(oldPassword, password, userId);
        if (oldPassword.trim().length === 0 || password.trim().length === 0) {
            // hey we don't accept empty fields...
            setErrorMessage("We don't accept empty fields!");
            imageToDisappear.current.style.display = "inline";
            spanToChange.current.style.color = "rgb(184, 82, 82)";
            err.current.style.display = "block";
            // How to clear time ref in functional components https://stackoverflow.com/questions/56597788/how-to-do-timeout-and-then-clear-timeout-in-react-functional-component
            timerRef.current = setTimeout(()=>{
                err.current.style.display = "none";
            }, 5000);
            setOldPassword("");
            setPassword("");
            passInp.current.value = "";
            oldPassInp.current.value = "";
            return;
        }
        if (password.trim().length > 6 && oldPassword.trim().length > 0) {
            const response = await fetch("http://127.0.0.1:8000/api/change_password/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: userId,
                    password,
                    old: oldPassword
                })
            });
            let data = await response.json();
            if (data.message) {
                console.log("Password has been changed successful");
                imageToDisappear.current.style.display = "none";
                spanToChange.current.style.color = "green";
                setErrorMessage("Password have been changed");
                err.current.style.display = "block";
                timerRef.current = setTimeout(()=>{
                    err.current.style.display = "none";
                }, 5000);
                setOldPassword("");
                setPassword("");
                passInp.current.value = "";
                oldPassInp.current.value = "";
                return;
            } else {
                imageToDisappear.current.style.display = "inline";
                spanToChange.current.style.color = "rgb(184, 82, 82)";
                setErrorMessage("Failed, incorrect credentials");
                err.current.style.display = "block";
                timerRef.current = setTimeout(()=>{
                    err.current.style.display = "none";
                }, 5000);
                setOldPassword("");
                setPassword("");
                passInp.current.value = "";
                oldPassInp.current.value = "";
                return;
            }
        } else {
            imageToDisappear.current.style.display = "inline";
            spanToChange.current.style.color = "rgb(184, 82, 82)";
            console.log("Weak password");
            setErrorMessage("Failed, use strong password");
            err.current.style.display = "block";
            timerRef.current = setTimeout(()=>{
                err.current.style.display = "none";
            }, 5000);
            setOldPassword("");
            setPassword("");
            passInp.current.value = "";
            oldPassInp.current.value = "";
            return;
        }
    };
    const toggleSidebarOff = async ()=>{
        sideBarRef.current.style.display = "none";
        topDiv.current.style.opacity = "1";
        document.body.style.overflow = "visible";
        topDiv.current.style.pointerEvents = "auto";
    };
    const fetchSomeData = async ()=>{
        try {
            const tokens = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null;
            console.log("Im fetching some data");
            if (tokens === null) {
                console.log("Im inside here");
                setLoginIn(null);
                return;
            }
            console.log("Wake up mr");
            const decodedRefreshToken = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(tokens.refresh);
            const expireRefreshTime = decodedRefreshToken.exp;
            const decodedAccessData = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(tokens.access);
            const expireAccessTime = decodedAccessData.exp;
            const diff = expireAccessTime * 1000 - Date.now();
            if (diff < 1) {
                console.log("Hapa maanake imesha-expire");
                if (expireRefreshTime * 1000 - Date.now < 1) {
                    setLoginIn(null);
                    return;
                }
                let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        refresh: tokens.refresh
                    })
                });
                let data = await response.json();
                localStorage.setItem("authTokens", JSON.stringify(data));
                let user = decodedAccessData.user_id;
                setLoginIn(true);
                setUserId(user);
                // if we detect the user have been login then we needed to fetch the profile picture of the
                // login user... How we do that is to query profile by that given user... You should make
                // query to the  ViewProfileAPiView...
                let profile = await fetch("http://127.0.0.1:8000/api/profile/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: user
                    })
                });
                let fetchedProfile = await profile.json();
                setProfile(fetchedProfile.profile_picture);
                setName(fetchedProfile.full_name);
                setEmail(fetchedProfile.get_email);
                console.log(fetchedProfile);
                if (!fetchedProfile.profile_picture) {
                    // then i don't have profile picture we should use the default one...
                    setHasProfile(false);
                } else {
                    setHasProfile(true);
                }
                if (fetchedProfile.profile_picture === "/media/images/profile.png") {
                    setHasDefaultProfile(true);
                } else {
                    setHasDefaultProfile(false);
                }
                // so now user has logged in you need to fetch cart from the backend
                let check = await fetch("http://127.0.0.1:8000/api/cartproducts/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: user
                    })
                });
                let output = await check.json();
                if (output.message) {
                    // then here there is no any cart or cartproducts associated by that user
                    return;
                }
                // otherwise here then we have the cartproducts associated by this user
                if (output.length < 1) {
                    // then user has cart but has no any cartproduct added to that cart
                    return;
                }
                // from all product count down quantity to display them...
                let sum = 0;
                for (let out of output){
                    sum = out.quantity + sum;
                }
                setAmount(sum);
                // Hii nime-add kama ya kukazia but unaweza ukaitoa kama unaona haifaiii..
                if (loginIn == null) {
                    setAmount(null);
                }
            } else {
                console.log("I have active access token");
                // Hapa inamaana accessToken has not expired.. User is aunthenticated...
                setLoginIn(true);
                let user1 = decodedAccessData.user_id;
                setUserId(user1);
                let profile1 = await fetch("http://127.0.0.1:8000/api/profile/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: user1
                    })
                });
                let fetchedProfile1 = await profile1.json();
                setProfile(fetchedProfile1.profile_picture);
                setName(fetchedProfile1.full_name);
                setEmail(fetchedProfile1.get_email);
                console.log(fetchedProfile1);
                if (!fetchedProfile1.profile_picture) {
                    setHasProfile(false);
                } else {
                    setHasProfile(true);
                }
                if (fetchedProfile1.profile_picture === "/media/images/profile.png") {
                    console.log("IM inside indeed");
                    setHasDefaultProfile(true);
                } else {
                    console.log("Im setting has default login to false");
                    setHasDefaultProfile(false);
                }
                // so now user has logged in you need to fetch cart from the backend
                let check1 = await fetch("http://127.0.0.1:8000/api/cartproducts/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: user1
                    })
                });
                console.log("Im waiting for love");
                let output1 = await check1.json();
                console.log(output1);
                if (output1.message) {
                    // then here there is no any cart or cartproducts associated by that user
                    return;
                }
                // otherwise here then we have the cartproducts associated by this user
                if (output1.length < 1) {
                    // then user has cart but has no any cartproduct added to that cart
                    return;
                }
                // from all product count down quantity to display them...
                console.log("I have some cartproducts ");
                let sum1 = 0;
                for (let out1 of output1){
                    sum1 = out1.quantity + sum1;
                }
                setAmount(sum1);
                console.log("This is final amount");
                console.log(amount);
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    // https://stackoverflow.com/questions/60476155/is-it-safe-to-use-ref-current-as-useeffects-dependency-when-ref-points-to-a-dom
    const hunter = async ()=>{
        // the aim of this function is to hunt and know the position of the
        // Cart icon and then using that position right to position the label
        // at the right of the cart...
        if (kapu.current) {
            const dimensions = kapu.current.getBoundingClientRect();
            console.log(dimensions.top, dimensions.right, dimensions.left, dimensions.bottom);
            // console.log('This is the width of the kapuIcon');
            // console.log(kapuLabel.current.offsetWidth, typeof kapuLabel.current.offsetWidth)
            setDimension([
                dimensions.top,
                dimensions.right,
                dimensions.left,
                dimensions.bottom, 
            ]);
        }
    };
    const fetchFromProducts = async ()=>{
        // our input is in searchRef....
        // fetch all data initiall and assign them inside qs
        // hii itatusaidia sana sio kila muda tu-send request
        // the server.. What you need to do is to get all and
        // store them inside that qs....
        let pro = await fetch("http://127.0.0.1:8000/api/products/");
        let json = await pro.json();
        console.log("This is the json for you");
        console.log(json);
        // Then from this I should convert all in array containing
        // the Description -> category
        let output = json.map((value)=>{
            if (value.description) {
                return `${value.description} => ${value.title} (${value.category})`;
            }
            return `${value.title}`;
        });
        console.log("This is converted one for you");
        console.log(output);
        setQr(output);
    };
    const onLogout = (e)=>{
        e.preventDefault();
        // mpaka hapa huyu mtu amelogin so lazima hii value itakuwepo in localstorage
        localStorage.removeItem("authTokens");
        window.location.reload(); // this will refresh the page..
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (searchRef.current.value.trim().length === 0) {
            console.log("Im inside its empty");
            // maanake user hajaandika chochote ko prevent default
            return;
        }
        // otherwise everything is good then we should redirect to the
        // result page...
        console.log("Everything is good....");
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
            pathname: "/output",
            query: {
                search: searchRef.current.value
            }
        });
    };
    const searchFilter = async (e)=>{
        e.preventDefault();
        // let clicked = e.target.id
        // console.log('This is the clicked text for you')
        // console.log(clicked)
        let clicked = e.target.id;
        clicked = clicked.replace("=>", "");
        clicked = clicked.replace("(", "");
        clicked = clicked.replace(")", "");
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
            pathname: "/output",
            query: {
                search: clicked
            }
        });
    // console.log('Now im here')
    // //console.log(e.target.name)
    // console.log(e.target.id)
    };
    const changeAttrs = async (e)=>{
        setSearchTerm(e.target.value); //.then(value => {console.log(value)})
        console.log("IM change attrs");
    };
    const filterToggleOff = async (e)=>{
        if (searchRef.current) {
            list.current.style.display = "none";
            searchRef.current.style.borderRadius = "30px";
        }
    };
    // Ko nishajua shida ipo wap ni kwamba all these onEffect get executed intially when the
    // component rendered ndo maana inasababisha hiyo error au misbehave
    // unayokutana nayo hapo ko nakushauri embu rudia hii concept ya useEffect coz hizi
    // useEffect zote ulizoziandika hapa hazina tofauti all of them get executed on mount.....
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // so hii itakua detected if the width of the screen is from 900 and so on
        console.log("Hey im here but this sreen.width is obstacle to me");
        let filtered = qr.filter((value)=>{
            if (searchTerm === "") {
                return;
            } else if (searchTerm === null) {
                return;
            } else if (value.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return value;
            }
            return console.log("Nothing happened");
        });
        setFilteredQs(filtered);
    }, [
        searchTerm
    ]);
    // // this is executed on Change and not on mounting of the state..
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("This is the search ref for you");
        console.log(searchRef);
        if (searchRef.current !== null) {
            // this means on mount length == 0, then now it say it changed to length of 34... check which has filter..
            if (filteredQs.length === 0) {
                // then search bar should be restored in initial position...
                // Kuna mtu ana-irestore in its initial position i think in useEffect ya hapo juu....
                list.current.style.display = "none";
                searchRef.current.style.borderRadius = "30px";
            } else {
                const top = searchRef.current.getBoundingClientRect();
                console.log("this is from useEffect hook");
                console.log(top.top, top.right, top.left, top.bottom);
                searchRef.current.style.borderRadius = "0px";
                searchRef.current.style["border-top-right-radius"] = "30px";
                searchRef.current.style["border-top-left-radius"] = "30px";
                list.current.style.display = "block";
                list.current.style.top = top.bottom.toString() + "px";
                list.current.style.left = top.left.toString() + "px";
                list.current.style.width = searchRef.current.offsetWidth.toString() + "px";
            }
        }
    }, [
        filteredQs
    ]);
    // this is how to track the changes of ref DOM element...
    // https://stackoverflow.com/questions/60476155/is-it-safe-to-use-ref-current-as-useeffects-dependency-when-ref-points-to-a-dom
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        hunter();
    }, [
        kapu.current
    ]);
    // Ko huyu dimension anavyokuwa assigned then us we position the label elements..
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // First check if kapuLabel ref is found because for one which has zero
        // cartproducts we don't have label on cart..
        console.log("IM HERE NOW", kapuLabel.current);
        if (kapuLabel.current) {
            kapuLabel.current.style.position = "absolute";
            kapuLabel.current.style.top = dimension[0];
            kapuLabel.current.style.right = dimension[1];
            kapuLabel.current.style.fontWeight = "bold";
            console.log("LETS PREVIEW...");
            console.log(kapuLabel.current.style.right, typeof kapuLabel.current.style.right);
            kapuLabel.current.style.right = parseInt(dimension[1]) - kapuLabel.current.offsetWidth * 0.9;
        }
    }, [
        dimension
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchSomeData();
        fetchFromProducts();
        console.log("Has default profile", hasDefaultProfile);
        const fetchInterval = setInterval(fetchSomeData, 5000);
        // this code will be executed initially when component is mounted..
        // this video explains much more https://www.youtube.com/watch?v=0ZJgIjIuY7U
        console.log("Hello world");
        console.log(amount);
        return ()=>{
            clearInterval(fetchInterval);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: filterToggleOff,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
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
                            ref: topDiv,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().top),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionStyle),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().behaveLikenav),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                        minWidth: 200,
                                                        maxWidth: 576,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().inlineForm),
                                                            onSubmit: handleSubmit,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                    maxWidth: 450,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().brand),
                                                                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                                                                                pathname: "/"
                                                                            }),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "../static/images/popo1.png",
                                                                            width: 30,
                                                                            height: 28
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                    minWidth: 451,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().brand),
                                                                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                                                                                pathname: "/"
                                                                            }),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "../static/images/logo.png",
                                                                            width: 90
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    ref: searchRef,
                                                                    type: "text",
                                                                    placeholder: "Type and search...",
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().search),
                                                                    onChange: changeAttrs
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/static/images/magnifying-glass.png",
                                                                    alt: "search-icon",
                                                                    height: 20,
                                                                    width: 20,
                                                                    title: "search",
                                                                    onClick: handleSubmit,
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchIcon)
                                                                }),
                                                                amount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/cart",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/static/images/shopping-cart.png",
                                                                                alt: "search-icon",
                                                                                height: 20,
                                                                                width: 20,
                                                                                title: "Cart",
                                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().shop),
                                                                                ref: kapu
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                ref: kapuLabel,
                                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().amo),
                                                                                children: amount
                                                                            })
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/cart",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/static/images/shopping-cart.png",
                                                                            alt: "search-icon",
                                                                            height: 20,
                                                                            width: 20,
                                                                            title: "Cart",
                                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().shop),
                                                                            ref: kapu
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().bar),
                                                                    onClick: toggleSidebarOn,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "../static/images/paragraph.png",
                                                                        width: 22,
                                                                        height: 22
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 577,
                                                        maxWidth: 899,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().inlineForm),
                                                                onSubmit: handleSubmit,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().brand),
                                                                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                                                                                pathname: "/"
                                                                            }),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "../static/images/logo.png",
                                                                            width: 108
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        ref: searchRef,
                                                                        type: "text",
                                                                        placeholder: "Type and search...",
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().search),
                                                                        onChange: changeAttrs
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/static/images/magnifying-glass.png",
                                                                        alt: "search-icon",
                                                                        height: 20,
                                                                        width: 20,
                                                                        title: "search",
                                                                        onClick: handleSubmit,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchIcon)
                                                                    }),
                                                                    amount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                        route: "/cart",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    src: "/static/images/shopping-cart.png",
                                                                                    alt: "search-icon",
                                                                                    height: 23,
                                                                                    width: 23,
                                                                                    title: "Cart",
                                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().shop),
                                                                                    ref: kapu
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    ref: kapuLabel,
                                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().amo),
                                                                                    children: amount
                                                                                })
                                                                            ]
                                                                        })
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                        route: "/cart",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/static/images/shopping-cart.png",
                                                                                alt: "search-icon",
                                                                                height: 23,
                                                                                width: 23,
                                                                                title: "Cart",
                                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().shop),
                                                                                ref: kapu
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().bar),
                                                                        onClick: toggleSidebarOn,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "../static/images/paragraph.png",
                                                                            width: 20,
                                                                            height: 20
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                        minWidth: 900,
                                                        maxWidth: 1199,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().inlineForm),
                                                            onSubmit: handleSubmit,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().brand),
                                                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                                                                            pathname: "/"
                                                                        }),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "../static/images/logo.png",
                                                                        width: 120
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    ref: searchRef,
                                                                    type: "text",
                                                                    placeholder: "Search by jewely/product name...",
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().search),
                                                                    list: "browsers",
                                                                    onChange: changeAttrs
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/static/images/magnifying-glass.png",
                                                                    alt: "search-icon",
                                                                    height: 28,
                                                                    width: 28,
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchIcon),
                                                                    title: "Search",
                                                                    onClick: handleSubmit
                                                                }),
                                                                props.isAunthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/profile/",
                                                                    children: hasProfile ? hasDefaultProfile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/static/images/user-grey.png",
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: `http://127.0.0.1:8000${profile}`,
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().customPro),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/static/images/user-grey.png",
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/register/",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                            content: "Login/Register",
                                                                            color: "black",
                                                                            type: "button"
                                                                        })
                                                                    })
                                                                }),
                                                                amount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/cart",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartIcon),
                                                                        onClick: ()=>console.log("Hello world how are you!"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/static/images/shopping-cart.png",
                                                                                alt: "search-icon",
                                                                                height: 25,
                                                                                width: 25,
                                                                                title: "Cart",
                                                                                ref: kapu
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().amo),
                                                                                ref: kapuLabel,
                                                                                children: amount
                                                                            })
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/cart",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartIcon),
                                                                        onClick: ()=>console.log("Hello world how are you!"),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/static/images/shopping-cart.png",
                                                                            alt: "search-icon",
                                                                            height: 25,
                                                                            width: 25,
                                                                            title: "Cart"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                        minWidth: 1200,
                                                        maxWidth: 1600,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().inlineForm),
                                                            onSubmit: handleSubmit,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().brand),
                                                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                                                                            pathname: "/"
                                                                        }),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "../static/images/logo.png",
                                                                        width: 120
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    ref: searchRef,
                                                                    type: "text",
                                                                    placeholder: "Search by jewely/product name...",
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().search),
                                                                    list: "browsers",
                                                                    onChange: changeAttrs
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/static/images/magnifying-glass.png",
                                                                    alt: "search-icon",
                                                                    height: 33,
                                                                    width: 33,
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchIcon),
                                                                    title: "Search",
                                                                    onClick: handleSubmit
                                                                }),
                                                                props.isAunthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/profile/",
                                                                    children: hasProfile ? hasDefaultProfile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/static/images/user-grey.png",
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: `http://127.0.0.1:8000${profile}`,
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().customPro),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/static/images/user-grey.png",
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/register/",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                            content: "Login/Register",
                                                                            color: "black",
                                                                            type: "button"
                                                                        })
                                                                    })
                                                                }),
                                                                amount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/cart",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartIcon),
                                                                        onClick: ()=>console.log("Hello world how are you!"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/static/images/shopping-cart.png",
                                                                                alt: "search-icon",
                                                                                height: 33,
                                                                                width: 33,
                                                                                title: "Cart",
                                                                                ref: kapu
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().amo),
                                                                                ref: kapuLabel,
                                                                                children: amount
                                                                            })
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/cart",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartIcon),
                                                                        onClick: ()=>console.log("Hello world how are you!"),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/static/images/shopping-cart.png",
                                                                            alt: "search-icon",
                                                                            height: 33,
                                                                            width: 33,
                                                                            title: "Cart"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                        minWidth: 1601,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().inlineForm),
                                                            onSubmit: handleSubmit,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().brand),
                                                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                                                                            pathname: "/"
                                                                        }),
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "../static/images/logo.png",
                                                                        width: 120
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    ref: searchRef,
                                                                    type: "text",
                                                                    placeholder: "Search by jewely/product name...",
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().search),
                                                                    list: "browsers",
                                                                    onChange: changeAttrs
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/static/images/magnifying-glass.png",
                                                                    alt: "search-icon",
                                                                    height: 33,
                                                                    width: 33,
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().searchIcon),
                                                                    title: "Search",
                                                                    onClick: handleSubmit
                                                                }),
                                                                props.isAunthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/profile/",
                                                                    children: hasProfile ? hasDefaultProfile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/static/images/user-grey.png",
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: `http://127.0.0.1:8000${profile}`,
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().customPro),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/static/images/user-grey.png",
                                                                        alt: "Profile",
                                                                        height: 40,
                                                                        width: 40,
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        onMouseOver: ()=>profileRef.current.style.display = "block",
                                                                        onMouseOut: ()=>profileRef.current.style.display = "none"
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/register/",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().proPic),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                            content: "Login/Register",
                                                                            color: "black",
                                                                            type: "button"
                                                                        })
                                                                    })
                                                                }),
                                                                amount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/cart",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartIcon),
                                                                        onClick: ()=>console.log("Hello world how are you!"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: "/static/images/shopping-cart.png",
                                                                                alt: "search-icon",
                                                                                height: 33,
                                                                                width: 33,
                                                                                title: "Cart",
                                                                                ref: kapu
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().amo),
                                                                                ref: kapuLabel,
                                                                                children: amount
                                                                            })
                                                                        ]
                                                                    })
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                                    route: "/cart",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartIcon),
                                                                        onClick: ()=>console.log("Hello world how are you!"),
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/static/images/shopping-cart.png",
                                                                            alt: "search-icon",
                                                                            height: 33,
                                                                            width: 33,
                                                                            title: "Cart"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            id: "browsers",
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().dlist),
                                            ref: list,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                    minWidth: 200,
                                                    maxWidth: 576,
                                                    children: filteredQs.filter((value, index)=>index < 6).map((value, index)=>value.includes("=>") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().query),
                                                            id: value,
                                                            onClick: searchFilter,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().cat),
                                                                    id: value,
                                                                    children: `${value.substr(0, value.indexOf("=")).substr(0, 12)}...`
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().tit),
                                                                    id: value,
                                                                    children: `${value.substr(value.indexOf(">") + 1)}`
                                                                })
                                                            ]
                                                        }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().query),
                                                            id: value,
                                                            onClick: searchFilter,
                                                            children: value
                                                        }, index))
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                    minWidth: 577,
                                                    children: filteredQs.filter((value, index)=>index < 10).map((value, index)=>value.includes("=>") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().query),
                                                            id: value,
                                                            onClick: searchFilter,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().cat),
                                                                    id: value,
                                                                    children: `${value.substr(0, value.indexOf("=")).substr(0, 12)}...`
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().tit),
                                                                    id: value,
                                                                    children: `${value.substr(value.indexOf(">") + 1)}`
                                                                })
                                                            ]
                                                        }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().query),
                                                            id: value,
                                                            onClick: searchFilter,
                                                            children: value
                                                        }, index))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().toggle),
                                            ref: profileRef,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().toggle1),
                                                onMouseOver: ()=>profileRef.current.style.display = "block",
                                                onMouseOut: ()=>profileRef.current.style.display = "none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().int),
                                                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                                                                pathname: "/profile"
                                                            }),
                                                        children: "Profile"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().int),
                                                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
                                                                pathname: "/cart"
                                                            }),
                                                        children: "My Cart"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().int),
                                                        onClick: onLogout,
                                                        children: "Logout"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                props.children
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().sidebar),
                            ref: sideBarRef,
                            style: {
                                overflow: "auto"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().ss),
                                    children: [
                                        props.isAunthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: hasProfile ? hasDefaultProfile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                ref: showProfile,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        maxWidth: 350,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 60,
                                                                width: 60,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "30%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 351,
                                                        maxWidth: 400,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 65,
                                                                width: 65,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "30%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 401,
                                                        maxWidth: 450,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 65,
                                                                width: 65,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "26%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 451,
                                                        maxWidth: 500,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 70,
                                                                width: 70,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "26%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 501,
                                                        maxWidth: 576,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 75,
                                                                width: 75,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "24%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 577,
                                                        maxWidth: 650,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "24.5%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 651,
                                                        maxWidth: 700,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "23%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 701,
                                                        maxWidth: 800,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "20%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 801,
                                                        maxWidth: 899,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 100,
                                                                width: 100,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "20%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 20 ? name.substr(0, 20) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                        minWidth: 900,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Out of screen width bound"
                                                        })
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                ref: showProfile,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        maxWidth: 350,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 60,
                                                                width: 60,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "30%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 351,
                                                        maxWidth: 400,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 65,
                                                                width: 65,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "30%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 401,
                                                        maxWidth: 450,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 65,
                                                                width: 65,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "26%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 451,
                                                        maxWidth: 500,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 70,
                                                                width: 70,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "26%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 501,
                                                        maxWidth: 576,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 75,
                                                                width: 75,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "24%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 577,
                                                        maxWidth: 650,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "24.5%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 651,
                                                        maxWidth: 700,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "23%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 701,
                                                        maxWidth: 800,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "20%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 801,
                                                        maxWidth: 899,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `http://127.0.0.1:8000${profile}`,
                                                                alt: "Profile",
                                                                height: 100,
                                                                width: 100,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "20%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 20 ? name.substr(0, 20) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                        minWidth: 900,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Out of screen width bound"
                                                        })
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                ref: showProfile,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        maxWidth: 350,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 60,
                                                                width: 60,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "30%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 351,
                                                        maxWidth: 400,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 65,
                                                                width: 65,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "30%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 401,
                                                        maxWidth: 450,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 65,
                                                                width: 65,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "26%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 451,
                                                        maxWidth: 500,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 70,
                                                                width: 70,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "26%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 13 ? name.substr(0, 12) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 501,
                                                        maxWidth: 576,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 75,
                                                                width: 75,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "24%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "8%",
                                                                            fontSize: "120%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 577,
                                                        maxWidth: 650,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "24.5%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 651,
                                                        maxWidth: 700,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "23%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 701,
                                                        maxWidth: 800,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 90,
                                                                width: 90,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "20%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 18 ? name.substr(0, 18) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                        minWidth: 801,
                                                        maxWidth: 899,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/static/images/user-grey.png",
                                                                alt: "Profile",
                                                                height: 100,
                                                                width: 100,
                                                                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().phoneProfile)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "5%",
                                                                    left: "20%"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        style: {
                                                                            marginBottom: "0%",
                                                                            paddingBottom: "12%",
                                                                            fontSize: "140%"
                                                                        },
                                                                        children: name.length > 20 ? name.substr(0, 20) + "..." : name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        style: {
                                                                            display: "block",
                                                                            border: "2px solid grey",
                                                                            background: "white",
                                                                            padding: "5%",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        onClick: showChangeProfile,
                                                                        children: "Edit Profile"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                        minWidth: 900,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Out of screen width bound"
                                                        })
                                                    })
                                                ]
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "You need to login to access your profile!"
                                            })
                                        }),
                                        props.isAunthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                marginTop: "2%",
                                                display: "none",
                                                overflowX: "hidden"
                                            },
                                            ref: changeProfileForm,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "USERNAME:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                            maxWidth: 400,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    style: {
                                                                        width: "90%",
                                                                        border: "2px solid grey"
                                                                    },
                                                                    ref: userNameRef,
                                                                    onChange: (e)=>setJina(e.target.value)
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                            minWidth: 401,
                                                            maxWidth: 550,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    style: {
                                                                        width: "70%",
                                                                        border: "2px solid grey"
                                                                    },
                                                                    ref: userNameRef,
                                                                    onChange: (e)=>setJina(e.target.value)
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                            minWidth: 551,
                                                            maxWidth: 650,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    style: {
                                                                        width: "55%",
                                                                        border: "2px solid grey"
                                                                    },
                                                                    ref: userNameRef,
                                                                    onChange: (e)=>setJina(e.target.value)
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MediaQuery, {
                                                            minWidth: 651,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    style: {
                                                                        width: "45%",
                                                                        border: "2px solid grey"
                                                                    },
                                                                    ref: userNameRef,
                                                                    onChange: (e)=>setJina(e.target.value)
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            style: {
                                                                marginTop: "3%"
                                                            },
                                                            children: "CHANGE AVATAR:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            accept: "images/*",
                                                            id: "upload",
                                                            type: "file",
                                                            onChange: preview,
                                                            style: {
                                                                display: "none"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            ref: actualPreview,
                                                            htmlFor: "upload",
                                                            style: {
                                                                backgroundImage: `url(http://127.0.0.1:8000${profile})`,
                                                                backgroundSize: "100% 100%",
                                                                backgroundRepeat: "no-repeat",
                                                                border: "2px solid rgb(179, 177, 177)",
                                                                width: "80px",
                                                                height: "70px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                cursor: "pointer"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/imag.png",
                                                                width: 25,
                                                                height: 25
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                            maxWidth: 400,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "submit",
                                                                onClick: editPro,
                                                                style: {
                                                                    marginTop: "2%",
                                                                    width: "90%",
                                                                    border: "2px solid grey",
                                                                    fontWeight: "bold",
                                                                    color: "grey"
                                                                },
                                                                children: "Update Profile"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                            minWidth: 401,
                                                            maxWidth: 550,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "submit",
                                                                onClick: editPro,
                                                                style: {
                                                                    marginTop: "2%",
                                                                    width: "70%",
                                                                    border: "2px solid grey",
                                                                    fontWeight: "bold",
                                                                    color: "grey"
                                                                },
                                                                children: "Update Profile"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                            minWidth: 551,
                                                            maxWidth: 650,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "submit",
                                                                onClick: editPro,
                                                                style: {
                                                                    marginTop: "2%",
                                                                    width: "55%",
                                                                    border: "2px solid grey",
                                                                    fontWeight: "bold",
                                                                    color: "grey"
                                                                },
                                                                children: "Update Profile"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                            minWidth: 651,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "submit",
                                                                onClick: editPro,
                                                                style: {
                                                                    marginTop: "2%",
                                                                    width: "45%",
                                                                    border: "2px solid grey",
                                                                    fontWeight: "bold",
                                                                    color: "grey"
                                                                },
                                                                children: "Update Profile"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    style: {
                                                        position: "absolute",
                                                        top: "2%",
                                                        fontSize: "87%",
                                                        textDecoration: "underline",
                                                        cursor: "pointer",
                                                        color: "whitesmoke"
                                                    },
                                                    onClick: redeamMeToProfile,
                                                    children: "Back"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().hrulb)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/cart"),
                                            children: "My Cart"
                                        }),
                                        props.isAunthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            onClick: onLogout,
                                            children: "Logout"
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/login"),
                                                    children: "Login"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/jisajili"),
                                                    children: "Register"
                                                })
                                            ]
                                        }),
                                        props.isAunthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    style: {
                                                        border: "1px solid grey"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            ref: heade,
                                                            onClick: changeNyila,
                                                            children: "Change password"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                display: "none"
                                                            },
                                                            ref: changePass,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        children: "Old password:"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        maxWidth: 400,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "password",
                                                                            ref: oldPassInp,
                                                                            onChange: (e)=>setOldPassword(e.target.value),
                                                                            style: {
                                                                                width: "90%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 401,
                                                                        maxWidth: 550,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "password",
                                                                            ref: oldPassInp,
                                                                            onChange: (e)=>setOldPassword(e.target.value),
                                                                            style: {
                                                                                width: "70%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 551,
                                                                        maxWidth: 650,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "password",
                                                                            ref: oldPassInp,
                                                                            onChange: (e)=>setOldPassword(e.target.value),
                                                                            style: {
                                                                                width: "55%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 651,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "password",
                                                                            ref: oldPassInp,
                                                                            onChange: (e)=>setOldPassword(e.target.value),
                                                                            style: {
                                                                                width: "45%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        children: "New password:"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        maxWidth: 400,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "password",
                                                                            ref: passInp,
                                                                            onChange: (e)=>setPassword(e.target.value),
                                                                            style: {
                                                                                width: "90%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 401,
                                                                        maxWidth: 550,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "password",
                                                                            ref: passInp,
                                                                            onChange: (e)=>setPassword(e.target.value),
                                                                            style: {
                                                                                width: "70%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 551,
                                                                        maxWidth: 650,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "password",
                                                                            ref: passInp,
                                                                            onChange: (e)=>setPassword(e.target.value),
                                                                            style: {
                                                                                width: "55%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 651,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "password",
                                                                            ref: passInp,
                                                                            onChange: (e)=>setPassword(e.target.value),
                                                                            style: {
                                                                                width: "45%"
                                                                            }
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        style: {
                                                                            marginTop: "1%",
                                                                            display: "none"
                                                                        },
                                                                        ref: err,
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                ref: imageToDisappear,
                                                                                src: "../static/images/warning.png",
                                                                                width: 12
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                style: {
                                                                                    color: "rgb(184, 82, 82)",
                                                                                    marginLeft: "2%"
                                                                                },
                                                                                ref: spanToChange,
                                                                                children: errorMessage
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        maxWidth: 400,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            style: {
                                                                                marginTop: "3%",
                                                                                width: "90%",
                                                                                fontWeight: "bold",
                                                                                marginBottom: "3%"
                                                                            },
                                                                            className: "btn btn-primary",
                                                                            onClick: changePassword,
                                                                            children: "Change"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 401,
                                                                        maxWidth: 550,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            style: {
                                                                                marginTop: "3%",
                                                                                width: "70%",
                                                                                fontWeight: "bold",
                                                                                marginBottom: "3%"
                                                                            },
                                                                            className: "btn btn-primary",
                                                                            onClick: changePassword,
                                                                            children: "Change"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 551,
                                                                        maxWidth: 650,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            style: {
                                                                                marginTop: "3%",
                                                                                width: "55%",
                                                                                fontWeight: "bold",
                                                                                marginBottom: "3%"
                                                                            },
                                                                            className: "btn btn-primary",
                                                                            onClick: changePassword,
                                                                            children: "Change"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                                                                        minWidth: 651,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            style: {
                                                                                marginTop: "3%",
                                                                                width: "45%",
                                                                                fontWeight: "bold",
                                                                                marginBottom: "3%"
                                                                            },
                                                                            className: "btn btn-primary",
                                                                            onClick: changePassword,
                                                                            children: "Change"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().close),
                                    onClick: toggleSidebarOff,
                                    children: "\xd7"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().foo),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                        minWidth: 200,
                        maxWidth: 400,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().bobo),
                            style: {
                                overflowX: "hidden"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "../static/images/pin.png",
                                                        width: 15,
                                                        height: 15,
                                                        style: {
                                                            marginRight: "10px"
                                                        }
                                                    }),
                                                    "Kariakoo, Dar es salaam."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                            style: {
                                                paddingTop: "1%"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "../static/images/tc2.png",
                                                        width: 15,
                                                        height: 15,
                                                        style: {
                                                            marginRight: "10px"
                                                        }
                                                    }),
                                                    "+255756144060."
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                            style: {
                                                paddingTop: "1%"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "../static/images/email.png",
                                                        width: 15,
                                                        height: 15,
                                                        style: {
                                                            marginRight: "10px"
                                                        }
                                                    }),
                                                    "support@personalizer.co.tz"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe2),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Follow Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                            target: "_blank",
                                            href: "https://google.com/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                name: "facebook",
                                                size: "large"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                            target: "_blank",
                                            href: "https://google.com/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                name: "instagram",
                                                size: "large"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                        minWidth: 401,
                        maxWidth: 899,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().bobo),
                            style: {
                                overflowX: "hidden"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                        width: 11,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/pin.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "Kariakoo, Dar es salaam."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    style: {
                                                        paddingTop: "1%"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/tc2.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "+255756144060."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    style: {
                                                        paddingTop: "1%"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/email.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "support@personalizer.co.tz"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                        width: 5,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe2),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Follow Us"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                                    target: "_blank",
                                                    href: "https://google.com/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "facebook",
                                                        size: "large"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                                    target: "_blank",
                                                    href: "https://google.com/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "instagram",
                                                        size: "large"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                        minWidth: 900,
                        maxWidth: 1199,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().bobo),
                            style: {
                                overflowX: "hidden"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                        width: 8,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/pin.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "Kariakoo, Dar es salaam."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    style: {
                                                        paddingTop: "1%"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/tc2.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "+255756144060."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    style: {
                                                        paddingTop: "1%"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/email.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "support@personalizer.co.tz"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                        width: 8,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe2),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Follow Us"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                                    target: "_blank",
                                                    href: "https://google.com/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "facebook",
                                                        size: "large"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                                    target: "_blank",
                                                    href: "https://google.com/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "instagram",
                                                        size: "large"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                        minWidth: 1200,
                        maxWidth: 1651,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().bobo),
                            style: {
                                overflowX: "hidden"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                        width: 8,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/pin.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "Kariakoo, Dar es salaam."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    style: {
                                                        paddingTop: "1%"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/tc2.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "+255756144060."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    style: {
                                                        paddingTop: "1%"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/email.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "support@personalizer.co.tz"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                        width: 8,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe2),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Follow Us"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                                    target: "_blank",
                                                    href: "https://google.com/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "facebook",
                                                        size: "large"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                                    target: "_blank",
                                                    href: "https://google.com/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "instagram",
                                                        size: "large"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MediaQuery, {
                        minWidth: 1652,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().bobo),
                            style: {
                                overflowX: "hidden"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                        width: 8,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/pin.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "Kariakoo, Dar es salaam."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    style: {
                                                        paddingTop: "1%"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/tc2.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "+255756144060."
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                                    style: {
                                                        paddingTop: "1%"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "../static/images/email.png",
                                                                width: 15,
                                                                height: 15,
                                                                style: {
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            "support@personalizer.co.tz"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
                                        width: 8,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().kibe2),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Follow Us"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                                    target: "_blank",
                                                    href: "https://google.com/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "facebook",
                                                        size: "large"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: (_static_css_index_module_css__WEBPACK_IMPORTED_MODULE_10___default().lin),
                                                    target: "_blank",
                                                    href: "https://google.com/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                        name: "instagram",
                                                        size: "large"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
});


/***/ })

};
;