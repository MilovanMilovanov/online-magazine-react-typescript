import { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import productData from "../mock-data/product.json";
import Photo from "../assets/Photo.png";
import WishlistIcon from "../assets/WhishlistIcon.svg";
import FreeShipping from "../assets/FreeShipping.svg";
import MoneyBack from "../assets/MoneyBack.svg";
import EasyReturn from "../assets/Redeem.svg";
import Verified from "../assets/Verified.svg";
import "./Pdp.css";
import { useLocation } from "react-router";
import { CartContext } from "../contexts/CartContext";

export default function Pdp() {
  const { value, setValue } = useContext(CartContext);

  const { state } = useLocation();
  useEffect(() => {
    console.log(value);
  }, [value]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setValue((prev: any) => {
      return [
        ...prev,
        { name: state.name, thumbnail: state.thumbnail, price: state.value },
      ];
    });
  }

  const [activeButton, setActiveButton] = useState("");
  const toggleActiveButton = (buttonId: string) => {
    if (activeButton === buttonId) {
      setActiveButton("");
    } else {
      setActiveButton(buttonId);
    }
  };

  const [activeButtonColor, setActiveButtonColor] = useState("");
  const toggleActiveButtonColor = (buttonColorId: string) => {
    if (activeButtonColor === buttonColorId) {
      setActiveButtonColor("");
    } else {
      setActiveButtonColor(buttonColorId);
    }
  };

  const ReadMore = ({ children }: any) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p>
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...See more" : " Show less"}
        </span>
      </p>
    );
  };
  return (
    <main className="product-details">
      <div className="wrapper-pdp display-flex">
        <div className="container-pdp">
          <img
            className="image-container-pdp"
            src={state.thumbnail.url}
            alt="Product Image"
          />
        </div>
        <div className="container-left">
          <h1 className="heading-title product-name text-left">{state.name}</h1>
          <div className="product-price">&#8364; {state.value}</div>
          <article className="product-description">
            <ReadMore>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </ReadMore>
          </article>
          <div className="color-button-section">
            <span>
              <p className="color-section-title">Color</p>
            </span>
            <button
              style={{
                backgroundColor: "#FFB11F",
                border: "4px solid #FFB11F",
              }}
              className={
                activeButtonColor === "Yellow"
                  ? "color-button-clicked"
                  : "color-button-idle"
              }
              onClick={() => toggleActiveButtonColor("Yellow")}
            ></button>
            <button
              style={{ backgroundColor: "#000", border: "4px solid #000" }}
              className={
                activeButtonColor === "Black"
                  ? "color-button-clicked"
                  : "color-button-idle"
              }
              onClick={() => toggleActiveButtonColor("Black")}
            ></button>
            <button
              style={{
                backgroundColor: "#E98CC0",
                border: "4px solid #E98CC0",
              }}
              className={
                activeButtonColor === "Pink"
                  ? "color-button-clicked"
                  : "color-button-idle"
              }
              onClick={() => toggleActiveButtonColor("Pink")}
            ></button>
            <button
              style={{
                backgroundColor: "#6CFF98",
                border: "4px solid #6CFF98",
              }}
              className={
                activeButtonColor === "Green"
                  ? "color-button-clicked"
                  : "color-button-idle"
              }
              onClick={() => toggleActiveButtonColor("Green")}
            ></button>
          </div>
          <div className="size-section">
            <span>
              <p className="size-section-title">Size</p>
            </span>
            <Button
              variant="contained"
              className={activeButton === "XS" ? "btn-clicked" : "btn-idle"}
              onClick={() => toggleActiveButton("XS")}
            >
              XS
            </Button>
            <Button
              variant="contained"
              className={activeButton === "S" ? "btn-clicked" : "btn-idle"}
              onClick={() => toggleActiveButton("S")}
            >
              S
            </Button>
            <Button
              variant="contained"
              className={activeButton === "M" ? "btn-clicked" : "btn-idle"}
              onClick={() => toggleActiveButton("M")}
            >
              M
            </Button>
            <Button
              variant="contained"
              className={activeButton === "L" ? "btn-clicked" : "btn-idle"}
              onClick={() => toggleActiveButton("L")}
            >
              L
            </Button>
            <Button
              variant="contained"
              className={activeButton === "XL" ? "btn-clicked" : "btn-idle"}
              onClick={() => toggleActiveButton("XL")}
            >
              XL
            </Button>
            <Button
              variant="contained"
              className={activeButton === "XXL" ? "btn-clicked" : "btn-idle"}
              onClick={() => toggleActiveButton("XXL")}
            >
              XXL
            </Button>
            <Button
              variant="contained"
              className={activeButton === "XXXL" ? "btn-clicked" : "btn-idle"}
              onClick={() => toggleActiveButton("XXXL")}
            >
              XXXL
            </Button>
            <Button
              variant="contained"
              disabled
              className={activeButton === "XXXL" ? "btn-clicked" : "btn-idle"}
              onClick={() => toggleActiveButton("XXXL")}
            >
              XXXL
            </Button>
          </div>
          <div className="add-to-cart">
            <div className="add-to-cart-quantity">
              <div className="quantity-btn">
                <button>-</button>
                <span>{1}</span>
                <button>+</button>
              </div>
            </div>
            <Button
              onClick={(e) => {
                handleClick(e);
              }}
              variant="contained"
              className="add-to-cart-button"
            >
              Add To Cart {" >"}
            </Button>
            <div className="wishlist-btn">
              <Button variant="contained" className="add-to-wishlist-button">
                <img src={WishlistIcon} />
              </Button>
            </div>
          </div>
          <div className="info-icons">
            <div className="min-width">
              <img className="icon-container-info" src={FreeShipping} />
              <p className="info-text">Free Shipping</p>
            </div>
            <div className="min-width">
              <img className="icon-container-info" src={MoneyBack} />
              <p className="info-text">14 Days Money Back Guarantee</p>
            </div>
            <div className="min-width">
              <img className="icon-container-info" src={EasyReturn} />
              <p className="info-text">Easy Returns</p>
            </div>
            <div className="min-width">
              <img className="icon-container-info" src={Verified} />
              <p className="info-text">Authorized Reseler</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Vanesa
// 1. Make the structure
// 2. Image, Price, Description
// 3. Make Add to Cart button to work
// 4. Make Whishlist button to work
