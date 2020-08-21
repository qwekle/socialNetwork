const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    messagesData: [
        { id: 1, message: 'How are you' },
        { id: 2, message: 'Where are you' },
        { id: 3, message: 'Its realy interesting' },
        { id: 4, message: 'Go play in game' },
        { id: 5, message: 'If u go' },
    ],
    dialogsData: [
        { id: 1, name: 'Viktor' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Dmitry' },
        { id: 5, name: 'Alina' },
    ],
    newMessageBody: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogReducer;