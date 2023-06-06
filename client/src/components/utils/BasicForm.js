import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Home() {
    const [fullName, setFullName] = useState('');
    const [catName, setCatName] = useState('');
    const [address, setAddress] = useState('');
    const [title, setTitle] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
        validateForm();
    };

    const handleCatNameChange = (event) => {
        setCatName(event.target.value);
        validateForm();
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
        validateForm();
    };

    const handleTitleChange = (event) => {
        const selectedTitle = event.target.value;
        setTitle(selectedTitle);
        validateForm();
    };

    const validateForm = () => {
        if (fullName && catName && address && title) {
            setIsFormValid(true);

        } else {
            setIsFormValid(false);
        }
    };
    const update = () => {

        var emailid = JSON.parse(localStorage.getItem('user'));
        Axios.post("http://localhost:3002/update", {
            email: emailid,
            fullName: fullName,
            catName: catName,
            address: address

        }).then((response) => {

            console.log(response.data);

        }).catch(err => alert(err));
    };

    return (
        <div className='right-contain'>
            <div className='form-holder'>
                <h1 className='basic'>Enter your basic details</h1>
                <p className='basic'>
                    This is how other professionals and businesses will see you.
                </p>
                <div className='selector-holder'>
                    <h1>Title</h1>
                    <div className='selectors'>
                        <div className={`item ${title === 'Mr.' ? 'selected' : ''}`}>
                            <label htmlFor='one'>Mr.</label>
                            <input
                                id='one'
                                type='checkbox'
                                value='Mr.'
                                checked={title === 'Mr.'}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className={`item ${title === 'Ms.' ? 'selected' : ''}`}>
                            <label htmlFor='two'>Ms.</label>
                            <input
                                id='two'
                                type='checkbox'
                                value='Ms.'
                                checked={title === 'Ms.'}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className={`item ${title === 'Mrs.' ? 'selected' : ''}`}>
                            <label htmlFor='three'>Mrs.</label>
                            <input
                                id='three'
                                type='checkbox'
                                value='Mrs.'
                                checked={title === 'Mrs.'}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className={`item ${title === 'Other' ? 'selected' : ''}`}>
                            <label htmlFor='four'>Other</label>
                            <input
                                id='four'
                                type='checkbox'
                                value='Other'
                                checked={title === 'Other'}
                                onChange={handleTitleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='input-holder icon' style={{ marginBottom: '16px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_50_148)">
                            <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="black" stroke-opacity="0.54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-opacity="0.54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_50_148">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <input
                        placeholder='Your full name'
                        value={fullName}
                        onChange={handleFullNameChange}
                    />
                </div>
                <div className='input-holder icon' style={{ marginBottom: '16px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 13.125C9 13.3475 8.93402 13.565 8.8104 13.7501C8.68679 13.9351 8.51109 14.0793 8.30552 14.1644C8.09995 14.2496 7.87375 14.2718 7.65552 14.2284C7.43729 14.185 7.23684 14.0779 7.0795 13.9205C6.92217 13.7632 6.81502 13.5627 6.77162 13.3445C6.72821 13.1263 6.75049 12.9001 6.83564 12.6945C6.92078 12.489 7.06498 12.3133 7.24998 12.1896C7.43499 12.066 7.6525 12 7.875 12C8.17337 12 8.45952 12.1186 8.6705 12.3295C8.88147 12.5405 9 12.8267 9 13.125ZM16.125 12C15.9025 12 15.685 12.066 15.5 12.1896C15.315 12.3133 15.1708 12.489 15.0856 12.6945C15.0005 12.9001 14.9782 13.1263 15.0216 13.3445C15.065 13.5627 15.1722 13.7632 15.3295 13.9205C15.4868 14.0779 15.6873 14.185 15.9055 14.2284C16.1238 14.2718 16.35 14.2496 16.5555 14.1644C16.7611 14.0793 16.9368 13.9351 17.0604 13.7501C17.184 13.565 17.25 13.3475 17.25 13.125C17.25 12.8267 17.1315 12.5405 16.9205 12.3295C16.7095 12.1186 16.4234 12 16.125 12ZM21.75 4.50004V12.75C21.75 17.7122 17.3766 21.75 12 21.75C6.62344 21.75 2.25 17.7122 2.25 12.75V4.50004C2.25014 4.20347 2.33819 3.91359 2.50302 3.66705C2.66785 3.4205 2.90207 3.22835 3.17607 3.11487C3.45007 3.0014 3.75156 2.9717 4.04244 3.02952C4.33332 3.08734 4.60054 3.23009 4.81031 3.43973C4.82344 3.45285 4.83469 3.46504 4.84594 3.47816L6.46875 5.34379C8.12807 4.30418 10.0466 3.75281 12.0047 3.75281C13.9628 3.75281 15.8813 4.30418 17.5406 5.34379L19.1541 3.47816C19.1653 3.46504 19.1766 3.45285 19.1897 3.43973C19.3995 3.23009 19.6667 3.08734 19.9576 3.02952C20.2484 2.9717 20.5499 3.0014 20.8239 3.11487C21.0979 3.22835 21.3322 3.4205 21.497 3.66705C21.6618 3.91359 21.7499 4.20347 21.75 4.50004ZM20.25 4.50004L18.2288 6.82504C18.1051 6.96808 17.932 7.05914 17.7441 7.08C17.5562 7.10086 17.3673 7.04998 17.2153 6.93754C16.7578 6.59919 16.2668 6.30861 15.75 6.07035V8.25004C15.75 8.44895 15.671 8.63972 15.5303 8.78037C15.3897 8.92102 15.1989 9.00004 15 9.00004C14.8011 9.00004 14.6103 8.92102 14.4697 8.78037C14.329 8.63972 14.25 8.44895 14.25 8.25004V5.53598C13.758 5.40941 13.2562 5.32411 12.75 5.28098V8.25004C12.75 8.44895 12.671 8.63972 12.5303 8.78037C12.3897 8.92102 12.1989 9.00004 12 9.00004C11.8011 9.00004 11.6103 8.92102 11.4697 8.78037C11.329 8.63972 11.25 8.44895 11.25 8.25004V5.28098C10.7438 5.32411 10.242 5.40941 9.75 5.53598V8.25004C9.75 8.44895 9.67098 8.63972 9.53033 8.78037C9.38968 8.92102 9.19891 9.00004 9 9.00004C8.80109 9.00004 8.61032 8.92102 8.46967 8.78037C8.32902 8.63972 8.25 8.44895 8.25 8.25004V6.07035C7.73323 6.30861 7.24223 6.59919 6.78469 6.93754C6.63302 7.05031 6.44437 7.10166 6.25647 7.08133C6.06857 7.06099 5.89528 6.97046 5.77125 6.82785L3.75 4.50004V12.75C3.75 16.6557 7.05094 19.875 11.25 20.2191V18.3104L9.96937 17.0297C9.89975 16.96 9.84454 16.8773 9.80688 16.7863C9.76923 16.6953 9.74987 16.5977 9.74991 16.4992C9.74996 16.4007 9.7694 16.3032 9.80714 16.2122C9.84487 16.1212 9.90016 16.0386 9.96984 15.9689C10.1106 15.8283 10.3014 15.7494 10.5003 15.7495C10.5988 15.7495 10.6964 15.769 10.7874 15.8067C10.8783 15.8444 10.961 15.8997 11.0306 15.9694L12 16.9388L12.9694 15.9694C13.039 15.8997 13.1217 15.8444 13.2126 15.8067C13.3036 15.769 13.4012 15.7495 13.4997 15.7495C13.5982 15.7494 13.6957 15.7688 13.7867 15.8065C13.8778 15.8441 13.9605 15.8993 14.0302 15.9689C14.0998 16.0386 14.1551 16.1212 14.1929 16.2122C14.2306 16.3032 14.25 16.4007 14.2501 16.4992C14.2501 16.5977 14.2308 16.6953 14.1931 16.7863C14.1555 16.8773 14.1002 16.96 14.0306 17.0297L12.75 18.3104V20.2191C16.9491 19.8732 20.25 16.6566 20.25 12.75V4.50004Z" fill="black" fill-opacity="0.54" />
                    </svg>
                    <input
                        placeholder="Your Cat’s name"
                        value={catName}
                        onChange={handleCatNameChange}
                    />
                </div>
                <p className='labelText' style={{ marginBottom: '16px' }}>
                    Note: please specify full address.
                </p>
                <div className='input-holder icon' style={{ marginBottom: '16px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5ZM12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2ZM12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9C7 10 7 12 12 18.71C17 12 17 10 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4Z" fill="black" fill-opacity="0.54" />
                    </svg>
                    <input
                        placeholder='Your address'
                        value={address}
                        onChange={handleAddressChange}
                    />
                </div>
                {isFormValid ? (
                    <Link to="/service" onClick={update}>
                        <div className="button">
                            <p>Continue</p>
                        </div>
                    </Link>
                ) : (
                    <div className="button disabled">
                        <p>Continue</p>
                    </div>
                )}

            </div>
        </div>
    );
}