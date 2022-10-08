import React, { useState, useEffect, useRef } from 'react';
import { Container, Button, Icon, Label, Grid } from 'semantic-ui-react'
import Head from 'next/head';
import styles from '../static/css/index.module.css';
import { Link } from '../routes';
import Image from 'next/image'
import Router from 'next/router'
import jwt_decode from "jwt-decode"
import Media from 'react-media';
// import MediaQuery from 'react-responsive'  // https://www.npmjs.com/package/react-responsive
import dynamic from 'next/dynamic'

const MediaQuery = dynamic(() => {
    return import ("react-responsive")
}, {ssr: false})
// Hii jinsi ya ku-import hivi ndo ime-solve tatizo la media-Queries kukataa kusema kuwa there is 
// Hydaration error na now kila kitu kinaenda sawa nahisi kila unavyooimport hii ssr inabidi iwe 
// False... Give credit to this man...https://lightrun.com/answers/yocontra-react-responsive-nextjs-expected-server-html-to-contain-a-matching-div-in-div
// Haa hii error imeniangaisha sana mpaka nikataka nikate tamaa but now imekuwa solved...
export default props => {
    const topDiv = useRef(null)
    const sideBarRef = useRef(null)
    const profileRef = useRef(null)
    const searchRef = useRef(null)
    const list = useRef(null)
    const kapu = useRef(null)
    const kapuLabel = useRef(null)
    const [dimension, setDimension] = useState(null);
    const [hasDefaultProfile, setHasDefaultProfile] = useState(true)
    const [profile, setProfile] = useState('')
    const [hasProfile, setHasProfile] = useState(false)
    const [qr, setQr] = useState([])
    const [filteredQs, setFilteredQs] = useState([])
    const [ loginIn, setLoginIn ] = useState(null)
    const [ amount, setAmount ] = useState(null)
    const [ searchTerm, setSearchTerm ] = useState(null)

    const toggleSidebarOn = async () => {
        window.scrollTo(0,0)

        sideBarRef.current.style.display = 'block'
        topDiv.current.style.pointerEvents = 'none'
        document.body.style.overflow = 'hidden'
        topDiv.current.style.opacity = '0.1';
        
        console.log('Sometimes inafeli')
    }

    const toggleSidebarOff = async () => {
        sideBarRef.current.style.display = 'none'
        topDiv.current.style.opacity = '1';
        document.body.style.overflow = 'visible'
        topDiv.current.style.pointerEvents = 'auto'
    }

    const fetchSomeData = async () => {
        
        try {
            const tokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
            console.log('Im fetching some data')
            if(tokens === null) {
                console.log('Im inside here')
                setLoginIn(null)
                return;
            }
            console.log('Wake up mr')
            const decodedRefreshToken = jwt_decode(tokens.refresh);
            const expireRefreshTime = decodedRefreshToken.exp;
            const decodedAccessData = jwt_decode(tokens.access);
            const expireAccessTime = decodedAccessData.exp;
            const diff = expireAccessTime*1000 - Date.now();

            if(diff < 1) {
                console.log('Hapa maanake imesha-expire')
                if((expireRefreshTime*1000 - Date.now) < 1) {
                    setLoginIn(null)
                    return;
                }
                
                let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({'refresh': tokens.refresh})
                })

                let data = await response.json();
                localStorage.setItem('authTokens', JSON.stringify(data));
                let user = decodedAccessData.user_id;
                setLoginIn(true);

                // if we detect the user have been login then we needed to fetch the profile picture of the
                // login user... How we do that is to query profile by that given user... You should make
                // query to the  ViewProfileAPiView...
                

                let profile = await fetch('http://127.0.0.1:8000/api/profile/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: user
                    })
                })

                let fetchedProfile = await profile.json()
                
                
                

                setProfile(fetchedProfile.profile_picture)
                console.log(fetchedProfile)
                
                if (!fetchedProfile.profile_picture) {
                    // then i don't have profile picture we should use the default one...
                    setHasProfile(false)
                }
                else {
                    setHasProfile(true)
                }

                if(fetchedProfile.profile_picture === '/media/images/profile.png') {
                    setHasDefaultProfile(true)
                }

                else {
                    setHasDefaultProfile(false)
                }
                
                // so now user has logged in you need to fetch cart from the backend
                let check = await fetch('http://127.0.0.1:8000/api/cartproducts/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: user
                    })
                })

                let output = await check.json();

                if(output.message) {
                    // then here there is no any cart or cartproducts associated by that user
                    return;
                }

                // otherwise here then we have the cartproducts associated by this user
                if(output.length < 1) {
                    // then user has cart but has no any cartproduct added to that cart
                    return
                }

                // from all product count down quantity to display them...
                let sum = 0
                for (let out of output) {
                    sum = out.quantity + sum;
                }

                setAmount(sum)
                
                // Hii nime-add kama ya kukazia but unaweza ukaitoa kama unaona haifaiii..
                if(loginIn == null) {
                    setAmount(null)
                }
            }

            else {
                console.log('I have active access token')
                // Hapa inamaana accessToken has not expired.. User is aunthenticated...
                setLoginIn(true);
                let user = decodedAccessData.user_id;

               
                let profile = await fetch('http://127.0.0.1:8000/api/profile/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id:user
                    })
                })

                let fetchedProfile = await profile.json()
                

                setProfile(fetchedProfile.profile_picture)
                console.log(fetchedProfile)
                
                if (!fetchedProfile.profile_picture) {
                    setHasProfile(false)
                }

                else {
                    setHasProfile(true)
                }

                if(fetchedProfile.profile_picture === '/media/images/profile.png') {
                    console.log('IM inside indeed')
                    setHasDefaultProfile(true)
                }
                else {
                    console.log('Im setting has default login to false')
                    setHasDefaultProfile(false)
                }

                // so now user has logged in you need to fetch cart from the backend
                let check = await fetch('http://127.0.0.1:8000/api/cartproducts/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: user
                    })
                })

                console.log('Im waiting for love')

                let output = await check.json();
                console.log(output)

                if(output.message) {
                    // then here there is no any cart or cartproducts associated by that user
                    return;
                }

                // otherwise here then we have the cartproducts associated by this user
                if(output.length < 1) {
                    // then user has cart but has no any cartproduct added to that cart
                    return
                }

                // from all product count down quantity to display them...
                console.log('I have some cartproducts ')
                let sum = 0
                for (let out of output) {
                    sum = out.quantity + sum;
                }

                setAmount(sum)
                console.log('This is final amount')
                console.log(amount)
            }
        }
        catch(err) {
            console.log(err.message)
        }
    }
    // https://stackoverflow.com/questions/60476155/is-it-safe-to-use-ref-current-as-useeffects-dependency-when-ref-points-to-a-dom
    const hunter = async () => {
        // the aim of this function is to hunt and know the position of the
        // Cart icon and then using that position right to position the label 
        // at the right of the cart...
        if(kapu.current){
            const dimensions = kapu.current.getBoundingClientRect();
            console.log(dimensions.top, dimensions.right, dimensions.left, dimensions.bottom)
            // console.log('This is the width of the kapuIcon');
            // console.log(kapuLabel.current.offsetWidth, typeof kapuLabel.current.offsetWidth)
            setDimension([dimensions.top, dimensions.right, dimensions.left, dimensions.bottom])
        }
    }


    const fetchFromProducts = async () => {
        // our input is in searchRef....
        // fetch all data initiall and assign them inside qs
        // hii itatusaidia sana sio kila muda tu-send request 
        // the server.. What you need to do is to get all and 
        // store them inside that qs....
        let pro = await fetch('http://127.0.0.1:8000/api/products/');
        let json = await pro.json()
        console.log('This is the json for you')
        console.log(json)
        // Then from this I should convert all in array containing
        // the Description -> category

        let output = json.map(value => {
            if(value.description) {
                return `${(value.description)} => ${value.title} (${value.category})`
            }
            return `${value.title}`
        }
        )
        console.log('This is converted one for you');
        console.log(output)

        setQr(output)
    }


    const onLogout = (e) => {
        e.preventDefault();

        // mpaka hapa huyu mtu amelogin so lazima hii value itakuwepo in localstorage
        localStorage.removeItem('authTokens')
        window.location.reload(); // this will refresh the page..
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ((searchRef.current.value).trim().length === 0) {
            console.log('Im inside its empty')
            // maanake user hajaandika chochote ko prevent default
            return;
        }

        // otherwise everything is good then we should redirect to the 
        // result page...

        console.log('Everything is good....')
        Router.push({pathname:'/output', query:{search: searchRef.current.value}})
    }

    const searchFilter = async (e) => {
        e.preventDefault();

        // let clicked = e.target.id
        // console.log('This is the clicked text for you')
        // console.log(clicked)
        let clicked = e.target.id
        clicked = clicked.replace('=>', '')
        clicked = clicked.replace('(', '')
        clicked = clicked.replace(')', '')
        Router.push({pathname:'/output', query: {search: clicked}})
        // console.log('Now im here')
        // //console.log(e.target.name)
        // console.log(e.target.id)
    }

    const changeAttrs = async (e) => {
        
        setSearchTerm(e.target.value)  //.then(value => {console.log(value)})
        console.log('IM change attrs')
        
        // // give credits to this guys https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
        // const top = searchRef.current.getBoundingClientRect();
        // console.log('this is from change attrs')
        // console.log(top.top, top.right, top.left, top.bottom)

        // console.log(filteredQs.length)
        // if(filteredQs.length > 0) {
        //     // WE'RE INSIDE...
        //     console.log('Hey im inside if filteredQs.length is greater than 0')
        //     searchRef.current.style.borderRadius = '0px'
        //     searchRef.current.style['border-top-right-radius'] = '30px'
        //     searchRef.current.style['border-top-left-radius'] = '30px'

        //     let startingPoint = (top.bottom).toString()
        //     list.current.style.display = 'block'
        //     list.current.style.top = startingPoint + 'px'
        //     list.current.style.left = (top.left).toString() + 'px'
        //     //list.current.style.right = (top.bottom).toString() + 'px'
            
        //     list.current.style.width = (searchRef.current.offsetWidth).toString() + 'px'
            
        // }
        
    }

    const filterToggleOff = async (e) => {

        if (searchRef.current) {
            console.log('the toggle off is executing')
            list.current.style.display = 'none'
                

            searchRef.current.style.borderRadius = '30px'
        }
    }

    // Ko nishajua shida ipo wap ni kwamba all these onEffect get executed intially when the
    // component rendered ndo maana inasababisha hiyo error au misbehave 
    // unayokutana nayo hapo ko nakushauri embu rudia hii concept ya useEffect coz hizi
    // useEffect zote ulizoziandika hapa hazina tofauti all of them get executed on mount.....
    useEffect(() => {
        
        // so hii itakua detected if the width of the screen is from 900 and so on
        console.log('Hey im here but this sreen.width is obstacle to me')
        
        
        let filtered = qr.filter(value => {
            if (searchTerm === "") {
                return;
            }
            else if (searchTerm === null) {
                return;
            }
            else if(value.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return value
            }

            return console.log('Nothing happened')
        })

        setFilteredQs(filtered)
    


    }, [searchTerm])


    // // this is executed on Change and not on mounting of the state..
    useEffect(() => {
        console.log('This is the search ref for you')
        console.log(searchRef)
        if(searchRef.current !== null) {
            // this means on mount length == 0, then now it say it changed to length of 34... check which has filter..
            if (filteredQs.length === 0) {
                // then search bar should be restored in initial position...
                // Kuna mtu ana-irestore in its initial position i think in useEffect ya hapo juu....
                list.current.style.display = 'none'
                

                searchRef.current.style.borderRadius = '30px'
            }

            else {
                const top = searchRef.current.getBoundingClientRect();
                console.log('this is from useEffect hook')
                console.log(top.top, top.right, top.left, top.bottom)
        
                searchRef.current.style.borderRadius = '0px'
                searchRef.current.style['border-top-right-radius'] = '30px'
                searchRef.current.style['border-top-left-radius'] = '30px'
                list.current.style.display = 'block'

                list.current.style.top = (top.bottom).toString() + 'px'
                list.current.style.left = (top.left).toString() + 'px'
                list.current.style.width = (searchRef.current.offsetWidth).toString() + 'px'

                
            }
        }
    }, [filteredQs])

    // this is how to track the changes of ref DOM element...
    // https://stackoverflow.com/questions/60476155/is-it-safe-to-use-ref-current-as-useeffects-dependency-when-ref-points-to-a-dom
    useEffect(() => {
        hunter();
    }, [kapu.current])

    // Ko huyu dimension anavyokuwa assigned then us we position the label elements..

    useEffect(() => {
        // First check if kapuLabel ref is found because for one which has zero
        // cartproducts we don't have label on cart..
        console.log('IM HERE NOW', kapuLabel.current)
        if(kapuLabel.current) {
            kapuLabel.current.style.position = 'absolute';
            
            kapuLabel.current.style.top = dimension[0]
            kapuLabel.current.style.right = dimension[1]
            kapuLabel.current.style.fontWeight = 'bold'

            console.log('LETS PREVIEW...')
            console.log(kapuLabel.current.style.right, typeof kapuLabel.current.style.right);
            kapuLabel.current.style.right = parseInt(dimension[1]) - (kapuLabel.current.offsetWidth * 0.9)
        }
    }, [dimension])

    useEffect(() => {
        
        fetchSomeData();
        fetchFromProducts();

        const fetchInterval = setInterval(fetchSomeData, 50000000)

        
        // this code will be executed initially when component is mounted..
        // this video explains much more https://www.youtube.com/watch?v=0ZJgIjIuY7U
        console.log('Hello world')
        console.log(amount)

        return () => {
            clearInterval(fetchInterval)
        }
    }, [])


   
    
    return (
        <div onClick={filterToggleOff}>
   
            <div className={styles.main}>
                <Head>
                    <title>PERSONALYZER</title>
                    <link
                        rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
                    </link>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <div ref={topDiv}>
                    <div className={styles.top}>
                        <section className= {styles.sectionStyle}>
                            <div className={styles.behaveLikenav}>
                                <MediaQuery minWidth={200} maxWidth={576}>

                                    {/* <p>Im your phone, i need sidebar for me</p> */}

                                    <form className={styles.inlineForm} onSubmit={handleSubmit}>
                                        <p className={styles.brand} onClick={() => Router.push({pathname: '/'})}>
                                            BRAND
                                        </p>
                                        <input 
                                            ref={searchRef} 
                                            type='text' 
                                            placeholder='Type and search...' 
                                            className={styles.search}
                                            onChange = { changeAttrs }
                                            // onChange= { (e) => setSearchTerm(e.target.value) }
                                        />
                                        <img 
                                            src='/static/images/magnifying-glass.png' 
                                            alt='search-icon' 
                                            height={20} 
                                            width={20}
                                            title='search'
                                            onClick={handleSubmit}
                                            className={styles.searchIcon}
                                        />

                                        { amount ? (
                                            <Link route='/cart'>
                                                <span>
                                                    <img 
                                                        src = '/static/images/shopping-cart.png' 
                                                        alt='search-icon' 
                                                        height={20} 
                                                        width={20} 
                                                        title='Cart' 
                                                        className={styles.shop}
                                                        ref={kapu}
                                                    />
                                                    <span ref={kapuLabel} className={styles.amo}>
                                                        {amount}
                                                    </span>
                                                </span>
                                            </Link>
                                        ) : (
                                            <Link route='/cart'>
                                                <span>
                                                <img 
                                                    src = '/static/images/shopping-cart.png' 
                                                    alt='search-icon' 
                                                    height={20} 
                                                    width={20} 
                                                    title='Cart' 
                                                    className={styles.shop}
                                                    ref={kapu}
                                                />
                                                </span>
                                            </Link>
                                        )}

                                        {/* <img 
                                            src = '/static/images/shopping-cart.png' 
                                            alt='search-icon' 
                                            height={20} 
                                            width={20} 
                                            title='Cart' 
                                            className={styles.shop}
                                        /> */}

                                        <div className={styles.bar} onClick={toggleSidebarOn}>

                                            <Icon 
                                                name='ellipsis vertical' 
                                            
                                                color='grey' 
                                            />
                                        </div>

                                    </form>
                                    
                                </MediaQuery>
                                <MediaQuery minWidth={577} maxWidth={899}>
                                    <form className={styles.inlineForm} onSubmit={handleSubmit}>
                                        <p className={styles.brand} onClick={() => Router.push({pathname: '/'})}>
                                            BRAND
                                        </p>
                                        <input 
                                            ref={searchRef} 
                                            type='text' 
                                            placeholder='Type and search...' 
                                            className={styles.search}
                                            onChange = {changeAttrs}
                                            // onChange= { (e) => setSearchTerm(e.target.value) }
                                        />
                                        <img 
                                            src='/static/images/magnifying-glass.png' 
                                            alt='search-icon' 
                                            height={20} 
                                            width={20}
                                            title='search'
                                            onClick={handleSubmit}
                                            className={styles.searchIcon}
                                        />

                                        {/* <img 
                                            src = '/static/images/shopping-cart.png' 
                                            alt='search-icon' 
                                            height={20} 
                                            width={20} 
                                            title='Cart' 
                                            className={styles.shop}
                                        /> */}

                                        { amount ? (
                                            <Link route='/cart'>
                                                <span>
                                                    <img
                                                        src = '/static/images/shopping-cart.png' 
                                                        alt='search-icon' 
                                                        height={23} 
                                                        width={23} 
                                                        title='Cart' 
                                                        className={styles.shop}
                                                        ref={kapu}
                                                    />
                                                    <span ref={kapuLabel} className={styles.amo}>
                                                        {amount}
                                                    </span>
                                                </span>
                                            </Link>
                                        ) : (
                                            <Link route='/cart'>
                                                <span>
                                                    <img
                                                        src = '/static/images/shopping-cart.png' 
                                                        alt='search-icon' 
                                                        height={23} 
                                                        width={23} 
                                                        title='Cart' 
                                                        className={styles.shop}
                                                        ref={kapu}
                                                    />
                                                </span>
                                            </Link>
                                        )}

                                        <div className={styles.bar} onClick={toggleSidebarOn}>

                                            <Icon 
                                                name='ellipsis vertical' 
                                            
                                                color='grey' 
                                            />
                                        </div>

                                    </form>                                </MediaQuery>
                                <MediaQuery minWidth={900} maxWidth={1199}>
                                    <form className={styles.inlineForm} onSubmit={handleSubmit}>
                                        <p className={styles.brand} onClick={() => Router.push({pathname:'/'})}>BRAND</p>
                                        <input ref={searchRef} type="text" placeholder='Search by jewely/product name...' className={styles.search} list='browsers' onChange={ changeAttrs }/>
                                        
                                        <img  src = '/static/images/magnifying-glass.png' alt='search-icon' height={28} width={28} className={styles.searchIcon} title='Search' onClick={ handleSubmit } />
                                        {/* <Link route = "https://www.google.com">
                                            <a className={styles.aboutUs}><span>ABOUT US</span></a>    
                                        </Link> */}
                                        {/* <Link route = "https://www.instagram.com/">
                                            <a className={styles.aboutGuide}><span>GUIDE</span></a>    
                                        </Link>   ---- This guide is not needed we can assume it as 'Contacts' or links to social media.... we'll create footer for this...*/}

                                        {/*  pressing enter key when input is focused 'clicks' first button on form #12643 
                                        https://github.com/angular/angular/issues/12643 */}
                                        { props.isAunthenticated ? (
                                            <Link route = "/profile/">

                                                { hasProfile ? (
                                                    
                                                    hasDefaultProfile ? (
                                                        <img src='/static/images/user-grey.png' alt="Profile" height={40} width={40} className = {styles.proPic} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    

                                                    ) : (
                                                        <img src={`http://127.0.0.1:8000${profile}`} alt="Profile" height={40} width={40} className = {styles.customPro} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    
                                                    )
                                                    
                                                ) : (
                                                    <img src='/static/images/user-grey.png' alt="Profile" height={40} width={40} className = {styles.proPic} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    
                                                )}
                                            </Link>
                                        )
                                        : (
                                            
                                            <Link route = "/register/">
                                                <span className = {styles.proPic}>
                                                    <Button content='Login/Register' color='black' type='button' />
                                                </span>  
                                            </Link> 
                                        )}

                                        { amount ? (
                                            <Link route='/cart'>

                                            <span className={styles.cartIcon} onClick={() => console.log('Hello world how are you!')}>
                                            {/* hapa ili hii span ya label ionekane tutaad hapa props/flag na if statement kama kwenye isAunthenticated then tuta-enda kwenye addToCart when someone add something to cart then it will be displayed */}
                                            
                                            <img 
                                                src = '/static/images/shopping-cart.png' 
                                                alt='search-icon' 
                                                height={25} 
                                                width={25} 
                                                title='Cart' 
                                                ref={kapu}
                                            />

                                                <span className={styles.amo} ref={kapuLabel}>
                                                    {amount}
                                                </span>
                                            </span>
                                            </Link>
                                        ) : (
                                            <Link route='/cart'>
                                            <span className={styles.cartIcon} onClick={() => console.log('Hello world how are you!')}>
                                            {/* hapa ili hii span ya label ionekane tutaad hapa props/flag na if statement kama kwenye isAunthenticated then tuta-enda kwenye addToCart when someone add something to cart then it will be displayed */}
                                        
                                                <img src = '/static/images/shopping-cart.png' alt='search-icon' height={25} width={25} title='Cart' />
                                            </span>
                                            </Link>
                                        )}
                                    </form>
                                </MediaQuery>

                                <MediaQuery minWidth={1200} maxWidth={1600}>
                                    <form className={styles.inlineForm} onSubmit={handleSubmit}>
                                        <p className={styles.brand} onClick={() => Router.push({pathname:'/'})}>BRAND</p>
                                        <input ref={searchRef} type="text" placeholder='Search by jewely/product name...' className={styles.search} list='browsers' onChange={ changeAttrs }/>

                                        
                                        <img  src = '/static/images/magnifying-glass.png' alt='search-icon' height={33} width={33} className={styles.searchIcon} title='Search' onClick={ handleSubmit } />
                                        {/* <Link route = "https://www.google.com">
                                            <a className={styles.aboutUs}><span>ABOUT US</span></a>    
                                        </Link>
                                        <Link route = "https://www.instagram.com/">
                                            <a className={styles.aboutGuide}><span>GUIDE</span></a>    
                                        </Link> */}

                                        {/*  pressing enter key when input is focused 'clicks' first button on form #12643 
                                        https://github.com/angular/angular/issues/12643 */}
                                        { props.isAunthenticated ? (
                                            <Link route = "/profile/">

                                                { hasProfile ? (
                                                    
                                                    hasDefaultProfile ? (
                                                        <img src='/static/images/user-grey.png' alt="Profile" height={40} width={40} className = {styles.proPic} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    

                                                    ) : (
                                                        <img src={`http://127.0.0.1:8000${profile}`} alt="Profile" height={40} width={40} className = {styles.customPro} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    
                                                    )
                                                    
                                                ) : (
                                                    <img src='/static/images/user-grey.png' alt="Profile" height={40} width={40} className = {styles.proPic} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    
                                                )}
                                            </Link>
                                        )
                                        : (
                                            
                                            <Link route = "/register/">
                                                <span className = {styles.proPic}>
                                                    <Button content='Login/Register' color='black' type='button' />
                                                </span>  
                                            </Link> 
                                        )}

                                        { amount ? (
                                            <Link route='/cart'>

                                            <span className={styles.cartIcon} onClick={() => console.log('Hello world how are you!')}>
                                            {/* hapa ili hii span ya label ionekane tutaad hapa props/flag na if statement kama kwenye isAunthenticated then tuta-enda kwenye addToCart when someone add something to cart then it will be displayed */}
                                            
                                            <img 
                                                src = '/static/images/shopping-cart.png' 
                                                alt='search-icon' 
                                                height={33} 
                                                width={33} 
                                                title='Cart' 
                                                ref={kapu}
                                            />

                                                <span className={styles.amo} ref={kapuLabel}>
                                                    {amount}
                                                </span>
                                            </span>
                                            </Link>
                                        ) : (
                                            <Link route='/cart'>
                                            <span className={styles.cartIcon} onClick={() => console.log('Hello world how are you!')}>
                                            {/* hapa ili hii span ya label ionekane tutaad hapa props/flag na if statement kama kwenye isAunthenticated then tuta-enda kwenye addToCart when someone add something to cart then it will be displayed */}
                                        
                                                <img src = '/static/images/shopping-cart.png' alt='search-icon' height={33} width={33} title='Cart' />
                                            </span>
                                            </Link>
                                        )}
                                    </form>
                                </MediaQuery>

                                <MediaQuery minWidth={1601}>
                                    
                                <form className={styles.inlineForm} onSubmit={handleSubmit}>
                                        <p className={styles.brand} onClick={() => Router.push({pathname:'/'})}>BRAND</p>
                                        <input ref={searchRef} type="text" placeholder='Search by jewely/product name...' className={styles.search} list='browsers' onChange={ changeAttrs }/>

                                        
                                        <img  src = '/static/images/magnifying-glass.png' alt='search-icon' height={33} width={33} className={styles.searchIcon} title='Search' onClick={ handleSubmit } />
                                        {/* <Link route = "https://www.google.com">
                                            <a className={styles.aboutUs}><span>ABOUT US</span></a>    
                                        </Link>
                                        <Link route = "https://www.instagram.com/">
                                            <a className={styles.aboutGuide}><span>GUIDE</span></a>    
                                        </Link> */}

                                        {/*  pressing enter key when input is focused 'clicks' first button on form #12643 
                                        https://github.com/angular/angular/issues/12643 */}
                                        { props.isAunthenticated ? (
                                            <Link route = "/profile/">

                                                { hasProfile ? (
                                                    
                                                    hasDefaultProfile ? (
                                                        <img src='/static/images/user-grey.png' alt="Profile" height={40} width={40} className = {styles.proPic} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    

                                                    ) : (
                                                        <img src={`http://127.0.0.1:8000${profile}`} alt="Profile" height={40} width={40} className = {styles.customPro} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    
                                                    )
                                                    
                                                ) : (
                                                    <img src='/static/images/user-grey.png' alt="Profile" height={40} width={40} className = {styles.proPic} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'} />    
                                                )}
                                            </Link>
                                        )
                                        : (
                                            
                                            <Link route = "/register/">
                                                <span className = {styles.proPic}>
                                                    <Button content='Login/Register' color='black' type='button' />
                                                </span>  
                                            </Link> 
                                        )}

                                        { amount ? (
                                            <Link route='/cart'>

                                            <span className={styles.cartIcon} onClick={() => console.log('Hello world how are you!')}>
                                            {/* hapa ili hii span ya label ionekane tutaad hapa props/flag na if statement kama kwenye isAunthenticated then tuta-enda kwenye addToCart when someone add something to cart then it will be displayed */}
                                            
                                            <img 
                                                src = '/static/images/shopping-cart.png' 
                                                alt='search-icon' 
                                                height={33} 
                                                width={33} 
                                                title='Cart'
                                                ref={kapu}
                                            />

                                                <span className={styles.amo} ref={kapuLabel}>
                                                    {amount}
                                                </span>
                                            </span>
                                            </Link>
                                        ) : (
                                            <Link route='/cart'>
                                            <span className={styles.cartIcon} onClick={() => console.log('Hello world how are you!')}>
                                            {/* hapa ili hii span ya label ionekane tutaad hapa props/flag na if statement kama kwenye isAunthenticated then tuta-enda kwenye addToCart when someone add something to cart then it will be displayed */}
                                        
                                                <img src = '/static/images/shopping-cart.png' alt='search-icon' height={33} width={33} title='Cart' />
                                            </span>
                                            </Link>
                                        )}
                                    </form>
                                </MediaQuery>
                            </div>
                        </section>

                        {/* this is the addition */}
                        <div id="browsers" className={styles.dlist} ref={list}>
                            
                            {/* https://bobbyhadz.com/blog/javascript-get-substring-after-specific-character 
                            https://bobbyhadz.com/blog/javascript-get-substring-before-specific-character
                            imenizingua kwenye ku-render image but sio ishu hapa ishu muhimu kwanza ni ku-deal na
                            query on frontend to lookup in deep like in backend then kila kitu kikiwa sawa 
                            tutaangalia na ishu ya image hii then tufunge kazi.....
                            
                            */}
                            
                            
                            {/* e.target.value somethimes it returns value when we click and sometimes it return
                            <empty string> hii ni kwa sababu ni parent pekeake ndo mwenye hiyo e.target.id/value but
                            his children does not have so when u click it children then it will return <empty string>
                            ... Hii link imeelezea vizuri kabisa hii ishu na kwangu nime-irekebisha kwa kuweka 
                            id in all parent and his children elements... Na kila kitu kimekaa sawa...
                            https://stackoverflow.com/questions/9864286/when-tracking-which-elements-were-clicked-e-target-id-is-sometimes-empty */}
                            <MediaQuery minWidth={200} maxWidth={576}>
                            {
                                filteredQs.filter((value, index) => index < 6).map((value, index) => (
                                    value.includes('=>') ? (
                                        <p className={styles.query} key={index} id={value} onClick={searchFilter}>
                                            
                                            <span className={styles.cat} id={value}>{`${(value.substr(0, value.indexOf('='))).substr(0, 12)}...`}</span>
                                            <span className={styles.tit} id={value}>{`${value.substr(value.indexOf('>') + 1)}`}</span>
                                            
                                        </p>
                                        
                                    ): (
                                        <p className={styles.query} key={index} id={value} onClick={searchFilter}>
                                            {value}
                                        </p>
                                    )
                                    
                                ))
                            }
                            </MediaQuery>

                            <MediaQuery minWidth={577}>
                            {
                                filteredQs.filter((value, index) => index < 10).map((value, index) => (
                                    value.includes('=>') ? (
                                        <p className={styles.query} key={index} id={value} onClick={searchFilter}>
                                            
                                            <span className={styles.cat} id={value}>{`${(value.substr(0, value.indexOf('='))).substr(0, 12)}...`}</span>
                                            <span className={styles.tit} id={value}>{`${value.substr(value.indexOf('>') + 1)}`}</span>
                                            
                                        </p>
                                        
                                    ): (
                                        <p className={styles.query} key={index} id={value} onClick={searchFilter}>
                                            {value}
                                            
                                        </p>
                                    )
                                    
                                ))
                            }
                            </MediaQuery>
                        </div>
                        <div className={styles.toggle} ref={profileRef}>
                            <div className={styles.toggle1} onMouseOver={() => profileRef.current.style.display='block'} onMouseOut={() => profileRef.current.style.display = 'none'}>
                                <p className={styles.int} onClick={ () => Router.push({pathname: '/profile'})}>Profile</p>
                                <p className={styles.int} onClick={ () => Router.push({pathname:'/cart'}) }>My Cart</p>
                                <p className={styles.int} onClick={onLogout}>Logout</p>
                            </div>
                        </div>
                    </div>

                    {props.children}
                </div>
                <div className={styles.sidebar} ref={sideBarRef}>
                    <div className={styles.ss}>
                        {/* if user has not login then display both login and register buttons */}
                        <span className={styles.notLogin}>Register</span>
                        <br />
                        <br />
                        <span className={styles.notLogin}>Sign up</span>
                        <hr className={styles.hrulb} />
                        {/* otherwise we should have big width displaying your picture and name */}

                        <p>About us</p>
                        <p>Contacts</p>
                        <p>My cart</p>
                    </div>
                    
                    <div className={styles.close} onClick={toggleSidebarOff}>
                        &times;
                    </div>
                </div>
            
            </div>
                
            

            <footer className={styles.foo}>

                <MediaQuery minWidth={200} maxWidth={400}>
                    <div className={styles.bobo} style={{overflowX: 'hidden'}}>
                  
                        <div className={styles.kibe}>
                            <div className={styles.links}>
                                <span>
                                    <img src='../static/images/pin.png' width={15} height={15} style={{marginRight: '10px'}} />
                                    Kariakoo, Dar es salaam.
                                </span>
                                
                            </div>
                            
                            <div className={styles.links} style={{paddingTop: '1%'}}>
                                <span>
                                    <img src='../static/images/tc2.png' width={15} height={15} style={{marginRight: '10px'}} />
                                    +255756144060.
                                </span>
                            </div>

                            <div className={styles.links} style={{paddingTop: '1%'}}>
                                <span>
                                    <img src='../static/images/email.png' width={15} height={15} style={{marginRight: '10px'}} />
                                    support@personalizer.co.tz
                                </span>
                            </div>
                        </div>
                    
                        <div className={styles.kibe2}>
                            <p>Follow Us</p>
                            <a className={styles.lin} target='_blank' href='https://google.com/'>
                                <Icon name='facebook' size='large' />

                            </a>
                            <a className={styles.lin} target='_blank' href='https://google.com/'>
                                <Icon name='instagram' size='large' />
                            </a>
                        </div>
                            
                    </div>     
                </MediaQuery>

                <MediaQuery minWidth={401} maxWidth={899}>
                    <div className={styles.bobo} style={{overflowX: 'hidden'}}>
                        <Grid>
                            <Grid.Column width={11}>
                                <div className={styles.kibe}>
                                    <div className={styles.links}>
                                        <span>
                                            <img src='../static/images/pin.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            Kariakoo, Dar es salaam.
                                        </span>
                                        
                                    </div>
                                    
                                    <div className={styles.links} style={{paddingTop: '1%'}}>
                                        <span>
                                            <img src='../static/images/tc2.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            +255756144060.
                                        </span>
                                    </div>

                                    <div className={styles.links} style={{paddingTop: '1%'}}>
                                        <span>
                                            <img src='../static/images/email.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            support@personalizer.co.tz
                                        </span>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div className={styles.kibe2}>
                                    <p>Follow Us</p>
                                    <a className={styles.lin} target='_blank' href='https://google.com/'>
                                        <Icon name='facebook' size='large' />

                                    </a>
                                    <a className={styles.lin} target='_blank' href='https://google.com/'>
                                        <Icon name='instagram' size='large' />
                                    </a>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </div>     
                        
                </MediaQuery>
                

                <MediaQuery minWidth={900} maxWidth={1199}>
                    <div className={styles.bobo} style={{overflowX: 'hidden'}}>
                        <Grid>
                            <Grid.Column width={8}>
                                <div className={styles.kibe}>
                                    <div className={styles.links}>
                                        <span>
                                            <img src='../static/images/pin.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            Kariakoo, Dar es salaam.
                                        </span>
                                        
                                    </div>
                                    
                                    <div className={styles.links} style={{paddingTop: '1%'}}>
                                        <span>
                                            <img src='../static/images/tc2.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            +255756144060.
                                        </span>
                                    </div>

                                    <div className={styles.links} style={{paddingTop: '1%'}}>
                                        <span>
                                            <img src='../static/images/email.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            support@personalizer.co.tz
                                        </span>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className={styles.kibe2}>
                                    <p>Follow Us</p>
                                    <a className={styles.lin} target='_blank' href='https://google.com/'>
                                        <Icon name='facebook' size='large' />

                                    </a>
                                    <a className={styles.lin} target='_blank' href='https://google.com/'>
                                        <Icon name='instagram' size='large' />
                                    </a>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </div>     
                        
                </MediaQuery>

                <MediaQuery minWidth={1200} maxWidth={1651}>
                    <div className={styles.bobo} style={{overflowX: 'hidden'}}>
                        <Grid>
                            <Grid.Column width={8}>
                                <div className={styles.kibe}>
                                    <div className={styles.links}>
                                        <span>
                                            <img src='../static/images/pin.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            Kariakoo, Dar es salaam.
                                        </span>
                                        
                                    </div>
                                    
                                    <div className={styles.links} style={{paddingTop: '1%'}}>
                                        <span>
                                            <img src='../static/images/tc2.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            +255756144060.
                                        </span>
                                    </div>

                                    <div className={styles.links} style={{paddingTop: '1%'}}>
                                        <span>
                                            <img src='../static/images/email.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            support@personalizer.co.tz
                                        </span>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className={styles.kibe2}>
                                    <p>Follow Us</p>
                                    <a className={styles.lin} target='_blank' href='https://google.com/'>
                                        <Icon name='facebook' size='large' />

                                    </a>
                                    <a className={styles.lin} target='_blank' href='https://google.com/'>
                                        <Icon name='instagram' size='large' />
                                    </a>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </div>     
                        
                </MediaQuery>

                <MediaQuery minWidth={1652}>
                    <div className={styles.bobo} style={{overflowX: 'hidden'}}>
                        <Grid>
                            <Grid.Column width={8}>
                                <div className={styles.kibe}>
                                    <div className={styles.links}>
                                        <span>
                                            <img src='../static/images/pin.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            Kariakoo, Dar es salaam.
                                        </span>
                                        
                                    </div>
                                    
                                    <div className={styles.links} style={{paddingTop: '1%'}}>
                                        <span>
                                            <img src='../static/images/tc2.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            +255756144060.
                                        </span>
                                    </div>

                                    <div className={styles.links} style={{paddingTop: '1%'}}>
                                        <span>
                                            <img src='../static/images/email.png' width={15} height={15} style={{marginRight: '10px'}} />
                                            support@personalizer.co.tz
                                        </span>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className={styles.kibe2}>
                                    <p>Follow Us</p>
                                    <a className={styles.lin} target='_blank' href='https://google.com/'>
                                        <Icon name='facebook' size='large' />

                                    </a>
                                    <a className={styles.lin} target='_blank' href='https://google.com/'>
                                        <Icon name='instagram' size='large' />
                                    </a>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </div>     
                        
                </MediaQuery>
            </footer>
        </div>
    );
};