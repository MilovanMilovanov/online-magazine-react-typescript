import React from "react";
import { useProductsViewContext } from "../../contexts/ProductsViewContext";
import { SelectOptions } from "./interfaces";
import Styles from "./styles/plp.module.css";
import { options } from "./staticData";

function SortProducts() {
  const { sortProducts } = useProductsViewContext();

  const handleSelectedValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    sortProducts(event.target.value);
  };

  return (
    <select className={Styles.sortProducts} onChange={handleSelectedValue}>
      {options.map((option: SelectOptions): any => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
}

export default SortProducts;
