import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-page-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-page-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";
import musicReducer from "./music-reducer";

let reducers = combineReducers({

    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    sidebars: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    musicPage: musicReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;