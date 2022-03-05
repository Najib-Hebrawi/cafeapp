import React from "react";
import {Button} from "../Buttons/Button";
import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>

            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        {/*todo add logo*/}
                        <div className='footer-logo'>
                            <h3> Crepe Cafe</h3>
                            <Link to='/' className='social-logo'>
                                <i className='fas fa-utensils'/>
                            </Link>
                        </div>

                    </div>
                    <div class='footer-link-items'>
                        <Link to='/'>Forside</Link>
                        <Link to='/'>Menu</Link>
                        <Link to='/'>Om os</Link>
                        <Link to='/'>Kontakt os</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h4>Åbningstider</h4>
                        <h5>Søn-Tors : 12.00 - 23.00</h5>
                        <h5>Fre-Lør  : 12.00 - 00.00</h5>
                    </div>
                    <div class='footer-link-items'>
                        <h3>Følg os på:</h3>
                        <div className="social-media">
                            <div className="social-media-wrap">
                                <Link
                                    class='social-icon-link facebook'
                                    to='/'
                                    target='_blank'
                                    aria-label='Facebook'
                                >
                                    <i className='fab fa-facebook-f'/>
                                </Link>
                                <Link
                                    class='social-icon-link instagram'
                                    to='/'
                                    target='_blank'
                                    aria-label='Instagram'
                                >
                                    <i className='fab fa-instagram'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class='website-rights'>
                <small className='website-rights'>Crepe Cafe © 2020</small>
            </section>
        </div>
    );
}

export default Footer


/*
*    <section className="footer-subscription">
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



*
* */