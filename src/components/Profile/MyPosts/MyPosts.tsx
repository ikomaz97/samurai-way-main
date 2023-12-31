import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props:any) => {

    let postElement = props.posts.map((p:any )=>
        <Post message = {p.message} likesCount = {p.likeCount} />
    )
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