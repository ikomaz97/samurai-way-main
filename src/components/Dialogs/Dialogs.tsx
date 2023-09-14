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

    let newDialogsElement = React.createRef<HTMLTextAreaElement>
    () as React.RefObject<HTMLTextAreaElement>;

    let addDialogs = () => {
        if (newDialogsElement.current !== null) {
            let text = newDialogsElement.current.value as string;
            alert(text);
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogsElements}</div>
            <div className={s.messages}>{messageElements}</div>
            <div>
                <textarea ref={newDialogsElement} ></textarea>
            </div>
            <div>
                <button onClick={addDialogs}>Add post</button>
            </div>



        </div>
    );
};

export default Dialogs;