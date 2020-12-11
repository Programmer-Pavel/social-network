import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {setProfileUser} from "../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
           userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let UserIdDataUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfileUser})(UserIdDataUrl);