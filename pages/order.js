import React, { Component } from "react";
import styles from "../static/css/order.module.css";
import {
  Header,
  Divider,
  Button,
  Grid,
  Icon,
  Segment,
  Form,
} from "semantic-ui-react";
import Head from "next/head";
import jwt_decode from "jwt-decode";
import BACKEND_ORIGIN from "../utils/domain";
import Router from "next/router";

import dynamic from "next/dynamic";
const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

// lazima huku uje na id.. Lazima pia uwe aunthenticated....
// Hata mtu akisend user_id kwenye url inabidi tu-prove if the
// user is aunthenticated..... But huku inabidi kwenye url a-pass
// cart id.... Hina haja ya ku-pass cart_id in short kama user amekuwa
// aunthenticated tutapata card_id yake tu...

class Order extends Component {
  state = {
    isAunthenticated: false,
    attributeValue: "Pick at Station",
    attributeValue1: "M-PESA",
    data: [],
    user_id: 0,
    cart_id: 0,
    transactionId: "",
    phone_number: "",
    errorMessage: "",
  };

  constructor(props) {
    super(props);
    this.err = React.createRef();
    this.muamala = React.createRef();
    this.phone = React.createRef();
  }

  executingTokenLogics = async () => {
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
      const user_id = decodedAccessData.user_id;
      this.setState({
        user_id,
      });
      console.log("This is user_id for you");
      console.log(user_id);
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

        // Kama amekuwa aunthenticated vilevile inabidi tufetch kama huyu jamaa na products or not...

        let response = await fetch(`${BACKEND_ORIGIN}/api/cartproducts/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user_id,
          }),
        });

        let data = await response.json();
        // somethimes data returned is Object { message: "No cart by this user", code: "Cart matching query does not exist." }
        // if theres is no cart of 'unordered' status by that user so we should deal
        // with this issue
        // since our data is the list of cartproducts and there is not way a given cartproducts to come
        // from the different cart.. all these cproducts are derived from the given one cart...
        // that how i access cart_id from them
        if (!data.message) {
          this.setState({
            data,
            cart_id: data[0].get_cartId,
          });
        }
      } else {
        this.setState({
          isAunthenticated: true,
        });

        let response = await fetch(`${BACKEND_ORIGIN}/api/cartproducts/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user_id,
          }),
        });

        let data = await response.json();
        // somethimes data returned is Object { message: "No cart by this user", code: "Cart matching query does not exist." }
        // if theres is no cart of 'unordered' status by that user so we should deal
        // with this issue
        // since our data is the list of cartproducts and there is not way a given cartproducts to come
        // from the different cart.. all these cproducts are derived from the given one cart...
        // that how i access cart_id from them

        if (!data.message) {
          this.setState({
            data,
            cart_id: data[0].get_cartId,
          });
        }
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

  onPlaceOrder = async (e) => {
    e.preventDefault();

    if (
      this.state.transactionId.trim().length === 0 ||
      this.state.phone_number.trim().length === 0
    ) {
      // then return an error that hey we don't accept empty data.
      console.log("we dont accept empty string...");
      this.setState({
        errorMessage: "Failed, We don't accept empty fields",
      });

      this.err.current.style.display = "block";
      this.timeout = setTimeout(() => {
        this.err.current.style.display = "none";
      }, 5000);

     
      return;
    }

    if (this.state.phone_number.trim().length < 10) {
      this.setState({
        errorMessage: "Failed, phone number looks to be invalid!",
      });
      this.err.current.style.display = "block";
      this.timeout = setTimeout(() => {
        this.err.current.style.display = "none";
      }, 5000);

      
      return;
    }

    const response = await fetch(`${BACKEND_ORIGIN}/api/create_order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transactionId: this.state.transactionId,
        mobile: parseInt(this.state.phone_number),
        id: this.state.user_id,
        cartId: this.state.cart_id,
      }),
    });

    const data = await response.json();

    console.log("This is the data you received from the server.....");
    console.log(data);

    if (data.success) {
      return Router.push({
        pathname: '/done',
        query: {
          unique_id : data.unique_id,
          
        }
      });
    } else {
      console.log("Something is wrong here...");
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  async componentDidMount() {
    console.log(
      "This is value of isAunthenticated ",
      this.state.isAunthenticated
    );

    this.executingTokenLogics();

    this.executingTokenLogicsInterval = setInterval(
      () => this.executingTokenLogics(),
      1200000
    );
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
      <div className={styles.baba}>
        <Head>
          <title>PERSONALYZER</title>
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
        {this.state.isAunthenticated ? (
          this.state.data.length > 0 ? (
            <>
              <MediaQuery maxWidth={899}>
                <div className={styles.sendMeCenter}>
                  <div className={styles.mode}>
                    <p className={styles.titl}>Select mode of payment</p>
                    <div className={styles.mpe}>
                      <button
                        className={styles.mpeBtn}
                        onClick={() => Router.push("/mpesa")}
                      >
                        M-PESA
                      </button>
                    </div>
                    <div className={styles.tigopesa}>
                      <button
                        className={styles.tigBtn}
                        onClick={() => Router.push("/tigopesa")}
                      >
                        TIGO PESA
                      </button>
                    </div>
                  </div>
                </div>
              </MediaQuery>

              <MediaQuery minWidth={900}>
                <div className={styles.test}>
                  <div className={styles.toto}>
                    <div className={styles.topSeg}>
                      <Header
                        attached="top"
                        as="h1"
                        textAlign="center"
                        color="grey"
                        content="Place Order by Confirming payment and Delivery method"
                      />
                      <Segment attached placeholder>
                        <div style={{ marginLeft: "2%" }}>
                          <Grid columns={2}>
                            <Divider vertical>|</Divider>
                            <Grid.Row>
                              <Grid.Column>
                                <Form>
                                  <Form.Field>
                                    <label style={{ color: "grey" }}>
                                      Transaction number/Namba ya muamala
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        this.setState({
                                          transactionId: e.target.value,
                                        })
                                      }
                                    />
                                  </Form.Field>
                                  <Form.Field>
                                    <label style={{ color: "grey" }}>
                                      Phone number
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        this.setState({
                                          phone_number: e.target.value,
                                        })
                                      }
                                    />
                                  </Form.Field>
                                  <div className={styles.error} ref={this.err}>
                                    <img
                                      src="../static/images/warning.png"
                                      width={12}
                                    />
                                    <span className={styles.neno1}>
                                      {this.state.errorMessage}
                                    </span>
                                  </div>
                                  <Button
                                    color="black"
                                    fluid
                                    type="submit"
                                    onClick={this.onPlaceOrder}
                                  >
                                    Place Order
                                  </Button>
                                </Form>
                              </Grid.Column>
                              <Grid.Column>
                                <div className={styles.not1Wrapper}>
                                  <p className={styles.hint}>
                                    For picking your product at station, use
                                    this address:
                                  </p>
                                  <div className={styles.addr}>
                                    <address>
                                      <i>
                                        Kariakoo, Aggrey na Likoma Street,
                                        <br />
                                        Dar es salaam,
                                        <br />
                                        0623317196,
                                        <br />
                                        onlinetek@gmail.com
                                      </i>
                                    </address>
                                  </div>
                                </div>

                                <div className={styles.not2Wrapper}>
                                  <p className={styles.hint2}>
                                    ***Contact us to deliver a product anywhere
                                    in Tanzania.
                                    <br />
                                    ***Contact us if you face any problem about
                                    the payment.
                                  </p>
                                  <div className={styles.bt}>
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        color: "grey",
                                        marginRight: "5%",
                                      }}
                                    >
                                      <Icon
                                        size="large"
                                        name="whatsapp"
                                        color="black"
                                      />
                                      +255623317196
                                    </span>
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        color: "grey",
                                        marginRight: "4%",
                                      }}
                                    >
                                      <Icon
                                        size="large"
                                        name="instagram"
                                        color="black"
                                      />
                                      @personalizer
                                    </span>
                                    <span
                                      style={{
                                        fontWeight: "bold",
                                        color: "grey",
                                      }}
                                    >
                                      <Icon
                                        size="large"
                                        name="mail outline"
                                        color="black"
                                      />
                                      support@personalizer.co.tz
                                    </span>
                                  </div>
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </div>
                      </Segment>
                    </div>
                    <Grid>
                      <Grid.Column width={10}>
                        <div className={styles.seg2}>
                          <Segment>
                            <Header
                              as="h1"
                              color="grey"
                              content="Mode of Payments"
                            />
                            <hr />

                            <div>
                              <h3 className={styles.mpesa}>M-PESA</h3>
                              <Grid>
                                <Grid.Column width={8}>
                                  <div style={{ marginLeft: "5%" }}>
                                    <p className={styles.lnamba}>LIPA NAMBA</p>
                                    <span className={styles.aname1}>
                                      111000
                                    </span>
                                  </div>
                                </Grid.Column>

                                <Grid.Column width={8}>
                                  <div style={{ marginLeft: "5%" }}>
                                    <p className={styles.qr}>QR CODE</p>
                                    <p className={styles.aqr}>
                                      <img
                                        width={150}
                                        height={150}
                                        src="../static/images/frame.png"
                                      />
                                    </p>
                                  </div>
                                </Grid.Column>
                              </Grid>
                            </div>

                            <div style={{ marginTop: "2%" }}>
                              <h3 className={styles.tpesa}>TIGO PESA</h3>
                              <Grid>
                                <Grid.Column width={8}>
                                  <div style={{ marginLeft: "5%" }}>
                                    <p className={styles.lnamba}>LIPA NAMBA</p>
                                    <span className={styles.aname}>111234</span>
                                  </div>
                                </Grid.Column>

                                <Grid.Column width={8}>
                                  <div style={{ marginLeft: "5%" }}>
                                    <p className={styles.qr}>QR CODE</p>
                                    <p className={styles.aqr}>
                                      <img
                                        width={150}
                                        height={150}
                                        src="../static/images/frame.png"
                                      />
                                    </p>
                                  </div>
                                </Grid.Column>
                              </Grid>
                            </div>
                          </Segment>
                        </div>
                      </Grid.Column>

                      <Grid.Column width={6}>
                        <div className={styles.p1}>
                          <Header
                            as="h2"
                            color="grey"
                            attached="top"
                            content="Jinsi ya kulipia kwa M-PESA"
                          />
                          <Segment attached>
                            <div>
                              <div className={styles.hd}>
                                <h3 className={styles.kichwa}>
                                  Kwa njia ya kawaida
                                </h3>
                              </div>
                              <div className={styles.para}>
                                <p>1. Piga *150*00#</p>
                                <p>2. </p>
                              </div>

                              <div className={styles.hd1}>
                                <h3 className={styles.kichwa}>
                                  Kwa kutumia M-PESA app.
                                </h3>
                              </div>
                              <div className={styles.para}>
                                <p>1. Fungua app yako ya M-PESA</p>
                                <p>
                                  2. Juu upande wa kulia bonyeza picha ya QR
                                  code
                                </p>
                              </div>
                            </div>
                          </Segment>
                        </div>

                        <div className={styles.p2}>
                          <Header
                            attached="top"
                            as="h2"
                            color="grey"
                            content="Jinsi ya kulipia kwa TIGO PESA"
                          />

                          <Segment attached>
                            <div>
                              <div className={styles.hd2}>
                                <h3 className={styles.kichwa}>
                                  Kwa njia ya kawaida
                                </h3>
                              </div>
                              <div className={styles.para}>
                                <p>1. Piga *150*01#</p>
                                <p>2. Chagua 5(Lipa kwa simu) </p>
                                <p>3. Chagua 1(Kwenda Tigo Pesa)</p>
                                <p>4. Ingiza lipa namba </p>
                                <p>5. Ingiza kiasi cha kulipia</p>
                                <p>6. Ingiza namba ya siri kuthibitisha</p>
                              </div>

                              <div className={styles.hd3}>
                                <h3 className={styles.kichwa}>
                                  Kwa kutumia TIGO PESA app.
                                </h3>
                              </div>
                              <div className={styles.para}>
                                <p>1. Fungua app ya TIGO PESA</p>
                                <p>2.Chagua lipa kwa simu</p>
                                <p>
                                  3. Changua njia ya kufanya malipo kwa kuingiza
                                  lipa namba au kuskani picha ya QR
                                </p>
                                <p>4. Ingiza kiasi cha kulipia</p>
                                <p>5. Ingiza namba ya siri kuthibitisha</p>
                              </div>
                            </div>
                          </Segment>
                        </div>
                      </Grid.Column>
                    </Grid>
                  </div>
                </div>
              </MediaQuery>
            </>
          ) : (
            <div>
              Your cart is empty, You can't place order for empty cart...
            </div>
          )
        ) : (
          <div>You're needed to be Aunthenticated...</div>
        )}
      </div>
    );
  }
}

export default Order;
