import {combineReducers, createStore} from "redux";
import postReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-page-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-page-reducer";

let reducers = combineReducers({

    profilePage: postReducer,
    dialogsPage: dialogsReducer,
    sidebars: sidebarReducer,
    usersPage: usersReducer

});

let store = createStore(reducers);

window.store = store;

export default store;