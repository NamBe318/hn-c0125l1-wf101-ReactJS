import React, { useState } from "react";

function Cart2() {
  const [products, setProducts] = useState([
    { id: 1, name: "San Pham 1", quantity: 1 },
    { id: 2, name: "San Pham 2", quantity: 2 },
    { id: 3, name: "San Pham 3", quantity: 3 },
    { id: 4, name: "San Pham 4", quantity: 4 },
    { id: 5, name: "San Pham 5", quantity: 5 },
  ]);

  const handleUpdateQuantity = (id, delta) => {
    setProducts(
        (prev) => prev.map(
            item => item.id === id
            ? {...item, quantity: item.quantity + delta}
            : item
        )
    )
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - So Luong {product.quantity}
          </span>
          <button
            onClick={() => handleUpdateQuantity(product.id, 1)}
            style={{ marginLeft: "5px", marginBottom: "5px" }}
          >
            +
          </button>
          <button
            onClick={() => handleUpdateQuantity(product.id, -1)}
            style={{ marginLeft: "5px", marginBottom: "5px" }}
            disabled={product.quantity === 0}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart2;
