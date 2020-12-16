import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthDataUser, setProfileUserPhoto} from "../redux/auth-reducer";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthDataUser(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                        .then(res => {
                            this.props.setProfileUserPhoto(res.data.photos);
                        })
                }
            })
    }

    render() {
        return <Header {...this.props}
                       photos={this.props.photos}/>

    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photos: state.auth.photos
    }
}

let UserIdDataUrl = withRouter(HeaderContainer);

export default connect(mapStateToProps, {setAuthDataUser, setProfileUserPhoto})(UserIdDataUrl);