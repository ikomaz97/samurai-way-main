import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id:1, message:'Hi, how are you?', likeCount: 12},
    {id:2, message:'How is you IT - kamasutra?', likeCount: 14 },
    {id:3, message:'How is you IT - kamasutra?', likeCount: 10 },
    {id:4, message:'How is you IT - kamasutra?', likeCount: 11 },
]


ReactDOM.render(
    <App
    posts = {posts}
    />,
  document.getElementById('root')
);