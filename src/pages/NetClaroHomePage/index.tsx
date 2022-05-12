
import Typography from '@mui/material/Typography';
import PricingContent from '../../components/Pricing';
import FAQ from '../../components/FAQ';
import WithAndWithoutTopBanner from "../../components/Layouts/WithAndWithoutTopBanner";
import WhatsappContact from '../../components/WhatsappContact';

export default function NetClaroHomePage() {
  return (
    <WithAndWithoutTopBanner withBanner> 
      <>
        <Typography component={'h2'} variant='h4'>Sugestões de ofertas para você</Typography>
        <Typography component={'p'} variant='caption'>Aproveite algumas ofertas sugeridas.</Typography>
        <br />
        <PricingContent />
        <FAQ />
        <WhatsappContact />
      </>
    </WithAndWithoutTopBanner>
  );
}