import React from "react";
import s from './Dialogs.module.css';
import DialogsMessage from "./DialogsItem/DialogsMessage";
import Message from "./Message/Message";




const Dialogs = (props) => {




    let dialogsElements = props.state.dialogsData.map(d => {
        return <DialogsMessage name={d.name} id={d.id}/>
    });
    let messagesElements = props.state.messagesData.map(m => {
        return <Message message={m.message}/>
    });




    return (
        <div>
            <div className={s.dialogsTitle}>Dialogs</div>
            <div className={s.dialogs}>
                <div className={s.users}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;