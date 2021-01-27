import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/Navbar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/preloader";
import {initializeApp} from "./components/redux/app-reducer";
import {withSuspense} from "./HOC/withSuspense";
import MusicContainer from "./components/Music/MusicContainer";
import 'antd/dist/antd.css';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBarContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' render={() => <MusicContainer/>}/>
                    <Route path='/Settings' component={Settings}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}


export default connect(mapStateToProps, {initializeApp})(App);
