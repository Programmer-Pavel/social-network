import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://palakmishra.files.wordpress.com/2017/06/cropped-image.png?w=676" alt=""/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;