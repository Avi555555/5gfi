import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserT, loginUserA } from '../actions/authActions';
import Header from './layout/header';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { FloatingLabelInput } from '../utils/flotingLabel';
import { useForm } from 'react-hook-form';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error: authError } = useSelector(state => state.auth);
    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();

    const [role, setRole] = useState('tenant');
    const authState = useSelector(state => state.auth);
    const [loginSuccess, setloginSuccess] = useState(false);


    const handleChange = (value) => {

        setRole(value); // Ensure this updates correctly
    };

    const onSubmit = (data) => {
        console.log("Selected Data", data);
        console.log("Selected Role:", role);
        // alert("login")
        // e.preventDefault();
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        // Dispatch the loginUser action
        if (role === 'tenant') {
            dispatch(loginUserT({ email, password }));
            setloginSuccess(true);
        } else {
            dispatch(loginUserA({ email, password }));
            setloginSuccess(true);
        }
    };
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        clearErrors('email');
        if (!value) {
            setError('email', { type: 'manual', message: 'Email is required' });
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setError('email', { type: 'manual', message: 'Email is invalid' });
        }
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        clearErrors('password');
        if (!value) {
            setError('password', { type: 'manual', message: 'password is required' });
        }
    }

    useEffect(() => {
        if (loginSuccess) {
            navigate('/dashboard'); // Navigate to login after successful signup
        }
    }, [loginSuccess, navigate]);

    return (
        <>
            {/* <Header /> */}
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-4 bg-white shadow rounded p-4">
                        <div className="toggle-button-container">
                            <ToggleButtonGroup
                                type="radio"
                                name="roles"
                                value={role}
                                onChange={handleChange}
                            >
                                
                                <ToggleButton
                                    id="tenant-btn"
                                    variant={role === 'tenant' ? ' primary' : 'outline-secondary'}
                                    value="tenant"
                                    className={role === 'tenant' ? 'active-role' : ''}
                                >
                                    Tenant
                                </ToggleButton>
                                <ToggleButton
                                    id="admin-btn"
                                    variant={role === 'admin' ? 'secondary' : 'outline-primary'}
                                    value="admin"
                                    className={role === 'admin' ? 'active-role' : ''}
                                >
                                    Admin
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <hr/>

                        <img className='logo d-block mx-auto' src='assetes/images/logo_B.png' />

                        <h2 className="text-center pt-2">Welcome Back! 5g FI</h2>
                        <p className="text-center mb-2">Enter to your email, password to access your Account</p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* {error && <div className="alert alert-danger">{error}</div>} */}
                            {/*{authError && <div className="alert alert-danger">{authError}</div>} */}


                            <FloatingLabelInput
                                label="Email *"
                                type="email"
                                fieldName="email" // Ensure this matches the name used in register
                                register={register} // Pass the register function
                                error={errors.email} // Pass the error if any
                                onChange={handleEmailChange} // Custom change handler
                            />


                            <FloatingLabelInput
                                label="Password *"
                                type="password"
                                placeholder=''
                                fieldName="password"
                                onChange={handlePasswordChange}
                                error={errors.password}
                                register={register}
                            />


                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-primary mt-4"
                                    type="submit"
                                    disabled={loading} // Disable button when loading
                                >
                                    {loading ? 'Logging in...' : 'Sign In'}
                                </button>
                                <div className="mx-auto"><span>Forgot password ?</span></div>
                                <p className="mx-auto">
                                    Don't have an account?{' '}
                                    <span
                                        onClick={() => navigate('/signup')}
                                        style={{ color: '#e93493 ', cursor: 'pointer', textDecoration: 'underline' }}
                                    >
                                        Sign Up
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
