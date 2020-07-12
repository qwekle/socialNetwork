import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className={s.navbar}>
            <ul>
                <li><NavLink className={s.navbarLink} activeClassName={s.active} to='/profile'>Profile</NavLink></li>
                <li><NavLink className={s.navbarLink} activeClassName={s.active} to='/dialogs'>Message</NavLink></li>
                <li><NavLink className={s.navbarLink} activeClassName={s.active} to='#'>News</NavLink></li>
                <li><NavLink className={s.navbarLink} activeClassName={s.active} to='#'>Music</NavLink></li>
                <li><NavLink className={s.navbarLink} activeClassName={s.active} to='#'>Settings</NavLink></li>
            </ul>
        </div>
    )
}


export default Navbar;