import SideBar from './utils/SideBar.js';
import Service from './utils/ServiceForm.js';
import React from 'react';
import "../App.css"

export default function Home(){
    return(
        <div className='mainclass'>
            <SideBar />
            <Service />
        </div>
    );
}