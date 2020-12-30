import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'}
                       validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'}
                       validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'} component={Input}/> remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;