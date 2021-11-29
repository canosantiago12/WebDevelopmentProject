import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from 'react-router-dom';
import { LoginPage } from '../pages/PageStyle';

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

const Login = ({ currentUser }) => {
  const form = useRef();
  const checkBtn = useRef();
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          history("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

    return (
        <LoginPage>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-container m-auto glassCard">
                    <h1 className="text-center">Log in into your account</h1>
                      <Form onSubmit={handleLogin} ref={form}>
                          <div className="form-group">
                              <label htmlFor="username">Username</label>
                              <Input
                              type="text"
                              className="form-control"
                              name="username"
                              value={username}
                              onChange={onChangeUsername}
                              validations={[required]}
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
                              validations={[required]}
                              />
                          </div>

                          <div className="form-group">
                              <button className="btn btn-primary btn-block mt-3" disabled={loading}>
                                  {loading && (
                                      <span className="spinner-border spinner-border-sm"></span>
                                  )}
                                  <span>Login</span>
                              </button>
                          </div>

                          {message && (
                              <div className="form-group">
                                  <div className="alert alert-danger mt-2" role="alert">
                                      {message}
                                  </div>
                              </div>
                          )}
                          <CheckButton style={{ display: "none" }} ref={checkBtn} />
                      </Form>
                  </div>
                </div>
              </div>
            </div>
        </LoginPage>
    );
};

export default Login;