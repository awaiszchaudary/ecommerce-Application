import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { BsFillPersonXFill } from "react-icons/bs";
import { FcKey } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";

//

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [check, setCheck] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);

  const navigate = useNavigate();

  /*useEffect(() => {
    const getResponse = async () => {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
          // expiresInMins: 60, // optional
        }),
      }).then((res) => {
        res.json().then((data) => data && setResult(data));
      });
    };
    getResponse();
  }, []);*/

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          {
            data.message !== "Invalid credentials" &&
              localStorage.setItem("firstname", data.firstName);
          }
          {
            data.message !== "Invalid credentials" &&
              localStorage.setItem("id", data.id);
          }
          {
            data.message === "Invalid credentials" && setCheck(false);
          }
          {
            data.message !== "Invalid credentials" &&
              localStorage.setItem("image", data.image);
          }
          console.log(data);
          {
            data.message !== "Invalid credentials" &&
              localStorage.setItem("token", JSON.stringify(data.token));
          }
          {
            localStorage.getItem("token") && navigate("/cart");
          }
          {
            localStorage.getItem("token") && setShowSpinner(false);
          }
        });
      })
      .catch((err) => {});
  };

  return (
    <div className="container container_div">
      {showSpinner === true ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <form className="form_style" onSubmit={submitFormHandler}>
          <div className="row">
            {check === false && (
              <div className="alert alert-danger" role="alert">
                Login failed <BsFillPersonXFill className="login" />
              </div>
            )}
            <div className="col-md-5 image_div"></div>
            <div className="col-md-7 cont">
              <div className="row cont">
                <div className="col-md-1 py-3">
                  <h3>Login</h3>
                </div>
                <div className="col-md-4">
                  <FcKey className="cart_logo" />
                </div>
                <div className="offset-md-6"></div>
                <div className="px-5 col-md-4">
                  <label className="label_style">
                    <b>Username</b>
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={usernameChangeHandler}
                  />
                </div>
                <div className="px-5 col-md-4">
                  <label className="label_style">
                    <b>Password</b>
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={passwordChangeHandler}
                  />
                </div>
                <div className="col-md-12 button">
                  <button type="submit" className="btnstyle">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signin;
