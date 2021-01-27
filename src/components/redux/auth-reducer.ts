import { stopSubmit } from "redux-form";
import {authAPI} from "../../API/API";

const SET_AUTH_DATA_USER = 'SET_AUTH_DATA_USER';

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action: any): InitialStateType => {

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

type PayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type ActionType = {
    type: typeof SET_AUTH_DATA_USER
    payload: PayloadType
}

export const setAuthDataUser = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): ActionType => ({
    type: SET_AUTH_DATA_USER,
    payload: {userId, email, login, isAuth}
});

export const authMyAccount = () => {
    return async (dispatch: any) => {
        let response = await authAPI.authMe();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthDataUser(id, email, login, true));
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: any) => {
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
    return async (dispatch: any) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthDataUser(null, null, null, false));
        }
    }
}

export default authReducer;