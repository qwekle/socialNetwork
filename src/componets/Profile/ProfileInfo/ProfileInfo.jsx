import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className='profile'>
            <img></img>
            <div className='profile-info'>
                <div className='profile-info__name'>name</div>
                <div className='profile-info__text'>text</div>
            </div>
        </div>
    )
}
export default ProfileInfo;