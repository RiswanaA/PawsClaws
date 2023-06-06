import SideBar from './utils/SideBar.js';
import Otp from './utils/OtpForm.js';
import React from 'react';
import "../App.css"

export default function Home(){
    return(
        <div className='mainclass'>
            <SideBar />
            <Otp />
        </div>
    );
}