import Checkout from "../../components/Checkout";
import WithAndWithoutTopBanner from "../../components/Layouts/WithAndWithoutTopBanner";
import { CheckoutStorage } from "./CheckoutStorage";

const CheckoutPage = () => {

  return (
    <WithAndWithoutTopBanner> 
      <CheckoutStorage>
        <Checkout />
      </CheckoutStorage>
    </WithAndWithoutTopBanner>
  );
}

export default CheckoutPage;