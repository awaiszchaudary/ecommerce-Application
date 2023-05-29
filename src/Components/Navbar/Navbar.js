import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart, BsFillBellFill, BsHouseFill } from "react-icons/bs";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid main">
      <div className="row">
        <div className="col-md-1">
          <h3 className="nav_head1" onClick={() => navigate("/")}>
            e-commerce
          </h3>
        </div>
        <div className="col-md-1">
          <BsCart className="icon_trolly" onClick={() => navigate("/mycart")} />
        </div>
        {
          localStorage.getItem('token') && 
          <div className="col-md-1">
            <BsHouseFill className="icon_trolly" onClick={() => navigate("/cart")} />
          </div>
        }
        {!localStorage.getItem("token") ? (
          <div className="offset-md-7 col-md-1">
            <BsFillBellFill className="icon_bell" />
          </div>
        ) : (
          <div className="offset-md-5 col-md-1">
            <BsFillBellFill className="icon_bell" />
          </div>
        )}
        {localStorage.getItem("token") && (
          <div className="col-md-1">
            <p>
              {localStorage.getItem("firstname")}
            </p>
          </div>
        )}
        
        {localStorage.getItem("token") && (
          <div className="col-md-1" >
            <img className="image" src={localStorage.getItem("image")} />
          </div>
        )}
        {!localStorage.getItem("token") ? (
          <div className="col-md-1">
            <button
              className="nav_button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Signin
            </button>
          </div>
        ) : (
          <div className="col-md-1">
            <button
              className="nav_button"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("id");
                localStorage.removeItem("firstname");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
