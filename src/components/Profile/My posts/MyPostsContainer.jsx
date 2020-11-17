import React from 'react';
import {
    ADD_POST_ACTION_CREATOR,
    UPDATE_NEW_POST_TEXT_ACTION_CREATOR
} from "../../redux/post-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postPage: state.postPage,
        newPostText: state.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(ADD_POST_ACTION_CREATOR())
        },
        updateNewPostText: (post) => {
            let action = UPDATE_NEW_POST_TEXT_ACTION_CREATOR(post);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;