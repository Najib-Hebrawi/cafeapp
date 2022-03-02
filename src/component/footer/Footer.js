import React from "react";
import {Button} from "../Buttons/Button";
import './Footer.css'

function Footer(){
    return(
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best
                </p>

                <p className="footer-subscription-text">
                    you can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                        <Button>Subscribe</Button>
                    </form>

                </div>
            </section>

            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer