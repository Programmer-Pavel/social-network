let store = {
    _callSubscriber() {
        console.log('anyway');
    },

    _state: {
        postPage: {
            newPostText: 'iam',
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
            newMessageText: 'rhh'
            // messages: [
            //     {message: 'Hi'},
            //     {message: 'How are you?'},
            //     {message: 'Yo'},
            //     {message: 'Yo'},
            //     {message: 'Yo'}
            // ]
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

    // addPost() {
    //     let post = {
    //         message: this._state.postPage.newPostText,
    //         count: 0
    //     }
    //     this._state.postPage.posts.push(post);
    //     this._state.postPage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.postPage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    //
    // addMessage() {
    //     let message = {
    //         name: 'Alina',
    //         id: 4,
    //         img: "https://moi-tvoi.ru/upload/iblock/photos215/product_214674_0.jpg",
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.dialogs.push(message);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessage(Text) {
    //     this._state.dialogsPage.newMessageText = Text;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type ==='ADD-POST') {
            let post = {
                message: this._state.postPage.newPostText,
                count: 0
            }
            this._state.postPage.posts.push(post);
            this._state.postPage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.postPage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let message = {
                name: 'Alina',
                id: 4,
                img: "https://moi-tvoi.ru/upload/iblock/photos215/product_214674_0.jpg",
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.dialogs.push(message);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if(action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.Text;
            this._callSubscriber(this._state);
        }
    }
}

export default store;