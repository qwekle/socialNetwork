import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsMessage = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.usersName}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>

    )
}


export default DialogsMessage;