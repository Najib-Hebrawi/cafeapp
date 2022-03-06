import React from "react";
import "./SidebarOption.css"

function SidebarOption({title}){
    return(
        <div className='sidebarOption'>
            <h3>{title}</h3>
        </div>
    );


}

export default SidebarOption