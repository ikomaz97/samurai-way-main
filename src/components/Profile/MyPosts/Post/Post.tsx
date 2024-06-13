import React from 'react';
import s from './Post.module.css'

export interface Post {
    id: number;
    message: string;
    likeCount: number;
}

export interface ProfilePage {
    posts: Post[];
    newPostText: string;
}

export interface Dialog {
    id: number;
    name: string;
}

export interface Message {
    id: number;
    message: string;
}

export interface DialogsPage {
    dialogs: Dialog[];
    messages: Message[];
    sidebar: Record<string, any>; // Пустой объект-плашка для sidebar
}

// Обновленный интерфейс State
export interface State {
    profilePage: ProfilePage;
    dialogsPage: DialogsPage;
}

const Post = (props:any) => {
    return (
            <div className={s.item}>
                <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOu-sZUYa0YMD6ZlaNym9SRDAbiwTEfOJww&usqp=CAU'/>
                {props.message}
                <div>
                <span>like</span> {props.likesCount}
                </div>
            </div>
    );
};

export default Post;