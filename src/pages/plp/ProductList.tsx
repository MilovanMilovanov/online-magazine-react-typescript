import listStyles from "../plp/styles/productsListView.module.css";
import { useProductContext } from "../../contexts/ProductContext";
import WishlistButton from "./WishlistButton";

function ProductList(): JSX.Element {
  const { name, thumbnail, uid, currency, value, redirectToPdp } =
    useProductContext();

  return (
    <figure
      key={uid}
      className={listStyles.productFigure}
      onClick={redirectToPdp}
    >
      <img className={listStyles.productImg} src={thumbnail.url} alt={name} />
      <figcaption className={listStyles.productFigcaption}>{name}</figcaption>
      <div className={listStyles.productColors}>available colors..</div>
      <b className={listStyles.productPrice}>{`${currency} ${value}`}</b>
      <WishlistButton />
      <button className={listStyles.viewProductBtn}>View</button>
    </figure>
  );
}

export default ProductList;
