import { createContext, useState, useEffect } from "react";


const CartContext = createContext({
    logout: () => {},
    shown: () => {},
    isShown: false,
});

export const CartContextProvider = ({ children }) => {
    

  const [isShown, setIsShown] = useState(false);

  const shown = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };

  const logout = () => {
        localStorage.clear();
        window.location.reload();
  };


  const context = {
    isShown,
    shown,
    logout,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;