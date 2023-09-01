import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
             <img   src='https://c4.wallpaperflare.com/wallpaper/818/26/537/video-games-video-game-art-ultrawide-ultra-wide-god-of-war-hd-wallpaper-preview.jpg'/>
            </div>
            <div>
              ava + description
            </div>
            <MyPosts/>
       </div>
    );
};

export default Profile;