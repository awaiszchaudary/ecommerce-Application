import { useLayoutEffect, useState } from "react";
import ItemCard from "../Components/Cards/ItemCard1";
const MyCart = () => {

  const [select, setSelect] = useState([]);

  useLayoutEffect(() => {
    getAllItems();
    
  }, []);

  const getAllItems = () => {
    const seletedItems = localStorage.getItem('cart'); 
    //console.log(JSON.parse(seletedItems));
    const selec = JSON.parse(seletedItems);
    setSelect(selec);
    //const ssl = JSON.parse(localStorage.getItem('cart')); 
    
  };


  //console.log(JSON.parse(ssl));

  const deleteChangeHandler = (sil) => {
    const _selectedList = select.filter((l) => l.name !== sil.name);
    localStorage.setItem('cart', JSON.stringify(_selectedList));
    getAllItems();
  };

  


  return (
    <div>
       {select.length !== 0 ? (
        <h2>Item in your cart</h2>
      ) : (
        <h2>No items in your cart</h2>
      )}
      {select &&
        select.map((sil) => {
          return (
            <div
              className="row"
              style={{ display: "inline-block", paddingLeft: "20px" }}
            >
              <div className="col-md-3 offset-md-1 py-4">
                <ItemCard
                  name={sil.name}
                  image={sil.image}
                  price={sil.price}
                />
                <button
                  className="btn"
                  onClick={() => {
                    deleteChangeHandler(sil);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })} 
    </div>
  );
};

export default MyCart;

/*
onClick={() => {
                    deleteItemHandler(sil);
                  }}
*/