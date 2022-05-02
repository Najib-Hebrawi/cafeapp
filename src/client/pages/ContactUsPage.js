import React from "react";
import './ContactUsPage.css'

function ContactUsPage(){

    return(
        <div >
            <img className="img_view"
                src={"images_KontaktOs/KontaktOsImage.jpg"}
                alt="a image of a frugt"
            />

            <div className="grid-container">
                <button
                    id="b1"
                    type="button"
                    className="grid-item"
                    onClick={() => window.location = 'tel:+451234567'}
                >Kontakt os  +4512345678</button>

                <button
                    id="b2"
                    type="button"
                    className="grid-item"
                    onClick={() => window.location = 'mailto:info@crepecafe'}
                >Skriv til os info@crepecafe.dk</button>

                <button
                    id="b3"
                    type="button"
                    className="grid-item">
                    Find os København</button>

            </div>


        </div>
    )
}

export default ContactUsPage