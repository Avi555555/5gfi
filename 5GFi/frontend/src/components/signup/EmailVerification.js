import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Stack, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FloatingLabelInput } from '../../utils/flotingLabel';

const EmailVerification = ({ verificationCode, onCodeChange,  onVerificationSuccess  }) => {
    const { register, handleSubmit, setError, clearErrors, getValues, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const sendVerificationCode = async () => {
        const email = getValues('email');
        console.log("email", email)
        const generatedCode = Math.floor(100000 + Math.random() * 900000);
        try {
            const response = await fetch(`http://localhost:5000/users?email=${email}`);
            const users = await response.json();
            console.log("users", users)

            if (users.length === 0) {
                setMessage("Email not found.");
                toast.error("Email not found.");
                return;
            }
            const userId = users[0].id;
            await fetch(`http://localhost:5000/users/${userId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ verificationCode: generatedCode.toString() }),
            });
            setMessage(`Verification code sent to ${email}`);
            toast.success(`Verification code sent to ${email}`);
        } catch (error) {
            setMessage('Failed to send verification code.');
            toast.error('Failed to send verification code.');
        }
    };

    const verifyCode = async () => {
        try {
            const response = await fetch(`http://localhost:5000/users?email=${email}`);
            const users = await response.json();
            console.log("verfycode", users)

            if (users.length === 0) {
                setMessage("Email not found.");
                toast.error("Email not found");
                return;
            }

            if (users[0].verificationCode === verificationCode) {
                // setMessage("Verification successful.");
                toast.success("Email Verification successful");
                onVerificationSuccess()
               
            } else {
                setMessage("Invalid verification code.");
                toast.error("Invalid verification code.");
            }
        } catch (error) {
            setMessage("Verification failed.");
            toast.error("Verification failed.");
        }
    };

    const handleSubmitForm = (data) => {
        setEmail(data.email);
        sendVerificationCode(data.email);
    };

    const handelEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        clearErrors('email');
        if (!value) {
            setError('email', { type: 'manual', message: 'Email is required' });
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setError('email', { type: 'manual', message: 'Email is invalid' });
        }
    }
    return (
        <> 
         {/* <h4 className='text-center'> Verification your Email</h4> */}
        
            <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Card className=" mb-3 p-4 pb-0" bg="light">
                    <FloatingLabelInput
                                label="Orgnization Name *"
                                type="text"
                                fieldName="text"
                                register={register}
                               
                               

                            />
               
                <Stack direction="horizontal" gap={4} className='mb-1 ps-3'>
                    <FloatingLabelInput
                        label="Email *"
                        type="email"
                        fieldName="email"
                        register={register}
                        error={errors.email}
                        onChange={handelEmailChange}
                        value={""}

                    />
                    <Button onClick={sendVerificationCode}>Send Code</Button>
                </Stack>
                <Stack direction="horizontal" gap={3} className='mb-1 ps-3'>
                    <FloatingLabelInput
                        label="Enter verification code *"
                        type="text"
                        fieldName="verificationCode"
                        register={register}
                        error={errors.verificationCode}
                        onChange={(e) => onCodeChange(e.target.value)}
                    />
                    <Button onClick={verifyCode}>Verify Code</Button>
                </Stack>
               
            </Card>
               
            </form>
           
        </>


    );
};

export default EmailVerification;
