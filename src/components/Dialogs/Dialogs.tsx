import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props:any) => {


    let dialogsElements = props.state.dialogs.map((d:any) => (
        <DialogItem name={d.name} id={d.id}  />
    ));

    let messageElements = props.state.messages.map((m:any) => (
        <Message message={m.message}  />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>
            <div className={s.messages}>{messageElements}</div>
        </div>
    );
};

export default Dialogs;