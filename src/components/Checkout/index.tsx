import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { requestCollectionReducer } from '../../services/reducers/db/request-collection';
import SelectorStep from './SelectorStep';
import { checkoutContext } from './checkoutContext';
import BackAndNextButtom from './Steps/BackAndNextButtom';

const stepsLabels = ['Endereço', 'Pessoal', 'Faturamento', 'Resumo', 'Concluído'];

export default function Checkout() {
  const [stateCheckout] = React.useContext(checkoutContext);
  const [stepperOrientation, setStepperOrientation] = React.useState<any>({ orientation: 'horizontal', alternativeLabel: true });
  const [activeStep, setActiveStep] = React.useState(0);
  const [, requestCollectionDispatch] = React.useReducer(requestCollectionReducer, {});
  React.useEffect(() => {
    if(window.innerWidth < 390) {
      setStepperOrientation({ orientation: 'vertical' });
    }
    requestCollectionDispatch({ type: 'CREATE' });
  }, []);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (stateCheckout.step === 'done') {
      return;
    }
    requestCollectionDispatch({ type: 'UPDATE', payload: { step: stateCheckout.step, [stateCheckout.step]: stateCheckout.data[stateCheckout.step] || null } });
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
        {stepsLabels.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {SelectorStep({ activeStep })}
        { (activeStep === (stepsLabels.length - 1)) ? '' : <BackAndNextButtom activeStep={activeStep} back={handleBack} next={handleNext} /> }
      </React.Fragment>
    </Paper>
  );
}