import React from 'react';
import styles from './users.module.css';
import photo from '../../assets/images/user.png';
import '../Users/users.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={styles.selectNumber}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : photo} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() =>
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "f536faf9-83ce-4203-83de-763427f73e09"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            {
                                                props.follow(u.id)
                                            }
                                        }
                                    })
                            }>follow</button> :
                            <button onClick={() =>
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "f536faf9-83ce-4203-83de-763427f73e09"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            {
                                                props.unfollow(u.id)
                                            }
                                        }
                                    })
                            }>unfollow</button>}
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
}

export default Users;