import React, { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../context/shopContext";
import remove_icon from "../assets/cart_cross_icon.png";

export const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} className="cartIcon-productIcon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartItems-removeIcon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  src={remove_icon}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-totalItems">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-totalItems">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-totalItems">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cartItems-promoCode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartItems-promoBox">
            <input placeholder="promo code"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
