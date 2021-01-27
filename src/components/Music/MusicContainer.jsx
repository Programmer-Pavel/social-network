import Music from "./Music";
import {connect} from "react-redux";
import {LISTEN_MUSIC_ACTION_CREATOR, NOT_LISTEN_MUSIC_ACTION_CREATOR} from "../redux/music-reducer";
import Musics from "./Musics";

const mapStateToProps = (state) => {
    return {
        // musics: state.musicPage.musics,
        playMusic: state.musicPage.playMusic

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listenMusic: (playMusic) => {
            dispatch(LISTEN_MUSIC_ACTION_CREATOR(playMusic));
        },
        notListenMusic: (playMusic) => {
            dispatch(NOT_LISTEN_MUSIC_ACTION_CREATOR(playMusic))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);