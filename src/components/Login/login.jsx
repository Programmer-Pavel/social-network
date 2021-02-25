// import React from 'react';
// import {Field, reduxForm} from "redux-form";
// import {Input} from "../common/FormControls/FormControls";
// import {required} from "../../utils/validators/validators";
// import {connect} from "react-redux";
// import {login} from "../redux/auth-reducer";
// import {Redirect} from "react-router-dom";
// import styles from "./../common/FormControls/FormControls.module.css";
//
// const LoginForm = (props) => {
//     return <div>
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'email'} name={'email'}
//                        validate={[required]} component={Input}/>
//             </div>
//             <div>
//                 <Field placeholder={'password'} name={'password'}
//                        validate={[required]} component={Input}/>
//             </div>
//             <div>
//                 <Field type={'checkbox'} name={'remember me'} component={Input}/> remember me
//             </div>
//             {props.error && <div className={styles.formSummaryError}>
//                 {props.error}
//             </div>}
//             <div>
//                 <button>login</button>
//             </div>
//         </form>
//     </div>
// }
//
// const LoginReduxForm = reduxForm({
//     form: 'login'
// })(LoginForm);
//
// const Login = (props) => {
//     const onSubmit = (formData) => {
//         props.login(formData.email, formData.password, formData.rememberMe);
//     }
//     if (props.isAuth) {
//         return <Redirect to={"/profile"}/>
//     }
//
//     return <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// }
//
// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth
// })
//
// export default connect(mapStateToProps, {login})(Login);


import React from 'react';
import './login.css';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {login} from "../redux/auth-reducer";


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export const Login = ({openModal, handleCloseModalLogin}) => {

    const history = useHistory()

    const isAuthUser = useSelector(state => state.auth.isAuth)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(login(values.email, values.password, values.rememberMe))
        }
    });
    if (isAuthUser) {
        console.log(isAuthUser)
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className="login">
            <div className="login__container">
                <h1>Login</h1>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        className="passwordInput"
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button className="btn" variant="contained" fullWidth type="submit">
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};