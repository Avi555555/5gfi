// src/actions/authActions.js
import { LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, SIGNUP_USER_SECCESS, SIGNUP_USER } from './types';
import { ERROR_MESSAGES } from '../utils/constants';
import {  toast } from 'react-toastify';
import { SUCSESS_MESSAGES } from '../utils/constants';

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,

  };
};
// Action to handle successful login
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user
});
export const signupUserSucess = (user) =>({
  type: SIGNUP_USER_SECCESS,
  payload: user
})

// Action to handle failed login
export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error
});

// export const signupUser = (credentials) => {
//   return {
//     type: SIGNUP_USER,
//     payload: credentials,
//   };
// };

export const verifyEmail = (data) => {
  return {
    type: 'VERIFY_EMAIL',
    payload: data,
  };
};

export const generatePassword = (email) => {
  return {
    type: 'GENERATE_PASSWORD',
    payload: email,
  };
};

export const loginUserA = (credentials) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    console.log("Sending credentials:", credentials);

    const response = await fetch('http://127.0.0.1:8015/login/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    console.log("Response status:", response.status); // Log status for clarity

    const users = await response.json();
    console.log("Response data:", users); // Log the response data

    // Check if the expected data structure exists
    if (users.Admin && users.Admin.organization_email) {
      const isValidUser = users.Admin.organization_email === credentials.email;
      console.log("isValidUser:", isValidUser);

      if (isValidUser) {
        toast.success(SUCSESS_MESSAGES.LOGIN_SUCCESS);
        dispatch(loginUserSuccess(users.Admin));
      } else {
        toast.error(ERROR_MESSAGES.INVALID_EMAIL);
        dispatch(loginUserFailure());
      }
    } else {
      // Log additional information if the response doesn't match expected structure
      console.error("Unexpected response structure:", users);
      toast.error(ERROR_MESSAGES.SERVER_ERROR);
      dispatch(loginUserFailure());
    }
  } catch (error) {
    console.error('Login error:', error);
    toast.error(ERROR_MESSAGES.SERVER_ERROR);
    dispatch(loginUserFailure());
  }
};
export const loginUserT = (credentials) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
      const response = await fetch('http://localhost:5000/tenant');
      const users = await response.json();
      const user = users.find(u => u.email === credentials.email && u.password === credentials.password);

      if (user) {
        toast.success(SUCSESS_MESSAGES.LOGIN_SUCCESS);
          dispatch(loginUserSuccess(user));
      } else {
        toast.error(ERROR_MESSAGES.INVALID_EMAIL);
        dispatch(loginUserFailure());
      }
  } catch (error) {
    toast.error(ERROR_MESSAGES.SERVER_ERROR);
      dispatch(loginUserFailure());
  }
 
  
};

export const signupUser = (credentials) => async (dispatch, getState ) => {
  try {
    // Make a POST request to the server to create a new user
    const response = await fetch('http://127.0.0.1:8015/signup/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        organization_name: credentials.organization_name,
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        organization_email: credentials.organization_email,
        password: credentials.password,
        is_active: credentials.is_active,
        organization_address: credentials.organization_address,
        created_at: credentials.created_at,
        role: credentials.role
      }),
    });

    // Check if the response was successful
    if (response.ok) {
      const user = await response.json();
      toast.success(SUCSESS_MESSAGES.SIGNUP_SUCCESS);
      // dispatch({type: SIGNUP_USER,payload: user,});
      dispatch(signupUserSucess(user))
      console.log("Auth state after signup:", getState().auth);
    } else {
      const error = await response.json();
      toast.error(error.message || ERROR_MESSAGES.SIGNUP_ERROR);
      throw new Error(error.message || ERROR_MESSAGES.SIGNUP_ERROR);
    }
  } catch (error) {
    toast.error(ERROR_MESSAGES.SERVER_ERROR);
    console.error("Signup Error:", error);
  }
};


    