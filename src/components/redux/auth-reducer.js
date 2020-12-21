import {authAPI} from "../../API/API";

const SET_AUTH_DATA_USER = 'SET_AUTH_DATA_USER';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthDataUser = (id, email, login) => ({type: SET_AUTH_DATA_USER, data: {id, email, login}});

export const authMyAccount = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthDataUser(id, email, login));
                }
            })
    }
}

export default authReducer;