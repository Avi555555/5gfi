import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

// Floating label input with validation
export const FloatingLabelInputWithValidate = ({ label, type, placeholder, register, fieldName, error }) => {
    return (
        <FloatingLabel controlId={fieldName} label={label}>
            <Form.Control
                type={type}
                placeholder={placeholder}
                {...register(fieldName, { required: `${label} is required` })} // Register with validation
                isInvalid={!!error}
            />
            {error && <Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback>}
        </FloatingLabel>
    );
};

// Floating label input without validation
export const FloatingLabelInput = ({ label, type, fieldName, register, error, onChange }) => {
    return (
        <div className='mb-4'>
        <FloatingLabel controlId={fieldName} label={label}>
                <Form.Control
                    type={type}
                    placeholder=""
                    {...register(fieldName)} // Register the field for validation
                    isInvalid={!!error}
                    onChange={onChange} // Optional: custom change handler
                />
                {error && (
                    <Form.Control.Feedback type="invalid">
                        {error.message} {/* Ensure you're accessing the message property */}
                    </Form.Control.Feedback>
                )}
            </FloatingLabel>
        </div>
    );
};
