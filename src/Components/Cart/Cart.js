import { useState, useEffect, useLayoutEffect } from "react";
import { itemsToShow } from "../utils/constants.utils";
import ItemCard from "../Cards/ItemCard";
import ItemCard1 from "../Cards/ItemCard1";
import { BsCart } from "react-icons/bs";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";

const Cart = (props) => {
  const [items, setItems] = useState(itemsToShow);
  const [cartItems, setCartItems] = useState([]);


  useLayoutEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    let jsonItems = localStorage.getItem("cart");
    if(!jsonItems) return setCartItems([]);
    setCartItems(JSON.parse(jsonItems));
  };

  const getItems = (n, i, p) => {
    //setSelectedItems([...selectedItems, { name: n, image: i, price: p }]);
    //console.log(selectedItems);
    //let localItem = localStorage.getItem("selectItem");
    //if (!localItem) return;
    // list.push({ name: n, image: i, price: p });
    // var lis = JSON.stringify(list);
    // localStorage.setItem("selectItem", lis);
  };


  /*const deleteItemHandler = (sil) => {
    const _list = selectedItems.filter((item) => sil.name != item.name);
    setSelectedItems(_list);
  };*/

  return (
    <>
      <h2 className="heading">Available items</h2>
      <div className="row">
        {items.map((t) => {
          return (
            <div className="col-md-3 offset-md-1 py-4">
              <ItemCard
                name={t.name}
                image={t.image}
                price={t.price}
                getItems={getItems}
              />
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default Cart;
