import SideBar from './utils/SideBar.js';
import Email from './utils/EmailForm.js';
import React from 'react';
import "../App.css"

export default function Home(){
    return(
        <div className='mainclass'>
            <SideBar />
            <Email />
        </div>
    );
}