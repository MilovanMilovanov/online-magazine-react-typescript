import { ErrorData, ValidateFunctionParams } from "./interfaces";
import { loginFormErrors, isNumbersAndLettersOnly } from "./staticData";

function validateUsername(inputData: ValidateFunctionParams): void {
  const { value, errorData, setErrorData } = inputData;

  if (value.length < 6) {
    return setErrorData({
      ...errorData,
      isUsernameValid: false,
      username: loginFormErrors.username,
    });
  }

  return setErrorData({
    ...errorData,
    username: "",
    isUsernameValid: true,
  });
}

function validatePassword(inputData: ValidateFunctionParams): void {
  const { value, errorData, setErrorData } = inputData;

  if (value.length < 6) {
    return setErrorData({
      ...errorData,
      isPasswordValid: false,
      password: loginFormErrors.password,
    });
  }

  if (isNumbersAndLettersOnly.test(value)) {
    return setErrorData({
      ...errorData,
      isPasswordValid: true,
      password: "",
    });
  }

  setErrorData({
    ...errorData,
    isPasswordValid: false,
    password: loginFormErrors.passwordValidChars,
  });
}

export function LoginValidation(
  event: React.ChangeEvent<HTMLInputElement>,
  errorData: ErrorData,
  setErrorData: Function
): void {
  const { name, value } = event.target;

  if (name === "username")
    return validateUsername({ value, errorData, setErrorData });
  if (name === "password")
    return validatePassword({ value, errorData, setErrorData });
}
