import React from 'react';
import s from './Profile.module.css';
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let postsElements = props.profilePage.postsData.map( p => {
        return <Post message={p.message} likeCount={p.likeCount} />
    })
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.content}>
            <img className={s.mainImg}
                 src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            <ProfileInfo/>
            <textarea ref={newPostElement}
                      onChange={onPostChange}
                      value={props.profilePage.newPostText}>

            </textarea>
            <button onClick={ () => {addPost()}}>Add post</button>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
}

export default Profile;

