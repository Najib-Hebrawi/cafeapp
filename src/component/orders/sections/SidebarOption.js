import React from "react";
import "./SidebarOption.css"

function SidebarOption({title,selected}){
    return(
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <h3>{title}</h3>

        </div>
    );
}

export default SidebarOption