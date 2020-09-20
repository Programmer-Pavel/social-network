import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {message: 'Hi, it\'s my first post', count: 15},
        {message: 'How are you?', count: 10}
    ]

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
                <Post message={postData[0].message} count={postData[0].count}/>
                <Post message={postData[0].message} count={postData[0].count}/>
            </div>
        </div>
    )
}

export default MyPosts;