import React, {Component, useState} from "react";
import '../App.css';
import './OrderCheckout.css'
import axios from "axios";
import OrderOverviewOption from "../component/orders/sections/OrderOverviewOption";
import {useHistory} from "react-router-dom";


const OrderCheckout = () =>{

    let history = useHistory();
    const [username, addNames] = useState('')
    const [phoneNumber, addPhoneNumbers] = useState('')
    const [userComment, addComments] = useState('')
    const [orderId, addOrdersId] = useState(Date.now())
    const products = JSON.parse(localStorage.getItem("message"));

    localStorage.setItem("orderId", orderId.toString());


    function addOrderId(event){
        addOrdersId(event.target.value)
    }

    function addName(event) {
        addNames(event.target.value)
    }

    function addPhoneNumber(event) {
        addPhoneNumbers(event.target.value)
    }

    function addComment(event) {
        addComments(event.target.value)
    }


    function onSubmit(){
        history.push('/done_page')
        const addOrder = {
            orderId:orderId,
            username: username,
            phoneNumber: phoneNumber,
            userComment: userComment
        }
        axios.post('http://localhost:4000/app/order',addOrder)
            .then(response => console.log(response.data))
        this.setState({
            orderId:'',
            username:'',
            phoneNumber:'',
            userComment:''
        })




    }
   //console.log(localStorage.getItem("message"));
    console.log(products.valueOf())




    return(
        <div className="body">
            <form onSubmit={onSubmit} >
                {/*write user info*/}
                <div className={"input_section"}>

                    {/*<input*/}
                    {/*    className={"input"}*/}
                    {/*    type={"text"}*/}
                    {/*    onChange={addOrderId}*/}
                    {/*    value={orderId}*/}
                    {/*    placeholder={"Indtast dit navn"}/>*/}
                    <input
                        className={"input"}
                        type={"text"}
                        onChange={addName}
                        value={username}
                        placeholder={"Indtast dit navn"}/>
                    <input
                        className={"input"}
                        type={"text"}
                        value={phoneNumber}
                        onChange={addPhoneNumber}

                        placeholder={"Indtast dit telefonnummer"}/>
                    <textarea
                        onChange={addComment}
                        value={userComment}
                        className={"input_comment"}
                        placeholder={"Indtast din kommentar"}/>
                </div>
                {/*show item */}
                <div className="shopping_sections">
                    <OrderOverviewOption  cartItems={products}/>
                    <button type='submit' onClick={onSubmit} >Godkend ordre</button>
                </div>
            </form>
        </div>
    )

}

export default OrderCheckout;
