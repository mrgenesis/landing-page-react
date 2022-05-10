import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { checkoutContext } from '../checkoutContext';

export default function PaymentForm({ handleInput }: { handleInput: (key: string, value: any) => void }) {
  const [stateCheckout, dispachCheckout] = React.useContext(checkoutContext);
  const [currentStep] = React.useState('invoice');
  
  React.useEffect(() => {
    dispachCheckout({ type: 'SET_STEP', payload: { step: currentStep }});   
  }, [currentStep, dispachCheckout]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados da fatura
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
          value={stateCheckout?.[currentStep]?.dueDate || ''}
          onChange={ (e) => handleInput('dueDate', e.target.value) }
            required
            id="cardName"
            label="Dia do vencimento"
            fullWidth
            variant="standard"
          />
        </Grid>        
      </Grid>
    </React.Fragment>
  );
}