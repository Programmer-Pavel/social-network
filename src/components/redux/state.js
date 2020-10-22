import postReducer from "./post-page-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-page-reducer";

let store = {
    _callSubscriber() {
        console.log('anyway');
    },

    _state: {
        postPage: {
            newPostText: '',
            posts: [
                {message: 'Hi, it\'s my first post', count: 15},
                {message: 'How are you?', count: 10}
            ]
        },
        dialogsPage: {
            dialogs: [
                {
                    name: 'Victor',
                    id: 1,
                    img: "https://static.360tv.ru/media/article_media/7e00c45cfdb9489cad203327cb94bb0d_201708211251.jpg",
                    message: 'Hi'
                },
                {
                    name: 'Dima',
                    id: 2,
                    img: "https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg",
                    message: 'How are you?'
                },
                {
                    name: 'Victoria',
                    id: 3,
                    img: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg",
                    message: 'Yo'
                },
                {
                    name: 'Alina',
                    id: 4,
                    img: "https://moi-tvoi.ru/upload/iblock/photos215/product_214674_0.jpg",
                    message: 'Yo'
                },
                {
                    name: 'Leha',
                    id: 5,
                    img: "https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg",
                    message: 'Yo'
                },
            ],
            newMessageText: '',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        sidebars: {
            sidebar: [
                {
                    name: 'Victor',
                    id: 1,
                    img: "https://static.360tv.ru/media/article_media/7e00c45cfdb9489cad203327cb94bb0d_201708211251.jpg"
                },
                {
                    name: 'Dima',
                    id: 2,
                    img: "https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg"
                },
                {
                    name: 'Victoria',
                    id: 3,
                    img: "https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
                }
            ]
        }

    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        postReducer(this._state.postPage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebars, action);

        this._callSubscriber(this._state);
    }
}

export default store;