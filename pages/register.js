import React, { Component } from "react";
import NavBar from "../components/NavBar";
import {
  Button,
  Form,
  Segment,
  Grid,
  Icon,
  Header,
  Message,
} from "semantic-ui-react";
import BACKEND_ORIGIN from "../utils/domain";
import styles from "../static/css/register.module.css";
import jwt_decode from "jwt-decode";
// import { Router } from "next/router";
import { Router } from "../routes";

// Hii register page if the user want to visit it it should check if the user has been logged in if he's loged in then
// you should redirect him to the profile like what genius do... So for user to visit this register page we should make
// sure he is not-logged
class Register extends Component {
  state = {
    isAunthenticated: false,
    username: "",
    password: "",
    email: "",
    nywila: "",
    message: "",
    message1: "",
    message3: "",
    loading: false,
  };

  constructor(props) {
    super(props);
    this.errorContainer = React.createRef();
    this.errorContainer1 = React.createRef();
    this.loginError = React.createRef();
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

        Router.push({ pathname: "/profile" });
      } else {
        this.setState({
          isAunthenticated: true,
        });

        Router.push({ pathname: "/profile" });
      }
    } catch (InvalidTokenError) {
      console.log(InvalidTokenError.message);
      console.log(
        "Invalid token specified since, when the token is expired the jwt automatically change your storage and it ill look like this"
      );
      this.setState({
        isAunthenticated: false,
      });
    }
  };

  static async getInitialProps(props) {
    const { flag } = props.query;

    return { flag };
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

  componentDidMount() {
    this.executingTokenLogics();
  }

  componentWillUnmount() {
    clearTimeout(this.errorTimeout);
    clearTimeout(this.errorShow);
    clearTimeout(this.errorShow2);
  }
  onRegister = (e) => {
    this.setState({ loading: true });
    console.log("these are username and passwords");
    console.log(this.state.password, this.state.username);
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
        message: "Shorter password less than 6 characters",
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

    fetch(`${BACKEND_ORIGIN}/api/register/`, {
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
          this.setState({
            message: "Failed!, the user of this email already exist",
          });
          this.errorContainer.current.style.display = "block";
          this.timeout1 = setTimeout(() => {
            this.errorContainer.current.style.display = "none";
          }, 5000);

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

        console.log("Everything is good bro...");
        // don't forget to set loading false at the end
        this.setState({
          message1: "Everything is good",
        });
        this.errorContainer1.current.style.display = "block";
        this.timeout2 = setTimeout(async () => {
          console.log("we should login this user");
          let weLive = await fetch(`${BACKEND_ORIGIN}/api/token/`, {
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
          if (weLive.status !== 200) {
            return console.log(
              "Error to login this user, status code of 200 is returned"
            );
          }

          localStorage.setItem("authTokens", JSON.stringify(gza));
          this.errorContainer1.current.style.display = "none";

          this.setState({ loading: false });
          // By this we should redirect the user either in the 'mycart' if its
          // passed when user trying to visit my cart when he is not authenticated
          // otherwise we should redirect to the home/index page....
          if (this.props.flag) {
            Router.push({ pathname: this.props.flag });
          } else {
            Router.push("/");
          }
        });
      });
  };

  onLogin = async (e) => {
    e.preventDefault();

    if (
      this.state.email.trim().length === 0 ||
      this.state.nywila.trim().length === 0
    ) {
      this.setState({
        message3: "We don't accept empty field",
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

    console.log(this.state.email, this.state.nywila);

    // sasa hapa ni ishu ya
    let response = await fetch(`${BACKEND_ORIGIN}/api/token/`, {
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

    console.log("data: ", data);
    // kama itakataa ku-login hapa kwenye data instead ya kutuletea accessToken and RefreshToken itatupa error
    // kama hii Object { detail: "No active account found with the given credentials" }, ukiona hivi ujue user
    // kaweka credentials za uongo sawa...

    // if(data.detail)
    if (response.status !== 200) {
      console.log("Bad credentials");
      this.setState({
        message3: "Unable to login, Bad credentials!",
      });
      this.loginError.current.style.display = "block";
      this.errorTimeout = setTimeout(() => {
        this.loginError.current.style.display = "none";
      }, 5000);
      return;
    }

    console.log("everything is good, you have good credentials...");
    // here we needed to store the token we've got from the server in our local storage...
    // we can get the user_id, the id of login user and if you want you can return any field of the
    // user model back like 'email' by overriding some class of that api... But in my case I didn't
    // override to add some customization so in my case here I have the 'user_id' field offered
    // after decrypting the 'accessToken' we have... So in this case let's decrypt it and access the
    // user_id..
    console.log("this is the id of the user");
    const user = jwt_decode(data.access);

    console.log("This is decoded jwd token....");
    console.log(user);
    console.log(user.user_id);
    localStorage.setItem("authTokens", JSON.stringify(data));
    // after that push this to the homepage where by default we should have the
    // normal detection if the username is loged in or not....

    if (this.props.flag) {
      Router.push({ pathname: this.props.flag });
    } else {
      Router.push("/");
    }
  };

  render() {
    return (
      <NavBar>
        <div className={styles.father}>
          {/* <hr className={styles.hr} /> */}

          <Grid>
            <Grid.Column width={10}>
              <Segment>
                <Header as="h2">
                  You dont have Account? Create one for you.
                </Header>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Email"
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
                    {this.state.message1}
                  </Message>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <span className={styles.spt}>
                  Already have account
                  <Icon name="question" /> Login here
                </span>
                <hr />
                <Form>
                  <Form.Field>
                    <label>Email</label>
                    <input
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      type="password"
                      onChange={(event) =>
                        this.setState({ nywila: event.target.value })
                      }
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
                    <Message.Header>Unauthorized </Message.Header>
                    <Icon name="warning sign" />
                    {this.state.message3}
                  </Message>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </NavBar>
    );
  }
}

export default Register;
