import React from 'react';
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const NavBar = (props) => {

    let sidebarElements = props.sidebars.sidebar.map(s => <Sidebar name={s.name} id={s.name} key={s.id} img={s.img}/>)
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div>
            <div className={s.friends}>
                Friends
            </div>
            <div>
                {sidebarElements}
            </div>
        </div>
    </nav>
}

export default NavBar;