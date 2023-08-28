import { Link } from "react-router-dom";
import "./marketCoin.scss";

function numberWithCommasPrice(price) {
  return Number(price)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberWithCommas(price) {
  return Number(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function MarketCoin({ coin }) {
  const { name, price, iconUrl, marketCap, symbol } = coin;

  return (
    <Link to={`coin/${symbol.toLowerCase()}`}>
      <div className="market-coin">
        <div className="market-coin__coin">
          <img className="market-coin__image" src={iconUrl} alt="btc" />
          <p className="market-coin__name">{name}</p>
        </div>
        <p className="market-coin__price">$ {numberWithCommasPrice(price)}</p>
        <p className="market-coin__volume">
          $ {numberWithCommas(coin["24hVolume"])}
        </p>
        <p className="market-coin__cap">$ {numberWithCommas(marketCap)}</p>
      </div>
    </Link>
  );
}

export default MarketCoin;
