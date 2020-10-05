import React from "react";

let state = {
    postPage: {
        posts: [
            {message: 'Hi, it\'s my first post', count: 15},
            {message: 'How are you?', count: 10}
        ]
    },
    dialogsPage: {
        dialogs: [
            {name: 'Victor', id: 1, img: "https://static.360tv.ru/media/article_media/7e00c45cfdb9489cad203327cb94bb0d_201708211251.jpg"},
            {name: 'Dima', id: 2, img: "https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg"},
            {name: 'Victoria', id: 3, img: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"},
            {name: 'Alina', id: 4, img: "https://moi-tvoi.ru/upload/iblock/photos215/product_214674_0.jpg"},
            {name: 'Leha', id: 5,img: "https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg"}
        ],
        messages: [
            {message: 'Hi'},
            {message: 'How are you?'},
            {message: 'Yo'},
            {message: 'Yo'},
            {message: 'Yo'}
        ]
    },
    sidebars: {
        sidebar: [
            {name: 'Victor', id: 1, img: "https://static.360tv.ru/media/article_media/7e00c45cfdb9489cad203327cb94bb0d_201708211251.jpg"},
            {name: 'Dima', id: 2, img: "https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg"},
            {name: 'Victoria', id: 3, img: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"}
        ]
    }

}

export default state;