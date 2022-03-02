import React from "react";
import './HomeSection.css'
import {Button} from "../Buttons/Button";

function HomeSection() {
    return (
        <div className='home-container'>
            <h1>Velkommen til Crepe Cafe</h1>

            <div className="home-section-btn">
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large' > Se Menu</Button>
            </div>
        </div>

    )
    
}

export default HomeSection;