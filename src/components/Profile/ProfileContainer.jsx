import React from 'react';
import {connect} from "react-redux";
import {usersProfile} from "../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
           userId = 2;
        }
        this.props.usersProfile(userId)
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

export default compose (
    connect(mapStateToProps, {usersProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
