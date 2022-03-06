import React from "react";
import "./ItemRow.css"
import {useHistory} from "react-router-dom";

function ItemRow({title, subject, price}){
    const history = useHistory();
    return(
        //todo
        // <div className="itemRow" onClick={()=>history.push('/menu')}>
        <div className="itemRow" >
            <span>
                <h4 className="itemRow__title">{title}</h4>
            <div className="itemRow__subject">
                <h5>{subject}</h5>
            </div>
            </span>
            <p className="itemRow__price">{price}</p>
        </div>
    )
}

export default ItemRow