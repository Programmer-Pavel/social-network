import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import css from "./../../Profile/My posts/Post/Post.module.css";

const DialogItem = (props) => {
    return <div className={s.dialog + " " + s.active}>
        <div>
            <div className={css.item}>
                <img src={props.img} alt=""/>
                {props.message}
            </div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
};

export default DialogItem;