import React, { useContext } from "react";
import "./productDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/shopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-list">
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_dull_icon}></img>
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident at
          voluptates sequi, veritatis vel suscipit est autem libero fugiat quam
          deleniti quod minima accusantium rerum consequuntur voluptate eos odit
          minus.
        </div>
        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>l</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productDisplay-right-category">
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="productDisplay-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};
