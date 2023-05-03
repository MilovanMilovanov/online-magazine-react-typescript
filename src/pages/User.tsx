import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./User.css";
export default function User() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const handleLogOutClick = () => {
    setUser({ username: null, lastname: null, email: null });
    navigate("/");
  };
  return (
    <div className="user-container">
      <div className="user-account">
        <h2 className="user-account-heading">My Account</h2>
        <div className="user-personal-details-links">
          <p>Personal details</p>
          <nav>
            <Link to="#">my profile</Link>
            <Link to="#">my address</Link>
            <Link to="#">my newsletter</Link>
            <Link to="#">my wishlist</Link>
          </nav>
        </div>
        <div className="user-personal-details-links">
          <p>Order details</p>
          <nav>
            <Link to="#">order history</Link>
            <button onClick={handleLogOutClick}>log out</button>
          </nav>
        </div>
      </div>
      <div className="user-personal-data">
        <div className="user-personal-data-links-container">
          <Link to="#">personal data</Link>
          <Link to="#">change password</Link>
        </div>
        <p className="user-personal-data-msg">
          show free to edit any of your details below so your account is always
          up do date
        </p>
        <div className="user-personal-data-names-container">
          <div className="user-personal-data-info">
            <p className="user-personal-data-label">first name *</p>
            <p className="user-personal-data-label-content">{user.username}</p>
          </div>
          <div className="user-personal-data-info">
            <p className="user-personal-data-label">last name *</p>
            <p className="user-personal-data-label-content">{user.lastname}</p>
          </div>
        </div>
        <div className="user-personal-data-info-email">
          <p className="user-personal-data-label">your email *</p>
          <p className="user-personal-data-label-content">{user.email}</p>
        </div>
        <button className="user-personal-data-btn">uppade personal data</button>
        <p className="user-description">
          at hudson, we attach great importance to privacy and are commited to
          protecting the personal data of our users. learn more about how we
          store and use your personal data in the
          <button>privacy policy</button>
        </p>
      </div>
    </div>
  );
}

// Martin
// 1. Make the page as per the design
