import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-page-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-page-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({

    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    sidebars: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;