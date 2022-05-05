import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function PersonalData({ data, setData, setStepName }: { data: any, setData: (newData: any) => void, setStepName: (newData: any) => void }) {
  React.useEffect(() => {
    setStepName('personalData');
  }, [setStepName]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados pessoais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={data?.personalData?.name || ''}
            onChange={ (e) => setData({ ...data, personalData: { ...data?.personalData, name: e.target.value } }) }
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
            value={data?.personalData?.cpf || ''}
            onChange={ (e) => setData({ ...data, personalData: { ...data?.personalData, cpf: e.target.value } }) }
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
            value={data?.personalData?.email || ''}
            onChange={ (e) => setData({ ...data, personalData: { ...data?.personalData, email: e.target.value } }) }
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
            value={data?.personalData?.phone1 || ''}
            onChange={ (e) => setData({ ...data, personalData: { ...data?.personalData, phone1: e.target.value } }) }
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
          value={data?.personalData?.phone2 || ''}
          onChange={ (e) => setData({ ...data, personalData: { ...data?.personalData, phone2: e.target.value } }) }
            id="state"
            name="state"
            label="Outro telefone"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={data?.personalData?.occupation || ''}
          onChange={ (e) => setData({ ...data, personalData: { ...data?.personalData, occupation: e.target.value } }) }
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
          value={data?.personalData?.education || ''}
          onChange={ (e) => setData({ ...data, personalData: { ...data?.personalData, education: e.target.value } }) }
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