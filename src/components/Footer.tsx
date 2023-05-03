import "./Footer.css";
import { Link } from "react-router-dom";
import freeShipping from "../assets/FreeShipping.svg";
import moneyBack from "../assets/MoneyBack.svg";
import redeem from "../assets/Redeem.svg";
import verified from "../assets/Verified.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import visa from "../assets/visa.svg";
import paypal from "../assets/payPal.svg";
import googlePay from "../assets/googlePay.svg";
import applePay from "../assets/applePay.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="subscription-area">
          <div className="subscription-text">
            <h1 className="heading">Subscribe & get 10% off</h1>
            <p className="basicTxt">
              Subscribe to our newsletter and be the first to know about promos,
              style inspo & more... AND get 10% off your first full-price
              purchase with a promo code you'll receive by email.
            </p>
          </div>
          <div className="subscribe-btn">
            <button className="button">Subscribe </button>
          </div>
        </div>

        <div className="main-section">
          <div className="links">
            <h3>Help</h3>
            <hr />
            <Link to="#" className="link">
              Help & FAQs
            </Link>
            <Link to="#" className="link">
              Size Guides
            </Link>
            <Link to="#" className="link">
              Track Your Order
            </Link>
            <Link to="#" className="link">
              Contact us
            </Link>
          </div>
          <div className="links">
            <h3>About Us</h3>
            <hr />
            <Link to="/aboutus" className="link">
              About Us
            </Link>
            <Link to="#" className="link">
              Terms & Conditions
            </Link>
            <Link to="#" className="link">
              Privacy Policy & Cookies
            </Link>
            <Link to="#" className="link">
              Sitemaps
            </Link>
          </div>
          <div className="iconsAndSocials">
            <div className="parent-icons">
              <div className="par">
                <img className="icon" src={freeShipping} alt="" />
                <p>Free Shipping</p>
              </div>
              <div className="par">
                <img className="icon" src={moneyBack} alt="" />
                <p>14 Days Money Back Guarantee</p>
              </div>
              <div className="par">
                <img className="icon" src={redeem} alt="" />
                <p>Easy Returns</p>
              </div>
              <div className="par">
                <img className="icon" src={verified} alt="" />
                <p>Authorized Reseller</p>
              </div>
            </div>

            <div className="socials">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>

        <div className="copyrightsAndPayments">
          <div className="cpy">
            <p>© Copyright 2022 Hudson. All Rights Reserved.</p>
          </div>
          <div className="cPay">
            <img className="socials" src={visa} alt="" />
            <img className="socials" src={paypal} alt="" />
            <img className="socials" src={googlePay} alt="" />
            <img className="socials" src={applePay} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

// Berna
// 1. Add Links to other pages
// 2. Make it similar to the design
// 3. Make About Us Page
