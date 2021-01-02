import {authAPI} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA_USER = 'SET_AUTH_DATA_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthDataUser = (userId, email, login, isAuth) => ({
    type: SET_AUTH_DATA_USER,
    payload: {userId, email, login, isAuth}
});

export const authMyAccount = () => {
    return async (dispatch) => {
        let response = await authAPI.authMe();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthDataUser(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(authMyAccount());
        } else {
            let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: messages}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthDataUser(null, null, null, false));
        }
    }
}

export default authReducer;