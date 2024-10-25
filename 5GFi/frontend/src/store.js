// src/store.js
import { createStore, applyMiddleware , combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

// import { authReducer, userReducer, paymentReducer} from './actions/authActions';
// // import authReducer from './reducers/authReducer';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
//   // payment: paymentReducer,
  
// });

import rootReducer from './reducers/authReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
