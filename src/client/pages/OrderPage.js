import React, { useState } from "react";
import "./OrderPage.css";
import data from "../component/order/model/data";
import ProductOption from "../component/order/sections/ProductOption";
import BasketOption from "../component/order/sections/BasketOption";

function OrderPage() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const category = ["Crepe", "Frugtsalat", "Cocktail", "Milkshake", "Kaffe"];
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);
  //https://stackoverflow.com/questions/59095295/react-js-localstorage-value-object
  localStorage.setItem("message", JSON.stringify(cartItems));
  const localProducts = JSON.parse(localStorage.getItem("message"));

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <div className="body">
        {/*show category*/}
        <div className="sidebar">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            {category[0]}
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            {category[1]}
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            {category[2]}
          </button>
        </div>

        {/*show items*/}
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            {products.slice(0, 5).map((product) => (
              <ProductOption
                key={product.id}
                product={product}
                onAdd={onAdd}
              ></ProductOption>
            ))}
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            {products.slice(5, 6).map((product) => (
              <ProductOption
                key={product.id}
                product={product}
                onAdd={onAdd}
              ></ProductOption>
            ))}
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            {products.slice(6, 8).map((product) => (
              <ProductOption
                key={product.id}
                product={product}
                onAdd={onAdd}
              ></ProductOption>
            ))}
          </div>
        </div>

        {/*show basket card*/}
        <div className="shopping_section">
          <BasketOption
            cartItems={localProducts}
            onAdd={onAdd}
            onRemove={onRemove}
          ></BasketOption>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
