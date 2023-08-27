import ChooseCard from "../chooseCard/ChooseCard";
import chooseImg from "../../images/choose-main.png";

import "./chooseUs.scss";

function ChooseUs() {
  return (
    <div className="choose">
      <div className="container">
        <h2 className="choose__header">
          Why <span>Choose Us</span>
        </h2>
        <div className="choose__container">
          <div className="choose__col choose__col-1">
            <ChooseCard
              img="wallet"
              header="Connect Your Wallet"
              text="Use Trust Wallet, Metamask or to connect to the app."
            />
            <ChooseCard
              img="pen-ruler"
              header="Select Your Quantity"
              text="Upload your crypto and set a title, description and price."
            />
            <ChooseCard
              img="bolt"
              header="Confirm Transaction"
              text="Earn by selling your crypto on our marketplace."
            />
          </div>
          <div className="choose__col choose__col-2">
            <img src={chooseImg} alt="choose us" />
          </div>
          <div className="choose__col choose__col-3">
            <ChooseCard
              img="satellite-dish"
              header="Recieve Your Own NFTs"
              text="Invest all your crypto at one place on one platform."
            />
            <ChooseCard
              img="chess-knight"
              header="Take a Market To Sell"
              text="Discover, collect the right crypto collections to buy or sell."
            />
            <ChooseCard
              img="boxes-stacked"
              header="Drive Your Collection"
              text="We make it easy to Discover, Invest and manage."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
