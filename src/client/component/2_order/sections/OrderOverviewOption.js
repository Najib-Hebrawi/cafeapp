import React from "react";
import './BasketOption.css';

function OrderOverviewOption(props){
    const { cartItems} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    return (
        <aside className="block col-1">
            <h3>Ordreoversigt</h3>
            <div>

                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2 text-right">
                            {item.qty} x {item.price} kr.
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">{itemsPrice} kr.</div>
                        </div>



                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>{itemsPrice} kr.</strong>
                            </div>
                        </div>
                        <hr />
                    </>
                )}
            </div>
        </aside>
    );
}



export default OrderOverviewOption;