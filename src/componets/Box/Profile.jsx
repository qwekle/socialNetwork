import React from 'react';


const Profile = () => {
    return (
        <div className='box'>
            <div className='container'>
                <div className='box__inner'>
                    <div className='aside'>
                        <ul>
                            <li><a href='#'>Profile</a></li>
                            <li><a href='#'>Message</a></li>
                            <li><a href='#'>News</a></li>
                            <li><a href='#'>Music</a></li>
                            <li><a href='#'>Settings</a></li>
                        </ul>
                    </div>
                    <div className='content'>
                        <img className='main-img' src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
                        <div className='profile'>
                            <img></img>
                            <div className='profile-info'>
                                <div className='profile-info__name'>name</div>
                                <div className='profile-info__text'>text</div>
                            </div>
                        </div>
                        <div className='posts'>
                            <div className='post'>post</div>
                            <div className='post'>post</div>
                            <div className='post'>post</div>
                            <div className='post'>post</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;