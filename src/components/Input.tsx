import React from "react";

interface Props {
  label: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  error: boolean;
  passError?: boolean;
}

const Input = ({
  label,
  handleInputChange,
  value,
  name,
  type,
  placeholder,
  required,
  error,
  passError,
}: Props) => {
  return (
    <>
      <label aria-label={label}>
        <input
          onChange={handleInputChange}
          className="register-input"
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </label>
      <p
        className={
          error ? "register-error-active" : "register-error not-active"
        }
      >
        {passError
          ? "password should contain number and be the same as confirmed password."
          : "min length should at least 6 chars."}
      </p>
    </>
  );
};

export default Input;
