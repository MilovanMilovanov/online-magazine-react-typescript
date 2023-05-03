import { useProductsViewContext } from "../../contexts/ProductsViewContext";
import defaultStyles from "../plp/styles/plp.module.css";
import SortProducts from "./SortProducts";
import { BsGrid } from "@react-icons/all-files/bs/BsGrid";
import { BsListCheck } from "@react-icons/all-files/bs/BsListCheck";

function ProductsViewController(): JSX.Element {
  const { setProductsView } = useProductsViewContext();

  const handleGridView = (): void => {
    setProductsView("grid");
  };

  const handleListView = (): void => {
    setProductsView("list");
  };

  return (
    <div className={defaultStyles.productsLayoutOptions}>
      <button className={defaultStyles.listBtn} onClick={handleListView}>
        <label className={defaultStyles.btnLabel}>List</label>
        <BsListCheck className={defaultStyles.iconSize} />
      </button>
      <button className={defaultStyles.gridBtn} onClick={handleGridView}>
        <label className={defaultStyles.btnLabel}>Grid</label>
        <BsGrid className={defaultStyles.iconSize} />
      </button>
      <SortProducts />
    </div>
  );
}

export default ProductsViewController;
