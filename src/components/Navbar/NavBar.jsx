// import s from "./NavBar.module.css";
// import {NavLink} from "react-router-dom";
// import Sidebar from "./sidebar/Sidebar";
//
// const NavBar = (props) => {
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
//
// export default NavBar;

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Header from "../Header/Header";
import {Route} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import {withSuspense} from "../../HOC/withSuspense";
import News from "../News/News";
import MusicContainer from "../Music/MusicContainer";
import Settings from "../Settings/Settings";
import UsersContainer from "../Users/UsersContainer";
import Login from "../Login/login";
import ProfileContainer from "../Profile/ProfileContainer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export const Main = () =>  {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Header handleDrawerOpen={handleDrawerOpen}/>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>s
                <Divider />
                <List>
                    {['Profile', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                <Route path='/news' component={News}/>
                <Route path='/music' render={() => <MusicContainer/>}/>
                <Route path='/Settings' component={Settings}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </main>
        </div>
    );
}