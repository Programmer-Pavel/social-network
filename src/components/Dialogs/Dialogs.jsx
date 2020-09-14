import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Victor' id='1'/>
                <DialogItem name='Dima' id='2'/>
                <DialogItem name='Victoria' id='3'/>
                <DialogItem name='Alina' id='4'/>
                <DialogItem name='Leha' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
};

export default Dialogs;