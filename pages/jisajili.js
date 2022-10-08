import React, { Component } from "react";
import Head from "next/head";
import styles from "../static/css/jisajili.module.css";
import { Message, Icon, Button } from "semantic-ui-react";

import dynamic from "next/dynamic";
import Router from "next/router";
import BACKEND_ORIGIN from "../utils/domain";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

class Jisajili extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  constructor(props) {
    super(props);
    this.errorContainer = React.createRef();
    this.pass = React.createRef();
    this.user = React.createRef();
    this.successContainer = React.createRef();
  }

  static async getInitialProps(props) {
    const { flag, productId } = props.query;

    return { flag, productId };
  }

  register = async (e) => {
    e.preventDefault();
    console.log("THEY EXECUTE ME..");
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

      this.user.current.value = "";
      this.pass.current.value = "";

      this.setState({
        username: "",
        password: "",
      });
      return;
    }

    if (this.state.password.trim().length < 6) {
      this.setState({
        message: "Shorter password, minimum is 6 characters",
      });

      this.errorContainer.current.style.display = "block";

      this.errorShow = setTimeout(() => {
        this.errorContainer.current.style.display = "none";
      }, 5000);

      this.user.current.value = "";
      this.pass.current.value = "";
      this.setState({
        username: "",
        password: "",
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

      this.user.current.value = "";
      this.pass.current.value = "";
      this.setState({
        username: "",
        password: "",
      });
      return;
    }

    // ishu iliyopo ni kwamba hii method inakuwa haijamaliza ila code za chini zinakuwa exected...
    // ko naona ni lazima tutumie await hapa tujaribu but mwanzo ilikataa...
    fetch(`${BACKEND_ORIGIN}/api/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
            message: "Failed!, user of this email already exist",
          });
          this.errorContainer.current.style.display = "block";
          this.errorShow = setTimeout(() => {
            this.errorContainer.current.style.display = "none";
          }, 5000);
          this.user.current.value = "";
          this.pass.current.value = "";
          this.setState({
            username: "",
            password: "",
          });
          return;
        } else if (json.error) {
          this.setState({
            message: "Failed!, Invalid data",
          });
          this.errorContainer.current.style.display = "block";
          this.errorShow = setTimeout(() => {
            this.errorContainer.current.style.display = "none";
          }, 5000);
          this.user.current.value = "";
          this.pass.current.value = "";
          this.setState({
            username: "",
            password: "",
          });
          return;
        }
        console.log(
          "IF YOU ARE LIVING IN THE WORLD TODAY YOU WILL HEAR THE SLANG THAT WU TANG SAY..."
        );
        console.log("User has been created succesful...");

        // Then you're account has been created successful... You should send
        // the success url to login page as message... as flag='success'
        // this success .. when login get the message of 'flag='success' then it
        // should detect that user has been created account successful and it should
        // display that message..=
        // Router.push({ pathname: "/login", query: { success: "created" } });
        // Nakushauri kama huyu mtu asha-create account then embu m-redirect
        // kama kikuu kwenye page husika.. There is no need to login ndo kitu unachotakiwa ufanye
        // so vilevile hii inakuwa na flag... Ya-kudetect kuwa hii imetoka wapi..

        // this process remember is inside .then in else condition and you should know that
        // if we put this outside this then statement like normal code it will be executed
        // even if the process of promise for writing the user is not executed.. so you should
        // need to wrap this inside here to avoid the process of access/login the user when the user
        // creation process is still not finished for this what you will get is an error indicating that
        // user is not exist na kitu hichi ndo kilichokuwa kinanipata... Koz ni sahihi hii block ilikuwa
        // outside then promise code block.. That's why me getting an error at that time but now i know what
        // happened... Vilevile ulikuwa unashangaa mbona kwenye block of then on creation of user I set if
        // error like user already exist when returned to halt full function by return; and instead of halting
        // you see it goes outside the block and execute the codes of retrieving/login the user .. this is
        // because the process of user creation is async so its not finished when you access the
        // created user and this cause you to get an error...
        this.successContainer.current.style.display = "block";

        this.loginTimeout = setTimeout(async () => {
          // WE should login this user
          console.log("WE SHOULD LOGIN THIS USER");
          console.log(this.state.username, this.state.password);
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
          // Japo hii status nategemea itaenda poa tu...
          console.log("gza", gza);
          if (weLive.status !== 200) {
            return console.log("Error in login... Bad creditials");
          }
          localStorage.setItem("authTokens", JSON.stringify(gza));

          this.successContainer.current.style.display = "none";

          if (this.props.flag) {
            Router.push({
              pathname: this.props.flag,
              query: { product: this.props.productId },
            });
          } else {
            Router.push({
              pathname: "/",
            });
          }
        }, 50);
      });
  };

  login = () => {
    if (this.props.flag) {
      Router.push({
        pathname: "/login",
        query: { flag: this.props.flag, productId: this.props.productId },
      });
    } else {
      Router.push("login");
    }
  };

  componentWillUnmount() {
    clearTimeout(this.errorShow);
    clearTimeout(this.loginTimeout);
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

            <div className={styles.outer}>
              <p className={styles.hed}>Create account to get started.</p>
              <hr />

              <div className={styles.divForm}>
                <form onSubmit={this.register} autoComplete="off">
                  <p className={styles.reg} onClick={this.login}>
                    Already have account? Login
                  </p>

                  <label className={styles.lab}>email</label>
                  <br />
                  <input
                    className={styles.inp}
                    type="text"
                    ref={this.user}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                  <br />
                  <label className={styles.lab1}>password</label>
                  <br />
                  <input
                    className={styles.inp}
                    type="password"
                    ref={this.pass}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <br />
                  <br />
                  <div className={styles.error} ref={this.errorContainer}>
                    <Message error size="mini">
                      <Message.Header>
                        <Icon name="warning" />
                        {this.state.message}
                      </Message.Header>
                    </Message>
                  </div>
                  <div className={styles.succe} ref={this.successContainer}>
                    <Message success size="mini">
                      <Message.Header>
                        Account have been created succesful!
                      </Message.Header>
                    </Message>
                  </div>
                  <button type="submit" className={styles.sub}>
                    Register here
                  </button>
                </form>
              </div>
            </div>
          </>
        </MediaQuery>

        <MediaQuery minWidth={401}>
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
            <div className={styles.outer}>
              <p className={styles.hed}>Create account to get started.</p>
              <hr />
              <div className={styles.divForm}>
                <form onSubmit={this.register} autoComplete="off">
                  <p className={styles.reg} onClick={this.login}>
                    Already have account? Login
                  </p>

                  <label className={styles.lab}>email</label>
                  <br />
                  <input
                    className={styles.inp}
                    type="text"
                    ref={this.user}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                  <br />
                  <label className={styles.lab1}>password</label>
                  <br />
                  <input
                    className={styles.inp}
                    type="password"
                    ref={this.pass}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <br />
                  <br />
                  <div className={styles.error} ref={this.errorContainer}>
                    <Message error size="mini">
                      <Message.Header>
                        <Icon name="warning" />
                        {this.state.message}
                      </Message.Header>
                    </Message>
                  </div>

                  <div className={styles.succe} ref={this.successContainer}>
                    <Message success size="mini">
                      <Message.Header>
                        Account have been created succesful!
                      </Message.Header>
                    </Message>
                  </div>
                  <button type="submit" className={styles.sub}>
                    Register here
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

export default Jisajili;
