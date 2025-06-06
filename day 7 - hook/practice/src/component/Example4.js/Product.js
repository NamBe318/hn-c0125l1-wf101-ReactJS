import React, { useEffect, useState } from "react";

function Product() {
    const products = [
        {id: 1, name: "Laptop", price: 2000},
        {id: 2, name: "Dien Thoai", price: 1000},
        {id: 3, name: "Tai nghe", price: 200}
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [disCountPrice, setDisCountPrice] = useState(null);

    useEffect(() => {
        if(selectedProduct) {
            const timer = setTimeout(() => {
                const discount = Math.random() * 0.3;
                const newPrice = selectedProduct.price * (1 - discount);
                setDisCountPrice(newPrice.toFixed(2));
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [selectedProduct]);

    return(
        <div>
            
        </div>
    )
}

export default Product;