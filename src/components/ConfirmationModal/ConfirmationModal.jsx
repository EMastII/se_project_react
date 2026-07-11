import wtwrClose from "../../images/wtwrClose.svg";
import "./ConfirmationModal.css";

function ConfirmationModal({
  onClose,
  card,
  isOpen,
  onClick,
  handleDeleteCard,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__confirmation-modal-container">
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
        <p className="confirmation-text">
          Are you sure you want to delete this clothing item?
        </p>

        <button
          type="submit"
          className="confirmation-modal__delete"
          onClick={() => handleDeleteCard(card._id)}
        >
          Yes, delete item
        </button>
        <button
          type="submit"
          className="confirmation-modal__cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
export default ConfirmationModal;
