const HIDE_PLAYER = 'HIDE_PLAYER';
const SHOW_PLAYER = 'SHOW_PLAYER';

let initialState =  {
    // musics: [
    //     {src: "http://air.radiorecord.ru:8101/rr_320", name: "Radio Record"},
    //     {src: "http://ep128.hostingradio.ru:8030/ep128", name: "Europa plus"}
    // ],
    playMusic: false
};

const musicReducer = (state = initialState, action) => {

    switch (action.type) {
        case HIDE_PLAYER: {
            return {
                ...state,
                ...state.playMusic,
                playMusic: true
            };
        }
        case SHOW_PLAYER: {
            return {
                ...state,
                ...state.playMusic,
                playMusic: false
            }
        }
        default:
            return state;
    }
}

export const LISTEN_MUSIC_ACTION_CREATOR = (playMusic) => ({type: HIDE_PLAYER, playMusic});
export const NOT_LISTEN_MUSIC_ACTION_CREATOR = (playMusic) => ({type: SHOW_PLAYER, playMusic});


export default musicReducer;