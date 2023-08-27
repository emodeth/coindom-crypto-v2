import Hero from "../../components/hero/Hero";
import Market from "../../components/market/Market";
import ChooseUs from "../../components/chooseUs/ChooseUs";

import "./home.scss";

function home() {
  return (
    <>
      <Hero />
      <Market />
      <ChooseUs />
    </>
  );
}

export default home;
