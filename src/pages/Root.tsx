

import { Routes, Route } from "react-router-dom";
import Back from "../components/Back";
import Checkout from "../components/Checkout";
import NetClaroHomePage from "./NetClaroHomePage";

function RootPage() {
  return (
    <Routes>
      <Route path="/" element={<Back />} />
      <Route path="/net-claro" element={<NetClaroHomePage /> } />
      <Route path="/cadastro" element={<Checkout /> } />
    </Routes>
  );
}

export default RootPage;