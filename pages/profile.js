import React, { Component } from "react";
import NavBar from "../components/NavBar";
import jwt_decode from "jwt-decode";
import styles from "../static/css/profile.module.css";
import Router from "next/router";
import { Header, Grid, Icon } from "semantic-ui-react";
import dynamic from "next/dynamic";
const MediaQuery = dynamic(
  () => {
    return import("react-responsive");
  },
  { ssr: false }
);

class Profile extends Component {
  state = {
    isAunthenticated: false,
    cartproducts: [],
    user_id: null,
    net_price: 0,
    net_quantity: 0,
    profile: [],
    profile_pic: null,
    profile_file: null,
    username: "",
    password: "",
    oldPassword: "",
    errorMessage: "",
  };

  constructor(props) {
    super(props);
    this.para1 = React.createRef();
    this.para2 = React.createRef();
    this.para3 = React.createRef();
    this.para4 = React.createRef();
    this.profile = React.createRef();
    this.cartSummary = React.createRef();
    this.notification = React.createRef();
    this.password = React.createRef();
    this.editProfile = React.createRef();
    this.actualPreview = React.createRef();
    this.success = React.createRef();
    this.err = React.createRef();
    this.inp = React.createRef();
    this.inpOld = React.createRef();
    this.updateUsername = React.createRef();
  }

