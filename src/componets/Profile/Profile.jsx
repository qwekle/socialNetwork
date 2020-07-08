import React from 'react';
import s from './Profile.module.css';
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.mainImg}
                 src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            <div className='profile'>
                <img></img>
                <div className='profile-info'>
                    <div className='profile-info__name'>name</div>
                    <div className='profile-info__text'>text</div>
                </div>
            </div>
            <div className='posts'>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default Profile;

