import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({children}) => {
  //Add our data for the state
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Increase Product quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  //Decrease Product quantity
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) {
        return 1;
      }
      return prevQuantity - 1;
    });
  };

  //Add Product to Cart
  const onAdd = (product, quantity) => {
    //Total Price
    setTotalPrice(prevTotal => prevTotal + product.price * quantity);
    //increase Total Quantity
    setTotalQuantities(prevTotal => prevTotal + quantity);
    //Check if the Product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? {
                ...exist,
                quantity: exist.quantity + quantity,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove Product
  const onRemove = (product) => {
    //Total Price
    setTotalPrice(prevTotal => prevTotal - product.price);
    //descrease Total Quantity
    setTotalQuantities(prevTotal => prevTotal - 1);
    //Check if the Product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? {
                ...exist,
                quantity: exist.quantity - 1,
              }
            : item
        )
      );
    }
  }
  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
