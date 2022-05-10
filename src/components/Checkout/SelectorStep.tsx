import * as React from 'react';
import AddressForm from './Steps/AddressForm';
import PersonalData from './Steps/PersonalData';
import PaymentForm from './Steps/PaymentForm';
import Review from './Steps/Review';
import { checkoutContext } from './checkoutContext';

export default function SelectorStep({ activeStep }: { activeStep: number }) {
  const [, dispachCheckout] = React.useContext(checkoutContext);
  const handleInput = (key: string, value: any) => {
    dispachCheckout({ type: 'UPDATE_FIELD', payload: { [key]: value }});
  }

  switch (activeStep) {
    case 0:
      return <AddressForm handleInput={handleInput} />;
    case 1:
      return <PersonalData handleInput={handleInput} />;
      case 2:
      return <PaymentForm handleInput={handleInput} />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}