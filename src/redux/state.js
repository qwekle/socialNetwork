let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you', likeCount: 11 },
                { id: 2, message: 'it\'s my first post', likeCount: 12 },
                { id: 3, message: 'Bla bla bla', likeCount: 12 },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }


}








export default store;
window.store = store;