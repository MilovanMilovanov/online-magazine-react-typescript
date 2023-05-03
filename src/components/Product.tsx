import defaultStyles from "../pages/plp/styles/plp.module.css";
import WishlistButton from "../pages/plp/WishlistButton";
import { useProductContext } from "../contexts/ProductContext";

function Product(): JSX.Element {
  const { name, thumbnail, uid, currency, value, redirectToPdp } =
    useProductContext();

  return (
    <figure
      key={uid}
      className={defaultStyles.productFigure}
      onClick={redirectToPdp}
    >
      <img
        className={defaultStyles.productImg}
        src={thumbnail.url}
        alt={name}
      />
      <figcaption className={defaultStyles.productFigcaption}>
        {name}
      </figcaption>
      <div className={defaultStyles.productColors}>available colors..</div>
      <b className={defaultStyles.productPrice}>{`${currency} ${value}`}</b>
      <WishlistButton grid={true} />
    </figure>
  );
}

export default Product;
