import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/5e/b3/a5/5eb3a5665fe4e63f8c813a525aa3beb8.jpg" alt=""/>
            {props.message}
            <div>
                <span>like {props.count}</span>
            </div>
        </div>
    )
}

export default Post;