import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Profile from "./componets/Profile/Profile";
import Navbar from "./componets/Navbar/Navbar";
import Dialogs from "./componets/Dialogs/Dialogs";
import { Route } from "react-router-dom"


const App = (props) => {


    return (

        <div className="App">
            <Header/>
            <div className='container'>
                <div className='box'>
                    <Navbar/>
                    <div className='box__inner'>
                        <Route path='/dialogs'
                               render={() =>
                                   <Dialogs state={props.state.dialogsPage}/>
                               }/>
                        <Route path='/profile'
                               render={() =>
                                   <Profile profilePage={props.state.profilePage}
                                            addPost={props.addPost}
                                            updateNewPostText={props.updateNewPostText}/>
                               }/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
