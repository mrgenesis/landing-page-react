import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { checkoutContext } from '../checkoutContext';
import { Steps } from '../interfaces';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PaymentForm({ handleInput, handleFocus }: { handleInput: (key: string, value: any) => void, handleFocus: (filedName: string) => void }) {
  const [stateCheckout, dispachCheckout] = React.useContext(checkoutContext);
  const handleDueDate = (dueDate: string, value: string) => {
    handleFocus(dueDate);
    handleInput(dueDate, value);
  }
  React.useEffect(() => {
    dispachCheckout({ type: 'SET_STEP', payload: { step: Steps.invoice }}); // eslint-disable-next-line
  }, []);
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados da fatura
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">
            <FormLabel>Dia do vencimento</FormLabel>
            <RadioGroup 
              value={stateCheckout?.data[Steps.invoice]?.dueDate || ''}
              onChange={(e) => handleDueDate('dueDate', e.target.value)}
              row
              aria-labelledby="group-label"
              name="dueDate"
            >
              <FormControlLabel value="5" control={<Radio />} label="5" />
              <FormControlLabel value="8" control={<Radio />} label="8" />
              <FormControlLabel value="10" control={<Radio />} label="10" />
              <FormControlLabel value="15" control={<Radio />} label="15" />
            </RadioGroup>
          </FormControl>
        </Grid>        
      </Grid>      
    </React.Fragment>
  );
}
