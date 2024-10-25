import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../actions/authActions';
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { FloatingLabelInput } from '../../utils/flotingLabel';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const { register, handleSubmit, watch, setError, clearErrors, getValues, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);


    const { loading, error: authError } = useSelector(state => state.auth);

    const termsAccepted = watch("termsAccepted", false);

    const handleSignup = (data) => {
        // Get all form values
        const formValues = getValues();
        const PValue = {
            created_at: new Date().toISOString(),
            is_active: true,
            role: "admin"
          }
          const mergedFormValues = {
            ...formValues,
            ...PValue
          };

          console.log("mergedFormValues", mergedFormValues)
        // You can now send formValues as a payload
        dispatch(signupUser(mergedFormValues));
        setSignupSuccess(true);
    };
    const handleCloseModal = () => setShowModal(false);

    const authState = useSelector(state => state.auth);

    console.log("authState", authState.isAuthenticated)

  
    useEffect(() => {
        if (signupSuccess) {
            navigate('/login'); // Navigate to login after successful signup
        }
    }, [signupSuccess, navigate]);

    return (
        <>
            <p className="text-center mb-2">Enter your organization Name and details to access your Account</p>
            <hr />
            <form onSubmit={handleSubmit(handleSignup)}>
                <Row>
                    <Col>
                        <FloatingLabelInput
                            label="First Name "
                            type="text"
                            fieldName="first_name"
                            register={register}
                            error={errors.first_name}
                            value={""}
                        />
                        <FloatingLabelInput
                            label="Last Name "
                            type="text"
                            fieldName="last_name"
                            register={register}
                            error={errors.last_name}
                            value={""}
                        />
                        <FloatingLabelInput
                            label="Email"
                            type="email"
                            fieldName="organization_email"
                            register={register}
                            error={errors.organization_email}
                            value={""}
                        />
                        
                        <FloatingLabelInput
                            label="password"
                            type="password"
                            fieldName="password"
                            register={register}
                            error={errors.password}
                            value={""}
                        />
                    </Col>
                    <Col>
                        <FloatingLabelInput
                            label="Organization Name"
                            type="text"
                            fieldName="organization_name"
                            register={register}
                            error={errors.organization_name}
                            value={""}
                        />
                        {/* <FloatingLabelInput
                            label="Organization Details"
                            type="text"
                            fieldName="organizationDetails"
                            register={register}
                            // error={errors.organizationDetails}
                            value={""}
                        /> */}
                        <FloatingLabelInput
                            label="Organization Address"
                            type="text"
                            fieldName="organization_address"
                            register={register}
                            error={errors.organization_address}
                            value={""}
                        />
                        {/* <FloatingLabelInput
                            label="Contact"
                            type="number"
                            fieldName="contact"
                            register={register}
                            // error={errors.contact}
                            value={""}
                        /> */}
                        
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column align-items-center'>
                        <Form.Check
                            type="checkbox"
                            label="I agree to the terms and conditions"
                            className="mt-3"
                            // {...register('termsAccepted')}
                        />
                        <Button className='mt-3' variant="primary" type="submit" >
                            Send for approval to Reaktr.ai
                        </Button>
                    </Col>
                </Row>
            </form>

            
        </>
    );
};

export default Signup;
