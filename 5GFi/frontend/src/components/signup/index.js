import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailVerification from './EmailVerification';

import Header from '../layout/header';
import Signup from './Signup';

const Stepper = () => {

  const [isEmailVerified, setIsEmailVerified] = useState(false);



  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState(null);




  const handleCodeChange = (newCode) => setVerificationCode(newCode);
  const handelUserInfoSubmit = () => {

  }

const handleEmailVerificationSuccess = () => {
    setIsEmailVerified(true);
};
  return (
    <>
      
         
            {!isEmailVerified ? (
              <div className="container mt-2">
              <div className='row justify-content-center'>
                <div className="col-md-5 bg-white shadow rounded ">
                <img className='logo d-block mx-auto' src='assetes/images/logo_B.png' />
                <hr/>
                <EmailVerification
                  email={email}
                  verificationCode={verificationCode}
                  onCodeChange={handleCodeChange}
                  error={error}
                  onVerificationSuccess={handleEmailVerificationSuccess} 
                />
                </div>
                </div>
                </div>
            ) : (
              <div className="container mt-2">
              <div className='row justify-content-center'>
                <div className="col-md-8 bg-white shadow rounded p-4 pt-0">
                <img className='logo d-block mx-auto' src='assetes/images/logo_B.png' />
                <hr/>
                <Signup />
                </div>
                </div>
                </div>
            )}
            {/* Example button to toggle components */}
            {/* <button onClick={() => setIsEmailVerified(!isEmailVerified)}>
                {isEmailVerified ? "Go to Signup" : "Go to Email Verification"}
            </button> */}
        
    </>

  );
};

export default Stepper;
