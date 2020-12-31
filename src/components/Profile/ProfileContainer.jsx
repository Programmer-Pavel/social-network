import React from 'react';
import {connect} from "react-redux";
import {getStatus, updateStatus, usersProfile} from "../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
           userId = this.props.authorizedUserId;
        }
        this.props.usersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <div>
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        </div>
    }
}

const mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
})

export default compose (
    connect(mapStateToProps, {usersProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
