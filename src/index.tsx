import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state'
import './index.css';
import App from './App';
//import state, {updateNewPostText, addPost, subscriber,} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

let renderEntireFree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state}
                 updateNewPostText={store.updateNewPostText}
                 addpost={store._state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


renderEntireFree(store._state);
store.subscriber(renderEntireFree);

