import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e)=> {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <div>
                status: <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>

            </div>
            }
            {editMode &&
            <div>
                status: <input onChange={onStatusChange} value={status} onBlur={deactivateEditMode} autoFocus={true}></input>
            </div>
            }
        </>
    )


}

export default ProfileStatusWithHooks;