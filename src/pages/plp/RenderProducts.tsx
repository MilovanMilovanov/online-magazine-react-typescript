import Product from "../../components/Product";
import ProductList from "./ProductList";
import { useProductsViewContext } from "../../contexts/ProductsViewContext";
import { ProductContext } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import defaultStyles from "./styles/plp.module.css";

function RenderProducts(): JSX.Element {
  const { products, productsView } = useProductsViewContext();
  const navigate = useNavigate();

  return (
    <>
      {products.length === 0 && (
        <p className={defaultStyles.noMatchesForSearch}>
          There are no any matches for that search.
        </p>
      )}
      {products.map((product: any) => {
        const { name, thumbnail, price_range, uid } = product;
        const { currency, value } = price_range.maximum_price.final_price;
        return (
          <ProductContext.Provider
            key={product.uid}
            value={{
              product,
              name,
              thumbnail,
              uid,
              currency,
              value,
              redirectToPdp: () => {
                navigate("/pdp", {
                  state: { name, thumbnail, value, uid },
                });
              },
            }}
          >
            {productsView === "grid" ? <Product /> : <ProductList />}
          </ProductContext.Provider>
        );
      })}
    </>
  );
}

export default RenderProducts;
