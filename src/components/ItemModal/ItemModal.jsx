import "./ItemModal.css";
import wtwrClose from "../../images/wtwrClose.svg";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

function ItemModal({ onClose, card, isOpen, onCardDelete }) {
  const handleDeleteClick = () => {
    onCardDelete(card);
  };

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
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete-btn"
            type="button"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
