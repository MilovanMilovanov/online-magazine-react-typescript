import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { MIN_INPUT_LENGTH } from "../constants/constants";
import { AuthContext } from "../contexts/AuthContext";
import "./Register.css";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmedPassword: string;
}
interface FormDataErrors {
  emailError: boolean;
  firstNameError: boolean;
  lastNameError: boolean;
  passwordError: boolean;
  confirmedPasswordError: boolean;
  passError: boolean;
}

export default function Register() {
  const { setIsAuthenticated, setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmedPassword: "",
  });

  const [formDataErrors, setFormDataErrors] = useState<FormDataErrors>({
    emailError: false,
    firstNameError: false,
    lastNameError: false,
    passwordError: false,
    confirmedPasswordError: false,
    passError: false,
  });

  useEffect(() => {
    inputLengthCheck(formData.firstName)
      ? setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          firstNameError: true,
        }))
      : setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          firstNameError: false,
        }));
  }, [formData.firstName]);

  useEffect(() => {
    inputLengthCheck(formData.lastName)
      ? setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          lastNameError: true,
        }))
      : setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          lastNameError: false,
        }));
  }, [formData.lastName]);

  useEffect(() => {
    inputLengthCheck(formData.email)
      ? setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          emailError: true,
        }))
      : setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          emailError: false,
        }));
  }, [formData.email]);

  useEffect(() => {
    inputLengthCheck(formData.password)
      ? setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          passwordError: true,
        }))
      : setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          passwordError: false,
        }));
  }, [formData.password]);

  useEffect(() => {
    setFormDataErrors((prev: FormDataErrors) => ({
      ...prev,
      passError: false,
    }));
    inputLengthCheck(formData.confirmedPassword)
      ? setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          confirmedPasswordError: true,
        }))
      : setFormDataErrors((prev: FormDataErrors) => ({
          ...prev,
          confirmedPasswordError: false,
        }));
  }, [formData.confirmedPassword]);

  const inputLengthCheck = (value: string) =>
    value && value.length < MIN_INPUT_LENGTH ? true : false;

  const passwordCheck = (pass: string, confirmPass: string): Boolean => {
    const regexCheck = new RegExp(/.*\d+.*/);
    if (
      regexCheck.test(pass) &&
      regexCheck.test(confirmPass) &&
      pass === confirmPass
    ) {
      setUser({
        email: formData.email,
        username: formData.firstName,
        lastname: formData.lastName,
      });
      setIsAuthenticated(true);
      navigate("/user");
      return true;
    }
    setFormDataErrors((prev: FormDataErrors) => ({
      ...prev,
      passError: true,
      confirmedPasswordError: true,
    }));
    return false;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    passwordCheck(formData.password, formData.confirmedPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: FormData) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="register-form-container">
      <section className="register-form-wrapper">
        <h1 className="register-form-heading">
          create an account on hudson store
        </h1>
        <form
          onSubmit={handleFormSubmit}
          className="register-form"
          aria-label="register form"
        >
          <Input
            handleInputChange={handleInputChange}
            type="text"
            label="email address"
            placeholder="Email address *"
            name="email"
            value={formData.email}
            required={true}
            error={formDataErrors.emailError}
          />
          <Input
            handleInputChange={handleInputChange}
            type="text"
            label="first name"
            placeholder="First name *"
            name="firstName"
            value={formData.firstName}
            required={true}
            error={formDataErrors.firstNameError}
          />
          <Input
            handleInputChange={handleInputChange}
            type="text"
            label="last name"
            placeholder="Last name *"
            name="lastName"
            value={formData.lastName}
            required={true}
            error={formDataErrors.lastNameError}
          />

          <Input
            handleInputChange={handleInputChange}
            type="password"
            label="password"
            placeholder="Password *"
            name="password"
            value={formData.password}
            required={true}
            error={formDataErrors.passwordError}
          />
          <Input
            handleInputChange={handleInputChange}
            type="password"
            label="confirm password"
            placeholder="Confirm password *"
            name="confirmedPassword"
            value={formData.confirmedPassword}
            required={true}
            error={formDataErrors.confirmedPasswordError}
            passError={formDataErrors.passError}
          />
          <input
            className="register-input-button"
            type="submit"
            disabled={Object.values(formDataErrors).some((e) => e === true)}
            value="Create an account"
          />
        </form>
        <p className="register-paragraph">Already have an account?</p>
        <Link className="register-link" to="/login">
          Login form
        </Link>
      </section>
    </div>
  );
}

// Martin
// 1. Should have Username, Password, Confirm Password and Email.
// 2. Should have live typing validations
// 3. Validations: minLenght - 6 symbols, password should contain numbers
// 4. Password and Confirm Password should match
