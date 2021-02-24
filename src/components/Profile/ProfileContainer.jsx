import React from 'react';
import {connect} from "react-redux";
import {getStatus, savePhoto, saveProfile, updateStatus, usersProfile} from "../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.usersProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <div>
            <Profile {...this.props}
                     status={this.props.status}
                     isOwner={!this.props.match.params.userId}
                     updateStatus={this.props.updateStatus}/>
                     savePhoto={this.props.savePhoto}
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
    connect(mapStateToProps, {usersProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
