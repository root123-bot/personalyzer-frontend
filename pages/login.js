import React, { Component } from "react";
import Head from "next/head";
import styles from "../static/css/login.module.css";
import { Message, Icon } from "semantic-ui-react";
import BACKEND_ORIGIN from "../utils/domain";
import dynamic from "next/dynamic";
import Router from "next/router";

const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

class Login extends Component {
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
    const { flag, productId, success } = props.query;
    // If flag is 'normal' then redirect user actually in the
    // profile or index... Otherwise if there is a flag then that
    // is where to redirect

    // if these flag, productId are not passed.. 'undefined' then
    // then this means there is no need to redirect user somewhere
    // that is normal access of 'login' and by default we redirect
    // user to the index page....
    return { flag, productId, success };
  }

  signIn = async (e) => {
    e.preventDefault();
    console.log("HEy im clicked..");
    console.log(this.props.flag);

    if (
      this.state.username.trim().length === 0 ||
      this.state.password.trim().length === 0
    ) {
      // we don't accept empty fields..
      this.setState({
        message: "We don't accept empty field",
      });

      this.errorContainer.current.style.display = "block";

      this.errorShow = setTimeout(() => {
        this.errorContainer.current.style.display = "none";
      }, 5000);

      // I think we should clear all make all fields empty..
      this.user.current.value = "";
      this.pass.current.value = "";
      return;
    }

    // otherwise send the request to login in server
    let response = await fetch(`${BACKEND_ORIGIN}/api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      }),
    });

    let data = await response.json();

    console.log("data", data);

    if (response.status !== 200) {
      this.setState({
        message: "Invalid Credentials",
      });
      this.errorContainer.current.style.display = "block";
      this.erro = setTimeout(() => {
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

    console.log("Everything is good now");
    localStorage.setItem("authTokens", JSON.stringify(data));
    // then check if the props passed if they are undefined then
    // we have default redirect to the index/profile page... but
    //

    if (this.props.flag) {
      Router.push({
        pathname: this.props.flag,
        query: { product: this.props.productId },
      });
    } else {
      console.log("redirect to index page...");
      Router.push({
        pathname: '/'
      })
    }
  };

  register = () => {
    if(this.props.flag) {
      Router.push({pathname: "/jisajili", query: {flag: this.props.flag, productId: this.props.productId}})
    }

    else {
      Router.push('jisajili')
    }
  }

  componentDidMount() {
    console.log(this.props.flag, this.props.productId);

    // componentDidMountError... vs ref.. ref is null
      if(this.props.success) {
        // Na hii ndo changamoto mojawapo ya kutumia ClassBasedComponents..
        if(this.successContainer.current) {
        // then here you need to display this success message
          this.successContainer.current.style.display = 'block';
        
        
          this.successTimeout = setTimeout(() => {
            this.successContainer.current.style.display = 'none'
          }, 7000)
        }
    }

    else {
      console.log('Not defined..')
    }
  }

  componentWillUnmount() {
    clearTimeout(this.errorShow);
    clearTimeout(this.erro);
    clearTimeout(this.successTimeout)
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
              <p className={styles.hed}>Fill credentials to login.</p>
              <hr />

              <div className={styles.divForm}>
                <form onSubmit={this.signIn} autoComplete="off">
                  <p
                    className={styles.reg}
                    onClick={this.register}
                  >
                    Don't have account? Register
                  </p>
                  {/* <div className={styles.success} ref={this.successContainer}>
                    <Message success size="mini">
                      <Message.Header>
                        You're account has been created successful. Login here..
                      </Message.Header>
                    </Message>
                  </div> */}

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
                  <p className={styles.forg} onClick={() => Router.push('/reset')}>Forgot password?</p>
                  <div className={styles.error} ref={this.errorContainer}>
                    <Message error size="mini">
                      <Message.Header>
                        <Icon name="warning" />
                        {this.state.message}
                      </Message.Header>
                    </Message>
                  </div>

                  <button type="submit" className={styles.sub}>
                    Login Here
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
              <p className={styles.hed}>Fill credentials to login.</p>
              <hr />
              <div className={styles.divForm}>
                <form onSubmit={this.signIn} autoComplete="off">
                  <p
                    className={styles.reg}
                    onClick={this.register}
                  >
                    Don't have account? Register
                  </p>

                  {/* <div className={styles.success} ref={this.successContainer}>
                    <Message success size="mini">
                      <Message.Header>
                        You're account has been created successful. Login here..
                      </Message.Header>
                    </Message>
                  </div> */}

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
                  <p className={styles.forg} onClick={() => Router.push('/reset')}>Forgot password?</p>
                  <div className={styles.error} ref={this.errorContainer}>
                    <Message error size="mini">
                      <Message.Header>
                        <Icon name="warning" />
                        {this.state.message}
                      </Message.Header>
                    </Message>
                  </div>
                  <button type="submit" className={styles.sub}>
                    Login Here
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

export default Login;
