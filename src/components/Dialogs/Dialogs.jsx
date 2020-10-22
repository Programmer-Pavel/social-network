import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ADD_MESSAGE_ACTION_CREATOR, UPDATE_NEW_MESSAGE_ACTION_CREATOR} from "../redux/dialogs-page-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message messages={m.message} id={m.id}/>)

    let addMessageElement = () => {
        props.dispatch(ADD_MESSAGE_ACTION_CREATOR());
    }

    let onMessageChange = (e) => {
        let message = e.target.value;
        let action = UPDATE_NEW_MESSAGE_ACTION_CREATOR(message);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessageElement}>add Message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;