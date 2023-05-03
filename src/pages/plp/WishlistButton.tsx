import defaultStyles from "../plp/styles/plp.module.css";
import listStyles from "../plp/styles/productsListView.module.css";
import { useWishListContext } from "../../contexts/WishListContext";
import { useProductContext } from "../../contexts/ProductContext";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";

function WishlistButton({ grid }: any): JSX.Element {
  const { wishList, setWishList, removeProductFromWishList } =
    useWishListContext();
  const { product, uid } = useProductContext();

  const isProductOnWishList = wishList.find(
    (wishlistProduct) => wishlistProduct.uid === uid
  );

  const updateWishList = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();

    if (isProductOnWishList) {
      return removeProductFromWishList(uid);
    }

    setWishList([...wishList, product]);
  };

  return (
    <button
      className={grid ? defaultStyles.wishListBtn : listStyles.wishListBtn}
      onClick={updateWishList}
    >
      {isProductOnWishList ? (
        <BsHeartFill className={defaultStyles.heartIconFilled} />
      ) : (
        <AiOutlineHeart className={defaultStyles.heartIconOutline} />
      )}
    </button>
  );
}

export default WishlistButton;
