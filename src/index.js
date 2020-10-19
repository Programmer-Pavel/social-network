import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import store from "./components/redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App dispatch={store.dispatch.bind(store)}
                     state={state}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscriber(rerenderEntireTree);

rerenderEntireTree(store.getState());
window.store = store;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
