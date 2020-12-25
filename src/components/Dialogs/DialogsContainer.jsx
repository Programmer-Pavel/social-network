import React from 'react';
import {ADD_MESSAGE_ACTION_CREATOR, UPDATE_NEW_MESSAGE_ACTION_CREATOR} from "../redux/dialogs-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().dialogsPage;
//
//             let addMessageElement = () => {
//                 store.dispatch(ADD_MESSAGE_ACTION_CREATOR());
//             }
//
//             let onMessageChange = (message) => {
//                 let action = UPDATE_NEW_MESSAGE_ACTION_CREATOR(message);
//                 store.dispatch(action);
//             }
//
//             return <Dialogs addMessage={addMessageElement}
//                             updateNewMessage={onMessageChange}
//                             dialogsPage={state}
//                             newMessageText={state.newMessageText}/>
//         }
//     }
//     </StoreContext.Consumer>
// };

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(ADD_MESSAGE_ACTION_CREATOR());
        },
        updateNewMessage: (message) => {
            let action = UPDATE_NEW_MESSAGE_ACTION_CREATOR(message);
            dispatch(action);
        }
    }
}

export default compose (
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
