import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs1/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Messages = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = (props: any) => {

    let dialogs = [
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Victor'},
        {id:6, name:'Valera'},
    ]

    let messages = [
        {id:1, messages:'Hi'},
        {id:2, messages:'How is you IT - kamasutra?'},
        {id:3, messages:'Yo'},
        {id:4, messages:'Yo'},
        {id:5, messages:'Yo'},
        {id:6, messages:'Yo'},
    ]

    let dialogsElements = dialogs.map( (d)=>{<Dialogs name={d.name} id={d.id}/>});
    let messageElements= messages.map((m)=><Messages message= {m.messages}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;