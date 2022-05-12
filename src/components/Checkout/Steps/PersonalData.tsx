import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { checkoutContext } from '../checkoutContext';
import { PersonalDataPropertiesNames, Steps } from '../interfaces';

export default function PersonalData({ handleInput, handleFocus }: { handleInput: (key: string, value: any) => void, handleFocus: (filedName: string) => void }) {
  const [stateCheckout, dispachCheckout] = React.useContext(checkoutContext);
  
  React.useEffect(() => {
    dispachCheckout({ type: 'SET_STEP', payload: { step: Steps.personalData }});   
  }, [dispachCheckout]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados pessoais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.data?.[Steps.personalData]?.name || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(PersonalDataPropertiesNames.name)}
            helperText={stateCheckout?.displayHelperText(PersonalDataPropertiesNames.name)}
            id={PersonalDataPropertiesNames.name}
            name={PersonalDataPropertiesNames.name}
            required={stateCheckout?.dataOfValidation?.[Steps.personalData]?.name?.required}
            inputProps={{ maxLength: 75 }}
            label="Nome completo"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.data?.[Steps.personalData]?.cpf || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(PersonalDataPropertiesNames.cpf)}
            helperText={stateCheckout?.displayHelperText(PersonalDataPropertiesNames.cpf)}
            id={PersonalDataPropertiesNames.cpf}
            name={PersonalDataPropertiesNames.cpf}
            required={stateCheckout?.dataOfValidation?.[Steps.personalData]?.cpf?.required}
            inputProps={{ maxLength: 11 }}
            label="CPF"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={stateCheckout?.data?.[Steps.personalData]?.email || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(PersonalDataPropertiesNames.email)}
            helperText={stateCheckout?.displayHelperText(PersonalDataPropertiesNames.email)}
            id={PersonalDataPropertiesNames.email}
            name={PersonalDataPropertiesNames.email}
            required={stateCheckout?.dataOfValidation?.[Steps.personalData]?.email?.required}
            label="E-mail"
            autoComplete="email"
            type="email"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.data?.[Steps.personalData]?.phone1 || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(PersonalDataPropertiesNames.phone1)}
            helperText={stateCheckout?.displayHelperText(PersonalDataPropertiesNames.phone1)}
            id={PersonalDataPropertiesNames.phone1}
            name={PersonalDataPropertiesNames.phone1}
            required={stateCheckout?.dataOfValidation?.[Steps.personalData]?.phone1?.required}
            inputProps={{ maxLength: 11 }}
            label="Telefone principal"
            fullWidth
            autoComplete="shipping personalData-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.data?.[Steps.personalData]?.phone2 || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(PersonalDataPropertiesNames.phone2)}
            helperText={stateCheckout?.displayHelperText(PersonalDataPropertiesNames.phone2)}
            id={PersonalDataPropertiesNames.phone2}
            name={PersonalDataPropertiesNames.phone2}
            required={stateCheckout?.dataOfValidation?.[Steps.personalData]?.phone2?.required}
            label="Outro telefone"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.data?.[Steps.personalData]?.occupation || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(PersonalDataPropertiesNames.occupation)}
            helperText={stateCheckout?.displayHelperText(PersonalDataPropertiesNames.occupation)}
            id={PersonalDataPropertiesNames.occupation}
            name={PersonalDataPropertiesNames.occupation}
            required={stateCheckout?.dataOfValidation?.[Steps.personalData]?.occupation?.required}
            inputProps={{ maxLength: 25 }}
            label="Profissão"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={stateCheckout?.data?.[Steps.personalData]?.education || ''}
            onChange={e => handleInput(e.target.name, e.target.value)}
            onFocus={(e) => handleFocus(e.target.name)}
            error={stateCheckout?.errorView(PersonalDataPropertiesNames.education)}
            helperText={stateCheckout?.displayHelperText(PersonalDataPropertiesNames.education)}
            id={PersonalDataPropertiesNames.education}
            name={PersonalDataPropertiesNames.education}
            required={stateCheckout?.dataOfValidation?.[Steps.personalData]?.education?.required}
            inputProps={{ maxLength: 25 }}
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