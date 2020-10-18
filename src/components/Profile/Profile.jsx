import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.postPage.posts}
                 updateNewPostText={props.updateNewPostText}
                 addPost={props.addPost}/>
    </div>
}

export default Profile;