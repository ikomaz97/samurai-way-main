import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state'; // Импорт store
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Функция для рендеринга
let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()} // Передаем актуальное состояние
                updateNewPostText={store.updateNewPostText.bind(store)}
                addPost={store.addPost.bind(store)} // Передаем методы с привязкой контекста
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

// Первый рендеринг
renderEntireTree();

// Подписка на изменения состояния
store.subscriber(renderEntireTree);