import React from 'react';
import Button from '@mui/material/Button';
import WhatsappIcon from './icon.svg';

const WhatsappContact: React.FC = () => {
  return (
    <>
      <Button LinkComponent={'a'} href='https://wa.me/5567984249235' target='_blank' startIcon={<img src={WhatsappIcon} alt='Ícone do WhatsApp' />} sx={{ width: '100%' }}>
        Converse pelo WhatsApp
      </Button>
    </>
  );
}

export default WhatsappContact;
