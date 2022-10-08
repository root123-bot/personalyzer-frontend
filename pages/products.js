import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sign from "../components/Sign";
import styles from "../static/css/showRoom.module.css";
import {
  Card,
  Radio,
  Form,
  Segment,
  Icon,
  Header,
  Button,
  Grid,
  Message,
} from "semantic-ui-react";
import jwt_decode from "jwt-decode";
import dynamic from "next/dynamic";
import Router from "next/router";
import BACKEND_ORIGIN from "../utils/domain";
const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

class Products extends Component {
  state = {
    isAunthenticated: false,
    products: [],
    productQuantity: 1,
    attributeValue: "", // Lazima tuwe na default value hapa.. Yaani pale user anapo-select/click the image/product this value should be updated as the default propertyValue.. Ko hii naweza ikaanza kama '' but baadae ikaja kuwa updated pale user anavyoselect picha....
    selectedObj: {},
    selectedObjPrice: 0,
    selectedObjImages: [],
    modelOpen: false,
    customValue: "",
    addedToCart: false,
    x: 0,
    y: 0,
  };

  constructor(props) {
    super(props);
    this.father = React.createRef();
    this.showRoom = React.createRef();
    this.small1 = React.createRef();
    this.small2 = React.createRef();
    this.small3 = React.createRef();
    this.preview = React.createRef();
    this.explain = React.createRef();
    this.closeBtn = React.createRef();
    this.err = React.createRef();
    this.err1 = React.createRef();
    this.modal = React.createRef();
    this.closeBtnx = React.createRef();
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

  viewItem = async (e) => {
    this.setState({
      y: window.pageYOffset,
      x: window.pageXOffset,
    });
    console.log(e.target.id);
    const product = this.state.products.find(
      (product) => product.id === parseInt(e.target.id)
    );
    console.log("This is the product we captured");
    console.log(product);

    await this.setState({
      selectedObj: product,
      selectedObjPrice: product.price,
      selectedObjImages: product.get_urls,
    });

    if (product.hasPropertySelection) {
      await this.setState({
        attributeValue: Object.values(
          this.state.selectedObj.map_property[0]
        )[0],
      });
    }

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    // Hapa hapa coz hizi product zina id kabisa inabidi mtu aselect then mambo mengine yaendelee
    this.father.current.style.opacity = "0.1";
    document.body.style.background =
      "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .4))";
    this.father.current.style.pointerEvents = "none";

    this.showRoom.current.style.display = "block";
  };

  onIncrease = () => {
    this.setState({
      productQuantity: this.state.productQuantity + 1,
    });

    // Hapa itaji-override na kuzidisha another sum used
    this.setState({
      selectedObjPrice:
        this.state.selectedObjPrice + this.state.selectedObj.price,
    });
  };

  onDecrease = () => {
    if (this.state.productQuantity > 1) {
      this.setState({
        productQuantity: this.state.productQuantity - 1,
      });

      this.setState({
        selectedObjPrice:
          this.state.selectedObjPrice - this.state.selectedObj.price,
      });
    }
  };

  onRemove = (e) => {
    // Kuna state hapa inabidi uzibadilishe ziende kwenye default
    this.setState({
      selectedObj: {},
      attributeValue: "",
      customValue: "",
      productQuantity: 1,
      selectedObjPrice: 0,
    });

    e.preventDefault();
    document.body.style.overflow = "visible";
    this.father.current.style.opacity = "1";
    document.body.style.background = "#fff";
    this.father.current.style.pointerEvents = "auto";
    this.showRoom.current.style.display = "none";
    window.scrollTo(this.state.x, this.state.y);
  };

  onRemovex = (e) => {
    this.setState({
      modelOpen: false,
    });
    // Also check here if user has already login you should update isAunthenticated state
    // Ko hapa ikisha-execute hizi logic itasaidia ku-update automatically
    // coz this is the method that run on interval to determine the actual user..

    this.executingTokenLogics();

    this.modal.current.style.display = "none";
    this.showRoom.current.style.opacity = "1";
    this.showRoom.current.style.pointerEvents = "auto";
  };

  selectedOn = (e) => {
    e.preventDefault();
    this.preview.current.src = e.target.src;
  };

  addToCart = async (e) => {
    e.preventDefault();

    this.executingTokenLogics();

    if (!this.state.isAunthenticated) {
      this.showRoom.current.style.opacity = "0.05";
      this.showRoom.current.style.pointerEvents = "none";
      this.modal.current.style.display = "block";
    } else {
      console.log("Hey this user has been loged in, worry out");

      const tokens = localStorage.getItem("authTokens");
      console.log("Hey this is tokens for you...");
      console.log(tokens);
      const json = JSON.parse(tokens);
      let access = json.access;
      console.log("Hey this is access token for you");
      console.log(access);
      let decodedAccessData = "";
      try {
        decodedAccessData = jwt_decode(access);
      } catch (err) {
        console.log(err.message);
      }
      console.log("This is the id of the user who loged in ");
      console.log(decodedAccessData.user_id);
      const user_id = decodedAccessData.user_id;
      const productId = this.state.selectedObj.id;
      console.log(user_id, productId);

      const id = this.state.selectedObj.id;
      const price = this.state.selectedObjPrice;
      const quantity = this.state.productQuantity;
      const value = this.state.attributeValue;
      const customization = this.state.customValue;

      console.log("Hey this is user id for you");
      console.log(user_id);
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
        }),
      });

      console.log("Im outside my nigga");
      console.log(check);
      let output = await check.json();

      console.log("This is the output we have");
      console.log(output);

      if (output.status == false) {
        
        try {
          let response = await fetch(`${BACKEND_ORIGIN}/api/carts/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: user_id,
              productId,
              price,
              quantity,
              customization,
              value,
            }),
          });

          let data = await response.json();
          console.log("Hey this is the response from the server");
          console.log(data);

          console.log("Even ma mama thinks that my mind has gone");
          this.err1.current.style.display = "block";
          this.successInterval = setTimeout(() => {
            this.err1.current.style.display = "none";
          }, 5000);
        } catch (err) {
          console.log(err.message);
        }
      } else {
        console.log("No need to create a new cart you have one for you....");
        let cartByThatUser = output.cart;
        console.log("Hey this is cart by our user....");
        console.log(cartByThatUser);

        console.log("Even ma mama thinks that my mind has gone");
        this.err1.current.style.display = "block";
        this.successInterval = setTimeout(() => {
          this.err1.current.style.display = "none";
        }, 5000);
      }
    }
  };

  async componentDidMount() {
    console.log(
      "This is value of isAunthenticated ",
      this.state.isAunthenticated
    );

    this.executingTokenLogics();

    try {
      let response = await fetch(`${BACKEND_ORIGIN}/api/products/`);

      let data = await response.json();
      console.log("This is your response from the server about all products");
      console.log(data);
      data = data.reverse();

      await this.setState(
        {
          products: data,
        },
        () => console.log(this.state.products)
      ); // this is callback https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
    } catch (err) {
      console.log(err.message);
    }

    this.executingTokenLogicsInterval = setInterval(
      () => this.executingTokenLogics(),
      1200000
    );
  }

  componentWillUnmount() {
    clearInterval(this.executingTokenLogicsInterval);
    clearTimeout(this.errorTimeout);
    clearTimeout(this.successInterval);
    console.log("Timeout has been cleared...");
    // Also in case we clicked the product to see then the background color is changed
    // to something like black so when a user click register button from there we shoud
    // make sure the background color of next body restored back to white(default color)

    document.body.style.background = "#fff";
    document.body.style.overflow = "visible";
  }

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

  render() {
    return (
      <NavBar isAunthenticated={this.state.isAunthenticated}>
        <div className={styles.baba} ref={this.father}>
          <div className={styles.conte}>
            <p
              className={styles.hek}
            >{`Explore different products, pick and shop now.`}</p>
            <MediaQuery minWidth={200} maxWidth={400}>
              <hr className={styles.ab} />
            </MediaQuery>
            <MediaQuery minWidth={401} maxWidth={576}>
              <hr className={styles.ab} />
            </MediaQuery>
            <MediaQuery minWidth={577} maxWidth={899}>
              <hr className={styles.ab} />
            </MediaQuery>
            <MediaQuery minWidth={900}>
              <hr className={styles.ab} />
            </MediaQuery>

            <MediaQuery minWidth={200} maxWidth={400}>
              <Card.Group itemsPerRow={1}>
                {this.state.products.map((product) => (
                  <Card key={product.id}>
                    <img
                      src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                      height={200}
                    />
                    <Card.Content>
                      <Card.Header>{`${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "Tsh",
                        minimumFractionDigits: 0,
                      }).format(parseInt(product.price))}/=`}</Card.Header>
                      <Card.Description>
                        {/* <Header color="grey" content={product.title} /> */}
                        <MediaQuery maxWidth={319}>
                          <span className={styles.lebo}>
                            {product.title.length > 25
                              ? product.title.substr(0, 24) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>

                        <MediaQuery minWidth={320} maxWidth={350}>
                          <span className={styles.lebo}>
                            {product.title.length > 29
                              ? product.title.substr(0, 28) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>

                        <MediaQuery minWidth={351}>
                          <span className={styles.lebo}>
                            {product.title.length > 37
                              ? product.title.substr(0, 35) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button
                        onClick={() =>
                          Router.push({
                            pathname: "/preview",
                            query: { product: product.id },
                          })
                        }
                        content="Shop now"
                        color="teal"
                        id={product.id}
                        fluid
                      />
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </MediaQuery>

            <MediaQuery minWidth={401} maxWidth={576}>
              <Card.Group itemsPerRow={2}>
                {this.state.products.map((product) => (
                  <Card key={product.id}>
                    <MediaQuery maxWidth={499}>
                      <img
                        src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                        height={140}
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={500}>
                      <img
                        src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                        height={170}
                      />
                    </MediaQuery>
                    <Card.Content>
                      <Card.Header>{`${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "Tsh",
                        minimumFractionDigits: 0,
                      }).format(parseInt(product.price))}/=`}</Card.Header>
                      <Card.Description>
                        {/* <Header color="grey" content={product.title} /> */}
                        <MediaQuery maxWidth={500}>
                          <span className={styles.lebo}>
                            {product.title.length > 19
                              ? product.title.substr(0, 17) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>
                        <MediaQuery minWidth={501}>
                          <span className={styles.lebo}>
                            {product.title.length > 25
                              ? product.title.substr(0, 24) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button
                        onClick={() =>
                          Router.push({
                            pathname: "/preview",
                            query: { product: product.id },
                          })
                        }
                        content="Shop now"
                        color="teal"
                        id={product.id}
                        fluid
                      />
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </MediaQuery>

            <MediaQuery minWidth={577} maxWidth={899}>
              <Card.Group itemsPerRow={3}>
                {this.state.products.map((product) => (
                  <Card key={product.id}>
                    <MediaQuery maxWidth={650}>
                      <img
                        src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                        height={140}
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={651} maxWidth={700}>
                      <img
                        src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                        height={150}
                      />
                    </MediaQuery>

                    <MediaQuery minWidth={701}>
                      <img
                        src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                        height={170}
                      />
                    </MediaQuery>
                    <Card.Content>
                      <Card.Header>{`${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "Tsh",
                        minimumFractionDigits: 0,
                      }).format(parseInt(product.price))}/=`}</Card.Header>
                      <Card.Description>
                        {/* <Header color="grey" content={product.title} /> */}
                        <MediaQuery maxWidth={650}>
                          <span className={styles.lebo}>
                            {product.title.length > 17
                              ? product.title.substr(0, 16) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>

                        <MediaQuery minWidth={651}>
                          <span className={styles.lebo}>
                            {product.title.length > 20
                              ? product.title.substr(0, 20) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button
                        onClick={() =>
                          Router.push({
                            pathname: "/preview",
                            query: { product: product.id },
                          })
                        }
                        content="Shop now"
                        color="teal"
                        id={product.id}
                        fluid
                      />
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </MediaQuery>

            <MediaQuery minWidth={900} maxWidth={1100}>
              <Card.Group itemsPerRow={4}>
                {this.state.products.map((product) => (
                  <Card key={product.id}>
                    <img
                      src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                      height={150}
                    />
                    <Card.Content>
                      <Card.Header>{`${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "Tsh",
                        minimumFractionDigits: 0,
                      }).format(parseInt(product.price))}/=`}</Card.Header>
                      <Card.Description>
                        {/* <Header color="grey" content={product.title} /> */}
                        <MediaQuery maxWidth={990}>
                          <span className={styles.lebo}>
                            {product.title.length > 15
                              ? product.title.substr(0, 15) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>
                        <MediaQuery minWidth={991}>
                          <span className={styles.lebo}>
                            {product.title.length > 23
                              ? product.title.substr(0, 23) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button
                        onClick={this.viewItem}
                        content="Shop now"
                        color="teal"
                        id={product.id}
                        fluid
                      />
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </MediaQuery>

            <MediaQuery minWidth={1101}>
              <Card.Group itemsPerRow={5}>
                {this.state.products.map((product) => (
                  <Card key={product.id}>
                    <MediaQuery maxWidth={1200}>
                      <img
                        src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                        height={150}
                      />
                    </MediaQuery>

                    <MediaQuery minWidth={1201}>
                      <img
                        src={`${BACKEND_ORIGIN}${product.get_urls[0]}`}
                        height={170}
                      />
                    </MediaQuery>
                    <Card.Content>
                      <Card.Header>{`${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "Tsh",
                        minimumFractionDigits: 0,
                      }).format(parseInt(product.price))}/=`}</Card.Header>
                      <Card.Description>
                        {/* <Header color="grey" content={product.title} /> */}
                        <MediaQuery maxWidth={1199}>
                          <span className={styles.lebo}>
                            {product.title.length > 15
                              ? product.title.substr(0, 15) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>
                        <MediaQuery minWidth={1200}>
                          <span className={styles.lebo}>
                            {product.title.length > 23
                              ? product.title.substr(0, 23) + "..."
                              : product.title}
                          </span>
                        </MediaQuery>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button
                        onClick={this.viewItem}
                        content="Shop now"
                        color="teal"
                        id={product.id}
                        fluid
                      />
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </MediaQuery>
          </div>
        </div>

        <MediaQuery minWidth={900} maxWidth={1199}>
          <div className={styles.showRoom} ref={this.showRoom}>
            <div
              className={styles.closeBtn}
              onClick={this.onRemove}
              ref={this.closeBtn}
            >
              &times;
            </div>

            <MediaQuery minWidth={900} maxWidth={1000}>
              <Segment>
                <Grid>
                  {/* By default first image is the one placed first at canvas/preview section */}

                  <Grid.Column width={9}>
                    <div
                      className={styles.largeImage}
                      style={{ height: "300px" }}
                    >
                      <img
                        className={styles.imag}
                        ref={this.preview}
                        src={`${BACKEND_ORIGIN}${this.state.selectedObjImages[0]}`}
                        title="big pic"
                      />
                    </div>

                    <div className={styles.smallImage}>
                      {this.state.selectedObjImages.map((url) => (
                        <img
                          className={styles.smaI}
                          key={url}
                          src={`${BACKEND_ORIGIN}${url}`}
                          width={60}
                          height={50}
                          onClick={this.selectedOn}
                        />
                      ))}
                    </div>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <div className={styles.dodo}>
                      <Header as="h3">
                        {this.state.selectedObj.title}
                        <Header.Subheader color="orange">
                          {this.state.selectedObj.description}
                        </Header.Subheader>
                      </Header>

                      <hr />
                      <span>
                        <Grid>
                          <Grid.Column width={9}>
                            Price:{" "}
                            <Header
                              as="h3"
                              color="grey"
                              content={`${new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "Tsh",
                                minimumFractionDigits: 0,
                              }).format(
                                parseInt(this.state.selectedObjPrice)
                              )}/=`}
                            />
                          </Grid.Column>
                          <Grid.Column width={7}>
                            <span className={styles.sp}>
                              Quantity:{" "}
                              <span className={styles.idadi}>
                                {this.state.productQuantity}
                              </span>
                            </span>
                            <div
                              className={styles.amountWrapper}
                              style={{ width: "80%" }}
                            >
                              <span
                                className={styles.plus}
                                onClick={this.onDecrease}
                              >
                                <Icon size="small" name="minus" />
                              </span>
                              <span className={styles.actualAmount}>
                                {this.state.productQuantity}
                              </span>
                              <span
                                className={styles.minus}
                                onClick={this.onIncrease}
                              >
                                <Icon size="small" name="plus" />
                              </span>
                            </div>
                          </Grid.Column>
                        </Grid>
                      </span>
                    </div>
                    <div>
                      <div className={styles.customizations}>
                        {this.state.selectedObj.hasPropertySelection ===
                          false &&
                        this.state.selectedObj.isCustomized === false ? (
                          <> </>
                        ) : (
                          <div className={styles.top}>
                            <p
                              className={styles.h}
                              style={{ fontWeight: "bold", fontSize: "120%" }}
                            >
                              User Customizations
                            </p>

                            <hr className={styles.hr1} />
                          </div>
                        )}

                        <div className={styles.sec}>
                          <>
                            {this.state.selectedObj.hasPropertySelection ? (
                              <>
                                <span>
                                  <span
                                    className={styles.pName}
                                    style={{ fontSize: "15px" }}
                                  >
                                    {
                                      Object.keys(
                                        this.state.selectedObj.map_property[0]
                                      )[0]
                                    }
                                    :
                                  </span>
                                  <span
                                    className={styles.pValue}
                                    style={{ fontSize: "15px" }}
                                  >
                                    {this.state.attributeValue}
                                  </span>
                                </span>
                                <Form>
                                  {this.state.selectedObj.property_values.map(
                                    (prop) => (
                                      <div key={prop} className={styles.pullUp}>
                                        <Form.Field>
                                          <Radio
                                            label={prop}
                                            name="radioGroup"
                                            value={prop}
                                            checked={
                                              this.state.attributeValue === prop
                                            }
                                            onChange={() =>
                                              this.setState({
                                                attributeValue: prop,
                                              })
                                            }
                                          />
                                        </Form.Field>
                                      </div>
                                    )
                                  )}
                                </Form>
                              </>
                            ) : (
                              <></>
                            )}

                            {this.state.selectedObj.isCustomized ? (
                              <>
                                <span
                                  className={styles.bichwa}
                                  style={{ fontSize: "15px" }}
                                >
                                  Customize product's image/text.
                                </span>
                                <p className={styles.sub}>
                                  *** Leave blank to use default one.
                                  <br />
                                  *** In case of image write a web link to that
                                  image
                                </p>
                                <textarea
                                  row={2}
                                  cols={30}
                                  className={this.tarea}
                                  onChange={(event) =>
                                    this.setState({
                                      customValue: event.target.value,
                                    })
                                  }
                                  style={{ marginBottom: "3%" }}
                                ></textarea>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        </div>
                      </div>
                      <div className={styles.down}>
                        <div className={styles.err} ref={this.err}>
                          <Message error>
                            <Message.Header>
                              Error, You needed to login
                            </Message.Header>
                            <Icon name="warning sign" />
                            Click login button above and login to enable add to
                            cart feature.
                          </Message>
                        </div>

                        <div className={styles.err1} ref={this.err1}>
                          <Message success>
                            <Message.Header>
                              Success, Item has been added to cart
                            </Message.Header>
                            <Icon name="warning sign" />
                            Click the cart icon above to preview your cart.
                          </Message>
                        </div>

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
                  </Grid.Column>
                </Grid>

                <div className={styles.footerSec} style={{ marginTop: "5%" }}>
                  <hr className={styles.footerHr} />
                  <Header
                    textAlign="center"
                    content="Powered by Online Tec"
                    color="grey"
                  />
                </div>
              </Segment>
            </MediaQuery>

            <MediaQuery minWidth={1001}>
              <Segment>
                <Grid>
                  {/* By default first image is the one placed first at canvas/preview section */}

                  <Grid.Column width={9}>
                    <div
                      className={styles.largeImage}
                      style={{ height: "400px" }}
                    >
                      <img
                        className={styles.imag}
                        ref={this.preview}
                        src={`${BACKEND_ORIGIN}${this.state.selectedObjImages[0]}`}
                        title="big pic"
                      />
                    </div>

                    <div className={styles.smallImage}>
                      {this.state.selectedObjImages.map((url) => (
                        <img
                          className={styles.smaI}
                          key={url}
                          src={`${BACKEND_ORIGIN}${url}`}
                          width={60}
                          height={50}
                          onClick={this.selectedOn}
                        />
                      ))}
                    </div>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <div className={styles.dodo}>
                      <Header as="h3">
                        {this.state.selectedObj.title}
                        <Header.Subheader color="orange">
                          {this.state.selectedObj.description}
                        </Header.Subheader>
                      </Header>

                      <hr />
                      <span>
                        <Grid>
                          <Grid.Column width={9}>
                            Price:{" "}
                            <Header
                              as="h3"
                              color="grey"
                              content={`${new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "Tsh",
                                minimumFractionDigits: 0,
                              }).format(
                                parseInt(this.state.selectedObjPrice)
                              )}/=`}
                            />
                          </Grid.Column>
                          <Grid.Column width={7}>
                            <span className={styles.sp}>
                              Quantity:{" "}
                              <span className={styles.idadi}>
                                {this.state.productQuantity}
                              </span>
                            </span>
                            <div
                              className={styles.amountWrapper}
                              style={{ width: "72%" }}
                            >
                              <span
                                className={styles.plus}
                                onClick={this.onDecrease}
                              >
                                <Icon size="small" name="minus" />
                              </span>
                              <span className={styles.actualAmount}>
                                {this.state.productQuantity}
                              </span>
                              <span
                                className={styles.minus}
                                onClick={this.onIncrease}
                              >
                                <Icon size="small" name="plus" />
                              </span>
                            </div>
                          </Grid.Column>
                        </Grid>
                      </span>
                    </div>
                    <div>
                      <div className={styles.customizations}>
                        {this.state.selectedObj.hasPropertySelection ===
                          false &&
                        this.state.selectedObj.isCustomized === false ? (
                          <> </>
                        ) : (
                          <div className={styles.top}>
                            <h2
                              className={styles.h}
                              style={{ fontWeight: "bold", fontSize: "130%" }}
                            >
                              User Customizations
                            </h2>

                            <hr className={styles.hr1} />
                          </div>
                        )}

                        <div className={styles.sec}>
                          <>
                            {this.state.selectedObj.hasPropertySelection ? (
                              <>
                                <span>
                                  <span
                                    className={styles.pName}
                                    style={{ fontSize: "15px" }}
                                  >
                                    {
                                      Object.keys(
                                        this.state.selectedObj.map_property[0]
                                      )[0]
                                    }
                                    :
                                  </span>
                                  <span
                                    className={styles.pValue}
                                    style={{ fontSize: "15px" }}
                                  >
                                    {this.state.attributeValue}
                                  </span>
                                </span>
                                <Form>
                                  {this.state.selectedObj.property_values.map(
                                    (prop) => (
                                      <div key={prop} className={styles.pullUp}>
                                        <Form.Field>
                                          <Radio
                                            label={prop}
                                            name="radioGroup"
                                            value={prop}
                                            checked={
                                              this.state.attributeValue === prop
                                            }
                                            onChange={() =>
                                              this.setState({
                                                attributeValue: prop,
                                              })
                                            }
                                          />
                                        </Form.Field>
                                      </div>
                                    )
                                  )}
                                </Form>
                              </>
                            ) : (
                              <></>
                            )}

                            {this.state.selectedObj.isCustomized ? (
                              <>
                                <span
                                  className={styles.bichwa}
                                  style={{ fontSize: "15px" }}
                                >
                                  Customize product's image/text.
                                </span>
                                <p className={styles.sub}>
                                  *** Leave blank to use default one.
                                  <br />
                                  *** In case of image write a web link to that
                                  image
                                </p>
                                <textarea
                                  row={2}
                                  cols={32}
                                  className={this.tarea}
                                  onChange={(event) =>
                                    this.setState({
                                      customValue: event.target.value,
                                    })
                                  }
                                  style={{ marginBottom: "3%" }}
                                ></textarea>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        </div>
                      </div>
                      <div className={styles.down}>
                        <div className={styles.err} ref={this.err}>
                          <Message error>
                            <Message.Header>
                              Error, You needed to login
                            </Message.Header>
                            <Icon name="warning sign" />
                            Click login button above and login to enable add to
                            cart feature.
                          </Message>
                        </div>

                        <div className={styles.err1} ref={this.err1}>
                          <Message success>
                            <Message.Header>
                              Success, Item has been added to cart
                            </Message.Header>
                            <Icon name="warning sign" />
                            Click the cart icon above to preview your cart.
                          </Message>
                        </div>

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
                  </Grid.Column>
                </Grid>

                <div className={styles.footerSec} style={{ marginTop: "2%" }}>
                  <hr className={styles.footerHr} />
                  <Header
                    textAlign="center"
                    content="Powered by Online Tec"
                    color="grey"
                  />
                </div>
              </Segment>
            </MediaQuery>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={1200}>
          <div className={styles.showRoom} ref={this.showRoom}>
            <div
              className={styles.closeBtn}
              onClick={this.onRemove}
              ref={this.closeBtn}
            >
              &times;
            </div>

            <Segment>
              <Grid>
                {/* By default first image is the one placed first at canvas/preview section */}

                <Grid.Column width={9}>
                  <MediaQuery minWidth={1200} maxWidth={1340}>
                    <div
                      className={styles.largeImage}
                      style={{ height: "380px" }}
                    >
                      <img
                        className={styles.imag}
                        ref={this.preview}
                        src={`${BACKEND_ORIGIN}${this.state.selectedObjImages[0]}`}
                        title="big pic"
                      />
                    </div>
                  </MediaQuery>

                  <MediaQuery minWidth={1341} maxWidth={1500}>
                    <div
                      className={styles.largeImage}
                      style={{ height: "400px" }}
                    >
                      <img
                        className={styles.imag}
                        ref={this.preview}
                        src={`${BACKEND_ORIGIN}${this.state.selectedObjImages[0]}`}
                        title="big pic"
                      />
                    </div>
                  </MediaQuery>

                  <MediaQuery minWidth={1501}>
                    <div
                      className={styles.largeImage}
                      style={{ height: "500px" }}
                    >
                      <img
                        className={styles.imag}
                        ref={this.preview}
                        src={`${BACKEND_ORIGIN}${this.state.selectedObjImages[0]}`}
                        title="big pic"
                      />
                    </div>
                  </MediaQuery>

                  <div className={styles.smallImage}>
                    {this.state.selectedObjImages.map((url) => (
                      <img
                        className={styles.smaI}
                        key={url}
                        src={`${BACKEND_ORIGIN}${url}`}
                        width={60}
                        height={50}
                        onClick={this.selectedOn}
                      />
                    ))}
                  </div>
                </Grid.Column>
                <Grid.Column width={7}>
                  <div className={styles.dodo}>
                    <Header as="h3">
                      {this.state.selectedObj.title}
                      <Header.Subheader color="orange">
                        {this.state.selectedObj.description}
                      </Header.Subheader>
                    </Header>

                    <hr />
                    <span>
                      <Grid>
                        <Grid.Column width={9}>
                          Price:{" "}
                          <Header
                            as="h3"
                            color="grey"
                            content={`${new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "Tsh",
                              minimumFractionDigits: 0,
                            }).format(
                              parseInt(this.state.selectedObjPrice)
                            )}/=`}
                          />
                        </Grid.Column>
                        <Grid.Column width={7}>
                          <span className={styles.sp}>
                            Quantity:{" "}
                            <span className={styles.idadi}>
                              {this.state.productQuantity}
                            </span>
                          </span>
                          <MediaQuery minWidth={1200} maxWidth={1340}>
                            <div
                              className={styles.amountWrapper}
                              style={{ width: "58%" }}
                            >
                              <span
                                className={styles.plus}
                                onClick={this.onDecrease}
                              >
                                <Icon size="small" name="minus" />
                              </span>
                              <span className={styles.actualAmount}>
                                {this.state.productQuantity}
                              </span>
                              <span
                                className={styles.minus}
                                onClick={this.onIncrease}
                              >
                                <Icon size="small" name="plus" />
                              </span>
                            </div>
                          </MediaQuery>

                          <MediaQuery minWidth={1341} maxWidth={1500}>
                            <div
                              className={styles.amountWrapper}
                              style={{ width: "52%" }}
                            >
                              <span
                                className={styles.plus}
                                onClick={this.onDecrease}
                              >
                                <Icon size="small" name="minus" />
                              </span>
                              <span className={styles.actualAmount}>
                                {this.state.productQuantity}
                              </span>
                              <span
                                className={styles.minus}
                                onClick={this.onIncrease}
                              >
                                <Icon size="small" name="plus" />
                              </span>
                            </div>
                          </MediaQuery>

                          <MediaQuery minWidth={1501}>
                            <div
                              className={styles.amountWrapper}
                              style={{ width: "46%" }}
                            >
                              <span
                                className={styles.plus}
                                onClick={this.onDecrease}
                              >
                                <Icon size="small" name="minus" />
                              </span>
                              <span className={styles.actualAmount}>
                                {this.state.productQuantity}
                              </span>
                              <span
                                className={styles.minus}
                                onClick={this.onIncrease}
                              >
                                <Icon size="small" name="plus" />
                              </span>
                            </div>
                          </MediaQuery>
                        </Grid.Column>
                      </Grid>
                    </span>
                  </div>
                  <div>
                    <div className={styles.customizations}>
                      {this.state.selectedObj.hasPropertySelection === false &&
                      this.state.selectedObj.isCustomized === false ? (
                        <> </>
                      ) : (
                        <div className={styles.top}>
                          <h2
                            className={styles.h}
                            style={{ fontWeight: "bold", fontSize: "130%" }}
                          >
                            User Customizations
                          </h2>

                          <hr className={styles.hr1} />
                        </div>
                      )}

                      <div className={styles.sec}>
                        <>
                          {this.state.selectedObj.hasPropertySelection ? (
                            <>
                              <span>
                                <span
                                  className={styles.pName}
                                  style={{ fontSize: "15px" }}
                                >
                                  {
                                    Object.keys(
                                      this.state.selectedObj.map_property[0]
                                    )[0]
                                  }
                                  :
                                </span>
                                <span
                                  className={styles.pValue}
                                  style={{ fontSize: "15px" }}
                                >
                                  {this.state.attributeValue}
                                </span>
                              </span>
                              <Form>
                                {this.state.selectedObj.property_values.map(
                                  (prop) => (
                                    <div key={prop} className={styles.pullUp}>
                                      <Form.Field>
                                        <Radio
                                          label={prop}
                                          name="radioGroup"
                                          value={prop}
                                          checked={
                                            this.state.attributeValue === prop
                                          }
                                          onChange={() =>
                                            this.setState({
                                              attributeValue: prop,
                                            })
                                          }
                                        />
                                      </Form.Field>
                                    </div>
                                  )
                                )}
                              </Form>
                            </>
                          ) : (
                            <></>
                          )}

                          {this.state.selectedObj.isCustomized ? (
                            <>
                              <span
                                className={styles.bichwa}
                                style={{ fontSize: "15px" }}
                              >
                                Customize product's image/text.
                              </span>
                              <p className={styles.sub}>
                                *** Leave blank to use default one.
                                <br />
                                *** In case of image write a web link to that
                                image
                              </p>
                              <textarea
                                row={2}
                                cols={32}
                                className={this.tarea}
                                onChange={(event) =>
                                  this.setState({
                                    customValue: event.target.value,
                                  })
                                }
                                style={{ marginBottom: "3%" }}
                              ></textarea>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      </div>
                    </div>
                    <div className={styles.down}>
                      <div className={styles.err} ref={this.err}>
                        <Message error>
                          <Message.Header>
                            Error, You needed to login
                          </Message.Header>
                          <Icon name="warning sign" />
                          Click login button above and login to enable add to
                          cart feature.
                        </Message>
                      </div>

                      <div className={styles.err1} ref={this.err1}>
                        <Message success>
                          <Message.Header>
                            Success, Item has been added to cart
                          </Message.Header>
                          <Icon name="warning sign" />
                          Click the cart icon above to preview your cart.
                        </Message>
                      </div>

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
                </Grid.Column>
              </Grid>

              <div className={styles.footerSec} style={{ marginTop: "2%" }}>
                <hr className={styles.footerHr} />
                <Header
                  textAlign="center"
                  content="Powered by Online Tec"
                  color="grey"
                />
              </div>
            </Segment>
          </div>
        </MediaQuery>

        <div className={styles.model} ref={this.modal}>
          <div
            className={styles.closeBtnx}
            onClick={this.onRemovex}
            ref={this.closeBtnx}
          >
            &times;
          </div>

          <Sign closeLoginPanel={this.onRemovex} />
        </div>

        <style jsx global>{`
          body {
            background: rgb(236, 236, 236);
          }
        `}</style>
      </NavBar>
    );
  }
}

export default Products;
