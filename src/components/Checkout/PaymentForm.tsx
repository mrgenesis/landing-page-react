import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function PaymentForm({ data, setData, setStepName }: { data: any, setData: (newData: any) => void, setStepName: (newData: any) => void }) {
  React.useEffect(() => {
    setStepName('invoice');
  }, [setStepName]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados da fatura
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
          value={data?.invoice?.dueDate || ''}
          onChange={ (e) => setData({ ...data, invoice: { ...data?.invoice, dueDate: e.target.value } }) }
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