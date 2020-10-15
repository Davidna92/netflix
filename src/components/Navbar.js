import React, { useEffect, useState } from 'react';
import './Navbar.css';


//Need to add search bar


const Navbar = () => {

    const [bar, handleBar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 110) {
                handleBar(true);
            } else handleBar(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`navbar ${bar && "navbar__black"}`}>
            <img
                className="nav__logo"
                src={require("../images/logo.png")}
                alt="netflix logo" />
        </div>
    )
}

export default Navbar;