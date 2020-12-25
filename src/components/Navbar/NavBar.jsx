import React from 'react';
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const NavBar = (props) => {

    let sidebarElements = props.sidebars.sidebar.map(s => <Sidebar name={s.name} id={s.name} key={s.id} img={s.img}/>)
    return <nav className={s.nav}>
        <ul>
            <div className={s.item}>
                <li><NavLink to='/profile' activeClassName={s.activeLink} className={s.img_n}><div className={s.a}><span>Profile</span></div></NavLink></li>
            </div>
            <div className={s.item}>
                <li><NavLink to='/dialogs' activeClassName={s.activeLink} className={s.img_n}><div className={s.a}><span>Messages</span></div></NavLink></li>
            </div>
            <div className={s.item}>
                <li><NavLink to='/news' className={s.img_n}><div className={s.a}><span>News</span></div></NavLink></li>
            </div>
            <div className={s.item}>
                <li><NavLink to='/music' className={s.img_n}><div className={s.a}><span>Music</span></div></NavLink></li>
            </div>
            <div className={s.item}>
                <li><NavLink to='/settings' className={s.img_n}><div className={s.a}><span>Settings</span></div></NavLink></li>
            </div>
            <div className={s.item}>
                <li><NavLink to='/users' className={s.img_n}><div className={s.a}><span>Users</span></div></NavLink></li>
            </div>
            <div>
                <div className={s.friends}>
                    Friends
                </div>
                <div>
                    {sidebarElements}
                </div>
            </div>
        </ul>
    </nav>
}

export default NavBar;