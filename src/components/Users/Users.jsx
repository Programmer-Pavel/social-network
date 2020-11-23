import React from "react";
import styles from './users.module.css';
import * as axios from 'axios';
import photo from '../../assets/images/user.png';

const Users = (props) => {

    let getUsers = () => {

        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : photo} className={styles.userPhoto}/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
                </div>
            )}
        </div>
    )
}

export default Users;