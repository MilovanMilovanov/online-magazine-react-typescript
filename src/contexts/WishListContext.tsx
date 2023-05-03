import { createContext, ReactNode, useContext, useState } from "react";

export const WishListContext = createContext<WishListContextInterface>({
  wishList: [],
  setWishList: () => {},
  removeProductFromWishList: () => {},
});

interface WishListContextInterface {
  wishList: any[];
  setWishList: (arr: any[]) => void;
  removeProductFromWishList: (id: string) => void;
}

interface Props {
  children?: ReactNode;
}

export default function WishListProvider({ children }: Props): JSX.Element {
  const [wishList, setWishList] = useState<any[]>([]);

  function removeProductFromWishList(id: string): void {
    const activeWishList = wishList.filter((product) => product.uid !== id);
    setWishList([...activeWishList]);
  }

  const contextValue: WishListContextInterface = {
    wishList,
    setWishList,
    removeProductFromWishList,
  };

  return (
    <WishListContext.Provider value={contextValue}>
      {children}
    </WishListContext.Provider>
  );
}

export const useWishListContext = () => {
  return useContext(WishListContext);
};
