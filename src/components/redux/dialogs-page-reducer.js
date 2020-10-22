const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                message: state.newMessageText,
                id: 6
            };
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.Text;
            return state;
        default:
            return state;
    }
}

export const ADD_MESSAGE_ACTION_CREATOR = () => ({type: ADD_MESSAGE});
export const UPDATE_NEW_MESSAGE_ACTION_CREATOR = (message) => ({type: UPDATE_NEW_MESSAGE, Text: message});

export default dialogsReducer;