import React, { Component } from "react";
import dynamic from "next/dynamic";
import styles from "../static/css/mode.module.css";
import Head from "next/head";
import { Grid, Icon, Segment } from "semantic-ui-react";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import BACKEND_ORIGIN from "../utils/domain";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

class MPesa extends Component {
  state = {
    isAunthenticated: false,
    data: [],
    cart_id: 0,
    user_id: 0,
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

  componentDidMount() {
    this.executingTokenLogics();

    console.log(this.state.cart_id, this.state.isAunthenticated);
  }

  onPlaceOrder = async (e) => {
    e.preventDefault();

    console.log("Hellow", this.state.transactionId, this.state.phone_number);

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

      this.setState({
        phone_number: "",
        transactionId: "",
      });

      this.muamala.current.value = "";
      this.phone.current.value = "";

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

      this.setState({
        phone_number: "",
        transactionId: "",
      });

      this.muamala.current.value = "";
      this.phone.current.value = "";
      return;
    }

    // I thinks now we should submit the form
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

    console.log("this is data for you");
    console.log(data);

    if (data.success) {
      return Router.push({
        pathname: "/done",
        query: {
          unique_id: data.unique_id,
         
        },
      });
    } else {
      console.log("Something is wrong here...");
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
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

  render() {
    return (
      <>
        <MediaQuery maxWidth={899}>
          <div>
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
              this.state.cart_id > 0 ? (
                <div className={styles.bothOfUs}>
                  <div className={styles.main}>
                    <div className={styles.payMe}>
                      <p className={styles.pay}>Mode of payment</p>
                      <div className={styles.reduceMe}>
                        <Segment>
                          <Grid>
                            <Grid.Column width={8}>
                              <div className={styles.phead}>
                                <p className={styles.lnamba}>LIPA NAMBA</p>
                                <p className={styles.aname1}>111000</p>
                              </div>
                            </Grid.Column>

                            <Grid.Column width={8}>
                              <div className={styles.phead2}>
                                <p className={styles.qr}>QR CODE</p>
                                <p className={styles.aqr}>
                                  <img
                                    width={130}
                                    height={130}
                                    src="../static/images/frame.png"
                                  />
                                </p>
                              </div>
                            </Grid.Column>
                          </Grid>
                        </Segment>
                      </div>
                    </div>
                    <div className={styles.out}>
                      <p className={styles.head}>Jinsi ya kulipia kwa M-Pesa</p>
                      <div className={styles.meth1}>
                        <p className={styles.htwo}>Kwa njia ya kawaida.</p>
                        <div className={styles.para}>
                          <p>1. Piga *150*01#</p>
                          <p>2. Chagua 5(Lipa kwa simu) </p>
                          <p>3. Chagua 1(Kwenda Tigo Pesa)</p>
                          <p>4. Ingiza lipa namba </p>
                          <p>5. Ingiza kiasi cha kulipia</p>
                          <p>6. Ingiza namba ya siri kuthibitisha</p>
                          <p>
                            7. Ukishalipia ingiza namba ya muamala(
                            <b>
                              <i>Transaction number</i>
                            </b>
                            ) na nambako ya simu(
                            <b>
                              <i>Phone number</i>
                            </b>
                            ) kwenye fomu ya kuweka oda(
                            <b>
                              <i>Place order</i>
                            </b>
                            ) hapo chini.
                          </p>
                        </div>
                      </div>

                      <div className={styles.meth2}>
                        <p className={styles.htwo}>Kwa kutumia M-Pesa App</p>
                        <div className={styles.para}>
                          <p>1. Fungua app ya TIGO PESA</p>
                          <p>2.Chagua lipa kwa simu</p>
                          <p>
                            3. Changua njia ya kufanya malipo kwa kuingiza lipa
                            namba au kuskani picha ya QR
                          </p>
                          <p>4. Ingiza kiasi cha kulipia</p>
                          <p>5. Ingiza namba ya siri kuthibitisha</p>
                          <p>
                            7. Ukishalipia ingiza namba ya muamala(
                            <b>
                              <i>Transaction number</i>
                            </b>
                            ) na nambako ya simu(
                            <b>
                              <i>Phone number</i>
                            </b>
                            ) kwenye fomu ya kuweka oda(
                            <b>
                              <i>Place order</i>
                            </b>
                            ) hapo chini.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.moreInfo}>
                      <div className={styles.help}>
                        <p className={styles.hin3}>
                          *** Contact us to deliver a product anywhere in
                          Tanzania.
                          <br></br>
                          *** Contact us if you face any problem about payment
                        </p>
                        <br />
                        <div className={styles.divu}>
                          <span className={styles.contacts}>
                            <Icon size="large" name="whatsapp" color="grey" />
                            +255623317196
                          </span>

                          <span className={styles.contacts}>
                            <Icon
                              size="large"
                              name="mail outline"
                              color="grey"
                            />
                            support@personalizer.co.tz
                          </span>

                          <MediaQuery minWidth={700}>
                            <span>
                              <Icon
                                size="large"
                                name="instagram"
                                color="grey"
                              />
                              support@personalizer.co.tz
                            </span>
                          </MediaQuery>
                        </div>
                      </div>
                      <div className={styles.forPick}>
                        <p className={styles.infoP}>
                          For picking your product at station use this address:
                        </p>
                        <address style={{ color: "rgb(158, 67, 67)" }}>
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
                  </div>

                  <div className={styles.imHereToStay}>
                    <form>
                      <label className={styles.lab}>Transaction number:</label>
                      <br />
                      <input
                        className={styles.inp}
                        ref={this.muamala}
                        onChange={(e) =>
                          this.setState({ transactionId: e.target.value })
                        }
                      />{" "}
                      <br />
                      <label className={styles.lab1}>Phone number:</label>{" "}
                      <br />
                      <input
                        className={styles.inp}
                        ref={this.phone}
                        onChange={(e) =>
                          this.setState({ phone_number: e.target.value })
                        }
                      />{" "}
                      <br />
                      <div className={styles.error} ref={this.err}>
                        <img src="../static/images/warning.png" width={12} />
                        <span className={styles.neno1}>
                          {this.state.errorMessage}
                        </span>
                      </div>
                      <button
                        className={styles.btn}
                        onClick={this.onPlaceOrder}
                      >
                        Place order
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <>
                  <p>
                    Sorry your cart appear to be empty. Shop now for you to
                    place order, we should have a image and a button of shop
                    now..
                  </p>
                </>
              )
            ) : (
              <>
                <p>Hey you should login to place order. Login here...</p>
              </>
            )}
          </div>
        </MediaQuery>
        <MediaQuery minWidth={900}>
          <h2 style={{ textAlign: "center" }}>Out of screen width range...</h2>
        </MediaQuery>
      </>
    );
  }
}

export default MPesa;
