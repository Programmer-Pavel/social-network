import React from "react";
import styles from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photo: 'https://yt3.ggpht.com/a/AATXAJw0LB3RNN12XLFoLzdvBUKPQQzun11LC3QoJ7lu=s900-c-k-c0x00ffffff-no-rj',
                    followed: false,
                    fullName: 'Dima',
                    status: 'i boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photo: 'https://yt3.ggpht.com/a/AATXAJw0LB3RNN12XLFoLzdvBUKPQQzun11LC3QoJ7lu=s900-c-k-c0x00ffffff-no-rj',
                    followed: true,
                    fullName: 'Pavel',
                    status: 'i am boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photo: 'https://yt3.ggpht.com/a/AATXAJw0LB3RNN12XLFoLzdvBUKPQQzun11LC3QoJ7lu=s900-c-k-c0x00ffffff-no-rj',
                    followed: false,
                    fullName: 'Kolya',
                    status: 'i am boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }


    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            props.collow(u.id)
                        }}>follow</button> : <button onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
                </div>
            )}
        </div>
    )
}

export default Users;