import React, { Component } from "react";
import NavBar from "../components/NavBar3";
import Sign from "../components/Sign";
import jwt_decode from "jwt-decode";
import { Icon, Button, Message, Grid } from "semantic-ui-react";
import styles from "../static/css/preview.module.css";
import Router from "next/router";
import BACKEND_ORIGIN from "../utils/domain";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import dynamic from "next/dynamic";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);
// THIS IS ONLY FOR PHONES 200px to 576px devices but not for tablet
// and pc or other large devices

class Preview extends Component {
  state = {
    isAunthenticated: false,
    selectedProp: "",
    customValue: "",
    index: 1,
    productQuantity: 1,
    selectedObjPrice: 0, //Hii kazi yake ni ku-tract total amount of the product placed to the cart.So its changed when user add or reduce quantity/amount of the product..
    productPrice: 0, // I use this only to know the original price of single product.. So this is static
    secondPropsAttributeValue: "",
  };

  constructor(props) {
    super(props);
    this.initialProp = React.createRef();
    this.imageConte = React.createRef();
    this.err1 = React.createRef();
    this.uwanja = React.createRef();
  }

  static async getInitialProps(props) {
    const { product } = props.query;

    const response = await fetch(`${BACKEND_ORIGIN}/api/product/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product,
      }),
    });

    const data = await response.json();

    return { data, product };
  }

  addToCart = async (e) => {
    e.preventDefault();

    console.log("Im adding something to cart..");
    // first detect if the user has login or not
    // if not redirect them to /login...
    await this.executingTokenLogics(); // Hii ishu ya ku-setState inatu-chelewesha
    // coz ina some delay.. Ko nifanyeje hapa hata user akiwa amelogin anakuwa
    // anaambiwa ni anonymous...

    if (!this.state.isAunthenticated) {
      console.log("You're anonymous user.");
      Router.push({
        pathname: "/login",
        query: { flag: "/preview", productId: this.props.product },
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
      decodedAccessData = jwt_decode(access);
    } catch (err) {
      if (this.uwanja.current) {
        this.uwanja.current.value = "";
        this.setState({
          customValue: "",
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

    let check = await fetch(`${BACKEND_ORIGIN}/api/cartExistOrNot/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        productId: id,
        price,
        quantity,
        customization,
        value,
        secondValue: secondPropsAttributeValue,
      }),
    });

    let output = await check.json();

    if (output.status == false) {
      // then either huyu mtu hana cart au kuna error imekuwa imetokea hata kama mtu ana cart..
      // then hii itarukia on creating a new cart...
      // this request create a new cart..
      try {
        let response = await fetch(`${BACKEND_ORIGIN}/api/carts/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user_id,
            productId: id,
            price,
            quantity,
            customization,
            value,
            secondValue: secondPropsAttributeValue,
          }),
        });

        let data = await response.json();
        console.log("Hey this is the response from the server");
        console.log(data);
        if (this.uwanja.current) {
          this.uwanja.current.value = "";
          this.setState({
            customValue: "",
          });
        }

        console.log("This is success for you...");
        this.err1.current.style.display = "block";
        this.successInterval = setTimeout(() => {
          this.err1.current.style.display = "none";
        }, 5000);

        // Redirect user to the cart component....
        // Router.push({ pathname: "/cart" });
      } catch (err) {
        if (this.uwanja.current) {
          this.uwanja.current.value = "";
          this.setState({
            customValue: "",
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
      this.successInterval = setTimeout(() => {
        this.err1.current.style.display = "none";
      }, 5000);

      if (this.uwanja.current) {
        this.uwanja.current.value = "";
        this.setState({
          customValue: "",
        });
      }

      // Redirect user to the cart component....
      // Router.push({ pathname: "/cart" });
    }
  };

  componentWillUnmount() {
    clearTimeout(this.successInterval);
  }

  executingTokenLogics = () => {
    try {
      const tokens = localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null;
      if (!tokens) {
        console.log("You needed to login, no records");
        this.setState({ isAunthenticated: false });
        return;
      }
      const decodedRefreshToken = jwt_decode(tokens.refresh);
      const expireRefreshTime = decodedRefreshToken.exp;
      console.log("Hey this is the expire date of the refreshToken");
      console.log(expireRefreshTime);
      console.log("Lets try to access the json access token");
      console.log(tokens.access);
      const decodedAccessData = jwt_decode(tokens.access);
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
        });
      } else {
        this.setState({
          isAunthenticated: true,
        });
      }
    } catch (InvalidTokenError) {
      // so this will only capture the InvalidTokenError which is caused by using already expired-token because and I said automatically when
      // we made request to the jwd to decode it will return error that our token is already expired and by default as we coded it will update
      // our localstorage to look like >>> authToken: {"detail": "Token is blacklisted", "code": "token_not_valid"}

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

  // this function will get called everytime we click the next or prev
  // button... Dont forget this....
  detectIndexOfImageOnPreview = () => {
    // image in focus
    const path = this.imageConte.current.src;
    const imageInFocus = path.substr(21);
    const allImages = this.props.data.get_urls;

    const imageIndex = allImages.indexOf(imageInFocus);
    console.log("This is imageIndex for you ", imageIndex);
    this.setState({
      index: imageIndex + 1,
    });
  };

  next = () => {
    // first get all images found...
    console.log(this.props.data.get_urls);
    // first get the image in preview then you should detect if
    // its the last one or not.. If its the last one when the
    // user click next you should change src to first index or
    // image.. But what if its not the last one if its not the
    // last one then its easier change it to next image of it..
    const imageInAction = this.props.data.get_urls.indexOf(
      this.imageConte.current.src.substr(21)
    );
    console.log("This is the index of image in action...", imageInAction);

    if (imageInAction + 1 === this.props.data.get_urls.length) {
      console.log("Your the last image...");
      this.imageConte.current.src = `${BACKEND_ORIGIN}${this.props.data.get_urls[0]}`;
    } else {
      console.log("Your not the last image...");
      this.imageConte.current.src = `${BACKEND_ORIGIN}${
        this.props.data.get_urls[imageInAction + 1]
      }`;
    }

    this.detectIndexOfImageOnPreview();
  };

  prev = () => {
    console.log(this.props.data.get_urls);
    // first get all images found...
    console.log(this.props.data.get_urls);

    const imageInAction = this.props.data.get_urls.indexOf(
      this.imageConte.current.src.substr(21)
    );
    console.log("This is the index of image in action...", imageInAction);

    if (imageInAction === 0) {
      console.log("Your the first image...");
      this.imageConte.current.src = `${BACKEND_ORIGIN}${
        this.props.data.get_urls[this.props.data.get_urls.length - 1]
      }`;
    } else {
      console.log("Your not the first image...");
      this.imageConte.current.src = `${BACKEND_ORIGIN}${
        this.props.data.get_urls[imageInAction - 1]
      }`;
    }

    this.detectIndexOfImageOnPreview();
  };

  onIncrease = () => {
    this.setState({
      productQuantity: this.state.productQuantity + 1,
    });

    this.setState({
      selectedObjPrice: this.state.selectedObjPrice + this.state.productPrice,
    });
  };

  onDecrease = () => {
    if (this.state.productQuantity > 1) {
      this.setState({
        productQuantity: this.state.productQuantity - 1,
      });

      this.setState({
        selectedObjPrice: this.state.selectedObjPrice - this.state.productPrice,
      });
    }
  };

  async componentDidMount() {
    // NIMEGUNDUA LEO KUWA getInitialProps() ndo inayoanza ku-run before
    // componentDidMount.. So you can now take data from getInitialProps and
    // assign them to the state by using the componentDidMount()
    this.executingTokenLogics();

    const { data } = this.props;

    // I think this condition should be checked because eti if it does not
    // has property selection it will not set the price...
    if (data.hasPropertySelection) {
      this.setState({
        selectedProp: Object.values(data.map_property[0])[0],
        selectedObjPrice: data.price,
        productPrice: data.price,
      });
    } else {
      this.setState({
        selectedObjPrice: data.price,
        productPrice: data.price,
      });
    }

    if (data.hasSecondPropertySelection) {
      this.setState({
        secondPropsAttributeValue: Object.values(data.map_secondProps[0])[0],
      });
    }
  }

  render() {
    return (
      <NavBar isAunthenticated={this.state.isAunthenticated}>
        <div>
          <MediaQuery minWidth={200} maxWidth={400}>
            <div className={styles.odb}>
              {/* <p className={styles.pre}>prev</p> */}

              {/* https://codesandbox.io/s/20hp51?file=/src/App.jsx
              https://www.youtube.com/watch?v=4aJPgKLwAGY */}
              {this.props.data.get_urls.length > 1 ? (
                <Swiper
                  modules={[Navigation, EffectFade, Pagination]}
                  navigation
                  effect={"fade"}
                  speed={300}
                  slidesPerView={1}
                  loop
                  className={styles.myswiper}
                  pagination={{ clickable: true }}
                >
                  {this.props.data.get_urls.map((image) => (
                    <SwiperSlide>
                      <img
                        src={`${BACKEND_ORIGIN}${image}`}
                        className={styles.ima}
                        // ref={this.imageConte}
                        height={280}
                        key={image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  className={styles.ima}
                  ref={this.imageConte}
                  src={`${BACKEND_ORIGIN}${this.props.data.get_urls[0]}`}
                  height={280}
                />
              )}

              {/* <p className={styles.imgNo}>
                <img src="../static/images/image.png" width={20} height={20} />
                {`${this.state.index}/${this.props.data.get_urls.length}`}
              </p> */}
              <div className={styles.tit}>
                <p className={styles.main}>{this.props.data.title}</p>
                <span className={styles.sub}>
                  {this.props.data.description}
                </span>
                <hr />
              </div>

              <div className={styles.priQuan}>
                <Grid>
                  <Grid.Column width={8}>
                    <p className={styles.price}>Price:</p>
                    <MediaQuery minWidth={200} maxWidth={349}>
                      <span
                        className={styles.beiNdogo}
                      >{`${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "Tsh",
                        minimumFractionDigits: 0,
                      }).format(parseInt(this.state.selectedObjPrice))}`}</span>
                    </MediaQuery>
                    <MediaQuery minWidth={350}>
                      <span className={styles.bei}>{`${new Intl.NumberFormat(
                        "en-US",
                        {
                          style: "currency",
                          currency: "Tsh",
                          minimumFractionDigits: 0,
                        }
                      ).format(parseInt(this.state.selectedObjPrice))}`}</span>
                    </MediaQuery>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p className={styles.qua}>
                      Quantity:{" "}
                      <span className={styles.namba}>
                        {this.state.productQuantity}
                      </span>
                    </p>
                    <div className={styles.amountWrapper}>
                      <span className={styles.plus} onClick={this.onDecrease}>
                        <Icon size="small" name="minus" />
                      </span>
                      <span className={styles.actualAmount}>
                        {this.state.productQuantity}
                      </span>
                      <span className={styles.minus} onClick={this.onIncrease}>
                        <Icon size="small" name="plus" />
                      </span>
                    </div>
                  </Grid.Column>
                </Grid>
                <hr />
              </div>

              <div className={styles.customizations}>
                {this.props.data.hasPropertySelection === false &&
                this.props.data.isCustomized === false &&
                this.props.data.hasSecondPropertySelection === false ? (
                  <> </>
                ) : (
                  <div className={styles.holder}>
                    <p className={styles.custom}>User Customizations</p>
                    <hr className={styles.ch} />
                    <Grid>
                      {this.props.data.hasPropertySelection ? (
                        <Grid.Column width={9}>
                          <>
                            <span className={styles.pName}>
                              {Object.keys(this.props.data.map_property[0])[0]}:
                            </span>
                            <span
                              className={styles.pValue}
                              name={
                                Object.values(
                                  this.props.data.map_property[0]
                                )[0]
                              }
                              style={{ fontSize: "12px" }}
                              ref={this.initialProp}
                            >
                              {/* {Object.values(this.props.data.map_property[0])[0]} */}
                              {this.state.selectedProp.length > 10
                                ? this.state.selectedProp.substr(0, 9) + ".."
                                : this.state.selectedProp}
                            </span>
                            <div className={styles.radioContainer}>
                              {this.props.data.property_values.map((prop) => (
                                <div key={prop}>
                                  <input
                                    className={styles.rad}
                                    type="radio"
                                    id={prop}
                                    name="property"
                                    checked={this.state.selectedProp === prop}
                                    onChange={() =>
                                      this.setState({ selectedProp: prop })
                                    }
                                  />
                                  <label
                                    className={styles.label}
                                    htmlFor={prop}
                                  >
                                    {prop}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </>
                        </Grid.Column>
                      ) : (
                        <></>
                      )}

                      {this.props.data.hasSecondPropertySelection ? (
                        <Grid.Column width={7}>
                          <>
                            <span>
                              <span
                                className={styles.pName}
                                style={{ fontSize: "15px" }}
                              >
                                {
                                  Object.keys(
                                    this.props.data.map_secondProps[0]
                                  )[0]
                                }
                                :
                              </span>
                              <span
                                className={styles.pValue}
                                style={{ fontSize: "12px" }}
                              >
                                {this.state.secondPropsAttributeValue.length > 7
                                  ? this.state.secondPropsAttributeValue.substr(
                                      0,
                                      6
                                    ) + ".."
                                  : this.state.secondPropsAttributeValue}
                              </span>
                            </span>

                            {this.props.data.second_propsValue.map((propa) => (
                              <div key={propa}>
                                <input
                                  className={styles.rad}
                                  type="radio"
                                  id={propa}
                                  name="propa"
                                  checked={
                                    this.state.secondPropsAttributeValue ===
                                    propa
                                  }
                                  onChange={() =>
                                    this.setState({
                                      secondPropsAttributeValue: propa,
                                    })
                                  }
                                />
                                <label className={styles.label} htmlFor={propa}>
                                  {propa}
                                </label>
                              </div>
                            ))}
                          </>
                        </Grid.Column>
                      ) : (
                        <></>
                      )}
                    </Grid>

                    {this.props.data.isCustomized ? (
                      <>
                        <div className={styles.text}>
                          <p className={styles.head}>
                            Customize product's image/text.
                          </p>
                          <p className={styles.ason}>
                            *** Leave blank to use default one.
                            <br />
                            *** In case of image write a web link to that image
                          </p>

                          <MediaQuery minWidth={200} maxWidth={340}>
                            <textarea
                              row={2}
                              cols={30}
                              className={this.tarea}
                              onChange={(e) =>
                                this.setState({ customValue: e.target.value })
                              }
                              ref={this.uwanja}
                            ></textarea>
                          </MediaQuery>
                          <MediaQuery minWidth={341} maxWidth={360}>
                            <textarea
                              row={2}
                              cols={32}
                              className={this.tarea}
                              onChange={(e) =>
                                this.setState({ customValue: e.target.value })
                              }
                              ref={this.uwanja}
                            ></textarea>
                          </MediaQuery>
                          <MediaQuery minWidth={361} maxWidth={380}>
                            <textarea
                              row={2}
                              cols={33}
                              className={this.tarea}
                              onChange={(e) =>
                                this.setState({ customValue: e.target.value })
                              }
                              ref={this.uwanja}
                            ></textarea>
                          </MediaQuery>

                          <MediaQuery minWidth={381}>
                            <textarea
                              row={2}
                              cols={36}
                              className={this.tarea}
                              onChange={(e) =>
                                this.setState({ customValue: e.target.value })
                              }
                              ref={this.uwanja}
                            ></textarea>
                          </MediaQuery>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
                {/* Hii button inabidi iwe nje ya checking ya hasPropSelection & isCustomized.. */}
                <div className={styles.err1} ref={this.err1}>
                  <Message success size="mini">
                    <Message.Header>
                      Success, Item has been added to cart
                    </Message.Header>
                    <Icon name="warning sign" />
                    Click the cart icon above to preview your cart.
                  </Message>
                </div>
                <div style={{ marginBottom: "2%" }}>
                  <Button
                    animated
                    primary
                    size="medium"
                    fluid
                    onClick={this.addToCart}
                  >
                    <Button.Content visible>Add to Cart</Button.Content>
                    <Button.Content hidden>
                      <Icon name="shop" />
                    </Button.Content>
                  </Button>
                </div>
              </div>
            </div>
          </MediaQuery>

          <MediaQuery minWidth={401} maxWidth={576}>
            <div className={styles.odb}>
              {this.props.data.get_urls.length > 1 ? (
                <Swiper
                  modules={[Navigation, EffectFade, Pagination]}
                  navigation
                  effect={"fade"}
                  speed={300}
                  slidesPerView={1}
                  loop
                  className={styles.myswiper}
                  pagination={{ clickable: true }}
                  //onSlideChangeTransitionEnd={this.slideChange}
                >
                  {this.props.data.get_urls.map((image) => (
                    <SwiperSlide>
                      <img
                        src={`${BACKEND_ORIGIN}${image}`}
                        className={styles.ima}
                        // ref={this.imageConte}
                        height={350}
                        key={image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  className={styles.ima}
                  ref={this.imageConte}
                  src={`${BACKEND_ORIGIN}${this.props.data.get_urls[0]}`}
                  height={350}
                />
              )}

              <div className={styles.tit}>
                <p className={styles.main}>{this.props.data.title}</p>
                <span className={styles.sub}>
                  {this.props.data.description}
                </span>
                <hr />
              </div>

              <div className={styles.priQuan}>
                <Grid>
                  <Grid.Column width={8}>
                    <p className={styles.price}>Price:</p>

                    <span className={styles.bei}>{`${new Intl.NumberFormat(
                      "en-US",
                      {
                        style: "currency",
                        currency: "Tsh",
                        minimumFractionDigits: 0,
                      }
                    ).format(parseInt(this.state.selectedObjPrice))}`}</span>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p className={styles.qua}>
                      Quantity:{" "}
                      <span className={styles.namba}>
                        {this.state.productQuantity}
                      </span>
                    </p>
                    <div className={styles.amountWrapper}>
                      <span className={styles.plus} onClick={this.onDecrease}>
                        <Icon size="small" name="minus" />
                      </span>
                      <span className={styles.actualAmount}>
                        {this.state.productQuantity}
                      </span>
                      <span className={styles.minus} onClick={this.onIncrease}>
                        <Icon size="small" name="plus" />
                      </span>
                    </div>
                  </Grid.Column>
                </Grid>
                <hr />
              </div>

              <div className={styles.customizations}>
                {this.props.data.hasPropertySelection === false &&
                this.props.data.isCustomized === false &&
                this.props.data.hasSecondPropertySelection === false ? (
                  <> </>
                ) : (
                  <div className={styles.holder}>
                    <p className={styles.custom}>User Customizations</p>
                    <hr className={styles.ch} />

                    <Grid>
                      {this.props.data.hasPropertySelection ? (
                        <Grid.Column width={9}>
                          <>
                            <span className={styles.pName}>
                              {Object.keys(this.props.data.map_property[0])[0]}:
                            </span>
                            <span
                              className={styles.pValue}
                              style={{ fontSize: "13px" }}
                            >
                              {this.state.selectedProp.length > 12
                                ? this.state.selectedProp.substr(0, 11) + ".."
                                : this.state.selectedProp}
                            </span>
                            <div className={styles.radioContainer}>
                              {this.props.data.property_values.map((prop) => (
                                <div key={prop}>
                                  <input
                                    className={styles.rad}
                                    type="radio"
                                    id={prop}
                                    name="property"
                                    checked={this.state.selectedProp == prop}
                                    onChange={() =>
                                      this.setState({ selectedProp: prop })
                                    }
                                  />
                                  <label
                                    className={styles.label}
                                    htmlFor={prop}
                                  >
                                    {prop}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </>
                        </Grid.Column>
                      ) : (
                        <></>
                      )}

                      {this.props.data.hasSecondPropertySelection ? (
                        <Grid.Column width={7}>
                          <>
                            <span>
                              <span
                                className={styles.pName}
                                style={{ fontSize: "15px" }}
                              >
                                {
                                  Object.keys(
                                    this.props.data.map_secondProps[0]
                                  )[0]
                                }
                                :
                              </span>
                              <span
                                className={styles.pValue}
                                style={{ fontSize: "13px" }}
                              >
                                {this.state.secondPropsAttributeValue.length > 7
                                  ? this.state.secondPropsAttributeValue.substr(
                                      0,
                                      6
                                    ) + ".."
                                  : this.state.secondPropsAttributeValue}
                              </span>
                            </span>

                            {this.props.data.second_propsValue.map((propa) => (
                              <div key={propa}>
                                <input
                                  className={styles.rad}
                                  type="radio"
                                  id={propa}
                                  name="propa"
                                  checked={
                                    this.state.secondPropsAttributeValue ===
                                    propa
                                  }
                                  onChange={() =>
                                    this.setState({
                                      secondPropsAttributeValue: propa,
                                    })
                                  }
                                />
                                <label className={styles.label} htmlFor={propa}>
                                  {propa}
                                </label>
                              </div>
                              // MIMI NI PASKO
                            ))}
                          </>
                        </Grid.Column>
                      ) : (
                        <></>
                      )}
                    </Grid>

                    {this.props.data.isCustomized ? (
                      <>
                        <div className={styles.text}>
                          <p className={styles.head}>
                            Customize product's image/text.
                          </p>
                          <p className={styles.ason}>
                            *** Leave blank to use default one.
                            <br />
                            *** In case of image write a web link to that image
                          </p>
                          <MediaQuery minWidth={401} maxWidth={450}>
                            <textarea
                              row={2}
                              cols={36}
                              className={this.tarea}
                              onChange={(e) =>
                                this.setState({ customValue: e.target.value })
                              }
                              ref={this.uwanja}
                            ></textarea>
                          </MediaQuery>
                          <MediaQuery minWidth={451} maxWidth={500}>
                            <textarea
                              row={2}
                              cols={40}
                              className={this.tarea}
                              onChange={(e) =>
                                this.setState({ customValue: e.target.value })
                              }
                              ref={this.uwanja}
                            ></textarea>
                          </MediaQuery>

                          <MediaQuery minWidth={501} maxWidth={576}>
                            <textarea
                              row={2}
                              cols={46}
                              className={this.tarea}
                              onChange={(e) =>
                                this.setState({ customValue: e.target.value })
                              }
                              ref={this.uwanja}
                            ></textarea>
                          </MediaQuery>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
                <div className={styles.err1} ref={this.err1}>
                  <Message success size="mini">
                    <Message.Header>
                      Success, Item has been added to cart
                    </Message.Header>
                    <Icon name="warning sign" />
                    Click the cart icon above to preview your cart.
                  </Message>
                </div>
                <div style={{ marginBottom: "2%" }}>
                  <Button
                    animated
                    primary
                    size="medium"
                    fluid
                    onClick={this.addToCart}
                  >
                    <Button.Content visible>Add to Cart</Button.Content>
                    <Button.Content hidden>
                      <Icon name="shop" />
                    </Button.Content>
                  </Button>
                </div>
              </div>
            </div>
          </MediaQuery>

          <MediaQuery minWidth={577} maxWidth={899}>
            <div className={styles.odb}>
              {this.props.data.get_urls.length > 1 ? (
                <Swiper
                  modules={[Navigation, EffectFade, Pagination]}
                  navigation
                  effect={"fade"}
                  speed={300}
                  slidesPerView={1}
                  loop
                  className={styles.myswiper}
                  pagination={{ clickable: true }}
                  //onSlideChangeTransitionEnd={this.slideChange}
                >
                  {this.props.data.get_urls.map((image) => (
                    <SwiperSlide>
                      <img
                        src={`${BACKEND_ORIGIN}${image}`}
                        className={styles.ima}
                        // ref={this.imageConte}
                        height={450}
                        key={image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  className={styles.ima}
                  ref={this.imageConte}
                  src={`${BACKEND_ORIGIN}${this.props.data.get_urls[0]}`}
                  height={450}
                />
              )}

              <div className={styles.tit}>
                <p className={styles.main}>{this.props.data.title}</p>
                <span className={styles.sub}>
                  {this.props.data.description}
                </span>
                <hr />
              </div>

              <div className={styles.priQuan}>
                <Grid>
                  <Grid.Column width={8}>
                    <p className={styles.price}>Price:</p>

                    <span className={styles.bei}>{`${new Intl.NumberFormat(
                      "en-US",
                      {
                        style: "currency",
                        currency: "Tsh",
                        minimumFractionDigits: 0,
                      }
                    ).format(parseInt(this.state.selectedObjPrice))}`}</span>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p className={styles.qua}>
                      Quantity:{" "}
                      <span className={styles.namba}>
                        {this.state.productQuantity}
                      </span>
                    </p>
                    <div className={styles.amountWrapper}>
                      <span className={styles.plus} onClick={this.onDecrease}>
                        <Icon size="small" name="minus" />
                      </span>
                      <span className={styles.actualAmount}>
                        {this.state.productQuantity}
                      </span>
                      <span className={styles.minus} onClick={this.onIncrease}>
                        <Icon size="small" name="plus" />
                      </span>
                    </div>
                  </Grid.Column>
                </Grid>
                <hr />
              </div>

              <div className={styles.customizations}>
                {this.props.data.hasPropertySelection === false &&
                this.props.data.isCustomized === false &&
                this.props.data.hasSecondPropertySelection === false ? (
                  <> </>
                ) : (
                  <div className={styles.holder}>
                    <p className={styles.custom}>User Customizations</p>
                    <hr className={styles.ch} />

                    <MediaQuery maxWidth={699}>
                      <Grid>
                        {this.props.data.hasPropertySelection ? (
                          <Grid.Column width={9}>
                            <>
                              <span className={styles.pName}>
                                {
                                  Object.keys(
                                    this.props.data.map_property[0]
                                  )[0]
                                }
                                :
                              </span>
                              <span
                                className={styles.pValue}
                                style={{ fontSize: "14px" }}
                              >
                                {this.state.selectedProp > 18
                                  ? this.state.selectedProp.substr(0, 17) + ".."
                                  : this.state.selectedProp}
                              </span>
                              <div className={styles.radioContainer}>
                                {this.props.data.property_values.map((prop) => (
                                  <div key={prop}>
                                    <input
                                      className={styles.rad}
                                      type="radio"
                                      id={prop}
                                      name="property"
                                      checked={this.state.selectedProp == prop}
                                      onChange={() =>
                                        this.setState({ selectedProp: prop })
                                      }
                                    />
                                    <label
                                      className={styles.label}
                                      htmlFor={prop}
                                    >
                                      {prop}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </>
                          </Grid.Column>
                        ) : (
                          <></>
                        )}

                        {this.props.data.hasSecondPropertySelection ? (
                          <Grid.Column width={7}>
                            <>
                              <span>
                                <span
                                  className={styles.pName}
                                  style={{ fontSize: "15px" }}
                                >
                                  {
                                    Object.keys(
                                      this.props.data.map_secondProps[0]
                                    )[0]
                                  }
                                  :
                                </span>
                                <span
                                  className={styles.pValue}
                                  style={{ fontSize: "14px" }}
                                >
                                  {this.state.secondPropsAttributeValue.length >
                                  15
                                    ? this.state.secondPropsAttributeValue.substr(
                                        0,
                                        14
                                      ) + ".."
                                    : this.state.secondPropsAttributeValue}
                                </span>
                              </span>

                              {this.props.data.second_propsValue.map(
                                (propa) => (
                                  <div key={propa}>
                                    <input
                                      className={styles.rad}
                                      type="radio"
                                      id={propa}
                                      name="propa"
                                      checked={
                                        this.state.secondPropsAttributeValue ===
                                        propa
                                      }
                                      onChange={() =>
                                        this.setState({
                                          secondPropsAttributeValue: propa,
                                        })
                                      }
                                    />
                                    <label
                                      className={styles.label}
                                      htmlFor={propa}
                                    >
                                      {propa}
                                    </label>
                                  </div>
                                )
                              )}
                            </>
                          </Grid.Column>
                        ) : (
                          <></>
                        )}
                      </Grid>
                      {/* FUCK THE OPS */}

                      {this.props.data.isCustomized ? (
                        <>
                          <div className={styles.text}>
                            <p className={styles.head}>
                              Customize product's image/text.
                            </p>
                            <p className={styles.ason}>
                              *** Leave blank to use default one.
                              <br />
                              *** In case of image write a web link to that
                              image
                            </p>

                            <textarea
                              row={2}
                              cols={46}
                              className={this.tarea}
                              onChange={(e) =>
                                this.setState({ customValue: e.target.value })
                              }
                              ref={this.uwanja}
                            ></textarea>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </MediaQuery>

                    <MediaQuery minWidth={700}>
                      {/* You should have the condition to check if all three props exist ...
                        so i will say if either one of hasPropsValue or secondPropsValue exist
                        then if either one exit i need to to have one row of hasPropsVAlue/secProps
                        together with isCustomized... But in other case if both of em hasPropsValue and
                        hasSecProps value exist then we should have isCustomized in second row...

                        so if first && secValue exist { then Two rows} else
                        if either one exist then one row....
                      */}
                      {this.props.data.hasPropertySelection &&
                      this.props.data.secondPropsAttributeValue ? (
                        <>
                          <Grid>
                            <Grid.Column width={9}>
                              <span className={styles.pName}>
                                {
                                  Object.keys(
                                    this.props.data.map_property[0]
                                  )[0]
                                }
                                :
                              </span>
                              <span className={styles.pValue}>
                                {this.state.selectedProp}
                              </span>
                              <div className={styles.radioContainer}>
                                {this.props.data.property_values.map((prop) => (
                                  <div key={prop}>
                                    <input
                                      className={styles.rad}
                                      type="radio"
                                      id={prop}
                                      name="property"
                                      checked={this.state.selectedProp == prop}
                                      onChange={() =>
                                        this.setState({ selectedProp: prop })
                                      }
                                    />
                                    <label
                                      className={styles.label}
                                      htmlFor={prop}
                                    >
                                      {prop}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Grid.Column>

                            <Grid.Column width={7}>
                              <>
                                <span>
                                  <span
                                    className={styles.pName}
                                    style={{ fontSize: "15px" }}
                                  >
                                    {
                                      Object.keys(
                                        this.props.data.map_secondProps[0]
                                      )[0]
                                    }
                                    :
                                  </span>
                                  <span
                                    className={styles.pValue}
                                    style={{ fontSize: "14px" }}
                                  >
                                    {this.state.secondPropsAttributeValue
                                      .length > 15
                                      ? this.state.secondPropsAttributeValue.substr(
                                          0,
                                          14
                                        ) + ".."
                                      : this.state.secondPropsAttributeValue}
                                  </span>
                                </span>

                                {this.props.data.second_propsValue.map(
                                  (propa) => (
                                    <div key={propa}>
                                      <input
                                        className={styles.rad}
                                        type="radio"
                                        id={propa}
                                        name="propa"
                                        checked={
                                          this.state
                                            .secondPropsAttributeValue === propa
                                        }
                                        onChange={() =>
                                          this.setState({
                                            secondPropsAttributeValue: propa,
                                          })
                                        }
                                      />
                                      <label
                                        className={styles.label}
                                        htmlFor={propa}
                                      >
                                        {propa}
                                      </label>
                                    </div>
                                  )
                                )}
                              </>
                            </Grid.Column>
                          </Grid>
                          {/* FUCK THE OPS */}

                          {this.props.data.isCustomized ? (
                            <div className={styles.text}>
                              <p className={styles.head}>
                                Customize product's image/text.
                              </p>
                              <p className={styles.ason}>
                                *** Leave blank to use default one.
                                <br />
                                *** In case of image write a web link to that
                                image
                              </p>

                              <MediaQuery minWidth={700} maxWidth={800}>
                                <textarea
                                  row={2}
                                  cols={40}
                                  className={this.tarea}
                                  onChange={(e) =>
                                    this.setState({
                                      customValue: e.target.value,
                                    })
                                  }
                                  ref={this.uwanja}
                                ></textarea>
                              </MediaQuery>

                              <MediaQuery minWidth={801}>
                                <textarea
                                  row={2}
                                  cols={48}
                                  className={this.tarea}
                                  onChange={(e) =>
                                    this.setState({
                                      customValue: e.target.value,
                                    })
                                  }
                                  ref={this.uwanja}
                                ></textarea>
                              </MediaQuery>
                            </div>
                          ) : (
                            <></>
                          )}
                        </>
                      ) : (
                        <>
                          {/* this is else condition if we have either none of first and secProps
                            also or if we have one of em */}

                          <Grid>
                            {this.props.data.hasPropertySelection ? (
                              <Grid.Column width={7}>
                                <span className={styles.pName}>
                                  {
                                    Object.keys(
                                      this.props.data.map_property[0]
                                    )[0]
                                  }
                                  :
                                </span>
                                <span className={styles.pValue}>
                                  {this.state.selectedProp}
                                </span>
                                <div className={styles.radioContainer}>
                                  {this.props.data.property_values.map(
                                    (prop) => (
                                      <div key={prop}>
                                        <input
                                          className={styles.rad}
                                          type="radio"
                                          id={prop}
                                          name="property"
                                          checked={
                                            this.state.selectedProp == prop
                                          }
                                          onChange={() =>
                                            this.setState({
                                              selectedProp: prop,
                                            })
                                          }
                                        />
                                        <label
                                          className={styles.label}
                                          htmlFor={prop}
                                        >
                                          {prop}
                                        </label>
                                      </div>
                                    )
                                  )}
                                </div>
                              </Grid.Column>
                            ) : (
                              <></>
                            )}

                            {this.props.data.hasSecondPropertySelection ? (
                              <Grid.Column width={7}>
                                <>
                                  <span>
                                    <span
                                      className={styles.pName}
                                      style={{ fontSize: "15px" }}
                                    >
                                      {
                                        Object.keys(
                                          this.props.data.map_secondProps[0]
                                        )[0]
                                      }
                                      :
                                    </span>
                                    <span
                                      className={styles.pValue}
                                      style={{ fontSize: "14px" }}
                                    >
                                      {this.state.secondPropsAttributeValue
                                        .length > 18
                                        ? this.state.secondPropsAttributeValue.substr(
                                            0,
                                            17
                                          ) + ".."
                                        : this.state.secondPropsAttributeValue}
                                    </span>
                                  </span>

                                  {this.props.data.second_propsValue.map(
                                    (propa) => (
                                      <div key={propa}>
                                        <input
                                          className={styles.rad}
                                          type="radio"
                                          id={propa}
                                          name="propa"
                                          checked={
                                            this.state
                                              .secondPropsAttributeValue ===
                                            propa
                                          }
                                          onChange={() =>
                                            this.setState({
                                              secondPropsAttributeValue: propa,
                                            })
                                          }
                                        />
                                        <label
                                          className={styles.label}
                                          htmlFor={propa}
                                        >
                                          {propa}
                                        </label>
                                      </div>
                                    )
                                  )}
                                </>
                              </Grid.Column>
                            ) : (
                              <></>
                            )}

                            {this.props.data.isCustomized ? (
                              <Grid.Column width={9}>
                                <div className={styles.text}>
                                  <p className={styles.head}>
                                    Customize product's image/text.
                                  </p>
                                  <p className={styles.ason}>
                                    *** Leave blank to use default one.
                                    <br />
                                    *** In case of image write a web link to
                                    that image
                                  </p>

                                  <MediaQuery minWidth={700} maxWidth={800}>
                                    <textarea
                                      row={2}
                                      cols={35}
                                      className={this.tarea}
                                      onChange={(e) =>
                                        this.setState({
                                          customValue: e.target.value,
                                        })
                                      }
                                      ref={this.uwanja}
                                    ></textarea>
                                  </MediaQuery>

                                  <MediaQuery minWidth={801}>
                                    <textarea
                                      row={2}
                                      cols={40}
                                      className={this.tarea}
                                      onChange={(e) =>
                                        this.setState({
                                          customValue: e.target.value,
                                        })
                                      }
                                      ref={this.uwanja}
                                    ></textarea>
                                  </MediaQuery>
                                </div>
                              </Grid.Column>
                            ) : (
                              <></>
                            )}
                          </Grid>
                        </>
                      )}

                      {/* <Grid>
                        {this.props.data.hasPropertySelection ? (
                          <Grid.Column width={7}>
                            <span className={styles.pName}>
                              {Object.keys(this.props.data.map_property[0])[0]}:
                            </span>
                            <span className={styles.pValue}>
                              {this.state.selectedProp}
                            </span>
                            <div className={styles.radioContainer}>
                              {this.props.data.property_values.map((prop) => (
                                <div key={prop}>
                                  <input
                                    className={styles.rad}
                                    type="radio"
                                    id={prop}
                                    name="property"
                                    checked={this.state.selectedProp == prop}
                                    onChange={() =>
                                      this.setState({ selectedProp: prop })
                                    }
                                  />
                                  <label
                                    className={styles.label}
                                    htmlFor={prop}
                                  >
                                    {prop}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Grid.Column>




                        ) : (
                          <></>
                        )}

                        {this.props.data.isCustomized ? (
                          <Grid.Column width={9}>
                            <div className={styles.text}>
                              <p className={styles.head}>
                                Customize product's image/text.
                              </p>
                              <p className={styles.ason}>
                                *** Leave blank to use default one.
                                <br />
                                *** In case of image write a web link to that
                                image
                              </p>

                              <MediaQuery minWidth={700} maxWidth={800}>
                                <textarea
                                  row={2}
                                  cols={33}
                                  className={this.tarea}
                                  onChange={(e) =>
                                    this.setState({
                                      customValue: e.target.value,
                                    })
                                  }
                                ></textarea>
                              </MediaQuery>

                              <MediaQuery minWidth={801}>
                                <textarea
                                  row={2}
                                  cols={45}
                                  className={this.tarea}
                                  onChange={(e) =>
                                    this.setState({
                                      customValue: e.target.value,
                                    })
                                  }
                                ></textarea>
                              </MediaQuery>
                            </div>
                          </Grid.Column>
                        ) : (
                          <></>
                        )}
                      </Grid> */}

                      {/* {this.props.data.hasPropertySelection ? (
                        <>
                          

                          <Grid>
                            <Grid.Column width={7}>
                              
                            </Grid.Column>

                            <Grid.Column width={9}>
                              {this.props.data.isCustomized ? (
                                <>
                                  <div className={styles.text}>
                                    <p className={styles.head}>
                                      Customize product's image/text.
                                    </p>
                                    <p className={styles.ason}>
                                      *** Leave blank to use default one.
                                      <br />
                                      *** In case of image write a web link to
                                      that image
                                    </p>

                                    <MediaQuery minWidth={700} maxWidth={800}>
                                      <textarea
                                        row={2}
                                        cols={33}
                                        className={this.tarea}
                                      ></textarea>
                                    </MediaQuery>

                                    <MediaQuery minWidth={801}>
                                      <textarea
                                        row={2}
                                        cols={45}
                                        className={this.tarea}
                                      ></textarea>
                                    </MediaQuery>
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </Grid.Column>
                          </Grid>
                        </>
                      ) : (
                        <></>
                      )} */}
                    </MediaQuery>
                  </div>
                )}

                <div className={styles.err1} ref={this.err1}>
                  <Message success size="mini">
                    <Message.Header>
                      Success, Item has been added to cart
                    </Message.Header>
                    <Icon name="warning sign" />
                    Click the cart icon above to preview your cart.
                  </Message>
                </div>
                <div style={{ marginBottom: "2%" }}>
                  <Button
                    animated
                    primary
                    size="medium"
                    fluid
                    onClick={this.addToCart}
                  >
                    <Button.Content visible>Add to Cart</Button.Content>
                    <Button.Content hidden>
                      <Icon name="shop" />
                    </Button.Content>
                  </Button>
                </div>
              </div>
            </div>
          </MediaQuery>

          <MediaQuery minWidth={900}>
            This page is only reserved for small screen devices ranging from
            200px to 400px... So your device is out of bound
          </MediaQuery>
        </div>
      </NavBar>
    );
  }
}

export default Preview;
