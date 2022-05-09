
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Top from '../Top';
import Footer from '../Footer';
import Content from '../Content';
type Props = {
  children: React.ReactNode;
  withBanner?: boolean; 
}
const WithAndWithoutTopBanner: React.FC<Props> = ({ children, withBanner }) => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <CssBaseline />
    {(withBanner) ? <Top /> : ''}
    
    <Content>
      {children}
    </Content>
    <Footer />
  </Box>
  );
}

export default WithAndWithoutTopBanner;