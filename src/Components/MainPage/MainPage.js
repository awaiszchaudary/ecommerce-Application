import React, { useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { itemsToShow } from "../utils/constants.utils";
import ItemCard from "../Cards/ItemCard1";

const MainPage = (props) => {
  const [items, setItems] = useState(itemsToShow);

  return (
    <>
      {props.show && <div className="div_banner"></div>}
      <div className="row">
        {items.map((t) => {
          return (
            <div className="col-md-3 offset-md-1 py-4">
              <ItemCard name={t.name} image={t.image} price={t.price} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainPage;
