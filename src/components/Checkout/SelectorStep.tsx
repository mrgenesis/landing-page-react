import * as React from 'react';
import AddressForm from './Steps/AddressForm';
import PersonalData from './Steps/PersonalData';
import PaymentForm from './Steps/PaymentForm';
import Review from './Steps/Review';
import Done from './Steps/Done';
import { checkoutContext } from './checkoutContext';

export default function SelectorStep({ activeStep }: { activeStep: number }) {
  const [stateCheckout, dispachCheckout] = React.useContext(checkoutContext);
  const handleInput = (key: string, value: any) => {
    dispachCheckout({ type: 'UPDATE_FIELD', payload: { [key]: value }});    
  }
  React.useEffect(() => {
    dispachCheckout({ type: 'VALIDATE', payload: stateCheckout?.validateAll() }); 
    // eslint-disable-next-line
  }, [stateCheckout.dataOfValidation?.[stateCheckout.step]]);

  const handleFocus = (fieldName: string) => {
    dispachCheckout({ type: 'CURRENT_FOCUS', payload: fieldName });
  }
  
  switch (activeStep) {
    case 0:
      return <AddressForm handleInput={handleInput} handleFocus={handleFocus} />;
    case 1:
      return <PersonalData handleInput={handleInput} handleFocus={handleFocus} />; 
      case 2:
      return <PaymentForm handleInput={handleInput} handleFocus={handleFocus} />;
    case 3:
      return <Review />;
    case 4:
      return <Done />
    default:
      throw new Error('Unknown step');
  }
}