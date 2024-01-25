import React from "react";
import { Hero } from "../components/hero/hero";
import { Popular } from "../components/popular/popular";
import { Offers } from "../components/offers/offers";
import { NewCollections } from "../components/newCollections/newCollections";
import { NewsLetter } from "../components/newsLetter/newsLetter";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <div>
        <NewCollections />
      </div>
      <NewsLetter />
    </div>
  );
};
