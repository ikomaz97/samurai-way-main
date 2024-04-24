interface Post {
    id: number;
    message: string;
    likeCount: number;
}

interface Dialog {
    id: number;
    name: string;
}

interface Message {
    id: number;
    message: string;
}

interface ProfilePage {
    posts: Post[];
    newPostText: string;
}

interface DialogsPage {
    dialogs: Dialog[];
    messages: Message[];
    sidebar: {};
}

interface State {
    profilePage: ProfilePage;
    dialogsPage: DialogsPage;
}

let store = {
    _state:  {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likeCount: 12 },
                { id: 2, message: "How is your IT - kamasutra?", likeCount: 14 },
                { id: 3, message: "How is your IT - kamasutra?", likeCount: 10 },
                { id: 4, message: "How is your IT - kamasutra?", likeCount: 11 },
            ],
            newPostText: "IT-COMASUTRA.COM",
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Victor" },
                { id: 6, name: "Valera" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your IT - kamasutra?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" },
                { id: 6, message: "Yo" },
            ],
            sidebar: {},
        },
    },
    renderEntireTree ()   {
        console.log("State changed:", state);
    },
    addPost ()  {
        let newPost: Post = {
            id: state.profilePage.posts.length + 1,
            message: state.profilePage.newPostText,
            likeCount: 0,
        };
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = "";
        renderEntireTree(state);
    },
    updateNewPostText (newText)  {
        state.profilePage.newPostText = newText;
        renderEntireTree(state);
    },
    subscriber (observer)    {
        renderEntireTree = observer;
    },

};

export default store;
window.store = store;