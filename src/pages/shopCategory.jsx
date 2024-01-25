import React, { useContext } from "react";
import "./css/shopCategory.css";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import { ShopContext } from "../context/shopContext";
import { Item } from "../components/item/item.jsx";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopCategory">
      <img className="shopCategory-banner" src={props.banner}></img>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon}></img>
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category)
            return (
              <div className="item-inside">
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  newPrice={item.new_price}
                  oldPrice={item.old_price}
                ></Item>
              </div>
            );
          else return null;
        })}
      </div>
      <div className="shopCategory-loadMore">Expolore More</div>
    </div>
  );
};
