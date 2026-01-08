import "../styles/product.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.price.toLocaleString()}₮</p>
      <button onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
