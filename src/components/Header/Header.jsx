import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from '@ant-design/icons';
import {Button} from "antd";

const Header = (props) => {

    return <header className={s.header}>
        <div>
            <div className={s.head}>
                <div>
                    <img src="https://miro.medium.com/max/2400/1*3MveTPrDuM_v_Fx0y1FJmg.png" alt=""/>
                </div>
                <div className={s.nameOfSite}>Community</div>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div><Avatar
                        style={{
                            backgroundColor: '#87d068',
                        }}
                        icon={<UserOutlined />}
                    /> <Button type="primary" onClick={props.logout}>logout</Button></div>
                    :<NavLink to='/login' className={s.loginBlock}><Button type="primary">login</Button></NavLink>}
            </div>
        </div>
    </header>
}

export default Header;