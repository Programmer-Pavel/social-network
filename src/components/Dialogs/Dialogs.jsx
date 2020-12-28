import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

const MessageAddForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'message'} component={'textarea'} name={'addNewMessage'}></Field>
        </div>
        <div>
            <button>add Message</button>
        </div>
    </form>
}

const MessageReduxForm = reduxForm({
    form: 'message'
})(MessageAddForm);

const Dialogs = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message messages={m.message} id={m.id}/>)

    let AddNewMessage = (values) => {
        props.addMessage(values.addNewMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <MessageReduxForm onSubmit={AddNewMessage}/>
        </div>
    )
};

export default Dialogs;