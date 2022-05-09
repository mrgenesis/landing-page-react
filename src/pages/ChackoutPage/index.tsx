import Checkout from "../../components/Checkout";
import WithAndWithoutTopBanner from "../../components/Layouts/WithAndWithoutTopBanner";

const CheckoutPage = () => {

  return (
    <WithAndWithoutTopBanner> 
      <Checkout />
    </WithAndWithoutTopBanner>
  );
}

export default CheckoutPage;