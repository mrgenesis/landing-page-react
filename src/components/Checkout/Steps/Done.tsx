
import React from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  requestNumber: number;
}

const Done: React.FC<Props> = ({ requestNumber }: Props) => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Agradecemos pelo seu pedido.
      </Typography>
      <Typography variant="subtitle1">
        Seu número de pedido é #{requestNumber}. Os dados serão analisados e em breve entremos em contato para agendarmos a data da instalação.
      </Typography>
    </React.Fragment>
  );
}
export default Done;