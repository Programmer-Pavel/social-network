import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {message: 'Hi, it\'s my first post', count: 15},
    {message: 'How are you?', count: 10}
]

let dialogs = [
    {name: 'Victor', id: 1},
    {name: 'Dima', id: 2},
    {name: 'Victoria', id: 3},
    {name: 'Alina', id: 4},
    {name: 'Leha', id: 5}
]

let messages = [
    {message: 'Hi'},
    {message: 'How are you?'},
    {message: 'Yo'},
    {message: 'Yo'},
    {message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
