import React, { Component } from "react";
import NavBar from "../components/NavBar3.js";
import jwt_decode from "jwt-decode";
import dynamic from "next/dynamic";
import Router from "next/router";
import styles from "../static/css/done.module.css";
import BACKEND_ORIGIN from "../utils/domain.js";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false } // this will be executed on client side rendering because its a client/browser which have screen width but in server it will throw an error because we tries to use screen variable which is only found in browser/client so we set this to false for this purpose so as to avoid errors
);

class DonePlacingOrder extends Component {
  state = {
    isAunthenticatd: false,
    user_id: null,
  };

  constructor(props) {
    super(props);
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

  // this is server side rendering that's why we see our console.log
  // appear on server..
  static async getInitialProps(props) {
    // here we need to fetch the last orderedCart orderId
    // of that user...... I think we should push namba ya
    // muamala from order.js then after push we should get it
    // here and checks the validitiy

    const { unique_id } = props.query;
    // then fetch on the backend all the orderId
    const order = await fetch(`${BACKEND_ORIGIN}/api/placed_orders/`);
    const data = await order.json();
    console.log("This are all orders found ");
    console.log(data);
    let isValid = false;
    let validUniqueId = null;
    let validPhoneNumber = null;
    let validTransactionId = null;

    for (let oda of data) {
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

    return { validPhoneNumber, validTransactionId, validUniqueId, isValid };
  }

  componentDidMount() {
    this.executingTokenLogics();
  }

  render() {
    return (
      <NavBar isAunthenticated={this.state.isAunthenticatd}>
        <div>
          <>
            {this.props.isValid ? (
              <>
                <MediaQuery maxWidth={500}>
                  <div
                    style={{
                      paddingTop: "15%",
                      width: "75%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "grey",
                        textAlign: "center",
                        fontSize: "130%",
                      }}
                    >
                      !Your order has been created successful!
                      <hr />
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        color: "red",
                        paddingBottom: "0%",
                        marginBottom: "0%",
                        fontSize: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      Muhimu soma!(In swahili)
                    </p>
                    <p
                      style={{
                        paddingTop: "0%",
                        marginTop: "0%",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      ***Data hizi( za hapo chini{" "}
                      <span style={{ color: "black" }}>
                        <i>order id</i>
                      </span>{" "}
                      na{" "}
                      <span style={{ color: "black" }}>
                        <i>transaction number</i>
                      </span>
                      ) zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia
                      bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo
                      wako, unaweza ukazipiga picha au ukaziandika pembeni.
                      Wasiliana nasi kwa maelezo zaidi.
                      <br />
                      <br />
                      <div style={{ background: "#edeceb" }}>
                        <div>
                          <p
                            style={{
                              paddingTop: "2%",
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Order id:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validUniqueId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(15)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validUniqueId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(20)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validUniqueId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(25)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                        <div>
                          <p
                            style={{
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Transaction number:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validTransactionId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(15)}
                                </p>
                              ) : (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId}
                                </p>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validTransactionId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(20)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validTransactionId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(25)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                      </div>
                    </p>
                    <br />
                    <div>
                      <p
                        style={{
                          textAlign: "left",
                          color: "red",
                          paddingBottom: "0%",
                          marginBottom: "0%",
                          fontSize: "100%",
                          fontWeight: "bold",
                        }}
                      >
                        Read this(In English)
                      </p>
                      <p style={{ fontWeight: "bold", color: "grey" }}>
                        *** Keep these data with you they will be used to verify
                        if its you who ordered the product, Don't lose these
                        data until you receive your product.
                      </p>

                      <div style={{ background: "#edeceb" }}>
                        <div>
                          <p
                            style={{
                              paddingTop: "2%",
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            Order id:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validUniqueId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(15)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validUniqueId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(20)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validUniqueId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(25)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />

                        <div>
                          <p
                            style={{
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            Transaction number:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validTransactionId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(15)}
                                </p>
                              ) : (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId}
                                </p>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validTransactionId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(20)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validTransactionId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(25)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </MediaQuery>

                <MediaQuery minWidth={501} maxWidth={800}>
                  <div
                    style={{
                      paddingTop: "11%",
                      width: "70%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "grey",
                        textAlign: "center",
                        fontSize: "130%",
                      }}
                    >
                      !Your order has been created successful!
                      <hr />
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        color: "red",
                        paddingBottom: "0%",
                        marginBottom: "0%",
                        fontSize: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      Muhimu soma!(In swahili)
                    </p>
                    <p
                      style={{
                        paddingTop: "0%",
                        marginTop: "0%",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      ***Data hizi( za hapo chini{" "}
                      <span style={{ color: "black" }}>
                        <i>order id</i>
                      </span>{" "}
                      na{" "}
                      <span style={{ color: "black" }}>
                        <i>transaction number</i>
                      </span>
                      ) zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia
                      bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo
                      wako, unaweza ukazipiga picha au ukaziandika pembeni.
                      Wasiliana nasi kwa maelezo zaidi.
                      <br />
                      <br />
                      <div style={{ background: "#edeceb" }}>
                        <div>
                          <p
                            style={{
                              paddingTop: "2%",
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Order id:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                              textAlign: "center",
                            }}
                          >
                            {this.props.validUniqueId}
                          </p>
                        </div>
                        <hr />
                        <div>
                          <p
                            style={{
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Transaction number:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validTransactionId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(15)}
                                </p>
                              ) : (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId}
                                </p>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validTransactionId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(20)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validTransactionId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(25)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                      </div>
                    </p>
                    <br />
                    <div>
                      <p
                        style={{
                          textAlign: "left",
                          color: "red",
                          paddingBottom: "0%",
                          marginBottom: "0%",
                          fontSize: "100%",
                          fontWeight: "bold",
                        }}
                      >
                        Read this(In English)
                      </p>
                      <p style={{ fontWeight: "bold", color: "grey" }}>
                        *** Keep these data with you they will be used to verify
                        if its you who ordered the product, Don't lose these
                        data until you receive your product.
                      </p>

                      <div style={{ background: "#edeceb" }}>
                        <div>
                          <p
                            style={{
                              paddingTop: "2%",
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            Order id:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validUniqueId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(15)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validUniqueId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(20)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validUniqueId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(25)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />

                        <div>
                          <p
                            style={{
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            Transaction number:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validTransactionId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(15)}
                                </p>
                              ) : (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId}
                                </p>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validTransactionId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(20)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validTransactionId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(25)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </MediaQuery>

                <MediaQuery minWidth={801} maxWidth={1200}>
                  <div
                    style={{
                      paddingTop: "9%",
                      width: "70%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "grey",
                        textAlign: "center",
                        fontSize: "130%",
                      }}
                    >
                      !Your order has been created successful!
                      <hr />
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        color: "red",
                        paddingBottom: "0%",
                        marginBottom: "0%",
                        fontSize: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      Muhimu soma!(In swahili)
                    </p>
                    <p
                      style={{
                        paddingTop: "0%",
                        marginTop: "0%",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      ***Data hizi( za hapo chini{" "}
                      <span style={{ color: "black" }}>
                        <i>order id</i>
                      </span>{" "}
                      na{" "}
                      <span style={{ color: "black" }}>
                        <i>transaction number</i>
                      </span>
                      ) zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia
                      bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo
                      wako, unaweza ukazipiga picha au ukaziandika pembeni.
                      Wasiliana nasi kwa maelezo zaidi.
                      <br />
                      <br />
                      <div style={{ background: "#edeceb" }}>
                        <div>
                          <p
                            style={{
                              paddingTop: "2%",
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Order id:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                              textAlign: "center",
                            }}
                          >
                            {this.props.validUniqueId}
                          </p>
                        </div>
                        <hr />
                        <div>
                          <p
                            style={{
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Transaction number:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validTransactionId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(15)}
                                </p>
                              ) : (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId}
                                </p>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validTransactionId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(20)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validTransactionId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(25)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                      </div>
                    </p>
                    <br />
                    <div>
                      <p
                        style={{
                          textAlign: "left",
                          color: "red",
                          paddingBottom: "0%",
                          marginBottom: "0%",
                          fontSize: "100%",
                          fontWeight: "bold",
                        }}
                      >
                        Read this(In English)
                      </p>
                      <p style={{ fontWeight: "bold", color: "grey" }}>
                        *** Keep these data with you they will be used to verify
                        if its you who ordered the product, Don't lose these
                        data until you receive your product.
                      </p>

                      <div style={{ background: "#edeceb" }}>
                        <div>
                          <p
                            style={{
                              paddingTop: "2%",
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            Order id:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validUniqueId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(15)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validUniqueId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(20)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validUniqueId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(25)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />

                        <div>
                          <p
                            style={{
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            Transaction number:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validTransactionId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(15)}
                                </p>
                              ) : (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId}
                                </p>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validTransactionId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(20)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validTransactionId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(25)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </MediaQuery>

                <MediaQuery minWidth={1201}>
                  <div
                    style={{
                      paddingTop: "4%",
                      width: "60%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "grey",
                        textAlign: "center",
                        fontSize: "130%",
                      }}
                    >
                      !Your order has been created successful!
                      <hr />
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        color: "red",
                        paddingBottom: "0%",
                        marginBottom: "0%",
                        fontSize: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      Muhimu soma!(In swahili)
                    </p>
                    <p
                      style={{
                        paddingTop: "0%",
                        marginTop: "0%",
                        fontWeight: "bold",
                        color: "grey",
                      }}
                    >
                      ***Data hizi( za hapo chini{" "}
                      <span style={{ color: "black" }}>
                        <i>order id</i>
                      </span>{" "}
                      na{" "}
                      <span style={{ color: "black" }}>
                        <i>transaction number</i>
                      </span>
                      ) zitatumika kuthibitisha kama wewe ndo uliyeagiza/kulipia
                      bidhaa, Kwa hiyo usizipoteze hadi uhakikishe umepata mzigo
                      wako, unaweza ukazipiga picha au ukaziandika pembeni.
                      Wasiliana nasi kwa maelezo zaidi.
                      <br />
                      <br />
                      <div style={{ background: "#edeceb" }}>
                        <div>
                          <p
                            style={{
                              paddingTop: "2%",
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Order id:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                              textAlign: "center",
                            }}
                          >
                            {this.props.validUniqueId}
                          </p>
                        </div>
                        <hr />
                        <div>
                          <p
                            style={{
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Transaction number:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validTransactionId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(15)}
                                </p>
                              ) : (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId}
                                </p>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validTransactionId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(20)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validTransactionId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(25)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                      </div>
                    </p>
                    <br />
                    <div>
                      <p
                        style={{
                          textAlign: "left",
                          color: "red",
                          paddingBottom: "0%",
                          marginBottom: "0%",
                          fontSize: "100%",
                          fontWeight: "bold",
                        }}
                      >
                        Read this(In English)
                      </p>
                      <p style={{ fontWeight: "bold", color: "grey" }}>
                        *** Keep these data with you they will be used to verify
                        if its you who ordered the product, Don't lose these
                        data until you receive your product.
                      </p>

                      <div style={{ background: "#edeceb" }}>
                        <div>
                          <p
                            style={{
                              paddingTop: "2%",
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            Order id:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validUniqueId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(15)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validUniqueId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(20)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validUniqueId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validUniqueId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validUniqueId.substr(25)}
                                </p>
                              ) : (
                                <></>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />

                        <div>
                          <p
                            style={{
                              marginBottom: "0%",
                              paddingBottom: "0%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            Transaction number:
                          </p>
                          <p
                            style={{
                              marginTop: "0%",
                              paddingTop: "0%",
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "120%",
                            }}
                          >
                            <MediaQuery maxWidth={350}>
                              {this.props.validTransactionId.length > 15 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 15)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(15)}
                                </p>
                              ) : (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId}
                                </p>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={351} maxWidth={400}>
                              {this.props.validTransactionId.length > 20 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 20)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(20)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>

                            <MediaQuery minWidth={401}>
                              {this.props.validTransactionId.length > 25 ? (
                                <p style={{ textAlign: "center" }}>
                                  {this.props.validTransactionId.substr(0, 25)}{" "}
                                  <br />
                                  {this.props.validTransactionId.substr(25)}
                                </p>
                              ) : (
                                <>
                                  <p style={{ textAlign: "center" }}>
                                    {this.props.validTransactionId}
                                  </p>
                                </>
                              )}
                            </MediaQuery>
                          </p>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </MediaQuery>
              </>
            ) : (
              <>
                <div className={styles.conte}>
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
                          src="../static/images/notHere.gif"
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
                          Oops! 404 Error, Page is not found..
                          <br />
                          <button
                            className="btn btn-info"
                            style={{ marginTop: "2%", fontWeight: "bold" }}
                            onClick={() => Router.push("/")}
                          >
                            Back home
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
                          src="../static/images/notHere.gif"
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
                          Oops! 404 Error, Page is not found..
                          <br />
                          <button
                            className="btn btn-info"
                            style={{ marginTop: "2%", fontWeight: "bold" }}
                            onClick={() => Router.push("/")}
                          >
                            {" "}
                            Back home
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
                          src="../static/images/notHere.gif"
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
                          Oops! 404 Error, Page is not found..
                          <br />
                          <button
                            className="btn btn-info"
                            style={{ marginTop: "2%", fontWeight: "bold" }}
                            onClick={() => Router.push("/")}
                          >
                            Back home
                          </button>
                        </p>
                      </div>
                    </div>
                  </MediaQuery>
                </div>
              </>
            )}
          </>
        </div>
      </NavBar>
    );
  }
}

export default DonePlacingOrder;
