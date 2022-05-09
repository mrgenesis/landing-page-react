

import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./ChackoutPage";
import NetClaroHomePage from "./NetClaroHomePage";

function RootPage() {
  return (
    <Routes>
      <Route path="/" element={<NetClaroHomePage />} />
      <Route path="/cadastro" element={<CheckoutPage /> } />
    </Routes>
  );
}

export default RootPage;