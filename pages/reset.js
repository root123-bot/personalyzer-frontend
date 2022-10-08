import React, { Component } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Router from "next/router";
import { Message, Segment } from "semantic-ui-react";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

class ResetPassword extends Component {
  state = {
    email: "",
  };

  constructor(props) {
    super(props);
    this.succ = React.createRef();
    this.emailInp = React.createRef();
  }

  reset = async (e) => {
    e.preventDefault();

    this.succ.current.style.display = "block";
    this.emailInp.current.value = "";
    this.timeout = setTimeout(
      () => (this.succ.current.style.display = "none"),
      5000
    );
    const response = await fetch("http://localhost:8000/api/password-reset/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
      }),
    });

    const json = await response.json();

    console.log(json);
  };

  componentWillUnmount() {
      clearTimeout(this.timeout)
  }

  render() {
    return (
      <>
        <MediaQuery minWidth={200} maxWidth={400}>
          <>
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
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <div style={{ paddingTop: "20%" }}>
              <p
                style={{
                  textAlign: "center",
                  color: "grey",
                  fontSize: "120%",
                  fontWeight: "bold",
                }}
              >
                Enter your email to reset your password.
              </p>
              <hr />
              <div style={{ width: "70%", margin: "auto", padding: "auto" }}>
                <form>
                  <label style={{ fontWeight: "bold", color: "grey" }}>
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      height: "35px",
                      border: "2px solid grey",
                    }}
                    ref={this.emailInp}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />{" "}
                  <br />
                  <div
                    ref={this.succ}
                    style={{
                      fontWeight: "bold",
                      marginTop: "2%",
                      display: "none",
                    }}
                  >
                    <Message success>
                      The link to reset your password have been sent to your
                      email.
                    </Message>
                  </div>
                  <button
                    style={{
                      marginTop: "3%",
                      width: "100%",
                      border: "2px solid grey",
                      padding: "2%",
                      background: "#eeeee4",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                    type="submit"
                    onClick={this.reset}
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </>
        </MediaQuery>


        <MediaQuery minWidth={401} maxWidth={700}>
          <>
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
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <div style={{ paddingTop: "12%" }}>
              <p
                style={{
                  textAlign: "center",
                  color: "grey",
                  fontSize: "120%",
                  fontWeight: "bold",
                }}
              >
                Enter your email to reset your password.
              </p>
              <hr />
              <div style={{ width: "50%", margin: "auto", padding: "auto" }}>
                <form>
                  <label style={{ fontWeight: "bold", color: "grey" }}>
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      height: "35px",
                      border: "2px solid grey",
                    }}
                    ref={this.emailInp}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />{" "}
                  <br />
                  <div
                    ref={this.succ}
                    style={{
                      fontWeight: "bold",
                      marginTop: "2%",
                      display: "none",
                    }}
                  >
                    <Message success>
                      The link to reset your password have been sent to your
                      email.
                    </Message>
                  </div>
                  <button
                    style={{
                      marginTop: "3%",
                      width: "100%",
                      border: "2px solid grey",
                      padding: "2%",
                      background: "#eeeee4",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                    type="submit"
                    onClick={this.reset}
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </>
        </MediaQuery>



        <MediaQuery minWidth={701} maxWidth={900}>
          <>
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
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <div style={{ paddingTop: "9%" }}>
              <p
                style={{
                  textAlign: "center",
                  color: "grey",
                  fontSize: "120%",
                  fontWeight: "bold",
                }}
              >
                Enter your email to reset your password.
              </p>
              <hr />
              <div style={{ width: "40%", margin: "auto", padding: "auto" }}>
                <form>
                  <label style={{ fontWeight: "bold", color: "grey" }}>
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      height: "35px",
                      border: "2px solid grey",
                    }}
                    ref={this.emailInp}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />{" "}
                  <br />
                  <div
                    ref={this.succ}
                    style={{
                      fontWeight: "bold",
                      marginTop: "2%",
                      display: "none",
                    }}
                  >
                    <Message success>
                      The link to reset your password have been sent to your
                      email.
                    </Message>
                  </div>
                  <button
                    style={{
                      marginTop: "3%",
                      width: "100%",
                      border: "2px solid grey",
                      padding: "2%",
                      background: "#eeeee4",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                    type="submit"
                    onClick={this.reset}
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </>
        </MediaQuery>



        <MediaQuery minWidth={901} maxWidth={1500}>
          <>
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
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <div style={{ paddingTop: "5%" }}>
              <p
                style={{
                  textAlign: "center",
                  color: "grey",
                  fontSize: "120%",
                  fontWeight: "bold",
                }}
              >
                Enter your email to reset your password.
              </p>
              <hr />
              <div style={{ width: "30%", margin: "auto", padding: "auto" }}>
                <form>
                  <label style={{ fontWeight: "bold", color: "grey" }}>
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      height: "35px",
                      border: "2px solid grey",
                    }}
                    ref={this.emailInp}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />{" "}
                  <br />
                  <div
                    ref={this.succ}
                    style={{
                      fontWeight: "bold",
                      marginTop: "2%",
                      display: "none",
                    }}
                  >
                    <Message success>
                      The link to reset your password have been sent to your
                      email.
                    </Message>
                  </div>
                  <button
                    style={{
                      marginTop: "3%",
                      width: "100%",
                      border: "2px solid grey",
                      padding: "2%",
                      background: "#eeeee4",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                    type="submit"
                    onClick={this.reset}
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </>
        </MediaQuery>

        <MediaQuery minWidth={1501} maxWidth={2000}>
          <>
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
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <div style={{ paddingTop: "5%" }}>
              <p
                style={{
                  textAlign: "center",
                  color: "grey",
                  fontSize: "120%",
                  fontWeight: "bold",
                }}
              >
                Enter your email to reset your password.
              </p>
              <hr />
              <div style={{ width: "20%", margin: "auto", padding: "auto" }}>
                <form>
                  <label style={{ fontWeight: "bold", color: "grey" }}>
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      height: "35px",
                      border: "2px solid grey",
                    }}
                    ref={this.emailInp}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />{" "}
                  <br />
                  <div
                    ref={this.succ}
                    style={{
                      fontWeight: "bold",
                      marginTop: "2%",
                      display: "none",
                    }}
                  >
                    <Message success>
                      The link to reset your password have been sent to your
                      email.
                    </Message>
                  </div>
                  <button
                    style={{
                      marginTop: "3%",
                      width: "100%",
                      border: "2px solid grey",
                      padding: "2%",
                      background: "#eeeee4",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                    type="submit"
                    onClick={this.reset}
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </>
        </MediaQuery>


        <MediaQuery minWidth={2001}>
          <>
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
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <div style={{ paddingTop: "3%" }}>
              <p
                style={{
                  textAlign: "center",
                  color: "grey",
                  fontSize: "130%",
                  fontWeight: "bold",
                }}
              >
                Enter your email to reset your password.
              </p>
              <hr />
              <div style={{ width: "16%", margin: "auto", padding: "auto" }}>
                <form>
                  <label style={{ fontWeight: "bold", color: "grey" }}>
                    Email:
                  </label>
                  <br />
                  <input
                    type="email"
                    style={{
                      width: "100%",
                      height: "35px",
                      border: "2px solid grey",
                    }}
                    ref={this.emailInp}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />{" "}
                  <br />
                  <div
                    ref={this.succ}
                    style={{
                      fontWeight: "bold",
                      marginTop: "2%",
                      display: "none",
                    }}
                  >
                    <Message success>
                      The link to reset your password have been sent to your
                      email.
                    </Message>
                  </div>
                  <button
                    style={{
                      marginTop: "3%",
                      width: "100%",
                      border: "2px solid grey",
                      padding: "2%",
                      background: "#eeeee4",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                    type="submit"
                    onClick={this.reset}
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </>
        </MediaQuery>
      </>
    );
  }
}

export default ResetPassword;
