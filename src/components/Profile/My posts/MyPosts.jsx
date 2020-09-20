import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {message: 'Hi, it\'s my first post', count: 15},
        {message: 'How are you?', count: 10}
    ]

    let postsElements = posts.map(p => <Post message={p.message} count={p.count}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;