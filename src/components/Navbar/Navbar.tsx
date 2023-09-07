import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const profileURL = '/profile';
    const messageURL = '/message';
    const newsURL = '/news';
    const musicURL = '/music';
    const settingsURL = '/settings';

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={profileURL} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={messageURL} activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={newsURL} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={musicURL} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={settingsURL} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
