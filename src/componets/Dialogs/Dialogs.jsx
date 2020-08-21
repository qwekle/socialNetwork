import React from "react";
import s from './Dialogs.module.css';
import DialogsMessage from "./DialogsItem/DialogsMessage";
import Message from "./Message/Message";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer'




const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;


    let dialogsElements = state.dialogsData.map(d => {
        return <DialogsMessage name={d.name} id={d.id} />
    });
    let messagesElements = state.messagesData.map(m => {
        return <Message message={m.message} />
    });

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div>
            <div className={s.dialogsTitle}>Dialogs</div>
            <div className={s.dialogs}>
                <div className={s.users}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea 
                        onChange={onNewMessageChange}
                        value={newMessageBody} 
                        placeholder='Напишите сообщение'></textarea></div>
                        <div><button onClick={onSendMessageClick}>Отправить</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;