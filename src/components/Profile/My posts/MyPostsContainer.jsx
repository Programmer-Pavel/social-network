import React from 'react';
import {
    ADD_POST_ACTION_CREATOR,
    UPDATE_NEW_POST_TEXT_ACTION_CREATOR
} from "../../redux/post-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().postPage;
//
//             let addPostElement = () => {
//                 store.dispatch(ADD_POST_ACTION_CREATOR());
//             }
//
//             let onPostChange = (post) => {
//                 let action = UPDATE_NEW_POST_TEXT_ACTION_CREATOR(post);
//                 store.dispatch(action);
//             }
//             return <MyPosts addPost={addPostElement}
//                             updateNewPostText={onPostChange}
//                             postPage={state}/>
//         }
//     }
//     </StoreContext.Consumer>
// }

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