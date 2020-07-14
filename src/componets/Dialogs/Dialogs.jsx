import React from "react";
import s from './Dialogs.module.css';
import DialogsMessage from "./DialogsItem/DialogsMessage";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Dmitry'},
        {id: 5, name: 'Alina'},
    ];

    let messagesData = [
        {id: 1, message: 'How are you'},
        {id: 2, message: 'Where are you'},
        {id: 3, message: 'Its realy interesting'},
        {id: 4, message: 'Go play in game'},
        {id: 5, message: 'If u go'},
    ];

    let dialogsElements = dialogsData.map(d => {
        return <DialogsMessage name={d.name} id={d.id}/>
    });

    let messagesElements = messagesData.map(m => {
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