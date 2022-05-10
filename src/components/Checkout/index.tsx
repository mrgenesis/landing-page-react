import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { requestCollectionReducer } from '../../services/reducers/db/request-collection';
import SelectorStep from './SelectorStep';
import Done from './Steps/Done';
import { checkoutContext } from './checkoutContext';

const steps = ['Endereço', 'Pessoal', 'Faturamento', 'Concluir'];

export default function Checkout() {
  const [stateCheckout] = React.useContext(checkoutContext);
  const [done, setDone] = React.useState(0);
  const [stepperOrientation, setStepperOrientation] = React.useState<any>({ orientation: 'horizontal', alternativeLabel: true });
  const [activeStep, setActiveStep] = React.useState(0);
  const [requestNumber, setRequestNumber] = React.useState<number | undefined>();
  const [, requestCollectionDispatch] = React.useReducer(requestCollectionReducer, {});
  React.useEffect(() => {
    if(window.innerWidth < 390) {
      setStepperOrientation({ orientation: 'vertical' });
    }
    requestCollectionDispatch({ type: 'CREATE' });
    const RN = Number(localStorage.getItem('requestNumber'));
    setRequestNumber(RN);
  }, []);
  const handleNext = () => {
    requestCollectionDispatch({ type: 'UPDATE', payload: { step: stateCheckout.step, [stateCheckout.step]: stateCheckout[stateCheckout.step] || null } });
    setActiveStep(activeStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3, mt: 10 } }}>
      <Typography component="h1" variant="h4" align="center">
        Coleta de dados
      </Typography>
      <Stepper activeStep={activeStep} { ...stepperOrientation } sx={{ pt: 3, pb: 5, }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {(activeStep === steps.length) 
        ? (function() {
          if(!done) { // TODO escrever esse código de uma maneira mais elegante
            setDone(1);
            requestCollectionDispatch({ type: 'DONE' });
          }
          return <Done requestNumber={requestNumber as number} />
        }()) 
        : (
          <React.Fragment>
            {SelectorStep({ activeStep })}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Voltar
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? 'Concluir' : 'Próximo'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </React.Fragment>
    </Paper>
  );
}