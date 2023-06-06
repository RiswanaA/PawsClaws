import SideBar from './utils/SideBar.js';
import Welcome from './utils/WelcomeForm.js';
import React from 'react';
import "../App.css"

export default function Home(){
    return(
        <div className='mainclass'>
            <SideBar />
            <Welcome />
        </div>
    );
}