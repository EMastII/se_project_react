import { useState } from "react";

export const useFormWithValidation = (defaultValues) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validateField = (name, value) => {
    const fieldError = {};

    if (name === "name") {
      if (!value.trim()) {
        fieldError.name = "Name is required";
      } else if (value.trim().length < 2) {
        fieldError.name = "Name must be at least 2 characters";
      }
    }

    if (name === "imageUrl") {
      if (!value.trim()) {
        fieldError.imageUrl = "Image URL is required";
      } else {
        try {
          new URL(value);
        } catch {
          fieldError.imageUrl = "Please enter a valid URL";
        }
      }
    }

    if (name === "weatherType") {
      if (!value) {
        fieldError.weatherType = "Please select a weather type";
      }
    }

    return fieldError;
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);

    if (hasSubmitted) {
      const fieldError = validateField(name, value);
      const newErrors = { ...errors };
      if (Object.keys(fieldError).length > 0) {
        newErrors[name] = fieldError[name];
      } else {
        delete newErrors[name];
      }
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    } else if (values.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!values.imageUrl.trim()) {
      newErrors.imageUrl = "Image URL is required";
    } else {
      try {
        new URL(values.imageUrl);
      } catch {
        newErrors.imageUrl = "Please enter a valid URL";
      }
    }

    if (!values.weatherType) {
      newErrors.weatherType = "Please select a weather type";
    }

    setErrors(newErrors);
    const formIsValid = Object.keys(newErrors).length === 0;
    setIsValid(formIsValid);
    return formIsValid;
  };

  const resetForm = () => {
    setValues(defaultValues);
    setErrors({});
    setIsValid(true);
    setHasSubmitted(false);
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    validateForm,
    hasSubmitted,
    setHasSubmitted,
  };
};
