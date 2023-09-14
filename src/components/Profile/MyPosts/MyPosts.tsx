import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";



const MyPosts = (props:any) => {

    let postElement = props.posts.map((p:any )=>
        <Post message = {p.message} likesCount = {p.likeCount} />
    )
    let newPostsElement = React.createRef<HTMLTextAreaElement>
    () as React.RefObject<HTMLTextAreaElement>;
    let addPost = () => {
        if (newPostsElement.current !== null) {
            let text = newPostsElement.current.value as string;
            props.addPost(text);
        }
    };

    let onPostChange = () => {
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