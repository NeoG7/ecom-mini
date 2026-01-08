import "../styles/cart.css";

function CartDrawer({ cart, open, close }) {
  return (
    <div className={`cart ${open ? "open" : ""}`}>
      <button onClick={close}>Close</button>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Empty</p>}

      {cart.map((item, i) => (
        <div key={i}>
          {item.title} - {item.price.toLocaleString()}₮
        </div>
      ))}
    </div>
  );
}

export default CartDrawer;
