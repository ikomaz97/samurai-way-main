import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = () => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to='/dialogs1'>Dimych</NavLink>
        </div>
    )
}


const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialogs/>
                <div className={s.dialog}>
                    <NavLink to='/dialogs2'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs3'> Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs4'> Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs5'> Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs6'> Valera</NavLink>
                </div>
            </div>
            <div className={s.message}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is you IT - kamasutra?</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;