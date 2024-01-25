import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/breadcrum/breadcrum";
import { ProductDisplay } from "../components/productDisplay/productDisplay";
import { DescriptionBox } from "../components/descriptionBox/descriptionBox";
import { RelatedProducts } from "../components/relatedProducts/relatedProducts";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};
