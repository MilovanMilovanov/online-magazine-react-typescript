export interface ErrorData {
  username: string;
  password: string;
  isUsernameValid?: boolean;
  isPasswordValid?: boolean;
  [key: string]: any;
}

export interface ErrorMessages {
  [index: string]: string;
}

export interface ValidateFunctionParams {
  value: string;
  errorData: ErrorData;
  setErrorData: Function;
}
