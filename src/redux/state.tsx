import actions from "redux-form/lib/actions";
import {type} from "os";
import { useDispatch } from 'react-redux';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';

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

export interface State {
    profilePage: ProfilePage;
    dialogsPage: DialogsPage;
    subscriber: () => void;
}

// Интерфейсы для действий
export interface AddPostAction {
    type: 'ADD-POST';
}

export interface UpdateNewPostTextAction {
    type: 'UPDATE-NEW-POST-TEXT';
    newText: string;
}

// Тип для объединения всех возможных действий
export type Action = AddPostAction | UpdateNewPostTextAction;

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 12},
                {id: 2, message: "How is your IT - kamasutra?", likeCount: 14},
                // Другие посты
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                // Другие диалоги
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your IT - kamasutra?"},
                // Другие сообщения
            ],
            sidebar: {},
        },
    },
    _callSubscriber() {
        console.log("State changed:");
    },
    getState() {
        return {...this._state};
    },


    subscriber(observer: () => void) {
        this._callSubscriber = observer;
    },

    dispatch(action: Action) {
        if (action.type === 'ADD-POST') {
            const newPost: Post = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST, newText: text})

export default store;
