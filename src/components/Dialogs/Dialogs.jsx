import React from 'react';
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import {
    ADD_MESSAGE,
    ADD_MESSAGE_ACTION_CREATOR,
    UPDATE_NEW_MESSAGE,
    UPDATE_NEW_MESSAGE_ACTION_CREATOR
} from "../redux/state";
// import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} message={d.message}/>)

    // let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef()


    let addMessageElement = () => {
        props.dispatch(ADD_MESSAGE_ACTION_CREATOR());
    }

    let onMessageChange = () => {
        let message = newMessage.current.value
        let action = UPDATE_NEW_MESSAGE_ACTION_CREATOR(message)
        props.dispatch(action);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/*{messagesElements}*/}
            </div>
            <div>
                <textarea onChange={onMessageChange} value={props.dialogPage.newMessageText} ref={newMessage} cols="30" rows="5"></textarea>
                <button onClick={addMessageElement}>add Message</button>
            </div>
        </div>
    )
};

export default Dialogs;