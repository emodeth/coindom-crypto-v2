import CoinItem from "../coinItem/CoinItem";
import Loader from "../loader/Loader";

import btcImg from "../../images/bitcoin.png";
import ethImg from "../../images/ethereum.png";

import "./hero.scss";
import { useEffect, useState } from "react";

const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=4&offset=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7d4091467emsh524b572f75eeea0p162719jsn91e9810a85de",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

function Hero() {
  const [sliderCoins, setSliderCoins] = useState([]);
  const [isSliderLoading, setIsSliderLoading] = useState(false);

  useEffect(function () {
    async function fetchCoinSlider() {
      try {
        setIsSliderLoading(true);

        const res = await fetch(url, options);
        const data = await res.json();
        setSliderCoins(data.data.coins);
      } catch {
        throw new Error("Something went wrong with catching coins");
      } finally {
        setIsSliderLoading(false);
      }
    }

    fetchCoinSlider();
  }, []);

  return (
    <div className="hero" id="home">
      <div className="container">
        <div className="hero__header">
          <img className="hero__btc" src={btcImg} alt="bitcon" />
          <h1 className="hero__text">
            Track And Trade <span>Crypto Currencies</span>
          </h1>
          <img className="hero__eth" src={ethImg} alt="ethereum" />
        </div>
        <div className="hero__coins">
          {isSliderLoading ? (
            <Loader />
          ) : (
            sliderCoins.map((coin) => <CoinItem coin={coin} key={coin.uuid} />)
          )}
        </div>
        <button className="hero__button">
          <a href="#market">
            See Prices <i className="fa-solid fa-angle-down"></i>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
