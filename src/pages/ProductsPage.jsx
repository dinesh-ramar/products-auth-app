import products from "../data/products.json";

const formatPrice = (price) => {
  const value = Number(price);
  if (!Number.isFinite(value)) {
    return "N/A";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
};

function ProductsPage() {
  if (!products.length) {
    return <p>No products available</p>;
  }

  return (
    <div className="page content-page">
      <h2>Product List</h2>

      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <span>{product.name || "Unknown Product"}</span>
            <strong>{formatPrice(product.price)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
