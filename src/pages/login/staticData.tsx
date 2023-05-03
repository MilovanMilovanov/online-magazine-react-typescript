import { ErrorData, ErrorMessages } from "./interfaces";

export const inputProps = [
  {
    type: "username",
    name: "username",
    id: "username",
    placeholder: "Enter Username",
  },
  {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Password",
  },
];

export const errorDefaultValues: ErrorData = {
  username: "",
  password: "",
  isUsernameValid: false,
  isPasswordValid: false,
};

export const loginFormErrors: ErrorMessages = {
  username: "Username must be atleast 6 characters long.",
  password: "Password must be atleast 6 characters long.",
  passwordValidChars: "Password must contain numbers and letters only.",
};

export const isNumbersAndLettersOnly: RegExp =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