  preview = (e) => {
    // YOU SHOULD GIVE THE CREDI TO THIS VIDEO
    // https://www.youtube.com/watch?v=BPUgM1Ig4Po
    e.preventDefault();
    // console.log(e.target.value);

    const file = e.target.files[0];
    // this is what we get C:\fakepath\cat.jpeg .. its not a full path of the image..
    // https://stackoverflow.com/questions/4851595/how-to-resolve-the-c-fakepath
    if (file && file.type.substr(0, 5) === "image") {
      this.setState({
        profile_file: file,
      });

      // Nilichogundua kazi ya hii FileReader ni kwamba inaichukua uploaded
      // image holded in the file input then since the browser for security
      // reason they didn't give us a full path of the uploaded image for us
      // to preview it to user.. This file reader takes that uploaded image then
      // it encode it or convert it in the actual image then it gives it the url or
      // string which is .readAsDataUrl() then after that I think we send that encoded
      // base64 data of image/actual image as url to the browser/client where it will
      // get loaded as background.. this is what happens but for more mimi hapa hizi ni
      // logic zangu tu inabd ufatilie kwa kina kuhusu hii FileReader()....
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({
          profile_pic: reader.result,
        });

        console.log("This is the new image");
        this.actualPreview.current.style.backgroundImage = `url(${reader.result})`;
        this.actualPreview.current.style.backgroundSize = "100% 100%";
        this.actualPreview.current.style.backgroundRepeat = "no-repeat";
      };
      reader.readAsDataURL(file);
    } else {
      this.setState({
        profile_pic: null
      })
      
    }
  };

  editPro = async (e) => {
    e.preventDefault();
    console.log("Hey im in clicking the button...");
    const file = this.state.profile_file;

    if (file || this.state.username.length > 0) {
      const image = file;

      const uploadData = new FormData();
      uploadData.append("id", this.state.user_id);
      uploadData.append("image", image);

      this.state.username.trim().length > 1
        ? uploadData.append("name", this.state.username)
        : uploadData.append("name", "431EFD#");
      //uploadData.append("name", this.state.username);

      console.log("Thsi is upload data for you");
      console.log(uploadData);

      const response = await fetch("http://localhost:8000/api/edit/", {
        method: "POST",
        body: uploadData,
      });
      // Unavyo-upload image/formData mara nyingi image usiweke headers of
      // of { Content-Type: application/json} because remember file is not
      // the application/json ..
      // Also hii FormData() inabidi uifatilie coz ndo iliyokusaidia hapa
      // vilevile toa some credit to this guy for helping you
      // https://www.youtube.com/watch?v=Sc1KKe1Pguw

      const data = await response.json();

      window.location.reload();
    }
  };

  paraO = () => {
    this.para1.current.style.background = "rgb(221, 221, 221)";
    this.para1.current.style.borderRight = "1px solid grey";
    this.para2.current.style.background = "none";
    this.para2.current.style.borderRight = "none";
    this.para3.current.style.background = "none";
    this.para3.current.style.borderRight = "none";
    this.para4.current.style.background = "none";
    this.para4.current.style.borderRight = "none";

    this.profile.current.style.display = "block";
    this.cartSummary.current.style.display = "none";
    this.notification.current.style.display = "none";
    this.password.current.style.display = "none";
    this.editProfile.current.style.display = "none";
    this.success.current.style.display = "none";
    this.err.current.style.display = "none";
  };

  paraT = () => {
    console.log("IM para2");
    this.para2.current.style.background = "rgb(221, 221, 221)";
    this.para2.current.style.borderRight = "1px solid grey";
    this.para1.current.style.background = "none";
    this.para1.current.style.borderRight = "none";
    this.para3.current.style.background = "none";
    this.para3.current.style.borderRight = "none";
    this.para4.current.style.background = "none";
    this.para4.current.style.borderRight = "none";

    this.profile.current.style.display = "none";
    this.cartSummary.current.style.display = "block";
    this.notification.current.style.display = "none";
    this.password.current.style.display = "none";
    this.editProfile.current.style.display = "none";
    this.success.current.style.display = "none";
    this.err.current.style.display = "none";
  };

  paraTh = () => {
    this.para3.current.style.background = "rgb(221, 221, 221)";
    this.para3.current.style.borderRight = "1px solid grey";
    this.para2.current.style.background = "none";
    this.para2.current.style.borderRight = "none";
    this.para1.current.style.background = "none";
    this.para1.current.style.borderRight = "none";
    this.para4.current.style.background = "none";
    this.para4.current.style.borderRight = "none";

    this.profile.current.style.display = "none";
    this.cartSummary.current.style.display = "none";
    this.notification.current.style.display = "block";
    this.password.current.style.display = "none";
    this.editProfile.current.style.display = "none";
    this.success.current.style.display = "none";
    this.err.current.style.display = "none";
  };

  paraF = () => {
    this.para4.current.style.background = "rgb(221, 221, 221)";
    this.para4.current.style.borderRight = "1px solid grey";
    this.para2.current.style.background = "none";
    this.para2.current.style.borderRight = "none";
    this.para3.current.style.background = "none";
    this.para3.current.style.borderRight = "none";
    this.para1.current.style.background = "none";
    this.para1.current.style.borderRight = "none";

    this.profile.current.style.display = "none";
    this.cartSummary.current.style.display = "none";
    this.notification.current.style.display = "none";
    this.password.current.style.display = "block";
    this.editProfile.current.style.display = "none";
    this.success.current.style.display = "none";
    this.err.current.style.display = "none";
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

      let check = await fetch("http://127.0.0.1:8000/api/cartproducts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user,
        }),
      });

      let output = await check.json();

      if (output.message) {
        // the message is returned when the logged on user has not created
        // cart for him/her
        let crack = await fetch("http://localhost:8000/api/profile/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user,
          }),
        });

        let profile = await crack.json();

        // sometimes user anaweza akawa hana profile... ikareturn error like this
        // { error: "No profile by that user"} then for this case it will be difficult
        // to reference some data like name, picture and so on but my aim is when user is
        // created to create the profile for him by any means.... In order to avoid this
        // kind of issues... Hii imetokea kwa 'amos@gmail.com' naona hii mwanzo kule
        // siku-add this functionality on creating user to create profile for him.....
        // also remember if you created the user in admin panel then there is no any
        // logics executed to create profile

        this.setState({
          profile,
          profile_pic: profile.profile_picture,
        });

        console.log("THIS IS THE PROFILE FOR YOU....");
        console.log(profile);
        return;
      }

      if (output.length < 1) {
        // a user can have cart but zero cart products..

        let crack = await fetch("http://localhost:8000/api/profile/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user,
          }),
        });

        // sometimes user anaweza akawa hana profile... ikareturn error like this
        // { error: "No profile by that user"} then for this case it will be difficult
        // to reference some data like name, picture and so on but my aim is when user is
        // created to create the profile for him by any means.... In order to avoid this
        // kind of issues... Hii imetokea kwa 'amos@gmail.com' naona hii mwanzo kule
        // siku-add this functionality on creating user to create profile for him.....
        // also remember if you created the user in admin panel then there is no any
        // logics executed to create profile

        let profile = await crack.json();

        this.setState({
          profile,
          profile_pic: profile.profile_picture,
        });

        console.log("THIS IS THE PROFILE FOR YOU....");
        console.log(profile);
        return;
      }

      let net_quantity = 0;
      let net_price = 0;
      for (let out of output) {
        net_quantity = out.quantity + net_quantity;
        net_price = out.subTotal + net_price;
      }

      this.setState({
        cartproducts: output.reverse(),
        net_price: net_price,
        net_quantity: net_quantity,
      });

      let crack = await fetch("http://localhost:8000/api/profile/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user,
        }),
      });

      let profile = await crack.json();

      this.setState({
        profile,
        profile_pic: profile.profile_picture,
      });

      console.log("THIS IS THE PROFILE FOR YOU....");
      console.log(profile);
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

  edit = () => {
    this.profile.current.style.display = "none";
    this.cartSummary.current.style.display = "none";
    this.notification.current.style.display = "none";
    this.password.current.style.display = "none";
    this.editProfile.current.style.display = "block";
    this.updateUsername.current.value = this.state.profile.full_name
  };

  changePassword = async (e) => {
    e.preventDefault();

    
    if (
      this.state.password.trim().length === 0 ||
      this.state.oldPassword.trim().length === 0
    ) {
      this.setState({
        errorMessage: "We don't accept empty field",
      });
      this.success.current.style.display = "none";
      this.err.current.style.display = "block";

      this.showError = setTimeout(() => {
        this.err.current.style.display = "none";
      }, 5000);

      return;
    }

    if (
      this.state.password.trim().length > 6 &&
      this.state.oldPassword.trim().length > 0
    ) {
      const response = await fetch(
        "http://127.0.0.1:8000/api/change_password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.state.user_id,
            password: this.state.password,
            old: this.state.oldPassword,
          }),
        }
      );

      let data = await response.json();
      console.log("This is the data from the server");
      console.log(data);

      // show success

      if (data.message) {
        this.success.current.style.display = "block";
        this.err.current.style.display = "none";

        this.showSuccess = setTimeout(() => {
          this.success.current.style.display = "none";
        }, 5000);

        this.inp.current.value = "";
        this.inpOld.current.value = "";
      } else {
        // raise error that password change request failed....
        console.log("I thinks you passed wrong old password");
        this.setState({
          errorMessage:
            "Password change request failed, use correct credentials",
        });
        this.success.current.style.display = "none";
        this.err.current.style.display = "block";

        this.showError = setTimeout(() => {
          this.err.current.style.display = "none";
        }, 5000);
      }
    } else {
      // show fails message
      console.log("Weak password");
      this.setState({
        errorMessage: "Use strong password",
      });
      this.success.current.style.display = "none";
      this.err.current.style.display = "block";

      this.showError = setTimeout(() => {
        this.err.current.style.display = "none";
      }, 5000);
    }
  };

  
  async componentDidMount() {
    this.executingTokenLogics();

    this.executingTokenLogicsInterval = setInterval(
      () => this.executingTokenLogics(),
      1200000
    );
  }

  componentWillUnmount() {
    clearInterval(this.executingTokenLogics);
    clearTimeout(this.success);
    clearTimeout(this.showError);
  }

  

  updateToken = async (refreshToken) => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    let data = await response.json();
    localStorage.setItem("authTokens", JSON.stringify(data));
  };

  onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('authTokens')
    // window.location.reload();
    Router.push('/')
  }

  render() {
    return (
      <NavBar isAunthenticated={this.state.isAunthenticated}>
        <MediaQuery minWidth={900}>
          {this.state.isAunthenticated ? (
            <>
              <p
                style={{
                  marginTop: "10%",
                  fontWeight: "bold",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}

                onClick ={this.onLogout}
              >
                logout
              </p>
              <div className={styles.pro}>
                <Grid>
                  <Grid.Column width={6}>
                    <div className={styles.col1}>
                      <p
                        className={styles.para1}
                        ref={this.para1}
                        onClick={this.paraO}
                      >
                        <Icon size="large" name="user circle" />
                        Profile
                      </p>
                      <p
                        className={styles.para}
                        ref={this.para2}
                        onClick={this.paraT}
                      >
                        <Icon size="large" name="shopping cart" />
                        My Cart
                      </p>
                      <p
                        className={styles.para}
                        ref={this.para3}
                        onClick={this.paraTh}
                      >
                        <Icon size="large" name="bell" />
                        Notifications
                      </p>
                      <p
                        className={styles.para4}
                        ref={this.para4}
                        onClick={this.paraF}
                      >
                        <Icon size="large" name="lock" />
                        Change Password
                      </p>
                    </div>
                  </Grid.Column>

                  <Grid.Column width={10}>
                    <div className={styles.col2}>
                      <div className={styles.profile} ref={this.profile}>
                        <MediaQuery maxWidth={1000}>
                          <img
                            className={styles.wrapperImage}
                            src={`http://127.0.0.1:8000${this.state.profile_pic}`}
                            width={180}
                            height={180}
                          />
                        </MediaQuery>
                        <MediaQuery minWidth={1001}>
                          <img
                            className={styles.wrapperImage}
                            src={`http://127.0.0.1:8000${this.state.profile_pic}`}
                            width={200}
                            height={200}
                          />
                        </MediaQuery>
                        <MediaQuery minWidth={900} maxWidth={991}>
                          <div className={styles.pos}>
                            <div className={styles.nameWrapper}>
                              <span className={styles.actualname1}></span>
                              <span className={styles.actualValue}>
                                {this.state.profile.full_name}
                              </span>
                              <hr className={styles.nl} />
                            </div>
                            <div className={styles.emailWrapper}>
                              <span className={styles.mail}>
                                <span className={styles.mvalue}>email: </span>
                                <span className={styles.mname}>
                                  {/* {this.state.profile.get_email.length > 25 ? (
                                    this.state.profile.get_email.substr(0, 25) + '...'
                                ): (
                                    this.state.profile.get_email
                                )} */}
                                  {this.state.profile.get_email}
                                </span>
                              </span>
                            </div>
                            <div className={styles.catWrapper}>
                              <span className={styles.mail}>
                                <span className={styles.mvalue}>
                                  category:{" "}
                                </span>
                                <span className={styles.mname}>customer</span>
                              </span>
                            </div>
                            <div className={styles.orderWrapper}>
                              {/* <span className={styles.mail}><span className={styles.mvalue}>Number of orders:</span><span className={styles.mname}>0</span></span> */}
                            </div>
                            <div className={styles.chName}>
                              <span
                                className={styles.changeName}
                                onClick={this.edit}
                              >
                                Edit profile
                              </span>
                              {/* <span className={styles.changeName1}>Change image</span> */}
                            </div>
                          </div>
                        </MediaQuery>
                        <MediaQuery minWidth={992} maxWidth={1200}>
                          <div className={styles.pos} style={{ left: "40%" }}>
                            <div className={styles.nameWrapper}>
                              <span className={styles.actualname1}></span>
                              <span className={styles.actualValue}>
                                {this.state.profile.full_name}
                              </span>
                              <hr className={styles.nl} />
                            </div>
                            <div className={styles.emailWrapper}>
                              <span className={styles.mail}>
                                <span className={styles.mvalue}>email: </span>
                                <span className={styles.mname}>
                                  {this.state.profile.get_email}
                                </span>
                              </span>
                            </div>
                            <div className={styles.catWrapper}>
                              <span className={styles.mail}>
                                <span className={styles.mvalue}>
                                  category:{" "}
                                </span>
                                <span className={styles.mname}>customer</span>
                              </span>
                            </div>
                            <div className={styles.orderWrapper}>
                              {/* <span className={styles.mail}><span className={styles.mvalue}>Number of orders:</span><span className={styles.mname}>0</span></span> */}
                            </div>
                            <div className={styles.chName}>
                              <span
                                className={styles.changeName}
                                onClick={this.edit}
                              >
                                Edit profile
                              </span>
                              {/* <span className={styles.changeName1}>Change image</span> */}
                            </div>
                          </div>
                        </MediaQuery>

                        <MediaQuery minWidth={1201}>
                          <div className={styles.pos} style={{ left: "33%" }}>
                            <div className={styles.nameWrapper}>
                              <span className={styles.actualname1}></span>
                              <span className={styles.actualValue}>
                                {this.state.profile.full_name}
                              </span>
                              <hr className={styles.nl} />
                            </div>
                            <div className={styles.emailWrapper}>
                              <span className={styles.mail}>
                                <span className={styles.mvalue}>email: </span>
                                <span className={styles.mname}>
                                  {this.state.profile.get_email}
                                </span>
                              </span>
                            </div>
                            <div className={styles.catWrapper}>
                              <span className={styles.mail}>
                                <span className={styles.mvalue}>
                                  category:{" "}
                                </span>
                                <span className={styles.mname}>customer</span>
                              </span>
                            </div>
                            <div className={styles.orderWrapper}>
                              {/* <span className={styles.mail}><span className={styles.mvalue}>Number of orders:</span><span className={styles.mname}>0</span></span> */}
                            </div>
                            <div className={styles.chName}>
                              <span
                                className={styles.changeName}
                                onClick={this.edit}
                              >
                                Edit profile
                              </span>
                              {/* <span className={styles.changeName1}>Change image</span> */}
                            </div>
                          </div>
                        </MediaQuery>
                      </div>

                      <div className={styles.cartSum} ref={this.cartSummary}>
                        {this.state.cartproducts.length > 0 ? (
                          <div>
                            <Header as="h2" color="grey">
                              <Icon name="tags" size="tiny" />
                              <Header.Content>Cart summary.</Header.Content>
                            </Header>
                            <hr className={styles.hl} />
                            <div className={styles.itemsWrapper}>
                              <div className={styles.cs}>
                                <span className={styles.tit}>
                                  Number of items:
                                </span>
                                <span className={this.state.nq}>
                                  {this.state.net_quantity}
                                </span>
                              </div>
                              <div className={styles.cs1}>
                                <span className={styles.tit1}>
                                  Total Price:
                                </span>
                                <span
                                  className={this.state.np}
                                >{`${new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "Tsh",
                                  minimumFractionDigits: 0,
                                }).format(this.state.net_price)}/=`}</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <Header as="h2" color="grey">
                              <Icon name="tags" size="tiny" />
                              <Header.Content>Cart summary.</Header.Content>
                            </Header>
                            <hr className={styles.hl} />
                            <div className={styles.itemsWrapper}>
                              <Header as="h4" color="grey">
                                <Header.Content>
                                  Your cart appear to be empty, add some
                                  products in your cart.
                                </Header.Content>
                              </Header>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className={styles.notiWrapper}
                        ref={this.notification}
                      >
                        <Header as="h2" color="grey">
                          <Icon name="tags" size="tiny" />
                          <Header.Content>Notification center</Header.Content>
                        </Header>
                        <hr className={styles.hl} />
                        <div className={styles.itemsWrapper}>
                          <Header as="h4" color="grey">
                            <Icon name="bars" />
                            <Header.Content>
                              Currenly you have no any notification.
                            </Header.Content>
                          </Header>
                        </div>
                      </div>

                      <div className={styles.passWrapper} ref={this.password}>
                        <Header as="h2" color="grey">
                          <Icon name="tags" size="tiny" />
                          <Header.Content>Change password.</Header.Content>
                        </Header>
                        <hr className={styles.hl} />
                        <form className={styles.passForm}>
                          <label className={styles.lab}>Old password</label>
                          <br />
                          <input
                            className={styles.inp}
                            type="password"
                            ref={this.inpOld}
                            onChange={(event) =>
                              this.setState({ oldPassword: event.target.value })
                            }
                          />
                          <br />
                          <label className={styles.lab1}>New password</label>
                          <br />
                          <input
                            className={styles.inp}
                            type="password"
                            ref={this.inp}
                            onChange={(event) =>
                              this.setState({ password: event.target.value })
                            }
                          />{" "}
                          <br />
                          <div className={styles.success} ref={this.success}>
                            <img
                              src="../static/images/check-mark.png"
                              width={12}
                            />
                            <span className={styles.neno}>
                              Password changes successful
                            </span>
                          </div>
                          <div className={styles.error} ref={this.err}>
                            <img
                              src="../static/images/warning.png"
                              width={12}
                            />
                            <span className={styles.neno1}>
                              {this.state.errorMessage}
                            </span>
                          </div>
                          <button
                            className={styles.btn}
                            type="submit"
                            onClick={this.changePassword}
                          >
                            Submit
                          </button>
                        </form>
                      </div>

                      <div
                        className={styles.editProfile}
                        ref={this.editProfile}
                      >
                        <Header as="h2" color="grey">
                          <Icon name="edit outline" size="tiny" />
                          <Header.Content>Edit Profile</Header.Content>
                        </Header>
                        <hr className={styles.hl} />
                        <Grid>
                          <Grid.Column width={8}>
                            <div className={styles.ediProfileWrapper}>
                              <label className={styles.jina}>USERNAME:</label>
                              <br />
                              <input
                                ref={this.updateUsername}
                                className={styles.jinaInp}
                                onChange={(event) =>
                                  this.setState({
                                    username: event.target.value,
                                  })
                                }
                              />
                            </div>
                          </Grid.Column>
                          <Grid.Column width={8}>
                            <div className={styles.ediProfileWrapper}>
                              <label className={styles.jina}>
                                CHANGE AVATAR:
                              </label>
                              <br />
                              {/* // YOU SHOULD GIVE THE CREDI TO THIS VIDEO
                                                // https://www.youtube.com/watch?v=BPUgM1Ig4Po 
                                                 Ukiangalia hii video utagundua jamaa jinsi alivyofanya
                                                 validation ya image using accept=images/* ... For more angalia
                                                 hiyo video.....    */}
                              <input
                                accept="images/*"
                                id="upload"
                                className={styles.upload}
                                type="file"
                                onChange={this.preview}
                              />
                              <label
                                ref={this.actualPreview}
                                htmlFor="upload"
                                className={styles.chan}
                                style={{
                                  backgroundImage: `url(http://127.0.0.1:8000${this.state.profile.profile_picture})`,
                                  backgroundSize: "100% 100%",
                                  backgroundRepeat: "no-repeat",
                                }}
                              >
                                <img
                                  src="../static/images/imag.png"
                                  width={25}
                                  height={25}
                                />
                              </label>
                            </div>
                          </Grid.Column>
                          <button
                            type="submit"
                            className={styles.sub}
                            onClick={this.editPro}
                          >
                            Save
                          </button>
                        </Grid>
                      </div>
                    </div>
                  </Grid.Column>
                </Grid>
              </div>
            </>
          ) : (
            <div style={{ paddingTop: "15%" }}>
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
                      src="../static/images/demon.gif"
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
                      <MediaQuery maxWidth={450}>
                        We don't accept anonymous user to view profile.
                        Login/Register here{" "}
                      </MediaQuery>
                      <MediaQuery minWidth={451}>
                        We don't accept anonymous user to view profile.
                        <br /> Login/Register here{" "}
                      </MediaQuery>
                      <br />
                      <button
                        style={{
                          marginTop: "1%",
                          fontWeight: "bold",
                        }}
                        className="btn btn-warning"
                        onClick={() => Router.push("/jisajili")}
                      >
                        Register
                      </button>
                      <button
                        style={{
                          marginLeft: "5%",
                          marginTop: "1%",
                          fontWeight: "bold",
                        }}
                        className="btn btn-info"
                        onClick={() => Router.push("/login")}
                      >
                        Login
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
                      src="../static/images/demon.gif"
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
                      We don't accept anonymous user to view profile. <br />{" "}
                      Login/Register here <br />
                      <button
                        style={{
                          marginTop: "1%",
                          fontWeight: "bold",
                        }}
                        className="btn btn-info"
                        onClick={() => Router.push("/register")}
                      >
                        Sign in
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
                      src="../static/images/demon.gif"
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
                      We don't accept anonymous user to view profile. <br />{" "}
                      Login/Register here <br />
                      <button
                        style={{
                          marginTop: "1%",
                          fontWeight: "bold",
                        }}
                        className="btn btn-info"
                        onClick={() => Router.push("/register")}
                      >
                        Sign in
                      </button>
                    </p>
                  </div>
                </div>
              </MediaQuery>
              {/* <Header
                color="grey"
                textAlign="center"
                as="h1"
                content="You should login to view your profile..."
              /> */}
            </div>
          )}
        </MediaQuery>
      </NavBar>
    );
  }
}

export default Profile;
