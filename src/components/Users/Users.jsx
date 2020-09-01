import React from 'react';
import s from './users.module.css';


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, photoUrl: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/09/dmitrygorin_avatar_1505213955.jpg',
                    followed: true, fullName: 'Viktor', status: 'i am a boss', location: { city: 'Vologda', country: 'Russia' }
                },
                {
                    id: 2, photoUrl: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/09/dmitrygorin_avatar_1505213955.jpg',
                    followed: true, fullName: 'Dmityr', status: 'i am a boss', location: { city: 'Moskow', country: 'Russia' }
                },
                {
                    id: 3, photoUrl: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/09/dmitrygorin_avatar_1505213955.jpg',
                    followed: false, fullName: 'Max', status: 'i am a boss', location: { city: 'Yaroslavl', country: 'Russia' }
                },
                {
                    id: 4, photoUrl: 'https://www.skoltech.ru/app/data/uploads/sites/19/2017/09/dmitrygorin_avatar_1505213955.jpg',
                    followed: false, fullName: 'Alex', status: 'i am a boss', location: { city: 'Novgorod', country: 'Russia' }
                },
            ]
        )
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img className={s.userPhoto} src={u.photoUrl} alt="" /></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;