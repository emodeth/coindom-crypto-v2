import "./chooseCard.scss";

function ChooseCard({ img, header, text }) {
  return (
    <div className="choose-card">
      <div className="choose-card__image-container">
        <i className={`choose-card__image fa-solid fa-${img}`}></i>
      </div>
      <div className="choose-card__content">
        <h4 className="choose-card__header">{header}</h4>
        <p className="choose-card__text">{text}</p>
      </div>
    </div>
  );
}

export default ChooseCard;
