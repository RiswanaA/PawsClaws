import React, { useState } from 'react';
import "../../App.css"
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Home(){
    const [inputValue, setInputValue] = useState('');
    const [isElementVisible, setElementVisible] = useState(false);

    const login = () => {
         Axios.post("http://localhost:3002/login", {
        email: inputValue,
          
        }).then((response) => {
          localStorage.setItem('user', JSON.stringify(response.data));
          console.log(response.data);
         
        }).catch(err => alert(err));
      };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setElementVisible(value !== '');
        console.log(inputValue);
    };

    return(
        <div className='right-contain'>
            <div className='form-holder'>
                <h1>Get started</h1>
                <div className='input-holder'>
                    <input name="email" placeholder='Mobile/Email' type="text" 
        value={inputValue}
        onChange={handleInputChange} />
                </div>
                <div className='line-holder'>
                    <div className='line'></div>
                    <p>Or</p>
                    <div className='line'></div>
                </div>
                <div className='button google'>
                    <svg className='googleLogo' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                        <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                    </svg>
                    <p>Continue with google</p>
                </div>
                {isElementVisible ? (
                    
                    <Link to="/otp" onClick={login}>
                    <div className='button'>
                        <p>Continue</p>
                        <svg className='arrow' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_50_258)">
                            <path d="M5.5 12H19.5M19.5 12L12.5 19M19.5 12L12.5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_50_258">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    </Link>
                ) : (
                    <div className='button disabled'>
                        <p>Continue</p>
                        <svg className='arrow' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_50_258)">
                            <path d="M5.5 12H19.5M19.5 12L12.5 19M19.5 12L12.5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_50_258">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                )}
            </div>
            <div className='footerText'>
            By continuing, you agree to our <Link to='/'><span>terms</span></Link> and <Link to='/'><span>policies</span></Link>.
            </div>
        </div>
    );
}