const SET_AUTH_DATA_USER = 'SET_AUTH_DATA_USER';
const SET_PROFILE_USER_PHOTO = 'SET_PROFILE_USER_PHOTO';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photos: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_PROFILE_USER_PHOTO:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

export const setAuthDataUser = (id, email, login) => ({type: SET_AUTH_DATA_USER, data: {id, email, login}});
export const setProfileUserPhoto = (photos) => ({type: SET_PROFILE_USER_PHOTO, photos});


export default authReducer;