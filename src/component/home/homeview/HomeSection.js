import React from "react";
import './HomeSection.css'
import {MenuButton} from "../../Buttons/MenuButton";

function HomeSection() {
    return (
        <div className='home-container'>
            <h1>Velkommen til Crepe Cafe</h1>

            <div className="home-section-btn">
                    <MenuButton className='btn' buttonStyle='btn--outline' buttonSize='btn--large'> Se Menu</MenuButton>
            </div>
        </div>


    )
    
}

export default HomeSection;