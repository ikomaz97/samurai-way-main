import React from 'react';
import s from './Navbar.module.css'

// let s ={
//     'nav': 'Navbar_nav__LK3K4',
//     'item': 'Navbar_item__4MjPa',
// }

// let c1 = 'item'
// let c2 = 'active'
//
// let classesNew = `${c1} ${c2}`;

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Message</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;