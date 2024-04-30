import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props: any) => {

    const postElement = props.posts.map((p: any) =>
        <Post message={p.message} likesCount={p.likeCount}/>
    )
    const newPostsElement = React.createRef<HTMLTextAreaElement>
    () as React.RefObject<HTMLTextAreaElement>;
    const addPost = () => {
        props.addPost();

    };

    const onPostChange = () => {
        if (newPostsElement.current !== null) {
            let text = newPostsElement.current.value as string;
            props.updateNewPostText(text);
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText}/>
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