import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state.sidebars}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.postPage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
    )
}

export default App;
