import {rerenderEntireTree} from "../render";

let state =  {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you', likeCount: 11},
            {id: 2, message: 'it\'s my first post', likeCount: 12},
            {id: 3, message: 'Bla bla bla', likeCount: 12},
        ],
        newPostText: ''
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: 'How are you'},
            {id: 2, message: 'Where are you'},
            {id: 3, message: 'Its realy interesting'},
            {id: 4, message: 'Go play in game'},
            {id: 5, message: 'If u go'},
        ],
        dialogsData: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Dmitry'},
            {id: 5, name: 'Alina'},
        ],
    }

}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;