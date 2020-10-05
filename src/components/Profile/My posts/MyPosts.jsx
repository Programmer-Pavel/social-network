import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} count={p.count}/>)
    let addPosts = () => alert('HEY')


    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button onClick={addPosts}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;