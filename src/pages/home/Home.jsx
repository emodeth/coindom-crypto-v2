import Hero from "../../components/hero/Hero";
import Market from "../../components/market/Market";
import ChooseUs from "../../components/chooseUs/ChooseUs";

import "./home.scss";
import Join from "../../components/join/Join";
import Footer from "../../components/footer/Footer";

function home() {
  return (
    <>
      <Hero />
      <Market />
      <ChooseUs />
      <Join />
      <Footer />
    </>
  );
}

export default home;
