import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (<Preloader/>)
    }

    return (
        <div>
            <div>
                <img src="https://palakmishra.files.wordpress.com/2017/06/cropped-image.png?w=676" alt=""/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.small}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;