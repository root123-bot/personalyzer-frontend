import React, { Component } from "react";
import {
  Button,
  Form,
  Segment,
  Grid,
  Icon,
  Header,
  Message,
} from "semantic-ui-react";
import styles from "../static/css/sign.module.css";
import jwt_decode from "jwt-decode";
import Router from 'next/router'

class Sign extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    nywila: "",
    message: "",
    message2: "",
    loading: false,
  };

  constructor(props) {
    super(props);
    this.errorContainer = React.createRef();
    this.errorContainer1 = React.createRef();
    this.loginError = React.createRef();
    this.loginSuccess = React.createRef();
  }

  onRegister = (e) => {
    //console.log('Hey you clicked on register')
    this.setState({ loading: true });
    e.preventDefault();

    if (
      this.state.username.trim().length === 0 ||
      this.state.password.trim().length === 0
    ) {
      this.setState({
        message: "We don't accept empty field",
      });

      this.errorContainer.current.style.display = "block";

      this.errorShow = setTimeout(() => {
        this.errorContainer.current.style.display = "none";
      }, 5000);

      this.setState({
        loading: false,
      });
      return;
    }

    if (this.state.password.trim().length < 6) {
      this.setState({
        message: "Shorter password less than6 characters",
      });

      this.errorContainer.current.style.display = "block";

      this.errorShow = setTimeout(() => {
        this.errorContainer.current.style.display = "none";
      }, 5000);
      this.setState({
        loading: false,
      });
      return;
    }

    if (!this.state.username.trim().includes("@")) {
      this.setState({
        message: "Wrong format of email",
      });

      this.errorContainer.current.style.display = "block";

      this.errorShow = setTimeout(() => {
        this.errorContainer.current.style.display = "none";
      }, 5000);

      this.setState({
        loading: false,
      });
      return;
    }

    fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.err) {
          console.log(json.err);
          this.setState({
            message: "Failed!, the user of this email already exist",
          });
          this.errorContainer.current.style.display = "block";
          this.timeout1 = setTimeout(() => {
            this.errorContainer.current.style.display = "none";
          }, 5000);
          // this.setState({
          //     username: "",
          //     password: ""
          // })
          this.setState({
            loading: false,
          });
          return;
        } else if (json.error) {
          this.setState({
            message: "Failed!, Invalid data",
          });
          this.errorContainer.current.style.display = "block";
          this.timeout1 = setTimeout(() => {
            this.errorContainer.current.style.display = "none";
          }, 5000);

          this.setState({
            loading: false,
          });
          return;
        }

        console.log("Everyting is good bro...");
        this.setState({ loading: false });
        this.errorContainer1.current.style.display = "block";
        this.timeout2 = setTimeout(async () => {
          // lets login the user...
          console.log("we should login this user");
          let weLive = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: this.state.username,
              password: this.state.password,
            }),
          });

          let gza = await weLive.json();
          console.log("gza", gza);
          if (weLive.status !== 200) {
            return console.log(
              "Error to login this user, status code of 200 is returned"
            );
          }
          localStorage.setItem("authTokens", JSON.stringify(gza));

          this.errorContainer1.current.style.display = "none";

          this.props.closeLoginPanel();
        }, 100);
      });
  };

  onLogin = async (e) => {
    e.preventDefault();

    if (
      this.state.email.trim().length === 0 ||
      this.state.nywila.trim().length === 0
    ) {
      this.setState({
        message2: "We don't accept empty field",
      });

      this.loginError.current.style.display = "block";

      this.errorShow2 = setTimeout(() => {
        this.loginError.current.style.display = "none";
      }, 5000);

      this.setState({
        loading: false,
      });
      return;
    }

    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.nywila,
      }),
    });

    let data = await response.json();

    console.log("data", data);
    if (response.status != 200) {
      this.setState({
        message2: "Unable to login, Bad credentials!",
      });
      console.log("Bad credentials");
      this.loginError.current.style.display = "block";
      this.loginSetTimeout = setTimeout(() => {
        this.loginError.current.style.display = "none";
      }, 5000);
      return;
    }

    console.log("Everything is good, you have good credentails...");
    console.log("this is the id of the user");
    const user = jwt_decode(data.access);
    console.log("This is decoded jwt token...");
    console.log(user);
    console.log(user.user_id);
    localStorage.setItem("authTokens", JSON.stringify(data));
    console.log("Mpaka hatua hii inabid u-close hii window coz user ashalogin");
    this.loginSuccess.current.style.display = "block";

    this.successSetTimeOut = setTimeout(() => {
      this.loginSuccess.current.style.display = "none";

      // Hizi ni component mbili tofauti so ikikataa ni sawa tu ....
      // so how we can close this window...
      {
        this.props.closeLoginPanel();
      }
    }, 1000);
  };

  componentWillUnmount() {
    clearTimeout(this.timeout1);
    clearTimeout(this.timeout2);
    clearTimeout(this.loginSetTimeout);
    clearTimeout(this.successSetTimeOut);
    clearTimeout(this.errorShow);
    clearTimeout(this.errorShow2);
  }

  render() {
    return (
      <div className={styles.father}>
        <Segment>
          <Header
            as="h1"
            content="To have many more features like adding items to shoping cart you should login."
            color="grey"
            textAlign="center"
          />
          <hr style={{ border: "1px solid grey" }} />
          <Grid>
            <Grid.Column width={10}>
              <Segment>
                <Header as="h2">
                  {" "}
                  You don't have account? Create one for you.
                </Header>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Username"
                      onChange={(event) =>
                        this.setState({ username: event.target.value })
                      }
                    />

                    <Form.Input
                      fluid
                      label="Password"
                      type="password"
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                    />
                  </Form.Group>
                  <Button
                    loading={this.state.loading}
                    type="submit"
                    content="Register"
                    fluid
                    primary
                    onClick={this.onRegister}
                  />
                </Form>
                <div className={styles.cont} ref={this.errorContainer}>
                  <Message error>
                    <Message.Header>
                      Error, unable create account!
                    </Message.Header>
                    <Icon name="warning sign" />
                    {this.state.message}
                  </Message>
                </div>

                <div className={styles.cont2} ref={this.errorContainer1}>
                  <Message success>
                    <Message.Header>Account created successful</Message.Header>
                    Now you can login with your password and email as username
                  </Message>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <span className={styles.spt}>
                  Already have account
                  <Icon name="question" />
                  Login here
                </span>
                <hr />
                <Form>
                  <Form.Field>
                    <label>Username</label>
                    <input
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      onChange={(event) =>
                        this.setState({ nywila: event.target.value })
                      }
                      type="password"
                    />
                  </Form.Field>

                  <p
                    className={styles.fp}
                    onClick={() => Router.push("/reset")}
                  >
                    Forgot password?
                  </p>

                  <Button
                    animated="vertical"
                    fluid
                    color="teal"
                    onClick={this.onLogin}
                  >
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                </Form>

                <div
                  ref={this.loginError}
                  style={{ display: "none", marginTop: "1%" }}
                >
                  <Message error>
                    <Message.Header>Unauthorized</Message.Header>
                    <Icon name="warning sign" />
                    {/* Unable to login, Bad credentials */}
                    {this.state.message2}
                  </Message>
                </div>

                <div
                  ref={this.loginSuccess}
                  style={{ display: "none", marginTop: "1%" }}
                >
                  <Message success>
                    <Message.Header>Login successful</Message.Header>
                    Now you're free to add items to the cart
                  </Message>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Sign;
