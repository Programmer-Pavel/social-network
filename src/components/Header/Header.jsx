import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className={s.header}>
        <div>
            <div className={s.head}>
                <div>
                    <img src="https://miro.medium.com/max/2400/1*3MveTPrDuM_v_Fx0y1FJmg.png" alt=""/>
                </div>
                <div className={s.nameOfSite}>Community</div>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                    :<NavLink to='/login' className={s.loginBlock}>login</NavLink>}
            </div>
        </div>
    </header>
}

export default Header;