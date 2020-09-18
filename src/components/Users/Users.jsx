import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id);
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;