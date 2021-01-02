import {profileAPI, usersAPI} from "../../API/API";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {message: 'Hi, it\'s my first post', count: 15},
        {message: 'How are you?', count: 10}
    ],
    profile: null,
    status: ''
};

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let post = {
                message: action.postmessage,
                count: 0
            }
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            };
        }
        case SET_PROFILE_USER:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const ADD_POST_ACTION_CREATOR = (postmessage) => ({type: ADD_POST, postmessage});
export const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const usersProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setProfileUser(response.data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0)
            dispatch(setStatus(status));
    }
}


export default postReducer;