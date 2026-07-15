import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weatherType: "",
  };

  const {
    values,
    errors,
    handleChange,
    resetForm,
    validateForm,
    hasSubmitted,
    setHasSubmitted,
  } = useFormWithValidation(defaultValues);

  async function handleSubmit(evt) {
    evt.preventDefault();
    setHasSubmitted(true);

    // Validate immediately without waiting for state update
    if (validateForm()) {
      try {
        await onAddItem(values);
        resetForm();
        onClose();
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  }

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className={`modal__input ${
            hasSubmitted && errors.name ? "modal__input_type_error" : ""
          }`}
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      {hasSubmitted && errors.name && (
        <span className="modal__error modal__error_visible">{errors.name}</span>
      )}

      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className={`modal__input ${
            hasSubmitted && errors.imageUrl ? "modal__input_type_error" : ""
          }`}
          name="imageUrl"
          id="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      {hasSubmitted && errors.imageUrl && (
        <span className="modal__error modal__error_visible">
          {errors.imageUrl}
        </span>
      )}

      <fieldset
        className={`modal__radio-buttons ${
          hasSubmitted && errors.weatherType
            ? "modal__radio-buttons_type_error"
            : ""
        }`}
      >
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            name="weatherType"
            id="hot"
            type="radio"
            className="modal__radio-input"
            value="hot"
            checked={values.weatherType === "hot"}
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            name="weatherType"
            id="warm"
            type="radio"
            className="modal__radio-input"
            value="warm"
            checked={values.weatherType === "warm"}
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            name="weatherType"
            id="cold"
            type="radio"
            className="modal__radio-input"
            value="cold"
            checked={values.weatherType === "cold"}
            onChange={handleChange}
          />{" "}
          Cold
        </label>
        {hasSubmitted && errors.weatherType && (
          <span className="modal__error modal__error_visible">
            {errors.weatherType}
          </span>
        )}
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
