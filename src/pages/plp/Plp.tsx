import Styles from "./styles/plp.module.css";
import { useProductsViewContext } from "../../contexts/ProductsViewContext";
import ProductsViewController from "../plp/ProductsViewController";
import RenderProducts from "./RenderProducts";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import Filter from "./Filter";

export default function Plp(): JSX.Element {
  const { products } = useProductsViewContext();

  return (
    <main className={Styles.plpPage}>
      <section className={Styles.productsFilter}>
        <Filter />
      </section>

      <div className={Styles.productsWrapper}>
        <section className={Styles.plpBanner}>
          <label className={Styles.bannerTitle}>rule yourself</label>
          <button className={Styles.shopBtn}>
            <label className={Styles.btnLabel}>Shop now</label>
            <MdKeyboardArrowRight className={Styles.iconSize} />
          </button>
        </section>

        <section className={Styles.productsSection}>
          <h1 className={Styles.filterTitle}>Womans Clothing</h1>
          <div className={Styles.productsControlPanel}>
            <p>
              Products find: <b>{products.length}</b>
            </p>
            <ProductsViewController />
          </div>

          <hr className={Styles.breakLine} />

          <div className={Styles.products}>
            <RenderProducts />
          </div>
        </section>
      </div>
    </main>
  );
}

// // Milovan
// // 1. List the products from the mock data
// // 2. Make Sorting
// // 3. Display number of products
