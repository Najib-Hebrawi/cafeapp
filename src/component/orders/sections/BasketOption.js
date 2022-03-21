import React from "react";
import './BasketOption.css';
import {useHistory} from "react-router-dom";



function BasketOption(props){
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    let history = useHistory();


    return (
        <aside className="block col-1">
            <h3>Indkøbskurv</h3>
            <div>
                {cartItems.length === 0 && <div>Din indkøbskurv er tom</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>

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
                        <div className="row">
                            <button  className={"btn-check"} onClick={() => history.push('/order_view')}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}


export default BasketOption