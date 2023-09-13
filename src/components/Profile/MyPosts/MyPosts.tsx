import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props:any) => {

    let postElement = props.posts.map((p:any )=>
        <Post message = {p.message} likesCount = {p.likeCount} />
    )
    let neWPostsElement = React.createRef<HTMLTextAreaElement>
    () as React.RefObject<HTMLTextAreaElement>;
    let addPost = () => {
        if (neWPostsElement.current !== null) {
            let text = neWPostsElement.current.value as string;
            alert('Hi');
        }
    };

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea ref={neWPostsElement}></textarea>
                    </div>
                    <div>
                    <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
    );
};

export default MyPosts;