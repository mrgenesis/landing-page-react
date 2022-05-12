import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useSearchParams } from 'react-router-dom';
import { checkoutContext } from '../checkoutContext';
import { AdressPropertiesNames, Steps } from '../interfaces';
// import { ValidationResult } from '../validations';

export default function AddressForm({ handleInput, handleFocus }: { handleInput: (key: string, value: any) => void, handleFocus: (filedName: string) => void }) {
  const [stateCheckout, dispachCheckout] = React.useContext(checkoutContext);

  const [params] = useSearchParams();
  const [cidade] = React.useState(params.get('cidade'));
  React.useEffect(() => {
    dispachCheckout({ type: 'SET_STEP', payload: { step: Steps.address }});
    handleFocus(AdressPropertiesNames.city);
    dispachCheckout({ type: 'UPDATE_FIELD', payload: { [AdressPropertiesNames.city]: cidade || 'Campo Grande' }});
    handleFocus(AdressPropertiesNames.state);
    dispachCheckout({ type: 'UPDATE_FIELD', payload: { [AdressPropertiesNames.state]: cidade || 'MS' }});  // eslint-disable-next-line  
    handleFocus(AdressPropertiesNames.zipCode);
  }, []);
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Endereço de instalação
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            value={stateCheckout.data?.[Steps.address]?.zipCode || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(AdressPropertiesNames.zipCode)}
            helperText={stateCheckout?.displayHelperText(AdressPropertiesNames.zipCode)}
            id={AdressPropertiesNames.zipCode}
            name={AdressPropertiesNames.zipCode}
            required={stateCheckout?.dataOfValidation?.[Steps.address]?.zipCode?.required}
            label="CEP"
            fullWidth
            autoComplete="postal-code"
            variant="standard"
            inputProps={{ maxLength: 8 }}
            autoFocus
            />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={stateCheckout.data?.[Steps.address]?.streetName || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(AdressPropertiesNames.streetName)}
            helperText={stateCheckout?.displayHelperText(AdressPropertiesNames.streetName)}
            required={!!stateCheckout?.dataOfValidation?.[Steps.address]?.streetName?.required}
            id={AdressPropertiesNames.streetName}
            name={AdressPropertiesNames.streetName}
            label="Nome da rua"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={stateCheckout.data?.[Steps.address]?.streetNumber || ''}
            onChange={ (e) => handleInput(AdressPropertiesNames.streetNumber, e.target.value) }
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(AdressPropertiesNames.streetNumber)}
            helperText={stateCheckout?.displayHelperText(AdressPropertiesNames.streetNumber)}
            id={AdressPropertiesNames.streetNumber}
            name={AdressPropertiesNames.streetNumber}
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
            value={stateCheckout.data?.[Steps.address]?.neighborhood || ''}
            onChange={ (e) => handleInput(AdressPropertiesNames.neighborhood, e.target.value) }
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(AdressPropertiesNames.neighborhood)}
            helperText={stateCheckout?.displayHelperText(AdressPropertiesNames.neighborhood)}
            id={AdressPropertiesNames.neighborhood}
            name={AdressPropertiesNames.neighborhood}
            required
            label="Bairro"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            disabled
            value={stateCheckout.data?.[Steps.address]?.city || ''}
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
            value={stateCheckout.data?.[Steps.address]?.state || ''}
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