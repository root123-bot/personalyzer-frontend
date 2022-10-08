import React, { Component } from "react";
import styles from "../static/css/cart.module.css";
import {
  Header,
  Icon,
  Button,
  Grid,
} from "semantic-ui-react";
import Head from "next/head";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import dynamic from "next/dynamic";
import { LEFT } from "react-swipeable";
import BACKEND_ORIGIN from "../utils/domain";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

class Cart extends Component {
  state = {
    isAunthenticated: false,
    cartproducts: [],
    user_id: 0,
    net_price: 0,
    net_quantity: 0,
  };

  fetchSomeCartProduct = async () => {
    // If user has not login then say to him/her u need to login
    // to view cartproducts..
    try {
      const tokens = localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null;

      if (!tokens) {
        // But we should tell if he purchased something he should login to view cart..
        // kikuu kama usipologin wanakwambia tu oya cart ni empty.. But uki-login ndo
        // unaliona carti... so nahisi tufanye kama kikuu....
        console.log("He is not loged in so by default cart is empty");
      }

      const decodedRefreshToken = jwt_decode(tokens.refresh);
      const expireRefreshTime = decodedRefreshToken.exp;
      console.log("Hey this is the expire date of the refreshToken");
      console.log(expireRefreshTime);
      console.log("Lets try to access the json access token");
      console.log(tokens.access);
      const decodedAccessData = jwt_decode(tokens.access);
      const user = decodedAccessData.user_id;
      this.setState({
        user_id: user,
      });
      console.log("This is expiring time for you...");
      console.log(decodedAccessData);
      const expireAccessTime = decodedAccessData.exp;
      console.log(expireAccessTime);
      const diff = expireAccessTime * 1000 - Date.now();

      if (diff < 1) {
        console.log("Hey we need to either update or make user login again");
        if (expireRefreshTime * 1000 - Date.now < 1) {
          console.log(
            "Even ur refresh token has already been expired we need you to login again...."
          );
          this.setState({
            isAunthenticated: false,
          });
          return;
        }
        console.log(
          "Our refresh token is alive you should use it to update your access token"
        );

        this.updateToken(tokens.refresh);

        this.setState({
          isAunthenticated: true,
          user_id: user,
        });
      } else {
        this.setState({
          isAunthenticated: true,
          user_id: user,
        });
      }

      // Mpaka inafika hapa ujue user amekuwa aunthenticated...
      // so now user has logged in you need to fetch cart from the backend

      let check = await fetch(`${BACKEND_ORIGIN}/api/cartproducts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user,
        }),
      });

      console.log("THIS IS THE FETCHED CART BY THIS USER..");

      let output = await check.json();
      console.log(output);

      if (output.message) {
        // then here there is no any cart or cartproducts associated by that user
        return;
      }

      if (output.length < 1) {
        // then user has cart but has no any cartproduct added to that cart
        // Then user cart is empty...
        return;
      }

      // from all product count down quantity to display them...
      // at this point user cart has something, so assign it to cartproducts
      // state
      let net_quantity = 0;
      let net_price = 0;
      for (let out of output) {
        net_quantity = out.quantity + net_quantity;
        net_price = out.subTotal + net_price;
      }

      this.setState({
        cartproducts: output.reverse(),
        net_price: net_price,
        net_quantity: net_quantity,
      });

      console.log(
        "The user at this point has cart associated and this is the one"
      );
      console.log(this.state.cartproducts);
      console.log(output);
    } catch (InvalidTokenError) {
      console.log(InvalidTokenError.message);
      console.log(
        "Invalid token specified since, when the token is expired the jwt automatically change your storage and it ill look like this"
      );
      // authToken: {"detail": "Token is blacklisted", "code": "token_not_valid"}
      this.setState({
        isAunthenticated: false,
      });
    }
  };

  onIncrease = async (e) => {
    // Hapa inabidi nipost kwa server. Ko inabid niwe na endpoint ya ku-increase the
    // quantity of the cartproduct ordered on the server.. What required for this endpoint
    // is to pass the "id" of cart product... And update then update both the amount/quantity
    // and the 'price'---- nitazi-update vipi hapo ndo bado cina jibu...
    // coz ili ziwe updated endapo tunategemea server inabid tu-send request to the server or
    // we should 'setInterval()' method which run everytime which is not good... Or here what to
    // do it after update we should update the state of cartproducts...
    // coz all data are referred from it.... oooh i dont know what to do...
    e.preventDefault();
    console.log(e.target.id);

    // then u need to send this id then from it will return to you new serialized cp and then update
    // cartproducts state which is qs of all cp of that user... So nahisi
    // pia hapa kuna umuhimu pia wa ku-send user_id...

    let response = await fetch(`${BACKEND_ORIGIN}/api/cp_increase/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cpid: parseInt(e.target.id),
        user_id: this.state.user_id,
      }),
    });

    let data = await response.json();

    console.log("This is new updated data after updating..");
    console.log(data);

    let net_quantity = 0;
    let net_price = 0;
    for (let out of data) {
      net_quantity = out.quantity + net_quantity;
      net_price = out.subTotal + net_price;
    }

    this.setState({
      cartproducts: data.reverse(),
      net_price: net_price,
      net_quantity: net_quantity,
    });
  };

  onDecrease = async (e) => {
    // We dont send the request to the server if the current product_quantity is 1
    // decrease from 1 to zero means the cp is deleted which can achieved on 'Remove'
    // button we displayed it to the user...
    e.preventDefault();
    console.log(e.target.id);
    console.log(e.target.name);
    console.log(e.target.title);

    // there in some interface i user semantic ui icons
    // and these icons enabled by semantic have built in
    // name attribute which u will use to tell it a name
    // of icon to load in ur interface so for these interface
    // there is no way to pass the quantity of product through
    // the 'name' attribute so instead of using name attribute
    // i use 'title' attribute and it seem to work
    // Hii e.target.name ni flag ya ku-detect if the quantity is now 1 in order
    // to not count below 1
    if (parseInt(e.target.name) > 1 || parseInt(e.target.title) > 1) {
      let response = await fetch(`${BACKEND_ORIGIN}/api/cp_decrease/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cpid: parseInt(e.target.id),
          user_id: this.state.user_id,
        }),
      });

      let data = await response.json();

      console.log("This is new updated data after updating..");
      console.log(data);

      let net_quantity = 0;
      let net_price = 0;
      for (let out of data) {
        net_quantity = out.quantity + net_quantity;
        net_price = out.subTotal + net_price;
      }

      this.setState({
        cartproducts: data.reverse(),
        net_price: net_price,
        net_quantity: net_quantity,
      });
    } else {
      console.log("Limit, I cant breath");
    }
  };

  onRemove = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    // In my cart interface of mobile phone and tablet we used
    // a div element and div element does not accept the 'name'
    // according to this article.. https://stackoverflow.com/questions/4962070/attribute-name-not-allowed-on-element-div-at-this-point
    // so what i did here since the id of product is required here we use
    // id attribute which exist in div to pass that id of cartproduct..
    // in other interface of pc based or large one I used a 'name' attribute
    // and worked in button I think .. So we should check down
    // in post request because some will pass that product id either by
    // name or id attribute...
    console.log(e.target.id);
    // Here what we need to do is send both user_id and the cp_id to
    // delete from the cart....

    let response = await fetch(`${BACKEND_ORIGIN}/api/cp_remove/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cpid: e.target.name ? parseInt(e.target.name) : parseInt(e.target.id),
        user_id: this.state.user_id,
      }),
    });

    let data = await response.json();
    let net_quantity = 0;
    let net_price = 0;
    for (let out of data) {
      net_quantity = out.quantity + net_quantity;
      net_price = out.subTotal + net_price;
    }

    this.setState({
      cartproducts: data.reverse(),
      net_price: net_price,
      net_quantity: net_quantity,
    });
  };

  clearCart = async (e) => {
    e.preventDefault();
    console.log(this.state.user_id);

    const response = await fetch(`${BACKEND_ORIGIN}/api/flash_cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.message) {
      console.log("The cart has been cleared...");
      // now we should update the cartproducts state to be zero..
      this.setState({
        cartproducts: 0,
      });
    } else {
      console.log("Hey something went wrong...");
    }
  };

  updateToken = async (refreshToken) => {
    let response = await fetch(`${BACKEND_ORIGIN}/api/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    let data = await response.json();
    localStorage.setItem("authTokens", JSON.stringify(data));
  };

  componentDidMount() {
    this.fetchSomeCartProduct();
  }

  // Mimi nimechagua kwenye hii carti nisiwe na navBar.. Coz navbar ina require vitu vingi
  // na kuna logic zinarun on the background for example those to check if the user
  // is aunthenticated and the one to check if the user has cart.. By default when user
  // click to view a cart he should be aunthenticated if not authenticated it should display
  // an empty cart... As there is no records....
  render() {
    return (
      <div className={styles.bd}>
        <div>
          <Head>
            <title>MiwaniPambe Tz</title>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
            ></link>
          </Head>
          <div>
            {this.state.isAunthenticated ? (
              this.state.cartproducts.length > 0 ? (
                <>
                  <MediaQuery minWidth={200} maxWidth={400}>
                    <div className={styles.flexOne}>
                      {/* <img src='../static/images/paragraph.png' width={18} height={18} /> */}
                      <img
                        src="../static/images/home.png"
                        width={22}
                        height={22}
                        title="Home"
                        onClick={() => Router.push({ pathname: "/" })}
                        style={{ cursor: "pointer" }}
                      />
                      <span className={styles.mHeader}>MY CART</span>
                      <img
                        src="../static/images/bin.png"
                        width={18}
                        height={18}
                        title="clear cart"
                        onClick={this.clearCart}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <hr className={styles.h} />
                    <div className={styles.sec}>
                      {/* Hapa inabidi nitengeneze kitu kama card.. */}

                      <>
                        {this.state.cartproducts.map((product) => (
                          <div
                            className={styles.behaveLikeCard}
                            key={product.id}
                          >
                            <div className={styles.conte}>
                              <img
                                src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                                width={65}
                                height={60}
                                className={styles.proImg}
                              />
                              <div className={styles.explain} style={{top: '15%'}}>
                                <p className={styles.bich}>
                                  {product.get_title.length > 10
                                    ? product.get_title.substr(0, 10) + "..."
                                    : product.get_title}
                                </p>
                                <span className={styles.mpunga}>
                                  {`${new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "Tsh",
                                    minimumFractionDigits: 0,
                                  }).format(parseInt(product.subTotal))}`}
                                </span>
                                {product.selectedPropertyValue ? (
                                  <p className={styles.props} style={{
                                    marginBottom: '0%',
                                    paddingBottom: '0%'
                                  }}>
                                    {product.get_prop}:{" "}
                                    {product.selectedPropertyValue.length > 13
                                      ? product.selectedPropertyValue.substr(
                                        0, 
                                        12
                                      ) + '...'
                                      : product.selectedPropertyValue}
                                  </p>
                                ) : (
                                  <></>
                                )}

{product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                              </div>

                              <div className={styles.quantity}>
                                <p className={styles.qua}>
                                  Quantity:{" "}
                                  <span className={styles.namba}>
                                    {product.quantity}
                                  </span>
                                </p>
                                <div className={styles.amountWrapper}>
                                  <span
                                    className={styles.plus}
                                    onClick={this.onDecrease}
                                    id={product.id}
                                    title={product.quantity}
                                  >
                                    <Icon
                                      size="small"
                                      name="minus"
                                      id={product.id}
                                      title={product.quantity}
                                    />
                                  </span>
                                  <span className={styles.actualAmount}>
                                    {product.quantity}
                                  </span>
                                  <span
                                    className={styles.minus}
                                    id={product.id}
                                    onClick={this.onIncrease}
                                  >
                                    <Icon
                                      size="small"
                                      name="plus"
                                      id={product.id}
                                    />
                                  </span>
                                </div>
                              </div>

                              <div
                                className={styles.close}
                                name={product.id}
                                id={product.id}
                                onClick={this.onRemove}
                              >
                                Remove
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>

                    <div
                      className={styles.checkout}
                      style={{ background: "#b8ffd3" }}
                    >
                      <div className={styles.row1}>
                        <p className={styles.tt}>Total:</p>
                        <p className={styles.tvalue}>
                          {`${new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "Tsh",
                            minimumFractionDigits: 0,
                          }).format(parseInt(this.state.net_price))}`}
                        </p>

                        <button
                          className={styles.checkBtn}
                          onClick={() => Router.push({ pathname: "/order" })}
                        >
                          Checkout
                          <img
                            style={{ marginLeft: "5px" }}
                            src="../static/images/right-arrow.png"
                            width={10}
                            height={10}
                          />
                        </button>
                      </div>
                    </div>
                  </MediaQuery>

                  <MediaQuery minWidth={401} maxWidth={576}>
                    <div className={styles.flexOne}>
                      {/* <img src='../static/images/paragraph.png' width={18} height={18} /> */}
                      <img
                        src="../static/images/home.png"
                        width={22}
                        height={22}
                        title="Home"
                        onClick={() => Router.push({ pathname: "/" })}
                        style={{ cursor: "pointer" }}
                      />
                      <span className={styles.mHeader}>MY CART</span>
                      <img
                        src="../static/images/bin.png"
                        width={18}
                        height={18}
                        title="clear cart"
                        onClick={this.clearCart}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <hr className={styles.h} />
                    <div className={styles.sec}>
                      {/* Hapa inabidi nitengeneze kitu kama card.. */}
                      <>
                        {this.state.cartproducts.map((product) => (
                          <div
                            className={styles.behaveLikeCard}
                            key={product.id}
                          >
                            <div
                              className={styles.conte}
                              style={{ paddingTop: "0%" }}
                            >
                              <MediaQuery maxWidth={450}>
                                <img
                                  src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                                  width={75}
                                  height={70}
                                  className={styles.proImg}
                                />
                              </MediaQuery>
                              <MediaQuery minWidth={451}>
                                <img
                                  src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                                  width={90}
                                  height={80}
                                  className={styles.proImg}
                                />
                              </MediaQuery>

                              <MediaQuery maxWidth={450}>
                                <div
                                  className={styles.explain}
                                  style={{ top: "5%" }}
                                >
                                  <p className={styles.bich}>
                                    {product.get_title.length > 12
                                      ? product.get_title.substr(0, 12) + "..."
                                      : product.get_title}
                                  </p>
                                  <span className={styles.mpunga}>
                                    {`${new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "Tsh",
                                      minimumFractionDigits: 0,
                                    }).format(parseInt(product.subTotal))}`}
                                  </span>
                                  {product.selectedPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_prop} :
                                      {product.selectedPropertyValue.length > 10
                                        ? product.selectedPropertyValue.substr(
                                            0,
                                            10
                                          ) + "..."
                                        : product.selectedPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                  {product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </MediaQuery>
                              <MediaQuery minWidth={451} maxWidth={500}>
                                <div
                                  className={styles.explain}
                                  style={{ left: "25%", top: "6%" }}
                                >
                                  <p className={styles.bich}>
                                    {product.get_title.length > 13
                                      ? product.get_title.substr(0, 12) + "..."
                                      : product.get_title}
                                  </p>
                                  <span className={styles.mpunga}>
                                    {`${new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "Tsh",
                                      minimumFractionDigits: 0,
                                    }).format(parseInt(product.subTotal))}`}
                                  </span>
                                  {product.selectedPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_prop} :
                                      {product.selectedPropertyValue.length > 12
                                        ? product.selectedPropertyValue.substr(
                                            0,
                                            10
                                          ) + "..."
                                        : product.selectedPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={501}>
                                <div
                                  className={styles.explain}
                                  style={{ left: "22.5%", top: "8%" }}
                                >
                                  <p className={styles.bich}>
                                    {product.get_title.length > 13
                                      ? product.get_title.substr(0, 12) + "..."
                                      : product.get_title}
                                  </p>
                                  <span className={styles.mpunga}>
                                    {`${new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "Tsh",
                                      minimumFractionDigits: 0,
                                    }).format(parseInt(product.subTotal))}`}
                                  </span>
                                  {product.selectedPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_prop} :
                                      {product.selectedPropertyValue.length > 12
                                        ? product.selectedPropertyValue.substr(
                                            0,
                                            10
                                          ) + "..."
                                        : product.selectedPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={401} maxWidth={450}>
                                <div
                                  className={styles.quantity}
                                  style={{ left: "60%", top: "18%" }}
                                >
                                  <p className={styles.qua}>
                                    Quantity:{" "}
                                    <span className={styles.namba}>
                                      {product.quantity}
                                    </span>
                                  </p>
                                  <div className={styles.amountWrapper}>
                                    <span
                                      className={styles.plus}
                                      id={product.id}
                                      title={product.quantity}
                                      onClick={this.onDecrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="minus"
                                        id={product.id}
                                        title={product.quantity}
                                      />
                                    </span>
                                    <span className={styles.actualAmount}>
                                      {product.quantity}
                                    </span>
                                    <span
                                      className={styles.minus}
                                      id={product.id}
                                      onClick={this.onIncrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="plus"
                                        id={product.id}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={451} maxWidth={500}>
                                <div
                                  className={styles.quantity}
                                  style={{ left: "60%", top: "20%" }}
                                >
                                  <p className={styles.qua}>
                                    Quantity:{" "}
                                    <span className={styles.namba}>
                                      {product.quantity}
                                    </span>
                                  </p>
                                  <div className={styles.amountWrapper}>
                                    <span
                                      className={styles.plus}
                                      id={product.id}
                                      title={product.quantity}
                                      onClick={this.onDecrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="minus"
                                        id={product.id}
                                        title={product.quantity}
                                      />
                                    </span>
                                    <span className={styles.actualAmount}>
                                      {product.quantity}
                                    </span>
                                    <span
                                      className={styles.minus}
                                      id={product.id}
                                      onClick={this.onIncrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="plus"
                                        id={product.id}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={501}>
                                <div
                                  className={styles.quantity}
                                  style={{ left: "55%", top: "22%" }}
                                >
                                  <p className={styles.qua}>
                                    Quantity:{" "}
                                    <span className={styles.namba}>
                                      {product.quantity}
                                    </span>
                                  </p>
                                  <div className={styles.amountWrapper}>
                                    <span
                                      className={styles.plus}
                                      id={product.id}
                                      title={product.quantity}
                                      onClick={this.onDecrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="minus"
                                        id={product.id}
                                        title={product.quantity}
                                      />
                                    </span>
                                    <span className={styles.actualAmount}>
                                      {product.quantity}
                                    </span>
                                    <span
                                      className={styles.minus}
                                      id={product.id}
                                      onClick={this.onIncrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="plus"
                                        id={product.id}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={401} maxWidth={450}>
                                <div
                                  className={styles.close}
                                  name={product.id}
                                  id={product.id}
                                  onClick={this.onRemove}
                                  style={{ top: "35%", left: "90%" }}
                                >
                                  <img
                                    src="../static/images/delete.png"
                                    width={25}
                                    height={25}
                                    name={product.id}
                                    id={product.id}
                                    title="remove"
                                  />
                                </div>
                              </MediaQuery>
                              <MediaQuery minWidth={451} maxWidth={500}>
                                <div
                                  className={styles.close}
                                  name={product.id}
                                  id={product.id}
                                  onClick={this.onRemove}
                                  style={{ top: "37%", left: "90%" }}
                                >
                                  <img
                                    src="../static/images/delete.png"
                                    width={25}
                                    height={25}
                                    name={product.id}
                                    id={product.id}
                                    title="remove"
                                  />
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={501}>
                                <div
                                  className={styles.close}
                                  name={product.id}
                                  id={product.id}
                                  onClick={this.onRemove}
                                  style={{ top: "37%", left: "90%" }}
                                >
                                  <img
                                    src="../static/images/delete.png"
                                    width={25}
                                    height={25}
                                    name={product.id}
                                    id={product.id}
                                    title="remove"
                                  />
                                </div>
                              </MediaQuery>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>

                    <div
                      className={styles.checkout}
                      style={{ background: "#b8ffd3" }}
                    >
                      <div className={styles.row1}>
                        <p className={styles.tt}>Total:</p>
                        <p className={styles.tvalue}>{`${new Intl.NumberFormat(
                          "en-US",
                          {
                            style: "currency",
                            currency: "Tsh",
                            minimumFractionDigits: 0,
                          }
                        ).format(parseInt(this.state.net_price))}`}</p>

                        <button
                          className={styles.checkBtn}
                          onClick={() => Router.push({ pathname: "/order" })}
                        >
                          Checkout
                          <img
                            style={{ marginLeft: "5px" }}
                            src="../static/images/right-arrow.png"
                            width={10}
                            height={10}
                          />
                        </button>
                      </div>
                    </div>
                  </MediaQuery>

                  <MediaQuery minWidth={577} maxWidth={899}>
                    <div className={styles.flexOne}>
                      {/* <img src='../static/images/paragraph.png' width={18} height={18} /> */}
                      <img
                        src="../static/images/home.png"
                        width={22}
                        height={22}
                        title="Home"
                        onClick={() => Router.push({ pathname: "/" })}
                        style={{ cursor: "pointer" }}
                      />
                      <span className={styles.mHeader}>MY CART</span>
                      <img
                        src="../static/images/bin.png"
                        width={18}
                        height={18}
                        title="clear cart"
                        onClick={this.clearCart}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <hr className={styles.h} />
                    <div className={styles.sec}>
                      {/* Hapa inabidi nitengeneze kitu kama card.. */}

                      <>
                        {this.state.cartproducts.map((product) => (
                          <div
                            className={styles.behaveLikeCard}
                            key={product.id}
                          >
                            <div
                              className={styles.conte}
                              style={{ paddingTop: "0%" }}
                            >
                              <img
                                src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                                width={90}
                                height={80}
                                className={styles.proImg}
                              />

                              <MediaQuery maxWidth={650}>
                                <div
                                  className={styles.explain}
                                  style={{ top: "22%", top: "9%" }}
                                >
                                  <p className={styles.bich}>
                                    {product.get_title.length > 12
                                      ? product.get_title.substr(0, 12) + "..."
                                      : product.get_title}
                                  </p>
                                  <span className={styles.mpunga}>
                                    {`${new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "Tsh",
                                      minimumFractionDigits: 0,
                                    }).format(parseInt(product.subTotal))}`}
                                  </span>
                                  {product.selectedPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_prop} :{" "}
                                      {product.selectedPropertyValue.length > 10
                                        ? product.selectedPropertyValue.substr(
                                            0,
                                            10
                                          ) + "..."
                                        : product.selectedPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </MediaQuery>
                              <MediaQuery minWidth={651} maxWidth={730}>
                                <div
                                  className={styles.explain}
                                  style={{ left: "21%", top: "9%" }}
                                >
                                  <p className={styles.bich}>
                                    {product.get_title.length > 14
                                      ? product.get_title.substr(0, 14) + "..."
                                      : product.get_title}
                                  </p>
                                  <span className={styles.mpunga}>
                                    {`${new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "Tsh",
                                      minimumFractionDigits: 0,
                                    }).format(parseInt(product.subTotal))}`}
                                  </span>
                                  {product.selectedPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_prop} :
                                      {product.selectedPropertyValue.length > 10
                                        ? product.selectedPropertyValue.substr(
                                            0,
                                            10
                                          ) + "..."
                                        : product.selectedPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={731} maxWidth={800}>
                                <div
                                  className={styles.explain}
                                  style={{ left: "19%", top: "9%" }}
                                >
                                  <p className={styles.bich}>
                                    {product.get_title.length > 15
                                      ? product.get_title.substr(0, 15) + "..."
                                      : product.get_title}
                                  </p>
                                  <span className={styles.mpunga}>
                                    {`${new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "Tsh",
                                      minimumFractionDigits: 0,
                                    }).format(parseInt(product.subTotal))}`}
                                  </span>
                                  {product.selectedPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_prop} :
                                      {product.selectedPropertyValue.length > 13
                                        ? product.selectedPropertyValue.substr(
                                            0,
                                            13
                                          ) + "..."
                                        : product.selectedPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={801} maxWidth={830}>
                                <div
                                  className={styles.explain}
                                  style={{ left: "18%", top: "9%" }}
                                >
                                  <p className={styles.bich}>
                                    {product.get_title.length > 18
                                      ? product.get_title.substr(0, 18) + "..."
                                      : product.get_title}
                                  </p>
                                  <span className={styles.mpunga}>
                                    {`${new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "Tsh",
                                      minimumFractionDigits: 0,
                                    }).format(parseInt(product.subTotal))}`}
                                  </span>
                                  {product.selectedPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_prop} :
                                      {product.selectedPropertyValue.length > 14
                                        ? product.selectedPropertyValue.substr(
                                            0,
                                            13
                                          ) + "..."
                                        : product.selectedPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={831}>
                                <div
                                  className={styles.explain}
                                  style={{ left: "17%", top: "9%" }}
                                >
                                  <p className={styles.bich}>
                                    {product.get_title.length > 18
                                      ? product.get_title.substr(0, 18) + "..."
                                      : product.get_title}
                                  </p>
                                  <span className={styles.mpunga}>
                                    {`${new Intl.NumberFormat("en-US", {
                                      style: "currency",
                                      currency: "Tsh",
                                      minimumFractionDigits: 0,
                                    }).format(parseInt(product.subTotal))}`}
                                  </span>
                                  {product.selectedPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_prop} :
                                      {product.selectedPropertyValue.length > 14
                                        ? product.selectedPropertyValue.substr(
                                            0,
                                            13
                                          ) + "..."
                                        : product.selectedPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.selectedSecondPropertyValue ? (
                                    <p
                                      className={styles.props}
                                      style={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                        marginBottom: "0%",
                                        paddingBottom: "0%",
                                      }}
                                    >
                                      {product.get_secondProp} :{" "}
                                      {product.selectedSecondPropertyValue}
                                    </p>
                                  ) : (
                                    <></>
                                  )}

                                  {product.customization.length > 0 ? (
                                    <p
                                      className={styles.props}
                                      styles={{
                                        marginTop: "0%",
                                        paddingTop: "0%",
                                      }}
                                    >
                                      Note:{" "}
                                      {product.customization.substr(0, 12) +
                                        "..."}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={577} maxWidth={680}>
                                <div
                                  className={styles.quantity}
                                  style={{ left: "55%", top: "22%" }}
                                >
                                  <p className={styles.qua}>
                                    Quantity:{" "}
                                    <span className={styles.namba}>
                                      {product.quantity}
                                    </span>
                                  </p>
                                  <div className={styles.amountWrapper}>
                                    <span
                                      className={styles.plus}
                                      id={product.id}
                                      title={product.quantity}
                                      onClick={this.onDecrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="minus"
                                        id={product.id}
                                        title={product.quantity}
                                      />
                                    </span>
                                    <span className={styles.actualAmount}>
                                      {product.quantity}
                                    </span>
                                    <span
                                      className={styles.minus}
                                      id={product.id}
                                      onClick={this.onIncrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="plus"
                                        id={product.id}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </MediaQuery>

                              <MediaQuery minWidth={681}>
                                <div
                                  className={styles.quantity}
                                  style={{ left: "52%", top: "22%" }}
                                >
                                  <p className={styles.qua}>
                                    Quantity:{" "}
                                    <span className={styles.namba}>
                                      {product.quantity}
                                    </span>
                                  </p>
                                  <div className={styles.amountWrapper}>
                                    <span
                                      className={styles.plus}
                                      id={product.id}
                                      title={product.quantity}
                                      onClick={this.onDecrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="minus"
                                        id={product.id}
                                        title={product.quantity}
                                      />
                                    </span>
                                    <span className={styles.actualAmount}>
                                      {product.quantity}
                                    </span>
                                    <span
                                      className={styles.minus}
                                      id={product.id}
                                      onClick={this.onIncrease}
                                    >
                                      <Icon
                                        size="small"
                                        name="plus"
                                        id={product.id}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </MediaQuery>

                              <div
                                className={styles.close}
                                name={product.id}
                                id={product.id}
                                onClick={this.onRemove}
                                style={{ top: "37%", left: "90%" }}
                              >
                                <img
                                  src="../static/images/delete.png"
                                  width={25}
                                  height={25}
                                  name={product.id}
                                  id={product.id}
                                  title="remove"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>

                    <div
                      className={styles.checkout}
                      style={{ paddingBottom: "18%", background: "#b8ffd3" }}
                    >
                      <div
                        className={styles.row1}
                        style={{ marginLeft: "10%" }}
                      >
                        <p className={styles.tt}>Total:</p>
                        <p className={styles.tvalue}>
                          {`${new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "Tsh",
                            minimumFractionDigits: 0,
                          }).format(parseInt(this.state.net_price))}`}
                        </p>

                        <button
                          className={styles.checkBtn}
                          style={{ padding: "2%" }}
                          onClick={() => Router.push({ pathname: "/order" })}
                        >
                          Checkout
                          <img
                            style={{ marginLeft: "5px" }}
                            src="../static/images/right-arrow.png"
                            width={10}
                            height={10}
                          />
                        </button>
                      </div>
                    </div>
                  </MediaQuery>

                  <MediaQuery minWidth={900}>
                    <Grid>
                      <Grid.Column width={12}>
                        <section className={styles.top}>
                          <div className={styles.flexOne}>
                            <img
                              src="../static/images/home.png"
                              width={25}
                              height={25}
                              title="Home"
                              onClick={() => Router.push({ pathname: "/" })}
                              style={{ cursor: "pointer" }}
                            />
                            <p className={styles.tHeade}>My Shopping Cart</p>
                            <img
                              src="../static/images/bin.png"
                              width={22}
                              height={22}
                              title="clear cart"
                              onClick={this.clearCart}
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                          <div className={styles.cls}>
                            <div className={styles.sec}>
                              <Grid>
                                <Grid.Column width={6}>
                                  <Header
                                    as="h4"
                                    content="Description"
                                    color="grey"
                                    textAlign="center"
                                  />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                  <Header
                                    as="h4"
                                    content="Quantity"
                                    color="grey"
                                    textAlign="center"
                                  />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                  <Header
                                    as="h4"
                                    content="Remove"
                                    color="grey"
                                    textAlign="center"
                                  />
                                </Grid.Column>
                                <Grid.Column width={3}>
                                  <Header
                                    as="h4"
                                    content="Price"
                                    color="grey"
                                    textAlign="center"
                                  />
                                </Grid.Column>
                              </Grid>
                              <hr className={styles.hl} />

                              {this.state.cartproducts.map((product) => (
                                <div className={styles.cont} key={product.id}>
                                  <Grid>
                                    <Grid.Column width={6}>
                                      <div className={styles.holder}>
                                        <img
                                          src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                                          width={90}
                                          height={70}
                                          style={{
                                            borderRadius: "10px",
                                            marginRight: "2%",
                                          }}
                                        />
                                        <span className={styles.hahaha}>
                                          <MediaQuery maxWidth={1100}>
                                            <span
                                              className={styles.bichwa}
                                              style={{ left: "46%" }}
                                            >
                                              {product.get_title.length > 15
                                                ? product.get_title.substr(
                                                    0,
                                                    15
                                                  ) + "..."
                                                : product.get_title}

                                              {product.selectedPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginBottom: "0%",
                                                    paddingTop: "0%",
                                                  }}
                                                >
                                                  {product.get_prop} :
                                                  {
                                                    product.selectedPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.selectedSecondPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_secondProp} :{" "}
                                                  {
                                                    product.selectedSecondPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.customization.length >
                                              0 ? (
                                                <p
                                                  className={styles.prop}
                                                  styles={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                  }}
                                                >
                                                  Note:{" "}
                                                  {product.customization.substr(
                                                    0,
                                                    20
                                                  ) + "..."}
                                                </p>
                                              ) : (
                                                <></>
                                              )}
                                            </span>
                                          </MediaQuery>
                                          <MediaQuery
                                            minWidth={1101}
                                            maxWidth={1200}
                                          >
                                            <span className={styles.bichwa}>
                                              {product.get_title.length > 17
                                                ? product.get_title.substr(
                                                    0,
                                                    17
                                                  ) + "..."
                                                : product.get_title}

                                              {/* <p>Hello im here</p> */}
                                              {product.selectedPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_prop} :
                                                  {
                                                    product.selectedPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.selectedSecondPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_secondProp} :{" "}
                                                  {
                                                    product.selectedSecondPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.customization.length >
                                              0 ? (
                                                <p
                                                  className={styles.prop}
                                                  styles={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                  }}
                                                >
                                                  Note:{" "}
                                                  {product.customization.substr(
                                                    0,
                                                    20
                                                  ) + "..."}
                                                </p>
                                              ) : (
                                                <></>
                                              )}
                                            </span>
                                          </MediaQuery>

                                          <MediaQuery
                                            minWidth={1201}
                                            maxWidth={1350}
                                          >
                                            <span
                                              className={styles.bichwa}
                                              style={{ left: "38%" }}
                                            >
                                              {product.get_title.length > 17
                                                ? product.get_title.substr(
                                                    0,
                                                    17
                                                  ) + "..."
                                                : product.get_title}

                                              {/* <p>Hello im here</p> */}
                                              {product.selectedPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_prop} :
                                                  {
                                                    product.selectedPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.selectedSecondPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_secondProp} :{" "}
                                                  {
                                                    product.selectedSecondPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.customization.length >
                                              0 ? (
                                                <p
                                                  className={styles.prop}
                                                  styles={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                  }}
                                                >
                                                  Note:{" "}
                                                  {product.customization.substr(
                                                    0,
                                                    25
                                                  ) + "..."}
                                                </p>
                                              ) : (
                                                <></>
                                              )}
                                            </span>
                                          </MediaQuery>

                                          <MediaQuery
                                            minWidth={1351}
                                            maxWidth={1500}
                                          >
                                            <span
                                              className={styles.bichwa}
                                              style={{ left: "34%" }}
                                            >
                                              {product.get_title.length > 17
                                                ? product.get_title.substr(
                                                    0,
                                                    17
                                                  ) + "..."
                                                : product.get_title}

                                              {/* <p>Hello im here</p> */}
                                              {product.selectedPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_prop} :
                                                  {
                                                    product.selectedPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.selectedSecondPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_secondProp} :{" "}
                                                  {
                                                    product.selectedSecondPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.customization.length >
                                              0 ? (
                                                <p
                                                  className={styles.prop}
                                                  styles={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                  }}
                                                >
                                                  Note:{" "}
                                                  {product.customization.substr(
                                                    0,
                                                    25
                                                  ) + "..."}
                                                </p>
                                              ) : (
                                                <></>
                                              )}
                                            </span>
                                          </MediaQuery>

                                          <MediaQuery
                                            minWidth={1501}
                                            maxWidth={1750}
                                          >
                                            <span
                                              className={styles.bichwa}
                                              style={{ left: "30%" }}
                                            >
                                              {product.get_title.length > 17
                                                ? product.get_title.substr(
                                                    0,
                                                    17
                                                  ) + "..."
                                                : product.get_title}

                                              {/* <p>Hello im here</p> */}
                                              {product.selectedPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_prop} :
                                                  {
                                                    product.selectedPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.selectedSecondPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_secondProp} :{" "}
                                                  {
                                                    product.selectedSecondPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.customization.length >
                                              0 ? (
                                                <p
                                                  className={styles.prop}
                                                  styles={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                  }}
                                                >
                                                  Note:{" "}
                                                  {product.customization.substr(
                                                    0,
                                                    25
                                                  ) + "..."}
                                                </p>
                                              ) : (
                                                <></>
                                              )}
                                            </span>
                                          </MediaQuery>

                                          <MediaQuery minWidth={1751}>
                                            <span
                                              className={styles.bichwa}
                                              style={{ left: "25%" }}
                                            >
                                              {product.get_title.length > 17
                                                ? product.get_title.substr(
                                                    0,
                                                    17
                                                  ) + "..."
                                                : product.get_title}

                                              {/* <p>Hello im here</p> */}
                                              {product.selectedPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_prop} :
                                                  {
                                                    product.selectedPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.selectedSecondPropertyValue ? (
                                                <p
                                                  className={styles.prop}
                                                  style={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                    marginBottom: "0%",
                                                    paddingBottom: "0%",
                                                  }}
                                                >
                                                  {product.get_secondProp} :{" "}
                                                  {
                                                    product.selectedSecondPropertyValue
                                                  }
                                                </p>
                                              ) : (
                                                <></>
                                              )}

                                              {product.customization.length >
                                              0 ? (
                                                <p
                                                  className={styles.prop}
                                                  styles={{
                                                    marginTop: "0%",
                                                    paddingTop: "0%",
                                                  }}
                                                >
                                                  Note:{" "}
                                                  {product.customization.substr(
                                                    0,
                                                    25
                                                  ) + "..."}
                                                </p>
                                              ) : (
                                                <></>
                                              )}
                                            </span>
                                          </MediaQuery>
                                        </span>
                                      </div>
                                    </Grid.Column>

                                    <Grid.Column width={4}>
                                      <div className={styles.do}>
                                        <span className={styles.sp}>
                                          Quantity:{" "}
                                          <span className={styles.idadi}>
                                            {product.quantity}
                                          </span>
                                        </span>
                                        <div className={styles.amountWrapper}>
                                          {/* <span className={styles.plus} title={product.get_title} onClick={this.onDecrease}>
                                                                        <Icon size="small" name='minus' />
                                                                    </span> */}
                                          <button
                                            style={{
                                              fontWeight: "bold",
                                              paddingRight: "7px",
                                              paddingLeft: "5px",
                                            }}
                                            name={product.quantity}
                                            title="-1"
                                            id={product.id}
                                            onClick={this.onDecrease}
                                          >
                                            -
                                          </button>
                                          <span className={styles.actualAmount}>
                                            {product.quantity}
                                          </span>
                                          <button
                                            style={{ fontWeight: "bold" }}
                                            title="+1"
                                            id={product.id}
                                            onClick={this.onIncrease}
                                          >
                                            +
                                          </button>
                                          {/* <span className={styles.minus} title={product.get_title} onClick={this.onIncrease}>
                                                                        <Icon size="small" name='plus' />
                                                                    </span> */}
                                        </div>
                                      </div>
                                    </Grid.Column>

                                    <Grid.Column width={3}>
                                      <div className={styles.test}>
                                        <button
                                          name={product.id}
                                          className={styles.hha}
                                          onClick={this.onRemove}
                                        >
                                          x
                                        </button>
                                      </div>

                                      {/* <div className={styles.hha}>
                                                                    <Button circular name={product.id} icon='remove' size='large' onClick={this.onRemove} />
                                                    
                                                                </div> */}
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                      <div className={styles.hhh}>
                                        {`${new Intl.NumberFormat("en-US", {
                                          style: "currency",
                                          currency: "Tsh",
                                          minimumFractionDigits: 0,
                                        }).format(parseInt(product.subTotal))}`}
                                      </div>
                                    </Grid.Column>
                                  </Grid>

                                  <hr />
                                </div>
                              ))}
                            </div>
                          </div>
                        </section>
                      </Grid.Column>

                      <Grid.Column width={4}>
                        <div className={styles.bottom}>
                          {/* <Header as='h2' textAlign="center" content="Cart summary" color='grey' /> */}
                          <p className={styles.hOne}> Cart summary </p>
                          <div className={styles.check2}>
                            <div className={styles.amo}>
                              <span className={styles.ami}>
                                <span className={styles.had}>Net Price:</span>
                                <span
                                  className={styles.hvalue}
                                >{`${new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "Tsh",
                                  minimumFractionDigits: 0,
                                }).format(
                                  parseInt(this.state.net_price)
                                )}/=`}</span>
                              </span>
                              <hr />
                            </div>
                            <div className={styles.quant}>
                              <span>
                                <span className={styles.had}>
                                  Number of items:
                                </span>
                                <span className={styles.nValue}>
                                  {this.state.net_quantity}
                                </span>
                              </span>
                              <hr />
                            </div>
                            <div className={styles.btn}>
                              <Button
                                color="yellow"
                                content="Proceed to checkout"
                                fluid
                                onClick={() =>
                                  Router.push({ pathname: "/order" })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </Grid.Column>
                    </Grid>
                  </MediaQuery>
                </>
              ) : (
                <div>
                  <MediaQuery maxWidth={1199}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",

                          justifyContent: "center",
                          overflowX: "hidden",
                        }}
                      >
                        <img
                          src="../static/images/none.gif"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "grey",
                            fontSize: "150%",
                          }}
                        >
                          No item added to cart yet <br />
                          <button
                            style={{
                              marginTop: "1%",
                              fontWeight: "bold",
                            }}
                            className="btn btn-warning"
                            onClick={() => Router.push("/")}
                          >
                            start shopping
                          </button>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>
                  <MediaQuery minWidth={1200}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",

                          justifyContent: "center",
                          overflowX: "hidden",
                        }}
                      >
                        <img
                          src="../static/images/none.gif"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "grey",
                            fontSize: "130%",
                          }}
                        >
                          No item added to cart yet <br />
                          <button
                            style={{
                              marginTop: "1%",
                              fontWeight: "bold",
                            }}
                            className="btn btn-warning"
                            onClick={() => Router.push("/")}
                          >
                            start shopping
                          </button>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>
                </div>
              )
            ) : (
              <div>
                <MediaQuery maxWidth={899}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",

                        justifyContent: "center",
                        overflowX: "hidden",
                      }}
                    >
                      <img
                        src="../static/images/demon.gif"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "110%",
                        }}
                      >
                        <MediaQuery maxWidth={450}>
                          We don't accept anonymous user to view cart.
                          Login/Register here{" "}
                        </MediaQuery>
                        <MediaQuery minWidth={451}>
                          We don't accept anonymous user to view cart.
                          <br /> Login/Register here{" "}
                        </MediaQuery>
                        <br />
                        <button
                          style={{
                            marginTop: "1%",
                            fontWeight: "bold",
                          }}
                          className="btn btn-warning"
                          onClick={() => Router.push("/jisajili")}
                        >
                          Register
                        </button>
                        <button
                          style={{
                            marginLeft: "5%",
                            marginTop: "1%",
                            fontWeight: "bold",
                          }}
                          className="btn btn-info"
                          onClick={() => Router.push("/login")}
                        >
                          Login
                        </button>
                      </p>
                    </div>
                  </div>
                </MediaQuery>

                <MediaQuery minWidth={900} maxWidth={1199}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",

                        justifyContent: "center",
                        overflowX: "hidden",
                      }}
                    >
                      <img
                        src="../static/images/demon.gif"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "120%",
                        }}
                      >
                        We don't accept anonymous user to view cart. <br />{" "}
                        Login/Register here <br />
                        <button
                          style={{
                            marginTop: "1%",
                            fontWeight: "bold",
                          }}
                          className="btn btn-info"
                          onClick={() => Router.push("/register")}
                        >
                          Sign in
                        </button>
                      </p>
                    </div>
                  </div>
                </MediaQuery>
                <MediaQuery minWidth={1200}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",

                        justifyContent: "center",
                        overflowX: "hidden",
                      }}
                    >
                      <img
                        src="../static/images/demon.gif"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "grey",
                          fontSize: "130%",
                        }}
                      >
                        We don't accept anonymous user to view cart. <br />{" "}
                        Login/Register here <br />
                        <button
                          style={{
                            marginTop: "1%",
                            fontWeight: "bold",
                          }}
                          className="btn btn-info"
                          onClick={() => Router.push("/register")}
                        >
                          Sign in
                        </button>
                      </p>
                    </div>
                  </div>
                </MediaQuery>
              </div>
            )}
          </div>
        </div>

        {/* This is how to write styling in next.js and something interesting of this 
                syntax is power to add styling to any element like body which it was difficult 
                before, for more these read https://stackoverflow.com/questions/63247550/nextjs-switch-body-background-color
                and https://nextjs.org/blog/styling-next-with-styled-jsx */}
        <style jsx global>{`
          body {
            background: rgb(236, 236, 236);
          }
        `}</style>
      </div>
    );
  }
}

export default Cart;
