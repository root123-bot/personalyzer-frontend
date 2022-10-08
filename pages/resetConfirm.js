import React, { Component } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Router from "next/router";
import { Message, Button } from "semantic-ui-react";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

class ResetConfirm extends Component {
  state = {
    password: "",
    errorMessage: "",
    loading: false,
  };

  constructor(props) {
    super(props);
    this.succ = React.createRef();
    this.err = React.createRef();
    this.passInp = React.createRef();
  }

  confirmNewPassword = async (e) => {
    this.setState({
      loading: true,
    });
    e.preventDefault();
    console.log(this.state.password);

    if (this.state.password.length === 0) {
      this.setState({
        errorMessage: "Error! We don't accept empty field.",
      });

      this.passInp.current.value = "";
      this.setState({
        loading: false,
      });
      this.setState({
        password: "",
      });
      this.err.current.style.display = "block";

      this.timeout = setTimeout(() => {
        this.err.current.style.display = "none";
      }, 5000);

      return;
    }

    if (this.state.password.trim().length < 6) {
      // then we have weak password
      this.setState({
        errorMessage: "Error! Weak password, must have more than 6 characters",
      });
      this.passInp.current.value = "";
      this.setState({
        loading: false,
      });
      this.err.current.style.display = "block";
      this.setState({
        password: "",
      });
      this.timeout = setTimeout(() => {
        this.err.current.style.display = "none";
      }, 5000);

      return;
    }

    // everything is good lets now send the new password
    const response = await fetch(`http://${this.props.api}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: this.state.password
        })
    });


    if (response.status !== 200) {
       
        console.log('something went wrong')
        this.setState({
            errorMessage: 'Bad request!, Fails to change password'
        })
        this.succ.current.style.display = 'none'
        this.err.current.style.display = 'block'


        this.passInp.current.value = ''
        this.setState({
            loading: false,
            password: ''
        });


        this.timeout = setTimeout(() => {
            this.err.current.style.display = 'none'
        })
        return;
    }

    const json = await response.json();


    // otherwise password have been changed.
    this.passInp.current.value = ''
    this.setState({
        loading: false,
        password: ''
    })
    this.err.current.style.display = 'none'
    this.succ.current.style.display = 'block'

    
  };

  static async getInitialProps(props) {
    const { api } = props.query;

    console.log(api);
    return { api };
  }

  render() {
    return (
      <>
        {/* <div>{this.props.api}</div> */}

        <MediaQuery minWidth={200} maxWidth={400}>
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
              Enter new password.
            </p>
            <hr />
            <div style={{ width: "70%", margin: "auto", padding: "auto" }}>
              <form>
                <label style={{ fontWeight: "bold", color: "grey" }}>
                  New password:
                </label>
                <br />
                <input
                  type="password"
                  style={{
                    width: "100%",
                    height: "35px",
                    border: "2px solid grey",
                  }}
                  ref={this.passInp}
                  onChange={(e) => this.setState({ password: e.target.value })}
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
                    Password has been changed click{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => Router.push('/login')}
                    >
                      here
                    </span>{" "}
                    to login
                  </Message>
                </div>
                <div
                  ref={this.err}
                  style={{
                    fontWeight: "bold",
                    marginTop: "2%",
                    display: "none",
                  }}
                >
                  <Message error>{this.state.errorMessage}</Message>
                </div>
               
                <div style={{marginTop: '3%'}}>
                <Button loading={this.state.loading} onClick={this.confirmNewPassword} fluid primary content='Confirm' />
                </div>
              </form>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={401} maxWidth={700}>
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
              Enter new password.
            </p>
            <hr />
            <div style={{ width: "50%", margin: "auto", padding: "auto" }}>
              <form>
                <label style={{ fontWeight: "bold", color: "grey" }}>
                  New password:
                </label>
                <br />
                <input
                  type="password"
                  style={{
                    width: "100%",
                    height: "35px",
                    border: "2px solid grey",
                  }}
                  ref={this.passInp}
                  onChange={(e) => this.setState({ password: e.target.value })}
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
                    Password has been changed click{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => Router.push('/login')}
                    >
                      here
                    </span>{" "}
                    to login
                  </Message>
                </div>
                <div
                  ref={this.err}
                  style={{
                    fontWeight: "bold",
                    marginTop: "2%",
                    display: "none",
                  }}
                >
                  <Message error>{this.state.errorMessage}</Message>
                </div>
               
                <div style={{marginTop: '3%'}}>
                <Button loading={this.state.loading} onClick={this.confirmNewPassword} fluid primary content='Confirm' />
                </div>
              </form>
            </div>
          </div>
        </MediaQuery>


        <MediaQuery minWidth={701} maxWidth={899}>
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
          <div style={{ paddingTop: "7%" }}>
            <p
              style={{
                textAlign: "center",
                color: "grey",
                fontSize: "120%",
                fontWeight: "bold",
              }}
            >
              Enter new password.
            </p>
            <hr />
            <div style={{ width: "40%", margin: "auto", padding: "auto" }}>
              <form>
                <label style={{ fontWeight: "bold", color: "grey" }}>
                  New password:
                </label>
                <br />
                <input
                  type="password"
                  style={{
                    width: "100%",
                    height: "35px",
                    border: "2px solid grey",
                  }}
                  ref={this.passInp}
                  onChange={(e) => this.setState({ password: e.target.value })}
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
                    Password has been changed click{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => Router.push('/login')}
                    >
                      here
                    </span>{" "}
                    to login
                  </Message>
                </div>
                <div
                  ref={this.err}
                  style={{
                    fontWeight: "bold",
                    marginTop: "2%",
                    display: "none",
                  }}
                >
                  <Message error>{this.state.errorMessage}</Message>
                </div>
               
                <div style={{marginTop: '3%'}}>
                <Button loading={this.state.loading} onClick={this.confirmNewPassword} fluid primary content='Confirm' />
                </div>
              </form>
            </div>
          </div>
        </MediaQuery>


        <MediaQuery minWidth={901} maxWidth={1500}>
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
              Enter new password.
            </p>
            <hr />
            <div style={{ width: "30%", margin: "auto", padding: "auto" }}>
              <form>
                <label style={{ fontWeight: "bold", color: "grey" }}>
                  New password:
                </label>
                <br />
                <input
                  type="password"
                  style={{
                    width: "100%",
                    height: "35px",
                    border: "2px solid grey",
                  }}
                  ref={this.passInp}
                  onChange={(e) => this.setState({ password: e.target.value })}
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
                    Password has been changed click{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => Router.push('/login')}
                    >
                      here
                    </span>{" "}
                    to login
                  </Message>
                </div>
                <div
                  ref={this.err}
                  style={{
                    fontWeight: "bold",
                    marginTop: "2%",
                    display: "none",
                  }}
                >
                  <Message error>{this.state.errorMessage}</Message>
                </div>
               
                <div style={{marginTop: '3%'}}>
                <Button loading={this.state.loading} onClick={this.confirmNewPassword} fluid primary content='Confirm' />
                </div>
              </form>
            </div>
          </div>
        </MediaQuery>



        <MediaQuery minWidth={1501} maxWidth={2000}>
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
                fontSize: "120%",
                fontWeight: "bold",
              }}
            >
              Enter new password.
            </p>
            <hr />
            <div style={{ width: "20%", margin: "auto", padding: "auto" }}>
              <form>
                <label style={{ fontWeight: "bold", color: "grey" }}>
                  New password:
                </label>
                <br />
                <input
                  type="password"
                  style={{
                    width: "100%",
                    height: "35px",
                    border: "2px solid grey",
                  }}
                  ref={this.passInp}
                  onChange={(e) => this.setState({ password: e.target.value })}
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
                    Password has been changed click{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => Router.push('/login')}
                    >
                      here
                    </span>{" "}
                    to login
                  </Message>
                </div>
                <div
                  ref={this.err}
                  style={{
                    fontWeight: "bold",
                    marginTop: "2%",
                    display: "none",
                  }}
                >
                  <Message error>{this.state.errorMessage}</Message>
                </div>
               
                <div style={{marginTop: '3%'}}>
                <Button loading={this.state.loading} onClick={this.confirmNewPassword} fluid primary content='Confirm' />
                </div>
              </form>
            </div>
          </div>
        </MediaQuery>



        <MediaQuery minWidth={2001}>
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
          <div style={{ paddingTop: "2%" }}>
            <p
              style={{
                textAlign: "center",
                color: "grey",
                fontSize: "120%",
                fontWeight: "bold",
              }}
            >
              Enter new password.
            </p>
            <hr />
            <div style={{ width: "16%", margin: "auto", padding: "auto" }}>
              <form>
                <label style={{ fontWeight: "bold", color: "grey" }}>
                  New password:
                </label>
                <br />
                <input
                  type="password"
                  style={{
                    width: "100%",
                    height: "35px",
                    border: "2px solid grey",
                  }}
                  ref={this.passInp}
                  onChange={(e) => this.setState({ password: e.target.value })}
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
                    Password has been changed click{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => Router.push('/login')}
                    >
                      here
                    </span>{" "}
                    to login
                  </Message>
                </div>
                <div
                  ref={this.err}
                  style={{
                    fontWeight: "bold",
                    marginTop: "2%",
                    display: "none",
                  }}
                >
                  <Message error>{this.state.errorMessage}</Message>
                </div>
               
                <div style={{marginTop: '3%'}}>
                <Button loading={this.state.loading} onClick={this.confirmNewPassword} fluid primary content='Confirm' />
                </div>
              </form>
            </div>
          </div>
        </MediaQuery>
      </>
    );
  }
}

export default ResetConfirm;
