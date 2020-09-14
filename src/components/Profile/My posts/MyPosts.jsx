import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, it's my first post" count="15"/>
                <Post message="How are you?" count="10"/>
            </div>
        </div>
    )
}

export default MyPosts;