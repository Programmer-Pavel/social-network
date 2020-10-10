import React from 'react';
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} message={d.message}/>)
    // let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef()

    let addMessage = () => {
        let message = newMessage.current.value
        alert(message)
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
                <textarea ref={newMessage} cols="30" rows="5"></textarea>
                <button onClick={addMessage}>add Message</button>
            </div>
        </div>
    )
};

export default Dialogs;