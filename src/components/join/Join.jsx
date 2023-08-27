import btcImg from "../../images/bitcoin.png";
import ethImg from "../../images/ethereum.png";

import "./join.scss";

function Join() {
  return (
    <div className="join" id="join">
      <div className="container">
        <div className="join__header">
          <img className="join__btc" src={btcImg} alt="bitcon" />
          <h1 className="join__text">
            Join Us Via <span>Discord</span>
          </h1>
          <img className="join__eth" src={ethImg} alt="ethereum" />
        </div>
        <p className="join__desc">
          Invest and manage all your crypto at one place.
        </p>
        <div className="join__button--center">
          <button className="join__button">Join Via Discord</button>
        </div>
      </div>
    </div>
  );
}

export default Join;
