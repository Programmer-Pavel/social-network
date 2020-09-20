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

    let dialogsData = [
        {name: 'Victor', id: 1},
        {name: 'Dima', id: 2},
        {name: 'Victoria', id: 3},
        {name: 'Alina', id: 4},
        {name: 'Leha', id: 5}
    ]

    let messagesData = [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: 'Yo'},
        {message: 'Yo'},
        {message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
};

export default Dialogs;