import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { checkoutContext } from '../checkoutContext';

export default function PersonalData({ handleInput }: { handleInput: (key: string, value: any) => void }) {
  const [stateCheckout, dispachCheckout] = React.useContext(checkoutContext);
  const [currentStep] = React.useState('personalData');
  
  React.useEffect(() => {
    dispachCheckout({ type: 'SET_STEP', payload: { step: currentStep }});   
  }, [currentStep, dispachCheckout]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados pessoais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.[currentStep]?.name || ''}
            onChange={ (e) => handleInput('name', e.target.value) }
            required
            id="firstName"
            name="firstName"
            label="Nome completo"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.personalData?.cpf || ''}
            onChange={ (e) => handleInput('cpf', e.target.value)}
            required
            id="lastName"
            name="lastName"
            label="CPF"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={stateCheckout?.personalData?.email || ''}
            onChange={ (e) => handleInput('email', e.target.value) }
            required
            id="personalData1"
            name="personalData1"
            label="E-mail"
            fullWidth
            autoComplete="shipping personalData-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.personalData?.phone1 || ''}
            onChange={ (e) => handleInput('phone1', e.target.value) }
            required
            id="city"
            name="city"
            label="Telefone principal"
            fullWidth
            autoComplete="shipping personalData-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={stateCheckout?.personalData?.phone2 || ''}
          onChange={ (e) => handleInput('phone2', e.target.value) }
            id="state"
            name="state"
            label="Outro telefone"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={stateCheckout?.personalData?.occupation || ''}
          onChange={ (e) => handleInput('occupation', e.target.value) }
            required
            id="zip"
            name="zip"
            label="Profissão"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={stateCheckout?.personalData?.education || ''}
          onChange={ (e) => handleInput('education', e.target.value) }
            required
            id="country"
            name="country"
            label="Escolaridade"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>          
          <Button variant='contained' fullWidth component="label" color="inherit">
            {" "}
            Documento de identificação com foto
            <input type="file" hidden onChange={(e) => console.log(e.target.value)} />
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}