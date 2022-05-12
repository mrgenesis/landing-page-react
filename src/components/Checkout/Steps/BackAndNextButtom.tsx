import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { checkoutContext } from '../checkoutContext';

type Props = { activeStep: number, back: () => void, next: () => void }
const BackAndNextButtom: React.FC<Props> = ({ activeStep, back, next }) => {
  const [stateCheckout] = React.useContext(checkoutContext);
  
  return (
      <React.Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {activeStep !== 0 && (
            <Button onClick={back} sx={{ mt: 3, ml: 1 }}>
              Voltar
            </Button>
          )}
          <Button
            variant="contained"
            onClick={next}
            sx={{ mt: 3, ml: 1 }}
            disabled={!stateCheckout?.isValidatedAll?.[stateCheckout.step]} 
            >
            {stateCheckout.step === 'done' ? 'Concluir' : 'Próximo'}
          </Button>
        </Box>
      </React.Fragment>
  );
}


export default BackAndNextButtom;
