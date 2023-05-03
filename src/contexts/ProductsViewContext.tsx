import { createContext, ReactNode, useContext, useState } from "react";
import defaultProducts from "../mock-data/products.json";

export const ProductsViewContext = createContext<ProductsViewCtxInterface>({
  products: defaultProducts,
  setProducts: () => {},
  sortProducts: () => {},
  filterProducts: () => {},
  productsView: "",
  setProductsView: () => {},
});

interface ProductsViewCtxInterface {
  products: any;
  setProducts: Function;
  sortProducts: (order: string) => any;
  filterProducts: (filterBy: string) => any;
  productsView: string;
  setProductsView: Function;
}

interface Props {
  children?: ReactNode;
}

export default function ProductsViewProvider({ children }: Props) {
  const [products, setProducts] = useState<any>(defaultProducts);
  const [productsView, setProductsView] = useState<string>("grid");

  function filterProducts(filterBy: string) {
    const priceRange = ["0-50", "50-100", "100-150"];

    function filterByOnSale(option: string): void {
      if (option === "Yes") {
        // To do...
      }
    }

    function filterByPriceRange(range: string): void {
      if (range === "0-50") {
        const result = defaultProducts.filter((e: any) => {
          const price = e.price_range.minimum_price.final_price.value;
          return price >= 0 && price <= 50;
        });

        return setProducts([...result]);
      }

      if (range === "50-100") {
        const result = defaultProducts.filter((e: any) => {
          const price = e.price_range.minimum_price.final_price.value;
          return price >= 50 && price <= 100;
        });

        return setProducts([...result]);
      }

      if (range === "100-150") {
        const result = defaultProducts.filter((e: any) => {
          const price = e.price_range.minimum_price.final_price.value;
          return price >= 100 && price <= 150;
        });

        return setProducts([...result]);
      }
    }

    if (priceRange.includes(filterBy)) return filterByPriceRange(filterBy);
    filterByOnSale(filterBy);
  }

  function sortProducts(sortOrder: string): void {
    function alphabetOrder(a: any, b: any): any {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === "az"
        ? nameA < nameB
          ? -1
          : 1
        : nameA < nameB
        ? 1
        : -1;
    }

    function priceOrder(a: any, b: any): any {
      const priceA = a.price_range.minimum_price.final_price.value;
      const priceB = b.price_range.minimum_price.final_price.value;
      return sortOrder === "lh" ? priceA - priceB : priceB - priceA;
    }

    const sortedProducts = products.sort((a: any, b: any) => {
      return sortOrder === "az" || sortOrder === "za"
        ? alphabetOrder(a, b)
        : priceOrder(a, b);
    });

    setProducts([...sortedProducts]);
  }

  const contextValue: ProductsViewCtxInterface = {
    products,
    setProducts,
    sortProducts,
    filterProducts,
    productsView,
    setProductsView,
  };

  return (
    <ProductsViewContext.Provider value={contextValue}>
      {children}
    </ProductsViewContext.Provider>
  );
}

export const useProductsViewContext = () => {
  return useContext(ProductsViewContext);
};
