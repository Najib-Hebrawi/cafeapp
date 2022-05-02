import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "../Buttons/Button";
import './Navbar.css';


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect( () => {
        showButton()
    }, []);

    window.addEventListener('resize',showButton)


        return(
            <>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            Crepe Cafe <i class="fas fa-utensils"></i>
                        </Link>

                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Forside
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                                    Menu
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about_us' className='nav-links' onClick={closeMobileMenu}>
                                    Om os
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact_us' className='nav-links' onClick={closeMobileMenu}>
                                    Kontakt os
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/order_side' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Bestil nu
                                </Link>
                            </li>
                        </ul>
                        {button  && <Button >Bestil nu</Button>}


                    </div>
                </nav>
            </>

        )
}

export default Navbar