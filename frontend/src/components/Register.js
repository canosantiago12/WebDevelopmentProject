import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { RegisterPage } from "../pages/PageStyle";
import pp1 from "../assets/profile-pictures/profilePreset_1.jpg"
import pp2 from "../assets/profile-pictures/profilePreset_2.jpg"
import pp3 from "../assets/profile-pictures/profilePreset_3.jpg"
import pp4 from "../assets/profile-pictures/profilePreset_4.jpg"
import pp5 from "../assets/profile-pictures/profilePreset_5.jpg"
import pp6 from "../assets/profile-pictures/profilePreset_6.jpg"
import pp7 from "../assets/profile-pictures/profilePreset_7.jpg"
import pp8 from "../assets/profile-pictures/profilePreset_8.jpg"
import pp9 from "../assets/profile-pictures/profilePreset_9.jpg"
import AuthService from "../services/auth.service";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = ({ currentUser }) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [showProfilePictures, setShowProfilePictures] = useState(false);
  const [profilePicture, setProfilePicture] = useState();

  const onClickToggleProfilePicture = () => {
    setShowProfilePictures(!showProfilePictures);
  };

  const onClickProfilePicture = (pp) => {
    setShowProfilePictures(!showProfilePictures);
    setProfilePicture(pp)
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password, profilePicture).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

    return (
        <RegisterPage>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12"></div>
                  <div className="card card-container m-auto glassCard">
                      <img
                      src={profilePicture ? profilePicture :"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}
                      alt="profile-img"
                      className="profile-img-card-register"
                      onClick={onClickToggleProfilePicture}
                      />
                      <p className="fw-lighter text-center fs-6 text-white-50">*click on the image to <br/>change profile picture</p>
                      {showProfilePictures ? 
                        <div className="modal" style={{display: "block"}} tabIndex="-1">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Select Your Profile Picture</h5>
                                <button type="button" className="btn-close" onClick={onClickToggleProfilePicture} aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <div className="row">
                                  <div className="col-md-4">
                                    <img src={pp1} className="ppImage" onClick={() => onClickProfilePicture(pp1)} aria-hidden alt="profile-picture-1" />
                                  </div>
                                  <div className="col-md-4">
                                    <img src={pp4} className="ppImage" onClick={() => onClickProfilePicture(pp4)} aria-hidden alt="profile-picture-2" />
                                  </div>
                                  <div className="col-md-4">
                                    <img src={pp2} className="ppImage" onClick={() => onClickProfilePicture(pp2)} aria-hidden alt="profile-picture-3" />
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col-md-4">
                                    <img src={pp3} className="ppImage" onClick={() => onClickProfilePicture(pp3)} aria-hidden alt="profile-picture-4" />
                                  </div>
                                  <div className="col-md-4">
                                    <img src={pp5} className="ppImage" onClick={() => onClickProfilePicture(pp5)} aria-hidden alt="profile-picture-5" />
                                  </div>
                                  <div className="col-md-4">
                                    <img src={pp6} className="ppImage" onClick={() => onClickProfilePicture(pp6)} aria-hidden alt="profile-picture-6" />
                                  </div>
                                </div>
                                <div className="row mt-2">
                                  <div className="col-md-4">
                                    <img src={pp7} className="ppImage" onClick={() => onClickProfilePicture(pp7)} aria-hidden alt="profile-picture-7" />
                                  </div>
                                  <div className="col-md-4">
                                    <img src={pp8} className="ppImage" onClick={() => onClickProfilePicture(pp8)} aria-hidden alt="profile-picture-8" />
                                  </div>
                                  <div className="col-md-4">
                                    <img src={pp9} className="ppImage" onClick={() => onClickProfilePicture(pp9)} aria-hidden alt="profile-picture-9" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      :
                        <></>
                      } 
                      <Form onSubmit={handleRegister} ref={form}>
                          {!successful && (
                              <div>
                              <div className="form-group">
                                  <label htmlFor="username">Username</label>
                                  <Input
                                  type="text"
                                  className="form-control"
                                  name="username"
                                  value={username}
                                  onChange={onChangeUsername}
                                  validations={[required, vusername]}
                                  />
                              </div>

                              <div className="form-group">
                                  <label htmlFor="email">Email</label>
                                  <Input
                                  type="text"
                                  className="form-control"
                                  name="email"
                                  value={email}
                                  onChange={onChangeEmail}
                                  validations={[required, validEmail]}
                                  />
                              </div>

                              <div className="form-group">
                                  <label htmlFor="password">Password</label>
                                  <Input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  value={password}
                                  onChange={onChangePassword}
                                  validations={[required, vpassword]}
                                  />
                              </div>

                              <div className="form-group">
                                  <button className="btn btn-primary btn-block mt-3">Sign Up</button>
                              </div>
                              </div>
                          )}

                          {message && (
                              <div className="form-group">
                                  <div
                                      className={ successful ? "alert alert-success mt-2" : "alert alert-danger mt-2" }
                                      role="alert"
                                  >
                                      {message}
                                  </div>
                              </div>
                          )}
                          <CheckButton style={{ display: "none" }} ref={checkBtn} />
                      </Form>
                  </div>
                </div>
              </div>
        </RegisterPage>
    );
};

export default Register;