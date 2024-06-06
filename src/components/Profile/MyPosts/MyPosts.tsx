import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type PostType = {
    id: number;
    message: string;
    likeCount: number;
};

type MyPostsProps = {
    posts: PostType[];
    newPostText: string;
    addPost: () => void;
    updateNewPostText: (text: string) => void;
};

const MyPosts: React.FC<MyPostsProps> = (props) => {
    const postElements = props.posts.map((p) => (
        <Post key={p.id} message={p.message} likesCount={p.likeCount} />
    ));

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.target.value);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
          <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
          />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;