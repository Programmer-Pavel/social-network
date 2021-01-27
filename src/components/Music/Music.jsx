import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, {useState} from "react";
import styles from "./Music.module.css";

const Music = (props) => {

    return <div>Music</div>

//     const AudioPlayers = ({musicName, src}) => {
//         return <div>
//             <h2>{musicName}</h2>
//             <div className={styles.player}>
//                 <AudioPlayer
//                     src={src}
//                     showSkipControls={true}
//                     volume={0.5}
//                 />
//             </div>
//         </div>
//     }
//
//     const AllPlayer = ({buttonName, src, musicName}) => {
//         return <div>
//             <div>
//                 {props.playMusic
//                     ? <div>
//                         <button onClick={props.notListenMusic}>{buttonName}</button>
//                         <AudioPlayers src={src} musicName={musicName}/></div>
//                     : <button onClick={props.listenMusic}>{buttonName}</button>}
//             </div>
//         </div>
//     }
//
//     return (
//         <div>
//             <AllPlayer buttonName={"radio record"} src={"http://air.radiorecord.ru:8101/rr_320"}
//                        musicName={"Radio Record"}/>
//
//             <AllPlayer buttonName={"europa plus"} src={"http://ep128.hostingradio.ru:8030/ep128"}
//                        musicName={"Europa plus"}/>
//
//             <AllPlayer buttonName={"radio energy"} src={"https://pub0101.101.ru:8000/stream/air/aac/64/99"}
//                        musicName={"Radio Energy"}/>
//         </div>
//     );
}

export default Music;
