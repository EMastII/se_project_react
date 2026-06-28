import React from "react";
import "./ModalWithForm.css";
import wtwrClose from "../../images/wtwrClose.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  name,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content modal__content_type_form">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type_form"
        >
          <img
            src={wtwrClose}
            alt="close button"
            className="modal__close-btn-img"
          />
        </button>
        <form name={name} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
