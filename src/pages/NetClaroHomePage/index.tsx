import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Top from '../../components/Top';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import PricingContent from '../../components/Pricing';


export default function NetClaroHomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Top />
      
      <Content>
        <Typography component={'h2'} variant='h4'>Sugestões de ofertas para você</Typography>
        <Typography component={'p'} variant='caption'>Aproveite algumas ofertas sugeridas.</Typography>
        <br />
        <PricingContent />
      </Content>
      <Footer />
    </Box>
  );
}