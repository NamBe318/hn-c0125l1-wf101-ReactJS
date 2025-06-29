import { useParams } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <h1>Product detail</h1>
      <p>Product ID: {id}</p>
      <p>Product name: {product.name}</p>
    </div>
  );
}

export default ProductDetail;
