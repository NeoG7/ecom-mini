import { useState } from "react";
import productsData from "./data/products";

import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import SortPrice from "./components/SortPrice";
import CartDrawer from "./components/CartDrawer";
import "./styles/layout.css";

function App() {   //App gedeg functional component
  //Component delgetsend yu haruulahaa zaana
  const [category, setCategory] = useState("all");   //category state iig shinechleh function
  //category state n yamar angilalaar filter hiih ve gej hadgalna
  //category state n all bolon utga songogdohod buh angilaluudiig haruulna
  //category state n phone bolon utga songogdohod zovhon phone angilaliin baraag haruulna
  //category state n laptop bolon utga songogdohod zovhon laptop angilaliin baraag haruulna
  const [sort, setSort] = useState(""); //sort state iig shinechleh function
  //sort state n uneeer sort hiih ve gej hadgalna
  //sort state n asc bolon utga songogdohod uneer doosh sort hiine
  //sort state n desc bolon utga songogdohod uneer deesh sort hiine
  const [cart, setCart] = useState([]); //cart state iig shinechleh function
  //cart state n cart dotor bgaa baraanuudiig array aar hadgalna
  const [openCart, setOpenCart] = useState(false); //openCart state iig shinechleh function
  //openCart state n cart drawer n neelttei esehiig hadgalna

  let filtered = productsData.filter(p => //productsData n bugdiin products iig aguulsan array
    category === "all" ? true : p.category === category  //category state n all bolon utga songogdohod buh angilaluudiig haruulna
    //category state n phone bolon utga songogdohod zovhon phone angilaliin baraag haruulna
    //category state n laptop bolon utga songogdohod zovhon laptop angilaliin baraag haruulna
  );

  if (sort === "asc") {   //sort state n asc bolon utga songogdohod uneer doosh sort hiine
    filtered.sort((a, b) => a.price - b.price);  //price n uneer sort hiine
    //sort() function n array dotor bgaa elementuudiig sort hiine
    //a, b n array dotor bgaa elementuudiin 2 element
    //a.price - b.price n uneer doosh sort hiine
  }
  if (sort === "desc") {  //sort state n desc bolon utga songogdohod uneer deesh sort hiine
    filtered.sort((a, b) => b.price - a.price);  //price n uneer sort hiine
    //sort() function n array dotor bgaa elementuudiig sort hiine
    //a, b n array dotor bgaa elementuudiin 2 element
    //b.price - a.price n uneer deesh sort hiine
  }

  const addToCart = (product) => { //cart ruu baraag nemeh function
    setCart([...cart, product]);  //cart state iig shinechleh function duudaj bna
    //cart state iin shine utga n cart dotor bgaa baraanuudiin array, shineer nemegdej bgaa product
    setOpenCart(true);  //cart drawer iig neeh
  };

  return (  //Component delgetsend yu haruulahaa zaana
    <div className="container">  //div gedeg elementtei, tedgeer element n container classtei
      <h1>Mini E-commerce</h1>

      {/* Toggle to show developer comments in the UI */}
      <button
        onClick={() => setShowNotes ? setShowNotes(false) : setShowNotes(true)}
        style={{ marginBottom: 12 }}
      >Show Comments</button>

      <CategoryFilter setCategory={setCategory} /> {/* CategoryFilter: passes setCategory prop from App */}
      <SortPrice setSort={setSort} /> {/* SortPrice: passes setSort prop from App */}

      <ProductList
        products={filtered}
        addToCart={addToCart}
      /> {/* ProductList: receives filtered products and addToCart handler */}

      <CartDrawer  //CartDrawer component iig ashiglaj bna
        cart={cart}  //cart prop iig cart gej ogj bna, ene n App.jsx file dotor bga state
        open={openCart}  //open prop iig openCart gej ogj bna, ene n App.jsx file dotor bga state
        close={() => setOpenCart(false)}  //close prop iig function ogj bna
      />
    </div>
  );
}

export default App;
