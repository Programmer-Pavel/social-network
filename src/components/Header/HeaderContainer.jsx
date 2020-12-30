import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMyAccount, logout} from "../redux/auth-reducer";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMyAccount()
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

let UserIdDataUrl = withRouter(HeaderContainer);

export default connect(mapStateToProps, {authMyAccount, logout})(UserIdDataUrl);