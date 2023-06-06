import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';

export default function Home() {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [timer, setTimer] = useState(179);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      navigate('/');
    }
  }, [timer, navigate, isButtonDisabled]);

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== '') {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }

    const isAllFieldsFilled = newOTP.every((field) => field !== '');
    setIsButtonDisabled(!isAllFieldsFilled);

    if (index === inputRefs.length - 1 && value !== '') {
      inputRefs[index].current.value = '';
    }
  };

  return (
    <div className="right-contain">
      <div className="form-holder otp">
        <h1 className="otp">OTP Verification</h1>
        <p className="otp">We have sent a one-time password (OTP) to your mail id</p>
        <div className="otp-holder">
          {inputRefs.map((inputRef, index) => (
            <div className="otp-item" key={index}>
              <input
                ref={inputRef}
                id={`otp${index + 1}`}
                value={otp[index]}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                maxLength={1}
              />
            </div>
          ))}
        </div>
        <div className="resend-otp">
          Resend OTP in <span>{`${Math.floor(timer / 60)}:${(timer % 60)
            .toString()
            .padStart(2, '0')}`}</span>
        </div>
        {isButtonDisabled ? (
          <div className="button disabled">
            <p>Continue</p>
          </div>
        ) : (
          <Link to="/basic-details">
            <div className="button">
              <p>Continue</p>
            </div>
          </Link>
        )}
      </div>
      <div className="footerText">
        By continuing, you agree to our <Link to="/"><span>terms</span></Link> and <Link to="/"><span>policies</span></Link>.
      </div>
    </div>
  );
}