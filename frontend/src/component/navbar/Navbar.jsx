import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
function Navbar() {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" height="50px" />
          <p>shopify</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
              Home
            </Link>
            {menu === "home" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/men"
            >
              Mens
            </Link>
            {menu === "mens" ? <hr /> : <></>}{" "}
          </li>

          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/women"
            >
              {" "}
              Women
            </Link>
            {menu === "women" ? <hr /> : <></>}{" "}
          </li>

          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#626262" }}
              to="/kid"
            >
              {" "}
              Kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}{" "}
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to="/login">
            <button>LogIn</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="" height="30px" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
