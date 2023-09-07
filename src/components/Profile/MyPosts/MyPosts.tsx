import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props:any) => {

    let posts = [
        {id:1, message:'Hi, how are you?', likeCount: 12},
        {id:2, message:'How is you IT - kamasutra?', likeCount: 11 },
    ]

    let postElement = posts.map((p)=>{
        <Post message = {p.message} likesCount = {p.likeCount} />
    })
    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea></textarea>
                    </div>
                    <div>
                    <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
    );
};

export default MyPosts;