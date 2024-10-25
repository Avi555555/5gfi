import { combineReducers } from 'redux';
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, SIGNUP_USER_SECCESS,SUCSESS_MESSAGES, SIGNUP_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: null,
    cardNumber: '',
    expiryDate: '',
    name: '',
    address: '',
    loading: false,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
      case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                isAuthenticated: true,
            };
      case LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
      case SIGNUP_USER_SECCESS:
            return {
              ...state,
              loading: false,
              user:action.payload,
              isAuthenticated: true, 
              error: null,
            }
            default:
      return state;
    }
  };
  
  
  // src/reducers/userReduauthReducercer.js

  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER_INFO':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  
  // src/reducers/paymentReducer.js

  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CREDIT_CARD_INFO':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  

  const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    payment: paymentReducer
});

  export default rootReducer;
  