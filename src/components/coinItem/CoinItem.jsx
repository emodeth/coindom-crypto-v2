import { Link } from "react-router-dom";
import "./coinItem.scss";

function numberWithCommas(price) {
  return Number(price)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CoinItem({ coin }) {
  const { name, iconUrl, symbol, price, change } = coin;

  return (
    <Link to={`coin/${name.toLowerCase()}`}>
      <div className="coin-item">
        <img className="coin-item__img" src={iconUrl} alt={symbol} />
        <div className="coin-item__content">
          <div className="coin-item__details">
            <p className="coin-item__name">{name}</p>
            <p
              className={
                Number(change) >= 0
                  ? "coin-item__change inc"
                  : "coin-item__change dec"
              }
            >
              {change}%
            </p>
          </div>
          <div className="coin-item__price">$ {numberWithCommas(price)}</div>
        </div>
      </div>
    </Link>
  );
}

export default CoinItem;
