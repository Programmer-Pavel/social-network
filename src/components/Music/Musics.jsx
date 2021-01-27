import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, {useState} from "react";
import styles from "./Music.module.css";

const Music = (props) => {

    const AudioPlayers = ({musicName, src}) => {
        return <div>
            <h2>{musicName}</h2>
            <div className={styles.player}>
                <AudioPlayer
                    src={src}
                    showSkipControls={true}
                    volume={0.5}
                />
            </div>
        </div>
    }

    const Record = () => {
        return <AudioPlayers musicName={"Radio Record"} src={"http://air.radiorecord.ru:8101/rr_320"}/>
    }

    return <div>
        <button onClick={() => {return <AudioPlayers musicName={"Radio Record"} src={"http://air.radiorecord.ru:8101/rr_320"}/>}}>record</button>

        <AudioPlayers musicName={"Radio Record"} src={"http://air.radiorecord.ru:8101/rr_320"}/>
    </div>
}

export default Music;
