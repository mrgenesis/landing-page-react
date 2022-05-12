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
    // TODO o momento da validação do dados deve ser ajustado. Da forma está agora, 
    // o sistema está permitindo passar para a próxima fase se o campo deixar de ser validado.
    // Exemplo: 1) valida todos os campos, 2) invalide um ou mais campos. Ao validar um, é permitido passar, mesmo que haja outros inválidos
    dispachCheckout({ type: 'VALIDATE', payload: stateCheckout?.validateAll() }); // eslint-disable-next-line
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