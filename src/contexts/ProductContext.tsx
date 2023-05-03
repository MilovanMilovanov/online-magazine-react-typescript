import { createContext, useContext } from "react";
import product from "../mock-data/product.json";

interface ProductContextInterface {
  product: object;
  name: string;
  thumbnail: { url: string };
  uid: string;
  currency: string;
  value: string;
  redirectToPdp: any;
}

export const ProductContext = createContext<ProductContextInterface>({
  product,
  name: "",
  thumbnail: { url: "" },
  uid: "",
  currency: "",
  value: "",
  redirectToPdp: () => {},
});

export const useProductContext = () => {
  return useContext(ProductContext);
};
