import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('length of post should be incremeted', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')

 // 2. action
    let newState = profileReducer(state, action);
// 3. expectation
    expect(newState.posts.length).toBe(5);
});
it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')
 // 2. action
    let newState = profileReducer(state, action);
// 3. expectation
    expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

it('after deleting length if messages shoud be decrement', () => {
     let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
// 3. expectation
    expect(newState.posts.length).toBe(3);
});


