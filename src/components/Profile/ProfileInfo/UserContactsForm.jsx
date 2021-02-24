import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input, TextArea} from "../../common/FormControls/FormControls";

const UserContactsForm = ({handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name</b>: <Field placeholder={'Full name'}
                                         name={'fullName'}
                                         component={Input}/>
            </div>
            <div>
                <b>Looking for a job</b>: <Field name={'lookingForAJob'}
                                                 component={Input}
                                                 props={{type: "checkbox"}}/>
            </div>
            <div>
                <b>My professional skills</b>: <Field placeholder={'My professional skills'}
                                                      name={'lookingForAJobDescription'}
                                                      component={TextArea}/>
            </div>
            <div>
                <b>About me</b>: <Field placeholder={'About me'}
                                        name={'aboutMe'}
                                        component={TextArea}/>
            </div>
            {/*<div>*/}
            {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}
            <div>
                <button>save</button>
            </div>
        </form>
    );
};

const UserContactsFormReduxForm = reduxForm({
    form: 'edit-profile'
})(UserContactsForm);

export default UserContactsFormReduxForm;