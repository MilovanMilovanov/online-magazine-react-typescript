import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./Header.css";
import userIcon from "../assets/UserIcon.svg";
import wishlistIcon from "../assets/WhishlistIcon.svg";
import cartIcon from "../assets/CartIcon.svg";
import brandLogo from "../assets/Brand.svg";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header>
        <div className="sale-banner">
          <span className="sale-banner-text">
            FREE Delivery in up to 3 working days when spending &#8364; 50+!
          </span>
        </div>
        <nav className="navbar">
          <div className="wrapper-header navbar-inner">
            <div className="categories-left">
              <div className="categories-space">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </div>
              <div className="categories-space">
                <Link className="nav-link" to="/pdp">
                  PDP
                </Link>
              </div>
              <div className="categories-space">
                <Link className="nav-link" to="/plp">
                  PLP
                </Link>
              </div>
            </div>
            <div className="brand">
              <img height="100%" src={brandLogo} alt="Brand Logo" />
            </div>
            <div className="categories-right">
              <Link
                className="categories-space"
                to={isAuthenticated ? "/user" : "/login"}
              >
                <img className="icon-container" src={userIcon} />
              </Link>
              {isAuthenticated ? (
                <Link className="categories-space" to="/wishlist">
                  <img className="icon-container" src={wishlistIcon} />
                </Link>
              ) : (
                ""
              )}
              <Link className="categories-space" to="/cart">
                <img className="icon-container" src={cartIcon} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

// Vanesa
// 1. List all pages in the Header and they should navigate to them. -> Home | Login | Register | PDP | PLP | CART
// 2. Should Show when the User is logged in
// 3. Show Whishlist icon for the Whishlist
// 4. Try to use some icons for Cart and user
// 5. Use the Header from the desings as a reference
