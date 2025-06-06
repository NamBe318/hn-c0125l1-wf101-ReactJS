function Product() {
    const products = ["Laptop", "Macbook", "Iphone"]

    return(
        <div>
            <ul>
                {products.map((item, index) => (
                    <li key={index}>{item}</li> 
                ))}
            </ul>
        </div>
    );
}

export default Product;