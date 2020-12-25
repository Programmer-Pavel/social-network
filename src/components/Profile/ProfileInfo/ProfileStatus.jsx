import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    render() {
        return <div>
            <div>
                <span>{this.props.status}</span>
            </div>
            <div>
                <input type="text" value={this.props.status}/>
            </div>
        </div>
    }
}

export default ProfileStatus;