const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';


let initialState = {
    posts: [
        {message: 'Hi, it\'s my first post', count: 15},
        {message: 'How are you?', count: 10}
    ],
    newPostText: '',
    profile: null
};

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let post = {
                message: state.newPostText,
                count: 0
            }
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const ADD_POST_ACTION_CREATOR = () => ({type: ADD_POST});
export const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = (post) => ({type: UPDATE_NEW_POST_TEXT, newText: post});
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile});


export default postReducer;