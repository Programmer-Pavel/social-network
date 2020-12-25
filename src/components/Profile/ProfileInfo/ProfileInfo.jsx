import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (<Preloader/>)
    }

    return (
        <div>
            <div className={s.description}>
                <img src={props.profile.photos.small}/>
                <ProfileStatus status="its my status"/>
            </div>
        </div>
    )
}

export default ProfileInfo;