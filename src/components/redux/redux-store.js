import {combineReducers, createStore} from "redux";
import postReducer from "./post-page-reducer";
import dialogsReducer from "./dialogs-page-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-page-reducer";

let reducers = combineReducers({

    postPage: postReducer,
    dialogsPage: dialogsReducer,
    sidebars: sidebarReducer,
    usersPage: usersReducer

});

let store = createStore(reducers);

export default store;