import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useSearchParams } from 'react-router-dom';
import { checkoutContext } from '../checkoutContext';

export default function AddressForm({ handleInput }: { handleInput: (key: string, value: any) => void }) {
  const [stateCheckout, dispachCheckout] = React.useContext(checkoutContext);
  const [currentStep] = React.useState('address');
  
  const [params] = useSearchParams();
  const [cidade] = React.useState(params.get('cidade'));
  React.useEffect(() => {
    dispachCheckout({ type: 'SET_STEP', payload: { step: currentStep }});
    dispachCheckout({ type: 'UPDATE_FIELD', payload: { 'city': cidade || 'Campo Grande' }});
    dispachCheckout({ type: 'UPDATE_FIELD', payload: { 'state': cidade || 'MS' }});    
  }, [currentStep, cidade, dispachCheckout]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Endereço de instalação
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            value={stateCheckout?.[currentStep]?.zipCode?.replace(/\D/g, '') || ''}
            onChange={e => handleInput('zipCode', e.target.value.replace(/\D/g, ''))}
            id="zipCode"
            name="zipCode"
            label="CEP"
            fullWidth
            autoComplete="postal-code"
            variant="standard"
            inputProps={{ maxLength: 8 }}
            />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={stateCheckout?.[currentStep]?.streetName || ''}
            onChange={e => handleInput('streetName', e.target.value)}
            required
            id="address1"
            name="address1"
            label="Nome da rua"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={stateCheckout?.[currentStep]?.streetNumber || ''}
            onChange={ (e) => handleInput('streetNumber', e.target.value) }
            id="address2"
            name="address2"
            label="Número"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            type={'number'}
            inputProps={{ maxLength: 5 }}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            value={stateCheckout?.[currentStep]?.neighborhood || ''}
            onChange={ (e) => handleInput('neighborhood', e.target.value) }
            required
            id="zip"
            name="zip"
            label="Bairro"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            disabled
            value={stateCheckout?.[currentStep]?.city || ''}
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            disabled
            value={stateCheckout?.[currentStep]?.state || ''}
            id="state"
            name="state"
            label="Estado"
            fullWidth
            variant="standard"
          />
        </Grid>
        
        
      </Grid>
    </React.Fragment>
  );
}