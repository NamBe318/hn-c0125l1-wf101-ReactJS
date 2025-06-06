import React from "react";

const CartItem = ({Products, handleUpdateQuantity}) => {
    return(
        <>
        {Products.map((product) => (
            <div>
                <span>{product.name} - So Luong - {product.quantity}</span>
                <button onClick={() => handleUpdateQuantity(product.id, "increase")}>+</button>
                <button onClick={() => handleUpdateQuantity(product.id, "decrease")}>-</button>
            </div>
          ))}
        </>
    )
}

export default CartItem;