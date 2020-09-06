import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://palakmishra.files.wordpress.com/2017/06/cropped-image.png?w=676" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;