import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Sidebar.module.css";

const NavBar = (props) => {
    return <div className={s.sidebarFriends}>
        <div className={s.friendsItem}>
            <img src={props.img} alt=""/>
        </div>
        <NavLink to={props.id}>{props.name}</NavLink>
    </div>

}

export default NavBar;