

import { Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout";
import NetClaroHomePage from "./NetClaroHomePage";

function RootPage() {
  return (
    <Routes>
      <Route path="/" element={<NetClaroHomePage />} />
      <Route path="/cadastro" element={<Checkout /> } />
    </Routes>
  );
}

export default RootPage;