import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Profile from "./componets/Profile/Profile";
import Navbar from "./componets/Navbar/Navbar";
import Dialogs from "./componets/Dialogs/Dialogs";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className='box'>
                <div className='container'>
                    <div className='box__inner'>
                        <Navbar/>
                        {/*<Profile/>*/}
                        <Dialogs/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
