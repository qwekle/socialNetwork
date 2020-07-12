import React from 'react';
import s from './Profile.module.css';
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you', likeCount: 11},
        {id: 2, message: 'it\'s my first post', likeCount: 12},
    ];

    let postsElements = postsData.map( p => {
        return <Post message={p.message} likeCount={p.likeCount} />
    })

    return (
        <div className={s.content}>
            <img className={s.mainImg}
                 src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            <ProfileInfo/>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
}

export default Profile;

