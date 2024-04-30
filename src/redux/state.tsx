

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

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likeCount: 12 },
                { id: 2, message: "How is your IT - kamasutra?", likeCount: 14 },
                // Другие посты
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                // Другие диалоги
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your IT - kamasutra?" },
                // Другие сообщения
            ],
            sidebar: {},
        },
    },
    _callSubscriber() {
        console.log("State changed:");
    },
    getState() {
        return { ...this._state };
    },
    addPost() {
        const newPost: Post = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer;
    },
};

export default store;