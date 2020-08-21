const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you', likeCount: 11 },
        { id: 2, message: 'it\'s my first post', likeCount: 12 },
        { id: 3, message: 'Bla bla bla', likeCount: 12 },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST

});
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;