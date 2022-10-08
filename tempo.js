<Media queries={{
                                xl: "(min-width: 1601px)",
                                dsklp: "(min-width: 1200px) and (max-width: 1600px)",
                                minilap: "(min-width:900px) and (max-width: 1199px)",
                                tablet: "(min-width: 577px) and (max-width: 899px)",
                                phone: "(max-width: 576px)"
                            }}>
                                {
                                    matches => (
                                        <>
                                            
                                            {matches.phone && 
                                                <p>
                                                    for phone you need to create a side bar which store
                                                </p>
                                            }
                                            

                                        
                                            {matches.tablet &&
                                                <p>
                                                    I need sidebar nav for tablet
                                                </p>
                                            }
                                            
                                            
                                            {matches.minilap &&
                                                <div>
                                                    <form className={styles.inlineForm} onSubmit={handleSubmit}>
                                                        <p className={styles.brand} onClick={() => Router.push({pathname:'/'})}>BRAND</p>
                                                        <input ref={searchRef} type="text" placeholder='Search by jewely/product name...' className={styles.search} list='browsers' onChange={ changeAttrs }/>
                    
                                                        
                                                        <img  src = '/static/images/magnifying-glass.png' alt='search-icon' height={33} width={33} className={styles.searchIcon} title='Search' onClick={ handleSubmit } />
                                                        <Link route = "https://www.google.com">
                                                            <a className={styles.aboutUs}><span>ABOUT US</span></a>    
                                                        </Link>
                                                        <Link route = "https://www.instagram.com/">
                                                            <a className={styles.aboutGuide}><span>GUIDE</span></a>    
                                                        </Link>
                    
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
                                                            
                                                            <img src = '/static/images/shopping-cart.png' alt='search-icon' height={33} width={33} title='Cart' />
                    
                                                                <span className={styles.lab}>
                                                                    <Label circular color='red' attached='top right' size='tiny'>
                                                                        {amount}
                                                                    </Label>
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
                                                </div>
                                            }
                                            

                                            
                                                {matches.dsklp &&
                                                    <div>
                                                        <form className={styles.inlineForm} onSubmit={handleSubmit}>
                                                            <p className={styles.brand} onClick={() => Router.push({pathname:'/'})}>BRAND</p>
                                                            <input ref={searchRef} type="text" placeholder='Search by jewely/product name...' className={styles.search} list='browsers' onChange={ changeAttrs }/>
                        
                                                            
                                                            <img  src = '/static/images/magnifying-glass.png' alt='search-icon' height={33} width={33} className={styles.searchIcon} title='Search' onClick={ handleSubmit } />
                                                            <Link route = "https://www.google.com">
                                                                <a className={styles.aboutUs}><span>ABOUT US</span></a>    
                                                            </Link>
                                                            <Link route = "https://www.instagram.com/">
                                                                <a className={styles.aboutGuide}><span>GUIDE</span></a>    
                                                            </Link>
                        
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
                                                                
                                                                <img src = '/static/images/shopping-cart.png' alt='search-icon' height={33} width={33} title='Cart' />
                        
                                                                    <span className={styles.lab}>
                                                                        <Label circular color='red' attached='top right' size='tiny'>
                                                                            {amount}
                                                                        </Label>
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
                                                    </div>
                                                }
                                            

                                            
                                            {matches.xl &&
                                                <div>
                                                    <form className={styles.inlineForm} onSubmit={handleSubmit}>
                                                        <p className={styles.brand} onClick={() => Router.push({pathname:'/'})}>BRAND</p>
                                                        <input ref={searchRef} type="text" placeholder='Search by jewely/product name...' className={styles.search} list='browsers' onChange={ changeAttrs }/>
                    
                                                        
                                                        <img  src = '/static/images/magnifying-glass.png' alt='search-icon' height={33} width={33} className={styles.searchIcon} title='Search' onClick={ handleSubmit } />
                                                        <Link route = "https://www.google.com">
                                                            <a className={styles.aboutUs}><span>ABOUT US</span></a>    
                                                        </Link>
                                                        <Link route = "https://www.instagram.com/">
                                                            <a className={styles.aboutGuide}><span>GUIDE</span></a>    
                                                        </Link>
                    
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
                                                            
                                                            <img src = '/static/images/shopping-cart.png' alt='search-icon' height={33} width={33} title='Cart' />
                    
                                                                <span className={styles.lab}>
                                                                    <Label circular color='red' attached='top right' size='tiny'>
                                                                        {amount}
                                                                    </Label>
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
                                                </div>
                                            }
                                            

                                        </>
                                    )
                                }
                            </Media>






















<div>
                            <Media queries={{
                                xl: "(min-width: 1700px)",
                                dsklp: "(min-width: 1200px) and (max-width: 1600px)",
                                minilap: "(min-width:900px) and (max-width: 1199px)",
                                tablet: "(min-width: 577px) and (max-width: 899px)",
                                phone: "(max-width: 576px)"
                            }}>
                                { matches => (
                                    <> 
                                        <>
                                        {matches.phone && <p>I am a phone</p>}
                                        </>

                                        <>
                                        {matches.tablet && <p>I am a tablet</p>}
                                        </>

                                        <>
                                        {matches.minilap && <p>Im mini pc/tablet</p>}
                                        </>

                                        <>
                                        {matches.dsklp && <p>I am a old desktop or laptop</p>}
                                        </>

                                        <>
                                        {matches.xl && <p>I am a pasko lenovo</p>}
                                        </>
                                    </>

                                    
                                )}
                            </Media>
                        </div>