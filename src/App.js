import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home/Home";
import Coin from "./pages/coin/Coin";
import Navbar from "./components/navbar/Navbar";
import MobileNavbar from "./components/mobileNavbar/MobileNavbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
