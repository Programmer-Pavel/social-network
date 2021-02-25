// import React from "react"
// import s from "./Main.module.css";
// import {NavLink} from "react-router-dom";
// import Sidebar from "./sidebar/Sidebar";
//
// export const NavBar = (props) => {
//
//     let sidebarElements = props.sidebars.sidebar.map(s => <Sidebar name={s.name} id={s.name} key={s.id} img={s.img}/>)
//     return <nav className={s.nav}>
//         <ul>
//             <div className={s.item}>
//                 <li><NavLink to='/profile' className={s.img_n}><div className={s.a}><span>Profile</span></div></NavLink></li>
//             </div>
//             <div className={s.item}>
//                 <li><NavLink to='/dialogs' className={s.img_n}><div className={s.a}><span>Messages</span></div></NavLink></li>
//             </div>
//             <div className={s.item}>
//                 <li><NavLink to='/news' className={s.img_n}><div className={s.a}><span>News</span></div></NavLink></li>
//             </div>
//             <div className={s.item}>
//                 <li><NavLink to='/music' className={s.img_n}><div className={s.a}><span>Music</span></div></NavLink></li>
//             </div>
//             <div className={s.item}>
//                 <li><NavLink to='/settings' className={s.img_n}><div className={s.a}><span>Settings</span></div></NavLink></li>
//             </div>
//             <div className={s.item}>
//                 <li><NavLink to='/users' className={s.img_n}><div className={s.a}><span>Users</span></div></NavLink></li>
//             </div>
//             <div>
//                 <div className={s.friends}>
//                     Friends
//                 </div>
//                 <div>
//                     {sidebarElements}
//                 </div>
//             </div>
//         </ul>
//     </nav>
// }


import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Header from "../Header/Header";
import {NavLink, Route, Switch} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import News from "../News/News";
import MusicContainer from "../Music/MusicContainer";
import Settings from "../Settings/Settings";
import UsersContainer from "../Users/UsersContainer";
import {Login} from "../Login/login";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#e0e3e5'
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export const Main = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Header/>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <List>
                        <NavLink to="/profile">
                            <ListItem button key="Profile">
                                <ListItemText primary="Profile"/>
                                <NavLink to="/profile"></NavLink>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/messages">
                            <ListItem button key="Messages">
                                <ListItemText primary="Messages"/>
                                <NavLink to="/messages"></NavLink>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/setting">
                            <ListItem button key="Setting">
                                <ListItemText primary="Setting"/>
                                <NavLink to="/setting"></NavLink>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/users">
                            <ListItem button key="Users">
                                <ListItemText primary="Users"/>
                                <NavLink to="/users"></NavLink>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/music">
                            <ListItem button key="Music">
                                <ListItemText primary="Music"/>
                                <NavLink to="/music"></NavLink>
                            </ListItem>
                        </NavLink>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' render={() => <MusicContainer/>}/>
                        <Route path='/Settings' component={Settings}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </Switch>
                </div>
            </main>
        </div>
    );
}
