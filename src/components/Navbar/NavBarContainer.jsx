import React from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        sidebars: state.sidebars
    }
}

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;