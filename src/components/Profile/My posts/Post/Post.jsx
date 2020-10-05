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

// https://klike.net/uploads/posts/2019-03/1551511784_4.jpg
//     https://static.360tv.ru/media/article_media/7e00c45cfdb9489cad203327cb94bb0d_201708211251.jpg
//         https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg
//             https://moi-tvoi.ru/upload/iblock/photos215/product_214674_0.jpg
//                 https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg