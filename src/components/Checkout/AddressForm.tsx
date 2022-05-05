import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm({ data, setData, setStepName }: { data: any, setData: (newData: any) => void, setStepName: (newData: any) => void }) {
  React.useEffect(() => {
    setStepName('address');
  }, [setStepName]);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Endereço de instalação
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            value={data?.address?.zipCode || ''}
            onChange={ (e) => setData({ ...data, address: { ...data?.address, zipCode: e.target.value } }) }
            id="zipCode"
            name="zipCode"
            label="CEP"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={data?.address?.streetName || ''}
            onChange={ (e) => setData({ ...data, address: { ...data?.address, streetName: e.target.value } }) }
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
            value={data?.address?.streetNumber || ''}
            onChange={ (e) => setData({ ...data, address: { ...data?.address, streetNumber: e.target.value } }) }
            id="address2"
            name="address2"
            label="Número"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            value={data?.address?.neighborhood || ''}
            onChange={ (e) => setData({ ...data, address: { ...data?.address, neighborhood: e.target.value } }) }
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
            value={data?.address?.city || ''}
            onChange={ (e) => setData({ ...data, address: { ...data?.address, city: e.target.value } }) }
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
            value={data?.address?.state || ''}
            onChange={ (e) => setData({ ...data, address: { ...data?.address, state: e.target.value } }) }
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