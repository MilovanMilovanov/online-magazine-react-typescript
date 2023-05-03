import { useProductsViewContext } from "../../contexts/ProductsViewContext";
import defaultStyles from "../plp/styles/plp.module.css";

const priceRange = ["0-50", "50-100", "100-150"];
const onSale = ["Yes", "No"];

function Filter(): JSX.Element {
  const { filterProducts } = useProductsViewContext();
  const handleClick = (e: any) => {
    filterProducts(e.target.textContent);
  };
  return (
    <>
      <div className={defaultStyles.priceFilter}>
        <label className={defaultStyles.filterLabels}>Price</label>
        {priceRange.map((range) => {
          return (
            <a className={defaultStyles.radioBtnLink} href="#">
              <span
                key={range}
                className={defaultStyles.radioBtnsFilter}
                onClick={handleClick}
              >
                {range}
              </span>
            </a>
          );
        })}
      </div>
      <div className={defaultStyles.onSaleFilter}>
        <label className={defaultStyles.filterLabels}>On Sale</label>
        {onSale.map((option) => {
          return (
            <a className={defaultStyles.radioBtnLink} href="#">
              <span
                key={option}
                className={defaultStyles.radioBtnsFilter}
                onClick={handleClick}
              >
                {option}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Filter;
