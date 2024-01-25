import React from "react";
import "./descriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-navBox"> Description</div>
        <div className="descriptionBox-navBox fade"> Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dolorum nam, assumenda nulla nostrum exercitationem et facilis
          incidunt maxime aperiam at, amet minus quas, recusandae deserunt
          ducimus perferendis enim minima?Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Hic vitae voluptas nisi. Laudantium
          ratione enim tenetur minus! Assumenda dolorum laborum dolore veritatis
          quia inventore, iure quo sapiente nihil rerum et.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit quos neque, officiis iure recusandae voluptate, dolore
          delectus adipisci sequi suscipit iste deleniti fugiat consequatur
          amet, est id pariatur quod?
        </p>
      </div>
    </div>
  );
};
