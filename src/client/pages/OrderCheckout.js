import React, { useState } from "react";
import "./OrderCheckout.css";
import axios from "axios";
import OrderOverviewOption from "../component/2_order/sections/OrderOverviewOption";
import { useHistory } from "react-router-dom";

const OrderCheckout = () => {
  let history = useHistory();
  const [username, addNames] = useState("");
  const [phoneNumber, addPhoneNumbers] = useState("");
  const [userComment, addComments] = useState("");
  const orderId = Date.now();
  const cartItems = JSON.parse(localStorage.getItem("message"));
  localStorage.setItem("orderId", orderId.toString());
  let productName = [];
  const iterator = cartItems.values();
  //https://www.geeksforgeeks.org/javascript-array-values/#:~:text=The%20array.,the%20elements%20of%20the%20array.&text=Return%20values%3A,elements%20of%20the%20given%20array.
  for (let elements of iterator) {
    productName.push(elements.name);
  }
  let productQuantity = [];
  const iterators = cartItems.values();
  for (let elements of iterators) {
    productQuantity.push(elements.qty);
  }

  function addName(event) {
    addNames(event.target.value);
  }

  function addPhoneNumber(event) {
    addPhoneNumbers(event.target.value);
  }

  function addComment(event) {
    addComments(event.target.value);
  }

  function onSubmit() {
    const addOrder = {
      orderId: orderId,
      username: username,
      phoneNumber: phoneNumber,
      userComment: userComment,
      productName: productName,
      productQuantity: productQuantity,
    };
    axios
      .post("http://localhost:4000/api/orders", addOrder)
      .then(
        (response) => history.push("/done_page")
        //alert(response.data)
      )
      .catch((error) => {
        let message =
          typeof error.response !== "undefined"
            ? error.response.data.message
            : error.message;
        alert(message);
        //console.warn("error", message);
      });
  }

  return (
    <div className="body">
      {/*write user info*/}
      <div className={"input_section"}>
        <input
          className={"input"}
          type={"text"}
          onChange={addName}
          value={username}
          placeholder={"Indtast dit navn"}
        />
        <input
          className={"input"}
          type={"text"}
          value={phoneNumber}
          onChange={addPhoneNumber}
          placeholder={"Indtast dit telefonnummer"}
        />
        <textarea
          onChange={addComment}
          value={userComment}
          className={"input_comment"}
          placeholder={"Indtast din kommentar"}
        />
      </div>
      {/*show item */}
      <div className="shopping_sections">
        <OrderOverviewOption cartItems={cartItems} />
        <button type="submit" onClick={onSubmit}>
          Godkend ordre
        </button>
      </div>
    </div>
  );
};

export default OrderCheckout;
