import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state'
import './index.css';
import App from './App';
import state from './redux/state';
import {BrowserRouter} from 'react-router-dom';

let renderEntireFree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addpost={store.addPost.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


renderEntireFree();
store.subscriber(renderEntireFree);

