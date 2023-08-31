import React from 'react';
import s from './Post.module.css'

const Post = (props:any) => {
    return (
            <div className={s.item}>
                <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOu-sZUYa0YMD6ZlaNym9SRDAbiwTEfOJww&usqp=CAU'/>
                {props.message}
                <div>
                <span>like</span>
                </div>
            </div>
    );
};

export default Post;