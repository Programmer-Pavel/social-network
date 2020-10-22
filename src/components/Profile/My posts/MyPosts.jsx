import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
    ADD_POST_ACTION_CREATOR,
    UPDATE_NEW_POST_TEXT_ACTION_CREATOR
} from "../../redux/post-page-reducer";

const MyPosts = (props) => {

    let postsElements = props.postPage.posts.map(p => <Post message={p.message} count={p.count}/>)
    let newPost = React.createRef();

    let addPostElement = () => {
        props.dispatch(ADD_POST_ACTION_CREATOR());
    }

    let onPostChange = () => {
        let post = newPost.current.value;
        let action = UPDATE_NEW_POST_TEXT_ACTION_CREATOR(post);
        props.dispatch(action);
    }

    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <textarea onChange={onPostChange} value={props.postPage.newPostText} ref={newPost}></textarea>
            </div>
            <div>
                <button onClick={addPostElement}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;