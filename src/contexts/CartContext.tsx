import {useState, createContext, ReactNode, Children} from 'react';

interface ItemsInterface {
  name: string,
  price: number,
  thumbnail: string
}

interface StateInterface {
 value: ItemsInterface[],
 setValue: Function
}

export const CartContext = createContext<StateInterface>(
  {
    value: [],
    setValue: () => {}
  }
);

interface Props {
  children?: ReactNode;
}

export default function CartContextProvider({children} : Props) {
  const [value, setValue] = useState([])
  return (
    <CartContext.Provider value={{value, setValue}}>
      {children}
    </CartContext.Provider>
  )
}