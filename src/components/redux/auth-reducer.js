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
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthDataUser = (id, email, login, isAuth) => ({type: SET_AUTH_DATA_USER, payload: {id, email, login, isAuth}});

export const authMyAccount = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthDataUser(id, email, login, true));
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthDataUser());
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthDataUser(null, null, null, false));
                }
            })
    }
}

export default authReducer;