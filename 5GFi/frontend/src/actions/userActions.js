// src/actions/userActions.js
export const addUserInfo = (userInfo) => {
    return {
      type: 'ADD_USER_INFO',
      payload: userInfo,
    };
  };
  
  // src/actions/paymentActions.js
  export const addCreditCardInfo = (cardInfo) => {
    return {
      type: 'ADD_CREDIT_CARD_INFO',
      payload: cardInfo,
    };
  };
  