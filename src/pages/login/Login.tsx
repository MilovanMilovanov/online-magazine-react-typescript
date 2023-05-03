import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Styles from "./login.module.css";
import { LoginValidation } from "./loginValidation";
import { inputProps, errorDefaultValues } from "./staticData";

export default function Login() {
  const { setUser, setIsAuthenticated } = useAuth();
  const [errorData, setErrorData] = useState(errorDefaultValues);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    setUser({
      username: target.username.value,
      password: target.password.value,
    });

    setIsAuthenticated(true);
  };

  return (
    <main className={Styles.loginContainer}>
      <h1 className={Styles.formTitle}>
        Your account for
        <br />
        everything Hudson Store
      </h1>
      <form className={Styles.loginForm} onSubmit={handleSubmit}>
        <fieldset className={Styles.loginFieldset}>
          {inputProps.map((props) => {
            return (
              <Fragment key={props.name}>
                <span className={Styles.formInputWrapper}>
                  <input
                    className={Styles.formInput}
                    {...props}
                    onChange={(e) =>
                      LoginValidation(e, errorData, setErrorData)
                    }
                  />
                </span>
                {errorData[props.name] && (
                  <p className={Styles.inputError}>{errorData[props.name]}</p>
                )}
              </Fragment>
            );
          })}
          <a className={Styles.forgotPassword} href="#">
            Forgot Password?
          </a>
          <span className={Styles.formInputWrapper}>
            <button
              className={Styles.submitBtn}
              disabled={
                Object.values(errorData).some((e) => e === false) && true
              }
              type="submit"
            >
              <Link to="/" className={Styles.homePageLink}>
                Sign in
              </Link>
            </button>
          </span>
        </fieldset>
      </form>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
    </main>
  );
}

// Milovan
// 1. Should have Username and Password
// 2. Should have live typing validations
// 3. Validations: minLenght - 6 symbols, password should contain numbers
