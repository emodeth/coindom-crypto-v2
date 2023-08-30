import { useEffect, useState } from "react";

import MarketCoin from "../marketCoin/MarketCoin";
import Pagination from "../pagination/Pagination";
import Loader from "../loader/Loader";

import "./market.scss";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7d4091467emsh524b572f75eeea0p162719jsn91e9810a85de",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

function Market() {
  const [page, setPage] = useState(0);
  const [marketCoins, setMarketCoins] = useState([]);
  const [isMarketLoading, setIsMarketLoading] = useState(false);

  const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=${
    page * 10
  }`;

  useEffect(
    function () {
      async function fetchCoins() {
        try {
          setIsMarketLoading(true);

          const res = await fetch(url, options);
          const data = await res.json();
          setMarketCoins(data.data.coins);
        } catch {
          throw new Error("Something went wrong with catching coins");
        } finally {
          setIsMarketLoading(false);
        }
      }
      fetchCoins();
    },
    [url]
  );

  return (
    <div className="market" id="market">
      <div className="container">
        <h3 className="market__header">Market Update</h3>
        <div className="market__table">
          <div className="market__table-header">
            <p className="market__table-coin">Coin</p>
            <p className="market__table-price">Price</p>
            <p className="market__table-change">Change</p>
            <p className="market__table-cap">Market Cap</p>
          </div>
          {isMarketLoading ? (
            <Loader />
          ) : (
            marketCoins.map((coin) => (
              <MarketCoin coin={coin} key={coin.uuid} />
            ))
          )}

          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default Market;
