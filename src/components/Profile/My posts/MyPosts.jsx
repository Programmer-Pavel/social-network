import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postElements = props.posts.map(p => <Post message={p.message} count={p.count}/>);

    let newPost = React.createRef();

    let addPostElement = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let post = newPost.current.value;
        props.updateNewPostText(post);
    }

    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPost}></textarea>
            </div>
            <div>
                <button onClick={addPostElement}>Add post</button>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;