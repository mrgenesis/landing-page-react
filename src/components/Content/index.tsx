
import Container from '@mui/material/Container';
import React from 'react';

type Props = { children: React.ReactNode }

const Content: React.FC<Props> = ({ children }) => {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
      {children}
    </Container>
  );
}

export default Content;
