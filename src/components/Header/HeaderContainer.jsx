import React from 'react';
import s from './Header.module.css';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthDataUser} from "../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthDataUser(id, email, login);
                    debugger
                }
            })
    }

    render() {
        return <Header {...this.props}/>

    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthDataUser})(HeaderContainer);