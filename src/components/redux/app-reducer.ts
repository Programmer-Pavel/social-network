import {authMyAccount} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

const authReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type ActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): ActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(authMyAccount())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

export default authReducer;