import React, { useState } from 'react';
import axios from 'axios';
// import FloatingLabelInput from '../../utils/FloatingLabelInput';
import { FloatingLabelInput } from '../../utils/flotingLabel';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';


const PasswordGeneration = ({ nextStep, userId  }) => {
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleGeneratePassword = async (data) => {
        const { newPassword, confirmPassword } = data;   
        // Reset success and error messages
        setError('');
        setSuccess('');

        // Validate passwords
        if (!newPassword || !confirmPassword) {
            setError('Both fields are required.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            // Mock API call to update the password

            // Udate passwoed and save data  function handel by backend

            const userId = "1";
            // const response = await axios.put('http://localhost:5000/users/1', {
             const response = await axios.post('http://localhost:5000/users', {
              password: newPassword,
            });
           
            if (response.status === 200 || response.status === 201) {
                console.log("handleGeneratePassword")
                setSuccess('Password updated successfully!');
                nextStep();
            }
        } catch (err) {
            setError('Failed to update the password. Please try again.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(handleGeneratePassword)}>
                        <h2 className='text-center'>Generate/Reset Password</h2>
                        <div className="form-group mt-5 position-relative">
                            <FloatingLabelInput
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder=""
                                label="New Password"
                                fieldName="newPassword"
                                value={newPassword}
                                error={errors.newPassword}
                                register={register}
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="eye-icon"
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && togglePasswordVisibility()}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <div className="form-group mt-4">
                            <FloatingLabelInput
                                type="password"
                                className="form-control"
                                placeholder=""
                                label="Confirm Password"
                                fieldName="confirmPassword"
                                error={errors.confirmPassword}
                                register={register}
                                value={confirmPassword}
                            />

                        </div>
                        <span  style={{ "color": "red" }}>{error}</span>
                        <span style={{ "color": "green" }}>{success}</span>
            

                        <div className='d-grid'>
                            <button className='btn btn-dark mt-4' >Generate/Reset Password</button>
                        </div>
                    </form>


                </div>
            </div>

        </div>


    );
};

export default PasswordGeneration;
