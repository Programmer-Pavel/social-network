import React from 'react';
import './App.css';
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/preloader";
import {initializeApp} from "./components/redux/app-reducer";
import {withSuspense} from "./HOC/withSuspense";
import MusicContainer from "./components/Music/MusicContainer";
import 'antd/dist/antd.css';
import {Main} from "./components/Main/Main";
import ProfileContainer from "./components/Profile/ProfileContainer";

// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


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
                <Main/>
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
