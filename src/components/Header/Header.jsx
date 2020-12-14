import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import photo from "../../assets/images/user.png";

const Header = (props) => {

    return <header className={s.header}>
        <img src="https://miro.medium.com/max/2400/1*3MveTPrDuM_v_Fx0y1FJmg.png" alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to='/login' className={s.loginBlock}>login</NavLink>}
                <div>
                {/*    if ({props.photos.small === null}) {*/}
                {/*    <img src={ photo}/>*/}
                {/*} else {*/}
                {/*    <img src={props.photos.small}/>*/}
                {/*}*/}

                    {/*<img src={props.photos.small}/>*/}
                </div>
        </div>
    </header>
}

export default Header;