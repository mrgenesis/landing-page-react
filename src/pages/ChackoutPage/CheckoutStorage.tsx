
import React, { useContext, useReducer } from 'react';
import { checkoutContext } from '../../components/Checkout/checkoutContext';
import checkoutReducer from '../../components/Checkout/checkoutReducer';



type Props = {
  children: React.ReactNode
};

export const CheckoutStorage: React.FC<Props> = ({ children }) => {
  const [initState] = useContext(checkoutContext);
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(checkoutReducer, initState);
  return (
    <checkoutContext.Provider value={[state, dispatch]}>
      { children }
    </checkoutContext.Provider>
  );
}

