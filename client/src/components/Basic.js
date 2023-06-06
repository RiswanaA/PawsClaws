import SideBar from './utils/SideBar.js';
import Basic from './utils/BasicForm.js';
import React from 'react';
import "../App.css"

export default function Home(){
    return(
        <div className='mainclass'>
            <SideBar />
            <Basic />
        </div>
    );
}