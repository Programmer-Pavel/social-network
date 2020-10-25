const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        newPostText: '',
        posts: [
            {message: 'Hi, it\'s my first post', count: 15},
            {message: 'How are you?', count: 10}
        ]
};

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = {
                message: state.newPostText,
                count: 0
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const ADD_POST_ACTION_CREATOR = () => ({type: ADD_POST});
export const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = (post) => ({type: UPDATE_NEW_POST_TEXT, newText: post});

export default postReducer;