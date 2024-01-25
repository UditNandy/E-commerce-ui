import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const navigate = useNavigate();
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <div>
          <img src={logo} />
        </div>
        <div className="logo-title">SHOPPER</div>
      </div>
      <div className="nav-menu">
        <div
          onClick={() => {
            setMenu("shop");
            navigate("/");
          }}
          className="category"
        >
          Shop
          {menu === "shop" ? <hr /> : <></>}
        </div>
        <div
          onClick={() => {
            setMenu("men");
            navigate("/men");
          }}
          className="category"
        >
          Men
          {menu === "men" ? <hr /> : <></>}
        </div>
        <div
          onClick={() => {
            setMenu("women");
            navigate("/women");
          }}
          className="category"
        >
          Women
          {menu === "women" ? <hr /> : <></>}
        </div>
        <div
          onClick={() => {
            setMenu("kids");
            navigate("/kids");
          }}
          className="category"
        >
          Kids
          {menu === "kids" ? <hr /> : <></>}
        </div>
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <div>
          <Link to="/cart">
            <img src={cart}></img>
          </Link>
        </div>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
