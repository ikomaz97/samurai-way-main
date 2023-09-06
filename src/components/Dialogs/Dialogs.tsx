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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialogs name="Dimych" id='1'/>
                <Dialogs name="Andrey" id='2'/>
                <Dialogs name="Sveta" id='3'/>
                <Dialogs name="Sasha" id='4'/>
                <Dialogs name="Victor" id='5'/>
                <Dialogs name="Valera" id='6'/>
            </div>
            <div className={s.message}>
                <Messages message = "Hi"/>
                <Messages message = "How is you IT - kamasutra?"/>
                <Messages message = "Yo"/>
            </div>
        </div>
    );
};

export default Dialogs;