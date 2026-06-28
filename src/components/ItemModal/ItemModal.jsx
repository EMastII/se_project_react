import "./ItemModal.css";
import wtwrClose from "../../images/wtwrClose.svg";

function ItemModal({ onClose, card, isOpen }) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type_image"
        >
          <img
            className="modal__close-btn-img"
            src={wtwrClose}
            alt="close button"
          />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
