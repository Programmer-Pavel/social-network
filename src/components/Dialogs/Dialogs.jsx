import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const MessageAddForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'message'} component={TextArea}
                   name={'addNewMessage'} validate={[required, maxLength50]}>
            </Field>
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