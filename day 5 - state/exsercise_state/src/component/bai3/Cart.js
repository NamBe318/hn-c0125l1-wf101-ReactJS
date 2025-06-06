import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [Products, setProducts] = useState([
    { id: 1, name: "NVIDIA", quantity: 3 },
    { id: 2, name: "RADEON", quantity: 5 },
    { id: 3, name: "INTEL", quantity: 2 },
  ]);

  const handleUpdateQuantity = (id, action) => {
    setProducts(
      Products.map((product) => {
        if (product.id === id) {
          let newQuantity = product.quantity;
          switch (action) {
            case "increase":
              newQuantity += 1;
              break;
            case "decrease":
              newQuantity = Math.max(0, newQuantity - 1);
              break;
          }
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };

  return (
    <div>
      <h1>Giỏ hàng</h1>
      <CartItem key={Products.id} Products={Products} handleUpdateQuantity={handleUpdateQuantity}/>
    </div>
  );
};

export default Cart;
