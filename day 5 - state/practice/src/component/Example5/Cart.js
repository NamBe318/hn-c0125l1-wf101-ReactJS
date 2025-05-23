import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [item, setItem] = useState([
    { id: 1, name: "áo thun", price: 150000, quantity: 1 },
    { id: 2, name: "quần bò", price: 300000, quantity: 5 },
    { id: 3, name: "quần baggy", price: 400000, quantity: 3 },
  ]);

  const handleChangeQuantity = (id, newQuantity) => {
    setItem((previous) => previous.map((item) => item.id === id
    ? {...item, quantity: newQuantity}
    : item
    ));
  };

  const totalPrice = item.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Giỏ hàng</h1>
      {item.map((item) => (
        <CartItem onChangeQuantity={handleChangeQuantity} item={item} />
      ))}
      <h1>Tổng tiền là: {totalPrice.toLocaleString()}đ</h1>
    </div>
  );
}

export default Cart;
