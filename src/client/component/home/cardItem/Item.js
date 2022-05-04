import { Link } from "react-router-dom";
import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <>
      <li className="card_items">
        <Link className="item_link" to={props.path}>
          <figure className="item_img_wrap">
            <img className="item_img" alt="crepe cafe images" src={props.src} />
          </figure>
          <div className="item_info">
            <h5 className="item_text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Item;
