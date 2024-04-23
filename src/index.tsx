import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {updateNewPostText, addPost, subscriber,} from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

let renderEntireFree = (appState: typeof state) => {
    ReactDOM.render(
        <BrowserRouter>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App state={appState}
                     updateNewPostText={updateNewPostText}
                     addpost={addPost}/>
            </DevSupport>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


renderEntireFree(state);
subscriber(renderEntireFree);

