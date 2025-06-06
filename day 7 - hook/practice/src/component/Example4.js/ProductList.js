function ProductList({setSelecterProduct}) {
    return(
        <div className="list-user">
        <h1>Danh sach products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    )
}