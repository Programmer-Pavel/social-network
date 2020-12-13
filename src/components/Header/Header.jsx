import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://miro.medium.com/max/2400/1*3MveTPrDuM_v_Fx0y1FJmg.png" alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to='/login' className={s.loginBlock}>login</NavLink>}
        </div>
    </header>
}

export default Header;