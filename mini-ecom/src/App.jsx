import { useState } from "react";
import productsData from "./data/products";

import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import SortPrice from "./components/SortPrice";
import CartDrawer from "./components/CartDrawer";

import "./styles/layout.css";

function App() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  let filtered = productsData.filter(p =>
    category === "all" ? true : p.category === category
  );

  if (sort === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  }
  if (sort === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  const addToCart = (product) => {
    setCart([...cart, product]);
    setOpenCart(true);
  };

  return (
    <div className="container">
      <h1>Mini E-commerce</h1>

      <CategoryFilter setCategory={setCategory} />
      <SortPrice setSort={setSort} />

      <ProductList products={filtered} addToCart={addToCart} />

      <CartDrawer
        cart={cart}
        open={openCart}
        close={() => setOpenCart(false)}
      />
    </div>
  );
}

export default App;
