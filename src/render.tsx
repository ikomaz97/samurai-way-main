import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {updateNewPostText} from './redux/state';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const renderEntireFree = (appState: typeof state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={appState}
                 updateNewPostText={updateNewPostText}
                 addpost={addPost} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};