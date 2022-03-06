import React from "react";
import "./Sidebar.css"
import SidebarOption from "./SidebarOption";



function Sidebar(){
    return(
            <div className="sidebar">
                <h2 className="header">Kategorier</h2>
                <SidebarOption
                    title="Crepe"
                    selected={true}/>

                <SidebarOption
                    title="Frugtsalat" />

                <SidebarOption
                    title="Cocktail" />

                <SidebarOption
                    title="Milkshake"/>

                <SidebarOption
                    title="Kaffe"/>

            </div>


    );
}

export default Sidebar