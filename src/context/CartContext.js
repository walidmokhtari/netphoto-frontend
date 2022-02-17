import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";


const CartContext = createContext({
    logout: () => {},
    shown: () => {},
    user: (data) => {},
    data: {},
    isShown: false,
});

export const CartContextProvider = ({ children }) => {
    

  const [isShown, setIsShown] = useState(false);

  const shown = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  const logout = () => {
        localStorage.clear();
        router.push("/");
  };

 


  const context = {
    isShown,
    shown,
    logout
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;