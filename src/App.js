import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Profile from "./componets/Profile/Profile";
import Navbar from "./componets/Navbar/Navbar";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='container'>
                    <div className='box'>
                        <Navbar/>
                        <div className='box__inner'>
                            <Route path='/profile' render={() => <Profile/>}/>
                            <Route path='/dialogs' render={() => <Dialogs/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
