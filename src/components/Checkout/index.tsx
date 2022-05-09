import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PersonalData from './PersonalData';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { requestCollectionReducer } from '../../services/reducers/db/request-collection';



const steps = ['Endereço', 'Pessoal', 'Faturamento', 'Concluir'];

function getStepContent(step: number, { data, setData, setStepName }: { data: any, setData: (newData: any) => void, setStepName: (newData: any) => void }) {
  switch (step) {
    case 0:
      return <AddressForm data={data} setData={setData} setStepName={setStepName} />;
      case 1:
        return <PersonalData data={data} setData={setData} setStepName={setStepName} />;
        case 2:
      return <PaymentForm data={data} setData={setData} setStepName={setStepName} />;
      case 3:
        return <Review data={data} setStepName={setStepName} />;
      default:
        throw new Error('Unknown step');
  }
}
      
export default function Checkout() {
  const [done, setDone] = React.useState(0);
  const [stepperOrientation, setStepperOrientation] = React.useState<any>({ orientation: 'horizontal', alternativeLabel: true });
  const [activeStep, setActiveStep] = React.useState(0);
  const [requestNumber, setRequestNumber] = React.useState<number | undefined>();
  const [data, setData] = React.useState<any>({});
  const [stepName, setStepName] = React.useState('');
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
    requestCollectionDispatch({ type: 'SET_STEP', payload: stepName });
    requestCollectionDispatch({ type: 'UPDATE', payload: { [stepName]: data[stepName] || null } });
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
              return (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Agradecemos pelo seu pedido.
                  </Typography>
                  <Typography variant="subtitle1">
                    Seu número de pedido é #{requestNumber}. Os dados serão analisados e em breve entremos em contato para agendarmos a data da instalação.
                  </Typography>
                </React.Fragment>
              );
            }()) 
            : (
              <React.Fragment>
                {getStepContent(activeStep, { data, setData, setStepName })}
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