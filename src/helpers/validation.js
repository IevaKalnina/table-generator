export const validateName = (value) =>
  value.trim() === "" || /^[A-Za-z]+$/.test(value)
    ? ""
    : "Name must be alphabetic";

export const validateSurname = (value) =>
  value.trim() === "" || /^[A-Za-z]+$/.test(value)
    ? ""
    : "Surname must be alphabetic";

export const validateAge = (value) =>
  value.trim() === "" || /^\d+$/.test(value) ? "" : "Age must be numeric";
