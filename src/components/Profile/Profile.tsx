import React from 'react';
import MyPosts from './MyPosts/MyPosts';

type ProfileProps = {
    profilePage: any;
    addPost: () => void;
    updateNewPostText: (text: string) => void;
};

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;