import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';  // Убедитесь, что путь к вашему store правильный

const renderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
};

store.subscriber(renderEntireTree);
renderEntireTree();