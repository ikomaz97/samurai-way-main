import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://c4.wallpaperflare.com/wallpaper/818/26/537/video-games-video-game-art-ultrawide-ultra-wide-god-of-war-hd-wallpaper-preview.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;