import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Post from "./components/Profile/MyPosts/Post/Post";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import {updateNewPostText} from "./redux/state";

function App(props: any) {


    return (

        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/message'
                           render={() => <Dialogs  state={props.state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  ProfilePage ={props.state.profilePage}
                                                  addPost = {props.addPost}
                                                  updateNewPostText={props.updateNewPostText}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
