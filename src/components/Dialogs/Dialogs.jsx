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

    let dialogs = [
        {name: 'Victor', id: 1},
        {name: 'Dima', id: 2},
        {name: 'Victoria', id: 3},
        {name: 'Alina', id: 4},
        {name: 'Leha', id: 5}
    ]

    let messages = [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: 'Yo'},
        {message: 'Yo'},
        {message: 'Yo'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;