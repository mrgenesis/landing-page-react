import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { checkoutContext } from '../checkoutContext';

const products = [
  {
    name: '350 MEGA',
    desc: 'Internet 350 download/ 30 upload',
    price: '99.99',
  },
  {
    name: 'Claro Box',
    desc: 'Grade do Top HD',
    price: '29.00',
  },
];

export default function Review() {
  const [stateCheckout, dispachCheckout] = React.useContext(checkoutContext);
  
  React.useEffect(() => {
    dispachCheckout({ type: 'SET_STEP', payload: { step: 'done' }});  
    dispachCheckout({ type: 'VALIDATE', payload: stateCheckout?.validateAll() }); // eslint-disable-next-line
  }, []);
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Produto selecionado
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">R${Number(product.price).toLocaleString('pt-br')}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            R$129,99 por mês
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Endereço de instalação
          </Typography>
          <Typography gutterBottom>{stateCheckout.data.address.streetName}, {stateCheckout.data.address.streetNumber}</Typography>
          <Typography gutterBottom>{stateCheckout.data.address.city} - {stateCheckout.data.address.state}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Dados da fatura
          </Typography>
          <Grid container>
          <Grid item xs={6}>
              <Typography gutterBottom>Forma de pagamento</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Boleto</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Vencimento</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{stateCheckout.data.invoice.dueDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}