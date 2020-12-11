import React from 'react';
import s from "./Profile.module.css";
import {connect} from "react-redux";
import axios from "axios";
import {setProfileUser} from "../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfileUser(response.data);
            })
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setProfileUser})(ProfileContainer);