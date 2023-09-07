import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props:any) => {
    let path = '/dialogs1/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props:any) => {
    return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props:any) => {
    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' },
    ];

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your IT - kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
    ];

    let dialogsElements = dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} key={d.id} />
    ));

    let messageElements = messages.map((m) => (
        <Message message={m.message} key={m.id} />
    ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>
            <div className={s.messages}>{messageElements}</div>
        </div>
    );
};

export default Dialogs;